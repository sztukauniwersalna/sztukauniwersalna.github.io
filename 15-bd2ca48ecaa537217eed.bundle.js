(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./_pages/sztuka-uniwersalna.markdown":
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
            React.createElement("p", null, "Witaj na blogu Sztuka Uniwersalna, blogu niepospolitym, ciekawym i inteligentnym. Znajdziesz tutaj autorskie felietony i artyku\u0142y, z kt\u00F3rych mamy nadziej\u0119, \u017Ce wyniesiesz wiele refleksji. Przeczytasz tak\u017Ce recenzje bierz\u0105cych wystaw artystycznych, odnajdziesz makija\u017Cowe inspiracje w postaci charakteryzacji wzorowanych na dzie\u0142ach sztuki, oraz dowiesz si\u0119 co nieco o wielkich mistrzach malarstwa. Nie kr\u0119puj si\u0119, ch\u0142o\u0144 wiedz\u0119. W ka\u017Cdy pierwszy czwartek miesi\u0105ca b\u0119dzie czeka\u0107 na Ciebie MOODboard, czyli tablica ukazuj\u0105ca wp\u0142ywy poszczeg\u00F3lnych kierunk\u00F3w artystycznych (okres\u00F3w) na r\u00F3\u017Cne dziedziny tw\u00F3rczo\u015Bci. Na blogu Sztuka Uniwersalna dowiesz si\u0119 wiele o kolorze oraz jego kulturowym i psychologicznym znaczeniu. Zainspirujesz si\u0119 modowymi stylizacjami, kt\u00F3re przygotujemy dla Ciebie z wieczn\u0105 ide\u0105 odnajdywania sztuki w ka\u017Cdym aspekcie \u017Cycia."),
            React.createElement("p", null,
                "Zapraszamy r\u00F3wnie\u017C na codzienn\u0105 dawk\u0119 sztuki na ",
                React.createElement("a", { href: "https://www.facebook.com/sztukauniwersalna/" }, "facebook"),
                " i ",
                React.createElement("a", { href: "https://www.instagram.com/sztuka_uniwersalna/" }, "instagram"),
                "."),
            React.createElement("h2", null, "Misja"),
            React.createElement("p", null,
                "Misj\u0105 bloga\u00A0",
                React.createElement("a", { href: "http://sztukauniwersalna.pl" }, "sztukauniwersalna.pl"),
                "\u00A0jest dostrze\u017Cenie i zatarcie granicy pomi\u0119dzy sztuk\u0105 a codzienno\u015Bci\u0105, zintegrowanie \u015Bwiata masowego przekazu, kt\u00F3rym jeste\u015Bmy otoczeni z ka\u017Cdej strony, z kultur\u0105. Postaram si\u0119 pokaza\u0107, nieoczywiste na pierwszy rzut oka, konotacje pomi\u0119dzy czynno\u015Bciami okre\u015Blanymi jako \u2018przyziemne\u2019, a kreacj\u0105 artystyczn\u0105. Opr\u00F3cz tego wyka\u017C\u0119 wp\u0142ywy poszczeg\u00F3lnych tendencji artystycznych na r\u00F3\u017Cne dziedziny \u017Cycia. Mam nadzieje, \u017Ce znajdziesz tu dla siebie wiele inspiracji, kt\u00F3re prze\u0142o\u017C\u0105 si\u0119 na Twoje postrzeganie rzeczywisto\u015Bci."),
            React.createElement("p", null,
                React.createElement("img", { src: "https://assets0.ello.co/uploads/asset/attachment/8377042/ello-optimized-de1f7976.jpg", alt: "Obraz przedstawia kola\u017C na jasno-fioletowym tle." }))));
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