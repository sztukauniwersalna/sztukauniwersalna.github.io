(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/paramorph/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__("./node_modules/paramorph/model/index.js");
exports.Layout = model_1.Layout;
exports.Include = model_1.Include;
exports.Page = model_1.Page;
exports.Category = model_1.Category;
exports.Collection = model_1.Collection;
exports.Tag = model_1.Tag;
exports.Paramorph = model_1.Paramorph;
var react_1 = __webpack_require__("./node_modules/paramorph/react/index.js");
exports.Content = react_1.Content;
exports.ContextTypes = react_1.ContextTypes;
exports.ContextContainer = react_1.ContextContainer;
exports.Component = react_1.Component;
exports.PureComponent = react_1.PureComponent;
exports.Link = react_1.Link;
exports.DeferredStyles = react_1.DeferredStyles;
exports.DeferredScripts = react_1.DeferredScripts;
exports.Root = react_1.Root;


/***/ }),

/***/ "./node_modules/parrot-layout/Button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var s = __webpack_require__("./node_modules/parrot-layout/Button/style.js");
function Button(_a) {
    var url = _a.url, _b = _a.variant, variant = _b === void 0 ? 'flat' : _b, _c = _a.color, color = _c === void 0 ? 'gray' : _c, onClick = _a.onClick, children = _a.children;
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
    return (React.createElement("span", { className: classNames.join(' ') },
        React.createElement("a", { href: url, onClick: onClick }, children)));
}
function renderLink(classNames, url, onClick, children) {
    return (React.createElement("span", { className: classNames.join(' ') },
        React.createElement(paramorph_1.Link, { to: url, onClick: onClick }, children)));
}
function renderButton(classNames, onClick, children) {
    return (React.createElement("span", { className: classNames.join(' ') },
        React.createElement("button", { onClick: onClick }, children)));
}


/***/ }),

/***/ "./node_modules/parrot-layout/Button/style.js":
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

/***/ "./node_modules/parrot-layout/Crumbs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var s = __webpack_require__("./node_modules/parrot-layout/Crumbs/style.js");
var Crumbs = /** @class */ (function (_super) {
    __extends(Crumbs, _super);
    function Crumbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crumbs.prototype.render = function () {
        var _a = this.props.responsive, responsive = _a === void 0 ? false : _a;
        var _b = this.context, paramorph = _b.paramorph, page = _b.page;
        return (React.createElement("div", { className: s.crumbs + " " + (responsive ? s.responsive : '') }, paramorph.getCrumbs(page)
            .map(function (crumbs, key) { return (React.createElement("ul", { key: key }, crumbs.map(function (page) { return (React.createElement("li", { key: page.url },
            React.createElement(paramorph_1.Link, { to: page.url }, page.url === '/' ? paramorph.config.title : page.title))); }))); })));
    };
    return Crumbs;
}(paramorph_1.PureComponent));
exports.Crumbs = Crumbs;
exports.default = Crumbs;


/***/ }),

/***/ "./node_modules/parrot-layout/Crumbs/style.js":
/***/ (function(module, exports) {

module.exports = {
  "crumbs": "crumbs-1UWBj",
  "responsive": "responsive-13m41"
};

/***/ }),

/***/ "./node_modules/parrot-layout/FacebookLike/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var s = __webpack_require__("./node_modules/parrot-layout/FacebookLike/style.js");
var FB_PLUGINS_SERVICE = 'https://www.facebook.com/plugins/like.php';
var FacebookLike = /** @class */ (function (_super) {
    __extends(FacebookLike, _super);
    function FacebookLike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacebookLike.prototype.render = function () {
        var url = this.props.url;
        var params = {
            href: url,
            layout: 'button_count',
            action: 'like',
            size: 'large',
            show_faces: false,
            share: false,
            height: 21,
        };
        return (React.createElement("div", { className: s.like },
            React.createElement("iframe", { src: FB_PLUGINS_SERVICE + "?" + urlParamsToString(params), scrolling: 'no' })));
    };
    return FacebookLike;
}(React.Component));
exports.FacebookLike = FacebookLike;
exports.default = FacebookLike;
function urlParamsToString(params) {
    return Object.keys(params)
        .map(function (key) { return key + "=" + encodeURIComponent(params[key]); })
        .join('&');
}


/***/ }),

/***/ "./node_modules/parrot-layout/FacebookLike/style.js":
/***/ (function(module, exports) {

module.exports = {
  "like": "like-3LtG_"
};

/***/ }),

/***/ "./node_modules/parrot-layout/Feed/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var Tile_1 = __webpack_require__("./node_modules/parrot-layout/Tile/index.js");
var TableOfContents_1 = __webpack_require__("./node_modules/parrot-layout/TableOfContents/index.js");
var Spinner_1 = __webpack_require__("./node_modules/parrot-layout/Spinner/index.js");
;
var DEFAULT_PRELOAD_SIZE = 20;
var DEFAULT_BATCH_SIZE = 5;
var s = __webpack_require__("./node_modules/parrot-layout/Feed/style.js");
var Feed = /** @class */ (function (_super) {
    __extends(Feed, _super);
    function Feed(props) {
        var _this = _super.call(this, props) || this;
        var preloadSize = Math.min(props.preloadSize || props.batchSize || DEFAULT_PRELOAD_SIZE, props.pages.length);
        _this.state = {
            loading: preloadSize,
            loaded: preloadSize,
        };
        _this.onContent = _this.onContent.bind(_this);
        _this.onScroll = _this.onScroll.bind(_this);
        return _this;
    }
    Feed.prototype.render = function () {
        var _this = this;
        var _a = this.context, paramorph = _a.paramorph, page = _a.page;
        var _b = this.props, pages = _b.pages, _c = _b.respectLimit, respectLimit = _c === void 0 ? false : _c, props = __rest(_b, ["pages", "respectLimit"]);
        var _d = this.state, loading = _d.loading, loaded = _d.loaded;
        if (respectLimit) {
            return React.createElement(TableOfContents_1.Branch, __assign({ pages: pages.slice(0, page.limit), shallow: true }, props));
        }
        var content = this.getContent();
        return (React.createElement("div", { className: loaded !== loading ? s.loading : '' },
            content.map(function (Content, i) {
                var page = pages[i];
                return (React.createElement(Tile_1.default, { key: page.url, page: page, Content: Content }));
            }),
            React.createElement("div", { className: s.loadTrigger, ref: function (e) { return _this.loadTrigger = e; } },
                React.createElement(Spinner_1.default, null))));
    };
    Feed.prototype.componentDidMount = function () {
        var paramorph = this.context.paramorph;
        var _a = this.props.respectLimit, respectLimit = _a === void 0 ? false : _a;
        var loaded = this.state.loaded;
        if (!respectLimit) {
            paramorph.addContentListener(this.onContent);
        }
        window.addEventListener('scroll', this.onScroll);
        this.maybeLoadInitialBatch();
    };
    Feed.prototype.componentWillUnmount = function () {
        var paramorph = this.context.paramorph;
        var _a = this.props.respectLimit, respectLimit = _a === void 0 ? false : _a;
        if (!respectLimit) {
            paramorph.removeContentListener(this.onContent);
        }
        window.removeEventListener('scroll', this.onScroll);
    };
    Feed.prototype.getContent = function () {
        var e_1, _a;
        var paramorph = this.context.paramorph;
        var pages = this.props.pages;
        var loading = this.state.loading;
        var content = [];
        try {
            for (var pages_1 = __values(pages), pages_1_1 = pages_1.next(); !pages_1_1.done; pages_1_1 = pages_1.next()) {
                var page = pages_1_1.value;
                var pageContent = paramorph.content[page.url];
                if (pageContent === undefined) {
                    break;
                }
                content.push(pageContent);
                if (content.length === loading) {
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (pages_1_1 && !pages_1_1.done && (_a = pages_1.return)) _a.call(pages_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return content;
    };
    Feed.prototype.onScroll = function () {
        if (this.needsMoreContent() && !this.isAtEnd() && !this.isLoading()) {
            this.loadNextBatch();
        }
    };
    Feed.prototype.onContent = function () {
        if (!this.isLoading()) {
            // not loaded by us
            return;
        }
        var loaded = this.state.loaded;
        var content = this.getContent();
        if (content.length > loaded) {
            this.setState(function (prev) { return ({ loaded: content.length }); });
        }
    };
    Feed.prototype.needsMoreContent = function () {
        var scrollY = window.scrollY, innerHeight = window.innerHeight;
        var offsetTop = this.getOffsetTop(this.loadTrigger);
        return scrollY + innerHeight >= offsetTop;
    };
    Feed.prototype.isLoading = function () {
        var _a = this.state, loading = _a.loading, loaded = _a.loaded;
        return loading !== loaded;
    };
    Feed.prototype.maybeLoadInitialBatch = function () {
        var paramorph = this.context.paramorph;
        var _a = this.state, loading = _a.loading, loaded = _a.loaded;
        var pages = this.props.pages;
        var content = this.getContent();
        if (content.length === loaded) {
            this.onScroll();
            return;
        }
        this.setState(function (prev) { return ({ loaded: content.length }); }, function () {
            var batch = pages.slice(0, loading);
            batch.map(function (page) { return paramorph.loadContent(page.url); });
        });
    };
    Feed.prototype.loadNextBatch = function () {
        var _a = this.context, paramorph = _a.paramorph, page = _a.page;
        var _b = this.props, pages = _b.pages, _c = _b.batchSize, batchSize = _c === void 0 ? DEFAULT_BATCH_SIZE : _c;
        var loading = this.state.loading;
        var nextLoading = Math.min(loading + batchSize, pages.length);
        var batch = pages.slice(loading, nextLoading);
        batch.map(function (page) { return paramorph.loadContent(page.url); });
        this.setState(function (prev) { return (__assign({}, prev, { loading: nextLoading })); });
    };
    Feed.prototype.getOffsetTop = function (elem) {
        var offsetParent = elem.offsetParent;
        var parentOffset = (offsetParent ? this.getOffsetTop(offsetParent) : 0);
        return elem.offsetTop + parentOffset;
    };
    Feed.prototype.isAtEnd = function () {
        var loading = this.state.loading;
        var pages = this.props.pages;
        return loading === pages.length;
    };
    return Feed;
}(paramorph_1.PureComponent));
exports.Feed = Feed;
exports.default = Feed;


/***/ }),

/***/ "./node_modules/parrot-layout/Feed/style.js":
/***/ (function(module, exports) {

module.exports = {
  "loadTrigger": "loadTrigger-1-d0a",
  "loading": "loading-1Mzry"
};

/***/ }),

/***/ "./node_modules/parrot-layout/Footer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var Button_1 = __webpack_require__("./node_modules/parrot-layout/Button/index.js");
var Icon_1 = __webpack_require__("./node_modules/parrot-layout/Icon/index.js");
var SocialButtons_1 = __webpack_require__("./node_modules/parrot-layout/SocialButtons/index.js");
var s = __webpack_require__("./node_modules/parrot-layout/Footer/style.js");
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var _a = this.context, paramorph = _a.paramorph, page = _a.page;
        var index = paramorph.pages['/'];
        var sitemap = paramorph.pages['/sitemap'];
        return (React.createElement("footer", { className: s.footer },
            React.createElement("div", { className: s.socialButtons },
                React.createElement(SocialButtons_1.default, null)),
            React.createElement("ul", { className: s.categories }, paramorph.config.menu.map(function (entry) { return (React.createElement("li", { key: entry.url },
                React.createElement(Button_1.default, { url: entry.url }, entry.title))); })),
            React.createElement("p", { className: s.bottomParagraph },
                React.createElement("span", { className: s.copyright }, "\u00A9 2017 Aleksandra Krawczyk"),
                React.createElement("span", { className: s.indexLink },
                    React.createElement(paramorph_1.Link, { to: index.url }, index.title)),
                React.createElement("span", { className: s.sitemapLink },
                    React.createElement(paramorph_1.Link, { to: sitemap.url }, sitemap.title))),
            React.createElement("div", { className: s.scrollUpButton },
                React.createElement(Button_1.default, { variant: 'action', color: 'gray', onClick: function () { return window.scrollTo(0, 0); } },
                    React.createElement(Icon_1.default, { name: 'arrow_upward' })))));
    };
    return Footer;
}(paramorph_1.PureComponent));
exports.Footer = Footer;
exports.default = Footer;


/***/ }),

/***/ "./node_modules/parrot-layout/Footer/style.js":
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

/***/ "./node_modules/parrot-layout/Icon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var s = __webpack_require__("./node_modules/parrot-layout/Icon/style.js");
function Icon(_a) {
    var name = _a.name;
    if (name === undefined) {
        return null;
    }
    switch (name) {
        case 'facebook': return renderFacebookIcon();
        case 'instagram': return renderInstagramIcon();
        default: return renderMaterialIcon(name);
    }
}
exports.Icon = Icon;
exports.default = Icon;
function renderMaterialIcon(name) {
    return (React.createElement("i", { className: 'material-icons' }, name));
}
function renderFacebookIcon() {
    return (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', className: s.icon },
        React.createElement("g", null,
            React.createElement("path", { d: 'M20.85,0H3.17C1.08,0,0,1.09,0,3.2V20.86A2.82,2.82,0,0,0,3.1,24h8.74V12H9.61V8.85h2.23V7.72a7.74,7.74,0,0,1,.4-2.85,3.2,3.2,0,0,1,1.51-1.53,5.64,5.64,0,0,1,2.76-.59,11.23,11.23,0,0,1,3.35.51L19.31,6a8.2,8.2,0,0,0-1.84-.23,1.59,1.59,0,0,0-1.24.42,2.26,2.26,0,0,0-.38,1.55V8.85h3V12h-3V24h5A2.84,2.84,0,0,0,24,20.82V3.15A2.82,2.82,0,0,0,20.85,0Z' }))));
}
function renderInstagramIcon() {
    return (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', className: s.icon },
        React.createElement("g", null,
            React.createElement("path", { d: 'M20.85,0H3.17C1.08,0,0,1.09,0,3.2V20.86A2.82,2.82,0,0,0,3.1,24H20.85A2.84,2.84,0,0,0,24,20.82V3.15A2.82,2.82,0,0,0,20.85,0Zm-2,2.7c2.37,0,2.37,0,2.37,2.4s0,2.33-2.33,2.33-2.37,0-2.37-2.38S16.57,2.7,18.9,2.7ZM12,7.34a4.65,4.65,0,1,1-.07,9.3,4.72,4.72,0,0,1-4.6-4.71A4.74,4.74,0,0,1,12,7.34Zm9.26,12.5c0,1.12-.32,1.42-1.43,1.42H4.15c-1.1,0-1.42-.3-1.42-1.42,0-2.91,0-5.85,0-8.76,0-.83.23-1,1-1,1.09.1,1.11,0,1,1.1a7.41,7.41,0,0,0,5.81,8,7.47,7.47,0,0,0,8.57-5.15,7.39,7.39,0,0,0,.16-3.44c-.09-.41,0-.5.39-.5,1.66-.12,1.66-.16,1.66,1.55Z' }))));
}


/***/ }),

/***/ "./node_modules/parrot-layout/Icon/style.js":
/***/ (function(module, exports) {

module.exports = {
  "icon": "icon-Jx1Cy"
};

/***/ }),

/***/ "./node_modules/parrot-layout/Image/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var s = __webpack_require__("./node_modules/parrot-layout/Image/style.js");
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            step: 'static',
        };
        _this.maybeStartLoading = _this.maybeStartLoading.bind(_this);
        return _this;
    }
    Image.prototype.render = function () {
        var _this = this;
        var _a = this.props, src = _a.src, alt = _a.alt;
        var step = this.state.step;
        if (!window.thumbs) {
            return (React.createElement("img", { className: 'image', src: src, alt: alt }));
        }
        var thumb = window.thumbs[src] || { ratio: 0, data: '' };
        return (React.createElement("div", { className: "image " + s.container + " " + s[step], style: { height: 100 / thumb.ratio + "vw" }, ref: function (e) { return _this.container = e; } },
            React.createElement("img", { className: s.image, src: step !== 'static' ? src : '', alt: alt, onLoad: function () { return _this.setStep('transition'); }, onTransitionEnd: function () { return _this.setStep('ready'); } }),
            React.createElement("img", { className: s.thumbnail, src: "data:image/png;base64," + encodeURIComponent(thumb.data), alt: 'thumbnail' }),
            React.createElement("noscript", null,
                React.createElement("img", { src: src, alt: alt }))));
    };
    Image.prototype.componentDidMount = function () {
        if (!window.thumbs) {
            return;
        }
        window.addEventListener('scroll', this.maybeStartLoading);
        window.addEventListener('resize', this.maybeStartLoading);
        this.maybeStartLoading();
    };
    Image.prototype.componentWillUnmount = function () {
        if (!window.thumbs) {
            return;
        }
        window.removeEventListener('scroll', this.maybeStartLoading);
        window.removeEventListener('resize', this.maybeStartLoading);
    };
    Image.prototype.maybeStartLoading = function () {
        if (this.state.step !== 'static' || !isInViewport(this.container, 128)) {
            return;
        }
        this.setStep('loading');
    };
    Image.prototype.setStep = function (step) {
        this.setState(function (prev) { return (__assign({}, prev, { step: step })); });
    };
    return Image;
}(React.Component));
exports.Image = Image;
exports.default = Image;
function isInViewport(element, margin) {
    if (margin === void 0) { margin = 0; }
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var upperTrigger = 0 + margin;
    var lowerTrigger = windowHeight - margin;
    return !((rect.top <= upperTrigger && rect.bottom <= upperTrigger)
        || (rect.top >= lowerTrigger && rect.bottom >= lowerTrigger));
}


/***/ }),

/***/ "./node_modules/parrot-layout/Image/style.js":
/***/ (function(module, exports) {

module.exports = {
  "container": "container-1L8oV",
  "thumbnail": "thumbnail-2w5y1",
  "loading": "loading-wuc2W",
  "static": "static-36xmc",
  "ready": "ready-2Fic5",
  "transition": "transition-M3Bnj"
};

/***/ }),

/***/ "./node_modules/parrot-layout/Jumbotron/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var SocialButtons_1 = __webpack_require__("./node_modules/parrot-layout/SocialButtons/index.js");
var s = __webpack_require__("./node_modules/parrot-layout/Jumbotron/style.js");
var Jumbotron = /** @class */ (function (_super) {
    __extends(Jumbotron, _super);
    function Jumbotron() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jumbotron.prototype.render = function () {
        var _a = this.props, children = _a.children, _b = _a.fullscreen, fullscreen = _b === void 0 ? false : _b, _c = _a.align, align = _c === void 0 ? 'center' : _c;
        return (React.createElement("div", { className: s.container + " " + (fullscreen ? s.fullscreen : '') + " " + s[align] },
            React.createElement("div", { className: s.jumbo + " contrast compact non-responsive strong" },
                React.createElement("div", { className: s.text + " " + (align === 'center' ? 'centered' : '') },
                    React.createElement("div", { className: 'text' }, children)),
                React.createElement("div", { className: 'image' })),
            React.createElement("div", { className: s.footer },
                React.createElement("div", { className: s.social },
                    React.createElement(SocialButtons_1.default, null)))));
    };
    return Jumbotron;
}(paramorph_1.PureComponent));
exports.Jumbotron = Jumbotron;
exports.default = Jumbotron;


/***/ }),

/***/ "./node_modules/parrot-layout/Jumbotron/style.js":
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

/***/ "./node_modules/parrot-layout/Logo/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var s = __webpack_require__("./node_modules/parrot-layout/Logo/style.js");
function Logo(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'inline' : _b;
    return (React.createElement("svg", { className: s.logo + " " + s[variant], xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + getDimensions(variant).join(' '), version: "1.1" },
        React.createElement("g", null, renderLogo(variant)
            .map(function (element, key) { return React.cloneElement(element, { key: key }); }))));
}
exports.Logo = Logo;
exports.default = Logo;
function renderLogo(variant) {
    switch (variant) {
        case 'small': return renderSmallLogo();
        case 'inline': return renderInlineLogo();
        case 'full': return renderFullLogo();
    }
}
function renderSmallLogo() {
    return [(React.createElement("path", { className: s.letterU, d: "M521.3,0V118.14q0,46.93-21.67,72t-60.87,25.12h-7.18q-39.48,0-60.87-25t-21.39-72.18V0h37.54V118.14q0,17.12,2.48,28.43t7.87,18.36a28.82,28.82,0,0,0,13.8,9.94q8.41,2.9,20.56,2.9h7.18a61.25,61.25,0,0,0,20.43-3,30.88,30.88,0,0,0,14.08-9.94q5.52-6.89,8-18.36t2.48-28.29V0Z" })), (React.createElement("rect", { className: s.letterU, x: "520.55", width: "97.74", height: "37.58" })), (React.createElement("path", { className: s.letterS, d: "M3.59,215.31V177.77H78.94q17.39,0,28.71-8.28T119,148a24.8,24.8,0,0,0-3-12.14,30.35,30.35,0,0,0-8.28-9.52A39,39,0,0,0,95,120.08a56.18,56.18,0,0,0-16-2.21H61.83a68.86,68.86,0,0,1-24.57-4.28,57.66,57.66,0,0,1-19.6-12.15,56.88,56.88,0,0,1-13-18.49A57.74,57.74,0,0,1,0,59.35,56.59,56.59,0,0,1,4.83,35.89,56,56,0,0,1,18.49,17.11,64.11,64.11,0,0,1,39.75,4.56,78.78,78.78,0,0,1,67.08,0L386.87,0V37.56l-321.73,0q-11.87,0-18.77,6.49a20.65,20.65,0,0,0-6.9,15.6,21.8,21.8,0,0,0,7,16.56q7,6.62,18.63,6.62H86.4a71.15,71.15,0,0,1,26.5,4.83,61.4,61.4,0,0,1,21,13.66,63.13,63.13,0,0,1,13.8,21,69.31,69.31,0,0,1,5,26.5,66.87,66.87,0,0,1-5.25,26.78,59.83,59.83,0,0,1-15,21A70.9,70.9,0,0,1,109,210.34a86.77,86.77,0,0,1-30.09,5ZM65.14,37.54,67.08,0" })), (React.createElement("circle", { className: s.dot, cx: "618.29", cy: "171.76", r: "43.54" }))];
}
function renderInlineLogo() {
    return [(React.createElement("path", { className: s.lettersZTUK, d: "M389.84,47.45,421.43.81h-22L354.19,72.26V.81h-48V19.27h0V58.84A67,67,0,0,1,305,72.73a21.55,21.55,0,0,1-3.93,9,15.16,15.16,0,0,1-6.91,4.88,30.08,30.08,0,0,1-10,1.49h-3.52a31.24,31.24,0,0,1-10.1-1.42,14.15,14.15,0,0,1-6.78-4.88,22.68,22.68,0,0,1-3.86-9,66.65,66.65,0,0,1-1.22-14V.81H161.55l0,18.38h27V88.12H107.86l44.33-69.27A14.26,14.26,0,0,0,154.77,11a8.6,8.6,0,0,0-4-7.39q-4-2.78-10.51-2.78H84V19.23H129.3L85.09,88.52q-3.53,5.56-3.52,9.35,0,8.68,14.1,8.68H207V19.25h33.21V58.84q0,23.18,10.51,35.45t29.89,12.27h3.52q19.25,0,29.89-12.34t10.64-35.38V19.27h11.11V98.15a9.63,9.63,0,0,0,2.17,6.64,7.25,7.25,0,0,0,5.69,2.44,15.27,15.27,0,0,0,5.9-1.15,10,10,0,0,0,4.68-4.27l24.67-38L408,106.55H433Z" })), (React.createElement("path", { className: s.letterA, d: "M495.44,5.56a11.09,11.09,0,0,1,4.68-4.27A13.86,13.86,0,0,1,506,0a7,7,0,0,1,5.63,2.51,10.12,10.12,0,0,1,2.1,6.71v97.34h-18.3V35.11l-45.28,71.44h-22Z" })), (React.createElement("path", { className: s.letterN, d: "M674.56.55l52.06,73.6V.81h17.62V97.47q0,10.17-6.91,10.17a11.3,11.3,0,0,1-6-1.56,29.17,29.17,0,0,1-5.69-4.81L673.88,33.21v73.34H656.12V.55Z" })), (React.createElement("path", { className: s.letterI, d: "M756,106.55V.81h18.44V106.55Z" })), (React.createElement("path", { className: s.lettersWE, d: "M954.2,88.12v-26h28.6V43.79H954.2V19.25h33.22V.81H905.66V72.26L864.46,7.18a12.58,12.58,0,0,0-5-5.08A12.86,12.86,0,0,0,853.88.81a12.18,12.18,0,0,0-4.61.88,11.4,11.4,0,0,0-3.8,2.51,12,12,0,0,0-2.57,3.86,12.15,12.15,0,0,0-.95,4.81V72.26L796.67.81h-22l67.24,101a10.57,10.57,0,0,0,4.67,4.2,14.52,14.52,0,0,0,5.9,1.22,7.24,7.24,0,0,0,5.69-2.44,9.63,9.63,0,0,0,2.17-6.64V33.76l45.28,68.05a10.62,10.62,0,0,0,4.68,4.2,14.48,14.48,0,0,0,5.9,1.22,7.25,7.25,0,0,0,5.69-2.44,9.66,9.66,0,0,0,2.17-6.64V19.27h11.65v87.29h63.49V88.12Z" })), (React.createElement("path", { className: s.lettersRS, d: "M1157.41,60.87a31,31,0,0,0-6.78-10.3,30.19,30.19,0,0,0-10.3-6.71,34.94,34.94,0,0,0-13-2.37h-10.44a12.8,12.8,0,0,1-9.15-3.25,10.71,10.71,0,0,1-3.46-8.13,10.14,10.14,0,0,1,3.39-7.66q3.39-3.18,9.22-3.19h36.06V.81h-35.11a38.7,38.7,0,0,0-13.42,2.24A31.5,31.5,0,0,0,1094,9.22a27.51,27.51,0,0,0-6.71,9.22A27.84,27.84,0,0,0,1084.88,30a28.38,28.38,0,0,0,2.3,11.59,28,28,0,0,0,6.37,9.08,28.35,28.35,0,0,0,9.63,6,33.79,33.79,0,0,0,12.06,2.1h8.41a27.58,27.58,0,0,1,7.86,1.08,19.19,19.19,0,0,1,6.24,3.05,14.93,14.93,0,0,1,4.07,4.68,12.2,12.2,0,0,1,1.49,6,12.54,12.54,0,0,1-5.56,10.57q-5.56,4.07-14.1,4.07h-65.34l-15.05-16a43.59,43.59,0,0,0,15.59-5.22,35.73,35.73,0,0,0,10-8.61,31.19,31.19,0,0,0,5.42-10.44A38.46,38.46,0,0,0,1075.93,37a37,37,0,0,0-3.12-15.59,32.35,32.35,0,0,0-8.47-11.32,37,37,0,0,0-12.68-6.91A50.31,50.31,0,0,0,1036.08.81H996.9V106.55h18.44V19.25h20.34q10.17,0,15.66,4.54t5.49,13.62q0,9.76-7.12,14.57t-21.89,5.9q-11,.81-11,9.49a9.36,9.36,0,0,0,1.29,4.61,25,25,0,0,0,3.73,4.88l28.06,29.69h73.75a42.61,42.61,0,0,0,14.78-2.44,34.82,34.82,0,0,0,11.45-6.78,29.4,29.4,0,0,0,7.39-10.3,32.84,32.84,0,0,0,2.58-13.15A34.1,34.1,0,0,0,1157.41,60.87Z" })), (React.createElement("path", { className: s.letterSecondA, d: "M1217.75,5.56a11.11,11.11,0,0,1,4.68-4.27,13.86,13.86,0,0,1,5.9-1.29,7,7,0,0,1,5.63,2.51,10.13,10.13,0,0,1,2.1,6.71v97.34h-18.3V35.11l-45.28,71.44h-22Z" })), (React.createElement("path", { className: s.lettersLN, d: "M1371.88.81V74.15L1320.23,6.23A14.54,14.54,0,0,0,1315.42,2a11.48,11.48,0,0,0-5.08-1.15,8.57,8.57,0,0,0-6.64,2.51,9.52,9.52,0,0,0-2.3,6.71V88.12h-36.19V.81h-18.3V106.55h72.26V33.21l51.79,68.05a29.26,29.26,0,0,0,5.69,4.81,11.31,11.31,0,0,0,6,1.56q6.91,0,6.91-10.17V.81Z" })), (React.createElement("path", { className: s.letterThirdA, d: "M1457.93,5.56a11.11,11.11,0,0,1,4.68-4.27,13.86,13.86,0,0,1,5.9-1.29,7,7,0,0,1,5.63,2.51,10.13,10.13,0,0,1,2.1,6.71v97.34h-18.3V35.11l-45.28,71.44h-22Z" })), (React.createElement("path", { className: s.letterS, d: "M1.76,106.53V88.09h37q8.54,0,14.1-4.07a12.54,12.54,0,0,0,5.56-10.57,12.18,12.18,0,0,0-1.49-6,14.91,14.91,0,0,0-4.07-4.68,19.16,19.16,0,0,0-6.23-3.05,27.59,27.59,0,0,0-7.86-1.08h-8.4a33.82,33.82,0,0,1-12.07-2.1,28.32,28.32,0,0,1-9.62-6A27.94,27.94,0,0,1,2.3,41.52,28.36,28.36,0,0,1,0,29.93,27.79,27.79,0,0,1,2.37,18.41,27.51,27.51,0,0,1,9.08,9.19,31.49,31.49,0,0,1,19.52,3,38.69,38.69,0,0,1,32.94.78h155.6V19.23H32q-5.83,0-9.22,3.19a10.14,10.14,0,0,0-3.39,7.66,10.7,10.7,0,0,0,3.46,8.13A12.81,12.81,0,0,0,32,41.45H42.43a34.94,34.94,0,0,1,13,2.37,30.15,30.15,0,0,1,10.3,6.71,31,31,0,0,1,6.78,10.3,34,34,0,0,1,2.44,13A32.84,32.84,0,0,1,72.39,87,29.38,29.38,0,0,1,65,97.31a34.82,34.82,0,0,1-11.45,6.78,42.61,42.61,0,0,1-14.78,2.44ZM32,19.22,32.94.78" })), (React.createElement("path", { className: s.letterU, d: "M687.43.29H621.36v58a67,67,0,0,1-1.22,13.9,21.55,21.55,0,0,1-3.93,9,15.16,15.16,0,0,1-6.91,4.88,30.08,30.08,0,0,1-10,1.49h-3.52a31.24,31.24,0,0,1-10.1-1.42,14.15,14.15,0,0,1-6.78-4.88,22.68,22.68,0,0,1-3.86-9,66.65,66.65,0,0,1-1.22-14V.29H555.34v58q0,23.18,10.51,35.45T595.74,106h3.52q19.25,0,29.89-12.34T639.8,58.31V18.74h47.63Z" })), (React.createElement("circle", { className: s.dot, cx: "1513.22", cy: "85.02", r: "21.39" }))];
}
function renderFullLogo() {
    return renderInlineLogo().concat([(React.createElement("path", { className: s.signed, d: "M1251.23,174.79a7.92,7.92,0,0,1,1.72,5.83,17.82,17.82,0,0,1-2.44,7.73,35.81,35.81,0,0,1-2.76,4.7,41.73,41.73,0,0,1-3.66,4.61,42.21,42.21,0,0,1-7,6.1q-3.85,2.67-7.82,5.2a3.09,3.09,0,0,1-2.62.54,3.37,3.37,0,0,1-2-1.54,3.46,3.46,0,0,1-.36-2.48,3.15,3.15,0,0,1,1.36-2.12q4.25-2.72,7.68-5.11a31.09,31.09,0,0,0,6-5.38,35.23,35.23,0,0,0,3-3.89,23.08,23.08,0,0,0,2.12-3.8,14.43,14.43,0,0,0,1.08-2.94,2.64,2.64,0,0,0-.45-2.22,2.28,2.28,0,0,0-1.36-.86,8.06,8.06,0,0,0-2.62,0,28.47,28.47,0,0,0-5.61,1.36,32.9,32.9,0,0,0-6.33,2.89,19.63,19.63,0,0,0-3,2.17,8.6,8.6,0,0,0-2.17,2.8c-.12.3-.23.59-.32.86l-.31,1a13.68,13.68,0,0,0-.14,2.48q0,1.22.14,2.31a3.47,3.47,0,0,1-1,2.49,3.51,3.51,0,0,1-2.12.95,3.1,3.1,0,0,1-2.22-.72,4.14,4.14,0,0,1-1.4-2.53,38.11,38.11,0,0,1-.68-6.19q-.13-3.57,0-7.6t.5-8.32q.36-4.29.86-8.27t1-7.46q.54-3.48,1.08-6c.18-1,.38-1.82.59-2.58a6.59,6.59,0,0,1,1-2.12,3.67,3.67,0,0,1,3.53-1.63,3.37,3.37,0,0,1,2.26.77,2.33,2.33,0,0,1,.72,2.21,5.57,5.57,0,0,1-.63,2.12,9.65,9.65,0,0,0-.72,1.67q-.45,2.62-.95,5.92t-1,7.05q-.5,3.75-.86,7.73t-.54,7.87a12.54,12.54,0,0,1,2.35-2.12,21.46,21.46,0,0,1,2.89-1.76,51.43,51.43,0,0,1,6.06-2.49,35.38,35.38,0,0,1,7.05-1.67,13.85,13.85,0,0,1,6.1.23A8.88,8.88,0,0,1,1251.23,174.79Z" })), (React.createElement("path", { className: s.signed, d: "M1299,178.32q.18,2.08.18,5.42t-.27,7.46q-.26,4.11-.66,8.77t-1,9.45q-.62,4.79-1.32,9.49t-1.59,8.86a3.5,3.5,0,0,1-1.59,2.53,3.43,3.43,0,0,1-2.51.45,3.24,3.24,0,0,1-2.22-1.31,3.47,3.47,0,0,1-.41-3q1.09-4.25,1.9-9.49t1.36-10.67q.54-5.43.86-10.62t.41-9.36a1.69,1.69,0,0,0-.18-1.18,1.18,1.18,0,0,0-.77-.45,1.65,1.65,0,0,0-1,.18,3.86,3.86,0,0,0-1,.72q-1.45,1.36-3.62,3.26t-4.61,3.93q-2.44,2-4.93,3.93t-4.56,3.26a20.46,20.46,0,0,1-7.28,2.94,8,8,0,0,1-6.55-1.85,12.17,12.17,0,0,1-2.12-2.71,9.4,9.4,0,0,1-1.13-4.61A17.8,17.8,0,0,1,1255,189a31.41,31.41,0,0,1,1.76-4.84,41.52,41.52,0,0,1,2.31-4.34,26.34,26.34,0,0,1,2.21-3.17,3.57,3.57,0,0,1,2.35-1.45,4.26,4.26,0,0,1,2.35.27,3.24,3.24,0,0,1,1.81,2.12,3.61,3.61,0,0,1-1,3.12,20.08,20.08,0,0,0-1.72,2.53q-.91,1.54-1.72,3.16a20.9,20.9,0,0,0-1.31,3.26,10,10,0,0,0-.5,2.89,3,3,0,0,0,.36,1.58,5.09,5.09,0,0,0,.72.95,2.19,2.19,0,0,0,2.12.54,9.68,9.68,0,0,0,3.12-1.45q2.71-1.72,5.65-4t5.92-4.88q3-2.58,5.83-5.2t5.29-5a4.53,4.53,0,0,1,2.59-1.45,5.55,5.55,0,0,1,2.83.18,4.66,4.66,0,0,1,2,1.54A5.55,5.55,0,0,1,1299,178.32Z" })), (React.createElement("path", { className: s.signed, d: "M1406.82,183.38a12.56,12.56,0,0,1-3,8q-2.93,3.53-9.06,5.88-4,1.54-8.38,3t-8.38,3q-10,3.71-18.08,3.39T1347.32,202q-4.69-4.43-4.69-12.75a26.66,26.66,0,0,1,1.4-8,46.88,46.88,0,0,1,3.8-8.72,49.5,49.5,0,0,1,5.61-8,31,31,0,0,1,6.73-6,4.56,4.56,0,0,1,1.49-2.94,3.19,3.19,0,0,1,3.21-.41,5.82,5.82,0,0,1,2.35,1.67,2.22,2.22,0,0,1,.54,2.49,1.87,1.87,0,0,0,1.45.18,33.84,33.84,0,0,1,7.46-.09,26.1,26.1,0,0,1,9,2.8q3.71,1.81,7.42,4.07a76.4,76.4,0,0,1,6.87,4.7,19.37,19.37,0,0,1,5.11,5.79A13.4,13.4,0,0,1,1406.82,183.38Zm-6.87.18q0-3.17-4.6-7.32a43,43,0,0,0-5.73-4.11q-3.21-1.94-6.81-3.75a23.7,23.7,0,0,0-8.39-2.4,31.08,31.08,0,0,0-7.4.23,5.72,5.72,0,0,1-2.57,0,2.14,2.14,0,0,1-1.67-1.31,24.12,24.12,0,0,0-4.83,5,51,51,0,0,0-4.29,6.83,47.42,47.42,0,0,0-3,7,18.45,18.45,0,0,0-1.13,5.56,20.71,20.71,0,0,0,.9,4.88,7.89,7.89,0,0,0,2.26,3.62q2.62,2.44,8.08,2.4t15-3.21l8.21-2.76q4.42-1.49,8.21-3a19.1,19.1,0,0,0,6-3.66A5.59,5.59,0,0,0,1399.95,183.56Z" })), (React.createElement("path", { className: s.signed, d: "M1454.74,193.6a3.4,3.4,0,0,1,0,2.49,3.75,3.75,0,0,1-2.31,2l-6,2.08a71,71,0,0,1-7.73,2.17,47.6,47.6,0,0,1-8.23,1.08,17.72,17.72,0,0,1-7.5-1.17,13.31,13.31,0,0,1-7.78-8.23,42.9,42.9,0,0,1-2-14.65,44.63,44.63,0,0,1,.72-7.87,58.11,58.11,0,0,1,4.74-14.87,41.23,41.23,0,0,1,3.21-5.65,24.82,24.82,0,0,1,5.74-6.06,7.16,7.16,0,0,1,5.38-1.54q2.71.36,4.47,3.48t2.12,9.27a38.62,38.62,0,0,1,0,5.29,54.64,54.64,0,0,1-.68,5.74q-.5,2.89-1.27,5.65a37.85,37.85,0,0,1-1.76,5,38.78,38.78,0,0,1-2.49,4.84q-1.4,2.3-2.94,4.39T1427.3,191q-1.58,1.81-3,3.35a11.51,11.51,0,0,0,1.67,1.08,6.89,6.89,0,0,0,2.12.82,18.12,18.12,0,0,0,5,0,43.88,43.88,0,0,0,5.61-1q2.89-.72,5.88-1.67t5.69-1.95a3.47,3.47,0,0,1,2.8.09A3.31,3.31,0,0,1,1454.74,193.6Zm-22.06-36.07q-.27-5-1.8-5.34t-3.95,3.44a31.84,31.84,0,0,0-2.33,4.47q-1.17,2.67-2.2,5.88a51.8,51.8,0,0,0-1.66,6.69,44.92,44.92,0,0,0-.72,6.74,21.12,21.12,0,0,0,1.26,8.41q2.33-2.8,4.67-6a34.45,34.45,0,0,0,3.86-6.83,36.06,36.06,0,0,0,1.12-3.48,45.48,45.48,0,0,0,1-4.56q.4-2.44.63-4.88A33.28,33.28,0,0,0,1432.68,157.52Z" })), (React.createElement("path", { className: s.signed, d: "M1488.1,193.87a3.21,3.21,0,0,1,.23,2.53,2.92,2.92,0,0,1-2.12,1.9q-2.08.73-5.34,2t-7.14,2.48a52.93,52.93,0,0,1-8.23,1.76,27.66,27.66,0,0,1-8.5-.14,11.26,11.26,0,0,1-6.42-3q-4.16-4-2.8-11.3a28.71,28.71,0,0,1,1.76-6.42,41.19,41.19,0,0,1,2.67-5.42,39.8,39.8,0,0,1,2.94-4.34,35.77,35.77,0,0,1,2.76-3.16q1.27-1.27,2.53-2.31a10.86,10.86,0,0,1,2.26-1.49,15.73,15.73,0,0,1,2.4-.95,13.53,13.53,0,0,1,2.71-.54,12.15,12.15,0,0,1,2.76,0,6.38,6.38,0,0,1,2.53.9,5.73,5.73,0,0,1,2.08,2.08,8.67,8.67,0,0,1,1,2.75,12.19,12.19,0,0,1,.14,3.17,22.06,22.06,0,0,1-.5,3.21,14.26,14.26,0,0,1-3,5.56,25.37,25.37,0,0,1-5.2,4.56,32,32,0,0,1-6.42,3.3,24.45,24.45,0,0,1-6.6,1.58,4.78,4.78,0,0,0,.72,3.57,4.61,4.61,0,0,0,3,1.67,17.3,17.3,0,0,0,6.74.14,54.51,54.51,0,0,0,7.23-1.67q3.57-1.08,6.78-2.35t5.29-1.9a2.82,2.82,0,0,1,2.4.14A3.57,3.57,0,0,1,1488.1,193.87Zm-18.72-17.72q.63-2.8-.36-3.71a2.56,2.56,0,0,0-1.81-.27,6,6,0,0,0-1.9.63,16.61,16.61,0,0,0-2.8,2.35,27.55,27.55,0,0,0-3.66,4.66,23.47,23.47,0,0,0-2.67,5.65,20.14,20.14,0,0,0,4.16-1.27,23.66,23.66,0,0,0,4.07-2.17,16.24,16.24,0,0,0,3.21-2.76A8,8,0,0,0,1469.38,176.15Z" })), (React.createElement("path", { className: s.signed, d: "M1524.72,193.6a3.4,3.4,0,0,1,0,2.49,3.75,3.75,0,0,1-2.31,2l-6,2.08a71,71,0,0,1-7.73,2.17,47.6,47.6,0,0,1-8.23,1.08,17.72,17.72,0,0,1-7.5-1.17,13.31,13.31,0,0,1-7.78-8.23,42.9,42.9,0,0,1-2-14.65,44.63,44.63,0,0,1,.72-7.87,58.11,58.11,0,0,1,4.74-14.87,41.23,41.23,0,0,1,3.21-5.65,24.82,24.82,0,0,1,5.74-6.06,7.16,7.16,0,0,1,5.38-1.54q2.71.36,4.47,3.48t2.12,9.27a38.62,38.62,0,0,1,0,5.29,54.64,54.64,0,0,1-.68,5.74q-.5,2.89-1.27,5.65a37.85,37.85,0,0,1-1.76,5,38.78,38.78,0,0,1-2.49,4.84q-1.4,2.3-2.94,4.39t-3.12,3.89q-1.58,1.81-3,3.35a11.51,11.51,0,0,0,1.67,1.08,6.89,6.89,0,0,0,2.12.82,18.12,18.12,0,0,0,5,0,43.88,43.88,0,0,0,5.61-1q2.89-.72,5.88-1.67t5.69-1.95a3.47,3.47,0,0,1,2.8.09A3.31,3.31,0,0,1,1524.72,193.6Zm-22.06-36.07q-.27-5-1.8-5.34t-3.95,3.44a31.84,31.84,0,0,0-2.33,4.47q-1.17,2.67-2.2,5.88a51.8,51.8,0,0,0-1.66,6.69,44.92,44.92,0,0,0-.72,6.74,21.12,21.12,0,0,0,1.26,8.41q2.33-2.8,4.67-6a34.45,34.45,0,0,0,3.86-6.83,36.06,36.06,0,0,0,1.12-3.48,45.48,45.48,0,0,0,1-4.56q.4-2.44.63-4.88A33.28,33.28,0,0,0,1502.65,157.52Z" })), (React.createElement("path", { className: s.signed, d: "M1571.28,193.42a3.44,3.44,0,0,1,.68,2.71,3.38,3.38,0,0,1-1.67,2.44,46,46,0,0,1-7,3.12,32.12,32.12,0,0,1-7.28,1.76,14.19,14.19,0,0,1-6.1-.45,7.74,7.74,0,0,1-3.66-3.16,7.66,7.66,0,0,1-1.13-2.44,10,10,0,0,1-.5-2.89.89.89,0,0,0-.68-.86,1.61,1.61,0,0,0-1.31.41,26.75,26.75,0,0,0-2.4,1.76q-1.4,1.13-3,2.48t-3.21,2.8q-1.63,1.44-3.08,2.62a11.76,11.76,0,0,1-6.42,2.76,6.54,6.54,0,0,1-4.88-1.58q-2.35-2.08-2.35-6.24a17.82,17.82,0,0,1,.63-3.93,21,21,0,0,1,1.45-3.75,33.91,33.91,0,0,1,3.35-5.33,55.55,55.55,0,0,1,4.2-4.93,51.88,51.88,0,0,1,4.48-4.16q2.26-1.85,4.16-3.12,1.62-1.08,3.71-2.3a16.63,16.63,0,0,1,4.48-1.81,13.28,13.28,0,0,1,5-.23,10.57,10.57,0,0,1,5.24,2.53,3.19,3.19,0,0,1,1.27,2.17,3.84,3.84,0,0,1-.45,2.17,3.52,3.52,0,0,1-2.3,1.67,3.74,3.74,0,0,1-3-.5,5.66,5.66,0,0,0-4.57-1.22,15.44,15.44,0,0,0-5.83,2.67,37.73,37.73,0,0,0-3.66,2.85,47.32,47.32,0,0,0-3.93,3.84q-1.9,2.08-3.57,4.29a25.28,25.28,0,0,0-2.67,4.29,7.92,7.92,0,0,0-.72,2.62q-.18,1.54.54,2.08,1,.81,2.89-.82,1.36-1.17,3.39-2.89t4.21-3.48q2.17-1.76,4.29-3.39a45.15,45.15,0,0,1,3.75-2.62,9.39,9.39,0,0,1,2.76-1.13,5.41,5.41,0,0,1,2.49,0,2.9,2.9,0,0,1,1.72,1.17,4.2,4.2,0,0,1,.63,2.44,25.18,25.18,0,0,0,0,3.39,10.07,10.07,0,0,0,.59,2.76,3.66,3.66,0,0,0,1.49,2.08,4.43,4.43,0,0,0,2.49.45,27,27,0,0,0,2.71-.59q1.54-.41,3.07-.95t3-1.13q1.49-.59,2.58-1.13a3.14,3.14,0,0,1,4.07.72Z" }))]);
}
function getDimensions(variant) {
    switch (variant) {
        case 'small': return [661.83, 215.31];
        case 'inline': return [1572, 107.8];
        case 'full': return [1572, 230.83];
    }
}


/***/ }),

/***/ "./node_modules/parrot-layout/Logo/style.js":
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

/***/ "./node_modules/parrot-layout/ParrotLayout/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var react_disqus_comments_1 = __webpack_require__("./node_modules/react-disqus-comments/build/main.js");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var TopBar_1 = __webpack_require__("./node_modules/parrot-layout/TopBar/index.js");
var Crumbs_1 = __webpack_require__("./node_modules/parrot-layout/Crumbs/index.js");
var Tags_1 = __webpack_require__("./node_modules/parrot-layout/Tags/index.js");
var Footer_1 = __webpack_require__("./node_modules/parrot-layout/Footer/index.js");
var Logo_1 = __webpack_require__("./node_modules/parrot-layout/Logo/index.js");
var Icon_1 = __webpack_require__("./node_modules/parrot-layout/Icon/index.js");
var SideMenu_1 = __webpack_require__("./node_modules/parrot-layout/SideMenu/index.js");
var Jumbotron_1 = __webpack_require__("./node_modules/parrot-layout/Jumbotron/index.js");
var FacebookLike_1 = __webpack_require__("./node_modules/parrot-layout/FacebookLike/index.js");
__webpack_require__("./node_modules/parrot-layout/polyfill/swipe-events.js");
var s = __webpack_require__("./node_modules/parrot-layout/ParrotLayout/style.js");
var ParrotLayout = /** @class */ (function (_super) {
    __extends(ParrotLayout, _super);
    function ParrotLayout(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sideMenuClassName: s.closed,
        };
        _this.onLocationChange = _this.onLocationChange.bind(_this);
        _this.hideMenu = _this.hideMenu.bind(_this);
        _this.showMenu = _this.showMenu.bind(_this);
        _this.disableMenu = _this.disableMenu.bind(_this);
        return _this;
    }
    ParrotLayout.prototype.render = function () {
        var children = this.props.children;
        var _a = this.context, paramorph = _a.paramorph, page = _a.page;
        return (React.createElement("div", { id: s.all },
            React.createElement("div", { className: s.header },
                React.createElement(TopBar_1.default, { onMenuClick: this.showMenu })),
            React.createElement("div", { className: s.main },
                this.renderJumbotron(),
                React.createElement("main", null,
                    this.maybeRenderTitle(),
                    children,
                    React.createElement("div", { className: s.bottomLike },
                        React.createElement(FacebookLike_1.default, { url: "" + paramorph.config.baseUrl + page.url })))),
            this.maybeRenderComments(),
            this.renderFooter(),
            this.renderSideMenu()));
    };
    ParrotLayout.prototype.componentDidMount = function () {
        var _a = this.context, page = _a.page, paramorph = _a.paramorph, history = _a.history;
        document.body.addEventListener('swipe-left', this.hideMenu);
        document.body.addEventListener('swipe-right', this.showMenu);
        this.unregister = history.listen(this.onLocationChange);
    };
    ParrotLayout.prototype.componentWillUnmount = function () {
        document.body.removeEventListener('swipe-left', this.hideMenu);
        document.body.removeEventListener('swipe-right', this.showMenu);
        this.unregister();
    };
    ParrotLayout.prototype.onLocationChange = function () {
        var _this = this;
        setImmediate(function () {
            var _a = _this.context, page = _a.page, paramorph = _a.paramorph;
            document.title = page.title + " | " + paramorph.config.title;
            window.scrollTo(0, 0);
        });
    };
    ParrotLayout.prototype.renderJumbotron = function () {
        var _a = this.context, page = _a.page, paramorph = _a.paramorph;
        if (page.url === '/') {
            return (React.createElement("div", { className: s.indexJumbo },
                React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'center' },
                    React.createElement("h2", null, "uniwer\u2022sal\u2022ny; -na"),
                    React.createElement("ol", null,
                        React.createElement("li", null, "\u00ABobejmuj\u0105cy ca\u0142o\u015B\u0107, dotycz\u0105cy wszystkiego lub wszystkich\u00BB"),
                        React.createElement("li", null, "\u00ABmaj\u0105cy wszechstronne zastosowanie\u00BB"),
                        React.createElement("li", null, "\u00ABmaj\u0105cy r\u00F3\u017Cne umiej\u0119tno\u015Bci\u00BB")))));
        }
        var menuEntry = this.getMenuEntryForCurrentPage();
        if (menuEntry) {
            return (React.createElement("div", { className: s.menuEntryJumbo },
                React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' },
                    React.createElement("h2", null,
                        React.createElement(Icon_1.default, { name: menuEntry.icon }),
                        React.createElement(paramorph_1.Link, { to: page.url }, page.title)),
                    React.createElement(Crumbs_1.default, { responsive: true }))));
        }
        if (page instanceof paramorph_1.Category) {
            return (React.createElement("div", { className: s.categoryJumbo },
                React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' },
                    React.createElement("h2", null,
                        React.createElement(paramorph_1.Link, { to: page.url }, page.title)),
                    React.createElement(Crumbs_1.default, { responsive: true }))));
        }
        if (page instanceof paramorph_1.Tag) {
            return (React.createElement("div", { className: s.tagJumbo },
                React.createElement(Jumbotron_1.default, { fullscreen: true, align: 'bottom' },
                    React.createElement("h2", null,
                        React.createElement(paramorph_1.Link, { to: page.url }, page.originalTitle)),
                    React.createElement(Crumbs_1.default, { responsive: true }))));
        }
        return (React.createElement(Jumbotron_1.default, { align: 'bottom' },
            React.createElement(Crumbs_1.default, null)));
    };
    ParrotLayout.prototype.maybeRenderTitle = function () {
        var _a = this.context, page = _a.page, paramorph = _a.paramorph;
        if (page.url === '/' || page instanceof paramorph_1.Category || page instanceof paramorph_1.Tag) {
            return null;
        }
        return (React.createElement("div", { className: s.title },
            React.createElement("h1", null,
                React.createElement(paramorph_1.Link, { to: page.url }, page.title)),
            React.createElement(Tags_1.default, null),
            React.createElement("div", { className: s.topLike },
                React.createElement(FacebookLike_1.default, { url: "" + paramorph.config.baseUrl + page.url }))));
    };
    ParrotLayout.prototype.maybeRenderComments = function () {
        var _a = this.context, page = _a.page, paramorph = _a.paramorph;
        if (page.url === '/' || page instanceof paramorph_1.Category || page instanceof paramorph_1.Tag) {
            return null;
        }
        return (React.createElement("div", { className: s.comments },
            React.createElement(react_disqus_comments_1.default, { shortname: 'sztukauniwersalna', identifier: page.title, title: page.title, url: "http://sztukauniwersalna.pl" + page.url })));
    };
    ParrotLayout.prototype.renderFooter = function () {
        return (React.createElement("div", { className: s.footer + " contrast" },
            React.createElement(Footer_1.default, null),
            React.createElement("div", { className: s.bottom },
                React.createElement("div", { className: s.content },
                    React.createElement("div", { className: s.zblogowani },
                        React.createElement("a", { href: 'https://zblogowani.pl/', title: 'Sprawd\u017A serwis zBLOGowani.pl!' },
                            React.createElement("img", { src: '//zblogowani.pl/code/160x50/silver/341338/btn.png', alt: 'zBLOGowani.pl' }))),
                    React.createElement("div", { className: s.logo },
                        React.createElement(Logo_1.default, { variant: 'full' }))))));
    };
    ParrotLayout.prototype.renderSideMenu = function () {
        var _a = this.context, page = _a.page, paramorph = _a.paramorph;
        var sideMenuClassName = this.state.sideMenuClassName;
        return (React.createElement("div", { className: s.sideMenu + " " + sideMenuClassName, onClick: this.hideMenu },
            React.createElement(SideMenu_1.default, { visible: sideMenuClassName === s.visible, onCloseRequested: this.hideMenu, onClosed: this.disableMenu, currentUrl: page.url }, paramorph.config.menu.map(function (entry) { return (React.createElement(SideMenu_1.Item, { key: entry.url, url: entry.url, title: entry.title, icon: entry.icon })); }))));
    };
    ParrotLayout.prototype.getMenuEntryForCurrentPage = function () {
        var _a = this.context, page = _a.page, paramorph = _a.paramorph;
        var found = paramorph.config.menu.filter(function (entry) { return entry.url === page.url; });
        return found.length === 0 ? undefined : found[0];
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
        this.setState(function (prev) { return (__assign({}, prev, { sideMenuClassName: sideMenuClassName })); });
    };
    return ParrotLayout;
}(paramorph_1.PureComponent));
exports.ParrotLayout = ParrotLayout;
exports.default = ParrotLayout;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/parrot-layout/ParrotLayout/style.js":
/***/ (function(module, exports) {

module.exports = {
  "main": "main-2EmuK",
  "bottom": "bottom-qaW5p",
  "content": "content-3-Spa",
  "comments": "comments-U6lN7",
  "menuEntryJumbo": "menuEntryJumbo-1gAPA",
  "tagJumbo": "tagJumbo-2y6Er",
  "indexJumbo": "indexJumbo-3aSGA",
  "all": "all-3amHh",
  "header": "header-3JfGF",
  "bottomLike": "bottomLike-1iw1L",
  "disqus_thread": "disqus_thread-1jnRb",
  "footer": "footer-3r5Xl",
  "zblogowani": "zblogowani-Zrc7Z",
  "logo": "logo-2wc3f",
  "sideMenu": "sideMenu-3RB85",
  "visible": "visible-202JZ",
  "closed": "closed-3xC98"
};

/***/ }),

/***/ "./node_modules/parrot-layout/Recipe/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var Icon_1 = __webpack_require__("./node_modules/parrot-layout/Icon/index.js");
var Image_1 = __webpack_require__("./node_modules/parrot-layout/Image/index.js");
var s = __webpack_require__("./node_modules/parrot-layout/Recipe/style.js");
function Ingredient(_a) {
    var title = _a.title, quantity = _a.quantity;
    return (React.createElement("li", null,
        title,
        quantity
            ? React.createElement("span", { className: s.quantity }, " (" + quantity + ")")
            : null));
}
exports.Ingredient = Ingredient;
function Method(_a) {
    var children = _a.children;
    return (React.createElement("p", null, children));
}
exports.Method = Method;
function Recipe(_a) {
    var title = _a.title, photo = _a.photo, altText = _a.altText, time = _a.time, level = _a.level, mealFor = _a.mealFor, children = _a.children;
    var childs = [].concat(children);
    var ingredients = childs.filter(function (c) { return c.type === Ingredient; });
    var methods = childs.filter(function (c) { return c.type === Method; });
    return (React.createElement("div", { className: s.recipe + " contrast" },
        React.createElement("div", { className: s.header },
            React.createElement("h2", null, title),
            React.createElement("ul", null,
                React.createElement("li", { key: '1', title: 'posi\u0142ek dla' },
                    React.createElement(Icon_1.default, { name: 'child_care' }),
                    mealFor),
                React.createElement("li", { key: '2', title: 'poziom trudno\u015Bci' },
                    React.createElement(Icon_1.default, { name: 'whatshot' }),
                    level),
                React.createElement("li", { key: '3', title: 'czas przygotowania' },
                    React.createElement(Icon_1.default, { name: 'access_time' }),
                    time))),
        React.createElement(Image_1.default, { src: photo, alt: altText }),
        React.createElement("div", { className: s.details },
            React.createElement("div", { className: s.ingredients },
                React.createElement("h3", null, "Sk\u0142adniki"),
                React.createElement("div", { className: 'compact' },
                    React.createElement("ol", null, ingredients))),
            React.createElement("div", { className: s.method },
                React.createElement("h3", null, "Spos\u00F3b Przygotowania"),
                methods))));
}
exports.Recipe = Recipe;
exports.default = Recipe;


/***/ }),

/***/ "./node_modules/parrot-layout/Recipe/style.js":
/***/ (function(module, exports) {

module.exports = {
  "recipe": "recipe-3EpDA",
  "details": "details-307aJ",
  "header": "header-1vh1P"
};

/***/ }),

/***/ "./node_modules/parrot-layout/Root/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var DeferredScripts_1 = __webpack_require__("./node_modules/paramorph/react/DeferredScripts.js");
var DeferredStyles_1 = __webpack_require__("./node_modules/paramorph/react/DeferredStyles.js");
var GTAG_API_URL = "https://www.googletagmanager.com/gtag/js?id=" + "UA-110945340-1";
function Root(_a) {
    var paramorph = _a.paramorph, page = _a.page, localBundles = _a.localBundles, externalBundles = _a.externalBundles, preload = _a.preload;
    var gtagConfigScript = getGtagConfigBundle(localBundles.js);
    var deferredScripts = externalBundles.js.concat(removeGtagConfigBundle(localBundles.js));
    var deferredStyles = externalBundles.css;
    return (React.createElement("html", null,
        React.createElement("head", null,
            React.createElement("title", null,
                page.title,
                " | ",
                paramorph.config.title),
            React.createElement("meta", { name: 'keywords', content: page.tags.join(', ') }),
            React.createElement("meta", { name: 'description', content: page.description }),
            React.createElement("meta", { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
            React.createElement("script", { async: true, type: 'text/javascript', src: GTAG_API_URL }),
            React.createElement("script", { type: 'text/javascript', src: gtagConfigScript }),
            React.createElement(FoucRemovalTrick, null),
            React.createElement("meta", { property: 'og:url', content: "" + paramorph.config.baseUrl + page.url }),
            React.createElement("meta", { property: 'og:title', content: page.title }),
            page.image !== null
                ? React.createElement("meta", { property: 'og:image', content: page.image })
                : null,
            React.createElement("meta", { property: 'og:description', content: page.description }),
            React.createElement("meta", { property: 'og:locale', content: paramorph.config.locale }),
            React.createElement("meta", { property: 'og:type', content: page.url === '/' ? 'website' : 'article' }),
            preload.map(function (url, i) { return (React.createElement("meta", { name: 'paramorph-preload', content: url, key: "preload-" + i })); }),
            localBundles.css.map(function (url) { return (React.createElement("link", { type: 'text/css', rel: 'stylesheet', href: url, key: url })); })),
        React.createElement("body", null,
            React.createElement("div", { id: 'root' }, "%%%BODY%%%"),
            React.createElement(DeferredScripts_1.default, { srcs: deferredScripts }),
            React.createElement(DeferredStyles_1.default, { hrefs: deferredStyles }))));
}
exports.Root = Root;
exports.default = Root;
function getGtagConfigBundle(bundles) {
    var found = bundles.filter(function (src) { return src.indexOf('gtagConfig') !== -1; });
    if (found.length === 0) {
        throw new Error('gtagConfig script bundle is missing');
    }
    if (found.length !== 1) {
        throw new Error("found more than one (" + found.length + ") gtagConfig script bundle");
    }
    return found[0];
}
function removeGtagConfigBundle(bundles) {
    var gtagBundle = getGtagConfigBundle(bundles);
    var index = bundles.indexOf(gtagBundle);
    return bundles.slice(0, index).concat(bundles.slice(index + 1));
}
function FoucRemovalTrick() {
    return (React.createElement("script", { type: 'text/javascript', dangerouslySetInnerHTML: { __html: 'document.addEventListener(\'DOMContentLoaded\', function() { '
                + 'document.body.setAttribute(\'class\', \'ready\'); '
                + '});'
                + 'document.write(\'<style type="text/css">'
                + 'body { opacity: 0; transition: opacity 300ms ease-in; }'
                + 'body.ready { opacity: 1; }'
                + '</style>\');' } }));
}


/***/ }),

/***/ "./node_modules/parrot-layout/SideMenu/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var Button_1 = __webpack_require__("./node_modules/parrot-layout/Button/index.js");
var Icon_1 = __webpack_require__("./node_modules/parrot-layout/Icon/index.js");
var s = __webpack_require__("./node_modules/parrot-layout/SideMenu/style.js");
function Item(props) {
    return null;
}
exports.Item = Item;
var SideMenu = /** @class */ (function (_super) {
    __extends(SideMenu, _super);
    function SideMenu(props) {
        var _this = _super.call(this, props) || this;
        var _a = props.visible, visible = _a === void 0 ? false : _a;
        _this.state = {
            visible: visible,
        };
        return _this;
    }
    SideMenu.prototype.componentWillReceiveProps = function (props) {
        this.setState(function (prevState) {
            var _a = props.visible, visible = _a === void 0 ? false : _a;
            return __assign({}, prevState, { visible: visible });
        });
    };
    SideMenu.prototype.render = function () {
        var _this = this;
        var classNames = [s.panel];
        if (this.state.visible) {
            classNames.push(s.visible);
        }
        var _a = this.props, onCloseRequested = _a.onCloseRequested, children = _a.children;
        return (React.createElement("aside", { className: classNames.join(' '), onTransitionEnd: function () { return _this.onTransitionEnd(); }, ref: function (elem) { return _this.element = elem; }, onClick: function (e) { return e.stopPropagation(); } },
            React.createElement("div", { className: s.header },
                React.createElement("div", { className: s.closeButton },
                    React.createElement(Button_1.default, { onClick: onCloseRequested },
                        React.createElement(Icon_1.default, { name: 'close' })))),
            React.createElement("ul", { className: s.content }, this.renderItems())));
    };
    SideMenu.prototype.renderItems = function () {
        var _this = this;
        var children = this.props.children;
        if (!children) {
            return null;
        }
        return [].concat(children)
            .map(function (item) { return _this.renderItem(item); });
    };
    SideMenu.prototype.renderItem = function (item) {
        var _a = this.props, currentUrl = _a.currentUrl, onCloseRequested = _a.onCloseRequested;
        if (currentUrl === item.props.url) {
            // just scroll to top and close the menu for already selected item
            return (React.createElement("li", { key: item.props.url, className: s.current },
                React.createElement("a", { onClick: function () { window.scrollTo(0, 0); onCloseRequested(); } },
                    React.createElement("span", { className: s.itemIcon },
                        React.createElement(Icon_1.default, { name: item.props.icon })),
                    React.createElement("span", { className: s.itemTitle }, item.props.title))));
        }
        return (React.createElement("li", { key: item.props.url },
            React.createElement(paramorph_1.Link, { to: item.props.url },
                React.createElement("span", { className: s.itemIcon },
                    React.createElement(Icon_1.default, { name: item.props.icon })),
                React.createElement("span", { className: s.itemTitle }, item.props.title))));
    };
    SideMenu.prototype.onTransitionEnd = function () {
        if (this.props.visible) {
            return;
        }
        this.props.onClosed();
    };
    return SideMenu;
}(React.Component));
exports.SideMenu = SideMenu;
exports.default = SideMenu;


/***/ }),

/***/ "./node_modules/parrot-layout/SideMenu/style.js":
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

/***/ "./node_modules/parrot-layout/SocialButtons/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var Button_1 = __webpack_require__("./node_modules/parrot-layout/Button/index.js");
var Icon_1 = __webpack_require__("./node_modules/parrot-layout/Icon/index.js");
var s = __webpack_require__("./node_modules/parrot-layout/SocialButtons/style.js");
function SocialButtons() {
    return (React.createElement("ul", { className: s.socialButtons },
        React.createElement("li", { key: 'facebook' },
            React.createElement(Button_1.default, { variant: 'action', color: 'green', url: 'https://www.facebook.com/sztukauniwersalna/' },
                React.createElement(Icon_1.default, { name: 'facebook' }))),
        React.createElement("li", { key: 'instagram' },
            React.createElement(Button_1.default, { variant: 'action', color: 'green', url: 'https://www.instagram.com/sztuka_uniwersalna/' },
                React.createElement(Icon_1.default, { name: 'instagram' })))));
}
exports.SocialButtons = SocialButtons;
exports.default = SocialButtons;


/***/ }),

/***/ "./node_modules/parrot-layout/SocialButtons/style.js":
/***/ (function(module, exports) {

module.exports = {
  "socialButtons": "socialButtons-gYFCo"
};

/***/ }),

/***/ "./node_modules/parrot-layout/Spinner/Spinner.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var s = __webpack_require__("./node_modules/parrot-layout/Spinner/style.js");
function Spinner() {
    return (React.createElement("span", { className: s.spinner },
        React.createElement("div", null,
            React.createElement("i", null),
            React.createElement("i", null),
            React.createElement("i", null),
            React.createElement("i", null))));
}
exports.Spinner = Spinner;
exports.default = Spinner;


/***/ }),

/***/ "./node_modules/parrot-layout/Spinner/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Spinner_1 = __webpack_require__("./node_modules/parrot-layout/Spinner/Spinner.js");
exports.Spinner = Spinner_1.Spinner;
exports.default = Spinner_1.default;


/***/ }),

/***/ "./node_modules/parrot-layout/Spinner/style.js":
/***/ (function(module, exports) {

module.exports = {
  "spinner": "spinner-1CN79",
  "rotate": "rotate-2rK7J"
};

/***/ }),

/***/ "./node_modules/parrot-layout/TableOfContents/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var TableOfContents = /** @class */ (function (_super) {
    __extends(TableOfContents, _super);
    function TableOfContents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableOfContents.prototype.render = function () {
        var _a = this.props.respectLimit, respectLimit = _a === void 0 ? false : _a;
        var paramorph = this.context.paramorph;
        var topLevel = Object.keys(paramorph.pages)
            .map(function (key) { return paramorph.pages[key]; })
            .filter(function (page) { return page.categories.length == 0; })
            .filter(function (page) { return page.url != '/'; });
        var tags = Object.keys(paramorph.tags)
            .map(function (key) { return paramorph.tags[key]; });
        var index = paramorph.pages['/'];
        return (React.createElement("ul", null,
            React.createElement("li", { key: '/' },
                React.createElement(paramorph_1.Link, { to: '/' }, index.title),
                React.createElement(Branch, { pages: topLevel, shallow: respectLimit, ellipsis: respectLimit })),
            !respectLimit
                ? tags.map(function (_a) {
                    var title = _a.title, url = _a.url, pages = _a.pages;
                    return (React.createElement("li", { key: url },
                        React.createElement(paramorph_1.Link, { to: url }, title),
                        React.createElement(Branch, { pages: pages, shallow: true })));
                })
                : null));
    };
    return TableOfContents;
}(paramorph_1.PureComponent));
exports.TableOfContents = TableOfContents;
exports.default = TableOfContents;
function Branch(_a) {
    var pages = _a.pages, _b = _a.shallow, shallow = _b === void 0 ? false : _b, _c = _a.ellipsis, ellipsis = _c === void 0 ? false : _c;
    return (React.createElement("ul", null,
        pages
            .filter(function (page) { return page instanceof paramorph_1.Category; })
            .filter(function (page) { return page.output; })
            .map(function (page) { return page; })
            .map(function (_a) {
            var url = _a.url, title = _a.title, pages = _a.pages;
            return (React.createElement("li", { key: url },
                React.createElement(paramorph_1.Link, { to: url }, title),
                !shallow ? React.createElement(Branch, { pages: pages }) : null));
        }),
        pages
            .filter(function (page) { return !(page instanceof paramorph_1.Category); })
            .filter(function (page) { return page.output; })
            .map(function (_a) {
            var title = _a.title, url = _a.url;
            return (React.createElement("li", { key: url },
                React.createElement(paramorph_1.Link, { to: url }, title)));
        }),
        ellipsis ? React.createElement("li", { key: 'ellipsis' }, "\u2026") : null));
}
exports.Branch = Branch;


/***/ }),

/***/ "./node_modules/parrot-layout/Tags/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var Button_1 = __webpack_require__("./node_modules/parrot-layout/Button/index.js");
var s = __webpack_require__("./node_modules/parrot-layout/Tags/style.js");
var Tags = /** @class */ (function (_super) {
    __extends(Tags, _super);
    function Tags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tags.prototype.render = function () {
        var _a = this.context, page = _a.page, paramorph = _a.paramorph;
        if (page.tags.length === 0) {
            return null;
        }
        return (React.createElement("ul", { className: s.tags }, page.tags
            .map(function (title) { return paramorph.tags[title]; })
            .map(function (_a) {
            var title = _a.title, url = _a.url;
            return (React.createElement("li", { key: url },
                React.createElement(Button_1.default, { url: url }, title)));
        })));
    };
    return Tags;
}(paramorph_1.PureComponent));
exports.Tags = Tags;
exports.default = Tags;


/***/ }),

/***/ "./node_modules/parrot-layout/Tags/style.js":
/***/ (function(module, exports) {

module.exports = {
  "tags": "tags-2jOEG"
};

/***/ }),

/***/ "./node_modules/parrot-layout/Tile/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var React = __webpack_require__("react");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var Tags_1 = __webpack_require__("./node_modules/parrot-layout/Tags/index.js");
var Button_1 = __webpack_require__("./node_modules/parrot-layout/Button/index.js");
var Image_1 = __webpack_require__("./node_modules/parrot-layout/Image/index.js");
var s = __webpack_require__("./node_modules/parrot-layout/Tile/style.js");
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile.prototype.getChildContext = function () {
        var page = this.props.page;
        return __assign({}, this.context, { page: page });
    };
    Tile.prototype.render = function () {
        var _a = this.props, page = _a.page, Content = _a.Content, props = __rest(_a, ["page", "Content"]);
        return (React.createElement("article", null,
            React.createElement("h1", null,
                React.createElement(paramorph_1.Link, { to: page.url }, page.title)),
            React.createElement("div", { className: s.tags },
                React.createElement(Tags_1.default, null)),
            maybeRenderImage(page),
            React.createElement(Content, __assign({}, props, { respectLimit: true })),
            React.createElement("div", { className: s.more },
                React.createElement(Button_1.default, { url: page.url, variant: 'raised', color: 'purple' }, "Read More"))));
    };
    Tile.childContextTypes = paramorph_1.ContextTypes;
    return Tile;
}(paramorph_1.PureComponent));
exports.Tile = Tile;
function maybeRenderImage(page) {
    if (!page.image) {
        return null;
    }
    return (React.createElement(paramorph_1.Link, { to: page.url },
        React.createElement(Image_1.default, { src: page.image, alt: "" + page.title })));
}
exports.default = Tile;


/***/ }),

/***/ "./node_modules/parrot-layout/Tile/style.js":
/***/ (function(module, exports) {

module.exports = {
  "more": "more-3HgSz"
};

/***/ }),

/***/ "./node_modules/parrot-layout/TopBar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var paramorph_1 = __webpack_require__("./node_modules/paramorph/index.js");
var Button_1 = __webpack_require__("./node_modules/parrot-layout/Button/index.js");
var Icon_1 = __webpack_require__("./node_modules/parrot-layout/Icon/index.js");
var Logo_1 = __webpack_require__("./node_modules/parrot-layout/Logo/index.js");
var s = __webpack_require__("./node_modules/parrot-layout/TopBar/style.js");
var TopBar = /** @class */ (function (_super) {
    __extends(TopBar, _super);
    function TopBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopBar.prototype.render = function () {
        var onMenuClick = this.props.onMenuClick;
        var paramorph = this.context.paramorph;
        return (React.createElement("header", { className: s.topBar },
            React.createElement("div", { className: s.hamburger },
                React.createElement(Button_1.default, { onClick: onMenuClick },
                    React.createElement(Icon_1.default, { name: '\uE5D2' }))),
            React.createElement(paramorph_1.Link, { to: '/' },
                React.createElement("span", { className: s.title }, "Sztuka Uniwersalna"),
                React.createElement("div", { className: s.smallLogo },
                    React.createElement(Logo_1.default, { variant: 'small' })),
                React.createElement("div", { className: s.inlineLogo },
                    React.createElement(Logo_1.default, { variant: 'inline' }))),
            React.createElement("nav", { className: s.topMenu },
                React.createElement("ul", null, paramorph.config.menu.map(function (entry) { return (React.createElement("li", { key: entry.url },
                    React.createElement(Button_1.default, { url: entry.url }, entry.short))); })))));
    };
    return TopBar;
}(paramorph_1.PureComponent));
exports.TopBar = TopBar;
exports.default = TopBar;


/***/ }),

/***/ "./node_modules/parrot-layout/TopBar/style.js":
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

/***/ "./node_modules/parrot-layout/gtag/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var dataLayer = window.dataLayer = (window.dataLayer || []);
function gtag(action) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    dataLayer.push(arguments);
}
exports.gtag = gtag;
exports.default = gtag;
if (true) {
    gtag('js', new Date());
    gtag('config', "UA-110945340-1");
    window.addEventListener('load', sendPageviewOnLocationChange);
}
function sendPageviewOnLocationChange() {
    var page_path = location.pathname;
    global.setInterval(function () {
        if (page_path === location.pathname) {
            return;
        }
        page_path = location.pathname;
        gtag('config', "UA-110945340-1", { page_path: page_path });
    }, 300);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/parrot-layout/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ParrotLayout_1 = __webpack_require__("./node_modules/parrot-layout/ParrotLayout/index.js");
exports.default = ParrotLayout_1.default;
var Button_1 = __webpack_require__("./node_modules/parrot-layout/Button/index.js");
exports.Button = Button_1.default;
var Crumbs_1 = __webpack_require__("./node_modules/parrot-layout/Crumbs/index.js");
exports.Crumbs = Crumbs_1.default;
var Feed_1 = __webpack_require__("./node_modules/parrot-layout/Feed/index.js");
exports.Feed = Feed_1.default;
var Footer_1 = __webpack_require__("./node_modules/parrot-layout/Footer/index.js");
exports.Footer = Footer_1.default;
var Icon_1 = __webpack_require__("./node_modules/parrot-layout/Icon/index.js");
exports.Icon = Icon_1.default;
var Jumbotron_1 = __webpack_require__("./node_modules/parrot-layout/Jumbotron/index.js");
exports.Jumbotron = Jumbotron_1.default;
var Logo_1 = __webpack_require__("./node_modules/parrot-layout/Logo/index.js");
exports.Logo = Logo_1.default;
var ParrotLayout_2 = __webpack_require__("./node_modules/parrot-layout/ParrotLayout/index.js");
exports.ParrotLayout = ParrotLayout_2.default;
var Recipe_1 = __webpack_require__("./node_modules/parrot-layout/Recipe/index.js");
exports.Recipe = Recipe_1.default;
exports.Ingredient = Recipe_1.Ingredient;
exports.Method = Recipe_1.Method;
var SideMenu_1 = __webpack_require__("./node_modules/parrot-layout/SideMenu/index.js");
exports.SideMenu = SideMenu_1.default;
var TableOfContents_1 = __webpack_require__("./node_modules/parrot-layout/TableOfContents/index.js");
exports.TableOfContents = TableOfContents_1.default;
var Tags_1 = __webpack_require__("./node_modules/parrot-layout/Tags/index.js");
exports.Tags = Tags_1.default;
var Tile_1 = __webpack_require__("./node_modules/parrot-layout/Tile/index.js");
exports.Tile = Tile_1.default;
var TopBar_1 = __webpack_require__("./node_modules/parrot-layout/TopBar/index.js");
exports.TopBar = TopBar_1.default;
var Image_1 = __webpack_require__("./node_modules/parrot-layout/Image/index.js");
exports.Image = Image_1.default;
var Root_1 = __webpack_require__("./node_modules/parrot-layout/Root/index.js");
exports.Root = Root_1.default;
var gtag_1 = __webpack_require__("./node_modules/parrot-layout/gtag/index.js");
exports.gtag = gtag_1.default;


/***/ }),

/***/ "./node_modules/parrot-layout/polyfill/swipe-events.js":
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
        }
        else if (diff < -SWIPE_TRESHOLD_1) {
            document.body.dispatchEvent(new Event('swipe-left'));
            originX_1 -= SWIPE_TRESHOLD_1;
        }
    });
    self.window.addEventListener('mouseup', function (e) {
        originX_1 = null;
    });
    Object.defineProperty(self.window, 'swipeEventsPolyfill', {
        value: true,
    });
}


/***/ }),

/***/ "./node_modules/process/browser.js":
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

/***/ "./node_modules/react-disqus-comments/build/components/DisqusThread.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

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

/***/ "./node_modules/react-disqus-comments/build/main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/react-disqus-comments/build/components/DisqusThread.js");

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);