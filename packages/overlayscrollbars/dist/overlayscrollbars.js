function createCache(options, update) {
  const { _initialValue, _equal, _alwaysUpdateValues } = options;
  let _value = _initialValue;
  let _previous;
  const cacheUpdateContextual = (newValue, force) => {
    const curr = _value;
    const newVal = newValue;
    const changed = force || (_equal ? !_equal(curr, newVal) : curr !== newVal);
    if (changed || _alwaysUpdateValues) {
      _value = newVal;
      _previous = curr;
    }
    return [_value, changed, _previous];
  };
  const cacheUpdateIsolated = (force) => cacheUpdateContextual(update(_value, _previous), force);
  const getCurrentCache = (force) => [
    _value,
    !!force,
    _previous
  ];
  return [update ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache];
}

const ElementNodeType = Node.ELEMENT_NODE;
const { toString, hasOwnProperty: hasOwnProperty$1 } = Object.prototype;
function isUndefined(obj) {
  return obj === void 0;
}
function isNull(obj) {
  return obj === null;
}
const type = (obj) => isUndefined(obj) || isNull(obj) ? `${obj}` : toString.call(obj).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
function isNumber(obj) {
  return typeof obj === "number";
}
function isString(obj) {
  return typeof obj === "string";
}
function isBoolean(obj) {
  return typeof obj === "boolean";
}
function isFunction(obj) {
  return typeof obj === "function";
}
function isArray(obj) {
  return Array.isArray(obj);
}
function isObject(obj) {
  return typeof obj === "object" && !isArray(obj) && !isNull(obj);
}
function isArrayLike(obj) {
  const length = !!obj && obj.length;
  const lengthCorrectFormat = isNumber(length) && length > -1 && length % 1 == 0;
  return isArray(obj) || !isFunction(obj) && lengthCorrectFormat ? length > 0 && isObject(obj) ? length - 1 in obj : true : false;
}
function isPlainObject(obj) {
  if (!obj || !isObject(obj) || type(obj) !== "object")
    return false;
  let key;
  const cstr = "constructor";
  const ctor = obj[cstr];
  const ctorProto = ctor && ctor.prototype;
  const hasOwnConstructor = hasOwnProperty$1.call(obj, cstr);
  const hasIsPrototypeOf = ctorProto && hasOwnProperty$1.call(ctorProto, "isPrototypeOf");
  if (ctor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }
  for (key in obj) {
  }
  return isUndefined(key) || hasOwnProperty$1.call(obj, key);
}
function isHTMLElement(obj) {
  const instanceofObj = window.HTMLElement;
  return obj ? instanceofObj ? obj instanceof instanceofObj : obj.nodeType === ElementNodeType : false;
}
function isElement(obj) {
  const instanceofObj = window.Element;
  return obj ? instanceofObj ? obj instanceof instanceofObj : obj.nodeType === ElementNodeType : false;
}

function each(source, callback) {
  if (isArrayLike(source)) {
    for (let i = 0; i < source.length; i++) {
      if (callback(source[i], i, source) === false) {
        break;
      }
    }
  } else if (source) {
    each(Object.keys(source), (key) => callback(source[key], key, source));
  }
  return source;
}
const indexOf = (arr, item, fromIndex) => arr.indexOf(item, fromIndex);
const push = (array, items, arrayIsSingleItem) => {
  !arrayIsSingleItem && !isString(items) && isArrayLike(items) ? Array.prototype.push.apply(array, items) : array.push(items);
  return array;
};
const from = (arr) => {
  if (Array.from && arr) {
    return Array.from(arr);
  }
  const result = [];
  if (arr instanceof Set) {
    arr.forEach((value) => {
      push(result, value);
    });
  } else {
    each(arr, (elm) => {
      push(result, elm);
    });
  }
  return result;
};
const isEmptyArray = (array) => !!array && array.length === 0;
const runEach = (arr, args) => {
  const runFn = (fn) => fn && fn.apply(void 0, args || []);
  if (arr instanceof Set) {
    arr.forEach(runFn);
  } else {
    each(arr, runFn);
  }
};

const hasOwnProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
const keys = (obj) => obj ? Object.keys(obj) : [];
function assignDeep(target, object1, object2, object3, object4, object5, object6) {
  const sources = [object1, object2, object3, object4, object5, object6];
  if ((typeof target !== "object" || isNull(target)) && !isFunction(target)) {
    target = {};
  }
  each(sources, (source) => {
    each(keys(source), (key) => {
      const copy = source[key];
      if (target === copy) {
        return true;
      }
      const copyIsArray = isArray(copy);
      if (copy && (isPlainObject(copy) || copyIsArray)) {
        const src = target[key];
        let clone = src;
        if (copyIsArray && !isArray(src)) {
          clone = [];
        } else if (!copyIsArray && !isPlainObject(src)) {
          clone = {};
        }
        target[key] = assignDeep(clone, copy);
      } else {
        target[key] = copy;
      }
    });
  });
  return target;
}
function isEmptyObject(obj) {
  for (const name in obj)
    return false;
  return true;
}

function getSetProp(topLeft, fallback, elm, value) {
  if (isUndefined(value)) {
    return elm ? elm[topLeft] : fallback;
  }
  elm && (elm[topLeft] = value);
}
function attr(elm, attrName, value) {
  if (isUndefined(value)) {
    return elm ? elm.getAttribute(attrName) : null;
  }
  elm && elm.setAttribute(attrName, value);
}
const attrClass = (elm, attrName, value, add) => {
  const currValues = attr(elm, attrName) || "";
  const currValuesSet = new Set(currValues.split(" "));
  currValuesSet[add ? "add" : "delete"](value);
  attr(elm, attrName, from(currValuesSet).join(" ").trim());
};
const hasAttrClass = (elm, attrName, value) => {
  const currValues = attr(elm, attrName) || "";
  const currValuesSet = new Set(currValues.split(" "));
  return currValuesSet.has(value);
};
const removeAttr = (elm, attrName) => {
  elm && elm.removeAttribute(attrName);
};
function scrollLeft(elm, value) {
  return getSetProp("scrollLeft", 0, elm, value);
}
function scrollTop(elm, value) {
  return getSetProp("scrollTop", 0, elm, value);
}

const elmPrototype = Element.prototype;
const find = (selector, elm) => {
  const arr = [];
  const rootElm = elm ? isElement(elm) ? elm : null : document;
  return rootElm ? push(arr, rootElm.querySelectorAll(selector)) : arr;
};
const findFirst = (selector, elm) => {
  const rootElm = elm ? isElement(elm) ? elm : null : document;
  return rootElm ? rootElm.querySelector(selector) : null;
};
const is = (elm, selector) => {
  if (isElement(elm)) {
    const fn = elmPrototype.matches || elmPrototype.msMatchesSelector;
    return fn.call(elm, selector);
  }
  return false;
};
const contents = (elm) => elm ? from(elm.childNodes) : [];
const parent = (elm) => elm ? elm.parentElement : null;
const closest = (elm, selector) => {
  if (isElement(elm)) {
    const closestFn = elmPrototype.closest;
    if (closestFn) {
      return closestFn.call(elm, selector);
    }
    do {
      if (is(elm, selector)) {
        return elm;
      }
      elm = parent(elm);
    } while (elm);
  }
  return null;
};
const liesBetween = (elm, highBoundarySelector, deepBoundarySelector) => {
  const closestHighBoundaryElm = elm && closest(elm, highBoundarySelector);
  const closestDeepBoundaryElm = elm && findFirst(deepBoundarySelector, closestHighBoundaryElm);
  return closestHighBoundaryElm && closestDeepBoundaryElm ? closestHighBoundaryElm === elm || closestDeepBoundaryElm === elm || closest(closest(elm, deepBoundarySelector), highBoundarySelector) !== closestHighBoundaryElm : false;
};

const before = (parentElm, preferredAnchor, insertedElms) => {
  if (insertedElms) {
    let anchor = preferredAnchor;
    let fragment;
    if (parentElm) {
      if (isArrayLike(insertedElms)) {
        fragment = document.createDocumentFragment();
        each(insertedElms, (insertedElm) => {
          if (insertedElm === anchor) {
            anchor = insertedElm.previousSibling;
          }
          fragment.appendChild(insertedElm);
        });
      } else {
        fragment = insertedElms;
      }
      if (preferredAnchor) {
        if (!anchor) {
          anchor = parentElm.firstChild;
        } else if (anchor !== preferredAnchor) {
          anchor = anchor.nextSibling;
        }
      }
      parentElm.insertBefore(fragment, anchor || null);
    }
  }
};
const appendChildren = (node, children) => {
  before(node, null, children);
};
const prependChildren = (node, children) => {
  before(node, node && node.firstChild, children);
};
const insertBefore = (node, insertedNodes) => {
  before(parent(node), node, insertedNodes);
};
const insertAfter = (node, insertedNodes) => {
  before(parent(node), node && node.nextSibling, insertedNodes);
};
const removeElements = (nodes) => {
  if (isArrayLike(nodes)) {
    each(from(nodes), (e) => removeElements(e));
  } else if (nodes) {
    const parentElm = parent(nodes);
    if (parentElm) {
      parentElm.removeChild(nodes);
    }
  }
};

const createDiv = (classNames) => {
  const div = document.createElement("div");
  if (classNames) {
    attr(div, "class", classNames);
  }
  return div;
};
const createDOM = (html) => {
  const createdDiv = createDiv();
  createdDiv.innerHTML = html.trim();
  return each(contents(createdDiv), (elm) => removeElements(elm));
};

const firstLetterToUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const getDummyStyle = () => createDiv().style;
const cssPrefixes = ["-webkit-", "-moz-", "-o-", "-ms-"];
const jsPrefixes = [
  "WebKit",
  "Moz",
  "O",
  "MS",
  "webkit",
  "moz",
  "o",
  "ms"
];
const jsCache = {};
const cssCache = {};
const cssProperty = (name) => {
  let result = cssCache[name];
  if (hasOwnProperty(cssCache, name)) {
    return result;
  }
  const uppercasedName = firstLetterToUpper(name);
  const elmStyle = getDummyStyle();
  each(cssPrefixes, (prefix) => {
    const prefixWithoutDashes = prefix.replace(/-/g, "");
    const resultPossibilities = [
      name,
      prefix + name,
      prefixWithoutDashes + uppercasedName,
      firstLetterToUpper(prefixWithoutDashes) + uppercasedName
    ];
    return !(result = resultPossibilities.find((resultPossibility) => elmStyle[resultPossibility] !== void 0));
  });
  return cssCache[name] = result || "";
};
const jsAPI = (name) => {
  let result = jsCache[name] || window[name];
  if (hasOwnProperty(jsCache, name)) {
    return result;
  }
  each(jsPrefixes, (prefix) => {
    result = result || window[prefix + firstLetterToUpper(name)];
    return !result;
  });
  jsCache[name] = result;
  return result;
};

const MutationObserverConstructor = jsAPI("MutationObserver");
const IntersectionObserverConstructor = jsAPI("IntersectionObserver");
const ResizeObserverConstructor = jsAPI("ResizeObserver");
const cAF = jsAPI("cancelAnimationFrame");
const rAF = jsAPI("requestAnimationFrame");

const rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
const classListAction = (elm, className, action) => {
  let clazz;
  let i = 0;
  let result = false;
  if (elm && className && isString(className)) {
    const classes = className.match(rnothtmlwhite) || [];
    result = classes.length > 0;
    while (clazz = classes[i++]) {
      result = !!action(elm.classList, clazz) && result;
    }
  }
  return result;
};
const hasClass = (elm, className) => classListAction(elm, className, (classList, clazz) => classList.contains(clazz));
const removeClass = (elm, className) => {
  classListAction(elm, className, (classList, clazz) => classList.remove(clazz));
};
const addClass = (elm, className) => {
  classListAction(elm, className, (classList, clazz) => classList.add(clazz));
  return removeClass.bind(0, elm, className);
};

const equal = (a, b, props, propMutation) => {
  if (a && b) {
    let result = true;
    each(props, (prop) => {
      const compareA = propMutation ? propMutation(a[prop]) : a[prop];
      const compareB = propMutation ? propMutation(b[prop]) : b[prop];
      if (compareA !== compareB) {
        result = false;
      }
    });
    return result;
  }
  return false;
};
const equalWH = (a, b) => equal(a, b, ["w", "h"]);
const equalXY = (a, b) => equal(a, b, ["x", "y"]);
const equalTRBL = (a, b) => equal(a, b, ["t", "r", "b", "l"]);
const equalBCRWH = (a, b, round) => equal(a, b, ["width", "height"], round && ((value) => Math.round(value)));

const clearTimeouts = (id) => {
  id && window.clearTimeout(id);
  id && cAF(id);
};
const noop = () => {
};
const debounce = (functionToDebounce, options) => {
  let timeoutId;
  let maxTimeoutId;
  let prevArguments;
  let latestArguments;
  const { _timeout, _maxDelay, _mergeParams } = options || {};
  const setT = window.setTimeout;
  const invokeFunctionToDebounce = function(args) {
    clearTimeouts(timeoutId);
    clearTimeouts(maxTimeoutId);
    maxTimeoutId = timeoutId = prevArguments = void 0;
    functionToDebounce.apply(this, args);
  };
  const mergeParms = (curr) => _mergeParams && prevArguments ? _mergeParams(prevArguments, curr) : curr;
  const flush = () => {
    if (timeoutId) {
      invokeFunctionToDebounce(mergeParms(latestArguments) || latestArguments);
    }
  };
  const debouncedFn = function() {
    const args = from(arguments);
    const finalTimeout = isFunction(_timeout) ? _timeout() : _timeout;
    const hasTimeout = isNumber(finalTimeout) && finalTimeout >= 0;
    if (hasTimeout) {
      const finalMaxWait = isFunction(_maxDelay) ? _maxDelay() : _maxDelay;
      const hasMaxWait = isNumber(finalMaxWait) && finalMaxWait >= 0;
      const setTimeoutFn = finalTimeout > 0 ? setT : rAF;
      const mergeParamsResult = mergeParms(args);
      const invokedArgs = mergeParamsResult || args;
      const boundInvoke = invokeFunctionToDebounce.bind(0, invokedArgs);
      clearTimeouts(timeoutId);
      timeoutId = setTimeoutFn(boundInvoke, finalTimeout);
      if (hasMaxWait && !maxTimeoutId) {
        maxTimeoutId = setT(flush, finalMaxWait);
      }
      prevArguments = latestArguments = invokedArgs;
    } else {
      invokeFunctionToDebounce(args);
    }
  };
  debouncedFn._flush = flush;
  return debouncedFn;
};

const cssNumber = {
  opacity: 1,
  zindex: 1
};
const parseToZeroOrNumber = (value, toFloat) => {
  const num = toFloat ? parseFloat(value) : parseInt(value, 10);
  return Number.isNaN(num) ? 0 : num;
};
const adaptCSSVal = (prop, val) => !cssNumber[prop.toLowerCase()] && isNumber(val) ? `${val}px` : val;
const getCSSVal = (elm, computedStyle, prop) => computedStyle != null ? computedStyle[prop] || computedStyle.getPropertyValue(prop) : elm.style[prop];
const setCSSVal = (elm, prop, val) => {
  try {
    if (elm) {
      const { style: elmStyle } = elm;
      if (!isUndefined(elmStyle[prop])) {
        elmStyle[prop] = adaptCSSVal(prop, val);
      } else {
        elmStyle.setProperty(prop, val);
      }
    }
  } catch (e) {
  }
};
function style(elm, styles) {
  const getSingleStyle = isString(styles);
  const getStyles = isArray(styles) || getSingleStyle;
  if (getStyles) {
    let getStylesResult = getSingleStyle ? "" : {};
    if (elm) {
      const computedStyle = window.getComputedStyle(elm, null);
      getStylesResult = getSingleStyle ? getCSSVal(elm, computedStyle, styles) : styles.reduce((result, key) => {
        result[key] = getCSSVal(elm, computedStyle, key);
        return result;
      }, getStylesResult);
    }
    return getStylesResult;
  }
  each(keys(styles), (key) => setCSSVal(elm, key, styles[key]));
}
const topRightBottomLeft = (elm, propertyPrefix, propertySuffix) => {
  const finalPrefix = propertyPrefix ? `${propertyPrefix}-` : "";
  const finalSuffix = propertySuffix ? `-${propertySuffix}` : "";
  const top = `${finalPrefix}top${finalSuffix}`;
  const right = `${finalPrefix}right${finalSuffix}`;
  const bottom = `${finalPrefix}bottom${finalSuffix}`;
  const left = `${finalPrefix}left${finalSuffix}`;
  const result = style(elm, [top, right, bottom, left]);
  return {
    t: parseToZeroOrNumber(result[top]),
    r: parseToZeroOrNumber(result[right]),
    b: parseToZeroOrNumber(result[bottom]),
    l: parseToZeroOrNumber(result[left])
  };
};

const zeroObj$1 = {
  w: 0,
  h: 0
};
const windowSize = () => ({
  w: window.innerWidth,
  h: window.innerHeight
});
const offsetSize = (elm) => elm ? {
  w: elm.offsetWidth,
  h: elm.offsetHeight
} : zeroObj$1;
const clientSize = (elm) => elm ? {
  w: elm.clientWidth,
  h: elm.clientHeight
} : zeroObj$1;
const scrollSize = (elm) => elm ? {
  w: elm.scrollWidth,
  h: elm.scrollHeight
} : zeroObj$1;
const fractionalSize = (elm) => {
  const cssHeight = parseFloat(style(elm, "height")) || 0;
  const cssWidth = parseFloat(style(elm, "height")) || 0;
  return {
    w: cssWidth - Math.round(cssWidth),
    h: cssHeight - Math.round(cssHeight)
  };
};
const getBoundingClientRect = (elm) => elm.getBoundingClientRect();

let passiveEventsSupport;
const supportPassiveEvents = () => {
  if (isUndefined(passiveEventsSupport)) {
    passiveEventsSupport = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: function() {
          passiveEventsSupport = true;
        }
      }));
    } catch (e) {
    }
  }
  return passiveEventsSupport;
};
const splitEventNames = (eventNames) => eventNames.split(" ");
const off = (target, eventNames, listener, capture) => {
  each(splitEventNames(eventNames), (eventName) => {
    target.removeEventListener(eventName, listener, capture);
  });
};
const on = (target, eventNames, listener, options) => {
  const doSupportPassiveEvents = supportPassiveEvents();
  const passive = doSupportPassiveEvents && options && options._passive || false;
  const capture = options && options._capture || false;
  const once = options && options._once || false;
  const offListeners = [];
  const nativeOptions = doSupportPassiveEvents ? {
    passive,
    capture
  } : capture;
  each(splitEventNames(eventNames), (eventName) => {
    const finalListener = once ? (evt) => {
      target.removeEventListener(eventName, finalListener, capture);
      listener && listener(evt);
    } : listener;
    push(offListeners, off.bind(null, target, eventName, finalListener, capture));
    target.addEventListener(eventName, finalListener, nativeOptions);
  });
  return runEach.bind(0, offListeners);
};
const stopPropagation = (evt) => evt.stopPropagation();
const preventDefault = (evt) => evt.preventDefault();
const stopAndPrevent = (evt) => stopPropagation(evt) || preventDefault(evt);

const zeroObj = {
  x: 0,
  y: 0
};
const absoluteCoordinates = (elm) => {
  const rect = elm ? getBoundingClientRect(elm) : 0;
  return rect ? {
    x: rect.left + window.pageYOffset,
    y: rect.top + window.pageXOffset
  } : zeroObj;
};

const manageListener = (callback, listener) => {
  each(isArray(listener) ? listener : [listener], callback);
};
const createEventListenerHub = (initialEventListeners) => {
  const events = /* @__PURE__ */ new Map();
  const removeEvent = (name, listener) => {
    if (name) {
      const eventSet = events.get(name);
      manageListener((currListener) => {
        if (eventSet) {
          eventSet[currListener ? "delete" : "clear"](currListener);
        }
      }, listener);
    } else {
      events.forEach((eventSet) => {
        eventSet.clear();
      });
      events.clear();
    }
  };
  const addEvent = (name, listener) => {
    const eventSet = events.get(name) || /* @__PURE__ */ new Set();
    events.set(name, eventSet);
    manageListener((currListener) => {
      currListener && eventSet.add(currListener);
    }, listener);
    return removeEvent.bind(0, name, listener);
  };
  const triggerEvent = (name, args) => {
    const eventSet = events.get(name);
    each(from(eventSet), (event) => {
      if (args) {
        event(args);
      } else {
        event();
      }
    });
  };
  const initialListenerKeys = keys(initialEventListeners);
  each(initialListenerKeys, (key) => {
    addEvent(key, initialEventListeners[key]);
  });
  return [addEvent, removeEvent, triggerEvent];
};

const getPropByPath = (obj, path) => obj ? path.split(".").reduce((o, prop) => o && hasOwnProperty(o, prop) ? o[prop] : void 0, obj) : void 0;
const createOptionCheck = (options, changedOptions, force) => (path) => [getPropByPath(options, path), force || getPropByPath(changedOptions, path) !== void 0];
const createState = (initialState) => {
  let state = initialState;
  return [
    () => state,
    (newState) => {
      state = assignDeep({}, state, newState);
    }
  ];
};

const classNameEnvironment = "os-environment";
const classNameEnvironmentFlexboxGlue = `${classNameEnvironment}-flexbox-glue`;
const classNameEnvironmentFlexboxGlueMax = `${classNameEnvironmentFlexboxGlue}-max`;
const dataAttributeHost = "data-overlayscrollbars";
const dataAttributeHostOverflowX = `${dataAttributeHost}-overflow-x`;
const dataAttributeHostOverflowY = `${dataAttributeHost}-overflow-y`;
const dataValueHostOverflowVisible = "overflowVisible";
const dataValueHostViewportScrollbarStyling = "viewportStyled";
const classNamePadding = "os-padding";
const classNameViewport = "os-viewport";
const classNameViewportArrange = `${classNameViewport}-arrange`;
const classNameContent = "os-content";
const classNameViewportScrollbarStyling = `${classNameViewport}-scrollbar-styled`;
const classNameOverflowVisible = `os-overflow-visible`;
const classNameSizeObserver = "os-size-observer";
const classNameSizeObserverAppear = `${classNameSizeObserver}-appear`;
const classNameSizeObserverListener = `${classNameSizeObserver}-listener`;
const classNameSizeObserverListenerScroll = `${classNameSizeObserverListener}-scroll`;
const classNameSizeObserverListenerItem = `${classNameSizeObserverListener}-item`;
const classNameSizeObserverListenerItemFinal = `${classNameSizeObserverListenerItem}-final`;
const classNameTrinsicObserver = "os-trinsic-observer";
const classNameScrollbar = "os-scrollbar";
const classNameScrollbarHorizontal = `${classNameScrollbar}-horizontal`;
const classNameScrollbarVertical = `${classNameScrollbar}-vertical`;
const classNameScrollbarTrack = "os-scrollbar-track";
const classNameScrollbarHandle = "os-scrollbar-handle";

const stringify = (value) => JSON.stringify(value, (_, val) => {
  if (isFunction(val)) {
    throw new Error();
  }
  return val;
});
const defaultOptions = {
  paddingAbsolute: false,
  updating: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  nativeScrollbarsOverlaid: {
    show: false,
    initialize: false
  },
  scrollbars: {
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 800,
    dragScroll: true,
    clickScroll: false,
    touch: true
  }
};
const getOptionsDiff = (currOptions, newOptions) => {
  const diff = {};
  const optionsKeys = keys(newOptions).concat(keys(currOptions));
  each(optionsKeys, (optionKey) => {
    const currOptionValue = currOptions[optionKey];
    const newOptionValue = newOptions[optionKey];
    if (isObject(currOptionValue) && isObject(newOptionValue)) {
      assignDeep(diff[optionKey] = {}, getOptionsDiff(currOptionValue, newOptionValue));
    } else if (hasOwnProperty(newOptions, optionKey) && newOptionValue !== currOptionValue) {
      let isDiff = true;
      if (isArray(currOptionValue) || isArray(newOptionValue)) {
        try {
          if (stringify(currOptionValue) === stringify(newOptionValue)) {
            isDiff = false;
          }
        } catch (e) {
        }
      }
      if (isDiff) {
        diff[optionKey] = newOptionValue;
      }
    }
  });
  return diff;
};

let environmentInstance;
const { abs, round } = Math;
const diffBiggerThanOne = (valOne, valTwo) => {
  const absValOne = abs(valOne);
  const absValTwo = abs(valTwo);
  return !(absValOne === absValTwo || absValOne + 1 === absValTwo || absValOne - 1 === absValTwo);
};
const getNativeScrollbarSize = (body, measureElm, measureElmChild) => {
  appendChildren(body, measureElm);
  const cSize = clientSize(measureElm);
  const oSize = offsetSize(measureElm);
  const fSize = fractionalSize(measureElmChild);
  return {
    x: oSize.h - cSize.h + fSize.h,
    y: oSize.w - cSize.w + fSize.w
  };
};
const getNativeScrollbarStyling = (testElm) => {
  let result = false;
  const revertClass = addClass(testElm, classNameViewportScrollbarStyling);
  try {
    result = style(testElm, cssProperty("scrollbar-width")) === "none" || window.getComputedStyle(testElm, "::-webkit-scrollbar").getPropertyValue("display") === "none";
  } catch (ex) {
  }
  revertClass();
  return result;
};
const getRtlScrollBehavior = (parentElm, childElm) => {
  const strHidden = "hidden";
  style(parentElm, { overflowX: strHidden, overflowY: strHidden, direction: "rtl" });
  scrollLeft(parentElm, 0);
  const parentOffset = absoluteCoordinates(parentElm);
  const childOffset = absoluteCoordinates(childElm);
  scrollLeft(parentElm, -999);
  const childOffsetAfterScroll = absoluteCoordinates(childElm);
  return {
    i: parentOffset.x === childOffset.x,
    n: childOffset.x !== childOffsetAfterScroll.x
  };
};
const getFlexboxGlue = (parentElm, childElm) => {
  const revertFbxGlue = addClass(parentElm, classNameEnvironmentFlexboxGlue);
  const minOffsetsizeParent = getBoundingClientRect(parentElm);
  const minOffsetsize = getBoundingClientRect(childElm);
  const supportsMin = equalBCRWH(minOffsetsize, minOffsetsizeParent, true);
  const revertFbxGlueMax = addClass(parentElm, classNameEnvironmentFlexboxGlueMax);
  const maxOffsetsizeParent = getBoundingClientRect(parentElm);
  const maxOffsetsize = getBoundingClientRect(childElm);
  const supportsMax = equalBCRWH(maxOffsetsize, maxOffsetsizeParent, true);
  revertFbxGlue();
  revertFbxGlueMax();
  return supportsMin && supportsMax;
};
const getWindowDPR = () => {
  const dDPI = window.screen.deviceXDPI || 0;
  const sDPI = window.screen.logicalXDPI || 1;
  return window.devicePixelRatio || dDPI / sDPI;
};
const getDefaultInitializationStrategy = (nativeScrollbarStyling) => ({
  _host: null,
  _viewport: null,
  _padding: !nativeScrollbarStyling,
  _content: false,
  _scrollbarsSlot: null
});
const createEnvironment = () => {
  const { body } = document;
  const envDOM = createDOM(`<div class="${classNameEnvironment}"><div></div></div>`);
  const envElm = envDOM[0];
  const envChildElm = envElm.firstChild;
  const [addEvent, , triggerEvent] = createEventListenerHub();
  const [updateNativeScrollbarSizeCache, getNativeScrollbarSizeCache] = createCache({
    _initialValue: getNativeScrollbarSize(body, envElm, envChildElm),
    _equal: equalXY
  });
  const [nativeScrollbarSize] = getNativeScrollbarSizeCache();
  const nativeScrollbarStyling = getNativeScrollbarStyling(envElm);
  const nativeScrollbarIsOverlaid = {
    x: nativeScrollbarSize.x === 0,
    y: nativeScrollbarSize.y === 0
  };
  const initializationStrategy = getDefaultInitializationStrategy(nativeScrollbarStyling);
  const defaultDefaultOptions = assignDeep({}, defaultOptions);
  const env = {
    _nativeScrollbarSize: nativeScrollbarSize,
    _nativeScrollbarIsOverlaid: nativeScrollbarIsOverlaid,
    _nativeScrollbarStyling: nativeScrollbarStyling,
    _cssCustomProperties: style(envElm, "zIndex") === "-1",
    _rtlScrollBehavior: getRtlScrollBehavior(envElm, envChildElm),
    _flexboxGlue: getFlexboxGlue(envElm, envChildElm),
    _addListener: (listener) => addEvent("_", listener),
    _getInitializationStrategy: assignDeep.bind(0, {}, initializationStrategy),
    _setInitializationStrategy(newInitializationStrategy) {
      assignDeep(initializationStrategy, newInitializationStrategy);
    },
    _getDefaultOptions: assignDeep.bind(0, {}, defaultDefaultOptions),
    _setDefaultOptions(newDefaultOptions) {
      assignDeep(defaultDefaultOptions, newDefaultOptions);
    },
    _defaultInitializationStrategy: assignDeep({}, initializationStrategy),
    _defaultDefaultOptions: assignDeep({}, defaultDefaultOptions)
  };
  removeAttr(envElm, "style");
  removeElements(envElm);
  if (!nativeScrollbarStyling && (!nativeScrollbarIsOverlaid.x || !nativeScrollbarIsOverlaid.y)) {
    let size = windowSize();
    let dpr = getWindowDPR();
    window.addEventListener("resize", () => {
      const sizeNew = windowSize();
      const deltaSize = {
        w: sizeNew.w - size.w,
        h: sizeNew.h - size.h
      };
      if (deltaSize.w === 0 && deltaSize.h === 0)
        return;
      const deltaAbsSize = {
        w: abs(deltaSize.w),
        h: abs(deltaSize.h)
      };
      const deltaAbsRatio = {
        w: abs(round(sizeNew.w / (size.w / 100))),
        h: abs(round(sizeNew.h / (size.h / 100)))
      };
      const dprNew = getWindowDPR();
      const deltaIsBigger = deltaAbsSize.w > 2 && deltaAbsSize.h > 2;
      const difference = !diffBiggerThanOne(deltaAbsRatio.w, deltaAbsRatio.h);
      const dprChanged = dprNew !== dpr && dpr > 0;
      const isZoom = deltaIsBigger && difference && dprChanged;
      if (isZoom) {
        const [scrollbarSize, scrollbarSizeChanged] = updateNativeScrollbarSizeCache(getNativeScrollbarSize(body, envElm, envChildElm));
        assignDeep(environmentInstance._nativeScrollbarSize, scrollbarSize);
        removeElements(envElm);
        if (scrollbarSizeChanged) {
          triggerEvent("_");
        }
      }
      size = sizeNew;
      dpr = dprNew;
    });
  }
  return env;
};
const getEnvironment = () => {
  if (!environmentInstance) {
    environmentInstance = createEnvironment();
  }
  return environmentInstance;
};

let contentArrangeCounter = 0;
const unwrap = (elm) => {
  appendChildren(parent(elm), contents(elm));
  removeElements(elm);
};
const createUniqueViewportArrangeElement = () => {
  const { _nativeScrollbarStyling, _nativeScrollbarIsOverlaid, _cssCustomProperties } = getEnvironment();
  const create = !_cssCustomProperties && !_nativeScrollbarStyling && (_nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y);
  const result = create ? document.createElement("style") : false;
  if (result) {
    attr(result, "id", `${classNameViewportArrange}-${contentArrangeCounter}`);
    contentArrangeCounter++;
  }
  return result;
};
const staticCreationFromStrategy = (target, initializationValue, strategy) => {
  const result = initializationValue || (isFunction(strategy) ? strategy(target) : strategy);
  return result || createDiv();
};
const dynamicCreationFromStrategy = (target, initializationValue, strategy) => {
  const takeInitializationValue = isBoolean(initializationValue) || initializationValue;
  const result = takeInitializationValue ? initializationValue : isFunction(strategy) ? strategy(target) : strategy;
  return result === true ? createDiv() : result;
};
const addDataAttrHost = (elm, value) => {
  attr(elm, dataAttributeHost, value || "");
  return removeAttr.bind(0, elm, dataAttributeHost);
};
const createStructureSetupElements = (target) => {
  const { _getInitializationStrategy, _nativeScrollbarStyling } = getEnvironment();
  const {
    _host: hostInitializationStrategy,
    _viewport: viewportInitializationStrategy,
    _padding: paddingInitializationStrategy,
    _content: contentInitializationStrategy
  } = _getInitializationStrategy();
  const targetIsElm = isHTMLElement(target);
  const targetStructureInitialization = target;
  const targetElement = targetIsElm ? target : targetStructureInitialization.target;
  const isTextarea = is(targetElement, "textarea");
  const isBody = !isTextarea && is(targetElement, "body");
  const ownerDocument = targetElement.ownerDocument;
  const bodyElm = ownerDocument.body;
  const wnd = ownerDocument.defaultView;
  const singleElmSupport = !!ResizeObserverConstructor && _nativeScrollbarStyling;
  const potentialViewportElement = staticCreationFromStrategy(targetElement, targetStructureInitialization.viewport, viewportInitializationStrategy);
  const potentiallySingleElm = potentialViewportElement === targetElement;
  const viewportIsTarget = singleElmSupport && potentiallySingleElm;
  const viewportElement = potentiallySingleElm && !viewportIsTarget ? staticCreationFromStrategy(targetElement) : potentialViewportElement;
  const evaluatedTargetObj = {
    _target: targetElement,
    _host: isTextarea ? staticCreationFromStrategy(targetElement, targetStructureInitialization.host, hostInitializationStrategy) : targetElement,
    _viewport: viewportElement,
    _padding: dynamicCreationFromStrategy(targetElement, targetStructureInitialization.padding, paddingInitializationStrategy),
    _content: dynamicCreationFromStrategy(targetElement, targetStructureInitialization.content, contentInitializationStrategy),
    _viewportArrange: !viewportIsTarget && createUniqueViewportArrangeElement(),
    _windowElm: wnd,
    _documentElm: ownerDocument,
    _htmlElm: parent(bodyElm),
    _bodyElm: bodyElm,
    _isTextarea: isTextarea,
    _isBody: isBody,
    _targetIsElm: targetIsElm,
    _viewportIsTarget: viewportIsTarget,
    _viewportHasClass: (className, attributeClassName) => viewportIsTarget ? hasAttrClass(viewportElement, dataAttributeHost, attributeClassName) : hasClass(viewportElement, className),
    _viewportAddRemoveClass: (className, attributeClassName, add) => viewportIsTarget ? attrClass(viewportElement, dataAttributeHost, attributeClassName, add) : (add ? addClass : removeClass)(viewportElement, className)
  };
  const generatedElements = keys(evaluatedTargetObj).reduce((arr, key) => {
    const value = evaluatedTargetObj[key];
    return push(arr, value && !parent(value) ? value : false);
  }, []);
  const elementIsGenerated = (elm) => elm ? indexOf(generatedElements, elm) > -1 : null;
  const { _target, _host, _padding, _viewport, _content, _viewportArrange } = evaluatedTargetObj;
  const destroyFns = [];
  const isTextareaHostGenerated = isTextarea && elementIsGenerated(_host);
  const targetContents = isTextarea ? _target : contents([_content, _viewport, _padding, _host, _target].find((elm) => elementIsGenerated(elm) === false));
  const contentSlot = _content || _viewport;
  const removeHostDataAttr = addDataAttrHost(_host, viewportIsTarget ? "viewport" : "host");
  const removePaddingClass = addClass(_padding, classNamePadding);
  const removeViewportClass = addClass(_viewport, !viewportIsTarget && classNameViewport);
  const removeContentClass = addClass(_content, classNameContent);
  if (isTextareaHostGenerated) {
    insertAfter(_target, _host);
    push(destroyFns, () => {
      insertAfter(_host, _target);
      removeElements(_host);
    });
  }
  appendChildren(contentSlot, targetContents);
  appendChildren(_host, _padding);
  appendChildren(_padding || _host, !viewportIsTarget && _viewport);
  appendChildren(_viewport, _content);
  push(destroyFns, () => {
    removeHostDataAttr();
    removeAttr(_viewport, dataAttributeHostOverflowX);
    removeAttr(_viewport, dataAttributeHostOverflowY);
    if (elementIsGenerated(_content)) {
      unwrap(_content);
    }
    if (elementIsGenerated(_viewport)) {
      unwrap(_viewport);
    }
    if (elementIsGenerated(_padding)) {
      unwrap(_padding);
    }
    removePaddingClass();
    removeViewportClass();
    removeContentClass();
  });
  if (_nativeScrollbarStyling && !viewportIsTarget) {
    push(destroyFns, removeClass.bind(0, _viewport, classNameViewportScrollbarStyling));
  }
  if (_viewportArrange) {
    insertBefore(_viewport, _viewportArrange);
    push(destroyFns, removeElements.bind(0, _viewportArrange));
  }
  return [evaluatedTargetObj, runEach.bind(0, destroyFns)];
};

const createTrinsicUpdate = (structureSetupElements, state) => {
  const { _content } = structureSetupElements;
  const [getState] = state;
  return (updateHints) => {
    const { _flexboxGlue } = getEnvironment();
    const { _heightIntrinsic } = getState();
    const { _heightIntrinsicChanged } = updateHints;
    const heightIntrinsicChanged = (_content || !_flexboxGlue) && _heightIntrinsicChanged;
    if (heightIntrinsicChanged) {
      style(_content, {
        height: _heightIntrinsic ? "" : "100%"
      });
    }
    return {
      _sizeChanged: heightIntrinsicChanged,
      _contentMutation: heightIntrinsicChanged
    };
  };
};

const createPaddingUpdate = (structureSetupElements, state) => {
  const [getState, setState] = state;
  const { _host, _padding, _viewport, _viewportIsTarget: _isSingleElm } = structureSetupElements;
  const [updatePaddingCache, currentPaddingCache] = createCache({
    _equal: equalTRBL,
    _initialValue: topRightBottomLeft()
  }, topRightBottomLeft.bind(0, _host, "padding", ""));
  return (updateHints, checkOption, force) => {
    let [padding, paddingChanged] = currentPaddingCache(force);
    const { _nativeScrollbarStyling, _flexboxGlue } = getEnvironment();
    const { _directionIsRTL } = getState();
    const { _sizeChanged, _contentMutation, _directionChanged } = updateHints;
    const [paddingAbsolute, paddingAbsoluteChanged] = checkOption("paddingAbsolute");
    const contentMutation = !_flexboxGlue && _contentMutation;
    if (_sizeChanged || paddingChanged || contentMutation) {
      [padding, paddingChanged] = updatePaddingCache(force);
    }
    const paddingStyleChanged = !_isSingleElm && (paddingAbsoluteChanged || _directionChanged || paddingChanged);
    if (paddingStyleChanged) {
      const paddingRelative = !paddingAbsolute || !_padding && !_nativeScrollbarStyling;
      const paddingHorizontal = padding.r + padding.l;
      const paddingVertical = padding.t + padding.b;
      const paddingStyle = {
        marginRight: paddingRelative && !_directionIsRTL ? -paddingHorizontal : 0,
        marginBottom: paddingRelative ? -paddingVertical : 0,
        marginLeft: paddingRelative && _directionIsRTL ? -paddingHorizontal : 0,
        top: paddingRelative ? -padding.t : 0,
        right: paddingRelative ? _directionIsRTL ? -padding.r : "auto" : 0,
        left: paddingRelative ? _directionIsRTL ? "auto" : -padding.l : 0,
        width: paddingRelative ? `calc(100% + ${paddingHorizontal}px)` : ""
      };
      const viewportStyle = {
        paddingTop: paddingRelative ? padding.t : 0,
        paddingRight: paddingRelative ? padding.r : 0,
        paddingBottom: paddingRelative ? padding.b : 0,
        paddingLeft: paddingRelative ? padding.l : 0
      };
      style(_padding || _viewport, paddingStyle);
      style(_viewport, viewportStyle);
      setState({
        _padding: padding,
        _paddingAbsolute: !paddingRelative,
        _viewportPaddingStyle: _padding ? viewportStyle : assignDeep({}, paddingStyle, viewportStyle)
      });
    }
    return {
      _paddingStyleChanged: paddingStyleChanged
    };
  };
};

const { max } = Math;
const strVisible = "visible";
const strHidden = "hidden";
const overlaidScrollbarsHideOffset = 42;
const whCacheOptions = {
  _equal: equalWH,
  _initialValue: { w: 0, h: 0 }
};
const xyCacheOptions = {
  _equal: equalXY,
  _initialValue: { x: strHidden, y: strHidden }
};
const getOverflowAmount = (viewportScrollSize, viewportClientSize, sizeFraction) => {
  const tollerance = window.devicePixelRatio % 1 !== 0 ? 1 : 0;
  const amount = {
    w: max(0, viewportScrollSize.w - viewportClientSize.w - max(0, sizeFraction.w)),
    h: max(0, viewportScrollSize.h - viewportClientSize.h - max(0, sizeFraction.h))
  };
  return {
    w: amount.w > tollerance ? amount.w : 0,
    h: amount.h > tollerance ? amount.h : 0
  };
};
const conditionalClass = (elm, classNames, add) => add ? addClass(elm, classNames) : removeClass(elm, classNames);
const overflowIsVisible = (overflowBehavior) => overflowBehavior.indexOf(strVisible) === 0;
const createOverflowUpdate = (structureSetupElements, state) => {
  const [getState, setState] = state;
  const {
    _host,
    _padding,
    _viewport,
    _viewportArrange,
    _viewportIsTarget,
    _viewportAddRemoveClass
  } = structureSetupElements;
  const {
    _nativeScrollbarSize,
    _flexboxGlue,
    _nativeScrollbarStyling,
    _nativeScrollbarIsOverlaid
  } = getEnvironment();
  const doViewportArrange = !_viewportIsTarget && !_nativeScrollbarStyling && (_nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y);
  const [updateSizeFraction, getCurrentSizeFraction] = createCache(whCacheOptions, fractionalSize.bind(0, _viewport));
  const [updateViewportScrollSizeCache, getCurrentViewportScrollSizeCache] = createCache(whCacheOptions, scrollSize.bind(0, _viewport));
  const [updateOverflowAmountCache, getCurrentOverflowAmountCache] = createCache(whCacheOptions);
  const [updateOverflowStyleCache] = createCache(xyCacheOptions);
  const fixFlexboxGlue = (viewportOverflowState, heightIntrinsic) => {
    style(_viewport, {
      height: ""
    });
    if (heightIntrinsic) {
      const { _paddingAbsolute, _padding: padding } = getState();
      const { _overflowScroll, _scrollbarsHideOffset } = viewportOverflowState;
      const fSize = fractionalSize(_host);
      const hostClientSize = clientSize(_host);
      const isContentBox = style(_viewport, "boxSizing") === "content-box";
      const paddingVertical = _paddingAbsolute || isContentBox ? padding.b + padding.t : 0;
      const subtractXScrollbar = !(_nativeScrollbarIsOverlaid.x && isContentBox);
      style(_viewport, {
        height: hostClientSize.h + fSize.h + (_overflowScroll.x && subtractXScrollbar ? _scrollbarsHideOffset.x : 0) - paddingVertical
      });
    }
  };
  const getViewportOverflowState = (showNativeOverlaidScrollbars, viewportStyleObj) => {
    const arrangeHideOffset = !_nativeScrollbarStyling && !showNativeOverlaidScrollbars ? overlaidScrollbarsHideOffset : 0;
    const getStatePerAxis = (styleKey, isOverlaid, nativeScrollbarSize) => {
      const overflowStyle = style(_viewport, styleKey);
      const objectPrefferedOverflowStyle = viewportStyleObj ? viewportStyleObj[styleKey] : overflowStyle;
      const overflowScroll = objectPrefferedOverflowStyle === "scroll";
      const nonScrollbarStylingHideOffset = isOverlaid ? arrangeHideOffset : nativeScrollbarSize;
      const scrollbarsHideOffset = overflowScroll && !_nativeScrollbarStyling ? nonScrollbarStylingHideOffset : 0;
      const scrollbarsHideOffsetArrange = isOverlaid && !!arrangeHideOffset;
      return [overflowStyle, overflowScroll, scrollbarsHideOffset, scrollbarsHideOffsetArrange];
    };
    const [xOverflowStyle, xOverflowScroll, xScrollbarsHideOffset, xScrollbarsHideOffsetArrange] = getStatePerAxis("overflowX", _nativeScrollbarIsOverlaid.x, _nativeScrollbarSize.x);
    const [yOverflowStyle, yOverflowScroll, yScrollbarsHideOffset, yScrollbarsHideOffsetArrange] = getStatePerAxis("overflowY", _nativeScrollbarIsOverlaid.y, _nativeScrollbarSize.y);
    return {
      _overflowStyle: {
        x: xOverflowStyle,
        y: yOverflowStyle
      },
      _overflowScroll: {
        x: xOverflowScroll,
        y: yOverflowScroll
      },
      _scrollbarsHideOffset: {
        x: xScrollbarsHideOffset,
        y: yScrollbarsHideOffset
      },
      _scrollbarsHideOffsetArrange: {
        x: xScrollbarsHideOffsetArrange,
        y: yScrollbarsHideOffsetArrange
      }
    };
  };
  const setViewportOverflowState = (showNativeOverlaidScrollbars, hasOverflow, overflowOption, viewportStyleObj) => {
    const setAxisOverflowStyle = (behavior, hasOverflowAxis) => {
      const overflowVisible = overflowIsVisible(behavior);
      const overflowVisibleBehavior = hasOverflowAxis && overflowVisible && behavior.replace(`${strVisible}-`, "") || "";
      return [
        hasOverflowAxis && !overflowVisible ? behavior : "",
        overflowIsVisible(overflowVisibleBehavior) ? "hidden" : overflowVisibleBehavior
      ];
    };
    const [overflowX, visibleBehaviorX] = setAxisOverflowStyle(overflowOption.x, hasOverflow.x);
    const [overflowY, visibleBehaviorY] = setAxisOverflowStyle(overflowOption.y, hasOverflow.y);
    viewportStyleObj.overflowX = visibleBehaviorX && overflowY ? visibleBehaviorX : overflowX;
    viewportStyleObj.overflowY = visibleBehaviorY && overflowX ? visibleBehaviorY : overflowY;
    return getViewportOverflowState(showNativeOverlaidScrollbars, viewportStyleObj);
  };
  const arrangeViewport = (viewportOverflowState, viewportScrollSize, sizeFraction, directionIsRTL) => {
    if (doViewportArrange) {
      const { _viewportPaddingStyle } = getState();
      const { _scrollbarsHideOffset, _scrollbarsHideOffsetArrange } = viewportOverflowState;
      const { x: arrangeX, y: arrangeY } = _scrollbarsHideOffsetArrange;
      const { x: hideOffsetX, y: hideOffsetY } = _scrollbarsHideOffset;
      const viewportArrangeHorizontalPaddingKey = directionIsRTL ? "paddingRight" : "paddingLeft";
      const viewportArrangeHorizontalPaddingValue = _viewportPaddingStyle[viewportArrangeHorizontalPaddingKey];
      const viewportArrangeVerticalPaddingValue = _viewportPaddingStyle.paddingTop;
      const fractionalContentWidth = viewportScrollSize.w + sizeFraction.w;
      const fractionalContenHeight = viewportScrollSize.h + sizeFraction.h;
      const arrangeSize = {
        w: hideOffsetY && arrangeY ? `${hideOffsetY + fractionalContentWidth - viewportArrangeHorizontalPaddingValue}px` : "",
        h: hideOffsetX && arrangeX ? `${hideOffsetX + fractionalContenHeight - viewportArrangeVerticalPaddingValue}px` : ""
      };
      if (_viewportArrange) {
        const { sheet } = _viewportArrange;
        if (sheet) {
          const { cssRules } = sheet;
          if (cssRules) {
            if (!cssRules.length) {
              sheet.insertRule(`#${attr(_viewportArrange, "id")} + .${classNameViewportArrange}::before {}`, 0);
            }
            const ruleStyle = cssRules[0].style;
            ruleStyle.width = arrangeSize.w;
            ruleStyle.height = arrangeSize.h;
          }
        }
      } else {
        style(_viewport, {
          "--os-vaw": arrangeSize.w,
          "--os-vah": arrangeSize.h
        });
      }
    }
    return doViewportArrange;
  };
  const hideNativeScrollbars = (viewportOverflowState, directionIsRTL, viewportArrange, viewportStyleObj) => {
    const { _scrollbarsHideOffset, _scrollbarsHideOffsetArrange } = viewportOverflowState;
    const { x: arrangeX, y: arrangeY } = _scrollbarsHideOffsetArrange;
    const { x: hideOffsetX, y: hideOffsetY } = _scrollbarsHideOffset;
    const { _viewportPaddingStyle: viewportPaddingStyle } = getState();
    const horizontalMarginKey = directionIsRTL ? "marginLeft" : "marginRight";
    const viewportHorizontalPaddingKey = directionIsRTL ? "paddingLeft" : "paddingRight";
    const horizontalMarginValue = viewportPaddingStyle[horizontalMarginKey];
    const verticalMarginValue = viewportPaddingStyle.marginBottom;
    const horizontalPaddingValue = viewportPaddingStyle[viewportHorizontalPaddingKey];
    const verticalPaddingValue = viewportPaddingStyle.paddingBottom;
    viewportStyleObj.width = `calc(100% + ${hideOffsetY + horizontalMarginValue * -1}px)`;
    viewportStyleObj[horizontalMarginKey] = -hideOffsetY + horizontalMarginValue;
    viewportStyleObj.marginBottom = -hideOffsetX + verticalMarginValue;
    if (viewportArrange) {
      viewportStyleObj[viewportHorizontalPaddingKey] = horizontalPaddingValue + (arrangeY ? hideOffsetY : 0);
      viewportStyleObj.paddingBottom = verticalPaddingValue + (arrangeX ? hideOffsetX : 0);
    }
  };
  const undoViewportArrange = (showNativeOverlaidScrollbars, directionIsRTL, viewportOverflowState) => {
    if (doViewportArrange) {
      const finalViewportOverflowState = viewportOverflowState || getViewportOverflowState(showNativeOverlaidScrollbars);
      const { _viewportPaddingStyle: viewportPaddingStyle } = getState();
      const { _scrollbarsHideOffsetArrange } = finalViewportOverflowState;
      const { x: arrangeX, y: arrangeY } = _scrollbarsHideOffsetArrange;
      const finalPaddingStyle = {};
      const assignProps = (props) => each(props.split(" "), (prop) => {
        finalPaddingStyle[prop] = viewportPaddingStyle[prop];
      });
      if (arrangeX) {
        assignProps("marginBottom paddingTop paddingBottom");
      }
      if (arrangeY) {
        assignProps("marginLeft marginRight paddingLeft paddingRight");
      }
      const prevStyle = style(_viewport, keys(finalPaddingStyle));
      removeClass(_viewport, classNameViewportArrange);
      if (!_flexboxGlue) {
        finalPaddingStyle.height = "";
      }
      style(_viewport, finalPaddingStyle);
      return [
        () => {
          hideNativeScrollbars(finalViewportOverflowState, directionIsRTL, doViewportArrange, prevStyle);
          style(_viewport, prevStyle);
          addClass(_viewport, classNameViewportArrange);
        },
        finalViewportOverflowState
      ];
    }
    return [noop];
  };
  return (updateHints, checkOption, force) => {
    const {
      _sizeChanged,
      _hostMutation,
      _contentMutation,
      _paddingStyleChanged,
      _heightIntrinsicChanged,
      _directionChanged
    } = updateHints;
    const { _heightIntrinsic, _directionIsRTL } = getState();
    const [showNativeOverlaidScrollbarsOption, showNativeOverlaidScrollbarsChanged] = checkOption("nativeScrollbarsOverlaid.show");
    const [overflow, overflowChanged] = checkOption("overflow");
    const showNativeOverlaidScrollbars = showNativeOverlaidScrollbarsOption && _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y;
    const adjustFlexboxGlue = !_viewportIsTarget && !_flexboxGlue && (_sizeChanged || _contentMutation || _hostMutation || showNativeOverlaidScrollbarsChanged || _heightIntrinsicChanged);
    const overflowXVisible = overflowIsVisible(overflow.x);
    const overflowYVisible = overflowIsVisible(overflow.y);
    const overflowVisible = overflowXVisible || overflowYVisible;
    let sizeFractionCache = getCurrentSizeFraction(force);
    let viewportScrollSizeCache = getCurrentViewportScrollSizeCache(force);
    let overflowAmuntCache = getCurrentOverflowAmountCache(force);
    let preMeasureViewportOverflowState;
    if (showNativeOverlaidScrollbarsChanged && _nativeScrollbarStyling) {
      _viewportAddRemoveClass(classNameViewportScrollbarStyling, dataValueHostViewportScrollbarStyling, !showNativeOverlaidScrollbars);
    }
    if (adjustFlexboxGlue) {
      preMeasureViewportOverflowState = getViewportOverflowState(showNativeOverlaidScrollbars);
      fixFlexboxGlue(preMeasureViewportOverflowState, _heightIntrinsic);
    }
    if (_sizeChanged || _paddingStyleChanged || _contentMutation || _directionChanged || showNativeOverlaidScrollbarsChanged) {
      if (overflowVisible) {
        _viewportAddRemoveClass(classNameOverflowVisible, dataValueHostOverflowVisible, false);
      }
      const [redoViewportArrange, undoViewportArrangeOverflowState] = undoViewportArrange(showNativeOverlaidScrollbars, _directionIsRTL, preMeasureViewportOverflowState);
      const [sizeFraction2, sizeFractionChanged2] = sizeFractionCache = updateSizeFraction(force);
      const [viewportScrollSize2, viewportScrollSizeChanged2] = viewportScrollSizeCache = updateViewportScrollSizeCache(force);
      const viewportclientSize = clientSize(_viewport);
      let arrangedViewportScrollSize = viewportScrollSize2;
      let arrangedViewportClientSize = viewportclientSize;
      redoViewportArrange();
      if ((viewportScrollSizeChanged2 || sizeFractionChanged2 || showNativeOverlaidScrollbarsChanged) && undoViewportArrangeOverflowState && !showNativeOverlaidScrollbars && arrangeViewport(undoViewportArrangeOverflowState, viewportScrollSize2, sizeFraction2, _directionIsRTL)) {
        arrangedViewportClientSize = clientSize(_viewport);
        arrangedViewportScrollSize = scrollSize(_viewport);
      }
      overflowAmuntCache = updateOverflowAmountCache(getOverflowAmount({
        w: max(viewportScrollSize2.w, arrangedViewportScrollSize.w),
        h: max(viewportScrollSize2.h, arrangedViewportScrollSize.h)
      }, {
        w: arrangedViewportClientSize.w + max(0, viewportclientSize.w - viewportScrollSize2.w),
        h: arrangedViewportClientSize.h + max(0, viewportclientSize.h - viewportScrollSize2.h)
      }, sizeFraction2), force);
    }
    const [overflowAmount, overflowAmountChanged] = overflowAmuntCache;
    const [viewportScrollSize, viewportScrollSizeChanged] = viewportScrollSizeCache;
    const [sizeFraction, sizeFractionChanged] = sizeFractionCache;
    const hasOverflow = {
      x: overflowAmount.w > 0,
      y: overflowAmount.h > 0
    };
    const removeClipping = overflowXVisible && overflowYVisible && (hasOverflow.x || hasOverflow.y) || overflowXVisible && hasOverflow.x && !hasOverflow.y || overflowYVisible && hasOverflow.y && !hasOverflow.x;
    if (_paddingStyleChanged || _directionChanged || sizeFractionChanged || viewportScrollSizeChanged || overflowAmountChanged || overflowChanged || showNativeOverlaidScrollbarsChanged || adjustFlexboxGlue) {
      const viewportStyle = {
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        width: "",
        overflowY: "",
        overflowX: ""
      };
      const viewportOverflowState = setViewportOverflowState(showNativeOverlaidScrollbars, hasOverflow, overflow, viewportStyle);
      const viewportArranged = arrangeViewport(viewportOverflowState, viewportScrollSize, sizeFraction, _directionIsRTL);
      if (!_viewportIsTarget) {
        hideNativeScrollbars(viewportOverflowState, _directionIsRTL, viewportArranged, viewportStyle);
      }
      if (adjustFlexboxGlue) {
        fixFlexboxGlue(viewportOverflowState, _heightIntrinsic);
      }
      if (_viewportIsTarget) {
        attr(_host, dataAttributeHostOverflowX, viewportStyle.overflowX);
        attr(_host, dataAttributeHostOverflowY, viewportStyle.overflowY);
      } else {
        style(_viewport, viewportStyle);
      }
    }
    attrClass(_host, dataAttributeHost, dataValueHostOverflowVisible, removeClipping);
    conditionalClass(_padding, classNameOverflowVisible, removeClipping);
    !_viewportIsTarget && conditionalClass(_viewport, classNameOverflowVisible, overflowVisible);
    const [overflowStyle, overflowStyleChanged] = updateOverflowStyleCache(getViewportOverflowState(showNativeOverlaidScrollbars)._overflowStyle);
    setState({
      _overflowStyle: overflowStyle,
      _overflowAmount: {
        x: overflowAmount.w,
        y: overflowAmount.h
      },
      _hasOverflow: hasOverflow
    });
    return {
      _overflowStyleChanged: overflowStyleChanged,
      _overflowAmountChanged: overflowAmountChanged
    };
  };
};

const prepareUpdateHints = (leading, adaptive, force) => {
  const result = {};
  const finalAdaptive = adaptive || {};
  const objKeys = keys(leading).concat(keys(finalAdaptive));
  each(objKeys, (key) => {
    const leadingValue = leading[key];
    const adaptiveValue = finalAdaptive[key];
    result[key] = !!(force || leadingValue || adaptiveValue);
  });
  return result;
};
const createStructureSetupUpdate = (structureSetupElements, state) => {
  const { _viewport } = structureSetupElements;
  const { _nativeScrollbarStyling, _nativeScrollbarIsOverlaid, _flexboxGlue } = getEnvironment();
  const doViewportArrange = !_nativeScrollbarStyling && (_nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y);
  const updateSegments = [
    createTrinsicUpdate(structureSetupElements, state),
    createPaddingUpdate(structureSetupElements, state),
    createOverflowUpdate(structureSetupElements, state)
  ];
  return (checkOption, updateHints, force) => {
    const initialUpdateHints = prepareUpdateHints(assignDeep({
      _sizeChanged: false,
      _paddingStyleChanged: false,
      _directionChanged: false,
      _heightIntrinsicChanged: false,
      _overflowAmountChanged: false,
      _overflowStyleChanged: false,
      _hostMutation: false,
      _contentMutation: false
    }, updateHints), {}, force);
    const adjustScrollOffset = doViewportArrange || !_flexboxGlue;
    const scrollOffsetX = adjustScrollOffset && scrollLeft(_viewport);
    const scrollOffsetY = adjustScrollOffset && scrollTop(_viewport);
    let adaptivedUpdateHints = initialUpdateHints;
    each(updateSegments, (updateSegment) => {
      adaptivedUpdateHints = prepareUpdateHints(adaptivedUpdateHints, updateSegment(adaptivedUpdateHints, checkOption, !!force) || {}, force);
    });
    if (isNumber(scrollOffsetX)) {
      scrollLeft(_viewport, scrollOffsetX);
    }
    if (isNumber(scrollOffsetY)) {
      scrollTop(_viewport, scrollOffsetY);
    }
    return adaptivedUpdateHints;
  };
};

const animationStartEventName = "animationstart";
const scrollEventName = "scroll";
const scrollAmount = 3333333;
const getElmDirectionIsRTL = (elm) => style(elm, "direction") === "rtl";
const domRectHasDimensions = (rect) => rect && (rect.height || rect.width);
const createSizeObserver = (target, onSizeChangedCallback, options) => {
  const { _direction: observeDirectionChange = false, _appear: observeAppearChange = false } = options || {};
  const { _rtlScrollBehavior: rtlScrollBehavior } = getEnvironment();
  const baseElements = createDOM(`<div class="${classNameSizeObserver}"><div class="${classNameSizeObserverListener}"></div></div>`);
  const sizeObserver = baseElements[0];
  const listenerElement = sizeObserver.firstChild;
  const getIsDirectionRTL = getElmDirectionIsRTL.bind(0, sizeObserver);
  const [updateResizeObserverContentRectCache] = createCache({
    _initialValue: void 0,
    _alwaysUpdateValues: true,
    _equal: (currVal, newVal) => !(!currVal || !domRectHasDimensions(currVal) && domRectHasDimensions(newVal))
  });
  const onSizeChangedCallbackProxy = (sizeChangedContext) => {
    const isResizeObserverCall = isArray(sizeChangedContext) && sizeChangedContext.length > 0 && isObject(sizeChangedContext[0]);
    const hasDirectionCache = !isResizeObserverCall && isBoolean(sizeChangedContext[0]);
    let skip = false;
    let appear = false;
    let doDirectionScroll = true;
    if (isResizeObserverCall) {
      const [currRContentRect, , prevContentRect] = updateResizeObserverContentRectCache(sizeChangedContext.pop().contentRect);
      const hasDimensions = domRectHasDimensions(currRContentRect);
      const hadDimensions = domRectHasDimensions(prevContentRect);
      skip = !prevContentRect || !hasDimensions;
      appear = !hadDimensions && hasDimensions;
      doDirectionScroll = !skip;
    } else if (hasDirectionCache) {
      [, doDirectionScroll] = sizeChangedContext;
    } else {
      appear = sizeChangedContext === true;
    }
    if (observeDirectionChange && doDirectionScroll) {
      const rtl = hasDirectionCache ? sizeChangedContext[0] : getElmDirectionIsRTL(sizeObserver);
      scrollLeft(sizeObserver, rtl ? rtlScrollBehavior.n ? -scrollAmount : rtlScrollBehavior.i ? 0 : scrollAmount : scrollAmount);
      scrollTop(sizeObserver, scrollAmount);
    }
    if (!skip) {
      onSizeChangedCallback({
        _sizeChanged: !hasDirectionCache,
        _directionIsRTLCache: hasDirectionCache ? sizeChangedContext : void 0,
        _appear: !!appear
      });
    }
  };
  const offListeners = [];
  let appearCallback = observeAppearChange ? onSizeChangedCallbackProxy : false;
  let directionIsRTLCache;
  if (ResizeObserverConstructor) {
    const resizeObserverInstance = new ResizeObserverConstructor(onSizeChangedCallbackProxy);
    resizeObserverInstance.observe(listenerElement);
    push(offListeners, () => {
      resizeObserverInstance.disconnect();
    });
  } else {
    const observerElementChildren = createDOM(`<div class="${classNameSizeObserverListenerItem}" dir="ltr"><div class="${classNameSizeObserverListenerItem}"><div class="${classNameSizeObserverListenerItemFinal}"></div></div><div class="${classNameSizeObserverListenerItem}"><div class="${classNameSizeObserverListenerItemFinal}" style="width: 200%; height: 200%"></div></div></div>`);
    appendChildren(listenerElement, observerElementChildren);
    addClass(listenerElement, classNameSizeObserverListenerScroll);
    const observerElementChildrenRoot = observerElementChildren[0];
    const shrinkElement = observerElementChildrenRoot.lastChild;
    const expandElement = observerElementChildrenRoot.firstChild;
    const expandElementChild = expandElement == null ? void 0 : expandElement.firstChild;
    let cacheSize = offsetSize(observerElementChildrenRoot);
    let currSize = cacheSize;
    let isDirty = false;
    let rAFId;
    const reset = () => {
      scrollLeft(expandElement, scrollAmount);
      scrollTop(expandElement, scrollAmount);
      scrollLeft(shrinkElement, scrollAmount);
      scrollTop(shrinkElement, scrollAmount);
    };
    const onResized = (appear) => {
      rAFId = 0;
      if (isDirty) {
        cacheSize = currSize;
        onSizeChangedCallbackProxy(appear === true);
      }
    };
    const onScroll = (scrollEvent) => {
      currSize = offsetSize(observerElementChildrenRoot);
      isDirty = !scrollEvent || !equalWH(currSize, cacheSize);
      if (scrollEvent) {
        stopAndPrevent(scrollEvent);
        if (isDirty && !rAFId) {
          cAF(rAFId);
          rAFId = rAF(onResized);
        }
      } else {
        onResized(scrollEvent === false);
      }
      reset();
    };
    push(offListeners, [
      on(expandElement, scrollEventName, onScroll),
      on(shrinkElement, scrollEventName, onScroll)
    ]);
    style(expandElementChild, {
      width: scrollAmount,
      height: scrollAmount
    });
    reset();
    appearCallback = observeAppearChange ? onScroll.bind(0, false) : reset;
  }
  if (observeDirectionChange) {
    directionIsRTLCache = createCache({
      _initialValue: !getIsDirectionRTL()
    }, getIsDirectionRTL);
    const [updateDirectionIsRTLCache] = directionIsRTLCache;
    push(offListeners, on(sizeObserver, scrollEventName, (event) => {
      const directionIsRTLCacheValues = updateDirectionIsRTLCache();
      const [directionIsRTL, directionIsRTLChanged] = directionIsRTLCacheValues;
      if (directionIsRTLChanged) {
        removeClass(listenerElement, "ltr rtl");
        if (directionIsRTL) {
          addClass(listenerElement, "rtl");
        } else {
          addClass(listenerElement, "ltr");
        }
        onSizeChangedCallbackProxy(directionIsRTLCacheValues);
      }
      stopAndPrevent(event);
    }));
  }
  if (appearCallback) {
    addClass(sizeObserver, classNameSizeObserverAppear);
    push(offListeners, on(sizeObserver, animationStartEventName, appearCallback, {
      _once: !!ResizeObserverConstructor
    }));
  }
  prependChildren(target, sizeObserver);
  return () => {
    runEach(offListeners);
    removeElements(sizeObserver);
  };
};

const isHeightIntrinsic = (ioEntryOrSize) => ioEntryOrSize.h === 0 || ioEntryOrSize.isIntersecting || ioEntryOrSize.intersectionRatio > 0;
const createTrinsicObserver = (target, onTrinsicChangedCallback) => {
  const trinsicObserver = createDiv(classNameTrinsicObserver);
  const offListeners = [];
  const [updateHeightIntrinsicCache] = createCache({
    _initialValue: false
  });
  const triggerOnTrinsicChangedCallback = (updateValue) => {
    if (updateValue) {
      const heightIntrinsic = updateHeightIntrinsicCache(isHeightIntrinsic(updateValue));
      const [, heightIntrinsicChanged] = heightIntrinsic;
      if (heightIntrinsicChanged) {
        onTrinsicChangedCallback(heightIntrinsic);
      }
    }
  };
  if (IntersectionObserverConstructor) {
    const intersectionObserverInstance = new IntersectionObserverConstructor((entries) => {
      if (entries && entries.length > 0) {
        triggerOnTrinsicChangedCallback(entries.pop());
      }
    }, { root: target });
    intersectionObserverInstance.observe(trinsicObserver);
    push(offListeners, () => {
      intersectionObserverInstance.disconnect();
    });
  } else {
    const onSizeChanged = () => {
      const newSize = offsetSize(trinsicObserver);
      triggerOnTrinsicChangedCallback(newSize);
    };
    push(offListeners, createSizeObserver(trinsicObserver, onSizeChanged));
    onSizeChanged();
  }
  prependChildren(target, trinsicObserver);
  return () => {
    runEach(offListeners);
    removeElements(trinsicObserver);
  };
};

const createEventContentChange = (target, callback, eventContentChange) => {
  let map;
  let destroyed = false;
  const destroy = () => {
    destroyed = true;
  };
  const updateElements = (getElements) => {
    if (eventContentChange) {
      const eventElmList = eventContentChange.reduce((arr, item) => {
        if (item) {
          const selector = item[0];
          const eventNames = item[1];
          const elements = eventNames && selector && (getElements ? getElements(selector) : find(selector, target));
          if (elements && elements.length && eventNames && isString(eventNames)) {
            push(arr, [elements, eventNames.trim()], true);
          }
        }
        return arr;
      }, []);
      each(eventElmList, (item) => each(item[0], (elm) => {
        const eventNames = item[1];
        const entry = map.get(elm);
        if (entry) {
          const entryEventNames = entry[0];
          const entryOff = entry[1];
          if (entryEventNames === eventNames) {
            entryOff();
          }
        }
        const off = on(elm, eventNames, (event) => {
          if (destroyed) {
            off();
            map.delete(elm);
          } else {
            callback(event);
          }
        });
        map.set(elm, [eventNames, off]);
      }));
    }
  };
  if (eventContentChange) {
    map = /* @__PURE__ */ new WeakMap();
    updateElements();
  }
  return [destroy, updateElements];
};
const createDOMObserver = (target, isContentObserver, callback, options) => {
  let isConnected = false;
  const {
    _attributes,
    _styleChangingAttributes,
    _eventContentChange,
    _nestedTargetSelector,
    _ignoreTargetChange,
    _ignoreContentChange
  } = options || {};
  const [destroyEventContentChange, updateEventContentChangeElements] = createEventContentChange(target, debounce(() => {
    if (isConnected) {
      callback(true);
    }
  }, { _timeout: 33, _maxDelay: 99 }), _eventContentChange);
  const finalAttributes = _attributes || [];
  const finalStyleChangingAttributes = _styleChangingAttributes || [];
  const observedAttributes = finalAttributes.concat(finalStyleChangingAttributes);
  const observerCallback = (mutations) => {
    const ignoreTargetChange = _ignoreTargetChange || noop;
    const ignoreContentChange = _ignoreContentChange || noop;
    const targetChangedAttrs = [];
    const totalAddedNodes = [];
    let targetStyleChanged = false;
    let contentChanged = false;
    let childListChanged = false;
    each(mutations, (mutation) => {
      const { attributeName, target: mutationTarget, type, oldValue, addedNodes } = mutation;
      const isAttributesType = type === "attributes";
      const isChildListType = type === "childList";
      const targetIsMutationTarget = target === mutationTarget;
      const attributeValue = isAttributesType && isString(attributeName) ? attr(mutationTarget, attributeName) : 0;
      const attributeChanged = attributeValue !== 0 && oldValue !== attributeValue;
      const styleChangingAttrChanged = indexOf(finalStyleChangingAttributes, attributeName) > -1 && attributeChanged;
      if (isContentObserver && !targetIsMutationTarget) {
        const notOnlyAttrChanged = !isAttributesType;
        const contentAttrChanged = isAttributesType && styleChangingAttrChanged;
        const isNestedTarget = contentAttrChanged && _nestedTargetSelector && is(mutationTarget, _nestedTargetSelector);
        const baseAssertion = isNestedTarget ? !ignoreTargetChange(mutationTarget, attributeName, oldValue, attributeValue) : notOnlyAttrChanged || contentAttrChanged;
        const contentFinalChanged = baseAssertion && !ignoreContentChange(mutation, !!isNestedTarget, target, options);
        push(totalAddedNodes, addedNodes);
        contentChanged = contentChanged || contentFinalChanged;
        childListChanged = childListChanged || isChildListType;
      }
      if (!isContentObserver && targetIsMutationTarget && attributeChanged && !ignoreTargetChange(mutationTarget, attributeName, oldValue, attributeValue)) {
        push(targetChangedAttrs, attributeName);
        targetStyleChanged = targetStyleChanged || styleChangingAttrChanged;
      }
    });
    if (childListChanged && !isEmptyArray(totalAddedNodes)) {
      updateEventContentChangeElements((selector) => totalAddedNodes.reduce((arr, node) => {
        push(arr, find(selector, node));
        return is(node, selector) ? push(arr, node) : arr;
      }, []));
    }
    if (isContentObserver) {
      contentChanged && callback(false);
    } else if (!isEmptyArray(targetChangedAttrs) || targetStyleChanged) {
      callback(targetChangedAttrs, targetStyleChanged);
    }
  };
  const mutationObserver = new MutationObserverConstructor(observerCallback);
  mutationObserver.observe(target, {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: observedAttributes,
    subtree: isContentObserver,
    childList: isContentObserver,
    characterData: isContentObserver
  });
  isConnected = true;
  return [
    () => {
      if (isConnected) {
        destroyEventContentChange();
        mutationObserver.disconnect();
        isConnected = false;
      }
    },
    () => {
      if (isConnected) {
        observerCallback(mutationObserver.takeRecords());
      }
    }
  ];
};

const hostSelector = `[${dataAttributeHost}]`;
const viewportSelector = `.${classNameViewport}`;
const viewportAttrsFromTarget = ["tabindex"];
const baseStyleChangingAttrsTextarea = ["wrap", "cols", "rows"];
const baseStyleChangingAttrs = ["id", "class", "style", "open"];
const createStructureSetupObservers = (structureSetupElements, state, structureSetupUpdate) => {
  let debounceTimeout;
  let debounceMaxDelay;
  let contentMutationObserver;
  const [, setState] = state;
  const {
    _host,
    _viewport,
    _content,
    _isTextarea,
    _viewportIsTarget,
    _viewportHasClass,
    _viewportAddRemoveClass
  } = structureSetupElements;
  const { _nativeScrollbarStyling, _flexboxGlue } = getEnvironment();
  const [updateContentSizeCache] = createCache({
    _equal: equalWH,
    _initialValue: { w: 0, h: 0 }
  }, () => {
    const has = _viewportHasClass(classNameOverflowVisible, dataValueHostOverflowVisible);
    has && _viewportAddRemoveClass(classNameOverflowVisible, dataValueHostOverflowVisible);
    const contentScroll = scrollSize(_content);
    const viewportScroll = scrollSize(_viewport);
    const fractional = fractionalSize(_viewport);
    has && _viewportAddRemoveClass(classNameOverflowVisible, dataValueHostOverflowVisible, true);
    return {
      w: viewportScroll.w + contentScroll.w + fractional.w,
      h: viewportScroll.h + contentScroll.h + fractional.h
    };
  });
  const contentMutationObserverAttr = _isTextarea ? baseStyleChangingAttrsTextarea : baseStyleChangingAttrs.concat(baseStyleChangingAttrsTextarea);
  const structureSetupUpdateWithDebouncedAdaptiveUpdateHints = debounce(structureSetupUpdate, {
    _timeout: () => debounceTimeout,
    _maxDelay: () => debounceMaxDelay,
    _mergeParams(prev, curr) {
      const [prevObj] = prev;
      const [currObj] = curr;
      return [
        keys(prevObj).concat(keys(currObj)).reduce((obj, key) => {
          obj[key] = prevObj[key] || currObj[key];
          return obj;
        }, {})
      ];
    }
  });
  const updateViewportAttrsFromHost = (attributes) => {
    each(attributes || viewportAttrsFromTarget, (attribute) => {
      if (indexOf(viewportAttrsFromTarget, attribute) > -1) {
        const hostAttr = attr(_host, attribute);
        if (isString(hostAttr)) {
          attr(_viewport, attribute, hostAttr);
        } else {
          removeAttr(_viewport, attribute);
        }
      }
    });
  };
  const onTrinsicChanged = (heightIntrinsicCache) => {
    const [heightIntrinsic, heightIntrinsicChanged] = heightIntrinsicCache;
    setState({ _heightIntrinsic: heightIntrinsic });
    structureSetupUpdate({ _heightIntrinsicChanged: heightIntrinsicChanged });
  };
  const onSizeChanged = ({
    _sizeChanged,
    _directionIsRTLCache,
    _appear
  }) => {
    const updateFn = !_sizeChanged || _appear ? structureSetupUpdate : structureSetupUpdateWithDebouncedAdaptiveUpdateHints;
    let directionChanged = false;
    if (_directionIsRTLCache) {
      const [directionIsRTL, directionIsRTLChanged] = _directionIsRTLCache;
      directionChanged = directionIsRTLChanged;
      setState({ _directionIsRTL: directionIsRTL });
    }
    updateFn({ _sizeChanged, _directionChanged: directionChanged });
  };
  const onContentMutation = (contentChangedTroughEvent) => {
    const [, contentSizeChanged] = updateContentSizeCache();
    const updateFn = contentChangedTroughEvent ? structureSetupUpdate : structureSetupUpdateWithDebouncedAdaptiveUpdateHints;
    if (contentSizeChanged) {
      updateFn({
        _contentMutation: true
      });
    }
  };
  const onHostMutation = (targetChangedAttrs, targetStyleChanged) => {
    if (targetStyleChanged) {
      structureSetupUpdateWithDebouncedAdaptiveUpdateHints({
        _hostMutation: true
      });
    } else if (!_viewportIsTarget) {
      updateViewportAttrsFromHost(targetChangedAttrs);
    }
  };
  const destroyTrinsicObserver = (_content || !_flexboxGlue) && createTrinsicObserver(_host, onTrinsicChanged);
  const destroySizeObserver = !_viewportIsTarget && createSizeObserver(_host, onSizeChanged, {
    _appear: true,
    _direction: !_nativeScrollbarStyling
  });
  const [destroyHostMutationObserver] = createDOMObserver(_host, false, onHostMutation, {
    _styleChangingAttributes: baseStyleChangingAttrs,
    _attributes: baseStyleChangingAttrs.concat(viewportAttrsFromTarget)
  });
  const viewportIsTargetResizeObserver = _viewportIsTarget && new ResizeObserverConstructor(onSizeChanged.bind(0, { _sizeChanged: true }));
  viewportIsTargetResizeObserver && viewportIsTargetResizeObserver.observe(_host);
  updateViewportAttrsFromHost();
  return [
    (checkOption) => {
      const [ignoreMutation] = checkOption("updating.ignoreMutation");
      const [attributes, attributesChanged] = checkOption("updating.attributes");
      const [elementEvents, elementEventsChanged] = checkOption("updating.elementEvents");
      const [debounceValue, debounceChanged] = checkOption("updating.debounce");
      const updateContentMutationObserver = elementEventsChanged || attributesChanged;
      const ignoreMutationFromOptions = (mutation) => isFunction(ignoreMutation) && ignoreMutation(mutation);
      if (updateContentMutationObserver) {
        if (contentMutationObserver) {
          contentMutationObserver[1]();
          contentMutationObserver[0]();
        }
        contentMutationObserver = createDOMObserver(_content || _viewport, true, onContentMutation, {
          _styleChangingAttributes: contentMutationObserverAttr.concat(attributes || []),
          _attributes: contentMutationObserverAttr.concat(attributes || []),
          _eventContentChange: elementEvents,
          _nestedTargetSelector: hostSelector,
          _ignoreContentChange: (mutation, isNestedTarget) => {
            const { target, attributeName } = mutation;
            const ignore = !isNestedTarget && attributeName ? liesBetween(target, hostSelector, viewportSelector) : false;
            return ignore || !!ignoreMutationFromOptions(mutation);
          }
        });
      }
      if (debounceChanged) {
        structureSetupUpdateWithDebouncedAdaptiveUpdateHints._flush();
        if (isArray(debounceValue)) {
          const timeout = debounceValue[0];
          const maxWait = debounceValue[1];
          debounceTimeout = isNumber(timeout) ? timeout : false;
          debounceMaxDelay = isNumber(maxWait) ? maxWait : false;
        } else if (isNumber(debounceValue)) {
          debounceTimeout = debounceValue;
          debounceMaxDelay = false;
        } else {
          debounceTimeout = false;
          debounceMaxDelay = false;
        }
      }
    },
    () => {
      contentMutationObserver && contentMutationObserver[0]();
      destroyTrinsicObserver && destroyTrinsicObserver();
      destroySizeObserver && destroySizeObserver();
      viewportIsTargetResizeObserver && viewportIsTargetResizeObserver.disconnect();
      destroyHostMutationObserver();
    }
  ];
};

const initialStructureSetupUpdateState = {
  _padding: {
    t: 0,
    r: 0,
    b: 0,
    l: 0
  },
  _paddingAbsolute: false,
  _viewportPaddingStyle: {
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0
  },
  _overflowAmount: {
    x: 0,
    y: 0
  },
  _overflowStyle: {
    x: "hidden",
    y: "hidden"
  },
  _hasOverflow: {
    x: false,
    y: false
  },
  _heightIntrinsic: false,
  _directionIsRTL: false
};
const createStructureSetup = (target, options) => {
  const checkOptionsFallback = createOptionCheck(options, {});
  const state = createState(initialStructureSetupUpdateState);
  const onUpdatedListeners = /* @__PURE__ */ new Set();
  const [getState] = state;
  const runOnUpdatedListeners = (updateHints, changedOptions, force) => {
    runEach(onUpdatedListeners, [updateHints, changedOptions || {}, !!force]);
  };
  const [elements, destroyElements] = createStructureSetupElements(target);
  const updateStructure = createStructureSetupUpdate(elements, state);
  const [updateObservers, destroyObservers] = createStructureSetupObservers(elements, state, (updateHints) => {
    runOnUpdatedListeners(updateStructure(checkOptionsFallback, updateHints));
  });
  const structureSetupState = getState.bind(0);
  structureSetupState._addOnUpdatedListener = (listener) => {
    onUpdatedListeners.add(listener);
  };
  structureSetupState._elements = elements;
  return [
    (changedOptions, force) => {
      const checkOption = createOptionCheck(options, changedOptions, force);
      updateObservers(checkOption);
      runOnUpdatedListeners(updateStructure(checkOption, {}, force));
    },
    structureSetupState,
    () => {
      onUpdatedListeners.clear();
      destroyObservers();
      destroyElements();
    }
  ];
};

const generateScrollbarDOM = (scrollbarClassName) => {
  const scrollbar = createDiv(`${classNameScrollbar} ${scrollbarClassName}`);
  const track = createDiv(classNameScrollbarTrack);
  const handle = createDiv(classNameScrollbarHandle);
  appendChildren(scrollbar, track);
  appendChildren(track, handle);
  return {
    _scrollbar: scrollbar,
    _track: track,
    _handle: handle
  };
};
const createScrollbarsSetupElements = (target, structureSetupElements) => {
  const { _getInitializationStrategy } = getEnvironment();
  const { _scrollbarsSlot: environmentScrollbarSlot } = _getInitializationStrategy();
  const { _target, _host, _viewport, _targetIsElm } = structureSetupElements;
  const initializationScrollbarSlot = !_targetIsElm && target.scrollbarsSlot;
  const initializationScrollbarSlotResult = isFunction(initializationScrollbarSlot) ? initializationScrollbarSlot(_target, _host, _viewport) : initializationScrollbarSlot;
  const evaluatedScrollbarSlot = initializationScrollbarSlotResult || (isFunction(environmentScrollbarSlot) ? environmentScrollbarSlot(_target, _host, _viewport) : environmentScrollbarSlot) || _host;
  const horizontalScrollbarStructure = generateScrollbarDOM(classNameScrollbarHorizontal);
  const verticalScrollbarStructure = generateScrollbarDOM(classNameScrollbarVertical);
  const { _scrollbar: horizontalScrollbar } = horizontalScrollbarStructure;
  const { _scrollbar: verticalScrollbar } = verticalScrollbarStructure;
  appendChildren(evaluatedScrollbarSlot, horizontalScrollbar);
  appendChildren(evaluatedScrollbarSlot, verticalScrollbar);
  return [
    {
      _horizontalScrollbarStructure: horizontalScrollbarStructure,
      _verticalScrollbarStructure: verticalScrollbarStructure
    },
    removeElements.bind(0, [horizontalScrollbar, verticalScrollbar])
  ];
};

const createScrollbarsSetup = (target, options, structureSetupElements) => {
  const state = createState({});
  const [getState] = state;
  const [elements, destroyElements] = createScrollbarsSetupElements(target, structureSetupElements);
  const scrollbarsSetupState = getState.bind(0);
  scrollbarsSetupState._elements = elements;
  return [
    (changedOptions, force) => {
      const checkOption = createOptionCheck(options, changedOptions, force);
      console.log(checkOption);
    },
    scrollbarsSetupState,
    () => {
      destroyElements();
    }
  ];
};

const pluginRegistry = {};
const getPlugins = () => assignDeep({}, pluginRegistry);
const addPlugin = (addedPlugin) => each(isArray(addedPlugin) ? addedPlugin : [addedPlugin], (plugin) => {
  pluginRegistry[plugin[0]] = plugin[1];
});

const optionsValidationPluginName = "__osOptionsValidationPlugin";

const targets = /* @__PURE__ */ new Set();
const targetInstanceMap = /* @__PURE__ */ new WeakMap();
const addInstance = (target, osInstance) => {
  targetInstanceMap.set(target, osInstance);
  targets.add(target);
};
const removeInstance = (target) => {
  targetInstanceMap.delete(target);
  targets.delete(target);
};
const getInstance = (target) => targetInstanceMap.get(target);

const createOSEventListenerHub = (initialEventListeners) => createEventListenerHub(initialEventListeners);

const OverlayScrollbars = (target, options, eventListeners) => {
  const {
    _getDefaultOptions,
    _nativeScrollbarIsOverlaid,
    _addListener: addEnvListener
  } = getEnvironment();
  const plugins = getPlugins();
  const instanceTarget = isHTMLElement(target) ? target : target.target;
  const potentialInstance = getInstance(instanceTarget);
  if (potentialInstance) {
    return potentialInstance;
  }
  const optionsValidationPlugin = plugins[optionsValidationPluginName];
  const validateOptions = (newOptions) => {
    const opts = newOptions || {};
    const validate = optionsValidationPlugin && optionsValidationPlugin._;
    return validate ? validate(opts, true) : opts;
  };
  const currentOptions = assignDeep({}, _getDefaultOptions(), validateOptions(options));
  const [addEvent, removeEvent, triggerEvent] = createOSEventListenerHub(eventListeners);
  if (_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y && !currentOptions.nativeScrollbarsOverlaid.initialize) {
    triggerEvent("initializationWithdrawn");
  }
  const [updateStructure, structureState, destroyStructure] = createStructureSetup(target, currentOptions);
  const [updateScrollbars, , destroyScrollbars] = createScrollbarsSetup(target, currentOptions, structureState._elements);
  const update = (changedOptions, force) => {
    updateStructure(changedOptions, force);
    updateScrollbars(changedOptions, force);
  };
  const removeEnvListener = addEnvListener(update.bind(0, {}, true));
  structureState._addOnUpdatedListener((updateHints, changedOptions, force) => {
    const {
      _sizeChanged,
      _directionChanged,
      _heightIntrinsicChanged,
      _overflowAmountChanged,
      _overflowStyleChanged,
      _contentMutation,
      _hostMutation
    } = updateHints;
    triggerEvent("updated", {
      updateHints: {
        sizeChanged: _sizeChanged,
        directionChanged: _directionChanged,
        heightIntrinsicChanged: _heightIntrinsicChanged,
        overflowAmountChanged: _overflowAmountChanged,
        overflowStyleChanged: _overflowStyleChanged,
        contentMutation: _contentMutation,
        hostMutation: _hostMutation
      },
      changedOptions,
      force
    });
  });
  const instance = {
    options(newOptions) {
      if (newOptions) {
        const changedOptions = getOptionsDiff(currentOptions, validateOptions(newOptions));
        if (!isEmptyObject(changedOptions)) {
          assignDeep(currentOptions, changedOptions);
          update(changedOptions);
        }
      }
      return assignDeep({}, currentOptions);
    },
    on: addEvent,
    off: removeEvent,
    state() {
      const { _overflowAmount, _overflowStyle, _hasOverflow, _padding, _paddingAbsolute } = structureState();
      return assignDeep({}, {
        overflowAmount: _overflowAmount,
        overflowStyle: _overflowStyle,
        hasOverflow: _hasOverflow,
        padding: _padding,
        paddingAbsolute: _paddingAbsolute
      });
    },
    elements() {
      const { _target, _host, _padding, _viewport, _content } = structureState._elements;
      return assignDeep({}, {
        target: _target,
        host: _host,
        padding: _padding || _viewport,
        viewport: _viewport,
        content: _content || _viewport
      });
    },
    update(force) {
      update({}, force);
    },
    destroy: () => {
      removeInstance(instanceTarget);
      removeEnvListener();
      removeEvent();
      destroyScrollbars();
      destroyStructure();
      triggerEvent("destroyed");
    }
  };
  each(keys(plugins), (pluginName) => {
    const pluginInstance = plugins[pluginName];
    if (isFunction(pluginInstance)) {
      pluginInstance(OverlayScrollbars, instance);
    }
  });
  instance.update(true);
  addInstance(instanceTarget, instance);
  triggerEvent("initialized");
  return instance;
};
OverlayScrollbars.plugin = addPlugin;
OverlayScrollbars.env = () => {
  const {
    _nativeScrollbarSize,
    _nativeScrollbarIsOverlaid,
    _nativeScrollbarStyling,
    _rtlScrollBehavior,
    _flexboxGlue,
    _cssCustomProperties,
    _defaultInitializationStrategy,
    _defaultDefaultOptions,
    _getInitializationStrategy,
    _setInitializationStrategy,
    _getDefaultOptions,
    _setDefaultOptions
  } = getEnvironment();
  return assignDeep({}, {
    scrollbarSize: _nativeScrollbarSize,
    scrollbarIsOverlaid: _nativeScrollbarIsOverlaid,
    scrollbarStyling: _nativeScrollbarStyling,
    rtlScrollBehavior: _rtlScrollBehavior,
    flexboxGlue: _flexboxGlue,
    cssCustomProperties: _cssCustomProperties,
    defaultInitializationStrategy: _defaultInitializationStrategy,
    defaultDefaultOptions: _defaultDefaultOptions,
    getInitializationStrategy: _getInitializationStrategy,
    setInitializationStrategy: _setInitializationStrategy,
    getDefaultOptions: _getDefaultOptions,
    setDefaultOptions: _setDefaultOptions
  });
};

export { OverlayScrollbars as default };
//# sourceMappingURL=overlayscrollbars.js.map
