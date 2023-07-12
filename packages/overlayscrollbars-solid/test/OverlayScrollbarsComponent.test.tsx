import { describe, test, afterEach, expect, vitest, vi } from 'vitest';
import { createSignal, createEffect } from 'solid-js';
import { render, screen, cleanup, fireEvent } from 'solid-testing-library';
import userEvent from '@testing-library/user-event';
import { OverlayScrollbars } from 'overlayscrollbars';
import { OverlayScrollbarsComponent } from '~/overlayscrollbars-solid';
import type { OverlayScrollbarsComponentRef } from '~/overlayscrollbars-solid';

vi.useFakeTimers({
  toFake: [
    'requestAnimationFrame',
    'cancelAnimationFrame',
    'requestIdleCallback',
    'cancelIdleCallback',
  ],
});

const createTestComponent =
  (props: any = {}) =>
  () => {
    let ref: OverlayScrollbarsComponentRef | undefined;
    const [element, setElement]: any = createSignal(props.element || 'div');
    const [options, setOptions]: any = createSignal(props.options);
    const [events, setEvents]: any = createSignal(props.events);
    const [className, setClassName]: any = createSignal(props.className);
    const [style, setStyle]: any = createSignal(props.style);

    createEffect(() => {
      props?.getRef?.(ref);
    });

    return (
      <>
        <OverlayScrollbarsComponent
          element={element()}
          options={options()}
          events={events()}
          class={className()}
          style={style()}
          ref={(r) => (ref = r)}
        />
        <button
          // @ts-ignore
          on:osProps={(e: CustomEvent) => {
            const optionsChanged = Object.prototype.hasOwnProperty.call(e.detail, 'options');
            const eventsChanged = Object.prototype.hasOwnProperty.call(e.detail, 'events');
            const elementChanged = Object.prototype.hasOwnProperty.call(e.detail, 'element');
            const classChanged = Object.prototype.hasOwnProperty.call(e.detail, 'className');
            const styleChanged = Object.prototype.hasOwnProperty.call(e.detail, 'style');
            if (optionsChanged) {
              setOptions(e.detail.options);
            }
            if (eventsChanged) {
              setEvents(e.detail.events);
            }
            if (elementChanged) {
              setElement(e.detail.element);
            }
            if (classChanged) {
              setClassName(e.detail.className);
            }
            if (styleChanged) {
              setStyle(e.detail.style);
            }
          }}
        >
          props
        </button>
      </>
    );
  };

/**
 * rerender doesn't exist... so I am faking it with custom event...
 */
describe('OverlayScrollbarsComponent', () => {
  afterEach(() => cleanup());

  describe('correct rendering', () => {
    test('correct root element with instance', () => {
      const elementA = 'code';
      const elementB = 'span';
      let osInstance;
      const { container } = render(createTestComponent());

      expect(container).not.toBeEmptyDOMElement();
      expect(container.querySelector('div')).toBe(container.firstElementChild); // default is div

      expect(OverlayScrollbars.valid(osInstance)).toBe(false);
      osInstance = OverlayScrollbars(container.firstElementChild as HTMLElement);
      expect(osInstance).toBeDefined();
      expect(OverlayScrollbars.valid(osInstance)).toBe(true);

      fireEvent(
        screen.getByText('props'),
        new CustomEvent('osProps', {
          detail: { element: elementA },
        })
      );

      expect(container.querySelector(elementA)).toBe(container.firstElementChild);

      expect(OverlayScrollbars.valid(osInstance)).toBe(false); // prev instance is destroyed
      osInstance = OverlayScrollbars(container.firstElementChild as HTMLElement);
      expect(osInstance).toBeDefined();
      expect(OverlayScrollbars.valid(osInstance)).toBe(true);

      fireEvent(
        screen.getByText('props'),
        new CustomEvent('osProps', {
          detail: { element: elementB },
        })
      );

      expect(container.querySelector(elementB)).toBe(container.firstElementChild);

      expect(OverlayScrollbars.valid(osInstance)).toBe(false); // prev instance is destroyed
      osInstance = OverlayScrollbars(container.firstElementChild as HTMLElement);
      expect(osInstance).toBeDefined();
      expect(OverlayScrollbars.valid(osInstance)).toBe(true);
    });

    test('data-overlayscrollbars-initialize', async () => {
      const { container } = render(() => <OverlayScrollbarsComponent />);

      expect(container.querySelector('[data-overlayscrollbars-initialize]')).toBeTruthy();
    });

    test('children', () => {
      const { container } = render(() => (
        <OverlayScrollbarsComponent>
          hello <span>solid</span>
        </OverlayScrollbarsComponent>
      ));
      expect(screen.getByText(/hello/)).toBeInTheDocument();
      expect(screen.getByText(/solid/)).toBeInTheDocument();
      expect(screen.getByText(/solid/).parentElement).not.toBe(container.firstElementChild);
    });

    test('dynamic children', async () => {
      render(() => {
        const [elements, setElements] = createSignal(1);
        return (
          <>
            <OverlayScrollbarsComponent>
              {elements() === 0 ? 'empty' : null}
              {[...Array(elements()).keys()].map((i) => (
                <span>{i}</span>
              ))}
            </OverlayScrollbarsComponent>
            <button onClick={() => setElements((curr) => curr + 1)}>add</button>
            <button onClick={() => setElements((curr) => curr - 1)}>remove</button>
          </>
        );
      });

      const addBtn = screen.getByText('add');
      const removeBtn = screen.getByText('remove');
      const initialElement = screen.getByText('0');
      expect(initialElement).toBeInTheDocument();

      const initialElementParent = initialElement.parentElement;
      expect(initialElementParent).toBeInTheDocument();

      await userEvent.click(addBtn);
      expect((await screen.findByText('1')).parentElement).toBe(initialElementParent);

      await userEvent.click(removeBtn);
      await userEvent.click(removeBtn);
      expect(await screen.findByText('empty')).toBe(initialElementParent);
    });

    test('className', () => {
      const { container } = render(
        createTestComponent({
          className: 'overlay scrollbars',
        })
      );

      expect(container.firstElementChild).toHaveClass('overlay', 'scrollbars');

      fireEvent(
        screen.getByText('props'),
        new CustomEvent('osProps', {
          detail: { className: 'overlay scrollbars solid' },
        })
      );

      expect(container.firstElementChild).toHaveClass('overlay', 'scrollbars', 'solid');
    });

    test('style', () => {
      const { container } = render(
        createTestComponent({
          style: { width: '22px' },
        })
      );

      expect(container.firstElementChild).toHaveStyle({ width: '22px' });

      fireEvent(
        screen.getByText('props'),
        new CustomEvent('osProps', {
          detail: { style: { height: '33px' } },
        })
      );

      expect(container.firstElementChild).toHaveStyle({ height: '33px' });
    });
  });

  describe('deferred initialization', () => {
    test('basic defer', () => {
      const { container } = render(() => <OverlayScrollbarsComponent defer />);

      expect(OverlayScrollbars(container.firstElementChild! as HTMLElement)).toBeUndefined();

      vi.advanceTimersByTime(2000);

      expect(OverlayScrollbars(container.firstElementChild! as HTMLElement)).toBeDefined();
    });

    test('options defer', () => {
      const { container } = render(() => <OverlayScrollbarsComponent defer={{ timeout: 0 }} />);

      expect(OverlayScrollbars(container.firstElementChild! as HTMLElement)).toBeUndefined();

      vi.advanceTimersByTime(2000);

      expect(OverlayScrollbars(container.firstElementChild! as HTMLElement)).toBeDefined();
    });

    test('defer with unsupported Idle', () => {
      const original = window.requestIdleCallback;
      // @ts-ignore
      window.requestIdleCallback = undefined;

      const { container } = render(() => <OverlayScrollbarsComponent defer />);

      expect(OverlayScrollbars(container.firstElementChild! as HTMLElement)).toBeUndefined();

      vi.advanceTimersByTime(2000);

      expect(OverlayScrollbars(container.firstElementChild! as HTMLElement)).toBeDefined();

      window.requestIdleCallback = original;
    });
  });

  test('ref', () => {
    let osRef: OverlayScrollbarsComponentRef | undefined;
    const { container } = render(
      createTestComponent({
        getRef(ref: any) {
          osRef = ref;
        },
      })
    );

    expect(osRef).toBeTruthy();

    const { osInstance, getElement } = osRef!;
    expect(osInstance).toBeTypeOf('function');
    expect(getElement).toBeTypeOf('function');
    expect(OverlayScrollbars.valid(osInstance())).toBe(true);
    expect(getElement()).toBe(container.firstElementChild);
  });

  test('options', () => {
    let osRef: OverlayScrollbarsComponentRef | undefined;
    render(
      createTestComponent({
        options: { paddingAbsolute: true, overflow: { y: 'hidden' } },
        getRef(ref: any) {
          osRef = ref;
        },
      })
    );

    const instance = osRef!.osInstance()!;

    const opts = instance.options();
    expect(opts.paddingAbsolute).toBe(true);
    expect(opts.overflow.y).toBe('hidden');

    fireEvent(
      screen.getByText('props'),
      new CustomEvent('osProps', {
        detail: {
          options: { overflow: { x: 'hidden' } },
        },
      })
    );

    const newOpts = instance.options();
    expect(newOpts.paddingAbsolute).toBe(false); //switches back to default because its not specified in the new options
    expect(newOpts.overflow.x).toBe('hidden');
    expect(newOpts.overflow.y).toBe('scroll'); //switches back to default because its not specified in the new options

    // instance didn't change
    expect(instance).toBe(osRef!.osInstance());

    fireEvent(
      screen.getByText('props'),
      new CustomEvent('osProps', {
        detail: {
          element: 'span',
          options: { overflow: { x: 'hidden', y: 'hidden' } },
        },
      })
    );

    const newElementInstance = osRef!.osInstance()!;
    const newElementNewOpts = newElementInstance.options();
    expect(newElementInstance).not.toBe(instance);
    expect(newElementNewOpts.paddingAbsolute).toBe(false);
    expect(newElementNewOpts.overflow.x).toBe('hidden');
    expect(newElementNewOpts.overflow.y).toBe('hidden');

    // reset options with `undefined`, `null`, `false` or `{}`
    fireEvent(
      screen.getByText('props'),
      new CustomEvent('osProps', {
        detail: {
          options: undefined,
        },
      })
    );

    const clearedOpts = newElementInstance.options();
    expect(osRef!.osInstance()).toBe(newElementInstance);
    expect(clearedOpts.paddingAbsolute).toBe(false);
    expect(clearedOpts.overflow.x).toBe('scroll');
    expect(clearedOpts.overflow.y).toBe('scroll');
  });

  test('events', () => {
    const onUpdatedInitial = vitest.fn();
    const onUpdated = vitest.fn();
    let osRef: OverlayScrollbarsComponentRef | undefined;
    render(
      createTestComponent({
        events: { updated: onUpdatedInitial },
        getRef: (ref: any) => {
          osRef = ref;
        },
      })
    );

    const instance = osRef!.osInstance()!;

    expect(onUpdatedInitial).toHaveBeenCalledTimes(1);

    fireEvent(
      screen.getByText('props'),
      new CustomEvent('osProps', {
        detail: {
          events: { updated: onUpdated },
        },
      })
    );
    expect(onUpdated).not.toHaveBeenCalled();

    instance.update(true);
    expect(onUpdatedInitial).toHaveBeenCalledTimes(1);
    expect(onUpdated).toHaveBeenCalledTimes(1);

    fireEvent(
      screen.getByText('props'),
      new CustomEvent('osProps', {
        detail: {
          events: { updated: [onUpdated, onUpdatedInitial] },
        },
      })
    );

    instance.update(true);
    expect(onUpdatedInitial).toHaveBeenCalledTimes(2);
    expect(onUpdated).toHaveBeenCalledTimes(2);

    // unregister with `[]`, `null` or `undefined`
    fireEvent(
      screen.getByText('props'),
      new CustomEvent('osProps', {
        detail: {
          events: { updated: null },
        },
      })
    );

    instance.update(true);
    expect(onUpdatedInitial).toHaveBeenCalledTimes(2);
    expect(onUpdated).toHaveBeenCalledTimes(2);

    // instance didn't change
    expect(instance).toBe(osRef!.osInstance());

    fireEvent(
      screen.getByText('props'),
      new CustomEvent('osProps', {
        detail: { element: 'span', events: { updated: [onUpdated, onUpdatedInitial] } },
      })
    );

    const newElementInstance = osRef!.osInstance()!;
    expect(newElementInstance).not.toBe(instance);
    expect(onUpdatedInitial).toHaveBeenCalledTimes(3);
    expect(onUpdated).toHaveBeenCalledTimes(3);

    // reset events with `undefined`, `null`, `false` or `{}`
    fireEvent(
      screen.getByText('props'),
      new CustomEvent('osProps', {
        detail: { element: 'span', events: undefined },
      })
    );

    newElementInstance.update(true);
    expect(newElementInstance).toBe(osRef!.osInstance());
    expect(onUpdatedInitial).toHaveBeenCalledTimes(3);
    expect(onUpdated).toHaveBeenCalledTimes(3);
  });

  test('destroy', () => {
    let osRef: OverlayScrollbarsComponentRef | undefined;
    const { unmount } = render(
      createTestComponent({
        getRef(ref: any) {
          osRef = ref;
        },
      })
    );
    const { osInstance } = osRef!;

    expect(OverlayScrollbars.valid(osInstance())).toBe(true);

    unmount();

    expect(osInstance()).toBeDefined();
    expect(OverlayScrollbars.valid(osInstance())).toBe(false);
  });
});
