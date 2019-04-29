(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./_posts/2017-11-09-action-painting-moodboard.markdown":
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
/**
 * @author Maciej Chałapuk (maciej@chalapuk.pl)
 */
var MarkdownPost = /** @class */ (function (_super) {
    __extends(MarkdownPost, _super);
    function MarkdownPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkdownPost.prototype.render = function () {
        var _a = this.context, paramorph = _a.paramorph, post = _a.post, history = _a.history;
        return (React.createElement(paramorph_1.Content, __assign({ limit: 5 }, this.props),
            React.createElement("p", null,
                React.createElement("img", { src: "https://assets2.ello.co/uploads/asset/attachment/6479007/ello-optimized-273a25d5.jpg", alt: "Obraz przedstawia fotografie na szarym tle, widzimy modelki na wybiegu, talerze z daniami, obrazy s\u0142ynnych artyst\u00F3w." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/6479014/ello-optimized-a08915bf.jpg", alt: "Obraz przedstawia fotografie na szarym tle z elementami przypominaj\u0105cymi chlapni\u0119cia farby. Widzimy portret kobiety w farbie, sukienk\u0119, zegarek, paznokcie, tatua\u017C." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/6479020/ello-optimized-5a140bef.jpg", alt: "Obraz przedstawia fotografie na szarym tle z elementami przypominaj\u0105cymi chlapni\u0119cia farby. Widzimy obuwie, talerz, tabliczk\u0119 czekolady." }),
                React.createElement("img", { src: "https://assets2.ello.co/uploads/asset/attachment/6479025/ello-optimized-a6f32712.jpg", alt: "Obraz przedstawia fotografie na szarym tle z elementami przypominaj\u0105cymi chlapni\u0119cia farby. Widzimy obraz, modelk\u0119 na wybiegu, artyst\u0119 przy pracy i czarne napisy na dole." })),
            React.createElement("blockquote", null,
                React.createElement("p", null, "Moje malarstwo to moja egzystencja."),
                React.createElement("p", null, "~ Jackson Pollock"))));
    };
    return MarkdownPost;
}(paramorph_1.PureComponent));
exports.MarkdownPost = MarkdownPost;
exports.default = MarkdownPost;


/***/ }),

/***/ "./node_modules/paramorph/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__("./node_modules/paramorph/model/index.js");
exports.Layout = model_1.Layout;
exports.Include = model_1.Include;
exports.Post = model_1.Post;
exports.Category = model_1.Category;
exports.Collection = model_1.Collection;
exports.Tag = model_1.Tag;
exports.Paramorph = model_1.Paramorph;
exports.PathParams = model_1.PathParams;
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


/***/ })

}]);