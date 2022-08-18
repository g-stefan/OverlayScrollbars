import path from 'path';
import fs from 'fs';
import { rollup } from 'rollup';
import { webpack } from 'webpack';
import { build } from 'esbuild';
import { terser } from 'rollup-plugin-terser';

import pkg from '../../package.json';
import rollupConfig from '../../rollup.config';

const cleanBundle = true;
const cleanFixture = true;
const expectedBundleDiff = 1800;

const normalizePath = (pathName) =>
  pathName ? pathName.split(path.sep).join(path.posix.sep) : pathName;

const fixturesDir = path.join(__dirname, '.fixtures');
const libraryFixturePath = normalizePath(path.join(fixturesDir, 'lib.js'));
const unshakedFixturePath = normalizePath(path.join(fixturesDir, 'unshaked.js'));
const shakedFixturePath = normalizePath(path.join(fixturesDir, 'shaked.js'));

const unshakedFixtureContent = `
  export * as os from '${libraryFixturePath}';
`;

const shakedFixtureContent = `
  export { OverlayScrollbars } from '${libraryFixturePath}';
`;

const bundleFunctions = {
  webpack: async (input, output) => {
    const outputPath = path.dirname(output);
    const outputfilename = path.basename(output);
    const compiler = webpack({
      mode: 'production',
      entry: input,
      output: {
        path: outputPath,
        filename: outputfilename,
        library: 'treeshaking',
      },
      optimization: {
        minimize: true,
      },
    });

    const result = await new Promise((resolve, reject) => {
      compiler.run((err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      });
    });

    return result.compilation.assetsInfo.get(outputfilename).size;
  },
  rollup: async (input, output) => {
    const config = {
      input,
      output: {
        format: 'iife',
        name: 'treeshaking',
        file: output,
        plugins: [terser()],
      },
    };
    const bundle = await rollup(config);
    await bundle.write(config.output);

    return fs.statSync(config.output.file).size;
  },
  esbuild: async (input, output) => {
    await build({
      entryPoints: [input],
      outfile: output,
      format: 'iife',
      globalName: 'treeshaking',
      bundle: true,
      minify: true,
      treeShaking: true,
    });

    return fs.statSync(output).size;
  },
};

const testBundler = (bundlerName) => async () => {
  const bundleFunction = bundleFunctions[bundlerName];
  const outputDir = path.join(__dirname, `.${bundlerName}`);
  const unshaked = await bundleFunction(unshakedFixturePath, path.join(outputDir, 'unshaked.js'));
  const shaked = await bundleFunction(shakedFixturePath, path.join(outputDir, 'shaked.js'));

  cleanBundle && fs.rmSync(outputDir, { recursive: true });

  console.info(`${bundlerName} size`, {
    unshaked,
    shaked,
    diff: unshaked - shaked,
  });

  expect(unshaked - shaked).toBeGreaterThan(expectedBundleDiff);
};

describe('tree shaking', () => {
  // build the fixture
  beforeAll(async () => {
    const { module } = pkg;
    const esmEntryFilename = path.basename(module);
    const config = rollupConfig.find((inputConfig) => {
      const { output } = inputConfig;
      if (output) {
        const outputArr = Array.isArray(output) ? output : [output];
        const outputConfig = outputArr.find(({ file }) => path.basename(file) === esmEntryFilename);
        if (outputConfig) {
          inputConfig.output = outputConfig;
          inputConfig.output.sourcemap = false;
          inputConfig.output.file = libraryFixturePath;
          inputConfig.plugins = inputConfig.plugins.filter((plugin) => plugin.name !== 'PROJECT');
          return true;
        }
      }
      return false;
    });

    const bundle = await rollup(config);
    await bundle.write(config.output);

    if (!fs.existsSync(fixturesDir)) {
      fs.mkdirSync(fixturesDir);
    }

    fs.writeFileSync(unshakedFixturePath, unshakedFixtureContent);
    fs.writeFileSync(shakedFixturePath, shakedFixtureContent);
  }, 60000 * 2);

  // clean the fixture
  afterAll(() => {
    cleanFixture && fs.rmSync(fixturesDir, { recursive: true });
  });

  test('webpack', testBundler('webpack'), 60000);

  test('rollup', testBundler('rollup'), 60000);

  test('esbuild', testBundler('esbuild'), 60000);
});