(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./_posts/2017-10-05-kolo-moodboard.markdown":
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
var MarkdownPage = /** @class */ (function (_super) {
    __extends(MarkdownPage, _super);
    function MarkdownPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkdownPage.prototype.render = function () {
        var _a = this.context, paramorph = _a.paramorph, page = _a.page, history = _a.history;
        return (React.createElement(paramorph_1.Content, __assign({ limit: 5 }, this.props),
            React.createElement("p", null,
                React.createElement("img", { src: "https://assets0.ello.co/uploads/asset/attachment/6321789/ello-optimized-10c170fc.jpg", alt: "Obrazek przedstawia cztery zdj\u0119cia kobiet w strojach o kszta\u0142cie ko\u0142a, na tle geometrycznych czarno-bia\u0142ych figur." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/6321790/ello-optimized-bd9371a6.jpg", alt: "Obrazek przedstawia zdj\u0119cia postaci ubranych w stroje w kropki, na tle r\u00F3\u017Cnobarwnych kropek, ca\u0142o\u015B\u0107 na czarno-bia\u0142y, geometrycznym tle." }),
                React.createElement("img", { src: "https://assets2.ello.co/uploads/asset/attachment/6321719/ello-optimized-77db47fb.jpg", alt: "Obrazek przedstawia zdj\u0119cia obraz\u00F3w, tortu, but\u00F3w, fragment paletki do makija\u017Cu, dooko\u0142a wida\u0107 czarne okr\u0119gi r\u00F3\u017Cnej wielko\u015Bci." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/6321725/ello-optimized-7a107f6a.jpg", alt: "Obrazek przedstawia zdj\u0119cia dzie\u0142 r\u00F3\u017Cnych artyst\u00F3w, widzimy rze\u017Aby w przestrzeni i budowle w kszta\u0142cie ko\u0142a. Na tle znajduje si\u0119 czarne ko\u0142o i ma\u0142e bia\u0142e k\u00F3\u0142ka." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/6321726/ello-optimized-e9af3234.jpg", alt: "Obrazek przedstawia bia\u0142e napisy na czarnym tle." }))));
    };
    return MarkdownPage;
}(paramorph_1.PureComponent));
exports.MarkdownPage = MarkdownPage;
exports.default = MarkdownPage;


/***/ }),

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


/***/ })

}]);