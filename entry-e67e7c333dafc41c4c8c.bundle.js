(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-router-dom"), require("react-dom/server"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define([, , , ], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-router-dom"), require("react-dom/server"), require("react-dom")) : factory(root["React"], root["ReactRouterDOM"], root["ReactDOMServer"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_81__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var requireDirectory_1 = __webpack_require__(32);
var models_1 = __webpack_require__(9);
var Context = __webpack_require__(33);
var includes = requireDirectory_1.default(Context.INCLUDES).map(function (module) {
    var name = module.name.replace(/^\.\//, '').replace(/\.tsx$/, '');
    return new models_1.Include(name, module.exports.default);
});
exports.default = includes;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
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
/* 4 */
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
        return React.createElement("div", { className: 'content' }, children);
    }
    var output = [];
    limitContent(children, limit, props, output);
    return React.createElement("div", { className: 'content' }, output);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(121);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(126);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(127);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(131);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(155);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(25);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(163);

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
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


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


var _stringify = __webpack_require__(169);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(171);

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
var Page_1 = __webpack_require__(31);
exports.Page = Page_1.default;
var Collection_1 = __webpack_require__(94);
exports.Collection = Collection_1.default;
var Category_1 = __webpack_require__(55);
exports.Category = Category_1.default;
var Tag_1 = __webpack_require__(56);
exports.Tag = Tag_1.default;
var Layout_1 = __webpack_require__(95);
exports.Layout = Layout_1.default;
var Include_1 = __webpack_require__(96);
exports.Include = Include_1.default;
var MenuEntry_1 = __webpack_require__(97);
exports.MenuEntry = MenuEntry_1.default;
var Website_1 = __webpack_require__(98);
exports.Website = Website_1.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(36)('wks');
var uid = __webpack_require__(26);
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
var IE8_DOM_DEFINE = __webpack_require__(61);
var toPrimitive = __webpack_require__(37);
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
var core = __webpack_require__(6);
var ctx = __webpack_require__(60);
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
var createDesc = __webpack_require__(27);
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
var IObject = __webpack_require__(137);
var defined = __webpack_require__(34);
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
var react_router_dom_1 = __webpack_require__(2);
var withStyles_1 = __webpack_require__(5);
var s = __webpack_require__(167);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var withStyles_1 = __webpack_require__(5);
var s = __webpack_require__(179);
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
/* 25 */
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
  module.exports = __webpack_require__(87)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(89)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
_PARAMORPH: __webpack_require__(99),
CATEGORIES: __webpack_require__(100),
PAGES: __webpack_require__(105),
POSTS: __webpack_require__(111),
ROOT: __webpack_require__(118),
LAYOUTS: __webpack_require__(119),
INCLUDES: __webpack_require__(205)};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(36)('keys');
var uid = __webpack_require__(26);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(134)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(64)(String, 'String', function (iterated) {
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
/* 39 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(17);
var dPs = __webpack_require__(136);
var enumBugKeys = __webpack_require__(44);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(62)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(141).appendChild(iframe);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(66);
var enumBugKeys = __webpack_require__(44);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(40);
var wksExt = __webpack_require__(47);
var defineProperty = __webpack_require__(13).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var withStyles_1 = __webpack_require__(5);
var Icon_1 = __webpack_require__(24);
var s = __webpack_require__(212);
function Ingredient(_a) {
    var title = _a.title,
        quantity = _a.quantity;
    return React.createElement("li", null, title, quantity ? React.createElement("span", { className: s.quantity }, " (" + quantity + ")") : null);
}
exports.Ingredient = Ingredient;
function Method(_a) {
    var children = _a.children;
    return React.createElement("p", null, children);
}
exports.Method = Method;
function Recipe(_a) {
    var title = _a.title,
        photo = _a.photo,
        altText = _a.altText,
        time = _a.time,
        level = _a.level,
        mealFor = _a.mealFor,
        children = _a.children;
    var childs = [].concat(children);
    var ingredients = childs.filter(function (c) {
        return c.type === Ingredient;
    });
    var methods = childs.filter(function (c) {
        return c.type === Method;
    });
    return React.createElement("div", { className: s.recipe + " contrast" }, React.createElement("div", { className: s.header }, React.createElement("h2", null, title), React.createElement("ul", null, React.createElement("li", { key: '1', title: 'posiłek dla' }, React.createElement(Icon_1.default, { name: 'child_care' }), mealFor), React.createElement("li", { key: '2', title: 'poziom trudności' }, React.createElement(Icon_1.default, { name: 'whatshot' }), level), React.createElement("li", { key: '3', title: 'czas przygotowania' }, React.createElement(Icon_1.default, { name: 'access_time' }), time))), React.createElement("img", { src: photo, alt: altText }), React.createElement("div", { className: s.details }, React.createElement("div", { className: s.ingredients }, React.createElement("h3", null, "Sk\u0142adniki"), React.createElement("div", { className: 'compact' }, React.createElement("ol", null, ingredients))), React.createElement("div", { className: s.method }, React.createElement("h3", null, "Spos\xF3b Przygotowania"), methods)));
}
exports.Recipe = Recipe;
exports.default = withStyles_1.default(s)(Recipe);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var requireDirectory_1 = __webpack_require__(32);
var layouts_1 = __webpack_require__(57);
var Context = __webpack_require__(33);
var config = __webpack_require__(76);
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
    // replace _ with non-breaking spaces
    title = title.replace(/_/g, String.fromCharCode(160));
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
/* 52 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),
/* 53 */
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



var emptyFunction = __webpack_require__(28);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var server_1 = __webpack_require__(52);
var react_router_dom_1 = __webpack_require__(2);
var utils_1 = __webpack_require__(93);
var models_1 = __webpack_require__(9);
var layouts_1 = __webpack_require__(57);
var includes_1 = __webpack_require__(1);
var collections_1 = __webpack_require__(51);
var pages_1 = __webpack_require__(77);
var categories_1 = __webpack_require__(78);
var tags_1 = __webpack_require__(216);
var menu_1 = __webpack_require__(217);
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
var Page_1 = __webpack_require__(31);
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
/* 56 */
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
var Page_1 = __webpack_require__(31);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var requireDirectory_1 = __webpack_require__(32);
var models_1 = __webpack_require__(9);
var Context = __webpack_require__(33);
var layouts = requireDirectory_1.default(Context.LAYOUTS).map(function (module) {
    var name = module.name.replace(/^\.\//, '').replace(/\.tsx$/, '');
    return new models_1.Layout(name, module.exports.default);
});
exports.default = layouts;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(34);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(58);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(125);
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(62)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var document = __webpack_require__(11).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(132);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(145);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(40);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(65);
var hide = __webpack_require__(16);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(135);
var setToStringTag = __webpack_require__(45);
var getPrototypeOf = __webpack_require__(59);
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(138)(false);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');

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
/* 67 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(66);
var hiddenKeys = __webpack_require__(44).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(49);
var createDesc = __webpack_require__(27);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(37);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(61);
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(43);
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var withStyles_1 = __webpack_require__(5);
var s = __webpack_require__(181);
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var withStyles_1 = __webpack_require__(5);
var Button_1 = __webpack_require__(23);
var s = __webpack_require__(189);
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(2);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(2);
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(2);
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
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var collections_1 = __webpack_require__(51);
var pages = collections_1.default.reduce(function (p, c) {
    return p.concat(c.pages);
}, []).filter(function (page) {
    return !(page instanceof models_1.Category);
});
exports.default = pages;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var collections_1 = __webpack_require__(51);
var categories = collections_1.default.reduce(function (p, c) {
    return p.concat(c.pages);
}, []).filter(function (page) {
    return page instanceof models_1.Category;
});
exports.default = categories;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);


/***/ }),
/* 80 */
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
var react_dom_1 = __webpack_require__(81);
var server_1 = __webpack_require__(52);
var react_router_dom_1 = __webpack_require__(2);
var react_hot_loader_1 = __webpack_require__(82);
var PropTypes = __webpack_require__(25);
var Root_1 = __webpack_require__(90);
var IsomorphicStyleContext_1 = __webpack_require__(91);
var routes_1 = __webpack_require__(92);
var data_1 = __webpack_require__(54);
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
    var title = page.title + " | " + locals.title;
    var bundles = locals.scripts.map(function (name) {
        return "/" + locals.assets[name];
    });
    var root = react_1.createElement(Root_1.default, Object.assign({ css: __spread(css) }, locals, page, { title: title, bundles: bundles }));
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
/* 81 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_81__;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable global-require */



if (true) {
  module.exports = __webpack_require__(84);
} else {
  module.exports = require('./index.dev');
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.AppContainer = __webpack_require__(85);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable global-require */



if (true) {
  module.exports = __webpack_require__(86);
} else {
  module.exports = require('./AppContainer.dev');
}

/***/ }),
/* 86 */
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



var emptyFunction = __webpack_require__(28);
var invariant = __webpack_require__(29);
var warning = __webpack_require__(53);

var ReactPropTypesSecret = __webpack_require__(30);
var checkPropTypes = __webpack_require__(88);

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
/* 88 */
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
  var invariant = __webpack_require__(29);
  var warning = __webpack_require__(53);
  var ReactPropTypesSecret = __webpack_require__(30);
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
/* 89 */
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



var emptyFunction = __webpack_require__(28);
var invariant = __webpack_require__(29);
var ReactPropTypesSecret = __webpack_require__(30);

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
/* 90 */
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
        bundles = _a.bundles,
        externalScripts = _a.externalScripts,
        externalStylesheets = _a.externalStylesheets;
    return React.createElement("html", null, React.createElement("head", null, React.createElement("title", null, title), React.createElement("meta", { name: 'path', content: path }), React.createElement("meta", { name: 'keywords', content: tags.join(', ') }), React.createElement("meta", { name: 'description', content: description }), React.createElement("meta", { name: 'viewport', content: 'width=device-width; initial-scale=1.0' }), React.createElement("style", { type: 'text/css' }, css.join(''))), React.createElement("body", null, React.createElement("div", { id: 'root' }, "%%%BODY%%%"), externalScripts.map(function (src) {
        return React.createElement("script", { type: 'text/javascript', src: src, key: src });
    }), bundles.map(function (src) {
        return React.createElement("script", { type: 'text/javascript', src: src, key: src });
    }), externalStylesheets.map(function (src) {
        return React.createElement("link", { type: 'text/css', rel: 'stylesheet', href: src, key: src });
    })));
};

/***/ }),
/* 91 */
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
var PropTypes = __webpack_require__(25);
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(2);
var data_1 = __webpack_require__(54);
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
/* 93 */
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
/* 94 */
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
/* 95 */
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
/* 96 */
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
/* 97 */
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Category_1 = __webpack_require__(55);
var Tag_1 = __webpack_require__(56);
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
    Website.prototype.menuContains = function (page) {
        return -1 !== this.menu.map(function (entry) {
            return entry.url;
        }).indexOf(page.url);
    };
    Website.prototype.getMenuEntry = function (page, requiredBy) {
        var found = this.menu.filter(function (entry) {
            return entry.url === page.url;
        });
        if (found.length === 0) {
            throw new Error("couldn't find menu entry for url '" + page.url + "'" + (requiredBy ? ' required by ' + requiredBy : ''));
        }
        return found[0];
    };
    return Website;
}();
exports.default = Website;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sztuka-dla-sztuki.markdown": 101,
	"./sztuka-gotowania.markdown": 102,
	"./sztuka-makijazu.markdown": 103,
	"./sztuka-ubioru.markdown": 104
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
webpackContext.id = 100;

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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 104 */
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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404.markdown": 106,
	"./index.markdown": 107,
	"./kim-jest-olela.markdown": 108,
	"./sitemap.markdown": 109,
	"./tag.markdown": 110
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
webpackContext.id = 105;

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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6213390/ello-optimized-75547475.jpg', alt: 'Zdj\u0119cie przedstawia portret m\u0142odej kobiety o szarych w\u0142osach, w niebieskiej czapce, kolorowej chustce na szyi, kolczykach, na niebieskim tle. Z lewej strony zdj\u0119cia umieszczony jest logotyp.' })
    ),
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
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6213399/ello-optimized-c8bf4b66.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105, u\u015Bmiechni\u0119t\u0105 kobiet\u0119 o szarych w\u0142osach, na niebieskim tle. Kobieta wykonuje gest trzymania r\u0119k\u0105 niebieskiej czapki, nosi kolorow\u0105 chustk\u0119 na szyi i kolczyki.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6213404/ello-optimized-adcc0c71.jpg', alt: 'Zdj\u0119cie podzielone jest na dwie cz\u0119\u015Bci, cz\u0119\u015B\u0107 z lewej strony jest zbli\u017Ceniem na kobiecy kolczyk w kszta\u0142cie twarzy. Z prawej strony widzimy po\u0142ow\u0119 twarzy m\u0142odej kobiety z siwymi w\u0142osami, kolorow\u0105 chust\u0105 i kolczykiem w kszta\u0142cie twarzy.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Kim jest Olela?", "date": "2017-09-08T17:17:00.000Z", "permalink": "/kim-jest-olela", "tags": ["olela", "artysta", "blog", "sztuka", "uniwersalna"] };
var body = exports.body = "<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6213390/ello-optimized-75547475.jpg\" alt=\"Zdjęcie przedstawia portret młodej kobiety o szarych włosach, w niebieskiej czapce, kolorowej chustce na szyi, kolczykach, na niebieskim tle. Z lewej strony zdjęcia umieszczony jest logotyp.\" /></p>\n<p>Cześć, jestem Olela, witaj na moim blogu. Na co dzień pracuję w szeroko pojętym obszarze sztuki - maluję obrazy, fotografuję, jestem grafikiem komputerowym, tancerką, nauczycielką tańca i choreografką. Z zamiłowania również gotuję. Z racji tak mnogich zainteresowań, zwykłam mówić o sobie Artystka Uniwersalna. Wierzę w zanikanie granic i wzajemne przenikanie się dyscyplin. Czy mieszam składniki zupy w garnku, czy dodaję do ultramaryny odrobinę karminu, czy nakładam bazę pod makijaż – tworzę sztukę.</p>\n<h2>Po co to komu?</h2>\n<p>Misją bloga <a href=\"http://sztukauniwersalna.pl\">sztukauniwersalna.pl</a> jest dostrzeżenie i zatarcie granicy pomiędzy sztuką a codziennością, zintegrowanie świata masowego przekazu, którym jesteśmy otoczeni z każdej strony, z kulturą. Postaram się pokazać, nieoczywiste na pierwszy rzut oka, konotacje pomiędzy czynnościami określanymi jako ‘przyziemne’, a kreacją artystyczną. Oprócz tego wykażę wpływy poszczególnych tendencji artystycznych na różne dziedziny życia. Mam nadzieje, że znajdziesz tu dla siebie wiele inspiracji, które przełożą się na Twoje postrzeganie rzeczywistości.</p>\n<h2>Poznajmy się lepiej.</h2>\n<ul>\n<li>Jestem Magistrem Sztuk Pięknych. W 2015 r. obroniłam dyplom  na wydziale malarstwa krakowskiej ASP. Dyplomem był solowy spektakl pt.: ‘Pięć Pór Roku’ zrealizowany w jednym z krakowskich teatrów. W trakcie półgodzinnej etiudy starałam się wytańczyć wszystkie stany emocjonalne towarzyszące mi przez 5letnie studia artystyczne. Malowanie ruchem było cudownym doświadczeniem i spotkało się z pozytywnym odbiorem komisji i publiczności.</li>\n<li>Jak większość kobiet uwielbiam się malować i przebierać. Staram się dokładać do tych czynności teatralny pierwiastek. Wymyślam postać, opowiadam po cichu historie, ‘wchodzę w rolę’. Najbardziej inspirują mnie futurystyczne klimaty.</li>\n<li>Moim największym bzikiem są... buty i szminki. Uważam, że kolor na ustach czyni kobietę pewniejszą siebie. Ah, jak ja kocham te kolory! Blady róż na sportowo. Jagodowa do ramoneski. Czerwień jest raczej zarezerwowana dla klasycznych połączeń, dlatego rzadko jej używam. Zdecydowanie bardziej wolę elektryzujący eklektyzm.</li>\n<li>Kiedy robię zakupy w sklepie spożywczym zazwyczaj wącham owoce i warzywa. Zapach pozwala na wyobrażenie smaku. Czasami też subtelnie zanurzam dłoń w worku z ziarnami, jak zwykła robić to Amelia, bohaterka filmu o tym samym tytule.</li>\n<li>Dość sporo czasu w swoim życiu spędziłam w muzeach. Moja najdłuższa kontemplacja dzieła sztuki miała miejsce na wystawie Mark’a Rothko w Warszawie w 2013 r.  Byłam tak zafascynowana twórczością nowojorczyka (nadal jestem), że przed jednym obrazem spędziłam kilka godzin, a panowie ochroniarze dosłownie musieli wypraszać mnie z budynku, gdy przyszła godzina zamknięcia ekspozycji.</li>\n</ul>\n<p>Skoro już tyle o mnie wiesz… mam nadzieje, że zostaniesz tu na dłużej. Czytaj, oglądaj, komentuj, kontempluj. Możesz też polubić konto na <a href=\"https://www.facebook.com/sztukauniwersalna/\">fb</a> i <a href=\"https://www.instagram.com/sztuka_uniwersalna/\">insta</a>, żeby być na bieżąco. A jeśli chcesz się ze mną skontkować napisz na adres <a href=\"mailto:sztuka.uniwersalna@gmail.com\">sztuka.uniwersalna@gmail.com</a> – będzie mi bardzo miło!</p>\n<p>Pozdrawiam,\nOlela</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6213399/ello-optimized-c8bf4b66.jpg\" alt=\"Zdjęcie przedstawia młodą, uśmiechniętą kobietę o szarych włosach, na niebieskim tle. Kobieta wykonuje gest trzymania ręką niebieskiej czapki, nosi kolorową chustkę na szyi i kolczyki.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6213404/ello-optimized-adcc0c71.jpg\" alt=\"Zdjęcie podzielone jest na dwie części, część z lewej strony jest zbliżeniem na kobiecy kolczyk w kształcie twarzy. Z prawej strony widzimy połowę twarzy młodej kobiety z siwymi włosami, kolorową chustą i kolczykiem w kształcie twarzy.\" /></p>\n";
var raw = exports.raw = "\n![Zdjęcie przedstawia portret młodej kobiety o szarych włosach, w niebieskiej czapce, kolorowej chustce na szyi, kolczykach, na niebieskim tle. Z lewej strony zdjęcia umieszczony jest logotyp.](https://assets1.ello.co/uploads/asset/attachment/6213390/ello-optimized-75547475.jpg)\n\nCześć, jestem Olela, witaj na moim blogu. Na co dzień pracuję w szeroko pojętym obszarze sztuki - maluję obrazy, fotografuję, jestem grafikiem komputerowym, tancerką, nauczycielką tańca i choreografką. Z zamiłowania również gotuję. Z racji tak mnogich zainteresowań, zwykłam mówić o sobie Artystka Uniwersalna. Wierzę w zanikanie granic i wzajemne przenikanie się dyscyplin. Czy mieszam składniki zupy w garnku, czy dodaję do ultramaryny odrobinę karminu, czy nakładam bazę pod makijaż – tworzę sztukę.\n\n## Po co to komu?\n\nMisją bloga sztukauniwersalna.pl jest dostrzeżenie i zatarcie granicy pomiędzy sztuką a codziennością, zintegrowanie świata masowego przekazu, którym jesteśmy otoczeni z każdej strony, z kulturą. Postaram się pokazać, nieoczywiste na pierwszy rzut oka, konotacje pomiędzy czynnościami określanymi jako ‘przyziemne’, a kreacją artystyczną. Oprócz tego wykażę wpływy poszczególnych tendencji artystycznych na różne dziedziny życia. Mam nadzieje, że znajdziesz tu dla siebie wiele inspiracji, które przełożą się na Twoje postrzeganie rzeczywistości.\n\n## Poznajmy się lepiej.\n\n* Jestem Magistrem Sztuk Pięknych. W 2015 r. obroniłam dyplom  na wydziale malarstwa krakowskiej ASP. Dyplomem był solowy spektakl pt.: ‘Pięć Pór Roku’ zrealizowany w jednym z krakowskich teatrów. W trakcie półgodzinnej etiudy starałam się wytańczyć wszystkie stany emocjonalne towarzyszące mi przez 5letnie studia artystyczne. Malowanie ruchem było cudownym doświadczeniem i spotkało się z pozytywnym odbiorem komisji i publiczności.\n* Jak większość kobiet uwielbiam się malować i przebierać. Staram się dokładać do tych czynności teatralny pierwiastek. Wymyślam postać, opowiadam po cichu historie, ‘wchodzę w rolę’. Najbardziej inspirują mnie futurystyczne klimaty.\n* Moim największym bzikiem są… buty i szminki. Uważam, że kolor na ustach czyni kobietę pewniejszą siebie. Ah, jak ja kocham te kolory! Blady róż na sportowo. Jagodowa do ramoneski. Czerwień jest raczej zarezerwowana dla klasycznych połączeń, dlatego rzadko jej używam. Zdecydowanie bardziej wolę elektryzujący eklektyzm.\n* Kiedy robię zakupy w sklepie spożywczym zazwyczaj wącham owoce i warzywa. Zapach pozwala na wyobrażenie smaku. Czasami też subtelnie zanurzam dłoń w worku z ziarnami, jak zwykła robić to Amelia, bohaterka filmu o tym samym tytule.\n* Dość sporo czasu w swoim życiu spędziłam w muzeach. Moja najdłuższa kontemplacja dzieła sztuki miała miejsce na wystawie Mark’a Rothko w Warszawie w 2013 r.  Byłam tak zafascynowana twórczością nowojorczyka (nadal jestem), że przed jednym obrazem spędziłam kilka godzin, a panowie ochroniarze dosłownie musieli wypraszać mnie z budynku, gdy przyszła godzina zamknięcia ekspozycji.\n\nSkoro już tyle o mnie wiesz… mam nadzieje, że zostaniesz tu na dłużej. Czytaj, oglądaj, komentuj, kontempluj. Możesz też polubić konto na [fb](https://www.facebook.com/sztukauniwersalna/) i [insta](https://www.instagram.com/sztuka_uniwersalna/), żeby być na bieżąco. A jeśli chcesz się ze mną skontkować napisz na adres sztuka.uniwersalna@gmail.com – będzie mi bardzo miło!\n\nPozdrawiam,\nOlela\n\n![Zdjęcie przedstawia młodą, uśmiechniętą kobietę o szarych włosach, na niebieskim tle. Kobieta wykonuje gest trzymania ręką niebieskiej czapki, nosi kolorową chustkę na szyi i kolczyki.](https://assets0.ello.co/uploads/asset/attachment/6213399/ello-optimized-c8bf4b66.jpg)\n![Zdjęcie podzielone jest na dwie części, część z lewej strony jest zbliżeniem na kobiecy kolczyk w kształcie twarzy. Z prawej strony widzimy połowę twarzy młodej kobiety z siwymi włosami, kolorową chustą i kolczykiem w kształcie twarzy.](https://assets2.ello.co/uploads/asset/attachment/6213404/ello-optimized-adcc0c71.jpg)";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 110 */
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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2017-07-15-uniwersalno-sztuki.markdown": 112,
	"./2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla.markdown": 113,
	"./2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor.markdown": 114,
	"./2017-09-16-salatka-z-bialej-rzepy-i-rzodkiewki.markdown": 115,
	"./2017-09-17-smaki-jesieni-vol-dot-2-curry-z-pomidorow-cukinii-i-jablek.markdown": 116,
	"./2017-09-18-fuerteventura-impressions.markdown": 117
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
webpackContext.id = 111;

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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
        '~ Natalia Lach-Lachowicz (Natalia\xA0LL)'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Od pewnego czasu obserwuje zjawisko nagminnego pojawiania si\u0119 s\u0142\xF3w \u2018art\u2019, \u2018artist\u2019 w nazewnictwie zawodowym. Dzi\u015B ju\u017C nie jeste\u015B tylko makija\u017Cyst\u0105, jeste\u015B \u2018make up artist\u2019 - artyst\u0105 od makija\u017Cu lub makija\u017Cowym artyst\u0105, chcia\u0142oby si\u0119 przet\u0142umaczy\u0107, lub te\u017C jeste\u015B po prostu artyst\u0105 pracuj\u0105cym w technice \u2018makija\u017C\u2019. Dzi\u015B to nie fryzjerzy \u015Bcinaj\u0105 i farbuj\u0105 nam w\u0142osy lecz \u2018styli\u015Bci fryzur\u2019, arty\u015Bci od w\u0142os\xF3w, \u2018hair artists\u2019. Od niedawna tak\u017Ce Ci styli\u015Bci od mody przekwalifikowali swoje stanowiska na Fashion ART Directors (dos\u0142ownie ci, kt\xF3rzy wyznaczaj\u0105 artystyczny kierunek modzie). Sk\u0105d tyle tej sztuki, a raczej mody na sztuk\u0119, dlaczego dzi\u015B wszyscy nazywamy si\u0119 artystami i dlaczego jest to tak wa\u017Cne dla poczucia \u2018siebie\u2019 i swojej roli we wsp\xF3\u0142czesnym  spo\u0142ecze\u0144stwie?'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6230425/ello-optimized-928b9c87.jpg', alt: 'Zdj\u0119cie przedstawia papierowy kola\u017C, gdzie m\u0119\u017Cczyzna z g\u0142ow\u0105 wyci\u0119t\u0105 z chmur w garniturze podtrzymuje na r\u0119kach drugiego m\u0119\u017Cczyzn\u0119 w garniturze, kt\xF3ry nie ma g\u0142owy. Ca\u0142o\u015B\u0107 kompozycji na \u017C\xF3\u0142tym tle.' })
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
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6230423/ello-optimized-76fb5582.jpg', alt: 'Zdj\u0119cie przedstawia papierowy kola\u017C na zielonym tle, gdzie z prawego dolnego rogu r\u0119ka wykonuje gest w kierunku r\u0119ki kobiety w fioletowej sukience, kt\xF3ra zamiast g\u0142owy ma bukiet kwiat\xF3w.' })
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
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6230428/ello-optimized-f82621bd.jpg', alt: 'Zdj\u0119cie przedstawia papierowy kola\u017C na niebieskim tle przedstawiaj\u0105cy popiersie kobiety, gdzie kobieta wykonuje gest dotykania g\u0142owy. Kobieta zamiast twarzy ma krajobraz morza.' })
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
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6230421/ello-optimized-26292a74.jpg', alt: 'Zdj\u0119cie przedstawia papierowy kola\u017C na czerwonym tle, gdzie widnieje posta\u0107 id\u0105cej kobiety, kt\xF3rej tu\u0142\xF3w to rze\u017Aba. Kobieta ma czerwone usta, sp\xF3dnic\u0119 w czarno-bia\u0142e pionowe pasy i bia\u0142e kozaki.' })
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
var frontMatter = exports.frontMatter = { "title": "Uniwersalność Sztuki", "date": "2017-07-15T19:56:00.000Z", "permalink": "/2017-07-15-uniwersalnosc-sztuki", "categories": ["Sztuka dla Sztuki"], "tags": ["art", "artist", "sztuka", "dzieło", "artysta", "kreacja"], "limit": 3 };
var body = exports.body = "<blockquote>\n<p>Interesowało mnie utrwalanie wszystkich prostych czynności, bo są UNIWERSALNE. Każda z nich,\nkiedy się na niej skupimy, zatrzymamy na sekundę, staje się dziełem SZTUKI.</p>\n<p>~ Natalia Lach-Lachowicz (Natalia LL)</p>\n</blockquote>\n<p>Od pewnego czasu obserwuje zjawisko nagminnego pojawiania się słów ‘art’, ‘artist’ w nazewnictwie zawodowym. Dziś już nie jesteś tylko makijażystą, jesteś ‘make up artist’ - artystą od makijażu lub makijażowym artystą, chciałoby się przetłumaczyć, lub też jesteś po prostu artystą pracującym w technice ‘makijaż’. Dziś to nie fryzjerzy ścinają i farbują nam włosy lecz ‘styliści fryzur’, artyści od włosów, ‘hair artists’. Od niedawna także Ci styliści od mody przekwalifikowali swoje stanowiska na Fashion ART Directors (dosłownie ci, którzy wyznaczają artystyczny kierunek modzie). Skąd tyle tej sztuki, a raczej mody na sztukę, dlaczego dziś wszyscy nazywamy się artystami i dlaczego jest to tak ważne dla poczucia ‘siebie’ i swojej roli we współczesnym  społeczeństwie?</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6230425/ello-optimized-928b9c87.jpg\" alt=\"Zdjęcie przedstawia papierowy kolaż, gdzie mężczyzna z głową wyciętą z chmur w garniturze podtrzymuje na rękach drugiego mężczyznę w garniturze, który nie ma głowy. Całość kompozycji na żółtym tle.\" /></p>\n<h2>Artysta = Rzemieślnik ?</h2>\n<p>Zastanawiam się, czy w stosunku do artystycznej działalności wypada użyć słowa ‘zawód’. Kim jesteś z zawodu? - Jestem artystą. Czy to nie jest trochę tak, że zawód się wybiera, idąc np. na konkretny kierunek studiów, a brzemienia artysty poniekąd nie jesteśmy w stanie wybrać świadomie. Z drugiej strony wszystkich warsztatowych technik da się nauczyć i nie tylko Ci najzdolniejsi zarabiają na swojej pracy artystycznej. Zatem dobrze, mówmy o zawodzie, czyli o czynnościach, z których dana jednostka jest w stanie zarobić na chleb. Zawód artysty wymaga nie tylko talentu, ale przede wszystkim kreatywnego myślenia. Czy artyści to również rzemieślnicy? Ci drudzy wykonują wyuczony fach wręcz mechanicznie, podczas gdy Ci pierwsi znajdują czas na refleksje przy pracy i wprowadzanie do jej efektów coraz to nowych pomysłów (IDEI), często kończących się fiaskiem, niepowodzeniem, totalną klapą, a nawet spaleniem dzieła nigdyniedokończonego. Artyści błądzą. Kreują. Drą i krzyczą. Rzemieślnicy wykonują.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6230423/ello-optimized-76fb5582.jpg\" alt=\"Zdjęcie przedstawia papierowy kolaż na zielonym tle, gdzie z prawego dolnego rogu ręka wykonuje gest w kierunku ręki kobiety w fioletowej sukience, która zamiast głowy ma bukiet kwiatów.\" /></p>\n<h2>‘Młodzi Kreatywni’</h2>\n<p>Powiedzmy sobie szczerze, artyści od zawsze mieli ‘pod górkę’. Tworzyli dzieła zamawiane przez fundatorów dyskretnie przemycając swoje wizje lub też nie kryli się z wizjami stanowczo wykraczającymi ponad ramy epoki, co skutkowało niezrozumieniem i wykluczeniem ze społeczeństwa. Doceniani zazwyczaj po śmierci, okazywało się, że przychodzili na świat nie w swoim miejscu, nie w swoim czasie. Walczyli o swoje poglądy, ich często innowacyjne wizje kończyły zmieszane z błotem przez krytyków. Gdyby nie ten indywidualizm, parcie do przodu i często związana z tym ignorancja, nie mielibyśmy tych ‘wielkich’, wizjonerów,  którzy na zawsze odmienili postrzeganie danej dziedziny, często wykraczając poza jej granice.\nŻyjemy w XXI wieku, który nieubłagalnie pędzi i przyspiesza niczym ciuchcia w wierszu Tuwima. Nigdy nie zwalnia, więc i Ty nie zwalniaj. Byli już Zmęczeni Rzeczywistością, teraz przyszedł czas na Młodych Kreatywnych – absolwentów uczelni artystycznych, którzy wpisani w ramy wieku pędzą. Nie ograniczają się tylko do działań w dziedzinie, z której są (dumnymi) magistrami na papierze. Chcą robić kariere, chcą być nie tyle na czasie, co w czasie, poznawać nowe technologie, rozwijać możliwości. Kończą malarstwo i idą pracować do największych agencji kreatywnych, które (podobno) cenią młode, twórcze, otwarte umysły (o tym już w kolejnym poście).</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6230428/ello-optimized-f82621bd.jpg\" alt=\"Zdjęcie przedstawia papierowy kolaż na niebieskim tle przedstawiający popiersie kobiety, gdzie kobieta wykonuje gest dotykania głowy. Kobieta zamiast twarzy ma krajobraz morza.\" /></p>\n<h2>Pokolenie Self-Obsessed</h2>\n<p>‘-Wykonanie makijażu zajmuje mi jakieś 3 godziny. W trakcie malowania oczywiście nagrywam wszystko, żeby później zmontować to w spójny tutorial i wrzucić na YouTube. W czasie międzyczasu nagrywam krótkie story na żywo. Kiedy skończę utrwalam wszystko robiąc kilka selfie, no dobra może kilkanaście. Czas wyjść z domu. Przeglądam się  w lustrze kilka razy, sprawdzam fryzurę, wciągam brzuch, jeszcze kilka fotek. Wychodzę na siłownie, żeby tam powtórzyć rytuał, tyle że w innym lustrze. Żyję sobą i inni ludzie żyją mną, a  raczej marzeniem by być jak ja. Zaczynają mnie naśladować, stosować się do moich rad, zostają moimi fanami.’\nI gdyby to wszystko okazało się świadomą artystyczną kreacją, sztuką konceptualną, performansem, okej, to ma sens, coś uświadamia. A może rzeczywiście sztuka wyszła ze sztuki, przekroczyła samą siebie i jest w każdej najmniejszej czynności? Przecież pędzle do makijażu niczym nie różnią się od tych, którymi uprawiamy akwarele (nieśmiało przyznam, że nieraz wiewiórczy włos idealnie pomógł mi w blendowaniu załamania powieki...) A gdyby tak, w tej nieświadomości, dodać przedrostek -art/przyrostek -artist do mojego pseudonimu na Instagramie? Czy wtedy ludzie zaczną lubić mnie bardziej? W końcu sztuka to domena jednostek myślących…</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6230421/ello-optimized-26292a74.jpg\" alt=\"Zdjęcie przedstawia papierowy kolaż na czerwonym tle, gdzie widnieje postać idącej kobiety, której tułów to rzeźba. Kobieta ma czerwone usta, spódnicę w czarno-białe pionowe pasy i białe kozaki.\" /></p>\n<p><a href=\"http://SztukaUniwersalna.pl\">SztukaUniwersalna.pl</a> to portal w którym zacierają się granice. Opisuję i rejestruję Sztukę, która zajmuje mnie w danej chwili. Potraktuj to jako pamiętnik Młodej Kreatywnej, której każdy dzień to artystyczna kreacja. Miłej lektury. :)</p>\n";
var raw = exports.raw = "\n> Interesowało mnie utrwalanie wszystkich prostych czynności, bo są UNIWERSALNE. Każda z nich,\n> kiedy się na niej skupimy, zatrzymamy na sekundę, staje się dziełem SZTUKI.\n>\n> ~ Natalia Lach-Lachowicz (Natalia&nbsp;LL)\n\nOd pewnego czasu obserwuje zjawisko nagminnego pojawiania się słów ‘art’, ‘artist’ w nazewnictwie zawodowym. Dziś już nie jesteś tylko makijażystą, jesteś ‘make up artist’ - artystą od makijażu lub makijażowym artystą, chciałoby się przetłumaczyć, lub też jesteś po prostu artystą pracującym w technice ‘makijaż’. Dziś to nie fryzjerzy ścinają i farbują nam włosy lecz ‘styliści fryzur’, artyści od włosów, ‘hair artists’. Od niedawna także Ci styliści od mody przekwalifikowali swoje stanowiska na Fashion ART Directors (dosłownie ci, którzy wyznaczają artystyczny kierunek modzie). Skąd tyle tej sztuki, a raczej mody na sztukę, dlaczego dziś wszyscy nazywamy się artystami i dlaczego jest to tak ważne dla poczucia ‘siebie’ i swojej roli we współczesnym  społeczeństwie?\n\n![Zdjęcie przedstawia papierowy kolaż, gdzie mężczyzna z głową wyciętą z chmur w garniturze podtrzymuje na rękach drugiego mężczyznę w garniturze, który nie ma głowy. Całość kompozycji na żółtym tle.](https://assets1.ello.co/uploads/asset/attachment/6230425/ello-optimized-928b9c87.jpg)\n\n## Artysta = Rzemieślnik ?\nZastanawiam się, czy w stosunku do artystycznej działalności wypada użyć słowa ‘zawód’. Kim jesteś z zawodu? - Jestem artystą. Czy to nie jest trochę tak, że zawód się wybiera, idąc np. na konkretny kierunek studiów, a brzemienia artysty poniekąd nie jesteśmy w stanie wybrać świadomie. Z drugiej strony wszystkich warsztatowych technik da się nauczyć i nie tylko Ci najzdolniejsi zarabiają na swojej pracy artystycznej. Zatem dobrze, mówmy o zawodzie, czyli o czynnościach, z których dana jednostka jest w stanie zarobić na chleb. Zawód artysty wymaga nie tylko talentu, ale przede wszystkim kreatywnego myślenia. Czy artyści to również rzemieślnicy? Ci drudzy wykonują wyuczony fach wręcz mechanicznie, podczas gdy Ci pierwsi znajdują czas na refleksje przy pracy i wprowadzanie do jej efektów coraz to nowych pomysłów (IDEI), często kończących się fiaskiem, niepowodzeniem, totalną klapą, a nawet spaleniem dzieła nigdyniedokończonego. Artyści błądzą. Kreują. Drą i krzyczą. Rzemieślnicy wykonują.\n\n![Zdjęcie przedstawia papierowy kolaż na zielonym tle, gdzie z prawego dolnego rogu ręka wykonuje gest w kierunku ręki kobiety w fioletowej sukience, która zamiast głowy ma bukiet kwiatów.](https://assets0.ello.co/uploads/asset/attachment/6230423/ello-optimized-76fb5582.jpg)\n\n## ‘Młodzi Kreatywni’\nPowiedzmy sobie szczerze, artyści od zawsze mieli ‘pod górkę’. Tworzyli dzieła zamawiane przez fundatorów dyskretnie przemycając swoje wizje lub też nie kryli się z wizjami stanowczo wykraczającymi ponad ramy epoki, co skutkowało niezrozumieniem i wykluczeniem ze społeczeństwa. Doceniani zazwyczaj po śmierci, okazywało się, że przychodzili na świat nie w swoim miejscu, nie w swoim czasie. Walczyli o swoje poglądy, ich często innowacyjne wizje kończyły zmieszane z błotem przez krytyków. Gdyby nie ten indywidualizm, parcie do przodu i często związana z tym ignorancja, nie mielibyśmy tych ‘wielkich’, wizjonerów,  którzy na zawsze odmienili postrzeganie danej dziedziny, często wykraczając poza jej granice.\nŻyjemy w XXI wieku, który nieubłagalnie pędzi i przyspiesza niczym ciuchcia w wierszu Tuwima. Nigdy nie zwalnia, więc i Ty nie zwalniaj. Byli już Zmęczeni Rzeczywistością, teraz przyszedł czas na Młodych Kreatywnych – absolwentów uczelni artystycznych, którzy wpisani w ramy wieku pędzą. Nie ograniczają się tylko do działań w dziedzinie, z której są (dumnymi) magistrami na papierze. Chcą robić kariere, chcą być nie tyle na czasie, co w czasie, poznawać nowe technologie, rozwijać możliwości. Kończą malarstwo i idą pracować do największych agencji kreatywnych, które (podobno) cenią młode, twórcze, otwarte umysły (o tym już w kolejnym poście).\n\n![Zdjęcie przedstawia papierowy kolaż na niebieskim tle przedstawiający popiersie kobiety, gdzie kobieta wykonuje gest dotykania głowy. Kobieta zamiast twarzy ma krajobraz morza.](https://assets1.ello.co/uploads/asset/attachment/6230428/ello-optimized-f82621bd.jpg)\n\n## Pokolenie Self-Obsessed\n‘-Wykonanie makijażu zajmuje mi jakieś 3 godziny. W trakcie malowania oczywiście nagrywam wszystko, żeby później zmontować to w spójny tutorial i wrzucić na YouTube. W czasie międzyczasu nagrywam krótkie story na żywo. Kiedy skończę utrwalam wszystko robiąc kilka selfie, no dobra może kilkanaście. Czas wyjść z domu. Przeglądam się  w lustrze kilka razy, sprawdzam fryzurę, wciągam brzuch, jeszcze kilka fotek. Wychodzę na siłownie, żeby tam powtórzyć rytuał, tyle że w innym lustrze. Żyję sobą i inni ludzie żyją mną, a  raczej marzeniem by być jak ja. Zaczynają mnie naśladować, stosować się do moich rad, zostają moimi fanami.’\nI gdyby to wszystko okazało się świadomą artystyczną kreacją, sztuką konceptualną, performansem, okej, to ma sens, coś uświadamia. A może rzeczywiście sztuka wyszła ze sztuki, przekroczyła samą siebie i jest w każdej najmniejszej czynności? Przecież pędzle do makijażu niczym nie różnią się od tych, którymi uprawiamy akwarele (nieśmiało przyznam, że nieraz wiewiórczy włos idealnie pomógł mi w blendowaniu załamania powieki...) A gdyby tak, w tej nieświadomości, dodać przedrostek -art/przyrostek -artist do mojego pseudonimu na Instagramie? Czy wtedy ludzie zaczną lubić mnie bardziej? W końcu sztuka to domena jednostek myślących...\n\n![Zdjęcie przedstawia papierowy kolaż na czerwonym tle, gdzie widnieje postać idącej kobiety, której tułów to rzeźba. Kobieta ma czerwone usta, spódnicę w czarno-białe pionowe pasy i białe kozaki.](https://assets1.ello.co/uploads/asset/attachment/6230421/ello-optimized-26292a74.jpg)\n\nSztukaUniwersalna.pl to portal w którym zacierają się granice. Opisuję i rejestruję Sztukę, która zajmuje mnie w danej chwili. Potraktuj to jako pamiętnik Młodej Kreatywnej, której każdy dzień to artystyczna kreacja. Miłej lektury. :)\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 113 */
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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6229492/ello-optimized-56e3e021.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na usta kobiety, pomalowane na bia\u0142o z per\u0142ami przyczepionymi do dolnej wargi i twarzy kobiety.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6229495/ello-optimized-01fb3dca.jpg', alt: 'Zdj\u0119cie przedstawia usta kobiety, pomalowane na bia\u0142o z per\u0142ami przyczepionymi do dolnej wargi i twarzy kobiety.' })
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
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6216044/ello-optimized-c0bb333d.jpg', alt: 'Zdj\u0119cie przedstawia portret kobiety z per\u0142ami przyczepionymi do twarzy i ust. Kobieta patrzy w sw\xF3j lewy dolny r\xF3g, ma usta pomalowane na bia\u0142o.' })
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
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6216049/ello-optimized-5ee2d384.jpg', alt: 'Zdj\u0119cie przedstawia po\u0142ow\u0119 twarzy kobiety, do kt\xF3rej przyczepione s\u0105 per\u0142y, a powieka oka pomalowana jest na bia\u0142o.' })
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
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6202833/ello-optimized-7d07df99.jpg', alt: 'Czarno-bia\u0142e zdj\u0119cie przedstawia posta\u0107 odwr\xF3con\u0105 ty\u0142em w \u017Cakiecie ozdobionym per\u0142ami i sk\xF3rzanej sp\xF3dnicy zapinanej na zamek. Wida\u0107 lew\u0105 d\u0142o\u0144 postaci.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6202835/ello-optimized-9d462f06.jpg', alt: 'Czarno-bia\u0142e zdj\u0119cie przedstawia zbli\u017Cenie na \u017Cakietozdobiony per\u0142\u0105, zapinany na zamek b\u0142yskawiczny. Wida\u0107 kawa\u0142ek lewej d\u0142oni postaci.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6202836/ello-optimized-8db76be4.jpg', alt: 'Czarno-bia\u0142e zdj\u0119cie przedstawia zbli\u017Cenie na \u017Cakietozdobiony per\u0142\u0105, zapinany na zamek b\u0142yskawiczny.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6202837/ello-optimized-b2d459e4.jpg', alt: 'Czarno-bia\u0142e zdj\u0119cie przedstawia posta\u0107 kobiety od ty\u0142u. Kobieta ma w\u0142osy spi\u0119te w kok i podnosi r\u0119ce do g\xF3ry, jest ubrana w \u017Cakiet ozdobiony per\u0142ami.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6216182/ello-optimized-8951e881.jpg', alt: 'Czarno-bia\u0142e zdj\u0119cie przedstawia popiersie kobiety w rozpi\u0119tym \u017Cakiecie ozdobionym per\u0142ami, kobieta nosi sznury pere\u0142 na szyi.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'naszyjnik: Zara / sp\xF3dnica: Reserved / \u017Cakiet: Bik Bok x Olela'
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Wenus vs Chanel, czyli_Nowa Dziewczyna z_Perłą", "date": "2017-09-07T10:32:00.000Z", "permalink": "/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla", "categories": ["Sztuka Ubioru"], "tags": ["chanel", "perły", "wenus", "moda", "art", "kreacja", "dzieło", "artysta"] };
var body = exports.body = "<olela-narrative>\nJestem tym, który delikatnie, z wielką precyzją i odwagą wsuwa maleńkie ziarnko piasku pomiędzy twarde uszy muszli. Jestem tym cierpliwym, który czeka wiele lat zanim jego dotyk urzeczywistni się w postaci nieśmiertelnego piękna. Jestem stwórcą, kreatorem nowej rzeczywistości w akcie nieznanym.\n</olela-narrative>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6229492/ello-optimized-56e3e021.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na usta kobiety, pomalowane na biało z perłami przyczepionymi do dolnej wargi i twarzy kobiety.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6229495/ello-optimized-01fb3dca.jpg\" alt=\"Zdjęcie przedstawia usta kobiety, pomalowane na biało z perłami przyczepionymi do dolnej wargi i twarzy kobiety.\" /></p>\n<p>Co dzieje się wewnątrz małży nie jesteśmy w stanie do końca wyjaśnić. Arystoteles to maleńkie cudo nanotechnologii porównywał do zapłodnienia kroplą oceanu. XV wiek to czas hipotez -perły są jajami małży. XVII – perły powstają w wyniku utwardzenia soków wydzielanych przez muszlę. XIX – i tutaj zbliżamy się do teorii ciała obcego, które małż traktuje jako intruza i odkłada wokół niego perlistą substancję.\nWłaściwie, to wszystko może stać się perłą. Wyobraźmy sobie muszle wielkości samochodu – z podobnej przecież wyłoniła się Wenus na obrazie S. Botticellego „Narodziny Wenus”. Tak... Wenus była perłą! Wystarczy spojrzeć na odcień jej skóry, który praktycznie zlewa się z muszlą. Gest prawej dłoni podkreśla niewinność piersi - jakże kształtem swoim perliste! Simonetta Vespucci pozuje idealnie a Botticelli idealnie oddaje piękno boskiej perły – jedynej w swoim rodzaju. Nie ma dwóch takich samych, a kopia nigdy nie dorówna oryginalnemu pięknu.</p>\n<p>Pod koniec XVI wieku perły docierają do Europy i… nie wzbudzają większego zainteresowania. Za  to ok. pół roku później holenderski malarz popełnia dzieło uznawane za najwybitniejszy przykład XVII wecznego malarstwa - „Dziewczyna z perłą”, nazywany często Mona Lisą Północy. Kim była owa dziewczyna? Być może jest to kilkunastoletnia wówczas córka J. Vermeera.  Tracy Chevalier (autorka książki „Dziewczyna z Perłą”) interpretuje młodą damę jako służącą, a za jej śladem idzie Peter Webber, reżyser filmu o tym samym tytule.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6216044/ello-optimized-c0bb333d.jpg\" alt=\"Zdjęcie przedstawia portret kobiety z perłami przyczepionymi do twarzy i ust. Kobieta patrzy w swój lewy dolny róg, ma usta pomalowane na biało.\" /></p>\n<olela-narrative>\nTwarz dziewczyny z obrazu zastyga na moment z lekko rozchylonymi ustami. Patrząc dłuższą chwilę odnoszę wrażenie jakbym przed chwilą zawołał jej imię, stąd gest skrętu głowy w moim kierunku.\nNie mogę oderwać wzroku.\nJeszcze chwila.\n</olela-narrative>\n<p>Przemysłowe hodowle pereł, tych w kształcie kuli, to zasługa Japończyków, a właściwie Kokichi Mikimoto – pioniera innowacyjnej metody. Podczas gdy Kokochi eksperymentuje z małżami na swiat przychodzi przyszła, największa fanka cudownych dzieci muszli – COCO CHANEL.\nPraktycznie na każdym archiwalnym zdjęciu Coco (Gabrielle Bonheur Chanel) nosi na sobie perły – nie jeden sznur a sześć. Z czasem, przylegają do jej tożsamości i w połączeniu z małą czarną stają się UNIWERSALNĄ klasyką.</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6216049/ello-optimized-5ee2d384.jpg\" alt=\"Zdjęcie przedstawia połowę twarzy kobiety, do której przyczepione są perły, a powieka oka pomalowana jest na biało.\" /></p>\n<olela-narrative>\nUmówiliśmy się po południu na rogu Park Avenue i 35tej alei. Podobno jest tam jakaś bardzo fajna wegańska kawiarnia. Nie za bardzo wiedziałem czego się spodziewać. W głębi duszy nie chciałem, żeby było to spotkanie czysto biznesowe. Miałem na sobie sportowo-elegancką kurtkę od Armaniego, spodnie przypominające bryczesy i półbuty, których koloru nie jestem w stanie określić. Zerknąłem na zegarek i zacząłem nieco się niecierpliwić. W momencie, kiedy w mojej głowie pojawiła się myśl, że Laura jednak nie przyjdzie, zauważyłem w oddali kobietę zbliżającą się w moim kierunku szybkim, lekko chwiejnym krokiem.\n</olela-narrative>\n<olela-narrative>\n&mdash; Strasznie Cię przepraszam, ale po drodze tutaj najpierw zostawiłam palto w taksówce, a zaraz potem złamałam obcas... &mdash; powiedziała zdejmując lewego buta. Miała na sobie małą czarną i subtelne kolczyki z perłą. Mój umysł przywołał obraz Vermeera, który niedawno widziałem a wystawie.<br />\n&mdash; To Ty... &mdash; wymamrotałem bezwiednie.<br />\n&mdash; Słucham?<br />\n&mdash; Nic, nic, przepraszam, zamyśliłem się. &mdash; Niewiele myśląc chwyciłem Laure pod kolana i za ramiona i podniosłem do góry.<br />\n&mdash; Hej, co robisz?<br />\n&mdash; Zdejmij też drugiego buta, proszę. W tej sukience i kolczykach wyglądasz genialnie. Nic więcej nie jest Ci potrzebne. Mam zamiar zanieść Cię najpierw do kawiarni, gdzie zamówimy sojowe latte na podwójnym espresso, a później tam, gdzie tylko zapragniesz. &mdash; Laura obdarzyła mnie spojrzeniem pełnym niedowierzania, aby zaraz głęboko się uśmiechnąć.<br />\n&mdash; Zgadzam się, ale pod jednym warunkiem.<br />\n&mdash; Jakim?<br />\n&mdash; Zamówimy espresso.<br />\n</olela-narrative>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6202833/ello-optimized-7d07df99.jpg\" alt=\"Czarno-białe zdjęcie przedstawia postać odwróconą tyłem w żakiecie ozdobionym perłami i skórzanej spódnicy zapinanej na zamek. Widać lewą dłoń postaci.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6202835/ello-optimized-9d462f06.jpg\" alt=\"Czarno-białe zdjęcie przedstawia zbliżenie na żakietozdobiony perłą, zapinany na zamek błyskawiczny. Widać kawałek lewej dłoni postaci.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6202836/ello-optimized-8db76be4.jpg\" alt=\"Czarno-białe zdjęcie przedstawia zbliżenie na żakietozdobiony perłą, zapinany na zamek błyskawiczny.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6202837/ello-optimized-b2d459e4.jpg\" alt=\"Czarno-białe zdjęcie przedstawia postać kobiety od tyłu. Kobieta ma włosy spięte w kok i podnosi ręce do góry, jest ubrana w żakiet ozdobiony perłami.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6216182/ello-optimized-8951e881.jpg\" alt=\"Czarno-białe zdjęcie przedstawia popiersie kobiety w rozpiętym żakiecie ozdobionym perłami, kobieta nosi sznury pereł na szyi.\" /></p>\n<p>naszyjnik: Zara / spódnica: Reserved / żakiet: Bik Bok x Olela</p>\n";
var raw = exports.raw = "\n<olela-narrative>\nJestem tym, który delikatnie, z wielką precyzją i odwagą wsuwa maleńkie ziarnko piasku pomiędzy twarde uszy muszli. Jestem tym cierpliwym, który czeka wiele lat zanim jego dotyk urzeczywistni się w postaci nieśmiertelnego piękna. Jestem stwórcą, kreatorem nowej rzeczywistości w akcie nieznanym.\n</olela-narrative>\n\n![Zdjęcie przedstawia zbliżenie na usta kobiety, pomalowane na biało z perłami przyczepionymi do dolnej wargi i twarzy kobiety.](https://assets0.ello.co/uploads/asset/attachment/6229492/ello-optimized-56e3e021.jpg)\n![Zdjęcie przedstawia usta kobiety, pomalowane na biało z perłami przyczepionymi do dolnej wargi i twarzy kobiety.](https://assets0.ello.co/uploads/asset/attachment/6229495/ello-optimized-01fb3dca.jpg)\n\nCo dzieje się wewnątrz małży nie jesteśmy w stanie do końca wyjaśnić. Arystoteles to maleńkie cudo nanotechnologii porównywał do zapłodnienia kroplą oceanu. XV wiek to czas hipotez -perły są jajami małży. XVII – perły powstają w wyniku utwardzenia soków wydzielanych przez muszlę. XIX – i tutaj zbliżamy się do teorii ciała obcego, które małż traktuje jako intruza i odkłada wokół niego perlistą substancję.\nWłaściwie, to wszystko może stać się perłą. Wyobraźmy sobie muszle wielkości samochodu – z podobnej przecież wyłoniła się Wenus na obrazie S. Botticellego „Narodziny Wenus”. Tak… Wenus była perłą! Wystarczy spojrzeć na odcień jej skóry, który praktycznie zlewa się z muszlą. Gest prawej dłoni podkreśla niewinność piersi - jakże kształtem swoim perliste! Simonetta Vespucci pozuje idealnie a Botticelli idealnie oddaje piękno boskiej perły – jedynej w swoim rodzaju. Nie ma dwóch takich samych, a kopia nigdy nie dorówna oryginalnemu pięknu.\n\nPod koniec XVI wieku perły docierają do Europy i… nie wzbudzają większego zainteresowania. Za  to ok. pół roku później holenderski malarz popełnia dzieło uznawane za najwybitniejszy przykład XVII wecznego malarstwa - „Dziewczyna z perłą”, nazywany często Mona Lisą Północy. Kim była owa dziewczyna? Być może jest to kilkunastoletnia wówczas córka J. Vermeera.  Tracy Chevalier (autorka książki „Dziewczyna z Perłą”) interpretuje młodą damę jako służącą, a za jej śladem idzie Peter Webber, reżyser filmu o tym samym tytule.\n\n![Zdjęcie przedstawia portret kobiety z perłami przyczepionymi do twarzy i ust. Kobieta patrzy w swój lewy dolny róg, ma usta pomalowane na biało.](https://assets1.ello.co/uploads/asset/attachment/6216044/ello-optimized-c0bb333d.jpg)\n\n<olela-narrative>\nTwarz dziewczyny z obrazu zastyga na moment z lekko rozchylonymi ustami. Patrząc dłuższą chwilę odnoszę wrażenie jakbym przed chwilą zawołał jej imię, stąd gest skrętu głowy w moim kierunku.\nNie mogę oderwać wzroku.\nJeszcze chwila.\n</olela-narrative>\n\n\nPrzemysłowe hodowle pereł, tych w kształcie kuli, to zasługa Japończyków, a właściwie Kokichi Mikimoto – pioniera innowacyjnej metody. Podczas gdy Kokochi eksperymentuje z małżami na swiat przychodzi przyszła, największa fanka cudownych dzieci muszli – COCO CHANEL.\nPraktycznie na każdym archiwalnym zdjęciu Coco (Gabrielle Bonheur Chanel) nosi na sobie perły – nie jeden sznur a sześć. Z czasem, przylegają do jej tożsamości i w połączeniu z małą czarną stają się UNIWERSALNĄ klasyką.\n\n![Zdjęcie przedstawia połowę twarzy kobiety, do której przyczepione są perły, a powieka oka pomalowana jest na biało.](https://assets2.ello.co/uploads/asset/attachment/6216049/ello-optimized-5ee2d384.jpg)\n\n<olela-narrative>\nUmówiliśmy się po południu na rogu Park Avenue i 35tej alei. Podobno jest tam jakaś bardzo fajna wegańska kawiarnia. Nie za bardzo wiedziałem czego się spodziewać. W głębi duszy nie chciałem, żeby było to spotkanie czysto biznesowe. Miałem na sobie sportowo-elegancką kurtkę od Armaniego, spodnie przypominające bryczesy i półbuty, których koloru nie jestem w stanie określić. Zerknąłem na zegarek i zacząłem nieco się niecierpliwić. W momencie, kiedy w mojej głowie pojawiła się myśl, że Laura jednak nie przyjdzie, zauważyłem w oddali kobietę zbliżającą się w moim kierunku szybkim, lekko chwiejnym krokiem.\n</olela-narrative>\n\n<olela-narrative>\n&mdash; Strasznie Cię przepraszam, ale po drodze tutaj najpierw zostawiłam palto w taksówce, a zaraz potem złamałam obcas... &mdash; powiedziała zdejmując lewego buta. Miała na sobie małą czarną i subtelne kolczyki z perłą. Mój umysł przywołał obraz Vermeera, który niedawno widziałem a wystawie.<br />\n&mdash; To Ty... &mdash; wymamrotałem bezwiednie.<br />\n&mdash; Słucham?<br />\n&mdash; Nic, nic, przepraszam, zamyśliłem się. &mdash; Niewiele myśląc chwyciłem Laure pod kolana i za ramiona i podniosłem do góry.<br />\n&mdash; Hej, co robisz?<br />\n&mdash; Zdejmij też drugiego buta, proszę. W tej sukience i kolczykach wyglądasz genialnie. Nic więcej nie jest Ci potrzebne. Mam zamiar zanieść Cię najpierw do kawiarni, gdzie zamówimy sojowe latte na podwójnym espresso, a później tam, gdzie tylko zapragniesz. &mdash; Laura obdarzyła mnie spojrzeniem pełnym niedowierzania, aby zaraz głęboko się uśmiechnąć.<br />\n&mdash; Zgadzam się, ale pod jednym warunkiem.<br />\n&mdash; Jakim?<br />\n&mdash; Zamówimy espresso.<br />\n</olela-narrative>\n\n![Czarno-białe zdjęcie przedstawia postać odwróconą tyłem w żakiecie ozdobionym perłami i skórzanej spódnicy zapinanej na zamek. Widać lewą dłoń postaci.](https://assets0.ello.co/uploads/asset/attachment/6202833/ello-optimized-7d07df99.jpg)\n![Czarno-białe zdjęcie przedstawia zbliżenie na żakietozdobiony perłą, zapinany na zamek błyskawiczny. Widać kawałek lewej dłoni postaci.](https://assets2.ello.co/uploads/asset/attachment/6202835/ello-optimized-9d462f06.jpg)\n![Czarno-białe zdjęcie przedstawia zbliżenie na żakietozdobiony perłą, zapinany na zamek błyskawiczny.](https://assets2.ello.co/uploads/asset/attachment/6202836/ello-optimized-8db76be4.jpg)\n![Czarno-białe zdjęcie przedstawia postać kobiety od tyłu. Kobieta ma włosy spięte w kok i podnosi ręce do góry, jest ubrana w żakiet ozdobiony perłami.](https://assets0.ello.co/uploads/asset/attachment/6202837/ello-optimized-b2d459e4.jpg)\n![Czarno-białe zdjęcie przedstawia popiersie kobiety w rozpiętym żakiecie ozdobionym perłami, kobieta nosi sznury pereł na szyi.](https://assets0.ello.co/uploads/asset/attachment/6216182/ello-optimized-8951e881.jpg)\n\nnaszyjnik: Zara / spódnica: Reserved / żakiet: Bik Bok x Olela\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 114 */
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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6212854/ello-optimized-8ec92992.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 w makija\u017Cu na niebieskim tle, spogl\u0105daj\u0105c\u0105 w swoj\u0105 lew\u0105 stron\u0119.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6217685/ello-optimized-63cb1526.jpg', alt: 'Zdj\u0119cie przedstawia oczy m\u0142odej kobiety w makija\u017Cu, na niebieskim tle, patrz\u0105ce w praw\u0105 stron\u0119.' })
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Optyczne majaczenie. Gdzie\u015B uciekam \u017Arenic\u0105, szukam granicy - jedynej, ostrej, wyczuwalnej. Nie znajduj\u0119 niczego, co pozwala zatrzyma\u0107 wzrok na chwil\u0119. W sumie czuj\u0119 b\xF3l, podobny do tego, kt\xF3ry dotyka mnie po wielu godzinach sp\u0119dzonych przed ekranem komputera. Uciekam okiem, spogl\u0105dam w dal. Co\u015B jednak m\xF3wi mi \u2018sp\xF3jrz jeszcze\u2019. Dochodz\u0119 do wniosku, \u017Ce owe wzrokowe bole\u015Bci w pewien spos\xF3b fascynuj\u0105, hipnotyzuj\u0105, s\u0105 przyjemne.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6213643/ello-optimized-630110c6.jpg', alt: 'Zdj\u0119cie sk\u0142ada si\u0119 z dw\xF3ch zdj\u0119\u0107 przedstawiaj\u0105cych m\u0142od\u0105 kobiet\u0119, raz z otwartymi oczami, raz z zamkni\u0119tymi. Kobieta ma opask\u0119 na czole, makija\u017C, a za ni\u0105 znajduje si\u0119 niebieskie t\u0142o.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6217682/ello-optimized-582c1f5f.jpg', alt: 'Zdj\u0119cie podzielone jest na sze\u015B\u0107 cz\u0119\u015Bci. Cztery z nich przedstawiaj\u0105 oczy m\u0142odej kobiety w makija\u017Cu w kolorach niebiesko-fioletowych. Jedno z nich jest w ca\u0142o\u015Bci wype\u0142nione kolorem niebieskim, a jedno z nich przedstawia rozmyte ko\u0142o w kolorach niebiesko-fioletowych.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Ta swoi\u015Bcie masochistyczna postawa materializuje si\u0119 w obrazach jednego z najznakomitszych malarzy XX wieku, mojego ulubionego \u2013 Wojciecha Fangora. My\u015Bl\u0119, \u017Ce obrazy, z kt\xF3rych dzi\u015B znamy posta\u0107 artysty najbardziej (seria OpArtowskich kr\u0119g\xF3w i fal) mia\u0142a sw\xF3j pocz\u0105tek wraz z u\u015Bwiadomieniem roli przestrzeni zastanej i kreowanej przez dzie\u0142o.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wszystko zacz\u0119\u0142o si\u0119 od wsp\xF3\u0142pracy naszego mistrza z architektami i... od przypadku. W.F. Chcia\u0142 namalowa\u0107 obrazy dwuw\u0105tkowe \u2013 na tle form rozproszonych mia\u0142a znale\u017A\u0107 si\u0119 figuracja. Odkry\u0142 on jednak, \u017Ce ju\u017C ten element \u2018rozproszony\u2019 (ja nazywam je cz\u0119sto \u2018zblendowanymi\u2019 lub \u2018zblurowanymi\u2019) wp\u0142ywa bezpo\u015Brednio na przestrze\u0144 przed obrazem znacz\u0105co j\u0105 uaktywniaj\u0105c. Z kolaboracji ze Stanis\u0142awem Zamecznikiem powstaje w 1958r. \u2018Studium Przestrzeni\u2019 - environment, gdzie g\u0142\xF3wnymi elementami instalacji s\u0105 obrazy wisz\u0105ce i stoj\u0105ce na sztalugach, kreuj\u0105ce przestrze\u0144 pomi\u0119dzy nimi.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'B\u0119d\u0105c w Krakowie (2012r.) na wystawie pt. \u2018Wojciech Fangor. Przestrze\u0144 jako gra\u2019 mia\u0142am okazj\u0119 \u2018zagra\u0107\u2019 w ow\u0105 gr\u0119. \u2018Pozytywna przestrze\u0144 iluzyjna\u2019 transformowa\u0142a mnie od \u015Brodka jednocze\u015Bnie otaczaj\u0105c swoj\u0105 zach\u0142anno\u015Bci\u0105. Znajduj\u0105c si\u0119 w ma\u0142ym pomieszczeniu sam na sam z jednym z fangorowskich kr\u0119g\xF3w, odnios\u0142am wra\u017Cenie, \u017Ce widok obrazu pojawia si\u0119 pomi\u0119dzy mn\u0105 a obrazem. To totalne zaprzeczenie klasycznego poj\u0119cia perspektywy, kt\xF3ra z definicji prowadzi nas W obraz, zafascynowa\u0142o mnie do tego stopnia, \u017Ce sp\u0119dzi\u0142am w muzeum dobrych kilka godzin.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Dzi\u015B, przywo\u0142uj\u0105c w my\u015Blach obrazy i powidoki obraz\xF3w Wojciecha Fangora, postanowi\u0142am za\u0142o\u017Cy\u0107 je na siebie. Za wz\xF3r pos\u0142u\u017Cy\u0142 mi M64. Granat i fiolet, idealnie wsp\xF3\u0142graj\u0105 ze sob\u0105 w za\u0142amaniu powieki.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6212890/ello-optimized-b9dcd943.jpg', alt: 'Zdj\u0119cie przedstawia twarz m\u0142odej kobiety w makija\u017Cu, do g\xF3ry nogami, z niebieskim \u015Bwiat\u0142em padaj\u0105cym na praw\u0105 cz\u0119\u015B\u0107 twarzy.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6217691/ello-optimized-91c22814.jpg', alt: 'Zdj\u0119cie przedstawia twarz m\u0142odej kobiety w makija\u017Cu, twarz przekr\u0119cona jest o 45 stopni.' }),
      _react2.default.createElement('img', { src: 'https://assets3.ello.co/uploads/asset/attachment/6217258/ello-optimized-9b841a4a.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na oko kobiety pomalowane na niebiesko-fioletowo, ca\u0142o\u015B\u0107 na niebieskim tle.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6217267/ello-optimized-ccc695a4.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na oko kobiety, pomalowane na niebiesko-fioletowo.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6213422/ello-optimized-b59eb7b9.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na rz\u0119sy powieki oka pomalowanej na niebiesko-fioletowo.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Make-up inspirowany obrazem. M64_by_Wojciech Fangor", "date": "2017-09-11T16:52:00.000Z", "categories": ["Sztuka Makijażu"], "tags": ["fangor", "makeup", "makijaż", "dzieło", "obraz", "kreacja", "artysta", "art", "sztuka"] };
var body = exports.body = "<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6212854/ello-optimized-8ec92992.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę w makijażu na niebieskim tle, spoglądającą w swoją lewą stronę.\" /></p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6217685/ello-optimized-63cb1526.jpg\" alt=\"Zdjęcie przedstawia oczy młodej kobiety w makijażu, na niebieskim tle, patrzące w prawą stronę.\" /></p>\n<olela-narrative>\nOptyczne majaczenie. Gdzieś uciekam źrenicą, szukam granicy - jedynej, ostrej, wyczuwalnej. Nie znajduję niczego, co pozwala zatrzymać wzrok na chwilę. W sumie czuję ból, podobny do tego, który dotyka mnie po wielu godzinach spędzonych przed ekranem komputera. Uciekam okiem, spoglądam w dal. Coś jednak mówi mi ‘spójrz jeszcze’. Dochodzę do wniosku, że owe wzrokowe boleści w pewien sposób fascynują, hipnotyzują, są przyjemne.\n</olela-narrative>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6213643/ello-optimized-630110c6.jpg\" alt=\"Zdjęcie składa się z dwóch zdjęć przedstawiających młodą kobietę, raz z otwartymi oczami, raz z zamkniętymi. Kobieta ma opaskę na czole, makijaż, a za nią znajduje się niebieskie tło.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6217682/ello-optimized-582c1f5f.jpg\" alt=\"Zdjęcie podzielone jest na sześć części. Cztery z nich przedstawiają oczy młodej kobiety w makijażu w kolorach niebiesko-fioletowych. Jedno z nich jest w całości wypełnione kolorem niebieskim, a jedno z nich przedstawia rozmyte koło w kolorach niebiesko-fioletowych.\" /></p>\n<p>Ta swoiście masochistyczna postawa materializuje się w obrazach jednego z najznakomitszych malarzy XX wieku, mojego ulubionego – Wojciecha Fangora. Myślę, że obrazy, z których dziś znamy postać artysty najbardziej (seria OpArtowskich kręgów i fal) miała swój początek wraz z uświadomieniem roli przestrzeni zastanej i kreowanej przez dzieło.</p>\n<p>Wszystko zaczęło się od współpracy naszego mistrza z architektami i... od przypadku. W.F. Chciał namalować obrazy dwuwątkowe – na tle form rozproszonych miała znaleźć się figuracja. Odkrył on jednak, że już ten element ‘rozproszony’ (ja nazywam je często ‘zblendowanymi’ lub ‘zblurowanymi’) wpływa bezpośrednio na przestrzeń przed obrazem znacząco ją uaktywniając. Z kolaboracji ze Stanisławem Zamecznikiem powstaje w 1958r. ‘Studium Przestrzeni’ - environment, gdzie głównymi elementami instalacji są obrazy wiszące i stojące na sztalugach, kreujące przestrzeń pomiędzy nimi.</p>\n<p>Będąc w Krakowie (2012r.) na wystawie pt. ‘Wojciech Fangor. Przestrzeń jako gra’ miałam okazję ‘zagrać’ w ową grę. ‘Pozytywna przestrzeń iluzyjna’ transformowała mnie od środka jednocześnie otaczając swoją zachłannością. Znajdując się w małym pomieszczeniu sam na sam z jednym z fangorowskich kręgów, odniosłam wrażenie, że widok obrazu pojawia się pomiędzy mną a obrazem. To totalne zaprzeczenie klasycznego pojęcia perspektywy, która z definicji prowadzi nas W obraz, zafascynowało mnie do tego stopnia, że spędziłam w muzeum dobrych kilka godzin.</p>\n<p>Dziś, przywołując w myślach obrazy i powidoki obrazów Wojciecha Fangora, postanowiłam założyć je na siebie. Za wzór posłużył mi M64. Granat i fiolet, idealnie współgrają ze sobą w załamaniu powieki.</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6212890/ello-optimized-b9dcd943.jpg\" alt=\"Zdjęcie przedstawia twarz młodej kobiety w makijażu, do góry nogami, z niebieskim światłem padającym na prawą część twarzy.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6217691/ello-optimized-91c22814.jpg\" alt=\"Zdjęcie przedstawia twarz młodej kobiety w makijażu, twarz przekręcona jest o 45 stopni.\" />\n<img src=\"https://assets3.ello.co/uploads/asset/attachment/6217258/ello-optimized-9b841a4a.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na oko kobiety pomalowane na niebiesko-fioletowo, całość na niebieskim tle.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6217267/ello-optimized-ccc695a4.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na oko kobiety, pomalowane na niebiesko-fioletowo.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6213422/ello-optimized-b59eb7b9.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na rzęsy powieki oka pomalowanej na niebiesko-fioletowo.\" /></p>\n";
var raw = exports.raw = "\n![Zdjęcie przedstawia młodą kobietę w makijażu na niebieskim tle, spoglądającą w swoją lewą stronę.](https://assets0.ello.co/uploads/asset/attachment/6212854/ello-optimized-8ec92992.jpg)\n\n![Zdjęcie przedstawia oczy młodej kobiety w makijażu, na niebieskim tle, patrzące w prawą stronę.](https://assets1.ello.co/uploads/asset/attachment/6217685/ello-optimized-63cb1526.jpg)\n\n<olela-narrative>\nOptyczne majaczenie. Gdzieś uciekam źrenicą, szukam granicy - jedynej, ostrej, wyczuwalnej. Nie znajduję niczego, co pozwala zatrzymać wzrok na chwilę. W sumie czuję ból, podobny do tego, który dotyka mnie po wielu godzinach spędzonych przed ekranem komputera. Uciekam okiem, spoglądam w dal. Coś jednak mówi mi ‘spójrz jeszcze’. Dochodzę do wniosku, że owe wzrokowe boleści w pewien sposób fascynują, hipnotyzują, są przyjemne.\n</olela-narrative>\n\n![Zdjęcie składa się z dwóch zdjęć przedstawiających młodą kobietę, raz z otwartymi oczami, raz z zamkniętymi. Kobieta ma opaskę na czole, makijaż, a za nią znajduje się niebieskie tło.](https://assets1.ello.co/uploads/asset/attachment/6213643/ello-optimized-630110c6.jpg)\n![Zdjęcie podzielone jest na sześć części. Cztery z nich przedstawiają oczy młodej kobiety w makijażu w kolorach niebiesko-fioletowych. Jedno z nich jest w całości wypełnione kolorem niebieskim, a jedno z nich przedstawia rozmyte koło w kolorach niebiesko-fioletowych.](https://assets1.ello.co/uploads/asset/attachment/6217682/ello-optimized-582c1f5f.jpg)\n\nTa swoiście masochistyczna postawa materializuje się w obrazach jednego z najznakomitszych malarzy XX wieku, mojego ulubionego – Wojciecha Fangora. Myślę, że obrazy, z których dziś znamy postać artysty najbardziej (seria OpArtowskich kręgów i fal) miała swój początek wraz z uświadomieniem roli przestrzeni zastanej i kreowanej przez dzieło. \n\nWszystko zaczęło się od współpracy naszego mistrza z architektami i… od przypadku. W.F. Chciał namalować obrazy dwuwątkowe – na tle form rozproszonych miała znaleźć się figuracja. Odkrył on jednak, że już ten element ‘rozproszony’ (ja nazywam je często ‘zblendowanymi’ lub ‘zblurowanymi’) wpływa bezpośrednio na przestrzeń przed obrazem znacząco ją uaktywniając. Z kolaboracji ze Stanisławem Zamecznikiem powstaje w 1958r. ‘Studium Przestrzeni’ - environment, gdzie głównymi elementami instalacji są obrazy wiszące i stojące na sztalugach, kreujące przestrzeń pomiędzy nimi. \n\nBędąc w Krakowie (2012r.) na wystawie pt. ‘Wojciech Fangor. Przestrzeń jako gra’ miałam okazję ‘zagrać’ w ową grę. ‘Pozytywna przestrzeń iluzyjna’ transformowała mnie od środka jednocześnie otaczając swoją zachłannością. Znajdując się w małym pomieszczeniu sam na sam z jednym z fangorowskich kręgów, odniosłam wrażenie, że widok obrazu pojawia się pomiędzy mną a obrazem. To totalne zaprzeczenie klasycznego pojęcia perspektywy, która z definicji prowadzi nas W obraz, zafascynowało mnie do tego stopnia, że spędziłam w muzeum dobrych kilka godzin.\n\nDziś, przywołując w myślach obrazy i powidoki obrazów Wojciecha Fangora, postanowiłam założyć je na siebie. Za wzór posłużył mi M64. Granat i fiolet, idealnie współgrają ze sobą w załamaniu powieki. \n\n![Zdjęcie przedstawia twarz młodej kobiety w makijażu, do góry nogami, z niebieskim światłem padającym na prawą część twarzy.](https://assets2.ello.co/uploads/asset/attachment/6212890/ello-optimized-b9dcd943.jpg)\n![Zdjęcie przedstawia twarz młodej kobiety w makijażu, twarz przekręcona jest o 45 stopni.](https://assets0.ello.co/uploads/asset/attachment/6217691/ello-optimized-91c22814.jpg)\n![Zdjęcie przedstawia zbliżenie na oko kobiety pomalowane na niebiesko-fioletowo, całość na niebieskim tle.](https://assets3.ello.co/uploads/asset/attachment/6217258/ello-optimized-9b841a4a.jpg)\n![Zdjęcie przedstawia zbliżenie na oko kobiety, pomalowane na niebiesko-fioletowo.](https://assets1.ello.co/uploads/asset/attachment/6217267/ello-optimized-ccc695a4.jpg)\n![Zdjęcie przedstawia zbliżenie na rzęsy powieki oka pomalowanej na niebiesko-fioletowo.](https://assets2.ello.co/uploads/asset/attachment/6213422/ello-optimized-b59eb7b9.jpg)\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 115 */
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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
      'Jesie\u0144 to czas, kiedy z lekkich letnich sa\u0142atek zaczynami przerzuca\u0107 si\u0119 na dania rozgrzewaj\u0105ce. W ko\u0144cu zima zbli\u017Ca si\u0119 wielkimi krokami. Imbir, chilli, kardamon \u2013 to zdecydowanie moje zimowe aromaty. A jesie\u0144? Zamy\u015Bli\u0142am si\u0119 chwile nad smakiem jesieni. Chcia\u0142am zrobi\u0107 co\u015B lekkiego, jednocze\u015Bnie odchodz\u0105c od og\xF3rkowych, orze\u017Awiaj\u0105cych smak\xF3w lata, a nie dochodz\u0105c do ci\u0119\u017Ckich aromat\xF3w zimy.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'W r\u0119ce wpad\u0142 mi stary numer KukBuk\u2019a (marzec/kwiecie\u0144 2015). Pami\u0119tam, \u017Ce jeszcze wtedy pracowa\u0142am w pewnej krakowskiej restauracji gotuj\u0105c wega\u0144skie zupy. Zainspirowana przepisem Piotra Markowskiego dochodz\u0119 do wniosku, \u017Ce jesie\u0144 to dla mnie rzodkiewka \u2013 lekkie warzywo, ale o ostrym posmaku, broku\u0142, kalafior, cukinia, jab\u0142ka, no i oczywi\u015Bcie dynia. Dzi\u015B wyczarowa\u0142am jesienn\u0105 przystawk\u0119. Przepis znajdziecie poni\u017Cej.'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        Recipe,
        {
          title: 'Sa\u0142atka z bia\u0142ej rzepy i rzodkiewki',
          time: '10 minut',
          level: '\u0142atwy',
          mealFor: '1 osoba',
          photo: 'https://assets2.ello.co/uploads/asset/attachment/6234887/ello-optimized-033c3643.jpg',
          altText: 'Zdj\u0119cie przedstawia ciemny talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajduj\u0105 si\u0119 warzywa, bia\u0142y sos, zio\u0142a.'
        },
        _react2.default.createElement(Ingredient, { title: 'bia\u0142a rzepa' }),
        _react2.default.createElement(Ingredient, { title: 'rzodkiewka', quantity: 'ok 3 sztuki' }),
        _react2.default.createElement(Ingredient, { title: 'broku\u0142' }),
        _react2.default.createElement(Ingredient, { title: 'mleczko kokosowe', quantity: 'ok 4 \u0142y\u017Cki' }),
        _react2.default.createElement(Ingredient, { title: 'migda\u0142y w p\u0142atkach', quantity: 'gar\u015B\u0107' }),
        _react2.default.createElement(Ingredient, { title: 'kolendra \u015Bwie\u017Ca', quantity: 'gar\u015B\u0107' }),
        _react2.default.createElement(Ingredient, { title: 'oliwa z wyt\u0142oczyn z oliwek', quantity: 'ok 3 \u0142y\u017Cki' }),
        _react2.default.createElement(Ingredient, { title: 'pieprz i s\xF3l do smaku' }),
        _react2.default.createElement(
          Method,
          null,
          'Broku\u0142 gotuj\u0119 w osolonej wodzie. Na suchej patelni pra\u017C\u0119 p\u0142atki migda\u0142\xF3w, a p\xF3\u017Aniej miel\u0119 na puder. Rzep\u0119 i rzodkiew kroj\u0119 w drobne plasterki. Mleczko kokosowe redukuje przez chwil\u0119 na patelni. Ugotowanego broku\u0142a blenduj\u0119 na pur\xE9e, doprawiam sol\u0105 i pieprzem, a kolendr\u0119 miksuj\u0119 razem z oliw\u0105. Na talerz wylewam mleko kokosowe, w g\u0142owie wspominaj\u0105c wielkiego mistrza taszyzmu \u2013 Jackson\'a Pollock\'a. Uk\u0142adam rzep\u0119 i rzodkiew \u2013 tutaj wspomnienia nabieraj\u0105 geometrii Kandinsky\u2019ego. Z boku nak\u0142adam odrobin\u0119 broku\u0142owego pur\xE9e, a ca\u0142o\u015B\u0107 dekoruj\u0119 pudrem z migda\u0142\xF3w, kolendrow\u0105 oliw\u0105 i listkami kolendry. Takie proste, a takie pyszne! Smacznego!'
        )
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6234895/ello-optimized-24cdaed7.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na ciemny talerz na jasnym tle. Na talerzu znajduj\u0105 si\u0119 warzywa, bia\u0142y sos, zio\u0142a.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Smaki_Jesieni vol._1. Sałatka z_białej rzepy i_rzodkiewki.", "date": "2017-09-16T16:51:00.000Z", "permalink": "/2017-09-16-salatka-z-bialej-rzepy-i-rzodkiewki", "categories": ["Sztuka Gotowania"], "tags": ["przepis", "sałatka", "smak", "jesień", "przystawka", "sztuka", "talerz", "artysta", "kucharz", "kreacja", "kompozycja"] };
var body = exports.body = "<olela-narrative>\nJesień to czas, kiedy z lekkich letnich sałatek zaczynami przerzucać się na dania rozgrzewające. W końcu zima zbliża się wielkimi krokami. Imbir, chilli, kardamon – to zdecydowanie moje zimowe aromaty. A jesień? Zamyśliłam się chwile nad smakiem jesieni. Chciałam zrobić coś lekkiego, jednocześnie odchodząc od ogórkowych, orzeźwiających smaków lata, a nie dochodząc do ciężkich aromatów zimy.\n</olela-narrative>\n<p>W ręce wpadł mi stary numer KukBuk’a (marzec/kwiecień 2015). Pamiętam, że jeszcze wtedy pracowałam w pewnej krakowskiej restauracji gotując wegańskie zupy. Zainspirowana przepisem Piotra Markowskiego dochodzę do wniosku, że jesień to dla mnie rzodkiewka – lekkie warzywo, ale o ostrym posmaku, brokuł, kalafior, cukinia, jabłka, no i oczywiście dynia. Dziś wyczarowałam jesienną przystawkę. Przepis znajdziecie poniżej.</p>\n<div>\n  <Recipe\n    title='Sałatka z białej rzepy i rzodkiewki'\n    time='10 minut'\n    level='łatwy'\n    mealFor='1 osoba'\n    photo='https://assets2.ello.co/uploads/asset/attachment/6234887/ello-optimized-033c3643.jpg'\n    altText='Zdjęcie przedstawia ciemny talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajdują się warzywa, biały sos, zioła.'\n  >\n    <Ingredient title='biała rzepa' />\n    <Ingredient title='rzodkiewka' quantity='ok 3 sztuki' />\n    <Ingredient title='brokuł' />\n    <Ingredient title='mleczko kokosowe' quantity='ok 4 łyżki' />\n    <Ingredient title='migdały w płatkach' quantity='garść' />\n    <Ingredient title='kolendra świeża' quantity='garść' />\n    <Ingredient title='oliwa z wytłoczyn z oliwek' quantity='ok 3 łyżki' />\n    <Ingredient title='pieprz i sól do smaku' />\n    <Method>\n      Brokuł gotuję w osolonej wodzie. Na suchej patelni prażę płatki migdałów,\n      a później mielę na puder. Rzepę i rzodkiew kroję w drobne plasterki.\n      Mleczko kokosowe redukuje przez chwilę na patelni.\n      Ugotowanego brokuła blenduję na purée, doprawiam solą i pieprzem,\n      a kolendrę miksuję razem z oliwą. Na talerz wylewam mleko kokosowe,\n      w głowie wspominając wielkiego mistrza taszyzmu – Jackson'a Pollock'a.\n      Układam rzepę i rzodkiew – tutaj wspomnienia nabierają geometrii Kandinsky’ego.\n      Z boku nakładam odrobinę brokułowego purée, a całość dekoruję pudrem z migdałów,\n      kolendrową oliwą i listkami kolendry. Takie proste, a takie pyszne! Smacznego!\n    </Method>\n  </Recipe>\n</div>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6234895/ello-optimized-24cdaed7.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na ciemny talerz na jasnym tle. Na talerzu znajdują się warzywa, biały sos, zioła.\" /></p>\n";
var raw = exports.raw = "\n<olela-narrative>\nJesień to czas, kiedy z lekkich letnich sałatek zaczynami przerzucać się na dania rozgrzewające. W końcu zima zbliża się wielkimi krokami. Imbir, chilli, kardamon – to zdecydowanie moje zimowe aromaty. A jesień? Zamyśliłam się chwile nad smakiem jesieni. Chciałam zrobić coś lekkiego, jednocześnie odchodząc od ogórkowych, orzeźwiających smaków lata, a nie dochodząc do ciężkich aromatów zimy.\n</olela-narrative>\n\nW ręce wpadł mi stary numer KukBuk’a (marzec/kwiecień 2015). Pamiętam, że jeszcze wtedy pracowałam w pewnej krakowskiej restauracji gotując wegańskie zupy. Zainspirowana przepisem Piotra Markowskiego dochodzę do wniosku, że jesień to dla mnie rzodkiewka – lekkie warzywo, ale o ostrym posmaku, brokuł, kalafior, cukinia, jabłka, no i oczywiście dynia. Dziś wyczarowałam jesienną przystawkę. Przepis znajdziecie poniżej.\n\n<div>\n  <Recipe\n    title='Sałatka z białej rzepy i rzodkiewki'\n    time='10 minut'\n    level='łatwy'\n    mealFor='1 osoba'\n    photo='https://assets2.ello.co/uploads/asset/attachment/6234887/ello-optimized-033c3643.jpg'\n    altText='Zdjęcie przedstawia ciemny talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajdują się warzywa, biały sos, zioła.'\n  >\n    <Ingredient title='biała rzepa' />\n    <Ingredient title='rzodkiewka' quantity='ok 3 sztuki' />\n    <Ingredient title='brokuł' />\n    <Ingredient title='mleczko kokosowe' quantity='ok 4 łyżki' />\n    <Ingredient title='migdały w płatkach' quantity='garść' />\n    <Ingredient title='kolendra świeża' quantity='garść' />\n    <Ingredient title='oliwa z wytłoczyn z oliwek' quantity='ok 3 łyżki' />\n    <Ingredient title='pieprz i sól do smaku' />\n    <Method>\n      Brokuł gotuję w osolonej wodzie. Na suchej patelni prażę płatki migdałów,\n      a później mielę na puder. Rzepę i rzodkiew kroję w drobne plasterki.\n      Mleczko kokosowe redukuje przez chwilę na patelni.\n      Ugotowanego brokuła blenduję na purée, doprawiam solą i pieprzem,\n      a kolendrę miksuję razem z oliwą. Na talerz wylewam mleko kokosowe,\n      w głowie wspominając wielkiego mistrza taszyzmu – Jackson'a Pollock'a.\n      Układam rzepę i rzodkiew – tutaj wspomnienia nabierają geometrii Kandinsky’ego.\n      Z boku nakładam odrobinę brokułowego purée, a całość dekoruję pudrem z migdałów,\n      kolendrową oliwą i listkami kolendry. Takie proste, a takie pyszne! Smacznego!\n    </Method>\n  </Recipe>\n</div>\n\n\n![Zdjęcie przedstawia zbliżenie na ciemny talerz na jasnym tle. Na talerzu znajdują się warzywa, biały sos, zioła.](https://assets1.ello.co/uploads/asset/attachment/6234895/ello-optimized-24cdaed7.jpg)\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 116 */
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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
      'Pomy\u015Bl przez chwil\u0119 o swoim ulubionym arty\u015Bcie. Mo\u017Ce fascynuj\u0105 Ci\u0119 kompozycje Joan\u2019a Mir\xF3 , a mo\u017Ce przepadasz za kropkami tak jak Yayoi Kusama? Nie znasz ich zbyt wielu? Nie szkodzi \u2013 zajrzyj do internetu. Wpisz nazwisko, jakie pierwsze przyjdzie Ci do g\u0142owy, lub nazw\u0119 kierunku np. kubizm. Reszta wy\u015Bwietli si\u0119 sama. Od jednego dzie\u0142a do nast\u0119pnego. Zainspiruj si\u0119 i wykorzystaj talerz jako p\u0142\xF3tno. My\u015Bl\u0105c o sk\u0142adnikach pomy\u015Bl te\u017C o kolorach. Mieszaj je ze sob\u0105 z uwa\u017Cno\u015Bci\u0105 buddyjskiego mnicha, zaobserwuj ich struktur\u0119. Na samym ko\u0144cu zastan\xF3w si\u0119 nad kompozycj\u0105. Czy ma mie\u0107 charakter otwarty, a mo\u017Ce wolisz co\u015B scentrowanego, kt\xF3re elementy warto wyeksponowa\u0107 na pierwszym planie, a kt\xF3re s\u0105 tylko dodatkiem do koncertu smak\xF3w, zapach\xF3w i barw. Voil\xE0. Oto dzie\u0142o, kt\xF3re w przeciwie\u0144stwie do obraz\xF3w nie ma przetrwa\u0107 tysi\u0105ca lat, bo im szybciej znika, tym bardziej si\u0119 podoba.'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        Recipe,
        {
          title: 'Curry z pomidor\xF3w, cukinii i jab\u0142ek',
          time: '30 minut',
          level: '\u0142atwy',
          mealFor: '4 osoby',
          photo: 'https://assets1.ello.co/uploads/asset/attachment/6238659/ello-optimized-5191cd73.jpg',
          altText: 'Zdj\u0119cie przedstawia seledynowy talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajduj\u0105 si\u0119 warzywa, czerwony sos, bia\u0142y sos, \u017C\xF3\u0142ty ry\u017C, zio\u0142a, orzechy.'
        },
        _react2.default.createElement(Ingredient, { title: 'cukinia', quantity: '1 \u015Brednia ' }),
        _react2.default.createElement(Ingredient, { title: 'jab\u0142ko', quantity: '1 \u015Brednie' }),
        _react2.default.createElement(Ingredient, { title: 'cebula czerwona', quantity: '2 \u015Brednie' }),
        _react2.default.createElement(Ingredient, { title: 'pomidory krojone', quantity: '1 puszka' }),
        _react2.default.createElement(Ingredient, { title: 'koncentrat pomidorowy', quantity: '2 \u0142y\u017Ceczki' }),
        _react2.default.createElement(Ingredient, { title: 'czosnek', quantity: '3 z\u0105bki' }),
        _react2.default.createElement(Ingredient, { title: 'go\u017Adziki', quantity: '3 sztuki' }),
        _react2.default.createElement(Ingredient, { title: 'papryka s\u0142odka mielona', quantity: '1 \u0142y\u017Cka' }),
        _react2.default.createElement(Ingredient, { title: '\u015Bwie\u017Ca kolendra do przyozdobienia' }),
        _react2.default.createElement(Ingredient, { title: 'pieprz i s\xF3l do smaku' }),
        _react2.default.createElement(Ingredient, { title: 'ry\u017C basmati', quantity: '250 g' }),
        _react2.default.createElement(Ingredient, { title: 'daktyle suszone', quantity: 'gar\u015B\u0107' }),
        _react2.default.createElement(Ingredient, { title: 'kurkuma lub przyprawa curry', quantity: 'ok jedna \u0142y\u017Cka' }),
        _react2.default.createElement(
          Method,
          null,
          'Cebul\u0119 kroj\u0119 w drobn\u0105 kostk\u0119, siekam 2 z\u0105bki czosnku i wrzucam wszystko do garnka na rozgrzany olej. Dorzucam 3 go\u017Adziki. Kiedy ca\u0142o\u015B\u0107 si\u0119 podsma\u017Ca kroj\u0119 w kostk\u0119 cukini\u0119 i jab\u0142ka. W osobnym garnku, w osolonej wodzie gotuj\u0119 ry\u017C. Cukinie dorzucam do cebuli, zasypuj\u0119 sol\u0105 i przykrywam. Dusz\u0119 tak ok. 10min, po czym dodaj\u0119 \u0142y\u017Ck\u0119 s\u0142odkiej papryki i zostawiam jeszcze na chwil\u0119. Kiedy ry\u017C si\u0119 ugotuj\u0119, ods\u0105czam go i dorzucam posiekane daktyle i ok. 2 \u0142y\u017Cki kurkumy (lub przyprawy curry) i mieszam dok\u0142adnie (mo\u017Cna doda\u0107 odrobin\u0119 oliwy). Do podduszonej cukinii wlewam pomidory i koncentrat, oraz dorzucam jab\u0142ka. Zostawiam ca\u0142o\u015B\u0107 na ma\u0142ym ogniu pod przykryciem na ok 10-15 min. Na sam koniec wyciskam jeszcze z\u0105bek czosnku i doprawiam sol\u0105 i pieprzem wed\u0142ug uznania (mo\u017Cna doda\u0107 te\u017C troch\u0119 pieprzu cayenne dla ostro\u015Bci). Gotowe.'
        )
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6238656/ello-optimized-e62176d8.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na seledynowy talerz na jasnym tle. Na talerzu znajduj\u0105 si\u0119 \u017C\xF3\u0142ty ry\u017C, czerwony sos, warzywa, zio\u0142a, orzechy.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Smaki_Jesieni vol._2. Curry z_pomidorów, cukinii i_jabłek.", "date": "2017-09-17T15:47:00.000Z", "categories": ["Sztuka Gotowania"], "tags": ["przepis", "curry", "cukinia", "jabłka", "kuchnia", "sztuka", "artysta", "kreacja", "kompozycja", "smak", "jesień", "kucharz", "talerz"] };
var body = exports.body = "<olela-narrative>\nPomyśl przez chwilę o swoim ulubionym artyście. Może fascynują Cię kompozycje Joan’a Miró , a może przepadasz za kropkami tak jak Yayoi Kusama? Nie znasz ich zbyt wielu? Nie szkodzi – zajrzyj do internetu. Wpisz nazwisko, jakie pierwsze przyjdzie Ci do głowy, lub nazwę kierunku np. kubizm. Reszta wyświetli się sama. Od jednego dzieła do następnego. Zainspiruj się i wykorzystaj talerz jako płótno. Myśląc o składnikach pomyśl też o kolorach. Mieszaj je ze sobą z uważnością buddyjskiego mnicha, zaobserwuj ich strukturę. Na samym końcu zastanów się nad kompozycją. Czy ma mieć charakter otwarty, a może wolisz coś scentrowanego, które elementy warto wyeksponować na pierwszym planie, a które są tylko dodatkiem do koncertu smaków, zapachów i barw. Voilà. Oto dzieło, które w przeciwieństwie do obrazów nie ma przetrwać tysiąca lat, bo im szybciej znika, tym bardziej się podoba.\n</olela-narrative>\n<div>\n  <Recipe\n    title='Curry z pomidorów, cukinii i jabłek'\n    time='30 minut'\n    level='łatwy'\n    mealFor='4 osoby'\n    photo='https://assets1.ello.co/uploads/asset/attachment/6238659/ello-optimized-5191cd73.jpg'\n    altText='Zdjęcie przedstawia seledynowy talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajdują się warzywa, czerwony sos, biały sos, żółty ryż, zioła, orzechy.'\n  >\n    <Ingredient title='cukinia' quantity='1 średnia ' />\n    <Ingredient title='jabłko' quantity='1 średnie' />\n    <Ingredient title='cebula czerwona' quantity='2 średnie' />\n    <Ingredient title='pomidory krojone' quantity='1 puszka' />\n    <Ingredient title='koncentrat pomidorowy' quantity='2 łyżeczki' />\n    <Ingredient title='czosnek' quantity='3 ząbki' />\n    <Ingredient title='goździki' quantity='3 sztuki' />\n    <Ingredient title='papryka słodka mielona' quantity='1 łyżka'/>\n    <Ingredient title='świeża kolendra do przyozdobienia' />\n    <Ingredient title='pieprz i sól do smaku' />\n    <Ingredient title='ryż basmati' quantity='250 g' />\n    <Ingredient title='daktyle suszone' quantity='garść' />\n    <Ingredient title='kurkuma lub przyprawa curry' quantity='ok jedna łyżka' />\n    <Method>\n      Cebulę kroję w drobną kostkę, siekam 2 ząbki czosnku i wrzucam wszystko do garnka na rozgrzany olej. Dorzucam 3 goździki. Kiedy całość się podsmaża kroję w kostkę cukinię i jabłka. W osobnym garnku, w osolonej wodzie gotuję ryż. Cukinie dorzucam do cebuli, zasypuję solą i przykrywam. Duszę tak ok. 10min, po czym dodaję łyżkę słodkiej papryki i zostawiam jeszcze na chwilę. Kiedy ryż się ugotuję, odsączam go i dorzucam posiekane daktyle i ok. 2 łyżki kurkumy (lub przyprawy curry) i mieszam dokładnie (można dodać odrobinę oliwy). Do podduszonej cukinii wlewam pomidory i koncentrat, oraz dorzucam jabłka. Zostawiam całość na małym ogniu pod przykryciem na ok 10-15 min. Na sam koniec wyciskam jeszcze ząbek czosnku i doprawiam solą i pieprzem według uznania (można dodać też trochę pieprzu cayenne dla ostrości). Gotowe. \n    </Method>\n  </Recipe>\n</div>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6238656/ello-optimized-e62176d8.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na seledynowy talerz na jasnym tle. Na talerzu znajdują się żółty ryż, czerwony sos, warzywa, zioła, orzechy.\" /></p>\n";
var raw = exports.raw = "\n<olela-narrative>\nPomyśl przez chwilę o swoim ulubionym artyście. Może fascynują Cię kompozycje Joan’a Miró , a może przepadasz za kropkami tak jak Yayoi Kusama? Nie znasz ich zbyt wielu? Nie szkodzi – zajrzyj do internetu. Wpisz nazwisko, jakie pierwsze przyjdzie Ci do głowy, lub nazwę kierunku np. kubizm. Reszta wyświetli się sama. Od jednego dzieła do następnego. Zainspiruj się i wykorzystaj talerz jako płótno. Myśląc o składnikach pomyśl też o kolorach. Mieszaj je ze sobą z uważnością buddyjskiego mnicha, zaobserwuj ich strukturę. Na samym końcu zastanów się nad kompozycją. Czy ma mieć charakter otwarty, a może wolisz coś scentrowanego, które elementy warto wyeksponować na pierwszym planie, a które są tylko dodatkiem do koncertu smaków, zapachów i barw. Voilà. Oto dzieło, które w przeciwieństwie do obrazów nie ma przetrwać tysiąca lat, bo im szybciej znika, tym bardziej się podoba.\n</olela-narrative>\n\n<div>\n  <Recipe\n    title='Curry z pomidorów, cukinii i jabłek'\n    time='30 minut'\n    level='łatwy'\n    mealFor='4 osoby'\n    photo='https://assets1.ello.co/uploads/asset/attachment/6238659/ello-optimized-5191cd73.jpg'\n    altText='Zdjęcie przedstawia seledynowy talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajdują się warzywa, czerwony sos, biały sos, żółty ryż, zioła, orzechy.'\n  >\n    <Ingredient title='cukinia' quantity='1 średnia ' />\n    <Ingredient title='jabłko' quantity='1 średnie' />\n    <Ingredient title='cebula czerwona' quantity='2 średnie' />\n    <Ingredient title='pomidory krojone' quantity='1 puszka' />\n    <Ingredient title='koncentrat pomidorowy' quantity='2 łyżeczki' />\n    <Ingredient title='czosnek' quantity='3 ząbki' />\n    <Ingredient title='goździki' quantity='3 sztuki' />\n    <Ingredient title='papryka słodka mielona' quantity='1 łyżka'/>\n    <Ingredient title='świeża kolendra do przyozdobienia' />\n    <Ingredient title='pieprz i sól do smaku' />\n    <Ingredient title='ryż basmati' quantity='250 g' />\n    <Ingredient title='daktyle suszone' quantity='garść' />\n    <Ingredient title='kurkuma lub przyprawa curry' quantity='ok jedna łyżka' />\n    <Method>\n      Cebulę kroję w drobną kostkę, siekam 2 ząbki czosnku i wrzucam wszystko do garnka na rozgrzany olej. Dorzucam 3 goździki. Kiedy całość się podsmaża kroję w kostkę cukinię i jabłka. W osobnym garnku, w osolonej wodzie gotuję ryż. Cukinie dorzucam do cebuli, zasypuję solą i przykrywam. Duszę tak ok. 10min, po czym dodaję łyżkę słodkiej papryki i zostawiam jeszcze na chwilę. Kiedy ryż się ugotuję, odsączam go i dorzucam posiekane daktyle i ok. 2 łyżki kurkumy (lub przyprawy curry) i mieszam dokładnie (można dodać odrobinę oliwy). Do podduszonej cukinii wlewam pomidory i koncentrat, oraz dorzucam jabłka. Zostawiam całość na małym ogniu pod przykryciem na ok 10-15 min. Na sam koniec wyciskam jeszcze ząbek czosnku i doprawiam solą i pieprzem według uznania (można dodać też trochę pieprzu cayenne dla ostrości). Gotowe. \n    </Method>\n  </Recipe>\n</div>\n\n\n![Zdjęcie przedstawia zbliżenie na seledynowy talerz na jasnym tle. Na talerzu znajdują się żółty ryż, czerwony sos, warzywa, zioła, orzechy.](https://assets0.ello.co/uploads/asset/attachment/6238656/ello-optimized-e62176d8.jpg)";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 117 */
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

var _ContentLimiter = __webpack_require__(4);

var _ContentLimiter2 = _interopRequireDefault(_ContentLimiter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.__data = __webpack_require__(1).default;

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
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6235681/ello-optimized-4ab7553c.jpg', alt: 'Zdj\u0119cie centralnie przedstawia ro\u015Blin\u0119 z rodziny kaktusowatych, rosn\u0105c\u0105 w szarej glebie na tle jasnej \u015Bciany.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6242404/ello-optimized-dbcead22.jpg', alt: 'Zdj\u0119cie przedstawia szkic wykonany tuszem z elementami kola\u017Cu. Z lewego g\xF3rnego i prawego dolnego rogu wyrasta ro' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Fuerteventura impressions", "date": "2017-09-18T15:38:00.000Z" };
var body = exports.body = "<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6235681/ello-optimized-4ab7553c.jpg\" alt=\"Zdjęcie centralnie przedstawia roślinę z rodziny kaktusowatych, rosnącą w szarej glebie na tle jasnej ściany.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6242404/ello-optimized-dbcead22.jpg\" alt=\"Zdjęcie przedstawia szkic wykonany tuszem z elementami kolażu. Z lewego górnego i prawego dolnego rogu wyrasta ro\" /></p>\n";
var raw = exports.raw = "\n![Zdjęcie centralnie przedstawia roślinę z rodziny kaktusowatych, rosnącą w szarej glebie na tle jasnej ściany.](https://assets0.ello.co/uploads/asset/attachment/6235681/ello-optimized-4ab7553c.jpg)\n![Zdjęcie przedstawia szkic wykonany tuszem z elementami kolażu. Z lewego górnego i prawego dolnego rogu wyrasta ro](https://assets2.ello.co/uploads/asset/attachment/6242404/ello-optimized-dbcead22.jpg)\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 118 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 118;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ParrotLayout.tsx": 120,
	"./default.tsx": 204
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
webpackContext.id = 119;

/***/ }),
/* 120 */
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
var react_router_dom_1 = __webpack_require__(2);
var withStyles_1 = __webpack_require__(5);
var react_disqus_comments_1 = __webpack_require__(164);
var models_1 = __webpack_require__(9);
var TopBar_1 = __webpack_require__(166);
var Crumbs_1 = __webpack_require__(186);
var Tags_1 = __webpack_require__(72);
var Footer_1 = __webpack_require__(191);
var Logo_1 = __webpack_require__(71);
var Icon_1 = __webpack_require__(24);
var SideMenu_1 = __webpack_require__(194);
var Jumbotron_1 = __webpack_require__(198);
var s = __webpack_require__(201);
var image = __webpack_require__(203);
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
        document.title = this.props.page.title + " | SztukaUniwersalna.PL";
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
        return React.createElement("div", { id: s.all }, React.createElement("div", { className: s.header }, React.createElement(TopBar_1.default, { website: website, page: page, onMenuClick: this.showMenu })), React.createElement("div", { className: s.main }, jumbotronFor(website, page), React.createElement("main", null, maybeRenderTitle(website, page), React.createElement(Body, { website: website, page: page }))), maybeRenderComments(page), React.createElement("div", { className: s.footer + " contrast" }, React.createElement(Footer_1.default, { website: website, page: page }), React.createElement("div", { className: s.bottom }, React.createElement("div", { className: s.logo }, React.createElement(Logo_1.default, { variant: 'full' })))), React.createElement("div", { className: s.sideMenu + " " + this.state.sideMenuClassName, onClick: this.hideMenu }, React.createElement(SideMenu_1.default, { visible: this.state.sideMenuClassName === s.visible, onCloseRequested: function onCloseRequested() {
                return _this.hideMenu();
            }, onClosed: function onClosed() {
                return _this.disableMenu();
            }, currentUrl: page.url }, website.menu.map(function (entry) {
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
        return React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'center', src: image }, React.createElement("div", { className: s.indexJumbo }, React.createElement("h2", null, "uniwer\u2022sal\u2022ny; -na"), React.createElement("ol", null, React.createElement("li", null, "\xABobejmuj\u0105cy ca\u0142o\u015B\u0107, dotycz\u0105cy wszystkiego lub wszystkich\xBB"), React.createElement("li", null, "\xABmaj\u0105cy wszechstronne zastosowanie\xBB"), React.createElement("li", null, "\xABmaj\u0105cy r\xF3\u017Cne umiej\u0119tno\u015Bci\xBB"))));
    }
    if (website.menuContains(page)) {
        return React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' }, React.createElement("div", { className: s.menuEntryJumbo }, React.createElement("h2", null, React.createElement(Icon_1.default, { name: website.getMenuEntry(page).icon }), React.createElement(react_router_dom_1.Link, { to: page.url }, page.title)), React.createElement(Crumbs_1.default, { responsive: true, website: website, page: page })));
    }
    if (page instanceof models_1.Category) {
        return React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' }, React.createElement("div", { className: s.categoryJumbo }, React.createElement("h2", null, React.createElement(react_router_dom_1.Link, { to: page.url }, page.title)), React.createElement(Crumbs_1.default, { responsive: true, website: website, page: page })));
    }
    if (page instanceof models_1.Tag) {
        return React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' }, React.createElement("div", { className: s.tagJumbo }, React.createElement("h2", null, React.createElement(react_router_dom_1.Link, { to: page.url }, page.originalTitle)), React.createElement(Crumbs_1.default, { responsive: true, website: website, page: page })));
    }
    return React.createElement(Jumbotron_1.default, { align: 'bottom' }, React.createElement(Crumbs_1.default, { website: website, page: page }));
}
function maybeRenderTitle(website, page) {
    if (page.url === '/' || page instanceof models_1.Category || page instanceof models_1.Tag) {
        return null;
    }
    return React.createElement("div", null, React.createElement("h1", null, React.createElement(react_router_dom_1.Link, { to: page.url }, page.title)), React.createElement(Tags_1.default, { website: website, page: page }));
}
function maybeRenderComments(page) {
    if (page.url === '/' || page instanceof models_1.Category || page instanceof models_1.Tag) {
        return null;
    }
    return React.createElement("div", { className: s.comments }, React.createElement(react_disqus_comments_1.default, { shortname: 'sztukauniwersalna', identifier: page.title, title: page.title, url: "http://sztukauniwersalna.pl" + page.url }));
}
exports.default = withStyles_1.default(s)(ParrotLayout);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
module.exports = __webpack_require__(6).Object.getPrototypeOf;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(58);
var $getPrototypeOf = __webpack_require__(59);

__webpack_require__(124)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(15);
var core = __webpack_require__(6);
var fails = __webpack_require__(21);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(128);

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
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(63);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(46);
module.exports = __webpack_require__(47).f('iterator');


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(39);
var defined = __webpack_require__(34);
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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(41);
var descriptor = __webpack_require__(27);
var setToStringTag = __webpack_require__(45);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(17);
var getKeys = __webpack_require__(42);

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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(43);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(139);
var toAbsoluteIndex = __webpack_require__(140);
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(39);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(39);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(11).document;
module.exports = document && document.documentElement;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(143);
var step = __webpack_require__(144);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(64)(Array, 'Array', function (iterated, kind) {
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
/* 143 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(11);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(65);
var META = __webpack_require__(148).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(36);
var setToStringTag = __webpack_require__(45);
var uid = __webpack_require__(26);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(47);
var wksDefine = __webpack_require__(48);
var enumKeys = __webpack_require__(149);
var isArray = __webpack_require__(150);
var anObject = __webpack_require__(17);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(37);
var createDesc = __webpack_require__(27);
var _create = __webpack_require__(41);
var gOPNExt = __webpack_require__(151);
var $GOPD = __webpack_require__(69);
var $DP = __webpack_require__(13);
var $keys = __webpack_require__(42);
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
  __webpack_require__(68).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(49).f = $propertyIsEnumerable;
  __webpack_require__(67).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(40)) {
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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(26)('meta');
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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(42);
var gOPS = __webpack_require__(67);
var pIE = __webpack_require__(49);
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
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(43);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(68).f;
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
/* 152 */
/***/ (function(module, exports) {



/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(156);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(160);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(63);

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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(157), __esModule: true };

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(158);
module.exports = __webpack_require__(6).Object.setPrototypeOf;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(15);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(159).set });


/***/ }),
/* 159 */
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
        set = __webpack_require__(60)(Function.call, __webpack_require__(69).f(Object.prototype, '__proto__').set, 2);
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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(161), __esModule: true };

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(162);
var $Object = __webpack_require__(6).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(15);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(41) });


/***/ }),
/* 163 */
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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(165);

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(25);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DISQUS_CONFIG = ['shortname', 'identifier', 'title', 'url', 'category_id', 'onNewComment'];
var __disqusAdded = false;

function copyProps(context, props) {
    var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    Object.keys(props).forEach(function (prop) {
        context[prefix + prop] = props[prop];
    });

    if (typeof props.onNewComment === 'function') {
        context[prefix + 'config'] = function config() {
            this.callbacks.onNewComment = [function handleNewComment(comment) {
                props.onNewComment(comment);
            }];
        };
    }
}

var DisqusThread = function (_React$Component) {
    _inherits(DisqusThread, _React$Component);

    function DisqusThread() {
        _classCallCheck(this, DisqusThread);

        return _possibleConstructorReturn(this, (DisqusThread.__proto__ || Object.getPrototypeOf(DisqusThread)).apply(this, arguments));
    }

    _createClass(DisqusThread, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadDisqus();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.loadDisqus();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.identifier !== this.props.identifier;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = Object.keys(this.props).reduce(function (memo, key) {
                return DISQUS_CONFIG.some(function (config) {
                    return config === key;
                }) ? memo : _extends({}, memo, _defineProperty({}, key, _this2.props[key]));
            }, {});

            return _react2.default.createElement(
                'div',
                props,
                _react2.default.createElement('div', { id: 'disqus_thread' })
            );
        }
    }, {
        key: 'addDisqusScript',
        value: function addDisqusScript() {
            if (__disqusAdded) {
                return;
            }

            var child = this.disqus = document.createElement('script');
            var parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

            child.async = true;
            child.type = 'text/javascript';
            child.src = '//' + this.props.shortname + '.disqus.com/embed.js';

            parent.appendChild(child);
            __disqusAdded = true;
        }
    }, {
        key: 'loadDisqus',
        value: function loadDisqus() {
            var _this3 = this;

            var props = {};

            // Extract Disqus props that were supplied to this component
            DISQUS_CONFIG.forEach(function (prop) {
                if (!!_this3.props[prop]) {
                    props[prop] = _this3.props[prop];
                }
            });

            // Always set URL
            if (!props.url || !props.url.length) {
                props.url = window.location.href;
            }

            // If Disqus has already been added, reset it
            if (typeof DISQUS !== 'undefined') {
                DISQUS.reset({
                    reload: true,
                    config: function config() {
                        copyProps(this.page, props);

                        // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
                        this.page.url = this.page.url.replace(/#/, '') + '#!newthread';
                    }
                });
            } else {
                // Otherwise add Disqus to the page
                copyProps(window, props, 'disqus_');
                this.addDisqusScript();
            }
        }
    }]);

    return DisqusThread;
}(_react2.default.Component);

DisqusThread.displayName = 'DisqusThread';

DisqusThread.propTypes = {
    id: _propTypes2.default.string,

    /**
     * `shortname` tells the Disqus service your forum's shortname,
     * which is the unique identifier for your website as registered
     * on Disqus. If undefined , the Disqus embed will not load.
     */
    shortname: _propTypes2.default.string.isRequired,

    /**
     * `identifier` tells the Disqus service how to identify the
     * current page. When the Disqus embed is loaded, the identifier
     * is used to look up the correct thread. If disqus_identifier
     * is undefined, the page's URL will be used. The URL can be
     * unreliable, such as when renaming an article slug or changing
     * domains, so we recommend using your own unique way of
     * identifying a thread.
     */
    identifier: _propTypes2.default.string,

    /**
     * `title` tells the Disqus service the title of the current page.
     * This is used when creating the thread on Disqus for the first time.
     * If undefined, Disqus will use the <title> attribute of the page.
     * If that attribute could not be used, Disqus will use the URL of the page.
     */
    title: _propTypes2.default.string,

    /**
     * `url` tells the Disqus service the URL of the current page.
     * If undefined, Disqus will take the window.location.href.
     * This URL is used to look up or create a thread if disqus_identifier
     * is undefined. In addition, this URL is always saved when a thread is
     * being created so that Disqus knows what page a thread belongs to.
     */
    url: _propTypes2.default.string,

    /**
     * `category_id` tells the Disqus service the category to be used for
     * the current page. This is used when creating the thread on Disqus
     * for the first time.
     */
    category_id: _propTypes2.default.string,

    /**
     * `onNewComment` function accepts one parameter `comment` which is a
     * JavaScript object with comment `id` and `text`. This allows you to track
     * user comments and replies and run a script after a comment is posted.
     */
    onNewComment: _propTypes2.default.func
};

exports.default = DisqusThread;

/***/ }),
/* 166 */
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
var react_router_dom_1 = __webpack_require__(2);
var withStyles_1 = __webpack_require__(5);
var Button_1 = __webpack_require__(23);
var Icon_1 = __webpack_require__(24);
var Logo_1 = __webpack_require__(71);
__webpack_require__(183);
var s = __webpack_require__(184);
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(168);
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
/* 168 */
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
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(170), __esModule: true };

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(172);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(175);

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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(173), __esModule: true };

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(38);
module.exports = __webpack_require__(174);


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(70);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(22);
module.exports = __webpack_require__(6).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(176), __esModule: true };

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(38);
module.exports = __webpack_require__(177);


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var get = __webpack_require__(178);
module.exports = __webpack_require__(6).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(70);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(22);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(180);
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
/* 180 */
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
/* 181 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(182);
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
/* 182 */
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
/* 183 */
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
/* 184 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(185);
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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "._9GvZQciHwcx0fA1RIy9jK{box-sizing:border-box;width:100%;padding-left:5rem;padding-right:5rem;margin:0}@media only screen and (min-width:836px) and (max-width:1019px){._9GvZQciHwcx0fA1RIy9jK{width:764px;margin:0 auto}}@media only screen and (min-width:1020px){._9GvZQciHwcx0fA1RIy9jK{width:932px;margin:0 auto}}._9GvZQciHwcx0fA1RIy9jK{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:1rem;display:flex;align-items:center;justify-content:space-between;flex-direction:row}@media only screen and (min-width:836px) and (max-width:1019px){._9GvZQciHwcx0fA1RIy9jK{padding:3rem 2rem}}@media only screen and (min-width:1020px){._9GvZQciHwcx0fA1RIy9jK{padding:4rem 2rem}}._8j_9oxmtExoXRBB6gBsgo{display:flex}@media only screen and (min-width:836px) and (max-width:1019px){._8j_9oxmtExoXRBB6gBsgo{display:none}}@media only screen and (min-width:1020px){._8j_9oxmtExoXRBB6gBsgo{display:none}}._8j_9oxmtExoXRBB6gBsgo button{height:12rem!important}._8j_9oxmtExoXRBB6gBsgo i{font-size:7rem;line-height:12rem;color:rgba(51,51,51,.72)}._1_RdtpbeP8IZKulhyFhM4h{display:none}@media only screen and (min-width:1020px){._1_RdtpbeP8IZKulhyFhM4h{display:flex}}._3lS6zyfCEfCoZ_tpXM575-{padding-left:1rem;display:flex}@media only screen and (min-width:1020px){._3lS6zyfCEfCoZ_tpXM575-{display:none}}.GC_XS2PRkYjMmeyDNkMwq,._3Qps0IQRGaqd-BWSKzmw5z{display:none}._3Qps0IQRGaqd-BWSKzmw5z ul,:not(ol) ._3Qps0IQRGaqd-BWSKzmw5z ul,:not(ul) ._3Qps0IQRGaqd-BWSKzmw5z ul{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap;max-width:100%;margin:1rem 0}._3Qps0IQRGaqd-BWSKzmw5z ul li,:not(ol) ._3Qps0IQRGaqd-BWSKzmw5z ul li,:not(ul) ._3Qps0IQRGaqd-BWSKzmw5z ul li{margin:0;padding:0;display:flex;max-width:100%}._3Qps0IQRGaqd-BWSKzmw5z ul li:before,:not(ol) ._3Qps0IQRGaqd-BWSKzmw5z ul li:before,:not(ul) ._3Qps0IQRGaqd-BWSKzmw5z ul li:before{content:\"\";margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:left;vertical-align:inherit;width:auto;height:auto;position:static;opacity:1}._3Qps0IQRGaqd-BWSKzmw5z a:active,._3Qps0IQRGaqd-BWSKzmw5z a:hover{background:rgba(51,51,51,.05)}@media only screen and (min-width:836px) and (max-width:1019px){._3Qps0IQRGaqd-BWSKzmw5z{display:flex}}@media only screen and (min-width:1020px){._3Qps0IQRGaqd-BWSKzmw5z{display:flex}}", ""]);

// exports
exports.locals = {
	"topBar": "_9GvZQciHwcx0fA1RIy9jK",
	"hamburger": "_8j_9oxmtExoXRBB6gBsgo",
	"inlineLogo": "_1_RdtpbeP8IZKulhyFhM4h",
	"smallLogo": "_3lS6zyfCEfCoZ_tpXM575-",
	"title": "GC_XS2PRkYjMmeyDNkMwq",
	"topMenu": "_3Qps0IQRGaqd-BWSKzmw5z"
};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(2);
var withStyles_1 = __webpack_require__(5);
var s = __webpack_require__(187);
function Crumbs(_a) {
    var website = _a.website,
        page = _a.page,
        _b = _a.responsive,
        responsive = _b === void 0 ? false : _b;
    return React.createElement("div", { className: s.crumbs + " " + (responsive ? s.responsive : '') }, page.getCrumbs(website).map(function (crumbs, key) {
        return React.createElement("ul", { key: key }, crumbs.map(function (page) {
            return React.createElement("li", { key: page.url }, React.createElement(react_router_dom_1.Link, { to: page.url }, page.title));
        }));
    }));
}
exports.Crumbs = Crumbs;
exports.default = withStyles_1.default(s)(Crumbs);

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(188);
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
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "html{font-size:4px}._8O08U0I-tH-vGKomHew79{display:flex}._8O08U0I-tH-vGKomHew79 ul,:not(ol) ._8O08U0I-tH-vGKomHew79 ul,:not(ul) ._8O08U0I-tH-vGKomHew79 ul{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap;max-width:100%;padding:3rem 0;flex-direction:column}._8O08U0I-tH-vGKomHew79 ul li,:not(ol) ._8O08U0I-tH-vGKomHew79 ul li,:not(ul) ._8O08U0I-tH-vGKomHew79 ul li{margin:0;padding:0;display:flex;max-width:100%}._8O08U0I-tH-vGKomHew79 ul li:before,:not(ol) ._8O08U0I-tH-vGKomHew79 ul li:before,:not(ul) ._8O08U0I-tH-vGKomHew79 ul li:before{content:\"\";margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:left;vertical-align:inherit;width:auto;height:auto;position:static;opacity:1}@media only screen and (min-width:836px) and (max-width:1019px){._8O08U0I-tH-vGKomHew79 ul,:not(ol) ._8O08U0I-tH-vGKomHew79 ul,:not(ul) ._8O08U0I-tH-vGKomHew79 ul{padding:1rem 0}}@media only screen and (min-width:1020px){._8O08U0I-tH-vGKomHew79 ul,:not(ol) ._8O08U0I-tH-vGKomHew79 ul,:not(ul) ._8O08U0I-tH-vGKomHew79 ul{padding:2rem 0}}@media only screen and (min-width:836px) and (max-width:1019px){._8O08U0I-tH-vGKomHew79 ul,:not(ol) ._8O08U0I-tH-vGKomHew79 ul,:not(ul) ._8O08U0I-tH-vGKomHew79 ul{flex-direction:row}}@media only screen and (min-width:1020px){._8O08U0I-tH-vGKomHew79 ul,:not(ol) ._8O08U0I-tH-vGKomHew79 ul,:not(ul) ._8O08U0I-tH-vGKomHew79 ul{flex-direction:row}}._8O08U0I-tH-vGKomHew79 li{font-family:Roboto Slab,serif;font-weight:300;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}._8O08U0I-tH-vGKomHew79 li:not(:first-child):before{content:\">\";padding:0 2rem}._8O08U0I-tH-vGKomHew79 a{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._8O08U0I-tH-vGKomHew79 a:link,._8O08U0I-tH-vGKomHew79 a:visited{text-decoration:none}._8O08U0I-tH-vGKomHew79 a:active,._8O08U0I-tH-vGKomHew79 a:hover{text-decoration:underline}._3ZpIFkV307fzUwAO6YMBl li:not(:first-child),._3ZpIFkV307fzUwAO6YMBl li:not(:first-child):before{display:none}@media only screen and (min-width:836px) and (max-width:1019px){._3ZpIFkV307fzUwAO6YMBl li:not(:first-child),._3ZpIFkV307fzUwAO6YMBl li:not(:first-child):before{display:inline-block}}@media only screen and (min-width:1020px){._3ZpIFkV307fzUwAO6YMBl li:not(:first-child),._3ZpIFkV307fzUwAO6YMBl li:not(:first-child):before{display:inline-block}}", ""]);

// exports
exports.locals = {
	"crumbs": "_8O08U0I-tH-vGKomHew79",
	"responsive": "_3ZpIFkV307fzUwAO6YMBl"
};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(190);
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
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "ul.Jm7hLSEUTCdk-r0EolMvb{max-height:20rem;overflow:hidden;text-overflow:ellipsis}:not(ol) ul.Jm7hLSEUTCdk-r0EolMvb,:not(ul) ul.Jm7hLSEUTCdk-r0EolMvb,ul.Jm7hLSEUTCdk-r0EolMvb{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap;max-width:100%;margin:-5rem 0 5rem -3rem}:not(ol) ul.Jm7hLSEUTCdk-r0EolMvb li,:not(ul) ul.Jm7hLSEUTCdk-r0EolMvb li,ul.Jm7hLSEUTCdk-r0EolMvb li{margin:0;padding:0;display:flex;max-width:100%}:not(ol) ul.Jm7hLSEUTCdk-r0EolMvb li:before,:not(ul) ul.Jm7hLSEUTCdk-r0EolMvb li:before,ul.Jm7hLSEUTCdk-r0EolMvb li:before{content:\"\";margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:left;vertical-align:inherit;width:auto;height:auto;position:static;opacity:1}@media only screen and (min-width:836px) and (max-width:1019px){:not(ol) ul.Jm7hLSEUTCdk-r0EolMvb,:not(ul) ul.Jm7hLSEUTCdk-r0EolMvb,ul.Jm7hLSEUTCdk-r0EolMvb{margin:-7rem 0 7rem -3rem}}@media only screen and (min-width:1020px){:not(ol) ul.Jm7hLSEUTCdk-r0EolMvb,:not(ul) ul.Jm7hLSEUTCdk-r0EolMvb,ul.Jm7hLSEUTCdk-r0EolMvb{margin:-9rem 0 9rem -3rem}}", ""]);

// exports
exports.locals = {
	"tags": "Jm7hLSEUTCdk-r0EolMvb"
};

/***/ }),
/* 191 */
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
var react_router_dom_1 = __webpack_require__(2);
var withStyles_1 = __webpack_require__(5);
var Button_1 = __webpack_require__(23);
var Icon_1 = __webpack_require__(24);
var s = __webpack_require__(192);
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
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "html{font-size:4px}.zEOVlWv598Dn6pfojqIPY{box-sizing:border-box;width:100%;padding-left:5rem;padding-right:5rem;margin:0}@media only screen and (min-width:836px) and (max-width:1019px){.zEOVlWv598Dn6pfojqIPY{width:764px;margin:0 auto}}@media only screen and (min-width:1020px){.zEOVlWv598Dn6pfojqIPY{width:932px;margin:0 auto}}.zEOVlWv598Dn6pfojqIPY{position:relative;padding:16rem 1rem}@media only screen and (min-width:568px) and (max-width:835px){.zEOVlWv598Dn6pfojqIPY{padding:18rem 1rem 10rem}}@media only screen and (min-width:836px) and (max-width:1019px){.zEOVlWv598Dn6pfojqIPY{padding:18rem 1rem 16rem}}@media only screen and (min-width:1020px){.zEOVlWv598Dn6pfojqIPY{padding:14rem 1rem 12rem}}._1tcYdbEdRr8IhUVims7gLo{position:absolute;top:-7rem;left:5rem}@media only screen and (min-width:568px) and (max-width:835px){._1tcYdbEdRr8IhUVims7gLo{left:4rem}}@media only screen and (min-width:836px) and (max-width:1019px){._1tcYdbEdRr8IhUVims7gLo{left:4rem}}@media only screen and (min-width:1020px){._1tcYdbEdRr8IhUVims7gLo{left:4rem}}._1tcYdbEdRr8IhUVims7gLo,:not(ol) ._1tcYdbEdRr8IhUVims7gLo,:not(ul) ._1tcYdbEdRr8IhUVims7gLo{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap;max-width:100%}._1tcYdbEdRr8IhUVims7gLo li,:not(ol) ._1tcYdbEdRr8IhUVims7gLo li,:not(ul) ._1tcYdbEdRr8IhUVims7gLo li{margin:0;padding:0;display:flex;max-width:100%}._1tcYdbEdRr8IhUVims7gLo li:before,:not(ol) ._1tcYdbEdRr8IhUVims7gLo li:before,:not(ul) ._1tcYdbEdRr8IhUVims7gLo li:before{content:\"\";margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:left;vertical-align:inherit;width:auto;height:auto;position:static;opacity:1}._1tcYdbEdRr8IhUVims7gLo li,:not(ol) ._1tcYdbEdRr8IhUVims7gLo li,:not(ul) ._1tcYdbEdRr8IhUVims7gLo li{margin-right:5rem}._1tcYdbEdRr8IhUVims7gLo:last-child,:not(ol) ._1tcYdbEdRr8IhUVims7gLo:last-child,:not(ul) ._1tcYdbEdRr8IhUVims7gLo:last-child{margin-right:0}._3-II8FeR_WBUDVcJykDz1y,:not(ol) ._3-II8FeR_WBUDVcJykDz1y,:not(ul) ._3-II8FeR_WBUDVcJykDz1y{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap;max-width:100%;flex-direction:column}._3-II8FeR_WBUDVcJykDz1y li,:not(ol) ._3-II8FeR_WBUDVcJykDz1y li,:not(ul) ._3-II8FeR_WBUDVcJykDz1y li{margin:0;padding:0;display:flex;max-width:100%}._3-II8FeR_WBUDVcJykDz1y li:before,:not(ol) ._3-II8FeR_WBUDVcJykDz1y li:before,:not(ul) ._3-II8FeR_WBUDVcJykDz1y li:before{content:\"\";margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:left;vertical-align:inherit;width:auto;height:auto;position:static;opacity:1}@media only screen and (min-width:568px) and (max-width:835px){._3-II8FeR_WBUDVcJykDz1y,:not(ol) ._3-II8FeR_WBUDVcJykDz1y,:not(ul) ._3-II8FeR_WBUDVcJykDz1y{flex-direction:row;flex-wrap:wrap}}@media only screen and (min-width:836px) and (max-width:1019px){._3-II8FeR_WBUDVcJykDz1y,:not(ol) ._3-II8FeR_WBUDVcJykDz1y,:not(ul) ._3-II8FeR_WBUDVcJykDz1y{flex-direction:row;flex-wrap:wrap}}@media only screen and (min-width:1020px){._3-II8FeR_WBUDVcJykDz1y,:not(ol) ._3-II8FeR_WBUDVcJykDz1y,:not(ul) ._3-II8FeR_WBUDVcJykDz1y{flex-direction:row;flex-wrap:wrap}}@media only screen and (min-width:568px) and (max-width:835px){._3-II8FeR_WBUDVcJykDz1y,:not(ol) ._3-II8FeR_WBUDVcJykDz1y,:not(ul) ._3-II8FeR_WBUDVcJykDz1y{max-width:160rem}}@media only screen and (min-width:836px) and (max-width:1019px){._3-II8FeR_WBUDVcJykDz1y,:not(ol) ._3-II8FeR_WBUDVcJykDz1y,:not(ul) ._3-II8FeR_WBUDVcJykDz1y{max-width:160rem}}._3-II8FeR_WBUDVcJykDz1y a,._3-II8FeR_WBUDVcJykDz1y button,:not(ol) ._3-II8FeR_WBUDVcJykDz1y a,:not(ol) ._3-II8FeR_WBUDVcJykDz1y button,:not(ul) ._3-II8FeR_WBUDVcJykDz1y a,:not(ul) ._3-II8FeR_WBUDVcJykDz1y button{margin:1rem}._3CzvU_f8H9HvMVr7Kmpv-L{font-family:Roboto Slab,serif;font-weight:400;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem;padding:0 4rem;margin:8rem 0 0}@media only screen and (min-width:568px) and (max-width:835px){._3CzvU_f8H9HvMVr7Kmpv-L{margin:11rem 0 0}}@media only screen and (min-width:836px) and (max-width:1019px){._3CzvU_f8H9HvMVr7Kmpv-L{margin:16rem 0 0}}@media only screen and (min-width:1020px){._3CzvU_f8H9HvMVr7Kmpv-L{margin:16rem 0 0}}._3_GbgrXGcSQrMbIA4xPqws,._3yS6VCRRbHG5QxkqB7rOA5,.LjjrNKL-p2z-GnL0K3pEj{white-space:nowrap;display:block}@media only screen and (min-width:568px) and (max-width:835px){._3_GbgrXGcSQrMbIA4xPqws,._3yS6VCRRbHG5QxkqB7rOA5,.LjjrNKL-p2z-GnL0K3pEj{display:inline-block}._3_GbgrXGcSQrMbIA4xPqws:before,._3yS6VCRRbHG5QxkqB7rOA5:before,.LjjrNKL-p2z-GnL0K3pEj:before{content:\"|\";display:inline-block;padding:0 2rem}}@media only screen and (min-width:836px) and (max-width:1019px){._3_GbgrXGcSQrMbIA4xPqws,._3yS6VCRRbHG5QxkqB7rOA5,.LjjrNKL-p2z-GnL0K3pEj{display:inline-block}._3_GbgrXGcSQrMbIA4xPqws:before,._3yS6VCRRbHG5QxkqB7rOA5:before,.LjjrNKL-p2z-GnL0K3pEj:before{content:\"|\";display:inline-block;padding:0 2rem}}@media only screen and (min-width:1020px){._3_GbgrXGcSQrMbIA4xPqws,._3yS6VCRRbHG5QxkqB7rOA5,.LjjrNKL-p2z-GnL0K3pEj{display:inline-block}._3_GbgrXGcSQrMbIA4xPqws:before,._3yS6VCRRbHG5QxkqB7rOA5:before,.LjjrNKL-p2z-GnL0K3pEj:before{content:\"|\";display:inline-block;padding:0 2rem}}@media only screen and (min-width:836px) and (max-width:1019px){._3_GbgrXGcSQrMbIA4xPqws:before,._3yS6VCRRbHG5QxkqB7rOA5:before,.LjjrNKL-p2z-GnL0K3pEj:before{padding:0 4rem}}@media only screen and (min-width:1020px){._3_GbgrXGcSQrMbIA4xPqws:before,._3yS6VCRRbHG5QxkqB7rOA5:before,.LjjrNKL-p2z-GnL0K3pEj:before{padding:0 4rem}}._3_GbgrXGcSQrMbIA4xPqws:before{display:none}@media only screen and (min-width:568px) and (max-width:835px){._3_GbgrXGcSQrMbIA4xPqws{display:block}}@media only screen and (min-width:568px) and (max-width:835px){._3yS6VCRRbHG5QxkqB7rOA5:before{display:none}}._2yRa-eNLz1OWff8311PHeO{position:absolute;bottom:5rem;right:4rem}", ""]);

// exports
exports.locals = {
	"footer": "zEOVlWv598Dn6pfojqIPY",
	"socialButtons": "_1tcYdbEdRr8IhUVims7gLo",
	"categories": "_3-II8FeR_WBUDVcJykDz1y",
	"bottomParagraph": "_3CzvU_f8H9HvMVr7Kmpv-L",
	"copyright": "_3_GbgrXGcSQrMbIA4xPqws",
	"indexLink": "_3yS6VCRRbHG5QxkqB7rOA5",
	"sitemapLink": "LjjrNKL-p2z-GnL0K3pEj",
	"scrollUpButton": "_2yRa-eNLz1OWff8311PHeO"
};

/***/ }),
/* 194 */
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
var react_router_dom_1 = __webpack_require__(2);
var withStyles_1 = __webpack_require__(5);
var Button_1 = __webpack_require__(23);
var Icon_1 = __webpack_require__(24);
var s = __webpack_require__(195);
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
            } }, React.createElement("div", { className: s.header }, React.createElement("div", { className: s.closeButton }, React.createElement(Button_1.default, { onClick: onCloseRequested }, React.createElement(Icon_1.default, { name: 'close' })))), React.createElement("ul", { className: s.content }, this.renderItems()));
    };
    SideMenu.prototype.renderItems = function () {
        var _this = this;
        var children = this.props.children;
        if (!children) {
            return null;
        }
        return [].concat(children).map(function (item) {
            return _this.renderItem(item);
        });
    };
    SideMenu.prototype.renderItem = function (item) {
        var _a = this.props,
            currentUrl = _a.currentUrl,
            onCloseRequested = _a.onCloseRequested;
        if (currentUrl === item.props.url) {
            // just scroll to top and close the menu for already selected item
            return React.createElement("li", { key: item.props.url, className: s.current }, React.createElement("a", { onClick: function onClick() {
                    window.scrollTo(0, 0);onCloseRequested();
                } }, React.createElement("span", { className: s.itemIcon }, React.createElement(Icon_1.default, { name: item.props.icon })), React.createElement("span", { className: s.itemTitle }, item.props.title)));
        }
        return React.createElement("li", { key: item.props.url }, React.createElement(react_router_dom_1.Link, { to: item.props.url }, React.createElement("span", { className: s.itemIcon }, React.createElement(Icon_1.default, { name: item.props.icon })), React.createElement("span", { className: s.itemTitle }, item.props.title)));
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
exports.default = withStyles_1.default(s)(SideMenu);

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(196);
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
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "html{font-size:4px}._2Ugt_EDi4ibsg-a3Rca84Z{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:0;transition:left .2s ease-out;left:-100%;width:calc(100% - 14rem);max-width:80rem;height:100vh;overflow:hidden;background:#f1f1f1;box-shadow:0 0 4px #000;display:flex;flex-direction:column}._2Ugt_EDi4ibsg-a3Rca84Z._3BVp9hmtU66aFy0eRB0LRi{left:0}._9c2XlVlxjlaFdYbrVzEN_{height:63rem;max-height:63rem;min-height:14rem;background:url(" + __webpack_require__(197) + ") 50% no-repeat;background-size:cover}.lKobN5IQhVnwdxNfbhy0z,._9c2XlVlxjlaFdYbrVzEN_{display:flex;flex-direction:column}.lKobN5IQhVnwdxNfbhy0z{flex-shrink:0;margin:0;padding:2rem 0;align-items:stretch}.lKobN5IQhVnwdxNfbhy0z li{margin:0;padding:0;display:block}.lKobN5IQhVnwdxNfbhy0z li:before{display:none}.lKobN5IQhVnwdxNfbhy0z a{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;margin:0;padding:0 4rem;display:flex;flex-direction:row;align-items:center;text-decoration:none}.lKobN5IQhVnwdxNfbhy0z:not(:hover) ._3K6vtU4f7c_fbS6I6E8U3a a,.lKobN5IQhVnwdxNfbhy0z a:active,.lKobN5IQhVnwdxNfbhy0z a:hover{background-color:#fff}._3PqaGCTzDFRSKPe9hXcPz0{margin-right:8rem;width:6rem;flex-shrink:0;flex-grow:0;align-self:stretch;color:rgba(51,51,51,.6);display:flex;flex-direction:row;align-items:center;justify-content:center}.oZE9lnjTMHJjd9MGOUMAc{flex-shrink:0;flex-grow:1;color:rgba(51,51,51,.9);font-family:Roboto Slab,serif;font-weight:400;letter-spacing:-.003rem;font-size:16px;line-height:6rem;padding-top:3.56rem;padding-bottom:3.44rem;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media only screen and (min-width:1020px){.oZE9lnjTMHJjd9MGOUMAc{font-size:20px;line-height:7rem;padding-top:3.7rem;padding-bottom:4.3rem}}._3MKYraCdU4zpGIPVBs8M-r{align-self:flex-end;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:#f1f1f1}._3MKYraCdU4zpGIPVBs8M-r i{font-size:6rem;line-height:12.5rem;color:rgba(51,51,51,.72)}._3MKYraCdU4zpGIPVBs8M-r,._3MKYraCdU4zpGIPVBs8M-r button{height:14rem;width:14rem;text-align:center}", ""]);

// exports
exports.locals = {
	"panel": "_2Ugt_EDi4ibsg-a3Rca84Z",
	"visible": "_3BVp9hmtU66aFy0eRB0LRi",
	"header": "_9c2XlVlxjlaFdYbrVzEN_",
	"content": "lKobN5IQhVnwdxNfbhy0z",
	"current": "_3K6vtU4f7c_fbS6I6E8U3a",
	"itemIcon": "_3PqaGCTzDFRSKPe9hXcPz0",
	"itemTitle": "oZE9lnjTMHJjd9MGOUMAc",
	"closeButton": "_3MKYraCdU4zpGIPVBs8M-r"
};

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var withStyles_1 = __webpack_require__(5);
var s = __webpack_require__(199);
function Jumbotron(_a) {
    var children = _a.children,
        src = _a.src,
        _b = _a.fullscreen,
        fullscreen = _b === void 0 ? false : _b,
        _c = _a.align,
        align = _c === void 0 ? 'center' : _c;
    return React.createElement("div", { className: s.container + " " + (fullscreen ? s.fullscreen : '') + " " + s[align] }, React.createElement("div", { className: s.jumbo + " contrast compact non-responsive strong" }, React.createElement("div", { className: s.text + " " + (align === 'center' ? 'centered' : '') }, children), src ? renderImage(src) : null));
}
exports.Jumbotron = Jumbotron;
var renderImage = function renderImage(src) {
    return React.createElement("div", { className: s.image, style: { backgroundImage: "url('" + src + "')" } });
};
exports.default = withStyles_1.default(s)(Jumbotron);

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(200);
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
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "._1XJ1WI9LAcUqfV6wiG4fux{box-sizing:border-box;width:100%;padding-left:5rem;padding-right:5rem;margin:0}@media only screen and (min-width:836px) and (max-width:1019px){._1XJ1WI9LAcUqfV6wiG4fux{width:764px;margin:0 auto}}@media only screen and (min-width:1020px){._1XJ1WI9LAcUqfV6wiG4fux{width:932px;margin:0 auto}}._19DcRKm8SoIEQfZGyr_4Lg{background-color:#eb3e5c;box-sizing:border-box;display:flex;align-items:stretch;justify-content:stretch;height:44rem;max-height:calc(100vh - 14rem);transition:height .2s ease-out,min-height .2s ease-out}@media only screen and (min-width:568px) and (max-width:835px){._19DcRKm8SoIEQfZGyr_4Lg{height:90rem}}@media only screen and (min-width:836px) and (max-width:1019px){._19DcRKm8SoIEQfZGyr_4Lg{height:33rem}}@media only screen and (min-width:1020px){._19DcRKm8SoIEQfZGyr_4Lg{height:44rem}}._3KPquxlxshZnqPQwIhOQ92{height:calc(100vh - 14rem)}@media only screen and (min-width:568px) and (max-width:835px){._3KPquxlxshZnqPQwIhOQ92{height:90rem;max-height:calc(100vh - 14rem)}}@media only screen and (min-width:836px) and (max-width:1019px){._3KPquxlxshZnqPQwIhOQ92{height:54rem}}@media only screen and (min-width:1020px){._3KPquxlxshZnqPQwIhOQ92{height:66rem}}._1XJ1WI9LAcUqfV6wiG4fux{display:flex;align-items:stretch;justify-content:space-between}.Tawju18UEtUe_Ppny8vZ6 ._1XJ1WI9LAcUqfV6wiG4fux,._3KPquxlxshZnqPQwIhOQ92._1XWO7VlzJ9Bp8wEl4u1JoO ._1XJ1WI9LAcUqfV6wiG4fux{justify-content:center}@media only screen and (min-width:836px) and (max-width:1019px){.Tawju18UEtUe_Ppny8vZ6 ._1XJ1WI9LAcUqfV6wiG4fux,._3KPquxlxshZnqPQwIhOQ92._1XWO7VlzJ9Bp8wEl4u1JoO ._1XJ1WI9LAcUqfV6wiG4fux{justify-content:space-between}}@media only screen and (min-width:1020px){.Tawju18UEtUe_Ppny8vZ6 ._1XJ1WI9LAcUqfV6wiG4fux,._3KPquxlxshZnqPQwIhOQ92._1XWO7VlzJ9Bp8wEl4u1JoO ._1XJ1WI9LAcUqfV6wiG4fux{justify-content:space-between}}._3i4R_AZrmJevJh5n-_4G6A{display:inline-flex;flex-direction:column;padding:1rem 0;max-width:100%}.Tawju18UEtUe_Ppny8vZ6 ._3i4R_AZrmJevJh5n-_4G6A,._3KPquxlxshZnqPQwIhOQ92._1XWO7VlzJ9Bp8wEl4u1JoO ._3i4R_AZrmJevJh5n-_4G6A{justify-content:center;max-width:70rem;padding-left:0;padding-right:0}@media only screen and (min-width:568px) and (max-width:835px){.Tawju18UEtUe_Ppny8vZ6 ._3i4R_AZrmJevJh5n-_4G6A,._3KPquxlxshZnqPQwIhOQ92._1XWO7VlzJ9Bp8wEl4u1JoO ._3i4R_AZrmJevJh5n-_4G6A{max-width:128rem;padding-right:6rem}}@media only screen and (min-width:836px) and (max-width:1019px){.Tawju18UEtUe_Ppny8vZ6 ._3i4R_AZrmJevJh5n-_4G6A{max-width:none;padding-left:7rem;padding-right:0}}@media only screen and (min-width:1020px){.Tawju18UEtUe_Ppny8vZ6 ._3i4R_AZrmJevJh5n-_4G6A{max-width:none;padding-left:14rem;padding-right:6rem}}._1XWO7VlzJ9Bp8wEl4u1JoO ._3i4R_AZrmJevJh5n-_4G6A{justify-content:flex-end}@media only screen and (min-width:836px) and (max-width:1019px){._3KPquxlxshZnqPQwIhOQ92._1XWO7VlzJ9Bp8wEl4u1JoO ._3i4R_AZrmJevJh5n-_4G6A{max-width:none;justify-content:flex-end}}@media only screen and (min-width:1020px){._3KPquxlxshZnqPQwIhOQ92._1XWO7VlzJ9Bp8wEl4u1JoO ._3i4R_AZrmJevJh5n-_4G6A{max-width:none;justify-content:flex-end}}._2Cmus0RzZ7V-lVuoTkXYYg{background-size:cover;height:100%;transition:width .2s ease-out;display:none}@media only screen and (min-width:836px) and (max-width:1019px){._2Cmus0RzZ7V-lVuoTkXYYg{width:54rem}}@media only screen and (min-width:1020px){._2Cmus0RzZ7V-lVuoTkXYYg{width:66rem}}@media only screen and (min-width:836px) and (max-width:1019px){._2Cmus0RzZ7V-lVuoTkXYYg{display:flex}}@media only screen and (min-width:1020px){._2Cmus0RzZ7V-lVuoTkXYYg{display:flex}}", ""]);

// exports
exports.locals = {
	"jumbo": "_1XJ1WI9LAcUqfV6wiG4fux",
	"container": "_19DcRKm8SoIEQfZGyr_4Lg",
	"fullscreen": "_3KPquxlxshZnqPQwIhOQ92",
	"center": "Tawju18UEtUe_Ppny8vZ6",
	"bottom": "_1XWO7VlzJ9Bp8wEl4u1JoO",
	"text": "_3i4R_AZrmJevJh5n-_4G6A",
	"image": "_2Cmus0RzZ7V-lVuoTkXYYg"
};

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(202);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./ParrotLayout.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./ParrotLayout.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";._2-xd1EkoMi33UyTy5LqtoX img{display:block;width:100vw;margin-left:calc(50% - 50vw)}._3VKGg8LZYY8MQeQDXVQTUm ._2ixjhdFdn61s1lP4JCPOLH,._1WTN4YPiZiX_lqnC1xMGU7>div,._2-xd1EkoMi33UyTy5LqtoX main{box-sizing:border-box;width:100%;padding-left:5rem;padding-right:5rem;margin:0}@media only screen and (min-width:836px) and (max-width:1019px){._3VKGg8LZYY8MQeQDXVQTUm ._2ixjhdFdn61s1lP4JCPOLH,._1WTN4YPiZiX_lqnC1xMGU7>div,._2-xd1EkoMi33UyTy5LqtoX main{width:764px;margin:0 auto}}@media only screen and (min-width:1020px){._3VKGg8LZYY8MQeQDXVQTUm ._2ixjhdFdn61s1lP4JCPOLH,._1WTN4YPiZiX_lqnC1xMGU7>div,._2-xd1EkoMi33UyTy5LqtoX main{width:932px;margin:0 auto}}html{font-size:4px}h1{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.14rem;font-size:26px;line-height:9rem;padding-top:2.225rem;padding-bottom:6.775rem}.contrast h1{color:hsla(0,0%,100%,.9)}@media only screen and (min-width:1020px){h1{font-size:32px;line-height:11rem;padding-top:2.7rem;padding-bottom:8.3rem}}.compact h1{margin:2rem 0 -8rem;font-family:Andada,serif;font-weight:400;letter-spacing:.14rem;font-size:26px;line-height:9rem;padding-top:2.225rem;padding-bottom:6.775rem}.strong h1{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h1,.strong.contrast h1{color:hsla(0,0%,100%,.9)}h2{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.08rem;font-size:24px;line-height:9rem;padding-top:2.4rem;padding-bottom:6.6rem}.contrast h2{color:hsla(0,0%,100%,.9)}@media only screen and (min-width:1020px){h2{font-size:30px;line-height:11rem;padding-top:2.875rem;padding-bottom:8.125rem}}.compact h2{margin:2rem 0 -8rem;font-family:Andada,serif;font-weight:400;letter-spacing:.08rem;font-size:24px;line-height:9rem;padding-top:2.4rem;padding-bottom:6.6rem}.strong h2{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h2,.strong.contrast h2{color:hsla(0,0%,100%,.9)}h3{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.06rem;font-size:22px;line-height:8rem;padding-top:2.075rem;padding-bottom:5.925rem}.contrast h3{color:hsla(0,0%,100%,.9)}@media only screen and (min-width:1020px){h3{font-size:26px;line-height:10rem;padding-top:2.725rem;padding-bottom:7.275rem}}.compact h3{margin:2rem 0 -7rem;font-family:Andada,serif;font-weight:400;letter-spacing:.06rem;font-size:22px;line-height:8rem;padding-top:2.075rem;padding-bottom:5.925rem}.strong h3{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h3,.strong.contrast h3{color:hsla(0,0%,100%,.9)}h4{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.04rem;font-size:20px;line-height:8rem;padding-top:2.25rem;padding-bottom:5.75rem}.contrast h4{color:hsla(0,0%,100%,.9)}@media only screen and (min-width:1020px){h4{font-size:24px;line-height:10rem;padding-top:2.9rem;padding-bottom:7.1rem}}.compact h4{margin:2rem 0 -7rem;font-family:Andada,serif;font-weight:400;letter-spacing:.04rem;font-size:20px;line-height:8rem;padding-top:2.25rem;padding-bottom:5.75rem}.strong h4{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h4,.strong.contrast h4{color:hsla(0,0%,100%,.9)}h5{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.02rem;font-size:18px;line-height:7rem;padding-top:1.925rem;padding-bottom:5.075rem}.contrast h5{color:hsla(0,0%,100%,.9)}@media only screen and (min-width:1020px){h5{font-size:22px;line-height:9rem;padding-top:2.575rem;padding-bottom:6.425rem}}.compact h5{margin:2rem 0 -6rem;font-family:Andada,serif;font-weight:400;letter-spacing:.02rem;font-size:18px;line-height:7rem;padding-top:1.925rem;padding-bottom:5.075rem}.strong h5{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h5,.strong.contrast h5{color:hsla(0,0%,100%,.9)}h6{margin:2rem 0 0;color:rgba(51,51,51,.7);font-family:Andada,serif;font-weight:400;letter-spacing:.01rem;font-size:16px;line-height:7rem;padding-top:2.1rem;padding-bottom:4.9rem}.contrast h6{color:hsla(0,0%,100%,.9)}@media only screen and (min-width:1020px){h6{font-size:20px;line-height:9rem;padding-top:2.75rem;padding-bottom:6.25rem}}.compact h6{margin:2rem 0 -6rem;font-family:Andada,serif;font-weight:400;letter-spacing:.01rem;font-size:16px;line-height:7rem;padding-top:2.1rem;padding-bottom:4.9rem}.strong h6{font-weight:700;color:rgba(51,51,51,.9)}.contrast .strong h6,.strong.contrast h6{color:hsla(0,0%,100%,.9)}dd,dt,img,input,li,olela-narrative,p,textarea{display:block;margin:0;color:#333;font-family:Roboto Slab,serif;font-weight:300;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}@media only screen and (min-width:1020px){dd,dt,img,input,li,olela-narrative,p,textarea{font-size:20px;line-height:9rem;padding-top:2.7rem;padding-bottom:6.3rem}}.contrast dd,.contrast dt,.contrast img,.contrast input,.contrast li,.contrast olela-narrative,.contrast p,.contrast textarea{color:#fff}.non-responsive dd,.non-responsive dt,.non-responsive img,.non-responsive input,.non-responsive li,.non-responsive olela-narrative,.non-responsive p,.non-responsive textarea{font-family:Roboto Slab,serif;font-weight:300;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}.strong dd,.strong dt,.strong img,.strong input,.strong li,.strong olela-narrative,.strong p,.strong textarea{font-weight:500}blockquote{margin:0;padding:0 0 4rem}blockquote p,olela-narrative{font-weight:500;color:rgba(51,51,51,.5)}.contrast blockquote p,.contrast olela-narrative{color:hsla(0,0%,100%,.5)}@media only screen and (min-width:1020px){blockquote{position:relative}blockquote:before{content:\"\\201C\";font-family:Roboto Slab,serif;font-weight:700;letter-spacing:-.003rem;font-size:16px;font-size:48rem!important;margin:0;padding:0;display:block;color:rgba(51,51,51,.05);position:absolute;left:-29rem;top:calc(50% - 25rem)}}@media only screen and (min-width:1020px) and (min-width:1020px){blockquote:before{font-size:20px}}@media only screen and (min-width:1020px){.contrast blockquote:before{color:hsla(0,0%,100%,.05)}}button,input[type=button],input[type=submit]{margin:0;color:rgba(51,51,51,.95);font-family:Roboto Slab,serif;font-weight:700;letter-spacing:-.003rem;font-size:16px}@media only screen and (min-width:1020px){button,input[type=button],input[type=submit]{font-size:20px}}.contrast button,.contrast input[type=button],.contrast input[type=submit]{color:hsla(0,0%,100%,.95)}a:link,a:visited{color:rgba(159,43,216,.9)}a:active,a:hover{color:#9f2bd8}h1 a:link,h1 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h1 a:active,h1 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}h2 a:link,h2 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h2 a:active,h2 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}h3 a:link,h3 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h3 a:active,h3 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}h4 a:link,h4 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h4 a:active,h4 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}h5 a:link,h5 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h5 a:active,h5 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}h6 a:link,h6 a:visited{color:rgba(159,43,216,.7);text-decoration:none}h6 a:active,h6 a:hover{color:rgba(159,43,216,.8);text-decoration:underline}.contrast a:link,.contrast a:visited{color:hsla(0,0%,100%,.9)}.contrast a:active,.contrast a:hover{color:#fff}h1 .contrast a:link,h1 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h1 .contrast a:active,h1 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}h2 .contrast a:link,h2 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h2 .contrast a:active,h2 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}h3 .contrast a:link,h3 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h3 .contrast a:active,h3 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}h4 .contrast a:link,h4 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h4 .contrast a:active,h4 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}h5 .contrast a:link,h5 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h5 .contrast a:active,h5 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}h6 .contrast a:link,h6 .contrast a:visited{color:hsla(0,0%,100%,.7);text-decoration:none}h6 .contrast a:active,h6 .contrast a:hover{color:hsla(0,0%,100%,.8);text-decoration:underline}ol,ul{list-style-type:none;padding-left:0;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}.compact ol li,.compact ol ol,.compact ol ul,.compact ul li,.compact ul ol,.compact ul ul{padding-top:0;padding-bottom:0}@media only screen and (min-width:1020px){ol,ul{line-height:9rem;padding-top:2.7rem;padding-bottom:6.3rem}}.non-reponsive ol,.non-reponsive ul{line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}ol ol,ol ul,ul ol,ul ul{padding-left:6rem}@media only screen and (min-width:1020px){ol ol,ol ul,ul ol,ul ul{padding-left:8rem}.non-responsive ol ol,.non-responsive ol ul,.non-responsive ul ol,.non-responsive ul ul{padding-left:6rem}}ol li:before,ul li:before{display:inline-block;text-align:right;vertical-align:top;height:1rem;width:7rem}:not(ol) ol li:before,:not(ol) ul li:before,:not(ul) ol li:before,:not(ul) ul li:before{width:auto}@media only screen and (min-width:836px) and (max-width:1019px){:not(ol) ol li:before,:not(ol) ul li:before,:not(ul) ol li:before,:not(ul) ul li:before{width:7rem}}@media only screen and (min-width:1020px){:not(ol) ol li:before,:not(ol) ul li:before,:not(ul) ol li:before,:not(ul) ul li:before{width:7rem}}.centered ol li:before,.centered ul li:before,:not(ol) .centered ol li:before,:not(ol) .centered ul li:before,:not(ul) .centered ol li:before,:not(ul) .centered ul li:before{width:7rem}ul li:before{content:\"\\21E8\";font-family:Roboto Slab,serif;font-weight:400;letter-spacing:-.01rem;font-size:20px;opacity:.7;margin-right:1rem;margin-left:-8rem}@media only screen and (min-width:1020px){ul li:before{font-size:24px;opacity:.6;margin-right:3rem;margin-left:-10rem}}.non-responsive ul li:before{font-family:Roboto Slab,serif;font-weight:400;letter-spacing:-.01rem;font-size:20px}@media only screen and (min-width:1020px){.non-responsive ul li:before{opacity:.7;margin-right:1rem;margin-left:-8rem}}:not(ol) ul li:before,:not(ul) ul li:before{margin-left:0}@media only screen and (min-width:836px) and (max-width:1019px){:not(ol) ul li:before,:not(ul) ul li:before{margin-left:-8rem}}@media only screen and (min-width:1020px){:not(ol) ul li:before,:not(ul) ul li:before{margin-left:-10rem}.non-responsive :not(ol) ul li:before,.non-responsive :not(ul) ul li:before{margin-left:-8rem}}.centered ul li:before,:not(ol) .centered ul li:before,:not(ul) .centered ul li:before{margin-left:-8rem}ol li:before{font-family:Andada,serif;font-weight:400;letter-spacing:-.01rem;font-size:12px;opacity:.9;margin-right:4rem;margin-left:-11rem}@media only screen and (min-width:1020px){ol li:before{font-size:14px;opacity:.8;margin-right:6rem;margin-left:-13rem}}.non-responsive ol li:before{font-family:Andada,serif;font-weight:400;letter-spacing:-.01rem;font-size:12px}@media only screen and (min-width:1020px){.non-responsive ol li:before{opacity:.9;margin-right:4rem;margin-left:-11rem}}:not(ol) ol li:before,:not(ul) ol li:before{margin-left:0}@media only screen and (min-width:836px) and (max-width:1019px){:not(ol) ol li:before,:not(ul) ol li:before{margin-left:-11rem}}@media only screen and (min-width:1020px){:not(ol) ol li:before,:not(ul) ol li:before{margin-left:-13rem}.non-responsive :not(ol) ol li:before,.non-responsive :not(ul) ol li:before{margin-left:-11rem}}.centered ol li:before,:not(ol) .centered ol li:before,:not(ul) .centered ol li:before{margin-left:-11rem}ol li{counter-increment:a}ol li:before{content:counter(a) \".\";-webkit-font-feature-settings:\"lnum\",\"tnum\";font-feature-settings:\"lnum\",\"tnum\"}ol li ul li:before{content:\"\"}ol li ul li ol li{counter-increment:b}ol li ul li ol li:before{content:counter(b) \".\"}ol li ol li{counter-increment:c}ol li ol li:before{content:counter(a) \".\" counter(c) \".\"}ol li ol li ul li:before{content:\"\"}ol li ol li ol li{counter-increment:d}ol li ol li ol li:before{content:counter(a) \".\" counter(c) \".\" counter(d) \".\"}hr{border:0;background:transparent;color:rgba(51,51,51,.3);padding:7rem 0}.contrast hr{color:hsla(0,0%,100%,.3)}hr:after{content:\"~ ~ ~\";display:block;text-align:center;font-family:Roboto Slab,serif;font-weight:700;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}@media only screen and (min-width:1020px){hr:after{font-size:20px;line-height:9rem;padding-top:2.7rem;padding-bottom:6.3rem}}@media only screen and (min-width:1020px){hr{padding:9rem 0}}._1nVRuB6U8heCKKD77IOHZU h2 i,._2Vr1Nb0hGLL_3BJ4exuVFe h2:before{display:inline-block;width:0;height:1rem;vertical-align:top;margin:-3rem 16rem 0 -16rem;font-size:46rem;opacity:.1}@media only screen and (min-width:568px) and (max-width:835px){._1nVRuB6U8heCKKD77IOHZU h2 i,._2Vr1Nb0hGLL_3BJ4exuVFe h2:before{margin:-3rem 20rem 0 -20rem}}@media only screen and (min-width:836px) and (max-width:1019px){._1nVRuB6U8heCKKD77IOHZU h2 i,._2Vr1Nb0hGLL_3BJ4exuVFe h2:before{vertical-align:inherit;margin:0 5rem 0 -5rem;font-size:inherit;opacity:1}}@media only screen and (min-width:1020px){._1nVRuB6U8heCKKD77IOHZU h2 i,._2Vr1Nb0hGLL_3BJ4exuVFe h2:before{vertical-align:inherit;margin:0 5rem 0 -5rem;font-size:inherit;opacity:1}}._2Vr1Nb0hGLL_3BJ4exuVFe{padding-left:10rem}@media only screen and (min-width:836px) and (max-width:1019px){._2Vr1Nb0hGLL_3BJ4exuVFe{padding-left:0}}@media only screen and (min-width:1020px){._2Vr1Nb0hGLL_3BJ4exuVFe{padding-left:0}}._2Vr1Nb0hGLL_3BJ4exuVFe h2{text-transform:uppercase}._2Vr1Nb0hGLL_3BJ4exuVFe h2:before{content:\"#\"}._1nVRuB6U8heCKKD77IOHZU{padding-left:7rem}@media only screen and (min-width:836px) and (max-width:1019px){._1nVRuB6U8heCKKD77IOHZU{padding-left:0}}@media only screen and (min-width:1020px){._1nVRuB6U8heCKKD77IOHZU{padding-left:0}}._1nVRuB6U8heCKKD77IOHZU h2 i{margin-top:-19rem}@media only screen and (min-width:836px) and (max-width:1019px){._1nVRuB6U8heCKKD77IOHZU h2 i{vertical-align:top;margin:1.5rem 8rem 0 -8rem;font-size:inherit;opacity:1}}@media only screen and (min-width:1020px){._1nVRuB6U8heCKKD77IOHZU h2 i{vertical-align:top;margin:1.5rem 8rem 0 -8rem;font-size:inherit;opacity:1}}html{overflow-y:scroll}body,html{height:100%}body{background-color:#e2e2e2;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QcZCzkbBkkNNQAAAHFJREFUaN7t1bENACAIBEBwJPefwZnsYQLIfWesPnlyGT23vN/k/xPLo+D05Labq/8mquCAG+SgiSrIQQ6aKAc5aKIKcpCDJspBDpqoghzkoIlykIMmqiAHOWiiHOSgiSrIQQ66QQ5y0EQV5CAH3eDefJAaXMEw5G3+AAAAAElFTkSuQmCC);background-repeat:repeat;background-position:0 0;margin:0}#_3xisVzXbmTdU6tdm3kha08,#root{height:100%;min-height:100%;overflow:visible}._3XGdChp57d6aG6Q-6nyPPv{z-index:1;position:fixed;top:0;left:0;width:100%;background-color:#fff;box-shadow:0 0 3px rgba(0,0,0,.4)}._170rfZggYdMWCEBgkg7Zrr{margin-left:6rem}@media only screen and (min-width:836px) and (max-width:1019px){._170rfZggYdMWCEBgkg7Zrr{margin-left:0}}@media only screen and (min-width:1020px){._170rfZggYdMWCEBgkg7Zrr{margin-left:0}}._2-xd1EkoMi33UyTy5LqtoX{box-sizing:border-box;padding-top:14rem;padding-bottom:14rem;min-height:calc(100% - 152rem);background-color:#fff}@media only screen and (min-width:568px) and (max-width:835px){._2-xd1EkoMi33UyTy5LqtoX{min-height:calc(100% - 105rem)}}@media only screen and (min-width:836px) and (max-width:1019px){._2-xd1EkoMi33UyTy5LqtoX{padding-top:18rem;min-height:calc(100% - 116rem)}}@media only screen and (min-width:1020px){._2-xd1EkoMi33UyTy5LqtoX{padding-top:18rem;min-height:calc(100% - 96rem)}}._2-xd1EkoMi33UyTy5LqtoX main{padding-top:6rem}@media only screen and (min-width:1020px){._2-xd1EkoMi33UyTy5LqtoX main{padding-top:7rem}}._2-xd1EkoMi33UyTy5LqtoX img{margin-top:6rem;margin-bottom:3rem}@media only screen and (min-width:1020px){._2-xd1EkoMi33UyTy5LqtoX img{margin-top:8rem;margin-bottom:5rem}}._2-xd1EkoMi33UyTy5LqtoX .content p:first-child img:first-child{margin-top:-3rem;margin-bottom:3rem}._1WTN4YPiZiX_lqnC1xMGU7{background-color:#eee}._1WTN4YPiZiX_lqnC1xMGU7>div{padding-top:14rem;padding-bottom:16rem}@media only screen and (min-width:1020px){._1WTN4YPiZiX_lqnC1xMGU7>div{padding-top:16rem;padding-bottom:20rem}}._1WTN4YPiZiX_lqnC1xMGU7 #AtYydH0nIAycVRjRRmoWZ{font-family:Roboto Slab,serif;font-weight:400;letter-spacing:-.003rem;font-size:16px;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem;color:#333}@media only screen and (min-width:1020px){._1WTN4YPiZiX_lqnC1xMGU7 #AtYydH0nIAycVRjRRmoWZ{font-size:20px;line-height:9rem;padding-top:2.7rem;padding-bottom:6.3rem}}._1OuQN51LLVwP9hGPoRlejy{background-color:#303030}._3VKGg8LZYY8MQeQDXVQTUm{background-color:rgba(0,0,0,.2)}._3VKGg8LZYY8MQeQDXVQTUm ._2ixjhdFdn61s1lP4JCPOLH{display:flex;justify-content:center;padding-top:12rem;padding-bottom:9rem}._3VKGg8LZYY8MQeQDXVQTUm ._2ixjhdFdn61s1lP4JCPOLH svg{margin-left:2rem;height:10rem}@media only screen and (min-width:568px) and (max-width:835px){._3VKGg8LZYY8MQeQDXVQTUm ._2ixjhdFdn61s1lP4JCPOLH{justify-content:flex-end;padding:10rem 4rem 8rem}}@media only screen and (min-width:836px) and (max-width:1019px){._3VKGg8LZYY8MQeQDXVQTUm ._2ixjhdFdn61s1lP4JCPOLH{justify-content:flex-end;padding:10rem 4rem 8rem}}@media only screen and (min-width:1020px){._3VKGg8LZYY8MQeQDXVQTUm ._2ixjhdFdn61s1lP4JCPOLH{justify-content:flex-end;padding:10rem 4rem 8rem}}@media only screen and (min-width:836px) and (max-width:1019px){._3VKGg8LZYY8MQeQDXVQTUm ._2ixjhdFdn61s1lP4JCPOLH svg{height:14rem;height:17rem}}@media only screen and (min-width:1020px){._3VKGg8LZYY8MQeQDXVQTUm ._2ixjhdFdn61s1lP4JCPOLH svg{height:17rem}}._1IxN8hvkC6jYPeyZlErUt3{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1;position:fixed;top:0;left:0;background-color:transparent;transition:background-color .3s ease-out;height:100%;width:100%;display:flex}._1IxN8hvkC6jYPeyZlErUt3._14-0gnLuzRp50XG04Ek1oC{background-color:rgba(7,0,55,.6)}._1IxN8hvkC6jYPeyZlErUt3._36f4Y0D_doYGBjEBan_3Su{left:-100%}@media only screen and (min-width:836px) and (max-width:1019px){._1IxN8hvkC6jYPeyZlErUt3{display:none}}@media only screen and (min-width:1020px){._1IxN8hvkC6jYPeyZlErUt3{display:none}}", ""]);

// exports
exports.locals = {
	"main": "_2-xd1EkoMi33UyTy5LqtoX",
	"bottom": "_3VKGg8LZYY8MQeQDXVQTUm",
	"logo": "_2ixjhdFdn61s1lP4JCPOLH",
	"comments": "_1WTN4YPiZiX_lqnC1xMGU7",
	"menuEntryJumbo": "_1nVRuB6U8heCKKD77IOHZU",
	"tagJumbo": "_2Vr1Nb0hGLL_3BJ4exuVFe",
	"all": "_3xisVzXbmTdU6tdm3kha08",
	"header": "_3XGdChp57d6aG6Q-6nyPPv",
	"indexJumbo": "_170rfZggYdMWCEBgkg7Zrr",
	"disqus_thread": "AtYydH0nIAycVRjRRmoWZ",
	"footer": "_1OuQN51LLVwP9hGPoRlejy",
	"sideMenu": "_1IxN8hvkC6jYPeyZlErUt3",
	"visible": "_14-0gnLuzRp50XG04Ek1oC",
	"closed": "_36f4Y0D_doYGBjEBan_3Su"
};

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(2);
var Crumbs_1 = __webpack_require__(73);
var TagList_1 = __webpack_require__(74);
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
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./CategoryList.tsx": 206,
	"./Crumbs.tsx": 73,
	"./Feed.tsx": 207,
	"./Ingredient.tsx": 211,
	"./Method.tsx": 214,
	"./Recipe.tsx": 215,
	"./TableOfContents.tsx": 75,
	"./TagList.tsx": 74
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
webpackContext.id = 205;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(2);
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
/* 207 */
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
var Tile_1 = __webpack_require__(208);
var TableOfContents_1 = __webpack_require__(75);
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
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(2);
var withStyles_1 = __webpack_require__(5);
var Tags_1 = __webpack_require__(72);
var Button_1 = __webpack_require__(23);
var s = __webpack_require__(209);
function Tile(_a) {
    var website = _a.website,
        page = _a.page;
    var Body = page.body;
    return React.createElement("article", null, React.createElement("h1", null, React.createElement(react_router_dom_1.Link, { to: page.url }, page.title)), React.createElement("div", { className: s.tags }, React.createElement(Tags_1.default, { website: website, page: page })), React.createElement(Body, { website: website, page: page, respectLimit: true }), React.createElement("div", { className: s.more }, React.createElement(Button_1.default, { url: page.url, variant: 'raised', color: 'purple' }, "Read More")));
}
exports.Tile = Tile;
exports.default = withStyles_1.default(s)(Tile);

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(210);
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
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "._30KjvNmLpdOJMkyYNU2Ajj{padding:7rem 0 12rem;text-align:center}@media only screen and (min-width:1020px){._30KjvNmLpdOJMkyYNU2Ajj{padding:9rem 0 16rem}}@media only screen and (min-width:568px) and (max-width:835px){._30KjvNmLpdOJMkyYNU2Ajj{text-align:left}}@media only screen and (min-width:836px) and (max-width:1019px){._30KjvNmLpdOJMkyYNU2Ajj{text-align:left}}@media only screen and (min-width:1020px){._30KjvNmLpdOJMkyYNU2Ajj{text-align:left}}._30KjvNmLpdOJMkyYNU2Ajj a{padding:0 13rem}@media only screen and (min-width:836px) and (max-width:1019px){._30KjvNmLpdOJMkyYNU2Ajj a{padding:0 7rem}}@media only screen and (min-width:1020px){._30KjvNmLpdOJMkyYNU2Ajj a{padding:0 9rem}}", ""]);

// exports
exports.locals = {
	"more": "_30KjvNmLpdOJMkyYNU2Ajj"
};

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Recipe_1 = __webpack_require__(50);
exports.default = Recipe_1.Ingredient;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(213);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Recipe.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--5-1!../../../node_modules/postcss-loader/lib/index.js!../../../node_modules/sass-loader/lib/loader.js!./Recipe.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "html{font-size:4px}._1v84p50SUzKr97yulNSEfm{display:block;width:100vw;margin-left:calc(50% - 50vw)}._31jOjtqKWTakKYmRsSC6a0,._2G_5xgL9kBELktTZa8GeBd{box-sizing:border-box;width:100%;padding-left:5rem;padding-right:5rem;margin:0}@media only screen and (min-width:836px) and (max-width:1019px){._31jOjtqKWTakKYmRsSC6a0,._2G_5xgL9kBELktTZa8GeBd{width:764px;margin:0 auto}}@media only screen and (min-width:1020px){._31jOjtqKWTakKYmRsSC6a0,._2G_5xgL9kBELktTZa8GeBd{width:932px;margin:0 auto}}._1v84p50SUzKr97yulNSEfm{margin-top:4rem;background-color:#303030}@media only screen and (min-width:1020px){._1v84p50SUzKr97yulNSEfm{margin-top:7rem}}._2G_5xgL9kBELktTZa8GeBd{padding-top:7rem}@media only screen and (min-width:1020px){._2G_5xgL9kBELktTZa8GeBd{padding-top:12rem}}._2G_5xgL9kBELktTZa8GeBd ul,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap;max-width:100%;margin-top:-7rem;margin-bottom:-1rem;flex-wrap:nowrap;line-height:7rem;padding-top:2.06rem;padding-bottom:4.94rem}._2G_5xgL9kBELktTZa8GeBd ul li,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul li,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul li{margin:0;padding:0;display:flex;max-width:100%}._2G_5xgL9kBELktTZa8GeBd ul li:before,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul li:before,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul li:before{content:\"\";margin:0;padding:0;font-size:inherit;font-weight:inherit;line-height:inherit;text-align:left;vertical-align:inherit;width:auto;height:auto;position:static;opacity:1}@media only screen and (min-width:1020px){._2G_5xgL9kBELktTZa8GeBd ul,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul{line-height:9rem;padding-top:2.7rem;padding-bottom:6.3rem}}._2G_5xgL9kBELktTZa8GeBd ul li,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul li,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul li{font-family:Roboto Slab,serif;font-weight:500;letter-spacing:-.003rem;font-size:16px;white-space:nowrap;padding-right:2rem}@media only screen and (min-width:1020px){._2G_5xgL9kBELktTZa8GeBd ul li,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul li,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul li{font-size:20px}}@media only screen and (min-width:568px) and (max-width:835px){._2G_5xgL9kBELktTZa8GeBd ul li,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul li,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul li{padding-right:4rem}}@media only screen and (min-width:836px) and (max-width:1019px){._2G_5xgL9kBELktTZa8GeBd ul li,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul li,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul li{padding-right:4rem}}@media only screen and (min-width:1020px){._2G_5xgL9kBELktTZa8GeBd ul li,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul li,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul li{padding-right:4rem}}._2G_5xgL9kBELktTZa8GeBd ul i,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul i,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul i{margin-right:1rem;font-size:27px;opacity:.9}@media only screen and (min-width:568px) and (max-width:835px){._2G_5xgL9kBELktTZa8GeBd ul i,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul i,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul i{margin-right:2rem}}@media only screen and (min-width:836px) and (max-width:1019px){._2G_5xgL9kBELktTZa8GeBd ul i,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul i,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul i{margin-right:2rem}}@media only screen and (min-width:1020px){._2G_5xgL9kBELktTZa8GeBd ul i,:not(ol) ._2G_5xgL9kBELktTZa8GeBd ul i,:not(ul) ._2G_5xgL9kBELktTZa8GeBd ul i{margin-right:2rem;font-size:33px}}._31jOjtqKWTakKYmRsSC6a0{padding-top:1rem;padding-bottom:9rem}@media only screen and (min-width:1020px){._31jOjtqKWTakKYmRsSC6a0{padding-bottom:13rem}}", ""]);

// exports
exports.locals = {
	"recipe": "_1v84p50SUzKr97yulNSEfm",
	"details": "_31jOjtqKWTakKYmRsSC6a0",
	"header": "_2G_5xgL9kBELktTZa8GeBd"
};

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Recipe_1 = __webpack_require__(50);
exports.default = Recipe_1.Method;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Recipe_1 = __webpack_require__(50);
exports.default = Recipe_1.default;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var pages_1 = __webpack_require__(77);
var categories_1 = __webpack_require__(78);
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
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(9);
var config = __webpack_require__(76);
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