(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./_posts/2017-11-16-impresjonizm-moodboard.markdown":
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
                React.createElement("img", { src: "https://assets2.ello.co/uploads/asset/attachment/6535912/ello-optimized-1ea87931.jpg", alt: "Obraz przedstawia fotografie na niebieskim tle. Widzimy torebk\u0119, obrazy znanego artysty, modelki w sukniach." }),
                React.createElement("img", { src: "https://assets0.ello.co/uploads/asset/attachment/6535917/ello-optimized-9b34446d.jpg", alt: "Obraz przedstawia fotografie na niebieskim tle. Widzimy oko z mocnym makija\u017Cem, dwa talerze z potrawami sfotografowane z lotu ptaka, obrazy znanego artysty, trzy modelki." }),
                React.createElement("img", { src: "https://assets0.ello.co/uploads/asset/attachment/6535922/ello-optimized-70b26f57.jpg", alt: "Obraz przedstawia fotografie na niebieskim tle. Widzimy rze\u017Ab\u0119 baletnicy, kobiet\u0119 pozuj\u0105c\u0105 na wz\u00F3r rze\u017Aby, obrazy znanego artysty, talerz z potraw\u0105, fotografie przedstawiaj\u0105c\u0105 siedz\u0105c\u0105 kobiet\u0119 z torebk\u0105." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/6535926/ello-optimized-96d43544.jpg", alt: "Obraz przedstawia trzy fotografie obraz\u00F3w znanych artyst\u00F3w oraz napisy, wszystko na niebieskim tle." }))));
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