(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./_posts/2019-08-06-jablko.markdown":
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
                React.createElement("img", { src: "https://ello-direct-uploads.s3.amazonaws.com/uploads/13f28a54-4b73-4f7d-8a1d-1adb5f9a1334/ello-316f02eb-efca-4caf-b677-594b409e9d00.jpeg", alt: "Fotografia przedstawia portret kobiety z szarymi w\u0142osami i rozmazan\u0105 ciemn\u0105 pomadk\u0105 na ustach." })),
            React.createElement("p", null, "To niesamowite, jak w mgnieniu oka stajemy si\u0119 dla siebie obcy. Wczoraj zdeklarowana mi\u0142o\u015B\u0107 dzi\u015B juz nic nie znaczy, jest sfermentowanym jab\u0142kiem. A przecie\u017C mog\u0142a by\u0107 takim hamburgerem z makdonalda - \u015Bwie\u017Ca przez lata. Ale tak by\u0107 nie mog\u0142o, tak by si\u0119 nie sta\u0142o, bo w przeciwie\u0144stwie do sztucznego smaku nasza mi\u0142o\u015B\u0107 smakowa\u0142a wykwintnie. Czasem ostro, czasem s\u0142odko, nigdy nudno. A, \u017Ce czas leci... Jab\u0142ko chronione przed entropi\u0105 prze\u017Cyje tylko w warunkach laboratoryjnych. Wybudowa\u0142e\u015B takie laboratorium, nawet w nim mieszka\u0142am przez troch\u0119. By\u0142o sterylnie, pusto, cicho i smutno. Nikt nie smakowa\u0142, nie wgryza\u0142 si\u0119 w m\u00F3j soczysty \u015Brodek. A przecie\u017C tyle mia\u0142am do zaoferowania. Bogactwo smak\u00F3w, nale\u017Ca\u0142o tylko troch\u0119 ch\u0119ci na szczypni\u0119cie, nadgryzienie, polizanie. Zaraz by si\u0119 okaza\u0142o ile nas \u0142\u0105czy. Lubili\u015Bmy te same filmy, muzyk\u0119, \u015Bmiali\u015Bmy si\u0119 wsp\u00F3lnie z mi\u0119sa, kt\u00F3re serwuje nam dzisiejszy \u015Bwiat. A teraz jestem ogryzkiem. Zjedzona, lecz nie przez Ciebie. Przez w\u0105tpliwo\u015Bci, smutek i b\u00F3l. I czasami si\u0119 zastanawiam, czy jab\u0142ko \u015Bwiadome mo\u017Ce by\u0107 swych uczu\u0107? Czy jab\u0142ko bywa smutne? Je\u015Bli nie, to czemu wci\u0105\u017C czuj\u0119? Czy nadal jestem jab\u0142kiem? Kim jestem? Kim jestem bez Ciebie?"),
            React.createElement("p", null,
                React.createElement("img", { src: "https://ello-direct-uploads.s3.amazonaws.com/uploads/cb68b911-8e98-4e27-97bc-37b712c69d60/ello-8f7249e0-e8ed-4a00-8a7c-57d4e7a4f29a.jpeg", alt: "Obraz przedstawia dwa zdj\u0119cia - portret kobiety, oraz zdj\u0119cie ugryzionego jab\u0142ka." }),
                React.createElement("img", { src: "https://d324imu86q1bqn.cloudfront.net/uploads/asset/attachment/10004385/ello-optimized-b43c09d7.jpg", alt: "Fotografia czarno-bia\u0142a przedstawia portret kobiety o intensywnej mimice twarzy." }),
                React.createElement("img", { src: "https://ello-direct-uploads.s3.amazonaws.com/uploads/fc46e25e-5a13-4f3f-838a-445e78c7b4bf/ello-0b00e434-4072-4f89-b891-149d925ccb97.jpeg", alt: "Obraz przedstawia dwa zdj\u0119cia - zdj\u0119cie kobiety jedz\u0105cej owoc, oraz zdj\u0119cie ugryzionego jab\u0142ka." }))));
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