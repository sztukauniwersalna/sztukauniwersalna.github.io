(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-router-dom"), require("react-dom/server"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define([, , , ], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-router-dom"), require("react-dom/server"), require("react-dom")) : factory(root["React"], root["ReactRouterDOM"], root["ReactDOMServer"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_80__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var requireDirectory_1 = __webpack_require__(31);
var models_1 = __webpack_require__(9);
var Context = __webpack_require__(32);
var includes = requireDirectory_1.default(Context.INCLUDES).map(function (module) {
    var name = module.name.replace(/^\.\//, '').replace(/\.tsx$/, '');
    return new models_1.Include(name, module.exports.default);
});
exports.default = includes;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_1 = __webpack_require__(0);
function ContentLimiter(_a) {
    var children = _a.children,
        limit = _a.limit,
        respectLimit = _a.respectLimit,
        props = __rest(_a, ["children", "limit", "respectLimit"]);
    if (!limit || !respectLimit) {
        return React.createElement("div", null, children);
    }
    var output = [];
    limitContent(children, limit, props, output);
    return React.createElement("div", null, output);
}
exports.ContentLimiter = ContentLimiter;
function limitContent(children, limit, props, output) {
    switch (typeof children === "undefined" ? "undefined" : _typeof(children)) {
        case 'undefined':
            return limit;
        case 'number':
            output.push(children);
            return limit;
        case 'string':
            return limitString(children, limit, output);
        default:
            return limitReactElement(children, limit, props, output);
    }
}
function limitString(child, limit, output) {
    var previuos = 0;
    var current;
    var sentences = sentencize(child);
    if (sentences.length < limit) {
        output.push(child);
        return limit - sentences.length;
    }
    sentences.slice(0, limit).forEach(function (sentence) {
        return output.push(sentence);
    });
    return 0;
}
function limitReactElement(children, limit, props, output) {
    var characters = limit;
    asReactElementArray(children).forEach(function (child, key) {
        if (characters === 0) {
            return;
        }
        var newChildren = [];
        characters = limitContent(child.props.children, characters, props, newChildren);
        var newProps = _typeof(child.type) === 'object' ? __assign({}, props, { key: key }) : { key: key };
        output.push(react_1.cloneElement(child, newProps, newChildren.length === 0 ? undefined : newChildren));
    });
    return characters;
}
function asReactElementArray(children) {
    if (children === undefined) {
        return [];
    }
    if ((typeof children === "undefined" ? "undefined" : _typeof(children)) !== 'object') {
        throw new Error("unexpected value: " + children);
    }
    return [].concat(children);
}
function sentencize(child) {
    var sentenceRegexp = /[^.!?…]*[.!?…]/g;
    var matches = [];
    var match;
    while ((match = sentenceRegexp.exec(child)) !== null) {
        matches.push(match[0]);
    }
    return matches;
}
exports.default = ContentLimiter;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(116);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(121);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(122);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(126);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(150);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(26);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(158);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contextTypes = {
  insertCss: _propTypes2.default.func
}; /**
    * Isomorphic CSS style loader for Webpack
    *
    * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.txt file in the root directory of this source tree.
    */

function withStyles() {
  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  return function wrapWithStyles(ComposedComponent) {
    var WithStyles = function (_Component) {
      (0, _inherits3.default)(WithStyles, _Component);

      function WithStyles() {
        (0, _classCallCheck3.default)(this, WithStyles);
        return (0, _possibleConstructorReturn3.default)(this, (WithStyles.__proto__ || (0, _getPrototypeOf2.default)(WithStyles)).apply(this, arguments));
      }

      (0, _createClass3.default)(WithStyles, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _context;

          this.removeCss = (_context = this.context).insertCss.apply(_context, styles);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.removeCss) {
            setTimeout(this.removeCss, 0);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(ComposedComponent, this.props);
        }
      }]);
      return WithStyles;
    }(_react.Component);

    var displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

    WithStyles.displayName = 'WithStyles(' + displayName + ')';
    WithStyles.contextTypes = contextTypes;
    WithStyles.ComposedComponent = ComposedComponent;

    return (0, _hoistNonReactStatics2.default)(WithStyles, ComposedComponent);
  };
}

exports.default = withStyles;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(162);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(164);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(30);
exports.Page = Page_1.default;
var Collection_1 = __webpack_require__(93);
exports.Collection = Collection_1.default;
var Category_1 = __webpack_require__(54);
exports.Category = Category_1.default;
var Tag_1 = __webpack_require__(55);
exports.Tag = Tag_1.default;
var Layout_1 = __webpack_require__(94);
exports.Layout = Layout_1.default;
var Include_1 = __webpack_require__(95);
exports.Include = Include_1.default;
var MenuEntry_1 = __webpack_require__(96);
exports.MenuEntry = MenuEntry_1.default;
var Website_1 = __webpack_require__(97);
exports.Website = Website_1.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(35)('wks');
var uid = __webpack_require__(24);
var Symbol = __webpack_require__(11).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(60);
var toPrimitive = __webpack_require__(36);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var core = __webpack_require__(3);
var ctx = __webpack_require__(59);
var hide = __webpack_require__(16);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(132);
var defined = __webpack_require__(33);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
var withStyles_1 = __webpack_require__(6);
var s = __webpack_require__(160);
function Button(_a) {
    var url = _a.url,
        _b = _a.variant,
        variant = _b === void 0 ? 'flat' : _b,
        _c = _a.color,
        color = _c === void 0 ? 'gray' : _c,
        onClick = _a.onClick,
        children = _a.children;
    var classNames = [s.button, s[variant]];
    if (variant !== 'flat') {
        classNames.push(s[color]);
    }
    if (url !== undefined) {
        if (url.match(/^[a-z0-9]+?:\/\/.*$/) !== null) {
            return renderExternalLink(classNames, url, onClick, children);
        }
        return renderLink(classNames, url, onClick, children);
    }
    if (onClick === undefined) {
        throw new Error('url or onClick prop must be set on Button element');
    }
    return renderButton(classNames, onClick, children);
}
exports.Button = Button;
function renderExternalLink(classNames, url, onClick, children) {
    return React.createElement("span", { className: classNames.join(' ') }, React.createElement("a", { href: url, onClick: onClick }, children));
}
function renderLink(classNames, url, onClick, children) {
    return React.createElement("span", { className: classNames.join(' ') }, React.createElement(react_router_dom_1.Link, { to: url, onClick: onClick }, children));
}
function renderButton(classNames, onClick, children) {
    return React.createElement("span", { className: classNames.join(' ') }, React.createElement("button", { onClick: onClick }, children));
}
exports.default = withStyles_1.default(s)(Button);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(86)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(88)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Page = /** @class */function () {
    function Page(title, description, url, layout, body, output, date, categories, tags, feed) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.layout = layout;
        this.body = body;
        this.output = output;
        this.date = date;
        this.categories = categories;
        this.tags = tags;
        this.feed = feed;
    }
    Page.prototype.getCrumbs = function (website) {
        var _this = this;
        if (this.url == '/') {
            return [[this]];
        }
        if (this.categories.length == 0) {
            return [[website.getPageOfUrl('/'), this]];
        }
        return this.categories.map(function (categoryTitle) {
            return website.getCategoryOfTitle(categoryTitle).getCrumbs(website).map(function (crumb) {
                return crumb.concat([_this]);
            });
        }).reduce(function (a, b) {
            return a.concat(b);
        }, []);
    };
    Page.prototype.compareTo = function (another) {
        if (this.date === another.date) {
            if (this.title === another.title) {
                return this.url > another.url ? 1 : -1;
            }
            return this.title > another.title ? 1 : -1;
        }
        return this.date.getTime() > another.date.getTime() ? 1 : -1;
    };
    return Page;
}();
exports.Page = Page;
exports.default = Page;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function requireDirectory(context) {
    return context.keys().map(function (name) {
        return {
            exports: context(name),
            name: name
        };
    });
}
exports.default = requireDirectory;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
_PARAMORPH: __webpack_require__(98),
CATEGORIES: __webpack_require__(99),
PAGES: __webpack_require__(104),
POSTS: __webpack_require__(110),
ROOT: __webpack_require__(113),
LAYOUTS: __webpack_require__(114),
INCLUDES: __webpack_require__(198)};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(35)('keys');
var uid = __webpack_require__(24);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(129)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(63)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(17);
var dPs = __webpack_require__(131);
var enumBugKeys = __webpack_require__(43);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(61)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(136).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(65);
var enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
var global = __webpack_require__(11);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(22);
var TO_STRING_TAG = __webpack_require__(10)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(39);
var wksExt = __webpack_require__(46);
var defineProperty = __webpack_require__(13).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var withStyles_1 = __webpack_require__(6);
var s = __webpack_require__(172);
function Icon(_a) {
    var name = _a.name;
    if (name === undefined) {
        return null;
    }
    switch (name) {
        case 'facebook':
            return renderFacebookIcon();
        case 'instagram':
            return renderInstagramIcon();
        default:
            return renderMaterialIcon(name);
    }
}
exports.Icon = Icon;
function renderMaterialIcon(name) {
    return React.createElement("i", { className: 'material-icons' }, name);
}
function renderFacebookIcon() {
    return React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', className: s.icon }, React.createElement("g", null, React.createElement("path", { d: 'M20.85,0H3.17C1.08,0,0,1.09,0,3.2V20.86A2.82,2.82,0,0,0,3.1,24h8.74V12H9.61V8.85h2.23V7.72a7.74,7.74,0,0,1,.4-2.85,3.2,3.2,0,0,1,1.51-1.53,5.64,5.64,0,0,1,2.76-.59,11.23,11.23,0,0,1,3.35.51L19.31,6a8.2,8.2,0,0,0-1.84-.23,1.59,1.59,0,0,0-1.24.42,2.26,2.26,0,0,0-.38,1.55V8.85h3V12h-3V24h5A2.84,2.84,0,0,0,24,20.82V3.15A2.82,2.82,0,0,0,20.85,0Z' })));
}
function renderInstagramIcon() {
    return React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', className: s.icon }, React.createElement("g", null, React.createElement("path", { d: 'M20.85,0H3.17C1.08,0,0,1.09,0,3.2V20.86A2.82,2.82,0,0,0,3.1,24H20.85A2.84,2.84,0,0,0,24,20.82V3.15A2.82,2.82,0,0,0,20.85,0Zm-2,2.7c2.37,0,2.37,0,2.37,2.4s0,2.33-2.33,2.33-2.37,0-2.37-2.38S16.57,2.7,18.9,2.7ZM12,7.34a4.65,4.65,0,1,1-.07,9.3,4.72,4.72,0,0,1-4.6-4.71A4.74,4.74,0,0,1,12,7.34Zm9.26,12.5c0,1.12-.32,1.42-1.43,1.42H4.15c-1.1,0-1.42-.3-1.42-1.42,0-2.91,0-5.85,0-8.76,0-.83.23-1,1-1,1.09.1,1.11,0,1,1.1a7.41,7.41,0,0,0,5.81,8,7.47,7.47,0,0,0,8.57-5.15,7.39,7.39,0,0,0,.16-3.44c-.09-.41,0-.5.39-.5,1.66-.12,1.66-.16,1.66,1.55Z' })));
}
exports.default = withStyles_1.default(s)(Icon);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var requireDirectory_1 = __webpack_require__(31);
var layouts_1 = __webpack_require__(56);
var Context = __webpack_require__(32);
var config = __webpack_require__(75);
function checkIsObject(value, name) {
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) != 'object') {
        throw new Error(name + " must be an object; got " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
    }
    return value;
}
function checkIsArray(value, name) {
    if (!(value instanceof Array)) {
        throw new Error(name + " must be an array; got " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
    }
    return value;
}
function checkIsString(value, name) {
    if (typeof value != 'string') {
        throw new Error(name + " must be a string; got " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
    }
    return value;
}
function checkIsOptionalBoolean(value, defaultValue, name) {
    if (typeof value === 'undefined') {
        return defaultValue;
    }
    if (typeof value !== 'boolean') {
        throw new Error(name + " must be a boolean; got " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
    }
    return value;
}
checkIsObject(config.collections, 'config.collections');
var website = new models_1.Website();
layouts_1.default.forEach(function (layout) {
    return website.addLayout(layout);
});
var ROOT_COLLECTION_KEY = '$root';
var ROOT_COLLECTION_TITLE = 'Root Pages';
var DEFAULT_LAYOUT_NAME = 'default';
function titleFromUrl(url, requiredBy) {
    var title = "" + url.charAt(0).toUpperCase() + url.substring(1).replace(/-/g, ' ');
    console.warn(requiredBy + ".title is not defined; defaulting to " + title);
    return title;
}
function urlFromTitle(title, requiredBy) {
    var url = "/" + title.toLowerCase().replace(/ /g, '-');
    console.warn(requiredBy + ".url is not defined; defaulting to " + url);
    return url;
}
function parseCollection(key, cfg) {
    var requiredBy = "collections['" + key + "']";
    var title = checkIsString(cfg.title || titleFromUrl(key, requiredBy), requiredBy);
    var layout = website.getLayoutOfName(cfg.layout || DEFAULT_LAYOUT_NAME, requiredBy);
    return new models_1.Collection(title, layout, cfg.output != false);
}
function createPage(role, title, description, url, layout, body, output, date, categoryTitles, tags, feed, requiredBy) {
    switch (role) {
        case 'page':
            return new models_1.Page(title, description, url, layout, body, output, date, categoryTitles, tags, feed);
        case 'category':
            return new models_1.Category(title, description, url, layout, body, output, date, categoryTitles, tags);
        default:
            throw new Error("unrecognized role: " + role + " in " + requiredBy);
    }
}
function parsePage(name, body, frontMatter, defaultLayout) {
    var requiredBy = "pages['" + name + "']";
    var page = createPage(checkIsString(frontMatter.role || 'page', requiredBy + ".role"), checkIsString(frontMatter.title || titleFromUrl(name, requiredBy), requiredBy + ".title"), checkIsString(frontMatter.description || '', requiredBy + ".description"), checkIsString(frontMatter.permalink || urlFromTitle(name, requiredBy), requiredBy + ".url"), website.getLayoutOfName(checkIsString(frontMatter.layout || defaultLayout, requiredBy + ".layout"), requiredBy), body, frontMatter.output != false, new Date(checkIsString(frontMatter.date, requiredBy + ".date")), checkIsArray(frontMatter.categories || [], requiredBy + ".categories").concat(frontMatter.category !== undefined ? [checkIsString(frontMatter.category, requiredBy + ".category")] : []), checkIsArray(frontMatter.tags || [], requiredBy + ".tags"), checkIsOptionalBoolean(frontMatter.feed, true, requiredBy + ".feed"), requiredBy);
    return page;
}
function createCollection(key, cfg, context) {
    var collection = parseCollection(key, cfg);
    collection.pages = requireDirectory_1.default(context).map(function (module) {
        return parsePage(module.name.replace(/\.markdown$/, '').replace(/^\.\//, ''), module.exports.component, module.exports.frontMatter, collection.layout.name);
    });
    return collection;
}
var collections = [].concat.apply(createCollection(ROOT_COLLECTION_KEY, { title: ROOT_COLLECTION_TITLE }, Context.ROOT), Object.keys(config.collections).filter(function (key) {
    var context = Context.hasOwnProperty(key.toUpperCase());
    if (!context) {
        console.warn("couldn't find folder _" + key + " required by collection " + key);
    }
    return context;
}).map(function (key) {
    return createCollection(key, config.collections[key], Context[key.toUpperCase()]);
}));
exports.default = collections;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(27);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var server_1 = __webpack_require__(51);
var react_router_dom_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(92);
var models_1 = __webpack_require__(9);
var layouts_1 = __webpack_require__(56);
var includes_1 = __webpack_require__(2);
var collections_1 = __webpack_require__(50);
var pages_1 = __webpack_require__(76);
var categories_1 = __webpack_require__(77);
var tags_1 = __webpack_require__(204);
var menu_1 = __webpack_require__(205);
var website = new models_1.Website();
layouts_1.default.forEach(function (layout) {
    return website.addLayout(layout);
});
includes_1.default.forEach(function (include) {
    return website.addInclude(include);
});
collections_1.default.forEach(function (collection) {
    return website.addCollection(collection);
});
pages_1.default.forEach(function (page) {
    return website.addPage(page);
});
categories_1.default.forEach(function (category) {
    return website.addCategory(category);
});
tags_1.default.forEach(function (tag) {
    return website.addTag(tag);
});
website.menu = menu_1.default;
var index = website.pages['/'];
if (index === undefined) {
    throw new Error('page of url \'/\' must be defined to create index.html');
}
// add pages to categories and tags
pages_1.default.filter(function (page) {
    return page.url !== '/';
}).forEach(function (page) {
    var requiredBy = "pages['" + page.url + "']";
    page.categories.forEach(function (title) {
        return website.getCategoryOfTitle(title, requiredBy).pages.push(page);
    });
    page.tags.forEach(function (title) {
        return website.getTagOfTitle(title, requiredBy).pages.push(page);
    });
});
// add sub-categories to categories
categories_1.default.forEach(function (page) {
    var requiredBy = "pages['" + page.url + "']";
    page.categories.forEach(function (title) {
        return website.getCategoryOfTitle(title, requiredBy).pages.push(page);
    });
});
// generate descriptions for pages, categories and tags
pages_1.default.forEach(function (page) {
    if (page.description) {
        return;
    }
    Object.defineProperty(page, 'description', {
        get: function get() {
            return descriptionFromContent(page);
        },
        set: function set() {
            throw new Error('Page.description is readonly');
        }
    });
});
categories_1.default.forEach(function (category) {
    if (category.description) {
        return;
    }
    Object.defineProperty(category, 'description', {
        get: function get() {
            return descriptionFromContent(category) || descriptionFromPages(category);
        },
        set: function set() {
            throw new Error('Page.description is readonly');
        }
    });
});
tags_1.default.forEach(function (tag) {
    tag.description = descriptionFromPages(tag);
});
function descriptionFromContent(page) {
    var element = react_1.createElement(page.body, { website: website, page: page, respectLimit: true });
    var router = react_1.createElement(react_router_dom_1.StaticRouter, { location: page.url, context: {} }, element);
    return utils_1.stripTags(server_1.renderToStaticMarkup(router));
}
function descriptionFromPages(page) {
    return index.title + " " + page.title + ": " + page.pages.map(function (p) {
        return p.title;
    }).join(', ');
}
exports.default = website;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(30);
var Category = /** @class */function (_super) {
    __extends(Category, _super);
    function Category(title, description, url, layout, body, output, date, categories, tags) {
        var _this = _super.call(this, title, description, url, layout, body, output, date, categories, tags, false) || this;
        _this.pages = [];
        return _this;
    }
    return Category;
}(Page_1.Page);
exports.default = Category;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(30);
var Tag = /** @class */function (_super) {
    __extends(Tag, _super);
    function Tag(title, url, layout, body) {
        var _this = _super.call(this, '#' + title, '', url, layout, body, true, new Date(Date.UTC(0, 0)), [], [], false) || this;
        _this.pages = [];
        _this.originalTitle = title;
        return _this;
    }
    return Tag;
}(Page_1.default);
exports.default = Tag;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var requireDirectory_1 = __webpack_require__(31);
var models_1 = __webpack_require__(9);
var Context = __webpack_require__(32);
var layouts = requireDirectory_1.default(Context.LAYOUTS).map(function (module) {
    var name = module.name.replace(/^\.\//, '').replace(/\.tsx$/, '');
    return new models_1.Layout(name, module.exports.default);
});
exports.default = layouts;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(33);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(57);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(120);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(61)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var document = __webpack_require__(11).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(127);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(140);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(39);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(64);
var hide = __webpack_require__(16);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(130);
var setToStringTag = __webpack_require__(44);
var getPrototypeOf = __webpack_require__(58);
var ITERATOR = __webpack_require__(10)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(133)(false);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(65);
var hiddenKeys = __webpack_require__(43).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(48);
var createDesc = __webpack_require__(25);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(36);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(60);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(42);
var TAG = __webpack_require__(10)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var withStyles_1 = __webpack_require__(6);
var s = __webpack_require__(174);
function Logo(_a) {
    var _b = _a.variant,
        variant = _b === void 0 ? 'inline' : _b;
    return React.createElement("svg", { className: s.logo + " " + s[variant], xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + getDimensions(variant).join(' '), version: "1.1" }, React.createElement("g", null, renderLogo(variant).map(function (element, key) {
        return React.cloneElement(element, { key: key });
    })));
}
exports.Logo = Logo;
function renderLogo(variant) {
    switch (variant) {
        case 'small':
            return renderSmallLogo();
        case 'inline':
            return renderInlineLogo();
        case 'full':
            return renderFullLogo();
    }
}
function renderSmallLogo() {
    return [React.createElement("path", { className: s.letterU, d: "M521.3,0V118.14q0,46.93-21.67,72t-60.87,25.12h-7.18q-39.48,0-60.87-25t-21.39-72.18V0h37.54V118.14q0,17.12,2.48,28.43t7.87,18.36a28.82,28.82,0,0,0,13.8,9.94q8.41,2.9,20.56,2.9h7.18a61.25,61.25,0,0,0,20.43-3,30.88,30.88,0,0,0,14.08-9.94q5.52-6.89,8-18.36t2.48-28.29V0Z" }), React.createElement("rect", { className: s.letterU, x: "520.55", width: "97.74", height: "37.58" }), React.createElement("path", { className: s.letterS, d: "M3.59,215.31V177.77H78.94q17.39,0,28.71-8.28T119,148a24.8,24.8,0,0,0-3-12.14,30.35,30.35,0,0,0-8.28-9.52A39,39,0,0,0,95,120.08a56.18,56.18,0,0,0-16-2.21H61.83a68.86,68.86,0,0,1-24.57-4.28,57.66,57.66,0,0,1-19.6-12.15,56.88,56.88,0,0,1-13-18.49A57.74,57.74,0,0,1,0,59.35,56.59,56.59,0,0,1,4.83,35.89,56,56,0,0,1,18.49,17.11,64.11,64.11,0,0,1,39.75,4.56,78.78,78.78,0,0,1,67.08,0L386.87,0V37.56l-321.73,0q-11.87,0-18.77,6.49a20.65,20.65,0,0,0-6.9,15.6,21.8,21.8,0,0,0,7,16.56q7,6.62,18.63,6.62H86.4a71.15,71.15,0,0,1,26.5,4.83,61.4,61.4,0,0,1,21,13.66,63.13,63.13,0,0,1,13.8,21,69.31,69.31,0,0,1,5,26.5,66.87,66.87,0,0,1-5.25,26.78,59.83,59.83,0,0,1-15,21A70.9,70.9,0,0,1,109,210.34a86.77,86.77,0,0,1-30.09,5ZM65.14,37.54,67.08,0" }), React.createElement("circle", { className: s.dot, cx: "618.29", cy: "171.76", r: "43.54" })];
}
function renderInlineLogo() {
    return [React.createElement("path", { className: s.lettersZTUK, d: "M389.84,47.45,421.43.81h-22L354.19,72.26V.81h-48V19.27h0V58.84A67,67,0,0,1,305,72.73a21.55,21.55,0,0,1-3.93,9,15.16,15.16,0,0,1-6.91,4.88,30.08,30.08,0,0,1-10,1.49h-3.52a31.24,31.24,0,0,1-10.1-1.42,14.15,14.15,0,0,1-6.78-4.88,22.68,22.68,0,0,1-3.86-9,66.65,66.65,0,0,1-1.22-14V.81H161.55l0,18.38h27V88.12H107.86l44.33-69.27A14.26,14.26,0,0,0,154.77,11a8.6,8.6,0,0,0-4-7.39q-4-2.78-10.51-2.78H84V19.23H129.3L85.09,88.52q-3.53,5.56-3.52,9.35,0,8.68,14.1,8.68H207V19.25h33.21V58.84q0,23.18,10.51,35.45t29.89,12.27h3.52q19.25,0,29.89-12.34t10.64-35.38V19.27h11.11V98.15a9.63,9.63,0,0,0,2.17,6.64,7.25,7.25,0,0,0,5.69,2.44,15.27,15.27,0,0,0,5.9-1.15,10,10,0,0,0,4.68-4.27l24.67-38L408,106.55H433Z" }), React.createElement("path", { className: s.letterA, d: "M495.44,5.56a11.09,11.09,0,0,1,4.68-4.27A13.86,13.86,0,0,1,506,0a7,7,0,0,1,5.63,2.51,10.12,10.12,0,0,1,2.1,6.71v97.34h-18.3V35.11l-45.28,71.44h-22Z" }), React.createElement("path", { className: s.letterN, d: "M674.56.55l52.06,73.6V.81h17.62V97.47q0,10.17-6.91,10.17a11.3,11.3,0,0,1-6-1.56,29.17,29.17,0,0,1-5.69-4.81L673.88,33.21v73.34H656.12V.55Z" }), React.createElement("path", { className: s.letterI, d: "M756,106.55V.81h18.44V106.55Z" }), React.createElement("path", { className: s.lettersWE, d: "M954.2,88.12v-26h28.6V43.79H954.2V19.25h33.22V.81H905.66V72.26L864.46,7.18a12.58,12.58,0,0,0-5-5.08A12.86,12.86,0,0,0,853.88.81a12.18,12.18,0,0,0-4.61.88,11.4,11.4,0,0,0-3.8,2.51,12,12,0,0,0-2.57,3.86,12.15,12.15,0,0,0-.95,4.81V72.26L796.67.81h-22l67.24,101a10.57,10.57,0,0,0,4.67,4.2,14.52,14.52,0,0,0,5.9,1.22,7.24,7.24,0,0,0,5.69-2.44,9.63,9.63,0,0,0,2.17-6.64V33.76l45.28,68.05a10.62,10.62,0,0,0,4.68,4.2,14.48,14.48,0,0,0,5.9,1.22,7.25,7.25,0,0,0,5.69-2.44,9.66,9.66,0,0,0,2.17-6.64V19.27h11.65v87.29h63.49V88.12Z" }), React.createElement("path", { className: s.lettersRS, d: "M1157.41,60.87a31,31,0,0,0-6.78-10.3,30.19,30.19,0,0,0-10.3-6.71,34.94,34.94,0,0,0-13-2.37h-10.44a12.8,12.8,0,0,1-9.15-3.25,10.71,10.71,0,0,1-3.46-8.13,10.14,10.14,0,0,1,3.39-7.66q3.39-3.18,9.22-3.19h36.06V.81h-35.11a38.7,38.7,0,0,0-13.42,2.24A31.5,31.5,0,0,0,1094,9.22a27.51,27.51,0,0,0-6.71,9.22A27.84,27.84,0,0,0,1084.88,30a28.38,28.38,0,0,0,2.3,11.59,28,28,0,0,0,6.37,9.08,28.35,28.35,0,0,0,9.63,6,33.79,33.79,0,0,0,12.06,2.1h8.41a27.58,27.58,0,0,1,7.86,1.08,19.19,19.19,0,0,1,6.24,3.05,14.93,14.93,0,0,1,4.07,4.68,12.2,12.2,0,0,1,1.49,6,12.54,12.54,0,0,1-5.56,10.57q-5.56,4.07-14.1,4.07h-65.34l-15.05-16a43.59,43.59,0,0,0,15.59-5.22,35.73,35.73,0,0,0,10-8.61,31.19,31.19,0,0,0,5.42-10.44A38.46,38.46,0,0,0,1075.93,37a37,37,0,0,0-3.12-15.59,32.35,32.35,0,0,0-8.47-11.32,37,37,0,0,0-12.68-6.91A50.31,50.31,0,0,0,1036.08.81H996.9V106.55h18.44V19.25h20.34q10.17,0,15.66,4.54t5.49,13.62q0,9.76-7.12,14.57t-21.89,5.9q-11,.81-11,9.49a9.36,9.36,0,0,0,1.29,4.61,25,25,0,0,0,3.73,4.88l28.06,29.69h73.75a42.61,42.61,0,0,0,14.78-2.44,34.82,34.82,0,0,0,11.45-6.78,29.4,29.4,0,0,0,7.39-10.3,32.84,32.84,0,0,0,2.58-13.15A34.1,34.1,0,0,0,1157.41,60.87Z" }), React.createElement("path", { className: s.letterSecondA, d: "M1217.75,5.56a11.11,11.11,0,0,1,4.68-4.27,13.86,13.86,0,0,1,5.9-1.29,7,7,0,0,1,5.63,2.51,10.13,10.13,0,0,1,2.1,6.71v97.34h-18.3V35.11l-45.28,71.44h-22Z" }), React.createElement("path", { className: s.lettersLN, d: "M1371.88.81V74.15L1320.23,6.23A14.54,14.54,0,0,0,1315.42,2a11.48,11.48,0,0,0-5.08-1.15,8.57,8.57,0,0,0-6.64,2.51,9.52,9.52,0,0,0-2.3,6.71V88.12h-36.19V.81h-18.3V106.55h72.26V33.21l51.79,68.05a29.26,29.26,0,0,0,5.69,4.81,11.31,11.31,0,0,0,6,1.56q6.91,0,6.91-10.17V.81Z" }), React.createElement("path", { className: s.letterThirdA, d: "M1457.93,5.56a11.11,11.11,0,0,1,4.68-4.27,13.86,13.86,0,0,1,5.9-1.29,7,7,0,0,1,5.63,2.51,10.13,10.13,0,0,1,2.1,6.71v97.34h-18.3V35.11l-45.28,71.44h-22Z" }), React.createElement("path", { className: s.letterS, d: "M1.76,106.53V88.09h37q8.54,0,14.1-4.07a12.54,12.54,0,0,0,5.56-10.57,12.18,12.18,0,0,0-1.49-6,14.91,14.91,0,0,0-4.07-4.68,19.16,19.16,0,0,0-6.23-3.05,27.59,27.59,0,0,0-7.86-1.08h-8.4a33.82,33.82,0,0,1-12.07-2.1,28.32,28.32,0,0,1-9.62-6A27.94,27.94,0,0,1,2.3,41.52,28.36,28.36,0,0,1,0,29.93,27.79,27.79,0,0,1,2.37,18.41,27.51,27.51,0,0,1,9.08,9.19,31.49,31.49,0,0,1,19.52,3,38.69,38.69,0,0,1,32.94.78h155.6V19.23H32q-5.83,0-9.22,3.19a10.14,10.14,0,0,0-3.39,7.66,10.7,10.7,0,0,0,3.46,8.13A12.81,12.81,0,0,0,32,41.45H42.43a34.94,34.94,0,0,1,13,2.37,30.15,30.15,0,0,1,10.3,6.71,31,31,0,0,1,6.78,10.3,34,34,0,0,1,2.44,13A32.84,32.84,0,0,1,72.39,87,29.38,29.38,0,0,1,65,97.31a34.82,34.82,0,0,1-11.45,6.78,42.61,42.61,0,0,1-14.78,2.44ZM32,19.22,32.94.78" }), React.createElement("path", { className: s.letterU, d: "M687.43.29H621.36v58a67,67,0,0,1-1.22,13.9,21.55,21.55,0,0,1-3.93,9,15.16,15.16,0,0,1-6.91,4.88,30.08,30.08,0,0,1-10,1.49h-3.52a31.24,31.24,0,0,1-10.1-1.42,14.15,14.15,0,0,1-6.78-4.88,22.68,22.68,0,0,1-3.86-9,66.65,66.65,0,0,1-1.22-14V.29H555.34v58q0,23.18,10.51,35.45T595.74,106h3.52q19.25,0,29.89-12.34T639.8,58.31V18.74h47.63Z" }), React.createElement("circle", { className: s.dot, cx: "1513.22", cy: "85.02", r: "21.39" })];
}
function renderFullLogo() {
    return renderInlineLogo().concat([React.createElement("path", { className: s.signed, d: "M1251.23,174.79a7.92,7.92,0,0,1,1.72,5.83,17.82,17.82,0,0,1-2.44,7.73,35.81,35.81,0,0,1-2.76,4.7,41.73,41.73,0,0,1-3.66,4.61,42.21,42.21,0,0,1-7,6.1q-3.85,2.67-7.82,5.2a3.09,3.09,0,0,1-2.62.54,3.37,3.37,0,0,1-2-1.54,3.46,3.46,0,0,1-.36-2.48,3.15,3.15,0,0,1,1.36-2.12q4.25-2.72,7.68-5.11a31.09,31.09,0,0,0,6-5.38,35.23,35.23,0,0,0,3-3.89,23.08,23.08,0,0,0,2.12-3.8,14.43,14.43,0,0,0,1.08-2.94,2.64,2.64,0,0,0-.45-2.22,2.28,2.28,0,0,0-1.36-.86,8.06,8.06,0,0,0-2.62,0,28.47,28.47,0,0,0-5.61,1.36,32.9,32.9,0,0,0-6.33,2.89,19.63,19.63,0,0,0-3,2.17,8.6,8.6,0,0,0-2.17,2.8c-.12.3-.23.59-.32.86l-.31,1a13.68,13.68,0,0,0-.14,2.48q0,1.22.14,2.31a3.47,3.47,0,0,1-1,2.49,3.51,3.51,0,0,1-2.12.95,3.1,3.1,0,0,1-2.22-.72,4.14,4.14,0,0,1-1.4-2.53,38.11,38.11,0,0,1-.68-6.19q-.13-3.57,0-7.6t.5-8.32q.36-4.29.86-8.27t1-7.46q.54-3.48,1.08-6c.18-1,.38-1.82.59-2.58a6.59,6.59,0,0,1,1-2.12,3.67,3.67,0,0,1,3.53-1.63,3.37,3.37,0,0,1,2.26.77,2.33,2.33,0,0,1,.72,2.21,5.57,5.57,0,0,1-.63,2.12,9.65,9.65,0,0,0-.72,1.67q-.45,2.62-.95,5.92t-1,7.05q-.5,3.75-.86,7.73t-.54,7.87a12.54,12.54,0,0,1,2.35-2.12,21.46,21.46,0,0,1,2.89-1.76,51.43,51.43,0,0,1,6.06-2.49,35.38,35.38,0,0,1,7.05-1.67,13.85,13.85,0,0,1,6.1.23A8.88,8.88,0,0,1,1251.23,174.79Z" }), React.createElement("path", { className: s.signed, d: "M1299,178.32q.18,2.08.18,5.42t-.27,7.46q-.26,4.11-.66,8.77t-1,9.45q-.62,4.79-1.32,9.49t-1.59,8.86a3.5,3.5,0,0,1-1.59,2.53,3.43,3.43,0,0,1-2.51.45,3.24,3.24,0,0,1-2.22-1.31,3.47,3.47,0,0,1-.41-3q1.09-4.25,1.9-9.49t1.36-10.67q.54-5.43.86-10.62t.41-9.36a1.69,1.69,0,0,0-.18-1.18,1.18,1.18,0,0,0-.77-.45,1.65,1.65,0,0,0-1,.18,3.86,3.86,0,0,0-1,.72q-1.45,1.36-3.62,3.26t-4.61,3.93q-2.44,2-4.93,3.93t-4.56,3.26a20.46,20.46,0,0,1-7.28,2.94,8,8,0,0,1-6.55-1.85,12.17,12.17,0,0,1-2.12-2.71,9.4,9.4,0,0,1-1.13-4.61A17.8,17.8,0,0,1,1255,189a31.41,31.41,0,0,1,1.76-4.84,41.52,41.52,0,0,1,2.31-4.34,26.34,26.34,0,0,1,2.21-3.17,3.57,3.57,0,0,1,2.35-1.45,4.26,4.26,0,0,1,2.35.27,3.24,3.24,0,0,1,1.81,2.12,3.61,3.61,0,0,1-1,3.12,20.08,20.08,0,0,0-1.72,2.53q-.91,1.54-1.72,3.16a20.9,20.9,0,0,0-1.31,3.26,10,10,0,0,0-.5,2.89,3,3,0,0,0,.36,1.58,5.09,5.09,0,0,0,.72.95,2.19,2.19,0,0,0,2.12.54,9.68,9.68,0,0,0,3.12-1.45q2.71-1.72,5.65-4t5.92-4.88q3-2.58,5.83-5.2t5.29-5a4.53,4.53,0,0,1,2.59-1.45,5.55,5.55,0,0,1,2.83.18,4.66,4.66,0,0,1,2,1.54A5.55,5.55,0,0,1,1299,178.32Z" }), React.createElement("path", { className: s.signed, d: "M1406.82,183.38a12.56,12.56,0,0,1-3,8q-2.93,3.53-9.06,5.88-4,1.54-8.38,3t-8.38,3q-10,3.71-18.08,3.39T1347.32,202q-4.69-4.43-4.69-12.75a26.66,26.66,0,0,1,1.4-8,46.88,46.88,0,0,1,3.8-8.72,49.5,49.5,0,0,1,5.61-8,31,31,0,0,1,6.73-6,4.56,4.56,0,0,1,1.49-2.94,3.19,3.19,0,0,1,3.21-.41,5.82,5.82,0,0,1,2.35,1.67,2.22,2.22,0,0,1,.54,2.49,1.87,1.87,0,0,0,1.45.18,33.84,33.84,0,0,1,7.46-.09,26.1,26.1,0,0,1,9,2.8q3.71,1.81,7.42,4.07a76.4,76.4,0,0,1,6.87,4.7,19.37,19.37,0,0,1,5.11,5.79A13.4,13.4,0,0,1,1406.82,183.38Zm-6.87.18q0-3.17-4.6-7.32a43,43,0,0,0-5.73-4.11q-3.21-1.94-6.81-3.75a23.7,23.7,0,0,0-8.39-2.4,31.08,31.08,0,0,0-7.4.23,5.72,5.72,0,0,1-2.57,0,2.14,2.14,0,0,1-1.67-1.31,24.12,24.12,0,0,0-4.83,5,51,51,0,0,0-4.29,6.83,47.42,47.42,0,0,0-3,7,18.45,18.45,0,0,0-1.13,5.56,20.71,20.71,0,0,0,.9,4.88,7.89,7.89,0,0,0,2.26,3.62q2.62,2.44,8.08,2.4t15-3.21l8.21-2.76q4.42-1.49,8.21-3a19.1,19.1,0,0,0,6-3.66A5.59,5.59,0,0,0,1399.95,183.56Z" }), React.createElement("path", { className: s.signed, d: "M1454.74,193.6a3.4,3.4,0,0,1,0,2.49,3.75,3.75,0,0,1-2.31,2l-6,2.08a71,71,0,0,1-7.73,2.17,47.6,47.6,0,0,1-8.23,1.08,17.72,17.72,0,0,1-7.5-1.17,13.31,13.31,0,0,1-7.78-8.23,42.9,42.9,0,0,1-2-14.65,44.63,44.63,0,0,1,.72-7.87,58.11,58.11,0,0,1,4.74-14.87,41.23,41.23,0,0,1,3.21-5.65,24.82,24.82,0,0,1,5.74-6.06,7.16,7.16,0,0,1,5.38-1.54q2.71.36,4.47,3.48t2.12,9.27a38.62,38.62,0,0,1,0,5.29,54.64,54.64,0,0,1-.68,5.74q-.5,2.89-1.27,5.65a37.85,37.85,0,0,1-1.76,5,38.78,38.78,0,0,1-2.49,4.84q-1.4,2.3-2.94,4.39T1427.3,191q-1.58,1.81-3,3.35a11.51,11.51,0,0,0,1.67,1.08,6.89,6.89,0,0,0,2.12.82,18.12,18.12,0,0,0,5,0,43.88,43.88,0,0,0,5.61-1q2.89-.72,5.88-1.67t5.69-1.95a3.47,3.47,0,0,1,2.8.09A3.31,3.31,0,0,1,1454.74,193.6Zm-22.06-36.07q-.27-5-1.8-5.34t-3.95,3.44a31.84,31.84,0,0,0-2.33,4.47q-1.17,2.67-2.2,5.88a51.8,51.8,0,0,0-1.66,6.69,44.92,44.92,0,0,0-.72,6.74,21.12,21.12,0,0,0,1.26,8.41q2.33-2.8,4.67-6a34.45,34.45,0,0,0,3.86-6.83,36.06,36.06,0,0,0,1.12-3.48,45.48,45.48,0,0,0,1-4.56q.4-2.44.63-4.88A33.28,33.28,0,0,0,1432.68,157.52Z" }), React.createElement("path", { className: s.signed, d: "M1488.1,193.87a3.21,3.21,0,0,1,.23,2.53,2.92,2.92,0,0,1-2.12,1.9q-2.08.73-5.34,2t-7.14,2.48a52.93,52.93,0,0,1-8.23,1.76,27.66,27.66,0,0,1-8.5-.14,11.26,11.26,0,0,1-6.42-3q-4.16-4-2.8-11.3a28.71,28.71,0,0,1,1.76-6.42,41.19,41.19,0,0,1,2.67-5.42,39.8,39.8,0,0,1,2.94-4.34,35.77,35.77,0,0,1,2.76-3.16q1.27-1.27,2.53-2.31a10.86,10.86,0,0,1,2.26-1.49,15.73,15.73,0,0,1,2.4-.95,13.53,13.53,0,0,1,2.71-.54,12.15,12.15,0,0,1,2.76,0,6.38,6.38,0,0,1,2.53.9,5.73,5.73,0,0,1,2.08,2.08,8.67,8.67,0,0,1,1,2.75,12.19,12.19,0,0,1,.14,3.17,22.06,22.06,0,0,1-.5,3.21,14.26,14.26,0,0,1-3,5.56,25.37,25.37,0,0,1-5.2,4.56,32,32,0,0,1-6.42,3.3,24.45,24.45,0,0,1-6.6,1.58,4.78,4.78,0,0,0,.72,3.57,4.61,4.61,0,0,0,3,1.67,17.3,17.3,0,0,0,6.74.14,54.51,54.51,0,0,0,7.23-1.67q3.57-1.08,6.78-2.35t5.29-1.9a2.82,2.82,0,0,1,2.4.14A3.57,3.57,0,0,1,1488.1,193.87Zm-18.72-17.72q.63-2.8-.36-3.71a2.56,2.56,0,0,0-1.81-.27,6,6,0,0,0-1.9.63,16.61,16.61,0,0,0-2.8,2.35,27.55,27.55,0,0,0-3.66,4.66,23.47,23.47,0,0,0-2.67,5.65,20.14,20.14,0,0,0,4.16-1.27,23.66,23.66,0,0,0,4.07-2.17,16.24,16.24,0,0,0,3.21-2.76A8,8,0,0,0,1469.38,176.15Z" }), React.createElement("path", { className: s.signed, d: "M1524.72,193.6a3.4,3.4,0,0,1,0,2.49,3.75,3.75,0,0,1-2.31,2l-6,2.08a71,71,0,0,1-7.73,2.17,47.6,47.6,0,0,1-8.23,1.08,17.72,17.72,0,0,1-7.5-1.17,13.31,13.31,0,0,1-7.78-8.23,42.9,42.9,0,0,1-2-14.65,44.63,44.63,0,0,1,.72-7.87,58.11,58.11,0,0,1,4.74-14.87,41.23,41.23,0,0,1,3.21-5.65,24.82,24.82,0,0,1,5.74-6.06,7.16,7.16,0,0,1,5.38-1.54q2.71.36,4.47,3.48t2.12,9.27a38.62,38.62,0,0,1,0,5.29,54.64,54.64,0,0,1-.68,5.74q-.5,2.89-1.27,5.65a37.85,37.85,0,0,1-1.76,5,38.78,38.78,0,0,1-2.49,4.84q-1.4,2.3-2.94,4.39t-3.12,3.89q-1.58,1.81-3,3.35a11.51,11.51,0,0,0,1.67,1.08,6.89,6.89,0,0,0,2.12.82,18.12,18.12,0,0,0,5,0,43.88,43.88,0,0,0,5.61-1q2.89-.72,5.88-1.67t5.69-1.95a3.47,3.47,0,0,1,2.8.09A3.31,3.31,0,0,1,1524.72,193.6Zm-22.06-36.07q-.27-5-1.8-5.34t-3.95,3.44a31.84,31.84,0,0,0-2.33,4.47q-1.17,2.67-2.2,5.88a51.8,51.8,0,0,0-1.66,6.69,44.92,44.92,0,0,0-.72,6.74,21.12,21.12,0,0,0,1.26,8.41q2.33-2.8,4.67-6a34.45,34.45,0,0,0,3.86-6.83,36.06,36.06,0,0,0,1.12-3.48,45.48,45.48,0,0,0,1-4.56q.4-2.44.63-4.88A33.28,33.28,0,0,0,1502.65,157.52Z" }), React.createElement("path", { className: s.signed, d: "M1571.28,193.42a3.44,3.44,0,0,1,.68,2.71,3.38,3.38,0,0,1-1.67,2.44,46,46,0,0,1-7,3.12,32.12,32.12,0,0,1-7.28,1.76,14.19,14.19,0,0,1-6.1-.45,7.74,7.74,0,0,1-3.66-3.16,7.66,7.66,0,0,1-1.13-2.44,10,10,0,0,1-.5-2.89.89.89,0,0,0-.68-.86,1.61,1.61,0,0,0-1.31.41,26.75,26.75,0,0,0-2.4,1.76q-1.4,1.13-3,2.48t-3.21,2.8q-1.63,1.44-3.08,2.62a11.76,11.76,0,0,1-6.42,2.76,6.54,6.54,0,0,1-4.88-1.58q-2.35-2.08-2.35-6.24a17.82,17.82,0,0,1,.63-3.93,21,21,0,0,1,1.45-3.75,33.91,33.91,0,0,1,3.35-5.33,55.55,55.55,0,0,1,4.2-4.93,51.88,51.88,0,0,1,4.48-4.16q2.26-1.85,4.16-3.12,1.62-1.08,3.71-2.3a16.63,16.63,0,0,1,4.48-1.81,13.28,13.28,0,0,1,5-.23,10.57,10.57,0,0,1,5.24,2.53,3.19,3.19,0,0,1,1.27,2.17,3.84,3.84,0,0,1-.45,2.17,3.52,3.52,0,0,1-2.3,1.67,3.74,3.74,0,0,1-3-.5,5.66,5.66,0,0,0-4.57-1.22,15.44,15.44,0,0,0-5.83,2.67,37.73,37.73,0,0,0-3.66,2.85,47.32,47.32,0,0,0-3.93,3.84q-1.9,2.08-3.57,4.29a25.28,25.28,0,0,0-2.67,4.29,7.92,7.92,0,0,0-.72,2.62q-.18,1.54.54,2.08,1,.81,2.89-.82,1.36-1.17,3.39-2.89t4.21-3.48q2.17-1.76,4.29-3.39a45.15,45.15,0,0,1,3.75-2.62,9.39,9.39,0,0,1,2.76-1.13,5.41,5.41,0,0,1,2.49,0,2.9,2.9,0,0,1,1.72,1.17,4.2,4.2,0,0,1,.63,2.44,25.18,25.18,0,0,0,0,3.39,10.07,10.07,0,0,0,.59,2.76,3.66,3.66,0,0,0,1.49,2.08,4.43,4.43,0,0,0,2.49.45,27,27,0,0,0,2.71-.59q1.54-.41,3.07-.95t3-1.13q1.49-.59,2.58-1.13a3.14,3.14,0,0,1,4.07.72Z" })]);
}
function getDimensions(variant) {
    switch (variant) {
        case 'small':
            return [661.83, 215.31];
        case 'inline':
            return [1572, 107.8];
        case 'full':
            return [1572, 230.83];
    }
}
exports.default = withStyles_1.default(s)(Logo);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var withStyles_1 = __webpack_require__(6);
var Button_1 = __webpack_require__(23);
var s = __webpack_require__(182);
function Tags(_a) {
    var website = _a.website,
        page = _a.page;
    if (page.tags.length == 0) {
        return null;
    }
    return React.createElement("ul", { className: s.tags }, page.tags.map(function (title) {
        return website.getTagOfTitle(title);
    }).map(function (_a) {
        var title = _a.title,
            url = _a.url;
        return React.createElement("li", { key: url }, React.createElement(Button_1.default, { url: url }, title));
    }));
}
exports.Tags = Tags;
exports.default = withStyles_1.default(s)(Tags);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
function Crumbs(_a) {
    var website = _a.website,
        page = _a.page;
    return React.createElement("div", null, page.getCrumbs(website).map(function (crumbs, key) {
        return React.createElement("div", { key: key }, crumbs.map(function (page, key) {
            return React.createElement("span", { key: key }, key ? ' → ' : '', React.createElement(react_router_dom_1.Link, { to: page.url }, page.title));
        }));
    }));
}
exports.Crumbs = Crumbs;
exports.default = Crumbs;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
function TagList(_a) {
    var website = _a.website,
        page = _a.page;
    if (page.tags.length == 0) {
        return null;
    }
    return React.createElement("ul", null, page.tags.map(function (title) {
        return website.getTagOfTitle(title);
    }).map(function (_a) {
        var originalTitle = _a.originalTitle,
            url = _a.url;
        return React.createElement("li", { key: url }, React.createElement(react_router_dom_1.Link, { to: url }, originalTitle));
    }));
}
exports.TagList = TagList;
exports.default = TagList;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
var models_1 = __webpack_require__(9);
;
exports.TableOfContents = function (_a) {
    var website = _a.website,
        _b = _a.respectLimit,
        respectLimit = _b === void 0 ? false : _b;
    var topLevel = Object.keys(website.pages).map(function (key) {
        return website.pages[key];
    }).concat(Object.keys(website.categories).map(function (key) {
        return website.categories[key];
    })).filter(function (page) {
        return page.categories.length == 0;
    }).filter(function (page) {
        return page.url != '/';
    });
    var tags = Object.keys(website.tags).map(function (key) {
        return website.tags[key];
    });
    return React.createElement("ul", null, React.createElement("li", { key: '/' }, React.createElement(react_router_dom_1.Link, { to: '/' }, website.getPageOfUrl('/').title), React.createElement(Branch, { pages: topLevel, shallow: respectLimit, ellipsis: respectLimit })), !respectLimit ? tags.map(function (_a) {
        var title = _a.title,
            url = _a.url,
            pages = _a.pages;
        return React.createElement("li", { key: url }, React.createElement(react_router_dom_1.Link, { to: url }, title), React.createElement(Branch, { pages: pages, shallow: true }));
    }) : null);
};
function Branch(_a) {
    var pages = _a.pages,
        _b = _a.shallow,
        shallow = _b === void 0 ? false : _b,
        _c = _a.ellipsis,
        ellipsis = _c === void 0 ? false : _c;
    return React.createElement("ul", null, pages.filter(function (page) {
        return page instanceof models_1.Category;
    }).filter(function (page) {
        return page.output;
    }).map(function (page) {
        return page;
    }).map(function (_a) {
        var url = _a.url,
            title = _a.title,
            pages = _a.pages;
        return React.createElement("li", { key: url }, React.createElement(react_router_dom_1.Link, { to: url }, title), !shallow ? React.createElement(Branch, { pages: pages }) : null);
    }), pages.filter(function (page) {
        return !(page instanceof models_1.Category);
    }).filter(function (page) {
        return page.output;
    }).map(function (_a) {
        var title = _a.title,
            url = _a.url;
        return React.createElement("li", { key: url }, React.createElement(react_router_dom_1.Link, { to: url }, title));
    }), ellipsis ? React.createElement("li", { key: 'ellipsis' }, "\u2026") : null);
}
exports.Branch = Branch;
exports.default = exports.TableOfContents;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = {
	"title": "SztukaUniwersalna.PL",
	"timezone": "Europe/Warsaw",
	"collections": {
		"categories": {
			"title": "Categories",
			"output": false,
			"layout": "ParrotLayout"
		},
		"drafts": {
			"title": "Drafts",
			"output": false,
			"layout": "ParrotLayout"
		},
		"pages": {
			"title": "Pages",
			"output": false,
			"layout": "ParrotLayout"
		},
		"posts": {
			"title": "Posts",
			"output": true,
			"layout": "ParrotLayout"
		},
		"uploads": {
			"title": "Uploads",
			"output": false
		}
	},
	"baseurl": "//sztukauniwersalna.pl/",
	"menu": [
		{
			"title": "Sztuka Ubioru",
			"short": "Moda",
			"url": "/sztuka-ubioru",
			"icon": "content_cut"
		},
		{
			"title": "Sztuka Makijażu",
			"short": "Makijaż",
			"url": "/sztuka-makijazu",
			"icon": "remove_red_eye"
		},
		{
			"title": "Sztuka Gotowania",
			"short": "Kuchnia",
			"url": "/sztuka-gotowania",
			"icon": "restaurant"
		},
		{
			"title": "Sztuka dla Sztuki",
			"short": "Sztuka",
			"url": "/sztuka-dla-sztuki",
			"icon": "palette"
		},
		{
			"title": "Kim jest Olela?",
			"short": "O mnie",
			"url": "/kim-jest-olela",
			"icon": "mood"
		}
	]
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var collections_1 = __webpack_require__(50);
var pages = collections_1.default.reduce(function (p, c) {
    return p.concat(c.pages);
}, []).filter(function (page) {
    return !(page instanceof models_1.Category);
});
exports.default = pages;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var collections_1 = __webpack_require__(50);
var categories = collections_1.default.reduce(function (p, c) {
    return p.concat(c.pages);
}, []).filter(function (page) {
    return page instanceof models_1.Category;
});
exports.default = categories;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __read = undefined && undefined.__read || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = undefined && undefined.__spread || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var react_dom_1 = __webpack_require__(80);
var server_1 = __webpack_require__(51);
var react_router_dom_1 = __webpack_require__(1);
var react_hot_loader_1 = __webpack_require__(81);
var PropTypes = __webpack_require__(26);
var Root_1 = __webpack_require__(89);
var IsomorphicStyleContext_1 = __webpack_require__(90);
var routes_1 = __webpack_require__(91);
var data_1 = __webpack_require__(53);
var css = new Set();
// context for catching css modules during static rendering
var CssCaptureContext = /** @class */function (_super) {
    __extends(CssCaptureContext, _super);
    function CssCaptureContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CssCaptureContext.prototype.getChildContext = function () {
        return {
            insertCss: function insertCss() {
                var styles = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    styles[_i] = arguments[_i];
                }
                styles.forEach(function (s) {
                    return css.add(s._getCss());
                });
            }
        };
    };
    CssCaptureContext.prototype.render = function () {
        return react_1.Children.only(this.props.children);
    };
    CssCaptureContext.childContextTypes = {
        insertCss: PropTypes.func.isRequired
    };
    return CssCaptureContext;
}(react_1.Component);
var serverRender = function serverRender(locals) {
    // react root contents rendered with react ids
    var child = react_1.createElement(react_router_dom_1.Switch, {}, routes_1.default);
    var router = react_1.createElement(react_router_dom_1.StaticRouter, { location: locals.path, context: {} }, child);
    var context = react_1.createElement(CssCaptureContext, {}, router);
    var body = server_1.renderToString(context);
    // site skeleton rendered without react ids and with prerendered css modules
    var page = data_1.default.entities[locals.path] || { tags: [], description: '' };
    var root = react_1.createElement(Root_1.default, Object.assign({ css: __spread(css) }, locals, page));
    var html = server_1.renderToStaticMarkup(root);
    // everything together
    return '<!DOCTYPE html>\n' + html.replace("%%%BODY%%%", body);
};
var clientRender = function clientRender() {
    var container = document.getElementById('root');
    var child = react_1.createElement(react_router_dom_1.Switch, {}, routes_1.default);
    var router = react_1.createElement(react_router_dom_1.BrowserRouter, {}, child);
    var context = react_1.createElement(IsomorphicStyleContext_1.default, { children: router });
    var app = react_1.createElement(react_hot_loader_1.AppContainer, {}, context);
    react_dom_1.render(app, container);
};
if (typeof window !== 'undefined') {
    window.addEventListener('load', clientRender);
}
exports.default = serverRender;
if (false) {
    module.hot.accept('./routes', clientRender);
}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable global-require */



if (true) {
  module.exports = __webpack_require__(83);
} else {
  module.exports = require('./index.dev');
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.AppContainer = __webpack_require__(84);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable global-require */



if (true) {
  module.exports = __webpack_require__(85);
} else {
  module.exports = require('./AppContainer.dev');
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var Component = React.Component;

var AppContainer = function (_Component) {
  _inherits(AppContainer, _Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
  }

  _createClass(AppContainer, [{
    key: 'render',
    value: function render() {
      if (this.props.component) {
        return React.createElement(this.props.component, this.props.props);
      }

      return React.Children.only(this.props.children);
    }
  }]);

  return AppContainer;
}(Component);

module.exports = AppContainer;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(27);
var invariant = __webpack_require__(28);
var warning = __webpack_require__(52);

var ReactPropTypesSecret = __webpack_require__(29);
var checkPropTypes = __webpack_require__(87);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(28);
  var warning = __webpack_require__(52);
  var ReactPropTypesSecret = __webpack_require__(29);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(27);
var invariant = __webpack_require__(28);
var ReactPropTypesSecret = __webpack_require__(29);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.default = function (_a) {
    var title = _a.title,
        path = _a.path,
        tags = _a.tags,
        description = _a.description,
        css = _a.css,
        scripts = _a.scripts,
        stylesheets = _a.stylesheets;
    return React.createElement("html", null, React.createElement("head", null, React.createElement("title", null, title), React.createElement("meta", { name: "path", content: path }), React.createElement("meta", { name: "keywords", content: tags.join(', ') }), React.createElement("meta", { name: "description", content: description }), React.createElement("style", { type: "text/css" }, css.join(''))), React.createElement("body", null, React.createElement("div", { id: "root" }, "%%%BODY%%%"), scripts.map(function (src) {
        return React.createElement("script", { type: 'text/javascript', src: src, key: src });
    }), stylesheets.map(function (src) {
        return React.createElement("link", { type: 'text/css', rel: 'stylesheet', href: src, key: src });
    })));
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var PropTypes = __webpack_require__(26);
var IsomorphicStyleContext = /** @class */function (_super) {
    __extends(IsomorphicStyleContext, _super);
    function IsomorphicStyleContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsomorphicStyleContext.prototype.getChildContext = function () {
        return {
            insertCss: function insertCss() {
                var styles = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    styles[_i] = arguments[_i];
                }
                var removeCss = styles.map(function (x) {
                    return x._insertCss();
                });
                return function () {
                    removeCss.forEach(function (f) {
                        return f();
                    });
                };
            }
        };
    };
    IsomorphicStyleContext.prototype.render = function () {
        return react_1.Children.only(this.props.children);
    };
    IsomorphicStyleContext.childContextTypes = {
        insertCss: PropTypes.func.isRequired
    };
    return IsomorphicStyleContext;
}(react_1.Component);
exports.IsomorphicStyleContext = IsomorphicStyleContext;
exports.default = IsomorphicStyleContext;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
var data_1 = __webpack_require__(53);
var NOT_FOUND_URL = '/404';
var error404 = data_1.default.pages[NOT_FOUND_URL];
if (error404 == undefined) {
    throw new Error("couldn't find page of url " + NOT_FOUND_URL);
}
var key = 0;
function createRoute(page, path, exact) {
    if (path === void 0) {
        path = page.url;
    }
    if (exact === void 0) {
        exact = true;
    }
    var component = function component() {
        return react_1.createElement(page.layout.component, { website: data_1.default, page: page });
    };
    var routeProps = { path: path, exact: exact, key: key++, component: component };
    var route = react_1.createElement(react_router_dom_1.Route, routeProps);
    return route;
}
var routes = [].concat.call(
// categories
Object.keys(data_1.default.categories).map(function (title) {
    return data_1.default.categories[title];
}).filter(function (category) {
    return category.output;
}).map(function (category) {
    return createRoute(category);
}),
// tags
Object.keys(data_1.default.tags).map(function (title) {
    return createRoute(data_1.default.tags[title]);
}),
// pages
Object.keys(data_1.default.pages).map(function (title) {
    return data_1.default.pages[title];
}).filter(function (page) {
    return page.output;
}).map(function (page) {
    return createRoute(page);
}),
// 404 with exact = false (must be at the end)
[createRoute(error404, '/', false)]);
exports.default = routes;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function stripTags(htmlText) {
    var uIndentionChar = "-";
    var oIndentionChar = "-";
    // removel all \n linebreaks
    var tmp = String(htmlText).replace(/\n|\r/g, " ");
    // remove everything before and after <body> tags including the tag itself
    tmp = tmp.replace(/<\/body>.*/i, "");
    tmp = tmp.replace(/.*<body[^>]*>/i, "");
    // remove inbody scripts and styles
    tmp = tmp.replace(/<(script|style)( [^>]*)*>((?!<\/\1( [^>]*)*>).)*<\/\1>/gi, "");
    // remove all tags except that are being handled separately
    tmp = tmp.replace(/<(\/)?((?!h[1-6]( [^>]*)*>)(?!img( [^>]*)*>)(?!a( [^>]*)*>)(?!ul( [^>]*)*>)(?!ol( [^>]*)*>)(?!li( [^>]*)*>)(?!p( [^>]*)*>)(?!div( [^>]*)*>)(?!td( [^>]*)*>)(?!br( [^>]*)*>)[^>\/])[^>]*>/gi, "");
    // remove or replace images - replacement texts with <> tags will be removed also, if not intentional, try to use other notation
    tmp = tmp.replace(/<img([^>]*)>/gi, function (str, imAttrs) {
        var imSrc = "";
        var imAlt = "";
        var imSrcResult = /src="([^"]*)"/i.exec(imAttrs);
        var imAltResult = /alt="([^"]*)"/i.exec(imAttrs);
        if (imSrcResult !== null) {
            imSrc = imSrcResult[1];
        }
        if (imAltResult !== null) {
            imAlt = imAltResult[1];
        }
        return imAlt;
    });
    function createListReplaceCb() {
        return function (match, listType, listAttributes, listBody) {
            var liIndex = 0;
            var startMatch;
            if (listAttributes && (startMatch = /start="([0-9]+)"/i.exec(listAttributes)) !== null) {
                liIndex = parseInt(startMatch[1]) - 1;
            }
            var plainListItem = "<p>" + listBody.replace(/<li[^>]*>(((?!<li[^>]*>)(?!<\/li>).)*)<\/li>/gi, function (str, listItem) {
                var actSubIndex = 0;
                var plainListLine = listItem.replace(/(^|(<br \/>))(?!<p>)/gi, function () {
                    if (listType === "o" && actSubIndex === 0) {
                        liIndex += 1;
                        actSubIndex += 1;
                        return "<br />" + liIndex + oIndentionChar;
                    }
                    return "<br />";
                });
                return plainListLine;
            }) + "</p>";
            return plainListItem;
        };
    }
    // handle lists
    tmp = tmp.replace(/<\/?ul[^>]*>|<\/?ol[^>]*>|<\/?li[^>]*>/gi, "");
    // handle headings
    tmp = tmp.replace(/<h([1-6])[^>]*>([^<]*)<\/h\1>/gi, " $2 ");
    // replace <br>s, <td>s, <divs> and <p>s with linebreaks
    tmp = tmp.replace(/<br( [^>]*)*>|<p( [^>]*)*>|<\/p( [^>]*)*>|<div( [^>]*)*>|<\/div( [^>]*)*>|<td( [^>]*)*>|<\/td( [^>]*)*>/gi, "");
    // replace <a href>b<a> links with b (href)
    tmp = tmp.replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]+)<\/a[^>]*>/gi, function (str, href, linkText) {
        return " " + linkText + " ";
    });
    // remove duplicated spaces including non braking spaces
    tmp = tmp.replace(/( |&nbsp;|\t)+/gi, " ");
    // remove line starter spaces
    tmp = tmp.replace(/\n +/gi, "");
    // remove content starter spaces
    tmp = tmp.replace(/^ +/gi, "");
    return tmp;
}
exports.stripTags = stripTags;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Collection = /** @class */function () {
    function Collection(title, layout, output) {
        this.pages = [];
        this.title = title;
        this.layout = layout;
        this.output = output;
    }
    return Collection;
}();
exports.default = Collection;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Layout = /** @class */function () {
    function Layout(name, component) {
        this.name = name;
        this.component = component;
    }
    return Layout;
}();
exports.default = Layout;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Include = /** @class */function () {
    function Include(name, component) {
        this.name = name;
        this.component = component;
    }
    return Include;
}();
exports.default = Include;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var MenuEntry = /** @class */function () {
    function MenuEntry(title, short, url, icon) {
        this.title = title;
        this.short = short;
        this.url = url;
        this.icon = icon;
    }
    return MenuEntry;
}();
exports.default = MenuEntry;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Category_1 = __webpack_require__(54);
var Tag_1 = __webpack_require__(55);
var Website = /** @class */function () {
    function Website() {
        this.layouts = {};
        this.includes = {};
        this.collections = {};
        this.categories = {};
        this.tags = {};
        this.pages = {};
        this.entities = {};
    }
    Website.prototype.addLayout = function (layout) {
        if (this.layouts[layout.name] != undefined) {
            throw new Error("layout of name " + layout.name + " is already added to the config");
        }
        this.layouts[layout.name] = layout;
    };
    Website.prototype.getLayoutOfName = function (name, requiredBy) {
        var layout = this.layouts[name];
        if (layout == undefined) {
            throw new Error("couldn't find layout of name " + name + " required by " + requiredBy);
        }
        return layout;
    };
    Website.prototype.addInclude = function (include) {
        if (this.includes[include.name] != undefined) {
            throw new Error("include of name " + include.name + " is already added to the config");
        }
        this.includes[include.name] = include;
    };
    Website.prototype.getIncludeOfName = function (name, requiredBy) {
        var include = this.includes[name];
        if (include == undefined) {
            throw new Error("couldn't find include of name " + name + (requiredBy ? ' required by ' + requiredBy : ''));
        }
        return include;
    };
    Website.prototype.addCollection = function (collection) {
        if (this.collections[collection.title] != undefined) {
            throw new Error("collection of title " + collection.title + " is already added to the config");
        }
        this.collections[collection.title] = collection;
    };
    Website.prototype.getCollectionOfTitle = function (title, requiredBy) {
        var collection = this.collections[title];
        if (collection == undefined) {
            throw new Error("couldn't find collection of title '" + title + "'" + (requiredBy ? ' required by ' + requiredBy : ''));
        }
        return collection;
    };
    Website.prototype.addPage = function (page) {
        if (page instanceof Category_1.default) {
            throw new Error("page '" + page.title + "' is a category");
        }
        if (page instanceof Tag_1.default) {
            throw new Error("page '" + page.title + "' is a tag");
        }
        this.addEntity(page);
        this.pages[page.url] = page;
    };
    Website.prototype.getPageOfUrl = function (url, requiredBy) {
        var page = this.pages[url];
        if (page == undefined) {
            throw new Error("couldn't find page of url '" + url + "'" + (requiredBy ? ' required by ' + requiredBy : ''));
        }
        return page;
    };
    Website.prototype.addCategory = function (category) {
        this.addEntity(category);
        var title = category.title;
        var previous = this.categories[title];
        if (previous != undefined) {
            throw new Error("detected two categories of the same title ('" + title + "'): " + previous + " and " + category);
        }
        this.categories[title] = category;
    };
    Website.prototype.getCategoryOfTitle = function (title, requiredBy) {
        var category = this.categories[title];
        if (category == undefined) {
            throw new Error("couldn't find category of title '" + title + "'" + (requiredBy ? ' required by ' + requiredBy : ''));
        }
        return category;
    };
    Website.prototype.addTag = function (tag) {
        this.addEntity(tag);
        var title = tag.originalTitle;
        var previous = this.tags[title];
        if (previous != undefined) {
            throw new Error("detected two tags of the same title ('" + title + "'): " + previous + " and " + tag);
        }
        this.tags[title] = tag;
    };
    Website.prototype.getTagOfTitle = function (title, requiredBy) {
        var tag = this.tags[title];
        if (tag == undefined) {
            throw new Error("couldn't find tag of title '" + title + "'" + (requiredBy ? ' required by ' + requiredBy : ''));
        }
        return tag;
    };
    Website.prototype.addEntity = function (page) {
        var url = page.url;
        var previous = this.entities[url];
        if (previous != undefined) {
            throw new Error("detected two pages with the same url (" + url + "): '" + previous.title + "' and '" + page.title + "'");
        }
        this.entities[url] = page;
    };
    Website.prototype.getEntityOfUrl = function (url, requiredBy) {
        var entity = this.entities[url];
        if (entity == undefined) {
            throw new Error("couldn't find entity of url '" + url + "'" + (requiredBy ? ' required by ' + requiredBy : ''));
        }
        return entity;
    };
    return Website;
}();
exports.default = Website;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 98;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sztuka-dla-sztuki.markdown": 100,
	"./sztuka-gotowania.markdown": 101,
	"./sztuka-makijazu.markdown": 102,
	"./sztuka-ubioru.markdown": 103
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 99;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 5 }, data),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Feed, _extends({}, data, { feed: data.website.getCategoryOfTitle('Sztuka dla Sztuki').pages }))
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Sztuka dla Sztuki", "date": "2017-07-15T20:12:00.000Z", "tags": ["sztuka", "współczesna", "abstrakcja", "inspiracje"], "role": "category" };
var body = exports.body = "<div>\n  <Feed { ...data } feed={ data.website.getCategoryOfTitle('Sztuka dla Sztuki').pages } />\n</div>\n";
var raw = exports.raw = "\n<div>\n  <Feed { ...data } feed={ data.website.getCategoryOfTitle('Sztuka dla Sztuki').pages } />\n</div>\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 5 }, data),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Feed, _extends({}, data, { feed: data.website.getCategoryOfTitle('Sztuka Gotowania').pages }))
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Sztuka Gotowania", "date": "2017-07-15T20:12:00.000Z", "tags": ["sztuka", "gotowanie", "kuchnia", "dania", "ciasta", "inspiracje"], "role": "category" };
var body = exports.body = "<div>\n  <Feed { ...data } feed={ data.website.getCategoryOfTitle('Sztuka Gotowania').pages } />\n</div>\n";
var raw = exports.raw = "\n<div>\n  <Feed { ...data } feed={ data.website.getCategoryOfTitle('Sztuka Gotowania').pages } />\n</div>\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 5 }, data),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Feed, _extends({}, data, { feed: data.website.getCategoryOfTitle('Sztuka Makijażu').pages }))
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Sztuka Makijażu", "date": "2017-07-15T20:13:00.000Z", "permalink": "/sztuka-makijazu", "tags": ["sztuka", "makijaż", "inspiracje"], "role": "category" };
var body = exports.body = "<div>\n  <Feed { ...data } feed={ data.website.getCategoryOfTitle('Sztuka Makijażu').pages } />\n</div>\n";
var raw = exports.raw = "\n<div>\n  <Feed { ...data } feed={ data.website.getCategoryOfTitle('Sztuka Makijażu').pages } />\n</div>\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 5 }, data),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Feed, _extends({}, data, { feed: data.website.getCategoryOfTitle('Sztuka Ubioru').pages }))
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Sztuka Ubioru", "date": "2017-07-15T20:14:00.000Z", "tags": ["sztuka", "ubiór", "moda", "projektanci", "domy mody", "inspiracje"], "role": "category" };
var body = exports.body = "<div>\n  <Feed { ...data } feed={ data.website.getCategoryOfTitle('Sztuka Ubioru').pages } />\n</div>\n";
var raw = exports.raw = "\n<div>\n  <Feed { ...data } feed={ data.website.getCategoryOfTitle('Sztuka Ubioru').pages } />\n</div>\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404.markdown": 105,
	"./index.markdown": 106,
	"./kim-jest-olela.markdown": 107,
	"./sitemap.markdown": 108,
	"./tag.markdown": 109
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 104;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 5 }, data),
    _react2.default.createElement(
      'p',
      null,
      'Strona o tym adresie nie istnieje.'
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Nie Znaleziono", "date": "1900-01-01T00:00:00.000Z", "output": false };
var body = exports.body = "<p>Strona o tym adresie nie istnieje.</p>\n";
var raw = exports.raw = "\nStrona o tym adresie nie istnieje.\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 5 }, data),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Feed, _extends({}, data, { feed: data.website.getCollectionOfTitle('Posts').pages }))
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "SztukaUniwersalna.PL", "date": "2017-07-15T20:12:00.000Z", "permalink": "/", "tags": ["index", "sztuka", "uniwersalna", "moda", "makijaż", "gotowanie", "codzienność", "współczesna", "abstrakcja", "inspiracje"], "description": "Sztuka w codzienności. Aleksandra Krawczyk prezentuje sposoby na odnalezienie odrobiny sztuki w codziennych czynnościach takich jak gotowanie, makijaż, oraz moda. Sztuka współczesna, sztuka abstrakcyjna, inspiracje dziełami wielkich twórców.", "feed": false };
var body = exports.body = "<div>\n  <Feed {...data} feed={ data.website.getCollectionOfTitle('Posts').pages } />\n</div>\n";
var raw = exports.raw = "\n<div>\n  <Feed {...data} feed={ data.website.getCollectionOfTitle('Posts').pages } />\n</div>\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 5 }, data),
    _react2.default.createElement(
      'p',
      null,
      'Cze\u015B\u0107, jestem Olela, witaj na moim blogu. Na co dzie\u0144 pracuj\u0119 w szeroko poj\u0119tym obszarze sztuki - maluj\u0119 obrazy, fotografuj\u0119, jestem grafikiem komputerowym, tancerk\u0105, nauczycielk\u0105 ta\u0144ca i choreografk\u0105. Z zami\u0142owania r\xF3wnie\u017C gotuj\u0119. Z racji tak mnogich zainteresowa\u0144, zwyk\u0142am m\xF3wi\u0107 o sobie Artystka Uniwersalna. Wierz\u0119 w zanikanie granic i wzajemne przenikanie si\u0119 dyscyplin. Czy mieszam sk\u0142adniki zupy w garnku, czy dodaj\u0119 do ultramaryny odrobin\u0119 karminu, czy nak\u0142adam baz\u0119 pod makija\u017C \u2013 tworz\u0119 sztuk\u0119.'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Po co to komu?'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Misj\u0105 bloga ',
      _react2.default.createElement(
        'a',
        { href: 'http://sztukauniwersalna.pl' },
        'sztukauniwersalna.pl'
      ),
      ' jest dostrze\u017Cenie i zatarcie granicy pomi\u0119dzy sztuk\u0105 a codzienno\u015Bci\u0105, zintegrowanie \u015Bwiata masowego przekazu, kt\xF3rym jeste\u015Bmy otoczeni z ka\u017Cdej strony, z kultur\u0105. Postaram si\u0119 pokaza\u0107, nieoczywiste na pierwszy rzut oka, konotacje pomi\u0119dzy czynno\u015Bciami okre\u015Blanymi jako \u2018przyziemne\u2019, a kreacj\u0105 artystyczn\u0105. Opr\xF3cz tego wyka\u017C\u0119 wp\u0142ywy poszczeg\xF3lnych tendencji artystycznych na r\xF3\u017Cne dziedziny \u017Cycia. Mam nadzieje, \u017Ce znajdziesz tu dla siebie wiele inspiracji, kt\xF3re prze\u0142o\u017C\u0105 si\u0119 na Twoje postrzeganie rzeczywisto\u015Bci.'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Poznajmy si\u0119 lepiej.'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Jestem Magistrem Sztuk Pi\u0119knych. W 2015 r. obroni\u0142am dyplom  na wydziale malarstwa krakowskiej ASP. Dyplomem by\u0142 solowy spektakl pt.: \u2018Pi\u0119\u0107 P\xF3r Roku\u2019 zrealizowany w jednym z krakowskich teatr\xF3w. W trakcie p\xF3\u0142godzinnej etiudy stara\u0142am si\u0119 wyta\u0144czy\u0107 wszystkie stany emocjonalne towarzysz\u0105ce mi przez 5letnie studia artystyczne. Malowanie ruchem by\u0142o cudownym do\u015Bwiadczeniem i spotka\u0142o si\u0119 z pozytywnym odbiorem komisji i publiczno\u015Bci.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Jak wi\u0119kszo\u015B\u0107 kobiet uwielbiam si\u0119 malowa\u0107 i przebiera\u0107. Staram si\u0119 dok\u0142ada\u0107 do tych czynno\u015Bci teatralny pierwiastek. Wymy\u015Blam posta\u0107, opowiadam po cichu historie, \u2018wchodz\u0119 w rol\u0119\u2019. Najbardziej inspiruj\u0105 mnie futurystyczne klimaty.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Moim najwi\u0119kszym bzikiem s\u0105... buty i szminki. Uwa\u017Cam, \u017Ce kolor na ustach czyni kobiet\u0119 pewniejsz\u0105 siebie. Ah, jak ja kocham te kolory! Blady r\xF3\u017C na sportowo. Jagodowa do ramoneski. Czerwie\u0144 jest raczej zarezerwowana dla klasycznych po\u0142\u0105cze\u0144, dlatego rzadko jej u\u017Cywam. Zdecydowanie bardziej wol\u0119 elektryzuj\u0105cy eklektyzm.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Kiedy robi\u0119 zakupy w sklepie spo\u017Cywczym zazwyczaj w\u0105cham owoce i warzywa. Zapach pozwala na wyobra\u017Cenie smaku. Czasami te\u017C subtelnie zanurzam d\u0142o\u0144 w worku z ziarnami, jak zwyk\u0142a robi\u0107 to Amelia, bohaterka filmu o tym samym tytule.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Do\u015B\u0107 sporo czasu w swoim \u017Cyciu sp\u0119dzi\u0142am w muzeach. Moja najd\u0142u\u017Csza kontemplacja dzie\u0142a sztuki mia\u0142a miejsce na wystawie Mark\u2019a Rothko w Warszawie w 2013\xA0r.  By\u0142am tak zafascynowana tw\xF3rczo\u015Bci\u0105 nowojorczyka (nadal jestem), \u017Ce przed jednym obrazem sp\u0119dzi\u0142am kilka godzin, a panowie ochroniarze dos\u0142ownie musieli wyprasza\u0107 mnie z budynku, gdy przysz\u0142a godzina zamkni\u0119cia ekspozycji.'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Skoro ju\u017C tyle o mnie wiesz\u2026 mam nadzieje, \u017Ce zostaniesz tu na d\u0142u\u017Cej. Czytaj, ogl\u0105daj, komentuj, kontempluj. Mo\u017Cesz te\u017C polubi\u0107 konto na ',
      _react2.default.createElement(
        'a',
        { href: 'https://www.facebook.com/sztukauniwersalna/' },
        'fb'
      ),
      ' i ',
      _react2.default.createElement(
        'a',
        { href: 'https://www.instagram.com/sztuka_uniwersalna/' },
        'insta'
      ),
      ', \u017Ceby by\u0107 na bie\u017C\u0105co. A je\u015Bli chcesz si\u0119 ze mn\u0105 skontkowa\u0107 napisz na adres ',
      _react2.default.createElement(
        'a',
        { href: 'mailto:sztuka.uniwersalna@gmail.com' },
        'sztuka.uniwersalna@gmail.com'
      ),
      ' \u2013 b\u0119dzie mi bardzo mi\u0142o!'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Pozdrawiam, Olela'
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Kim jest Olela?", "date": "2017-09-08T17:17:00.000Z", "permalink": "/kim-jest-olela" };
var body = exports.body = "<p>Cześć, jestem Olela, witaj na moim blogu. Na co dzień pracuję w szeroko pojętym obszarze sztuki - maluję obrazy, fotografuję, jestem grafikiem komputerowym, tancerką, nauczycielką tańca i choreografką. Z zamiłowania również gotuję. Z racji tak mnogich zainteresowań, zwykłam mówić o sobie Artystka Uniwersalna. Wierzę w zanikanie granic i wzajemne przenikanie się dyscyplin. Czy mieszam składniki zupy w garnku, czy dodaję do ultramaryny odrobinę karminu, czy nakładam bazę pod makijaż – tworzę sztukę.</p>\n<h2>Po co to komu?</h2>\n<p>Misją bloga <a href=\"http://sztukauniwersalna.pl\">sztukauniwersalna.pl</a> jest dostrzeżenie i zatarcie granicy pomiędzy sztuką a codziennością, zintegrowanie świata masowego przekazu, którym jesteśmy otoczeni z każdej strony, z kulturą. Postaram się pokazać, nieoczywiste na pierwszy rzut oka, konotacje pomiędzy czynnościami określanymi jako ‘przyziemne’, a kreacją artystyczną. Oprócz tego wykażę wpływy poszczególnych tendencji artystycznych na różne dziedziny życia. Mam nadzieje, że znajdziesz tu dla siebie wiele inspiracji, które przełożą się na Twoje postrzeganie rzeczywistości.</p>\n<h2>Poznajmy się lepiej.</h2>\n<ul>\n<li>Jestem Magistrem Sztuk Pięknych. W 2015 r. obroniłam dyplom  na wydziale malarstwa krakowskiej ASP. Dyplomem był solowy spektakl pt.: ‘Pięć Pór Roku’ zrealizowany w jednym z krakowskich teatrów. W trakcie półgodzinnej etiudy starałam się wytańczyć wszystkie stany emocjonalne towarzyszące mi przez 5letnie studia artystyczne. Malowanie ruchem było cudownym doświadczeniem i spotkało się z pozytywnym odbiorem komisji i publiczności.</li>\n<li>Jak większość kobiet uwielbiam się malować i przebierać. Staram się dokładać do tych czynności teatralny pierwiastek. Wymyślam postać, opowiadam po cichu historie, ‘wchodzę w rolę’. Najbardziej inspirują mnie futurystyczne klimaty.</li>\n<li>Moim największym bzikiem są... buty i szminki. Uważam, że kolor na ustach czyni kobietę pewniejszą siebie. Ah, jak ja kocham te kolory! Blady róż na sportowo. Jagodowa do ramoneski. Czerwień jest raczej zarezerwowana dla klasycznych połączeń, dlatego rzadko jej używam. Zdecydowanie bardziej wolę elektryzujący eklektyzm.</li>\n<li>Kiedy robię zakupy w sklepie spożywczym zazwyczaj wącham owoce i warzywa. Zapach pozwala na wyobrażenie smaku. Czasami też subtelnie zanurzam dłoń w worku z ziarnami, jak zwykła robić to Amelia, bohaterka filmu o tym samym tytule.</li>\n<li>Dość sporo czasu w swoim życiu spędziłam w muzeach. Moja najdłuższa kontemplacja dzieła sztuki miała miejsce na wystawie Mark’a Rothko w Warszawie w 2013 r.  Byłam tak zafascynowana twórczością nowojorczyka (nadal jestem), że przed jednym obrazem spędziłam kilka godzin, a panowie ochroniarze dosłownie musieli wypraszać mnie z budynku, gdy przyszła godzina zamknięcia ekspozycji.</li>\n</ul>\n<p>Skoro już tyle o mnie wiesz… mam nadzieje, że zostaniesz tu na dłużej. Czytaj, oglądaj, komentuj, kontempluj. Możesz też polubić konto na <a href=\"https://www.facebook.com/sztukauniwersalna/\">fb</a> i <a href=\"https://www.instagram.com/sztuka_uniwersalna/\">insta</a>, żeby być na bieżąco. A jeśli chcesz się ze mną skontkować napisz na adres <a href=\"mailto:sztuka.uniwersalna@gmail.com\">sztuka.uniwersalna@gmail.com</a> – będzie mi bardzo miło!</p>\n<p>Pozdrawiam,\nOlela</p>\n";
var raw = exports.raw = "\n\n\nCześć, jestem Olela, witaj na moim blogu. Na co dzień pracuję w szeroko pojętym obszarze sztuki - maluję obrazy, fotografuję, jestem grafikiem komputerowym, tancerką, nauczycielką tańca i choreografką. Z zamiłowania również gotuję. Z racji tak mnogich zainteresowań, zwykłam mówić o sobie Artystka Uniwersalna. Wierzę w zanikanie granic i wzajemne przenikanie się dyscyplin. Czy mieszam składniki zupy w garnku, czy dodaję do ultramaryny odrobinę karminu, czy nakładam bazę pod makijaż – tworzę sztukę. \n\n## Po co to komu?\n\nMisją bloga sztukauniwersalna.pl jest dostrzeżenie i zatarcie granicy pomiędzy sztuką a codziennością, zintegrowanie świata masowego przekazu, którym jesteśmy otoczeni z każdej strony, z kulturą. Postaram się pokazać, nieoczywiste na pierwszy rzut oka, konotacje pomiędzy czynnościami określanymi jako ‘przyziemne’, a kreacją artystyczną. Oprócz tego wykażę wpływy poszczególnych tendencji artystycznych na różne dziedziny życia. Mam nadzieje, że znajdziesz tu dla siebie wiele inspiracji, które przełożą się na Twoje postrzeganie rzeczywistości.\n\n## Poznajmy się lepiej.\n\n* Jestem Magistrem Sztuk Pięknych. W 2015 r. obroniłam dyplom  na wydziale malarstwa krakowskiej ASP. Dyplomem był solowy spektakl pt.: ‘Pięć Pór Roku’ zrealizowany w jednym z krakowskich teatrów. W trakcie półgodzinnej etiudy starałam się wytańczyć wszystkie stany emocjonalne towarzyszące mi przez 5letnie studia artystyczne. Malowanie ruchem było cudownym doświadczeniem i spotkało się z pozytywnym odbiorem komisji i publiczności.\n* Jak większość kobiet uwielbiam się malować i przebierać. Staram się dokładać do tych czynności teatralny pierwiastek. Wymyślam postać, opowiadam po cichu historie, ‘wchodzę w rolę’. Najbardziej inspirują mnie futurystyczne klimaty.\n* Moim największym bzikiem są… buty i szminki. Uważam, że kolor na ustach czyni kobietę pewniejszą siebie. Ah, jak ja kocham te kolory! Blady róż na sportowo. Jagodowa do ramoneski. Czerwień jest raczej zarezerwowana dla klasycznych połączeń, dlatego rzadko jej używam. Zdecydowanie bardziej wolę elektryzujący eklektyzm. \n* Kiedy robię zakupy w sklepie spożywczym zazwyczaj wącham owoce i warzywa. Zapach pozwala na wyobrażenie smaku. Czasami też subtelnie zanurzam dłoń w worku z ziarnami, jak zwykła robić to Amelia, bohaterka filmu o tym samym tytule.\n* Dość sporo czasu w swoim życiu spędziłam w muzeach. Moja najdłuższa kontemplacja dzieła sztuki miała miejsce na wystawie Mark’a Rothko w Warszawie w 2013 r.  Byłam tak zafascynowana twórczością nowojorczyka (nadal jestem), że przed jednym obrazem spędziłam kilka godzin, a panowie ochroniarze dosłownie musieli wypraszać mnie z budynku, gdy przyszła godzina zamknięcia ekspozycji.\n\n\n\n\nSkoro już tyle o mnie wiesz… mam nadzieje, że zostaniesz tu na dłużej. Czytaj, oglądaj, komentuj, kontempluj. Możesz też polubić konto na [fb](https://www.facebook.com/sztukauniwersalna/) i [insta](https://www.instagram.com/sztuka_uniwersalna/), żeby być na bieżąco. A jeśli chcesz się ze mną skontkować napisz na adres sztuka.uniwersalna@gmail.com – będzie mi bardzo miło!\n\nPozdrawiam,\nOlela";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 5 }, data),
    _react2.default.createElement(
      'div',
      { className: 'compact' },
      _react2.default.createElement(TableOfContents, data)
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Mapa Witryny", "date": "2017-07-15T20:12:00.000Z", "permalink": "/sitemap", "tags": ["sitemap", "dla bota"] };
var body = exports.body = "<div className='compact'>\n  <TableOfContents {...data} />\n</div>\n";
var raw = exports.raw = "\n<div className='compact'>\n  <TableOfContents {...data} />\n</div>\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 5 }, data),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Feed, _extends({}, data, { feed: data.page.pages }))
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Tag", "date": "1900-01-01T00:00:00.000Z", "output": false };
var body = exports.body = "<div>\n  <Feed { ...data } feed={ data.page.pages } />\n</div>\n";
var raw = exports.raw = "\n<div>\n  <Feed { ...data } feed={ data.page.pages } />\n</div>\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2017-07-15-uniwersalno-sztuki.markdown": 111,
	"./2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla.markdown": 112
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 110;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 3 }, data),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Interesowa\u0142o mnie utrwalanie wszystkich prostych czynno\u015Bci, bo s\u0105 UNIWERSALNE. Ka\u017Cda z nich, kiedy si\u0119 na niej skupimy, zatrzymamy na sekund\u0119, staje si\u0119 dzie\u0142em SZTUKI.'
      ),
      _react2.default.createElement(
        'p',
        null,
        '~ Natalia Lach-Lachowicz (Natalia LL)'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Od pewnego czasu obserwuje zjawisko nagminnego pojawiania si\u0119 s\u0142\xF3w \u2018art\u2019, \u2018artist\u2019 w nazewnictwie zawodowym. Dzi\u015B ju\u017C nie jeste\u015B tylko makija\u017Cyst\u0105, jeste\u015B \u2018make up artist\u2019 - artyst\u0105 od makija\u017Cu lub makija\u017Cowym artyst\u0105, chcia\u0142oby si\u0119 przet\u0142umaczy\u0107, lub te\u017C jeste\u015B po prostu artyst\u0105 pracuj\u0105cym w technice \u2018makija\u017C\u2019. Dzi\u015B to nie fryzjerzy \u015Bcinaj\u0105 i farbuj\u0105 nam w\u0142osy lecz \u2018styli\u015Bci fryzur\u2019, arty\u015Bci od w\u0142os\xF3w, \u2018hair artists\u2019. Od niedawna tak\u017Ce Ci styli\u015Bci od mody przekwalifikowali swoje stanowiska na Fashion ART Directors (dos\u0142ownie ci, kt\xF3rzy wyznaczaj\u0105 artystyczny kierunek modzie). Sk\u0105d tyle tej sztuki, a raczej mody na sztuk\u0119, dlaczego dzi\u015B wszyscy nazywamy si\u0119 artystami i dlaczego jest to tak wa\u017Cne dla poczucia \u2018siebie\u2019 i swojej roli we wsp\xF3\u0142czesnym  spo\u0142ecze\u0144stwie?'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Artysta = Rzemie\u015Blnik ?'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Zastanawiam si\u0119, czy w stosunku do artystycznej dzia\u0142alno\u015Bci wypada u\u017Cy\u0107 s\u0142owa \u2018zaw\xF3d\u2019. Kim jeste\u015B z zawodu? - Jestem artyst\u0105. Czy to nie jest troch\u0119 tak, \u017Ce zaw\xF3d si\u0119 wybiera, id\u0105c np. na konkretny kierunek studi\xF3w, a brzemienia artysty poniek\u0105d nie jeste\u015Bmy w stanie wybra\u0107 \u015Bwiadomie. Z drugiej strony wszystkich warsztatowych technik da si\u0119 nauczy\u0107 i nie tylko Ci najzdolniejsi zarabiaj\u0105 na swojej pracy artystycznej. Zatem dobrze, m\xF3wmy o zawodzie, czyli o czynno\u015Bciach, z kt\xF3rych dana jednostka jest w stanie zarobi\u0107 na chleb. Zaw\xF3d artysty wymaga nie tylko talentu, ale przede wszystkim kreatywnego my\u015Blenia. Czy arty\u015Bci to r\xF3wnie\u017C rzemie\u015Blnicy? Ci drudzy wykonuj\u0105 wyuczony fach wr\u0119cz mechanicznie, podczas gdy Ci pierwsi znajduj\u0105 czas na refleksje przy pracy i wprowadzanie do jej efekt\xF3w coraz to nowych pomys\u0142\xF3w (IDEI), cz\u0119sto ko\u0144cz\u0105cych si\u0119 fiaskiem, niepowodzeniem, totaln\u0105 klap\u0105, a nawet spaleniem dzie\u0142a nigdyniedoko\u0144czonego. Arty\u015Bci b\u0142\u0105dz\u0105. Kreuj\u0105. Dr\u0105 i krzycz\u0105. Rzemie\u015Blnicy wykonuj\u0105.'
    ),
    _react2.default.createElement(
      'h2',
      null,
      '\u2018M\u0142odzi Kreatywni\u2019'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Powiedzmy sobie szczerze, arty\u015Bci od zawsze mieli \u2018pod g\xF3rk\u0119\u2019. Tworzyli dzie\u0142a zamawiane przez fundator\xF3w dyskretnie przemycaj\u0105c swoje wizje lub te\u017C nie kryli si\u0119 z wizjami stanowczo wykraczaj\u0105cymi ponad ramy epoki, co skutkowa\u0142o niezrozumieniem i wykluczeniem ze spo\u0142ecze\u0144stwa. Doceniani zazwyczaj po \u015Bmierci, okazywa\u0142o si\u0119, \u017Ce przychodzili na \u015Bwiat nie w swoim miejscu, nie w swoim czasie. Walczyli o swoje pogl\u0105dy, ich cz\u0119sto innowacyjne wizje ko\u0144czy\u0142y zmieszane z b\u0142otem przez krytyk\xF3w. Gdyby nie ten indywidualizm, parcie do przodu i cz\u0119sto zwi\u0105zana z tym ignorancja, nie mieliby\u015Bmy tych \u2018wielkich\u2019, wizjoner\xF3w,  kt\xF3rzy na zawsze odmienili postrzeganie danej dziedziny, cz\u0119sto wykraczaj\u0105c poza jej granice. \u017Byjemy w XXI wieku, kt\xF3ry nieub\u0142agalnie p\u0119dzi i przyspiesza niczym ciuchcia w wierszu Tuwima. Nigdy nie zwalnia, wi\u0119c i Ty nie zwalniaj. Byli ju\u017C Zm\u0119czeni Rzeczywisto\u015Bci\u0105, teraz przyszed\u0142 czas na M\u0142odych Kreatywnych \u2013 absolwent\xF3w uczelni artystycznych, kt\xF3rzy wpisani w ramy wieku p\u0119dz\u0105. Nie ograniczaj\u0105 si\u0119 tylko do dzia\u0142a\u0144 w dziedzinie, z kt\xF3rej s\u0105 (dumnymi) magistrami na papierze. Chc\u0105 robi\u0107 kariere, chc\u0105 by\u0107 nie tyle na czasie, co w czasie, poznawa\u0107 nowe technologie, rozwija\u0107 mo\u017Cliwo\u015Bci. Ko\u0144cz\u0105 malarstwo i id\u0105 pracowa\u0107 do najwi\u0119kszych agencji kreatywnych, kt\xF3re (podobno) ceni\u0105 m\u0142ode, tw\xF3rcze, otwarte umys\u0142y (o tym ju\u017C w kolejnym po\u015Bcie).'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Pokolenie Self-Obsessed'
    ),
    _react2.default.createElement(
      'p',
      null,
      '\u2018-Wykonanie makija\u017Cu zajmuje mi jakie\u015B 3 godziny. W trakcie malowania oczywi\u015Bcie nagrywam wszystko, \u017Ceby p\xF3\u017Aniej zmontowa\u0107 to w sp\xF3jny tutorial i wrzuci\u0107 na YouTube. W czasie mi\u0119dzyczasu nagrywam kr\xF3tkie story na \u017Cywo. Kiedy sko\u0144cz\u0119 utrwalam wszystko robi\u0105c kilka selfie, no dobra mo\u017Ce kilkana\u015Bcie. Czas wyj\u015B\u0107 z domu. Przegl\u0105dam si\u0119  w lustrze kilka razy, sprawdzam fryzur\u0119, wci\u0105gam brzuch, jeszcze kilka fotek. Wychodz\u0119 na si\u0142ownie, \u017Ceby tam powt\xF3rzy\u0107 rytua\u0142, tyle \u017Ce w innym lustrze. \u017Byj\u0119 sob\u0105 i inni ludzie \u017Cyj\u0105 mn\u0105, a  raczej marzeniem by by\u0107 jak ja. Zaczynaj\u0105 mnie na\u015Bladowa\u0107, stosowa\u0107 si\u0119 do moich rad, zostaj\u0105 moimi fanami.\u2019 I gdyby to wszystko okaza\u0142o si\u0119 \u015Bwiadom\u0105 artystyczn\u0105 kreacj\u0105, sztuk\u0105 konceptualn\u0105, performansem, okej, to ma sens, co\u015B u\u015Bwiadamia. A mo\u017Ce rzeczywi\u015Bcie sztuka wysz\u0142a ze sztuki, przekroczy\u0142a sam\u0105 siebie i jest w ka\u017Cdej najmniejszej czynno\u015Bci? Przecie\u017C p\u0119dzle do makija\u017Cu niczym nie r\xF3\u017Cni\u0105 si\u0119 od tych, kt\xF3rymi uprawiamy akwarele (nie\u015Bmia\u0142o przyznam, \u017Ce nieraz wiewi\xF3rczy w\u0142os idealnie pom\xF3g\u0142 mi w blendowaniu za\u0142amania powieki...) A gdyby tak, w tej nie\u015Bwiadomo\u015Bci, doda\u0107 przedrostek -art/przyrostek -artist do mojego pseudonimu na Instagramie? Czy wtedy ludzie zaczn\u0105 lubi\u0107 mnie bardziej? W ko\u0144cu sztuka to domena jednostek my\u015Bl\u0105cych\u2026'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'a',
        { href: 'http://SztukaUniwersalna.pl' },
        'SztukaUniwersalna.pl'
      ),
      ' to portal w kt\xF3rym zacieraj\u0105 si\u0119 granice. Opisuj\u0119 i rejestruj\u0119 Sztuk\u0119, kt\xF3ra zajmuje mnie w danej chwili. Potraktuj to jako pami\u0119tnik M\u0142odej Kreatywnej, kt\xF3rej ka\u017Cdy dzie\u0144 to artystyczna kreacja. Mi\u0142ej lektury. :)'
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Uniwersalność Sztuki", "date": "2017-07-15T19:56:00.000Z", "permalink": "/uniwersalnosc-sztuki", "categories": ["Sztuka dla Sztuki"], "tags": ["art", "artist", "sztuka", "dzieło", "artysta", "kreacja"], "limit": 3 };
var body = exports.body = "<blockquote>\n<p>Interesowało mnie utrwalanie wszystkich prostych czynności, bo są UNIWERSALNE. Każda z nich,\nkiedy się na niej skupimy, zatrzymamy na sekundę, staje się dziełem SZTUKI.</p>\n<p>~ Natalia Lach-Lachowicz (Natalia LL)</p>\n</blockquote>\n<p>Od pewnego czasu obserwuje zjawisko nagminnego pojawiania się słów ‘art’, ‘artist’ w nazewnictwie zawodowym. Dziś już nie jesteś tylko makijażystą, jesteś ‘make up artist’ - artystą od makijażu lub makijażowym artystą, chciałoby się przetłumaczyć, lub też jesteś po prostu artystą pracującym w technice ‘makijaż’. Dziś to nie fryzjerzy ścinają i farbują nam włosy lecz ‘styliści fryzur’, artyści od włosów, ‘hair artists’. Od niedawna także Ci styliści od mody przekwalifikowali swoje stanowiska na Fashion ART Directors (dosłownie ci, którzy wyznaczają artystyczny kierunek modzie). Skąd tyle tej sztuki, a raczej mody na sztukę, dlaczego dziś wszyscy nazywamy się artystami i dlaczego jest to tak ważne dla poczucia ‘siebie’ i swojej roli we współczesnym  społeczeństwie?</p>\n<h2>Artysta = Rzemieślnik ?</h2>\n<p>Zastanawiam się, czy w stosunku do artystycznej działalności wypada użyć słowa ‘zawód’. Kim jesteś z zawodu? - Jestem artystą. Czy to nie jest trochę tak, że zawód się wybiera, idąc np. na konkretny kierunek studiów, a brzemienia artysty poniekąd nie jesteśmy w stanie wybrać świadomie. Z drugiej strony wszystkich warsztatowych technik da się nauczyć i nie tylko Ci najzdolniejsi zarabiają na swojej pracy artystycznej. Zatem dobrze, mówmy o zawodzie, czyli o czynnościach, z których dana jednostka jest w stanie zarobić na chleb. Zawód artysty wymaga nie tylko talentu, ale przede wszystkim kreatywnego myślenia. Czy artyści to również rzemieślnicy? Ci drudzy wykonują wyuczony fach wręcz mechanicznie, podczas gdy Ci pierwsi znajdują czas na refleksje przy pracy i wprowadzanie do jej efektów coraz to nowych pomysłów (IDEI), często kończących się fiaskiem, niepowodzeniem, totalną klapą, a nawet spaleniem dzieła nigdyniedokończonego. Artyści błądzą. Kreują. Drą i krzyczą. Rzemieślnicy wykonują.</p>\n<h2>‘Młodzi Kreatywni’</h2>\n<p>Powiedzmy sobie szczerze, artyści od zawsze mieli ‘pod górkę’. Tworzyli dzieła zamawiane przez fundatorów dyskretnie przemycając swoje wizje lub też nie kryli się z wizjami stanowczo wykraczającymi ponad ramy epoki, co skutkowało niezrozumieniem i wykluczeniem ze społeczeństwa. Doceniani zazwyczaj po śmierci, okazywało się, że przychodzili na świat nie w swoim miejscu, nie w swoim czasie. Walczyli o swoje poglądy, ich często innowacyjne wizje kończyły zmieszane z błotem przez krytyków. Gdyby nie ten indywidualizm, parcie do przodu i często związana z tym ignorancja, nie mielibyśmy tych ‘wielkich’, wizjonerów,  którzy na zawsze odmienili postrzeganie danej dziedziny, często wykraczając poza jej granice.\nŻyjemy w XXI wieku, który nieubłagalnie pędzi i przyspiesza niczym ciuchcia w wierszu Tuwima. Nigdy nie zwalnia, więc i Ty nie zwalniaj. Byli już Zmęczeni Rzeczywistością, teraz przyszedł czas na Młodych Kreatywnych – absolwentów uczelni artystycznych, którzy wpisani w ramy wieku pędzą. Nie ograniczają się tylko do działań w dziedzinie, z której są (dumnymi) magistrami na papierze. Chcą robić kariere, chcą być nie tyle na czasie, co w czasie, poznawać nowe technologie, rozwijać możliwości. Kończą malarstwo i idą pracować do największych agencji kreatywnych, które (podobno) cenią młode, twórcze, otwarte umysły (o tym już w kolejnym poście).</p>\n<h2>Pokolenie Self-Obsessed</h2>\n<p>‘-Wykonanie makijażu zajmuje mi jakieś 3 godziny. W trakcie malowania oczywiście nagrywam wszystko, żeby później zmontować to w spójny tutorial i wrzucić na YouTube. W czasie międzyczasu nagrywam krótkie story na żywo. Kiedy skończę utrwalam wszystko robiąc kilka selfie, no dobra może kilkanaście. Czas wyjść z domu. Przeglądam się  w lustrze kilka razy, sprawdzam fryzurę, wciągam brzuch, jeszcze kilka fotek. Wychodzę na siłownie, żeby tam powtórzyć rytuał, tyle że w innym lustrze. Żyję sobą i inni ludzie żyją mną, a  raczej marzeniem by być jak ja. Zaczynają mnie naśladować, stosować się do moich rad, zostają moimi fanami.’\nI gdyby to wszystko okazało się świadomą artystyczną kreacją, sztuką konceptualną, performansem, okej, to ma sens, coś uświadamia. A może rzeczywiście sztuka wyszła ze sztuki, przekroczyła samą siebie i jest w każdej najmniejszej czynności? Przecież pędzle do makijażu niczym nie różnią się od tych, którymi uprawiamy akwarele (nieśmiało przyznam, że nieraz wiewiórczy włos idealnie pomógł mi w blendowaniu załamania powieki...) A gdyby tak, w tej nieświadomości, dodać przedrostek -art/przyrostek -artist do mojego pseudonimu na Instagramie? Czy wtedy ludzie zaczną lubić mnie bardziej? W końcu sztuka to domena jednostek myślących…</p>\n<p><a href=\"http://SztukaUniwersalna.pl\">SztukaUniwersalna.pl</a> to portal w którym zacierają się granice. Opisuję i rejestruję Sztukę, która zajmuje mnie w danej chwili. Potraktuj to jako pamiętnik Młodej Kreatywnej, której każdy dzień to artystyczna kreacja. Miłej lektury. :)</p>\n";
var raw = exports.raw = "\n> Interesowało mnie utrwalanie wszystkich prostych czynności, bo są UNIWERSALNE. Każda z nich,\n> kiedy się na niej skupimy, zatrzymamy na sekundę, staje się dziełem SZTUKI.\n>\n> ~ Natalia Lach-Lachowicz (Natalia LL)\n\nOd pewnego czasu obserwuje zjawisko nagminnego pojawiania się słów ‘art’, ‘artist’ w nazewnictwie zawodowym. Dziś już nie jesteś tylko makijażystą, jesteś ‘make up artist’ - artystą od makijażu lub makijażowym artystą, chciałoby się przetłumaczyć, lub też jesteś po prostu artystą pracującym w technice ‘makijaż’. Dziś to nie fryzjerzy ścinają i farbują nam włosy lecz ‘styliści fryzur’, artyści od włosów, ‘hair artists’. Od niedawna także Ci styliści od mody przekwalifikowali swoje stanowiska na Fashion ART Directors (dosłownie ci, którzy wyznaczają artystyczny kierunek modzie). Skąd tyle tej sztuki, a raczej mody na sztukę, dlaczego dziś wszyscy nazywamy się artystami i dlaczego jest to tak ważne dla poczucia ‘siebie’ i swojej roli we współczesnym  społeczeństwie?\n\n## Artysta = Rzemieślnik ?\nZastanawiam się, czy w stosunku do artystycznej działalności wypada użyć słowa ‘zawód’. Kim jesteś z zawodu? - Jestem artystą. Czy to nie jest trochę tak, że zawód się wybiera, idąc np. na konkretny kierunek studiów, a brzemienia artysty poniekąd nie jesteśmy w stanie wybrać świadomie. Z drugiej strony wszystkich warsztatowych technik da się nauczyć i nie tylko Ci najzdolniejsi zarabiają na swojej pracy artystycznej. Zatem dobrze, mówmy o zawodzie, czyli o czynnościach, z których dana jednostka jest w stanie zarobić na chleb. Zawód artysty wymaga nie tylko talentu, ale przede wszystkim kreatywnego myślenia. Czy artyści to również rzemieślnicy? Ci drudzy wykonują wyuczony fach wręcz mechanicznie, podczas gdy Ci pierwsi znajdują czas na refleksje przy pracy i wprowadzanie do jej efektów coraz to nowych pomysłów (IDEI), często kończących się fiaskiem, niepowodzeniem, totalną klapą, a nawet spaleniem dzieła nigdyniedokończonego. Artyści błądzą. Kreują. Drą i krzyczą. Rzemieślnicy wykonują.\n\n## ‘Młodzi Kreatywni’\nPowiedzmy sobie szczerze, artyści od zawsze mieli ‘pod górkę’. Tworzyli dzieła zamawiane przez fundatorów dyskretnie przemycając swoje wizje lub też nie kryli się z wizjami stanowczo wykraczającymi ponad ramy epoki, co skutkowało niezrozumieniem i wykluczeniem ze społeczeństwa. Doceniani zazwyczaj po śmierci, okazywało się, że przychodzili na świat nie w swoim miejscu, nie w swoim czasie. Walczyli o swoje poglądy, ich często innowacyjne wizje kończyły zmieszane z błotem przez krytyków. Gdyby nie ten indywidualizm, parcie do przodu i często związana z tym ignorancja, nie mielibyśmy tych ‘wielkich’, wizjonerów,  którzy na zawsze odmienili postrzeganie danej dziedziny, często wykraczając poza jej granice.\nŻyjemy w XXI wieku, który nieubłagalnie pędzi i przyspiesza niczym ciuchcia w wierszu Tuwima. Nigdy nie zwalnia, więc i Ty nie zwalniaj. Byli już Zmęczeni Rzeczywistością, teraz przyszedł czas na Młodych Kreatywnych – absolwentów uczelni artystycznych, którzy wpisani w ramy wieku pędzą. Nie ograniczają się tylko do działań w dziedzinie, z której są (dumnymi) magistrami na papierze. Chcą robić kariere, chcą być nie tyle na czasie, co w czasie, poznawać nowe technologie, rozwijać możliwości. Kończą malarstwo i idą pracować do największych agencji kreatywnych, które (podobno) cenią młode, twórcze, otwarte umysły (o tym już w kolejnym poście).\n\n## Pokolenie Self-Obsessed\n‘-Wykonanie makijażu zajmuje mi jakieś 3 godziny. W trakcie malowania oczywiście nagrywam wszystko, żeby później zmontować to w spójny tutorial i wrzucić na YouTube. W czasie międzyczasu nagrywam krótkie story na żywo. Kiedy skończę utrwalam wszystko robiąc kilka selfie, no dobra może kilkanaście. Czas wyjść z domu. Przeglądam się  w lustrze kilka razy, sprawdzam fryzurę, wciągam brzuch, jeszcze kilka fotek. Wychodzę na siłownie, żeby tam powtórzyć rytuał, tyle że w innym lustrze. Żyję sobą i inni ludzie żyją mną, a  raczej marzeniem by być jak ja. Zaczynają mnie naśladować, stosować się do moich rad, zostają moimi fanami.’\nI gdyby to wszystko okazało się świadomą artystyczną kreacją, sztuką konceptualną, performansem, okej, to ma sens, coś uświadamia. A może rzeczywiście sztuka wyszła ze sztuki, przekroczyła samą siebie i jest w każdej najmniejszej czynności? Przecież pędzle do makijażu niczym nie różnią się od tych, którymi uprawiamy akwarele (nieśmiało przyznam, że nieraz wiewiórczy włos idealnie pomógł mi w blendowaniu załamania powieki...) A gdyby tak, w tej nieświadomości, dodać przedrostek -art/przyrostek -artist do mojego pseudonimu na Instagramie? Czy wtedy ludzie zaczną lubić mnie bardziej? W końcu sztuka to domena jednostek myślących...\n\nSztukaUniwersalna.pl to portal w którym zacierają się granice. Opisuję i rejestruję Sztukę, która zajmuje mnie w danej chwili. Potraktuj to jako pamiętnik Młodej Kreatywnej, której każdy dzień to artystyczna kreacja. Miłej lektury. :)\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raw = exports.body = exports.frontMatter = exports.component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentLimiter = __webpack_require__(5);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(2).default;

var code = global.__data.map(function (entry, index) {
  return 'var ' + entry.name + ' = this.__data[' + index + '].component;';
}).join('');eval.call(null, code);
delete global.__data;

var component = exports.component = function component(data) {
  return _react2.default.createElement(
    _ContentLimiter2.default,
    _extends({ limit: 5 }, data),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Jestem tym, kt\xF3ry delikatnie, z wielk\u0105 precyzj\u0105 i odwag\u0105 wsuwa male\u0144kie ziarnko piasku pomi\u0119dzy twarde uszy muszli. Jestem tym cierpliwym, kt\xF3ry czeka wiele lat zanim jego dotyk urzeczywistni si\u0119 w postaci nie\u015Bmiertelnego pi\u0119kna. Jestem stw\xF3rc\u0105, kreatorem nowej rzeczywisto\u015Bci w akcie nieznanym.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Co dzieje si\u0119 wewn\u0105trz ma\u0142\u017Cy nie jeste\u015Bmy w stanie do ko\u0144ca wyja\u015Bni\u0107. Arystoteles to male\u0144kie cudo nanotechnologii por\xF3wnywa\u0142 do zap\u0142odnienia kropl\u0105 oceanu. XV wiek to czas hipotez -per\u0142y s\u0105 jajami ma\u0142\u017Cy. XVII \u2013 per\u0142y powstaj\u0105 w wyniku utwardzenia sok\xF3w wydzielanych przez muszl\u0119. XIX \u2013 i tutaj zbli\u017Camy si\u0119 do teorii cia\u0142a obcego, kt\xF3re ma\u0142\u017C traktuje jako intruza i odk\u0142ada wok\xF3\u0142 niego perlist\u0105 substancj\u0119. W\u0142a\u015Bciwie, to wszystko mo\u017Ce sta\u0107 si\u0119 per\u0142\u0105. Wyobra\u017Amy sobie muszle wielko\u015Bci samochodu \u2013 z podobnej przecie\u017C wy\u0142oni\u0142a si\u0119 Wenus na obrazie S. Botticellego \u201ENarodziny Wenus\u201D. Tak... Wenus by\u0142a per\u0142\u0105! Wystarczy spojrze\u0107 na odcie\u0144 jej sk\xF3ry, kt\xF3ry praktycznie zlewa si\u0119 z muszl\u0105. Gest prawej d\u0142oni podkre\u015Bla niewinno\u015B\u0107 piersi - jak\u017Ce kszta\u0142tem swoim perliste! Simonetta Vespucci pozuje idealnie a Botticelli idealnie oddaje pi\u0119kno boskiej per\u0142y \u2013 jedynej w swoim rodzaju. Nie ma dw\xF3ch takich samych, a kopia nigdy nie dor\xF3wna oryginalnemu pi\u0119knu.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Pod koniec XVI wieku per\u0142y docieraj\u0105 do Europy i\u2026 nie wzbudzaj\u0105 wi\u0119kszego zainteresowania. Za  to ok. p\xF3\u0142 roku p\xF3\u017Aniej holenderski malarz pope\u0142nia dzie\u0142o uznawane za najwybitniejszy przyk\u0142ad XVII wecznego malarstwa - \u201EDziewczyna z per\u0142\u0105\u201D, nazywany cz\u0119sto Mona Lis\u0105 P\xF3\u0142nocy. Kim by\u0142a owa dziewczyna? By\u0107 mo\u017Ce jest to kilkunastoletnia w\xF3wczas c\xF3rka J. Vermeera.  Tracy Chevalier (autorka ksi\u0105\u017Cki \u201EDziewczyna z Per\u0142\u0105\u201D) interpretuje m\u0142od\u0105 dam\u0119 jako s\u0142u\u017C\u0105c\u0105, a za jej \u015Bladem idzie Peter Webber, re\u017Cyser filmu o tym samym tytule.'
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Twarz dziewczyny z obrazu zastyga na moment z lekko rozchylonymi ustami. Patrz\u0105c d\u0142u\u017Csz\u0105 chwil\u0119 odnosz\u0119 wra\u017Cenie jakbym przed chwil\u0105 zawo\u0142a\u0142 jej imi\u0119, st\u0105d gest skr\u0119tu g\u0142owy w moim kierunku. Nie mog\u0119 oderwa\u0107 wzroku. Jeszcze chwila.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Przemys\u0142owe hodowle pere\u0142, tych w kszta\u0142cie kuli, to zas\u0142uga Japo\u0144czyk\xF3w, a w\u0142a\u015Bciwie Kokichi Mikimoto \u2013 pioniera innowacyjnej metody. Podczas gdy Kokochi eksperymentuje z ma\u0142\u017Cami na swiat przychodzi przysz\u0142a, najwi\u0119ksza fanka cudownych dzieci muszli \u2013 COCO CHANEL. Praktycznie na ka\u017Cdym archiwalnym zdj\u0119ciu Coco (Gabrielle Bonheur Chanel) nosi na sobie per\u0142y \u2013 nie jeden sznur a sze\u015B\u0107. Z czasem, przylegaj\u0105 do jej to\u017Csamo\u015Bci i w po\u0142\u0105czeniu z ma\u0142\u0105 czarn\u0105 staj\u0105 si\u0119 UNIWERSALN\u0104 klasyk\u0105.'
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Um\xF3wili\u015Bmy si\u0119 po po\u0142udniu na rogu Park Avenue i 35tej alei. Podobno jest tam jaka\u015B bardzo fajna wega\u0144ska kawiarnia. Nie za bardzo wiedzia\u0142em czego si\u0119 spodziewa\u0107. W g\u0142\u0119bi duszy nie chcia\u0142em, \u017Ceby by\u0142o to spotkanie czysto biznesowe. Mia\u0142em na sobie sportowo-eleganck\u0105 kurtk\u0119 od Armaniego, spodnie przypominaj\u0105ce bryczesy i p\xF3\u0142buty, kt\xF3rych koloru nie jestem w stanie okre\u015Bli\u0107. Zerkn\u0105\u0142em na zegarek i zacz\u0105\u0142em nieco si\u0119 niecierpliwi\u0107. W momencie, kiedy w mojej g\u0142owie pojawi\u0142a si\u0119 my\u015Bl, \u017Ce Laura jednak nie przyjdzie, zauwa\u017Cy\u0142em w oddali kobiet\u0119 zbli\u017Caj\u0105c\u0105 si\u0119 w moim kierunku szybkim, lekko chwiejnym krokiem.'
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      '\u2014 Strasznie Ci\u0119 przepraszam, ale po drodze tutaj najpierw zostawi\u0142am palto w taks\xF3wce, a zaraz potem z\u0142ama\u0142am obcas... \u2014 powiedzia\u0142a zdejmuj\u0105c lewego buta. Mia\u0142a na sobie ma\u0142\u0105 czarn\u0105 i subtelne kolczyki z per\u0142\u0105. M\xF3j umys\u0142 przywo\u0142a\u0142 obraz Vermeera, kt\xF3ry niedawno widzia\u0142em a wystawie.',
      _react2.default.createElement('br', null),
      '\u2014 To Ty... \u2014 wymamrota\u0142em bezwiednie.',
      _react2.default.createElement('br', null),
      '\u2014 S\u0142ucham?',
      _react2.default.createElement('br', null),
      '\u2014 Nic, nic, przepraszam, zamy\u015Bli\u0142em si\u0119. \u2014 Niewiele my\u015Bl\u0105c chwyci\u0142em Laure pod kolana i za ramiona i podnios\u0142em do g\xF3ry.',
      _react2.default.createElement('br', null),
      '\u2014 Hej, co robisz?',
      _react2.default.createElement('br', null),
      '\u2014 Zdejmij te\u017C drugiego buta, prosz\u0119. W tej sukience i kolczykach wygl\u0105dasz genialnie. Nic wi\u0119cej nie jest Ci potrzebne. Mam zamiar zanie\u015B\u0107 Ci\u0119 najpierw do kawiarni, gdzie zam\xF3wimy sojowe latte na podw\xF3jnym espresso, a p\xF3\u017Aniej tam, gdzie tylko zapragniesz. \u2014 Laura obdarzy\u0142a mnie spojrzeniem pe\u0142nym niedowierzania, aby zaraz g\u0142\u0119boko si\u0119 u\u015Bmiechn\u0105\u0107.',
      _react2.default.createElement('br', null),
      '\u2014 Zgadzam si\u0119, ale pod jednym warunkiem.',
      _react2.default.createElement('br', null),
      '\u2014 Jakim?',
      _react2.default.createElement('br', null),
      '\u2014 Zam\xF3wimy espresso.',
      _react2.default.createElement('br', null)
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Wenus vs Chanel, czyli Nowa Dziewczyna z Perłą", "date": "2017-09-07T10:32:00.000Z", "categories": ["Sztuka Ubioru"], "tags": ["art", "artist", "artysta", "dzieło", "wenus", "chanel", "kreacja", "moda"] };
var body = exports.body = "<olela-narrative>\nJestem tym, który delikatnie, z wielką precyzją i odwagą wsuwa maleńkie ziarnko piasku pomiędzy twarde uszy muszli. Jestem tym cierpliwym, który czeka wiele lat zanim jego dotyk urzeczywistni się w postaci nieśmiertelnego piękna. Jestem stwórcą, kreatorem nowej rzeczywistości w akcie nieznanym.\n</olela-narrative>\n<p>Co dzieje się wewnątrz małży nie jesteśmy w stanie do końca wyjaśnić. Arystoteles to maleńkie cudo nanotechnologii porównywał do zapłodnienia kroplą oceanu. XV wiek to czas hipotez -perły są jajami małży. XVII – perły powstają w wyniku utwardzenia soków wydzielanych przez muszlę. XIX – i tutaj zbliżamy się do teorii ciała obcego, które małż traktuje jako intruza i odkłada wokół niego perlistą substancję.\nWłaściwie, to wszystko może stać się perłą. Wyobraźmy sobie muszle wielkości samochodu – z podobnej przecież wyłoniła się Wenus na obrazie S. Botticellego „Narodziny Wenus”. Tak... Wenus była perłą! Wystarczy spojrzeć na odcień jej skóry, który praktycznie zlewa się z muszlą. Gest prawej dłoni podkreśla niewinność piersi - jakże kształtem swoim perliste! Simonetta Vespucci pozuje idealnie a Botticelli idealnie oddaje piękno boskiej perły – jedynej w swoim rodzaju. Nie ma dwóch takich samych, a kopia nigdy nie dorówna oryginalnemu pięknu.</p>\n<p>Pod koniec XVI wieku perły docierają do Europy i… nie wzbudzają większego zainteresowania. Za  to ok. pół roku później holenderski malarz popełnia dzieło uznawane za najwybitniejszy przykład XVII wecznego malarstwa - „Dziewczyna z perłą”, nazywany często Mona Lisą Północy. Kim była owa dziewczyna? Być może jest to kilkunastoletnia wówczas córka J. Vermeera.  Tracy Chevalier (autorka książki „Dziewczyna z Perłą”) interpretuje młodą damę jako służącą, a za jej śladem idzie Peter Webber, reżyser filmu o tym samym tytule.</p>\n<olela-narrative>\nTwarz dziewczyny z obrazu zastyga na moment z lekko rozchylonymi ustami. Patrząc dłuższą chwilę odnoszę wrażenie jakbym przed chwilą zawołał jej imię, stąd gest skrętu głowy w moim kierunku.\nNie mogę oderwać wzroku.\nJeszcze chwila.\n</olela-narrative>\n<p>Przemysłowe hodowle pereł, tych w kształcie kuli, to zasługa Japończyków, a właściwie Kokichi Mikimoto – pioniera innowacyjnej metody. Podczas gdy Kokochi eksperymentuje z małżami na swiat przychodzi przyszła, największa fanka cudownych dzieci muszli – COCO CHANEL.\nPraktycznie na każdym archiwalnym zdjęciu Coco (Gabrielle Bonheur Chanel) nosi na sobie perły – nie jeden sznur a sześć. Z czasem, przylegają do jej tożsamości i w połączeniu z małą czarną stają się UNIWERSALNĄ klasyką.</p>\n<olela-narrative>\nUmówiliśmy się po południu na rogu Park Avenue i 35tej alei. Podobno jest tam jakaś bardzo fajna wegańska kawiarnia. Nie za bardzo wiedziałem czego się spodziewać. W głębi duszy nie chciałem, żeby było to spotkanie czysto biznesowe. Miałem na sobie sportowo-elegancką kurtkę od Armaniego, spodnie przypominające bryczesy i półbuty, których koloru nie jestem w stanie określić. Zerknąłem na zegarek i zacząłem nieco się niecierpliwić. W momencie, kiedy w mojej głowie pojawiła się myśl, że Laura jednak nie przyjdzie, zauważyłem w oddali kobietę zbliżającą się w moim kierunku szybkim, lekko chwiejnym krokiem.\n</olela-narrative>\n<olela-narrative>\n&mdash; Strasznie Cię przepraszam, ale po drodze tutaj najpierw zostawiłam palto w taksówce, a zaraz potem złamałam obcas... &mdash; powiedziała zdejmując lewego buta. Miała na sobie małą czarną i subtelne kolczyki z perłą. Mój umysł przywołał obraz Vermeera, który niedawno widziałem a wystawie.<br />\n&mdash; To Ty... &mdash; wymamrotałem bezwiednie.<br />\n&mdash; Słucham?<br />\n&mdash; Nic, nic, przepraszam, zamyśliłem się. &mdash; Niewiele myśląc chwyciłem Laure pod kolana i za ramiona i podniosłem do góry.<br />\n&mdash; Hej, co robisz?<br />\n&mdash; Zdejmij też drugiego buta, proszę. W tej sukience i kolczykach wyglądasz genialnie. Nic więcej nie jest Ci potrzebne. Mam zamiar zanieść Cię najpierw do kawiarni, gdzie zamówimy sojowe latte na podwójnym espresso, a później tam, gdzie tylko zapragniesz. &mdash; Laura obdarzyła mnie spojrzeniem pełnym niedowierzania, aby zaraz głęboko się uśmiechnąć.<br />\n&mdash; Zgadzam się, ale pod jednym warunkiem.<br />\n&mdash; Jakim?<br />\n&mdash; Zamówimy espresso.<br />\n</olela-narrative>\n";
var raw = exports.raw = "\n\n\n<olela-narrative>\nJestem tym, który delikatnie, z wielką precyzją i odwagą wsuwa maleńkie ziarnko piasku pomiędzy twarde uszy muszli. Jestem tym cierpliwym, który czeka wiele lat zanim jego dotyk urzeczywistni się w postaci nieśmiertelnego piękna. Jestem stwórcą, kreatorem nowej rzeczywistości w akcie nieznanym.\n</olela-narrative>\n\nCo dzieje się wewnątrz małży nie jesteśmy w stanie do końca wyjaśnić. Arystoteles to maleńkie cudo nanotechnologii porównywał do zapłodnienia kroplą oceanu. XV wiek to czas hipotez -perły są jajami małży. XVII – perły powstają w wyniku utwardzenia soków wydzielanych przez muszlę. XIX – i tutaj zbliżamy się do teorii ciała obcego, które małż traktuje jako intruza i odkłada wokół niego perlistą substancję.\nWłaściwie, to wszystko może stać się perłą. Wyobraźmy sobie muszle wielkości samochodu – z podobnej przecież wyłoniła się Wenus na obrazie S. Botticellego „Narodziny Wenus”. Tak… Wenus była perłą! Wystarczy spojrzeć na odcień jej skóry, który praktycznie zlewa się z muszlą. Gest prawej dłoni podkreśla niewinność piersi - jakże kształtem swoim perliste! Simonetta Vespucci pozuje idealnie a Botticelli idealnie oddaje piękno boskiej perły – jedynej w swoim rodzaju. Nie ma dwóch takich samych, a kopia nigdy nie dorówna oryginalnemu pięknu.\n\nPod koniec XVI wieku perły docierają do Europy i… nie wzbudzają większego zainteresowania. Za  to ok. pół roku później holenderski malarz popełnia dzieło uznawane za najwybitniejszy przykład XVII wecznego malarstwa - „Dziewczyna z perłą”, nazywany często Mona Lisą Północy. Kim była owa dziewczyna? Być może jest to kilkunastoletnia wówczas córka J. Vermeera.  Tracy Chevalier (autorka książki „Dziewczyna z Perłą”) interpretuje młodą damę jako służącą, a za jej śladem idzie Peter Webber, reżyser filmu o tym samym tytule.\n\n<olela-narrative>\nTwarz dziewczyny z obrazu zastyga na moment z lekko rozchylonymi ustami. Patrząc dłuższą chwilę odnoszę wrażenie jakbym przed chwilą zawołał jej imię, stąd gest skrętu głowy w moim kierunku.\nNie mogę oderwać wzroku.\nJeszcze chwila.\n</olela-narrative>\n\n\nPrzemysłowe hodowle pereł, tych w kształcie kuli, to zasługa Japończyków, a właściwie Kokichi Mikimoto – pioniera innowacyjnej metody. Podczas gdy Kokochi eksperymentuje z małżami na swiat przychodzi przyszła, największa fanka cudownych dzieci muszli – COCO CHANEL.\nPraktycznie na każdym archiwalnym zdjęciu Coco (Gabrielle Bonheur Chanel) nosi na sobie perły – nie jeden sznur a sześć. Z czasem, przylegają do jej tożsamości i w połączeniu z małą czarną stają się UNIWERSALNĄ klasyką.\n\n<olela-narrative>\nUmówiliśmy się po południu na rogu Park Avenue i 35tej alei. Podobno jest tam jakaś bardzo fajna wegańska kawiarnia. Nie za bardzo wiedziałem czego się spodziewać. W głębi duszy nie chciałem, żeby było to spotkanie czysto biznesowe. Miałem na sobie sportowo-elegancką kurtkę od Armaniego, spodnie przypominające bryczesy i półbuty, których koloru nie jestem w stanie określić. Zerknąłem na zegarek i zacząłem nieco się niecierpliwić. W momencie, kiedy w mojej głowie pojawiła się myśl, że Laura jednak nie przyjdzie, zauważyłem w oddali kobietę zbliżającą się w moim kierunku szybkim, lekko chwiejnym krokiem.\n</olela-narrative>\n\n<olela-narrative>\n&mdash; Strasznie Cię przepraszam, ale po drodze tutaj najpierw zostawiłam palto w taksówce, a zaraz potem złamałam obcas... &mdash; powiedziała zdejmując lewego buta. Miała na sobie małą czarną i subtelne kolczyki z perłą. Mój umysł przywołał obraz Vermeera, który niedawno widziałem a wystawie.<br />\n&mdash; To Ty... &mdash; wymamrotałem bezwiednie.<br />\n&mdash; Słucham?<br />\n&mdash; Nic, nic, przepraszam, zamyśliłem się. &mdash; Niewiele myśląc chwyciłem Laure pod kolana i za ramiona i podniosłem do góry.<br />\n&mdash; Hej, co robisz?<br />\n&mdash; Zdejmij też drugiego buta, proszę. W tej sukience i kolczykach wyglądasz genialnie. Nic więcej nie jest Ci potrzebne. Mam zamiar zanieść Cię najpierw do kawiarni, gdzie zamówimy sojowe latte na podwójnym espresso, a później tam, gdzie tylko zapragniesz. &mdash; Laura obdarzyła mnie spojrzeniem pełnym niedowierzania, aby zaraz głęboko się uśmiechnąć.<br />\n&mdash; Zgadzam się, ale pod jednym warunkiem.<br />\n&mdash; Jakim?<br />\n&mdash; Zamówimy espresso.<br />\n</olela-narrative>\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 113 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 113;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ParrotLayout.tsx": 115,
	"./default.tsx": 197
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 114;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_1 = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
var withStyles_1 = __webpack_require__(6);
var models_1 = __webpack_require__(9);
var TopBar_1 = __webpack_require__(159);
var Crumbs_1 = __webpack_require__(179);
var Tags_1 = __webpack_require__(71);
var Footer_1 = __webpack_require__(184);
var Logo_1 = __webpack_require__(70);
var SideMenu_1 = __webpack_require__(187);
var Jumbotron_1 = __webpack_require__(191);
var s = __webpack_require__(194);
var image = __webpack_require__(196);
var ParrotLayout = /** @class */function (_super) {
    __extends(ParrotLayout, _super);
    function ParrotLayout(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sideMenuClassName: s.closed
        };
        _this.hideMenu = _this.hideMenu.bind(_this);
        _this.showMenu = _this.showMenu.bind(_this);
        return _this;
    }
    ParrotLayout.prototype.componentDidMount = function () {
        document.body.addEventListener('swipe-left', this.hideMenu);
        document.body.addEventListener('swipe-right', this.showMenu);
        window.scrollTo(0, 0);
    };
    ParrotLayout.prototype.componentWillUnmount = function () {
        document.body.removeEventListener('swipe-left', this.hideMenu);
        document.body.removeEventListener('swipe-right', this.showMenu);
    };
    ParrotLayout.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            website = _a.website,
            page = _a.page;
        var Body = page.body;
        return React.createElement("div", { id: s.all }, React.createElement("div", { className: s.header }, React.createElement(TopBar_1.default, { website: website, page: page, onMenuClick: this.showMenu })), React.createElement("div", { className: s.main }, jumbotronFor(website, page), React.createElement("main", null, maybeRenderTitle(website, page), React.createElement(Body, { website: website, page: page }))), React.createElement("div", { className: s.footer + " contrast" }, React.createElement(Footer_1.default, { website: website, page: page }), React.createElement("div", { className: s.bottom }, React.createElement("div", { className: s.logo }, React.createElement(Logo_1.default, { variant: 'full' })))), React.createElement("div", { className: s.sideMenu + " " + this.state.sideMenuClassName, onClick: this.hideMenu }, React.createElement(SideMenu_1.default, { visible: this.state.sideMenuClassName === s.visible, onCloseRequested: function onCloseRequested() {
                return _this.hideMenu();
            }, onClosed: function onClosed() {
                return _this.disableMenu();
            } }, website.menu.map(function (entry) {
            return React.createElement(SideMenu_1.Item, { key: entry.url, url: entry.url, title: entry.title, icon: entry.icon });
        }))));
    };
    ParrotLayout.prototype.showMenu = function () {
        this.setSideMenuClassName(s.visible);
    };
    ParrotLayout.prototype.hideMenu = function () {
        this.setSideMenuClassName('');
    };
    ParrotLayout.prototype.disableMenu = function () {
        this.setSideMenuClassName(s.closed);
    };
    ParrotLayout.prototype.setSideMenuClassName = function (sideMenuClassName) {
        this.setState(function (prev) {
            return __assign({}, prev, { sideMenuClassName: sideMenuClassName });
        });
    };
    return ParrotLayout;
}(react_1.Component);
exports.ParrotLayout = ParrotLayout;
function jumbotronFor(website, page) {
    if (page.url === '/') {
        return React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'center', src: image }, React.createElement("h2", { className: s.indexTitle }, "uniwer\u2022sal\u2022ny; -na"), React.createElement("ol", null, React.createElement("li", null, "\xABobejmuj\u0105cy ca\u0142o\u015B\u0107, dotycz\u0105cy wszystkiego lub wszystkich\xBB"), React.createElement("li", null, "\xABmaj\u0105cy wszechstronne zastosowanie\xBB"), React.createElement("li", null, "\xABmaj\u0105cy r\xF3\u017Cne umiej\u0119tno\u015Bci\xBB")));
    }
    if (page instanceof models_1.Category) {
        return React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' }, React.createElement("h2", { className: s.categoryTitle }, page.title), React.createElement(Crumbs_1.default, { website: website, page: page }));
    }
    if (page instanceof models_1.Tag) {
        return React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' }, React.createElement("h2", { className: s.categoryTitle }, page.title), React.createElement(Crumbs_1.default, { website: website, page: page }));
    }
    return React.createElement(Jumbotron_1.default, { align: 'bottom' }, React.createElement(Crumbs_1.default, { website: website, page: page }));
}
function maybeRenderTitle(website, page) {
    if (page.url === '/' || page instanceof models_1.Category || page instanceof models_1.Tag) {
        return null;
    }
    return React.createElement("div", null, React.createElement("h1", null, React.createElement(react_router_dom_1.Link, { to: page.url }, page.title)), React.createElement(Tags_1.default, { website: website, page: page }));
}
exports.default = withStyles_1.default(s)(ParrotLayout);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(118);
module.exports = __webpack_require__(3).Object.getPrototypeOf;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(57);
var $getPrototypeOf = __webpack_require__(58);

__webpack_require__(119)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(15);
var core = __webpack_require__(3);
var fails = __webpack_require__(21);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(123);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(62);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
__webpack_require__(45);
module.exports = __webpack_require__(46).f('iterator');


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var defined = __webpack_require__(33);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(40);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(44);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(17);
var getKeys = __webpack_require__(41);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(42);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(134);
var toAbsoluteIndex = __webpack_require__(135);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(38);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(11).document;
module.exports = document && document.documentElement;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(138);
var step = __webpack_require__(139);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(63)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
__webpack_require__(147);
__webpack_require__(148);
__webpack_require__(149);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(11);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(64);
var META = __webpack_require__(143).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(35);
var setToStringTag = __webpack_require__(44);
var uid = __webpack_require__(24);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(46);
var wksDefine = __webpack_require__(47);
var enumKeys = __webpack_require__(144);
var isArray = __webpack_require__(145);
var anObject = __webpack_require__(17);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(36);
var createDesc = __webpack_require__(25);
var _create = __webpack_require__(40);
var gOPNExt = __webpack_require__(146);
var $GOPD = __webpack_require__(68);
var $DP = __webpack_require__(13);
var $keys = __webpack_require__(41);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(67).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(48).f = $propertyIsEnumerable;
  __webpack_require__(66).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(39)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(24)('meta');
var isObject = __webpack_require__(20);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(13).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(41);
var gOPS = __webpack_require__(66);
var pIE = __webpack_require__(48);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(42);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(67).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 147 */
/***/ (function(module, exports) {



/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('asyncIterator');


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('observable');


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(151);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(155);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(62);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(152), __esModule: true };

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(153);
module.exports = __webpack_require__(3).Object.setPrototypeOf;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(15);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(154).set });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(20);
var anObject = __webpack_require__(17);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(59)(Function.call, __webpack_require__(68).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(157);
var $Object = __webpack_require__(3).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(40) });


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_1 = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
var withStyles_1 = __webpack_require__(6);
var Button_1 = __webpack_require__(23);
var Icon_1 = __webpack_require__(49);
var Logo_1 = __webpack_require__(70);
__webpack_require__(176);
var s = __webpack_require__(177);
var TopBar = /** @class */function (_super) {
    __extends(TopBar, _super);
    function TopBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopBar.prototype.render = function () {
        var _a = this.props,
            website = _a.website,
            page = _a.page,
            onMenuClick = _a.onMenuClick;
        return React.createElement("header", { className: s.topBar }, React.createElement("div", { className: s.hamburger }, React.createElement(Button_1.default, { onClick: onMenuClick }, React.createElement(Icon_1.default, { name: "\uE5D2" }))), React.createElement(react_router_dom_1.Link, { to: '/' }, React.createElement("span", { className: s.title }, "Sztuka Uniwersalna"), React.createElement("div", { className: s.smallLogo }, React.createElement(Logo_1.default, { variant: 'small' })), React.createElement("div", { className: s.inlineLogo }, React.createElement(Logo_1.default, { variant: 'inline' }))), React.createElement("nav", { className: s.topMenu }, React.createElement("ul", null, website.menu.map(function (entry) {
            return React.createElement("li", { key: entry.url }, React.createElement(Button_1.default, { url: entry.url }, entry.short));
        }))));
    };
    return TopBar;
}(react_1.Component);
exports.TopBar = TopBar;
exports.default = withStyles_1.default(s)(TopBar);

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(161);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Button.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Button.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "html{font-size:4px}._2GivWbhEJlyD3B8csT17iH{display:inline-flex;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}._2GivWbhEJlyD3B8csT17iH a,._2GivWbhEJlyD3B8csT17iH button{height:10rem;font-family:Roboto Slab,serif;font-weight:700;letter-spacing:-.003rem;font-size:16px;line-height:10rem;text-transform:uppercase;text-align:center;border:0;display:block;cursor:pointer}._2GivWbhEJlyD3B8csT17iH a:active,._2GivWbhEJlyD3B8csT17iH a:hover,._2GivWbhEJlyD3B8csT17iH a:link,._2GivWbhEJlyD3B8csT17iH a:visited,._2GivWbhEJlyD3B8csT17iH button:active,._2GivWbhEJlyD3B8csT17iH button:hover,._2GivWbhEJlyD3B8csT17iH button:link,._2GivWbhEJlyD3B8csT17iH button:visited{text-decoration:none}._3E1NxYbY5oHFra0IegNSpM a,._3E1NxYbY5oHFra0IegNSpM button,._2Ed2TayNfZ0s5Mnr0Kgb6g a,._2Ed2TayNfZ0s5Mnr0Kgb6g button,._1fcr1urtQcBX6JX20JSDZA a,._1fcr1urtQcBX6JX20JSDZA button{background-color:transparent;padding:0 3rem}._3E1NxYbY5oHFra0IegNSpM a:active,._3E1NxYbY5oHFra0IegNSpM a:hover,._3E1NxYbY5oHFra0IegNSpM a:link,._3E1NxYbY5oHFra0IegNSpM a:visited,._3E1NxYbY5oHFra0IegNSpM button:active,._3E1NxYbY5oHFra0IegNSpM button:hover,._3E1NxYbY5oHFra0IegNSpM button:link,._3E1NxYbY5oHFra0IegNSpM button:visited,._2Ed2TayNfZ0s5Mnr0Kgb6g a:active,._2Ed2TayNfZ0s5Mnr0Kgb6g a:hover,._2Ed2TayNfZ0s5Mnr0Kgb6g a:link,._2Ed2TayNfZ0s5Mnr0Kgb6g a:visited,._2Ed2TayNfZ0s5Mnr0Kgb6g button:active,._2Ed2TayNfZ0s5Mnr0Kgb6g button:hover,._2Ed2TayNfZ0s5Mnr0Kgb6g button:link,._2Ed2TayNfZ0s5Mnr0Kgb6g button:visited,._1fcr1urtQcBX6JX20JSDZA a:active,._1fcr1urtQcBX6JX20JSDZA a:hover,._1fcr1urtQcBX6JX20JSDZA a:link,._1fcr1urtQcBX6JX20JSDZA a:visited,._1fcr1urtQcBX6JX20JSDZA button:active,._1fcr1urtQcBX6JX20JSDZA button:hover,._1fcr1urtQcBX6JX20JSDZA button:link,._1fcr1urtQcBX6JX20JSDZA button:visited{color:rgba(51,51,51,.9)}.contrast ._3E1NxYbY5oHFra0IegNSpM a:active,.contrast ._3E1NxYbY5oHFra0IegNSpM a:hover,.contrast ._3E1NxYbY5oHFra0IegNSpM a:link,.contrast ._3E1NxYbY5oHFra0IegNSpM a:visited,.contrast ._3E1NxYbY5oHFra0IegNSpM button:active,.contrast ._3E1NxYbY5oHFra0IegNSpM button:hover,.contrast ._3E1NxYbY5oHFra0IegNSpM button:link,.contrast ._3E1NxYbY5oHFra0IegNSpM button:visited,.contrast ._2Ed2TayNfZ0s5Mnr0Kgb6g a:active,.contrast ._2Ed2TayNfZ0s5Mnr0Kgb6g a:hover,.contrast ._2Ed2TayNfZ0s5Mnr0Kgb6g a:link,.contrast ._2Ed2TayNfZ0s5Mnr0Kgb6g a:visited,.contrast ._2Ed2TayNfZ0s5Mnr0Kgb6g button:active,.contrast ._2Ed2TayNfZ0s5Mnr0Kgb6g button:hover,.contrast ._2Ed2TayNfZ0s5Mnr0Kgb6g button:link,.contrast ._2Ed2TayNfZ0s5Mnr0Kgb6g button:visited,.contrast ._1fcr1urtQcBX6JX20JSDZA a:active,.contrast ._1fcr1urtQcBX6JX20JSDZA a:hover,.contrast ._1fcr1urtQcBX6JX20JSDZA a:link,.contrast ._1fcr1urtQcBX6JX20JSDZA a:visited,.contrast ._1fcr1urtQcBX6JX20JSDZA button:active,.contrast ._1fcr1urtQcBX6JX20JSDZA button:hover,.contrast ._1fcr1urtQcBX6JX20JSDZA button:link,.contrast ._1fcr1urtQcBX6JX20JSDZA button:visited{color:hsla(0,0%,100%,.9)}._3E1NxYbY5oHFra0IegNSpM a,._3E1NxYbY5oHFra0IegNSpM button,._1fcr1urtQcBX6JX20JSDZA a,._1fcr1urtQcBX6JX20JSDZA button{box-shadow:1px 1px 3px rgba(0,0,0,.4)}._3E1NxYbY5oHFra0IegNSpM a,._3E1NxYbY5oHFra0IegNSpM button{width:14rem;height:14rem;box-sizing:border-box;padding:4rem;text-align:center;border-radius:50%;overflow:hidden;text-overflow:ellipsis}._3E1NxYbY5oHFra0IegNSpM .material-icons{display:block;position:relative;top:-1px}._9t-0ix9I8St4EUxRul2T a,._9t-0ix9I8St4EUxRul2T button{background-color:#2caa3e}._9t-0ix9I8St4EUxRul2T a:active,._9t-0ix9I8St4EUxRul2T a:hover,._9t-0ix9I8St4EUxRul2T a:link,._9t-0ix9I8St4EUxRul2T a:visited,._9t-0ix9I8St4EUxRul2T button:active,._9t-0ix9I8St4EUxRul2T button:hover,._9t-0ix9I8St4EUxRul2T button:link,._9t-0ix9I8St4EUxRul2T button:visited{color:hsla(0,0%,100%,.9)}._1HofYM5PsRsWIFeb_u1ywI a,._1HofYM5PsRsWIFeb_u1ywI button{background-color:#9f2bd8}._1HofYM5PsRsWIFeb_u1ywI a:active,._1HofYM5PsRsWIFeb_u1ywI a:hover,._1HofYM5PsRsWIFeb_u1ywI a:link,._1HofYM5PsRsWIFeb_u1ywI a:visited,._1HofYM5PsRsWIFeb_u1ywI button:active,._1HofYM5PsRsWIFeb_u1ywI button:hover,._1HofYM5PsRsWIFeb_u1ywI button:link,._1HofYM5PsRsWIFeb_u1ywI button:visited{color:hsla(0,0%,100%,.9)}.eq7lrfGYwflcQGi3Yw2NX a,.eq7lrfGYwflcQGi3Yw2NX button{background-color:#a5a5a5}.eq7lrfGYwflcQGi3Yw2NX a:active,.eq7lrfGYwflcQGi3Yw2NX a:hover,.eq7lrfGYwflcQGi3Yw2NX a:link,.eq7lrfGYwflcQGi3Yw2NX a:visited,.eq7lrfGYwflcQGi3Yw2NX button:active,.eq7lrfGYwflcQGi3Yw2NX button:hover,.eq7lrfGYwflcQGi3Yw2NX button:link,.eq7lrfGYwflcQGi3Yw2NX button:visited{color:hsla(0,0%,100%,.9)}", ""]);

// exports
exports.locals = {
	"button": "_2GivWbhEJlyD3B8csT17iH",
	"action": "_3E1NxYbY5oHFra0IegNSpM",
	"flat": "_2Ed2TayNfZ0s5Mnr0Kgb6g",
	"raised": "_1fcr1urtQcBX6JX20JSDZA",
	"green": "_9t-0ix9I8St4EUxRul2T",
	"purple": "_1HofYM5PsRsWIFeb_u1ywI",
	"gray": "eq7lrfGYwflcQGi3Yw2NX"
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(163), __esModule: true };

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(165);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(168);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(166), __esModule: true };

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(37);
module.exports = __webpack_require__(167);


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(69);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(22);
module.exports = __webpack_require__(3).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(169), __esModule: true };

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(37);
module.exports = __webpack_require__(170);


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var get = __webpack_require__(171);
module.exports = __webpack_require__(3).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(69);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(22);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(173);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Icon.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Icon.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "._2y_9UU7SdcQ9BtTPMycioC{display:block;width:6rem}._2y_9UU7SdcQ9BtTPMycioC path{fill:hsla(0,0%,100%,.9)}", ""]);

// exports
exports.locals = {
	"icon": "_2y_9UU7SdcQ9BtTPMycioC"
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(175);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Logo.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Logo.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "._1-QMD2T9PJJpTaS0sT_9xO{display:flex}._1-QMD2T9PJJpTaS0sT_9xO g{fill:#333}.contrast ._1-QMD2T9PJJpTaS0sT_9xO g{fill:#fff}._1-QMD2T9PJJpTaS0sT_9xO ._2cHxvsIjLD_nAONiKwiyc9{fill:#e70c62}._1-QMD2T9PJJpTaS0sT_9xO ._2YUnpxpxJKjlAQndRVxau7{fill:#9f2bd8}._1-QMD2T9PJJpTaS0sT_9xO ._1uCoxWoPeWPzZbQ9sncPMG{fill:#2daa3d}._1PH_4KOfIDRHni7KXYcAod{margin:2.5rem 2rem;height:7rem}._3Z7Fcztn8mgst6n1OL-x9P{margin:2.5rem 3rem 2rem;height:5.5rem}", ""]);

// exports
exports.locals = {
	"logo": "_1-QMD2T9PJJpTaS0sT_9xO",
	"letterS": "_2cHxvsIjLD_nAONiKwiyc9",
	"letterU": "_2YUnpxpxJKjlAQndRVxau7",
	"dot": "_1uCoxWoPeWPzZbQ9sncPMG",
	"small": "_1PH_4KOfIDRHni7KXYcAod",
	"inline": "_3Z7Fcztn8mgst6n1OL-x9P"
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!self.window.hasOwnProperty('swipeEventsPolyfill')) {
    var SWIPE_TRESHOLD_1 = 120;
    var originX_1;
    self.window.addEventListener('mousedown', function (e) {
        originX_1 = e.pageX;
    });
    self.window.addEventListener('mousemove', function (e) {
        if (originX_1 === null) {
            return;
        }
        var diff = e.pageX - originX_1;
        if (diff > SWIPE_TRESHOLD_1) {
            document.body.dispatchEvent(new Event('swipe-right'));
            originX_1 += SWIPE_TRESHOLD_1;
        } else if (diff < -SWIPE_TRESHOLD_1) {
            document.body.dispatchEvent(new Event('swipe-left'));
            originX_1 -= SWIPE_TRESHOLD_1;
        }
    });
    self.window.addEventListener('mouseup', function (e) {
        originX_1 = null;
    });
    Object.defineProperty(self.window, 'swipeEventsPolyfill', {
        value: true
    });
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(178);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./TopBar.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./TopBar.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "._3Qps0IQRGaqd-BWSKzmw5z ul{list-style-type:none;flex-wrap:wrap}._3Qps0IQRGaqd-BWSKzmw5z ul,._3Qps0IQRGaqd-BWSKzmw5z ul li{padding:0;margin:0;display:flex}._3Qps0IQRGaqd-BWSKzmw5z ul li:before{content:\"\";margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:left;vertical-align:inherit;width:auto;height:auto;position:static;opacity:1}._9GvZQciHwcx0fA1RIy9jK{padding:1rem 0;display:flex;align-items:center;justify-content:space-between;flex-direction:row}@media only screen and (min-width:800px) and (max-width:1011px){._9GvZQciHwcx0fA1RIy9jK{padding:3rem 0}}@media only screen and (min-width:1012px){._9GvZQciHwcx0fA1RIy9jK{padding:3rem 0}}._8j_9oxmtExoXRBB6gBsgo{display:flex}@media only screen and (min-width:800px) and (max-width:1011px){._8j_9oxmtExoXRBB6gBsgo{display:none}}@media only screen and (min-width:1012px){._8j_9oxmtExoXRBB6gBsgo{display:none}}._8j_9oxmtExoXRBB6gBsgo button{height:12rem!important}._8j_9oxmtExoXRBB6gBsgo i{font-size:7rem;line-height:12rem;color:rgba(51,51,51,.72)}._1_RdtpbeP8IZKulhyFhM4h{display:none}@media only screen and (min-width:1012px){._1_RdtpbeP8IZKulhyFhM4h{display:flex}}._3lS6zyfCEfCoZ_tpXM575-{display:flex}@media only screen and (min-width:1012px){._3lS6zyfCEfCoZ_tpXM575-{display:none}}.GC_XS2PRkYjMmeyDNkMwq,._3Qps0IQRGaqd-BWSKzmw5z{display:none}._3Qps0IQRGaqd-BWSKzmw5z ul{margin:1rem 0}._3Qps0IQRGaqd-BWSKzmw5z a:active,._3Qps0IQRGaqd-BWSKzmw5z a:hover{background:rgba(51,51,51,.05)}@media only screen and (min-width:800px) and (max-width:1011px){._3Qps0IQRGaqd-BWSKzmw5z{display:flex}}@media only screen and (min-width:1012px){._3Qps0IQRGaqd-BWSKzmw5z{display:flex}}", ""]);

// exports
exports.locals = {
	"topMenu": "_3Qps0IQRGaqd-BWSKzmw5z",
	"topBar": "_9GvZQciHwcx0fA1RIy9jK",
	"hamburger": "_8j_9oxmtExoXRBB6gBsgo",
	"inlineLogo": "_1_RdtpbeP8IZKulhyFhM4h",
	"smallLogo": "_3lS6zyfCEfCoZ_tpXM575-",
	"title": "GC_XS2PRkYjMmeyDNkMwq"
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
var withStyles_1 = __webpack_require__(6);
var s = __webpack_require__(180);
function Crumbs(_a) {
    var website = _a.website,
        page = _a.page;
    return React.createElement("div", { className: s.crumbs }, page.getCrumbs(website).map(function (crumbs, key) {
        return React.createElement("ul", { key: key }, crumbs.map(function (page) {
            return React.createElement("li", { key: page.url }, React.createElement(react_router_dom_1.Link, { to: page.url }, page.title));
        }));
    }));
}
exports.Crumbs = Crumbs;
exports.default = withStyles_1.default(s)(Crumbs);

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(181);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Crumbs.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Crumbs.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "._8O08U0I-tH-vGKomHew79 ul{list-style-type:none;flex-wrap:wrap}._8O08U0I-tH-vGKomHew79 ul,._8O08U0I-tH-vGKomHew79 ul li{padding:0;margin:0;display:flex}._8O08U0I-tH-vGKomHew79 ul li:before{content:\"\";margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:left;vertical-align:inherit;width:auto;height:auto;position:static;opacity:1}html{font-size:4px}._8O08U0I-tH-vGKomHew79 ul{display:none}@media only screen and (min-width:800px) and (max-width:1011px){._8O08U0I-tH-vGKomHew79 ul{display:flex;padding:1rem 0}}@media only screen and (min-width:1012px){._8O08U0I-tH-vGKomHew79 ul{display:flex;padding:2rem 0}}._8O08U0I-tH-vGKomHew79 li{font-family:Roboto Slab,serif;font-weight:300;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}._8O08U0I-tH-vGKomHew79 li:not(:first-child):before{content:\">\";padding:0 2rem}._8O08U0I-tH-vGKomHew79 a:link,._8O08U0I-tH-vGKomHew79 a:visited{text-decoration:none}._8O08U0I-tH-vGKomHew79 a:active,._8O08U0I-tH-vGKomHew79 a:hover{text-decoration:underline}", ""]);

// exports
exports.locals = {
	"crumbs": "_8O08U0I-tH-vGKomHew79"
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(183);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Tags.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Tags.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "ul.Jm7hLSEUTCdk-r0EolMvb{list-style-type:none;flex-wrap:wrap}ul.Jm7hLSEUTCdk-r0EolMvb,ul.Jm7hLSEUTCdk-r0EolMvb li{padding:0;margin:0;display:flex}ul.Jm7hLSEUTCdk-r0EolMvb li:before{content:\"\";margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:left;vertical-align:inherit;width:auto;height:auto;position:static;opacity:1}ul.Jm7hLSEUTCdk-r0EolMvb{margin:-5rem 0 5rem -3rem}@media only screen and (min-width:800px) and (max-width:1011px){ul.Jm7hLSEUTCdk-r0EolMvb{margin:-7rem 0 7rem -3rem}}@media only screen and (min-width:1012px){ul.Jm7hLSEUTCdk-r0EolMvb{margin:-9rem 0 9rem -3rem}}", ""]);

// exports
exports.locals = {
	"tags": "Jm7hLSEUTCdk-r0EolMvb"
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_1 = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
var withStyles_1 = __webpack_require__(6);
var Button_1 = __webpack_require__(23);
var Icon_1 = __webpack_require__(49);
var s = __webpack_require__(185);
var Footer = /** @class */function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var _a = this.props,
            website = _a.website,
            page = _a.page;
        var index = website.getPageOfUrl('/');
        var sitemap = website.getPageOfUrl('/sitemap');
        return React.createElement("footer", { className: s.footer }, React.createElement("ul", { className: s.socialButtons }, React.createElement("li", { key: 'facebook' }, React.createElement(Button_1.default, { variant: 'action', color: 'green', url: 'https://www.facebook.com/sztukauniwersalna/' }, React.createElement(Icon_1.default, { name: 'facebook' }))), React.createElement("li", { key: 'instagram' }, React.createElement(Button_1.default, { variant: 'action', color: 'green', url: 'https://www.instagram.com/sztuka_uniwersalna/' }, React.createElement(Icon_1.default, { name: 'instagram' })))), React.createElement("ul", { className: s.categories }, website.menu.map(function (entry) {
            return React.createElement("li", { key: entry.url }, React.createElement(Button_1.default, { url: entry.url }, entry.title));
        })), React.createElement("p", { className: s.bottomParagraph }, React.createElement("span", { className: s.copyright }, "\xA9 2017 Aleksandra Krawczyk"), React.createElement("span", { className: s.indexLink }, React.createElement(react_router_dom_1.Link, { to: index.url }, index.title)), React.createElement("span", { className: s.sitemapLink }, React.createElement(react_router_dom_1.Link, { to: sitemap.url }, sitemap.title))), React.createElement("div", { className: s.scrollUpButton }, React.createElement(Button_1.default, { variant: 'action', color: 'gray', onClick: function onClick() {
                return window.scrollTo(0, 0);
            } }, React.createElement(Icon_1.default, { name: 'arrow_upward' }))));
    };
    return Footer;
}(react_1.Component);
exports.Footer = Footer;
exports.default = withStyles_1.default(s)(Footer);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(186);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Footer.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Footer.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "html{font-size:4px}._3-II8FeR_WBUDVcJykDz1y,._1tcYdbEdRr8IhUVims7gLo{list-style-type:none;flex-wrap:wrap}._3-II8FeR_WBUDVcJykDz1y,._3-II8FeR_WBUDVcJykDz1y li,._1tcYdbEdRr8IhUVims7gLo,._1tcYdbEdRr8IhUVims7gLo li{padding:0;margin:0;display:flex}._3-II8FeR_WBUDVcJykDz1y li:before,._1tcYdbEdRr8IhUVims7gLo li:before{content:\"\";margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:left;vertical-align:inherit;width:auto;height:auto;position:static;opacity:1}.zEOVlWv598Dn6pfojqIPY{position:relative;padding:16rem 0}@media only screen and (min-width:568px) and (max-width:799px){.zEOVlWv598Dn6pfojqIPY{padding:18rem 0 10rem}}@media only screen and (min-width:800px) and (max-width:1011px){.zEOVlWv598Dn6pfojqIPY{padding:18rem 0 16rem}}@media only screen and (min-width:1012px){.zEOVlWv598Dn6pfojqIPY{padding:14rem 0 12rem}}._1tcYdbEdRr8IhUVims7gLo{position:absolute;top:-7rem;left:5rem}@media only screen and (min-width:568px) and (max-width:799px){._1tcYdbEdRr8IhUVims7gLo{left:3rem}}@media only screen and (min-width:800px) and (max-width:1011px){._1tcYdbEdRr8IhUVims7gLo{left:3rem}}@media only screen and (min-width:1012px){._1tcYdbEdRr8IhUVims7gLo{left:3rem}}._1tcYdbEdRr8IhUVims7gLo li{margin-right:5rem}._1tcYdbEdRr8IhUVims7gLo:last-child{margin-right:0}._3-II8FeR_WBUDVcJykDz1y{flex-direction:column}@media only screen and (min-width:568px) and (max-width:799px){._3-II8FeR_WBUDVcJykDz1y{flex-direction:row;flex-wrap:wrap}}@media only screen and (min-width:800px) and (max-width:1011px){._3-II8FeR_WBUDVcJykDz1y{flex-direction:row;flex-wrap:wrap}}@media only screen and (min-width:1012px){._3-II8FeR_WBUDVcJykDz1y{flex-direction:row;flex-wrap:wrap}}@media only screen and (min-width:800px) and (max-width:1011px){._3-II8FeR_WBUDVcJykDz1y{padding-right:40rem}}._3-II8FeR_WBUDVcJykDz1y a,._3-II8FeR_WBUDVcJykDz1y button{margin:1rem}._3CzvU_f8H9HvMVr7Kmpv-L{font-family:Roboto Slab,serif;font-weight:400;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem;padding:0 4rem;margin:8rem 0 0}@media only screen and (min-width:568px) and (max-width:799px){._3CzvU_f8H9HvMVr7Kmpv-L{margin:11rem 0 0}}@media only screen and (min-width:800px) and (max-width:1011px){._3CzvU_f8H9HvMVr7Kmpv-L{margin:16rem 0 0}}@media only screen and (min-width:1012px){._3CzvU_f8H9HvMVr7Kmpv-L{margin:16rem 0 0}}._3_GbgrXGcSQrMbIA4xPqws,._3yS6VCRRbHG5QxkqB7rOA5,.LjjrNKL-p2z-GnL0K3pEj{white-space:nowrap;display:block}@media only screen and (min-width:568px) and (max-width:799px){._3_GbgrXGcSQrMbIA4xPqws,._3yS6VCRRbHG5QxkqB7rOA5,.LjjrNKL-p2z-GnL0K3pEj{display:inline-block}._3_GbgrXGcSQrMbIA4xPqws:before,._3yS6VCRRbHG5QxkqB7rOA5:before,.LjjrNKL-p2z-GnL0K3pEj:before{content:\"|\";display:inline-block;padding:0 2rem}}@media only screen and (min-width:800px) and (max-width:1011px){._3_GbgrXGcSQrMbIA4xPqws,._3yS6VCRRbHG5QxkqB7rOA5,.LjjrNKL-p2z-GnL0K3pEj{display:inline-block}._3_GbgrXGcSQrMbIA4xPqws:before,._3yS6VCRRbHG5QxkqB7rOA5:before,.LjjrNKL-p2z-GnL0K3pEj:before{content:\"|\";display:inline-block;padding:0 2rem}}@media only screen and (min-width:1012px){._3_GbgrXGcSQrMbIA4xPqws,._3yS6VCRRbHG5QxkqB7rOA5,.LjjrNKL-p2z-GnL0K3pEj{display:inline-block}._3_GbgrXGcSQrMbIA4xPqws:before,._3yS6VCRRbHG5QxkqB7rOA5:before,.LjjrNKL-p2z-GnL0K3pEj:before{content:\"|\";display:inline-block;padding:0 2rem}}@media only screen and (min-width:800px) and (max-width:1011px){._3_GbgrXGcSQrMbIA4xPqws:before,._3yS6VCRRbHG5QxkqB7rOA5:before,.LjjrNKL-p2z-GnL0K3pEj:before{padding:0 4rem}}@media only screen and (min-width:1012px){._3_GbgrXGcSQrMbIA4xPqws:before,._3yS6VCRRbHG5QxkqB7rOA5:before,.LjjrNKL-p2z-GnL0K3pEj:before{padding:0 4rem}}._3_GbgrXGcSQrMbIA4xPqws:before{display:none}@media only screen and (min-width:568px) and (max-width:799px){._3_GbgrXGcSQrMbIA4xPqws{display:block}}@media only screen and (min-width:568px) and (max-width:799px){._3yS6VCRRbHG5QxkqB7rOA5:before{display:none}}._2yRa-eNLz1OWff8311PHeO{position:absolute;bottom:5rem;right:4rem}", ""]);

// exports
exports.locals = {
	"categories": "_3-II8FeR_WBUDVcJykDz1y",
	"socialButtons": "_1tcYdbEdRr8IhUVims7gLo",
	"footer": "zEOVlWv598Dn6pfojqIPY",
	"bottomParagraph": "_3CzvU_f8H9HvMVr7Kmpv-L",
	"copyright": "_3_GbgrXGcSQrMbIA4xPqws",
	"indexLink": "_3yS6VCRRbHG5QxkqB7rOA5",
	"sitemapLink": "LjjrNKL-p2z-GnL0K3pEj",
	"scrollUpButton": "_2yRa-eNLz1OWff8311PHeO"
};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_1 = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
var withStyles_1 = __webpack_require__(6);
var Button_1 = __webpack_require__(23);
var Icon_1 = __webpack_require__(49);
var s = __webpack_require__(188);
function Item(props) {
    return null;
}
exports.Item = Item;
var SideMenu = /** @class */function (_super) {
    __extends(SideMenu, _super);
    function SideMenu(props) {
        var _this = _super.call(this, props) || this;
        var _a = props.visible,
            visible = _a === void 0 ? false : _a;
        _this.state = {
            visible: visible
        };
        return _this;
    }
    SideMenu.prototype.componentWillReceiveProps = function (props) {
        this.setState(function (prevState) {
            var _a = props.visible,
                visible = _a === void 0 ? false : _a;
            return __assign({}, prevState, { visible: visible });
        });
    };
    SideMenu.prototype.render = function () {
        var _this = this;
        var classNames = [s.panel];
        if (this.state.visible) {
            classNames.push(s.visible);
        }
        var _a = this.props,
            onCloseRequested = _a.onCloseRequested,
            children = _a.children;
        return React.createElement("aside", { className: classNames.join(' '), onTransitionEnd: function onTransitionEnd() {
                return _this.onTransitionEnd();
            }, ref: function ref(elem) {
                return _this.element = elem;
            }, onClick: function onClick(e) {
                return e.stopPropagation();
            } }, React.createElement("div", { className: s.header }, React.createElement("div", { className: s.closeButton }, React.createElement(Button_1.default, { onClick: onCloseRequested }, React.createElement(Icon_1.default, { name: 'close' })))), React.createElement("ul", { className: s.content }, renderItems(children)));
    };
    SideMenu.prototype.onTransitionEnd = function () {
        if (this.props.visible) {
            return;
        }
        this.props.onClosed();
    };
    return SideMenu;
}(react_1.Component);
exports.SideMenu = SideMenu;
function renderItems(children) {
    if (!children) {
        return null;
    }
    return [].concat(children).map(function (item) {
        return React.createElement("li", { key: item.props.url }, React.createElement(react_router_dom_1.Link, { to: item.props.url }, React.createElement("span", { className: s.itemIcon }, React.createElement(Icon_1.default, { name: item.props.icon })), React.createElement("span", { className: s.itemTitle }, item.props.title)));
    });
}
exports.default = withStyles_1.default(s)(SideMenu);

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(189);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./SideMenu.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./SideMenu.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "html{font-size:4px}._2Ugt_EDi4ibsg-a3Rca84Z{position:absolute;top:0;transition:left .2s ease-out;left:-100%;width:calc(100% - 14rem);max-width:80rem;height:100%;background:#f1f1f1;box-shadow:0 0 4px #000;display:flex;flex-direction:column}._2Ugt_EDi4ibsg-a3Rca84Z._3BVp9hmtU66aFy0eRB0LRi{left:0}._2Ugt_EDi4ibsg-a3Rca84Z:focus{outline:0}._9c2XlVlxjlaFdYbrVzEN_{height:63rem;background:url(" + __webpack_require__(190) + ") 50% no-repeat;background-size:cover}.lKobN5IQhVnwdxNfbhy0z,._9c2XlVlxjlaFdYbrVzEN_{display:flex;flex-direction:column}.lKobN5IQhVnwdxNfbhy0z{margin:0;padding:2rem 0;align-items:stretch}.lKobN5IQhVnwdxNfbhy0z li{margin:0;padding:0;display:block}.lKobN5IQhVnwdxNfbhy0z li:before{display:none}.lKobN5IQhVnwdxNfbhy0z a{margin:0;padding:0 4rem;display:flex;flex-direction:row;align-items:center;text-decoration:none}.lKobN5IQhVnwdxNfbhy0z a:active,.lKobN5IQhVnwdxNfbhy0z a:hover{background-color:#fff}._3PqaGCTzDFRSKPe9hXcPz0{margin-right:8rem;width:6rem;flex-shrink:0;flex-grow:0;align-self:stretch;color:rgba(51,51,51,.6);display:flex;flex-direction:row;align-items:center;justify-content:center}.oZE9lnjTMHJjd9MGOUMAc{flex-shrink:0;flex-grow:1;color:rgba(51,51,51,.9);font-family:Roboto Slab,serif;font-weight:400;letter-spacing:-.003rem;font-size:16px;line-height:6rem;padding-top:3.56rem;padding-bottom:3.44rem;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (min-width:1012px){.oZE9lnjTMHJjd9MGOUMAc{font-size:20px;line-height:7rem;padding-top:3.7rem;padding-bottom:4.3rem}}._3MKYraCdU4zpGIPVBs8M-r{align-self:flex-end;background-color:#f1f1f1}._3MKYraCdU4zpGIPVBs8M-r i{font-size:6rem;line-height:12.5rem;color:rgba(51,51,51,.72)}._3MKYraCdU4zpGIPVBs8M-r,._3MKYraCdU4zpGIPVBs8M-r button{height:14rem;width:14rem;text-align:center}", ""]);

// exports
exports.locals = {
	"panel": "_2Ugt_EDi4ibsg-a3Rca84Z",
	"visible": "_3BVp9hmtU66aFy0eRB0LRi",
	"header": "_9c2XlVlxjlaFdYbrVzEN_",
	"content": "lKobN5IQhVnwdxNfbhy0z",
	"itemIcon": "_3PqaGCTzDFRSKPe9hXcPz0",
	"itemTitle": "oZE9lnjTMHJjd9MGOUMAc",
	"closeButton": "_3MKYraCdU4zpGIPVBs8M-r"
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "940f732e370cf6a7d71a8494ac7e7782.jpg";

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var withStyles_1 = __webpack_require__(6);
var s = __webpack_require__(192);
function Jumbotron(_a) {
    var children = _a.children,
        src = _a.src,
        _b = _a.fullscreen,
        fullscreen = _b === void 0 ? false : _b,
        _c = _a.align,
        align = _c === void 0 ? 'center' : _c;
    return React.createElement("div", { className: s.container + " " + (fullscreen ? s.fullscreen : '') + " " + s[align] }, React.createElement("div", { className: s.jumbo + " contrast compact strong" }, React.createElement("div", { className: s.text }, children), src ? renderImage(src) : null));
}
exports.Jumbotron = Jumbotron;
var renderImage = function renderImage(src) {
    return React.createElement("div", { className: s.image, style: { backgroundImage: "url('" + src + "')" } });
};
exports.default = withStyles_1.default(s)(Jumbotron);

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(193);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Jumbotron.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Jumbotron.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "._1XJ1WI9LAcUqfV6wiG4fux{box-sizing:border-box;width:100%;padding-left:4rem;padding-right:4rem;margin:0}@media only screen and (min-width:800px) and (max-width:1011px){._1XJ1WI9LAcUqfV6wiG4fux{width:756px;margin:0 auto}}@media only screen and (min-width:1012px){._1XJ1WI9LAcUqfV6wiG4fux{width:924px;margin:0 auto}}._19DcRKm8SoIEQfZGyr_4Lg{background-color:#eb3e5c;box-sizing:border-box;display:flex;align-items:stretch;justify-content:stretch;min-height:2rem;transition:height .2s ease-out,min-height .2s ease-out}@media only screen and (min-width:800px) and (max-width:1011px){._19DcRKm8SoIEQfZGyr_4Lg{min-height:33rem}}@media only screen and (min-width:1012px){._19DcRKm8SoIEQfZGyr_4Lg{min-height:44rem}}._3KPquxlxshZnqPQwIhOQ92{height:calc(100vh - 14rem)}@media only screen and (min-width:568px) and (max-width:799px){._3KPquxlxshZnqPQwIhOQ92{height:90rem;max-height:calc(100vh - 14rem)}}@media only screen and (min-width:800px) and (max-width:1011px){._3KPquxlxshZnqPQwIhOQ92{height:54rem}}@media only screen and (min-width:1012px){._3KPquxlxshZnqPQwIhOQ92{height:66rem}}._1XJ1WI9LAcUqfV6wiG4fux{display:flex;align-items:stretch;justify-content:space-between;padding:0 4rem}.Tawju18UEtUe_Ppny8vZ6 ._1XJ1WI9LAcUqfV6wiG4fux{justify-content:center}@media only screen and (min-width:800px) and (max-width:1011px){.Tawju18UEtUe_Ppny8vZ6 ._1XJ1WI9LAcUqfV6wiG4fux{justify-content:space-between}}@media only screen and (min-width:1012px){.Tawju18UEtUe_Ppny8vZ6 ._1XJ1WI9LAcUqfV6wiG4fux{justify-content:space-between}}._3i4R_AZrmJevJh5n-_4G6A{display:inline-flex;flex-direction:column;padding:1rem 0}.Tawju18UEtUe_Ppny8vZ6 ._3i4R_AZrmJevJh5n-_4G6A{justify-content:center;width:68rem;padding-left:0;padding-right:0}@media only screen and (min-width:568px) and (max-width:799px){.Tawju18UEtUe_Ppny8vZ6 ._3i4R_AZrmJevJh5n-_4G6A{width:128rem;padding-left:8rem}}@media only screen and (min-width:800px) and (max-width:1011px){.Tawju18UEtUe_Ppny8vZ6 ._3i4R_AZrmJevJh5n-_4G6A{width:auto;padding-left:7rem;padding-right:0}}@media only screen and (min-width:1012px){.Tawju18UEtUe_Ppny8vZ6 ._3i4R_AZrmJevJh5n-_4G6A{width:auto;padding-left:14rem;padding-right:6rem}}._1XWO7VlzJ9Bp8wEl4u1JoO ._3i4R_AZrmJevJh5n-_4G6A{justify-content:flex-end}._2Cmus0RzZ7V-lVuoTkXYYg{background-size:cover;height:100%;transition:width .2s ease-out;display:none}@media only screen and (min-width:800px) and (max-width:1011px){._2Cmus0RzZ7V-lVuoTkXYYg{width:54rem}}@media only screen and (min-width:1012px){._2Cmus0RzZ7V-lVuoTkXYYg{width:66rem}}@media only screen and (min-width:800px) and (max-width:1011px){._2Cmus0RzZ7V-lVuoTkXYYg{display:flex}}@media only screen and (min-width:1012px){._2Cmus0RzZ7V-lVuoTkXYYg{display:flex}}", ""]);

// exports
exports.locals = {
	"jumbo": "_1XJ1WI9LAcUqfV6wiG4fux",
	"container": "_19DcRKm8SoIEQfZGyr_4Lg",
	"fullscreen": "_3KPquxlxshZnqPQwIhOQ92",
	"center": "Tawju18UEtUe_Ppny8vZ6",
	"text": "_3i4R_AZrmJevJh5n-_4G6A",
	"bottom": "_1XWO7VlzJ9Bp8wEl4u1JoO",
	"image": "_2Cmus0RzZ7V-lVuoTkXYYg"
};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(195);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../node_modules/css-loader/index.js??ref--5-1!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./root.scss", function() {
        content = require("!!../../node_modules/css-loader/index.js??ref--5-1!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./root.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";html{font-size:4px}._1__IRxq_cGDawbSTh7j7BD ._du84Cr6CfRHAHgiIeT25,._2tbECA-2MxsYfYyGb0vALe footer,._3di8mX8AHZz-tAvDaFGRX0 header,._17ub8YhwvdHqt3FvWtSVRd main{box-sizing:border-box;width:100%;padding-left:4rem;padding-right:4rem;margin:0}@media only screen and (min-width:800px) and (max-width:1011px){._1__IRxq_cGDawbSTh7j7BD ._du84Cr6CfRHAHgiIeT25,._2tbECA-2MxsYfYyGb0vALe footer,._3di8mX8AHZz-tAvDaFGRX0 header,._17ub8YhwvdHqt3FvWtSVRd main{width:756px;margin:0 auto}}@media only screen and (min-width:1012px){._1__IRxq_cGDawbSTh7j7BD ._du84Cr6CfRHAHgiIeT25,._2tbECA-2MxsYfYyGb0vALe footer,._3di8mX8AHZz-tAvDaFGRX0 header,._17ub8YhwvdHqt3FvWtSVRd main{width:924px;margin:0 auto}}html{overflow-y:scroll}body,html{height:100%}body{background-color:#e2e2e2;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QcZCzkbBkkNNQAAAHFJREFUaN7t1bENACAIBEBwJPefwZnsYQLIfWesPnlyGT23vN/k/xPLo+D05Labq/8mquCAG+SgiSrIQQ6aKAc5aKIKcpCDJspBDpqoghzkoIlykIMmqiAHOWiiHOSgiSrIQQ66QQ5y0EQV5CAH3eDefJAaXMEw5G3+AAAAAElFTkSuQmCC);background-repeat:repeat;background-position:0 0;margin:0}#PcDKGrJm6xcCP7nPHm-qL,#root{height:100%;min-height:100%;overflow:visible}._3di8mX8AHZz-tAvDaFGRX0{z-index:1;position:fixed;top:0;left:0;width:100%;background-color:#fff;box-shadow:0 0 3px rgba(0,0,0,.4)}._3di8mX8AHZz-tAvDaFGRX0 header{padding-left:0;padding-right:0}._17ub8YhwvdHqt3FvWtSVRd{box-sizing:border-box;padding-top:14rem;padding-bottom:14rem;min-height:calc(100% - 152rem);background-color:#fff}@media only screen and (min-width:568px) and (max-width:799px){._17ub8YhwvdHqt3FvWtSVRd{min-height:calc(100% - 105rem)}}@media only screen and (min-width:800px) and (max-width:1011px){._17ub8YhwvdHqt3FvWtSVRd{padding-top:18rem;min-height:calc(100% - 116rem)}}@media only screen and (min-width:1012px){._17ub8YhwvdHqt3FvWtSVRd{padding-top:18rem;min-height:calc(100% - 96rem)}}._17ub8YhwvdHqt3FvWtSVRd main{padding-top:6rem}@media only screen and (min-width:1012px){._17ub8YhwvdHqt3FvWtSVRd main{padding-top:7rem}}._17ub8YhwvdHqt3FvWtSVRd img{display:block;width:100vw;margin-left:calc(50% - 50vw);margin-top:5rem;margin-bottom:3rem}@media only screen and (min-width:1012px){._17ub8YhwvdHqt3FvWtSVRd img{margin-top:7rem;margin-bottom:5rem}}._2tbECA-2MxsYfYyGb0vALe{background-color:#303030}._2tbECA-2MxsYfYyGb0vALe footer{padding-left:0;padding-right:0}._1__IRxq_cGDawbSTh7j7BD{background-color:rgba(0,0,0,.2)}._1__IRxq_cGDawbSTh7j7BD ._du84Cr6CfRHAHgiIeT25{display:flex;justify-content:center;padding-top:12rem;padding-bottom:9rem}._1__IRxq_cGDawbSTh7j7BD ._du84Cr6CfRHAHgiIeT25 svg{margin-left:2rem;height:10rem}@media only screen and (min-width:568px) and (max-width:799px){._1__IRxq_cGDawbSTh7j7BD ._du84Cr6CfRHAHgiIeT25{justify-content:flex-end;padding:10rem 4rem 8rem}}@media only screen and (min-width:800px) and (max-width:1011px){._1__IRxq_cGDawbSTh7j7BD ._du84Cr6CfRHAHgiIeT25{justify-content:flex-end;padding:10rem 4rem 8rem}}@media only screen and (min-width:1012px){._1__IRxq_cGDawbSTh7j7BD ._du84Cr6CfRHAHgiIeT25{justify-content:flex-end;padding:10rem 4rem 8rem}}@media only screen and (min-width:800px) and (max-width:1011px){._1__IRxq_cGDawbSTh7j7BD ._du84Cr6CfRHAHgiIeT25 svg{height:14rem;height:17rem}}@media only screen and (min-width:1012px){._1__IRxq_cGDawbSTh7j7BD ._du84Cr6CfRHAHgiIeT25 svg{height:17rem}}._31ZFCVKzHy0seoA4ydYPMq{z-index:1;position:fixed;top:0;left:0;background-color:transparent;transition:background-color .3s ease-out;height:100%;width:100%;display:flex}._31ZFCVKzHy0seoA4ydYPMq._3xgsOcgq4SrlL6hzyNNl6T{background-color:rgba(7,0,55,.6)}._31ZFCVKzHy0seoA4ydYPMq._1iZMjmpuhvj3QpYrDgcVlC{left:-100%}@media only screen and (min-width:800px) and (max-width:1011px){._31ZFCVKzHy0seoA4ydYPMq{display:none}}@media only screen and (min-width:1012px){._31ZFCVKzHy0seoA4ydYPMq{display:none}}h1{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.14rem;font-size:26px;line-height:9rem;padding-top:2.225rem;padding-bottom:6.775rem}.contrast h1{color:hsla(0,0%,100%,.7)}@media only screen and (min-width:1012px){h1{font-size:32px;line-height:11rem;padding-top:2.7rem;padding-bottom:8.3rem}}.compact h1{margin:2rem 0 -8rem;font-family:Andada,serif;font-weight:400;letter-spacing:.14rem;font-size:26px;line-height:9rem;padding-top:2.225rem;padding-bottom:6.775rem}.strong h1{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h1,.strong.contrast h1{color:hsla(0,0%,100%,.9)}h2{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.08rem;font-size:24px;line-height:9rem;padding-top:2.4rem;padding-bottom:6.6rem}.contrast h2{color:hsla(0,0%,100%,.7)}@media only screen and (min-width:1012px){h2{font-size:30px;line-height:11rem;padding-top:2.875rem;padding-bottom:8.125rem}}.compact h2{margin:2rem 0 -8rem;font-family:Andada,serif;font-weight:400;letter-spacing:.08rem;font-size:24px;line-height:9rem;padding-top:2.4rem;padding-bottom:6.6rem}.strong h2{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h2,.strong.contrast h2{color:hsla(0,0%,100%,.9)}h3{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.06rem;font-size:22px;line-height:8rem;padding-top:2.075rem;padding-bottom:5.925rem}.contrast h3{color:hsla(0,0%,100%,.7)}@media only screen and (min-width:1012px){h3{font-size:26px;line-height:10rem;padding-top:2.725rem;padding-bottom:7.275rem}}.compact h3{margin:2rem 0 -7rem;font-family:Andada,serif;font-weight:400;letter-spacing:.06rem;font-size:22px;line-height:8rem;padding-top:2.075rem;padding-bottom:5.925rem}.strong h3{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h3,.strong.contrast h3{color:hsla(0,0%,100%,.9)}h4{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.04rem;font-size:20px;line-height:8rem;padding-top:2.25rem;padding-bottom:5.75rem}.contrast h4{color:hsla(0,0%,100%,.7)}@media only screen and (min-width:1012px){h4{font-size:24px;line-height:10rem;padding-top:2.9rem;padding-bottom:7.1rem}}.compact h4{margin:2rem 0 -7rem;font-family:Andada,serif;font-weight:400;letter-spacing:.04rem;font-size:20px;line-height:8rem;padding-top:2.25rem;padding-bottom:5.75rem}.strong h4{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h4,.strong.contrast h4{color:hsla(0,0%,100%,.9)}h5{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.02rem;font-size:18px;line-height:7rem;padding-top:1.925rem;padding-bottom:5.075rem}.contrast h5{color:hsla(0,0%,100%,.7)}@media only screen and (min-width:1012px){h5{font-size:22px;line-height:9rem;padding-top:2.575rem;padding-bottom:6.425rem}}.compact h5{margin:2rem 0 -6rem;font-family:Andada,serif;font-weight:400;letter-spacing:.02rem;font-size:18px;line-height:7rem;padding-top:1.925rem;padding-bottom:5.075rem}.strong h5{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h5,.strong.contrast h5{color:hsla(0,0%,100%,.9)}h6{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.01rem;font-size:16px;line-height:7rem;padding-top:2.1rem;padding-bottom:4.9rem}.contrast h6{color:hsla(0,0%,100%,.7)}@media only screen and (min-width:1012px){h6{font-size:20px;line-height:9rem;padding-top:2.75rem;padding-bottom:6.25rem}}.compact h6{margin:2rem 0 -6rem;font-family:Andada,serif;font-weight:400;letter-spacing:.01rem;font-size:16px;line-height:7rem;padding-top:2.1rem;padding-bottom:4.9rem}.strong h6{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h6,.strong.contrast h6{color:hsla(0,0%,100%,.9)}dd,dt,input,li,olela-narrative,p,textarea{display:block;margin:0;color:#333;font-family:Roboto Slab,serif;font-weight:300;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}@media only screen and (min-width:1012px){dd,dt,input,li,olela-narrative,p,textarea{font-size:20px;line-height:9rem;padding-top:2.7rem;padding-bottom:6.3rem}}.contrast dd,.contrast dt,.contrast input,.contrast li,.contrast olela-narrative,.contrast p,.contrast textarea{color:#fff}.compact dd,.compact dt,.compact input,.compact li,.compact olela-narrative,.compact p,.compact textarea{font-family:Roboto Slab,serif;font-weight:300;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}.strong dd,.strong dt,.strong input,.strong li,.strong olela-narrative,.strong p,.strong textarea{font-weight:500}blockquote{margin:0;padding:0 0 4rem}blockquote p,olela-narrative{font-weight:500;color:rgba(51,51,51,.5)}.contrast blockquote p,.contrast olela-narrative{color:hsla(0,0%,100%,.5)}@media only screen and (min-width:1012px){blockquote{position:relative}blockquote:before{content:\"\\201C\";font-family:Roboto Slab,serif;font-weight:700;letter-spacing:-.003rem;font-size:16px;font-size:48rem!important;margin:0;padding:0;display:block;color:rgba(51,51,51,.05);position:absolute;left:-29rem;top:calc(50% - 25rem)}}@media only screen and (min-width:1012px) and (min-width:1012px){blockquote:before{font-size:20px}}@media only screen and (min-width:1012px){.contrast blockquote:before{color:hsla(0,0%,100%,.05)}}button,input[type=button],input[type=submit]{margin:0;color:rgba(51,51,51,.95);font-family:Roboto Slab,serif;font-weight:700;letter-spacing:-.003rem;font-size:16px}@media only screen and (min-width:1012px){button,input[type=button],input[type=submit]{font-size:20px}}.contrast button,.contrast input[type=button],.contrast input[type=submit]{color:hsla(0,0%,100%,.95)}a:link,a:visited{color:rgba(159,43,216,.9)}a:active,a:hover{color:#9f2bd8}h1 a:link,h1 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h1 a:active,h1 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}h2 a:link,h2 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h2 a:active,h2 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}h3 a:link,h3 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h3 a:active,h3 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}h4 a:link,h4 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h4 a:active,h4 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}h5 a:link,h5 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h5 a:active,h5 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}h6 a:link,h6 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h6 a:active,h6 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}.contrast a:link,.contrast a:visited{color:hsla(0,0%,100%,.9)}.contrast a:active,.contrast a:hover{color:#fff}h1 .contrast a:link,h1 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h1 .contrast a:active,h1 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}h2 .contrast a:link,h2 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h2 .contrast a:active,h2 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}h3 .contrast a:link,h3 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h3 .contrast a:active,h3 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}h4 .contrast a:link,h4 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h4 .contrast a:active,h4 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}h5 .contrast a:link,h5 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h5 .contrast a:active,h5 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}h6 .contrast a:link,h6 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h6 .contrast a:active,h6 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}ol,ul{list-style-type:none;padding-left:6rem}@media only screen and (min-width:800px) and (max-width:1011px){ol,ul{padding-left:0}}@media only screen and (min-width:1012px){ol,ul{padding-left:0}}.compact ol,.compact ul{line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}.compact ol li,.compact ol ol,.compact ol ul,.compact ul li,.compact ul ol,.compact ul ul{padding-top:0;padding-bottom:0}ol ol,ol ul,ul ol,ul ul{padding-left:6rem}@media only screen and (min-width:1012px){ol ol,ol ul,ul ol,ul ul{padding-left:8rem}.compact ol ol,.compact ol ul,.compact ul ol,.compact ul ul{padding-left:6rem}}li:before{display:inline-block;text-align:right;vertical-align:top;height:1rem;width:7rem}ul li:before{content:\"\\21E8\";font-family:Roboto Slab,serif;font-weight:400;letter-spacing:-.01rem;font-size:20px;opacity:.7;margin-right:1rem;margin-left:-8rem}@media only screen and (min-width:1012px){ul li:before{font-size:24px;opacity:.6;margin-right:3rem;margin-left:-10rem}}.compact ul li:before{font-family:Roboto Slab,serif;font-weight:400;letter-spacing:-.01rem;font-size:20px}@media only screen and (min-width:1012px){.compact ul li:before{opacity:.7;margin-right:1rem;margin-left:-8rem}}ol li:before{font-family:Andada,serif;font-weight:400;letter-spacing:-.01rem;font-size:12px;opacity:.9;margin-right:4rem;margin-left:-11rem}@media only screen and (min-width:1012px){ol li:before{font-size:14px;opacity:.8;margin-right:6rem;margin-left:-13rem}}.compact ol li:before{font-family:Andada,serif;font-weight:400;letter-spacing:-.01rem;font-size:12px}@media only screen and (min-width:1012px){.compact ol li:before{opacity:.9;margin-right:4rem;margin-left:-11rem}}ol li{counter-increment:a}ol li:before{content:counter(a) \".\";-webkit-font-feature-settings:\"lnum\",\"tnum\";font-feature-settings:\"lnum\",\"tnum\"}ol li ul li:before{content:\"\"}ol li ul li ol li{counter-increment:b}ol li ul li ol li:before{content:counter(b) \".\"}ol li ol li{counter-increment:c}ol li ol li:before{content:counter(a) \".\" counter(c) \".\"}ol li ol li ul li:before{content:\"\"}ol li ol li ol li{counter-increment:d}ol li ol li ol li:before{content:counter(a) \".\" counter(c) \".\" counter(d) \".\"}hr{border:0;background:transparent;color:rgba(51,51,51,.3);padding:7rem 0}.contrast hr{color:hsla(0,0%,100%,.3)}hr:after{content:\"~ ~ ~\";display:block;text-align:center;font-family:Roboto Slab,serif;font-weight:700;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}@media only screen and (min-width:1012px){hr:after{font-size:20px;line-height:9rem;padding-top:2.7rem;padding-bottom:6.3rem}}@media only screen and (min-width:1012px){hr{padding:9rem 0}}h2._3WG7FT2p-r3leAEzff9HXT{margin-left:6rem}@media only screen and (min-width:800px) and (max-width:1011px){h2._3WG7FT2p-r3leAEzff9HXT{margin-left:0}}@media only screen and (min-width:1012px){h2._3WG7FT2p-r3leAEzff9HXT{margin-left:0}}h2._1aLYvw-gr-NQ3DW7lKMPDb{margin-bottom:-6rem}@media only screen and (min-width:800px) and (max-width:1011px){h2._1aLYvw-gr-NQ3DW7lKMPDb{margin-bottom:-8rem}}@media only screen and (min-width:1012px){h2._1aLYvw-gr-NQ3DW7lKMPDb{margin-bottom:-8rem}}", ""]);

// exports
exports.locals = {
	"bottom": "_1__IRxq_cGDawbSTh7j7BD",
	"logo": "_du84Cr6CfRHAHgiIeT25",
	"footer": "_2tbECA-2MxsYfYyGb0vALe",
	"header": "_3di8mX8AHZz-tAvDaFGRX0",
	"main": "_17ub8YhwvdHqt3FvWtSVRd",
	"all": "PcDKGrJm6xcCP7nPHm-qL",
	"sideMenu": "_31ZFCVKzHy0seoA4ydYPMq",
	"visible": "_3xgsOcgq4SrlL6hzyNNl6T",
	"closed": "_1iZMjmpuhvj3QpYrDgcVlC",
	"indexTitle": "_3WG7FT2p-r3leAEzff9HXT",
	"categoryTitle": "_1aLYvw-gr-NQ3DW7lKMPDb"
};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a923c54dca55ec45e1914f1e11f92d0e.jpg";

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
var Crumbs_1 = __webpack_require__(72);
var TagList_1 = __webpack_require__(73);
function DefaultLayout(_a) {
    var website = _a.website,
        page = _a.page;
    var Body = page.body;
    var index = website.getPageOfUrl('/');
    return React.createElement("div", null, React.createElement("header", null, React.createElement("nav", null, React.createElement("ul", null, website.menu.map(function (entry, key) {
        return React.createElement("li", { key: key }, React.createElement(react_router_dom_1.Link, { to: entry.url }, entry.short));
    })))), React.createElement("main", null, React.createElement("h1", null, React.createElement(react_router_dom_1.Link, { to: page.url }, page.title)), React.createElement(Crumbs_1.default, { website: website, page: page }), React.createElement(TagList_1.default, { website: website, page: page }), React.createElement(Body, { website: website, page: page })), React.createElement("footer", null, React.createElement("ul", null, website.menu.map(function (entry, key) {
        return React.createElement("li", { key: key }, React.createElement(react_router_dom_1.Link, { to: entry.url }, entry.title));
    })), React.createElement("p", null, React.createElement(react_router_dom_1.Link, { to: index.url }, index.title), " | ", React.createElement(react_router_dom_1.Link, { to: "/sitemap" }, "Site Map"))));
}
exports.DefaultLayout = DefaultLayout;
exports.default = DefaultLayout;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./CategoryList.tsx": 199,
	"./Crumbs.tsx": 72,
	"./Feed.tsx": 200,
	"./TableOfContents.tsx": 74,
	"./TagList.tsx": 73
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 198;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
function CategoryList(_a) {
    var website = _a.website,
        page = _a.page;
    if (page.categories.length == 0) {
        return null;
    }
    return React.createElement("ul", null, page.categories.map(function (title) {
        return website.getCategoryOfTitle(title);
    }).map(function (_a, key) {
        var title = _a.title,
            url = _a.url;
        return React.createElement("li", { key: key }, React.createElement(react_router_dom_1.Link, { to: url }, title));
    }));
}
exports.CategoryList = CategoryList;
exports.default = CategoryList;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Tile_1 = __webpack_require__(201);
var TableOfContents_1 = __webpack_require__(74);
;
function Feed(_a) {
    var website = _a.website,
        page = _a.page,
        feed = _a.feed,
        _b = _a.respectLimit,
        respectLimit = _b === void 0 ? false : _b,
        props = __rest(_a, ["website", "page", "feed", "respectLimit"]);
    var pages = feed.filter(function (page) {
        return page.feed;
    });
    if (respectLimit) {
        return React.createElement(TableOfContents_1.Branch, __assign({ pages: pages, shallow: true }, props));
    }
    return React.createElement("div", null, pages.sort(function (a, b) {
        return b.compareTo(a);
    }).map(function (page) {
        return React.createElement(Tile_1.default, { key: page.url, page: page, website: website });
    }));
}
exports.Feed = Feed;
exports.default = Feed;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(1);
var withStyles_1 = __webpack_require__(6);
var Tags_1 = __webpack_require__(71);
var Button_1 = __webpack_require__(23);
var s = __webpack_require__(202);
function Tile(_a) {
    var website = _a.website,
        page = _a.page;
    var Body = page.body;
    return React.createElement("article", null, React.createElement("h1", null, React.createElement(react_router_dom_1.Link, { to: page.url }, page.title)), React.createElement("div", { className: s.tags }, React.createElement(Tags_1.default, { website: website, page: page })), React.createElement(Body, { website: website, page: page, respectLimit: true }), React.createElement("div", { className: s.more }, React.createElement(Button_1.default, { url: page.url, variant: 'raised', color: 'purple' }, "Read More")));
}
exports.Tile = Tile;
exports.default = withStyles_1.default(s)(Tile);

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(203);
    var insertCss = __webpack_require__(8);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Tile.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Tile.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, ".izruApnDkLLIscb3F4Hqi{display:none}@media only screen and (min-width:568px) and (max-width:799px){.izruApnDkLLIscb3F4Hqi{display:block}}@media only screen and (min-width:800px) and (max-width:1011px){.izruApnDkLLIscb3F4Hqi{display:block}}@media only screen and (min-width:1012px){.izruApnDkLLIscb3F4Hqi{display:block}}._30KjvNmLpdOJMkyYNU2Ajj{padding:7rem 0 12rem;text-align:center}@media only screen and (min-width:1012px){._30KjvNmLpdOJMkyYNU2Ajj{padding:9rem 0 16rem}}@media only screen and (min-width:800px) and (max-width:1011px){._30KjvNmLpdOJMkyYNU2Ajj{text-align:left}}@media only screen and (min-width:1012px){._30KjvNmLpdOJMkyYNU2Ajj{text-align:left}}._30KjvNmLpdOJMkyYNU2Ajj a{padding:0 13rem}@media only screen and (min-width:800px) and (max-width:1011px){._30KjvNmLpdOJMkyYNU2Ajj a{padding:0 7rem}}@media only screen and (min-width:1012px){._30KjvNmLpdOJMkyYNU2Ajj a{padding:0 9rem}}", ""]);

// exports
exports.locals = {
	"tags": "izruApnDkLLIscb3F4Hqi",
	"more": "_30KjvNmLpdOJMkyYNU2Ajj"
};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var pages_1 = __webpack_require__(76);
var categories_1 = __webpack_require__(77);
var website = new models_1.Website();
pages_1.default.forEach(function (page) {
    return website.addPage(page);
});
var tagPage = website.getPageOfUrl('/tag', 'all tags');
function urlFromTitle(title) {
    return "/tags/" + title.toLowerCase().replace(/ /g, '-');
}
var tags = pages_1.default.concat(categories_1.default).map(function (page) {
    return page.tags;
}).reduce(function (a, b) {
    return a.concat(b);
}).filter(function (tag, index, tags) {
    return tags.indexOf(tag) == index;
}).map(function (title) {
    return new models_1.Tag(title, urlFromTitle(title), tagPage.layout, tagPage.body);
});
exports.default = tags;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var config = __webpack_require__(75);
function checkIsArray(value, name) {
    if (!(value instanceof Array)) {
        throw new Error(name + " must be an array; got " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
    }
    return value;
}
function checkIsString(value, name) {
    if (typeof value != 'string') {
        throw new Error(name + " must be a string; got " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
    }
    return value;
}
checkIsArray(config.menu, 'config.menu');
var isLocalUrl = function isLocalUrl(url) {
    return url.charAt(0) == '/' && url.charAt(1) != '/';
};
function warnIfNotAPageOrCategory(url, requiredBy) {
    /**
      if (isLocalUrl(url) && website.pages[url] == undefined && website.categories[url] == undefined) {
        console.warn(`page of url \'${url}\' required by ${requiredBy} is not defined`);
      }
    **/
    return url;
}
var menu = config.menu.map(function (cfg, i) {
    return new models_1.MenuEntry(checkIsString(cfg.title, "menu[" + i + "].title"), checkIsString(cfg.short, "menu[" + i + "].short"), warnIfNotAPageOrCategory(checkIsString(cfg.url, "menu[" + i + "].url"), "menu entry '" + cfg.title + "'"), cfg.icon && checkIsString(cfg.icon, "menu[" + i + "].icon"));
});
exports.default = menu;

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map