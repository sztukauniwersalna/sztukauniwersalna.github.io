(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "./_posts/2019-09-22-feniks.markdown":
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
                React.createElement("img", { src: "https://assets2.ello.co/uploads/asset/attachment/10253599/ello-optimized-4fa7c7be.jpg", alt: "Fotografia przedstawia portret kobiety w ramce przedstawiaj\u0105cej p\u0142omienie." })),
            React.createElement("p", null, "Kiedy odchodz\u0119, odchodz\u0119 na zawsze."),
            React.createElement("p", null, "Kasuj\u0119 wszystkie wsp\u00F3lne zdj\u0119cia, wyrzucam kubki po litrach wsp\u00F3lnych porannych kaw. Nic ju\u017C nie jest wsp\u00F3lne, wszystko jest samotne. Przedmioty nosz\u0105 w sobie histori\u0119, sentyment staram si\u0119 wyrzuci\u0107 do kosza. Ze wszystkich si\u0142 zgniatam, uderzam, niszcz\u0119 szcz\u0105tki swojego serca. To ju\u017C nie jest bitwa pomi\u0119dzy mn\u0105 a Tob\u0105, to moja wewn\u0119trzna wojna. Wojna o ostatni kawa\u0142ek nadziei."),
            React.createElement("p", null, "Kiedy odchodz\u0119, odchodz\u0119 na zawsze. Zacieram ostatnie \u015Blady Twojej obecno\u015Bci. Wyrzekam si\u0119 wszystkich temat\u00F3w do rozm\u00F3w. Wstaj\u0119 za wcze\u015Bnie, a k\u0142ad\u0119 si\u0119 za p\u00F3\u017Ano. Chc\u0119 poczu\u0107 jak to jest by\u0107 zm\u0119czon\u0105. Tylko, kiedy moje cia\u0142o boli jestem w stanie nie my\u015Ble\u0107 o Tobie..."),
            React.createElement("p", null, "Kiedy odchodz\u0119, odchodz\u0119 na zawsze. Wycieram siebie do granic mo\u017Cliwo\u015Bci. Transformuj\u0119. Rano zmuszam si\u0119 do rutyny. Podczas mycia z\u0119b\u00F3w wymy\u015Blam 50 r\u00F3\u017Cnych fryzur, na kt\u00F3re akurat dzi\u015B mam ochot\u0119. Chwytam za no\u017Cyczki. Obcinam centymetr po centymetrze, wycinam Tw\u00F3j zapach z mojej sk\u00F3ry. Ci\u0119\u017Cka robota, kalecz\u0119 si\u0119 strasznie."),
            React.createElement("p", null, "Kiedy odchodz\u0119, odchodz\u0119 na zawsze."),
            React.createElement("p", null, "I tylko \u015Bpiew ptak\u00F3w si\u0119 rano nie zmienia. Brzmi zawsze podobnie o wschodzie s\u0142o\u0144ca. Ja te\u017C kiedy\u015B b\u0119d\u0119 s\u0142o\u0144cem, za\u015Bwiec\u0119 sto razy bardziej i mocniej. Spal\u0119 si\u0119 w ogniu mi\u0142o\u015Bci, a z popio\u0142\u00F3w uformuj\u0119 ptaka, kt\u00F3ry codziennie rano wy\u015Bpiewa rubaszne:"),
            React.createElement("p", null, "Kiedy odchodz\u0119, odchodz\u0119 na zawsze."),
            React.createElement("p", null,
                React.createElement("img", { src: "https://assets1.ello.co/uploads/asset/attachment/10253601/ello-optimized-831da441.jpg", alt: "Obraz przedstawia portret kobiety w szarymi w\u0142osami w artystycznym makija\u017Cu. Po bokach zdj\u0119cia wida\u0107 fragmenty p\u0142omienia." }),
                React.createElement("img", { src: "https://assets2.ello.co/uploads/asset/attachment/10253600/ello-optimized-d6586a27.jpg", alt: "Obraz przedstawia fotografi\u0119 kobiety z szarymi w\u0142osami. Kobieta ma mocny makija\u017C i trzyma d\u0142oni\u0105 naszyjnik. Dooko\u0142a zdj\u0119cia znajduj\u0105 si\u0119 graficzne zielone elementy." }))));
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