(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./_posts/2019-04-23-wystawa-syntetyczny-folklor.markdown":
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
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/9414293/ello-optimized-e37cc570.jpg", alt: "Zdj\u0119cie przedstawia kolorowe graficzne kszta\u0142ty." })),
            React.createElement("p", null, "Sztuka Janka Simona jest inteligentnym asambla\u017Cem etnicznej przesz\u0142o\u015Bci zestawionej z elementami futurystycznej globalizacji. Na wystawie \u2018Syntetyczny Folklor\u2019 w Centrum Sztuki Wsp\u00F3\u0142czesnej Zamek Ujazdowski sztuczna inteligencja pisze komentarz do wci\u0105\u017C \u017Cywej sytuacji spo\u0142ecznej i przemys\u0142owej. Artysta bada r\u00F3wnie\u017C temat geografii kulturowej, zadaje pytanie o uniwersalno\u015B\u0107 tre\u015Bci w zale\u017Cno\u015Bci od szeroko\u015Bci geograficznych, w kt\u00F3rych zosta\u0142y umiejscowione. Wiele jest obecnie artyst\u00F3w-badaczy, kt\u00F3rzy sztuki nie traktuj\u0105 jako pojedyncza forma ekspresji, lecz szereg zale\u017Cnych od siebie r\u00F3wna\u0144 i niewiadomych. Zadaj\u0105 pytania, badaj\u0105, kr\u0105\u017C\u0105 wok\u00F3\u0142 tematu eksploruj\u0105c go z ka\u017Cdej mo\u017Cliwej strony. Testy w sztuce s\u0105 na porz\u0105dku dziennym. Testuje si\u0119 ju\u017C nie tylko nowe techniki malarskie, ale w\u0142asne formy bada\u0144, kt\u00F3re w zasadzie nauk\u0119 stawiaj\u0105 na poziomie sztuki (lub odwrotnie). Janek Simon nale\u017Cy do grona takich artyst\u00F3w-badaczy, kt\u00F3ry trudne w zrozumieniu s\u0142owa ubiera w proste, prymitywne formy. I to si\u0119 ceni.")));
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