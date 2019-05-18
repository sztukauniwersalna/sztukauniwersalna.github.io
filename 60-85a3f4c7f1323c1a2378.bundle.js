(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./_posts/2018-05-10-puentylizm-pointylizm-moodboard.markdown":
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
            React.createElement("p", null, "Puentylizm lub pointylizm (fr. pointiller \u2013 kropkowa\u0107, punktowa\u0107) jest metod\u0105 tw\u00F3rcz\u0105 powsta\u0142\u0105 pod koniec XIX wieku. Za jej tw\u00F3rc\u0119 przyjmuje si\u0119  Georges Seurat'a, francuskiego przedstawiciela neoimpresjonizmu. Kompozycja puentylistyczna budowana jest za pomoc\u0105 kropek, ma\u0142ych plamek k\u0142adzionych na powierzchni\u0119 p\u0142\u00F3tna czubkiem p\u0119dzla. Czasami plamki przyjmuj\u0105 form\u0119 kwadrat\u00F3w, prostok\u0105t\u00F3w, nabieraj\u0105 faktury. Obraz posta\u0142y w tej technice zdaje si\u0119 'budowa\u0107' dopiero po odpowiednim oddaleniu si\u0119 od niego. Technika puentylizmu stanowi w pewien spos\u00F3b rozwini\u0119cie dywizjonizmu. Efekt wynikaj\u0105cy z ograniczenia palety barw do jedynie 'czystych' kolor\u00F3w stanowi o '\u015Bwietlisto\u015Bci', wibracji plam ogl\u0105danych z odpowiedniej odleg\u0142o\u015Bci. Tak oto fizyka wzajemnie przenika si\u0119 ze sztuk\u0105."),
            React.createElement("p", null,
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/7655534/ello-optimized-a584038f.jpg", alt: "Obraz przedstawia pi\u0119\u0107 fotografii na zielonym tle. Widzimy portret kobiety w kolorowym makija\u017Cu, obraz znanego artysty, ludzkie postaci." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/7655537/ello-optimized-dcfa03fe.jpg", alt: "Obraz przedstawia dwa zdj\u0119cia dzie\u0142 znanych artyst\u00F3w na zielonym tle." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/7655543/ello-optimized-06926b1d.jpg", alt: "Obraz przedstawia trzy zdj\u0119cia na zielonym tle. Widzimy fragmenty ubra\u0144 i obraz znanego artysty." }),
                React.createElement("img", { src: "https://assets0.ello.co/uploads/asset/attachment/7655544/ello-optimized-b05dcc9f.jpg", alt: "Obraz przedstawia pi\u0119\u0107 fotografii na zielonym tle. Widzimy kolorowy fotel, obraz i modelki spaceruj\u0105ce po wybiegu." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/7655545/ello-optimized-20df9b65.jpg", alt: "Obraz przedstawia trzy zdj\u0119cia na zielonym tle. Widzimy damskie twarze w makija\u017Cach oraz modernistyczny stolik." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/7655547/ello-optimized-1b69e9cb.jpg", alt: "Obraz przedstawia pi\u0119\u0107 czarno-bia\u0142ych fotografii. Widzimy rysunki oka, ust, fragment rze\u017Aby i tatua\u017C." }),
                React.createElement("img", { src: "https://assets2.ello.co/uploads/asset/attachment/7655549/ello-optimized-fdb17e46.jpg", alt: "Zdj\u0119cie przedstawia ciemne napisy na jasno-zielonym tle." }))));
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