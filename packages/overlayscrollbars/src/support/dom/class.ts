import type { AttributeTarget } from './types';
import type { DomTokens } from './attribute';
import { each, from } from '../utils/array';
import { bind } from '../utils/function';
import { domTokenListAttr } from './attribute';

const createDomTokenListClass = (elm: AttributeTarget) => domTokenListAttr(elm, 'class');

/**
 * Check whether the given element has the given class name(s).
 * @param elm The element.
 * @param className The class name(s).
 */
export const hasClass = (elm: AttributeTarget, className: DomTokens): boolean =>
  createDomTokenListClass(elm)._has(className);

/**
 * Removes the given class name(s) from the given element.
 * @param elm The element.
 * @param className The class name(s) which shall be removed. (separated by spaces)
 */
export const removeClass = (elm: AttributeTarget, className: DomTokens): void => {
  createDomTokenListClass(elm)._remove(className);
};

/**
 * Adds the given class name(s) to the given element.
 * @param elm The element.
 * @param className The class name(s) which shall be added. (separated by spaces)
 * @returns A function which removes the added class name(s).
 */
export const addClass = (elm: AttributeTarget, className: DomTokens): (() => void) => {
  createDomTokenListClass(elm)._add(className);
  return bind(removeClass, elm, className);
};

/**
 * Takes two className strings, compares them and returns the difference as array.
 * @param classNameA ClassName A.
 * @param classNameB ClassName B.
 */
export const diffClass = (classNameA: string, classNameB: string) => {
  const set = new Set<string>(classNameA ? classNameA.split(' ') : []);

  each(classNameB ? classNameB.split(' ') : [], (className) => {
    set.has(className) ? set.delete(className) : set.add(className);
  });

  return from(set);
};
