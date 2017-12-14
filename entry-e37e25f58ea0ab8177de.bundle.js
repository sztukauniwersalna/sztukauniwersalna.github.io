(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-router-dom"), require("react-dom/server"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define([, , , , ], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom"), require("react-router-dom"), require("react-dom/server"), require("prop-types")) : factory(root["React"], root["ReactDOM"], root["ReactRouterDOM"], root["ReactDOMServer"], root["PropTypes"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_93__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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
var requireDirectory_1 = __webpack_require__(10);
var models_1 = __webpack_require__(6);
var Context = __webpack_require__(11);
var includes = requireDirectory_1.default(Context.INCLUDES)
    .map(function (module) {
    var name = module.name.replace(/^\.\//, '').replace(/\.js$/, '');
    return new models_1.Include(name, module.exports.default);
});
exports.default = includes;


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_1 = __webpack_require__(0);
function ContentLimiter(_a) {
    var children = _a.children, limit = _a.limit, respectLimit = _a.respectLimit, props = __rest(_a, ["children", "limit", "respectLimit"]);
    if (!limit || !respectLimit) {
        return React.createElement("div", { className: 'content' }, children);
    }
    var output = [];
    limitChildren(children, limit, props, output);
    return React.createElement("div", { className: 'content' }, output);
}
exports.ContentLimiter = ContentLimiter;
exports.default = ContentLimiter;
function limitChildren(children, limit, limiterProps, output) {
    var updatedLimit = limit;
    react_1.Children.forEach(children, function (child, key) {
        updatedLimit = limitContent(child, updatedLimit, limiterProps, key, output);
    });
    return updatedLimit;
}
function limitContent(node, limit, limiterProps, key, output) {
    if (limit === 0 || node === null || node === undefined) {
        return limit;
    }
    switch (typeof node) {
        case 'boolean':
        case 'number':
            output.push(node);
            return limit;
        case 'string':
            return limitString(node, limit, output);
        default:
            return limitReactElement(node, limit, limiterProps, key, output);
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
    sentences.slice(0, limit)
        .forEach(function (sentence) { return output.push(sentence); });
    return 0;
}
function limitReactElement(elem, limit, limiterProps, key, output) {
    if (elem.type === 'img') {
        return limit;
    }
    var updatedChildren = [];
    var updatedLimit = limitChildren(elem.props.children, limit, limiterProps, updatedChildren);
    var cloneProps = createCloneProps(elem, limiterProps, key);
    // props.children must be undefined in case of child-less elements (e.g <img/>).
    var maybeChildren = updatedChildren.length === 0 ? undefined : updatedChildren;
    output.push(react_1.cloneElement(elem, cloneProps, maybeChildren));
    return updatedLimit;
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
function createCloneProps(elem, limiterProps, key) {
    if (typeof elem.type === 'string') {
        return __assign({ key: key }, elem.props);
    }
    return __assign({ key: key }, elem.props, limiterProps);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ParrotLayout_1 = __webpack_require__(21);
exports.default = ParrotLayout_1.default;
var Button_1 = __webpack_require__(7);
exports.Button = Button_1.default;
var Crumbs_1 = __webpack_require__(23);
exports.Crumbs = Crumbs_1.default;
var Feed_1 = __webpack_require__(107);
exports.Feed = Feed_1.default;
var Footer_1 = __webpack_require__(24);
exports.Footer = Footer_1.default;
var Icon_1 = __webpack_require__(8);
exports.Icon = Icon_1.default;
var Jumbotron_1 = __webpack_require__(27);
exports.Jumbotron = Jumbotron_1.default;
var Logo_1 = __webpack_require__(12);
exports.Logo = Logo_1.default;
var ParrotLayout_2 = __webpack_require__(21);
exports.ParrotLayout = ParrotLayout_2.default;
var Recipe_1 = __webpack_require__(109);
exports.Recipe = Recipe_1.default;
exports.Ingredient = Recipe_1.Ingredient;
exports.Method = Recipe_1.Method;
var SideMenu_1 = __webpack_require__(26);
exports.SideMenu = SideMenu_1.default;
var TableOfContents_1 = __webpack_require__(29);
exports.TableOfContents = TableOfContents_1.default;
var Tags_1 = __webpack_require__(13);
exports.Tags = Tags_1.default;
var Tile_1 = __webpack_require__(28);
exports.Tile = Tile_1.default;
var TopBar_1 = __webpack_require__(22);
exports.TopBar = TopBar_1.default;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(9);
exports.Page = Page_1.default;
var Collection_1 = __webpack_require__(45);
exports.Collection = Collection_1.default;
var Category_1 = __webpack_require__(17);
exports.Category = Category_1.default;
var Tag_1 = __webpack_require__(18);
exports.Tag = Tag_1.default;
var Layout_1 = __webpack_require__(46);
exports.Layout = Layout_1.default;
var Include_1 = __webpack_require__(47);
exports.Include = Include_1.default;
var MenuEntry_1 = __webpack_require__(48);
exports.MenuEntry = MenuEntry_1.default;
var Website_1 = __webpack_require__(49);
exports.Website = Website_1.default;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(5);
var s = __webpack_require__(94);
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
exports.default = Button;
function renderExternalLink(classNames, url, onClick, children) {
    return React.createElement("span", { className: classNames.join(' ') }, React.createElement("a", { href: url, onClick: onClick }, children));
}
function renderLink(classNames, url, onClick, children) {
    return React.createElement("span", { className: classNames.join(' ') }, React.createElement(react_router_dom_1.Link, { to: url, onClick: onClick }, children));
}
function renderButton(classNames, onClick, children) {
    return React.createElement("span", { className: classNames.join(' ') }, React.createElement("button", { onClick: onClick }, children));
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var s = __webpack_require__(95);
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
exports.default = Icon;
function renderMaterialIcon(name) {
    return React.createElement("i", { className: 'material-icons' }, name);
}
function renderFacebookIcon() {
    return React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', className: s.icon }, React.createElement("g", null, React.createElement("path", { d: 'M20.85,0H3.17C1.08,0,0,1.09,0,3.2V20.86A2.82,2.82,0,0,0,3.1,24h8.74V12H9.61V8.85h2.23V7.72a7.74,7.74,0,0,1,.4-2.85,3.2,3.2,0,0,1,1.51-1.53,5.64,5.64,0,0,1,2.76-.59,11.23,11.23,0,0,1,3.35.51L19.31,6a8.2,8.2,0,0,0-1.84-.23,1.59,1.59,0,0,0-1.24.42,2.26,2.26,0,0,0-.38,1.55V8.85h3V12h-3V24h5A2.84,2.84,0,0,0,24,20.82V3.15A2.82,2.82,0,0,0,20.85,0Z' })));
}
function renderInstagramIcon() {
    return React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', className: s.icon }, React.createElement("g", null, React.createElement("path", { d: 'M20.85,0H3.17C1.08,0,0,1.09,0,3.2V20.86A2.82,2.82,0,0,0,3.1,24H20.85A2.84,2.84,0,0,0,24,20.82V3.15A2.82,2.82,0,0,0,20.85,0Zm-2,2.7c2.37,0,2.37,0,2.37,2.4s0,2.33-2.33,2.33-2.37,0-2.37-2.38S16.57,2.7,18.9,2.7ZM12,7.34a4.65,4.65,0,1,1-.07,9.3,4.72,4.72,0,0,1-4.6-4.71A4.74,4.74,0,0,1,12,7.34Zm9.26,12.5c0,1.12-.32,1.42-1.43,1.42H4.15c-1.1,0-1.42-.3-1.42-1.42,0-2.91,0-5.85,0-8.76,0-.83.23-1,1-1,1.09.1,1.11,0,1,1.1a7.41,7.41,0,0,0,5.81,8,7.47,7.47,0,0,0,8.57-5.15,7.39,7.39,0,0,0,.16-3.44c-.09-.41,0-.5.39-.5,1.66-.12,1.66-.16,1.66,1.55Z' })));
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Page = /** @class */ (function () {
    function Page(title, description, url, layout, body, image, output, date, categories, tags, feed) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.layout = layout;
        this.body = body;
        this.image = image;
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
            return website.getCategoryOfTitle(categoryTitle)
                .getCrumbs(website)
                .map(function (crumb) { return crumb.concat([_this]); });
        }).reduce(function (a, b) { return a.concat(b); }, []);
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
}());
exports.Page = Page;
exports.default = Page;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function requireDirectory(context) {
    return context.keys()
        .map(function (name) { return ({
        exports: context(name),
        name: name,
    }); });
}
exports.default = requireDirectory;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
CATEGORIES: __webpack_require__(50),
PAGES: __webpack_require__(55),
POSTS: __webpack_require__(61),
ROOT: __webpack_require__(89),
LAYOUTS: __webpack_require__(90),
INCLUDES: __webpack_require__(112)};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var s = __webpack_require__(96);
function Logo(_a) {
    var _b = _a.variant,
        variant = _b === void 0 ? 'inline' : _b;
    return React.createElement("svg", { className: s.logo + " " + s[variant], xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + getDimensions(variant).join(' '), version: "1.1" }, React.createElement("g", null, renderLogo(variant).map(function (element, key) {
        return React.cloneElement(element, { key: key });
    })));
}
exports.Logo = Logo;
exports.default = Logo;
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Button_1 = __webpack_require__(7);
var s = __webpack_require__(100);
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
exports.default = Tags;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(6);
var requireDirectory_1 = __webpack_require__(10);
var layouts_1 = __webpack_require__(19);
var Context = __webpack_require__(11);
var config = __webpack_require__(15);
function checkIsObject(value, name) {
    if (typeof value !== 'object') {
        throw new Error(name + " must be an object; got " + typeof value);
    }
    return value;
}
function checkIsArray(value, name) {
    if (!(value instanceof Array)) {
        throw new Error(name + " must be an array; got " + typeof value);
    }
    return value;
}
function checkIsString(value, name) {
    if (typeof value !== 'string') {
        throw new Error(name + " must be a string; got " + typeof value);
    }
    return value;
}
function checkIsOptionalString(value, name) {
    if (typeof value !== 'string' && value !== null) {
        throw new Error(name + " must be a string or null; got " + typeof value);
    }
    return value;
}
function checkIsOptionalBoolean(value, defaultValue, name) {
    if (typeof value === 'undefined') {
        return defaultValue;
    }
    if (typeof value !== 'boolean') {
        throw new Error(name + " must be a boolean; got " + typeof value);
    }
    return value;
}
checkIsObject(config.collections, 'config.collections');
var website = new models_1.Website('', '', '', '');
layouts_1.default.forEach(function (layout) { return website.addLayout(layout); });
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
function createPage(role, title, description, url, layout, body, image, output, date, categoryTitles, tags, feed, requiredBy) {
    // replace _ with non-breaking spaces
    title = title.replace(/_/g, String.fromCharCode(160));
    switch (role) {
        case 'page':
            return new models_1.Page(title, description, url, layout, body, image, output, date, categoryTitles, tags, feed);
        case 'category':
            return new models_1.Category(title, description, url, layout, body, image, output, date, categoryTitles, tags);
        default:
            throw new Error("unrecognized role: " + role + " in " + requiredBy);
    }
}
function parsePage(name, body, frontMatter, defaultLayout) {
    var requiredBy = "pages['" + name + "']";
    var page = createPage(checkIsString(frontMatter.role || 'page', requiredBy + ".role"), checkIsString(frontMatter.title || titleFromUrl(name, requiredBy), requiredBy + ".title"), checkIsString(frontMatter.description || '', requiredBy + ".description"), checkIsString(frontMatter.permalink || urlFromTitle(name, requiredBy), requiredBy + ".url"), website.getLayoutOfName(checkIsString(frontMatter.layout || defaultLayout, requiredBy + ".layout"), requiredBy), body, checkIsOptionalString(frontMatter.image || null, requiredBy + ".image"), frontMatter.output != false, new Date(checkIsString(frontMatter.date, requiredBy + ".date")), checkIsArray(frontMatter.categories || [], requiredBy + ".categories")
        .concat(frontMatter.category !== undefined
        ? [checkIsString(frontMatter.category, requiredBy + ".category")]
        : []), checkIsArray(frontMatter.tags || [], requiredBy + ".tags"), checkIsOptionalBoolean(frontMatter.feed, true, requiredBy + ".feed"), requiredBy);
    return page;
}
function createCollection(key, cfg, context) {
    var collection = parseCollection(key, cfg);
    collection.pages = requireDirectory_1.default(context)
        .map(function (module) { return parsePage(module.name.replace(/\.markdown$/, '').replace(/^\.\//, ''), module.exports.component, module.exports.frontMatter, collection.layout.name); });
    return collection;
}
var collections = [].concat.apply(createCollection(ROOT_COLLECTION_KEY, { title: ROOT_COLLECTION_TITLE }, Context.ROOT), Object.keys(config.collections)
    .filter(function (key) {
    var context = Context.hasOwnProperty(key.toUpperCase());
    if (!context) {
        console.warn("couldn't find folder _" + key + " required by collection " + key);
    }
    return context;
})
    .map(function (key) {
    return createCollection(key, config.collections[key], Context[key.toUpperCase()]);
}));
exports.default = collections;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"title":"SztukaUniwersalna.pl","timezone":"Europe/Warsaw","collections":{"categories":{"title":"Categories","output":false,"layout":"ParrotLayout"},"drafts":{"title":"Drafts","output":false,"layout":"ParrotLayout"},"pages":{"title":"Pages","output":false,"layout":"ParrotLayout"},"posts":{"title":"Posts","output":true,"layout":"ParrotLayout"},"uploads":{"title":"Uploads","output":false}},"baseUrl":"http://sztukauniwersalna.pl","locale":"pl_PL","menu":[{"title":"Sztuka Ubioru","short":"Moda","url":"/sztuka-ubioru","icon":"content_cut"},{"title":"Sztuka Makijażu","short":"Makijaż","url":"/sztuka-makijazu","icon":"remove_red_eye"},{"title":"Sztuka Gotowania","short":"Kuchnia","url":"/sztuka-gotowania","icon":"restaurant"},{"title":"Sztuka dla Sztuki","short":"Sztuka","url":"/sztuka-dla-sztuki","icon":"palette"},{"title":"Kim jest Olela?","short":"O mnie","url":"/kim-jest-olela","icon":"mood"}]};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(9);
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category(title, description, url, layout, body, image, output, date, categories, tags) {
        var _this = _super.call(this, title, description, url, layout, body, image, output, date, categories, tags, false) || this;
        _this.pages = [];
        return _this;
    }
    return Category;
}(Page_1.Page));
exports.default = Category;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = __webpack_require__(9);
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag(title, url, layout, body) {
        var _this = _super.call(this, '#' + title, '', url, layout, body, null, true, new Date(Date.UTC(0, 0)), [], [], false) || this;
        _this.pages = [];
        _this.originalTitle = title;
        return _this;
    }
    return Tag;
}(Page_1.default));
exports.default = Tag;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var requireDirectory_1 = __webpack_require__(10);
var models_1 = __webpack_require__(6);
var Context = __webpack_require__(11);
var layouts = requireDirectory_1.default(Context.LAYOUTS)
    .map(function (module) {
    var name = module.name.replace(/^\.\//, '').replace(/\.js$/, '');
    var component = module.exports.default;
    if (typeof component !== 'function') {
        throw new Error("default export of layout " + name + " is of wrong type; expected 'function'; got '" + typeof component + "'");
    }
    return new models_1.Layout(name, component);
});
exports.default = layouts;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "ParrotLayout")) __webpack_require__.d(__webpack_exports__, "ParrotLayout", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["ParrotLayout"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "ParrotLayout")) __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["ParrotLayout"]; });



__webpack_require__(111);



/***/ }),
/* 21 */
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
var react_router_dom_1 = __webpack_require__(5);
var react_disqus_comments_1 = __webpack_require__(91);
var models_1 = __webpack_require__(6);
var TopBar_1 = __webpack_require__(22);
var Crumbs_1 = __webpack_require__(23);
var Tags_1 = __webpack_require__(13);
var Footer_1 = __webpack_require__(24);
var Logo_1 = __webpack_require__(12);
var Icon_1 = __webpack_require__(8);
var SideMenu_1 = __webpack_require__(26);
var Jumbotron_1 = __webpack_require__(27);
var gtag_1 = __webpack_require__(105);
var s = __webpack_require__(106);
var GA_TRACKING_ID = 'UA-110945340-1';
gtag_1.default('js', new Date());
gtag_1.default('config', GA_TRACKING_ID, { 'send_page_view': false });
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
        document.title = this.props.page.title + " | " + this.props.website.title;
        gtag_1.default('config', GA_TRACKING_ID, { 'page-path': this.props.page.url });
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
    ParrotLayout.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.page === this.props.page) {
            return;
        }
        gtag_1.default('config', GA_TRACKING_ID, { 'page-path': newProps.page.url });
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
exports.default = ParrotLayout;
function jumbotronFor(website, page) {
    if (page.url === '/') {
        return React.createElement("div", { className: s.indexJumbo }, React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'center' }, React.createElement("h2", null, "uniwer\u2022sal\u2022ny; -na"), React.createElement("ol", null, React.createElement("li", null, "\xABobejmuj\u0105cy ca\u0142o\u015B\u0107, dotycz\u0105cy wszystkiego lub wszystkich\xBB"), React.createElement("li", null, "\xABmaj\u0105cy wszechstronne zastosowanie\xBB"), React.createElement("li", null, "\xABmaj\u0105cy r\xF3\u017Cne umiej\u0119tno\u015Bci\xBB"))));
    }
    if (website.menuContains(page)) {
        return React.createElement("div", { className: s.menuEntryJumbo }, React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' }, React.createElement("h2", null, React.createElement(Icon_1.default, { name: website.getMenuEntry(page).icon }), React.createElement(react_router_dom_1.Link, { to: page.url }, page.title)), React.createElement(Crumbs_1.default, { responsive: true, website: website, page: page })));
    }
    if (page instanceof models_1.Category) {
        return React.createElement("div", { className: s.categoryJumbo }, React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' }, React.createElement("h2", null, React.createElement(react_router_dom_1.Link, { to: page.url }, page.title)), React.createElement(Crumbs_1.default, { responsive: true, website: website, page: page })));
    }
    if (page instanceof models_1.Tag) {
        return React.createElement("div", { className: s.tagJumbo }, React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' }, React.createElement("h2", null, React.createElement(react_router_dom_1.Link, { to: page.url }, page.originalTitle)), React.createElement(Crumbs_1.default, { responsive: true, website: website, page: page })));
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

/***/ }),
/* 22 */
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
var react_router_dom_1 = __webpack_require__(5);
var Button_1 = __webpack_require__(7);
var Icon_1 = __webpack_require__(8);
var Logo_1 = __webpack_require__(12);
__webpack_require__(97);
var s = __webpack_require__(98);
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
exports.default = TopBar;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(5);
var s = __webpack_require__(99);
function Crumbs(_a) {
    var website = _a.website,
        page = _a.page,
        _b = _a.responsive,
        responsive = _b === void 0 ? false : _b;
    return React.createElement("div", { className: s.crumbs + " " + (responsive ? s.responsive : '') }, page.getCrumbs(website).map(function (crumbs, key) {
        return React.createElement("ul", { key: key }, crumbs.map(function (page) {
            return React.createElement("li", { key: page.url }, React.createElement(react_router_dom_1.Link, { to: page.url }, page.url === '/' ? website.title : page.title));
        }));
    }));
}
exports.Crumbs = Crumbs;
exports.default = Crumbs;

/***/ }),
/* 24 */
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
var react_router_dom_1 = __webpack_require__(5);
var Button_1 = __webpack_require__(7);
var Icon_1 = __webpack_require__(8);
var SocialButtons_1 = __webpack_require__(25);
var s = __webpack_require__(102);
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
        return React.createElement("footer", { className: s.footer }, React.createElement("div", { className: s.socialButtons }, React.createElement(SocialButtons_1.default, null)), React.createElement("ul", { className: s.categories }, website.menu.map(function (entry) {
            return React.createElement("li", { key: entry.url }, React.createElement(Button_1.default, { url: entry.url }, entry.title));
        })), React.createElement("p", { className: s.bottomParagraph }, React.createElement("span", { className: s.copyright }, "\xA9 2017 Aleksandra Krawczyk"), React.createElement("span", { className: s.indexLink }, React.createElement(react_router_dom_1.Link, { to: index.url }, index.title)), React.createElement("span", { className: s.sitemapLink }, React.createElement(react_router_dom_1.Link, { to: sitemap.url }, sitemap.title))), React.createElement("div", { className: s.scrollUpButton }, React.createElement(Button_1.default, { variant: 'action', color: 'gray', onClick: function onClick() {
                return window.scrollTo(0, 0);
            } }, React.createElement(Icon_1.default, { name: 'arrow_upward' }))));
    };
    return Footer;
}(react_1.Component);
exports.Footer = Footer;
exports.default = Footer;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Button_1 = __webpack_require__(7);
var Icon_1 = __webpack_require__(8);
var s = __webpack_require__(101);
function SocialButtons() {
    return React.createElement("ul", { className: s.socialButtons }, React.createElement("li", { key: 'facebook' }, React.createElement(Button_1.default, { variant: 'action', color: 'green', url: 'https://www.facebook.com/sztukauniwersalna/' }, React.createElement(Icon_1.default, { name: 'facebook' }))), React.createElement("li", { key: 'instagram' }, React.createElement(Button_1.default, { variant: 'action', color: 'green', url: 'https://www.instagram.com/sztuka_uniwersalna/' }, React.createElement(Icon_1.default, { name: 'instagram' }))));
}
exports.SocialButtons = SocialButtons;
exports.default = SocialButtons;

/***/ }),
/* 26 */
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
var react_router_dom_1 = __webpack_require__(5);
var Button_1 = __webpack_require__(7);
var Icon_1 = __webpack_require__(8);
var s = __webpack_require__(103);
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
exports.default = SideMenu;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SocialButtons_1 = __webpack_require__(25);
var s = __webpack_require__(104);
function Jumbotron(_a) {
    var children = _a.children,
        _b = _a.fullscreen,
        fullscreen = _b === void 0 ? false : _b,
        _c = _a.align,
        align = _c === void 0 ? 'center' : _c;
    return React.createElement("div", { className: s.container + " " + (fullscreen ? s.fullscreen : '') + " " + s[align] }, React.createElement("div", { className: s.jumbo + " contrast compact non-responsive strong" }, React.createElement("div", { className: s.text + " " + (align === 'center' ? 'centered' : '') }, React.createElement("div", { className: 'text' }, children)), React.createElement("div", { className: 'image' })), React.createElement("div", { className: s.footer }, React.createElement("div", { className: s.social }, React.createElement(SocialButtons_1.default, null))));
}
exports.Jumbotron = Jumbotron;
exports.default = Jumbotron;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(5);
var Tags_1 = __webpack_require__(13);
var Button_1 = __webpack_require__(7);
var s = __webpack_require__(108);
function Tile(_a) {
    var website = _a.website,
        page = _a.page;
    var Body = page.body;
    return React.createElement("article", null, React.createElement("h1", null, React.createElement(react_router_dom_1.Link, { to: page.url }, page.title)), React.createElement("div", { className: s.tags }, React.createElement(Tags_1.default, { website: website, page: page })), maybeRenderImage(page), React.createElement(Body, { website: website, page: page, respectLimit: true }), React.createElement("div", { className: s.more }, React.createElement(Button_1.default, { url: page.url, variant: 'raised', color: 'purple' }, "Read More")));
}
exports.Tile = Tile;
function maybeRenderImage(page) {
    if (page.image === null) {
        return null;
    }
    return React.createElement(react_router_dom_1.Link, { to: page.url }, React.createElement("img", { src: page.image, alt: "" + page.title }));
}
exports.default = Tile;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(5);
var models_1 = __webpack_require__(6);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(6);
var collections_1 = __webpack_require__(14);
var pages = collections_1.default.reduce(function (p, c) { return p.concat(c.pages); }, [])
    .filter(function (page) { return !(page instanceof models_1.Category); });
exports.default = pages;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(6);
var collections_1 = __webpack_require__(14);
var categories = collections_1.default.reduce(function (p, c) { return p.concat(c.pages); }, [])
    .filter(function (page) { return page instanceof models_1.Category; });
exports.default = categories;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var react_dom_1 = __webpack_require__(34);
var react_router_dom_1 = __webpack_require__(5);
var react_hot_loader_1 = __webpack_require__(35);
var server_1 = __webpack_require__(40);
var Root_1 = __webpack_require__(41);
var route_factory_1 = __webpack_require__(42);
var data_1 = __webpack_require__(43);
var routesFactory = new route_factory_1.default();
var routes = routesFactory.getRoutes(data_1.default);
var serverRender = function (locals) {
    var renderer = new server_1.ServerRenderer(Root_1.default);
    return renderer.render(locals, data_1.default, routes);
};
var clientRender = function () {
    var container = document.getElementById('root');
    var child = react_1.createElement(react_router_dom_1.Switch, {}, routes.map(function (e) { return e.route; }));
    var router = react_1.createElement(react_router_dom_1.BrowserRouter, {}, child);
    var app = react_1.createElement(react_hot_loader_1.AppContainer, {}, router);
    react_dom_1.render(app, container);
};
if (typeof window !== 'undefined') {
    window.addEventListener('load', clientRender);
}
exports.default = serverRender;
if (false) {
    module.hot.accept('./data', clientRender);
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_34__;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36)


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__(37);
} else {
  module.exports = require('./index.dev');
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.AppContainer = __webpack_require__(38);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__(39);
} else {
  module.exports = require('./AppContainer.dev');
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(5);
var server_1 = __webpack_require__(16);
var ServerRenderer = /** @class */ (function () {
    function ServerRenderer(Root) {
        this.Root = Root;
    }
    ServerRenderer.prototype.render = function (locals, website, routes) {
        var _this = this;
        var routeSwitch = react_1.createElement(react_router_dom_1.Switch, {}, routes.map(function (r) { return r.route; }));
        return routes.reduce(function (result, _a) {
            var page = _a.page, route = _a.route;
            // react root contents rendered with react ids
            var router = react_1.createElement(react_router_dom_1.StaticRouter, getRouterProps(page.url), routeSwitch);
            var body = server_1.renderToString(router);
            // site skeleton rendered without react ids
            var root = react_1.createElement(_this.Root, getRootProps(locals, website, page));
            var html = server_1.renderToStaticMarkup(root);
            result[page.url] = '<!DOCTYPE html>\n' + html.replace("%%%BODY%%%", body);
            return result;
        }, {});
    };
    return ServerRenderer;
}());
exports.ServerRenderer = ServerRenderer;
exports.default = ServerRenderer;
function getRouterProps(location) {
    return { location: location, context: {} };
}
function getRootProps(locals, website, page) {
    var assets = Object.keys(locals.webpackStats.compilation.assets)
        .map(function (url) { return "/" + url; });
    var css = assets.filter(function (value) { return value.match(/\.css$/); });
    var js = assets.filter(function (value) { return value.match(/\.js$/); });
    return {
        website: website,
        page: page,
        localBundles: { css: css, js: js },
        externalBundles: { css: locals.css || [], js: locals.js || [] },
    };
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
function Root(_a) {
    var website = _a.website, page = _a.page, localBundles = _a.localBundles, externalBundles = _a.externalBundles;
    return (React.createElement("html", null,
        React.createElement("head", null,
            React.createElement("title", null,
                page.title,
                " | ",
                website.title),
            React.createElement("meta", { name: 'path', content: page.url }),
            React.createElement("meta", { name: 'keywords', content: page.tags.join(', ') }),
            React.createElement("meta", { name: 'description', content: page.description }),
            React.createElement("meta", { name: 'viewport', content: 'width=device-width; initial-scale=1.0' }),
            localBundles.css.map(function (url) { return (React.createElement("link", { type: 'text/css', rel: 'stylesheet', href: url, key: url })); }),
            React.createElement("meta", { property: 'og:url', content: "" + website.baseUrl + page.url }),
            React.createElement("meta", { property: 'og:title', content: page.title }),
            page.image !== null ? React.createElement("meta", { property: 'og:image', content: page.image }) : null,
            React.createElement("meta", { property: 'og:description', content: page.description }),
            React.createElement("meta", { property: 'og:locale', content: website.locale }),
            React.createElement("meta", { property: 'og:type', content: page.url === '/' ? 'website' : 'article' })),
        React.createElement("body", null,
            React.createElement("div", { id: 'root' }, "%%%BODY%%%"),
            externalBundles.js.map(function (url) { return (React.createElement("script", { type: 'text/javascript', src: url, key: url })); }),
            localBundles.js.map(function (url) { return (React.createElement("script", { type: 'text/javascript', src: url, key: url })); }),
            externalBundles.css.map(function (url) { return (React.createElement("link", { type: 'text/css', rel: 'stylesheet', href: url, key: url })); }))));
}
exports.Root = Root;
exports.default = Root;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var react_router_dom_1 = __webpack_require__(5);
var NOT_FOUND_URL = '/404';
var RoutesFactory = /** @class */ (function () {
    function RoutesFactory() {
    }
    RoutesFactory.prototype.getRoutes = function (website) {
        var error404 = website.pages[NOT_FOUND_URL];
        if (error404 === undefined) {
            throw new Error("couldn't find page of url " + NOT_FOUND_URL);
        }
        function createRoute(page, path, exact) {
            if (path === void 0) { path = page.url; }
            if (exact === void 0) { exact = true; }
            var component = function () { return react_1.createElement(page.layout.component, { website: website, page: page }); };
            var routeProps = { page: page, path: path, exact: exact, key: path, component: component };
            var route = react_1.createElement(react_router_dom_1.Route, routeProps);
            return { page: page, route: route };
        }
        var routes = [].concat.call(
        // categories
        Object.keys(website.categories)
            .map(function (title) { return website.categories[title]; })
            .filter(function (category) { return category.output; })
            .map(function (category) { return createRoute(category); }), 
        // tags
        Object.keys(website.tags)
            .map(function (title) { return createRoute(website.tags[title]); }), 
        // pages
        Object.keys(website.pages)
            .map(function (title) { return website.pages[title]; })
            .filter(function (page) { return page.output; })
            .map(function (page) { return createRoute(page); }), 
        // 404 with exact = false (must be at the end)
        [
            createRoute(error404, '/', false),
        ]);
        return routes;
    };
    return RoutesFactory;
}());
exports.RoutesFactory = RoutesFactory;
;
exports.default = RoutesFactory;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var server_1 = __webpack_require__(16);
var react_router_dom_1 = __webpack_require__(5);
var utils_1 = __webpack_require__(44);
var models_1 = __webpack_require__(6);
var layouts_1 = __webpack_require__(19);
var includes_1 = __webpack_require__(1);
var collections_1 = __webpack_require__(14);
var pages_1 = __webpack_require__(30);
var categories_1 = __webpack_require__(31);
var tags_1 = __webpack_require__(119);
var menu_1 = __webpack_require__(120);
var config = __webpack_require__(15);
var website = new models_1.Website(checkIsString(config.title, 'config.title'), checkIsString(config.baseUrl, 'config.baseUrl'), checkIsString(config.timezone, 'config.timezone'), checkIsString(config.locale || 'en_US', 'config.locale'));
exports.default = website;
layouts_1.default.forEach(function (layout) { return website.addLayout(layout); });
includes_1.default.forEach(function (include) { return website.addInclude(include); });
collections_1.default.forEach(function (collection) { return website.addCollection(collection); });
pages_1.default.forEach(function (page) { return website.addPage(page); });
categories_1.default.forEach(function (category) { return website.addCategory(category); });
tags_1.default.forEach(function (tag) { return website.addTag(tag); });
website.menu = menu_1.default;
var index = website.pages['/'];
if (index === undefined) {
    throw new Error('page of url \'/\' must be defined to create index.html');
}
// add pages to categories and tags
pages_1.default
    .filter(function (page) { return page.url !== '/'; })
    .forEach(function (page) {
    var requiredBy = "pages['" + page.url + "']";
    page.categories.forEach(function (title) { return website.getCategoryOfTitle(title, requiredBy).pages.push(page); });
    page.tags.forEach(function (title) { return website.getTagOfTitle(title, requiredBy).pages.push(page); });
});
// add sub-categories to categories
categories_1.default.forEach(function (page) {
    var requiredBy = "pages['" + page.url + "']";
    page.categories.forEach(function (title) { return website.getCategoryOfTitle(title, requiredBy).pages.push(page); });
});
// generate descriptions for pages, categories and tags
pages_1.default.forEach(function (page) {
    if (page.description || !page.output) {
        return;
    }
    Object.defineProperty(page, 'description', {
        get: function () { return descriptionFromContent(page); },
        set: function () { throw new Error('Page.description is readonly'); }
    });
});
categories_1.default.forEach(function (category) {
    if (category.description) {
        return;
    }
    Object.defineProperty(category, 'description', {
        get: function () { return descriptionFromContent(category) || descriptionFromPages(category); },
        set: function () { throw new Error('Page.description is readonly'); }
    });
});
tags_1.default.forEach(function (tag) {
    tag.description = descriptionFromPages(tag);
});
// check for missing descriptions
var missingDescription = pages_1.default
    .concat(categories_1.default)
    .concat(tags_1.default)
    .filter(function (p) { return p.description === '' && p.output; })
    .map(function (p) { return p.title; });
if (missingDescription.length !== 0) {
    throw new Error("Description missing in pages " + JSON.stringify(missingDescription) + ". Write some text in the article or add 'description' field.");
}
// if absent, set image to first img src found in content
pages_1.default.forEach(function (page) {
    if (page.image || !page.output) {
        return;
    }
    Object.defineProperty(page, 'image', {
        get: function () { return imageFromContent(page); },
        set: function () { throw new Error('Page.image is readonly'); }
    });
});
function descriptionFromContent(page) {
    var element = react_1.createElement(page.body, { website: website, page: page, respectLimit: true });
    var router = react_1.createElement(react_router_dom_1.StaticRouter, { location: page.url, context: {} }, element);
    return utils_1.stripTags(server_1.renderToStaticMarkup(router));
}
function descriptionFromPages(page) {
    return index.title + " " + page.title + ": " + page.pages.map(function (p) { return p.title; }).join(', ');
}
function imageFromContent(page) {
    var element = react_1.createElement(page.body, { website: website, page: page, respectLimit: false });
    var router = react_1.createElement(react_router_dom_1.StaticRouter, { location: page.url, context: {} }, element);
    var markup = server_1.renderToStaticMarkup(router);
    var found = /<img[^>]* src="([^"]*)"[^>]*>/.exec(markup);
    if (!found) {
        console.warn("Couldn't find image on page " + page.url + "; page.image is null");
        return null;
    }
    return found[1];
}
function checkIsString(value, name) {
    if (typeof value !== 'string') {
        throw new Error(name + " must be a string; got " + value + " (" + typeof value + ")");
    }
    return value;
}


/***/ }),
/* 44 */
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
    // remove images
    tmp = tmp.replace(/<img([^>]*)>/gi, '');
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Collection = /** @class */ (function () {
    function Collection(title, layout, output) {
        this.pages = [];
        this.title = title;
        this.layout = layout;
        this.output = output;
    }
    return Collection;
}());
exports.default = Collection;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Layout = /** @class */ (function () {
    function Layout(name, component) {
        this.name = name;
        this.component = component;
    }
    return Layout;
}());
exports.default = Layout;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Include = /** @class */ (function () {
    function Include(name, component) {
        this.name = name;
        this.component = component;
    }
    return Include;
}());
exports.default = Include;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MenuEntry = /** @class */ (function () {
    function MenuEntry(title, short, url, icon) {
        this.title = title;
        this.short = short;
        this.url = url;
        this.icon = icon;
    }
    return MenuEntry;
}());
exports.default = MenuEntry;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Category_1 = __webpack_require__(17);
var Tag_1 = __webpack_require__(18);
var Website = /** @class */ (function () {
    function Website(title, baseUrl, timezone, locale) {
        this.layouts = {};
        this.includes = {};
        this.collections = {};
        this.categories = {};
        this.tags = {};
        this.pages = {};
        this.entities = {};
        this.title = title;
        this.baseUrl = baseUrl;
        this.timezone = timezone;
        this.locale = locale;
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
        return -1 !== this.menu
            .map(function (entry) { return entry.url; })
            .indexOf(page.url);
    };
    Website.prototype.getMenuEntry = function (page, requiredBy) {
        var found = this.menu.filter(function (entry) { return entry.url === page.url; });
        if (found.length === 0) {
            throw new Error("couldn't find menu entry for url '" + page.url + "'" + (requiredBy ? ' required by ' + requiredBy : ''));
        }
        return found[0];
    };
    return Website;
}());
exports.default = Website;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sztuka-dla-sztuki.markdown": 51,
	"./sztuka-gotowania.markdown": 52,
	"./sztuka-makijazu.markdown": 53,
	"./sztuka-ubioru.markdown": 54
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
webpackContext.id = 50;

/***/ }),
/* 51 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 52 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 53 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 54 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404.markdown": 56,
	"./index.markdown": 57,
	"./kim-jest-olela.markdown": 58,
	"./sitemap.markdown": 59,
	"./tag.markdown": 60
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
webpackContext.id = 55;

/***/ }),
/* 56 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 57 */
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

var _ContentLimiter = __webpack_require__(3);

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
var frontMatter = exports.frontMatter = { "title": "Sztuka Uniwersalna", "date": "2017-07-15T20:12:00.000Z", "permalink": "/", "tags": ["index", "sztuka", "uniwersalna", "moda", "makijaż", "gotowanie", "codzienność", "współczesna", "abstrakcja", "inspiracje"], "description": "Sztuka w codzienności. Aleksandra Krawczyk prezentuje sposoby na odnalezienie odrobiny sztuki w codziennych czynnościach takich jak gotowanie, makijaż, oraz moda. Sztuka współczesna, sztuka abstrakcyjna, inspiracje dziełami wielkich twórców.", "feed": false };
var body = exports.body = "<div>\n  <Feed {...data} feed={ data.website.getCollectionOfTitle('Posts').pages } />\n</div>\n";
var raw = exports.raw = "\n<div>\n  <Feed {...data} feed={ data.website.getCollectionOfTitle('Posts').pages } />\n</div>\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 58 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 59 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 60 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2017-07-15-uniwersalno-sztuki.markdown": 62,
	"./2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla.markdown": 63,
	"./2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor.markdown": 64,
	"./2017-09-16-salatka-z-bialej-rzepy-i-rzodkiewki.markdown": 65,
	"./2017-09-17-smaki-jesieni-vol-dot-2-curry-z-pomidorow-cukinii-i-jablek.markdown": 66,
	"./2017-09-18-fuerteventura-impressions.markdown": 67,
	"./2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor.markdown": 68,
	"./2017-09-25-podlewaj-swoje-kwiaty.markdown": 69,
	"./2017-09-28-neoplastycyzm-moodboard.markdown": 70,
	"./2017-10-03-cala-ta-j-dot-dot-dot.markdown": 71,
	"./2017-10-05-kolo-moodboard.markdown": 72,
	"./2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama.markdown": 73,
	"./2017-10-12-pop-art-moodboard.markdown": 74,
	"./2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy.markdown": 75,
	"./2017-10-19-minimalism-moodboard.markdown": 76,
	"./2017-10-23-smaki-jesieni-vol-dot-3-geometryczna-szarlotka.markdown": 77,
	"./2017-10-25-kolaz-okladek.markdown": 78,
	"./2017-10-26-kubizm-moodboard.markdown": 79,
	"./2017-11-02-surrealizm-moodboard.markdown": 80,
	"./2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle-by-kazimierz-malewicz.markdown": 81,
	"./2017-11-09-action-painting-moodboard.markdown": 82,
	"./2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie.markdown": 83,
	"./2017-11-16-impresjonizm-moodboard.markdown": 84,
	"./2017-11-22-diy-1-edycja-zimowa.markdown": 85,
	"./2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro.markdown": 86,
	"./2017-12-07-op-art-moodboard.markdown": 87,
	"./2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art-w-europie-wschodniej-i-ameryce-lacinskiej-w-latach-50-70.markdown": 88
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
webpackContext.id = 61;

/***/ }),
/* 62 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 63 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 64 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 65 */
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

var _ContentLimiter = __webpack_require__(3);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 66 */
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

var _ContentLimiter = __webpack_require__(3);

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
          photo: 'https://assets2.ello.co/uploads/asset/attachment/6243540/ello-optimized-936d4bdf.jpg',
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
var body = exports.body = "<olela-narrative>\nPomyśl przez chwilę o swoim ulubionym artyście. Może fascynują Cię kompozycje Joan’a Miró , a może przepadasz za kropkami tak jak Yayoi Kusama? Nie znasz ich zbyt wielu? Nie szkodzi – zajrzyj do internetu. Wpisz nazwisko, jakie pierwsze przyjdzie Ci do głowy, lub nazwę kierunku np. kubizm. Reszta wyświetli się sama. Od jednego dzieła do następnego. Zainspiruj się i wykorzystaj talerz jako płótno. Myśląc o składnikach pomyśl też o kolorach. Mieszaj je ze sobą z uważnością buddyjskiego mnicha, zaobserwuj ich strukturę. Na samym końcu zastanów się nad kompozycją. Czy ma mieć charakter otwarty, a może wolisz coś scentrowanego, które elementy warto wyeksponować na pierwszym planie, a które są tylko dodatkiem do koncertu smaków, zapachów i barw. Voilà. Oto dzieło, które w przeciwieństwie do obrazów nie ma przetrwać tysiąca lat, bo im szybciej znika, tym bardziej się podoba.\n</olela-narrative>\n<div>\n  <Recipe\n    title='Curry z pomidorów, cukinii i jabłek'\n    time='30 minut'\n    level='łatwy'\n    mealFor='4 osoby'\n    photo='https://assets2.ello.co/uploads/asset/attachment/6243540/ello-optimized-936d4bdf.jpg'\n    altText='Zdjęcie przedstawia seledynowy talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajdują się warzywa, czerwony sos, biały sos, żółty ryż, zioła, orzechy.'\n  >\n    <Ingredient title='cukinia' quantity='1 średnia ' />\n    <Ingredient title='jabłko' quantity='1 średnie' />\n    <Ingredient title='cebula czerwona' quantity='2 średnie' />\n    <Ingredient title='pomidory krojone' quantity='1 puszka' />\n    <Ingredient title='koncentrat pomidorowy' quantity='2 łyżeczki' />\n    <Ingredient title='czosnek' quantity='3 ząbki' />\n    <Ingredient title='goździki' quantity='3 sztuki' />\n    <Ingredient title='papryka słodka mielona' quantity='1 łyżka'/>\n    <Ingredient title='świeża kolendra do przyozdobienia' />\n    <Ingredient title='pieprz i sól do smaku' />\n    <Ingredient title='ryż basmati' quantity='250 g' />\n    <Ingredient title='daktyle suszone' quantity='garść' />\n    <Ingredient title='kurkuma lub przyprawa curry' quantity='ok jedna łyżka' />\n    <Method>\n      Cebulę kroję w drobną kostkę, siekam 2 ząbki czosnku i wrzucam wszystko do garnka na rozgrzany olej. Dorzucam 3 goździki. Kiedy całość się podsmaża kroję w kostkę cukinię i jabłka. W osobnym garnku, w osolonej wodzie gotuję ryż. Cukinie dorzucam do cebuli, zasypuję solą i przykrywam. Duszę tak ok. 10min, po czym dodaję łyżkę słodkiej papryki i zostawiam jeszcze na chwilę. Kiedy ryż się ugotuję, odsączam go i dorzucam posiekane daktyle i ok. 2 łyżki kurkumy (lub przyprawy curry) i mieszam dokładnie (można dodać odrobinę oliwy). Do podduszonej cukinii wlewam pomidory i koncentrat, oraz dorzucam jabłka. Zostawiam całość na małym ogniu pod przykryciem na ok 10-15 min. Na sam koniec wyciskam jeszcze ząbek czosnku i doprawiam solą i pieprzem według uznania (można dodać też trochę pieprzu cayenne dla ostrości). Gotowe. \n    </Method>\n  </Recipe>\n</div>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6238656/ello-optimized-e62176d8.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na seledynowy talerz na jasnym tle. Na talerzu znajdują się żółty ryż, czerwony sos, warzywa, zioła, orzechy.\" /></p>\n";
var raw = exports.raw = "\n<olela-narrative>\nPomyśl przez chwilę o swoim ulubionym artyście. Może fascynują Cię kompozycje Joan’a Miró , a może przepadasz za kropkami tak jak Yayoi Kusama? Nie znasz ich zbyt wielu? Nie szkodzi – zajrzyj do internetu. Wpisz nazwisko, jakie pierwsze przyjdzie Ci do głowy, lub nazwę kierunku np. kubizm. Reszta wyświetli się sama. Od jednego dzieła do następnego. Zainspiruj się i wykorzystaj talerz jako płótno. Myśląc o składnikach pomyśl też o kolorach. Mieszaj je ze sobą z uważnością buddyjskiego mnicha, zaobserwuj ich strukturę. Na samym końcu zastanów się nad kompozycją. Czy ma mieć charakter otwarty, a może wolisz coś scentrowanego, które elementy warto wyeksponować na pierwszym planie, a które są tylko dodatkiem do koncertu smaków, zapachów i barw. Voilà. Oto dzieło, które w przeciwieństwie do obrazów nie ma przetrwać tysiąca lat, bo im szybciej znika, tym bardziej się podoba.\n</olela-narrative>\n\n<div>\n  <Recipe\n    title='Curry z pomidorów, cukinii i jabłek'\n    time='30 minut'\n    level='łatwy'\n    mealFor='4 osoby'\n    photo='https://assets2.ello.co/uploads/asset/attachment/6243540/ello-optimized-936d4bdf.jpg'\n    altText='Zdjęcie przedstawia seledynowy talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajdują się warzywa, czerwony sos, biały sos, żółty ryż, zioła, orzechy.'\n  >\n    <Ingredient title='cukinia' quantity='1 średnia ' />\n    <Ingredient title='jabłko' quantity='1 średnie' />\n    <Ingredient title='cebula czerwona' quantity='2 średnie' />\n    <Ingredient title='pomidory krojone' quantity='1 puszka' />\n    <Ingredient title='koncentrat pomidorowy' quantity='2 łyżeczki' />\n    <Ingredient title='czosnek' quantity='3 ząbki' />\n    <Ingredient title='goździki' quantity='3 sztuki' />\n    <Ingredient title='papryka słodka mielona' quantity='1 łyżka'/>\n    <Ingredient title='świeża kolendra do przyozdobienia' />\n    <Ingredient title='pieprz i sól do smaku' />\n    <Ingredient title='ryż basmati' quantity='250 g' />\n    <Ingredient title='daktyle suszone' quantity='garść' />\n    <Ingredient title='kurkuma lub przyprawa curry' quantity='ok jedna łyżka' />\n    <Method>\n      Cebulę kroję w drobną kostkę, siekam 2 ząbki czosnku i wrzucam wszystko do garnka na rozgrzany olej. Dorzucam 3 goździki. Kiedy całość się podsmaża kroję w kostkę cukinię i jabłka. W osobnym garnku, w osolonej wodzie gotuję ryż. Cukinie dorzucam do cebuli, zasypuję solą i przykrywam. Duszę tak ok. 10min, po czym dodaję łyżkę słodkiej papryki i zostawiam jeszcze na chwilę. Kiedy ryż się ugotuję, odsączam go i dorzucam posiekane daktyle i ok. 2 łyżki kurkumy (lub przyprawy curry) i mieszam dokładnie (można dodać odrobinę oliwy). Do podduszonej cukinii wlewam pomidory i koncentrat, oraz dorzucam jabłka. Zostawiam całość na małym ogniu pod przykryciem na ok 10-15 min. Na sam koniec wyciskam jeszcze ząbek czosnku i doprawiam solą i pieprzem według uznania (można dodać też trochę pieprzu cayenne dla ostrości). Gotowe. \n    </Method>\n  </Recipe>\n</div>\n\n\n![Zdjęcie przedstawia zbliżenie na seledynowy talerz na jasnym tle. Na talerzu znajdują się żółty ryż, czerwony sos, warzywa, zioła, orzechy.](https://assets0.ello.co/uploads/asset/attachment/6238656/ello-optimized-e62176d8.jpg)";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 67 */
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

var _ContentLimiter = __webpack_require__(3);

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
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6242404/ello-optimized-dbcead22.jpg', alt: 'Zdj\u0119cie przedstawia szkic wykonany tuszem z elementami kola\u017Cu. Z lewego g\xF3rnego i prawego dolnego rogu wyrasta ro\u015Blina, a elementy geometryczne s\u0105 czerwone.' })
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Podobno'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Na pocz\u0105tku by\u0142a Atlantyda. Cudowna kraina, w kt\xF3rej diamenty wyst\u0119powa\u0142y tak cz\u0119sto, jak warzywa czy zio\u0142a. G\xF3ry odgradza\u0142y ziemie od nieprzyjaznych wiatr\xF3w. Mieszka\u0144cy \u017Cyli w harmonii z natur\u0105 i sob\u0105 nawzajem. Mierzyli do dw\xF3ch metr\xF3w wzrostu, oczy ich by\u0142y niebieskie, a w\u0142osy jasne , dotkni\u0119te s\u0142o\u0144cem. Nie wiadomo jak znale\u017Ali si\u0119 na wyspie, gdy\u017C powszechnie znany by\u0142 ich wstr\u0119t do wody, nie potrafili tak\u017Ce budowa\u0107 \u0142odzi. Istnieje hipoteza, \u017Ce byli potomkami jednego z odga\u0142\u0119zie\u0144 Celt\xF3w, oni bowiem oraz plemiona germa\u0144skie odbywa\u0142y odleg\u0142e podr\xF3\u017Ce jeszcze przed er\u0105 rzymsk\u0105.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6235695/ello-optimized-50fa876a.jpg', alt: 'Zdj\u0119cie przedstawia pla\u017C\u0119 ze \u015Bladami odci\u015Bni\u0119tymi w piasku, w oddali wida\u0107 wod\u0119 i g\xF3ry.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6235697/ello-optimized-62f6ec60.jpg', alt: 'Zdj\u0119cie przedstawia piasek z odci\u015Bni\u0119tymi \u015Bladami st\xF3p.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6235698/ello-optimized-ca951166.jpg', alt: 'Zdj\u0119cie przedstawia piasek z odci\u015Bni\u0119tymi \u015Bladami st\xF3p, po lewej stronie w oddali wida\u0107 dwie sylwetki ludzkie.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6235700/ello-optimized-c11e111e.jpg', alt: 'Zdj\u0119cie przedstawia krajobraz g\xF3r, w oddali wida\u0107 wod\u0119, a na pierwszym planie \u017C\xF3\u0142t\u0105 tabliczk\u0119 z czarnym znakiem wiewi\xF3rki.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Jean de B\xE9thencourt dotar\u0142 do wybrze\u017Cy Wysp Kanaryjskich 1 czerwca 1402 r. i w zaledwie 4 lata zdoby\u0142 Fuerteventur\u0119, Lanzarot\u0119, La Gomer\u0119, El Hierro. Utworzone przez niego miasteczko Betancuria (istniej\u0105ce do dzi\u015B) przez wiele lat by\u0142o stolic\u0105 Fuerteventury. Pozosta\u0142e wyspy \u2013 Gran Canaria, La Palma i Teneryfa zosta\u0142y podbite przez Alonso Fern\xE1ndez de Lugo . Liczne, krwawe walki doszcz\u0119tnie zniszczy\u0142y kultur\u0119 i spo\u0142ecze\u0144stwo Guancz\xF3w \u2013 niebieskookich blondyn\xF3w, wysokich na dwa metry. Tak oto zgin\u0119\u0142y ostatnie, \u017Cywe dowody istnienia mitycznej krainy.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6242475/ello-optimized-d8a5d13e.jpg', alt: 'Zdj\u0119cie przedstawia pomnik m\u0119\u017Cczyzny z br\u0105zu, trzymaj\u0105cego w\u0142\xF3czni\u0119, w uj\u0119ciu od do\u0142u.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6242478/ello-optimized-c40dcdd8.jpg', alt: 'Zdj\u0119cie przedstawia po\u0142ow\u0119 pomnika m\u0119\u017Cczyzny z br\u0105zu, trzymaj\u0105cego w\u0142\xF3czni\u0119, w uj\u0119ciu od do\u0142u' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6242481/ello-optimized-480397f0.jpg', alt: 'Zdj\u0119cie przedstawia d\u0142o\u0144 pomnika m\u0119\u017Cczyzny wykonanego z br\u0105zu, a w tle g\xF3rski krajobraz.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6242483/ello-optimized-9531724e.jpg', alt: 'Zdj\u0119cie przedstawia dwa pomniki m\u0119\u017Cczyzn z br\u0105zu, obaj trzymaj\u0105 w d\u0142oniach w\u0142\xF3czni\u0119.' })
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Podobno'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Na Fuerteventurze mieszka 100 tysi\u0119cy ludzi, a 150 tysi\u0119cy k\xF3z. Podczas naszej tygodniowej wyprawy kozy widzia\u0142am tylko dwa razy. W pomara\u0144czowych ska\u0142ach dostrzeg\u0142am o wiele wi\u0119cej chart\xF3w kanaryjskich, gdy\u017C na wyspie trwa sezon polowa\u0144 na kr\xF3liki. Owszem, pr\xF3bowa\u0142am kozich ser\xF3w, kt\xF3re przyznaje z r\u0119k\u0105 na sercu, by\u0142y najpyszniejsze jakie w \u017Cyciu jad\u0142am. Kozy \u017Cywi\u0105 si\u0119 bowiem g\u0142\xF3wnie zio\u0142ami i porostami. Sery dzi\u0119ki temu maj\u0105 posmak tymianku, migda\u0142\xF3w, dzikiego miodu - Co\u015B niesamowitego! Najlepiej smakuj\u0105 w po\u0142\u0105czeniu z d\u017Cemem figowym lub s\u0142odkim gofio (rodzaj m\u0105czki wyrabianej z upra\u017Conych ziaren j\u0119czmienia, kukurydzy i innych zb\xF3\u017C, kt\xF3ra w po\u0142\u0105czeniu z wod\u0105 lub mlekiem daje konsystencje zbli\u017Con\u0105 do cha\u0142wy). Uda\u0142o nam si\u0119 przywie\u017A\u0107 trzy r\xF3\u017Cne gatunki sera z lokalnej wytw\xF3rni. \u017Ba\u0142uj\u0119, \u017Ce nie kupi\u0142am gofio, w Polsce jest je niesamowicie ci\u0119\u017Cko dosta\u0107.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6242470/ello-optimized-49f44a2b.jpg', alt: 'Zdj\u0119cie przedstawia g\xF3rski krajobraz z zielon\u0105 ro\u015Blin\u0105 na pierwszym palnie.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6242493/ello-optimized-03c9d495.jpg', alt: 'Zdj\u0119cie przedstawia g\xF3r\u0119 z drog\u0105 po \u015Brodku, na tle niebieskiego nieba.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6242384/ello-optimized-247979b7.jpg', alt: 'Zdj\u0119cie jest kola\u017Cem geometrycznych czerwono-niebieskich element\xF3w z dwiema czarnymi liniami.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6242412/ello-optimized-c8dd3711.jpg', alt: 'Zdj\u0119cie jest kola\u017Cem geometrycznych element\xF3w, na czerwonym tle, elementy s\u0105 bia\u0142e i niebieskie, a z lewej strony widzimy element ro\u015Blinny.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6242502/ello-optimized-c7e3e36f.jpg', alt: 'Zdj\u0119cie przedstawia \u017C\xF3\u0142to-bia\u0142y budynek z szyldem na g\xF3rze. Na pierwszym planie znajduj\u0105 si\u0119 ro\u015Bliny w donicach i szklana balustrada.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6242521/ello-optimized-753d42b0.jpg', alt: 'Zdj\u0119cie przedstawia ulic\u0119 z bia\u0142ym budynkiem po prawej, na kt\xF3rego \u015Bcianie znajduje si\u0119 mural przedstawiaj\u0105cy dziewczynk\u0119 w pomara\u0144czowej sukience z falbankami podlewaj\u0105c\u0105 kwiat w kszta\u0142cie serca.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6242514/ello-optimized-212ccd8b.jpg', alt: 'Zdj\u0119cie przedstawia ulic\u0119, przy kt\xF3rej stoi budynek o zielonych oknach i drzwiach, a na niebie s\u0105 bia\u0142e chmury.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6242506/ello-optimized-34aa198e.jpg', alt: 'Zdj\u0119cie przedstawia ulic\u0119, przy kt\xF3rej z lewej strony stoj\u0105 samochody i rosn\u0105 palmy, w tle wida\u0107 bia\u0142y budynek.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6242503/ello-optimized-090a1c7e.jpg', alt: 'Zdj\u0119cie przedstawia prawy bok m\u0119\u017Cczyzny siedz\u0105cego w samochodzie. M\u0119\u017Cczyzna ma niebieski kapelusz na g\u0142owie, czerwon\u0105 koszulk\u0119 i okulary, a w tle wida\u0107 palmy i niebieskie niebo.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6242527/ello-optimized-c8f56a61.jpg', alt: 'Zdj\u0119cie przedstawia drog\u0119 z \u017C\xF3\u0142tymi pasami, kt\xF3r\u0105 jad\u0105 samochody. Po bokach widzimy g\xF3ry, a po prawej stronie \u017C\xF3\u0142ty znak drogowy z liczb\u0105 60.' })
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Podobno'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Nazwa Fuerteventura pochodzi od mocno (fuerte) wiej\u0105cych tu wiatr\xF3w (viento). Nic nie jest w stanie ich zatrzyma\u0107, gdy\u017C wyspa w najwy\u017Cszym punkcie ma zaledwie 807m wysoko\u015Bci. Bardziej wietrzna jest zachodnia strona wyspy, to istny raj dla surfer\xF3w. Odbywaj\u0105 si\u0119 tu Mistrzostwa \u015Awiata w Windsurfingu i Kiteboardingu.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6242538/ello-optimized-0e2b067e.jpg', alt: 'Zdj\u0119cie przedstawia posta\u0107 ubran\u0105 na bia\u0142o w kapeluszu stoj\u0105c\u0105 ty\u0142em na pla\u017Cy. W oddali z prawej strony wida\u0107 budynki, a z lewej na niebie unosz\u0105 si\u0119 latawce.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6242392/ello-optimized-3c4cd600.jpg', alt: 'Zdj\u0119cie przedstawia kola\u017C z\u0142o\u017Cony z czarnych linii jednego niebiesko-czerwonego elementu w prawym g\xF3rnym rogu.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Czasami zdarza si\u0119 te\u017C, \u017Ce wiatry nios\u0105 ze sob\u0105 zjawiska, takie jak \u2018kalima\u2019. Mieli\u015Bmy okazj\u0119 j\u0105 zobaczy\u0107 i do\u015Bwiadczy\u0107 w pierwsze dwa dni naszego pobytu na wyspie. Kiedy l\u0105dowali\u015Bmy mia\u0142am wra\u017Cenie, \u017Ce ca\u0142y czas znajdujemy si\u0119 w chmurze lub we mgle. \u2018Kalima\u2019 wi\u0105\u017Ce si\u0119 z burzami piaskowymi nad Sahar\u0105 i transportem py\u0142u przez wschodnie wiatry. To tak jakby \u2018kanaryjski smog\u2019. Py\u0142 zawieszony w powietrzu znacz\u0105co utrudnia widoczno\u015B\u0107, powietrze staje si\u0119 suche, a temperatura wzrasta \u015Brednio do 40 stopni. Na szcz\u0119\u015Bcie furte vientos do\u015B\u0107 pr\u0119dko upora\u0142y si\u0119 z kalim\u0105 i prawdziwe kolory krajobraz\xF3w zaistnia\u0142y na horyzoncie.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6235691/ello-optimized-ab4b9031.jpg', alt: 'Zdj\u0119cie przedstawia samolot lec\u0105cy nad piaszczystym krajobrazem. W oddali wida\u0107 budynki.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6242487/ello-optimized-5c9f0b2a.jpg', alt: 'Zdj\u0119cie przedstawia samoch\xF3d marki toyota stoj\u0105cy ty\u0142em. W oddali wida\u0107 g\xF3ry.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6242526/ello-optimized-be05e84e.jpg', alt: 'Zdj\u0119cie przedstawia ulic\u0119 z budynkami po bokach i samochodami stoj\u0105cymi po bokach. Na ulicy z prawej strony widoczny jest cie\u0144 osoby fotografuj\u0105cej.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6235686/ello-optimized-257bf96a.jpg', alt: 'Zdj\u0119cie przedstawia okr\u0105g\u0142e okno przez kt\xF3re wida\u0107 morze i ska\u0142y.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6235684/ello-optimized-10f89506.jpg', alt: 'Zdj\u0119cie przedstawia bia\u0142e krzes\u0142a i stoliki stoj\u0105ce przy szklanej balustradzie tu\u017C nad wod\u0105.' })
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Podobno'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Obecnie Fuerteventura jest zielona. Rozejrza\u0142am si\u0119 dooko\u0142a w poszukiwaniu owej flory. Dostrzeg\u0142am par\u0119 palm, kt\xF3rych dominuj\u0105cym kolorem wcale nie by\u0142 zielony, tylko co\u015B, co jako malarz nazwa\u0142abym rozbielon\u0105 umbr\u0105. Dalej m\xF3j wzrok napotka\u0142 aloes. No i tutaj rzeczywi\u015Bcie mam do czynienia z odcieniem zieleni, problem w tym, \u017Ce ziele\u0144 ta nie jest zieleni\u0105 nasycon\u0105, nie krzyczy do mnie swoj\u0105 soczysto\u015Bci\u0105, nie wywo\u0142uje nadprogramowej produkcji \u015Bliny w moich ustach, czy te\u017C dodatkowej porcji endorfin w m\xF3zgu. Ta ziele\u0144 te\u017C ma w sobie du\u017Co bieli, \u015Bwieci szaro\u015Bci\u0105. A mo\u017Ce to wszystko przez afryka\u0144skie s\u0142o\u0144ce? Mo\u017Ce to w\u0142a\u015Bnie tak mocne \u015Bwiat\u0142o sprawia, \u017Ce widz\u0119 wszystko jak przez blend\u0119. Szukam dalej.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6242486/ello-optimized-5d0f0df6.jpg', alt: 'Zdj\u0119cie przedstawia opuncj\u0119 figow\u0105, trzy doniczki z kwiatami stoj\u0105ce na ziemi po prawej stronie, stolik wykonany ze szpuli po lewej, na stoliku stoj\u0105 trzy ma\u0142e doniczki z kwiatkami. Wszystko na tle \u015Bciany.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6242499/ello-optimized-ede9ae43.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na opuncj\u0119 figow\u0105.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6242420/ello-optimized-d45dfd3c.jpg', alt: 'Zdj\u0119cie przedstawia kompozycje z dw\xF3ch plam czerwonej barwy i dw\xF3ch plam czarnych, wszystko \u0142\u0105czone cienk\u0105 czarn\u0105 lini\u0105.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'No i jest wreszcie, wreszcie kolor. Okr\u0105\u017Cam dooko\u0142a opuncj\u0119 figow\u0105, pami\u0119taj\u0105c, \u017Ceby nie dotyka\u0107 owoc\xF3w. Zbieram delikatnie za pomoc\u0105 palc\xF3w bia\u0142e, male\u0144kie robaczki, jakby pokryte pszenn\u0105 m\u0105k\u0105 pozna\u0144sk\u0105. Rozgniatam jednego (w g\u0142owie powtarzaj\u0105c mantr\u0119 \u2018 w imi\u0119 sztuki, w imi\u0119 sztuki!\u2019), oto jest \u2013 czerwie\u0144 koszelinowa. Fuerteventura jest czerwona.'
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Na pewno kiedy\u015B tam wr\xF3c\u0119.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6242407/ello-optimized-d9c1ce8f.jpg', alt: 'Zdj\u0119cie przedstawia kola\u017C geometrycznych element\xF3w na czerwonym tle. Z lewej strony widzimy ma\u0142e kobiece usta.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6242416/ello-optimized-05d3d3e1.jpg', alt: 'Zdj\u0119cie przedstawia kola\u017C bia\u0142ych element\xF3w na czerwonym tle, u\u0142o\u017Conych na samym \u015Brodku na kszta\u0142t p\u0142omieni.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6242529/ello-optimized-b9d42098.jpg', alt: 'Zdj\u0119cie przedstawia g\xF3rzysty krajobraz w ciep\u0142ych kolorach. Wida\u0107 bia\u0142e budynki i palmy.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6242531/ello-optimized-8b85d610.jpg', alt: 'Zdj\u0119cie przedstawia widok z g\xF3ry na pla\u017C\u0119 z czarnym piaskiem, na kt\xF3rym opalaj\u0105 si\u0119 ludzie, po prawej stronie stoj\u0105 kolorowe \u0142\xF3dki, a w oddali wida\u0107 g\xF3ry.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6242530/ello-optimized-59a66b0b.jpg', alt: 'Zdj\u0119cie przedstawia widok z g\xF3ry na pla\u017C\u0119 z czarnym piaskiem, w oddali wida\u0107 g\xF3ry, po prawej stronie znajduje si\u0119 woda.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6243115/ello-optimized-32987e2b.jpg', alt: 'Zdj\u0119cie przedstawia obraz namalowany tuszami w kolorze czarnym, czerwonym i niebieskim. Obraz ma charakter abstrakcyjny.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6235694/ello-optimized-6e539694.jpg', alt: 'Zdj\u0119cie przedstawia portret m\u0142odej kobiety w kapeluszu i okularach przeciws\u0142onecznych. W tle wida\u0107 palmy.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Fuerteventura impressions", "date": "2017-09-18T15:38:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["podróż", "wyspa", "fuerteventura", "sztuka", "szkic", "art", "kreacja"] };
var body = exports.body = "<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6235681/ello-optimized-4ab7553c.jpg\" alt=\"Zdjęcie centralnie przedstawia roślinę z rodziny kaktusowatych, rosnącą w szarej glebie na tle jasnej ściany.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6242404/ello-optimized-dbcead22.jpg\" alt=\"Zdjęcie przedstawia szkic wykonany tuszem z elementami kolażu. Z lewego górnego i prawego dolnego rogu wyrasta roślina, a elementy geometryczne są czerwone.\" /></p>\n<olela-narrative>\nPodobno\n</olela-narrative>\n<p>Na początku była Atlantyda. Cudowna kraina, w której diamenty występowały tak często, jak warzywa czy zioła. Góry odgradzały ziemie od nieprzyjaznych wiatrów. Mieszkańcy żyli w harmonii z naturą i sobą nawzajem. Mierzyli do dwóch metrów wzrostu, oczy ich były niebieskie, a włosy jasne , dotknięte słońcem. Nie wiadomo jak znaleźli się na wyspie, gdyż powszechnie znany był ich wstręt do wody, nie potrafili także budować łodzi. Istnieje hipoteza, że byli potomkami jednego z odgałęzień Celtów, oni bowiem oraz plemiona germańskie odbywały odległe podróże jeszcze przed erą rzymską.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6235695/ello-optimized-50fa876a.jpg\" alt=\"Zdjęcie przedstawia plażę ze śladami odciśniętymi w piasku, w oddali widać wodę i góry.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6235697/ello-optimized-62f6ec60.jpg\" alt=\"Zdjęcie przedstawia piasek z odciśniętymi śladami stóp.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6235698/ello-optimized-ca951166.jpg\" alt=\"Zdjęcie przedstawia piasek z odciśniętymi śladami stóp, po lewej stronie w oddali widać dwie sylwetki ludzkie.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6235700/ello-optimized-c11e111e.jpg\" alt=\"Zdjęcie przedstawia krajobraz gór, w oddali widać wodę, a na pierwszym planie żółtą tabliczkę z czarnym znakiem wiewiórki.\" /></p>\n<p>Jean de Béthencourt dotarł do wybrzeży Wysp Kanaryjskich 1 czerwca 1402 r. i w zaledwie 4 lata zdobył Fuerteventurę, Lanzarotę, La Gomerę, El Hierro. Utworzone przez niego miasteczko Betancuria (istniejące do dziś) przez wiele lat było stolicą Fuerteventury. Pozostałe wyspy – Gran Canaria, La Palma i Teneryfa zostały podbite przez Alonso Fernández de Lugo . Liczne, krwawe walki doszczętnie zniszczyły kulturę i społeczeństwo Guanczów – niebieskookich blondynów, wysokich na dwa metry. Tak oto zginęły ostatnie, żywe dowody istnienia mitycznej krainy.</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6242475/ello-optimized-d8a5d13e.jpg\" alt=\"Zdjęcie przedstawia pomnik mężczyzny z brązu, trzymającego włócznię, w ujęciu od dołu.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6242478/ello-optimized-c40dcdd8.jpg\" alt=\"Zdjęcie przedstawia połowę pomnika mężczyzny z brązu, trzymającego włócznię, w ujęciu od dołu\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6242481/ello-optimized-480397f0.jpg\" alt=\"Zdjęcie przedstawia dłoń pomnika mężczyzny wykonanego z brązu, a w tle górski krajobraz.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6242483/ello-optimized-9531724e.jpg\" alt=\"Zdjęcie przedstawia dwa pomniki mężczyzn z brązu, obaj trzymają w dłoniach włócznię.\" /></p>\n<olela-narrative>\nPodobno\n</olela-narrative>\n<p>Na Fuerteventurze mieszka 100 tysięcy ludzi, a 150 tysięcy kóz. Podczas naszej tygodniowej wyprawy kozy widziałam tylko dwa razy. W pomarańczowych skałach dostrzegłam o wiele więcej chartów kanaryjskich, gdyż na wyspie trwa sezon polowań na króliki. Owszem, próbowałam kozich serów, które przyznaje z ręką na sercu, były najpyszniejsze jakie w życiu jadłam. Kozy żywią się bowiem głównie ziołami i porostami. Sery dzięki temu mają posmak tymianku, migdałów, dzikiego miodu - Coś niesamowitego! Najlepiej smakują w połączeniu z dżemem figowym lub słodkim gofio (rodzaj mączki wyrabianej z uprażonych ziaren jęczmienia, kukurydzy i innych zbóż, która w połączeniu z wodą lub mlekiem daje konsystencje zbliżoną do chałwy). Udało nam się przywieźć trzy różne gatunki sera z lokalnej wytwórni. Żałuję, że nie kupiłam gofio, w Polsce jest je niesamowicie ciężko dostać.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6242470/ello-optimized-49f44a2b.jpg\" alt=\"Zdjęcie przedstawia górski krajobraz z zieloną rośliną na pierwszym palnie.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6242493/ello-optimized-03c9d495.jpg\" alt=\"Zdjęcie przedstawia górę z drogą po środku, na tle niebieskiego nieba.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6242384/ello-optimized-247979b7.jpg\" alt=\"Zdjęcie jest kolażem geometrycznych czerwono-niebieskich elementów z dwiema czarnymi liniami.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6242412/ello-optimized-c8dd3711.jpg\" alt=\"Zdjęcie jest kolażem geometrycznych elementów, na czerwonym tle, elementy są białe i niebieskie, a z lewej strony widzimy element roślinny.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6242502/ello-optimized-c7e3e36f.jpg\" alt=\"Zdjęcie przedstawia żółto-biały budynek z szyldem na górze. Na pierwszym planie znajdują się rośliny w donicach i szklana balustrada.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6242521/ello-optimized-753d42b0.jpg\" alt=\"Zdjęcie przedstawia ulicę z białym budynkiem po prawej, na którego ścianie znajduje się mural przedstawiający dziewczynkę w pomarańczowej sukience z falbankami podlewającą kwiat w kształcie serca.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6242514/ello-optimized-212ccd8b.jpg\" alt=\"Zdjęcie przedstawia ulicę, przy której stoi budynek o zielonych oknach i drzwiach, a na niebie są białe chmury.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6242506/ello-optimized-34aa198e.jpg\" alt=\"Zdjęcie przedstawia ulicę, przy której z lewej strony stoją samochody i rosną palmy, w tle widać biały budynek.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6242503/ello-optimized-090a1c7e.jpg\" alt=\"Zdjęcie przedstawia prawy bok mężczyzny siedzącego w samochodzie. Mężczyzna ma niebieski kapelusz na głowie, czerwoną koszulkę i okulary, a w tle widać palmy i niebieskie niebo.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6242527/ello-optimized-c8f56a61.jpg\" alt=\"Zdjęcie przedstawia drogę z żółtymi pasami, którą jadą samochody. Po bokach widzimy góry, a po prawej stronie żółty znak drogowy z liczbą 60.\" /></p>\n<olela-narrative>\nPodobno\n</olela-narrative>\n<p>Nazwa Fuerteventura pochodzi od mocno (fuerte) wiejących tu wiatrów (viento). Nic nie jest w stanie ich zatrzymać, gdyż wyspa w najwyższym punkcie ma zaledwie 807m wysokości. Bardziej wietrzna jest zachodnia strona wyspy, to istny raj dla surferów. Odbywają się tu Mistrzostwa Świata w Windsurfingu i Kiteboardingu.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6242538/ello-optimized-0e2b067e.jpg\" alt=\"Zdjęcie przedstawia postać ubraną na biało w kapeluszu stojącą tyłem na plaży. W oddali z prawej strony widać budynki, a z lewej na niebie unoszą się latawce.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6242392/ello-optimized-3c4cd600.jpg\" alt=\"Zdjęcie przedstawia kolaż złożony z czarnych linii jednego niebiesko-czerwonego elementu w prawym górnym rogu.\" /></p>\n<p>Czasami zdarza się też, że wiatry niosą ze sobą zjawiska, takie jak ‘kalima’. Mieliśmy okazję ją zobaczyć i doświadczyć w pierwsze dwa dni naszego pobytu na wyspie. Kiedy lądowaliśmy miałam wrażenie, że cały czas znajdujemy się w chmurze lub we mgle. ‘Kalima’ wiąże się z burzami piaskowymi nad Saharą i transportem pyłu przez wschodnie wiatry. To tak jakby ‘kanaryjski smog’. Pył zawieszony w powietrzu znacząco utrudnia widoczność, powietrze staje się suche, a temperatura wzrasta średnio do 40 stopni. Na szczęście furte vientos dość prędko uporały się z kalimą i prawdziwe kolory krajobrazów zaistniały na horyzoncie.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6235691/ello-optimized-ab4b9031.jpg\" alt=\"Zdjęcie przedstawia samolot lecący nad piaszczystym krajobrazem. W oddali widać budynki.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6242487/ello-optimized-5c9f0b2a.jpg\" alt=\"Zdjęcie przedstawia samochód marki toyota stojący tyłem. W oddali widać góry.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6242526/ello-optimized-be05e84e.jpg\" alt=\"Zdjęcie przedstawia ulicę z budynkami po bokach i samochodami stojącymi po bokach. Na ulicy z prawej strony widoczny jest cień osoby fotografującej.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6235686/ello-optimized-257bf96a.jpg\" alt=\"Zdjęcie przedstawia okrągłe okno przez które widać morze i skały.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6235684/ello-optimized-10f89506.jpg\" alt=\"Zdjęcie przedstawia białe krzesła i stoliki stojące przy szklanej balustradzie tuż nad wodą.\" /></p>\n<olela-narrative>\nPodobno\n</olela-narrative>\n<p>Obecnie Fuerteventura jest zielona. Rozejrzałam się dookoła w poszukiwaniu owej flory. Dostrzegłam parę palm, których dominującym kolorem wcale nie był zielony, tylko coś, co jako malarz nazwałabym rozbieloną umbrą. Dalej mój wzrok napotkał aloes. No i tutaj rzeczywiście mam do czynienia z odcieniem zieleni, problem w tym, że zieleń ta nie jest zielenią nasyconą, nie krzyczy do mnie swoją soczystością, nie wywołuje nadprogramowej produkcji śliny w moich ustach, czy też dodatkowej porcji endorfin w mózgu. Ta zieleń też ma w sobie dużo bieli, świeci szarością. A może to wszystko przez afrykańskie słońce? Może to właśnie tak mocne światło sprawia, że widzę wszystko jak przez blendę. Szukam dalej.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6242486/ello-optimized-5d0f0df6.jpg\" alt=\"Zdjęcie przedstawia opuncję figową, trzy doniczki z kwiatami stojące na ziemi po prawej stronie, stolik wykonany ze szpuli po lewej, na stoliku stoją trzy małe doniczki z kwiatkami. Wszystko na tle ściany.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6242499/ello-optimized-ede9ae43.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na opuncję figową.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6242420/ello-optimized-d45dfd3c.jpg\" alt=\"Zdjęcie przedstawia kompozycje z dwóch plam czerwonej barwy i dwóch plam czarnych, wszystko łączone cienką czarną linią.\" /></p>\n<p>No i jest wreszcie, wreszcie kolor. Okrążam dookoła opuncję figową, pamiętając, żeby nie dotykać owoców. Zbieram delikatnie za pomocą palców białe, maleńkie robaczki, jakby pokryte pszenną mąką poznańską. Rozgniatam jednego (w głowie powtarzając mantrę ‘ w imię sztuki, w imię sztuki!’), oto jest – czerwień koszelinowa. Fuerteventura jest czerwona.</p>\n<olela-narrative>\nNa pewno kiedyś tam wrócę.\n</olela-narrative>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6242407/ello-optimized-d9c1ce8f.jpg\" alt=\"Zdjęcie przedstawia kolaż geometrycznych elementów na czerwonym tle. Z lewej strony widzimy małe kobiece usta.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6242416/ello-optimized-05d3d3e1.jpg\" alt=\"Zdjęcie przedstawia kolaż białych elementów na czerwonym tle, ułożonych na samym środku na kształt płomieni.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6242529/ello-optimized-b9d42098.jpg\" alt=\"Zdjęcie przedstawia górzysty krajobraz w ciepłych kolorach. Widać białe budynki i palmy.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6242531/ello-optimized-8b85d610.jpg\" alt=\"Zdjęcie przedstawia widok z góry na plażę z czarnym piaskiem, na którym opalają się ludzie, po prawej stronie stoją kolorowe łódki, a w oddali widać góry.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6242530/ello-optimized-59a66b0b.jpg\" alt=\"Zdjęcie przedstawia widok z góry na plażę z czarnym piaskiem, w oddali widać góry, po prawej stronie znajduje się woda.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6243115/ello-optimized-32987e2b.jpg\" alt=\"Zdjęcie przedstawia obraz namalowany tuszami w kolorze czarnym, czerwonym i niebieskim. Obraz ma charakter abstrakcyjny.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6235694/ello-optimized-6e539694.jpg\" alt=\"Zdjęcie przedstawia portret młodej kobiety w kapeluszu i okularach przeciwsłonecznych. W tle widać palmy.\" /></p>\n";
var raw = exports.raw = "\n![Zdjęcie centralnie przedstawia roślinę z rodziny kaktusowatych, rosnącą w szarej glebie na tle jasnej ściany.](https://assets0.ello.co/uploads/asset/attachment/6235681/ello-optimized-4ab7553c.jpg)\n![Zdjęcie przedstawia szkic wykonany tuszem z elementami kolażu. Z lewego górnego i prawego dolnego rogu wyrasta roślina, a elementy geometryczne są czerwone.](https://assets2.ello.co/uploads/asset/attachment/6242404/ello-optimized-dbcead22.jpg)\n\n<olela-narrative>\nPodobno\n</olela-narrative>\n\nNa początku była Atlantyda. Cudowna kraina, w której diamenty występowały tak często, jak warzywa czy zioła. Góry odgradzały ziemie od nieprzyjaznych wiatrów. Mieszkańcy żyli w harmonii z naturą i sobą nawzajem. Mierzyli do dwóch metrów wzrostu, oczy ich były niebieskie, a włosy jasne , dotknięte słońcem. Nie wiadomo jak znaleźli się na wyspie, gdyż powszechnie znany był ich wstręt do wody, nie potrafili także budować łodzi. Istnieje hipoteza, że byli potomkami jednego z odgałęzień Celtów, oni bowiem oraz plemiona germańskie odbywały odległe podróże jeszcze przed erą rzymską.\n\n![Zdjęcie przedstawia plażę ze śladami odciśniętymi w piasku, w oddali widać wodę i góry.](https://assets1.ello.co/uploads/asset/attachment/6235695/ello-optimized-50fa876a.jpg)\n![Zdjęcie przedstawia piasek z odciśniętymi śladami stóp.](https://assets0.ello.co/uploads/asset/attachment/6235697/ello-optimized-62f6ec60.jpg)\n![Zdjęcie przedstawia piasek z odciśniętymi śladami stóp, po lewej stronie w oddali widać dwie sylwetki ludzkie.](https://assets0.ello.co/uploads/asset/attachment/6235698/ello-optimized-ca951166.jpg)\n![Zdjęcie przedstawia krajobraz gór, w oddali widać wodę, a na pierwszym planie żółtą tabliczkę z czarnym znakiem wiewiórki.](https://assets0.ello.co/uploads/asset/attachment/6235700/ello-optimized-c11e111e.jpg)\n\nJean de Béthencourt dotarł do wybrzeży Wysp Kanaryjskich 1 czerwca 1402 r. i w zaledwie 4 lata zdobył Fuerteventurę, Lanzarotę, La Gomerę, El Hierro. Utworzone przez niego miasteczko Betancuria (istniejące do dziś) przez wiele lat było stolicą Fuerteventury. Pozostałe wyspy – Gran Canaria, La Palma i Teneryfa zostały podbite przez Alonso Fernández de Lugo . Liczne, krwawe walki doszczętnie zniszczyły kulturę i społeczeństwo Guanczów – niebieskookich blondynów, wysokich na dwa metry. Tak oto zginęły ostatnie, żywe dowody istnienia mitycznej krainy.\n\n![Zdjęcie przedstawia pomnik mężczyzny z brązu, trzymającego włócznię, w ujęciu od dołu.](https://assets2.ello.co/uploads/asset/attachment/6242475/ello-optimized-d8a5d13e.jpg)\n![Zdjęcie przedstawia połowę pomnika mężczyzny z brązu, trzymającego włócznię, w ujęciu od dołu](https://assets0.ello.co/uploads/asset/attachment/6242478/ello-optimized-c40dcdd8.jpg)\n![Zdjęcie przedstawia dłoń pomnika mężczyzny wykonanego z brązu, a w tle górski krajobraz.](https://assets0.ello.co/uploads/asset/attachment/6242481/ello-optimized-480397f0.jpg)\n![Zdjęcie przedstawia dwa pomniki mężczyzn z brązu, obaj trzymają w dłoniach włócznię.](https://assets1.ello.co/uploads/asset/attachment/6242483/ello-optimized-9531724e.jpg)\n\n<olela-narrative>\nPodobno\n</olela-narrative>\n\nNa Fuerteventurze mieszka 100 tysięcy ludzi, a 150 tysięcy kóz. Podczas naszej tygodniowej wyprawy kozy widziałam tylko dwa razy. W pomarańczowych skałach dostrzegłam o wiele więcej chartów kanaryjskich, gdyż na wyspie trwa sezon polowań na króliki. Owszem, próbowałam kozich serów, które przyznaje z ręką na sercu, były najpyszniejsze jakie w życiu jadłam. Kozy żywią się bowiem głównie ziołami i porostami. Sery dzięki temu mają posmak tymianku, migdałów, dzikiego miodu - Coś niesamowitego! Najlepiej smakują w połączeniu z dżemem figowym lub słodkim gofio (rodzaj mączki wyrabianej z uprażonych ziaren jęczmienia, kukurydzy i innych zbóż, która w połączeniu z wodą lub mlekiem daje konsystencje zbliżoną do chałwy). Udało nam się przywieźć trzy różne gatunki sera z lokalnej wytwórni. Żałuję, że nie kupiłam gofio, w Polsce jest je niesamowicie ciężko dostać. \n\n![Zdjęcie przedstawia górski krajobraz z zieloną rośliną na pierwszym palnie.](https://assets0.ello.co/uploads/asset/attachment/6242470/ello-optimized-49f44a2b.jpg)\n![Zdjęcie przedstawia górę z drogą po środku, na tle niebieskiego nieba.](https://assets0.ello.co/uploads/asset/attachment/6242493/ello-optimized-03c9d495.jpg)\n![Zdjęcie jest kolażem geometrycznych czerwono-niebieskich elementów z dwiema czarnymi liniami.](https://assets1.ello.co/uploads/asset/attachment/6242384/ello-optimized-247979b7.jpg)\n![Zdjęcie jest kolażem geometrycznych elementów, na czerwonym tle, elementy są białe i niebieskie, a z lewej strony widzimy element roślinny.](https://assets2.ello.co/uploads/asset/attachment/6242412/ello-optimized-c8dd3711.jpg)\n![Zdjęcie przedstawia żółto-biały budynek z szyldem na górze. Na pierwszym planie znajdują się rośliny w donicach i szklana balustrada.](https://assets2.ello.co/uploads/asset/attachment/6242502/ello-optimized-c7e3e36f.jpg)\n![Zdjęcie przedstawia ulicę z białym budynkiem po prawej, na którego ścianie znajduje się mural przedstawiający dziewczynkę w pomarańczowej sukience z falbankami podlewającą kwiat w kształcie serca.](https://assets1.ello.co/uploads/asset/attachment/6242521/ello-optimized-753d42b0.jpg)\n![Zdjęcie przedstawia ulicę, przy której stoi budynek o zielonych oknach i drzwiach, a na niebie są białe chmury.](https://assets2.ello.co/uploads/asset/attachment/6242514/ello-optimized-212ccd8b.jpg)\n![Zdjęcie przedstawia ulicę, przy której z lewej strony stoją samochody i rosną palmy, w tle widać biały budynek.](https://assets1.ello.co/uploads/asset/attachment/6242506/ello-optimized-34aa198e.jpg)\n![Zdjęcie przedstawia prawy bok mężczyzny siedzącego w samochodzie. Mężczyzna ma niebieski kapelusz na głowie, czerwoną koszulkę i okulary, a w tle widać palmy i niebieskie niebo.](https://assets0.ello.co/uploads/asset/attachment/6242503/ello-optimized-090a1c7e.jpg)\n![Zdjęcie przedstawia drogę z żółtymi pasami, którą jadą samochody. Po bokach widzimy góry, a po prawej stronie żółty znak drogowy z liczbą 60.](https://assets1.ello.co/uploads/asset/attachment/6242527/ello-optimized-c8f56a61.jpg)\n\n\n<olela-narrative>\nPodobno\n</olela-narrative>\n\nNazwa Fuerteventura pochodzi od mocno (fuerte) wiejących tu wiatrów (viento). Nic nie jest w stanie ich zatrzymać, gdyż wyspa w najwyższym punkcie ma zaledwie 807m wysokości. Bardziej wietrzna jest zachodnia strona wyspy, to istny raj dla surferów. Odbywają się tu Mistrzostwa Świata w Windsurfingu i Kiteboardingu.\n\n![Zdjęcie przedstawia postać ubraną na biało w kapeluszu stojącą tyłem na plaży. W oddali z prawej strony widać budynki, a z lewej na niebie unoszą się latawce.](https://assets1.ello.co/uploads/asset/attachment/6242538/ello-optimized-0e2b067e.jpg)\n![Zdjęcie przedstawia kolaż złożony z czarnych linii jednego niebiesko-czerwonego elementu w prawym górnym rogu.](https://assets0.ello.co/uploads/asset/attachment/6242392/ello-optimized-3c4cd600.jpg)\n\nCzasami zdarza się też, że wiatry niosą ze sobą zjawiska, takie jak ‘kalima’. Mieliśmy okazję ją zobaczyć i doświadczyć w pierwsze dwa dni naszego pobytu na wyspie. Kiedy lądowaliśmy miałam wrażenie, że cały czas znajdujemy się w chmurze lub we mgle. ‘Kalima’ wiąże się z burzami piaskowymi nad Saharą i transportem pyłu przez wschodnie wiatry. To tak jakby ‘kanaryjski smog’. Pył zawieszony w powietrzu znacząco utrudnia widoczność, powietrze staje się suche, a temperatura wzrasta średnio do 40 stopni. Na szczęście furte vientos dość prędko uporały się z kalimą i prawdziwe kolory krajobrazów zaistniały na horyzoncie.\n\n\n![Zdjęcie przedstawia samolot lecący nad piaszczystym krajobrazem. W oddali widać budynki.](https://assets0.ello.co/uploads/asset/attachment/6235691/ello-optimized-ab4b9031.jpg)\n![Zdjęcie przedstawia samochód marki toyota stojący tyłem. W oddali widać góry.](https://assets2.ello.co/uploads/asset/attachment/6242487/ello-optimized-5c9f0b2a.jpg)\n![Zdjęcie przedstawia ulicę z budynkami po bokach i samochodami stojącymi po bokach. Na ulicy z prawej strony widoczny jest cień osoby fotografującej.](https://assets1.ello.co/uploads/asset/attachment/6242526/ello-optimized-be05e84e.jpg)\n![Zdjęcie przedstawia okrągłe okno przez które widać morze i skały.](https://assets2.ello.co/uploads/asset/attachment/6235686/ello-optimized-257bf96a.jpg)\n![Zdjęcie przedstawia białe krzesła i stoliki stojące przy szklanej balustradzie tuż nad wodą.](https://assets1.ello.co/uploads/asset/attachment/6235684/ello-optimized-10f89506.jpg)\n\n\n<olela-narrative>\nPodobno\n</olela-narrative>\n\nObecnie Fuerteventura jest zielona. Rozejrzałam się dookoła w poszukiwaniu owej flory. Dostrzegłam parę palm, których dominującym kolorem wcale nie był zielony, tylko coś, co jako malarz nazwałabym rozbieloną umbrą. Dalej mój wzrok napotkał aloes. No i tutaj rzeczywiście mam do czynienia z odcieniem zieleni, problem w tym, że zieleń ta nie jest zielenią nasyconą, nie krzyczy do mnie swoją soczystością, nie wywołuje nadprogramowej produkcji śliny w moich ustach, czy też dodatkowej porcji endorfin w mózgu. Ta zieleń też ma w sobie dużo bieli, świeci szarością. A może to wszystko przez afrykańskie słońce? Może to właśnie tak mocne światło sprawia, że widzę wszystko jak przez blendę. Szukam dalej.\n\n![Zdjęcie przedstawia opuncję figową, trzy doniczki z kwiatami stojące na ziemi po prawej stronie, stolik wykonany ze szpuli po lewej, na stoliku stoją trzy małe doniczki z kwiatkami. Wszystko na tle ściany.](https://assets0.ello.co/uploads/asset/attachment/6242486/ello-optimized-5d0f0df6.jpg)\n![Zdjęcie przedstawia zbliżenie na opuncję figową.](https://assets0.ello.co/uploads/asset/attachment/6242499/ello-optimized-ede9ae43.jpg)\n![Zdjęcie przedstawia kompozycje z dwóch plam czerwonej barwy i dwóch plam czarnych, wszystko łączone cienką czarną linią.](https://assets2.ello.co/uploads/asset/attachment/6242420/ello-optimized-d45dfd3c.jpg)\n\n\nNo i jest wreszcie, wreszcie kolor. Okrążam dookoła opuncję figową, pamiętając, żeby nie dotykać owoców. Zbieram delikatnie za pomocą palców białe, maleńkie robaczki, jakby pokryte pszenną mąką poznańską. Rozgniatam jednego (w głowie powtarzając mantrę ‘ w imię sztuki, w imię sztuki!’), oto jest – czerwień koszelinowa. Fuerteventura jest czerwona.\n\n<olela-narrative>\nNa pewno kiedyś tam wrócę.\n</olela-narrative>\n\n![Zdjęcie przedstawia kolaż geometrycznych elementów na czerwonym tle. Z lewej strony widzimy małe kobiece usta.](https://assets1.ello.co/uploads/asset/attachment/6242407/ello-optimized-d9c1ce8f.jpg)\n![Zdjęcie przedstawia kolaż białych elementów na czerwonym tle, ułożonych na samym środku na kształt płomieni.](https://assets1.ello.co/uploads/asset/attachment/6242416/ello-optimized-05d3d3e1.jpg)\n![Zdjęcie przedstawia górzysty krajobraz w ciepłych kolorach. Widać białe budynki i palmy.](https://assets2.ello.co/uploads/asset/attachment/6242529/ello-optimized-b9d42098.jpg)\n![Zdjęcie przedstawia widok z góry na plażę z czarnym piaskiem, na którym opalają się ludzie, po prawej stronie stoją kolorowe łódki, a w oddali widać góry.](https://assets0.ello.co/uploads/asset/attachment/6242531/ello-optimized-8b85d610.jpg)\n![Zdjęcie przedstawia widok z góry na plażę z czarnym piaskiem, w oddali widać góry, po prawej stronie znajduje się woda.](https://assets1.ello.co/uploads/asset/attachment/6242530/ello-optimized-59a66b0b.jpg)\n![Zdjęcie przedstawia obraz namalowany tuszami w kolorze czarnym, czerwonym i niebieskim. Obraz ma charakter abstrakcyjny.](https://assets0.ello.co/uploads/asset/attachment/6243115/ello-optimized-32987e2b.jpg)\n![Zdjęcie przedstawia portret młodej kobiety w kapeluszu i okularach przeciwsłonecznych. W tle widać palmy.](https://assets0.ello.co/uploads/asset/attachment/6235694/ello-optimized-6e539694.jpg)";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 68 */
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

var _ContentLimiter = __webpack_require__(3);

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
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6256758/ello-optimized-b16160dc.jpg', alt: 'Zdj\u0119cie przedstawia twarz m\u0142odej kobiety na \u017C\xF3\u0142tym tle. Kobieta ma kolczyki ko\u0142a i lekko rozchylone usta.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6256764/ello-optimized-4c7473ad.jpg', alt: 'Zdj\u0119cie przedstawia twarz m\u0142odej dziewczyny w makija\u017Cu na \u017C\xF3\u0142tym tle. Dziewczyna ma kolczyki ko\u0142a i czarne rami\u0105czka od bluzki.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6256776/ello-optimized-75875f88.jpg', alt: 'Zdj\u0119cie podzielone jest na sze\u015B\u0107 cz\u0119\u015Bci. Widzimy oczy pomalowane na \u017C\xF3\u0142to-fioletowo, po\u0142ow\u0119 twarzy m\u0142odek kobiety na \u017C\xF3\u0142tym tle, a dwie \u015Brodkowe cz\u0119\u015Bci przedstawiaj\u0105 \u017C\xF3\u0142to-fioletowe rozmyte okr\u0119gi na szarym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6256766/ello-optimized-a6b7fb74.jpg', alt: 'Zdj\u0119cie przedstawia twarz m\u0142odej kobiety w mocnym makija\u017Cu na \u017C\xF3\u0142tym tle. Kobieta ma kolczyki ko\u0142a i niebieskie oczy.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6256769/ello-optimized-39312ab0.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na oko kobiety w \u017C\xF3\u0142to-fioletowym makija\u017Cu.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6256785/ello-optimized-d0da4c12.jpg', alt: 'Zdj\u0119cie przedstawia przedmioty le\u017C\u0105ce na kolorowym pod\u0142o\u017Cu. Widzimy kawa\u0142ek materia\u0142u, pude\u0142ko z napisami i p\u0119dzle.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6256787/ello-optimized-2f878d13.jpg', alt: 'Zdj\u0119cie przedstawia martw\u0105 natur\u0119 u\u0142o\u017Con\u0105 z kolorowego materia\u0142u, p\u0119dzli i czarnego pude\u0142ka ze z\u0142otymi napisami. Ca\u0142o\u015B\u0107 na pomara\u0144czowo-\u017C\xF3\u0142tym pod\u0142o\u017Cu.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6256790/ello-optimized-045c9718.jpg', alt: 'Zdj\u0119cie przedstawia przedmioty sfotografowane z g\xF3ry. Widzimy paletk\u0119 do makija\u017Cu, p\u0119dzle, kolorow\u0105 tkanin\u0119. Ca\u0142o\u015B\u0107 na pomara\u0144czowym, \u017C\xF3\u0142tym i r\xF3\u017Cowym pod\u0142o\u017Cu.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6256792/ello-optimized-69787484.jpg', alt: 'Zdj\u0119cie podzielone jest na dwie cz\u0119\u015Bci i przedstawia przedmioty sfotografowane z g\xF3ry. Widzimy paletk\u0119 do makija\u017Cu, p\u0119dzle, kolorow\u0105 tkanin\u0119. Ca\u0142o\u015B\u0107 na pomara\u0144czowym, \u017C\xF3\u0142tym i r\xF3\u017Cowym pod\u0142o\u017Cu.' })
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Do wykonania makija\u017Cu u\u017Cy\u0142am:'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Paleta cieni Revolution \u2018Colour Chaos\u2019'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Tusz do rz\u0119s Pupa Vamp'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Baza pod cienie (r\xF3wnie\u017C maskowanie brwi) MAC Paint Pot odcie\u0144 \u2018Soft Ochre\u2019'
      ),
      _react2.default.createElement(
        'li',
        null,
        'konturowanie twarzy L\u2019oreal Infallible Sculpt'
      ),
      _react2.default.createElement(
        'li',
        null,
        'roz\u015Bwietlacz pod oczy Dr Irena Eris ProVoke nr 2'
      ),
      _react2.default.createElement(
        'li',
        null,
        'r\xF3\u017C Bourjois nr 15 \u2018Rose Eclat\u2019'
      ),
      _react2.default.createElement(
        'li',
        null,
        'podk\u0142ad Bourjois \u2018123 Perfect\u2019 odcie\u0144 nr 52 Vanilla'
      ),
      _react2.default.createElement(
        'li',
        null,
        'puder fixuj\u0105cy Wibo'
      ),
      _react2.default.createElement(
        'li',
        null,
        'pomadka MAC z serii frost odcie\u0144 \u2018Pick me, Pick me!\u2019'
      )
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Make-up inspirowany obrazem. M10_by_Wojciech Fangor", "date": "2017-09-21T16:49:00.000Z", "categories": ["Sztuka Makijażu"], "tags": ["fangor", "makeup", "makijaż", "dzieło", "obraz", "kreacja", "artysta", "art", "sztuka"] };
var body = exports.body = "<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6256758/ello-optimized-b16160dc.jpg\" alt=\"Zdjęcie przedstawia twarz młodej kobiety na żółtym tle. Kobieta ma kolczyki koła i lekko rozchylone usta.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6256764/ello-optimized-4c7473ad.jpg\" alt=\"Zdjęcie przedstawia twarz młodej dziewczyny w makijażu na żółtym tle. Dziewczyna ma kolczyki koła i czarne ramiączka od bluzki.\" /></p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6256776/ello-optimized-75875f88.jpg\" alt=\"Zdjęcie podzielone jest na sześć części. Widzimy oczy pomalowane na żółto-fioletowo, połowę twarzy młodek kobiety na żółtym tle, a dwie środkowe części przedstawiają żółto-fioletowe rozmyte okręgi na szarym tle.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6256766/ello-optimized-a6b7fb74.jpg\" alt=\"Zdjęcie przedstawia twarz młodej kobiety w mocnym makijażu na żółtym tle. Kobieta ma kolczyki koła i niebieskie oczy.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6256769/ello-optimized-39312ab0.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na oko kobiety w żółto-fioletowym makijażu.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6256785/ello-optimized-d0da4c12.jpg\" alt=\"Zdjęcie przedstawia przedmioty leżące na kolorowym podłożu. Widzimy kawałek materiału, pudełko z napisami i pędzle.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6256787/ello-optimized-2f878d13.jpg\" alt=\"Zdjęcie przedstawia martwą naturę ułożoną z kolorowego materiału, pędzli i czarnego pudełka ze złotymi napisami. Całość na pomarańczowo-żółtym podłożu.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6256790/ello-optimized-045c9718.jpg\" alt=\"Zdjęcie przedstawia przedmioty sfotografowane z góry. Widzimy paletkę do makijażu, pędzle, kolorową tkaninę. Całość na pomarańczowym, żółtym i różowym podłożu.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6256792/ello-optimized-69787484.jpg\" alt=\"Zdjęcie podzielone jest na dwie części i przedstawia przedmioty sfotografowane z góry. Widzimy paletkę do makijażu, pędzle, kolorową tkaninę. Całość na pomarańczowym, żółtym i różowym podłożu.\" /></p>\n<olela-narrative>\nDo wykonania makijażu użyłam:\n</olela-narrative>\n<ul>\n<li>Paleta cieni Revolution ‘Colour Chaos’</li>\n<li>Tusz do rzęs Pupa Vamp</li>\n<li>Baza pod cienie (również maskowanie brwi) MAC Paint Pot odcień ‘Soft Ochre’</li>\n<li>konturowanie twarzy L’oreal Infallible Sculpt</li>\n<li>rozświetlacz pod oczy Dr Irena Eris ProVoke nr 2</li>\n<li>róż Bourjois nr 15 ‘Rose Eclat’</li>\n<li>podkład Bourjois ‘123 Perfect’ odcień nr 52 Vanilla</li>\n<li>puder fixujący Wibo</li>\n<li>pomadka MAC z serii frost odcień ‘Pick me, Pick me!’</li>\n</ul>\n";
var raw = exports.raw = "\n![Zdjęcie przedstawia twarz młodej kobiety na żółtym tle. Kobieta ma kolczyki koła i lekko rozchylone usta.](https://assets0.ello.co/uploads/asset/attachment/6256758/ello-optimized-b16160dc.jpg)\n![Zdjęcie przedstawia twarz młodej dziewczyny w makijażu na żółtym tle. Dziewczyna ma kolczyki koła i czarne ramiączka od bluzki.](https://assets2.ello.co/uploads/asset/attachment/6256764/ello-optimized-4c7473ad.jpg)\n\n\n![Zdjęcie podzielone jest na sześć części. Widzimy oczy pomalowane na żółto-fioletowo, połowę twarzy młodek kobiety na żółtym tle, a dwie środkowe części przedstawiają żółto-fioletowe rozmyte okręgi na szarym tle.](https://assets1.ello.co/uploads/asset/attachment/6256776/ello-optimized-75875f88.jpg)\n![Zdjęcie przedstawia twarz młodej kobiety w mocnym makijażu na żółtym tle. Kobieta ma kolczyki koła i niebieskie oczy.](https://assets0.ello.co/uploads/asset/attachment/6256766/ello-optimized-a6b7fb74.jpg)\n![Zdjęcie przedstawia zbliżenie na oko kobiety w żółto-fioletowym makijażu.](https://assets2.ello.co/uploads/asset/attachment/6256769/ello-optimized-39312ab0.jpg)\n![Zdjęcie przedstawia przedmioty leżące na kolorowym podłożu. Widzimy kawałek materiału, pudełko z napisami i pędzle.](https://assets1.ello.co/uploads/asset/attachment/6256785/ello-optimized-d0da4c12.jpg)\n![Zdjęcie przedstawia martwą naturę ułożoną z kolorowego materiału, pędzli i czarnego pudełka ze złotymi napisami. Całość na pomarańczowo-żółtym podłożu.](https://assets2.ello.co/uploads/asset/attachment/6256787/ello-optimized-2f878d13.jpg)\n![Zdjęcie przedstawia przedmioty sfotografowane z góry. Widzimy paletkę do makijażu, pędzle, kolorową tkaninę. Całość na pomarańczowym, żółtym i różowym podłożu.](https://assets2.ello.co/uploads/asset/attachment/6256790/ello-optimized-045c9718.jpg)\n![Zdjęcie podzielone jest na dwie części i przedstawia przedmioty sfotografowane z góry. Widzimy paletkę do makijażu, pędzle, kolorową tkaninę. Całość na pomarańczowym, żółtym i różowym podłożu.](https://assets2.ello.co/uploads/asset/attachment/6256792/ello-optimized-69787484.jpg)\n\n<olela-narrative>\nDo wykonania makijażu użyłam:\n</olela-narrative>\n\n* Paleta cieni Revolution 'Colour Chaos'\n* Tusz do rzęs Pupa Vamp\n* Baza pod cienie (również maskowanie brwi) MAC Paint Pot odcień 'Soft Ochre'\n* konturowanie twarzy L'oreal Infallible Sculpt\n* rozświetlacz pod oczy Dr Irena Eris ProVoke nr 2\n* róż Bourjois nr 15 'Rose Eclat'\n* podkład Bourjois '123 Perfect' odcień nr 52 Vanilla\n* puder fixujący Wibo\n* pomadka MAC z serii frost odcień 'Pick me, Pick me!'\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 69 */
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

var _ContentLimiter = __webpack_require__(3);

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
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6273381/ello-optimized-aaf18cbf.jpg', alt: 'Zdj\u0119cie przedstawia kobiet\u0119 ubran\u0105 na bia\u0142o, na \u017C\xF3\u0142tym tle. Kobieta trzyma w r\u0119ku srebrne naczynie i podlewa ro\u015Blin\u0119, kt\xF3ra znajduje si\u0119 z lewej strony.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Przez ca\u0142e swoje \u017Cycie odczuwam paniczny l\u0119k przed odebraniem telefonu. Przed wykonaniem zreszt\u0105 te\u017C. Kiedy tylko na ekranie pojawiaj\u0105 si\u0119 nieznane cyferki wewn\u0105trz mojego brzucha rodzi si\u0119 uczucie \u015Bcisku, podobne do tego, kiedy owijasz (dla zabawy) cienk\u0105 nitk\u0105 sw\xF3j palec wskazuj\u0105cy. Kiedy wiem, \u017Ce musz\u0119 do kogo\u015B zatelefonowa\u0107 (i niewa\u017Cne czy jest to kto\u015B znajomy, czy nie) dok\u0142adnie analizuje tre\u015B\u0107 zda\u0144, kt\xF3re wypowiem. Po cichu, w \u015Brodku g\u0142owy symuluje rozmow\u0119. Musz\u0119 by\u0107 przygotowana na ka\u017Cdy z ewentualnych bieg\xF3w zdarze\u0144. Zawsze najbardziej lubi\u0119 ten, kiedy druga strona nie odpowiada. Wtedy mog\u0119 od\u0142o\u017Cy\u0107 niedosz\u0142\u0105 rozmow\u0119 na p\xF3\u017Aniej i  wr\xF3ci\u0107 do swoich obecnych zaj\u0119\u0107, przynajmniej przez moment nie b\u0119d\u0105c zmuszona pisa\u0107 telefonicznych scenariuszy.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6273369/ello-optimized-81fb1e90.jpg', alt: 'Zdj\u0119cie przedstawia \u017C\xF3\u0142te t\u0142o, z lewej strony wida\u0107 kawa\u0142ek ro\u015Bliny, a w prawym g\xF3rnym rogu kawa\u0142ek bia\u0142ej tkaniny.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6273371/ello-optimized-12671c19.jpg', alt: 'Zdj\u0119cie podzielone jest na dwie cz\u0119\u015Bci. Z lewej strony widzimy bia\u0142\u0105 tkanin\u0119 ze srebrnym k\xF3\u0142kiem, a z prawej ro\u015Blin\u0119 na \u017C\xF3\u0142tym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6273367/ello-optimized-ecc7f386.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na szyj\u0119 cz\u0142owiek ubranego w bia\u0142\u0105 koszul\u0119, z ty\u0142u wida\u0107 \u017C\xF3\u0142te t\u0142o.' })
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Podobno 1 litr na 30kg masy cia\u0142a. Mo\u017Cesz te\u017C podzieli\u0107 swoj\u0105 wag\u0119 przez 30, np. 60kg : 30 = 2, czyli powiniene\u015B pi\u0107 2 litry wody dziennie.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6273366/ello-optimized-b2f1da19.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na popiersie kobiety z fioletowymi ustami. Kobieta ma bia\u0142\u0105 koszul\u0119 i ozdob\u0119 na szyi, widzimy \u017C\xF3\u0142te t\u0142o, a z lewej strony wz\xF3r z\u0142o\u017Cony z ust.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Mo\u017Ce to wcale nie jest tak, \u017Ce Martyna nie dzwoni, bo mnie nie lubi. Mo\u017Ce po prostu ma du\u017Co na g\u0142owie i w nat\u0142oku tych spraw nie pami\u0119ta... W sumie, to Marcina te\u017C ju\u017C dawno nie s\u0142ysza\u0142am\u2026 To niemo\u017Cliwe, \u017Ceby wszyscy Ci ludzie \u0142\u0105czyli si\u0119 ze mn\u0105 w telel\u0119ku. Od zawsze powtarzano mi, \u017Ce musz\u0119 o wszystkie swoje sprawy zatroszczy\u0107 si\u0119 sama, nikt inny za mnie tego nie zrobi. Jak nie podlejesz swoich kwiatk\xF3w to uschn\u0105.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6273373/ello-optimized-25b3bbe8.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 ubran\u0105 na bia\u0142o ze srebrnym naczyniem w r\u0119ce. Kobieta podlewa kwiat znajduj\u0105cy si\u0119 z lewej strony na krze\u015Ble. T\u0142o jest \u017C\xF3\u0142te.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Tak w\u0142a\u015Bnie za spraw\u0105 g\u0142upiej obawy us\u0142yszenia w dziwnym prostok\u0105tnym urz\u0105dzeniu niewidzialnego g\u0142osu, g\u0142osu mechanicznie zmodyfikowanego, usychaj\u0105 moje znajomo\u015Bci i przyja\u017Anie. Widz\u0105c osob\u0119 na \u017Cywo, w g\u0142owie automatycznie przewija mi si\u0119 tysi\u0105c sytuacji, obraz\xF3w, d\u017Awi\u0119k\xF3w i zapach\xF3w z ni\u0105 zwi\u0105zanych. Zawsze towarzysz\u0105 temu spotkaniu emocje. Dobre emocje, bo te z\u0142e mam zwyczaj wypiera\u0107. Z tych wszystkich wspania\u0142ych bod\u017Ac\xF3w, pieszczot zmys\u0142\xF3w, s\u0142uchawka telefonu oferuje nam tylko\u2026 g\u0142os. Nic dziwnego, \u017Ce jest przyczyn\u0105 nieporozumie\u0144, sprzeczek, k\u0142\xF3tni. Nie widz\u0119 przecie\u017C Twojej twarzy, mimiki, \u017Ale odczyta\u0142am intonacj\u0119 s\u0142\xF3w (i vice versa). Rzuci\u0142y\u015Bmy s\u0142uchawkami, a teraz \u017Cadna z nas, z uwagi na swoj\u0105 dum\u0119, nie zadzwoni.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6273374/ello-optimized-5deed9bb.jpg', alt: 'Zdj\u0119cie podzielone jest na dwie cz\u0119\u015Bci, z lewej strony widzimy kszta\u0142t li\u015Bcia, a z prawej fragment postaci ubranej na bia\u0142o, na \u017C\xF3\u0142ym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6273376/ello-optimized-b03f2b23.jpg', alt: 'Zdj\u0119cie podzielone jest na dwie cz\u0119\u015Bci, z prawej strony widzimy rozmazany fioletowy kszta\u0142t, a z lewej rozmazane zdj\u0119cie kobiety z fioletowymi ustami, ubranej na bia\u0142o, na \u017C\xF3\u0142tym tle.' })
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Dzi\u015B wypi\u0142am tylko po\u0142ow\u0119 dziennej dawki. Drug\u0105 przeznaczy\u0142am na podlanie kwiat\xF3w. Narazie od\u017Cy\u0142 tylko jeden listek, ale je\u015Bli b\u0119d\u0119 to robi\u0107 codziennie to na pewno wkr\xF3tce zaowocuje.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6273531/ello-optimized-ddbdc8a6.jpg', alt: 'Zdj\u0119cie przedstawia fioletowe usta u\u0142o\u017Cone w lini\u0119.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'sp\xF3dnica: Stradivarius / bluzka: Zara / choker: Stradivarius'
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Podlewaj_swoje_kwiaty.", "date": "2017-09-25T16:19:00.000Z", "categories": ["Sztuka Ubioru"], "tags": ["stylizacja", "moda", "kwiat", "art", "sztuka", "kreacja"] };
var body = exports.body = "<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6273381/ello-optimized-aaf18cbf.jpg\" alt=\"Zdjęcie przedstawia kobietę ubraną na biało, na żółtym tle. Kobieta trzyma w ręku srebrne naczynie i podlewa roślinę, która znajduje się z lewej strony.\" /></p>\n<p>Przez całe swoje życie odczuwam paniczny lęk przed odebraniem telefonu. Przed wykonaniem zresztą też. Kiedy tylko na ekranie pojawiają się nieznane cyferki wewnątrz mojego brzucha rodzi się uczucie ścisku, podobne do tego, kiedy owijasz (dla zabawy) cienką nitką swój palec wskazujący. Kiedy wiem, że muszę do kogoś zatelefonować (i nieważne czy jest to ktoś znajomy, czy nie) dokładnie analizuje treść zdań, które wypowiem. Po cichu, w środku głowy symuluje rozmowę. Muszę być przygotowana na każdy z ewentualnych biegów zdarzeń. Zawsze najbardziej lubię ten, kiedy druga strona nie odpowiada. Wtedy mogę odłożyć niedoszłą rozmowę na później i  wrócić do swoich obecnych zajęć, przynajmniej przez moment nie będąc zmuszona pisać telefonicznych scenariuszy.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6273369/ello-optimized-81fb1e90.jpg\" alt=\"Zdjęcie przedstawia żółte tło, z lewej strony widać kawałek rośliny, a w prawym górnym rogu kawałek białej tkaniny.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6273371/ello-optimized-12671c19.jpg\" alt=\"Zdjęcie podzielone jest na dwie części. Z lewej strony widzimy białą tkaninę ze srebrnym kółkiem, a z prawej roślinę na żółtym tle.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6273367/ello-optimized-ecc7f386.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na szyję człowiek ubranego w białą koszulę, z tyłu widać żółte tło.\" /></p>\n<olela-narrative>\nPodobno 1 litr na 30kg masy ciała. Możesz też podzielić swoją wagę przez 30, np. 60kg : 30 = 2, czyli powinieneś pić 2 litry wody dziennie.\n</olela-narrative>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6273366/ello-optimized-b2f1da19.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na popiersie kobiety z fioletowymi ustami. Kobieta ma białą koszulę i ozdobę na szyi, widzimy żółte tło, a z lewej strony wzór złożony z ust.\" /></p>\n<p>Może to wcale nie jest tak, że Martyna nie dzwoni, bo mnie nie lubi. Może po prostu ma dużo na głowie i w natłoku tych spraw nie pamięta... W sumie, to Marcina też już dawno nie słyszałam… To niemożliwe, żeby wszyscy Ci ludzie łączyli się ze mną w telelęku. Od zawsze powtarzano mi, że muszę o wszystkie swoje sprawy zatroszczyć się sama, nikt inny za mnie tego nie zrobi. Jak nie podlejesz swoich kwiatków to uschną.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6273373/ello-optimized-25b3bbe8.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę ubraną na biało ze srebrnym naczyniem w ręce. Kobieta podlewa kwiat znajdujący się z lewej strony na krześle. Tło jest żółte.\" /></p>\n<p>Tak właśnie za sprawą głupiej obawy usłyszenia w dziwnym prostokątnym urządzeniu niewidzialnego głosu, głosu mechanicznie zmodyfikowanego, usychają moje znajomości i przyjaźnie. Widząc osobę na żywo, w głowie automatycznie przewija mi się tysiąc sytuacji, obrazów, dźwięków i zapachów z nią związanych. Zawsze towarzyszą temu spotkaniu emocje. Dobre emocje, bo te złe mam zwyczaj wypierać. Z tych wszystkich wspaniałych bodźców, pieszczot zmysłów, słuchawka telefonu oferuje nam tylko… głos. Nic dziwnego, że jest przyczyną nieporozumień, sprzeczek, kłótni. Nie widzę przecież Twojej twarzy, mimiki, źle odczytałam intonację słów (i vice versa). Rzuciłyśmy słuchawkami, a teraz żadna z nas, z uwagi na swoją dumę, nie zadzwoni.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6273374/ello-optimized-5deed9bb.jpg\" alt=\"Zdjęcie podzielone jest na dwie części, z lewej strony widzimy kształt liścia, a z prawej fragment postaci ubranej na biało, na żółym tle.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6273376/ello-optimized-b03f2b23.jpg\" alt=\"Zdjęcie podzielone jest na dwie części, z prawej strony widzimy rozmazany fioletowy kształt, a z lewej rozmazane zdjęcie kobiety z fioletowymi ustami, ubranej na biało, na żółtym tle.\" /></p>\n<olela-narrative>\nDziś wypiłam tylko połowę dziennej dawki. Drugą przeznaczyłam na podlanie kwiatów. Narazie odżył tylko jeden listek, ale jeśli będę to robić codziennie to na pewno wkrótce zaowocuje.\n</olela-narrative>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6273531/ello-optimized-ddbdc8a6.jpg\" alt=\"Zdjęcie przedstawia fioletowe usta ułożone w linię.\" /></p>\n<p>spódnica: Stradivarius / bluzka: Zara / choker: Stradivarius</p>\n";
var raw = exports.raw = "\n![Zdjęcie przedstawia kobietę ubraną na biało, na żółtym tle. Kobieta trzyma w ręku srebrne naczynie i podlewa roślinę, która znajduje się z lewej strony.](https://assets2.ello.co/uploads/asset/attachment/6273381/ello-optimized-aaf18cbf.jpg)\n\nPrzez całe swoje życie odczuwam paniczny lęk przed odebraniem telefonu. Przed wykonaniem zresztą też. Kiedy tylko na ekranie pojawiają się nieznane cyferki wewnątrz mojego brzucha rodzi się uczucie ścisku, podobne do tego, kiedy owijasz (dla zabawy) cienką nitką swój palec wskazujący. Kiedy wiem, że muszę do kogoś zatelefonować (i nieważne czy jest to ktoś znajomy, czy nie) dokładnie analizuje treść zdań, które wypowiem. Po cichu, w środku głowy symuluje rozmowę. Muszę być przygotowana na każdy z ewentualnych biegów zdarzeń. Zawsze najbardziej lubię ten, kiedy druga strona nie odpowiada. Wtedy mogę odłożyć niedoszłą rozmowę na później i  wrócić do swoich obecnych zajęć, przynajmniej przez moment nie będąc zmuszona pisać telefonicznych scenariuszy.\n\n![Zdjęcie przedstawia żółte tło, z lewej strony widać kawałek rośliny, a w prawym górnym rogu kawałek białej tkaniny.](https://assets1.ello.co/uploads/asset/attachment/6273369/ello-optimized-81fb1e90.jpg)\n![Zdjęcie podzielone jest na dwie części. Z lewej strony widzimy białą tkaninę ze srebrnym kółkiem, a z prawej roślinę na żółtym tle.](https://assets1.ello.co/uploads/asset/attachment/6273371/ello-optimized-12671c19.jpg)\n![Zdjęcie przedstawia zbliżenie na szyję człowiek ubranego w białą koszulę, z tyłu widać żółte tło.](https://assets2.ello.co/uploads/asset/attachment/6273367/ello-optimized-ecc7f386.jpg)\n\n<olela-narrative>\nPodobno 1 litr na 30kg masy ciała. Możesz też podzielić swoją wagę przez 30, np. 60kg : 30 = 2, czyli powinieneś pić 2 litry wody dziennie.\n</olela-narrative>\n\n![Zdjęcie przedstawia zbliżenie na popiersie kobiety z fioletowymi ustami. Kobieta ma białą koszulę i ozdobę na szyi, widzimy żółte tło, a z lewej strony wzór złożony z ust.](https://assets2.ello.co/uploads/asset/attachment/6273366/ello-optimized-b2f1da19.jpg)\n\nMoże to wcale nie jest tak, że Martyna nie dzwoni, bo mnie nie lubi. Może po prostu ma dużo na głowie i w natłoku tych spraw nie pamięta… W sumie, to Marcina też już dawno nie słyszałam… To niemożliwe, żeby wszyscy Ci ludzie łączyli się ze mną w telelęku. Od zawsze powtarzano mi, że muszę o wszystkie swoje sprawy zatroszczyć się sama, nikt inny za mnie tego nie zrobi. Jak nie podlejesz swoich kwiatków to uschną. \n\n![Zdjęcie przedstawia młodą kobietę ubraną na biało ze srebrnym naczyniem w ręce. Kobieta podlewa kwiat znajdujący się z lewej strony na krześle. Tło jest żółte.](https://assets0.ello.co/uploads/asset/attachment/6273373/ello-optimized-25b3bbe8.jpg)\n\nTak właśnie za sprawą głupiej obawy usłyszenia w dziwnym prostokątnym urządzeniu niewidzialnego głosu, głosu mechanicznie zmodyfikowanego, usychają moje znajomości i przyjaźnie. Widząc osobę na żywo, w głowie automatycznie przewija mi się tysiąc sytuacji, obrazów, dźwięków i zapachów z nią związanych. Zawsze towarzyszą temu spotkaniu emocje. Dobre emocje, bo te złe mam zwyczaj wypierać. Z tych wszystkich wspaniałych bodźców, pieszczot zmysłów, słuchawka telefonu oferuje nam tylko… głos. Nic dziwnego, że jest przyczyną nieporozumień, sprzeczek, kłótni. Nie widzę przecież Twojej twarzy, mimiki, źle odczytałam intonację słów (i vice versa). Rzuciłyśmy słuchawkami, a teraz żadna z nas, z uwagi na swoją dumę, nie zadzwoni.\n\n![Zdjęcie podzielone jest na dwie części, z lewej strony widzimy kształt liścia, a z prawej fragment postaci ubranej na biało, na żółym tle.](https://assets0.ello.co/uploads/asset/attachment/6273374/ello-optimized-5deed9bb.jpg)\n![Zdjęcie podzielone jest na dwie części, z prawej strony widzimy rozmazany fioletowy kształt, a z lewej rozmazane zdjęcie kobiety z fioletowymi ustami, ubranej na biało, na żółtym tle.](https://assets1.ello.co/uploads/asset/attachment/6273376/ello-optimized-b03f2b23.jpg)\n\n<olela-narrative>\nDziś wypiłam tylko połowę dziennej dawki. Drugą przeznaczyłam na podlanie kwiatów. Narazie odżył tylko jeden listek, ale jeśli będę to robić codziennie to na pewno wkrótce zaowocuje.\n</olela-narrative>\n\n![Zdjęcie przedstawia fioletowe usta ułożone w linię.](https://assets1.ello.co/uploads/asset/attachment/6273531/ello-optimized-ddbdc8a6.jpg)\n\nspódnica: Stradivarius / bluzka: Zara / choker: Stradivarius";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 70 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'W latach 1917-1928 Theo van Doesburg wydawa\u0142 w Holandii czasopismo \u201CDe Stijl\u201D (po niderlandzku \u2018styl\u2019). W pierwszym numerze wydrukowany zosta\u0142 manifest malarza Piet\u2019a Mondrian\u2019a. Przedstawia\u0142 on zarys nowego programu artystycznego. \u2018Neoplastycyzm\u2019 zak\u0142ada\u0142 oddzia\u0142ywanie poprzez przeciwie\u0144stwa, piony vs poziomy, si\u0142a aktywna na przeciw biernej. W neoplastycyzmie wyr\xF3\u017Cniamy:'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'dwie podstawowe linie: wertykaln\u0105 i horyzontaln\u0105'
      ),
      _react2.default.createElement(
        'li',
        null,
        'trzy kolory zasadnicze: \u017C\xF3\u0142ty, czerwony, niebieski'
      ),
      _react2.default.createElement(
        'li',
        null,
        'trzy niekolory: biel, czer\u0144, szaro\u015B\u0107'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Dodatkowo, ka\u017Cda barwa nacechowana jest inn\u0105 ekspresj\u0105 dynamiczn\u0105: \u017C\xF3\u0142ty opisuje piony, niebieski poziomy, a czerwie\u0144 \u0142\u0105czy dwa poprzednie r\xF3wnowa\u017C\u0105c je. Mondrian coraz bardziej upraszczaj\u0105c swoje kompozycje dotar\u0142 do zupe\u0142nej geometryzacji przestrzeni. Neoplastycyzm silnie podzia\u0142a\u0142 na architektur\u0119 i wzornictwo, oraz na Bauhaus (uczelni\u0119 artystyczno-rzemie\u015Blnicz\u0105 powsta\u0142\u0105 w Weimarze w 1919 r. z po\u0142\u0105czenia Akademii Sztuk Pi\u0119knych i Szko\u0142y Rzemios\u0142 Artystycznych. Sama idea Bauhaus\u2019u zak\u0142ada\u0142a zniesienie podzia\u0142u pomi\u0119dzy artyst\u0105, architektem, przemys\u0142owcem i rzemie\u015Blnikiem, st\u0105d tak wiele projekt\xF3w \u2018podchwyca\u2019 mondrianowskie za\u0142o\u017Cenia). Do dzi\u015B widzimy jego wp\u0142ywy niemal we wszystkich dziedzinach, przez mod\u0119, architektur\u0119, wzornictwo po charakteryzacj\u0119 i kuchni\u0119.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6288152/ello-optimized-1e1c821b.jpg', alt: 'Zdj\u0119cie przedstawia elementy geometryczne w kolorach czerwonych, \u017C\xF3\u0142tych i niebieskich, oraz ok\u0142adki magazyn\xF3w.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6288160/ello-optimized-f9b0b767.jpg', alt: 'Zdj\u0119cie przedstawia elementy geometryczne w kolorach czerwonych, \u017C\xF3\u0142tych i niebieskich. Widzimy sukienk\u0119, obuwie, d\u0142o\u0144 z prawej strony, oraz stron\u0119 z czasopisma.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6288164/ello-optimized-5b64a55f.jpg', alt: 'Zdj\u0119cie przedstawia elementy geometryczne w kolorach czerwonych, \u017C\xF3\u0142tych i niebieskich. Widzimy damsk\u0105 d\u0142o\u0144 trzymaj\u0105c\u0105 torebk\u0119, pani\u0105 ubrana na czarno i trzy kwadraty w kolorze \u017C\xF3\u0142tym, niebieskim i czerwonym.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6288167/ello-optimized-c8623486.jpg', alt: 'Zdj\u0119cie przedstawia elementy geometryczne w kolorach czerwonych, \u017C\xF3\u0142tych i niebieskich. Widzimy krzes\u0142a i elementy architektoniczne.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6288168/ello-optimized-f5c7f35c.jpg', alt: 'Zdj\u0119cie przedstawia elementy geometryczne w kolorach czerwonych, \u017C\xF3\u0142tych i niebieskich, oraz ciasto i bia\u0142e napisy na czerwonym tle.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Neoplastycyzm [moodboard]", "date": "2017-09-28T17:15:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["neoplasticism", "moodboard", "art", "sztuka", "artysta", "kierunek"] };
var body = exports.body = "<p>W latach 1917-1928 Theo van Doesburg wydawał w Holandii czasopismo “De Stijl” (po niderlandzku ‘styl’). W pierwszym numerze wydrukowany został manifest malarza Piet’a Mondrian’a. Przedstawiał on zarys nowego programu artystycznego. ‘Neoplastycyzm’ zakładał oddziaływanie poprzez przeciwieństwa, piony vs poziomy, siła aktywna na przeciw biernej. W neoplastycyzmie wyróżniamy:</p>\n<ul>\n<li>dwie podstawowe linie: wertykalną i horyzontalną</li>\n<li>trzy kolory zasadnicze: żółty, czerwony, niebieski</li>\n<li>trzy niekolory: biel, czerń, szarość</li>\n</ul>\n<p>Dodatkowo, każda barwa nacechowana jest inną ekspresją dynamiczną: żółty opisuje piony, niebieski poziomy, a czerwień łączy dwa poprzednie równoważąc je. Mondrian coraz bardziej upraszczając swoje kompozycje dotarł do zupełnej geometryzacji przestrzeni.\nNeoplastycyzm silnie podziałał na architekturę i wzornictwo, oraz na Bauhaus (uczelnię artystyczno-rzemieślniczą powstałą w Weimarze w 1919 r. z połączenia Akademii Sztuk Pięknych i Szkoły Rzemiosł Artystycznych. Sama idea Bauhaus’u zakładała zniesienie podziału pomiędzy artystą, architektem, przemysłowcem i rzemieślnikiem, stąd tak wiele projektów ‘podchwyca’ mondrianowskie założenia). Do dziś widzimy jego wpływy niemal we wszystkich dziedzinach, przez modę, architekturę, wzornictwo po charakteryzację i kuchnię.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6288152/ello-optimized-1e1c821b.jpg\" alt=\"Zdjęcie przedstawia elementy geometryczne w kolorach czerwonych, żółtych i niebieskich, oraz okładki magazynów.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6288160/ello-optimized-f9b0b767.jpg\" alt=\"Zdjęcie przedstawia elementy geometryczne w kolorach czerwonych, żółtych i niebieskich. Widzimy sukienkę, obuwie, dłoń z prawej strony, oraz stronę z czasopisma.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6288164/ello-optimized-5b64a55f.jpg\" alt=\"Zdjęcie przedstawia elementy geometryczne w kolorach czerwonych, żółtych i niebieskich. Widzimy damską dłoń trzymającą torebkę, panią ubrana na czarno i trzy kwadraty w kolorze żółtym, niebieskim i czerwonym.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6288167/ello-optimized-c8623486.jpg\" alt=\"Zdjęcie przedstawia elementy geometryczne w kolorach czerwonych, żółtych i niebieskich. Widzimy krzesła i elementy architektoniczne.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6288168/ello-optimized-f5c7f35c.jpg\" alt=\"Zdjęcie przedstawia elementy geometryczne w kolorach czerwonych, żółtych i niebieskich, oraz ciasto i białe napisy na czerwonym tle.\" /></p>\n";
var raw = exports.raw = "\nW latach 1917-1928 Theo van Doesburg wydawał w Holandii czasopismo \"De Stijl\" (po niderlandzku 'styl'). W pierwszym numerze wydrukowany został manifest malarza Piet'a Mondrian'a. Przedstawiał on zarys nowego programu artystycznego. 'Neoplastycyzm' zakładał oddziaływanie poprzez przeciwieństwa, piony vs poziomy, siła aktywna na przeciw biernej. W neoplastycyzmie wyróżniamy:\n\n* dwie podstawowe linie: wertykalną i horyzontalną\n* trzy kolory zasadnicze: żółty, czerwony, niebieski\n* trzy niekolory: biel, czerń, szarość\n\n\nDodatkowo, każda barwa nacechowana jest inną ekspresją dynamiczną: żółty opisuje piony, niebieski poziomy, a czerwień łączy dwa poprzednie równoważąc je. Mondrian coraz bardziej upraszczając swoje kompozycje dotarł do zupełnej geometryzacji przestrzeni.\nNeoplastycyzm silnie podziałał na architekturę i wzornictwo, oraz na Bauhaus (uczelnię artystyczno-rzemieślniczą powstałą w Weimarze w 1919 r. z połączenia Akademii Sztuk Pięknych i Szkoły Rzemiosł Artystycznych. Sama idea Bauhaus'u zakładała zniesienie podziału pomiędzy artystą, architektem, przemysłowcem i rzemieślnikiem, stąd tak wiele projektów 'podchwyca' mondrianowskie założenia). Do dziś widzimy jego wpływy niemal we wszystkich dziedzinach, przez modę, architekturę, wzornictwo po charakteryzację i kuchnię. \n\n\n![Zdjęcie przedstawia elementy geometryczne w kolorach czerwonych, żółtych i niebieskich, oraz okładki magazynów.](https://assets1.ello.co/uploads/asset/attachment/6288152/ello-optimized-1e1c821b.jpg)\n![Zdjęcie przedstawia elementy geometryczne w kolorach czerwonych, żółtych i niebieskich. Widzimy sukienkę, obuwie, dłoń z prawej strony, oraz stronę z czasopisma.](https://assets1.ello.co/uploads/asset/attachment/6288160/ello-optimized-f9b0b767.jpg)\n![Zdjęcie przedstawia elementy geometryczne w kolorach czerwonych, żółtych i niebieskich. Widzimy damską dłoń trzymającą torebkę, panią ubrana na czarno i trzy kwadraty w kolorze żółtym, niebieskim i czerwonym.](https://assets2.ello.co/uploads/asset/attachment/6288164/ello-optimized-5b64a55f.jpg)\n![Zdjęcie przedstawia elementy geometryczne w kolorach czerwonych, żółtych i niebieskich. Widzimy krzesła i elementy architektoniczne.](https://assets2.ello.co/uploads/asset/attachment/6288167/ello-optimized-c8623486.jpg)\n![Zdjęcie przedstawia elementy geometryczne w kolorach czerwonych, żółtych i niebieskich, oraz ciasto i białe napisy na czerwonym tle.](https://assets2.ello.co/uploads/asset/attachment/6288168/ello-optimized-f5c7f35c.jpg)";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 71 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'Przysz\u0142a.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Nie przegoni\u0142y jej d\u0142ugie wieczory z przyjaci\xF3\u0142mi na Placu Zbawiciela przy bia\u0142ym winie. Ona rozla\u0142a czerwone.'
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Przysz\u0142a.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6311178/ello-optimized-1d7944a6.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 ubran\u0105 w \u017C\xF3\u0142t\u0105 pikowan\u0105 kurtk\u0119, kt\xF3ra trzyma si\u0119 za brzuch. Kobieta ma pomara\u0144czowe usta, ca\u0142o\u015B\u0107 na \u017C\xF3\u0142tym tle.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Na nasze cienkie rami\u0105czka zarzuci\u0142a szare swetry. Dobrze, \u017Ce mia\u0142y\u015Bmy szanse poprosi\u0107 j\u0105 o par\u0119 broszek, cho\u0107 jej brwi zmarszczy\u0142y si\u0119 wtedy gro\u017Anie. Przysz\u0142a, a wraz z ni\u0105 w powietrzu zacz\u0119\u0142o pachnie\u0107 wanili\u0105, pieprzem, kardamonem i ry\u017Cem.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6311192/ello-optimized-12af601b.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105, u\u015Bmiechni\u0119t\u0105 kobiet\u0119 ubran\u0105 w \u017C\xF3\u0142t\u0105 pikowan\u0105 kurtk\u0119. Kobieta ma czarny beret na g\u0142owie, br\u0105zow\u0105 torebk\u0119 i jasnoszare w\u0142osy, ca\u0142o\u015B\u0107 na \u017C\xF3\u0142tym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6311203/ello-optimized-6c4751bf.jpg', alt: 'Zdj\u0119cie przedstawia torebk\u0119 ze sk\xF3ry z kolorowym paskiem na \u017C\xF3\u0142tym tle.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Codziennie rano trzyma moje powieki tak mocno, \u017Ce z trudem udaje mi si\u0119 otworzy\u0107 oczy. Przestawia m\xF3j budzik o godzin\u0119 do przodu, dlatego z g\xF3ry skazana jestem na sp\xF3\u017Anienie. Jakim\u015B magicznym sposobem odejmuje porcj\u0119 kofeiny z kawy, w kt\xF3rej nie wyczuwam ju\u017C mocy, jak\u0105 czu\u0142am jeszcze miesi\u0105c temu.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6311208/ello-optimized-055790ec.jpg', alt: 'Zdj\u0119cie podzielone jest na dwie cz\u0119\u015Bci i przedstawia rozmazane sylwetki kobiet w czarnych beretach na \u017C\xF3\u0142tym tle.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Czasami, w \u015Brodku dnia uda mi si\u0119 w\u0142\u0105czy\u0107 ulubiony, taneczny utw\xF3r, a Ona wtedy traktuje to jako wyzwanie i zaczyna wygrywa\u0107 melodie uderzaj\u0105c kroplami deszczu o parapet. W co Ty pogrywasz? - pytam. To jaki\u015B Free Jazz? Podg\u0142a\u015Bniam swoje brzmienie tak, \u017Ce g\u0142o\u015Bniki zaczynaj\u0105 trzeszcze\u0107. Skacz\u0119 jak g\u0142upia po pokoju pr\xF3buj\u0105c o niej zapomnie\u0107. Nagle orientuj\u0119 si\u0119, \u017Ce nie s\u0142ysz\u0119 ju\u017C ulubionej melodii, \u017Ce nie wiem w\u0142a\u015Bciwie, co s\u0142ysz\u0119, \u017Ce w sumie mog\u0142abym to por\xF3wna\u0107 do Mo\u017Cd\u017Cera, Bacha i Rammsteina zmiksowanych razem na g\u0142adk\u0105 papk\u0119 w blenderze marki Bosch. Zaraz oszaleje! Wy\u0142\u0105czam wszystkie sprz\u0119ty, opr\xF3cz czajnika, bo nastawi\u0142am w\u0142a\u015Bnie wod\u0119 na napar z imbiru, kurkumy, mi\u0119ty, cytryny i miodu. Tak, tak jak chcia\u0142a\u015B. Zadowolona? Chowam si\u0119 pod koc, w r\u0119ku trzymam kubek naparu wielko\u015Bci wiaderka, na g\u0142owie mam we\u0142nian\u0105 czapk\u0119, a na stopach ciep\u0142e skarpety.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6311234/ello-optimized-2662cd58.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na d\u0142onie zapinaj\u0105ce z\u0142ote guziki \u017C\xF3\u0142tej kurtki. Na d\u0142oniach jest du\u017Co z\u0142otych pier\u015Bcionk\xF3w, a paznokcie s\u0105 koloru srebrnego, wida\u0107 te\u017C szare w\u0142osy.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6311216/ello-optimized-fcca9d40.jpg', alt: 'Zdj\u0119cie podzielone jest na cztery cz\u0119\u015Bci i przedstawia d\u0142onie ze z\u0142otymi pier\u015Bcionkami i srebrnymi paznokciami, ca\u0142o\u015B\u0107 na \u017C\xF3\u0142tym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6311212/ello-optimized-c8bc9119.jpg', alt: 'Zdj\u0119cie przedstawia twarz m\u0142odej kobiety o\u015Bwietlon\u0105 czerwonym \u015Bwiat\u0142em, kobieta ma na g\u0142owie czarny beret.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6311175/ello-optimized-adff9eaf.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 ubran\u0105 w \u017C\xF3\u0142t\u0105 pikowan\u0105 kurtk\u0119, kobieta ma czarny beret na g\u0142owie, pomara\u0144czowe usta, ca\u0142o\u015B\u0107 na \u017C\xF3\u0142tym tle.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'I nagle staje si\u0119 co\u015B, czego si\u0119 nie spodziewa\u0142am. Przestaje pada\u0107, zza chmur przebija s\u0142o\u0144ce, kt\xF3rego promienie \u2018zapalaj\u0105\u2019 kolory li\u015Bci. \u017B\xF3\u0142cie\u0144 kadmowa, pomara\u0144cz, cynober, karmin, tyle odcieni, mieni si\u0119, wznosi za podmuchem wiatru, opada zgodnie z ziemskim prawem. No \u2013 m\xF3wi\u0119 \u2013 mo\u017Ce si\u0119 jako\u015B dogadamy. Skin\u0119\u0142a g\u0142ow\u0105, odwr\xF3ci\u0142a si\u0119 i odesz\u0142a stukaj\u0105c spiczastymi botkami z czarnego zamszu o granitow\u0105 posadzk\u0119 chodnika, a klasyczny be\u017Cowy trencz z obni\u017Conym stanem budowa\u0142 jej pos\u0105gowo\u015B\u0107. Z \u0142awki po lewej stronie alejki zapomnia\u0142a zabra\u0107 kaszkietu i szalika. Szybko z\u0142apa\u0142am dodatki sezonu i pobieg\u0142am za ni\u0105.'
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Ah, Ca\u0142a Ta Jesie\u0144.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6311198/ello-optimized-d7b56e67.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 ubran\u0105 w sk\xF3rzan\u0105 sp\xF3dnic\u0119 i czerwon\u0105 kurtk\u0119. Kobieta ma na g\u0142owie beret i podpiera si\u0119 r\u0119kami pod boki, ca\u0142o\u015B\u0107 na niebieskim tle.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6311206/ello-optimized-1f445bc2.jpg', alt: 'Zdj\u0119cie przedstawia kobiet\u0119 w sk\xF3rzanej sp\xF3dnicy i czerwonej kurtce obr\xF3con\u0105 ty\u0142em. Kobieta ma na g\u0142owie beret i r\u0119ce podniesione do g\xF3ry, ca\u0142o\u015B\u0107 na niebieskim tle.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6311214/ello-optimized-264c6711.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 ubran\u0105 w sk\xF3rzan\u0105 sp\xF3dnic\u0119 i czerwon\u0105 kurtk\u0119. Kobieta ma na g\u0142owie beret, jasnoszare w\u0142osy, a jej cia\u0142o jest wychylone do boku, ca\u0142o\u015B\u0107 na niebieskim tle.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6311220/ello-optimized-08690ebd.jpg', alt: 'Zdj\u0119cie przedstawia fragment ubioru, wida\u0107 pasek z metalow\u0105 klamr\u0105 i czerwon\u0105 kurtk\u0119.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6311232/ello-optimized-83b24ae9.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na fragment ubioru, wida\u0107 pasek z metalow\u0105 klamr\u0105 i czerwon\u0105 kurtk\u0119.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6311242/ello-optimized-76446cc8.jpg', alt: 'Zdj\u0119cie przedstawia twarz m\u0142odej kobiety z jasnoszarymi w\u0142osami w czarnym berecie na niebieskim tle. Twarz o\u015Bwietlona jest czerwonym \u015Bwiat\u0142em, ca\u0142o\u015B\u0107 na niebieskim tle.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6311427/ello-optimized-3456356e.jpg', alt: 'Zdj\u0119cie przedstawia fioletowe i \u017C\xF3\u0142te ko\u0142a u\u0142o\u017Cone w lini\u0119.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Stylizacja 1.:'
    ),
    _react2.default.createElement(
      'p',
      null,
      'kurtka: The House Of Bruar / beret: Stradivarius / torebka: Tania Odzie\u017C x Olela / bi\u017Cuteria: Yes, H&M'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Stylizacja 2.:'
    ),
    _react2.default.createElement(
      'p',
      null,
      'kurtka: Ochnik / sp\xF3dnica: Reserved / beret: Stradivarius / pasek: TK Maxx'
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Cała_Ta_J...", "date": "2017-10-03T17:18:00.000Z", "categories": ["Sztuka Ubioru"], "tags": ["jesień", "stylizacja", "moda", "sztuka", "kreacja", "artysta", "dzieło"] };
var body = exports.body = "<olela-narrative>\nPrzyszła.\n</olela-narrative>\n<p>Nie przegoniły jej długie wieczory z przyjaciółmi na Placu Zbawiciela przy białym winie. Ona rozlała czerwone.</p>\n<olela-narrative>\nPrzyszła.\n</olela-narrative>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6311178/ello-optimized-1d7944a6.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę ubraną w żółtą pikowaną kurtkę, która trzyma się za brzuch. Kobieta ma pomarańczowe usta, całość na żółtym tle.\" /></p>\n<p>Na nasze cienkie ramiączka zarzuciła szare swetry. Dobrze, że miałyśmy szanse poprosić ją o parę broszek, choć jej brwi zmarszczyły się wtedy groźnie. Przyszła, a wraz z nią w powietrzu zaczęło pachnieć wanilią, pieprzem, kardamonem i ryżem.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6311192/ello-optimized-12af601b.jpg\" alt=\"Zdjęcie przedstawia młodą, uśmiechniętą kobietę ubraną w żółtą pikowaną kurtkę. Kobieta ma czarny beret na głowie, brązową torebkę i jasnoszare włosy, całość na żółtym tle.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6311203/ello-optimized-6c4751bf.jpg\" alt=\"Zdjęcie przedstawia torebkę ze skóry z kolorowym paskiem na żółtym tle.\" /></p>\n<p>Codziennie rano trzyma moje powieki tak mocno, że z trudem udaje mi się otworzyć oczy. Przestawia mój budzik o godzinę do przodu, dlatego z góry skazana jestem na spóźnienie. Jakimś magicznym sposobem odejmuje porcję kofeiny z kawy, w której nie wyczuwam już mocy, jaką czułam jeszcze miesiąc temu.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6311208/ello-optimized-055790ec.jpg\" alt=\"Zdjęcie podzielone jest na dwie części i przedstawia rozmazane sylwetki kobiet w czarnych beretach na żółtym tle.\" /></p>\n<p>Czasami, w środku dnia uda mi się włączyć ulubiony, taneczny utwór, a Ona wtedy traktuje to jako wyzwanie i zaczyna wygrywać melodie uderzając kroplami deszczu o parapet. W co Ty pogrywasz? - pytam. To jakiś Free Jazz? Podgłaśniam swoje brzmienie tak, że głośniki zaczynają trzeszczeć. Skaczę jak głupia po pokoju próbując o niej zapomnieć. Nagle orientuję się, że nie słyszę już ulubionej melodii, że nie wiem właściwie, co słyszę, że w sumie mogłabym to porównać do Możdżera, Bacha i Rammsteina zmiksowanych razem na gładką papkę w blenderze marki Bosch. Zaraz oszaleje! Wyłączam wszystkie sprzęty, oprócz czajnika, bo nastawiłam właśnie wodę na napar z imbiru, kurkumy, mięty, cytryny i miodu. Tak, tak jak chciałaś. Zadowolona? Chowam się pod koc, w ręku trzymam kubek naparu wielkości wiaderka, na głowie mam wełnianą czapkę, a na stopach ciepłe skarpety.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6311234/ello-optimized-2662cd58.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na dłonie zapinające złote guziki żółtej kurtki. Na dłoniach jest dużo złotych pierścionków, a paznokcie są koloru srebrnego, widać też szare włosy.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6311216/ello-optimized-fcca9d40.jpg\" alt=\"Zdjęcie podzielone jest na cztery części i przedstawia dłonie ze złotymi pierścionkami i srebrnymi paznokciami, całość na żółtym tle.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6311212/ello-optimized-c8bc9119.jpg\" alt=\"Zdjęcie przedstawia twarz młodej kobiety oświetloną czerwonym światłem, kobieta ma na głowie czarny beret.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6311175/ello-optimized-adff9eaf.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę ubraną w żółtą pikowaną kurtkę, kobieta ma czarny beret na głowie, pomarańczowe usta, całość na żółtym tle.\" /></p>\n<p>I nagle staje się coś, czego się nie spodziewałam. Przestaje padać, zza chmur przebija słońce, którego promienie ‘zapalają’ kolory liści. Żółcień kadmowa, pomarańcz, cynober, karmin, tyle odcieni, mieni się, wznosi za podmuchem wiatru, opada zgodnie z ziemskim prawem. No – mówię – może się jakoś dogadamy. Skinęła głową, odwróciła się i odeszła stukając spiczastymi botkami z czarnego zamszu o granitową posadzkę chodnika, a klasyczny beżowy trencz z obniżonym stanem budował jej posągowość. Z ławki po lewej stronie alejki zapomniała zabrać kaszkietu i szalika. Szybko złapałam dodatki sezonu i pobiegłam za nią.</p>\n<olela-narrative>\nAh, Cała Ta Jesień.\n</olela-narrative>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6311198/ello-optimized-d7b56e67.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę ubraną w skórzaną spódnicę i czerwoną kurtkę. Kobieta ma na głowie beret i podpiera się rękami pod boki, całość na niebieskim tle.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6311206/ello-optimized-1f445bc2.jpg\" alt=\"Zdjęcie przedstawia kobietę w skórzanej spódnicy i czerwonej kurtce obróconą tyłem. Kobieta ma na głowie beret i ręce podniesione do góry, całość na niebieskim tle.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6311214/ello-optimized-264c6711.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę ubraną w skórzaną spódnicę i czerwoną kurtkę. Kobieta ma na głowie beret, jasnoszare włosy, a jej ciało jest wychylone do boku, całość na niebieskim tle.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6311220/ello-optimized-08690ebd.jpg\" alt=\"Zdjęcie przedstawia fragment ubioru, widać pasek z metalową klamrą i czerwoną kurtkę.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6311232/ello-optimized-83b24ae9.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na fragment ubioru, widać pasek z metalową klamrą i czerwoną kurtkę.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6311242/ello-optimized-76446cc8.jpg\" alt=\"Zdjęcie przedstawia twarz młodej kobiety z jasnoszarymi włosami w czarnym berecie na niebieskim tle. Twarz oświetlona jest czerwonym światłem, całość na niebieskim tle.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6311427/ello-optimized-3456356e.jpg\" alt=\"Zdjęcie przedstawia fioletowe i żółte koła ułożone w linię.\" /></p>\n<p>Stylizacja 1.:</p>\n<p>kurtka: The House Of Bruar / beret: Stradivarius / torebka: Tania Odzież x Olela / biżuteria: Yes, H&amp;M</p>\n<p>Stylizacja 2.:</p>\n<p>kurtka: Ochnik / spódnica: Reserved / beret: Stradivarius / pasek: TK Maxx</p>\n";
var raw = exports.raw = "\n<olela-narrative>\nPrzyszła.\n</olela-narrative>\n\nNie przegoniły jej długie wieczory z przyjaciółmi na Placu Zbawiciela przy białym winie. Ona rozlała czerwone. \n\n<olela-narrative>\nPrzyszła.\n</olela-narrative>\n\n![Zdjęcie przedstawia młodą kobietę ubraną w żółtą pikowaną kurtkę, która trzyma się za brzuch. Kobieta ma pomarańczowe usta, całość na żółtym tle.](https://assets1.ello.co/uploads/asset/attachment/6311178/ello-optimized-1d7944a6.jpg)\n\nNa nasze cienkie ramiączka zarzuciła szare swetry. Dobrze, że miałyśmy szanse poprosić ją o parę broszek, choć jej brwi zmarszczyły się wtedy groźnie. Przyszła, a wraz z nią w powietrzu zaczęło pachnieć wanilią, pieprzem, kardamonem i ryżem.\n\n![Zdjęcie przedstawia młodą, uśmiechniętą kobietę ubraną w żółtą pikowaną kurtkę. Kobieta ma czarny beret na głowie, brązową torebkę i jasnoszare włosy, całość na żółtym tle.](https://assets1.ello.co/uploads/asset/attachment/6311192/ello-optimized-12af601b.jpg)\n![Zdjęcie przedstawia torebkę ze skóry z kolorowym paskiem na żółtym tle.](https://assets0.ello.co/uploads/asset/attachment/6311203/ello-optimized-6c4751bf.jpg)\n\nCodziennie rano trzyma moje powieki tak mocno, że z trudem udaje mi się otworzyć oczy. Przestawia mój budzik o godzinę do przodu, dlatego z góry skazana jestem na spóźnienie. Jakimś magicznym sposobem odejmuje porcję kofeiny z kawy, w której nie wyczuwam już mocy, jaką czułam jeszcze miesiąc temu.\n\n![Zdjęcie podzielone jest na dwie części i przedstawia rozmazane sylwetki kobiet w czarnych beretach na żółtym tle.](https://assets0.ello.co/uploads/asset/attachment/6311208/ello-optimized-055790ec.jpg)\n\nCzasami, w środku dnia uda mi się włączyć ulubiony, taneczny utwór, a Ona wtedy traktuje to jako wyzwanie i zaczyna wygrywać melodie uderzając kroplami deszczu o parapet. W co Ty pogrywasz? - pytam. To jakiś Free Jazz? Podgłaśniam swoje brzmienie tak, że głośniki zaczynają trzeszczeć. Skaczę jak głupia po pokoju próbując o niej zapomnieć. Nagle orientuję się, że nie słyszę już ulubionej melodii, że nie wiem właściwie, co słyszę, że w sumie mogłabym to porównać do Możdżera, Bacha i Rammsteina zmiksowanych razem na gładką papkę w blenderze marki Bosch. Zaraz oszaleje! Wyłączam wszystkie sprzęty, oprócz czajnika, bo nastawiłam właśnie wodę na napar z imbiru, kurkumy, mięty, cytryny i miodu. Tak, tak jak chciałaś. Zadowolona? Chowam się pod koc, w ręku trzymam kubek naparu wielkości wiaderka, na głowie mam wełnianą czapkę, a na stopach ciepłe skarpety.\n\n![Zdjęcie przedstawia zbliżenie na dłonie zapinające złote guziki żółtej kurtki. Na dłoniach jest dużo złotych pierścionków, a paznokcie są koloru srebrnego, widać też szare włosy.](https://assets1.ello.co/uploads/asset/attachment/6311234/ello-optimized-2662cd58.jpg)\n![Zdjęcie podzielone jest na cztery części i przedstawia dłonie ze złotymi pierścionkami i srebrnymi paznokciami, całość na żółtym tle.](https://assets2.ello.co/uploads/asset/attachment/6311216/ello-optimized-fcca9d40.jpg)\n![Zdjęcie przedstawia twarz młodej kobiety oświetloną czerwonym światłem, kobieta ma na głowie czarny beret.](https://assets2.ello.co/uploads/asset/attachment/6311212/ello-optimized-c8bc9119.jpg)\n![Zdjęcie przedstawia młodą kobietę ubraną w żółtą pikowaną kurtkę, kobieta ma czarny beret na głowie, pomarańczowe usta, całość na żółtym tle.](https://assets2.ello.co/uploads/asset/attachment/6311175/ello-optimized-adff9eaf.jpg)\n\nI nagle staje się coś, czego się nie spodziewałam. Przestaje padać, zza chmur przebija słońce, którego promienie ‘zapalają’ kolory liści. Żółcień kadmowa, pomarańcz, cynober, karmin, tyle odcieni, mieni się, wznosi za podmuchem wiatru, opada zgodnie z ziemskim prawem. No – mówię – może się jakoś dogadamy. Skinęła głową, odwróciła się i odeszła stukając spiczastymi botkami z czarnego zamszu o granitową posadzkę chodnika, a klasyczny beżowy trencz z obniżonym stanem budował jej posągowość. Z ławki po lewej stronie alejki zapomniała zabrać kaszkietu i szalika. Szybko złapałam dodatki sezonu i pobiegłam za nią.\n\n<olela-narrative>\nAh, Cała Ta Jesień.\n</olela-narrative>\n\n![Zdjęcie przedstawia młodą kobietę ubraną w skórzaną spódnicę i czerwoną kurtkę. Kobieta ma na głowie beret i podpiera się rękami pod boki, całość na niebieskim tle.](https://assets2.ello.co/uploads/asset/attachment/6311198/ello-optimized-d7b56e67.jpg)\n![Zdjęcie przedstawia kobietę w skórzanej spódnicy i czerwonej kurtce obróconą tyłem. Kobieta ma na głowie beret i ręce podniesione do góry, całość na niebieskim tle.](https://assets0.ello.co/uploads/asset/attachment/6311206/ello-optimized-1f445bc2.jpg)\n![Zdjęcie przedstawia młodą kobietę ubraną w skórzaną spódnicę i czerwoną kurtkę. Kobieta ma na głowie beret, jasnoszare włosy, a jej ciało jest wychylone do boku, całość na niebieskim tle.](https://assets1.ello.co/uploads/asset/attachment/6311214/ello-optimized-264c6711.jpg)\n![Zdjęcie przedstawia fragment ubioru, widać pasek z metalową klamrą i czerwoną kurtkę.](https://assets0.ello.co/uploads/asset/attachment/6311220/ello-optimized-08690ebd.jpg)\n![Zdjęcie przedstawia zbliżenie na fragment ubioru, widać pasek z metalową klamrą i czerwoną kurtkę.](https://assets2.ello.co/uploads/asset/attachment/6311232/ello-optimized-83b24ae9.jpg)\n![Zdjęcie przedstawia twarz młodej kobiety z jasnoszarymi włosami w czarnym berecie na niebieskim tle. Twarz oświetlona jest czerwonym światłem, całość na niebieskim tle.](https://assets0.ello.co/uploads/asset/attachment/6311242/ello-optimized-76446cc8.jpg)\n![Zdjęcie przedstawia fioletowe i żółte koła ułożone w linię.](https://assets1.ello.co/uploads/asset/attachment/6311427/ello-optimized-3456356e.jpg)\n\nStylizacja 1.:\n\nkurtka: The House Of Bruar / beret: Stradivarius / torebka: Tania Odzież x Olela / biżuteria: Yes, H&M\n\nStylizacja 2.:\n\nkurtka: Ochnik / spódnica: Reserved / beret: Stradivarius / pasek: TK Maxx\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 72 */
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

var _ContentLimiter = __webpack_require__(3);

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
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6321789/ello-optimized-10c170fc.jpg', alt: 'Obrazek przedstawia cztery zdj\u0119cia kobiet w strojach o kszta\u0142cie ko\u0142a, na tle geometrycznych czarno-bia\u0142ych figur.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6321790/ello-optimized-bd9371a6.jpg', alt: 'Obrazek przedstawia zdj\u0119cia postaci ubranych w stroje w kropki, na tle r\xF3\u017Cnobarwnych kropek, ca\u0142o\u015B\u0107 na czarno-bia\u0142y, geometrycznym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6321719/ello-optimized-77db47fb.jpg', alt: 'Obrazek przedstawia zdj\u0119cia obraz\xF3w, tortu, but\xF3w, fragment paletki do makija\u017Cu, dooko\u0142a wida\u0107 czarne okr\u0119gi r\xF3\u017Cnej wielko\u015Bci.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6321725/ello-optimized-7a107f6a.jpg', alt: 'Obrazek przedstawia zdj\u0119cia dzie\u0142 r\xF3\u017Cnych artyst\xF3w, widzimy rze\u017Aby w przestrzeni i budowle w kszta\u0142cie ko\u0142a. Na tle znajduje si\u0119 czarne ko\u0142o i ma\u0142e bia\u0142e k\xF3\u0142ka.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6321726/ello-optimized-e9af3234.jpg', alt: 'Obrazek przedstawia bia\u0142e napisy na czarnym tle.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "KOŁO [moodboard]", "date": "2017-10-05T17:33:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["circle", "koło", "symbol", "moodboard", "art", "sztuka", "artysta"], "description": "Koło Moodboard by Olela Krawczyk" };
var body = exports.body = "<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6321789/ello-optimized-10c170fc.jpg\" alt=\"Obrazek przedstawia cztery zdjęcia kobiet w strojach o kształcie koła, na tle geometrycznych czarno-białych figur.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6321790/ello-optimized-bd9371a6.jpg\" alt=\"Obrazek przedstawia zdjęcia postaci ubranych w stroje w kropki, na tle różnobarwnych kropek, całość na czarno-biały, geometrycznym tle.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6321719/ello-optimized-77db47fb.jpg\" alt=\"Obrazek przedstawia zdjęcia obrazów, tortu, butów, fragment paletki do makijażu, dookoła widać czarne okręgi różnej wielkości.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6321725/ello-optimized-7a107f6a.jpg\" alt=\"Obrazek przedstawia zdjęcia dzieł różnych artystów, widzimy rzeźby w przestrzeni i budowle w kształcie koła. Na tle znajduje się czarne koło i małe białe kółka.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6321726/ello-optimized-e9af3234.jpg\" alt=\"Obrazek przedstawia białe napisy na czarnym tle.\" /></p>\n";
var raw = exports.raw = "\n![Obrazek przedstawia cztery zdjęcia kobiet w strojach o kształcie koła, na tle geometrycznych czarno-białych figur.](https://assets0.ello.co/uploads/asset/attachment/6321789/ello-optimized-10c170fc.jpg)\n![Obrazek przedstawia zdjęcia postaci ubranych w stroje w kropki, na tle różnobarwnych kropek, całość na czarno-biały, geometrycznym tle.](https://assets1.ello.co/uploads/asset/attachment/6321790/ello-optimized-bd9371a6.jpg)\n![Obrazek przedstawia zdjęcia obrazów, tortu, butów, fragment paletki do makijażu, dookoła widać czarne okręgi różnej wielkości.](https://assets2.ello.co/uploads/asset/attachment/6321719/ello-optimized-77db47fb.jpg)\n![Obrazek przedstawia zdjęcia dzieł różnych artystów, widzimy rzeźby w przestrzeni i budowle w kształcie koła. Na tle znajduje się czarne koło i małe białe kółka.](https://assets1.ello.co/uploads/asset/attachment/6321725/ello-optimized-7a107f6a.jpg)\n![Obrazek przedstawia białe napisy na czarnym tle.](https://assets1.ello.co/uploads/asset/attachment/6321726/ello-optimized-e9af3234.jpg)\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 73 */
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

var _ContentLimiter = __webpack_require__(3);

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
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6343928/ello-optimized-62e000e7.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 w mocnym makija\u017Cu, czerwonej bluzce na niebiesko-\u017C\xF3\u0142tym tle. Dooko\u0142a prostok\u0105tne elementy.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Kiedy\u015B pewien profesor czytaj\u0105c kawa\u0142ek mojej pracy semestralnej powiedzia\u0142: \u201EJako artystka mo\u017Ce by\u0107 pani wariatk\u0105, ale nie jako studentka.\u201D, po czym odes\u0142a\u0142 mnie z kwitkiem (bez oceny) do domu. Kiedy my\u015Bl\u0119 o wariactwach w sztuce, to zaraz obok postaci Witkacego maluje mi si\u0119 twarz Yayoi Kusama. Jej przepe\u0142nione obsesj\u0105 oczy wibruj\u0105 w przestrzeni niczym cz\u0119\u015B\u0107 jej artystycznych instalacji.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6343935/ello-optimized-abf52d73.jpg', alt: 'Zdj\u0119cie podzielone jest na dwie cz\u0119\u015Bci i obie przedstawiaj\u0105 oko w makija\u017Cu, po lewej stronie otwarte, po prawej zamkni\u0119te.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Yayoi liczy 88 wiosen i od wielu, wielu lat mieszka w tokijskim szpitalu psychiatrycznym. Jak sama m\xF3wi uprawia \u2018sztuk\u0119 obsesyjn\u0105\u2019 , kt\xF3ra jest tak\u017Ce cz\u0119\u015Bci\u0105 jej terapii. Artystka cierpi na zaawansowan\u0105 nerwic\u0119, zaburzenia obsesyjno-kompulsywne, stany l\u0119kowe, halucynacje, a kropkowe obrazy s\u0105 moim zdaniem swoist\u0105 rejestracj\u0105 szumu, kt\xF3ry nieustannie jej towarzyszy (cho\u0107 sama twierdzi, \u017Ce kropki to spos\xF3b na przekazanie \u015Bwiatu przes\u0142ania mi\u0142o\u015Bci...).'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6343937/ello-optimized-a0fc07cd.jpg', alt: 'Zdj\u0119cie przedstawia kobiece oko w mocnym makija\u017Cu, oko znajduje si\u0119 w czarnym konturze na \u015Brodku obrazka.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6343944/ello-optimized-bd8f8e89.jpg', alt: 'Obrazek przedstawia czerwone ko\u0142o z czarnym ko\u0142em wewn\u0105trz, oraz trzy niezidentyfikowane kszta\u0142ty obok k\xF3\u0142.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Dzia\u0142ania Yayoi si\u0119gaj\u0105 poprzez malarstwo, rze\u017Ab\u0119, instalacj\u0119, literatur\u0119 po sztuk\u0119 performance. Jest ona tak\u017Ce aktywistk\u0105 polityczn\u0105 \u2013 sensacj\u0119 wywo\u0142a\u0142 list, kt\xF3ry wys\u0142a\u0142a do \xF3wczesnego prezydenta Stan\xF3w Zjednoczonych Richarda Nixona oferuj\u0105c mu seks w zamian za zako\u0144czenie wojny w Wietnamie. Podobno jej ojciec, pomimo ma\u0142\u017Ce\u0144stwa, nie stroni\u0142 od pi\u0119knych kobiet, a Yayoi nieraz widzia\u0142a go w dwuznacznych sytuacjach. To obudzi\u0142o w niej wstr\u0119t do mi\u0142o\u015Bci w wymiarze fizycznym. Nigdy nie wysz\u0142a za m\u0105\u017C. Przez d\u0142ugi czas zwi\u0105zana by\u0142a z artyst\u0105 impotentem. W jej sztuce wielokrotnie pojawiaj\u0105 si\u0119 falliczne kszta\u0142ty, np. w instalacji pt.: \u2018Aggregation: One Thousand Boats Show\u2019, gdzie na \u015Brodku pomieszczenia stoi \u0142\xF3d\u017A wype\u0142niona, a wr\u0119cz zbudowana z penis\xF3w. Widzimy wi\u0119c metafor\u0119 \u015Bwiadomego umys\u0142u, dryfuj\u0105cego ponad nie\u015Bwiadom\u0105 g\u0142\u0119bi\u0105. Jednak\u017Ce tutaj pe\u0142nia umys\u0142u zosta\u0142a wype\u0142niona, a wr\u0119cz obl\u0119\u017Cona erotycznymi symbolami. Scen\u0119 dope\u0142niaj\u0105 fotografie \u0142odzi znajduj\u0105ce si\u0119 na \u015Bcianach dooko\u0142a (pomys\u0142 multiplikacji w formie tapety zapo\u017Cyczy od artystki Andy Warhol). \u017Bywy obiekt kontrastuje ze swoim przedstawieniem, jawi\u0105c si\u0119 nam jeszcze bardziej prawdziwym.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6343943/ello-optimized-ba04c6d0.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 w mocnym makija\u017Cu w czerwonej bluzce, na \u017C\xF3\u0142to-niebieskim tle. Dooko\u0142a kobiety widzimy czerwone ko\u0142a.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Podobno Kusama ju\u017C jako dziecko miewa\u0142a halucynacje. Pierwszym z zapami\u0119tanych przez ni\u0105 obraz\xF3w jest przemawiaj\u0105ca do niej dynia. By\u0142 to te\u017C jej ulubiony obiekt \u0107wicze\u0144 rysunkowych:',
      _react2.default.createElement(
        'olela-narrative',
        null,
        '\u201EGdy s\u0142o\u0144ce wschodzi\u0142o ponad Higashiyam\u0105, stawa\u0142am przed dyni\u0105, zapominaj\u0105c o ca\u0142ym \u015Bwiecie, koncentrowa\u0142am ca\u0142kowicie sw\xF3j umys\u0142 na formie, kt\xF3ra znajdowa\u0142a si\u0119 przede mn\u0105. Podobnie jak Bodhidharma [pierwszy patriarcha buddyzmu zen], kt\xF3ry sp\u0119dzi\u0142 dziesi\u0119\u0107 lat, zwracaj\u0105c si\u0119 w stron\u0119 kamiennej \u015Bciany, sp\u0119dzi\u0142am miesi\u0105c na konfrontacji z pojedyncz\u0105 dyni\u0105. \u017Ba\u0142owa\u0142am nawet czasu na sen\u201D'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6343945/ello-optimized-308e262c.jpg', alt: 'Zdj\u0119cie przedstawia po\u0142ow\u0119 twarzy m\u0142odej kobiety z czerwonymi ustami, druga po\u0142owa jest domalowana czarn\u0105 kresk\u0105 na bia\u0142ym tle.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Dla mnie Kusama jest artystk\u0105 doskona\u0142\u0105, przede wszystkim dlatego, \u017Ce pozostaje sob\u0105. Ona nie musi  m\xF3wi\u0107, \u017Ce \u2018wierzy\u2019 w swoj\u0105 tw\xF3rczo\u015B\u0107, bo ona po prostu ni\u0105 jest. Nie szuka na si\u0142\u0119 s\u0142awy i rozg\u0142osu, a swoje pomys\u0142y dostosowuje do odpowiedniego medium wyrazu, co czyni j\u0105 wszechstronn\u0105 i uniwersaln\u0105. Wszystkie dzia\u0142ania s\u0105 jednak niezwykle nasi\u0105kni\u0119te ni\u0105 sam\u0105. Czy to chodz\u0105c w wykreowan\u0105 przez ni\u0105 przestrze\u0144, czy patrz\u0105c na jeden z obraz\xF3w, czy nawet nosz\u0105c ubranie z kolekcji Louis Vuitton (artystka wsp\xF3\u0142pracowa\u0142a z mark\u0105 w 2012 roku tworz\u0105c kolekcj\u0119, oczywi\u015Bcie\u2026 ca\u0142\u0105 w kropki) stajemy si\u0119 jakby wsp\xF3\u0142istniej\u0105cymi z umys\u0142em Yayoi, przejmujemy i przyjmujemy odrobin\u0119 jej szale\u0144stwa. Bo w szale\u0144stwie przecie\u017C jest metoda.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6343955/ello-optimized-f6f25833.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na twarz kobiety w mocnym makija\u017Cu, kobieta ma czerwone usta i czerwon\u0105 bluzk\u0119.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Teksty, z kt\xF3rych korzysta\u0142am:'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: 'http://www.criticismism.com/2012/02/08/yoyoi-kusama-aggregation-one-thousand-boats-show-1963/#sthash.oiVQePyq.dpbs' },
          'http://www.criticismism.com/2012/02/08/yoyoi-kusama-aggregation-one-thousand-boats-show-1963/#sthash.oiVQePyq.dpbs'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: 'http://www.wysokieobcasy.pl/wysokie-obcasy/7,127763,21151809,yayoi-kusama-rozwiazla-krolowa-hipisow.html?disableRedirects=true' },
          'http://www.wysokieobcasy.pl/wysokie-obcasy/7,127763,21151809,yayoi-kusama-rozwiazla-krolowa-hipisow.html?disableRedirects=true'
        )
      )
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Make-up inspirowany obrazem. 'Flying_Eyes'_by_Yayoi Kusama", "date": "2017-10-10T16:25:00.000Z", "categories": ["Sztuka Makijażu"], "tags": ["kusama", "yayoi", "makeup", "makijaż", "dzieło", "obraz", "kreacja", "artysta", "art", "sztuka"] };
var body = exports.body = "<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6343928/ello-optimized-62e000e7.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę w mocnym makijażu, czerwonej bluzce na niebiesko-żółtym tle. Dookoła prostokątne elementy.\" /></p>\n<p>Kiedyś pewien profesor czytając kawałek mojej pracy semestralnej powiedział: „Jako artystka może być pani wariatką, ale nie jako studentka.”, po czym odesłał mnie z kwitkiem (bez oceny) do domu. Kiedy myślę o wariactwach w sztuce, to zaraz obok postaci Witkacego maluje mi się twarz Yayoi Kusama. Jej przepełnione obsesją oczy wibrują w przestrzeni niczym część jej artystycznych instalacji.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6343935/ello-optimized-abf52d73.jpg\" alt=\"Zdjęcie podzielone jest na dwie części i obie przedstawiają oko w makijażu, po lewej stronie otwarte, po prawej zamknięte.\" /></p>\n<p>Yayoi liczy 88 wiosen i od wielu, wielu lat mieszka w tokijskim szpitalu psychiatrycznym. Jak sama mówi uprawia ‘sztukę obsesyjną’ , która jest także częścią jej terapii. Artystka cierpi na zaawansowaną nerwicę, zaburzenia obsesyjno-kompulsywne, stany lękowe, halucynacje, a kropkowe obrazy są moim zdaniem swoistą rejestracją szumu, który nieustannie jej towarzyszy (choć sama twierdzi, że kropki to sposób na przekazanie światu przesłania miłości...).</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6343937/ello-optimized-a0fc07cd.jpg\" alt=\"Zdjęcie przedstawia kobiece oko w mocnym makijażu, oko znajduje się w czarnym konturze na środku obrazka.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6343944/ello-optimized-bd8f8e89.jpg\" alt=\"Obrazek przedstawia czerwone koło z czarnym kołem wewnątrz, oraz trzy niezidentyfikowane kształty obok kół.\" /></p>\n<p>Działania Yayoi sięgają poprzez malarstwo, rzeźbę, instalację, literaturę po sztukę performance. Jest ona także aktywistką polityczną – sensację wywołał list, który wysłała do ówczesnego prezydenta Stanów Zjednoczonych Richarda Nixona oferując mu seks w zamian za zakończenie wojny w Wietnamie. Podobno jej ojciec, pomimo małżeństwa, nie stronił od pięknych kobiet, a Yayoi nieraz widziała go w dwuznacznych sytuacjach. To obudziło w niej wstręt do miłości w wymiarze fizycznym. Nigdy nie wyszła za mąż. Przez długi czas związana była z artystą impotentem. W jej sztuce wielokrotnie pojawiają się falliczne kształty, np. w instalacji pt.: ‘Aggregation: One Thousand Boats Show’, gdzie na środku pomieszczenia stoi łódź wypełniona, a wręcz zbudowana z penisów. Widzimy więc metaforę świadomego umysłu, dryfującego ponad nieświadomą głębią. Jednakże tutaj pełnia umysłu została wypełniona, a wręcz oblężona erotycznymi symbolami. Scenę dopełniają fotografie łodzi znajdujące się na ścianach dookoła (pomysł multiplikacji w formie tapety zapożyczy od artystki Andy Warhol). Żywy obiekt kontrastuje ze swoim przedstawieniem, jawiąc się nam jeszcze bardziej prawdziwym.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6343943/ello-optimized-ba04c6d0.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę w mocnym makijażu w czerwonej bluzce, na żółto-niebieskim tle. Dookoła kobiety widzimy czerwone koła.\" /></p>\n<p>Podobno Kusama już jako dziecko miewała halucynacje. Pierwszym z zapamiętanych przez nią obrazów jest przemawiająca do niej dynia. Był to też jej ulubiony obiekt ćwiczeń rysunkowych:\n<olela-narrative>\n„Gdy słońce wschodziło ponad Higashiyamą, stawałam przed dynią, zapominając o całym świecie, koncentrowałam całkowicie swój umysł na formie, która znajdowała się przede mną. Podobnie jak Bodhidharma [pierwszy patriarcha buddyzmu zen], który spędził dziesięć lat, zwracając się w stronę kamiennej ściany, spędziłam miesiąc na konfrontacji z pojedynczą dynią. Żałowałam nawet czasu na sen”\n</olela-narrative></p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6343945/ello-optimized-308e262c.jpg\" alt=\"Zdjęcie przedstawia połowę twarzy młodej kobiety z czerwonymi ustami, druga połowa jest domalowana czarną kreską na białym tle.\" /></p>\n<p>Dla mnie Kusama jest artystką doskonałą, przede wszystkim dlatego, że pozostaje sobą. Ona nie musi  mówić, że ‘wierzy’ w swoją twórczość, bo ona po prostu nią jest. Nie szuka na siłę sławy i rozgłosu, a swoje pomysły dostosowuje do odpowiedniego medium wyrazu, co czyni ją wszechstronną i uniwersalną. Wszystkie działania są jednak niezwykle nasiąknięte nią samą. Czy to chodząc w wykreowaną przez nią przestrzeń, czy patrząc na jeden z obrazów, czy nawet nosząc ubranie z kolekcji Louis Vuitton (artystka współpracowała z marką w 2012 roku tworząc kolekcję, oczywiście… całą w kropki) stajemy się jakby współistniejącymi z umysłem Yayoi, przejmujemy i przyjmujemy odrobinę jej szaleństwa. Bo w szaleństwie przecież jest metoda.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6343955/ello-optimized-f6f25833.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na twarz kobiety w mocnym makijażu, kobieta ma czerwone usta i czerwoną bluzkę.\" /></p>\n<p>Teksty, z których korzystałam:</p>\n<ul>\n<li><a href=\"http://www.criticismism.com/2012/02/08/yoyoi-kusama-aggregation-one-thousand-boats-show-1963/#sthash.oiVQePyq.dpbs\">http://www.criticismism.com/2012/02/08/yoyoi-kusama-aggregation-one-thousand-boats-show-1963/#sthash.oiVQePyq.dpbs</a></li>\n<li><a href=\"http://www.wysokieobcasy.pl/wysokie-obcasy/7,127763,21151809,yayoi-kusama-rozwiazla-krolowa-hipisow.html?disableRedirects=true\">http://www.wysokieobcasy.pl/wysokie-obcasy/7,127763,21151809,yayoi-kusama-rozwiazla-krolowa-hipisow.html?disableRedirects=true</a></li>\n</ul>\n";
var raw = exports.raw = "\n![Zdjęcie przedstawia młodą kobietę w mocnym makijażu, czerwonej bluzce na niebiesko-żółtym tle. Dookoła prostokątne elementy.](https://assets2.ello.co/uploads/asset/attachment/6343928/ello-optimized-62e000e7.jpg)\n\n\nKiedyś pewien profesor czytając kawałek mojej pracy semestralnej powiedział: „Jako artystka może być pani wariatką, ale nie jako studentka.”, po czym odesłał mnie z kwitkiem (bez oceny) do domu. Kiedy myślę o wariactwach w sztuce, to zaraz obok postaci Witkacego maluje mi się twarz Yayoi Kusama. Jej przepełnione obsesją oczy wibrują w przestrzeni niczym część jej artystycznych instalacji. \n\n![Zdjęcie podzielone jest na dwie części i obie przedstawiają oko w makijażu, po lewej stronie otwarte, po prawej zamknięte.](https://assets1.ello.co/uploads/asset/attachment/6343935/ello-optimized-abf52d73.jpg)\n\nYayoi liczy 88 wiosen i od wielu, wielu lat mieszka w tokijskim szpitalu psychiatrycznym. Jak sama mówi uprawia ‘sztukę obsesyjną’ , która jest także częścią jej terapii. Artystka cierpi na zaawansowaną nerwicę, zaburzenia obsesyjno-kompulsywne, stany lękowe, halucynacje, a kropkowe obrazy są moim zdaniem swoistą rejestracją szumu, który nieustannie jej towarzyszy (choć sama twierdzi, że kropki to sposób na przekazanie światu przesłania miłości…).\n\n![Zdjęcie przedstawia kobiece oko w mocnym makijażu, oko znajduje się w czarnym konturze na środku obrazka.](https://assets1.ello.co/uploads/asset/attachment/6343937/ello-optimized-a0fc07cd.jpg)\n![Obrazek przedstawia czerwone koło z czarnym kołem wewnątrz, oraz trzy niezidentyfikowane kształty obok kół.](https://assets1.ello.co/uploads/asset/attachment/6343944/ello-optimized-bd8f8e89.jpg)\n\nDziałania Yayoi sięgają poprzez malarstwo, rzeźbę, instalację, literaturę po sztukę performance. Jest ona także aktywistką polityczną – sensację wywołał list, który wysłała do ówczesnego prezydenta Stanów Zjednoczonych Richarda Nixona oferując mu seks w zamian za zakończenie wojny w Wietnamie. Podobno jej ojciec, pomimo małżeństwa, nie stronił od pięknych kobiet, a Yayoi nieraz widziała go w dwuznacznych sytuacjach. To obudziło w niej wstręt do miłości w wymiarze fizycznym. Nigdy nie wyszła za mąż. Przez długi czas związana była z artystą impotentem. W jej sztuce wielokrotnie pojawiają się falliczne kształty, np. w instalacji pt.: ‘Aggregation: One Thousand Boats Show’, gdzie na środku pomieszczenia stoi łódź wypełniona, a wręcz zbudowana z penisów. Widzimy więc metaforę świadomego umysłu, dryfującego ponad nieświadomą głębią. Jednakże tutaj pełnia umysłu została wypełniona, a wręcz oblężona erotycznymi symbolami. Scenę dopełniają fotografie łodzi znajdujące się na ścianach dookoła (pomysł multiplikacji w formie tapety zapożyczy od artystki Andy Warhol). Żywy obiekt kontrastuje ze swoim przedstawieniem, jawiąc się nam jeszcze bardziej prawdziwym.\n\n![Zdjęcie przedstawia młodą kobietę w mocnym makijażu w czerwonej bluzce, na żółto-niebieskim tle. Dookoła kobiety widzimy czerwone koła.](https://assets0.ello.co/uploads/asset/attachment/6343943/ello-optimized-ba04c6d0.jpg)\n\nPodobno Kusama już jako dziecko miewała halucynacje. Pierwszym z zapamiętanych przez nią obrazów jest przemawiająca do niej dynia. Był to też jej ulubiony obiekt ćwiczeń rysunkowych: \n<olela-narrative>\n„Gdy słońce wschodziło ponad Higashiyamą, stawałam przed dynią, zapominając o całym świecie, koncentrowałam całkowicie swój umysł na formie, która znajdowała się przede mną. Podobnie jak Bodhidharma [pierwszy patriarcha buddyzmu zen], który spędził dziesięć lat, zwracając się w stronę kamiennej ściany, spędziłam miesiąc na konfrontacji z pojedynczą dynią. Żałowałam nawet czasu na sen” \n</olela-narrative>\n\n\n![Zdjęcie przedstawia połowę twarzy młodej kobiety z czerwonymi ustami, druga połowa jest domalowana czarną kreską na białym tle.](https://assets0.ello.co/uploads/asset/attachment/6343945/ello-optimized-308e262c.jpg)\n\n\nDla mnie Kusama jest artystką doskonałą, przede wszystkim dlatego, że pozostaje sobą. Ona nie musi  mówić, że ‘wierzy’ w swoją twórczość, bo ona po prostu nią jest. Nie szuka na siłę sławy i rozgłosu, a swoje pomysły dostosowuje do odpowiedniego medium wyrazu, co czyni ją wszechstronną i uniwersalną. Wszystkie działania są jednak niezwykle nasiąknięte nią samą. Czy to chodząc w wykreowaną przez nią przestrzeń, czy patrząc na jeden z obrazów, czy nawet nosząc ubranie z kolekcji Louis Vuitton (artystka współpracowała z marką w 2012 roku tworząc kolekcję, oczywiście… całą w kropki) stajemy się jakby współistniejącymi z umysłem Yayoi, przejmujemy i przyjmujemy odrobinę jej szaleństwa. Bo w szaleństwie przecież jest metoda. \n\n![Zdjęcie przedstawia zbliżenie na twarz kobiety w mocnym makijażu, kobieta ma czerwone usta i czerwoną bluzkę.](https://assets1.ello.co/uploads/asset/attachment/6343955/ello-optimized-f6f25833.jpg)\n\nTeksty, z których korzystałam:\n* http://www.criticismism.com/2012/02/08/yoyoi-kusama-aggregation-one-thousand-boats-show-1963/#sthash.oiVQePyq.dpbs\n* http://www.wysokieobcasy.pl/wysokie-obcasy/7,127763,21151809,yayoi-kusama-rozwiazla-krolowa-hipisow.html?disableRedirects=true\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 74 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'POPular ART... czyli kierunek w sztuce, kt\xF3remu w ukszta\u0142towaniu si\u0119 pom\xF3g\u0142 konsumpcyjny charakter zachodniej cywilizacji. Termin ten po raz pierwszy u\u017Cyty zosta\u0142 przez angielskiego krytyka sztuki Lawrence\u2019a Allowaya w \u201EPrzegl\u0105dzie Architektonicznym\u201D (\u201EArchitectural Digest\u201D) z 1952 r. Arty\u015Bci pop-artu czerpali inspiracje z surrealizmu, dadaizmu, naturalizmu, wywy\u017Cszaj\u0105c \u015Bwiadectwa kultury masowej do rangi sztuki. Pocz\u0105tkowo nurt obj\u0105\u0142 malarstwo, grafik\u0119, p\xF3\u017Aniej r\xF3wnie\u017C rze\u017Ab\u0119, obiekt, instalacj\u0119, asambla\u017C, kola\u017C\u2026'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6354483/ello-optimized-42b4b370.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na niebieskim tle w otoczeniu graficznych czarnych i \u017C\xF3\u0142tych element\xF3w, widzimy posta\u0107 Marilyn Monroe, puszk\u0119, kobiec\u0105 twarz zbudowan\u0105 z kropek z \u017C\xF3\u0142tymi w\u0142osami.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6354488/ello-optimized-75a8c10d.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na niebieskim tle w otoczeniu bia\u0142ych i czarnych element\xF3w. Widzimy torebk\u0119, buty, marynark\u0119, sukienk\u0119, kolczyki w kszta\u0142cie oczu, twarz kobiety w mocnym makija\u017Cu, modelki pozuj\u0105ce w sukienkach.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6355050/ello-optimized-867aed6a.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na niebieskim tle w otoczeniu bia\u0142o-czarno-\u017C\xF3\u0142tych element\xF3w graficznych. Widzimy kobiet\u0119 siedz\u0105c\u0105, dwa krzes\u0142a, obraz ust pal\u0105cych papierosa, kanap\u0119 w kszta\u0142cie ust.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6354494/ello-optimized-4b7f690d.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na niebieskim tle, widzimy komiksow\u0105 chmurk\u0119, hot doga, r\u0119k\u0119 trzymaj\u0105c\u0105 r\xF3\u017Cowego banana, wielk\u0105 rze\u017Ab\u0119 loda na dachu budynku, kola\u017C znanego artysty.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6355045/ello-optimized-7c317b81.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na niebieskim tle w otoczeniu \u017C\xF3\u0142tych element\xF3w, widzimy kola\u017C znanego artysty, fotografi\u0119 przedstawiaj\u0105c\u0105 posta\u0107 oblepion\u0105 produktami spo\u017Cywczymi, zdj\u0119cie kolorowego budynku, na samym dole znajduj\u0105 si\u0119 bia\u0142e napisy na niebieskim tle.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Zajrzyjcie do NINATEKI na odcinek \u2018Przewodnika po sztuce\u2019'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: 'http://ninateka.pl/film/przewodnik-po-sztuce-odc-4-pop-art' },
          'http://ninateka.pl/film/przewodnik-po-sztuce-odc-4-pop-art'
        )
      )
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "POP-ART [moodboard]", "date": "2017-10-12T14:47:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["popart", "pop", "art", "moodboard", "sztuka", "kierunek", "artist", "artysta"] };
var body = exports.body = "<p>POPular ART... czyli kierunek w sztuce, któremu w ukształtowaniu się pomógł konsumpcyjny charakter zachodniej cywilizacji.\nTermin ten po raz pierwszy użyty został przez angielskiego krytyka sztuki Lawrence’a Allowaya w „Przeglądzie Architektonicznym” („Architectural Digest”) z 1952 r. Artyści pop-artu czerpali inspiracje z surrealizmu, dadaizmu, naturalizmu, wywyższając świadectwa kultury masowej do rangi sztuki. Początkowo nurt objął malarstwo, grafikę, później również rzeźbę, obiekt, instalację, asamblaż, kolaż…</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6354483/ello-optimized-42b4b370.jpg\" alt=\"Obraz przedstawia różne zdjęcia na niebieskim tle w otoczeniu graficznych czarnych i żółtych elementów, widzimy postać Marilyn Monroe, puszkę, kobiecą twarz zbudowaną z kropek z żółtymi włosami.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6354488/ello-optimized-75a8c10d.jpg\" alt=\"Obraz przedstawia różne zdjęcia na niebieskim tle w otoczeniu białych i czarnych elementów. Widzimy torebkę, buty, marynarkę, sukienkę, kolczyki w kształcie oczu, twarz kobiety w mocnym makijażu, modelki pozujące w sukienkach.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6355050/ello-optimized-867aed6a.jpg\" alt=\"Obraz przedstawia różne zdjęcia na niebieskim tle w otoczeniu biało-czarno-żółtych elementów graficznych. Widzimy kobietę siedzącą, dwa krzesła, obraz ust palących papierosa, kanapę w kształcie ust.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6354494/ello-optimized-4b7f690d.jpg\" alt=\"Obraz przedstawia różne zdjęcia na niebieskim tle, widzimy komiksową chmurkę, hot doga, rękę trzymającą różowego banana, wielką rzeźbę loda na dachu budynku, kolaż znanego artysty.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6355045/ello-optimized-7c317b81.jpg\" alt=\"Obraz przedstawia różne zdjęcia na niebieskim tle w otoczeniu żółtych elementów, widzimy kolaż znanego artysty, fotografię przedstawiającą postać oblepioną produktami spożywczymi, zdjęcie kolorowego budynku, na samym dole znajdują się białe napisy na niebieskim tle.\" /></p>\n<p>Zajrzyjcie do NINATEKI na odcinek ‘Przewodnika po sztuce’</p>\n<ul>\n<li><a href=\"http://ninateka.pl/film/przewodnik-po-sztuce-odc-4-pop-art\">http://ninateka.pl/film/przewodnik-po-sztuce-odc-4-pop-art</a></li>\n</ul>\n";
var raw = exports.raw = "\nPOPular ART... czyli kierunek w sztuce, któremu w ukształtowaniu się pomógł konsumpcyjny charakter zachodniej cywilizacji.\nTermin ten po raz pierwszy użyty został przez angielskiego krytyka sztuki Lawrence’a Allowaya w „Przeglądzie Architektonicznym” („Architectural Digest”) z 1952 r. Artyści pop-artu czerpali inspiracje z surrealizmu, dadaizmu, naturalizmu, wywyższając świadectwa kultury masowej do rangi sztuki. Początkowo nurt objął malarstwo, grafikę, później również rzeźbę, obiekt, instalację, asamblaż, kolaż...\n\n![Obraz przedstawia różne zdjęcia na niebieskim tle w otoczeniu graficznych czarnych i żółtych elementów, widzimy postać Marilyn Monroe, puszkę, kobiecą twarz zbudowaną z kropek z żółtymi włosami.](https://assets0.ello.co/uploads/asset/attachment/6354483/ello-optimized-42b4b370.jpg)\n![Obraz przedstawia różne zdjęcia na niebieskim tle w otoczeniu białych i czarnych elementów. Widzimy torebkę, buty, marynarkę, sukienkę, kolczyki w kształcie oczu, twarz kobiety w mocnym makijażu, modelki pozujące w sukienkach.](https://assets0.ello.co/uploads/asset/attachment/6354488/ello-optimized-75a8c10d.jpg)\n![Obraz przedstawia różne zdjęcia na niebieskim tle w otoczeniu biało-czarno-żółtych elementów graficznych. Widzimy kobietę siedzącą, dwa krzesła, obraz ust palących papierosa, kanapę w kształcie ust.](https://assets2.ello.co/uploads/asset/attachment/6355050/ello-optimized-867aed6a.jpg)\n![Obraz przedstawia różne zdjęcia na niebieskim tle, widzimy komiksową chmurkę, hot doga, rękę trzymającą różowego banana, wielką rzeźbę loda na dachu budynku, kolaż znanego artysty.](https://assets2.ello.co/uploads/asset/attachment/6354494/ello-optimized-4b7f690d.jpg)\n![Obraz przedstawia różne zdjęcia na niebieskim tle w otoczeniu żółtych elementów, widzimy kolaż znanego artysty, fotografię przedstawiającą postać oblepioną produktami spożywczymi, zdjęcie kolorowego budynku, na samym dole znajdują się białe napisy na niebieskim tle.](https://assets2.ello.co/uploads/asset/attachment/6355045/ello-optimized-7c317b81.jpg)\n\nZajrzyjcie do NINATEKI na odcinek 'Przewodnika po sztuce'\n\n* http://ninateka.pl/film/przewodnik-po-sztuce-odc-4-pop-art";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 75 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'W swoim \u017Cyciu nie spotka\u0142am kobiety, kt\xF3ra nie lubi\u0142aby ciuch\xF3w. Wygl\u0105d przecie\u017C nie tylko \u015Bwiadczy o nas samych, ale te\u017C jest wyrazem szacunku dla drugiego cz\u0142owieka. Poza tym, dzi\u0119ki dobrze dopasowanym ubraniom mo\u017Cna \u015Bwietnie si\u0119 czu\u0107, co przek\u0142ada si\u0119 tak naprawd\u0119 na nasze \u017Cycie. Salvador Dali mawia\u0142 \u201EPodstaw\u0105 wielkich zwyci\u0119stw jest ubranie.\u201D I my, na co dzie\u0144 odnosimy takie swoje ma\u0142e zwyci\u0119stwa, kiedy uda nam si\u0119 ubra\u0107 zgodnie z sob\u0105 samym, bo dzi\u0119ki temu promieniujemy dobr\u0105 energi\u0105. \u017Beby dobrze si\u0119 ubra\u0107 wcale nie trzeba \u015Blepo pod\u0105\u017Ca\u0107 za trendami. Je\u015Bli danego sezonu modnym kolorem zostaje okrzykni\u0119ty kanarkowy \u017C\xF3\u0142ty, a Ty porostu nie znosisz tego koloru, a on nie znosi Ciebie, to przecie\u017C nikt nie zmusza Ci\u0119 do noszenia \u017C\xF3\u0142tego swetra. Trzeba zrozumie\u0107 natur\u0119 trend\xF3w \u2013 one tak jak kolejna wiosna, przemin\u0105 (na dodatek maj\u0105 tendencje do powtarzania si\u0119). Dlatego w ca\u0142ej tej modowej gonitwie trzeba szuka\u0107 przede wszystkim siebie. Mamy dzi\u015B nieograniczone mo\u017Cliwo\u015Bci, bo w sklepach znajdziemy praktycznie wszystko. W tym czuj\u0119 si\u0119 \u015Bwietnie, ale te\u017C wygl\u0105dam w tym \u015Bwietnie, uwielbiam soczyst\u0105 ziele\u0144, rozkloszowane sp\xF3dnice, retro \u0142\u0105czone z futur\u0105, i super!'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6379870/ello-optimized-d3d63468.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia, na lewym widzimy posta\u0107 kobiety w szarej sp\xF3dnicy z br\u0105zowym paskiem, koszuli w paski, na r\xF3\u017Cowym tle. Po prawej stronie znajduje si\u0119 zbli\u017Cenie paska.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6379877/ello-optimized-2a8b6ae3.jpg', alt: 'Obraz przedstawia zdj\u0119cie kobiecych n\xF3g w bia\u0142ych skarpetach i czarnych butach, ca\u0142o\u015B\u0107 na r\xF3\u017Cowym tle. W g\xF3rnej cz\u0119\u015Bci zdj\u0119cia widzimy fragment materia\u0142u w czarno-bia\u0142e paski.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Chyba ka\u017Cda z nas marzy\u0142a kiedy\u015B lub marzy o rzeczy od \u2018znanego projektanta\u2019, nie ka\u017Cd\u0105 z nas niestety na nie sta\u0107. Dlatego w\u0142a\u015Bnie wymy\u015Blono tani\u0105 odzie\u017C, potocznie: lumpeksy, lumpy, szmateksy, ciucholandy itp. Osobi\u015Bcie jestem wielk\u0105 zwolenniczk\u0105 tego typu sklep\xF3w. Dlaczego? Nie tylko dlatego, \u017Ce mo\u017Cna tam upolowa\u0107 niez\u0142e skarby, ale przede wszystkim dlatego, \u017Ce kupuj\u0119 tam rzeczy z histori\u0105 i dok\u0142adam do nich kawa\u0142ek swojej historii. Nieraz zdarza si\u0119 te\u017C, \u017Ce znajduj\u0119 ubranie zupe\u0142nie nowe, z metk\u0105, nienoszone, a na dodatek dobrej jako\u015Bci i za 1z\u0142. Poza tym uwielbiam sam rytua\u0142 szukania, przegl\u0105dania ubra\u0144, my\u015Blenia  z czym mo\u017Cna dan\u0105 rzecz po\u0142\u0105czy\u0107, jak ewentualnie przerobi\u0107 za du\u017Ce spodnie czy bluzk\u0119 (nazywam to kreatywno\u015Bci\u0105). Nigdy te\u017C nie wyrzucam ubra\u0144 na \u015Bmietnik, tylko daj\u0119 komu\u015B, komu si\u0119 przydadz\u0105, albo oddaj\u0119 do dom\xF3w opieki lub wrzucam do kontenera.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6379902/ello-optimized-28fb577d.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia, po lewej stronie widzimy kobiet\u0119 w kr\xF3tkiej sp\xF3dniczce i kurtce na niebieskim tle, po prawej stronie widzimy zdj\u0119cie czarnego buta na niebieskim tle.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6379891/ello-optimized-337c06d0.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 na niebieskim tle, kobieta ubrana jest w sp\xF3dniczk\u0119, kurtk\u0119, ma mocno pomalowane usta, a w\u0142osy zwi\u0105zane w dwa koki.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6380128/ello-optimized-df7a57b7.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na zegarek, scena o\u015Bwietlona ch\u0142odnym \u015Bwiat\u0142em.' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Poliester poliestrowi nier\xF3wny'
    ),
    _react2.default.createElement(
      'p',
      null,
      '\u017Byjemy w \u015Bwiecie, kt\xF3ry coraz bardziej p\u0119dzi. Chcemy wi\u0119cej, szybciej, taniej. Dzisiejszym luksusem nie s\u0105 ju\u017C same materia\u0142y, lecz spos\xF3b ich obr\xF3bki. Rzeczy wykonane r\u0119cznie z olbrzymi\u0105 precyzj\u0105 s\u0105 \u015Bwietne jako\u015Bciowo, ale te\u017C drogie. Nie ka\u017Cdy mo\u017Ce pozwoli\u0107 sobie na szaf\u0119 jedwabnych kreacji najwy\u017Cszej jako\u015Bci. Dlatego powsta\u0142y sieci\xF3wki, tam znajdziemy modne fasony za niewielk\u0105 cen\u0119. Niestety takie sklepy cz\u0119sto robi\u0105 nas w przys\u0142owiowego \u2018konia\u2019, gdy\u017C chc\u0105c zminimalizowa\u0107 koszty produkcji, a zmaksymalizowa\u0107 doch\xF3d, oszcz\u0119dzaj\u0105 na materia\u0142ach i produkcji, a my zwyczajnie przep\u0142acamy. Nie jest jednak z g\xF3ry powiedziane, \u017Ce wszystkie rzeczy wykonane z poliestru s\u0105 marnej jako\u015Bci. Czasami do w\u0142\xF3kien naturalnych dodaj\u0119 si\u0119 syntetyk, aby przed\u0142u\u017Cy\u0107 jego trwa\u0142o\u015B\u0107 lub np. spowodowa\u0107, \u017Ce materia\u0142 nie b\u0119dzie wymaga\u0142 prasowania. Jak unikn\u0105\u0107 przep\u0142acania? Kupowa\u0107 taniej, kupowa\u0107 bardzo tanio \u2013 kupowa\u0107 w taniej odzie\u017Cy!'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6379894/ello-optimized-21606a53.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia, z lewej strony na mniejszym zdj\u0119ciu widzimy kobiec\u0105 posta\u0107 odwr\xF3con\u0105 ty\u0142em, w kr\xF3tkiej sp\xF3dniczce, bia\u0142ych skarpetkach, czarnych butach, ca\u0142o\u015B\u0107 na niebieskim tle. Z prawej strony, te\u017C na niebieskim tle, zbli\u017Cenie na posta\u0107 ze zdj\u0119cia po lewej stronie.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6380026/ello-optimized-5b18d0cb.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 w tanecznej pozie na niebieskim tle, kobieta ubrana jest w kr\xF3tk\u0105 sp\xF3dniczk\u0119, kurtk\u0119, bia\u0142e skarpety, czarne buty, w\u0142osy ma zebrane w dwa koczki, a usta pomalowane na ciemny kolor.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Przygotowa\u0142am par\u0119 wskaz\xF3wek, na co warto zwraca\u0107 uwag\u0119 w sklepach z tani\u0105 odzie\u017C\u0105. Dlatego je\u015Bli jeszcze nie pr\xF3bowa\u0142e\u015B tego typu \u2018\u0142ow\xF3w\u2019, albo boisz si\u0119 pierwszego razu \u2013 koniecznie przeczytaj, zanotuj i zapami\u0119taj!'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Nie zaw\u0119\u017Caj swoich poszukiwa\u0144. Nie nastawiaj si\u0119, \u017Ce dzi\u015B kupisz sp\xF3dnic\u0119, albo szukasz tylko torebki. Moje najlepsze zdobycze pochodz\u0105 z dni, kiedy \u2018wst\u0105pi\u0142am\u2019 po drodze zobaczy\u0107 czy znajd\u0119 co\u015B ciekawego, a wysz\u0142am z torebk\u0105 marki Furla i spodenkami od Calvin\u2019a Klein\u2019a.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Niczego nie omijaj. Zajmij sw\xF3j umys\u0142 przewracaniem kolejnych wieszak\xF3w. Ciekawe skarby zazwyczaj czaj\u0105 si\u0119 wci\u015Bni\u0119te gdzie\u015B pomi\u0119dzy, dlatego tak ci\u0119\u017Cko je dostrzec. Nie ogl\u0105daj, tylko dotykaj, przewracaj -  dzia\u0142aj!'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Je\u015Bli ju\u017C w Twoich d\u0142oniach znajdzie zainteresowanie jaki\u015B okaz koniecznie sprawd\u017A z jakiego materia\u0142u jest zrobiony. Ja zazwyczaj czytam sk\u0142ad na metce. Je\u015Bli nie ma metki chwil\u0119 go \u2018mi\u0119tosz\u0119\u2019 i pocieram, aby sprawdzi\u0107, czy aby na pewno jest to dobry gatunek, czy nie b\u0119dzie si\u0119 zbija\u0142 w grudki, czy nie jest sztuczny i czy po prostu jest przyjemny w dotyku. Je\u015Bli na oku mam torebk\u0119 koniecznie upewniam si\u0119 czy jest wykonana ze sk\xF3ry (mo\u017Cna pozna\u0107 po zapachu).'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Po\u015Bwi\u0119\u0107 chwil\u0119 na zastanowienie si\u0119 nad krojem. Najlepiej zmierz dan\u0105 rzecz. Je\u015Bli gdzie\u015B co\u015B odstaje, zagina si\u0119 w dziwny spos\xF3b, marszczy, to mo\u017Ce \u015Bwiadczy\u0107 o z\u0142ym skrojeniu lub te\u017C najzwyczajniej mo\u017Ce nie pasowa\u0107 do Twojego typu sylwetki.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Sprawd\u017A koniecznie szwy \u2013 maj\u0105 by\u0107 g\u0119ste, a nitka ma \u2018nie pracowa\u0107\u2019, nie roz\u0142azi\u0107 si\u0119. Je\u015Bli nogawka spodni jest zszyta po skosie to niestety, ale nie pomo\u017Ce jej \u017Cadne pranie, wyci\u0105ganie itp. Ona po prostu b\u0119dzie si\u0119 zawija\u0107 na nodze ju\u017C zawsze.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Sprawd\u017A jeszcze mark\u0119 na metce. Je\u015Bli nie jest Ci znana, to wygoogluj w internecie, poczytaj opinie, poogl\u0105daj kolekcje. Uwa\u017Cam, \u017Ce na rynku po prostu s\u0105 sprawdzone marki, w kt\xF3re warto inwestowa\u0107, mam te\u017C swoich faworyt\xF3w, kt\xF3rych jako\u015B\u0107 wyrob\xF3w przetestowa\u0142am na w\u0142asnej sk\xF3rze i je ceni\u0119, pora by\u015B te\u017C odnalaz\u0142a swoich.'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6380130/ello-optimized-4d890809.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 ubran\u0105 w sukienk\u0119, pomara\u0144czow\u0105 bluzk\u0119, r\u0119kawiczki i torebk\u0119 w kolorze bluzki, kobieta ma niebieski beret na g\u0142owie i patrzy w lew\u0105 stron\u0119. Ca\u0142o\u015B\u0107 na niebieskim tle o\u015Bwietlonym ciep\u0142ym \u015Bwiat\u0142em.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6380022/ello-optimized-7a6ace59.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia, z lewej strony widzimy kobiet\u0119 w ruchu, kobieta ma na sobie sukienk\u0119, pomara\u0144czow\u0105 bluzk\u0119 i r\u0119kawiczki, niebieski beret na g\u0142owie. Z lewej strony zdj\u0119cie przedstawia d\u0142o\u0144 w pomara\u0144czowej r\u0119kawiczce na niebieskim tle o\u015Bwietlonym ciep\u0142ym \u015Bwiat\u0142em.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Je\u015Bli przesz\u0142a\u015B przez wszystkie powy\u017Csze punkty i nadal nosisz dan\u0105 rzecz w koszyku, to znaczy, \u017Ce pora zapyta\u0107 o cen\u0119. W wi\u0119kszo\u015Bci sklep\xF3w z tani\u0105 odzie\u017C\u0105 towar sprzedaje si\u0119 na wag\u0119. To oznacza, \u017Ce np. w poniedzia\u0142ek kupimy kilogram ubra\u0144 za 70z\u0142, a w \u015Brod\u0119 ju\u017C za 30z\u0142. Zdarzaj\u0105 si\u0119 sklepy, w kt\xF3rych jednego dnia tygodnia wszystko kosztuje 1z\u0142 (nazywam to \u2018czystki\u2019, poniewa\u017C w\u0142a\u015Bciciele w ten spos\xF3b pozbywaj\u0105 si\u0119 wi\u0119kszo\u015Bci rzeczy, robi\u0105c miejsce na now\u0105 dostaw\u0119. Dzia\u0142a tutaj zasada: \u201ETylko z\u0142ot\xF3wka? Kupuj\u0119!\u201D). Istniej\u0105 te\u017C miejsca, gdzie odzie\u017C jest z g\xF3ry wyceniona. S\u0105 to zazwyczaj sklepy, gdzie znajdziemy ubrania nie nosz\u0105ce zbytniej ilo\u015Bci \u015Blad\xF3w u\u017Cytkowania, niezniszczone, czasami te\u017C nowe. Od\u0142amem \u2018taniej odzie\u017Cy\u2019 s\u0105 tzw. \u2018komisy\u2019. Tam mamy pewno\u015B\u0107, \u017Ce ubrania b\u0119d\u0105 dobrej jako\u015Bci, od dobrych projektant\xF3w lecz u\u017Cywane lub te\u017C sprzed kilku/kilkunastu sezon\xF3w. Cena ubra\u0144 w komisach nie jest ju\u017C taka niska i nieraz si\u0119ga kilkuset z\u0142otych.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6380120/ello-optimized-5c2e8832.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia, z lewej strony widzimy m\u0142od\u0105 kobiet\u0119, kt\xF3ra wykonuje gest trzymania za czapk\u0119. Kobieta ma na sobie sukienk\u0119 we wzory, pomara\u0144czowy golf, r\u0119kawiczki, niebieski beret. Z prawej strony widzimy zdj\u0119cie pomara\u0144czowej r\u0119kawiczki.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6380118/ello-optimized-ac07f0ca.jpg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 ubran\u0105 w sukienk\u0119 we wzory, pomara\u0144czowy golf, r\u0119kawiczki, niebieski beret. Kobieta jest na niebieskim tle o\u015Bwietlonym ciep\u0142ym \u015Bwiat\u0142em.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Okej. Przyjmijmy, \u017Ce znajdujesz si\u0119 w sklepie, gdzie wszystko jest na wag\u0119. Je\u015Bli wybrana przez Ciebie rzecz jest zrobiona z aksamitu, czy te\u017C bawe\u0142ny to zapewne zap\u0142acisz stosunkowo niewiele, bo waga tych tkanin jest niewielka. Je\u015Bli z kolei wybra\u0142a\u015B rzecz, kt\xF3ra ma zamki b\u0142yskawiczne, \u0107wieki, sprz\u0105czki, czy inne metalowe elementy, wtedy mo\u017Cesz spodziewa\u0107 si\u0119 wy\u017Cszej ceny. Od Ciebie zale\u017Cy decyzja, czy jeste\u015B w stanie wyda\u0107 okre\u015Blon\u0105 sum\u0119 pieni\u0119dzy w zamian za dan\u0105 rzecz. Nawet je\u015Bli oka\u017Ce si\u0119, \u017Ce dana torebka kosztuje 80z\u0142, a Ty masz pewno\u015B\u0107, \u017Ce jest to oryginalna torebka od Versace to wtedy my\u015Bl\u0119, \u017Ce wyb\xF3r jest prosty. Nigdzie indziej nie znajdziesz jej za tak\u0105 cen\u0119.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6380028/ello-optimized-fceec68e.jpg', alt: 'Obraz przedstawia kwadraty w jednej linii, w trzech kolorach.' })
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Stylizacja 1:'
    ),
    _react2.default.createElement(
      'p',
      null,
      'koszula: Ralph Lauren (tania odzie\u017C) / pasek: Ralph Lauren (tania odzie\u017C) / sp\xF3dnica: Ankra handmade (uszyta z dres\xF3wki) / skarpetki: Nessi sportswear / buty: Stradivarius / czapka: H&M'
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Stylizacja 2:'
    ),
    _react2.default.createElement(
      'p',
      null,
      'sp\xF3dnica: Diesel (tania odzie\u017C) / bluzka: Vila (tania odzie\u017C) / kurtka: no name (tania odzie\u017C x Olela) / rajstopy: Gatta / skarpetki: Nessi sportswear / buty: Zara / zegarek: Timex / choker: Stradivarius'
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      'Stylizacja 3:'
    ),
    _react2.default.createElement(
      'p',
      null,
      'sukienka: Papaya (tania odzie\u017C) / golf: promod / r\u0119kawiczki: Edmins / beret: Liz Claiborne (tania odzie\u017C) / torebka: no name (tania odzie\u017C) / rajstopy: Gatta / buty: Badura'
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Stylizacje za grosze, czyli pokochaj lumpeksy!", "date": "2017-10-18T08:22:00.000Z", "categories": ["Sztuka Ubioru"], "tags": ["taniaodzież", "lumpeks", "tania", "stylizacja", "moda", "fashion", "sztuka", "art", "artysta", "artist"] };
var body = exports.body = "<p>W swoim życiu nie spotkałam kobiety, która nie lubiłaby ciuchów. Wygląd przecież nie tylko świadczy o nas samych, ale też jest wyrazem szacunku dla drugiego człowieka. Poza tym, dzięki dobrze dopasowanym ubraniom można świetnie się czuć, co przekłada się tak naprawdę na nasze życie. Salvador Dali mawiał „Podstawą wielkich zwycięstw jest ubranie.” I my, na co dzień odnosimy takie swoje małe zwycięstwa, kiedy uda nam się ubrać zgodnie z sobą samym, bo dzięki temu promieniujemy dobrą energią. Żeby dobrze się ubrać wcale nie trzeba ślepo podążać za trendami. Jeśli danego sezonu modnym kolorem zostaje okrzyknięty kanarkowy żółty, a Ty porostu nie znosisz tego koloru, a on nie znosi Ciebie, to przecież nikt nie zmusza Cię do noszenia żółtego swetra. Trzeba zrozumieć naturę trendów – one tak jak kolejna wiosna, przeminą (na dodatek mają tendencje do powtarzania się). Dlatego w całej tej modowej gonitwie trzeba szukać przede wszystkim siebie. Mamy dziś nieograniczone możliwości, bo w sklepach znajdziemy praktycznie wszystko. W tym czuję się świetnie, ale też wyglądam w tym świetnie, uwielbiam soczystą zieleń, rozkloszowane spódnice, retro łączone z futurą, i super!</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6379870/ello-optimized-d3d63468.jpg\" alt=\"Obraz przedstawia dwa zdjęcia, na lewym widzimy postać kobiety w szarej spódnicy z brązowym paskiem, koszuli w paski, na różowym tle. Po prawej stronie znajduje się zbliżenie paska.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6379877/ello-optimized-2a8b6ae3.jpg\" alt=\"Obraz przedstawia zdjęcie kobiecych nóg w białych skarpetach i czarnych butach, całość na różowym tle. W górnej części zdjęcia widzimy fragment materiału w czarno-białe paski.\" /></p>\n<p>Chyba każda z nas marzyła kiedyś lub marzy o rzeczy od ‘znanego projektanta’, nie każdą z nas niestety na nie stać. Dlatego właśnie wymyślono tanią odzież, potocznie: lumpeksy, lumpy, szmateksy, ciucholandy itp. Osobiście jestem wielką zwolenniczką tego typu sklepów. Dlaczego? Nie tylko dlatego, że można tam upolować niezłe skarby, ale przede wszystkim dlatego, że kupuję tam rzeczy z historią i dokładam do nich kawałek swojej historii. Nieraz zdarza się też, że znajduję ubranie zupełnie nowe, z metką, nienoszone, a na dodatek dobrej jakości i za 1zł. Poza tym uwielbiam sam rytuał szukania, przeglądania ubrań, myślenia  z czym można daną rzecz połączyć, jak ewentualnie przerobić za duże spodnie czy bluzkę (nazywam to kreatywnością). Nigdy też nie wyrzucam ubrań na śmietnik, tylko daję komuś, komu się przydadzą, albo oddaję do domów opieki lub wrzucam do kontenera.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6379902/ello-optimized-28fb577d.jpg\" alt=\"Obraz przedstawia dwa zdjęcia, po lewej stronie widzimy kobietę w krótkiej spódniczce i kurtce na niebieskim tle, po prawej stronie widzimy zdjęcie czarnego buta na niebieskim tle.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6379891/ello-optimized-337c06d0.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę na niebieskim tle, kobieta ubrana jest w spódniczkę, kurtkę, ma mocno pomalowane usta, a włosy związane w dwa koki.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6380128/ello-optimized-df7a57b7.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na zegarek, scena oświetlona chłodnym światłem.\" /></p>\n<h2>Poliester poliestrowi nierówny</h2>\n<p>Żyjemy w świecie, który coraz bardziej pędzi. Chcemy więcej, szybciej, taniej. Dzisiejszym luksusem nie są już same materiały, lecz sposób ich obróbki. Rzeczy wykonane ręcznie z olbrzymią precyzją są świetne jakościowo, ale też drogie. Nie każdy może pozwolić sobie na szafę jedwabnych kreacji najwyższej jakości. Dlatego powstały sieciówki, tam znajdziemy modne fasony za niewielką cenę. Niestety takie sklepy często robią nas w przysłowiowego ‘konia’, gdyż chcąc zminimalizować koszty produkcji, a zmaksymalizować dochód, oszczędzają na materiałach i produkcji, a my zwyczajnie przepłacamy. Nie jest jednak z góry powiedziane, że wszystkie rzeczy wykonane z poliestru są marnej jakości. Czasami do włókien naturalnych dodaję się syntetyk, aby przedłużyć jego trwałość lub np. spowodować, że materiał nie będzie wymagał prasowania. Jak uniknąć przepłacania? Kupować taniej, kupować bardzo tanio – kupować w taniej odzieży!</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6379894/ello-optimized-21606a53.jpg\" alt=\"Obraz przedstawia dwa zdjęcia, z lewej strony na mniejszym zdjęciu widzimy kobiecą postać odwróconą tyłem, w krótkiej spódniczce, białych skarpetkach, czarnych butach, całość na niebieskim tle. Z prawej strony, też na niebieskim tle, zbliżenie na postać ze zdjęcia po lewej stronie.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6380026/ello-optimized-5b18d0cb.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę w tanecznej pozie na niebieskim tle, kobieta ubrana jest w krótką spódniczkę, kurtkę, białe skarpety, czarne buty, włosy ma zebrane w dwa koczki, a usta pomalowane na ciemny kolor.\" /></p>\n<p>Przygotowałam parę wskazówek, na co warto zwracać uwagę w sklepach z tanią odzieżą. Dlatego jeśli jeszcze nie próbowałeś tego typu ‘łowów’, albo boisz się pierwszego razu – koniecznie przeczytaj, zanotuj i zapamiętaj!</p>\n<ol>\n<li>Nie zawężaj swoich poszukiwań. Nie nastawiaj się, że dziś kupisz spódnicę, albo szukasz tylko torebki. Moje najlepsze zdobycze pochodzą z dni, kiedy ‘wstąpiłam’ po drodze zobaczyć czy znajdę coś ciekawego, a wyszłam z torebką marki Furla i spodenkami od Calvin’a Klein’a.</li>\n<li>Niczego nie omijaj. Zajmij swój umysł przewracaniem kolejnych wieszaków. Ciekawe skarby zazwyczaj czają się wciśnięte gdzieś pomiędzy, dlatego tak ciężko je dostrzec. Nie oglądaj, tylko dotykaj, przewracaj -  działaj!</li>\n<li>Jeśli już w Twoich dłoniach znajdzie zainteresowanie jakiś okaz koniecznie sprawdź z jakiego materiału jest zrobiony. Ja zazwyczaj czytam skład na metce. Jeśli nie ma metki chwilę go ‘miętoszę’ i pocieram, aby sprawdzić, czy aby na pewno jest to dobry gatunek, czy nie będzie się zbijał w grudki, czy nie jest sztuczny i czy po prostu jest przyjemny w dotyku. Jeśli na oku mam torebkę koniecznie upewniam się czy jest wykonana ze skóry (można poznać po zapachu).</li>\n<li>Poświęć chwilę na zastanowienie się nad krojem. Najlepiej zmierz daną rzecz. Jeśli gdzieś coś odstaje, zagina się w dziwny sposób, marszczy, to może świadczyć o złym skrojeniu lub też najzwyczajniej może nie pasować do Twojego typu sylwetki.</li>\n<li>Sprawdź koniecznie szwy – mają być gęste, a nitka ma ‘nie pracować’, nie rozłazić się. Jeśli nogawka spodni jest zszyta po skosie to niestety, ale nie pomoże jej żadne pranie, wyciąganie itp. Ona po prostu będzie się zawijać na nodze już zawsze.</li>\n<li>Sprawdź jeszcze markę na metce. Jeśli nie jest Ci znana, to wygoogluj w internecie, poczytaj opinie, pooglądaj kolekcje. Uważam, że na rynku po prostu są sprawdzone marki, w które warto inwestować, mam też swoich faworytów, których jakość wyrobów przetestowałam na własnej skórze i je cenię, pora byś też odnalazła swoich.</li>\n</ol>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6380130/ello-optimized-4d890809.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę ubraną w sukienkę, pomarańczową bluzkę, rękawiczki i torebkę w kolorze bluzki, kobieta ma niebieski beret na głowie i patrzy w lewą stronę. Całość na niebieskim tle oświetlonym ciepłym światłem.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6380022/ello-optimized-7a6ace59.jpg\" alt=\"Obraz przedstawia dwa zdjęcia, z lewej strony widzimy kobietę w ruchu, kobieta ma na sobie sukienkę, pomarańczową bluzkę i rękawiczki, niebieski beret na głowie. Z lewej strony zdjęcie przedstawia dłoń w pomarańczowej rękawiczce na niebieskim tle oświetlonym ciepłym światłem.\" /></p>\n<p>Jeśli przeszłaś przez wszystkie powyższe punkty i nadal nosisz daną rzecz w koszyku, to znaczy, że pora zapytać o cenę. W większości sklepów z tanią odzieżą towar sprzedaje się na wagę. To oznacza, że np. w poniedziałek kupimy kilogram ubrań za 70zł, a w środę już za 30zł. Zdarzają się sklepy, w których jednego dnia tygodnia wszystko kosztuje 1zł (nazywam to ‘czystki’, ponieważ właściciele w ten sposób pozbywają się większości rzeczy, robiąc miejsce na nową dostawę. Działa tutaj zasada: „Tylko złotówka? Kupuję!”). Istnieją też miejsca, gdzie odzież jest z góry wyceniona. Są to zazwyczaj sklepy, gdzie znajdziemy ubrania nie noszące zbytniej ilości śladów użytkowania, niezniszczone, czasami też nowe. Odłamem ‘taniej odzieży’ są tzw. ‘komisy’. Tam mamy pewność, że ubrania będą dobrej jakości, od dobrych projektantów lecz używane lub też sprzed kilku/kilkunastu sezonów. Cena ubrań w komisach nie jest już taka niska i nieraz sięga kilkuset złotych.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6380120/ello-optimized-5c2e8832.jpg\" alt=\"Obraz przedstawia dwa zdjęcia, z lewej strony widzimy młodą kobietę, która wykonuje gest trzymania za czapkę. Kobieta ma na sobie sukienkę we wzory, pomarańczowy golf, rękawiczki, niebieski beret. Z prawej strony widzimy zdjęcie pomarańczowej rękawiczki.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6380118/ello-optimized-ac07f0ca.jpg\" alt=\"Zdjęcie przedstawia młodą kobietę ubraną w sukienkę we wzory, pomarańczowy golf, rękawiczki, niebieski beret. Kobieta jest na niebieskim tle oświetlonym ciepłym światłem.\" /></p>\n<p>Okej. Przyjmijmy, że znajdujesz się w sklepie, gdzie wszystko jest na wagę. Jeśli wybrana przez Ciebie rzecz jest zrobiona z aksamitu, czy też bawełny to zapewne zapłacisz stosunkowo niewiele, bo waga tych tkanin jest niewielka. Jeśli z kolei wybrałaś rzecz, która ma zamki błyskawiczne, ćwieki, sprzączki, czy inne metalowe elementy, wtedy możesz spodziewać się wyższej ceny. Od Ciebie zależy decyzja, czy jesteś w stanie wydać określoną sumę pieniędzy w zamian za daną rzecz. Nawet jeśli okaże się, że dana torebka kosztuje 80zł, a Ty masz pewność, że jest to oryginalna torebka od Versace to wtedy myślę, że wybór jest prosty. Nigdzie indziej nie znajdziesz jej za taką cenę.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6380028/ello-optimized-fceec68e.jpg\" alt=\"Obraz przedstawia kwadraty w jednej linii, w trzech kolorach.\" /></p>\n<olela-narrative>\nStylizacja 1:\n</olela-narrative>\n<p>koszula: Ralph Lauren (tania odzież) / pasek: Ralph Lauren (tania odzież) / spódnica: Ankra handmade (uszyta z dresówki) / skarpetki: Nessi sportswear / buty: Stradivarius / czapka: H&amp;M</p>\n<olela-narrative>\nStylizacja 2:\n</olela-narrative>\n<p>spódnica: Diesel (tania odzież) / bluzka: Vila (tania odzież) / kurtka: no name (tania odzież x Olela) / rajstopy: Gatta / skarpetki: Nessi sportswear / buty: Zara / zegarek: Timex / choker: Stradivarius</p>\n<olela-narrative>\nStylizacja 3:\n</olela-narrative>\n<p>sukienka: Papaya (tania odzież) / golf: promod / rękawiczki: Edmins / beret: Liz Claiborne (tania odzież) / torebka: no name (tania odzież) / rajstopy: Gatta / buty: Badura</p>\n";
var raw = exports.raw = "\n W swoim życiu nie spotkałam kobiety, która nie lubiłaby ciuchów. Wygląd przecież nie tylko świadczy o nas samych, ale też jest wyrazem szacunku dla drugiego człowieka. Poza tym, dzięki dobrze dopasowanym ubraniom można świetnie się czuć, co przekłada się tak naprawdę na nasze życie. Salvador Dali mawiał „Podstawą wielkich zwycięstw jest ubranie.” I my, na co dzień odnosimy takie swoje małe zwycięstwa, kiedy uda nam się ubrać zgodnie z sobą samym, bo dzięki temu promieniujemy dobrą energią. Żeby dobrze się ubrać wcale nie trzeba ślepo podążać za trendami. Jeśli danego sezonu modnym kolorem zostaje okrzyknięty kanarkowy żółty, a Ty porostu nie znosisz tego koloru, a on nie znosi Ciebie, to przecież nikt nie zmusza Cię do noszenia żółtego swetra. Trzeba zrozumieć naturę trendów – one tak jak kolejna wiosna, przeminą (na dodatek mają tendencje do powtarzania się). Dlatego w całej tej modowej gonitwie trzeba szukać przede wszystkim siebie. Mamy dziś nieograniczone możliwości, bo w sklepach znajdziemy praktycznie wszystko. W tym czuję się świetnie, ale też wyglądam w tym świetnie, uwielbiam soczystą zieleń, rozkloszowane spódnice, retro łączone z futurą, i super!\n\n![Obraz przedstawia dwa zdjęcia, na lewym widzimy postać kobiety w szarej spódnicy z brązowym paskiem, koszuli w paski, na różowym tle. Po prawej stronie znajduje się zbliżenie paska.](https://assets1.ello.co/uploads/asset/attachment/6379870/ello-optimized-d3d63468.jpg)\n![Obraz przedstawia zdjęcie kobiecych nóg w białych skarpetach i czarnych butach, całość na różowym tle. W górnej części zdjęcia widzimy fragment materiału w czarno-białe paski.](https://assets0.ello.co/uploads/asset/attachment/6379877/ello-optimized-2a8b6ae3.jpg)\n\nChyba każda z nas marzyła kiedyś lub marzy o rzeczy od ‘znanego projektanta’, nie każdą z nas niestety na nie stać. Dlatego właśnie wymyślono tanią odzież, potocznie: lumpeksy, lumpy, szmateksy, ciucholandy itp. Osobiście jestem wielką zwolenniczką tego typu sklepów. Dlaczego? Nie tylko dlatego, że można tam upolować niezłe skarby, ale przede wszystkim dlatego, że kupuję tam rzeczy z historią i dokładam do nich kawałek swojej historii. Nieraz zdarza się też, że znajduję ubranie zupełnie nowe, z metką, nienoszone, a na dodatek dobrej jakości i za 1zł. Poza tym uwielbiam sam rytuał szukania, przeglądania ubrań, myślenia  z czym można daną rzecz połączyć, jak ewentualnie przerobić za duże spodnie czy bluzkę (nazywam to kreatywnością). Nigdy też nie wyrzucam ubrań na śmietnik, tylko daję komuś, komu się przydadzą, albo oddaję do domów opieki lub wrzucam do kontenera. \n\n![Obraz przedstawia dwa zdjęcia, po lewej stronie widzimy kobietę w krótkiej spódniczce i kurtce na niebieskim tle, po prawej stronie widzimy zdjęcie czarnego buta na niebieskim tle.](https://assets0.ello.co/uploads/asset/attachment/6379902/ello-optimized-28fb577d.jpg)\n![Zdjęcie przedstawia młodą kobietę na niebieskim tle, kobieta ubrana jest w spódniczkę, kurtkę, ma mocno pomalowane usta, a włosy związane w dwa koki.](https://assets0.ello.co/uploads/asset/attachment/6379891/ello-optimized-337c06d0.jpg)\n![Zdjęcie przedstawia zbliżenie na zegarek, scena oświetlona chłodnym światłem.](https://assets2.ello.co/uploads/asset/attachment/6380128/ello-optimized-df7a57b7.jpg)\n\n## Poliester poliestrowi nierówny\n\nŻyjemy w świecie, który coraz bardziej pędzi. Chcemy więcej, szybciej, taniej. Dzisiejszym luksusem nie są już same materiały, lecz sposób ich obróbki. Rzeczy wykonane ręcznie z olbrzymią precyzją są świetne jakościowo, ale też drogie. Nie każdy może pozwolić sobie na szafę jedwabnych kreacji najwyższej jakości. Dlatego powstały sieciówki, tam znajdziemy modne fasony za niewielką cenę. Niestety takie sklepy często robią nas w przysłowiowego ‘konia’, gdyż chcąc zminimalizować koszty produkcji, a zmaksymalizować dochód, oszczędzają na materiałach i produkcji, a my zwyczajnie przepłacamy. Nie jest jednak z góry powiedziane, że wszystkie rzeczy wykonane z poliestru są marnej jakości. Czasami do włókien naturalnych dodaję się syntetyk, aby przedłużyć jego trwałość lub np. spowodować, że materiał nie będzie wymagał prasowania. Jak uniknąć przepłacania? Kupować taniej, kupować bardzo tanio – kupować w taniej odzieży!\n\n![Obraz przedstawia dwa zdjęcia, z lewej strony na mniejszym zdjęciu widzimy kobiecą postać odwróconą tyłem, w krótkiej spódniczce, białych skarpetkach, czarnych butach, całość na niebieskim tle. Z prawej strony, też na niebieskim tle, zbliżenie na postać ze zdjęcia po lewej stronie.](https://assets0.ello.co/uploads/asset/attachment/6379894/ello-optimized-21606a53.jpg)\n![Zdjęcie przedstawia młodą kobietę w tanecznej pozie na niebieskim tle, kobieta ubrana jest w krótką spódniczkę, kurtkę, białe skarpety, czarne buty, włosy ma zebrane w dwa koczki, a usta pomalowane na ciemny kolor.](https://assets1.ello.co/uploads/asset/attachment/6380026/ello-optimized-5b18d0cb.jpg)\n\n\nPrzygotowałam parę wskazówek, na co warto zwracać uwagę w sklepach z tanią odzieżą. Dlatego jeśli jeszcze nie próbowałeś tego typu ‘łowów’, albo boisz się pierwszego razu – koniecznie przeczytaj, zanotuj i zapamiętaj!\n\n1. Nie zawężaj swoich poszukiwań. Nie nastawiaj się, że dziś kupisz spódnicę, albo szukasz tylko torebki. Moje najlepsze zdobycze pochodzą z dni, kiedy ‘wstąpiłam’ po drodze zobaczyć czy znajdę coś ciekawego, a wyszłam z torebką marki Furla i spodenkami od Calvin’a Klein’a.\n2. Niczego nie omijaj. Zajmij swój umysł przewracaniem kolejnych wieszaków. Ciekawe skarby zazwyczaj czają się wciśnięte gdzieś pomiędzy, dlatego tak ciężko je dostrzec. Nie oglądaj, tylko dotykaj, przewracaj -  działaj!\n3. Jeśli już w Twoich dłoniach znajdzie zainteresowanie jakiś okaz koniecznie sprawdź z jakiego materiału jest zrobiony. Ja zazwyczaj czytam skład na metce. Jeśli nie ma metki chwilę go ‘miętoszę’ i pocieram, aby sprawdzić, czy aby na pewno jest to dobry gatunek, czy nie będzie się zbijał w grudki, czy nie jest sztuczny i czy po prostu jest przyjemny w dotyku. Jeśli na oku mam torebkę koniecznie upewniam się czy jest wykonana ze skóry (można poznać po zapachu).\n4. Poświęć chwilę na zastanowienie się nad krojem. Najlepiej zmierz daną rzecz. Jeśli gdzieś coś odstaje, zagina się w dziwny sposób, marszczy, to może świadczyć o złym skrojeniu lub też najzwyczajniej może nie pasować do Twojego typu sylwetki. \n5. Sprawdź koniecznie szwy – mają być gęste, a nitka ma ‘nie pracować’, nie rozłazić się. Jeśli nogawka spodni jest zszyta po skosie to niestety, ale nie pomoże jej żadne pranie, wyciąganie itp. Ona po prostu będzie się zawijać na nodze już zawsze. \n6. Sprawdź jeszcze markę na metce. Jeśli nie jest Ci znana, to wygoogluj w internecie, poczytaj opinie, pooglądaj kolekcje. Uważam, że na rynku po prostu są sprawdzone marki, w które warto inwestować, mam też swoich faworytów, których jakość wyrobów przetestowałam na własnej skórze i je cenię, pora byś też odnalazła swoich.\n\n![Zdjęcie przedstawia młodą kobietę ubraną w sukienkę, pomarańczową bluzkę, rękawiczki i torebkę w kolorze bluzki, kobieta ma niebieski beret na głowie i patrzy w lewą stronę. Całość na niebieskim tle oświetlonym ciepłym światłem.](https://assets0.ello.co/uploads/asset/attachment/6380130/ello-optimized-4d890809.jpg)\n![Obraz przedstawia dwa zdjęcia, z lewej strony widzimy kobietę w ruchu, kobieta ma na sobie sukienkę, pomarańczową bluzkę i rękawiczki, niebieski beret na głowie. Z lewej strony zdjęcie przedstawia dłoń w pomarańczowej rękawiczce na niebieskim tle oświetlonym ciepłym światłem.](https://assets2.ello.co/uploads/asset/attachment/6380022/ello-optimized-7a6ace59.jpg)\n\nJeśli przeszłaś przez wszystkie powyższe punkty i nadal nosisz daną rzecz w koszyku, to znaczy, że pora zapytać o cenę. W większości sklepów z tanią odzieżą towar sprzedaje się na wagę. To oznacza, że np. w poniedziałek kupimy kilogram ubrań za 70zł, a w środę już za 30zł. Zdarzają się sklepy, w których jednego dnia tygodnia wszystko kosztuje 1zł (nazywam to ‘czystki’, ponieważ właściciele w ten sposób pozbywają się większości rzeczy, robiąc miejsce na nową dostawę. Działa tutaj zasada: „Tylko złotówka? Kupuję!”). Istnieją też miejsca, gdzie odzież jest z góry wyceniona. Są to zazwyczaj sklepy, gdzie znajdziemy ubrania nie noszące zbytniej ilości śladów użytkowania, niezniszczone, czasami też nowe. Odłamem ‘taniej odzieży’ są tzw. ‘komisy’. Tam mamy pewność, że ubrania będą dobrej jakości, od dobrych projektantów lecz używane lub też sprzed kilku/kilkunastu sezonów. Cena ubrań w komisach nie jest już taka niska i nieraz sięga kilkuset złotych.\n\n![Obraz przedstawia dwa zdjęcia, z lewej strony widzimy młodą kobietę, która wykonuje gest trzymania za czapkę. Kobieta ma na sobie sukienkę we wzory, pomarańczowy golf, rękawiczki, niebieski beret. Z prawej strony widzimy zdjęcie pomarańczowej rękawiczki.](https://assets1.ello.co/uploads/asset/attachment/6380120/ello-optimized-5c2e8832.jpg)\n![Zdjęcie przedstawia młodą kobietę ubraną w sukienkę we wzory, pomarańczowy golf, rękawiczki, niebieski beret. Kobieta jest na niebieskim tle oświetlonym ciepłym światłem.](https://assets1.ello.co/uploads/asset/attachment/6380118/ello-optimized-ac07f0ca.jpg)\n\nOkej. Przyjmijmy, że znajdujesz się w sklepie, gdzie wszystko jest na wagę. Jeśli wybrana przez Ciebie rzecz jest zrobiona z aksamitu, czy też bawełny to zapewne zapłacisz stosunkowo niewiele, bo waga tych tkanin jest niewielka. Jeśli z kolei wybrałaś rzecz, która ma zamki błyskawiczne, ćwieki, sprzączki, czy inne metalowe elementy, wtedy możesz spodziewać się wyższej ceny. Od Ciebie zależy decyzja, czy jesteś w stanie wydać określoną sumę pieniędzy w zamian za daną rzecz. Nawet jeśli okaże się, że dana torebka kosztuje 80zł, a Ty masz pewność, że jest to oryginalna torebka od Versace to wtedy myślę, że wybór jest prosty. Nigdzie indziej nie znajdziesz jej za taką cenę.\n\n![Obraz przedstawia kwadraty w jednej linii, w trzech kolorach.](https://assets0.ello.co/uploads/asset/attachment/6380028/ello-optimized-fceec68e.jpg)\n\n<olela-narrative>\nStylizacja 1:\n</olela-narrative>\n\nkoszula: Ralph Lauren (tania odzież) / pasek: Ralph Lauren (tania odzież) / spódnica: Ankra handmade (uszyta z dresówki) / skarpetki: Nessi sportswear / buty: Stradivarius / czapka: H&M\n\n<olela-narrative>\nStylizacja 2:\n</olela-narrative>\n\nspódnica: Diesel (tania odzież) / bluzka: Vila (tania odzież) / kurtka: no name (tania odzież x Olela) / rajstopy: Gatta / skarpetki: Nessi sportswear / buty: Zara / zegarek: Timex / choker: Stradivarius\n\n<olela-narrative>\nStylizacja 3:\n</olela-narrative>\n\nsukienka: Papaya (tania odzież) / golf: promod / rękawiczki: Edmins / beret: Liz Claiborne (tania odzież) / torebka: no name (tania odzież) / rajstopy: Gatta / buty: Badura\n\n\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 76 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'Minimalizm (lata 60te XX wieku)... Jak sama nazwa wskazuje arty\u015Bci sztuki minimalnej d\u0105\u017Cyli do redukcji w dziele sztuki. Operowali uproszczon\u0105 bry\u0142\u0105, geometrycznymi kszta\u0142tami, p\u0142aszczyznami i skal\u0105. Daleko by\u0142o im do ekspresji, do jakiegokolwiek przejawu subiektywu w dziele. Eliminowano \u015Blad autorski, zapraszaj\u0105c w ten spos\xF3b odbiorc\u0119 do spotkania z anonimowym charakterem pracy. Minimalizm cechuje pokrewna postawa do konstruktywizmu w odniesieniu do dyscypliny formalnej, oraz do konceptualizmu na warstwie ideowej. Jednak rozmawia\u0107 o nim mo\u017Cemy nie tylko w kr\u0119gach sztuk wizualnych. Praktycznie r\xF3wnorz\u0119dnie na osi czasu zaznacza si\u0119 minimalizm w muzyce wsp\xF3\u0142czesnej (nazywany te\u017C muzyk\u0105 repetycyjn\u0105, co jednak troch\u0119 sp\u0142aszcza ca\u0142\u0105 ide\u0119 ). W za\u0142o\u017Ceniu minimalizm odrzuca\u0142 skomplikowanie muzyki wsp\xF3\u0142czesnej (bior\u0105c pod uwag\u0119 przeci\u0119tnego odbiorc\u0119). Stawia\u0142 na prostot\u0119 materia\u0142u melodycznego, harmoni\u0119, eksponowanie struktur rytmicznych. My\u015Bl\u0119, \u017Ce warto tutaj wspomnie\u0107 o postaci John\u2019a Cage\u2019a, kt\xF3rego utw\xF3r \u20184\u201933\u2019 stanowi moim zdaniem kwintesencj\u0119 minimalizmu w og\xF3le.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6385513/ello-optimized-a0405c31.jpg', alt: 'Obraz przedstawia kartk\u0119 z narysowan\u0105 pi\u0119ciolini\u0105.' }),
      '(',
      _react2.default.createElement(
        'a',
        { href: 'http://www.kylegann.com/Miami-CageTalk.html' },
        'http://www.kylegann.com/Miami-CageTalk.html'
      ),
      ')'
    ),
    _react2.default.createElement(
      'p',
      null,
      'W literaturze zn\xF3w - kiedy m\xF3wimy o redukcji \u015Brodk\xF3w wyrazu, ekonomii s\u0142\xF3w, powierzchowno\u015Bci przekazu, kontekstem koniecznym do zrozumienia sytuacji przedstawianej -  m\xF3wimy o minimali\u017Amie. Postaci w powie\u015Bciach minimalistycznych s\u0105 nieprzewidywalni w swoich dzia\u0142aniach, jednak kreuj\u0105 si\u0119 na przeci\u0119tnego cz\u0142owieka.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Ostatnio minimalistyczny styl \u017Cycia \u015Bwi\u0119ci swoje triumfy. Powstaj\u0105 r\xF3\u017Cne artyku\u0142y, ba, ca\u0142e blogi o tematyce minimalistycznej. Kobiety radz\u0105 nam jak ograniczy\u0107 zawarto\u015B\u0107 swojej szafy do niezb\u0119dnych \'basic\u2019\xF3w, jak po prostu \u017Cy\u0107 minimalistycznie, z maksym\u0105 \u2018mniej znaczy wi\u0119cej\u2019 na ustach i w g\u0142owie. Warto pami\u0119ta\u0107, \u017Ce minimalizm to nie tylko ograniczanie \u2018rzeczy\u2019, kszta\u0142t\xF3w i kolor\xF3w, ale przede wszystkim mocne pod\u0142o\u017Ce ideowe, a w odniesieniu do \u017Cycia - duchowe. Spotkanie z dzie\u0142em sztuki minimalistycznej to medytacja, spok\xF3j, to prze\u017Cycie transcendentne. Wkraczanie w jego obszar to spacer po ogrodzie zen, a ten, ka\u017Cdy z nas musi odnale\u017A\u0107 sam.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6381375/ello-optimized-88c1a139.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na bia\u0142ym tle. Widzimy bia\u0142o-czarne figury geometryczne w paski, geometryczne rze\u017Aby, postaci ubrane w bia\u0142e koszule, bi\u017Cuteri\u0119.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6381378/ello-optimized-6dc1ba0b.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na bia\u0142ym tle. Widzimy geometryczne rze\u017Aby, czarno-bia\u0142e fotografie, g\u0142o\u015Bniki, butelki, czekolad\u0119.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6381383/ello-optimized-74ce6d95.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na bia\u0142ym tle. Widzimy fotografi\u0119 bia\u0142ego budynku na tle nieba, wn\u0119trza r\xF3\u017Cnych pomieszcze\u0144.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6381385/ello-optimized-d90f3f41.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na bia\u0142ym tle. Widzimy neony powieszone na \u015Bcianach, tort weselny i talerz z posi\u0142kiem w perspektywie z lotu ptaka.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6381386/ello-optimized-0ace10db.jpg', alt: 'Obraz przedstawia czarne napisy na bia\u0142ym tle.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Minimalizm [moodboard]", "date": "2017-10-19T15:40:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["minimalizm", "minimalism", "minimal", "art", "moodboard", "sztuka", "artist", "artysta", "kreacja"] };
var body = exports.body = "<p>Minimalizm (lata 60te XX wieku)... Jak sama nazwa wskazuje artyści sztuki minimalnej dążyli do redukcji w dziele sztuki. Operowali uproszczoną bryłą, geometrycznymi kształtami, płaszczyznami i skalą. Daleko było im do ekspresji, do jakiegokolwiek przejawu subiektywu w dziele. Eliminowano ślad autorski, zapraszając w ten sposób odbiorcę do spotkania z anonimowym charakterem pracy.\nMinimalizm cechuje pokrewna postawa do konstruktywizmu w odniesieniu do dyscypliny formalnej, oraz do konceptualizmu na warstwie ideowej.\nJednak rozmawiać o nim możemy nie tylko w kręgach sztuk wizualnych. Praktycznie równorzędnie na osi czasu zaznacza się minimalizm w muzyce współczesnej (nazywany też muzyką repetycyjną, co jednak trochę spłaszcza całą ideę ). W założeniu minimalizm odrzucał skomplikowanie muzyki współczesnej (biorąc pod uwagę przeciętnego odbiorcę). Stawiał na prostotę materiału melodycznego, harmonię, eksponowanie struktur rytmicznych. Myślę, że warto tutaj wspomnieć o postaci John’a Cage’a, którego utwór ‘4’33’ stanowi moim zdaniem kwintesencję minimalizmu w ogóle.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6385513/ello-optimized-a0405c31.jpg\" alt=\"Obraz przedstawia kartkę z narysowaną pięciolinią.\" />\n(<a href=\"http://www.kylegann.com/Miami-CageTalk.html\">http://www.kylegann.com/Miami-CageTalk.html</a>)</p>\n<p>W literaturze znów - kiedy mówimy o redukcji środków wyrazu, ekonomii słów, powierzchowności przekazu, kontekstem koniecznym do zrozumienia sytuacji przedstawianej -  mówimy o minimaliźmie. Postaci w powieściach minimalistycznych są nieprzewidywalni w swoich działaniach, jednak kreują się na przeciętnego człowieka.</p>\n<p>Ostatnio minimalistyczny styl życia święci swoje triumfy. Powstają różne artykuły, ba, całe blogi o tematyce minimalistycznej. Kobiety radzą nam jak ograniczyć zawartość swojej szafy do niezbędnych 'basic’ów, jak po prostu żyć minimalistycznie, z maksymą ‘mniej znaczy więcej’ na ustach i w głowie. Warto pamiętać, że minimalizm to nie tylko ograniczanie ‘rzeczy’, kształtów i kolorów, ale przede wszystkim mocne podłoże ideowe, a w odniesieniu do życia - duchowe. Spotkanie z dziełem sztuki minimalistycznej to medytacja, spokój, to przeżycie transcendentne. Wkraczanie w jego obszar to spacer po ogrodzie zen, a ten, każdy z nas musi odnaleźć sam.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6381375/ello-optimized-88c1a139.jpg\" alt=\"Obraz przedstawia różne zdjęcia na białym tle. Widzimy biało-czarne figury geometryczne w paski, geometryczne rzeźby, postaci ubrane w białe koszule, biżuterię.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6381378/ello-optimized-6dc1ba0b.jpg\" alt=\"Obraz przedstawia różne zdjęcia na białym tle. Widzimy geometryczne rzeźby, czarno-białe fotografie, głośniki, butelki, czekoladę.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6381383/ello-optimized-74ce6d95.jpg\" alt=\"Obraz przedstawia różne zdjęcia na białym tle. Widzimy fotografię białego budynku na tle nieba, wnętrza różnych pomieszczeń.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6381385/ello-optimized-d90f3f41.jpg\" alt=\"Obraz przedstawia różne zdjęcia na białym tle. Widzimy neony powieszone na ścianach, tort weselny i talerz z posiłkiem w perspektywie z lotu ptaka.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6381386/ello-optimized-0ace10db.jpg\" alt=\"Obraz przedstawia czarne napisy na białym tle.\" /></p>\n";
var raw = exports.raw = "\nMinimalizm (lata 60te XX wieku)... Jak sama nazwa wskazuje artyści sztuki minimalnej dążyli do redukcji w dziele sztuki. Operowali uproszczoną bryłą, geometrycznymi kształtami, płaszczyznami i skalą. Daleko było im do ekspresji, do jakiegokolwiek przejawu subiektywu w dziele. Eliminowano ślad autorski, zapraszając w ten sposób odbiorcę do spotkania z anonimowym charakterem pracy.\nMinimalizm cechuje pokrewna postawa do konstruktywizmu w odniesieniu do dyscypliny formalnej, oraz do konceptualizmu na warstwie ideowej.\nJednak rozmawiać o nim możemy nie tylko w kręgach sztuk wizualnych. Praktycznie równorzędnie na osi czasu zaznacza się minimalizm w muzyce współczesnej (nazywany też muzyką repetycyjną, co jednak trochę spłaszcza całą ideę ). W założeniu minimalizm odrzucał skomplikowanie muzyki współczesnej (biorąc pod uwagę przeciętnego odbiorcę). Stawiał na prostotę materiału melodycznego, harmonię, eksponowanie struktur rytmicznych. Myślę, że warto tutaj wspomnieć o postaci John'a Cage'a, którego utwór '4'33' stanowi moim zdaniem kwintesencję minimalizmu w ogóle.\n\n![Obraz przedstawia kartkę z narysowaną pięciolinią.](https://assets1.ello.co/uploads/asset/attachment/6385513/ello-optimized-a0405c31.jpg)\n(http://www.kylegann.com/Miami-CageTalk.html)\n\n\n\nW literaturze znów - kiedy mówimy o redukcji środków wyrazu, ekonomii słów, powierzchowności przekazu, kontekstem koniecznym do zrozumienia sytuacji przedstawianej -  mówimy o minimaliźmie. Postaci w powieściach minimalistycznych są nieprzewidywalni w swoich działaniach, jednak kreują się na przeciętnego człowieka.\n\nOstatnio minimalistyczny styl życia święci swoje triumfy. Powstają różne artykuły, ba, całe blogi o tematyce minimalistycznej. Kobiety radzą nam jak ograniczyć zawartość swojej szafy do niezbędnych 'basic'ów, jak po prostu żyć minimalistycznie, z maksymą 'mniej znaczy więcej' na ustach i w głowie. Warto pamiętać, że minimalizm to nie tylko ograniczanie 'rzeczy', kształtów i kolorów, ale przede wszystkim mocne podłoże ideowe, a w odniesieniu do życia - duchowe. Spotkanie z dziełem sztuki minimalistycznej to medytacja, spokój, to przeżycie transcendentne. Wkraczanie w jego obszar to spacer po ogrodzie zen, a ten, każdy z nas musi odnaleźć sam.\n\n\n\n![Obraz przedstawia różne zdjęcia na białym tle. Widzimy biało-czarne figury geometryczne w paski, geometryczne rzeźby, postaci ubrane w białe koszule, biżuterię.](https://assets0.ello.co/uploads/asset/attachment/6381375/ello-optimized-88c1a139.jpg)\n![Obraz przedstawia różne zdjęcia na białym tle. Widzimy geometryczne rzeźby, czarno-białe fotografie, głośniki, butelki, czekoladę.](https://assets0.ello.co/uploads/asset/attachment/6381378/ello-optimized-6dc1ba0b.jpg)\n![Obraz przedstawia różne zdjęcia na białym tle. Widzimy fotografię białego budynku na tle nieba, wnętrza różnych pomieszczeń.](https://assets2.ello.co/uploads/asset/attachment/6381383/ello-optimized-74ce6d95.jpg)\n![Obraz przedstawia różne zdjęcia na białym tle. Widzimy neony powieszone na ścianach, tort weselny i talerz z posiłkiem w perspektywie z lotu ptaka.](https://assets0.ello.co/uploads/asset/attachment/6381385/ello-optimized-d90f3f41.jpg)\n![Obraz przedstawia czarne napisy na białym tle.](https://assets2.ello.co/uploads/asset/attachment/6381386/ello-optimized-0ace10db.jpg)";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 77 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'W oryginale \'szarlotka babci Czesi\'. Przepis jest bardzo klasyczny, stary (w rodzinie od pokole\u0144) i dobry. To ciasto zawsze wychodzi. Dodatkowo zostawia pole do popisu Twojej wyobra\u017Ani - ja na wierzch ciasta po\u0142o\u017Cy\u0142am pasy ciasta, tworz\u0105c krat\u0119. A Ty? Mo\u017Ce masz pomys\u0142 na inne kszta\u0142ty? Mo\u017Cesz tak\u017Ce opr\xF3szy\u0107 ca\u0142o\u015B\u0107 cukrem lub cynamonem. Podaj kawa\u0142ek szarlotki na ciep\u0142o z ga\u0142k\u0105 lod\xF3w waniliowych, a jesienna chandra minie jak r\u0119k\u0105 odj\u0105\u0142!'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        Recipe,
        {
          title: 'Geometryczna szarlotka',
          time: '120 minut',
          level: '\u0142atwy',
          mealFor: '15 os\xF3b',
          photo: 'https://assets2.ello.co/uploads/asset/attachment/6401877/ello-optimized-acbac144.jpg',
          altText: 'Zdj\u0119cie przedstawia czerwony talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajduje si\u0119 ciasto z jab\u0142kami.'
        },
        _react2.default.createElement(Ingredient, { title: 'jab\u0142ka', quantity: '10 \u015Brednich' }),
        _react2.default.createElement(Ingredient, { title: 'm\u0105ka pszenna', quantity: '3 i 1/2 szklanki' }),
        _react2.default.createElement(Ingredient, { title: 'cukier puder', quantity: '1/2 szklanki' }),
        _react2.default.createElement(Ingredient, { title: 'cukier br\u0105zowy', quantity: '3 \u0142y\u017Cki' }),
        _react2.default.createElement(Ingredient, { title: 'mas\u0142o', quantity: '1 kostka' }),
        _react2.default.createElement(Ingredient, { title: 'jaja', quantity: '4' }),
        _react2.default.createElement(Ingredient, { title: 'proszek do pieczenia', quantity: '2 \u0142y\u017Ceczki' }),
        _react2.default.createElement(
          Method,
          null,
          'Obieram wszystkie jab\u0142ka (u mnie odmiana \'ligol\') i kroj\u0119 w drobn\u0105 kostk\u0119. Wrzucam do garnka, zalewam odrobin\u0105 wody, kropi\u0119 sokiem z cytryny, zasypuj\u0119 br\u0105zowym cukrem i dusz\u0119 do mi\u0119kko\u015Bci. W mi\u0119dzyczasie przygotowuj\u0119 ciasto. Mieszam m\u0105k\u0119 z proszkiem do pieczenia, cukrem pudrem i zimnym mas\u0142em (dok\u0142adnie tak, jak zagniata si\u0119 kruche ciasto). Wbijam jaja i wyrabiam r\u0119koma. Dziel\u0119 na dwie r\xF3wne cz\u0119\u015Bci i wsadzam na p\xF3\u0142 godziny do lod\xF3wki. Po tym czasie jedn\u0105 z cz\u0119\u015Bci rozwa\u0142kowuje i wyk\u0142adam do blachy o \u015Brednicy 25 x 40 cm. Wyk\u0142adam uduszone jab\u0142ka i przykrywam drug\u0105 cz\u0119\u015Bci\u0105 ciasta.Tak przygotowane ciasto l\u0105duje na ok. 45 min. do nagrzanego do 180\xB0C. Voil\xE0 - najlepiej smakuje na ciep\u0142o z lodami waniliowymi.'
        )
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6401889/ello-optimized-f23c386a.jpg', alt: 'Zdj\u0119cie przedstawia ciasto z jab\u0142kami na czerwonym talerzu.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6401901/ello-optimized-01997911.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na ciasto z jab\u0142kami na czerwonym talerzu.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Smaki_Jesieni vol._3. Geometryczna_szarlotka.", "date": "2017-10-23T16:22:00.000Z", "categories": ["Sztuka Gotowania"], "tags": ["przepis", "deser", "szarlotka", "jabłka", "jesień", "kuchnia", "kompozycja", "kreacja", "sztuka", "artysta"] };
var body = exports.body = "<olela-narrative>\nW oryginale 'szarlotka babci Czesi'. Przepis jest bardzo klasyczny, stary (w rodzinie od pokoleń) i dobry. To ciasto zawsze wychodzi. Dodatkowo zostawia pole do popisu Twojej wyobraźni - ja na wierzch ciasta położyłam pasy ciasta, tworząc kratę. A Ty? Może masz pomysł na inne kształty? Możesz także oprószyć całość cukrem lub cynamonem. Podaj kawałek szarlotki na ciepło z gałką lodów waniliowych, a jesienna chandra minie jak ręką odjął!\n</olela-narrative>\n<div>\n  <Recipe\n    title='Geometryczna szarlotka'\n    time='120 minut'\n    level='łatwy'\n    mealFor='15 osób'\n    photo='https://assets2.ello.co/uploads/asset/attachment/6401877/ello-optimized-acbac144.jpg'\n    altText='Zdjęcie przedstawia czerwony talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajduje się ciasto z jabłkami.'\n  >\n    <Ingredient title='jabłka' quantity='10 średnich' />\n    <Ingredient title='mąka pszenna' quantity='3 i 1/2 szklanki' />\n    <Ingredient title='cukier puder' quantity='1/2 szklanki' />\n    <Ingredient title='cukier brązowy' quantity='3 łyżki' />\n    <Ingredient title='masło' quantity='1 kostka' />\n    <Ingredient title='jaja' quantity='4' />\n    <Ingredient title='proszek do pieczenia' quantity='2 łyżeczki' />\n    <Method>\nObieram wszystkie jabłka (u mnie odmiana 'ligol') i kroję w drobną kostkę. Wrzucam do garnka, zalewam odrobiną wody, kropię sokiem z cytryny, zasypuję brązowym cukrem i duszę do miękkości. W międzyczasie przygotowuję ciasto. Mieszam mąkę z proszkiem do pieczenia, cukrem pudrem i zimnym masłem (dokładnie tak, jak zagniata się kruche ciasto). Wbijam jaja i wyrabiam rękoma. Dzielę na dwie równe części i wsadzam na pół godziny do lodówki. Po tym czasie jedną z części rozwałkowuje i wykładam do blachy o średnicy 25 x 40 cm. Wykładam uduszone jabłka i przykrywam drugą częścią ciasta.Tak przygotowane ciasto ląduje na ok. 45 min. do nagrzanego do 180°C. Voilà - najlepiej smakuje na ciepło z lodami waniliowymi.\n    </Method>\n  </Recipe>\n</div>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6401889/ello-optimized-f23c386a.jpg\" alt=\"Zdjęcie przedstawia ciasto z jabłkami na czerwonym talerzu.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6401901/ello-optimized-01997911.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na ciasto z jabłkami na czerwonym talerzu.\" /></p>\n";
var raw = exports.raw = "\n<olela-narrative>\nW oryginale 'szarlotka babci Czesi'. Przepis jest bardzo klasyczny, stary (w rodzinie od pokoleń) i dobry. To ciasto zawsze wychodzi. Dodatkowo zostawia pole do popisu Twojej wyobraźni - ja na wierzch ciasta położyłam pasy ciasta, tworząc kratę. A Ty? Może masz pomysł na inne kształty? Możesz także oprószyć całość cukrem lub cynamonem. Podaj kawałek szarlotki na ciepło z gałką lodów waniliowych, a jesienna chandra minie jak ręką odjął!\n</olela-narrative>\n\n<div>\n  <Recipe\n    title='Geometryczna szarlotka'\n    time='120 minut'\n    level='łatwy'\n    mealFor='15 osób'\n    photo='https://assets2.ello.co/uploads/asset/attachment/6401877/ello-optimized-acbac144.jpg'\n    altText='Zdjęcie przedstawia czerwony talerz na jasnym tle z perspektywy lotu ptaka. Na talerzu znajduje się ciasto z jabłkami.'\n  >\n    <Ingredient title='jabłka' quantity='10 średnich' />\n    <Ingredient title='mąka pszenna' quantity='3 i 1/2 szklanki' />\n    <Ingredient title='cukier puder' quantity='1/2 szklanki' />\n    <Ingredient title='cukier brązowy' quantity='3 łyżki' />\n    <Ingredient title='masło' quantity='1 kostka' />\n    <Ingredient title='jaja' quantity='4' />\n    <Ingredient title='proszek do pieczenia' quantity='2 łyżeczki' />\n    <Method>\nObieram wszystkie jabłka (u mnie odmiana 'ligol') i kroję w drobną kostkę. Wrzucam do garnka, zalewam odrobiną wody, kropię sokiem z cytryny, zasypuję brązowym cukrem i duszę do miękkości. W międzyczasie przygotowuję ciasto. Mieszam mąkę z proszkiem do pieczenia, cukrem pudrem i zimnym masłem (dokładnie tak, jak zagniata się kruche ciasto). Wbijam jaja i wyrabiam rękoma. Dzielę na dwie równe części i wsadzam na pół godziny do lodówki. Po tym czasie jedną z części rozwałkowuje i wykładam do blachy o średnicy 25 x 40 cm. Wykładam uduszone jabłka i przykrywam drugą częścią ciasta.Tak przygotowane ciasto ląduje na ok. 45 min. do nagrzanego do 180°C. Voilà - najlepiej smakuje na ciepło z lodami waniliowymi.\n    </Method>\n  </Recipe>\n</div>\n\n![Zdjęcie przedstawia ciasto z jabłkami na czerwonym talerzu.](https://assets1.ello.co/uploads/asset/attachment/6401889/ello-optimized-f23c386a.jpg)\n![Zdjęcie przedstawia zbliżenie na ciasto z jabłkami na czerwonym talerzu.](https://assets2.ello.co/uploads/asset/attachment/6401901/ello-optimized-01997911.jpg)";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 78 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'Znalaz\u0142am si\u0119 w miejscu, do kt\xF3rego przeci\u0119tny \u015Bmiertelnik zwyk\u0142 przychodzi\u0107 z nadziej\u0105 magicznego uzdrowienia. Liczy on bowiem na to, \u017Ce dwie krople brunatnego napoju znajduj\u0105ce si\u0119 na dnie bia\u0142ej fili\u017Canki s\u0105 w stanie zdj\u0105\u0107 z niego chroniczne zm\u0119czenie i odejm\u0105 z jego, i tak ju\u017C ujemnego bilansu snu, par\u0119 godzin. A on w te bonusowe godzinki b\u0119dzie m\xF3g\u0142 odda\u0107 si\u0119 swojej pasji, na kt\xF3r\u0105 przez ostatnie dwa lata swojego \u017Cycia zwyczajnie nie mia\u0142 czasu, bo praca, bo dom, bo dzieci. Tak... wi\u0119kszo\u015B\u0107 z nas przychodz\u0105cych do kawiarni oczekuje nie tylko wytwornego smaku, ale te\u017C efekt\xF3w. Niekt\xF3rzy od lat maj\u0105 w ci\u0105gu dnia zaplanowany czas na kaw\u0119. Niekt\xF3rzy pij\u0105 j\u0105 do \u015Bniadania, p\xF3\u017Aniej po obiedzie, do deseru, a wieczorem odmawiaj\u0105 sobie nektaru bog\xF3w, m\xF3wi\u0105c po cichu w my\u015Blach, \u017Ce to ju\u017C p\xF3\u017Ana godzina i \u017Ce nie b\u0119d\u0105 w stanie zasn\u0105\u0107. Inni bezkarnie \u0142ami\u0105 przepisy, kt\xF3re wymy\u015Blili Ci pierwsi i pij\u0105 w nocy o p\xF3\u0142nocy, bez wi\u0119kszych problem\xF3w oddaj\u0105c si\u0119 p\xF3\u017Anej sennym marzeniom. S\u0105 te\u017C tacy, kt\xF3rzy nigdy nie pij\u0105. Tych ostatnich nale\u017Cy zapyta\u0107, czy aby na pewno poznali prawdziwy smak \u017Cycia?'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6410495/ello-optimized-9e2aa655.jpg', alt: 'Zdj\u0119cie przedstawia roz\u0142o\u017Cony r\xF3\u017Cowy zeszyt z powycinanymi elementami z gazet.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6410499/ello-optimized-7c015584.jpg', alt: 'Obraz przedstawia kola\u017C na r\xF3\u017Cowym tle, widzimy posta\u0107, kt\xF3ra zamiast g\u0142owy ma br\u0105zowe w\u0142osy, jedno oko, jest ubrana w r\xF3\u017Cowy sweter.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Na przeciwko mnie przy okr\u0105g\u0142ym stoliku siedzia\u0142a kobieta, lat ok. 35, przed sob\u0105 mia\u0142a ekran zgrabnego komputera nowej generacji, przy uchu telefon, a w d\u0142oni serwetk\u0119. By\u0142a bardzo emocjonalnie zaanga\u017Cowana w rozmow\u0119, gestykulowa\u0142a chudymi jak patyki r\u0119kami, co chwil\u0119 uda\u0142o jej si\u0119 nawet podnie\u015B\u0107 g\u0142os do tego stopnia, \u017Ce s\u0105siedzi ze stolik\xF3w obok zamierali na chwil\u0119 w swoich aktywno\u015Bciach. Kiedy tylko sko\u0144czy\u0142a rozmawia\u0107, natychmiast wr\xF3ci\u0142a do mi\u0119toszenia kawiarnianej serwetki. Jej szcz\u0119ki zaciska\u0142y si\u0119 z cz\u0119stotliwo\u015Bci\u0105 40stu razy na minut\u0119, a serwetka uleg\u0142a doszcz\u0119tnej destrukcji po oko\u0142o dw\xF3ch minutach. P\xF3\u0142tora metra w lewo stolik przysuni\u0119ty by\u0142 do \u015Bciany, a miejsce przy niej zajmowa\u0142 m\u0119\u017Cczyzna o solidnej budowie cia\u0142a. Mia\u0142 na sobie sweter w szkock\u0105 krat\u0119, z domieszk\u0105 prawdziwej we\u0142ny ( co chwil\u0119 drapa\u0142 si\u0119 swoimi t\u0142u\u015Bciutkimi paluszkami po szyi) a przed sob\u0105 trzyma\u0142 ksi\u0105\u017Ck\u0119, chyba z gatunku fantasy, bo na ok\u0142adce widnia\u0142 bohater ze spiczastymi uszami. M\u0119\u017Cczyzna \xF3w bacznie przygl\u0105da\u0142 si\u0119 w\u0142osom kobiety, kt\xF3ra siedzia\u0142a do niego ty\u0142em przy przeciwleg\u0142ym stoliku. Jej w\u0142osy by\u0142y idealne. D\u0142ugie, o naturalnie s\u0142omkowym kolorze, l\u015Bni\u0105ce, faluj\u0105ce z ka\u017Cdym ruchem jej drobnej g\u0142owy. Kobieta zaj\u0119ta by\u0142a rozmow\u0105 ze swoj\u0105 kole\u017Cank\u0105, zachowanie wskazywa\u0142o na to, \u017Ce znaj\u0105 si\u0119 od wiek\xF3w.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6410502/ello-optimized-6a04ecb3.jpg', alt: 'Zdj\u0119cie przedstawia roz\u0142o\u017Cony pomara\u0144czowy zeszyt z powycinanymi elementami z gazet.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6410516/ello-optimized-1a3e20ec.jpg', alt: 'Obraz przedstawia kola\u017C z element\xF3w zdj\u0119\u0107, widzimy spodenki, zielony sweter, kolorowy sweter zamiast twarzy.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Razem ze swoim ma\u0142ym americano ukryli\u015Bmy si\u0119 w g\u0142\u0119bi sali. Fotel by\u0142 wygodny, mi\u0119kki, du\u017Cy i czerwony. Wymienia\u0142am spojrzenia mi\u0119dzy panem w pseudo-we\u0142nianym swetrze, rozemocjonowan\u0105 bizneswoman, a ok\u0142adk\u0105 magazynu dla kobiet. Ok\u0142adki zdradzaj\u0105 wi\u0119kszo\u015B\u0107 prawdy o ca\u0142ej gazecie. Je\u015Bli zobaczysz na niej sylwetk\u0119 wysportowanej dziewczyny \u2013  na 90% znajdziesz wewn\u0105trz przepisy i zestaw domowych \u0107wicze\u0144, kt\xF3ry pomo\u017Ce Ci w osi\u0105gni\u0119ciu wymarzonego cia\u0142a. Je\u015Bli jednak przedstawia ona twarz dojrza\u0142ej, wp\u0142ywowej kobiety, to prawdopodobnie masz do czynienia z pismem dla Pa\u0144 o nieco wyg\xF3rowanych wymaganiach, dlatego przeczytasz tam ca\u0142kiem niez\u0142e felietony przeplatane reklamami gabinet\xF3w medycyny estetycznej. Kiedy\u015B widzia\u0142am w internecie film z eksperymentu, w kt\xF3rym z kobiecych pism wyrywano strony z reklamami i okazywa\u0142o si\u0119, \u017Ce \u2018czytania\u2019 wystarczy nam akurat na \u0142yk porannej kawy (tyle, \u017Ce \u0142ykiem mo\u017Cemy delektowa\u0107 si\u0119 jednak nieco d\u0142u\u017Cej). Wpad\u0142am wi\u0119c na pomys\u0142, \u017Ce skupi\u0119 si\u0119 na tej nieczytelnej cz\u0119\u015Bci, czyli na obrazach, z kt\xF3rymi spotykamy si\u0119 zaraz po starannym przyjrzeniu si\u0119 ok\u0142adce.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6410522/ello-optimized-2f35c947.jpg', alt: 'Zdj\u0119cie przedstawia czerwony karton, na kt\xF3rym le\u017C\u0105 elementy powycinane z gazet, tworz\u0105c kola\u017C.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6410526/ello-optimized-9e87789e.jpg', alt: 'Obraz przedstawia kola\u017C na czerwonym tle. Widzimy fragment kobiety ubranej w czerwon\u0105 sukienk\u0119, kawa\u0142ek niebieskiego nieba, g\u0142ow\u0119 pozbawion\u0105 twarzy.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Tak jak bacznie przygl\u0105da\u0142am si\u0119 osobom w kawiarni, zacz\u0119\u0142am analizowa\u0107 twarze i cia\u0142a w gazetach. Zauwa\u017Cy\u0142am mi\u0119kki gest d\u0142oni w reklamie lakieru do paznokci, subtelne spojrzenie dziewczyny ubranej w cekinowy kombinezon, perfekcyjny podmuch wiatru na tiulowej sp\xF3dnicy reprezentuj\u0105cej now\u0105 kolekcj\u0119 od znanego projektanta. Czym pr\u0119dzej wyj\u0119\u0142am z torebki no\u017Cyczki i zacz\u0119\u0142am wycina\u0107 poszczeg\xF3lne elementy. Przyk\u0142ada\u0142am je do siebie, dopasowywa\u0142am jak puzzle. Kiedy ju\u017C wykorzysta\u0142am wi\u0119kszo\u015B\u0107 zdj\u0119\u0107 z gazety spojrza\u0142am jeszcze raz na wszystkie kompozycje. Nadal czego\u015B brakowa\u0142o, nie mog\u0142am tylko zrozumie\u0107 czego. Wtedy podnios\u0142am g\u0142ow\u0119 i zobaczy\u0142am, \u017Ce kobieta , kt\xF3ra jeszcze przed chwil\u0105 rozrywa\u0142a serwetk\u0119 na strz\u0119py uspokoi\u0142a si\u0119, jej oczy z\u0142agodnia\u0142y i wpatrywa\u0142y si\u0119 w ceglan\u0105 \u015Bcian\u0119. Gruby m\u0119\u017Cczyzna nie czyta\u0142 ju\u017C swoich fantastycznych opowie\u015Bci, a przyjaci\xF3\u0142ki ze stolika naprzeciwko nie zwierza\u0142y si\u0119 sobie z najskrytszych sekret\xF3w. Wszystko jakby zamar\u0142o w bezruchu, a ja odnalaz\u0142am swoje brakuj\u0105ce elementy. Zacz\u0119\u0142am przyk\u0142ada\u0107 papierowe wycinki do \u017Cywych postaci, robi\u0142am to mru\u017C\u0105c jedno oko, tak jak malarz podczas kadrowania sceny. Faluj\u0105ce, s\u0142omkowe w\u0142osy, szkocka krata swetra, ko\u015Bciste d\u0142onie i strz\u0119pki serwetki dope\u0142ni\u0142y scen\u0119. Stworzy\u0142am kola\u017C z prawdziwych ok\u0142adek, ok\u0142adek, kt\xF3re sami projektujemy, nie zdaj\u0105c sobie sprawy, \u017Ce owa zaciskaj\u0105ca szcz\u0119k\u0119 kobieta to mama czw\xF3rki dzieci, porzucona przez m\u0119\u017Ca, kt\xF3ry zdradza\u0142 j\u0105 latami, pr\xF3buj\u0105ca rozkr\u0119ci\u0107 i utrzyma\u0107 firm\u0119 za wszelk\u0105 cen\u0119. M\u0119\u017Cczyzna w swetrze to poeta z wieloma nagrodami literackimi na swoim koncie, otwarcie przyznaj\u0105cy si\u0119 do nocnego konsumowania ob\u0142\u0119dnej ilo\u015Bci ciastek z kremem. Wszystkie ok\u0142adki po\u0142\u0105czy\u0142y si\u0119 we wsp\xF3lnym kola\u017Cu i wyzna\u0142y wsp\xF3ln\u0105 mi\u0142o\u015B\u0107 do (jak si\u0119 wkr\xF3tce oka\u017Ce) jedynego, maj\u0105cego w \u017Cyciu sens, na\u0142ogu\u2026 \u2013 kawy.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6410771/ello-optimized-e3b188ea.jpg', alt: 'Zdj\u0119cie przedstawia elementy powycinane z gazet po\u0142o\u017Cone na br\u0105zowym kartonie.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6410769/ello-optimized-a37c9988.jpg', alt: 'Zdj\u0119cie przedstawia kola\u017C na br\u0105zowym tle, widzimy element w czarno-bia\u0142e pasy i p\u0142aszcz.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Kolaż_okładek.", "date": "2017-10-25T11:22:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["kolaż", "sztuka", "art", "artysta", "kreacja"] };
var body = exports.body = "<p>Znalazłam się w miejscu, do którego przeciętny śmiertelnik zwykł przychodzić z nadzieją magicznego uzdrowienia. Liczy on bowiem na to, że dwie krople brunatnego napoju znajdujące się na dnie białej filiżanki są w stanie zdjąć z niego chroniczne zmęczenie i odejmą z jego, i tak już ujemnego bilansu snu, parę godzin. A on w te bonusowe godzinki będzie mógł oddać się swojej pasji, na którą przez ostatnie dwa lata swojego życia zwyczajnie nie miał czasu, bo praca, bo dom, bo dzieci. Tak... większość z nas przychodzących do kawiarni oczekuje nie tylko wytwornego smaku, ale też efektów. Niektórzy od lat mają w ciągu dnia zaplanowany czas na kawę. Niektórzy piją ją do śniadania, później po obiedzie, do deseru, a wieczorem odmawiają sobie nektaru bogów, mówiąc po cichu w myślach, że to już późna godzina i że nie będą w stanie zasnąć. Inni bezkarnie łamią przepisy, które wymyślili Ci pierwsi i piją w nocy o północy, bez większych problemów oddając się późnej sennym marzeniom. Są też tacy, którzy nigdy nie piją. Tych ostatnich należy zapytać, czy aby na pewno poznali prawdziwy smak życia?</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6410495/ello-optimized-9e2aa655.jpg\" alt=\"Zdjęcie przedstawia rozłożony różowy zeszyt z powycinanymi elementami z gazet.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6410499/ello-optimized-7c015584.jpg\" alt=\"Obraz przedstawia kolaż na różowym tle, widzimy postać, która zamiast głowy ma brązowe włosy, jedno oko, jest ubrana w różowy sweter.\" /></p>\n<p>Na przeciwko mnie przy okrągłym stoliku siedziała kobieta, lat ok. 35, przed sobą miała ekran zgrabnego komputera nowej generacji, przy uchu telefon, a w dłoni serwetkę. Była bardzo emocjonalnie zaangażowana w rozmowę, gestykulowała chudymi jak patyki rękami, co chwilę udało jej się nawet podnieść głos do tego stopnia, że sąsiedzi ze stolików obok zamierali na chwilę w swoich aktywnościach. Kiedy tylko skończyła rozmawiać, natychmiast wróciła do miętoszenia kawiarnianej serwetki. Jej szczęki zaciskały się z częstotliwością 40stu razy na minutę, a serwetka uległa doszczętnej destrukcji po około dwóch minutach.\nPółtora metra w lewo stolik przysunięty był do ściany, a miejsce przy niej zajmował mężczyzna o solidnej budowie ciała. Miał na sobie sweter w szkocką kratę, z domieszką prawdziwej wełny ( co chwilę drapał się swoimi tłuściutkimi paluszkami po szyi) a przed sobą trzymał książkę, chyba z gatunku fantasy, bo na okładce widniał bohater ze spiczastymi uszami. Mężczyzna ów bacznie przyglądał się włosom kobiety, która siedziała do niego tyłem przy przeciwległym stoliku. Jej włosy były idealne. Długie, o naturalnie słomkowym kolorze, lśniące, falujące z każdym ruchem jej drobnej głowy. Kobieta zajęta była rozmową ze swoją koleżanką, zachowanie wskazywało na to, że znają się od wieków.</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6410502/ello-optimized-6a04ecb3.jpg\" alt=\"Zdjęcie przedstawia rozłożony pomarańczowy zeszyt z powycinanymi elementami z gazet.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6410516/ello-optimized-1a3e20ec.jpg\" alt=\"Obraz przedstawia kolaż z elementów zdjęć, widzimy spodenki, zielony sweter, kolorowy sweter zamiast twarzy.\" /></p>\n<p>Razem ze swoim małym americano ukryliśmy się w głębi sali. Fotel był wygodny, miękki, duży i czerwony. Wymieniałam spojrzenia między panem w pseudo-wełnianym swetrze, rozemocjonowaną bizneswoman, a okładką magazynu dla kobiet. Okładki zdradzają większość prawdy o całej gazecie. Jeśli zobaczysz na niej sylwetkę wysportowanej dziewczyny –  na 90% znajdziesz wewnątrz przepisy i zestaw domowych ćwiczeń, który pomoże Ci w osiągnięciu wymarzonego ciała. Jeśli jednak przedstawia ona twarz dojrzałej, wpływowej kobiety, to prawdopodobnie masz do czynienia z pismem dla Pań o nieco wygórowanych wymaganiach, dlatego przeczytasz tam całkiem niezłe felietony przeplatane reklamami gabinetów medycyny estetycznej. Kiedyś widziałam w internecie film z eksperymentu, w którym z kobiecych pism wyrywano strony z reklamami i okazywało się, że ‘czytania’ wystarczy nam akurat na łyk porannej kawy (tyle, że łykiem możemy delektować się jednak nieco dłużej). Wpadłam więc na pomysł, że skupię się na tej nieczytelnej części, czyli na obrazach, z którymi spotykamy się zaraz po starannym przyjrzeniu się okładce.</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6410522/ello-optimized-2f35c947.jpg\" alt=\"Zdjęcie przedstawia czerwony karton, na którym leżą elementy powycinane z gazet, tworząc kolaż.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6410526/ello-optimized-9e87789e.jpg\" alt=\"Obraz przedstawia kolaż na czerwonym tle. Widzimy fragment kobiety ubranej w czerwoną sukienkę, kawałek niebieskiego nieba, głowę pozbawioną twarzy.\" /></p>\n<p>Tak jak bacznie przyglądałam się osobom w kawiarni, zaczęłam analizować twarze i ciała w gazetach. Zauważyłam miękki gest dłoni w reklamie lakieru do paznokci, subtelne spojrzenie dziewczyny ubranej w cekinowy kombinezon, perfekcyjny podmuch wiatru na tiulowej spódnicy reprezentującej nową kolekcję od znanego projektanta. Czym prędzej wyjęłam z torebki nożyczki i zaczęłam wycinać poszczególne elementy. Przykładałam je do siebie, dopasowywałam jak puzzle. Kiedy już wykorzystałam większość zdjęć z gazety spojrzałam jeszcze raz na wszystkie kompozycje. Nadal czegoś brakowało, nie mogłam tylko zrozumieć czego. Wtedy podniosłam głowę i zobaczyłam, że kobieta , która jeszcze przed chwilą rozrywała serwetkę na strzępy uspokoiła się, jej oczy złagodniały i wpatrywały się w ceglaną ścianę. Gruby mężczyzna nie czytał już swoich fantastycznych opowieści, a przyjaciółki ze stolika naprzeciwko nie zwierzały się sobie z najskrytszych sekretów. Wszystko jakby zamarło w bezruchu, a ja odnalazłam swoje brakujące elementy. Zaczęłam przykładać papierowe wycinki do żywych postaci, robiłam to mrużąc jedno oko, tak jak malarz podczas kadrowania sceny. Falujące, słomkowe włosy, szkocka krata swetra, kościste dłonie i strzępki serwetki dopełniły scenę. Stworzyłam kolaż z prawdziwych okładek, okładek, które sami projektujemy, nie zdając sobie sprawy, że owa zaciskająca szczękę kobieta to mama czwórki dzieci, porzucona przez męża, który zdradzał ją latami, próbująca rozkręcić i utrzymać firmę za wszelką cenę. Mężczyzna w swetrze to poeta z wieloma nagrodami literackimi na swoim koncie, otwarcie przyznający się do nocnego konsumowania obłędnej ilości ciastek z kremem. Wszystkie okładki połączyły się we wspólnym kolażu i wyznały wspólną miłość do (jak się wkrótce okaże) jedynego, mającego w życiu sens, nałogu… – kawy.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6410771/ello-optimized-e3b188ea.jpg\" alt=\"Zdjęcie przedstawia elementy powycinane z gazet położone na brązowym kartonie.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6410769/ello-optimized-a37c9988.jpg\" alt=\"Zdjęcie przedstawia kolaż na brązowym tle, widzimy element w czarno-białe pasy i płaszcz.\" /></p>\n";
var raw = exports.raw = "\nZnalazłam się w miejscu, do którego przeciętny śmiertelnik zwykł przychodzić z nadzieją magicznego uzdrowienia. Liczy on bowiem na to, że dwie krople brunatnego napoju znajdujące się na dnie białej filiżanki są w stanie zdjąć z niego chroniczne zmęczenie i odejmą z jego, i tak już ujemnego bilansu snu, parę godzin. A on w te bonusowe godzinki będzie mógł oddać się swojej pasji, na którą przez ostatnie dwa lata swojego życia zwyczajnie nie miał czasu, bo praca, bo dom, bo dzieci. Tak… większość z nas przychodzących do kawiarni oczekuje nie tylko wytwornego smaku, ale też efektów. Niektórzy od lat mają w ciągu dnia zaplanowany czas na kawę. Niektórzy piją ją do śniadania, później po obiedzie, do deseru, a wieczorem odmawiają sobie nektaru bogów, mówiąc po cichu w myślach, że to już późna godzina i że nie będą w stanie zasnąć. Inni bezkarnie łamią przepisy, które wymyślili Ci pierwsi i piją w nocy o północy, bez większych problemów oddając się późnej sennym marzeniom. Są też tacy, którzy nigdy nie piją. Tych ostatnich należy zapytać, czy aby na pewno poznali prawdziwy smak życia?\n\n![Zdjęcie przedstawia rozłożony różowy zeszyt z powycinanymi elementami z gazet.](https://assets0.ello.co/uploads/asset/attachment/6410495/ello-optimized-9e2aa655.jpg)\n![Obraz przedstawia kolaż na różowym tle, widzimy postać, która zamiast głowy ma brązowe włosy, jedno oko, jest ubrana w różowy sweter.](https://assets2.ello.co/uploads/asset/attachment/6410499/ello-optimized-7c015584.jpg)\n\nNa przeciwko mnie przy okrągłym stoliku siedziała kobieta, lat ok. 35, przed sobą miała ekran zgrabnego komputera nowej generacji, przy uchu telefon, a w dłoni serwetkę. Była bardzo emocjonalnie zaangażowana w rozmowę, gestykulowała chudymi jak patyki rękami, co chwilę udało jej się nawet podnieść głos do tego stopnia, że sąsiedzi ze stolików obok zamierali na chwilę w swoich aktywnościach. Kiedy tylko skończyła rozmawiać, natychmiast wróciła do miętoszenia kawiarnianej serwetki. Jej szczęki zaciskały się z częstotliwością 40stu razy na minutę, a serwetka uległa doszczętnej destrukcji po około dwóch minutach. \nPółtora metra w lewo stolik przysunięty był do ściany, a miejsce przy niej zajmował mężczyzna o solidnej budowie ciała. Miał na sobie sweter w szkocką kratę, z domieszką prawdziwej wełny ( co chwilę drapał się swoimi tłuściutkimi paluszkami po szyi) a przed sobą trzymał książkę, chyba z gatunku fantasy, bo na okładce widniał bohater ze spiczastymi uszami. Mężczyzna ów bacznie przyglądał się włosom kobiety, która siedziała do niego tyłem przy przeciwległym stoliku. Jej włosy były idealne. Długie, o naturalnie słomkowym kolorze, lśniące, falujące z każdym ruchem jej drobnej głowy. Kobieta zajęta była rozmową ze swoją koleżanką, zachowanie wskazywało na to, że znają się od wieków.\n\n![Zdjęcie przedstawia rozłożony pomarańczowy zeszyt z powycinanymi elementami z gazet.](https://assets2.ello.co/uploads/asset/attachment/6410502/ello-optimized-6a04ecb3.jpg)\n![Obraz przedstawia kolaż z elementów zdjęć, widzimy spodenki, zielony sweter, kolorowy sweter zamiast twarzy.](https://assets0.ello.co/uploads/asset/attachment/6410516/ello-optimized-1a3e20ec.jpg)\n\nRazem ze swoim małym americano ukryliśmy się w głębi sali. Fotel był wygodny, miękki, duży i czerwony. Wymieniałam spojrzenia między panem w pseudo-wełnianym swetrze, rozemocjonowaną bizneswoman, a okładką magazynu dla kobiet. Okładki zdradzają większość prawdy o całej gazecie. Jeśli zobaczysz na niej sylwetkę wysportowanej dziewczyny –  na 90% znajdziesz wewnątrz przepisy i zestaw domowych ćwiczeń, który pomoże Ci w osiągnięciu wymarzonego ciała. Jeśli jednak przedstawia ona twarz dojrzałej, wpływowej kobiety, to prawdopodobnie masz do czynienia z pismem dla Pań o nieco wygórowanych wymaganiach, dlatego przeczytasz tam całkiem niezłe felietony przeplatane reklamami gabinetów medycyny estetycznej. Kiedyś widziałam w internecie film z eksperymentu, w którym z kobiecych pism wyrywano strony z reklamami i okazywało się, że ‘czytania’ wystarczy nam akurat na łyk porannej kawy (tyle, że łykiem możemy delektować się jednak nieco dłużej). Wpadłam więc na pomysł, że skupię się na tej nieczytelnej części, czyli na obrazach, z którymi spotykamy się zaraz po starannym przyjrzeniu się okładce.\n\n![Zdjęcie przedstawia czerwony karton, na którym leżą elementy powycinane z gazet, tworząc kolaż.](https://assets2.ello.co/uploads/asset/attachment/6410522/ello-optimized-2f35c947.jpg)\n![Obraz przedstawia kolaż na czerwonym tle. Widzimy fragment kobiety ubranej w czerwoną sukienkę, kawałek niebieskiego nieba, głowę pozbawioną twarzy.](https://assets1.ello.co/uploads/asset/attachment/6410526/ello-optimized-9e87789e.jpg)\n\nTak jak bacznie przyglądałam się osobom w kawiarni, zaczęłam analizować twarze i ciała w gazetach. Zauważyłam miękki gest dłoni w reklamie lakieru do paznokci, subtelne spojrzenie dziewczyny ubranej w cekinowy kombinezon, perfekcyjny podmuch wiatru na tiulowej spódnicy reprezentującej nową kolekcję od znanego projektanta. Czym prędzej wyjęłam z torebki nożyczki i zaczęłam wycinać poszczególne elementy. Przykładałam je do siebie, dopasowywałam jak puzzle. Kiedy już wykorzystałam większość zdjęć z gazety spojrzałam jeszcze raz na wszystkie kompozycje. Nadal czegoś brakowało, nie mogłam tylko zrozumieć czego. Wtedy podniosłam głowę i zobaczyłam, że kobieta , która jeszcze przed chwilą rozrywała serwetkę na strzępy uspokoiła się, jej oczy złagodniały i wpatrywały się w ceglaną ścianę. Gruby mężczyzna nie czytał już swoich fantastycznych opowieści, a przyjaciółki ze stolika naprzeciwko nie zwierzały się sobie z najskrytszych sekretów. Wszystko jakby zamarło w bezruchu, a ja odnalazłam swoje brakujące elementy. Zaczęłam przykładać papierowe wycinki do żywych postaci, robiłam to mrużąc jedno oko, tak jak malarz podczas kadrowania sceny. Falujące, słomkowe włosy, szkocka krata swetra, kościste dłonie i strzępki serwetki dopełniły scenę. Stworzyłam kolaż z prawdziwych okładek, okładek, które sami projektujemy, nie zdając sobie sprawy, że owa zaciskająca szczękę kobieta to mama czwórki dzieci, porzucona przez męża, który zdradzał ją latami, próbująca rozkręcić i utrzymać firmę za wszelką cenę. Mężczyzna w swetrze to poeta z wieloma nagrodami literackimi na swoim koncie, otwarcie przyznający się do nocnego konsumowania obłędnej ilości ciastek z kremem. Wszystkie okładki połączyły się we wspólnym kolażu i wyznały wspólną miłość do (jak się wkrótce okaże) jedynego, mającego w życiu sens, nałogu… – kawy.\n\n![Zdjęcie przedstawia elementy powycinane z gazet położone na brązowym kartonie.](https://assets0.ello.co/uploads/asset/attachment/6410771/ello-optimized-e3b188ea.jpg)\n![Zdjęcie przedstawia kolaż na brązowym tle, widzimy element w czarno-białe pasy i płaszcz.](https://assets2.ello.co/uploads/asset/attachment/6410769/ello-optimized-a37c9988.jpg)";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 79 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'Wyobra\u017Acie sobie pewien zestaw przedmiot\xF3w stoj\u0105cych na stole. Niech to b\u0119dzie wazon, miska z owocami, n\xF3\u017C i poranna gazeta. Przedmioty te o\u015Bwietlone s\u0105 dziennym \u015Bwiat\u0142em, kt\xF3rego \u017Ar\xF3d\u0142em jest okno z lewej strony. Patrzycie na martw\u0105 natur\u0119 jako na ca\u0142o\u015B\u0107, na zjawisko jedno\u015Bci. Teraz, skupcie si\u0119 na poszczeg\xF3lnych elementach i niech zaistniej\u0105 w waszym umy\u015Ble jako figury geometryczne. N\xF3\u017C to sto\u017Cek, misa jawi si\u0119 walcem, a gazeta to sze\u015Bcian. Dobrze. Teraz macie do dyspozycji r\xF3\u017Cne \u017Ar\xF3d\u0142a \u015Bwiat\u0142a \u2013 niech to b\u0119dzie kilka lampek. Ustawcie lampki tak, by ka\u017Cda z nich w odmienny spos\xF3b o\u015Bwietla\u0142a dany przedmiot (nie zapominajcie w trakcie, \u017Ce przedmioty przybra\u0142y form\u0119 geometryczn\u0105). Dobrze. Teraz to namalujcie. Je\u015Bli sko\u0144czyli\u015Bcie \u0107wiczenie z martw\u0105 natur\u0105 pora przej\u015B\u0107 do \u017Cywego modelu. Wpiszcie twarz w sze\u015Bcian, a nast\u0119pnie rozbijcie na mniejsze, geometryczne cz\u0119\u015Bci. Malujcie, nie przestawajcie malowa\u0107. Zerwijcie z tradycyjn\u0105 zasad\u0105 perspektywy.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6416631/ello-optimized-d59ec2a0.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na bia\u0142ym tle w otoczeniu geometrycznych granatowych element\xF3w. Widzimy obrazy znanych artyst\xF3w i rze\u017Ab\u0119 g\u0142owy.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6416638/ello-optimized-f69f7e37.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na bia\u0142ym tle w otoczeniu geometrycznych granatowych element\xF3w. Widzimy fotografie modelek ubranych w geometryczne stroje, twarze w artystycznym makija\u017Cu i rze\u017Ab\u0119.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6416644/ello-optimized-ebd98038.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na bia\u0142ym tle w otoczeniu geometrycznych granatowych element\xF3w. Widzimy wazon, torebk\u0119, modelki na wybiegu, ceramiczn\u0105 waz\u0119, obrazy znanych malarzy.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6416649/ello-optimized-32ffc370.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na bia\u0142ym tle w otoczeniu geometrycznych granatowych element\xF3w. Widzimy dwa zdj\u0119cia budynk\xF3w, a na samym dole bia\u0142e napisy na granatowym tle.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      '\u201EPortret Gertrudy Stein\u2019 Picassa to jeden z pierwszych przejaw\xF3w nadej\u015Bcia kubizmu. Przypatrzcie si\u0119 twarzy kobiety. Zaznacza si\u0119 na niej charakterystyczna geometryzacja i delikatne przesuni\u0119cie element\xF3w. Z t\u0142em r\xF3wnie\u017C co\u015B si\u0119 sta\u0142o, jakby zosta\u0142o sp\u0142aszczone i wykazuje impresjonistyczny charakter. Ten etap rozwoju kubizmu zostanie p\xF3\u017Aniej nazwany \u2018prekubizmem\u2019. Nast\u0119pnie przyszed\u0142 moment na \u2018kubizm analityczny\u2019 (1907 \u2013 1912 r.). Jego charakterystyczn\u0105 cech\u0105 jest monochromatyczna paleta, ograniczaj\u0105ca si\u0119 do br\u0105z\xF3w, czerni i szaro\u015Bci. Obiekty na obrazach s\u0105 jakby \u2018pryzmatyczne\u2019, rozbite na drobne elementy. Arty\u015Bci w pewnym sense odrzucili oko, jako jedyne \u017Ar\xF3d\u0142o prawdy o obrazie i zwr\xF3cili si\u0119 w stron\u0119 umys\u0142u, kt\xF3ry to, przecie\u017C nie widzi przedmiotu tylko z jednej strony. Odwo\u0142ywali si\u0119 do intelektu widza, w\u0142\u0105czaj\u0105c w swoje p\u0142\xF3tna tak\u017Ce element czasu. \u2018Portret Ambrose Vollard\u2019 (1910 r.) stanowi idealny przyk\u0142ad fragmentu tej osi czasu. P\xF3\u017Aniej przyszed\u0142 moment, kiedy to arty\u015Bci nieco si\u0119 zagalopowali i ich prace zacz\u0119\u0142y mocno ucieka\u0107 w stron\u0119 abstrakcji (nie mo\u017Cna si\u0119 by\u0142o doszuka\u0107 fragment\xF3w przypominaj\u0105cych rzeczywisto\u015B\u0107), co ich przestraszy\u0142o i zacz\u0119li poszukiwa\u0107 nowych sposob\xF3w obrazowania, bez konieczno\u015Bci doszcz\u0119tnego zacierania \u015Blad\xF3w fizyczno\u015Bci. Okres hermetyczny (1912- 1913 r.) to czas kiedy kontury obiektu s\u0105 ledwo widoczne, geometryczne kszta\u0142ty wzajemnie si\u0119 przenikaj\u0105, a dla podtrzymania formalnego charakteru zacz\u0119to dodawa\u0107 do obraz\xF3w drukowane litery. W nast\u0119pnym czasie dojdzie do w\u0142\u0105czenia wycink\xF3w z gazet w obraz. Kola\u017Cowanie to ju\u017C cecha kubizmu syntetycznego (1914 \u2013 lata 20ste).'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Sw\xF3j wk\u0142ad w rozw\xF3j kubizmu wnie\u015Bli:'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Juan Gris'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Georges Braque'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Fernand L\xE9ger'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Pablo Picasso'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Francis Picabia'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Jean Metzinger'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Albert Gleizes'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Louis Marcoussis'
      )
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Kubizm [moodboard]", "date": "2017-10-26T14:08:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["kubizm", "cubism", "moodboard", "art", "sztuka", "artysta", "kreacja"] };
var body = exports.body = "<olela-narrative>\nWyobraźcie sobie pewien zestaw przedmiotów stojących na stole. Niech to będzie wazon, miska z owocami, nóż i poranna gazeta. Przedmioty te oświetlone są dziennym światłem, którego źródłem jest okno z lewej strony. Patrzycie na martwą naturę jako na całość, na zjawisko jedności. Teraz, skupcie się na poszczególnych elementach i niech zaistnieją w waszym umyśle jako figury geometryczne. Nóż to stożek, misa jawi się walcem, a gazeta to sześcian. Dobrze. Teraz macie do dyspozycji różne źródła światła – niech to będzie kilka lampek. Ustawcie lampki tak, by każda z nich w odmienny sposób oświetlała dany przedmiot (nie zapominajcie w trakcie, że przedmioty przybrały formę geometryczną). Dobrze. Teraz to namalujcie. Jeśli skończyliście ćwiczenie z martwą naturą pora przejść do żywego modelu. Wpiszcie twarz w sześcian, a następnie rozbijcie na mniejsze, geometryczne części. Malujcie, nie przestawajcie malować. Zerwijcie z tradycyjną zasadą perspektywy.\n</olela-narrative>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6416631/ello-optimized-d59ec2a0.jpg\" alt=\"Obraz przedstawia różne zdjęcia na białym tle w otoczeniu geometrycznych granatowych elementów. Widzimy obrazy znanych artystów i rzeźbę głowy.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6416638/ello-optimized-f69f7e37.jpg\" alt=\"Obraz przedstawia różne zdjęcia na białym tle w otoczeniu geometrycznych granatowych elementów. Widzimy fotografie modelek ubranych w geometryczne stroje, twarze w artystycznym makijażu i rzeźbę.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6416644/ello-optimized-ebd98038.jpg\" alt=\"Obraz przedstawia różne zdjęcia na białym tle w otoczeniu geometrycznych granatowych elementów. Widzimy wazon, torebkę, modelki na wybiegu, ceramiczną wazę, obrazy znanych malarzy.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6416649/ello-optimized-32ffc370.jpg\" alt=\"Obraz przedstawia różne zdjęcia na białym tle w otoczeniu geometrycznych granatowych elementów. Widzimy dwa zdjęcia budynków, a na samym dole białe napisy na granatowym tle.\" /></p>\n<p>„Portret Gertrudy Stein’ Picassa to jeden z pierwszych przejawów nadejścia kubizmu. Przypatrzcie się twarzy kobiety. Zaznacza się na niej charakterystyczna geometryzacja i delikatne przesunięcie elementów. Z tłem również coś się stało, jakby zostało spłaszczone i wykazuje impresjonistyczny charakter. Ten etap rozwoju kubizmu zostanie później nazwany ‘prekubizmem’.\nNastępnie przyszedł moment na ‘kubizm analityczny’ (1907 – 1912 r.). Jego charakterystyczną cechą jest monochromatyczna paleta, ograniczająca się do brązów, czerni i szarości. Obiekty na obrazach są jakby ‘pryzmatyczne’, rozbite na drobne elementy. Artyści w pewnym sense odrzucili oko, jako jedyne źródło prawdy o obrazie i zwrócili się w stronę umysłu, który to, przecież nie widzi przedmiotu tylko z jednej strony. Odwoływali się do intelektu widza, włączając w swoje płótna także element czasu. ‘Portret Ambrose Vollard’ (1910 r.) stanowi idealny przykład fragmentu tej osi czasu.\nPóźniej przyszedł moment, kiedy to artyści nieco się zagalopowali i ich prace zaczęły mocno uciekać w stronę abstrakcji (nie można się było doszukać fragmentów przypominających rzeczywistość), co ich przestraszyło i zaczęli poszukiwać nowych sposobów obrazowania, bez konieczności doszczętnego zacierania śladów fizyczności. Okres hermetyczny (1912- 1913 r.) to czas kiedy kontury obiektu są ledwo widoczne, geometryczne kształty wzajemnie się przenikają, a dla podtrzymania formalnego charakteru zaczęto dodawać do obrazów drukowane litery. W następnym czasie dojdzie do włączenia wycinków z gazet w obraz. Kolażowanie to już cecha kubizmu syntetycznego (1914 – lata 20ste).</p>\n<p>Swój wkład w rozwój kubizmu wnieśli:</p>\n<ul>\n<li>Juan Gris</li>\n<li>Georges Braque</li>\n<li>Fernand Léger</li>\n<li>Pablo Picasso</li>\n<li>Francis Picabia</li>\n<li>Jean Metzinger</li>\n<li>Albert Gleizes</li>\n<li>Louis Marcoussis</li>\n</ul>\n";
var raw = exports.raw = "\n<olela-narrative>\nWyobraźcie sobie pewien zestaw przedmiotów stojących na stole. Niech to będzie wazon, miska z owocami, nóż i poranna gazeta. Przedmioty te oświetlone są dziennym światłem, którego źródłem jest okno z lewej strony. Patrzycie na martwą naturę jako na całość, na zjawisko jedności. Teraz, skupcie się na poszczególnych elementach i niech zaistnieją w waszym umyśle jako figury geometryczne. Nóż to stożek, misa jawi się walcem, a gazeta to sześcian. Dobrze. Teraz macie do dyspozycji różne źródła światła – niech to będzie kilka lampek. Ustawcie lampki tak, by każda z nich w odmienny sposób oświetlała dany przedmiot (nie zapominajcie w trakcie, że przedmioty przybrały formę geometryczną). Dobrze. Teraz to namalujcie. Jeśli skończyliście ćwiczenie z martwą naturą pora przejść do żywego modelu. Wpiszcie twarz w sześcian, a następnie rozbijcie na mniejsze, geometryczne części. Malujcie, nie przestawajcie malować. Zerwijcie z tradycyjną zasadą perspektywy.\n</olela-narrative>\n\n![Obraz przedstawia różne zdjęcia na białym tle w otoczeniu geometrycznych granatowych elementów. Widzimy obrazy znanych artystów i rzeźbę głowy.](https://assets2.ello.co/uploads/asset/attachment/6416631/ello-optimized-d59ec2a0.jpg)\n![Obraz przedstawia różne zdjęcia na białym tle w otoczeniu geometrycznych granatowych elementów. Widzimy fotografie modelek ubranych w geometryczne stroje, twarze w artystycznym makijażu i rzeźbę.](https://assets1.ello.co/uploads/asset/attachment/6416638/ello-optimized-f69f7e37.jpg)\n![Obraz przedstawia różne zdjęcia na białym tle w otoczeniu geometrycznych granatowych elementów. Widzimy wazon, torebkę, modelki na wybiegu, ceramiczną wazę, obrazy znanych malarzy.](https://assets1.ello.co/uploads/asset/attachment/6416644/ello-optimized-ebd98038.jpg)\n![Obraz przedstawia różne zdjęcia na białym tle w otoczeniu geometrycznych granatowych elementów. Widzimy dwa zdjęcia budynków, a na samym dole białe napisy na granatowym tle.](https://assets1.ello.co/uploads/asset/attachment/6416649/ello-optimized-32ffc370.jpg)\n\n„Portret Gertrudy Stein’ Picassa to jeden z pierwszych przejawów nadejścia kubizmu. Przypatrzcie się twarzy kobiety. Zaznacza się na niej charakterystyczna geometryzacja i delikatne przesunięcie elementów. Z tłem również coś się stało, jakby zostało spłaszczone i wykazuje impresjonistyczny charakter. Ten etap rozwoju kubizmu zostanie później nazwany ‘prekubizmem’.\nNastępnie przyszedł moment na ‘kubizm analityczny’ (1907 – 1912 r.). Jego charakterystyczną cechą jest monochromatyczna paleta, ograniczająca się do brązów, czerni i szarości. Obiekty na obrazach są jakby ‘pryzmatyczne’, rozbite na drobne elementy. Artyści w pewnym sense odrzucili oko, jako jedyne źródło prawdy o obrazie i zwrócili się w stronę umysłu, który to, przecież nie widzi przedmiotu tylko z jednej strony. Odwoływali się do intelektu widza, włączając w swoje płótna także element czasu. ‘Portret Ambrose Vollard’ (1910 r.) stanowi idealny przykład fragmentu tej osi czasu.\nPóźniej przyszedł moment, kiedy to artyści nieco się zagalopowali i ich prace zaczęły mocno uciekać w stronę abstrakcji (nie można się było doszukać fragmentów przypominających rzeczywistość), co ich przestraszyło i zaczęli poszukiwać nowych sposobów obrazowania, bez konieczności doszczętnego zacierania śladów fizyczności. Okres hermetyczny (1912- 1913 r.) to czas kiedy kontury obiektu są ledwo widoczne, geometryczne kształty wzajemnie się przenikają, a dla podtrzymania formalnego charakteru zaczęto dodawać do obrazów drukowane litery. W następnym czasie dojdzie do włączenia wycinków z gazet w obraz. Kolażowanie to już cecha kubizmu syntetycznego (1914 – lata 20ste).\n\nSwój wkład w rozwój kubizmu wnieśli:\n* Juan Gris\n* Georges Braque\n* Fernand Léger\n* Pablo Picasso\n* Francis Picabia\n* Jean Metzinger\n* Albert Gleizes\n* Louis Marcoussis";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 80 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'Andr\xE9 Breton, \'Manifest surrealizmu\' (1924 r.), fragmenty:'
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Droga wyobra\u017Anio, najbardziej w tobie kocham to, \u017Ce nie przebaczasz.'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6434565/ello-optimized-6114c15d.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne elementy i zdj\u0119cia na blado-r\xF3\u017Cowym tle. Widzimy kawa\u0142ek pizzy, fotografi\u0119 portretow\u0105 i zdj\u0119cia obraz\xF3w.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6434569/ello-optimized-4f732112.jpg', alt: 'Obraz przedstawia zdj\u0119cia r\xF3\u017Cnych dzie\u0142 sztuki na blado-r\xF3\u017Cowym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6434571/ello-optimized-76db7fec.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na blado-r\xF3\u017Cowym tle. Widzimy sukienk\u0119, kapelusz w kszta\u0142cie buta, czarno-bia\u0142e fotografie damskich twarzy, obraz.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6434572/ello-optimized-291ac1d4.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na blado-r\xF3\u017Cowym tle. Widzimy kobiet\u0119 w czerwonej sukni, naszyjnik na bia\u0142ym manekinie, obraz, fili\u017Cank\u0119.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6434576/ello-optimized-e3632a97.jpg', alt: 'Obraz przedstawia r\xF3\u017Cne zdj\u0119cia na blado-r\xF3\u017Cowym tle. Widzimy zdj\u0119cia r\xF3\u017Cnych budynk\xF3w, fotografi\u0119, obraz z go\u0142\u0119biem.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6434577/ello-optimized-fba91b4c.jpg', alt: 'Zdj\u0119cie przedstawia ciemno-br\u0105zowe napisy na be\u017Cowym tle.' })
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'M\xF3g\u0142bym sp\u0119dzi\u0107 \u017Cycie na zach\u0119caniu wariat\xF3w do zwierze\u0144. S\u0105 to ludzie nieposzlakowanej uczciwo\u015Bci, kt\xF3rych prostoduszno\u015B\u0107 mo\u017Ce si\u0119 r\xF3wna\u0107 tylko z moj\u0105. Dla odkrycia Ameryki trzeba by\u0142o, a\u017Ceby Kolumb wybra\u0142 si\u0119 w drog\u0119 z kup\u0105 wariat\xF3w. I sp\xF3jrzcie, jak to wariactwo wcieli\u0142o si\u0119 w \u017Cycie i trwa po dzie\u0144 dzisiejszy.'
      )
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Strach przed ob\u0142\u0119dem nie zmusi nas do zatrzymania sztandaru wyobra\u017Ani w po\u0142owie masztu.'
      )
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Je\u017Celi w g\u0142\u0119binach naszego umys\u0142u kryj\u0105 si\u0119 dziwne si\u0142y, zdolne do pomna\u017Cania si\u0142 na powierzchni, albo do staczania z nimi zwyci\u0119skiej walki, to jak najbardziej warto je schwyta\u0107, przede wszystkim schwyta\u0107, aby potem, je\u017Celi zdo\u0142amy, podda\u0107 je kontroli naszego umys\u0142u.'
      )
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Umys\u0142 cz\u0142owieka \u015Bni\u0105cego jest ca\u0142kowicie zadowolony z tego, co si\u0119 dzieje. Nie wy\u0142ania si\u0119 niepokoj\u0105ce pytanie, co jest, a co nie jest mo\u017Cliwe. Zabijaj, szybuj w powietrzu, kochaj, ile zechcesz. A je\u015Bli umierasz, czy nie masz pewno\u015Bci, \u017Ce powstaniesz z martwych? Pozw\xF3l si\u0119 prowadzi\u0107, twoja zw\u0142oka nie zwolni biegu wydarze\u0144. Nie masz imienia. Wszystko przychodzi z nieocenion\u0105 \u0142atwo\u015Bci\u0105.'
      )
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Wierz\u0119 w to, \u017Ce te dwa na poz\xF3r tak przeciwstawne sobie stany, jak sen i jawa, w przysz\u0142o\u015Bci stopi\u0105 si\u0119 w pewnego rodzaju rzeczywisto\u015B\u0107 absolutn\u0105, w\xA0nadrealno\u015B\u0107, je\u015Bli to mo\u017Cna tak nazwa\u0107. Wyruszam na jej zdobycie, pewien, \u017Ce jej nie osi\u0105gn\u0119, ale tak ma\u0142o my\u015Bl\u0119 o swojej \u015Bmierci, \u017Ce jednak po trosze licz\u0119 na rado\u015B\u0107 tego osi\u0105gni\u0119cia.'
      )
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Surrealizm; Czysty automatyzm psychiczny, kt\xF3ry ma s\u0142u\u017Cy\u0107 do wyra\u017Cenia b\u0105d\u017A w s\u0142owie, b\u0105d\u017A w pi\u015Bmie, b\u0105d\u017A innym sposobem, rzeczywistego funkcjonowania my\u015Bli. Dyktowanie my\u015Bli wolne od wszelkiej kontroli umys\u0142u, poza wszelkimi wzgl\u0119dami estetycznymi czy moralnymi. (...) Surrealizm opiera si\u0119 na wierze w nadrz\u0119dn\u0105 rzeczywisto\u015B\u0107 pewnych form skojarzeniowych dot\u0105d lekcewa\u017Conych, we wszechpot\u0119g\u0119 marzenia, w bezinteresown\u0105 gr\u0119 my\u015Bli. D\u0105\u017Cy do ostatecznego zniszczenia wszelkich innych mechanizm\xF3w psychicznych i zaj\u0119cia ich miejsca w rozwi\u0105zywaniu podstawowych zagadnie\u0144 \u017Cycia.'
      )
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Ci, kt\xF3rzy si\u0119 po\u015Bwi\u0119caj\u0105 surrealizmowi, nie mog\u0105 go porzuci\u0107, kiedy im si\u0119 podoba. Wszystko wskazuje na to, \u017Ce surrealizm dzia\u0142a jak narkotyk; podobnie jak narkotyk stwarza pewien stan \u0142aknienia i mo\u017Ce pchn\u0105\u0107 cz\u0142owieka do straszliwych wybuch\xF3w.'
      )
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Z obrazami surrealistycznymi dzieje si\u0119 tak samo, jak z obrazami wytwarzanymi przez opium, cz\u0142owiek ich nie przywo\u0142uje, ale \u201Csame si\u0119 nasuwaj\u0105 spontanicznie, narzucaj\u0105 si\u0119 przemoc\u0105. Nie mo\u017Ce si\u0119 ich pozby\u0107, bo wola jest bezsilna, i nie panuje ju\u017C nad w\u0142adzami umys\u0142u\u201D. (cyt. Baudelaire)'
      )
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Tylko s\u0142owo wolno\u015B\u0107 potrafi mnie jeszcze porwa\u0107.'
      )
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      '~ Andr\xE9 Breton (\'Manifest surrealizmu\' 1924 r.) t\u0142um. Adam Wa\u017Cyk'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6450689/ello-optimized-8d3c19ae.jpg', alt: 'Obraz przedstawia trzy kszta\u0142ty przypominaj\u0105ce fale w odcieniach be\u017Cu.' })
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Surrealizm to ja.'
      ),
      _react2.default.createElement(
        'p',
        null,
        '~ Salvador Dali (o sobie).'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6450689/ello-optimized-8d3c19ae.jpg', alt: 'Obraz przedstawia trzy kszta\u0142ty przypominaj\u0105ce fale w odcieniach be\u017Cu.' })
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        '(\u2026) wci\u0105\u017C jestem sk\u0142onny uwa\u017Ca\u0107 surrealist\xF3w (\u2026) za stuprocentowych wariat\xF3w.'
      ),
      _react2.default.createElement(
        'p',
        null,
        '~ Zygmunt Freud (po spotkaniu z Salvadorem Dalim) \u0179r\xF3d\u0142o: \u201EPrzegl\u0105d powszechny\u201D, Druk W\u0142. L. Anczyca i Sp\xF3\u0142ki, 1996, s. 347.'
      )
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Surrealizm [moodboard]", "date": "2017-11-02T14:12:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["surrealizm", "surrealism", "nadrealizm", "moodboard", "sztuka", "artysta", "art", "kreacja"] };
var body = exports.body = "<olela-narrative>\nAndré Breton, 'Manifest surrealizmu' (1924 r.), fragmenty:\n</olela-narrative>\n<blockquote>\n<p>Droga wyobraźnio, najbardziej w tobie kocham to,\nże nie przebaczasz.</p>\n</blockquote>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6434565/ello-optimized-6114c15d.jpg\" alt=\"Obraz przedstawia różne elementy i zdjęcia na blado-różowym tle. Widzimy kawałek pizzy, fotografię portretową i zdjęcia obrazów.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6434569/ello-optimized-4f732112.jpg\" alt=\"Obraz przedstawia zdjęcia różnych dzieł sztuki na blado-różowym tle.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6434571/ello-optimized-76db7fec.jpg\" alt=\"Obraz przedstawia różne zdjęcia na blado-różowym tle. Widzimy sukienkę, kapelusz w kształcie buta, czarno-białe fotografie damskich twarzy, obraz.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6434572/ello-optimized-291ac1d4.jpg\" alt=\"Obraz przedstawia różne zdjęcia na blado-różowym tle. Widzimy kobietę w czerwonej sukni, naszyjnik na białym manekinie, obraz, filiżankę.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6434576/ello-optimized-e3632a97.jpg\" alt=\"Obraz przedstawia różne zdjęcia na blado-różowym tle. Widzimy zdjęcia różnych budynków, fotografię, obraz z gołębiem.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6434577/ello-optimized-fba91b4c.jpg\" alt=\"Zdjęcie przedstawia ciemno-brązowe napisy na beżowym tle.\" /></p>\n<blockquote>\n<p>Mógłbym spędzić życie na zachęcaniu wariatów do zwierzeń.\nSą to ludzie nieposzlakowanej uczciwości, których prostoduszność może się równać tylko z moją.\nDla odkrycia Ameryki trzeba było, ażeby Kolumb wybrał się w drogę z kupą wariatów. I spójrzcie, jak to wariactwo wcieliło się w życie i trwa po dzień dzisiejszy.</p>\n</blockquote>\n<blockquote>\n<p>Strach przed obłędem nie zmusi nas do zatrzymania sztandaru wyobraźni w połowie masztu.</p>\n</blockquote>\n<blockquote>\n<p>Jeżeli w głębinach naszego umysłu kryją się dziwne siły, zdolne do pomnażania sił na powierzchni,\nalbo do staczania z nimi zwycięskiej walki, to jak najbardziej warto je schwytać, przede wszystkim schwytać, aby potem,\njeżeli zdołamy, poddać je kontroli naszego umysłu.</p>\n</blockquote>\n<blockquote>\n<p>Umysł człowieka śniącego jest całkowicie zadowolony z tego, co się dzieje. Nie wyłania się niepokojące pytanie,\nco jest, a co nie jest możliwe. Zabijaj, szybuj w powietrzu, kochaj, ile zechcesz. A jeśli umierasz, czy nie masz pewności,\nże powstaniesz z martwych? Pozwól się prowadzić,\ntwoja zwłoka nie zwolni biegu wydarzeń. Nie masz imienia.\nWszystko przychodzi z nieocenioną łatwością.</p>\n</blockquote>\n<blockquote>\n<p>Wierzę w to, że te dwa na pozór tak przeciwstawne sobie stany, jak sen i jawa, w przyszłości stopią się w pewnego rodzaju rzeczywistość absolutną, w nadrealność, jeśli to można tak nazwać. Wyruszam na jej zdobycie, pewien, że jej nie osiągnę,\nale tak mało myślę o swojej śmierci, że jednak po trosze liczę na radość tego osiągnięcia.</p>\n</blockquote>\n<blockquote>\n<p>Surrealizm; Czysty automatyzm psychiczny, który ma służyć do wyrażenia bądź w słowie, bądź w piśmie, bądź innym sposobem, rzeczywistego funkcjonowania myśli.\nDyktowanie myśli wolne od wszelkiej kontroli umysłu, poza wszelkimi względami estetycznymi czy moralnymi. (...)\nSurrealizm opiera się na wierze w nadrzędną rzeczywistość pewnych form skojarzeniowych dotąd lekceważonych,\nwe wszechpotęgę marzenia, w bezinteresowną grę myśli.\nDąży do ostatecznego zniszczenia wszelkich innych mechanizmów psychicznych i zajęcia ich miejsca w rozwiązywaniu podstawowych zagadnień życia.</p>\n</blockquote>\n<blockquote>\n<p>Ci, którzy się poświęcają surrealizmowi, nie mogą go porzucić, kiedy im się podoba. Wszystko wskazuje na to, że surrealizm\ndziała jak narkotyk; podobnie jak narkotyk stwarza pewien stan łaknienia i może pchnąć człowieka do straszliwych wybuchów.</p>\n</blockquote>\n<blockquote>\n<p>Z obrazami surrealistycznymi dzieje się tak samo, jak z obrazami wytwarzanymi przez opium, człowiek ich nie przywołuje,\nale “same się nasuwają spontanicznie, narzucają się przemocą. Nie może się ich pozbyć, bo wola jest bezsilna, i nie panuje już nad władzami umysłu”. (cyt. Baudelaire)</p>\n</blockquote>\n<blockquote>\n<p>Tylko słowo wolność potrafi mnie jeszcze porwać.</p>\n</blockquote>\n<olela-narrative>\n~ André Breton ('Manifest surrealizmu' 1924 r.) tłum. Adam Ważyk\n</olela-narrative>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6450689/ello-optimized-8d3c19ae.jpg\" alt=\"Obraz przedstawia trzy kształty przypominające fale w odcieniach beżu.\" /></p>\n<blockquote>\n<p>Surrealizm to ja.</p>\n<p>~ Salvador Dali (o sobie).</p>\n</blockquote>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6450689/ello-optimized-8d3c19ae.jpg\" alt=\"Obraz przedstawia trzy kształty przypominające fale w odcieniach beżu.\" /></p>\n<blockquote>\n<p>(…) wciąż jestem skłonny uważać surrealistów (…) za stuprocentowych wariatów.</p>\n<p>~ Zygmunt Freud (po spotkaniu z Salvadorem Dalim) Źródło: „Przegląd powszechny”, Druk Wł. L. Anczyca i Spółki, 1996, s. 347.</p>\n</blockquote>\n";
var raw = exports.raw = "\n<olela-narrative>\nAndré Breton, 'Manifest surrealizmu' (1924 r.), fragmenty:\n</olela-narrative>\n\n> Droga wyobraźnio, najbardziej w tobie kocham to, \n> że nie przebaczasz.\n\n![Obraz przedstawia różne elementy i zdjęcia na blado-różowym tle. Widzimy kawałek pizzy, fotografię portretową i zdjęcia obrazów.](https://assets2.ello.co/uploads/asset/attachment/6434565/ello-optimized-6114c15d.jpg)\n![Obraz przedstawia zdjęcia różnych dzieł sztuki na blado-różowym tle.](https://assets0.ello.co/uploads/asset/attachment/6434569/ello-optimized-4f732112.jpg)\n![Obraz przedstawia różne zdjęcia na blado-różowym tle. Widzimy sukienkę, kapelusz w kształcie buta, czarno-białe fotografie damskich twarzy, obraz.](https://assets0.ello.co/uploads/asset/attachment/6434571/ello-optimized-76db7fec.jpg)\n![Obraz przedstawia różne zdjęcia na blado-różowym tle. Widzimy kobietę w czerwonej sukni, naszyjnik na białym manekinie, obraz, filiżankę.](https://assets2.ello.co/uploads/asset/attachment/6434572/ello-optimized-291ac1d4.jpg)\n![Obraz przedstawia różne zdjęcia na blado-różowym tle. Widzimy zdjęcia różnych budynków, fotografię, obraz z gołębiem.](https://assets0.ello.co/uploads/asset/attachment/6434576/ello-optimized-e3632a97.jpg)\n![Zdjęcie przedstawia ciemno-brązowe napisy na beżowym tle.](https://assets2.ello.co/uploads/asset/attachment/6434577/ello-optimized-fba91b4c.jpg)\n\n> Mógłbym spędzić życie na zachęcaniu wariatów do zwierzeń. \n> Są to ludzie nieposzlakowanej uczciwości, których prostoduszność może się równać tylko z moją. \n> Dla odkrycia Ameryki trzeba było, ażeby Kolumb wybrał się w drogę z kupą wariatów. I spójrzcie, jak to wariactwo wcieliło się w życie i trwa po dzień dzisiejszy.\n\n> Strach przed obłędem nie zmusi nas do zatrzymania sztandaru wyobraźni w połowie masztu.\n\n> Jeżeli w głębinach naszego umysłu kryją się dziwne siły, zdolne do pomnażania sił na powierzchni, \n> albo do staczania z nimi zwycięskiej walki, to jak najbardziej warto je schwytać, przede wszystkim schwytać, aby potem, \n> jeżeli zdołamy, poddać je kontroli naszego umysłu.\n\n> Umysł człowieka śniącego jest całkowicie zadowolony z tego, co się dzieje. Nie wyłania się niepokojące pytanie, \n> co jest, a co nie jest możliwe. Zabijaj, szybuj w powietrzu, kochaj, ile zechcesz. A jeśli umierasz, czy nie masz pewności, \n> że powstaniesz z martwych? Pozwól się prowadzić, \n> twoja zwłoka nie zwolni biegu wydarzeń. Nie masz imienia.\n> Wszystko przychodzi z nieocenioną łatwością.\n\n> Wierzę w to, że te dwa na pozór tak przeciwstawne sobie stany, jak sen i jawa, w przyszłości stopią się w pewnego rodzaju rzeczywistość absolutną, w nadrealność, jeśli to można tak nazwać. Wyruszam na jej zdobycie, pewien, że jej nie osiągnę, \n> ale tak mało myślę o swojej śmierci, że jednak po trosze liczę na radość tego osiągnięcia.\n\n> Surrealizm; Czysty automatyzm psychiczny, który ma służyć do wyrażenia bądź w słowie, bądź w piśmie, bądź innym sposobem, rzeczywistego funkcjonowania myśli. \nDyktowanie myśli wolne od wszelkiej kontroli umysłu, poza wszelkimi względami estetycznymi czy moralnymi. (...)\nSurrealizm opiera się na wierze w nadrzędną rzeczywistość pewnych form skojarzeniowych dotąd lekceważonych, \nwe wszechpotęgę marzenia, w bezinteresowną grę myśli. \n> Dąży do ostatecznego zniszczenia wszelkich innych mechanizmów psychicznych i zajęcia ich miejsca w rozwiązywaniu podstawowych zagadnień życia.\n\n> Ci, którzy się poświęcają surrealizmowi, nie mogą go porzucić, kiedy im się podoba. Wszystko wskazuje na to, że surrealizm \n> działa jak narkotyk; podobnie jak narkotyk stwarza pewien stan łaknienia i może pchnąć człowieka do straszliwych wybuchów.\n\n> Z obrazami surrealistycznymi dzieje się tak samo, jak z obrazami wytwarzanymi przez opium, człowiek ich nie przywołuje,\n> ale \"same się nasuwają spontanicznie, narzucają się przemocą. Nie może się ich pozbyć, bo wola jest bezsilna, i nie panuje już nad władzami umysłu\". (cyt. Baudelaire)\n\n>Tylko słowo wolność potrafi mnie jeszcze porwać.\n\n<olela-narrative>\n~ André Breton ('Manifest surrealizmu' 1924 r.) tłum. Adam Ważyk\n</olela-narrative>\n\n![Obraz przedstawia trzy kształty przypominające fale w odcieniach beżu.](https://assets0.ello.co/uploads/asset/attachment/6450689/ello-optimized-8d3c19ae.jpg)\n\n> Surrealizm to ja.\n>\n> ~ Salvador Dali (o sobie).\n\n![Obraz przedstawia trzy kształty przypominające fale w odcieniach beżu.](https://assets0.ello.co/uploads/asset/attachment/6450689/ello-optimized-8d3c19ae.jpg)\n\n> (…) wciąż jestem skłonny uważać surrealistów (…) za stuprocentowych wariatów.\n>\n> ~ Zygmunt Freud (po spotkaniu z Salvadorem Dalim) Źródło: „Przegląd powszechny”, Druk Wł. L. Anczyca i Spółki, 1996, s. 347.\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 81 */
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

var _ContentLimiter = __webpack_require__(3);

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
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6474036/ello-optimized-b7d22d41.jpg', alt: 'Zdj\u0119cie przedstawia kobiet\u0119 ubran\u0105 na bia\u0142o, na bia\u0142ym tle. Kobieta ma szare w\u0142osy, a na ustach ma namalowany czarny kwadrat.' })
    ),
    _react2.default.createElement(
      'olela-narrative',
      null,
      '\u2018Phi! Takie co\u015B to pi\u0119cioletnie dziecko potrafi namalowa\u0107!\u2019 Ty te\u017C s\u0142ysza\u0142e\u015B podobne stwierdzenia w galerii sztuki wsp\xF3\u0142czesnej? Zapewne zastanowi\u0142e\u015B si\u0119, czy to ignorancja, czy niezrozumienie. W moim rozumieniu chodzi o to drugie. Wielu osobom \u2018sztuka\u2019 kojarzy si\u0119 tylko i wy\u0142\u0105cznie z wysoko rozwini\u0119tym warsztatem, niejednokrotnie, a wr\u0119cz przewa\u017Cnie, dotyka ono w\u0105tk\xF3w realistycznych. Je\u015Bli co\u015B jest namalowane dobrze, odwzorowuje rzeczywisto\u015B\u0107 w spos\xF3b dok\u0142adny, to wtedy mo\u017Cna nazwa\u0107 to sztuk\u0105. Problem w tym, \u017Ce podstawowe pytanie jakie powinni\u015Bmy sobie zada\u0107 prze\u0142amuj\u0105c wieki naszych art studies to \u2018Co\u2019, a nie \u2018Jak\u2019. Ach, no i oczywi\u015Bcie najwa\u017Cniejsza kwestia \u2013 zapytaj, czy jeste\u015B got\xF3w zapyta\u0107.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6474732/ello-optimized-780c137a.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia twarzy kobiety, kt\xF3ra ma na ustach namalowany czarny kwadrat. Kobieta ma na jednym zdj\u0119ciu otwarte oczy a na drugim zamkni\u0119te.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Kazimierz Malewicz urodzi\u0142 si\u0119 w 1879 roku w Kijowie. Przez wiele lat pracowa\u0142 nad w\u0142asn\u0105 teori\u0105 sztuki. Szuka\u0142 takiej formy komunikacji, kt\xF3ra by\u0142aby bezpo\u015Brednim wyrazem duchowej natury rzeczywisto\u015Bci. \u2018Czarny kwadrat na bia\u0142ym tle\u2019 po raz pierwszy pokazano w 1915 r. Obraz ten stanowi najmniejszy malarski atom, jednocze\u015Bnie nie odsy\u0142a nas do \u017Cadnego innego obiektu, poza nim samym. Jest sk\u0142adnikiem wszystkiego i wszystkim zarazem. Jego moc oddzia\u0142ywania r\xF3wna jest mocy ikony. Obraz ten jest pierwsz\u0105 pr\xF3b\u0105 uj\u0119cia \u015Bwiata w ramy bezprzedmiotowo\u015Bci. W nast\u0119pstwach, po okresie czarnym przyjdzie czas na okres barwny i bia\u0142y. Szczytowym osi\u0105gni\u0119ciem okresu bia\u0142ego (1918 \u2013 1919 r.), a zarazem punktem gdzie ko\u0144czy i zaczyna si\u0119 suprematyzm jest dzie\u0142o \u2018Bia\u0142y kwadrat na bia\u0142ym tle\u2019. W rozumieniu artysty jest to kres malarstwa. Tu ko\u0144czy si\u0119 poznanie \u2013 idealna czysto\u015B\u0107, nico\u015B\u0107, pustka, bezgraniczna przestrze\u0144, uniwersum, absolut. Jedyn\u0105 form\u0105 artystycznego wyrazu mia\u0142a od tej pory sta\u0107 si\u0119 filozofia.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6474045/ello-optimized-4f16c7c7.jpg', alt: 'Zdj\u0119cie przedstawia twarz kobiety z szarymi w\u0142osami patrz\u0105cej w praw\u0105 stron\u0119. Kobieta ma na ustach namalowany czarny kwadrat.' })
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Nie wystawi\u0142em \xBBpustego kwadratu\xAB, lecz wra\u017Cenie nieprzedmiotowo\u015Bci. Zrozumia\u0142em, \u017Ce \xBBprzedmiot\xAB i [jego] \xBBwyobra\u017Cenie\xAB by\u0142y nies\u0142usznie brane za odzwierciedlenie wra\u017Cenia, i zobaczy\u0142em, jak nieprawdziwy by\u0142 ten \u015Bwiat przedstawie\u0144 i pragnie\u0144. (...) Czarny kwadrat na bia\u0142ym tle by\u0142 pierwsz\u0105 form\u0105 wyra\u017Caj\u0105c\u0105 doznanie nieprzedmiotowo\u015Bci: kwadrat = wra\u017Cenie, bia\u0142e t\u0142o = \xBBnico\u015B\u0107\xAB poza tym wra\u017Ceniem\u201D'
      ),
      _react2.default.createElement(
        'p',
        null,
        '~ (Malewicz Kazimierz 2006, \u015Awiat bezprzedmiotowy, t\u0142um. S. Fija\u0142kowski, S\u0142owo/Obraz Terytoria, Gda\u0144sk: 66, 74)'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wi\u0119c chodzi o wra\u017Cenie z jakim pozostawia nas artysta. Jedynie \u015Bwiat bezprzedmiotowy jest \u015Bwiatem realnym, wolnym od wyobra\u017Ce\u0144, czystym. Sztuka przedstawiaj\u0105ca pe\u0142na jest z\u0142udze\u0144. Abstrakcja jest natomiast \u2018wyrazem czystego doznania\u2019. Kwadraty staj\u0105 si\u0119 no\u015Bnikiem metafizycznych tre\u015Bci.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6475049/ello-optimized-8670ac71.jpg', alt: 'Obraz przedstawia zdj\u0119cie ust pomalowanych na czarno i czarny kwadrat na bia\u0142ym tle z prawej strony.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Suprematyzm wierzy w mo\u017Cliwo\u015B\u0107 dotarcia do Prawdy, do prawdziwej wiedzy. Instrumentem poznawczym czyni Malewicz intuicj\u0119. Tylko ona bowiem pozwala odczu\u0107 jedno\u015B\u0107. \u2018B\xF3g, Dusza, \u017Bycie, Religia, Technika, Sztuka, Nauka, Intelekt, Wizja \u015Bwiata, Praca, Ruch, Przestrze\u0144, Czas = 0\u2019 [1]. Zero w tym wypadku symbolizuje istot\u0119 rzeczywisto\u015Bci, do kt\xF3rej dotrze\u0107 mo\u017Cna tylko poprzez prawd\u0119. W transformacji naszej \u015Bwiadomo\u015Bci na poziomie poznawczym ma pom\xF3c suprematyzm.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6474055/ello-optimized-11c8424b.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia r\xF3\u017Cnej wielko\u015Bci. Na zdj\u0119ciach przedstawiona jest kobieta w bia\u0142ej bluzce z czarnym kwadratem na ustach. Zdj\u0119cie z prawej strony jest mniejsze.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6474060/ello-optimized-c85f9324.jpg', alt: 'Zdj\u0119cie przedstawia portret kobiety w geometrycznymi elementami. Kobieta ma usta pomalowane na czarno, szare w\u0142osy i bia\u0142\u0105 bluzk\u0119. Ca\u0142o\u015B\u0107 w czarnej ramce.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Za pomoc\u0105 nowoczesnej aparatury rentgenowskiej i mikroskop\xF3w ujawniono tajemnic\u0119 obrazu \u2018Czarny kwadrat na bia\u0142ym tle\u2019. Pod tym, co na pierwszy rzut oka wida\u0107 na p\u0142\xF3tnie kryj\u0105 si\u0119 dwie barwne kompozycje. Warstwa umieszczona najni\u017Cej to obraz w kubistycznym klimacie. Na nim natomiast (warstwa po\u015Brodku) znajduje si\u0119 kompozycje protosuprematyczna. Szczerze w\u0105tpi\u0119 w celowo\u015B\u0107 tego zabiegu. Malewicz zapewne, jak ka\u017Cdy artysta, poszukiwa\u0142 w\u0142a\u015Bciwych \u015Brodk\xF3w wyrazu zamalowuj\u0105c nieudane kompozycje. Z do\u015Bwiadczenia wiem, \u017Ce ten zabieg cz\u0119sto stosuj\u0119 si\u0119 z czystej oszcz\u0119dno\u015Bci. My\u015Bl\u0119 jednak, \u017Ce stanowi to warto\u015B\u0107 dodan\u0105 dzie\u0142a. Teoria suprematyzmu w  odniesieniu do warstwowego charakteru nabiera dla mnie dodatkowej mocy przekazu.'
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Za przyczyn\u0105 suprematyzmu sztuka dosz\u0142a do teraz do samej siebie \u2013 do swej czystej, nieutylitarnej formy \u2013 i pozna\u0142a oczywisto\u015B\u0107 bezprzedmiotowego doznania, to w konsekwencji pr\xF3buje ustanowi\u0107 nowy, prawdziwy porz\u0105dek \u015Bwiata oraz nowy \u015Bwiatopogl\u0105d.'
      ),
      _react2.default.createElement(
        'p',
        null,
        '~ (Kazimierz Malewicz, \u015Awiat bezprzedmiotowy, S\u0142owo/Obraz/Terytoria, Gda\u0144sk 2006, s. 98)'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6474062/ello-optimized-5aca4f04.jpg', alt: 'Obraz przedstawia czarne kwadraty na bia\u0142ym tle ustawione obok siebie w linii.' })
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Kazimierz Malewicz, Suprematystyczne zwierciad\u0142o [w:] Andrzej Turowski, Mi\u0119dzy sztuk\u0105 a komun\u0105: teksty awangardy rosyjskiej 1910-1932, Universitas, Krak\xF3w 1998, s. 178'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Korzysta\u0142am z tekst\xF3w:'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Pawe\u0142 Mo\u017Cd\u017Cy\u0144ski \u201EInicjacje i transgresje. Antystrukturalno\u015B\u0107 sztuki XX i XXI wieku w oczach socjologa\u201D, Wydawnictwa Uniwersytetu Warszawskiego, Warszawa 2011 (rozdzia\u0142 pt.: \u201EAbstrakcja\u201D).'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Przemys\u0142aw Choda\u0144 \u201ESuprematyzm Kazimierza Malewicza jako przyk\u0142ad awangardowej utopii\u201D (',
        _react2.default.createElement(
          'a',
          { href: 'http://teksty.bunkier.art.pl/?id=46' },
          'http://teksty.bunkier.art.pl/?id=46'
        ),
        ')'
      ),
      _react2.default.createElement(
        'li',
        null,
        '(',
        _react2.default.createElement(
          'a',
          { href: 'http://rynekisztuka.pl/2015/11/18/dwie-kompozycje-ukryte-pod-czarnym-kwadratem-malewicza/' },
          'rynekisztuka.pl/2015/11/18/dwie-kompozycje-ukryte-pod-czarnym-kwadratem-malewicza/'
        ),
        ')'
      )
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Make-up inspirowany obrazem. 'Czarny_kwadrat_na_białym_tle' by Kazimierz Malewicz", "date": "2017-11-07T13:44:00.000Z", "categories": ["Sztuka Makijażu"], "tags": ["malewicz", "suprematyzm", "kwadrat", "makeup", "makijaż", "dzieło", "obraz", "kreacja", "artysta", "art", "sztuka"] };
var body = exports.body = "<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6474036/ello-optimized-b7d22d41.jpg\" alt=\"Zdjęcie przedstawia kobietę ubraną na biało, na białym tle. Kobieta ma szare włosy, a na ustach ma namalowany czarny kwadrat.\" /></p>\n<olela-narrative>\n‘Phi! Takie coś to pięcioletnie dziecko potrafi namalować!’ Ty też słyszałeś podobne stwierdzenia w galerii sztuki współczesnej? Zapewne zastanowiłeś się, czy to ignorancja, czy niezrozumienie. W moim rozumieniu chodzi o to drugie. Wielu osobom ‘sztuka’ kojarzy się tylko i wyłącznie z wysoko rozwiniętym warsztatem, niejednokrotnie, a wręcz przeważnie, dotyka ono wątków realistycznych. Jeśli coś jest namalowane dobrze, odwzorowuje rzeczywistość w sposób dokładny, to wtedy można nazwać to sztuką. Problem w tym, że podstawowe pytanie jakie powinniśmy sobie zadać przełamując wieki naszych art studies to ‘Co’, a nie ‘Jak’. Ach, no i oczywiście najważniejsza kwestia – zapytaj, czy jesteś gotów zapytać.\n</olela-narrative>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6474732/ello-optimized-780c137a.jpg\" alt=\"Obraz przedstawia dwa zdjęcia twarzy kobiety, która ma na ustach namalowany czarny kwadrat. Kobieta ma na jednym zdjęciu otwarte oczy a na drugim zamknięte.\" /></p>\n<p>Kazimierz Malewicz urodził się w 1879 roku w Kijowie. Przez wiele lat pracował nad własną teorią sztuki. Szukał takiej formy komunikacji, która byłaby bezpośrednim wyrazem duchowej natury rzeczywistości. ‘Czarny kwadrat na białym tle’ po raz pierwszy pokazano w 1915 r. Obraz ten stanowi najmniejszy malarski atom, jednocześnie nie odsyła nas do żadnego innego obiektu, poza nim samym. Jest składnikiem wszystkiego i wszystkim zarazem. Jego moc oddziaływania równa jest mocy ikony. Obraz ten jest pierwszą próbą ujęcia świata w ramy bezprzedmiotowości. W następstwach, po okresie czarnym przyjdzie czas na okres barwny i biały. Szczytowym osiągnięciem okresu białego (1918 – 1919 r.), a zarazem punktem gdzie kończy i zaczyna się suprematyzm jest dzieło ‘Biały kwadrat na białym tle’. W rozumieniu artysty jest to kres malarstwa. Tu kończy się poznanie – idealna czystość, nicość, pustka, bezgraniczna przestrzeń, uniwersum, absolut. Jedyną formą artystycznego wyrazu miała od tej pory stać się filozofia.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6474045/ello-optimized-4f16c7c7.jpg\" alt=\"Zdjęcie przedstawia twarz kobiety z szarymi włosami patrzącej w prawą stronę. Kobieta ma na ustach namalowany czarny kwadrat.\" /></p>\n<blockquote>\n<p>Nie wystawiłem »pustego kwadratu«, lecz wrażenie nieprzedmiotowości. Zrozumiałem, że »przedmiot« i [jego] »wyobrażenie« były niesłusznie brane za\nodzwierciedlenie wrażenia, i zobaczyłem, jak nieprawdziwy był ten świat przedstawień i pragnień. (...)\nCzarny kwadrat na białym tle był pierwszą formą wyrażającą doznanie nieprzedmiotowości: kwadrat = wrażenie,\nbiałe tło = »nicość« poza tym wrażeniem”</p>\n<p>~ (Malewicz Kazimierz 2006, Świat bezprzedmiotowy, tłum. S. Fijałkowski, Słowo/Obraz Terytoria, Gdańsk: 66, 74)</p>\n</blockquote>\n<p>Więc chodzi o wrażenie z jakim pozostawia nas artysta. Jedynie świat bezprzedmiotowy jest światem realnym, wolnym od wyobrażeń, czystym. Sztuka przedstawiająca pełna jest złudzeń. Abstrakcja jest natomiast ‘wyrazem czystego doznania’. Kwadraty stają się nośnikiem metafizycznych treści.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6475049/ello-optimized-8670ac71.jpg\" alt=\"Obraz przedstawia zdjęcie ust pomalowanych na czarno i czarny kwadrat na białym tle z prawej strony.\" /></p>\n<p>Suprematyzm wierzy w możliwość dotarcia do Prawdy, do prawdziwej wiedzy. Instrumentem poznawczym czyni Malewicz intuicję. Tylko ona bowiem pozwala odczuć jedność. ‘Bóg, Dusza, Życie, Religia, Technika, Sztuka, Nauka, Intelekt, Wizja świata, Praca, Ruch, Przestrzeń, Czas = 0’ [1]. Zero w tym wypadku symbolizuje istotę rzeczywistości, do której dotrzeć można tylko poprzez prawdę. W transformacji naszej świadomości na poziomie poznawczym ma pomóc suprematyzm.</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6474055/ello-optimized-11c8424b.jpg\" alt=\"Obraz przedstawia dwa zdjęcia różnej wielkości. Na zdjęciach przedstawiona jest kobieta w białej bluzce z czarnym kwadratem na ustach. Zdjęcie z prawej strony jest mniejsze.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6474060/ello-optimized-c85f9324.jpg\" alt=\"Zdjęcie przedstawia portret kobiety w geometrycznymi elementami. Kobieta ma usta pomalowane na czarno, szare włosy i białą bluzkę. Całość w czarnej ramce.\" /></p>\n<p>Za pomocą nowoczesnej aparatury rentgenowskiej i mikroskopów ujawniono tajemnicę obrazu ‘Czarny kwadrat na białym tle’. Pod tym, co na pierwszy rzut oka widać na płótnie kryją się dwie barwne kompozycje. Warstwa umieszczona najniżej to obraz w kubistycznym klimacie. Na nim natomiast (warstwa pośrodku) znajduje się kompozycje protosuprematyczna. Szczerze wątpię w celowość tego zabiegu. Malewicz zapewne, jak każdy artysta, poszukiwał właściwych środków wyrazu zamalowując nieudane kompozycje. Z doświadczenia wiem, że ten zabieg często stosuję się z czystej oszczędności. Myślę jednak, że stanowi to wartość dodaną dzieła. Teoria suprematyzmu w  odniesieniu do warstwowego charakteru nabiera dla mnie dodatkowej mocy przekazu.</p>\n<blockquote>\n<p>Za przyczyną suprematyzmu sztuka doszła do teraz do samej siebie – do swej czystej, nieutylitarnej formy – i poznała\noczywistość bezprzedmiotowego doznania, to w konsekwencji próbuje ustanowić nowy, prawdziwy porządek świata oraz nowy światopogląd.</p>\n<p>~ (Kazimierz Malewicz, Świat bezprzedmiotowy, Słowo/Obraz/Terytoria, Gdańsk 2006, s. 98)</p>\n</blockquote>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6474062/ello-optimized-5aca4f04.jpg\" alt=\"Obraz przedstawia czarne kwadraty na białym tle ustawione obok siebie w linii.\" /></p>\n<ol>\n<li>Kazimierz Malewicz, Suprematystyczne zwierciadło [w:] Andrzej Turowski, Między sztuką a komuną: teksty awangardy rosyjskiej 1910-1932, Universitas, Kraków 1998, s. 178</li>\n</ol>\n<p>Korzystałam z tekstów:</p>\n<ul>\n<li>Paweł Możdżyński „Inicjacje i transgresje. Antystrukturalność sztuki XX i XXI wieku w oczach socjologa”, Wydawnictwa Uniwersytetu Warszawskiego, Warszawa 2011 (rozdział pt.: „Abstrakcja”).</li>\n<li>Przemysław Chodań „Suprematyzm Kazimierza Malewicza jako przykład awangardowej utopii” (<a href=\"http://teksty.bunkier.art.pl/?id=46\">http://teksty.bunkier.art.pl/?id=46</a>)</li>\n<li>(<a href=\"http://rynekisztuka.pl/2015/11/18/dwie-kompozycje-ukryte-pod-czarnym-kwadratem-malewicza/\">rynekisztuka.pl/2015/11/18/dwie-kompozycje-ukryte-pod-czarnym-kwadratem-malewicza/</a>)</li>\n</ul>\n";
var raw = exports.raw = "\n![Zdjęcie przedstawia kobietę ubraną na biało, na białym tle. Kobieta ma szare włosy, a na ustach ma namalowany czarny kwadrat.](https://assets2.ello.co/uploads/asset/attachment/6474036/ello-optimized-b7d22d41.jpg)\n\n<olela-narrative>\n‘Phi! Takie coś to pięcioletnie dziecko potrafi namalować!’ Ty też słyszałeś podobne stwierdzenia w galerii sztuki współczesnej? Zapewne zastanowiłeś się, czy to ignorancja, czy niezrozumienie. W moim rozumieniu chodzi o to drugie. Wielu osobom ‘sztuka’ kojarzy się tylko i wyłącznie z wysoko rozwiniętym warsztatem, niejednokrotnie, a wręcz przeważnie, dotyka ono wątków realistycznych. Jeśli coś jest namalowane dobrze, odwzorowuje rzeczywistość w sposób dokładny, to wtedy można nazwać to sztuką. Problem w tym, że podstawowe pytanie jakie powinniśmy sobie zadać przełamując wieki naszych art studies to ‘Co’, a nie ‘Jak’. Ach, no i oczywiście najważniejsza kwestia – zapytaj, czy jesteś gotów zapytać.\n</olela-narrative>\n\n![Obraz przedstawia dwa zdjęcia twarzy kobiety, która ma na ustach namalowany czarny kwadrat. Kobieta ma na jednym zdjęciu otwarte oczy a na drugim zamknięte.](https://assets2.ello.co/uploads/asset/attachment/6474732/ello-optimized-780c137a.jpg)\n\nKazimierz Malewicz urodził się w 1879 roku w Kijowie. Przez wiele lat pracował nad własną teorią sztuki. Szukał takiej formy komunikacji, która byłaby bezpośrednim wyrazem duchowej natury rzeczywistości. ‘Czarny kwadrat na białym tle’ po raz pierwszy pokazano w 1915 r. Obraz ten stanowi najmniejszy malarski atom, jednocześnie nie odsyła nas do żadnego innego obiektu, poza nim samym. Jest składnikiem wszystkiego i wszystkim zarazem. Jego moc oddziaływania równa jest mocy ikony. Obraz ten jest pierwszą próbą ujęcia świata w ramy bezprzedmiotowości. W następstwach, po okresie czarnym przyjdzie czas na okres barwny i biały. Szczytowym osiągnięciem okresu białego (1918 – 1919 r.), a zarazem punktem gdzie kończy i zaczyna się suprematyzm jest dzieło ‘Biały kwadrat na białym tle’. W rozumieniu artysty jest to kres malarstwa. Tu kończy się poznanie – idealna czystość, nicość, pustka, bezgraniczna przestrzeń, uniwersum, absolut. Jedyną formą artystycznego wyrazu miała od tej pory stać się filozofia.\n\n![Zdjęcie przedstawia twarz kobiety z szarymi włosami patrzącej w prawą stronę. Kobieta ma na ustach namalowany czarny kwadrat.](https://assets1.ello.co/uploads/asset/attachment/6474045/ello-optimized-4f16c7c7.jpg)\n\n> Nie wystawiłem »pustego kwadratu«, lecz wrażenie nieprzedmiotowości. Zrozumiałem, że »przedmiot« i [jego] »wyobrażenie« były niesłusznie brane za \nodzwierciedlenie wrażenia, i zobaczyłem, jak nieprawdziwy był ten świat przedstawień i pragnień. (...)\n> Czarny kwadrat na białym tle był pierwszą formą wyrażającą doznanie nieprzedmiotowości: kwadrat = wrażenie,\nbiałe tło = »nicość« poza tym wrażeniem”\n>\n> ~ (Malewicz Kazimierz 2006, Świat bezprzedmiotowy, tłum. S. Fijałkowski, Słowo/Obraz Terytoria, Gdańsk: 66, 74)\n\nWięc chodzi o wrażenie z jakim pozostawia nas artysta. Jedynie świat bezprzedmiotowy jest światem realnym, wolnym od wyobrażeń, czystym. Sztuka przedstawiająca pełna jest złudzeń. Abstrakcja jest natomiast ‘wyrazem czystego doznania’. Kwadraty stają się nośnikiem metafizycznych treści.\n\n![Obraz przedstawia zdjęcie ust pomalowanych na czarno i czarny kwadrat na białym tle z prawej strony.](https://assets1.ello.co/uploads/asset/attachment/6475049/ello-optimized-8670ac71.jpg)\n\nSuprematyzm wierzy w możliwość dotarcia do Prawdy, do prawdziwej wiedzy. Instrumentem poznawczym czyni Malewicz intuicję. Tylko ona bowiem pozwala odczuć jedność. ‘Bóg, Dusza, Życie, Religia, Technika, Sztuka, Nauka, Intelekt, Wizja świata, Praca, Ruch, Przestrzeń, Czas = 0’ [1]. Zero w tym wypadku symbolizuje istotę rzeczywistości, do której dotrzeć można tylko poprzez prawdę. W transformacji naszej świadomości na poziomie poznawczym ma pomóc suprematyzm.\n\n![Obraz przedstawia dwa zdjęcia różnej wielkości. Na zdjęciach przedstawiona jest kobieta w białej bluzce z czarnym kwadratem na ustach. Zdjęcie z prawej strony jest mniejsze.](https://assets2.ello.co/uploads/asset/attachment/6474055/ello-optimized-11c8424b.jpg)\n![Zdjęcie przedstawia portret kobiety w geometrycznymi elementami. Kobieta ma usta pomalowane na czarno, szare włosy i białą bluzkę. Całość w czarnej ramce.](https://assets1.ello.co/uploads/asset/attachment/6474060/ello-optimized-c85f9324.jpg)\n\nZa pomocą nowoczesnej aparatury rentgenowskiej i mikroskopów ujawniono tajemnicę obrazu ‘Czarny kwadrat na białym tle’. Pod tym, co na pierwszy rzut oka widać na płótnie kryją się dwie barwne kompozycje. Warstwa umieszczona najniżej to obraz w kubistycznym klimacie. Na nim natomiast (warstwa pośrodku) znajduje się kompozycje protosuprematyczna. Szczerze wątpię w celowość tego zabiegu. Malewicz zapewne, jak każdy artysta, poszukiwał właściwych środków wyrazu zamalowując nieudane kompozycje. Z doświadczenia wiem, że ten zabieg często stosuję się z czystej oszczędności. Myślę jednak, że stanowi to wartość dodaną dzieła. Teoria suprematyzmu w  odniesieniu do warstwowego charakteru nabiera dla mnie dodatkowej mocy przekazu.\n\n> Za przyczyną suprematyzmu sztuka doszła do teraz do samej siebie – do swej czystej, nieutylitarnej formy – i poznała\n> oczywistość bezprzedmiotowego doznania, to w konsekwencji próbuje ustanowić nowy, prawdziwy porządek świata oraz nowy światopogląd.\n>\n> ~ (Kazimierz Malewicz, Świat bezprzedmiotowy, Słowo/Obraz/Terytoria, Gdańsk 2006, s. 98)\n\n\n![Obraz przedstawia czarne kwadraty na białym tle ustawione obok siebie w linii.](https://assets1.ello.co/uploads/asset/attachment/6474062/ello-optimized-5aca4f04.jpg)\n\n1. Kazimierz Malewicz, Suprematystyczne zwierciadło [w:] Andrzej Turowski, Między sztuką a komuną: teksty awangardy rosyjskiej 1910-1932, Universitas, Kraków 1998, s. 178\n\n\nKorzystałam z tekstów:\n\n* Paweł Możdżyński „Inicjacje i transgresje. Antystrukturalność sztuki XX i XXI wieku w oczach socjologa”, Wydawnictwa Uniwersytetu Warszawskiego, Warszawa 2011 (rozdział pt.: „Abstrakcja”).\n* Przemysław Chodań „Suprematyzm Kazimierza Malewicza jako przykład awangardowej utopii” (http://teksty.bunkier.art.pl/?id=46)\n* (rynekisztuka.pl/2015/11/18/dwie-kompozycje-ukryte-pod-czarnym-kwadratem-malewicza/)\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 82 */
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

var _ContentLimiter = __webpack_require__(3);

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
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6479007/ello-optimized-273a25d5.jpg', alt: 'Obraz przedstawia fotografie na szarym tle, widzimy modelki na wybiegu, talerze z daniami, obrazy s\u0142ynnych artyst\xF3w.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6479014/ello-optimized-a08915bf.jpg', alt: 'Obraz przedstawia fotografie na szarym tle z elementami przypominaj\u0105cymi chlapni\u0119cia farby. Widzimy portret kobiety w farbie, sukienk\u0119, zegarek, paznokcie, tatua\u017C.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6479020/ello-optimized-5a140bef.jpg', alt: 'Obraz przedstawia fotografie na szarym tle z elementami przypominaj\u0105cymi chlapni\u0119cia farby. Widzimy obuwie, talerz, tabliczk\u0119 czekolady.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6479025/ello-optimized-a6f32712.jpg', alt: 'Obraz przedstawia fotografie na szarym tle z elementami przypominaj\u0105cymi chlapni\u0119cia farby. Widzimy obraz, modelk\u0119 na wybiegu, artyst\u0119 przy pracy i czarne napisy na dole.' })
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Moje malarstwo to moja egzystencja.'
      ),
      _react2.default.createElement(
        'p',
        null,
        '~ Jackson Pollock'
      )
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Action_Painting [moodboard]", "date": "2017-11-09T18:05:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["action", "painting", "moodboard", "pollock", "art", "artysta", "sztuka"] };
var body = exports.body = "<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6479007/ello-optimized-273a25d5.jpg\" alt=\"Obraz przedstawia fotografie na szarym tle, widzimy modelki na wybiegu, talerze z daniami, obrazy słynnych artystów.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6479014/ello-optimized-a08915bf.jpg\" alt=\"Obraz przedstawia fotografie na szarym tle z elementami przypominającymi chlapnięcia farby. Widzimy portret kobiety w farbie, sukienkę, zegarek, paznokcie, tatuaż.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6479020/ello-optimized-5a140bef.jpg\" alt=\"Obraz przedstawia fotografie na szarym tle z elementami przypominającymi chlapnięcia farby. Widzimy obuwie, talerz, tabliczkę czekolady.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6479025/ello-optimized-a6f32712.jpg\" alt=\"Obraz przedstawia fotografie na szarym tle z elementami przypominającymi chlapnięcia farby. Widzimy obraz, modelkę na wybiegu, artystę przy pracy i czarne napisy na dole.\" /></p>\n<blockquote>\n<p>Moje malarstwo to\nmoja egzystencja.</p>\n<p>~ Jackson Pollock</p>\n</blockquote>\n";
var raw = exports.raw = "\n![Obraz przedstawia fotografie na szarym tle, widzimy modelki na wybiegu, talerze z daniami, obrazy słynnych artystów.](https://assets2.ello.co/uploads/asset/attachment/6479007/ello-optimized-273a25d5.jpg)\n![Obraz przedstawia fotografie na szarym tle z elementami przypominającymi chlapnięcia farby. Widzimy portret kobiety w farbie, sukienkę, zegarek, paznokcie, tatuaż.](https://assets1.ello.co/uploads/asset/attachment/6479014/ello-optimized-a08915bf.jpg)\n![Obraz przedstawia fotografie na szarym tle z elementami przypominającymi chlapnięcia farby. Widzimy obuwie, talerz, tabliczkę czekolady.](https://assets1.ello.co/uploads/asset/attachment/6479020/ello-optimized-5a140bef.jpg)\n![Obraz przedstawia fotografie na szarym tle z elementami przypominającymi chlapnięcia farby. Widzimy obraz, modelkę na wybiegu, artystę przy pracy i czarne napisy na dole.](https://assets2.ello.co/uploads/asset/attachment/6479025/ello-optimized-a6f32712.jpg)\n\n> Moje malarstwo to \n> moja egzystencja.\n>\n> ~ Jackson Pollock";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 83 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'Z t\u0105 ekspozycj\u0105 wi\u0105za\u0142am do\u015B\u0107 du\u017Ce nadzieje. Pablo Picasso na Zamku w Lublinie! Ostatnia wystawa Picassa w tym mie\u015Bcie mia\u0142a miejsce w 1969 roku i na pewno nie by\u0142a tak obszerna jak tegoroczna. Bowiem w 2017 roku mamy w ramach niej okazj\u0119 zobaczy\u0107 ponad 300 dzie\u0142. Wi\u0119kszo\u015B\u0107 z nich prze\u017Cywa sw\xF3j pierwszy raz \u2018oko w oko\u2019 z lubelsk\u0105 publiczno\u015Bci\u0105. Okazy pochodz\u0105ce z prywatnych kolekcji, jak i z pierwszego na \u015Bwiecie, powsta\u0142ego jeszcze za \u017Cycia mistrza, muzeum jemu po\u015Bwi\u0119conemu - Musee Picasso Antibes. \u2018Ekspozycja uka\u017Ce r\xF3\u017Cnorodno\u015B\u0107 temat\xF3w i technik stosowanych przez Picassa\u2019 czytamy na stronie Muzeum Lubelskiego. Czy aby na pewno? Jakie s\u0105 moje wra\u017Cenia po obejrzeniu wystawy przeczytacie w dzisiejszym po\u015Bcie.'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Przestrze\u0144 i \u015Bwiat\u0142o'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wchodzimy na wystaw\u0119 razem z mam\u0105. W wej\u015Bciu wita nas sympatyczna Pani wyja\u015Bniaj\u0105ca gdzie mamy si\u0119 kierowa\u0107 i co znajdziemy na poszczeg\xF3lnych pi\u0119trach. Wspomina tak\u017Ce, \u017Ce zaraz za rogiem czeka na nas mo\u017Cliwo\u015B\u0107 odwzorowania poszczeg\xF3lnych prac Picassa na kalce przy u\u017Cyciu kolorowych kredek. Idziemy zatem. Na pocz\u0105tku \u015Bwiat\u0142o jest nieco przygaszone, co stwarza tajemniczy klimat. Mijamy ceramiczne talerze ozdobione r\u0119k\u0105 artysty, niesamowite kolory przykuwaj\u0105 wzrok. Picasso pozosta\u0142 bardzo p\u0142odnym artyst\u0105 przez ca\u0142e swoje \u017Cycie i dzia\u0142a\u0142 na wielu polach sztuki \u2013 od ceramiki przez rze\u017Ab\u0119, grafik\u0119, rysunek, malarstwo. Znajdujemy k\u0105cik, w kt\xF3rym na pod\u015Bwietlonym stole znajduj\u0105 si\u0119 wydruki prac, obok le\u017C\u0105 kredki i kalki. Przez chwil\u0119 zamieniamy si\u0119 w dzieci i odrysowujemy z precyzj\u0105 i zaanga\u017Cowaniem. Rysunk\xF3w jednak nie zabieramy ze sob\u0105, zostawiamy na p\xF3\u0142ce i idziemy dalej. W kolejnej sali wita nas poka\u017Any zbi\xF3r grafik. G\u0142\xF3wnie s\u0105 to litografie monochromatyczne i barwne, akwaforty oraz akwatinty. Pomimo tego, \u017Ce prace s\u0105 \u015Bwietne, niewiele udaje nam si\u0119 zobaczy\u0107, a wszystko za spraw\u0105 \u015Bwiat\u0142a... Ca\u0142o\u015B\u0107 ekspozycji jest bardzo s\u0142abo o\u015Bwietlona, co zauwa\u017Caj\u0105 tak\u017Ce odwiedzaj\u0105cy obok nas i r\xF3wnie\u017C narzekaj\u0105 na zastan\u0105 sytuacj\u0119. Moja mama z wielk\u0105 dok\u0142adno\u015Bci\u0105 ogl\u0105da \u2018Suit\u0119 Vollarda\u2019, w kt\xF3rej to kr\xF3luj\u0105 w\u0105tki antyczne. Jeste\u015Bmy zmuszone bardzo mocno wyt\u0119\u017Ca\u0107 wzrok, ale pomimo tego fascynuje nas wielokrotnie poruszany przez Picassa temat rodziny cyrkowc\xF3w i \u015Bwiata torreador\xF3w. Prace o wspomnianej tematyce umiejscowione zosta\u0142y po\u015Brodku korytarza na specjalnie skonstruowanych stela\u017Cach przypominaj\u0105cych kubistyczne rze\u017Aby. S\u0105 one r\xF3wnie\u017C wi\u0119kszych format\xF3w (ok. A3, B3) ni\u017C te zawieszone na \u015Bcianach (ok. A5). Fascynacja jednak przemija, kiedy spotykamy si\u0119 z kolejnym utrudnieniem dotycz\u0105cym kontemplacji dzie\u0142. Wszystkie prace prezentowane s\u0105 za szyb\u0105, a co za tym idzie, je\u015Bli odpowiednio wysoko zostan\u0105 one zawieszone, osoby o ni\u017Cszym wzro\u015Bcie zamiast zobaczy\u0107 prac\u0119 dostrzeg\u0105 jedynie refleksy \u015Bwiat\u0142a odbijaj\u0105ce si\u0119 w szkle. Niestety, bardzo zawiod\u0142am si\u0119 na organizacji przestrzennej tej ekspozycji. Wystawa bowiem powinna nie tylko by\u0107 zbiorem prac, ale przede wszystkim przestrzeni\u0105 umo\u017Cliwiaj\u0105c\u0105 odwiedzaj\u0105cym najlepsze do\u015Bwiadczenie owych dzie\u0142. W tym wypadku ta kwesta zosta\u0142a zupe\u0142nie zaniedbana, albo w og\xF3le nie dostrze\u017Cona. Szkoda.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6511870/ello-optimized-8332e89c.jpg', alt: 'Na zdj\u0119ciu widzimy trzyman\u0105 przez kogo\u015B kartk\u0119 papieru z rysunkiem, w tle mocne \u015Bwiat\u0142o.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6511877/ello-optimized-e74c582c.jpg', alt: 'Zdj\u0119cie jest mocno zaciemnione, widzimy d\u0142o\u0144 trzymaj\u0105c\u0105 kubek z kredkami, w tle mocne \u015Bwiat\u0142o.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6511882/ello-optimized-7650857d.jpg', alt: 'Zdj\u0119cie przedstawia kobiet\u0119 z kr\xF3tkimi w\u0142osami ogl\u0105daj\u0105c\u0105 obraz Pabla Picassa.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6511890/ello-optimized-457d8010.jpg', alt: 'Zdj\u0119cie przedstawia jedn\u0105 z grafik znanego artysty Pabla Picassa. Grafika przedstawia portret kobiety.' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Pi\u0119tro II'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Na drugim pi\u0119trze ci\u0105g dalszy. \u015Awiat\u0142o zdaje si\u0119 by\u0107 troch\u0119 mocniejsze. Ciemne \u015Bciany z niewielkich rozmiar\xF3w pracami, kt\xF3re s\u0105 reinterpretacj\u0105 s\u0142ynnego dzie\u0142a hiszpa\u0144skiego malarza Diego Vel\xE1zquez\u2019a \u2018Las Meninas\u2019, czyli \u2018Panny dworskie\u2019. Jest to seria 58 prac, kt\xF3re Pablo Picasso namalowa\u0142 w 1957 r. Znajduj\u0105 si\u0119 obecnie w ',
      _react2.default.createElement(
        'a',
        { href: 'http://www.museupicasso.bcn.cat/' },
        'Museo Picasso'
      ),
      ' Barcelonie i jest to jedyna kompletna seria obraz\xF3w, kt\xF3ra zachowa\u0142a si\u0119 w ca\u0142o\u015Bci. Chwila, chwila. Skoro, prace s\u0105 w Barcelonie, to z czym mamy do czynienia na wystawie, na kt\xF3rej si\u0119 znajdujemy? Ot\xF3\u017C z wydrukami\u2026 Tak, wydruki niewielkich rozmiar\xF3w zosta\u0142y umieszczone w ramkach i powieszone na \u015Bcianie. Niekiedy ukazuj\u0105 one fragmenty, zbli\u017Cenia, detale poszczeg\xF3lnych prac z cyklu. Drugie pi\u0119tro przesz\u0142y\u015Bmy zdecydowanie szybciej od pierwszego.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6511885/ello-optimized-795df6ec.jpg', alt: 'Zdj\u0119cie przedstawia rysunek kobiety podpieraj\u0105cej g\u0142ow\u0119 r\u0119k\u0105.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6511896/ello-optimized-fea2288d.jpg', alt: 'Zdj\u0119cie przedstawia dwie prace wykonane w technice graficznej, powieszone na czarnej \u015Bcianie.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6511900/ello-optimized-0e903f20.jpg', alt: 'Zdj\u0119cie przedstawia seri\u0119 siedmiu prac wykonanych w technice graficznej, zawieszonych na bia\u0142ej \u015Bcianie.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6511904/ello-optimized-9f75a68a.jpg', alt: 'Zdj\u0119cie przedstawia trzy rysunki oprawione w ramki, na kt\xF3rych widzimy ludzi graj\u0105cych na instrumentach, cz\u0142owieka z bykiem i byka.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6511905/ello-optimized-4503451a.jpg', alt: 'Zdj\u0119cie przedstawia prac\u0119 znanego artysty Pabla Picassa zawieszon\u0105 na czarnej \u015Bcianie.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6511910/ello-optimized-380747e1.jpg', alt: 'Zdj\u0119cie przedstawia trzy rysunki znanego artysty Pabla Picassa. Rysunki maj\u0105 charakter abstrakcyjny.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6511913/ello-optimized-1ccf30c0.jpg', alt: 'Zdj\u0119cie przedstawia otwart\u0105 ksi\u0119g\u0119 z tekstem i rysunkiem w \u015Brodku.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6511915/ello-optimized-36de745d.jpg', alt: 'Zdj\u0119cie przedstawia dwa rysunki znanego artysty Pabla Picassa. Rysunki s\u0105 oprawione w ramki i maj\u0105 charakter abstrakcyjny.' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Pikasy'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Zdecydowanie jedna z ciekawszych cz\u0119\u015Bci ekspozycji. W gablotach znajdziemy tu porcelanowe figurki z \u0106mielowa, figurki projektowane przez ',
      _react2.default.createElement(
        'a',
        { href: 'http://www.iwp.com.pl/figurki_sprzedaz_galeria' },
        'IWP'
      ),
      ' przedstawiaj\u0105ce g\u0142\xF3wnie zwierz\u0119ta i ludzi o uproszczonych kszta\u0142tach, jednak niesamowicie oddaj\u0105ce charakter postaci (szczeg\xF3lnie wpad\u0142 mi w oko indyk). Wzory inspirowane tw\xF3rczo\u015Bci\u0105 Picassa, oraz inne cuda lat 60tych. Moja mama jest mi\u0142o\u015Bniczk\u0105 polskiego designu i jego kolekcjonerk\u0105, dlatego od razu pozna\u0142a komplety z zak\u0142ad\xF3w w Chodzie\u017Cy, Wa\u0142brzycha, czy pruszkowski porcelit. Ca\u0142kiem nie\u017Ale bawi\u0142am si\u0119 wymy\u015Blaj\u0105c miejsca na owe okazy w moim domu. Cieszy\u0142o mnie to, \u017Ce mimo tego, \u017Ce Picasso odwiedzi\u0142 Polsk\u0119 tylko raz, potrafili\u015Bmy z\u0142o\u017Cy\u0107 mu ho\u0142d w tak wspaniale tw\xF3rczy spos\xF3b.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6511919/ello-optimized-6572a6dd.jpg', alt: 'Zdj\u0119cie przedstawia plakat powieszony na czarnej \u015Bcianie. Plakat przedstawia go\u0142\u0119bia, widzimy kolor niebieski i \u017C\xF3\u0142ty akcent.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6511923/ello-optimized-4342ffc2.jpg', alt: 'Zdj\u0119cie przedstawia seri\u0119 pi\u0119ciu prac znanego artysty Pabla Picassa zawieszonych na czarnej \u015Bcianie. Prace przedstawiaj\u0105 proste formy.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6511888/ello-optimized-4503c7e3.jpg', alt: 'Zdj\u0119cie przedstawia prac\u0119 znanego artysty Pabla Picassa. Praca wykonana jest w graficznej technice, widzimy postaci i ekspresyjny czerwony kolor.' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Wnioski ko\u0144cowe'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Niestety wysz\u0142am z tej wystawy zawiedziona. By\u0107 mo\u017Ce szum, kt\xF3ry powsta\u0142 na d\u0142ugo przed jej otwarciem zwiastowa\u0142 w moim rozumieniu co\u015B o wiele lepszego. No c\xF3\u017C. Nie spotka\u0142am rozmaito\u015Bci dzie\u0142 Picassa (spodziewa\u0142am si\u0119 chocia\u017C jednego obrazu), a wydruki prac w ramkach dope\u0142ni\u0142y czar\u0119 rozczarowania. Owszem, zawsze warto zobaczy\u0107 na \u017Cywo prace tak wybitnego artysty (dodam tylko, \u017Ce wi\u0119kszo\u015B\u0107 prezentowanych tam odbitek to odbitki nieautorskie), jednak to nie one przyczyni\u0142y si\u0119 do mojej opinii. W tym wypadku chodzi g\u0142\xF3wnie o przestrze\u0144 wystawiennicz\u0105, \u015Bwiat\u0142o, spos\xF3b rozmieszczenia prac. Zdecydowanie nie jest to wystawa, na kt\xF3r\u0105 chcia\u0142abym wr\xF3ci\u0107. Podsumowuj\u0105c:'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6511925/ello-optimized-469d64bb.jpg', alt: 'Zdj\u0119cie przedstawia rysunek, widzimy czarn\u0105 zaokr\u0105glon\u0105 kresk\u0119 i kropk\u0119 na bia\u0142ym tle.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Wystawa: Pablo_Picasso – wizerunek wielokrotny", "date": "2017-11-13T18:32:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["wystawa", "exhibition", "picasso", "lublin", "recenzja", "artysta", "art", "sztuka", "kreacja", "grafika"] };
var body = exports.body = "<p>Z tą ekspozycją wiązałam dość duże nadzieje. Pablo Picasso na Zamku w Lublinie! Ostatnia wystawa Picassa w tym mieście miała miejsce w 1969 roku i na pewno nie była tak obszerna jak tegoroczna. Bowiem w 2017 roku mamy w ramach niej okazję zobaczyć ponad 300 dzieł. Większość z nich przeżywa swój pierwszy raz ‘oko w oko’ z lubelską publicznością. Okazy pochodzące z prywatnych kolekcji, jak i z pierwszego na świecie, powstałego jeszcze za życia mistrza, muzeum jemu poświęconemu - Musee Picasso Antibes. ‘Ekspozycja ukaże różnorodność tematów i technik stosowanych przez Picassa’ czytamy na stronie Muzeum Lubelskiego. Czy aby na pewno? Jakie są moje wrażenia po obejrzeniu wystawy przeczytacie w dzisiejszym poście.</p>\n<h2>Przestrzeń i światło</h2>\n<p>Wchodzimy na wystawę razem z mamą. W wejściu wita nas sympatyczna Pani wyjaśniająca gdzie mamy się kierować i co znajdziemy na poszczególnych piętrach. Wspomina także, że zaraz za rogiem czeka na nas możliwość odwzorowania poszczególnych prac Picassa na kalce przy użyciu kolorowych kredek. Idziemy zatem. Na początku światło jest nieco przygaszone, co stwarza tajemniczy klimat. Mijamy ceramiczne talerze ozdobione ręką artysty, niesamowite kolory przykuwają wzrok. Picasso pozostał bardzo płodnym artystą przez całe swoje życie i działał na wielu polach sztuki – od ceramiki przez rzeźbę, grafikę, rysunek, malarstwo. Znajdujemy kącik, w którym na podświetlonym stole znajdują się wydruki prac, obok leżą kredki i kalki. Przez chwilę zamieniamy się w dzieci i odrysowujemy z precyzją i zaangażowaniem. Rysunków jednak nie zabieramy ze sobą, zostawiamy na półce i idziemy dalej.\nW kolejnej sali wita nas pokaźny zbiór grafik. Głównie są to litografie monochromatyczne i barwne, akwaforty oraz akwatinty. Pomimo tego, że prace są świetne, niewiele udaje nam się zobaczyć, a wszystko za sprawą światła... Całość ekspozycji jest bardzo słabo oświetlona, co zauważają także odwiedzający obok nas i również narzekają na zastaną sytuację. Moja mama z wielką dokładnością ogląda ‘Suitę Vollarda’, w której to królują wątki antyczne. Jesteśmy zmuszone bardzo mocno wytężać wzrok, ale pomimo tego fascynuje nas wielokrotnie poruszany przez Picassa temat rodziny cyrkowców i świata torreadorów. Prace o wspomnianej tematyce umiejscowione zostały pośrodku korytarza na specjalnie skonstruowanych stelażach przypominających kubistyczne rzeźby. Są one również większych formatów (ok. A3, B3) niż te zawieszone na ścianach (ok. A5). Fascynacja jednak przemija, kiedy spotykamy się z kolejnym utrudnieniem dotyczącym kontemplacji dzieł. Wszystkie prace prezentowane są za szybą, a co za tym idzie, jeśli odpowiednio wysoko zostaną one zawieszone, osoby o niższym wzroście zamiast zobaczyć pracę dostrzegą jedynie refleksy światła odbijające się w szkle. Niestety, bardzo zawiodłam się na organizacji przestrzennej tej ekspozycji. Wystawa bowiem powinna nie tylko być zbiorem prac, ale przede wszystkim przestrzenią umożliwiającą odwiedzającym najlepsze doświadczenie owych dzieł. W tym wypadku ta kwesta została zupełnie zaniedbana, albo w ogóle nie dostrzeżona. Szkoda.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6511870/ello-optimized-8332e89c.jpg\" alt=\"Na zdjęciu widzimy trzymaną przez kogoś kartkę papieru z rysunkiem, w tle mocne światło.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6511877/ello-optimized-e74c582c.jpg\" alt=\"Zdjęcie jest mocno zaciemnione, widzimy dłoń trzymającą kubek z kredkami, w tle mocne światło.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6511882/ello-optimized-7650857d.jpg\" alt=\"Zdjęcie przedstawia kobietę z krótkimi włosami oglądającą obraz Pabla Picassa.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6511890/ello-optimized-457d8010.jpg\" alt=\"Zdjęcie przedstawia jedną z grafik znanego artysty Pabla Picassa. Grafika przedstawia portret kobiety.\" /></p>\n<h2>Piętro II</h2>\n<p>Na drugim piętrze ciąg dalszy. Światło zdaje się być trochę mocniejsze. Ciemne ściany z niewielkich rozmiarów pracami, które są reinterpretacją słynnego dzieła hiszpańskiego malarza Diego Velázquez’a ‘Las Meninas’, czyli ‘Panny dworskie’. Jest to seria 58 prac, które Pablo Picasso namalował w 1957 r. Znajdują się obecnie w <a href=\"http://www.museupicasso.bcn.cat/\">Museo Picasso</a> Barcelonie i jest to jedyna kompletna seria obrazów, która zachowała się w całości. Chwila, chwila. Skoro, prace są w Barcelonie, to z czym mamy do czynienia na wystawie, na której się znajdujemy? Otóż z wydrukami… Tak, wydruki niewielkich rozmiarów zostały umieszczone w ramkach i powieszone na ścianie. Niekiedy ukazują one fragmenty, zbliżenia, detale poszczególnych prac z cyklu. Drugie piętro przeszłyśmy zdecydowanie szybciej od pierwszego.</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6511885/ello-optimized-795df6ec.jpg\" alt=\"Zdjęcie przedstawia rysunek kobiety podpierającej głowę ręką.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6511896/ello-optimized-fea2288d.jpg\" alt=\"Zdjęcie przedstawia dwie prace wykonane w technice graficznej, powieszone na czarnej ścianie.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6511900/ello-optimized-0e903f20.jpg\" alt=\"Zdjęcie przedstawia serię siedmiu prac wykonanych w technice graficznej, zawieszonych na białej ścianie.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6511904/ello-optimized-9f75a68a.jpg\" alt=\"Zdjęcie przedstawia trzy rysunki oprawione w ramki, na których widzimy ludzi grających na instrumentach, człowieka z bykiem i byka.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6511905/ello-optimized-4503451a.jpg\" alt=\"Zdjęcie przedstawia pracę znanego artysty Pabla Picassa zawieszoną na czarnej ścianie.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6511910/ello-optimized-380747e1.jpg\" alt=\"Zdjęcie przedstawia trzy rysunki znanego artysty Pabla Picassa. Rysunki mają charakter abstrakcyjny.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6511913/ello-optimized-1ccf30c0.jpg\" alt=\"Zdjęcie przedstawia otwartą księgę z tekstem i rysunkiem w środku.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6511915/ello-optimized-36de745d.jpg\" alt=\"Zdjęcie przedstawia dwa rysunki znanego artysty Pabla Picassa. Rysunki są oprawione w ramki i mają charakter abstrakcyjny.\" /></p>\n<h2>Pikasy</h2>\n<p>Zdecydowanie jedna z ciekawszych części ekspozycji. W gablotach znajdziemy tu porcelanowe figurki z Ćmielowa, figurki projektowane przez <a href=\"http://www.iwp.com.pl/figurki_sprzedaz_galeria\">IWP</a> przedstawiające głównie zwierzęta i ludzi o uproszczonych kształtach, jednak niesamowicie oddające charakter postaci (szczególnie wpadł mi w oko indyk). Wzory inspirowane twórczością Picassa, oraz inne cuda lat 60tych. Moja mama jest miłośniczką polskiego designu i jego kolekcjonerką, dlatego od razu poznała komplety z zakładów w Chodzieży, Wałbrzycha, czy pruszkowski porcelit. Całkiem nieźle bawiłam się wymyślając miejsca na owe okazy w moim domu. Cieszyło mnie to, że mimo tego, że Picasso odwiedził Polskę tylko raz, potrafiliśmy złożyć mu hołd w tak wspaniale twórczy sposób.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6511919/ello-optimized-6572a6dd.jpg\" alt=\"Zdjęcie przedstawia plakat powieszony na czarnej ścianie. Plakat przedstawia gołębia, widzimy kolor niebieski i żółty akcent.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6511923/ello-optimized-4342ffc2.jpg\" alt=\"Zdjęcie przedstawia serię pięciu prac znanego artysty Pabla Picassa zawieszonych na czarnej ścianie. Prace przedstawiają proste formy.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6511888/ello-optimized-4503c7e3.jpg\" alt=\"Zdjęcie przedstawia pracę znanego artysty Pabla Picassa. Praca wykonana jest w graficznej technice, widzimy postaci i ekspresyjny czerwony kolor.\" /></p>\n<h2>Wnioski końcowe</h2>\n<p>Niestety wyszłam z tej wystawy zawiedziona. Być może szum, który powstał na długo przed jej otwarciem zwiastował w moim rozumieniu coś o wiele lepszego. No cóż. Nie spotkałam rozmaitości dzieł Picassa (spodziewałam się chociaż jednego obrazu), a wydruki prac w ramkach dopełniły czarę rozczarowania. Owszem, zawsze warto zobaczyć na żywo prace tak wybitnego artysty (dodam tylko, że większość prezentowanych tam odbitek to odbitki nieautorskie), jednak to nie one przyczyniły się do mojej opinii. W tym wypadku chodzi głównie o przestrzeń wystawienniczą, światło, sposób rozmieszczenia prac. Zdecydowanie nie jest to wystawa, na którą chciałabym wrócić. Podsumowując:</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6511925/ello-optimized-469d64bb.jpg\" alt=\"Zdjęcie przedstawia rysunek, widzimy czarną zaokrągloną kreskę i kropkę na białym tle.\" /></p>\n";
var raw = exports.raw = "\nZ tą ekspozycją wiązałam dość duże nadzieje. Pablo Picasso na Zamku w Lublinie! Ostatnia wystawa Picassa w tym mieście miała miejsce w 1969 roku i na pewno nie była tak obszerna jak tegoroczna. Bowiem w 2017 roku mamy w ramach niej okazję zobaczyć ponad 300 dzieł. Większość z nich przeżywa swój pierwszy raz ‘oko w oko’ z lubelską publicznością. Okazy pochodzące z prywatnych kolekcji, jak i z pierwszego na świecie, powstałego jeszcze za życia mistrza, muzeum jemu poświęconemu - Musee Picasso Antibes. ‘Ekspozycja ukaże różnorodność tematów i technik stosowanych przez Picassa’ czytamy na stronie Muzeum Lubelskiego. Czy aby na pewno? Jakie są moje wrażenia po obejrzeniu wystawy przeczytacie w dzisiejszym poście.\n\n## Przestrzeń i światło\nWchodzimy na wystawę razem z mamą. W wejściu wita nas sympatyczna Pani wyjaśniająca gdzie mamy się kierować i co znajdziemy na poszczególnych piętrach. Wspomina także, że zaraz za rogiem czeka na nas możliwość odwzorowania poszczególnych prac Picassa na kalce przy użyciu kolorowych kredek. Idziemy zatem. Na początku światło jest nieco przygaszone, co stwarza tajemniczy klimat. Mijamy ceramiczne talerze ozdobione ręką artysty, niesamowite kolory przykuwają wzrok. Picasso pozostał bardzo płodnym artystą przez całe swoje życie i działał na wielu polach sztuki – od ceramiki przez rzeźbę, grafikę, rysunek, malarstwo. Znajdujemy kącik, w którym na podświetlonym stole znajdują się wydruki prac, obok leżą kredki i kalki. Przez chwilę zamieniamy się w dzieci i odrysowujemy z precyzją i zaangażowaniem. Rysunków jednak nie zabieramy ze sobą, zostawiamy na półce i idziemy dalej.\nW kolejnej sali wita nas pokaźny zbiór grafik. Głównie są to litografie monochromatyczne i barwne, akwaforty oraz akwatinty. Pomimo tego, że prace są świetne, niewiele udaje nam się zobaczyć, a wszystko za sprawą światła… Całość ekspozycji jest bardzo słabo oświetlona, co zauważają także odwiedzający obok nas i również narzekają na zastaną sytuację. Moja mama z wielką dokładnością ogląda ‘Suitę Vollarda’, w której to królują wątki antyczne. Jesteśmy zmuszone bardzo mocno wytężać wzrok, ale pomimo tego fascynuje nas wielokrotnie poruszany przez Picassa temat rodziny cyrkowców i świata torreadorów. Prace o wspomnianej tematyce umiejscowione zostały pośrodku korytarza na specjalnie skonstruowanych stelażach przypominających kubistyczne rzeźby. Są one również większych formatów (ok. A3, B3) niż te zawieszone na ścianach (ok. A5). Fascynacja jednak przemija, kiedy spotykamy się z kolejnym utrudnieniem dotyczącym kontemplacji dzieł. Wszystkie prace prezentowane są za szybą, a co za tym idzie, jeśli odpowiednio wysoko zostaną one zawieszone, osoby o niższym wzroście zamiast zobaczyć pracę dostrzegą jedynie refleksy światła odbijające się w szkle. Niestety, bardzo zawiodłam się na organizacji przestrzennej tej ekspozycji. Wystawa bowiem powinna nie tylko być zbiorem prac, ale przede wszystkim przestrzenią umożliwiającą odwiedzającym najlepsze doświadczenie owych dzieł. W tym wypadku ta kwesta została zupełnie zaniedbana, albo w ogóle nie dostrzeżona. Szkoda.\n\n![Na zdjęciu widzimy trzymaną przez kogoś kartkę papieru z rysunkiem, w tle mocne światło.](https://assets1.ello.co/uploads/asset/attachment/6511870/ello-optimized-8332e89c.jpg)\n![Zdjęcie jest mocno zaciemnione, widzimy dłoń trzymającą kubek z kredkami, w tle mocne światło.](https://assets1.ello.co/uploads/asset/attachment/6511877/ello-optimized-e74c582c.jpg)\n![Zdjęcie przedstawia kobietę z krótkimi włosami oglądającą obraz Pabla Picassa.](https://assets0.ello.co/uploads/asset/attachment/6511882/ello-optimized-7650857d.jpg)\n![Zdjęcie przedstawia jedną z grafik znanego artysty Pabla Picassa. Grafika przedstawia portret kobiety.](https://assets2.ello.co/uploads/asset/attachment/6511890/ello-optimized-457d8010.jpg)\n\n## Piętro II\nNa drugim piętrze ciąg dalszy. Światło zdaje się być trochę mocniejsze. Ciemne ściany z niewielkich rozmiarów pracami, które są reinterpretacją słynnego dzieła hiszpańskiego malarza Diego Velázquez’a ‘Las Meninas’, czyli ‘Panny dworskie’. Jest to seria 58 prac, które Pablo Picasso namalował w 1957 r. Znajdują się obecnie w [Museo Picasso](http://www.museupicasso.bcn.cat/) Barcelonie i jest to jedyna kompletna seria obrazów, która zachowała się w całości. Chwila, chwila. Skoro, prace są w Barcelonie, to z czym mamy do czynienia na wystawie, na której się znajdujemy? Otóż z wydrukami… Tak, wydruki niewielkich rozmiarów zostały umieszczone w ramkach i powieszone na ścianie. Niekiedy ukazują one fragmenty, zbliżenia, detale poszczególnych prac z cyklu. Drugie piętro przeszłyśmy zdecydowanie szybciej od pierwszego.\n\n![Zdjęcie przedstawia rysunek kobiety podpierającej głowę ręką.](https://assets2.ello.co/uploads/asset/attachment/6511885/ello-optimized-795df6ec.jpg)\n![Zdjęcie przedstawia dwie prace wykonane w technice graficznej, powieszone na czarnej ścianie.](https://assets1.ello.co/uploads/asset/attachment/6511896/ello-optimized-fea2288d.jpg)\n![Zdjęcie przedstawia serię siedmiu prac wykonanych w technice graficznej, zawieszonych na białej ścianie.](https://assets1.ello.co/uploads/asset/attachment/6511900/ello-optimized-0e903f20.jpg)\n![Zdjęcie przedstawia trzy rysunki oprawione w ramki, na których widzimy ludzi grających na instrumentach, człowieka z bykiem i byka.](https://assets1.ello.co/uploads/asset/attachment/6511904/ello-optimized-9f75a68a.jpg)\n![Zdjęcie przedstawia pracę znanego artysty Pabla Picassa zawieszoną na czarnej ścianie.](https://assets1.ello.co/uploads/asset/attachment/6511905/ello-optimized-4503451a.jpg)\n![Zdjęcie przedstawia trzy rysunki znanego artysty Pabla Picassa. Rysunki mają charakter abstrakcyjny.](https://assets1.ello.co/uploads/asset/attachment/6511910/ello-optimized-380747e1.jpg)\n![Zdjęcie przedstawia otwartą księgę z tekstem i rysunkiem w środku.](https://assets0.ello.co/uploads/asset/attachment/6511913/ello-optimized-1ccf30c0.jpg)\n![Zdjęcie przedstawia dwa rysunki znanego artysty Pabla Picassa. Rysunki są oprawione w ramki i mają charakter abstrakcyjny.](https://assets2.ello.co/uploads/asset/attachment/6511915/ello-optimized-36de745d.jpg)\n\n## Pikasy\nZdecydowanie jedna z ciekawszych części ekspozycji. W gablotach znajdziemy tu porcelanowe figurki z Ćmielowa, figurki projektowane przez [IWP](http://www.iwp.com.pl/figurki_sprzedaz_galeria) przedstawiające głównie zwierzęta i ludzi o uproszczonych kształtach, jednak niesamowicie oddające charakter postaci (szczególnie wpadł mi w oko indyk). Wzory inspirowane twórczością Picassa, oraz inne cuda lat 60tych. Moja mama jest miłośniczką polskiego designu i jego kolekcjonerką, dlatego od razu poznała komplety z zakładów w Chodzieży, Wałbrzycha, czy pruszkowski porcelit. Całkiem nieźle bawiłam się wymyślając miejsca na owe okazy w moim domu. Cieszyło mnie to, że mimo tego, że Picasso odwiedził Polskę tylko raz, potrafiliśmy złożyć mu hołd w tak wspaniale twórczy sposób.\n\n![Zdjęcie przedstawia plakat powieszony na czarnej ścianie. Plakat przedstawia gołębia, widzimy kolor niebieski i żółty akcent.](https://assets0.ello.co/uploads/asset/attachment/6511919/ello-optimized-6572a6dd.jpg)\n![Zdjęcie przedstawia serię pięciu prac znanego artysty Pabla Picassa zawieszonych na czarnej ścianie. Prace przedstawiają proste formy.](https://assets2.ello.co/uploads/asset/attachment/6511923/ello-optimized-4342ffc2.jpg)\n![Zdjęcie przedstawia pracę znanego artysty Pabla Picassa. Praca wykonana jest w graficznej technice, widzimy postaci i ekspresyjny czerwony kolor.](https://assets0.ello.co/uploads/asset/attachment/6511888/ello-optimized-4503c7e3.jpg)\n\n## Wnioski końcowe\nNiestety wyszłam z tej wystawy zawiedziona. Być może szum, który powstał na długo przed jej otwarciem zwiastował w moim rozumieniu coś o wiele lepszego. No cóż. Nie spotkałam rozmaitości dzieł Picassa (spodziewałam się chociaż jednego obrazu), a wydruki prac w ramkach dopełniły czarę rozczarowania. Owszem, zawsze warto zobaczyć na żywo prace tak wybitnego artysty (dodam tylko, że większość prezentowanych tam odbitek to odbitki nieautorskie), jednak to nie one przyczyniły się do mojej opinii. W tym wypadku chodzi głównie o przestrzeń wystawienniczą, światło, sposób rozmieszczenia prac. Zdecydowanie nie jest to wystawa, na którą chciałabym wrócić. Podsumowując:\n\n![Zdjęcie przedstawia rysunek, widzimy czarną zaokrągloną kreskę i kropkę na białym tle.](https://assets2.ello.co/uploads/asset/attachment/6511925/ello-optimized-469d64bb.jpg)";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 84 */
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

var _ContentLimiter = __webpack_require__(3);

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
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6535912/ello-optimized-1ea87931.jpg', alt: 'Obraz przedstawia fotografie na niebieskim tle. Widzimy torebk\u0119, obrazy znanego artysty, modelki w sukniach.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6535917/ello-optimized-9b34446d.jpg', alt: 'Obraz przedstawia fotografie na niebieskim tle. Widzimy oko z mocnym makija\u017Cem, dwa talerze z potrawami sfotografowane z lotu ptaka, obrazy znanego artysty, trzy modelki.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6535922/ello-optimized-70b26f57.jpg', alt: 'Obraz przedstawia fotografie na niebieskim tle. Widzimy rze\u017Ab\u0119 baletnicy, kobiet\u0119 pozuj\u0105c\u0105 na wz\xF3r rze\u017Aby, obrazy znanego artysty, talerz z potraw\u0105, fotografie przedstawiaj\u0105c\u0105 siedz\u0105c\u0105 kobiet\u0119 z torebk\u0105.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6535926/ello-optimized-96d43544.jpg', alt: 'Obraz przedstawia trzy fotografie obraz\xF3w znanych artyst\xF3w oraz napisy, wszystko na niebieskim tle.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Impresjonizm [moodboard]", "date": "2017-11-16T16:36:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["impresjonizm", "impressionism", "moodboard", "monet", "artist", "artysta", "sztuka"], "description": "Impressionism moodboard by Olela Krawczyk" };
var body = exports.body = "<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6535912/ello-optimized-1ea87931.jpg\" alt=\"Obraz przedstawia fotografie na niebieskim tle. Widzimy torebkę, obrazy znanego artysty, modelki w sukniach.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6535917/ello-optimized-9b34446d.jpg\" alt=\"Obraz przedstawia fotografie na niebieskim tle. Widzimy oko z mocnym makijażem, dwa talerze z potrawami sfotografowane z lotu ptaka, obrazy znanego artysty, trzy modelki.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6535922/ello-optimized-70b26f57.jpg\" alt=\"Obraz przedstawia fotografie na niebieskim tle. Widzimy rzeźbę baletnicy, kobietę pozującą na wzór rzeźby, obrazy znanego artysty, talerz z potrawą, fotografie przedstawiającą siedzącą kobietę z torebką.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6535926/ello-optimized-96d43544.jpg\" alt=\"Obraz przedstawia trzy fotografie obrazów znanych artystów oraz napisy, wszystko na niebieskim tle.\" /></p>\n";
var raw = exports.raw = "\n![Obraz przedstawia fotografie na niebieskim tle. Widzimy torebkę, obrazy znanego artysty, modelki w sukniach.](https://assets2.ello.co/uploads/asset/attachment/6535912/ello-optimized-1ea87931.jpg)\n![Obraz przedstawia fotografie na niebieskim tle. Widzimy oko z mocnym makijażem, dwa talerze z potrawami sfotografowane z lotu ptaka, obrazy znanego artysty, trzy modelki.](https://assets0.ello.co/uploads/asset/attachment/6535917/ello-optimized-9b34446d.jpg)\n![Obraz przedstawia fotografie na niebieskim tle. Widzimy rzeźbę baletnicy, kobietę pozującą na wzór rzeźby, obrazy znanego artysty, talerz z potrawą, fotografie przedstawiającą siedzącą kobietę z torebką.](https://assets0.ello.co/uploads/asset/attachment/6535922/ello-optimized-70b26f57.jpg)\n![Obraz przedstawia trzy fotografie obrazów znanych artystów oraz napisy, wszystko na niebieskim tle.](https://assets1.ello.co/uploads/asset/attachment/6535926/ello-optimized-96d43544.jpg)\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 85 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'Czy wiecie, jak niewiele trzeba aby odmieni\u0107 stare ubranie? Pisz\u0105c \u2018niewiele\u2019 mam na my\u015Bli niewiele wysi\u0142ku, niewiele czasu i oczywi\u015Bcie niewiele pieni\u0119dzy. Jedyne czego potrzeba to inspiracji, a te akurat znajdziemy bez problemu ogl\u0105daj\u0105c zdj\u0119cia w internecie, czy przechadzaj\u0105c si\u0119 po sklepach. Wiadomo te\u017C, jak to jest z ciuchami \u2013 stare si\u0119 nudz\u0105, ale je\u015Bli po\u015Bwi\u0119cimy im odrobin\u0119 uwagi i w\u0142\u0105czymy swoj\u0105 kreatywno\u015B\u0107, odmienimy je i pokochamy na nowo. Zatem do dzie\u0142a artystki!'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://ello-direct-uploads.s3.amazonaws.com/uploads/f1be1d0e-8b70-454f-be77-72c5831c97e0/ello-8ee042b5-0e7f-4c70-b90a-5c2de358430e.jpeg', alt: 'Zdj\u0119cie przedstawia m\u0142od\u0105 kobiet\u0119 na niebieskim tle. Kobieta ubrana jest w koszul\u0119 z paskiem, ma czerwone usta i szare w\u0142osy, a przez \u015Brodek zdj\u0119cia przechodzi czarna linia.' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Winter Trends 2017'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Sieciowe sklepy serwuj\u0105 nam tzw. \u201Eszybk\u0105 mod\u0119\u201D. To znaczy, \u017Ce odpowiadaj\u0105 na g\u0142\xF3wne tendencje pojawiaj\u0105ce si\u0119 na wybiegach i wprowadzaj\u0105 modele, kt\xF3re przypominaj\u0105 nam kreacje znanych projektant\xF3w, a my mo\u017Cemy naby\u0107 je za nisk\u0105 cen\u0105. Tej zimy w sklepach typu Stradivarius, Zara, Mango znalaz\u0142am sporo podobie\u0144stw. Oto g\u0142\xF3wne trendy i jednocze\u015Bnie Must Have\u2019y zimy 2017 r.:'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Per\u0142y. Wszechobecne, zaw\u0142aszczaj\u0105ce prawie ka\u017Cdy skrawek materia\u0142u. S\u0105 na jeansach, bluzach, swetrach, bluzkach, sukienkach, w r\xF3\u017Cnych rozmiarach i kolorach. Dodaj\u0105 ubraniu romantyczny, imprezowy charakter (w ko\u0144cu sylwester tu\u017C, tu\u017C!).'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Futro. Futrzane kamizelki, kurtki, obszycia kaptur\xF3w, ale r\xF3wnie\u017C obszycia bluz przy r\u0119kawach, ko\u0142nierzykach.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Beret. Taki w stylu francuskim. Sk\xF3rzany, we\u0142niany, noszony lekko na bok lub zsuni\u0119ty na ty\u0142 glowy.'
      ),
      _react2.default.createElement(
        'li',
        null,
        '\u2018Wielka czapka\u2019. Wygl\u0105da jakby by\u0142a wyj\u0119ta z wi\u0119kszego \u015Bwiata, o grubym splocie, cz\u0119sto kolorowa i z pomponem.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Krata. Tak, to zdecydowanie pattern nr 1. Znajdziemy j\u0105 na p\u0142aszczach, spodniach, kamizelkach. Stylizowa\u0107 kratk\u0119 mo\u017Cemy na milion sposob\xF3w \u2013 od elegancji po sport.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Butelkowa ziele\u0144. Przepi\u0119kny kolor g\u0142\u0119bokiego szmaragdu. Wygl\u0105da super w total look\u2019u lub jako pojedynczy akcent.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Wymienia\u0107 mo\u017Cna jeszcze wiele: Oversizowe kurtki puchowe, bardzo wysokie kozaki (si\u0119gaj\u0105ce wr\u0119cz po\u0142owy uda), swetry z wielkim golfem, jednak chcia\u0142am skupi\u0107 si\u0119 na tych trendach, kt\xF3re w bardzo \u0142atwy spos\xF3b mo\u017Cemy wcieli\u0107 w nasz\u0105 garderob\u0119 niekoniecznie kupuj\u0105c nowe rzeczy. Zobaczcie sami, co uda\u0142o mi si\u0119 wyczarowa\u0107.'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6573107/ello-optimized-c2a4b0f9.jpg', alt: 'Zdj\u0119cie przedstawia kobiet\u0119 w koszuli z paskiem na niebieskim tle. Kobieta patrzy do g\xF3ry, ma siwe w\u0142osy i czerwone usta, a przez \u015Brodek zdj\u0119cia przebiega czarna linia.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6573109/ello-optimized-60b8b9ad.jpg', alt: 'Zdj\u0119cie przedstawia kobiet\u0119 w koszuli z paskiem na niebieskim tle. Kobieta przekrzywia g\u0142ow\u0119 w lew\u0105 stron\u0119, ma szare w\u0142osy i czerwone usta, a przez \u015Brodek zdj\u0119cia przebiega czarna linia.' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Koszula z dw\xF3ch koszul + per\u0142y'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Ostatnio m\xF3j ch\u0142opak robi\u0142 porz\u0105dki w swojej szafie i znalaz\u0142 kilka niepotrzebnych koszul. Po\u0142o\u017Cy\u0142 je na mojej p\xF3\u0142ce z my\u015Bl\u0105, \u017Ce zostan\u0105 przeze mnie wykorzystane w pracowni jako ubranie robocze. Przele\u017Ca\u0142y tam troch\u0119 czasu, dop\xF3ki nie spojrza\u0142am na nie w kreatywny spos\xF3b. Oto, co zrobi\u0107, aby zyska\u0107 now\u0105 koszul\u0119 z dw\xF3ch starych koszul:'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Przymierz i zadecyduj, kt\xF3ra z koszul b\u0119dzie Twoim \u2018body\u2019, a kt\xF3ra r\u0119kawami. Istotny jest tutaj kr\xF3j, ale te\u017C kolor i wz\xF3r.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'W obu koszulach utnij r\u0119kawy tu\u017C za lini\u0105 szwu.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Wywr\xF3\u0107 swoje body i r\u0119kawy na lew\u0105 stron\u0119 i zszyj szew przy szwie, tak, by nitka nie by\u0142a widoczna po w\u0142a\u015Bciwej stronie.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Kup woreczek pere\u0142ek w pasmanterii (koszt ok. 5 z\u0142) i przyszyj do koszuli w r\xF3\u017Cnych miejscach. Mo\u017Cesz przyszy\u0107 je na r\u0119kawach, przy ko\u0142nierzyku lub zast\u0105pi\u0107 nimi guziki. Voil\xE0! Prawda, \u017Ce proste? Mi ca\u0142a robota zaj\u0119\u0142a dwa wieczory przy okazji ogl\u0105dania ulubionego serialu :).'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6573330/ello-optimized-a4f6ddd7.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia, z lewej strony widzimy fragment materia\u0142u z koralikami, a z prawej kobiet\u0119 o czerwonych ustach ubran\u0105 w koszul\u0119 z paskiem.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6573331/ello-optimized-ba4ef117.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia, z lewej widzimy fragment materia\u0142u, a z prawej kobiet\u0119 o siwych, d\u0142ugich w\u0142osach odwr\xF3con\u0105 ty\u0142em i trzymaj\u0105c\u0105 pasek z napisem.' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Per\u0142owa czapa i beret'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Czapki i berety oferowane przez sieci\xF3wki to koszt od ok. 50 z\u0142 do 150 z\u0142. Materia\u0142 z kt\xF3rych te nakrycia g\u0142owy s\u0105 wykonane to cz\u0119sto akryl, poliester, wiskoza, a aplikacje nie s\u0105 przyszywane, tylko naklejane. Zawsze zale\u017Cy mi na jako\u015Bci materia\u0142\xF3w, kt\xF3re nosz\u0119, dlatego nie mog\u0142am zdecydowa\u0107 si\u0119 na \u017Cadn\u0105 zaproponowan\u0105 akrylow\u0105 opcj\u0119. Jednak na tyle spodoba\u0142 mi si\u0119 trend beretu i pere\u0142, \u017Ce postanowi\u0142am zosta\u0107 bereciar\u0105 po swojemu. We\u0142niany, doskona\u0142ej jako\u015Bci beret kupi\u0142am na targu za 20 z\u0142. (mo\u017Cna si\u0119 targowa\u0107, a co!), a pere\u0142ki, jak ju\u017C wspomina\u0142am, to koszt ok. 5 z\u0142 za 50 sztuk. Ca\u0142o\u015B\u0107 wynios\u0142a mnie zatem 25 z\u0142. A efekt ciep\u0142y, wytrzyma\u0142y i przyjemnie modny.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6573112/ello-optimized-a662d1a3.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia r\xF3\u017Cnej wielko\u015Bci. Z lewej strony widzimy kobiet\u0119 z r\xF3\u017Cowymi ustami, siwymi w\u0142osami i czarn\u0105 czapk\u0105, kt\xF3ra zas\u0142ania jej oczy. Z prawej strony widzimy zbli\u017Cenie na czapk\u0119.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6573116/ello-optimized-8d89fded.jpg', alt: 'Zdj\u0119cie przedstawia portret kobiety w czarnej czapce. Kobieta ma szare w\u0142osy, r\xF3\u017Cowe usta i u\u015Bmiecha si\u0119. Ca\u0142o\u015B\u0107 na niebieskim tle.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6575280/ello-optimized-097d7025.jpg', alt: 'Obraz podzielony jest na dwie cz\u0119\u015Bci, z lewej strony widzimy du\u017Ce zdj\u0119cie kobiety w czarnym berecie na niebieskim tle, a z prawej mniejsze zdj\u0119cie beretu i fragmentu twarzy kobiety.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Na czapce widzicie jeszcze agrafk\u0119 kupion\u0105 za 6 z\u0142 w pasmanterii. Czapk\u0119 kupi\u0142am rok temu w h&m, bo by\u0142a jedyn\u0105 w pe\u0142ni bawe\u0142nian\u0105 czapk\u0105 jak\u0105 wtedy znalaz\u0142am.'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Satynowe sznur\xF3wki'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6573125/ello-optimized-8bb0c604.jpg', alt: 'Obraz przedstawia zdj\u0119cia but\xF3w. Z lewej strony widzimy jednego czarnego buta z niebieskimi sznur\xF3wkami i w niebieskiej ramce, a z prawej par\u0119 but\xF3w.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wst\u0105\u017Ckowe sznur\xF3wki akurat nie \u0142api\u0105 si\u0119 w tegoroczne trendy, ale to najprostszy mo\u017Cliwy spos\xF3b na odmian\u0119 but\xF3w. Wystarczy kupi\u0107 odpowiedniej d\u0142ugo\u015Bci wst\u0105\u017Cki w pasmanterii. Do wyboru macie setki (dos\u0142ownie!) propozycji kolorystycznych i materia\u0142owych. Mog\u0105 by\u0107 niebieskie satynowe, czerwone aksamitne, ta\u015Bmy plecione, rypsowe, g\u0142adkie, we wzory itd. itd. Wybierz odpowiedni\u0105 dla swojej osobowo\u015Bci, modelu but\xF3w i innych ubra\u0144, do kt\xF3rych zak\u0142ada\u0107 b\u0119dziesz \u2018odpimpowane\u2019 buty. Czasami lubi\u0119 te\u017C nosi\u0107 w jednym bucie inny kolor ni\u017C w drugim. Oryginalnie, artystycznie i z humorem \u2013 na pewno zwr\xF3cisz na siebie uwag\u0119!'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6573120/ello-optimized-fdcfd45b.jpg', alt: 'Zdj\u0119cie przedstawia czarne sk\xF3rzane buty z niebieskimi sznur\xF3wkami na jasnym tle.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "DIY 1. Edycja zimowa", "date": "2017-11-22T11:10:00.000Z", "categories": ["Sztuka Ubioru"], "tags": ["diy", "fashion", "moda", "sztuka", "stylizacja", "kreacja", "trendy", "zima", "2017"] };
var body = exports.body = "<olela-narrative>\nCzy wiecie, jak niewiele trzeba aby odmienić stare ubranie? Pisząc ‘niewiele’ mam na myśli niewiele wysiłku, niewiele czasu i oczywiście niewiele pieniędzy. Jedyne czego potrzeba to inspiracji, a te akurat znajdziemy bez problemu oglądając zdjęcia w internecie, czy przechadzając się po sklepach. Wiadomo też, jak to jest z ciuchami – stare się nudzą, ale jeśli poświęcimy im odrobinę uwagi i włączymy swoją kreatywność, odmienimy je i pokochamy na nowo. Zatem do dzieła artystki!\n</olela-narrative>\n<p><img src=\"https://ello-direct-uploads.s3.amazonaws.com/uploads/f1be1d0e-8b70-454f-be77-72c5831c97e0/ello-8ee042b5-0e7f-4c70-b90a-5c2de358430e.jpeg\" alt=\"Zdjęcie przedstawia młodą kobietę na niebieskim tle. Kobieta ubrana jest w koszulę z paskiem, ma czerwone usta i szare włosy, a przez środek zdjęcia przechodzi czarna linia.\" /></p>\n<h2>Winter Trends 2017</h2>\n<p>Sieciowe sklepy serwują nam tzw. „szybką modę”. To znaczy, że odpowiadają na główne tendencje pojawiające się na wybiegach i wprowadzają modele, które przypominają nam kreacje znanych projektantów, a my możemy nabyć je za niską ceną. Tej zimy w sklepach typu Stradivarius, Zara, Mango znalazłam sporo podobieństw. Oto główne trendy i jednocześnie Must Have’y zimy 2017 r.:</p>\n<ol>\n<li>Perły. Wszechobecne, zawłaszczające prawie każdy skrawek materiału. Są na jeansach, bluzach, swetrach, bluzkach, sukienkach, w różnych rozmiarach i kolorach. Dodają ubraniu romantyczny, imprezowy charakter (w końcu sylwester tuż, tuż!).</li>\n<li>Futro. Futrzane kamizelki, kurtki, obszycia kapturów, ale również obszycia bluz przy rękawach, kołnierzykach.</li>\n<li>Beret. Taki w stylu francuskim. Skórzany, wełniany, noszony lekko na bok lub zsunięty na tył glowy.</li>\n<li>‘Wielka czapka’. Wygląda jakby była wyjęta z większego świata, o grubym splocie, często kolorowa i z pomponem.</li>\n<li>Krata. Tak, to zdecydowanie pattern nr 1. Znajdziemy ją na płaszczach, spodniach, kamizelkach. Stylizować kratkę możemy na milion sposobów – od elegancji po sport.</li>\n<li>Butelkowa zieleń. Przepiękny kolor głębokiego szmaragdu. Wygląda super w total look’u lub jako pojedynczy akcent.</li>\n<li>Wymieniać można jeszcze wiele: Oversizowe kurtki puchowe, bardzo wysokie kozaki (sięgające wręcz połowy uda), swetry z wielkim golfem, jednak chciałam skupić się na tych trendach, które w bardzo łatwy sposób możemy wcielić w naszą garderobę niekoniecznie kupując nowe rzeczy. Zobaczcie sami, co udało mi się wyczarować.</li>\n</ol>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6573107/ello-optimized-c2a4b0f9.jpg\" alt=\"Zdjęcie przedstawia kobietę w koszuli z paskiem na niebieskim tle. Kobieta patrzy do góry, ma siwe włosy i czerwone usta, a przez środek zdjęcia przebiega czarna linia.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6573109/ello-optimized-60b8b9ad.jpg\" alt=\"Zdjęcie przedstawia kobietę w koszuli z paskiem na niebieskim tle. Kobieta przekrzywia głowę w lewą stronę, ma szare włosy i czerwone usta, a przez środek zdjęcia przebiega czarna linia.\" /></p>\n<h2>Koszula z dwóch koszul + perły</h2>\n<p>Ostatnio mój chłopak robił porządki w swojej szafie i znalazł kilka niepotrzebnych koszul. Położył je na mojej półce z myślą, że zostaną przeze mnie wykorzystane w pracowni jako ubranie robocze. Przeleżały tam trochę czasu, dopóki nie spojrzałam na nie w kreatywny sposób. Oto, co zrobić, aby zyskać nową koszulę z dwóch starych koszul:</p>\n<ol>\n<li>Przymierz i zadecyduj, która z koszul będzie Twoim ‘body’, a która rękawami. Istotny jest tutaj krój, ale też kolor i wzór.</li>\n<li>W obu koszulach utnij rękawy tuż za linią szwu.</li>\n<li>Wywróć swoje body i rękawy na lewą stronę i zszyj szew przy szwie, tak, by nitka nie była widoczna po właściwej stronie.</li>\n<li>Kup woreczek perełek w pasmanterii (koszt ok. 5 zł) i przyszyj do koszuli w różnych miejscach. Możesz przyszyć je na rękawach, przy kołnierzyku lub zastąpić nimi guziki.\nVoilà! Prawda, że proste? Mi cała robota zajęła dwa wieczory przy okazji oglądania ulubionego serialu :).</li>\n</ol>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6573330/ello-optimized-a4f6ddd7.jpg\" alt=\"Obraz przedstawia dwa zdjęcia, z lewej strony widzimy fragment materiału z koralikami, a z prawej kobietę o czerwonych ustach ubraną w koszulę z paskiem.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6573331/ello-optimized-ba4ef117.jpg\" alt=\"Obraz przedstawia dwa zdjęcia, z lewej widzimy fragment materiału, a z prawej kobietę o siwych, długich włosach odwróconą tyłem i trzymającą pasek z napisem.\" /></p>\n<h2>Perłowa czapa i beret</h2>\n<p>Czapki i berety oferowane przez sieciówki to koszt od ok. 50 zł do 150 zł. Materiał z których te nakrycia głowy są wykonane to często akryl, poliester, wiskoza, a aplikacje nie są przyszywane, tylko naklejane. Zawsze zależy mi na jakości materiałów, które noszę, dlatego nie mogłam zdecydować się na żadną zaproponowaną akrylową opcję. Jednak na tyle spodobał mi się trend beretu i pereł, że postanowiłam zostać bereciarą po swojemu. Wełniany, doskonałej jakości beret kupiłam na targu za 20 zł. (można się targować, a co!), a perełki, jak już wspominałam, to koszt ok. 5 zł za 50 sztuk. Całość wyniosła mnie zatem 25 zł. A efekt ciepły, wytrzymały i przyjemnie modny.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6573112/ello-optimized-a662d1a3.jpg\" alt=\"Obraz przedstawia dwa zdjęcia różnej wielkości. Z lewej strony widzimy kobietę z różowymi ustami, siwymi włosami i czarną czapką, która zasłania jej oczy. Z prawej strony widzimy zbliżenie na czapkę.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6573116/ello-optimized-8d89fded.jpg\" alt=\"Zdjęcie przedstawia portret kobiety w czarnej czapce. Kobieta ma szare włosy, różowe usta i uśmiecha się. Całość na niebieskim tle.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6575280/ello-optimized-097d7025.jpg\" alt=\"Obraz podzielony jest na dwie części, z lewej strony widzimy duże zdjęcie kobiety w czarnym berecie na niebieskim tle, a z prawej mniejsze zdjęcie beretu i fragmentu twarzy kobiety.\" /></p>\n<p>Na czapce widzicie jeszcze agrafkę kupioną za 6 zł w pasmanterii. Czapkę kupiłam rok temu w h&amp;m, bo była jedyną w pełni bawełnianą czapką jaką wtedy znalazłam.</p>\n<h2>Satynowe sznurówki</h2>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6573125/ello-optimized-8bb0c604.jpg\" alt=\"Obraz przedstawia zdjęcia butów. Z lewej strony widzimy jednego czarnego buta z niebieskimi sznurówkami i w niebieskiej ramce, a z prawej parę butów.\" /></p>\n<p>Wstążkowe sznurówki akurat nie łapią się w tegoroczne trendy, ale to najprostszy możliwy sposób na odmianę butów. Wystarczy kupić odpowiedniej długości wstążki w pasmanterii. Do wyboru macie setki (dosłownie!) propozycji kolorystycznych i materiałowych. Mogą być niebieskie satynowe, czerwone aksamitne, taśmy plecione, rypsowe, gładkie, we wzory itd. itd. Wybierz odpowiednią dla swojej osobowości, modelu butów i innych ubrań, do których zakładać będziesz ‘odpimpowane’ buty. Czasami lubię też nosić w jednym bucie inny kolor niż w drugim. Oryginalnie, artystycznie i z humorem – na pewno zwrócisz na siebie uwagę!</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6573120/ello-optimized-fdcfd45b.jpg\" alt=\"Zdjęcie przedstawia czarne skórzane buty z niebieskimi sznurówkami na jasnym tle.\" /></p>\n";
var raw = exports.raw = "\n<olela-narrative>\nCzy wiecie, jak niewiele trzeba aby odmienić stare ubranie? Pisząc ‘niewiele’ mam na myśli niewiele wysiłku, niewiele czasu i oczywiście niewiele pieniędzy. Jedyne czego potrzeba to inspiracji, a te akurat znajdziemy bez problemu oglądając zdjęcia w internecie, czy przechadzając się po sklepach. Wiadomo też, jak to jest z ciuchami – stare się nudzą, ale jeśli poświęcimy im odrobinę uwagi i włączymy swoją kreatywność, odmienimy je i pokochamy na nowo. Zatem do dzieła artystki!\n</olela-narrative>\n\n![Zdjęcie przedstawia młodą kobietę na niebieskim tle. Kobieta ubrana jest w koszulę z paskiem, ma czerwone usta i szare włosy, a przez środek zdjęcia przechodzi czarna linia.](https://ello-direct-uploads.s3.amazonaws.com/uploads/f1be1d0e-8b70-454f-be77-72c5831c97e0/ello-8ee042b5-0e7f-4c70-b90a-5c2de358430e.jpeg)\n\n## Winter Trends 2017\n\nSieciowe sklepy serwują nam tzw. „szybką modę”. To znaczy, że odpowiadają na główne tendencje pojawiające się na wybiegach i wprowadzają modele, które przypominają nam kreacje znanych projektantów, a my możemy nabyć je za niską ceną. Tej zimy w sklepach typu Stradivarius, Zara, Mango znalazłam sporo podobieństw. Oto główne trendy i jednocześnie Must Have’y zimy 2017 r.:\n\n1. Perły. Wszechobecne, zawłaszczające prawie każdy skrawek materiału. Są na jeansach, bluzach, swetrach, bluzkach, sukienkach, w różnych rozmiarach i kolorach. Dodają ubraniu romantyczny, imprezowy charakter (w końcu sylwester tuż, tuż!).\n2. Futro. Futrzane kamizelki, kurtki, obszycia kapturów, ale również obszycia bluz przy rękawach, kołnierzykach.\n3. Beret. Taki w stylu francuskim. Skórzany, wełniany, noszony lekko na bok lub zsunięty na tył glowy.\n4. ‘Wielka czapka’. Wygląda jakby była wyjęta z większego świata, o grubym splocie, często kolorowa i z pomponem.\n5. Krata. Tak, to zdecydowanie pattern nr 1. Znajdziemy ją na płaszczach, spodniach, kamizelkach. Stylizować kratkę możemy na milion sposobów – od elegancji po sport.\n6. Butelkowa zieleń. Przepiękny kolor głębokiego szmaragdu. Wygląda super w total look’u lub jako pojedynczy akcent. \n7. Wymieniać można jeszcze wiele: Oversizowe kurtki puchowe, bardzo wysokie kozaki (sięgające wręcz połowy uda), swetry z wielkim golfem, jednak chciałam skupić się na tych trendach, które w bardzo łatwy sposób możemy wcielić w naszą garderobę niekoniecznie kupując nowe rzeczy. Zobaczcie sami, co udało mi się wyczarować.\n\n![Zdjęcie przedstawia kobietę w koszuli z paskiem na niebieskim tle. Kobieta patrzy do góry, ma siwe włosy i czerwone usta, a przez środek zdjęcia przebiega czarna linia.](https://assets0.ello.co/uploads/asset/attachment/6573107/ello-optimized-c2a4b0f9.jpg)\n![Zdjęcie przedstawia kobietę w koszuli z paskiem na niebieskim tle. Kobieta przekrzywia głowę w lewą stronę, ma szare włosy i czerwone usta, a przez środek zdjęcia przebiega czarna linia.](https://assets0.ello.co/uploads/asset/attachment/6573109/ello-optimized-60b8b9ad.jpg)\n\n## Koszula z dwóch koszul + perły \n\nOstatnio mój chłopak robił porządki w swojej szafie i znalazł kilka niepotrzebnych koszul. Położył je na mojej półce z myślą, że zostaną przeze mnie wykorzystane w pracowni jako ubranie robocze. Przeleżały tam trochę czasu, dopóki nie spojrzałam na nie w kreatywny sposób. Oto, co zrobić, aby zyskać nową koszulę z dwóch starych koszul:\n1. Przymierz i zadecyduj, która z koszul będzie Twoim ‘body’, a która rękawami. Istotny jest tutaj krój, ale też kolor i wzór.\n2. W obu koszulach utnij rękawy tuż za linią szwu.\n3. Wywróć swoje body i rękawy na lewą stronę i zszyj szew przy szwie, tak, by nitka nie była widoczna po właściwej stronie.\n4. Kup woreczek perełek w pasmanterii (koszt ok. 5 zł) i przyszyj do koszuli w różnych miejscach. Możesz przyszyć je na rękawach, przy kołnierzyku lub zastąpić nimi guziki.\nVoilà! Prawda, że proste? Mi cała robota zajęła dwa wieczory przy okazji oglądania ulubionego serialu :).\n\n![Obraz przedstawia dwa zdjęcia, z lewej strony widzimy fragment materiału z koralikami, a z prawej kobietę o czerwonych ustach ubraną w koszulę z paskiem.](https://assets0.ello.co/uploads/asset/attachment/6573330/ello-optimized-a4f6ddd7.jpg)\n![Obraz przedstawia dwa zdjęcia, z lewej widzimy fragment materiału, a z prawej kobietę o siwych, długich włosach odwróconą tyłem i trzymającą pasek z napisem.](https://assets1.ello.co/uploads/asset/attachment/6573331/ello-optimized-ba4ef117.jpg)\n\n## Perłowa czapa i beret\n\nCzapki i berety oferowane przez sieciówki to koszt od ok. 50 zł do 150 zł. Materiał z których te nakrycia głowy są wykonane to często akryl, poliester, wiskoza, a aplikacje nie są przyszywane, tylko naklejane. Zawsze zależy mi na jakości materiałów, które noszę, dlatego nie mogłam zdecydować się na żadną zaproponowaną akrylową opcję. Jednak na tyle spodobał mi się trend beretu i pereł, że postanowiłam zostać bereciarą po swojemu. Wełniany, doskonałej jakości beret kupiłam na targu za 20 zł. (można się targować, a co!), a perełki, jak już wspominałam, to koszt ok. 5 zł za 50 sztuk. Całość wyniosła mnie zatem 25 zł. A efekt ciepły, wytrzymały i przyjemnie modny.\n\n![Obraz przedstawia dwa zdjęcia różnej wielkości. Z lewej strony widzimy kobietę z różowymi ustami, siwymi włosami i czarną czapką, która zasłania jej oczy. Z prawej strony widzimy zbliżenie na czapkę.](https://assets0.ello.co/uploads/asset/attachment/6573112/ello-optimized-a662d1a3.jpg)\n![Zdjęcie przedstawia portret kobiety w czarnej czapce. Kobieta ma szare włosy, różowe usta i uśmiecha się. Całość na niebieskim tle.](https://assets1.ello.co/uploads/asset/attachment/6573116/ello-optimized-8d89fded.jpg)\n![Obraz podzielony jest na dwie części, z lewej strony widzimy duże zdjęcie kobiety w czarnym berecie na niebieskim tle, a z prawej mniejsze zdjęcie beretu i fragmentu twarzy kobiety.](https://assets1.ello.co/uploads/asset/attachment/6575280/ello-optimized-097d7025.jpg)\n\nNa czapce widzicie jeszcze agrafkę kupioną za 6 zł w pasmanterii. Czapkę kupiłam rok temu w h&m, bo była jedyną w pełni bawełnianą czapką jaką wtedy znalazłam.\n\n## Satynowe sznurówki\n\n![Obraz przedstawia zdjęcia butów. Z lewej strony widzimy jednego czarnego buta z niebieskimi sznurówkami i w niebieskiej ramce, a z prawej parę butów.](https://assets2.ello.co/uploads/asset/attachment/6573125/ello-optimized-8bb0c604.jpg)\n\nWstążkowe sznurówki akurat nie łapią się w tegoroczne trendy, ale to najprostszy możliwy sposób na odmianę butów. Wystarczy kupić odpowiedniej długości wstążki w pasmanterii. Do wyboru macie setki (dosłownie!) propozycji kolorystycznych i materiałowych. Mogą być niebieskie satynowe, czerwone aksamitne, taśmy plecione, rypsowe, gładkie, we wzory itd. itd. Wybierz odpowiednią dla swojej osobowości, modelu butów i innych ubrań, do których zakładać będziesz 'odpimpowane' buty. Czasami lubię też nosić w jednym bucie inny kolor niż w drugim. Oryginalnie, artystycznie i z humorem – na pewno zwrócisz na siebie uwagę!\n\n![Zdjęcie przedstawia czarne skórzane buty z niebieskimi sznurówkami na jasnym tle.](https://assets1.ello.co/uploads/asset/attachment/6573120/ello-optimized-fdcfd45b.jpg)\n\n\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 86 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'Kiedy patrzysz na obraz budzi on w Tobie emocje. Jedne p\u0142\xF3tna nios\u0105 ze sob\u0105 smutek, namawiaj\u0105 do nostalgii, inne ciesz\u0105 si\u0119 razem z Tob\u0105, wnosz\u0105c w \u017Cycie kolor. Przy p\u0142\xF3tnach Salvadora \u015Bni\u0142am koszmary. Mia\u0142am wra\u017Cenie, \u017Ce ca\u0142a rzeczywisto\u015B\u0107 i czas rozp\u0142ywaj\u0105 si\u0119 niczym karmelowy chupa-chups w piekarniku nagrzanym do 180\xB0C . Max Ernst ni\xF3s\u0142 ze sob\u0105 widmo apokalipsy. Krajobrazy zbudowane z pumeksu w ciemnych barwach prowadz\u0105 do \u015Bwiata zaprzysz\u0142ego, gdzie ludzkie formy \u017Cycia to niezwyk\u0142a rzadko\u015B\u0107. Zupe\u0142nie inaczej jest z Mir\xF3. On jest malarzem u\u015Bmiechu. W jego dzie\u0142ach znajduj\u0119 niewinn\u0105 rado\u015B\u0107. Z ka\u017Cdym razem gdy zerkam na obraz spotykam si\u0119 z dzieckiem o duszy stulatka. Tym razem te\u017C \u015Bni\u0119, ale z tego snu nie chc\u0119 si\u0119 wybudzi\u0107.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6623239/ello-optimized-f916976a.jpg', alt: 'Zdj\u0119cie przedstawia portret m\u0142odej kobiety w artystycznym makija\u017Cu i siwych w\u0142osach oraz abstrakcyjny czarno-niebieski kszta\u0142t.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Joan Mir\xF3 urodzi\u0142 si\u0119 20-tego kwietnia 1893 r. w Barcelonie. Kszta\u0142ci\u0142 si\u0119 w kierunku biznesu, jednocze\u015Bnie ucz\u0119szczaj\u0105c na lekcje sztuki w La Lonja\u2019s Escuela Superior de Artes Industriales y Bellas Artes. Po trzech latach nauki obj\u0105\u0142 stanowisko urz\u0119dnika, by zaraz potem przej\u015B\u0107 za\u0142amanie nerwowe, po kt\xF3rym na dobre porzuci\u0142 biznes i wznowi\u0142 studia artystyczne. W latach 1912-1915  kszta\u0142ci\u0142 si\u0119 w Francesc Gal\xED\u2019s Escola d\u2019Art w Barcelonie, w tym samym mie\u015Bcie mia\u0142 r\xF3wnie\u017C miejsce pierwszy solowy pokaz jego prac w galerii Jos\xE9 Dalmau w 1918 r. (rok wcze\u015Bniej m\u0142ody malarz poznaje Francis\u2019a Picabia, artyst\u0119 z kr\u0119gu dadaist\xF3w i surrealist\xF3w).'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6623243/ello-optimized-b221decb.jpg', alt: 'Zdj\u0119cie przedstawia portret m\u0142odej kobiety na szarym tle w artystycznym makija\u017Cu. Kobieta ma zamkni\u0119te oczy i siwe w\u0142osy.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'W 1920 r. Joan po raz pierwszy odwiedza Pary\u017C i poznaje Pabla Picassa. Od tego momentu jego \u017Cycie toczy si\u0119 pomi\u0119dzy Hiszpani\u0105 a Francj\u0105. Jednoczy si\u0119 z francuskimi poetami zapoznaj\u0105c si\u0119 z ruchem Dada, by nied\u0142ugo p\xF3\u017Aniej do\u0142\u0105czy\u0107 do Surrealist\xF3w i w 1925 r. bra\u0107 udzia\u0142 w pierwszej w pe\u0142ni po\u015Bwi\u0119conej Surrealizmowi wystawie w Galerie Pierre w Pary\u017Cu. Kolejne lata obfituj\u0105 w artystyczne poszukiwania. Mir\xF3 zg\u0142\u0119bia technik\u0119 kola\u017Cu. W 1929 r. eksperymentuje z litografi\u0105, pracuje tak\u017Ce nad rze\u017Abami z pomalowanych kamieni i znalezionych obiekt\xF3w. Rze\u017Ab\u0105 wi\u0119kszych rozmiar\xF3w zajmie si\u0119 w latach 60tych.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6623246/ello-optimized-17f72946.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na usta pomalowane czerwon\u0105 pomadk\u0105 oraz czerwony owalny kszta\u0142t na bia\u0142ym tle.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'W 1980 r. Mir\xF3 zosta\u0142 odznaczony Z\u0142otym Medalem Sztuk Pi\u0119knych z r\u0105k samego kr\xF3la Hiszpanii Juana Carlosa.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6623247/ello-optimized-6a354477.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na oko pomalowane w geometryczne czarno-niebieskie kszta\u0142ty.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Pod koniec swojego \u017Cycia artysta odkry\u0142 technik\u0119 ceramiki i pozostawi\u0142 nam w spadku setki ceramicznych prac. Zmar\u0142 25-tego grudnia 1983 r. w Palma de Mallorca, prawdopodobnie na skutek choroby serca i problem\xF3w z oddychaniem. Podobno jako cz\u0142owiek Mir\xF3 by\u0142 skromny, zdyscyplinowany, pracowity i zawsze punktualny. Swoim wygl\u0105dem nie przypomina\u0142 artysty, lecz klasycznego bur\u017Cuja.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6623250/ello-optimized-78ec0c1c.jpg', alt: 'Zdj\u0119cie przedstawia portret kobiety w artystycznym makija\u017Cu na szarym tle. Kobieta ma czerwone usta i niebiesko-czarne kszta\u0142ty na powiekach.' })
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Wa\u017Cniejszy od samego dzie\u0142a jest efekt, jaki ono wywo\u0142uje. Sztuka mo\u017Ce umrze\u0107, obraz mo\u017Ce ulec zniszczeniu. Istotne jest ziarno, kt\xF3re zosta\u0142o zasiane.'
      ),
      _react2.default.createElement(
        'p',
        null,
        '~ (Joan Mir\xF3)'
      )
    ),
    _react2.default.createElement(
      'blockquote',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Pocieszny i okrutny, rado\u015Bnie i niewinnie skandaliczny styl magiczny Mir\xF3 zbija z tropu i przekonuje jak s\u0142owa dziecka.'
      ),
      _react2.default.createElement(
        'p',
        null,
        '~ (Jean Marcel; \u0179r\xF3d\u0142o: Krystyna Janicka, Surrealizm, Wydawnictwa Artystyczne i Filmowe, Warszawa 1985, s. 148.)'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'Korzysta\u0142am z tekstu:'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://www.guggenheim.org/artwork/artist/joan-miro' },
          'https://www.guggenheim.org/artwork/artist/joan-miro'
        )
      )
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Make-up inspirowany obrazem. 'Figure, Dog, Birds' by Joan_Miró", "date": "2017-11-30T19:32:00.000Z", "categories": ["Sztuka Makijażu"], "tags": ["Miro", "surrealism", "makeup", "makijaż", "dzieło", "obraz", "kreacja", "artysta", "sztuka"] };
var body = exports.body = "<olela-narrative>\nKiedy patrzysz na obraz budzi on w Tobie emocje. Jedne płótna niosą ze sobą smutek, namawiają do nostalgii, inne cieszą się razem z Tobą, wnosząc w życie kolor. Przy płótnach Salvadora śniłam koszmary. Miałam wrażenie, że cała rzeczywistość i czas rozpływają się niczym karmelowy chupa-chups w piekarniku nagrzanym do 180°C . Max Ernst niósł ze sobą widmo apokalipsy. Krajobrazy zbudowane z pumeksu w ciemnych barwach prowadzą do świata zaprzyszłego, gdzie ludzkie formy życia to niezwykła rzadkość. Zupełnie inaczej jest z Miró. On jest malarzem uśmiechu. W jego dziełach znajduję niewinną radość. Z każdym razem gdy zerkam na obraz spotykam się z dzieckiem o duszy stulatka. Tym razem też śnię, ale z tego snu nie chcę się wybudzić.\n</olela-narrative>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6623239/ello-optimized-f916976a.jpg\" alt=\"Zdjęcie przedstawia portret młodej kobiety w artystycznym makijażu i siwych włosach oraz abstrakcyjny czarno-niebieski kształt.\" /></p>\n<p>Joan Miró urodził się 20-tego kwietnia 1893 r. w Barcelonie. Kształcił się w kierunku biznesu, jednocześnie uczęszczając na lekcje sztuki w La Lonja’s Escuela Superior de Artes Industriales y Bellas Artes. Po trzech latach nauki objął stanowisko urzędnika, by zaraz potem przejść załamanie nerwowe, po którym na dobre porzucił biznes i wznowił studia artystyczne. W latach 1912-1915  kształcił się w Francesc Galí’s Escola d’Art w Barcelonie, w tym samym mieście miał również miejsce pierwszy solowy pokaz jego prac w galerii José Dalmau w 1918 r. (rok wcześniej młody malarz poznaje Francis’a Picabia, artystę z kręgu dadaistów i surrealistów).</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6623243/ello-optimized-b221decb.jpg\" alt=\"Zdjęcie przedstawia portret młodej kobiety na szarym tle w artystycznym makijażu. Kobieta ma zamknięte oczy i siwe włosy.\" /></p>\n<p>W 1920 r. Joan po raz pierwszy odwiedza Paryż i poznaje Pabla Picassa. Od tego momentu jego życie toczy się pomiędzy Hiszpanią a Francją. Jednoczy się z francuskimi poetami zapoznając się z ruchem Dada, by niedługo później dołączyć do Surrealistów i w 1925 r. brać udział w pierwszej w pełni poświęconej Surrealizmowi wystawie w Galerie Pierre w Paryżu. Kolejne lata obfitują w artystyczne poszukiwania. Miró zgłębia technikę kolażu. W 1929 r. eksperymentuje z litografią, pracuje także nad rzeźbami z pomalowanych kamieni i znalezionych obiektów. Rzeźbą większych rozmiarów zajmie się w latach 60tych.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6623246/ello-optimized-17f72946.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na usta pomalowane czerwoną pomadką oraz czerwony owalny kształt na białym tle.\" /></p>\n<p>W 1980 r. Miró został odznaczony Złotym Medalem Sztuk Pięknych z rąk samego króla Hiszpanii Juana Carlosa.</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6623247/ello-optimized-6a354477.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na oko pomalowane w geometryczne czarno-niebieskie kształty.\" /></p>\n<p>Pod koniec swojego życia artysta odkrył technikę ceramiki i pozostawił nam w spadku setki ceramicznych prac. Zmarł 25-tego grudnia 1983 r. w Palma de Mallorca, prawdopodobnie na skutek choroby serca i problemów z oddychaniem.\nPodobno jako człowiek Miró był skromny, zdyscyplinowany, pracowity i zawsze punktualny. Swoim wyglądem nie przypominał artysty, lecz klasycznego burżuja.</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6623250/ello-optimized-78ec0c1c.jpg\" alt=\"Zdjęcie przedstawia portret kobiety w artystycznym makijażu na szarym tle. Kobieta ma czerwone usta i niebiesko-czarne kształty na powiekach.\" /></p>\n<blockquote>\n<p>Ważniejszy od samego dzieła jest efekt, jaki ono wywołuje.\nSztuka może umrzeć, obraz może ulec zniszczeniu. Istotne jest ziarno, które zostało zasiane.</p>\n<p>~ (Joan Miró)</p>\n</blockquote>\n<blockquote>\n<p>Pocieszny i okrutny, radośnie i niewinnie skandaliczny styl magiczny Miró zbija z tropu i przekonuje jak słowa dziecka.</p>\n<p>~ (Jean Marcel; Źródło: Krystyna Janicka, Surrealizm, Wydawnictwa Artystyczne i Filmowe, Warszawa 1985, s. 148.)</p>\n</blockquote>\n<p>Korzystałam z tekstu:</p>\n<ul>\n<li><a href=\"https://www.guggenheim.org/artwork/artist/joan-miro\">https://www.guggenheim.org/artwork/artist/joan-miro</a></li>\n</ul>\n";
var raw = exports.raw = "\n<olela-narrative>\nKiedy patrzysz na obraz budzi on w Tobie emocje. Jedne płótna niosą ze sobą smutek, namawiają do nostalgii, inne cieszą się razem z Tobą, wnosząc w życie kolor. Przy płótnach Salvadora śniłam koszmary. Miałam wrażenie, że cała rzeczywistość i czas rozpływają się niczym karmelowy chupa-chups w piekarniku nagrzanym do 180°C . Max Ernst niósł ze sobą widmo apokalipsy. Krajobrazy zbudowane z pumeksu w ciemnych barwach prowadzą do świata zaprzyszłego, gdzie ludzkie formy życia to niezwykła rzadkość. Zupełnie inaczej jest z Miró. On jest malarzem uśmiechu. W jego dziełach znajduję niewinną radość. Z każdym razem gdy zerkam na obraz spotykam się z dzieckiem o duszy stulatka. Tym razem też śnię, ale z tego snu nie chcę się wybudzić.\n</olela-narrative>\n\n![Zdjęcie przedstawia portret młodej kobiety w artystycznym makijażu i siwych włosach oraz abstrakcyjny czarno-niebieski kształt.](https://assets0.ello.co/uploads/asset/attachment/6623239/ello-optimized-f916976a.jpg)\n\nJoan Miró urodził się 20-tego kwietnia 1893 r. w Barcelonie. Kształcił się w kierunku biznesu, jednocześnie uczęszczając na lekcje sztuki w La Lonja’s Escuela Superior de Artes Industriales y Bellas Artes. Po trzech latach nauki objął stanowisko urzędnika, by zaraz potem przejść załamanie nerwowe, po którym na dobre porzucił biznes i wznowił studia artystyczne. W latach 1912-1915  kształcił się w Francesc Galí’s Escola d’Art w Barcelonie, w tym samym mieście miał również miejsce pierwszy solowy pokaz jego prac w galerii José Dalmau w 1918 r. (rok wcześniej młody malarz poznaje Francis’a Picabia, artystę z kręgu dadaistów i surrealistów).\n\n![Zdjęcie przedstawia portret młodej kobiety na szarym tle w artystycznym makijażu. Kobieta ma zamknięte oczy i siwe włosy.](https://assets0.ello.co/uploads/asset/attachment/6623243/ello-optimized-b221decb.jpg)\n\nW 1920 r. Joan po raz pierwszy odwiedza Paryż i poznaje Pabla Picassa. Od tego momentu jego życie toczy się pomiędzy Hiszpanią a Francją. Jednoczy się z francuskimi poetami zapoznając się z ruchem Dada, by niedługo później dołączyć do Surrealistów i w 1925 r. brać udział w pierwszej w pełni poświęconej Surrealizmowi wystawie w Galerie Pierre w Paryżu. Kolejne lata obfitują w artystyczne poszukiwania. Miró zgłębia technikę kolażu. W 1929 r. eksperymentuje z litografią, pracuje także nad rzeźbami z pomalowanych kamieni i znalezionych obiektów. Rzeźbą większych rozmiarów zajmie się w latach 60tych.\n\n![Zdjęcie przedstawia zbliżenie na usta pomalowane czerwoną pomadką oraz czerwony owalny kształt na białym tle.](https://assets0.ello.co/uploads/asset/attachment/6623246/ello-optimized-17f72946.jpg)\n\nW 1980 r. Miró został odznaczony Złotym Medalem Sztuk Pięknych z rąk samego króla Hiszpanii Juana Carlosa.\n\n![Zdjęcie przedstawia zbliżenie na oko pomalowane w geometryczne czarno-niebieskie kształty.](https://assets2.ello.co/uploads/asset/attachment/6623247/ello-optimized-6a354477.jpg)\n\nPod koniec swojego życia artysta odkrył technikę ceramiki i pozostawił nam w spadku setki ceramicznych prac. Zmarł 25-tego grudnia 1983 r. w Palma de Mallorca, prawdopodobnie na skutek choroby serca i problemów z oddychaniem. \nPodobno jako człowiek Miró był skromny, zdyscyplinowany, pracowity i zawsze punktualny. Swoim wyglądem nie przypominał artysty, lecz klasycznego burżuja.\n\n![Zdjęcie przedstawia portret kobiety w artystycznym makijażu na szarym tle. Kobieta ma czerwone usta i niebiesko-czarne kształty na powiekach.](https://assets2.ello.co/uploads/asset/attachment/6623250/ello-optimized-78ec0c1c.jpg)\n\n> Ważniejszy od samego dzieła jest efekt, jaki ono wywołuje. \n> Sztuka może umrzeć, obraz może ulec zniszczeniu. Istotne jest ziarno, które zostało zasiane.\n>\n> ~ (Joan Miró)\n\n> Pocieszny i okrutny, radośnie i niewinnie skandaliczny styl magiczny Miró zbija z tropu i przekonuje jak słowa dziecka.\n>\n> ~ (Jean Marcel; Źródło: Krystyna Janicka, Surrealizm, Wydawnictwa Artystyczne i Filmowe, Warszawa 1985, s. 148.)\n\n\nKorzystałam z tekstu:\n* https://www.guggenheim.org/artwork/artist/joan-miro";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 87 */
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

var _ContentLimiter = __webpack_require__(3);

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
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6664021/ello-optimized-55517a7b.jpg', alt: 'Obraz przedstawia fotografie r\xF3\u017Cnych dzie\u0142 znanych artyst\xF3w. Wszystko na ciemno-szarym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6664023/ello-optimized-6953652c.jpg', alt: 'Obraz przedstawia fotografie modelek w czarno-bia\u0142ych kostiumach, sportowe buty. Wszystko na ciemno-szarym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6664024/ello-optimized-716d3f05.jpg', alt: 'Obraz przedstawia fotografie dw\xF3ch obraz\xF3w znanych artyst\xF3w. Wszystko na ciemno-szarym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6664025/ello-optimized-9ef158dc.jpg', alt: 'Obraz przedstawia zdj\u0119cia pomalowanych paznokci, twarzy w makija\u017Cu, modelek w czarno-bia\u0142ych kostiumach. Wszystko na ciemno-szarym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6664026/ello-optimized-55f1e869.jpg', alt: 'Obraz przedstawia fotografie prac znanych artyst\xF3w, widzimy te\u017C zdj\u0119cie modelki na wybiegu ubranej w suknie w czarno-czerwone pasy.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6663927/ello-optimized-979dc213.jpg', alt: 'Obraz przedstawia fotografie budynk\xF3w. Widzimy te\u017C prace znanych artyst\xF3w, wszystko na ciemno-szarym tle.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6663928/ello-optimized-5054382c.jpg', alt: 'Obraz przedstawia jasne napisy na ciemno-szarym tle, oraz zdj\u0119cie budynku.' })
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Op-art [moodboard]", "date": "2017-12-07T16:37:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["opart", "optical", "art", "moodboard", "artist", "artysta", "sztuka"], "description": "Op Art Moodboard by Olela Krawczyk" };
var body = exports.body = "<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6664021/ello-optimized-55517a7b.jpg\" alt=\"Obraz przedstawia fotografie różnych dzieł znanych artystów. Wszystko na ciemno-szarym tle.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6664023/ello-optimized-6953652c.jpg\" alt=\"Obraz przedstawia fotografie modelek w czarno-białych kostiumach, sportowe buty. Wszystko na ciemno-szarym tle.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6664024/ello-optimized-716d3f05.jpg\" alt=\"Obraz przedstawia fotografie dwóch obrazów znanych artystów. Wszystko na ciemno-szarym tle.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6664025/ello-optimized-9ef158dc.jpg\" alt=\"Obraz przedstawia zdjęcia pomalowanych paznokci, twarzy w makijażu, modelek w czarno-białych kostiumach. Wszystko na ciemno-szarym tle.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6664026/ello-optimized-55f1e869.jpg\" alt=\"Obraz przedstawia fotografie prac znanych artystów, widzimy też zdjęcie modelki na wybiegu ubranej w suknie w czarno-czerwone pasy.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6663927/ello-optimized-979dc213.jpg\" alt=\"Obraz przedstawia fotografie budynków. Widzimy też prace znanych artystów, wszystko na ciemno-szarym tle.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6663928/ello-optimized-5054382c.jpg\" alt=\"Obraz przedstawia jasne napisy na ciemno-szarym tle, oraz zdjęcie budynku.\" /></p>\n";
var raw = exports.raw = "\n![Obraz przedstawia fotografie różnych dzieł znanych artystów. Wszystko na ciemno-szarym tle.](https://assets0.ello.co/uploads/asset/attachment/6664021/ello-optimized-55517a7b.jpg)\n![Obraz przedstawia fotografie modelek w czarno-białych kostiumach, sportowe buty. Wszystko na ciemno-szarym tle.](https://assets1.ello.co/uploads/asset/attachment/6664023/ello-optimized-6953652c.jpg)\n![Obraz przedstawia fotografie dwóch obrazów znanych artystów. Wszystko na ciemno-szarym tle.](https://assets1.ello.co/uploads/asset/attachment/6664024/ello-optimized-716d3f05.jpg)\n![Obraz przedstawia zdjęcia pomalowanych paznokci, twarzy w makijażu, modelek w czarno-białych kostiumach. Wszystko na ciemno-szarym tle.](https://assets1.ello.co/uploads/asset/attachment/6664025/ello-optimized-9ef158dc.jpg)\n![Obraz przedstawia fotografie prac znanych artystów, widzimy też zdjęcie modelki na wybiegu ubranej w suknie w czarno-czerwone pasy.](https://assets2.ello.co/uploads/asset/attachment/6664026/ello-optimized-55f1e869.jpg)\n![Obraz przedstawia fotografie budynków. Widzimy też prace znanych artystów, wszystko na ciemno-szarym tle.](https://assets2.ello.co/uploads/asset/attachment/6663927/ello-optimized-979dc213.jpg)\n![Obraz przedstawia jasne napisy na ciemno-szarym tle, oraz zdjęcie budynku.](https://assets2.ello.co/uploads/asset/attachment/6663928/ello-optimized-5054382c.jpg)\n";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 88 */
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

var _ContentLimiter = __webpack_require__(3);

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
      'W marcu tego roku otworzy\u0142 swoje drzwi pawilon Muzeum Sztuki Nowoczesnej nad Wis\u0142\u0105. Pawilon ten jest tymczasowy, a jego istnienie w roli przestrzeni wystawienniczej szacuje si\u0119 na oko\u0142o cztery lata. Pierwsz\u0105 wystaw\u0105, jaka mia\u0142a tam miejsce by\u0142a \u2018Syrena herbem twym zwodnicza\u2019 (tytu\u0142 zaczerpni\u0119ty zosta\u0142 z wiersza Cypriana Kamila Norwida). By\u0142a to ekspozycja do\u015B\u0107 adekwatna, co o miejsca i czasu, pawilon bowiem nie tyko stoi w Warszawie, ale te\u017C bardzo blisko samego symbolu tego miasta \u2013 pomnika Warszawskiej Syrenki tu\u017C nad brzegiem Wis\u0142y. Samo otwarcie by\u0142o wielkim dwudniowym wydarzeniem naszpikowanym r\xF3\u017Cnego rodzaju atrakcjami dodatkowymi. Mogli\u015Bmy uczestniczy\u0107 w oprowadzaniu, warsztatach, wsp\xF3lnym malowaniu muralu, a nawet koncertach. Pami\u0119tam, \u017Ce dooko\u0142a pawilonu sta\u0142y bardzo modne obecnie \u2018foodtracki\u2019 z pysznymi r\xF3\u017Cno\u015Bciami - od kuchni indyjskiej po polskie pierogi. Przez to klimat zdawa\u0142 si\u0119 by\u0107 nieco festynowo-festiwalowy, ale mo\u017Ce to dobry pomys\u0142, aby ludzie przy okazji sp\u0119dzania mi\u0142o czasu z przyjaci\xF3\u0142mi i rodzin\u0105 posmakowali nie tylko pikantnego curry, ale te\u017C uszczkn\u0119li co nieco tematu sztuki.'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Pocz\u0105tek'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wystaw\u0119 \u2018Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce \u0141aci\u0144skiej w latach 50. \u2013 70.\u2019 planowa\u0142am zobaczy\u0107 ju\u017C od d\u0142u\u017Cszego czasu. Korzystaj\u0105c z wolnego dnia i (ju\u017C) zimowej pogody przespacerowa\u0142am spokojnie brzegiem rzeki, z we\u0142nian\u0105 ciep\u0142\u0105 czap\u0105 na g\u0142owie prosto do pawilonu Muzeum Sztuki Nowoczesnej. Przy wej\u015Bciu powita\u0142y mnie dwie instalacje/rze\u017Aby. Jedn\u0105 z nich by\u0142o \u2018Penetrable BBL Blue\u2019 Jes\xFAs\u2019a Rafael\u2019a Soto. Sporych rozmiar\xF3w stalowa konstrukcja o kszta\u0142cie sze\u015Bcianu, z kt\xF3rej \u2018zwisa\u0142y\u2019 niebieskie (my\u015Bl\u0119, \u017Ce gumowe lub plastikowe) sznurki (nie wiem, czy bardziej obrazowo nie podzia\u0142a\u0142o by tutaj s\u0142owo: makaron). Moja wyprawa mia\u0142a miejsce w do\u015B\u0107 ch\u0142odny i wietrzny dzie\u0144, tote\u017C \xF3w makaron porusza\u0142 si\u0119 razem z wiatrem, przez co obraz za nim zdawa\u0142 si\u0119 \u2018migota\u0107\u2019, \u017Cy\u0107 odbiciem w\u0142asnego szumu. D\u0142u\u017Csze wpatrywanie si\u0119 w niego doprowadzi\u0142o mnie do lekkich zawrot\xF3w g\u0142owy i powidoku. Ze zmarzni\u0119tym nosem i chwiejnym krokiem otworzy\u0142am drzwi Muzeum.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6690686/ello-optimized-14031b74.jpg', alt: 'Zdj\u0119cie przedstawia geometryczn\u0105 czerwono-czarn\u0105 rze\u017Ab\u0119 stoj\u0105c\u0105 na \u015Bniegu na tle budynku ozdobionego rysunkami.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6690680/ello-optimized-96bc6563.jpg', alt: 'Zdj\u0119cie przedstawia krajobraz. Widzimy bia\u0142o-niebiesk\u0105 rze\u017Ab\u0119 i budynek w tle. Ziemi\u0119 pokrywa \u015Bnieg.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6690691/ello-optimized-618944d8.jpg', alt: 'Zdj\u0119cie przedstawia ziemi\u0119 pokryt\u0105 roztopionym \u015Bniegiem,do ziemi przytwierdzona jest tabliczka z napisem. Widzimy te\u017C fragment nogi w czarnym obuwiu.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6690702/ello-optimized-baf931ef.jpg', alt: 'Zdj\u0119cie przedstawia obraz widziany poprzez niebieskie pionowe linie.' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Otwarcie'
    ),
    _react2.default.createElement(
      'p',
      null,
      'W momencie, kiedy tylko wesz\u0142am do \u015Brodka totalnie zakocha\u0142am si\u0119 w przestrzeni. Przede wszystkim to miejsce wydaje si\u0119 by\u0107 olbrzymie, a to za spraw\u0105 wysoko\u015Bci pawilonu. Wewn\u0105trz \u2018mo\u017Cna oddycha\u0107\u2019, a co z tym idzie r\xF3wnie\u017C poszczeg\xF3lne prace oddychaj\u0105 i nie przeszkadzaj\u0105 sobie wzajemnie w odbiorze.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6690610/ello-optimized-9f4adbba.jpg', alt: 'Zdj\u0119cie przedstawia pomieszczenie z bia\u0142ymi \u015Bcianami. Na \u015Bcianach wisz\u0105 obrazy, a na pod\u0142odze stoj\u0105 rze\u017Aby.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Na wystawie zobaczymy dzie\u0142a ponad 30stu artyst\xF3w zwi\u0105zanych z op-artem i sztuk\u0105 kinetyczn\u0105. Gwoli wyja\u015Bnienia:'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Op-art, czyli ang. \u2018optical art\u2019 - sztuka optyczna, inaczej: wizualizm. Kierunek w malarstwie, grafice, sztuce u\u017Cytkowej, modzie, kt\xF3rego g\u0142\xF3wnym za\u0142o\u017Ceniem by\u0142o oddzia\u0142ywa\u0107 na oko widza (zobacz koniecznie ',
        _react2.default.createElement(
          'a',
          { href: 'http://sztukauniwersalna.pl/2017-12-07-op-art-moodboard' },
          'moodboard op-art'
        ),
        '). Prace op-artu wci\u0105gaj\u0105 nas w iluzje optyczne, \u2018trenuj\u0105\u2019 nasz narz\u0105d wzroku, proponuj\u0105 gr\u0119 z\u0142udze\u0144 pozoruj\u0105c tr\xF3jwymiarowo\u015B\u0107. Pionierem tego kierunku jest Victor Vasarely \u2013 W\u0119gier, kt\xF3ry ju\u017C w latach 30\u2019 eksperymentowa\u0142 z geometryczn\u0105 abstrakcj\u0105, kt\xF3ra zaprowadzi\u0142a go do p\xF3\u017Aniejszych fascynacji teoriami percepcji i aktem widzenia (jedn\u0105 serigrafi\u0119 Victor\u2019a pt.:\u2019Caracas\u2019 z 1956 r. zobaczymy na wystawie \u2018Inny Trans-Atlantyk\u2019). Op-art jest cz\u0119sto uto\u017Csamiany ze sztuk\u0105 wizualnych trik\xF3w, kt\xF3ra nie ma na celu wzbudza\u0107 wi\u0119kszych refleksji. Jednak mo\u017Cna go por\xF3wna\u0107 do dziedziny nauki zajmuj\u0105cej si\u0119 badaniem aparatu widzenia. Najbardziej intensywny czas rozwoju op-art\u2019u przypad\u0142 na lata 50. i 60. XX wieku.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Sztuka kinetyczna - (z gr. kin\u0113ma \u2018ruch\u2019) kierunek w sztuce koncentruj\u0105cy si\u0119 na zagadnieniu ruchu \u2013 rzeczywistym lub pozornym. W prostym wyja\u015Bnieniu, to sztuka wykorzystuj\u0105ca pewne mechanizmy (naturalne lub sztuczne) dla oddania ruchu lub jego wra\u017Cenia. Tak, jak np. w przypadku wy\u017Cej opisanej instalacji Jes\xFAs\u2019a Rafael\u2019a Soto \u2013 kt\xF3ry dzi\u0119ki naturalnemu czynnikowi, jakim jest wiatr, stwarza w obiekcie ruch, kt\xF3ry to z kolei buduje obraz.'
      )
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Na\u015Bcienne'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wystaw\u0119 zaczynam ogl\u0105da\u0107 kieruj\u0105c si\u0119 w praw\u0105 stron\u0119. Pierwsz\u0105 prac\u0105 jak\u0105 napotykam na swojej drodze jest \u2018Physichromie No. 1025\u2019 Carlos\u2019a Cruz-Diez z 1975 r. Wenezuelski artysta ka\u017Ce nam porusza\u0107 si\u0119 ogl\u0105daj\u0105c jego prace. Z lewej na praw\u0105, z prawej na lew\u0105, z nogi na nog\u0119, ta\u0144czymy wok\xF3\u0142 dzie\u0142a, kt\xF3re odwzajemnia taniec i ukazuje nam coraz to nowe oblicza siebie. Sam autor twierdzi w jednym z wywiad\xF3w: \u201EPrzyzwyczaili\u015Bmy si\u0119 do tego, by kolor uznawa\u0107 za w\u0142a\u015Bciwo\u015B\u0107 przypisan\u0105 obiektom \u2013 co\u015B, co istnieje dzi\u0119ki okre\u015Blaniu czego\u015B innego. Kolory jednak s\u0105 nie tyle w\u0142asno\u015Bciami rzeczy, ile autonomicznymi istno\u015Bciami, kt\xF3re zamiast towarzyszy\u0107 bytom, warunkuj\u0105 ich postrzeganie\u201D.Carlos chcia\u0142 zrewolucjonizowa\u0107 malarstwo, kt\xF3re wed\u0142ug niego od setek lat polega na nak\u0142adaniu farby na p\u0142\xF3tno. Artysta odnalaz\u0142 sw\xF3j autorski styl w technice wycinania pask\xF3w z tektury, malowania ich na konkretny kolor i doklejania do p\u0142aszczyzny p\u0142\xF3tna. W ten spos\xF3b obraz zmienia si\u0119 wraz ze zmiana perspektywy widza. Ujawniaj\u0105 si\u0119 coraz to nowe kolory i figury geometryczne, ruch pojawia si\u0119 w samym obrazie. Nie wiem, czy organizatorzy wystawy \u015Bwiadomie zawiesili obraz tu\u017C pod kratkami wentylacyjnymi, ale to po\u0142\u0105czenie zachwyca podobie\u0144stwami!'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6690631/ello-optimized-456cc20b.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia, kt\xF3re ukazuj\u0105 obraz znanego artysty zawieszony na bia\u0142ej \u015Bcianie.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Dzie\u0142em, kt\xF3re przyku\u0142o moja uwag\u0119 na ok. p\xF3\u0142 godziny by\u0142 \u2018Obiekt kinetyczny KK 9a \u2018 Abraham\u2019a Palatnik\u2019a (1966-2009). Tutaj mamy odwrotn\u0105 sytuacj\u0119 w stosunku do poprzednika. Carlos Cruz-Diez liczy\u0142 na ruch widza, Abraham z kolei w\u0142\u0105cza ruch w struktur\u0119 dzie\u0142. Jego prace \u017Cyj\u0105 \u2013 za pomoc\u0105 mechanizmu o\u017Cywaj\u0105 i ruszaj\u0105 si\u0119. \u2018Obiekt kinetyczny KK 9a \u2018 to geometryczne kszta\u0142ty w r\xF3\u017Cnych kolorach zamontowane na prostych lub \u0142ukowatych metalowych pr\u0119cikach. Nie mam poj\u0119cia za pomoc\u0105 jakiego silnika artysta osi\u0105gn\u0105 taki efekt (podobno nauczy\u0142 si\u0119 budowa\u0107 silniki o zap\u0142onie iskrowym), ale ruch tej pracy zdaje si\u0119 oddycha\u0107 razem z nami. Poszczeg\xF3lne elementy poruszaj\u0105 si\u0119 do\u015B\u0107 \u2018ospale\u2019 wprawiaj\u0105c nas w stan bliski medytacji. Wed\u0142ug Palatnika to w\u0142a\u015Bnie wynalazki pozwalaj\u0105 nam zobaczy\u0107 \u015Bwiat w zupe\u0142nie nowy spos\xF3b. W pewnym momencie krytycy zacz\u0119li nazywa\u0107 artyst\u0119 konstruktorem, a now\u0105 form\u0119 tworzenia obraz\xF3w \u2013 malarstwem maszynowym.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6690623/ello-optimized-36c24433.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia rze\u017Aby sk\u0142adaj\u0105cej si\u0119 z patyczk\xF3w, na kt\xF3rych ko\u0144cach zamieszczone s\u0105 figury geometryczne.' })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Przestrzenne'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6690639/ello-optimized-3502d85e.jpg', alt: 'Obraz przedstawia trzy fotografie. Na zdj\u0119ciach z prawej strony widzimy sylwetki ludzkie, z lewej prac\u0119 artystyczn\u0105 przedstawiaj\u0105c\u0105 figury geometryczne czarne i czerwone.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Opr\xF3cz prac \u2018\u015Bciennych\u2019 - obraz\xF3w i relief\xF3w (Henryk Sta\u017Cewski - zdj\u0119cie powy\u017Cej) mo\u017Cemy te\u017C na wystawie \u201EInny Trans-Atlantyk \u2018 do\u015Bwiadczy\u0107 obiekt\xF3w w przestrzeni. Za s\u0142owo \u2018obiekt\u2019 zapewne obrazi\u0142aby si\u0119 Lygia Clark \u2013 artystka wizualna, rze\u017Abiarka, performerka, kt\xF3ra swoje prace nazywa\u0142a \u201Equasi-cia\u0142ami\u201D. Jej quasi-cia\u0142o \u2018Stw\xF3r ptak z przestrzeni\u2019 to rze\u017Aba z aluminium, kt\xF3r\u0105 widz mo\u017Ce dowolnie kszta\u0142towa\u0107. Specjalnie zamontowane zawiasy pozwalaj\u0105 na zmian\u0119 kierunku p\u0142aszczyzn dzie\u0142a. Lygia zaznacza, \u017Ce chcia\u0142a nie tylko o\u017Cywi\u0107 dzie\u0142o sztuki, ale te\u017C zaanga\u017Cowa\u0107 odbiorc\xF3w w akt tw\xF3rczy.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6690627/ello-optimized-1ac23d9d.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia. Na zdj\u0119ciu po lewej stronie widzimy obraz na bia\u0142ej \u015Bcianie, na zdj\u0119ciu po prawej rze\u017Ab\u0119 z metalu, a w tle obrazy na bia\u0142ej \u015Bcianie.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Mira Schendel z kolei proponuje nam spacer dooko\u0142a \u2018Zatrzymane fale prawdopodobie\u0144stwa\u2019. Ta instalacja to swoisty paradoks \u2013 pojedyncza \u017Cy\u0142ka nylonowa jest dla ludzkiego oka niewidoczna, dopiero po pomno\u017Ceniu jej przez 20 000 zaczyna zaw\u0142aszcza\u0107 przestrze\u0144, w kt\xF3rej si\u0119 znajduje, a my na w\u0142asnej sk\xF3rze odczuwamy si\u0142\u0119 w jej transparentno\u015Bci. Ca\u0142o\u015Bci towarzyszy cytat z Biblii: \u2018Wtedy rzek\u0142: \xABWyjd\u017A, aby stan\u0105\u0107 na g\xF3rze wobec Pana!\xBB A oto Pan przechodzi\u0142. Gwa\u0142towna wichura rozwalaj\u0105ca g\xF3ry i druzgoc\u0105ca ska\u0142y [sz\u0142a] przed Panem; ale Pan nie by\u0142 w wichurze. A po wichurze - trz\u0119sienie ziemi: Pan nie by\u0142 w trz\u0119sieniu ziemi.\xA0Po trz\u0119sieniu ziemi powsta\u0142 ogie\u0144: Pan nie by\u0142 w ogniu. A po tym ogniu - szmer \u0142agodnego powiewu.\u2019 (Stary Testament; I Ksi\u0119ga Kr\xF3lewska; 19: 11-12). Ta instalacja zosta\u0142a specjalnie przygotowana przez artystk\u0119 na X Biennale w S\xE3o Paulo w 1969 roku jako komentarz do represyjnej polityki kulturalnej i rz\u0105d\xF3w dyktatury w Brazylii tamtego czasu.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6690645/ello-optimized-b6bcdaf1.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia. Z lewej strony widzimy fotografi\u0119 ukazuj\u0105c\u0105 fragment n\xF3g os\xF3b stoj\u0105cych za bia\u0142\u0105 \u015Bcian\u0105, ca\u0142o\u015B\u0107 przykrywa bia\u0142y szum. Z prawej strony widzimy o\u015Bwietlone pomieszczenie z napisem na \u015Bcianie.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Mniej wi\u0119cej w \u015Brodku zwiedzania wystawy \u201EInny Trans-Atlantyk\u2019 napotykamy na tajemnicz\u0105 kotar\u0119, za kt\xF3r\u0105 znajduje si\u0119 ciemne pomieszczenie, a w nim... Chwil\u0119 po adaptacji naszego wzroku napotykamy na pude\u0142ko ze \u017Ar\xF3d\u0142em \u015Bwiat\u0142a. Nad nim na suficie zawieszone zosta\u0142y metalowe p\u0142ytki o r\xF3\u017Cnych kszta\u0142tach. Rozgl\u0105damy si\u0119 dooko\u0142a dostrzegaj\u0105c refleksy \u015Bwietlne na \u015Bcianach, kt\xF3re w poruszaj\u0105 si\u0119 w subtelny spos\xF3b. Ruchu nie dostrze\u017Cemy nigdzie indziej, tylko w \u2018zaj\u0105czkach na \u015Bcianach. Wydaje mi si\u0119, \u017Ce artysta w sprytny spos\xF3b wykorzysta\u0142 cyrkulacj\u0119 powietrza tak, aby wprawi\u0107 w dr\u017Cenie metalowe p\u0142ytki. Julio Le Parc znany jest ze swoich eksperyment\xF3w ze \u015Bwiat\u0142em w roli g\u0142\xF3wnej.'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Wnioski ko\u0144cowe'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wystawa \u2018Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce \u0141aci\u0144skiej w latach 50. \u2013 70.\u2019 jest po prostu \u015Bwietna. Wywa\u017Cenie przestrzenne, wzajemne stosunki dzie\u0142, odleg\u0142o\u015Bci zosta\u0142y wyszukane w 100%. Mo\u017Cemy ogl\u0105da\u0107 prace w przez nas samych wyznaczonym kierunku i na ka\u017Cdym kroku zaskoczy nas co\u015B niesamowitego. Zaraz obok obrazu znajdziemy obiekt, st\xF3\u0142 z materia\u0142ami prasowymi, filmem, a je\u015Bli spojrzymy w g\xF3r\u0119 dostrze\u017Cemy kszta\u0142ty zawieszone tu\u017C nad sufitem. Wystawa jest sp\xF3jna, a jednocze\u015Bnie pe\u0142na niespodzianek. Do\u015Bwiadczanie dzie\u0142 ka\u017Cdy z nas musi zainicjowa\u0107, niczym innym jak\u2026 ruchem. Prawdziwy wyd\u017Awi\u0119k tej ekspozycji dostrze\u017Cemy tylko wtedy, kiedy b\u0119dziemy w nieustannym ruchu. My\u015Bl\u0119, \u017Ce jest to te\u017C genialna propozycja dla os\xF3b, kt\xF3re nie maj\u0105 wielkiego poj\u0119cia o sztuce, a chc\u0105 dowiedzie\u0107 si\u0119 czym jest op-art i sztuka kinetyczna. Przyjd\u017A, do\u015Bwiadcz, zrozum!'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6690581/ello-optimized-16c83662.jpg', alt: 'Zdj\u0119cie przedstawia czarno-bia\u0142y obraz zawieszony w rogu bia\u0142ej sali.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6690596/ello-optimized-015ee129.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia. Z lewej strony widzimy czarny kwadratowy obiekt z wyci\u0119tymi ko\u0142ami, z lewej transparentny obiekt z\u0142o\u017Cony z soczewek i zawieszony w przestrzeni.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6690591/ello-optimized-82903d8c.jpg', alt: 'Zdj\u0119cie przedstawia zbli\u017Cenie na obiekt zbudowany ze szklanych soczewek.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6690604/ello-optimized-566ddc3a.jpg', alt: 'Zdj\u0119cie przedstawia obraz wisz\u0105cy na bia\u0142ej \u015Bcianie. Na obrazie widzimy czarno-bia\u0142e ko\u0142o.' }),
      _react2.default.createElement('img', { src: 'https://assets0.ello.co/uploads/asset/attachment/6690613/ello-optimized-a8b1bdcd.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia. Z lewej strony widzimy obrazek przedstawiaj\u0105cy kwadratowe linie. Z prawej strony widzimy trzy obrazki w ramkach przedstawiaj\u0105ce kwadraty r\xF3\u017Cnych rozmiar\xF3w.' }),
      _react2.default.createElement('img', { src: 'https://assets2.ello.co/uploads/asset/attachment/6690620/ello-optimized-2e713fd1.jpg', alt: 'Zdj\u0119cie przedstawia metalow\u0105 konstrukcj\u0119, przez kt\xF3r\u0105 mo\u017Cemy dostrzec reszt\u0119 pomieszczenia.' }),
      _react2.default.createElement('img', { src: 'https://assets1.ello.co/uploads/asset/attachment/6690633/ello-optimized-050ee119.jpg', alt: 'Obraz przedstawia dwa zdj\u0119cia. Z lewej strony na pierwszym planie widzimy z\u0142ot\u0105 rze\u017Ab\u0119, a w tle obraz. Z prawej strony widzimy kwadratowy obraz przedstawiaj\u0105cy ma\u0142e k\xF3\u0142ka.' })
    ),
    _react2.default.createElement(
      'p',
      null,
      'Wystawa trwa od 17.11.2017 r. do 11.02.2018 r. i mo\u017Cna jej do\u015Bwiadczy\u0107 od wtorku do pi\u0105tku w godz. 12:00-20:00, w sobot\u0119 od 11:00-20:00 i niedziel\u0119 od 11:00-18:00.'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Wst\u0119p na wystaw\u0119 jest DARMOWY.'
      ),
      _react2.default.createElement(
        'li',
        null,
        'MUZEUM nad Wis\u0142\u0105 - Wybrze\u017Ce Ko\u015Bciuszkowskie 22 (Skwer Kpt. S. Skibniewskiego \u201CCubryny\u201D),'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Wi\u0119cej informacji o wystawie, artystach i dodatkowych wydarzeniach znajdziecie ',
        _react2.default.createElement(
          'a',
          { href: 'http://transatlantic.artmuseum.pl/pl' },
          'tutaj'
        )
      )
    )
  );
};
var frontMatter = exports.frontMatter = { "title": "Wystawa: Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce Łacińskiej w latach 50. – 70.", "date": "2017-12-11T18:15:00.000Z", "categories": ["Sztuka dla Sztuki"], "tags": ["wystawa", "exhibition", "opart", "kineticart", "recenzja", "sztuka", "artysta", "muzeum"] };
var body = exports.body = "<olela-narrative>\nW marcu tego roku otworzył swoje drzwi pawilon Muzeum Sztuki Nowoczesnej nad Wisłą. Pawilon ten jest tymczasowy, a jego istnienie w roli przestrzeni wystawienniczej szacuje się na około cztery lata. Pierwszą wystawą, jaka miała tam miejsce była ‘Syrena herbem twym zwodnicza’ (tytuł zaczerpnięty został z wiersza Cypriana Kamila Norwida). Była to ekspozycja dość adekwatna, co o miejsca i czasu, pawilon bowiem nie tyko stoi w Warszawie, ale też bardzo blisko samego symbolu tego miasta – pomnika Warszawskiej Syrenki tuż nad brzegiem Wisły. Samo otwarcie było wielkim dwudniowym wydarzeniem naszpikowanym różnego rodzaju atrakcjami dodatkowymi. Mogliśmy uczestniczyć w oprowadzaniu, warsztatach, wspólnym malowaniu muralu, a nawet koncertach. Pamiętam, że dookoła pawilonu stały bardzo modne obecnie ‘foodtracki’ z pysznymi różnościami - od kuchni indyjskiej po polskie pierogi. Przez to klimat zdawał się być nieco festynowo-festiwalowy, ale może to dobry pomysł, aby ludzie przy okazji spędzania miło czasu z przyjaciółmi i rodziną posmakowali nie tylko pikantnego curry, ale też uszczknęli co nieco tematu sztuki. \n</olela-narrative>\n<h2>Początek</h2>\n<p>Wystawę ‘Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce Łacińskiej w latach 50. – 70.’ planowałam zobaczyć już od dłuższego czasu. Korzystając z wolnego dnia i (już) zimowej pogody przespacerowałam spokojnie brzegiem rzeki, z wełnianą ciepłą czapą na głowie prosto do pawilonu Muzeum Sztuki Nowoczesnej. Przy wejściu powitały mnie dwie instalacje/rzeźby. Jedną z nich było ‘Penetrable BBL Blue’ Jesús’a Rafael’a Soto. Sporych rozmiarów stalowa konstrukcja o kształcie sześcianu, z której ‘zwisały’ niebieskie (myślę, że gumowe lub plastikowe) sznurki (nie wiem, czy bardziej obrazowo nie podziałało by tutaj słowo: makaron). Moja wyprawa miała miejsce w dość chłodny i wietrzny dzień, toteż ów makaron poruszał się razem z wiatrem, przez co obraz za nim zdawał się ‘migotać’, żyć odbiciem własnego szumu. Dłuższe wpatrywanie się w niego doprowadziło mnie do lekkich zawrotów głowy i powidoku. Ze zmarzniętym nosem i chwiejnym krokiem otworzyłam drzwi Muzeum.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6690686/ello-optimized-14031b74.jpg\" alt=\"Zdjęcie przedstawia geometryczną czerwono-czarną rzeźbę stojącą na śniegu na tle budynku ozdobionego rysunkami.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6690680/ello-optimized-96bc6563.jpg\" alt=\"Zdjęcie przedstawia krajobraz. Widzimy biało-niebieską rzeźbę i budynek w tle. Ziemię pokrywa śnieg.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6690691/ello-optimized-618944d8.jpg\" alt=\"Zdjęcie przedstawia ziemię pokrytą roztopionym śniegiem,do ziemi przytwierdzona jest tabliczka z napisem. Widzimy też fragment nogi w czarnym obuwiu.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6690702/ello-optimized-baf931ef.jpg\" alt=\"Zdjęcie przedstawia obraz widziany poprzez niebieskie pionowe linie.\" /></p>\n<h2>Otwarcie</h2>\n<p>W momencie, kiedy tylko weszłam do środka totalnie zakochałam się w przestrzeni. Przede wszystkim to miejsce wydaje się być olbrzymie, a to za sprawą wysokości pawilonu. Wewnątrz ‘można oddychać’, a co z tym idzie również poszczególne prace oddychają i nie przeszkadzają sobie wzajemnie w odbiorze.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6690610/ello-optimized-9f4adbba.jpg\" alt=\"Zdjęcie przedstawia pomieszczenie z białymi ścianami. Na ścianach wiszą obrazy, a na podłodze stoją rzeźby.\" /></p>\n<p>Na wystawie zobaczymy dzieła ponad 30stu artystów związanych z op-artem i sztuką kinetyczną. Gwoli wyjaśnienia:</p>\n<ol>\n<li>Op-art, czyli ang. ‘optical art’ - sztuka optyczna, inaczej: wizualizm. Kierunek w malarstwie, grafice, sztuce użytkowej, modzie, którego głównym założeniem było oddziaływać na oko widza (zobacz koniecznie <a href=\"http://sztukauniwersalna.pl/2017-12-07-op-art-moodboard\">moodboard op-art</a>). Prace op-artu wciągają nas w iluzje optyczne, ‘trenują’ nasz narząd wzroku, proponują grę złudzeń pozorując trójwymiarowość. Pionierem tego kierunku jest Victor Vasarely – Węgier, który już w latach 30’ eksperymentował z geometryczną abstrakcją, która zaprowadziła go do późniejszych fascynacji teoriami percepcji i aktem widzenia (jedną serigrafię Victor’a pt.:’Caracas’ z 1956 r. zobaczymy na wystawie ‘Inny Trans-Atlantyk’). Op-art jest często utożsamiany ze sztuką wizualnych trików, która nie ma na celu wzbudzać większych refleksji. Jednak można go porównać do dziedziny nauki zajmującej się badaniem aparatu widzenia. Najbardziej intensywny czas rozwoju op-art’u przypadł na lata 50. i 60. XX wieku.</li>\n<li>Sztuka kinetyczna - (z gr. kinēma ‘ruch’) kierunek w sztuce koncentrujący się na zagadnieniu ruchu – rzeczywistym lub pozornym. W prostym wyjaśnieniu, to sztuka wykorzystująca pewne mechanizmy (naturalne lub sztuczne) dla oddania ruchu lub jego wrażenia. Tak, jak np. w przypadku wyżej opisanej instalacji Jesús’a Rafael’a Soto – który dzięki naturalnemu czynnikowi, jakim jest wiatr, stwarza w obiekcie ruch, który to z kolei buduje obraz.</li>\n</ol>\n<h2>Naścienne</h2>\n<p>Wystawę zaczynam oglądać kierując się w prawą stronę. Pierwszą pracą jaką napotykam na swojej drodze jest ‘Physichromie No. 1025’ Carlos’a Cruz-Diez z 1975 r. Wenezuelski artysta każe nam poruszać się oglądając jego prace. Z lewej na prawą, z prawej na lewą, z nogi na nogę, tańczymy wokół dzieła, które odwzajemnia taniec i ukazuje nam coraz to nowe oblicza siebie. Sam autor twierdzi w jednym z wywiadów: „Przyzwyczailiśmy się do tego, by kolor uznawać za właściwość przypisaną obiektom – coś, co istnieje dzięki określaniu czegoś innego. Kolory jednak są nie tyle własnościami rzeczy, ile autonomicznymi istnościami, które zamiast towarzyszyć bytom, warunkują ich postrzeganie”.Carlos chciał zrewolucjonizować malarstwo, które według niego od setek lat polega na nakładaniu farby na płótno. Artysta odnalazł swój autorski styl w technice wycinania pasków z tektury, malowania ich na konkretny kolor i doklejania do płaszczyzny płótna. W ten sposób obraz zmienia się wraz ze zmiana perspektywy widza. Ujawniają się coraz to nowe kolory i figury geometryczne, ruch pojawia się w samym obrazie. Nie wiem, czy organizatorzy wystawy świadomie zawiesili obraz tuż pod kratkami wentylacyjnymi, ale to połączenie zachwyca podobieństwami!</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6690631/ello-optimized-456cc20b.jpg\" alt=\"Obraz przedstawia dwa zdjęcia, które ukazują obraz znanego artysty zawieszony na białej ścianie.\" /></p>\n<p>Dziełem, które przykuło moja uwagę na ok. pół godziny był ‘Obiekt kinetyczny KK 9a ‘ Abraham’a Palatnik’a (1966-2009). Tutaj mamy odwrotną sytuację w stosunku do poprzednika. Carlos Cruz-Diez liczył na ruch widza, Abraham z kolei włącza ruch w strukturę dzieł. Jego prace żyją – za pomocą mechanizmu ożywają i ruszają się. ‘Obiekt kinetyczny KK 9a ‘ to geometryczne kształty w różnych kolorach zamontowane na prostych lub łukowatych metalowych pręcikach. Nie mam pojęcia za pomocą jakiego silnika artysta osiągną taki efekt (podobno nauczył się budować silniki o zapłonie iskrowym), ale ruch tej pracy zdaje się oddychać razem z nami. Poszczególne elementy poruszają się dość ‘ospale’ wprawiając nas w stan bliski medytacji. Według Palatnika to właśnie wynalazki pozwalają nam zobaczyć świat w zupełnie nowy sposób. W pewnym momencie krytycy zaczęli nazywać artystę konstruktorem, a nową formę tworzenia obrazów – malarstwem maszynowym.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6690623/ello-optimized-36c24433.jpg\" alt=\"Obraz przedstawia dwa zdjęcia rzeźby składającej się z patyczków, na których końcach zamieszczone są figury geometryczne.\" /></p>\n<h2>Przestrzenne</h2>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6690639/ello-optimized-3502d85e.jpg\" alt=\"Obraz przedstawia trzy fotografie. Na zdjęciach z prawej strony widzimy sylwetki ludzkie, z lewej pracę artystyczną przedstawiającą figury geometryczne czarne i czerwone.\" /></p>\n<p>Oprócz prac ‘ściennych’ - obrazów i reliefów (Henryk Stażewski - zdjęcie powyżej) możemy też na wystawie „Inny Trans-Atlantyk ‘ doświadczyć obiektów w przestrzeni. Za słowo ‘obiekt’ zapewne obraziłaby się Lygia Clark – artystka wizualna, rzeźbiarka, performerka, która swoje prace nazywała „quasi-ciałami”. Jej quasi-ciało ‘Stwór ptak z przestrzeni’ to rzeźba z aluminium, którą widz może dowolnie kształtować. Specjalnie zamontowane zawiasy pozwalają na zmianę kierunku płaszczyzn dzieła. Lygia zaznacza, że chciała nie tylko ożywić dzieło sztuki, ale też zaangażować odbiorców w akt twórczy.</p>\n<p><img src=\"https://assets1.ello.co/uploads/asset/attachment/6690627/ello-optimized-1ac23d9d.jpg\" alt=\"Obraz przedstawia dwa zdjęcia. Na zdjęciu po lewej stronie widzimy obraz na białej ścianie, na zdjęciu po prawej rzeźbę z metalu, a w tle obrazy na białej ścianie.\" /></p>\n<p>Mira Schendel z kolei proponuje nam spacer dookoła ‘Zatrzymane fale prawdopodobieństwa’. Ta instalacja to swoisty paradoks – pojedyncza żyłka nylonowa jest dla ludzkiego oka niewidoczna, dopiero po pomnożeniu jej przez 20 000 zaczyna zawłaszczać przestrzeń, w której się znajduje, a my na własnej skórze odczuwamy siłę w jej transparentności. Całości towarzyszy cytat z Biblii: ‘Wtedy rzekł: «Wyjdź, aby stanąć na górze wobec Pana!» A oto Pan przechodził. Gwałtowna wichura rozwalająca góry i druzgocąca skały [szła] przed Panem; ale Pan nie był w wichurze. A po wichurze - trzęsienie ziemi: Pan nie był w trzęsieniu ziemi. Po trzęsieniu ziemi powstał ogień: Pan nie był w ogniu. A po tym ogniu - szmer łagodnego powiewu.’ (Stary Testament; I Księga Królewska; 19: 11-12). Ta instalacja została specjalnie przygotowana przez artystkę na X Biennale w São Paulo w 1969 roku jako komentarz do represyjnej polityki kulturalnej i rządów dyktatury w Brazylii tamtego czasu.</p>\n<p><img src=\"https://assets0.ello.co/uploads/asset/attachment/6690645/ello-optimized-b6bcdaf1.jpg\" alt=\"Obraz przedstawia dwa zdjęcia. Z lewej strony widzimy fotografię ukazującą fragment nóg osób stojących za białą ścianą, całość przykrywa biały szum. Z prawej strony widzimy oświetlone pomieszczenie z napisem na ścianie.\" /></p>\n<p>Mniej więcej w środku zwiedzania wystawy „Inny Trans-Atlantyk’ napotykamy na tajemniczą kotarę, za którą znajduje się ciemne pomieszczenie, a w nim... Chwilę po adaptacji naszego wzroku napotykamy na pudełko ze źródłem światła. Nad nim na suficie zawieszone zostały metalowe płytki o różnych kształtach. Rozglądamy się dookoła dostrzegając refleksy świetlne na ścianach, które w poruszają się w subtelny sposób. Ruchu nie dostrzeżemy nigdzie indziej, tylko w ‘zajączkach na ścianach. Wydaje mi się, że artysta w sprytny sposób wykorzystał cyrkulację powietrza tak, aby wprawić w drżenie metalowe płytki. Julio Le Parc znany jest ze swoich eksperymentów ze światłem w roli głównej.</p>\n<h2>Wnioski końcowe</h2>\n<p>Wystawa ‘Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce Łacińskiej w latach 50. – 70.’ jest po prostu świetna. Wyważenie przestrzenne, wzajemne stosunki dzieł, odległości zostały wyszukane w 100%. Możemy oglądać prace w przez nas samych wyznaczonym kierunku i na każdym kroku zaskoczy nas coś niesamowitego. Zaraz obok obrazu znajdziemy obiekt, stół z materiałami prasowymi, filmem, a jeśli spojrzymy w górę dostrzeżemy kształty zawieszone tuż nad sufitem. Wystawa jest spójna, a jednocześnie pełna niespodzianek. Doświadczanie dzieł każdy z nas musi zainicjować, niczym innym jak… ruchem. Prawdziwy wydźwięk tej ekspozycji dostrzeżemy tylko wtedy, kiedy będziemy w nieustannym ruchu. Myślę, że jest to też genialna propozycja dla osób, które nie mają wielkiego pojęcia o sztuce, a chcą dowiedzieć się czym jest op-art i sztuka kinetyczna. Przyjdź, doświadcz, zrozum!</p>\n<p><img src=\"https://assets2.ello.co/uploads/asset/attachment/6690581/ello-optimized-16c83662.jpg\" alt=\"Zdjęcie przedstawia czarno-biały obraz zawieszony w rogu białej sali.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6690596/ello-optimized-015ee129.jpg\" alt=\"Obraz przedstawia dwa zdjęcia. Z lewej strony widzimy czarny kwadratowy obiekt z wyciętymi kołami, z lewej transparentny obiekt złożony z soczewek i zawieszony w przestrzeni.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6690591/ello-optimized-82903d8c.jpg\" alt=\"Zdjęcie przedstawia zbliżenie na obiekt zbudowany ze szklanych soczewek.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6690604/ello-optimized-566ddc3a.jpg\" alt=\"Zdjęcie przedstawia obraz wiszący na białej ścianie. Na obrazie widzimy czarno-białe koło.\" />\n<img src=\"https://assets0.ello.co/uploads/asset/attachment/6690613/ello-optimized-a8b1bdcd.jpg\" alt=\"Obraz przedstawia dwa zdjęcia. Z lewej strony widzimy obrazek przedstawiający kwadratowe linie. Z prawej strony widzimy trzy obrazki w ramkach przedstawiające kwadraty różnych rozmiarów.\" />\n<img src=\"https://assets2.ello.co/uploads/asset/attachment/6690620/ello-optimized-2e713fd1.jpg\" alt=\"Zdjęcie przedstawia metalową konstrukcję, przez którą możemy dostrzec resztę pomieszczenia.\" />\n<img src=\"https://assets1.ello.co/uploads/asset/attachment/6690633/ello-optimized-050ee119.jpg\" alt=\"Obraz przedstawia dwa zdjęcia. Z lewej strony na pierwszym planie widzimy złotą rzeźbę, a w tle obraz. Z prawej strony widzimy kwadratowy obraz przedstawiający małe kółka.\" /></p>\n<p>Wystawa trwa od 17.11.2017 r. do 11.02.2018 r. i można jej doświadczyć od wtorku do piątku w godz. 12:00-20:00, w sobotę od 11:00-20:00 i niedzielę od 11:00-18:00.</p>\n<ul>\n<li>Wstęp na wystawę jest DARMOWY.</li>\n<li>MUZEUM nad Wisłą - Wybrzeże Kościuszkowskie 22 (Skwer Kpt. S. Skibniewskiego “Cubryny”),</li>\n<li>Więcej informacji o wystawie, artystach i dodatkowych wydarzeniach znajdziecie <a href=\"http://transatlantic.artmuseum.pl/pl\">tutaj</a></li>\n</ul>\n";
var raw = exports.raw = "\n<olela-narrative>\nW marcu tego roku otworzył swoje drzwi pawilon Muzeum Sztuki Nowoczesnej nad Wisłą. Pawilon ten jest tymczasowy, a jego istnienie w roli przestrzeni wystawienniczej szacuje się na około cztery lata. Pierwszą wystawą, jaka miała tam miejsce była ‘Syrena herbem twym zwodnicza’ (tytuł zaczerpnięty został z wiersza Cypriana Kamila Norwida). Była to ekspozycja dość adekwatna, co o miejsca i czasu, pawilon bowiem nie tyko stoi w Warszawie, ale też bardzo blisko samego symbolu tego miasta – pomnika Warszawskiej Syrenki tuż nad brzegiem Wisły. Samo otwarcie było wielkim dwudniowym wydarzeniem naszpikowanym różnego rodzaju atrakcjami dodatkowymi. Mogliśmy uczestniczyć w oprowadzaniu, warsztatach, wspólnym malowaniu muralu, a nawet koncertach. Pamiętam, że dookoła pawilonu stały bardzo modne obecnie ‘foodtracki’ z pysznymi różnościami - od kuchni indyjskiej po polskie pierogi. Przez to klimat zdawał się być nieco festynowo-festiwalowy, ale może to dobry pomysł, aby ludzie przy okazji spędzania miło czasu z przyjaciółmi i rodziną posmakowali nie tylko pikantnego curry, ale też uszczknęli co nieco tematu sztuki. \n</olela-narrative>\n\n## Początek\n\nWystawę ‘Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce Łacińskiej w latach 50. – 70.’ planowałam zobaczyć już od dłuższego czasu. Korzystając z wolnego dnia i (już) zimowej pogody przespacerowałam spokojnie brzegiem rzeki, z wełnianą ciepłą czapą na głowie prosto do pawilonu Muzeum Sztuki Nowoczesnej. Przy wejściu powitały mnie dwie instalacje/rzeźby. Jedną z nich było ‘Penetrable BBL Blue’ Jesús’a Rafael’a Soto. Sporych rozmiarów stalowa konstrukcja o kształcie sześcianu, z której ‘zwisały’ niebieskie (myślę, że gumowe lub plastikowe) sznurki (nie wiem, czy bardziej obrazowo nie podziałało by tutaj słowo: makaron). Moja wyprawa miała miejsce w dość chłodny i wietrzny dzień, toteż ów makaron poruszał się razem z wiatrem, przez co obraz za nim zdawał się ‘migotać’, żyć odbiciem własnego szumu. Dłuższe wpatrywanie się w niego doprowadziło mnie do lekkich zawrotów głowy i powidoku. Ze zmarzniętym nosem i chwiejnym krokiem otworzyłam drzwi Muzeum.\n\n![Zdjęcie przedstawia geometryczną czerwono-czarną rzeźbę stojącą na śniegu na tle budynku ozdobionego rysunkami.](https://assets1.ello.co/uploads/asset/attachment/6690686/ello-optimized-14031b74.jpg)\n![Zdjęcie przedstawia krajobraz. Widzimy biało-niebieską rzeźbę i budynek w tle. Ziemię pokrywa śnieg.](https://assets2.ello.co/uploads/asset/attachment/6690680/ello-optimized-96bc6563.jpg)\n![Zdjęcie przedstawia ziemię pokrytą roztopionym śniegiem,do ziemi przytwierdzona jest tabliczka z napisem. Widzimy też fragment nogi w czarnym obuwiu.](https://assets0.ello.co/uploads/asset/attachment/6690691/ello-optimized-618944d8.jpg)\n![Zdjęcie przedstawia obraz widziany poprzez niebieskie pionowe linie.](https://assets0.ello.co/uploads/asset/attachment/6690702/ello-optimized-baf931ef.jpg)\n\n## Otwarcie\n\nW momencie, kiedy tylko weszłam do środka totalnie zakochałam się w przestrzeni. Przede wszystkim to miejsce wydaje się być olbrzymie, a to za sprawą wysokości pawilonu. Wewnątrz ‘można oddychać’, a co z tym idzie również poszczególne prace oddychają i nie przeszkadzają sobie wzajemnie w odbiorze.\n\n![Zdjęcie przedstawia pomieszczenie z białymi ścianami. Na ścianach wiszą obrazy, a na podłodze stoją rzeźby.](https://assets0.ello.co/uploads/asset/attachment/6690610/ello-optimized-9f4adbba.jpg)\n\nNa wystawie zobaczymy dzieła ponad 30stu artystów związanych z op-artem i sztuką kinetyczną. Gwoli wyjaśnienia:\n1. Op-art, czyli ang. ‘optical art’ - sztuka optyczna, inaczej: wizualizm. Kierunek w malarstwie, grafice, sztuce użytkowej, modzie, którego głównym założeniem było oddziaływać na oko widza (zobacz koniecznie [moodboard op-art](http://sztukauniwersalna.pl/2017-12-07-op-art-moodboard)). Prace op-artu wciągają nas w iluzje optyczne, ‘trenują’ nasz narząd wzroku, proponują grę złudzeń pozorując trójwymiarowość. Pionierem tego kierunku jest Victor Vasarely – Węgier, który już w latach 30’ eksperymentował z geometryczną abstrakcją, która zaprowadziła go do późniejszych fascynacji teoriami percepcji i aktem widzenia (jedną serigrafię Victor’a pt.:’Caracas’ z 1956 r. zobaczymy na wystawie ‘Inny Trans-Atlantyk’). Op-art jest często utożsamiany ze sztuką wizualnych trików, która nie ma na celu wzbudzać większych refleksji. Jednak można go porównać do dziedziny nauki zajmującej się badaniem aparatu widzenia. Najbardziej intensywny czas rozwoju op-art’u przypadł na lata 50. i 60. XX wieku.\n2. Sztuka kinetyczna - (z gr. kinēma 'ruch') kierunek w sztuce koncentrujący się na zagadnieniu ruchu – rzeczywistym lub pozornym. W prostym wyjaśnieniu, to sztuka wykorzystująca pewne mechanizmy (naturalne lub sztuczne) dla oddania ruchu lub jego wrażenia. Tak, jak np. w przypadku wyżej opisanej instalacji Jesús’a Rafael’a Soto – który dzięki naturalnemu czynnikowi, jakim jest wiatr, stwarza w obiekcie ruch, który to z kolei buduje obraz.\n\n## Naścienne\n\nWystawę zaczynam oglądać kierując się w prawą stronę. Pierwszą pracą jaką napotykam na swojej drodze jest ‘Physichromie No. 1025’ Carlos’a Cruz-Diez z 1975 r. Wenezuelski artysta każe nam poruszać się oglądając jego prace. Z lewej na prawą, z prawej na lewą, z nogi na nogę, tańczymy wokół dzieła, które odwzajemnia taniec i ukazuje nam coraz to nowe oblicza siebie. Sam autor twierdzi w jednym z wywiadów: „Przyzwyczailiśmy się do tego, by kolor uznawać za właściwość przypisaną obiektom – coś, co istnieje dzięki określaniu czegoś innego. Kolory jednak są nie tyle własnościami rzeczy, ile autonomicznymi istnościami, które zamiast towarzyszyć bytom, warunkują ich postrzeganie”.Carlos chciał zrewolucjonizować malarstwo, które według niego od setek lat polega na nakładaniu farby na płótno. Artysta odnalazł swój autorski styl w technice wycinania pasków z tektury, malowania ich na konkretny kolor i doklejania do płaszczyzny płótna. W ten sposób obraz zmienia się wraz ze zmiana perspektywy widza. Ujawniają się coraz to nowe kolory i figury geometryczne, ruch pojawia się w samym obrazie. Nie wiem, czy organizatorzy wystawy świadomie zawiesili obraz tuż pod kratkami wentylacyjnymi, ale to połączenie zachwyca podobieństwami!\n\n![Obraz przedstawia dwa zdjęcia, które ukazują obraz znanego artysty zawieszony na białej ścianie.](https://assets2.ello.co/uploads/asset/attachment/6690631/ello-optimized-456cc20b.jpg)\n\nDziełem, które przykuło moja uwagę na ok. pół godziny był ‘Obiekt kinetyczny KK 9a ‘ Abraham’a Palatnik’a (1966-2009). Tutaj mamy odwrotną sytuację w stosunku do poprzednika. Carlos Cruz-Diez liczył na ruch widza, Abraham z kolei włącza ruch w strukturę dzieł. Jego prace żyją – za pomocą mechanizmu ożywają i ruszają się. ‘Obiekt kinetyczny KK 9a ‘ to geometryczne kształty w różnych kolorach zamontowane na prostych lub łukowatych metalowych pręcikach. Nie mam pojęcia za pomocą jakiego silnika artysta osiągną taki efekt (podobno nauczył się budować silniki o zapłonie iskrowym), ale ruch tej pracy zdaje się oddychać razem z nami. Poszczególne elementy poruszają się dość ‘ospale’ wprawiając nas w stan bliski medytacji. Według Palatnika to właśnie wynalazki pozwalają nam zobaczyć świat w zupełnie nowy sposób. W pewnym momencie krytycy zaczęli nazywać artystę konstruktorem, a nową formę tworzenia obrazów – malarstwem maszynowym.\n\n![Obraz przedstawia dwa zdjęcia rzeźby składającej się z patyczków, na których końcach zamieszczone są figury geometryczne.](https://assets1.ello.co/uploads/asset/attachment/6690623/ello-optimized-36c24433.jpg)\n\n## Przestrzenne\n\n![Obraz przedstawia trzy fotografie. Na zdjęciach z prawej strony widzimy sylwetki ludzkie, z lewej pracę artystyczną przedstawiającą figury geometryczne czarne i czerwone.](https://assets2.ello.co/uploads/asset/attachment/6690639/ello-optimized-3502d85e.jpg)\n\nOprócz prac ‘ściennych’ - obrazów i reliefów (Henryk Stażewski - zdjęcie powyżej) możemy też na wystawie „Inny Trans-Atlantyk ‘ doświadczyć obiektów w przestrzeni. Za słowo ‘obiekt’ zapewne obraziłaby się Lygia Clark – artystka wizualna, rzeźbiarka, performerka, która swoje prace nazywała „quasi-ciałami”. Jej quasi-ciało ‘Stwór ptak z przestrzeni’ to rzeźba z aluminium, którą widz może dowolnie kształtować. Specjalnie zamontowane zawiasy pozwalają na zmianę kierunku płaszczyzn dzieła. Lygia zaznacza, że chciała nie tylko ożywić dzieło sztuki, ale też zaangażować odbiorców w akt twórczy.\n\n![Obraz przedstawia dwa zdjęcia. Na zdjęciu po lewej stronie widzimy obraz na białej ścianie, na zdjęciu po prawej rzeźbę z metalu, a w tle obrazy na białej ścianie.](https://assets1.ello.co/uploads/asset/attachment/6690627/ello-optimized-1ac23d9d.jpg)\n\nMira Schendel z kolei proponuje nam spacer dookoła ‘Zatrzymane fale prawdopodobieństwa’. Ta instalacja to swoisty paradoks – pojedyncza żyłka nylonowa jest dla ludzkiego oka niewidoczna, dopiero po pomnożeniu jej przez 20 000 zaczyna zawłaszczać przestrzeń, w której się znajduje, a my na własnej skórze odczuwamy siłę w jej transparentności. Całości towarzyszy cytat z Biblii: ‘Wtedy rzekł: «Wyjdź, aby stanąć na górze wobec Pana!» A oto Pan przechodził. Gwałtowna wichura rozwalająca góry i druzgocąca skały [szła] przed Panem; ale Pan nie był w wichurze. A po wichurze - trzęsienie ziemi: Pan nie był w trzęsieniu ziemi. Po trzęsieniu ziemi powstał ogień: Pan nie był w ogniu. A po tym ogniu - szmer łagodnego powiewu.’ (Stary Testament; I Księga Królewska; 19: 11-12). Ta instalacja została specjalnie przygotowana przez artystkę na X Biennale w São Paulo w 1969 roku jako komentarz do represyjnej polityki kulturalnej i rządów dyktatury w Brazylii tamtego czasu.\n\n![Obraz przedstawia dwa zdjęcia. Z lewej strony widzimy fotografię ukazującą fragment nóg osób stojących za białą ścianą, całość przykrywa biały szum. Z prawej strony widzimy oświetlone pomieszczenie z napisem na ścianie.](https://assets0.ello.co/uploads/asset/attachment/6690645/ello-optimized-b6bcdaf1.jpg)\n\nMniej więcej w środku zwiedzania wystawy „Inny Trans-Atlantyk’ napotykamy na tajemniczą kotarę, za którą znajduje się ciemne pomieszczenie, a w nim… Chwilę po adaptacji naszego wzroku napotykamy na pudełko ze źródłem światła. Nad nim na suficie zawieszone zostały metalowe płytki o różnych kształtach. Rozglądamy się dookoła dostrzegając refleksy świetlne na ścianach, które w poruszają się w subtelny sposób. Ruchu nie dostrzeżemy nigdzie indziej, tylko w ‘zajączkach na ścianach. Wydaje mi się, że artysta w sprytny sposób wykorzystał cyrkulację powietrza tak, aby wprawić w drżenie metalowe płytki. Julio Le Parc znany jest ze swoich eksperymentów ze światłem w roli głównej.\n\n## Wnioski końcowe\n\nWystawa ‘Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce Łacińskiej w latach 50. – 70.’ jest po prostu świetna. Wyważenie przestrzenne, wzajemne stosunki dzieł, odległości zostały wyszukane w 100%. Możemy oglądać prace w przez nas samych wyznaczonym kierunku i na każdym kroku zaskoczy nas coś niesamowitego. Zaraz obok obrazu znajdziemy obiekt, stół z materiałami prasowymi, filmem, a jeśli spojrzymy w górę dostrzeżemy kształty zawieszone tuż nad sufitem. Wystawa jest spójna, a jednocześnie pełna niespodzianek. Doświadczanie dzieł każdy z nas musi zainicjować, niczym innym jak… ruchem. Prawdziwy wydźwięk tej ekspozycji dostrzeżemy tylko wtedy, kiedy będziemy w nieustannym ruchu. Myślę, że jest to też genialna propozycja dla osób, które nie mają wielkiego pojęcia o sztuce, a chcą dowiedzieć się czym jest op-art i sztuka kinetyczna. Przyjdź, doświadcz, zrozum!\n\n![Zdjęcie przedstawia czarno-biały obraz zawieszony w rogu białej sali.](https://assets2.ello.co/uploads/asset/attachment/6690581/ello-optimized-16c83662.jpg)\n![Obraz przedstawia dwa zdjęcia. Z lewej strony widzimy czarny kwadratowy obiekt z wyciętymi kołami, z lewej transparentny obiekt złożony z soczewek i zawieszony w przestrzeni.](https://assets0.ello.co/uploads/asset/attachment/6690596/ello-optimized-015ee129.jpg)\n![Zdjęcie przedstawia zbliżenie na obiekt zbudowany ze szklanych soczewek.](https://assets2.ello.co/uploads/asset/attachment/6690591/ello-optimized-82903d8c.jpg)\n![Zdjęcie przedstawia obraz wiszący na białej ścianie. Na obrazie widzimy czarno-białe koło.](https://assets0.ello.co/uploads/asset/attachment/6690604/ello-optimized-566ddc3a.jpg)\n![Obraz przedstawia dwa zdjęcia. Z lewej strony widzimy obrazek przedstawiający kwadratowe linie. Z prawej strony widzimy trzy obrazki w ramkach przedstawiające kwadraty różnych rozmiarów.](https://assets0.ello.co/uploads/asset/attachment/6690613/ello-optimized-a8b1bdcd.jpg)\n![Zdjęcie przedstawia metalową konstrukcję, przez którą możemy dostrzec resztę pomieszczenia.](https://assets2.ello.co/uploads/asset/attachment/6690620/ello-optimized-2e713fd1.jpg)\n![Obraz przedstawia dwa zdjęcia. Z lewej strony na pierwszym planie widzimy złotą rzeźbę, a w tle obraz. Z prawej strony widzimy kwadratowy obraz przedstawiający małe kółka.](https://assets1.ello.co/uploads/asset/attachment/6690633/ello-optimized-050ee119.jpg)\n\nWystawa trwa od 17.11.2017 r. do 11.02.2018 r. i można jej doświadczyć od wtorku do piątku w godz. 12:00-20:00, w sobotę od 11:00-20:00 i niedzielę od 11:00-18:00.\n* Wstęp na wystawę jest DARMOWY.\n* MUZEUM nad Wisłą - Wybrzeże Kościuszkowskie 22 (Skwer Kpt. S. Skibniewskiego \"Cubryny\"), \n* Więcej informacji o wystawie, artystach i dodatkowych wydarzeniach znajdziecie [tutaj](http://transatlantic.artmuseum.pl/pl)";
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 89 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ParrotLayout.js": 20,
	"./default.js": 20
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
webpackContext.id = 90;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(92);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(93);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DISQUS_CONFIG = ['shortname', 'identifier', 'title', 'url', 'category_id', 'onNewComment', 'language'];
var __disqusAdded = false;

function copyProps(context, props) {
    var onNewComment = props.onNewComment,
        language = props.language,
        rest = _objectWithoutProperties(props, ['onNewComment', 'language']);

    for (var prop in rest) {
        context.page[prop] = rest[prop];
    }

    // Setting the language - if none is provided, the default one is used
    context.language = language;

    if (onNewComment) {
        context.callbacks = {
            onNewComment: [onNewComment]
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
                // prop "shortname" is only necessary for loading the script, not for the config itself
                if (prop !== 'shortname' && !!_this3.props[prop]) {
                    props[prop] = _this3.props[prop];
                }
            });

            // If Disqus has already been added, reset it
            if (typeof DISQUS !== 'undefined') {
                DISQUS.reset({
                    reload: true,
                    config: function config() {
                        copyProps(this, props);

                        // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
                        this.page.url = this.page.url.replace(/#/, '') + '#!newthread';
                    }
                });
            } else {
                // Otherwise add Disqus to the page
                window.disqus_config = function () {
                    copyProps(this, props);
                };
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
    onNewComment: _propTypes2.default.func,

    /**
     * `language` tells the Disqus service which language should be used.
     * Please refer to https://www.transifex.com/disqus/disqus/ on which languages can be used
     * If undefined, English is used as default one
     */
    language: _propTypes2.default.string
};

DisqusThread.defaultProps = {
    url: typeof window === 'undefined' ? null : window.location.href
};

exports.default = DisqusThread;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = {
  "button": "button-2jGpf",
  "action": "action-thzgL",
  "flat": "flat-37av4",
  "raised": "raised-RUzRk",
  "green": "green-13kdt",
  "purple": "purple-3sfE4",
  "gray": "gray-3voYD"
};

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = {
  "icon": "icon-Jx1Cy"
};

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {
  "logo": "logo-16frb",
  "letterS": "letterS-Jr6Dg",
  "letterU": "letterU-2LdES",
  "dot": "dot-nLIw_",
  "small": "small-3s05n",
  "inline": "inline-1ryMA"
};

/***/ }),
/* 97 */
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
/* 98 */
/***/ (function(module, exports) {

module.exports = {
  "topBar": "topBar-g753r",
  "hamburger": "hamburger-2KHV8",
  "inlineLogo": "inlineLogo-2Jj43",
  "smallLogo": "smallLogo-2-DF1",
  "title": "title-26u9h",
  "topMenu": "topMenu-3N-Xk"
};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = {
  "crumbs": "crumbs-1UWBj",
  "responsive": "responsive-13m41"
};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = {
  "tags": "tags-2jOEG"
};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = {
  "socialButtons": "socialButtons-gYFCo"
};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = {
  "footer": "footer-29RTW",
  "socialButtons": "socialButtons-39DDQ",
  "categories": "categories-2YxG5",
  "bottomParagraph": "bottomParagraph-1edsW",
  "copyright": "copyright-3sn4t",
  "indexLink": "indexLink-185FS",
  "sitemapLink": "sitemapLink-33pi9",
  "scrollUpButton": "scrollUpButton-2byn5"
};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = {
  "panel": "panel-14N6g",
  "visible": "visible-2MQWc",
  "header": "header-awxDH",
  "content": "content-2T64j",
  "current": "current-3aoAm",
  "itemIcon": "itemIcon-3UgT9",
  "itemTitle": "itemTitle-1pXjm",
  "closeButton": "closeButton-3tfbN"
};

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = {
  "jumbo": "jumbo-2fC8T",
  "social": "social-11izd",
  "container": "container-362-H",
  "fullscreen": "fullscreen-1BUqu",
  "center": "center-1nW3W",
  "bottom": "bottom-sSv6u",
  "text": "text-OnLbG",
  "footer": "footer-agm7I"
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var dataLayer = self.dataLayer = self.dataLayer || [];
function gtag(action) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    dataLayer.push(arguments);
}
exports.gtag = gtag;
exports.default = gtag;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = {
  "main": "main-2EmuK",
  "bottom": "bottom-qaW5p",
  "logo": "logo-2wc3f",
  "comments": "comments-U6lN7",
  "menuEntryJumbo": "menuEntryJumbo-1gAPA",
  "tagJumbo": "tagJumbo-2y6Er",
  "indexJumbo": "indexJumbo-3aSGA",
  "all": "all-3amHh",
  "header": "header-3JfGF",
  "disqus_thread": "disqus_thread-1jnRb",
  "footer": "footer-3r5Xl",
  "sideMenu": "sideMenu-3RB85",
  "visible": "visible-202JZ",
  "closed": "closed-3xC98"
};

/***/ }),
/* 107 */
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
var Tile_1 = __webpack_require__(28);
var TableOfContents_1 = __webpack_require__(29);
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
/* 108 */
/***/ (function(module, exports) {

module.exports = {
  "more": "more-3HgSz"
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Icon_1 = __webpack_require__(8);
var s = __webpack_require__(110);
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
exports.default = Recipe;

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = {
  "recipe": "recipe-3EpDA",
  "details": "details-307aJ",
  "header": "header-1vh1P"
};

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Crumbs.js": 113,
	"./Feed.js": 114,
	"./Ingredient.js": 115,
	"./Method.js": 116,
	"./Recipe.js": 117,
	"./TableOfContents.js": 118
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
webpackContext.id = 112;

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "Crumbs")) __webpack_require__.d(__webpack_exports__, "Crumbs", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["Crumbs"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "Crumbs")) __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["Crumbs"]; });





/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "Feed")) __webpack_require__.d(__webpack_exports__, "Feed", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["Feed"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "Feed")) __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["Feed"]; });





/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "Ingredient")) __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["Ingredient"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "Ingredient")) __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["Ingredient"]; });





/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "Method")) __webpack_require__.d(__webpack_exports__, "Method", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["Method"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "Method")) __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["Method"]; });





/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "Recipe")) __webpack_require__.d(__webpack_exports__, "Recipe", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["Recipe"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "Recipe")) __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["Recipe"]; });





/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parrot_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "TableOfContents")) __webpack_require__.d(__webpack_exports__, "TableOfContents", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["TableOfContents"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_parrot_layout__, "TableOfContents")) __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0_parrot_layout__["TableOfContents"]; });





/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(6);
var pages_1 = __webpack_require__(30);
var categories_1 = __webpack_require__(31);
var website = new models_1.Website('', '', '', '');
pages_1.default.forEach(function (page) { return website.addPage(page); });
var tagPage = website.getPageOfUrl('/tag', 'all tags');
function urlFromTitle(title) {
    return "/tags/" + title.toLowerCase().replace(/ /g, '-');
}
var tags = pages_1.default.concat(categories_1.default)
    .map(function (page) { return page.tags; })
    .reduce(function (a, b) { return a.concat(b); })
    .filter(function (tag, index, tags) { return tags.indexOf(tag) == index; })
    .map(function (title) { return new models_1.Tag(title, urlFromTitle(title), tagPage.layout, tagPage.body); });
exports.default = tags;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(6);
var config = __webpack_require__(15);
function checkIsArray(value, name) {
    if (!(value instanceof Array)) {
        throw new Error(name + " must be an array; got " + typeof value);
    }
    return value;
}
function checkIsString(value, name) {
    if (typeof value != 'string') {
        throw new Error(name + " must be a string; got " + typeof value);
    }
    return value;
}
checkIsArray(config.menu, 'config.menu');
var isLocalUrl = function (url) { return url.charAt(0) == '/' && url.charAt(1) != '/'; };
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