(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./_posts/2018-06-07-hiperrealizm-moodboard.markdown":
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
            React.createElement("p", null, "Hiperrealizm (superrealizm lub fotorealizm) to pr\u0119\u017Cnie rozwijaj\u0105cy si\u0119 kierunek w sztuce, pocz\u0105wszy od XX wieku. Artysta \u015Bwiadomie odrzuca wszelk\u0105 indywidualn\u0105 ekspresj\u0119 dzie\u0142a. Punktem wyj\u015Bcia staje si\u0119 fotografia przedstawiaj\u0105ca najcz\u0119\u015Bciej motywy \u015Bwiata codziennego - przedmioty, pejza\u017Ce, portrety. Perfekcyjna szczeg\u00F3\u0142owo\u015B\u0107 obrazu lub rze\u017Aby nieraz wywo\u0142uje u nas uczucie podobne do doliny niesamowito\u015Bci. Co\u015B wygl\u0105da nad wyraz prawdziwie, cho\u0107 jeste\u015Bmy \u015Bwiadomi, \u017Ce prawdziwe nie jest. Superrealistyczne rze\u017Aby postaci, cz\u0119sto przeskalowane, szokuj\u0105 precyzj\u0105 oddania detali. Paznokcie i w\u0142osy figur wykonane s\u0105 zazwyczaj z surowc\u00F3w naturalnych - ludzkich paznokci i w\u0142os\u00F3w. Staj\u0105c na przeciwko takiej rze\u017Aby mamy ochot\u0119 co\u015B do niej powiedzie\u0107, zapyta\u0107, pom\u00F3c. Musimy ca\u0142y czas powtarza\u0107 w g\u0142\u0119bi ducha 'to jest rze\u017Aba, to jest rze\u017Aba'..."),
            React.createElement("p", null,
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/7793133/ello-optimized-ba8c3f3d.jpg", alt: "Obraz przedstawia dwa zdj\u0119cia rysunk\u00F3w znanego artysty. Rysunki to portrety bardzo realistyczne." }),
                React.createElement("img", { src: "https://assets0.ello.co/uploads/asset/attachment/7793136/ello-optimized-8342ddae.jpg", alt: "Obraz przedstawia trzy zdj\u0119cia. Na jednym widzimy ma\u0142\u0105 dziewczynk\u0119 z wielkim obrazem, a na dw\u00F3ch pozosta\u0142ych widniej\u0105 rze\u017Aby hiperrealistyczne." }),
                React.createElement("img", { src: "https://assets2.ello.co/uploads/asset/attachment/7793140/ello-optimized-21d68412.jpg", alt: "Obraz przedstawia trzy zdj\u0119cia. Na dw\u00F3ch widzimy obrazy przedstawiaj\u0105ce jedzenie, a na jednym obraz przedstawiaj\u0105cy bia\u0142\u0105 tkanin\u0119 na niebieskim tle." }),
                React.createElement("img", { src: "https://assets2.ello.co/uploads/asset/attachment/7793142/ello-optimized-241aa730.jpg", alt: "Obraz przedstawia dwa zdj\u0119cia na szarym tle. Na obydwu z nich widzimy postaci ubrane w kolorowe stroje." }),
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/7793145/ello-optimized-443c4f28.jpg", alt: "Obraz przedstawia cztery zdj\u0119cia na szarym tle. Zdj\u0119cia to portrety r\u00F3\u017Cnych ludzi." }),
                React.createElement("img", { src: "https://assets0.ello.co/uploads/asset/attachment/7793150/ello-optimized-50ff583e.jpg", alt: "Obraz przedstawia cztery zdj\u0119cia. Na jednym z nich widzimy sadzone jajko, na innym tatua\u017C, na kolejnym artyst\u0119 w swojej pracowni, a na ostatnim skulon\u0105 ludzk\u0105 posta\u0107." }),
                React.createElement("img", { src: "https://assets2.ello.co/uploads/asset/attachment/7793154/ello-optimized-83d3ddee.jpg", alt: "Zdj\u0119cie przedstawia czarne napisy na szarym tle." }))));
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