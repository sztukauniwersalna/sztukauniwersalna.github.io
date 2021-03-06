(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom/server"), require("prop-types"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define([, , , ], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom/server"), require("prop-types"), require("react-dom")) : factory(root["React"], root["ReactDOMServer"], root["PropTypes"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + "-" + {"0":"5cfdc43abd978601e280","1":"ee11167c87de2c074556","5":"62b29b8b72d8388c4e6f","6":"f0e2b6da2cdadd3abe85","7":"07575636c8e5058934b4","8":"2f8c5047431fccfd768c","9":"47ea60a6f72140d0c976","10":"d9601c3a2af6a3d499f5","11":"dff82b3b7dfa6a4393ec","12":"59915dcc1ac27fac0d5d","13":"56c1da3d1e0a1769eb83","14":"8ff5fb0380aa964a316f","15":"d43e0cccd905cff011d1","16":"c59c39fb321ae987ff13","17":"cbdd228ca3177979166a","18":"04255b5a1b0bfb86a8b1","19":"4fdc39984b9c7f252255","20":"60c11f39d0429202f3ce","21":"e4b9532c4477382f0f7f","22":"450d72aeaf21534b36df","23":"69e7b377da3e7fb8361f","24":"3ade5c0e152a82acbfce","25":"e4434ef9aeb3a0c2f4b2","26":"d65510e300e963e66ddb","27":"f82a54d39d0382d200f3","28":"39b6305d09e8b3cf7cf4","29":"4dc66e36298e43447896","30":"4f39214861d5dfc0084c","31":"ddffad8b59cc5aaff211","32":"fb00b44234e664ac0f25","33":"9c7faf87bc1c3de790e3","34":"715ebdfc928994b44c90","35":"c223e5377b4725da41bd","36":"ee038239e2d16e87a026","37":"ba5ff1855a75325f2484","38":"f185a02cfeeb507fb639","39":"3f48652e36a5f76c87ab","40":"2b011cd1b6b1a912afe1","41":"14098d2f64511c2c0471","42":"f013ea5b9af9cd31d109","43":"a74a84f92f1117e9e0b7","44":"f8598ddf2ea1336b57ae","45":"f379dbe25625baa1e997","46":"b8688c58b7265743b44c","47":"6917aea767cef781dc72","48":"555419eac4ead1582b59","49":"860f0068c38c41f52e86","50":"b69ca14ac5407cd16d5a","51":"5c68c5f30419dd9617e1","52":"17c1d906d1f1a5848c0d","53":"0afedcde9dd2285e4708","54":"3a741a19cdfbc8f3130f","55":"ec32571ceea4a2b56a89","56":"54f616b0af61ae09c434","57":"6ebddfe7b385699109f7","58":"d8fdfafa7954db3c265d","59":"94a4a1f3439ae5fd5620","60":"a70f679cdb2631564e3f","61":"eb35726f70a317d82bb6","62":"04c393ad845128366c4b","63":"7dd75c9fad4d38750e7d","64":"20810c4a8c821171d120","65":"76eccf80ff9175665d29","66":"f0476a020ac267351ff4","67":"44029ab745f20a5b6b9a","68":"b0b8c2afc93d17c150f1","69":"899251fed37384a66986","70":"1e97dceec0007f313fc6","71":"498a80bcef2e03a38a2d","72":"adfe2e58721cbd6fed5c","73":"324e397233444d7acbc0","74":"bad18d5c01d0a1a6a52a","75":"1edc3c3b1e3adcb49a5e","76":"fda323324f377edfdeb2","77":"0d168e6741d1b13b3312","78":"7cceb91ee71922410a32","79":"ffa50ab5f4ae0b8a64f9","80":"31a5b3c620d7bbbadff5","81":"af057bb559dc14c1f16e","82":"1fc59ef17b6503887d1e","83":"dce8ddf4b24dff929f60","84":"7b75074fec1bb05e52e1","85":"4bb53a77db3893c6ee15","86":"18e234541223ed8a1742","87":"0e60ec7be9aad50f43ee","88":"e994d96946de2d7f7231","89":"4916efc4ffae3b848a20","90":"b8ab7cb8a221b3841a5f","91":"0df1aa9d1d9c9817a8ec","92":"fe61a7a7dfdf78ed59cf","93":"5c62fa7565a14d4d5fc0","94":"40b2b486c473bef57cea","95":"6cb11ee6eca7e292cd6a","96":"1239fc6ff942e4c621e6","97":"8f1fa9f4789c92645318","98":"ce82519ca5811a57bf04","99":"7cb616d8f9234a368731","100":"55cb2cb72f072eb981a6","101":"2192ee88d36455a41650","102":"56309860d4a783cc8f33","103":"781eb5cccae0307c5a18","104":"b630ed7a865ee7cb0935","105":"db78bf94b331ecdd3d52","106":"08acdd85156337905f61","107":"5954ab84a83bfe8e82b1","108":"d419168e368da7984762","109":"e3efdd5c0123d5d3ee0a","110":"01f53f2d0d02d9c6139a","111":"2f0139760eeed18bac7f","112":"47c0bb4b6cfcc6f7ee6a","113":"5e5b162cac9b6c88dc47","114":"b721a06277fcc97eb477","115":"ef47f78a680031e4c391","116":"fedc745f59191fe8a3f7","117":"ca024d3e85579bebb8db","118":"a5da6e69566382a5f8af"}[chunkId] + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_config.yml":
/***/ (function(module, exports, __webpack_require__) {

const { Paramorph, Layout, Include, Post, Collection, Category, Tag } = __webpack_require__("./node_modules/paramorph/model/index.js");
// GENERATED BY PARAMORPH //
const React = __webpack_require__("react");

// CONFIG //
const config = {
  "title": "SztukaUniwersalna.pl",
  "timezone": "Europe/Warsaw",
  "collections": {
    "categories": {
      "title": "Categories",
      "output": true,
      "layout": "ParrotLayout"
    },
    "pages": {
      "title": "Pages",
      "output": true,
      "layout": "ParrotLayout"
    },
    "posts": {
      "title": "Posts",
      "output": true,
      "layout": "ParrotLayout"
    },
    "uploads": {
      "title": "Uploads",
      "output": false
    }
  },
  "baseUrl": "http://sztukauniwersalna.pl",
  "image": "http://sztukauniwersalna.pl/logo-gradient.png",
  "locale": "pl_PL",
  "menu": [
    {
      "title": "Sztuka Ubioru",
      "short": "Moda",
      "url": "/sztuka-ubioru/",
      "icon": "content_cut"
    },
    {
      "title": "Sztuka Makijażu",
      "short": "Makijaż",
      "url": "/sztuka-makijazu/",
      "icon": "remove_red_eye"
    },
    {
      "title": "Sztuka dla Sztuki",
      "short": "Sztuka",
      "url": "/sztuka-dla-sztuki/",
      "icon": "palette"
    },
    {
      "title": "O Blogu",
      "short": "O Blogu",
      "url": "/sztuka-uniwersalna/",
      "icon": "mood"
    },
    {
      "title": "Kontakt",
      "short": "Kontakt",
      "url": "/kontakt/",
      "icon": "email"
    }
  ]
};

// PARAMORPH //
const paramorph = new Paramorph(config);

// LAYOUTS //
paramorph.addLayout(
  new Layout(
    "ParrotLayout",
    "./_layouts/ParrotLayout.js",
  )
);
paramorph.addLayout(
  new Layout(
    "default",
    "./_layouts/default.js",
  )
);

// INCLUDES //
paramorph.addInclude(
  new Include(
    "Crumbs",
    "./_includes/Crumbs.js",
  )
);
paramorph.addInclude(
  new Include(
    "Feed",
    "./_includes/Feed.js",
  )
);
paramorph.addInclude(
  new Include(
    "Ingredient",
    "./_includes/Ingredient.js",
  )
);
paramorph.addInclude(
  new Include(
    "Method",
    "./_includes/Method.js",
  )
);
paramorph.addInclude(
  new Include(
    "Recipe",
    "./_includes/Recipe.js",
  )
);
paramorph.addInclude(
  new Include(
    "TableOfContents",
    "./_includes/TableOfContents.js",
  )
);

// COLLECTIONS //
paramorph.addCollection(
  new Collection(
    "$root",
    "$root",
    ".",
    undefined,
    undefined,
    undefined,
  )
);
paramorph.addCollection(
  new Collection(
    "categories",
    "Categories",
    "./_categories",
    "ParrotLayout",
    true,
    undefined,
  )
);
paramorph.addCollection(
  new Collection(
    "pages",
    "Pages",
    "./_pages",
    "ParrotLayout",
    true,
    undefined,
  )
);
paramorph.addCollection(
  new Collection(
    "posts",
    "Posts",
    "./_posts",
    "ParrotLayout",
    true,
    undefined,
  )
);
paramorph.addCollection(
  new Collection(
    "uploads",
    "Uploads",
    "./_uploads",
    undefined,
    false,
    undefined,
  )
);

// PAGES //
paramorph.addPost(
  new Post(
    "/404/",
    "Nie Znaleziono",
    "Strona o tym adresie nie istnieje.",
    null,
    "Pages",
    "ParrotLayout",
    "./_pages/404.markdown",
    true,
    true,
    5,
    [],
    [],
    -2208988800000,
  )
);
paramorph.addPost(
  new Post(
    "/:pageNumber(-\\d+-)?/",
    "Strona Główna",
    "Sztuka w codzienności. Znajdź sposoby na odnalezienie odrobiny sztuki w codziennych czynnościach takich jak gotowanie, makijaż, oraz moda. Sztuka współczesna, sztuka abstrakcyjna, inspiracje dziełami wielkich twórców.",
    null,
    "Pages",
    "ParrotLayout",
    "./_pages/index.markdown",
    true,
    false,
    5,
    [],
    ["index","sztuka","uniwersalna","kreacja","moda","makijaż","gotowanie","moodboard","artysta","art"],
    1500149520000,
  )
);
paramorph.addPost(
  new Post(
    "/kontakt/",
    "Kontakt",
    "Dla Czytelników Jeśli podoba Ci się to, co robimy doceń to zostawiając komentarz. Z kolei najszybszą i najwygodniejszą formą kontaktu z redakcją Sztuki Uniwersalnej jest facebook. Dzięki, że jesteś częścią naszej społeczności! Pozdrawiam i do napisania :) facebook.com/sztukauniwersalna instagram.",
    null,
    "Pages",
    "ParrotLayout",
    "./_pages/kontakt.markdown",
    true,
    true,
    5,
    [],
    [],
    1539892140000,
  )
);
paramorph.addPost(
  new Post(
    "/sitemap/",
    "Mapa Witryny",
    "Sztuka w codzienności. Znajdź sposoby na odnalezienie odrobiny sztuki w codziennych czynnościach takich jak gotowanie, makijaż, oraz moda. Sztuka współczesna, sztuka abstrakcyjna, inspiracje dziełami wielkich twórców.",
    null,
    "Pages",
    "ParrotLayout",
    "./_pages/sitemap.markdown",
    true,
    false,
    5,
    [],
    ["sitemap","dla bota"],
    1500149520000,
  )
);
paramorph.addPost(
  new Post(
    "/sztuka-uniwersalna/",
    "Sztuka Uniwersalna",
    "Witaj na blogu Sztuka Uniwersalna, blogu niepospolitym, ciekawym i inteligentnym. Znajdziesz tutaj autorskie felietony i artykuły, z których mamy nadzieję, że wyniesiesz wiele refleksji. Przeczytasz także recenzje bierzących wystaw artystycznych, odnajdziesz makijażowe inspiracje w postaci charakteryzacji wzorowanych na dziełach sztuki, oraz dowiesz się co nieco o wielkich mistrzach malarstwa. Nie krępuj się, chłoń wiedzę. W każdy pierwszy czwartek miesiąca będzie czekać na Ciebie MOODboard, czyli tablica ukazująca wpływy poszczególnych kierunków artystycznych (okresów) na różne dziedziny twórczości.",
    "https://assets0.ello.co/uploads/asset/attachment/8377042/ello-optimized-de1f7976.jpg",
    "Pages",
    "ParrotLayout",
    "./_pages/sztuka-uniwersalna.markdown",
    true,
    true,
    5,
    [],
    ["olela","artysta","blog","sztuka","uniwersalna"],
    1504891020000,
  )
);
paramorph.addPost(
  new Post(
    "/tag/",
    "Tag",
    "",
    null,
    "Pages",
    "ParrotLayout",
    "./_pages/tag.markdown",
    false,
    true,
    5,
    [],
    [],
    -2208988800000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-07-15-uniwersalnosc-sztuki/",
    "Uniwersalność Sztuki",
    "Interesowało mnie utrwalanie wszystkich prostych czynności, bo są UNIWERSALNE. Każda z nich, kiedy się na niej skupimy, zatrzymamy na sekundę, staje się dziełem SZTUKI. ~ Natalia Lach-Lachowicz (Natalia LL) Od pewnego czasu obserwuje zjawisko nagminnego pojawiania się słów ‘art’, ‘artist’ w nazewnictwie zawodowym.",
    "https://assets1.ello.co/uploads/asset/attachment/6230425/ello-optimized-928b9c87.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-07-15-uniwersalno-sztuki.markdown",
    true,
    true,
    3,
    ["Sztuka dla Sztuki"],
    ["art","artist","sztuka","dzieło","artysta","kreacja"],
    1500148560000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/",
    "Wenus vs Chanel, czyli_Nowa Dziewczyna z_Perłą",
    "Jestem tym, który delikatnie, z wielką precyzją i odwagą wsuwa maleńkie ziarnko piasku pomiędzy twarde uszy muszli. Jestem tym cierpliwym, który czeka wiele lat zanim jego dotyk urzeczywistni się w postaci nieśmiertelnego piękna. Jestem stwórcą, kreatorem nowej rzeczywistości w akcie nieznanym. Co dzieje się wewnątrz małży nie jesteśmy w stanie do końca wyjaśnić. Arystoteles to maleńkie cudo nanotechnologii porównywał do zapłodnienia kroplą oceanu.",
    "https://assets0.ello.co/uploads/asset/attachment/6229492/ello-optimized-56e3e021.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru"],
    ["chanel","perły","wenus","moda","art","kreacja","dzieło","artysta"],
    1504780320000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/",
    "Make-up inspirowany obrazem. M64_by_Wojciech Fangor",
    "Optyczne majaczenie. Gdzieś uciekam źrenicą, szukam granicy - jedynej, ostrej, wyczuwalnej. Nie znajduję niczego, co pozwala zatrzymać wzrok na chwilę. W sumie czuję ból, podobny do tego, który dotyka mnie po wielu godzinach spędzonych przed ekranem komputera. Uciekam okiem, spoglądam w dal.",
    "https://assets0.ello.co/uploads/asset/attachment/6212854/ello-optimized-8ec92992.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["fangor","makeup","makijaż","dzieło","obraz","kreacja","artysta","art","sztuka"],
    1505148720000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-09-18-fuerteventura-impressions/",
    "Fuerteventura impressions",
    "Podobno Na początku była Atlantyda. Cudowna kraina, w której diamenty występowały tak często, jak warzywa czy zioła. Góry odgradzały ziemie od nieprzyjaznych wiatrów. Mieszkańcy żyli w harmonii z naturą i sobą nawzajem. Mierzyli do dwóch metrów wzrostu, oczy ich były niebieskie, a włosy jasne , dotknięte słońcem.",
    "https://assets0.ello.co/uploads/asset/attachment/6235681/ello-optimized-4ab7553c.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-09-18-fuerteventura-impressions.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["podróż","wyspa","fuerteventura","sztuka","szkic","art","kreacja"],
    1505749080000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/",
    "Make-up inspirowany obrazem. M10_by_Wojciech Fangor",
    "Do wykonania makijażu użyłam: Paleta cieni Revolution 'Colour Chaos' Tusz do rzęs Pupa Vamp Baza pod cienie (również maskowanie brwi) MAC Paint Pot odcień 'Soft Ochre' konturowanie twarzy L'oreal Infallible Sculpt rozświetlacz pod oczy Dr Irena Eris ProVoke nr 2 róż Bourjois nr 15 'Rose Eclat' podkład Bourjois '123 Perfect' odcień nr 52 Vanilla puder fixujący Wibo pomadka MAC z serii frost odcień 'Pick me, Pick me!'",
    "https://assets0.ello.co/uploads/asset/attachment/6256758/ello-optimized-b16160dc.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["fangor","makeup","makijaż","dzieło","obraz","kreacja","artysta","art","sztuka"],
    1506012540000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-09-25-podlewaj-swoje-kwiaty/",
    "Podlewaj_swoje_kwiaty.",
    "Przez całe swoje życie odczuwam paniczny lęk przed odebraniem telefonu. Przed wykonaniem zresztą też. Kiedy tylko na ekranie pojawiają się nieznane cyferki wewnątrz mojego brzucha rodzi się uczucie ścisku, podobne do tego, kiedy owijasz (dla zabawy) cienką nitką swój palec wskazujący. Kiedy wiem, że muszę do kogoś zatelefonować (i nieważne czy jest to ktoś znajomy, czy nie) dokładnie analizuje treść zdań, które wypowiem. Po cichu, w środku głowy symuluje rozmowę.",
    "https://assets2.ello.co/uploads/asset/attachment/6273381/ello-optimized-aaf18cbf.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-09-25-podlewaj-swoje-kwiaty.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru"],
    ["stylizacja","moda","kwiat","art","sztuka","kreacja"],
    1506356340000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-09-28-neoplastycyzm-moodboard/",
    "Neoplastycyzm [moodboard]",
    "W latach 1917-1928 Theo van Doesburg wydawał w Holandii czasopismo De Stijl (po niderlandzku 'styl'). W pierwszym numerze wydrukowany został manifest malarza Piet'a Mondrian'a. Przedstawiał on zarys nowego programu artystycznego. 'Neoplastycyzm' zakładał oddziaływanie poprzez przeciwieństwa, piony vs poziomy, siła aktywna na przeciw biernej. W neoplastycyzmie wyróżniamy: dwie podstawowe linie: wertykalną i horyzontalną trzy kolory zasadnicze: żółty, czerwony, niebieski trzy niekolory: biel, czerń, szarość Dodatkowo, każda barwa nacechowana jest inną ekspresją dynamiczną: żółty opisuje piony, niebieski poziomy, a czerwień łączy dwa poprzednie równoważąc je.",
    "https://assets1.ello.co/uploads/asset/attachment/6288152/ello-optimized-1e1c821b.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-09-28-neoplastycyzm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["neoplasticism","moodboard","art","sztuka","artysta","kierunek"],
    1506618900000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-10-03-cala-ta-j-dot-dot-dot/",
    "Cała_Ta_J...",
    "Przyszła. Nie przegoniły jej długie wieczory z przyjaciółmi na Placu Zbawiciela przy białym winie. Ona rozlała czerwone. Przyszła. Na nasze cienkie ramiączka zarzuciła szare swetry.",
    "https://assets1.ello.co/uploads/asset/attachment/6311178/ello-optimized-1d7944a6.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-10-03-cala-ta-j-dot-dot-dot.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru"],
    ["jesień","stylizacja","moda","sztuka","kreacja","artysta","dzieło"],
    1507051080000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-10-05-kolo-moodboard/",
    "KOŁO [moodboard]",
    "Koło Moodboard by Olela Krawczyk",
    "https://assets0.ello.co/uploads/asset/attachment/6321789/ello-optimized-10c170fc.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-10-05-kolo-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["circle","koło","symbol","moodboard","art","sztuka","artysta"],
    1507224780000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/",
    "Make-up inspirowany obrazem. 'Flying_Eyes'_by_Yayoi Kusama",
    "Kiedyś pewien profesor czytając kawałek mojej pracy semestralnej powiedział: „Jako artystka może być pani wariatką, ale nie jako studentka.”, po czym odesłał mnie z kwitkiem (bez oceny) do domu. Kiedy myślę o wariactwach w sztuce, to zaraz obok postaci Witkacego maluje mi się twarz Yayoi Kusama. Jej przepełnione obsesją oczy wibrują w przestrzeni niczym część jej artystycznych instalacji. Yayoi liczy 88 wiosen i od wielu, wielu lat mieszka w tokijskim szpitalu psychiatrycznym.",
    "https://assets2.ello.co/uploads/asset/attachment/6343928/ello-optimized-62e000e7.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["kusama","yayoi","makeup","makijaż","dzieło","obraz","kreacja","artysta","art","sztuka"],
    1507652700000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-10-12-pop-art-moodboard/",
    "POP-ART [moodboard]",
    "POPular ART... czyli kierunek w sztuce, któremu w ukształtowaniu się pomógł konsumpcyjny charakter zachodniej cywilizacji. Termin ten po raz pierwszy użyty został przez angielskiego krytyka sztuki Lawrence’a Allowaya w „Przeglądzie Architektonicznym” („Architectural Digest”) z 1952 r. Artyści pop-artu czerpali inspiracje z surrealizmu, dadaizmu, naturalizmu, wywyższając świadectwa kultury masowej do rangi sztuki. Początkowo nurt objął malarstwo, grafikę, później również rzeźbę, obiekt, instalację, asamblaż, kolaż...",
    "https://assets0.ello.co/uploads/asset/attachment/6354483/ello-optimized-42b4b370.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-10-12-pop-art-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["popart","pop","art","moodboard","sztuka","kierunek","artist","artysta"],
    1507819620000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/",
    "Stylizacje za grosze, czyli pokochaj lumpeksy!",
    "W swoim życiu nie spotkałam kobiety, która nie lubiłaby ciuchów. Wygląd przecież nie tylko świadczy o nas samych, ale też jest wyrazem szacunku dla drugiego człowieka. Poza tym, dzięki dobrze dopasowanym ubraniom można świetnie się czuć, co przekłada się tak naprawdę na nasze życie. Salvador Dali mawiał „Podstawą wielkich zwycięstw jest ubranie.” I my, na co dzień odnosimy takie swoje małe zwycięstwa, kiedy uda nam się ubrać zgodnie z sobą samym, bo dzięki temu promieniujemy dobrą energią.",
    "https://assets1.ello.co/uploads/asset/attachment/6379870/ello-optimized-d3d63468.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru"],
    ["taniaodzież","lumpeks","tania","stylizacja","moda","fashion","sztuka","art","artysta","artist"],
    1508314920000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-10-19-minimalism-moodboard/",
    "Minimalizm [moodboard]",
    "Minimalizm (lata 60te XX wieku)... Jak sama nazwa wskazuje artyści sztuki minimalnej dążyli do redukcji w dziele sztuki. Operowali uproszczoną bryłą, geometrycznymi kształtami, płaszczyznami i skalą. Daleko było im do ekspresji, do jakiegokolwiek przejawu subiektywu w dziele. Eliminowano ślad autorski, zapraszając w ten sposób odbiorcę do spotkania z anonimowym charakterem pracy.",
    "https://assets1.ello.co/uploads/asset/attachment/6385513/ello-optimized-a0405c31.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-10-19-minimalism-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["minimalizm","minimalism","minimal","art","moodboard","sztuka","artist","artysta","kreacja"],
    1508427600000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-10-25-kolaz-okladek/",
    "Kolaż_okładek.",
    "Znalazłam się w miejscu, do którego przeciętny śmiertelnik zwykł przychodzić z nadzieją magicznego uzdrowienia. Liczy on bowiem na to, że dwie krople brunatnego napoju znajdujące się na dnie białej filiżanki są w stanie zdjąć z niego chroniczne zmęczenie i odejmą z jego, i tak już ujemnego bilansu snu, parę godzin. A on w te bonusowe godzinki będzie mógł oddać się swojej pasji, na którą przez ostatnie dwa lata swojego życia zwyczajnie nie miał czasu, bo praca, bo dom, bo dzieci. Tak... większość z nas przychodzących do kawiarni oczekuje nie tylko wytwornego smaku, ale też efektów.",
    "https://assets0.ello.co/uploads/asset/attachment/6410495/ello-optimized-9e2aa655.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-10-25-kolaz-okladek.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["kolaż","sztuka","art","artysta","kreacja"],
    1508930520000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-10-26-kubizm-moodboard/",
    "Kubizm [moodboard]",
    "Wyobraźcie sobie pewien zestaw przedmiotów stojących na stole. Niech to będzie wazon, miska z owocami, nóż i poranna gazeta. Przedmioty te oświetlone są dziennym światłem, którego źródłem jest okno z lewej strony. Patrzycie na martwą naturę jako na całość, na zjawisko jedności. Teraz, skupcie się na poszczególnych elementach i niech zaistnieją w waszym umyśle jako figury geometryczne.",
    "https://assets2.ello.co/uploads/asset/attachment/6416631/ello-optimized-d59ec2a0.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-10-26-kubizm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["kubizm","cubism","moodboard","art","sztuka","artysta","kreacja"],
    1509026880000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-11-02-surrealizm-moodboard/",
    "Surrealizm [moodboard]",
    "André Breton, 'Manifest surrealizmu' (1924 r.), fragmenty: Droga wyobraźnio, najbardziej w tobie kocham to, że nie przebaczasz. Mógłbym spędzić życie na zachęcaniu wariatów do zwierzeń. Są to ludzie nieposzlakowanej uczciwości, których prostoduszność może się równać tylko z moją. Dla odkrycia Ameryki trzeba było, ażeby Kolumb wybrał się w drogę z kupą wariatów.",
    "https://assets2.ello.co/uploads/asset/attachment/6434565/ello-optimized-6114c15d.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-11-02-surrealizm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["surrealizm","surrealism","nadrealizm","moodboard","sztuka","artysta","art","kreacja"],
    1509631920000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/",
    "Make-up inspirowany obrazem. 'Czarny_kwadrat_na_białym_tle' by Kazimierz Malewicz",
    "‘Phi! Takie coś to pięcioletnie dziecko potrafi namalować!’ Ty też słyszałeś podobne stwierdzenia w galerii sztuki współczesnej? Zapewne zastanowiłeś się, czy to ignorancja, czy niezrozumienie. W moim rozumieniu chodzi o to drugie.",
    "https://assets2.ello.co/uploads/asset/attachment/6474036/ello-optimized-b7d22d41.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle-by-kazimierz-malewicz.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["malewicz","suprematyzm","kwadrat","makeup","makijaż","dzieło","obraz","kreacja","artysta","art","sztuka"],
    1510062240000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-11-09-action-painting-moodboard/",
    "Action_Painting [moodboard]",
    "Moje malarstwo to moja egzystencja. ~ Jackson Pollock",
    "https://assets2.ello.co/uploads/asset/attachment/6479007/ello-optimized-273a25d5.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-11-09-action-painting-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["action","painting","moodboard","pollock","art","artysta","sztuka"],
    1510250700000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/",
    "Wystawa: Pablo_Picasso – wizerunek wielokrotny",
    "Z tą ekspozycją wiązałam dość duże nadzieje. Pablo Picasso na Zamku w Lublinie! Ostatnia wystawa Picassa w tym mieście miała miejsce w 1969 roku i na pewno nie była tak obszerna jak tegoroczna. Bowiem w 2017 roku mamy w ramach niej okazję zobaczyć ponad 300 dzieł. Większość z nich przeżywa swój pierwszy raz ‘oko w oko’ z lubelską publicznością.",
    "https://assets1.ello.co/uploads/asset/attachment/6511870/ello-optimized-8332e89c.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["wystawa","exhibition","picasso","lublin","recenzja","artysta","art","sztuka","kreacja","grafika"],
    1510597920000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-11-16-impresjonizm-moodboard/",
    "Impresjonizm [moodboard]",
    "Impressionism moodboard by Olela Krawczyk",
    "https://assets2.ello.co/uploads/asset/attachment/6535912/ello-optimized-1ea87931.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-11-16-impresjonizm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["impresjonizm","impressionism","moodboard","monet","artist","artysta","sztuka"],
    1510850160000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/",
    "Make-up inspirowany obrazem. 'Figure, Dog, Birds' by Joan_Miró",
    "Kiedy patrzysz na obraz budzi on w Tobie emocje. Jedne płótna niosą ze sobą smutek, namawiają do nostalgii, inne cieszą się razem z Tobą, wnosząc w życie kolor. Przy płótnach Salvadora śniłam koszmary. Miałam wrażenie, że cała rzeczywistość i czas rozpływają się niczym karmelowy chupa-chups w piekarniku nagrzanym do 180°C . Max Ernst niósł ze sobą widmo apokalipsy.",
    "https://assets0.ello.co/uploads/asset/attachment/6623239/ello-optimized-f916976a.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["Miro","surrealism","makeup","makijaż","dzieło","obraz","kreacja","artysta","sztuka"],
    1512070320000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-12-07-op-art-moodboard/",
    "Op-art [moodboard]",
    "Op Art Moodboard by Olela Krawczyk",
    "https://assets0.ello.co/uploads/asset/attachment/6664021/ello-optimized-55517a7b.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-12-07-op-art-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["opart","optical","art","moodboard","artist","artysta","sztuka"],
    1512664620000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/",
    "Wystawa: Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce Łacińskiej w latach 50. – 70.",
    "W marcu tego roku otworzył swoje drzwi pawilon Muzeum Sztuki Nowoczesnej nad Wisłą. Pawilon ten jest tymczasowy, a jego istnienie w roli przestrzeni wystawienniczej szacuje się na około cztery lata. Pierwszą wystawą, jaka miała tam miejsce była ‘Syrena herbem twym zwodnicza’ (tytuł zaczerpnięty został z wiersza Cypriana Kamila Norwida). Była to ekspozycja dość adekwatna, co o miejsca i czasu, pawilon bowiem nie tyko stoi w Warszawie, ale też bardzo blisko samego symbolu tego miasta – pomnika Warszawskiej Syrenki tuż nad brzegiem Wisły. Samo otwarcie było wielkim dwudniowym wydarzeniem naszpikowanym różnego rodzaju atrakcjami dodatkowymi.",
    "https://assets1.ello.co/uploads/asset/attachment/6690686/ello-optimized-14031b74.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art-w-europie-wschodniej-i-ameryce-lacinskiej-w-latach-50-70.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["wystawa","exhibition","opart","kineticart","recenzja","sztuka","artysta","muzeum"],
    1513016100000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-12-17-o-kolorach-fiolet/",
    "O kolorach: Fiolet",
    "Tak! Już jest! Kolorem roku 2018 według Pantone został ‘Ultra Violet 18-3838’! Cieszę się niezmiernie, bo to jeden z moich ulubionych kolorów. Fiolet kryje w sobie twórczy potencjał, inspiruje do kreatywnego działania.",
    "https://assets0.ello.co/uploads/asset/attachment/6766577/ello-optimized-8277c488.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-12-17-o-kolorach-fiolet.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu","Sztuka dla Sztuki"],
    ["kolor","fiolet","pantone","cmyk","rgb","sztuka","art","artysta","makeup"],
    1513536000000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-12-21-moje-wybory-grudzien/",
    "Moje wybory: grudzień",
    "Zima to czas, kiedy wszystko w przyrodzie zasypia, aby wraz z nadejściem wiosny obudzić się w pełni sił. Podobnie jest np. z naszą skórą, dlatego tak ważne jest, aby odpowiednio o nią zadbać. Niech nie zwiodą naszych zmysłów te ciemne miesiące, pobudźmy je aromatem świątecznych potraw i zapachem ulubionych perfum. Czas spędzony w gronie najbliższych niech będzie czasem wzajemnych inspiracji i opowieści o niedawno przeczytanych książkach i obejrzanych filmach.",
    "https://assets1.ello.co/uploads/asset/attachment/6785630/ello-optimized-d88d7dd9.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-12-21-moje-wybory-grudzien.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["wybory","inspiracje","zima","perfumy","książka","kosmetyk","torebka"],
    1513866780000,
  )
);
paramorph.addPost(
  new Post(
    "/2017-12-31-kolagen/",
    "Kolagen",
    "Tego dnia budzik nie zadzwonił. Choć dało się ulec wrażeniu, że śpi twardo jak kamień, jej sen przypominał raczej kłębek króliczych włosów wyczesanych nerwowo Tangle Teezer’em. A we śnie działo się wszystko to, czego nie mogła doświadczyć na jawie. Spadała w dół, lecz owe spadanie było jak najpiękniejszy lot. Unosiły ją niewidzialne skrzydła, wiatr delikatnie muskał rumiany policzek.",
    "https://assets1.ello.co/uploads/asset/attachment/6824416/ello-optimized-7218aa5a.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2017-12-31-kolagen.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["kolagen","kobieta","sztuka","kreacja","portret","kolaż"],
    1514740080000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/",
    "Ekspresjonizm_abstrakcyjny [moodboard]",
    "Nazwa złożona z dwóch nazw – ekspresjonizm abstrakcyjny. Ekspresja (łac. exspressio – wyciskanie soku), czyli uzewnętrznienie, wyraz. Obecna od najmłodszych lat, często nieuświadomiona – ekspresja mimiki, ekspresja słowna, wszystkie gesty składające się na obraz naszych emocji i wewnętrznych przeżyć. Abstrakcja (łac.",
    "https://assets0.ello.co/uploads/asset/attachment/6832049/ello-optimized-5f9bd386.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["ekspresjonizm","abstrakcyjny","moodboard","ekspresja","abstrakcja","szkoła nowojorska","sztuka","artysta","kreacja"],
    1515065220000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-01-14-o-kolorach-czerwien-cz-dot-1/",
    "O kolorach: Czerwień, cz.1",
    "Czerwień... Miłość, namiętność, pożądanie. Kolor kochanków. Czerwień wywołuje silniejsze reakcje naszej podświadomości niż inne kolory. We wschodniej kulturze jest symbolem szczęścia.",
    "https://assets2.ello.co/uploads/asset/attachment/6897099/ello-optimized-2adb5b90.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-01-14-o-kolorach-czerwien-cz-dot-1.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["kolor","czerwień","czerwony","makeup","makijaż","sztuka","art","artysta","kreacja"],
    1515948780000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/",
    "Make-up inspirowany obrazem. 'Tutti Frutti' by Helen_Frankenthaler",
    "Helen Frankenthaler – jedna z niewielu kobiet amerykańskiego malarstwa, która miała faktyczny wpływ na jego rozwój. Pionierka ‘color field painting’, rozszerzała możliwości malarstwa abstrakcyjnego odnosząc się w niebezpośredni sposób do figuracji i pejzażu. Imponuje i inspiruje do tej pory. Urodziła się 12 grudnia 1928 roku w Nowym Jorku i tam też dorastała. Jej kariera zaczęła się w 1950 roku, kiedy to Adolph Gottlieb wybrał jej obraz ‘Plaża’ do zaprezentowania na wystawie pt.",
    "https://assets1.ello.co/uploads/asset/attachment/6960376/ello-optimized-f6c8c2b3.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["ekspresjonizm","abstrakcyjny","helen frankenthaler","makeup","makijaż","dzieło","obraz","artysta","art","sztuka"],
    1516639080000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-01-24-moje-wybory-styczen/",
    "Moje wybory: styczeń",
    "Przez moment miałam wrażenie, że śnieg w tym roku nie spadnie. Na początku stycznia temperatury plasowały się powyżej zera. Środek stycznia miał nam do zaoferowania lekki opad. Koniec stycznia – nareszcie! Obudziłam się pewnej spokojnej soboty i wyjrzałam przez okno, a tam...",
    "https://assets2.ello.co/uploads/asset/attachment/6975381/ello-optimized-a6226126.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-01-24-moje-wybory-styczen.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["wybory","inspiracje","zima","styczeń","kosmetyk","perfumy","książka","akcesoria"],
    1516798800000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-01-31-wystawa-david-lynch-silence-and-dynamism/",
    "Wystawa: David Lynch. Silence And Dynamism",
    "Musiałam ochłonąć. Minęły trzy dni od wizyty na wystawie ‘David Lynch. Silence and Dynamism’ w Centrum Sztuki Współczesnej w Toruniu. Nadal rodzą się we mnie refleksje, wracają obrazy, w głowie kłębią się myśli. Człowiek, którego dotąd kojarzyłam tylko i wyłącznie z produkcji filmowych (w tym uwielbianego przeze mnie ‘Miasteczko Twin Peaks’) okazał się być wszechstronnym artystą z własną wizją.",
    "https://assets1.ello.co/uploads/asset/attachment/7022117/ello-optimized-fdb62922.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-01-31-wystawa-david-lynch-silence-and-dynamism.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["wystawa","exhibition","david lynch","lynch","toruń","csw","sztuka","recenzja"],
    1517407680000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-02-08-rokoko-moodboard/",
    "Rokoko [moodboard]",
    "Niektórzy nazywają ten okres schyłkowym czasem baroku. Jednak styl rokoka subtelnie różni się od ‘ciężaru’ swojego poprzednika. Kolebką rokoko jest Francja. Wraz ze śmiercią Ludwika XIV w 1715 roku rządy przejmuje (5-cio letni wówczas) Ludwik XV. Z racji małoletności króla do 1723 roku za państwowe stery chwyci Filip Orleański.",
    "https://assets2.ello.co/uploads/asset/attachment/7093581/ello-optimized-bd88ef01.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-02-08-rokoko-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["rokoko","rococo","moodboard","sztuka","artysta","nurt","kierunek"],
    1518097680000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/",
    "Make-up inspirowany obrazem. 'Dove with Sun' by Pablo_Picasso",
    "Są wszędzie. Są upierdliwe i są wszędzie. Łażą takie szare po szarych chodnikach. Kiwają przy tym główkami jak te słynne samochodowe pieski. I gruchają.",
    "https://assets1.ello.co/uploads/asset/attachment/7123615/ello-optimized-079106f0.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["pablo picasso","picasso","dove","makeup","makijaż","artysta","sztuka","dzieło"],
    1518350160000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-02-18-o-narkotykach-xxi-wieku/",
    "O narkotykach XXI wieku",
    "Benjamin Franklin przepowiedział kiedyś, że sklepy staną się narkotykiem XXI wieku. Nie mylił się. Do sklepów chodzimy już nie tylko w celu zakupienia POTRZEBNYCH nam rzeczy, lecz upatrujemy w rzeczach naszych pragnień i marzeń. Żyjemy złudzeniem, że to one, te wszystkie kuszące cudeńka w pięknych opakowaniach są nam niezbędne do życia, że dzięki nim osiągniemy stan szczęśliwy. Mało nam.",
    "https://assets1.ello.co/uploads/asset/attachment/7175481/ello-optimized-02748f16.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-02-18-o-narkotykach-xxi-wieku.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru"],
    ["sale","wyprzedaż","zakupy","shopping","glitter","art"],
    1518953100000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-02-21-o-kolorach-biel-cz-dot-1/",
    "O kolorach: Biel, cz.1",
    "Kolor jest światłem Chyba każdy z nas kojarzy szklaną piramidę zwaną pryzmatem. To Newton jako pierwszy stwierdził, że uzyskiwane barwy nie są cechą pryzmatów lecz światła, które można rozdzielać i ponownie łączyć uzyskując światło białe. Barwa to tak naprawdę wrażenie psychiczne wywoływane w naszym mózgu, gdy oko odbiera promieniowanie elektromagnetyczne z zakresu światła. Barwa biała odbierana jest przez człowieka jako najjaśniejsza w otoczeniu odmiana szarości (przykład: kiedy fragment białego tła oświetlimy mocniejszym światłem wtedy jedna z powierzchni stanie się ciemniejsza, czyli jasnoszara). Nie istnieje jedna, konkretna barwa biała.",
    "https://assets0.ello.co/uploads/asset/attachment/7196140/ello-optimized-439f6456.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-02-21-o-kolorach-biel-cz-dot-1.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["kolor","biel","biały","makeup","makijaż","sztuka","artysta","kreacja"],
    1519217460000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-02-26-moje-wybory-luty/",
    "Moje wybory: luty",
    "W nocy w Warszawie termometr ma pokazać -15°C. Nieosiągalnym wydaje się spacer po parku bez uprzedniego założenia na siebie podkoszulki, koszulki, koszulki z długim rękawem, swetra, kurtki puchowej. Dodatkowo koniecznym jest opatulenie szyi (wraz z nosem) wełnianym szalem. Nosiciele okularów korekcyjnych w takie dni jak ten widzą świat bardziej zamazanym niż zdaję się on być bez szkieł (szkła parują pod wpływem wydychanego, gorącego powietrza). Cały obrządek opatulania trwa dłużej niż standardowy spacer do sklepu.",
    "https://assets0.ello.co/uploads/asset/attachment/7228043/ello-optimized-6d4c08d7.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-02-26-moje-wybory-luty.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["wybory","inspiracje","zima","luty","perfumy","książka","kosmetyk","biżuteria"],
    1519644000000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji/",
    "Wystawa: Przyszłość będzie inna - wizje i praktyki modernizacji społecznych po roku 1918",
    "Właściwie sama nie wiedziałam, czego spodziewać się po tej wystawie. Wybraliśmy się na nią dzień po wernisażu, czyli w sobotę. Wydaje mi się, że oczekiwałam kompletnie innych wrażeń, czegoś wizualnie zachwycającego, a dostałam porządną lekcję historii. Sama staram się nie rozpamiętywać przeszłych zdarzeń, jak i nie wspominać ubiegłego wieku w babcinym stylu: ‘a kiedyś to było...’.",
    "https://assets2.ello.co/uploads/asset/attachment/7244948/ello-optimized-b6208cdf.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji-spolecznych-po-roku-1918.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["wystawa","exhibition","zachęta","warszawa","przyszłość","sztuka"],
    1519826340000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-03-08-socrealizm-moodboard/",
    "Socrealizm [moodboard]",
    "Kiedy mówimy o kierunkach, nurtach w sztuce zazwyczaj mamy do czynienia z szeregiem cech dzieła, które kształtują się, dojrzewają na przestrzeni czasu. Nurty w sztuce to odpowiedź na sytuację w świecie sztuki, to komentarz na temat otaczającego nas świata jednego lub większej grupy artystów. To także często indywidualny pogląd na sztukę danej jednostki. W wielu przypadkach rozwój kierunków sztuki to ‘dzieło’ jednego artysty, który potrafił przekonać innych do swojego światoobrazu. To ‘dzieło’ człowieka, który zauważy oryginalne cechy i nazwie je za pomocą giętkiego języka swoich wypowiedzi.",
    "https://assets0.ello.co/uploads/asset/attachment/7293439/ello-optimized-cd0adf89.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-03-08-socrealizm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["socrealizm","moodboard","inspiracje","kreacja","sztuka","artysta"],
    1520530380000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/",
    "Make-up inspirowany obrazem. 'Onement VI' by Barnett_Newman",
    "Jest taki moment w życiu artysty, że nagle wszystko staje się jasne. Kreatywny umysł dręczony pytaniami o twórczość i jej sens nagle jaśnieje i, jak w znanej każdemu bajcie ‘Pomysłowy Dobromir’, nad głową utrudzonego malarza pojawia się światło. Nie jest to byle jakie światło. Oznacza ono bowiem przełom o mocy większej niż 100W. To ten moment, kiedy wewnętrzna iskra mówi Ci ‘to jest TO’.",
    "https://assets0.ello.co/uploads/asset/attachment/7490318/ello-optimized-015d1914.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["barnett newman","makeup","painting","abstract expressionism","abstrakcja","dzieło","artysta","kreacja","zip"],
    1523786700000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest/",
    "Wystawa: Komunikacja ze wszystkim, co jest",
    "Cyryl Polaczek nie chce nazywać siebie kuratorem. Na wernisażu wystawy pt.: „Komunikacja ze wszystkim, co jest” nie było przemowy. Liczni widzowie zostali pozostawieni sobie, sam na sam z pracami młodych twórców. Opisów prac też nie było.",
    "https://assets0.ello.co/uploads/asset/attachment/7554374/ello-optimized-3786eeb4.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["wystawa","exhibition","fundacja","stefan gierowski","sztuka","sztuka młodych","malarstwo"],
    1524587700000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-04-29-stylizacje-w-trendach-ss-2018/",
    "Stylizacje w trendach spring/summer_2018",
    "Trendy, trendy, trendy... To temat, który nie daje nam spokoju. Nieustannie powraca z miesiąca na miesiąc inny, odświeżony, powtórzony. Projektanci prześcigają się w innowacyjnych rozwiązaniach, trendsetterzy przewidują, CO i JAK będzie się nosić w nadchodzącym sezonie. Wszystkich tendencji nie sposób zliczyć.",
    "https://assets1.ello.co/uploads/asset/attachment/7579929/ello-optimized-fa670b7a.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-04-29-stylizacje-w-trendach-ss-2018.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru"],
    ["trendy","ss 2018","trends","moda","stylizacja","sztuka","art","artysta"],
    1525020180000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-05-02-moje-wybory-kwiecien/",
    "Moje wybory: kwiecień",
    "‘Kwiecień plecień, bo przeplata trochę zimy, trochę lata’ - z serii: przysłowia, które faktycznie się sprawdzają. Kwiecień zaskoczył nas ultra wysoką temperaturą aby zaraz następnego dnia oprószyć śniegiem. Pogoda jednak nieustannie zbliża się w stronę gorącego lata, dlatego nie możemy zapominać o filtrach przeciwsłonecznych. W szczególności, kiedy używamy kosmetyków z wysoką zawartością witaminy C (bowiem bez ochrony możemy nabawić się przebarwień). Idealnym rozwiązaniem na nadchodzące ciepłe dni są kremy BB.",
    "https://assets2.ello.co/uploads/asset/attachment/7599954/ello-optimized-429f11af.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-05-02-moje-wybory-kwiecien.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["wybory","kwiecień","róż","kremBB","kwiaty","ogród","paperbag","stradivarius","wiosna"],
    1525253940000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-05-10-puentylizm-pointylizm-moodboard/",
    "Puentylizm (pointylizm) [moodboard]",
    "Puentylizm lub pointylizm (fr. pointiller – kropkować, punktować) jest metodą twórczą powstałą pod koniec XIX wieku. Za jej twórcę przyjmuje się Georges Seurat'a, francuskiego przedstawiciela neoimpresjonizmu. Kompozycja puentylistyczna budowana jest za pomocą kropek, małych plamek kładzionych na powierzchnię płótna czubkiem pędzla. Czasami plamki przyjmują formę kwadratów, prostokątów, nabierają faktury.",
    "https://assets1.ello.co/uploads/asset/attachment/7655534/ello-optimized-a584038f.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-05-10-puentylizm-pointylizm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["moodboard","puentylizm","pointylizm","sztuka","art"],
    1525939020000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-05-14-oswoic-lek/",
    "Oswoić lęk",
    "Ostatnio dość często ją spotykam. W porannej drodze do łazienki towarzyszy mi jej chłodny oddech. Przy lustrze, kiedy wklepuję delikatnie jedną emulsję za drugą, wygląda ukradkiem zza moich pleców. Zapewne myślicie, że ze sobą nie rozmawiamy. O nie...",
    "https://assets0.ello.co/uploads/asset/attachment/7673036/ello-optimized-ee7ee412.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-05-14-oswoic-lek.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["lęk","fear","autoterapia","artysta","sztuka","makijaż"],
    1526306160000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-05-20-o-kolorach-roz/",
    "O kolorach: Róż",
    "Róż atakuje nas z każdej możliwej strony. Różowe są reklamy zabawek dla dziewczynek (0,5 – 18 lat), różowe są lakiery do paznokci, koronkowe majtki, a ostatnio także farby do włosów. Dlaczego właśnie ten kolor tak mocno przylgnął do płci pięknej i czy mężczyzna w różowej koszuli jest passé? W zakładach karnych w Teksasie i Arizonie ściany cel pomalowane są na różowo, a więźniowie noszą uniformy w tym właśnie słodkim kolorze. Podobno róż wycisza agresję...",
    "https://assets1.ello.co/uploads/asset/attachment/7700426/ello-optimized-99ff6751.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-05-20-o-kolorach-roz.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu","Sztuka dla Sztuki"],
    ["kolor","róż","różowy","pink","marilyn monroe","elsa schiaparelli","picasso"],
    1526811720000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-05-29-moje-wybory-maj/",
    "Moje wybory: maj",
    "Maj obfituje w premiery. Swój premierowy pokaz ma Słońce, które zachwyca siłą i blaskiem. Codziennie recytuje drobną poezję w porannej drodze do pracy, a w południe wygrywa arię uderzając z niezrównaną mocą. Premierę ma także książka Katarzyny Nosowskiej, która na okładce, niczym polska Marilyn Monroe, intryguje zalotnym uśmieszkiem Mona Lisy. Intrygujące i jakże prawdziwe są treści za jej ‘warhol’owską’ okładką.",
    "https://assets2.ello.co/uploads/asset/attachment/7746678/ello-optimized-f7cc20f4.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-05-29-moje-wybory-maj.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["wybory","choices","kosmetyki","kat von d","skin79","książka","nosowska","kreacja"],
    1527623280000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-06-05-jestem-wdzieczna-ci-zycie/",
    "Jestem wdzięczna Ci Życie",
    "Całkiem niespodziewanie poczułam dziś przypływ wdzięczności. Ogarnęła mnie ona od środka, oblała moją duszę miękką kołdrą nibymiodu. Zupełnie nie rozumiem dlaczego tak się stało. Ostatnio dużo rozmyślam o swoim życiu. Myślę o nim jak o książce, w której większość dotychczas napisanych rozdziałów zajmuje czas edukacji.",
    "https://assets0.ello.co/uploads/asset/attachment/7782959/ello-optimized-dec26970.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-06-05-jestem-wdzieczna-ci-zycie.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu","Sztuka dla Sztuki"],
    ["wdzięczność","post","tekst","artysta","sztuka","akademia","marzenia","cele"],
    1528212180000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-06-07-hiperrealizm-moodboard/",
    "Hiperrealizm [moodboard]",
    "Hiperrealizm (superrealizm lub fotorealizm) to prężnie rozwijający się kierunek w sztuce, począwszy od XX wieku. Artysta świadomie odrzuca wszelką indywidualną ekspresję dzieła. Punktem wyjścia staje się fotografia przedstawiająca najczęściej motywy świata codziennego - przedmioty, pejzaże, portrety. Perfekcyjna szczegółowość obrazu lub rzeźby nieraz wywołuje u nas uczucie podobne do doliny niesamowitości. Coś wygląda nad wyraz prawdziwie, choć jesteśmy świadomi, że prawdziwe nie jest.",
    "https://assets1.ello.co/uploads/asset/attachment/7793133/ello-optimized-ba8c3f3d.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-06-07-hiperrealizm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["hiperrealizm","fotorealizm","superrealizm","moodboard"],
    1528382400000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/",
    "RGB. Trzy stylizacje z mojej szafy",
    "Red Na planecie Red w układzie Ottona Wielkiego (pierwsza po lewej od gwiazdy zachodniej) żyją Redwetanie. Redwetanin ma w zwyczaju wstawać wraz ze wschodem księżyca planety (co tydzień innego, gdyż planeta posiada ich 496, tydzień zaś ma 9 dni, rok więc to 4 464 wschody). Redwetanin, jak sama nazwa wskazuje, ma wiele wspólnego z weterynarzem. Na Red na każdym kroku natknąć się można na ośrodki weterynarii, które wyrastają z brunatnego, piaszczystego podłoża niczym kwiaty po obfitym deszczu. Jednak miejsca te nie służą temu, czemu zwykły służyć na Ziemi.",
    "https://assets2.ello.co/uploads/asset/attachment/7859333/ello-optimized-1776af0a.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru"],
    ["moda","fashion","stylizacja","sztuka","art","artysta","kreacja","lem"],
    1530090240000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-07-05-abstrakcja-geometryczna-moodboard/",
    "Abstrakcja geometryczna [moodboard]",
    "Myślenie kształtem dotyka odległych czasów odkrycia i wykorzystania koła przez człowieka. Dany kształt ma za zadanie budować, określać sam siebie, porządkować przestrzeń wokół. W otoczeniu kształtów może panować chaos, jednak on sam w swojej istocie stoi w obronie ładu i harmonii. Nawet ten nieregularny lecz zamknięty w formę zdaje się być spokojniejszym. Pierwsza połowa XX wieku to czas rozwoju sztuki geometrycznej.",
    "https://assets1.ello.co/uploads/asset/attachment/7921062/ello-optimized-0bf2e24b.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-07-05-abstrakcja-geometryczna-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["moodboard","abstrakcja","geometria","sztuka","sztuka geometryczna","malarstwo","kształty"],
    1530795720000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse/",
    "Make-up inspirowany obrazem. \n'Blue_Nude_II' by Henri_Matisse",
    "Jest słoneczna jesień 1905 roku. Mieszkańcy Paryża lub jego odwiedzający mają okazję podziwiać dzieła sztuki na wystawie 'III Salon Jesienny' przy Polach Elizejskich. Do siódmej w kolejności sali wchodzi znany wówczas krytyk, Louis Vauxcelles. Na środku sali ustawione są rzeźby naśladujące styl Donatella, natomiast na ścianach wiszą obrazy młodych malarzy: Matisse’a, André Deraina, Maurice’a Vlamincka, Jeana Puy, Henriego Manguina i Alberta Marqueta. Przejęty i zszokowany krytyk krzyczy: „Donatello pośród dzikich bestii!",
    "https://assets0.ello.co/uploads/asset/attachment/7955482/ello-optimized-a5bb3b8a.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["makeup","makijaż","dzieło","henri matisse","fowizm","artysta","sztuka"],
    1531485360000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/",
    "Moje wybory: czerwiec/lipiec, cz.1",
    "Lato jest wtedy, kiedy kreska termometru unosi się ponad znacznikiem dwudziestu stopni o godzinie ósmej rano. Wtedy już wiem, że w południe upał będzie nie do zniesienia. Wiem, że warto zaszyć się na moment w klimatyzowanym pomieszczeniu ze szklanką zimnego (najlepiej cytrusowego) napoju. Takie gorąco i słońce ‘wymusza’ też na mnie specjalny rodzaj pielęgnacji skóry. Nie wyobrażam sobie wyjścia z domu bez grubej warstwy kremu z filtrem przeciwsłonecznym, jak i nie wyobrażam sobie noszenia ciężkiego makijażu.",
    "https://assets2.ello.co/uploads/asset/attachment/8016437/ello-optimized-2a0e101f.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["moje wybory","wybory","ulubieńcy","czerwiec","lipiec","lato","my choices","kosmetyki","książka","biżuteria","akcesoria"],
    1532696520000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/",
    "Moje wybory: czerwiec/lipiec, cz.2",
    "Oleje to skarby ziemi. Aby zachować młodość i siłę należy korzystać z tych skarbów codziennie, jeść je, pielęgnować nimi skórę twarzy i ciała, delektować się ich zapachem. Olej można pozyskać praktycznie ze wszystkiego. Na pewno słyszałeś o prozdrowotnych właściwościach oleju lnianego, ze względu na bogactwo kwasów omega 3 i 6 w nim zawartych. Podobno wystarczy łyżka oliwy z oliwek dziennie, aby stanowczo opóźnić procesy starzenia się komórek.",
    "https://assets2.ello.co/uploads/asset/attachment/8016440/ello-optimized-3ba1f2b0.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["moje wybory","my choices","ulubieńcy","lato","kosmetyki","kobieta","sztuka","akcesoria"],
    1532968800000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-08-09-secesja-moodboard/",
    "Secesja [moodboard]",
    "Dekoracyjność, bogata ornamentyka abstrakcyjna lub roślinna, miękka falista linia to cechy stylu secesyjnego. Secesja europejska trwała od końca XIX wieku do pierwszego dziesięciolecia wieku XX i była wliczana w ramy modernizmu. Inspiracje czerpane ze sztuki japońskiej przeplatają się w swobodnych układach kompozycyjnych dając wrażenie płaszczyznowości. Łacińskie ‘secessio’ oznacza ‘oddalenie się, wycofanie’, co może świadczyć o pragnieniu wyjścia ponad dotychczasowe ramy sztuki i zbudowania nowych zasad. Wrażenie to podkreśla francuskie ‘art nouveau’, czyli ‘nowa sztuka’ – tak właśnie we Francji nazywano styl secesyjny.",
    "https://assets1.ello.co/uploads/asset/attachment/8067664/ello-optimized-7f5e5cd5.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-08-09-secesja-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["secesja","secessio","art nouveau","klimt","schiele","gaudi","modernizm","sztuka"],
    1533809580000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri/",
    "Make-up inspirowany obrazem. \n'The Circus' from 'Jazz' book by Henri_Matisse",
    "W 1941 roku francuski krytyk i wydawca greckiego pochodzenia Stratis Eleftheriades-Tériade zwrócił się do Henri’ego Matisse’a z propozycją publikacji albumu z jego ilustracjami. Książka początkowo miała nosić tytuł ‘Cyrk’, ponieważ pierwsze ilustracje powstałe w 1943 roku nawiązywały właśnie do tej tematyki. Artysta wspominał, że widzi siebie jako metaforę cyrkowego, zazwyczaj samotnego artysty. Finalnie jednak nazwa ‘Jazz’ pozwoliła uwolnić rytmiczne skojarzenia poszczególnych kompozycji. Ostateczne dzieło zawiera 20 kolorowych printów wycinanek w formacie 41 na 66 centymetrów.",
    "https://assets0.ello.co/uploads/asset/attachment/8097382/ello-optimized-fe634efa.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri-matisse.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["henri matisse","jazz","jazz book","art book","design","collage"],
    1534351800000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-08-22-wystawa-handmade-acoustics/",
    "Wystawa: Handmade Acoustics",
    "Zatrzymaj się na moment i znajdź w sobie inność. Zastanów się i pogrzeb trochę w otchłani własnej tożsamości. Nie wstydź się, po raz pierwszy w życiu się nie wstydź. Powiedź do siebie, powiedź na forum, że lubisz wieczorami przebierać się za postaci z kreskówek i tańczyć przy hitach lat 90-tych. Przyznaj się, że fascynują Cię dźwięki drzew, że podczas porannego joggingu w parku obstukujesz wszystkie brzozy i dęby byleby doświadczyć magii drzewnego basu.",
    "https://assets2.ello.co/uploads/asset/attachment/8127713/ello-optimized-6ebadb5c.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-08-22-wystawa-handmade-acoustics.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["wystawa","exhibition","csw","tori wranes","handmade acoustics","obiekt","rzeźba","instalacja","site-specific","performance"],
    1534954020000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-08-31-moje-wybory-sierpien/",
    "Moje wybory: sierpień",
    "Pewnego sierpniowego dnia bałam się wyjść po kawę do sklepu, bo alarmowy sms ogłosił burze w całej Polsce, błyskawice i huragany. Burzy nie było, a przynajmniej nie była ona tak straszna, jak wizualizowałam. Do tej pory nie zaopatrzyłam się w kalosze, a parasoli nie znoszę. W deszczowy czas uwielbiam zaszyć się w domu i z książką w ręce nasłuchiwać stukania kropli o parapet. W tym miesiącu trafiłam na naprawdę świetną pozycję czytelniczą.",
    "https://assets0.ello.co/uploads/asset/attachment/8162296/ello-optimized-e83008f2.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-08-31-moje-wybory-sierpien.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["moje wybory","my choices","kosmetyk","książka","torebka","marc jacobs","michael kors","design","dom polski"],
    1535723880000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-09-06-futuryzm-moodboard/",
    "Futuryzm [moodboard]",
    "Futuryzm narodził się we Włoszech wraz z początkiem XX-ego wieku. Jego pionierem był Filippo Tommaso Marinetti, który opowiadał się za szybkością, technologią, rozwojem, patrzeniem w przyszłość (‘Ryczący samochód piękniejszy jest od Nike z Samotraki’). Wkrótce dołączyli do niego malarze Umberto Boccioni, Carlo Carrà, Gino Severini, Giacomo Balla, Luigi Russolo. Pierwszy Manifest Futuryzmu ukazał się w czasopiśmie ‘Le Figaro’ w 1909 r. W późniejszych latach ogłaszano jeszcze inne wersje np.",
    "https://assets1.ello.co/uploads/asset/attachment/8186587/ello-optimized-0901617e.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-09-06-futuryzm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["moodboard","futuryzm","futurism","giacomo balla","fendi","gino severini","art"],
    1536245040000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/",
    "Pre-Fall, Fall/Winter, Spring/Summer, Resort, Cruise – co_to_wszystko_znaczy? + FW Trends 2018/2019",
    "Świat mody prześciga się w nowych kolekcjach, zaskakujących rozwiązaniach, a przede wszystkim prześciga się w sprzedaży. Od niedawna można już kupić kreacje dopiero co zobaczone na wybiegu. ‘See Now Buy Now’ to strategia sprzedażowa wymyślona przez Christophera Baileya dla Burberry. Polega ona na tym, że pokaz transmitowany jest na żywo w internecie i widzowie mogą od razu kupić daną kreację. Projektanci wypuszczają rocznie ok.",
    "https://assets2.ello.co/uploads/asset/attachment/8201518/ello-optimized-bab86a7d.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort-cruise-co-to-wszystko-znaczy-plus-fw-trends-2018-slash-2019.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru"],
    ["trendy","trends","pre-fall","fall/winter","spring/summer","resort","cruise","collection","runway","fashion","show"],
    1536519900000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-09-21-o-kolorach-czern/",
    "O kolorach: Czerń",
    "Od zawsze i na zawsze. Czerń to barwa pełna kontrastów. W kulturze europejskiej przypisywana jest śmierci. Pogrążeni w żałobie zakładają na siebie czarne ubrania. Z kolei wśród Indian i w Starożytnym Egipcie kojarzono ją z życiem.",
    "https://assets2.ello.co/uploads/asset/attachment/8257250/ello-optimized-2523e86b.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-09-21-o-kolorach-czern.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu","Sztuka dla Sztuki"],
    ["o kolorach","czerń","czarny","kolor","symbolika","znak","black"],
    1537549140000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-09-27-moje-wybory-wrzesien-2018/",
    "Moje wybory: wrzesień 2018",
    "Ten miesiąc był niezwykle kapryśny. Jednego dnia naszła go ochota na potworne ciepło i zsyłał na nas falę tropikalnych upałów. Następnego dnia z kolei narzucał na siebie jesienny płaszcz pochmurnej aury. Wiele stworzeń ucierpiało przez te zmienne nastroje. Nieliczni nauczeni profilaktyki łyknęli garść witaminy C i mają się dobrze.",
    "https://assets2.ello.co/uploads/asset/attachment/8270060/ello-optimized-6f588d61.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-09-27-moje-wybory-wrzesien-2018.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["moje wybory","my choices","wrzesień","jesień","kapelusz","książka","kosmetyk"],
    1538048460000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-10-02-wystawa-bestia-bog-i-linia/",
    "Wystawa: Bestia, bóg i linia",
    "Po tej wystawie spodziewałam się zupełnie czegoś innego. ‘Splot wiedzy, religii i sztuki w regionie Azji i Pacyfiku’ kierował moje oczekiwania w stronę rytualnych figurek, ozdób, tkanin. Owszem, na wystawie znajdziemy obiekty traktujące o historii i kulturze danego obszaru, jednak obiektom tym nadano zupełnie nowe znaczenie. Często ich prawda ujawnia się wraz z wysłuchaniem lub przeczytaniem historii ‘dookoła’ dzieła. Dzieła oblane kontekstem religijnym (konfliktów na tle religijnym) stają w naszych oczach niczym świeżo wbity w ziemię miecz, bolą i jednocześnie intrygują, zapraszają do konfrontacji.",
    "https://assets1.ello.co/uploads/asset/attachment/8303882/ello-optimized-a698e434.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-10-02-wystawa-bestia-bog-i-linia.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["sztuka","wystawa","exhibition","artysta","dzieło","azja","muzeum"],
    1538502780000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-10-04-manieryzm-moodboard/",
    "Manieryzm [moodboard]",
    "Manieryzm nie jest jednoznacznym stylem. Jest bardziej terminem określającym konkretne zjawiska w sztuce XVI wieku. Wraz z końcem epoki renesansu (ok. 1520 r.) we Włoszech pojawiają się tendencje przerysowanych gestów i sylwetek.",
    "https://assets2.ello.co/uploads/asset/attachment/8307655/ello-optimized-f9a0f25f.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-10-04-manieryzm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["moodboard","manieryzm","mannerism","art","sztuka"],
    1538640180000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily/",
    "Make-up inspirowany obrazem. 'Kompozycja_VIII' by Wassily_Kandinsky",
    "Wassily Kandinsky jest doskonałym przykładem artysty-intelektualisty. Nie zależało mu na szokowaniu widza. Zgłębiał temat sztuki w sposób naukowy. Intensywna medytacja dzieła pozwoliła mu na dogłębną obserwację i w rezultacie syntezę systemów formalnych. Uznawany jest za współtwórcę i jednego z założycieli abstrakcjonizmu.",
    "https://assets1.ello.co/uploads/asset/attachment/8332593/ello-optimized-a881d10a.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily-kandinsky.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["makeup","makijaż","obraz","wassily","kandinsky","abstrakcja"],
    1539172500000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-10-24-moje-wybory-pazdziernik-2018/",
    "Moje wybory: październik 2018",
    "Dzwoni budzik. Leniwie otwieram oczy. Za zimną szybą zagościła poranna mgła. Budynki i drzewa giną w rozlanym mleku jesieni. Przez krótki moment rozważam ponowne zamknięcie powiek i powrót do krainy snów.",
    "https://assets1.ello.co/uploads/asset/attachment/8397339/ello-optimized-2d5cbc9e.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-10-24-moje-wybory-pazdziernik-2018.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu","Sztuka Ubioru"],
    ["moje wybory","my choices","październik","jesień","autumn","fenty beauty","mcqueen","lirene","kors"],
    1540391940000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-10-28-smierc-doroslego/",
    "Śmierć Dorosłego",
    "Filiżanka Świat jest pełen nic nieznaczących przedmiotów. Zawsze mi powtarzali: ‘pielęgnuj w sobie dziecko’. A teraz patrzę i mi się wydaje. Wydaje mi się, że dostrzegam jasnobrązowe zacieki na porcelanowej filiżance. Wydaje mi się być fascynującym zjawisko smug.",
    "https://assets0.ello.co/uploads/asset/attachment/8417134/ello-optimized-95e39ab9.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-10-28-smierc-doroslego.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["makeup","makijaż","sztuka","art","artysta","kreacja"],
    1540728180000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-10-31-kamp-moodboard/",
    "Kamp [moodboard]",
    "Susan Sontag jako pierwsza podjęła próbę zdefiniowania zjawiska kampu. W swoich ‘Notatkach o kampie’ z 1964 roku opisuje go jako sposób patrzenia na świat sztuki. ‘Kamp jest tkliwym uczuciem...’, jest akceptacją tego, co ludzkie. Estetyka niejednoznaczna, trudna do zdefiniowania, jednak pozostająca w pewnych kręgach – kultury gejowskiej, przesadnej teatralności, hermafrodytyzmu.",
    "https://assets1.ello.co/uploads/asset/attachment/8431503/ello-optimized-a97ea95f.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-10-31-kamp-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["moodboard","kamp","camp","sztuka","susan sontag"],
    1540985340000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe/",
    "Make-up inspirowany obrazem. 'Light_of_Iris' by Georgia_O'Keeffe",
    "Georgia O’Keeffe przychodzi na świat w amerykańskiej rodzinie zajmującej się hodowlą bydła. Jest drugim z siedmiorga dzieci i już od najmłodszych lat wykazuje się dużym talentem plastycznym. Matka, Ida Totto O’Keeffe, bardzo dba o rozwój swoich maluchów, dlatego już w wieku 12 lat Georgia wraz z siostrami uczęszcza na lekcje rysunku. Przyszła malarka kontynuuje naukę w Town Hall School w Wisconsin, gdzie szkoli się pod okiem akwarelistki Sary Mann. Georgia jet grzecznym dzieckiem.",
    "https://assets0.ello.co/uploads/asset/attachment/8467684/ello-optimized-96300a10.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["makeup","makijaż","obraz","georgia o'keeffe","malarka","ameryka","abstrakcja"],
    1541608020000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu/",
    "Historia pewnej projektantki, czyli perełka z lumpeksu.",
    "Dawno, dawno temu, w jednym z modowych wpisów starałam się udowodnić, jakie cuda znaleźć można w sklepach z odzieżą używaną. Chociaż od czasów, kiedy 'perełkę od dizajnera' można było kupić za złotówkę wiele się zmieniło. Wraz z dostępem do informacji rośnie świadomość konsumentów i... sprzedawców. Dziś już praktycznie każda z nas wie kim był Christian Dior, wie, że o dodatkach sygnowanych tą marką marzą kobiety na całym świecie.",
    "https://assets0.ello.co/uploads/asset/attachment/8502656/ello-optimized-8ef94531.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru"],
    ["arabella pollen","fashion","designer","second hand","Fall 1991/1992 London"],
    1542278160000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-11-22-wystawa-moda-polska/",
    "Wystawa: Moda Polska",
    "Dwa niewielkie piętra wypełnione wielką modą. Wystawa ‘Moda Polska’ w Centralnym Muzeum Włókiennictwa w Łodzi to historia pierwszego w Polsce domu mody, który swoją pomysłowością i stylem zasłynął na światowym rynku. Firma przechodziła wiele etapów, które zależne były od panującego wówczas ustroju. Kiedy brakowało materiałów stroje szyto np. z zasłon, koców, albo wstążek.",
    "https://assets2.ello.co/uploads/asset/attachment/8528320/ello-optimized-7b8afcba.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-11-22-wystawa-moda-polska.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["wystawa","moda polska","jaskółka","antkowiak","piętro III","piętro II","black & red"],
    1542902460000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-11-28-moje-wybory-listopad-2018/",
    "Moje wybory: listopad 2018",
    "Kiedy otwieram oczy za oknem wciąż panuje noc. Czarna otchłań połyka delikatnie umarłe krople deszczu. Stopami dotykam zimnej podłogi jednocześnie podnosząc ręce do góry w geście woli obudzenia. Sennym krokiem kieruję się w stronę kuchni w celu zaparzenia kawy. Przesypuję czarne ziarna do młynka rozsypując dookoła niewielką ich ilość.",
    "https://assets1.ello.co/uploads/asset/attachment/8549316/ello-optimized-f2d20ead.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-11-28-moje-wybory-listopad-2018.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu","Sztuka Ubioru"],
    ["wybory","listopad","kosmetyk","kolorówka","pielęgnacja","lektura","akcesoria"],
    1543418880000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-12-06-fluxus-moodboard/",
    "Fluxus [moodboard]",
    "Fluxus (łac. płynący; ang. to flow) nie był skonkretyzowanym kierunkiem w sztuce, a raczej ruchem, artystycznym manifestem artystów żyjących w latach 60-tych, 70-tych XX wieku. Charakterystyczny humor, nawiązanie do ruchu DADA pozwoliło na przekraczanie granic i wzajemnie przenikanie się dziedzin sztuki. Za flux-ojca uważany jest George Maciunas, amerykański artysta litewskiego pochodzenia.",
    "https://assets2.ello.co/uploads/asset/attachment/8596053/ello-optimized-b16c9890.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-12-06-fluxus-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["moodboard","fluxus","george maciunas","yoko ono","nam june paik"],
    1544092200000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-12-13-o-smierci/",
    "O śmierci",
    "Dziś już pamiętam tylko Twoje dłonie. Trzymałam się prawej kurczowo, kiedy wydawałaś z siebie ostatni wydech. To dziwne, że w obliczu śmierci człowiek jest jak pisklę - małe, skurczone, łyse i ślepe. Śmierć przychodzi szybko, nie dręczą jej dylematy, kogo i za ile zabierze do siebie. Można powiedzieć, że śmierć jest dyrektorem, który już miesiąc przed zwolnieniem Ciebie z pracy wie, że będziesz zwolniony.",
    "https://assets1.ello.co/uploads/asset/attachment/8653728/ello-optimized-bf62aaeb.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-12-13-o-smierci.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["o śmierci","anioł","makijaż","tekst autorski","sztuka"],
    1544723640000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-12-28-stop-2018-start-2019/",
    "STOP 2018 START 2019",
    "STOP Zatrzymaj się na chwilę. Stop. Usiądź wygodnie. Stop. Oddychaj.",
    "https://assets2.ello.co/uploads/asset/attachment/8755970/ello-optimized-8b15b88b.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-12-28-stop-2018-start-2019.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["stop","2018","start","2019","nowy rok"],
    1546007040000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-01-03-moje-wybory-grudzien-2018/",
    "Moje wybory: grudzień 2018",
    "Grudzień jest miesiącem pełnym skrajności. W panicznie rozpędzonym poszukiwaniu prezentów zaczynamy robić roczny rachunek sumienia. Zwalniamy trochę planując cele na przyszłe 365 dni po to, aby za moment znów przyspieszyć na zakręcie zbliżającej się zabawy sylwestrowej. Sukienka musi być świecąca, a rzęsy długie i gęste. Nasza skóra narażona na stresy zimowego czasu czerwieni się i traci blask.",
    "https://assets2.ello.co/uploads/asset/attachment/8793642/ello-optimized-0534c464.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-01-03-moje-wybory-grudzien-2018.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["moje wybory","my choices","kalendarz","radzka","kosmetyk","pielęgnacja","kolorówka","nars","algenist"],
    1546523880000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-01-10-barok-moodboard/",
    "Barok [moodboard]",
    "Termin Barok – prawdopodobnie z portugalskiego – barroco: perła o nieregularnym kształcie, z włoskiego -dziwność, nietypowość. Czas Koniec XVI wieku, cały wiek XVII, do początków wieku XVIII. Miejsce Włochy, Francja, Hiszpania, Niderlandy, Niemcy, Anglia. Dziedziny filozofia, literatura, muzyka, teatr, architektura, rzeźba, malarstwo Schyłek epoki renesansu przynosi ze sobą zmiany światopoglądowe. Niegdyś stawiany w centrum człowiek kurczy się, staje twarzą w twarz ze swoją ulotnością.",
    "https://assets1.ello.co/uploads/asset/attachment/8834722/ello-optimized-4d242dc1.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-01-10-barok-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["moodboard","barok","rembrandt","caravaggio","vermeer","Velázquez","bernini"],
    1547134200000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/",
    "Make-up inspirowany obrazem. 'Victory Boogie-Woogie' by Piet Mondrian",
    "Na pewno gdzieś Twoim umyśle zakodowały się geometryczne układy w kolorze niebieskim, czerwonym i żółtym. Kiedy postarasz się wyostrzyć obraz wokół kolorowych prostokątów narysują się czarne linie, zgrabnie porządkujące poszczególne elementy. Kiedy głos w oddali zawoła: ‘Mondrian!’ wszystko stanie się jasne. Przypomnisz sobie postać malarza, twórcy neoplastycyzmu.",
    "https://ello-direct-uploads.s3.amazonaws.com/uploads/e5388435-56f9-4976-bd43-7ad8f2203e6a/ello-c59c8523-d42c-417a-9070-2c911926a29f.png",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet-mondrian.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["piet mondrian","mondrian","boogie-woogie","the beginning","paris","netherlands","new york","victory boogie-woogie","1944"],
    1548361380000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-01-30-moje-wybory-styczen-2019/",
    "Moje wybory: styczeń 2019",
    "Nowy rok = nowa ja. Ile razy już to słyszałaś? Dwadzieścia dwa, dwadzieścia siedem, czterdzieści trzy ? Nieważne ile razy powtarzałaś sobie ‘czas na zmiany’ - nie martw się, one i tak przyjdą. Zmiany lubią nas zaskakiwać.",
    "https://assets0.ello.co/uploads/asset/attachment/8967433/ello-optimized-f4e4009a.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-01-30-moje-wybory-styczen-2019.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu","Sztuka Ubioru"],
    ["moje wybory","my choices","perfumy","lektura","kosmetyk","akcesoria","torebka"],
    1548870120000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-02-07-prymitywizm-sztuka-naiwna-moodboard/",
    "Prymitywizm (sztuka naiwna) [moodboard]",
    "Prymitywiści to artyści niewykształceni, nieprofesjonalni, uprawiający sztukę naiwną. Ich dzieła przypominają często malunki dzieci, są niezgrabne, zdeformowane, tworzone w prostej technice. Tematyka ‘obrazów prymitywnych’ dotyka życia codziennego, lecz odwołuje się również do przestrzeni magicznej i symbolicznej. W erze impresjonizmu nastąpił pewien przełom w sposobie postrzegania sztuki. Sztuka ludów prymitywnych, dzieci, osób niewykształconych, malarzy nieprofesjonalnych została uznana za wartościową.",
    "https://assets2.ello.co/uploads/asset/attachment/9012795/ello-optimized-b5c3f82a.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-02-07-prymitywizm-sztuka-naiwna-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["moodboard","prymitywizm","sztuka naiwna","rousseau","gauguin","nikifor","dwurnik"],
    1549556220000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-03-07-romantyzm-moodboard/",
    "Romantyzm [moodboard]",
    "Czas Romantyzmu ma dwa oblicza. Delikatna, kobieca zmysłowość ustępuje mrocznej sferze umysłu pogrążonemu w myśli przeciwnej do oświeceniowego racjonalizmu. Odwieczny konflikt tego, co widzialne, poznawalne zmysłowo a duchowe - dające poznać się jedynie za pomocą intuicji. Romantycy zwracają szczególną uwagę na wnętrze człowieka. Patrzą zamyśleni w dal, dostrzegając jednostkę odrębną, uczuciową i emocjonalną.",
    "https://assets0.ello.co/uploads/asset/attachment/9160579/ello-optimized-701823fc.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-03-07-romantyzm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["moodboard","romantyzm","romanticism","sztuka"],
    1551955860000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-03-17-o-kolorach-niebieski-cz-dot-1/",
    "O kolorach: Niebieski, cz.1",
    "‘Oprócz błękitnego nieba, nic mi dzisiaj nie potrzeba’ śpiewał Marek Jackowski z zespołem Maanam. Niebo, woda, harmonia, spokój to pierwsze ze skojarzeń z kolorem niebieskim. Faraon zabierał błękit ze sobą do sarkofagu, gdyż wierzył w jego magiczną moc przynoszącą szczęście. W hinduizmie bóg Kryszna ma niebieską skórę, a w religii chrześcijańskiej błękitna szata Maryi symbolizuje jej nieskalaną naturę. Niebieski jest kolorem wolności, poczucia jedności z otaczającą nas naturą.",
    "https://assets0.ello.co/uploads/asset/attachment/9219474/ello-optimized-1f8ab21e.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-03-17-o-kolorach-niebieski-cz-dot-1.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["kolor","o kolorach","blue","błękit","niebieski","picasso","jeffree star","chromoterapia"],
    1552829820000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-03-20-o-kolorach-niebieski-cz-dot-2/",
    "O kolorach: Niebieski, cz.2",
    "IKB Yves Klein był ekscentrycznym artystą XX wieku. Był twórcą obiektów, obrazów, fotografii, instalacji, scenografii teatralnych. Tworzył, a w zasadzie performował obrazy bez użycia pędzla – do nakładanie farby na płótno służyły mu ciała nagich modelek. Niebieskie plamy układały się w abstrakcyjne kompozycje mniej lub bardziej kojarzone z ludzkim ciałem. Prekursor tzw.",
    "https://assets0.ello.co/uploads/asset/attachment/9236231/ello-optimized-37278dff.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-03-20-o-kolorach-niebieski-cz-dot-2.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["kolor","o kolorach","niebieski","ikb","yves klein","blue","blue monday"],
    1553086620000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-03-29-moje-wybory-luty-marzec-2019/",
    "Moje wybory: luty, marzec 2019",
    "Odnoszę wrażenie, że ktoś po kryjomu przesuwa wskazówki zegara. Wyobrażam sobie białego królika w kapeluszu, który wieczorem, kiedy zasypiam, przyspiesza czas. Królik ten lubi także z początku miesiąca zrobić jego koniec. Zastanawiam się, czy przyspieszanie czasu jest jego pracą, czy może z natury bywa królikiem złośliwym. Raz prawie przyłapałam go na stosowaniu mojej nawilżającej ampułki z propolisem.",
    "https://d324imu86q1bqn.cloudfront.net/uploads/asset/attachment/9272331/ello-optimized-b85d2f76.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-03-29-moje-wybory-luty-marzec-2019.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu","Sztuka Ubioru"],
    ["moje wybory","wybory","luty","marzec","kosmetyk","pielęgnacja","kolorówka","lektura","akcesoria","kolczyki"],
    1553878260000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-04-04-symbolizm-moodboard/",
    "Symbolizm [moodboard]",
    "Symboliści pragnęli dotrzeć w rejony niedostępne poznaniu racjonalnemu. Wierzyli w moc intuicji i podświadomość. Ich zdaniem naturalistyczne przedstawienia nie są w stanie oddać istoty rzeczy, która leży po tajemniczej stronie niematerialnego poznania. Świat poznawany zmysłami jest ułudą. Obraz prawdziwego świata najlepiej oddaje symbol.",
    "https://assets0.ello.co/uploads/asset/attachment/9312654/ello-optimized-b45d3c5a.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-04-04-symbolizm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["moodboard","symbolizm","symbolisme","bocklin","moreau","khnopff","mehoffer","malczewski","wyspiański"],
    1554377160000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-04-23-wystawa-syntetyczny-folklor/",
    "Wystawa: Syntetyczny folklor",
    "Sztuka Janka Simona jest inteligentnym asamblażem etnicznej przeszłości zestawionej z elementami futurystycznej globalizacji. Na wystawie ‘Syntetyczny Folklor’ w Centrum Sztuki Współczesnej Zamek Ujazdowski sztuczna inteligencja pisze komentarz do wciąż żywej sytuacji społecznej i przemysłowej. Artysta bada również temat geografii kulturowej, zadaje pytanie o uniwersalność treści w zależności od szerokości geograficznych, w których zostały umiejscowione. Wiele jest obecnie artystów-badaczy, którzy sztuki nie traktują jako pojedyncza forma ekspresji, lecz szereg zależnych od siebie równań i niewiadomych. Zadają pytania, badają, krążą wokół tematu eksplorując go z każdej możliwej strony.",
    "https://assets1.ello.co/uploads/asset/attachment/9414293/ello-optimized-e37cc570.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-04-23-wystawa-syntetyczny-folklor.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["syntetyczny folklor","sztuczna inteligencja","cyfrowy materializm","postmodernizm","geografia kulturowa","nowy uniwersalizm","nollywood"],
    1556032080000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/",
    "Make-up inspirowany obrazem. 'M64' by Wojciech Fangor. Remake",
    "Kolektywne sny Miasta skrywają tajemnice. W podziemiach jednej z metropolii grupa ludzi śni kolektywne sny. Sennych opowieści wysłuchuje starsza kobieta na wózku. Ogród z morzem różowych piwonii, podróż w nieznane błękitnym wagonem pociągu nr 5, spacer nad brzegiem niezmąconej myślą rzeki. Każdy ze snów to niezaspokojone pragnienia, rządze, doświadczenie, obrazy malowane przez podświadomość.",
    "https://assets2.ello.co/uploads/asset/attachment/9511391/ello-optimized-d79c26e4.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["makeup","makijaż","fangor","m64","opart","oa","the oa","kolektywne sny"],
    1557496500000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka/",
    "Make-up inspirowany obrazem 'Zielony turban' by Tamara Łempicka",
    "Dzieła Tamary kojarzy chyba większość z nas. Kobiece postaci uwięzione w przestrzennej geometrii form zdają się unosić w delikatnym podnieceniu. Nawet jeśli wzrok postaci na obrazie skierowany jest w stronę widza pozostaje nieobecny, dryfujący w kierunku sennych marzeń. Kubistyczne kształty i nasycone kolory płócien Tamary o zawsze spotykały się ze sporą aprobatą publiczności. Tamara Łempicka jest najbardziej znaną malarką polskiego pochodzenia, królową stylu Art déco.",
    "https://assets1.ello.co/uploads/asset/attachment/9562073/ello-optimized-aa019890.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["tamara łempicka","turban","obraz","makeup","makijaż","sztuka"],
    1558192140000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/",
    "Make-up inspirowany obrazem 'Gwiaździsta Noc' by Vincent van Gogh",
    "Mój drogi kolego Gauguin, Chciałbym Pana zawiadomić, że właśnie wynająłem w Arles czteropokojowy dom. I sądzę, że gdybym mógł znaleźć drugiego malarza skłonnego pracować na Południu, który tak jak a byłby dostatecznie pochłonięty pracą, i skłonny żyć jak mnich, który odwiedza burdel raz na dwa tygodnie... to mogłaby to być dobra robota... Mój brat przysyłałby miesięcznie 250 franków do podziału między nas dwóch... A Pan posyłałby memu bratu jeden obraz na miesiąc.",
    "https://assets2.ello.co/uploads/asset/attachment/9791708/ello-optimized-172f246b.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent-van-gogh.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["vincent","van gogh","arles","ucho","żółty dom","gauguin","saint-remy","the starry night"],
    1561715100000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe/",
    "Make-up inspirowany obrazem 'Untitled' from Marilyn Monroe by Andy Warhol",
    "Urodziny, choroba, marzenie o Hollywood Andrew Warhola przyszedł na świat w Pittsburghu, w Soho, w dzielnicy biedoty. Jego rodzice wyemigrowali do Ameryki ‘za chlebem’. Ojciec był górnikiem, a matka zarabiała na życie rękodziełem. Młody artysta lubił spędzać czas i rysować razem z mamą. Miał dwóch starszych od siebie braci – Paula i Johna.",
    "https://assets2.ello.co/uploads/asset/attachment/9861635/ello-optimized-0d560aba.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe-by-andy-warhol.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["andy warhol","warhol","popart","hollywood","new york","kariera"],
    1562777940000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van/",
    "8 zasad osiągania sukcesu, których nie znał \nVincent van Gogh",
    "Vincent van Gogh - najbardziej rozpoznawalny malarz na świecie. Za życia sprzedał tylko jeden obraz i to na dodatek swojemu bratu (za 400 franków). Całe życie był również od niego finansowo uzależniony. Co takiego robił źle, że nie udało mu się osiągnąć wolności finansowej i sukcesu? Wybierz mądrze swój pierwszy zawód i wykorzystaj swoje doświadczenie Vincent swoją pierwszą pracę podjął w rodzinnej firmie Goupila zajmującej się handlem dziełami sztuki.",
    "https://assets2.ello.co/uploads/asset/attachment/9946864/ello-optimized-e2e1cbb6.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van-gogh.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki","Sztuka Makijażu"],
    ["vincent","van gogh","sukces","motywacja","cel","dyscyplina"],
    1564146660000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-08-06-jablko/",
    "Jabłko",
    "To niesamowite, jak w mgnieniu oka stajemy się dla siebie obcy. Wczoraj zdeklarowana miłość dziś juz nic nie znaczy, jest sfermentowanym jabłkiem. A przecież mogła być takim hamburgerem z makdonalda - świeża przez lata. Ale tak być nie mogło, tak by się nie stało, bo w przeciwieństwie do sztucznego smaku nasza miłość smakowała wykwintnie. Czasem ostro, czasem słodko, nigdy nudno.",
    "https://assets1.ello.co/uploads/asset/attachment/10014909/ello-optimized-04e03c57.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-08-06-jablko.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["jabłko","miłość","uczucia","sztuka miłości"],
    1565106420000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-09-10-frida-kahlo/",
    "Cierpienie Fridy Kahlo",
    "Siedem tygodni po osiągnięciu oświecenia Budda wygłosił nauki o czterech szlachetnych prawdach. W pierwszej z nich opisał trzy rodzaje cierpienia, które warunkują ludzkie istnienie. Każdy z nas doświadczył bólu z powodu choroby, śmierci (pierwszy rodzaj), cierpienia zmiany, którego źródłem jest przywiązanie (drugi rodzaj), oraz cierpienia wynikającego z niedostrzegania uwarunkowania wszystkich rzeczy (rodzaj trzeci). Ten ostatni rodzaj jest cierpieniem w najsubtelniejszej formie. Nasze umysły przykryte są swojego rodzaju kotarami, które nie pozwalają na czyste doświadczanie istnienia.",
    "https://assets0.ello.co/uploads/asset/attachment/10184431/ello-optimized-7f5086f9.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-09-10-frida-kahlo.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["frida kahlo","frida","kahlo","autobus","diego","diego rivera","cierpienie","budda"],
    1568136720000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-09-22-feniks/",
    "Feniks",
    "Kiedy odchodzę, odchodzę na zawsze. Kasuję wszystkie wspólne zdjęcia, wyrzucam kubki po litrach wspólnych porannych kaw. Nic już nie jest wspólne, wszystko jest samotne. Przedmioty noszą w sobie historię, sentyment staram się wyrzucić do kosza. Ze wszystkich sił zgniatam, uderzam, niszczę szczątki swojego serca.",
    "https://assets1.ello.co/uploads/asset/attachment/10254003/ello-optimized-ed9f11ec.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-09-22-feniks.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["feniks","sztuka miłości","sztuka","poezja","kiedy odchodzę"],
    1569145680000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali/",
    "Make-up inspirowany twórczością artysty: Salvador Dali",
    "Zbawca Salvador twierdził, że rodzice dali mu tak na imię, ponieważ miał okazać się ‘zbawcą zagrożonego śmiercią malarstwa’. W rzeczywistości imię to odziedziczył po bracie zmarłym rok wcześniej na zapalenie opon mózgowych. Przyszedł na świat w 1904 roku w Figueras na katalońskim Złotym Wybrzeżu (Costa Dorada). Salvador od małego był ulubieńcem wszystkich domowników (podobno wszystkie dzieci na placu zabaw ustawiały się w kolejce, żeby powąchać jego pachnące szamponem i perfumami włosy). Wyręczanie chłopca w najprostszych czynnościach nie było jednak najlepszą strategią wychowawczą.",
    "https://assets1.ello.co/uploads/asset/attachment/10455144/ello-optimized-413991c9.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["salvador","dali","surrealism","surrealizm","sztuka"],
    1572797820000,
  )
);
paramorph.addPost(
  new Post(
    "/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt/",
    "Make-up inspirowany twórczością artysty: Gustav Klimt",
    "Nie jestem zainteresowany sobą jako materiałem na obraz (...) Jeżeli ktokolwiek chce mnie zrozumieć - jako artystę, bo to tylko jest interesujące - powinien uważnie patrzeć na moje obrazy i z nich spróbować dowiedzieć się, kim jestem i czego pragnę. Rodzina Gustav urodził się w lipcu w 1862 roku w Baumgarten pod Wiedniem. Jego ojciec Ernst Klimt był złotnikiem, grawerem i w wieku 8 lat przywędrował z rodzicami do stolicy Austrii. Tutaj ożenił się z Anną Finster, która jako młoda dziewczyna marzyła o karierze śpiewaczki operowej.",
    "https://assets2.ello.co/uploads/asset/attachment/10561669/ello-optimized-a36d6dd4.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["gustav klimt","klimt","pocałunek","makeup","makijaż"],
    1574628480000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-04-07-moje-wybory-marzec/",
    "Moje wybory: marzec",
    "Mam wrażenie, że powiedzenie 'w marcu jak w garncu' nie odnosi się tylko do pogody. Jest to bowiem miesiąc pełen skrajnych nastroi. Z euforii pierwszych promieni lata wpadamy niespodziewanie w jeszcze zimową melancholię. Marzec sprzyja kontemplacji, rozmyślaniom o nadchodzącym sezonie i wspominaniu sezonu minionego. W marcu rodzą się koncepcje nowych trendów 'na wiosnę'.",
    "https://assets1.ello.co/uploads/asset/attachment/7455647/ello-optimized-bd47795e.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-04-07-moje-wybory-marzec.markdown",
    true,
    true,
    5,
    ["Sztuka Ubioru","Sztuka Makijażu"],
    ["wybory","marzec","vogue","clochee","moov","stradivarius","wiosna"],
    1523093460000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-04-05-dadaizm-moodboard/",
    "DADAizm [moodboard]",
    "BY NAPISAĆ WIERSZ DADAISTYCZNY Weź gazetę. Weź jakieś nożyczki. Wybierz z gazety artykuł odpowiadający długości Twojego wiersza. Wytnij artykuł. Następnie uważnie wytnij każde słowo artykułu i wsyp wszystkie słowa do worka.",
    "https://assets1.ello.co/uploads/asset/attachment/7444781/ello-optimized-e4ecfaf8.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-04-05-dadaizm-moodboard.markdown",
    true,
    true,
    5,
    ["Sztuka dla Sztuki"],
    ["dada","dadaizm","moodboard","sztuka","artysta","kreacja","tristan tzara"],
    1522937340000,
  )
);
paramorph.addPost(
  new Post(
    "/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy/",
    "Make-up inspirowany obrazem. 'Biały środek (żółty, różowy, lawendowy)' by Mark_Rothko",
    "Był wczesny poranek pewnej słonecznej wiosny. Śniłam o skalistych klifach, na których wierzchołkach rozkładam kocyk, siadam i podziwiam widok. Jedynym, co rozpościerało się wtedy przede mną był ocean, niezmierzony turkus królowej wód. Podobno woda w śnie odzwierciedla stan ducha. Kiedy jest ciemna i zmącona to znaczy, że wewnątrz jesteśmy niespokojni, że coś nas trapi, trzyma i nie chce puścić.",
    "https://assets1.ello.co/uploads/asset/attachment/7396164/ello-optimized-e4402a1b.jpg",
    "Posts",
    "ParrotLayout",
    "./_posts/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy-lawendowy-by-mark-rothko.markdown",
    true,
    true,
    5,
    ["Sztuka Makijażu"],
    ["mark rothko","makeup","makijaż","artysta","dzieło","kreacja"],
    1522056480000,
  )
);

// CATEGORIES //
paramorph.addPost(
  new Category(
    "/sztuka-dla-sztuki/:pageNumber(-\\d+-)?/",
    "Sztuka dla Sztuki",
    "Sztuka dla Sztuki: Uniwersalność Sztuki, Fuerteventura impressions, Neoplastycyzm [moodboard], KOŁO [moodboard], POP-ART [moodboard], Minimalizm [moodboard], Kolaż_okładek., Kubizm [moodboard], Surrealizm [moodboard], Action_Painting [moodboard], Wystawa: Pablo_Picasso – wizerunek wielokrotny, Impresjonizm [moodboard], Op-art [moodboard], Wystawa: Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce Łacińskiej w latach 50. – 70., O kolorach: Fiolet, Kolagen, Ekspresjonizm_abstrakcyjny [moodboard], Wystawa: David Lynch.",
    null,
    "Categories",
    "ParrotLayout",
    "./_categories/sztuka-dla-sztuki.markdown",
    true,
    true,
    5,
    [],
    ["sztuka","współczesna","abstrakcja","inspiracje"],
    1500149520000,
  )
);
paramorph.addPost(
  new Category(
    "/sztuka-makijazu/:pageNumber(-\\d+-)?/",
    "Sztuka Makijażu",
    "Sztuka Makijażu: Make-up inspirowany obrazem. M64_by_Wojciech Fangor, Make-up inspirowany obrazem. M10_by_Wojciech Fangor, Make-up inspirowany obrazem. 'Flying_Eyes'_by_Yayoi Kusama, Make-up inspirowany obrazem. 'Czarny_kwadrat_na_białym_tle' by Kazimierz Malewicz, Make-up inspirowany obrazem.",
    null,
    "Categories",
    "ParrotLayout",
    "./_categories/sztuka-makijazu.markdown",
    true,
    true,
    5,
    [],
    ["sztuka","makijaż","inspiracje"],
    1500149580000,
  )
);
paramorph.addPost(
  new Category(
    "/sztuka-ubioru/:pageNumber(-\\d+-)?/",
    "Sztuka Ubioru",
    "Sztuka Ubioru: Wenus vs Chanel, czyli_Nowa Dziewczyna z_Perłą, Podlewaj_swoje_kwiaty., Cała_Ta_J..., Stylizacje za grosze, czyli pokochaj lumpeksy!, Moje wybory: grudzień, Moje wybory: styczeń, O narkotykach XXI wieku, Moje wybory: luty, Stylizacje w trendach spring/summer_2018, Moje wybory: kwiecień, Moje wybory: maj, RGB. Trzy stylizacje z mojej szafy, Moje wybory: czerwiec/lipiec, cz.",
    null,
    "Categories",
    "ParrotLayout",
    "./_categories/sztuka-ubioru.markdown",
    true,
    true,
    5,
    [],
    ["sztuka","ubiór","moda","projektanci","domy mody","inspiracje"],
    1500149640000,
  )
);

// PAGES IN CATEGORIES //
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-07-15-uniwersalnosc-sztuki/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-09-18-fuerteventura-impressions/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2017-09-25-podlewaj-swoje-kwiaty/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-09-28-neoplastycyzm-moodboard/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2017-10-03-cala-ta-j-dot-dot-dot/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-10-05-kolo-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-10-12-pop-art-moodboard/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-10-19-minimalism-moodboard/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-10-25-kolaz-okladek/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-10-26-kubizm-moodboard/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-11-02-surrealizm-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-11-09-action-painting-moodboard/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-11-16-impresjonizm-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-12-07-op-art-moodboard/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2017-12-21-moje-wybory-grudzien/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2017-12-21-moje-wybory-grudzien/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2017-12-31-kolagen/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-01-14-o-kolorach-czerwien-cz-dot-1/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-01-24-moje-wybory-styczen/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-01-24-moje-wybory-styczen/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-01-31-wystawa-david-lynch-silence-and-dynamism/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-02-08-rokoko-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-02-18-o-narkotykach-xxi-wieku/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-02-21-o-kolorach-biel-cz-dot-1/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-02-26-moje-wybory-luty/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-02-26-moje-wybory-luty/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-03-08-socrealizm-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-04-29-stylizacje-w-trendach-ss-2018/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-05-10-puentylizm-pointylizm-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-05-14-oswoic-lek/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-05-20-o-kolorach-roz/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-05-20-o-kolorach-roz/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-05-29-moje-wybory-maj/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-05-29-moje-wybory-maj/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-06-05-jestem-wdzieczna-ci-zycie/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-06-05-jestem-wdzieczna-ci-zycie/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-06-07-hiperrealizm-moodboard/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-07-05-abstrakcja-geometryczna-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-08-09-secesja-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-09-06-futuryzm-moodboard/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-09-21-o-kolorach-czern/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-09-21-o-kolorach-czern/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-09-27-moje-wybory-wrzesien-2018/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-09-27-moje-wybory-wrzesien-2018/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-10-02-wystawa-bestia-bog-i-linia/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-10-04-manieryzm-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-10-28-smierc-doroslego/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-10-31-kamp-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-11-22-wystawa-moda-polska/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-11-28-moje-wybory-listopad-2018/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-11-28-moje-wybory-listopad-2018/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-12-06-fluxus-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-12-13-o-smierci/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-12-28-stop-2018-start-2019/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-12-28-stop-2018-start-2019/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-01-03-moje-wybory-grudzien-2018/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2019-01-10-barok-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-01-30-moje-wybory-styczen-2019/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2019-01-30-moje-wybory-styczen-2019/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2019-02-07-prymitywizm-sztuka-naiwna-moodboard/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2019-03-07-romantyzm-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-03-17-o-kolorach-niebieski-cz-dot-1/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-03-20-o-kolorach-niebieski-cz-dot-2/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2019-04-04-symbolizm-moodboard/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2019-04-23-wystawa-syntetyczny-folklor/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2019-08-06-jablko/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-09-10-frida-kahlo/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2019-09-22-feniks/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt/"]);
paramorph.categories["Sztuka Ubioru"].posts.push(paramorph.posts["/2018-04-07-moje-wybory-marzec/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-04-07-moje-wybory-marzec/"]);
paramorph.categories["Sztuka dla Sztuki"].posts.push(paramorph.posts["/2018-04-05-dadaizm-moodboard/"]);
paramorph.categories["Sztuka Makijażu"].posts.push(paramorph.posts["/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy/"]);

// TAGS //
paramorph.addPost(
  new Tag(
    "/tags/sztuka/:pageNumber(-\\d+-)?/",
    "sztuka",
    "#sztuka: Sztuka dla Sztuki",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/współczesna/:pageNumber(-\\d+-)?/",
    "współczesna",
    "#współczesna: Sztuka dla Sztuki",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/abstrakcja/:pageNumber(-\\d+-)?/",
    "abstrakcja",
    "#abstrakcja: Sztuka dla Sztuki",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/inspiracje/:pageNumber(-\\d+-)?/",
    "inspiracje",
    "#inspiracje: Sztuka dla Sztuki",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/makijaż/:pageNumber(-\\d+-)?/",
    "makijaż",
    "#makijaż: Sztuka Makijażu",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/ubiór/:pageNumber(-\\d+-)?/",
    "ubiór",
    "#ubiór: Sztuka Ubioru",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/moda/:pageNumber(-\\d+-)?/",
    "moda",
    "#moda: Sztuka Ubioru",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/projektanci/:pageNumber(-\\d+-)?/",
    "projektanci",
    "#projektanci: Sztuka Ubioru",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/domy-mody/:pageNumber(-\\d+-)?/",
    "domy mody",
    "#domy mody: Sztuka Ubioru",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/index/:pageNumber(-\\d+-)?/",
    "index",
    "#index: Strona Główna",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/uniwersalna/:pageNumber(-\\d+-)?/",
    "uniwersalna",
    "#uniwersalna: Strona Główna",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kreacja/:pageNumber(-\\d+-)?/",
    "kreacja",
    "#kreacja: Strona Główna",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/gotowanie/:pageNumber(-\\d+-)?/",
    "gotowanie",
    "#gotowanie: Strona Główna",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/moodboard/:pageNumber(-\\d+-)?/",
    "moodboard",
    "#moodboard: Strona Główna",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/artysta/:pageNumber(-\\d+-)?/",
    "artysta",
    "#artysta: Strona Główna",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/art/:pageNumber(-\\d+-)?/",
    "art",
    "#art: Strona Główna",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/sitemap/:pageNumber(-\\d+-)?/",
    "sitemap",
    "#sitemap: Mapa Witryny",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/dla-bota/:pageNumber(-\\d+-)?/",
    "dla bota",
    "#dla bota: Mapa Witryny",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/olela/:pageNumber(-\\d+-)?/",
    "olela",
    "#olela: Sztuka Uniwersalna",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/blog/:pageNumber(-\\d+-)?/",
    "blog",
    "#blog: Sztuka Uniwersalna",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/artist/:pageNumber(-\\d+-)?/",
    "artist",
    "#artist: Uniwersalność Sztuki",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/dzieło/:pageNumber(-\\d+-)?/",
    "dzieło",
    "#dzieło: Uniwersalność Sztuki",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/chanel/:pageNumber(-\\d+-)?/",
    "chanel",
    "#chanel: Wenus vs Chanel, czyli_Nowa Dziewczyna z_Perłą",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/perły/:pageNumber(-\\d+-)?/",
    "perły",
    "#perły: Wenus vs Chanel, czyli_Nowa Dziewczyna z_Perłą",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/wenus/:pageNumber(-\\d+-)?/",
    "wenus",
    "#wenus: Wenus vs Chanel, czyli_Nowa Dziewczyna z_Perłą",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fangor/:pageNumber(-\\d+-)?/",
    "fangor",
    "#fangor: Make-up inspirowany obrazem. M64_by_Wojciech Fangor",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/makeup/:pageNumber(-\\d+-)?/",
    "makeup",
    "#makeup: Make-up inspirowany obrazem. M64_by_Wojciech Fangor",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/obraz/:pageNumber(-\\d+-)?/",
    "obraz",
    "#obraz: Make-up inspirowany obrazem. M64_by_Wojciech Fangor",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/podróż/:pageNumber(-\\d+-)?/",
    "podróż",
    "#podróż: Fuerteventura impressions",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/wyspa/:pageNumber(-\\d+-)?/",
    "wyspa",
    "#wyspa: Fuerteventura impressions",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fuerteventura/:pageNumber(-\\d+-)?/",
    "fuerteventura",
    "#fuerteventura: Fuerteventura impressions",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/szkic/:pageNumber(-\\d+-)?/",
    "szkic",
    "#szkic: Fuerteventura impressions",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/stylizacja/:pageNumber(-\\d+-)?/",
    "stylizacja",
    "#stylizacja: Podlewaj_swoje_kwiaty.",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kwiat/:pageNumber(-\\d+-)?/",
    "kwiat",
    "#kwiat: Podlewaj_swoje_kwiaty.",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/neoplasticism/:pageNumber(-\\d+-)?/",
    "neoplasticism",
    "#neoplasticism: Neoplastycyzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kierunek/:pageNumber(-\\d+-)?/",
    "kierunek",
    "#kierunek: Neoplastycyzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/jesień/:pageNumber(-\\d+-)?/",
    "jesień",
    "#jesień: Cała_Ta_J...",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/circle/:pageNumber(-\\d+-)?/",
    "circle",
    "#circle: KOŁO [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/koło/:pageNumber(-\\d+-)?/",
    "koło",
    "#koło: KOŁO [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/symbol/:pageNumber(-\\d+-)?/",
    "symbol",
    "#symbol: KOŁO [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kusama/:pageNumber(-\\d+-)?/",
    "kusama",
    "#kusama: Make-up inspirowany obrazem. 'Flying_Eyes'_by_Yayoi Kusama",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/yayoi/:pageNumber(-\\d+-)?/",
    "yayoi",
    "#yayoi: Make-up inspirowany obrazem. 'Flying_Eyes'_by_Yayoi Kusama",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/popart/:pageNumber(-\\d+-)?/",
    "popart",
    "#popart: POP-ART [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/pop/:pageNumber(-\\d+-)?/",
    "pop",
    "#pop: POP-ART [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/taniaodzież/:pageNumber(-\\d+-)?/",
    "taniaodzież",
    "#taniaodzież: Stylizacje za grosze, czyli pokochaj lumpeksy!",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/lumpeks/:pageNumber(-\\d+-)?/",
    "lumpeks",
    "#lumpeks: Stylizacje za grosze, czyli pokochaj lumpeksy!",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/tania/:pageNumber(-\\d+-)?/",
    "tania",
    "#tania: Stylizacje za grosze, czyli pokochaj lumpeksy!",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fashion/:pageNumber(-\\d+-)?/",
    "fashion",
    "#fashion: Stylizacje za grosze, czyli pokochaj lumpeksy!",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/minimalizm/:pageNumber(-\\d+-)?/",
    "minimalizm",
    "#minimalizm: Minimalizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/minimalism/:pageNumber(-\\d+-)?/",
    "minimalism",
    "#minimalism: Minimalizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/minimal/:pageNumber(-\\d+-)?/",
    "minimal",
    "#minimal: Minimalizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kolaż/:pageNumber(-\\d+-)?/",
    "kolaż",
    "#kolaż: Kolaż_okładek.",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kubizm/:pageNumber(-\\d+-)?/",
    "kubizm",
    "#kubizm: Kubizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/cubism/:pageNumber(-\\d+-)?/",
    "cubism",
    "#cubism: Kubizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/surrealizm/:pageNumber(-\\d+-)?/",
    "surrealizm",
    "#surrealizm: Surrealizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/surrealism/:pageNumber(-\\d+-)?/",
    "surrealism",
    "#surrealism: Surrealizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/nadrealizm/:pageNumber(-\\d+-)?/",
    "nadrealizm",
    "#nadrealizm: Surrealizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/malewicz/:pageNumber(-\\d+-)?/",
    "malewicz",
    "#malewicz: Make-up inspirowany obrazem. 'Czarny_kwadrat_na_białym_tle' by Kazimierz Malewicz",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/suprematyzm/:pageNumber(-\\d+-)?/",
    "suprematyzm",
    "#suprematyzm: Make-up inspirowany obrazem. 'Czarny_kwadrat_na_białym_tle' by Kazimierz Malewicz",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kwadrat/:pageNumber(-\\d+-)?/",
    "kwadrat",
    "#kwadrat: Make-up inspirowany obrazem. 'Czarny_kwadrat_na_białym_tle' by Kazimierz Malewicz",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/action/:pageNumber(-\\d+-)?/",
    "action",
    "#action: Action_Painting [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/painting/:pageNumber(-\\d+-)?/",
    "painting",
    "#painting: Action_Painting [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/pollock/:pageNumber(-\\d+-)?/",
    "pollock",
    "#pollock: Action_Painting [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/wystawa/:pageNumber(-\\d+-)?/",
    "wystawa",
    "#wystawa: Wystawa: Pablo_Picasso – wizerunek wielokrotny",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/exhibition/:pageNumber(-\\d+-)?/",
    "exhibition",
    "#exhibition: Wystawa: Pablo_Picasso – wizerunek wielokrotny",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/picasso/:pageNumber(-\\d+-)?/",
    "picasso",
    "#picasso: Wystawa: Pablo_Picasso – wizerunek wielokrotny",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/lublin/:pageNumber(-\\d+-)?/",
    "lublin",
    "#lublin: Wystawa: Pablo_Picasso – wizerunek wielokrotny",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/recenzja/:pageNumber(-\\d+-)?/",
    "recenzja",
    "#recenzja: Wystawa: Pablo_Picasso – wizerunek wielokrotny",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/grafika/:pageNumber(-\\d+-)?/",
    "grafika",
    "#grafika: Wystawa: Pablo_Picasso – wizerunek wielokrotny",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/impresjonizm/:pageNumber(-\\d+-)?/",
    "impresjonizm",
    "#impresjonizm: Impresjonizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/impressionism/:pageNumber(-\\d+-)?/",
    "impressionism",
    "#impressionism: Impresjonizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/monet/:pageNumber(-\\d+-)?/",
    "monet",
    "#monet: Impresjonizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/miro/:pageNumber(-\\d+-)?/",
    "Miro",
    "#Miro: Make-up inspirowany obrazem. 'Figure, Dog, Birds' by Joan_Miró",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/opart/:pageNumber(-\\d+-)?/",
    "opart",
    "#opart: Op-art [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/optical/:pageNumber(-\\d+-)?/",
    "optical",
    "#optical: Op-art [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kineticart/:pageNumber(-\\d+-)?/",
    "kineticart",
    "#kineticart: Wystawa: Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce Łacińskiej w latach 50. – 70.",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/muzeum/:pageNumber(-\\d+-)?/",
    "muzeum",
    "#muzeum: Wystawa: Inny Trans-Atlantyk. Sztuka kinetyczna i op-art w Europie Wschodniej i Ameryce Łacińskiej w latach 50. – 70.",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kolor/:pageNumber(-\\d+-)?/",
    "kolor",
    "#kolor: O kolorach: Fiolet",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fiolet/:pageNumber(-\\d+-)?/",
    "fiolet",
    "#fiolet: O kolorach: Fiolet",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/pantone/:pageNumber(-\\d+-)?/",
    "pantone",
    "#pantone: O kolorach: Fiolet",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/cmyk/:pageNumber(-\\d+-)?/",
    "cmyk",
    "#cmyk: O kolorach: Fiolet",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/rgb/:pageNumber(-\\d+-)?/",
    "rgb",
    "#rgb: O kolorach: Fiolet",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/wybory/:pageNumber(-\\d+-)?/",
    "wybory",
    "#wybory: Moje wybory: grudzień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/zima/:pageNumber(-\\d+-)?/",
    "zima",
    "#zima: Moje wybory: grudzień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/perfumy/:pageNumber(-\\d+-)?/",
    "perfumy",
    "#perfumy: Moje wybory: grudzień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/książka/:pageNumber(-\\d+-)?/",
    "książka",
    "#książka: Moje wybory: grudzień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kosmetyk/:pageNumber(-\\d+-)?/",
    "kosmetyk",
    "#kosmetyk: Moje wybory: grudzień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/torebka/:pageNumber(-\\d+-)?/",
    "torebka",
    "#torebka: Moje wybory: grudzień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kolagen/:pageNumber(-\\d+-)?/",
    "kolagen",
    "#kolagen: Kolagen",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kobieta/:pageNumber(-\\d+-)?/",
    "kobieta",
    "#kobieta: Kolagen",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/portret/:pageNumber(-\\d+-)?/",
    "portret",
    "#portret: Kolagen",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/ekspresjonizm/:pageNumber(-\\d+-)?/",
    "ekspresjonizm",
    "#ekspresjonizm: Ekspresjonizm_abstrakcyjny [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/abstrakcyjny/:pageNumber(-\\d+-)?/",
    "abstrakcyjny",
    "#abstrakcyjny: Ekspresjonizm_abstrakcyjny [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/ekspresja/:pageNumber(-\\d+-)?/",
    "ekspresja",
    "#ekspresja: Ekspresjonizm_abstrakcyjny [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/szkoła-nowojorska/:pageNumber(-\\d+-)?/",
    "szkoła nowojorska",
    "#szkoła nowojorska: Ekspresjonizm_abstrakcyjny [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/czerwień/:pageNumber(-\\d+-)?/",
    "czerwień",
    "#czerwień: O kolorach: Czerwień, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/czerwony/:pageNumber(-\\d+-)?/",
    "czerwony",
    "#czerwony: O kolorach: Czerwień, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/helen-frankenthaler/:pageNumber(-\\d+-)?/",
    "helen frankenthaler",
    "#helen frankenthaler: Make-up inspirowany obrazem. 'Tutti Frutti' by Helen_Frankenthaler",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/styczeń/:pageNumber(-\\d+-)?/",
    "styczeń",
    "#styczeń: Moje wybory: styczeń",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/akcesoria/:pageNumber(-\\d+-)?/",
    "akcesoria",
    "#akcesoria: Moje wybory: styczeń",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/david-lynch/:pageNumber(-\\d+-)?/",
    "david lynch",
    "#david lynch: Wystawa: David Lynch. Silence And Dynamism",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/lynch/:pageNumber(-\\d+-)?/",
    "lynch",
    "#lynch: Wystawa: David Lynch. Silence And Dynamism",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/toruń/:pageNumber(-\\d+-)?/",
    "toruń",
    "#toruń: Wystawa: David Lynch. Silence And Dynamism",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/csw/:pageNumber(-\\d+-)?/",
    "csw",
    "#csw: Wystawa: David Lynch. Silence And Dynamism",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/rokoko/:pageNumber(-\\d+-)?/",
    "rokoko",
    "#rokoko: Rokoko [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/rococo/:pageNumber(-\\d+-)?/",
    "rococo",
    "#rococo: Rokoko [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/nurt/:pageNumber(-\\d+-)?/",
    "nurt",
    "#nurt: Rokoko [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/pablo-picasso/:pageNumber(-\\d+-)?/",
    "pablo picasso",
    "#pablo picasso: Make-up inspirowany obrazem. 'Dove with Sun' by Pablo_Picasso",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/dove/:pageNumber(-\\d+-)?/",
    "dove",
    "#dove: Make-up inspirowany obrazem. 'Dove with Sun' by Pablo_Picasso",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/sale/:pageNumber(-\\d+-)?/",
    "sale",
    "#sale: O narkotykach XXI wieku",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/wyprzedaż/:pageNumber(-\\d+-)?/",
    "wyprzedaż",
    "#wyprzedaż: O narkotykach XXI wieku",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/zakupy/:pageNumber(-\\d+-)?/",
    "zakupy",
    "#zakupy: O narkotykach XXI wieku",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/shopping/:pageNumber(-\\d+-)?/",
    "shopping",
    "#shopping: O narkotykach XXI wieku",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/glitter/:pageNumber(-\\d+-)?/",
    "glitter",
    "#glitter: O narkotykach XXI wieku",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/biel/:pageNumber(-\\d+-)?/",
    "biel",
    "#biel: O kolorach: Biel, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/biały/:pageNumber(-\\d+-)?/",
    "biały",
    "#biały: O kolorach: Biel, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/luty/:pageNumber(-\\d+-)?/",
    "luty",
    "#luty: Moje wybory: luty",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/biżuteria/:pageNumber(-\\d+-)?/",
    "biżuteria",
    "#biżuteria: Moje wybory: luty",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/zachęta/:pageNumber(-\\d+-)?/",
    "zachęta",
    "#zachęta: Wystawa: Przyszłość będzie inna - wizje i praktyki modernizacji społecznych po roku 1918",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/warszawa/:pageNumber(-\\d+-)?/",
    "warszawa",
    "#warszawa: Wystawa: Przyszłość będzie inna - wizje i praktyki modernizacji społecznych po roku 1918",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/przyszłość/:pageNumber(-\\d+-)?/",
    "przyszłość",
    "#przyszłość: Wystawa: Przyszłość będzie inna - wizje i praktyki modernizacji społecznych po roku 1918",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/socrealizm/:pageNumber(-\\d+-)?/",
    "socrealizm",
    "#socrealizm: Socrealizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/barnett-newman/:pageNumber(-\\d+-)?/",
    "barnett newman",
    "#barnett newman: Make-up inspirowany obrazem. 'Onement VI' by Barnett_Newman",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/abstract-expressionism/:pageNumber(-\\d+-)?/",
    "abstract expressionism",
    "#abstract expressionism: Make-up inspirowany obrazem. 'Onement VI' by Barnett_Newman",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/zip/:pageNumber(-\\d+-)?/",
    "zip",
    "#zip: Make-up inspirowany obrazem. 'Onement VI' by Barnett_Newman",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fundacja/:pageNumber(-\\d+-)?/",
    "fundacja",
    "#fundacja: Wystawa: Komunikacja ze wszystkim, co jest",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/stefan-gierowski/:pageNumber(-\\d+-)?/",
    "stefan gierowski",
    "#stefan gierowski: Wystawa: Komunikacja ze wszystkim, co jest",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/sztuka-młodych/:pageNumber(-\\d+-)?/",
    "sztuka młodych",
    "#sztuka młodych: Wystawa: Komunikacja ze wszystkim, co jest",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/malarstwo/:pageNumber(-\\d+-)?/",
    "malarstwo",
    "#malarstwo: Wystawa: Komunikacja ze wszystkim, co jest",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/trendy/:pageNumber(-\\d+-)?/",
    "trendy",
    "#trendy: Stylizacje w trendach spring/summer_2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/ss-2018/:pageNumber(-\\d+-)?/",
    "ss 2018",
    "#ss 2018: Stylizacje w trendach spring/summer_2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/trends/:pageNumber(-\\d+-)?/",
    "trends",
    "#trends: Stylizacje w trendach spring/summer_2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kwiecień/:pageNumber(-\\d+-)?/",
    "kwiecień",
    "#kwiecień: Moje wybory: kwiecień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/róż/:pageNumber(-\\d+-)?/",
    "róż",
    "#róż: Moje wybory: kwiecień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/krembb/:pageNumber(-\\d+-)?/",
    "kremBB",
    "#kremBB: Moje wybory: kwiecień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kwiaty/:pageNumber(-\\d+-)?/",
    "kwiaty",
    "#kwiaty: Moje wybory: kwiecień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/ogród/:pageNumber(-\\d+-)?/",
    "ogród",
    "#ogród: Moje wybory: kwiecień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/paperbag/:pageNumber(-\\d+-)?/",
    "paperbag",
    "#paperbag: Moje wybory: kwiecień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/stradivarius/:pageNumber(-\\d+-)?/",
    "stradivarius",
    "#stradivarius: Moje wybory: kwiecień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/wiosna/:pageNumber(-\\d+-)?/",
    "wiosna",
    "#wiosna: Moje wybory: kwiecień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/puentylizm/:pageNumber(-\\d+-)?/",
    "puentylizm",
    "#puentylizm: Puentylizm (pointylizm) [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/pointylizm/:pageNumber(-\\d+-)?/",
    "pointylizm",
    "#pointylizm: Puentylizm (pointylizm) [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/lęk/:pageNumber(-\\d+-)?/",
    "lęk",
    "#lęk: Oswoić lęk",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fear/:pageNumber(-\\d+-)?/",
    "fear",
    "#fear: Oswoić lęk",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/autoterapia/:pageNumber(-\\d+-)?/",
    "autoterapia",
    "#autoterapia: Oswoić lęk",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/różowy/:pageNumber(-\\d+-)?/",
    "różowy",
    "#różowy: O kolorach: Róż",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/pink/:pageNumber(-\\d+-)?/",
    "pink",
    "#pink: O kolorach: Róż",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/marilyn-monroe/:pageNumber(-\\d+-)?/",
    "marilyn monroe",
    "#marilyn monroe: O kolorach: Róż",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/elsa-schiaparelli/:pageNumber(-\\d+-)?/",
    "elsa schiaparelli",
    "#elsa schiaparelli: O kolorach: Róż",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/choices/:pageNumber(-\\d+-)?/",
    "choices",
    "#choices: Moje wybory: maj",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kosmetyki/:pageNumber(-\\d+-)?/",
    "kosmetyki",
    "#kosmetyki: Moje wybory: maj",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kat-von-d/:pageNumber(-\\d+-)?/",
    "kat von d",
    "#kat von d: Moje wybory: maj",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/skin79/:pageNumber(-\\d+-)?/",
    "skin79",
    "#skin79: Moje wybory: maj",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/nosowska/:pageNumber(-\\d+-)?/",
    "nosowska",
    "#nosowska: Moje wybory: maj",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/wdzięczność/:pageNumber(-\\d+-)?/",
    "wdzięczność",
    "#wdzięczność: Jestem wdzięczna Ci Życie",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/post/:pageNumber(-\\d+-)?/",
    "post",
    "#post: Jestem wdzięczna Ci Życie",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/tekst/:pageNumber(-\\d+-)?/",
    "tekst",
    "#tekst: Jestem wdzięczna Ci Życie",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/akademia/:pageNumber(-\\d+-)?/",
    "akademia",
    "#akademia: Jestem wdzięczna Ci Życie",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/marzenia/:pageNumber(-\\d+-)?/",
    "marzenia",
    "#marzenia: Jestem wdzięczna Ci Życie",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/cele/:pageNumber(-\\d+-)?/",
    "cele",
    "#cele: Jestem wdzięczna Ci Życie",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/hiperrealizm/:pageNumber(-\\d+-)?/",
    "hiperrealizm",
    "#hiperrealizm: Hiperrealizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fotorealizm/:pageNumber(-\\d+-)?/",
    "fotorealizm",
    "#fotorealizm: Hiperrealizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/superrealizm/:pageNumber(-\\d+-)?/",
    "superrealizm",
    "#superrealizm: Hiperrealizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/lem/:pageNumber(-\\d+-)?/",
    "lem",
    "#lem: RGB. Trzy stylizacje z mojej szafy",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/geometria/:pageNumber(-\\d+-)?/",
    "geometria",
    "#geometria: Abstrakcja geometryczna [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/sztuka-geometryczna/:pageNumber(-\\d+-)?/",
    "sztuka geometryczna",
    "#sztuka geometryczna: Abstrakcja geometryczna [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kształty/:pageNumber(-\\d+-)?/",
    "kształty",
    "#kształty: Abstrakcja geometryczna [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/henri-matisse/:pageNumber(-\\d+-)?/",
    "henri matisse",
    "#henri matisse: Make-up inspirowany obrazem. \n'Blue_Nude_II' by Henri_Matisse",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fowizm/:pageNumber(-\\d+-)?/",
    "fowizm",
    "#fowizm: Make-up inspirowany obrazem. \n'Blue_Nude_II' by Henri_Matisse",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/moje-wybory/:pageNumber(-\\d+-)?/",
    "moje wybory",
    "#moje wybory: Moje wybory: czerwiec/lipiec, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/ulubieńcy/:pageNumber(-\\d+-)?/",
    "ulubieńcy",
    "#ulubieńcy: Moje wybory: czerwiec/lipiec, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/czerwiec/:pageNumber(-\\d+-)?/",
    "czerwiec",
    "#czerwiec: Moje wybory: czerwiec/lipiec, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/lipiec/:pageNumber(-\\d+-)?/",
    "lipiec",
    "#lipiec: Moje wybory: czerwiec/lipiec, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/lato/:pageNumber(-\\d+-)?/",
    "lato",
    "#lato: Moje wybory: czerwiec/lipiec, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/my-choices/:pageNumber(-\\d+-)?/",
    "my choices",
    "#my choices: Moje wybory: czerwiec/lipiec, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/secesja/:pageNumber(-\\d+-)?/",
    "secesja",
    "#secesja: Secesja [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/secessio/:pageNumber(-\\d+-)?/",
    "secessio",
    "#secessio: Secesja [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/art-nouveau/:pageNumber(-\\d+-)?/",
    "art nouveau",
    "#art nouveau: Secesja [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/klimt/:pageNumber(-\\d+-)?/",
    "klimt",
    "#klimt: Secesja [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/schiele/:pageNumber(-\\d+-)?/",
    "schiele",
    "#schiele: Secesja [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/gaudi/:pageNumber(-\\d+-)?/",
    "gaudi",
    "#gaudi: Secesja [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/modernizm/:pageNumber(-\\d+-)?/",
    "modernizm",
    "#modernizm: Secesja [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/jazz/:pageNumber(-\\d+-)?/",
    "jazz",
    "#jazz: Make-up inspirowany obrazem. \n'The Circus' from 'Jazz' book by Henri_Matisse",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/jazz-book/:pageNumber(-\\d+-)?/",
    "jazz book",
    "#jazz book: Make-up inspirowany obrazem. \n'The Circus' from 'Jazz' book by Henri_Matisse",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/art-book/:pageNumber(-\\d+-)?/",
    "art book",
    "#art book: Make-up inspirowany obrazem. \n'The Circus' from 'Jazz' book by Henri_Matisse",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/design/:pageNumber(-\\d+-)?/",
    "design",
    "#design: Make-up inspirowany obrazem. \n'The Circus' from 'Jazz' book by Henri_Matisse",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/collage/:pageNumber(-\\d+-)?/",
    "collage",
    "#collage: Make-up inspirowany obrazem. \n'The Circus' from 'Jazz' book by Henri_Matisse",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/tori-wranes/:pageNumber(-\\d+-)?/",
    "tori wranes",
    "#tori wranes: Wystawa: Handmade Acoustics",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/handmade-acoustics/:pageNumber(-\\d+-)?/",
    "handmade acoustics",
    "#handmade acoustics: Wystawa: Handmade Acoustics",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/obiekt/:pageNumber(-\\d+-)?/",
    "obiekt",
    "#obiekt: Wystawa: Handmade Acoustics",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/rzeźba/:pageNumber(-\\d+-)?/",
    "rzeźba",
    "#rzeźba: Wystawa: Handmade Acoustics",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/instalacja/:pageNumber(-\\d+-)?/",
    "instalacja",
    "#instalacja: Wystawa: Handmade Acoustics",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/site-specific/:pageNumber(-\\d+-)?/",
    "site-specific",
    "#site-specific: Wystawa: Handmade Acoustics",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/performance/:pageNumber(-\\d+-)?/",
    "performance",
    "#performance: Wystawa: Handmade Acoustics",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/marc-jacobs/:pageNumber(-\\d+-)?/",
    "marc jacobs",
    "#marc jacobs: Moje wybory: sierpień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/michael-kors/:pageNumber(-\\d+-)?/",
    "michael kors",
    "#michael kors: Moje wybory: sierpień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/dom-polski/:pageNumber(-\\d+-)?/",
    "dom polski",
    "#dom polski: Moje wybory: sierpień",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/futuryzm/:pageNumber(-\\d+-)?/",
    "futuryzm",
    "#futuryzm: Futuryzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/futurism/:pageNumber(-\\d+-)?/",
    "futurism",
    "#futurism: Futuryzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/giacomo-balla/:pageNumber(-\\d+-)?/",
    "giacomo balla",
    "#giacomo balla: Futuryzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fendi/:pageNumber(-\\d+-)?/",
    "fendi",
    "#fendi: Futuryzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/gino-severini/:pageNumber(-\\d+-)?/",
    "gino severini",
    "#gino severini: Futuryzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/pre-fall/:pageNumber(-\\d+-)?/",
    "pre-fall",
    "#pre-fall: Pre-Fall, Fall/Winter, Spring/Summer, Resort, Cruise – co_to_wszystko_znaczy? + FW Trends 2018/2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fall-winter/:pageNumber(-\\d+-)?/",
    "fall/winter",
    "#fall/winter: Pre-Fall, Fall/Winter, Spring/Summer, Resort, Cruise – co_to_wszystko_znaczy? + FW Trends 2018/2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/spring-summer/:pageNumber(-\\d+-)?/",
    "spring/summer",
    "#spring/summer: Pre-Fall, Fall/Winter, Spring/Summer, Resort, Cruise – co_to_wszystko_znaczy? + FW Trends 2018/2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/resort/:pageNumber(-\\d+-)?/",
    "resort",
    "#resort: Pre-Fall, Fall/Winter, Spring/Summer, Resort, Cruise – co_to_wszystko_znaczy? + FW Trends 2018/2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/cruise/:pageNumber(-\\d+-)?/",
    "cruise",
    "#cruise: Pre-Fall, Fall/Winter, Spring/Summer, Resort, Cruise – co_to_wszystko_znaczy? + FW Trends 2018/2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/collection/:pageNumber(-\\d+-)?/",
    "collection",
    "#collection: Pre-Fall, Fall/Winter, Spring/Summer, Resort, Cruise – co_to_wszystko_znaczy? + FW Trends 2018/2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/runway/:pageNumber(-\\d+-)?/",
    "runway",
    "#runway: Pre-Fall, Fall/Winter, Spring/Summer, Resort, Cruise – co_to_wszystko_znaczy? + FW Trends 2018/2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/show/:pageNumber(-\\d+-)?/",
    "show",
    "#show: Pre-Fall, Fall/Winter, Spring/Summer, Resort, Cruise – co_to_wszystko_znaczy? + FW Trends 2018/2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/o-kolorach/:pageNumber(-\\d+-)?/",
    "o kolorach",
    "#o kolorach: O kolorach: Czerń",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/czerń/:pageNumber(-\\d+-)?/",
    "czerń",
    "#czerń: O kolorach: Czerń",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/czarny/:pageNumber(-\\d+-)?/",
    "czarny",
    "#czarny: O kolorach: Czerń",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/symbolika/:pageNumber(-\\d+-)?/",
    "symbolika",
    "#symbolika: O kolorach: Czerń",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/znak/:pageNumber(-\\d+-)?/",
    "znak",
    "#znak: O kolorach: Czerń",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/black/:pageNumber(-\\d+-)?/",
    "black",
    "#black: O kolorach: Czerń",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/wrzesień/:pageNumber(-\\d+-)?/",
    "wrzesień",
    "#wrzesień: Moje wybory: wrzesień 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kapelusz/:pageNumber(-\\d+-)?/",
    "kapelusz",
    "#kapelusz: Moje wybory: wrzesień 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/azja/:pageNumber(-\\d+-)?/",
    "azja",
    "#azja: Wystawa: Bestia, bóg i linia",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/manieryzm/:pageNumber(-\\d+-)?/",
    "manieryzm",
    "#manieryzm: Manieryzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/mannerism/:pageNumber(-\\d+-)?/",
    "mannerism",
    "#mannerism: Manieryzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/wassily/:pageNumber(-\\d+-)?/",
    "wassily",
    "#wassily: Make-up inspirowany obrazem. 'Kompozycja_VIII' by Wassily_Kandinsky",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kandinsky/:pageNumber(-\\d+-)?/",
    "kandinsky",
    "#kandinsky: Make-up inspirowany obrazem. 'Kompozycja_VIII' by Wassily_Kandinsky",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/październik/:pageNumber(-\\d+-)?/",
    "październik",
    "#październik: Moje wybory: październik 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/autumn/:pageNumber(-\\d+-)?/",
    "autumn",
    "#autumn: Moje wybory: październik 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fenty-beauty/:pageNumber(-\\d+-)?/",
    "fenty beauty",
    "#fenty beauty: Moje wybory: październik 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/mcqueen/:pageNumber(-\\d+-)?/",
    "mcqueen",
    "#mcqueen: Moje wybory: październik 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/lirene/:pageNumber(-\\d+-)?/",
    "lirene",
    "#lirene: Moje wybory: październik 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kors/:pageNumber(-\\d+-)?/",
    "kors",
    "#kors: Moje wybory: październik 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kamp/:pageNumber(-\\d+-)?/",
    "kamp",
    "#kamp: Kamp [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/camp/:pageNumber(-\\d+-)?/",
    "camp",
    "#camp: Kamp [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/susan-sontag/:pageNumber(-\\d+-)?/",
    "susan sontag",
    "#susan sontag: Kamp [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/georgia-o-keeffe/:pageNumber(-\\d+-)?/",
    "georgia o'keeffe",
    "#georgia o'keeffe: Make-up inspirowany obrazem. 'Light_of_Iris' by Georgia_O'Keeffe",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/malarka/:pageNumber(-\\d+-)?/",
    "malarka",
    "#malarka: Make-up inspirowany obrazem. 'Light_of_Iris' by Georgia_O'Keeffe",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/ameryka/:pageNumber(-\\d+-)?/",
    "ameryka",
    "#ameryka: Make-up inspirowany obrazem. 'Light_of_Iris' by Georgia_O'Keeffe",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/arabella-pollen/:pageNumber(-\\d+-)?/",
    "arabella pollen",
    "#arabella pollen: Historia pewnej projektantki, czyli perełka z lumpeksu.",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/designer/:pageNumber(-\\d+-)?/",
    "designer",
    "#designer: Historia pewnej projektantki, czyli perełka z lumpeksu.",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/second-hand/:pageNumber(-\\d+-)?/",
    "second hand",
    "#second hand: Historia pewnej projektantki, czyli perełka z lumpeksu.",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fall-1991-1992-london/:pageNumber(-\\d+-)?/",
    "Fall 1991/1992 London",
    "#Fall 1991/1992 London: Historia pewnej projektantki, czyli perełka z lumpeksu.",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/moda-polska/:pageNumber(-\\d+-)?/",
    "moda polska",
    "#moda polska: Wystawa: Moda Polska",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/jaskółka/:pageNumber(-\\d+-)?/",
    "jaskółka",
    "#jaskółka: Wystawa: Moda Polska",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/antkowiak/:pageNumber(-\\d+-)?/",
    "antkowiak",
    "#antkowiak: Wystawa: Moda Polska",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/piętro-iii/:pageNumber(-\\d+-)?/",
    "piętro III",
    "#piętro III: Wystawa: Moda Polska",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/piętro-ii/:pageNumber(-\\d+-)?/",
    "piętro II",
    "#piętro II: Wystawa: Moda Polska",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/black-red/:pageNumber(-\\d+-)?/",
    "black & red",
    "#black & red: Wystawa: Moda Polska",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/listopad/:pageNumber(-\\d+-)?/",
    "listopad",
    "#listopad: Moje wybory: listopad 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kolorówka/:pageNumber(-\\d+-)?/",
    "kolorówka",
    "#kolorówka: Moje wybory: listopad 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/pielęgnacja/:pageNumber(-\\d+-)?/",
    "pielęgnacja",
    "#pielęgnacja: Moje wybory: listopad 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/lektura/:pageNumber(-\\d+-)?/",
    "lektura",
    "#lektura: Moje wybory: listopad 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/fluxus/:pageNumber(-\\d+-)?/",
    "fluxus",
    "#fluxus: Fluxus [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/george-maciunas/:pageNumber(-\\d+-)?/",
    "george maciunas",
    "#george maciunas: Fluxus [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/yoko-ono/:pageNumber(-\\d+-)?/",
    "yoko ono",
    "#yoko ono: Fluxus [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/nam-june-paik/:pageNumber(-\\d+-)?/",
    "nam june paik",
    "#nam june paik: Fluxus [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/o-śmierci/:pageNumber(-\\d+-)?/",
    "o śmierci",
    "#o śmierci: O śmierci",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/anioł/:pageNumber(-\\d+-)?/",
    "anioł",
    "#anioł: O śmierci",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/tekst-autorski/:pageNumber(-\\d+-)?/",
    "tekst autorski",
    "#tekst autorski: O śmierci",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/stop/:pageNumber(-\\d+-)?/",
    "stop",
    "#stop: STOP 2018 START 2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/2018/:pageNumber(-\\d+-)?/",
    "2018",
    "#2018: STOP 2018 START 2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/start/:pageNumber(-\\d+-)?/",
    "start",
    "#start: STOP 2018 START 2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/2019/:pageNumber(-\\d+-)?/",
    "2019",
    "#2019: STOP 2018 START 2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/nowy-rok/:pageNumber(-\\d+-)?/",
    "nowy rok",
    "#nowy rok: STOP 2018 START 2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kalendarz/:pageNumber(-\\d+-)?/",
    "kalendarz",
    "#kalendarz: Moje wybory: grudzień 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/radzka/:pageNumber(-\\d+-)?/",
    "radzka",
    "#radzka: Moje wybory: grudzień 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/nars/:pageNumber(-\\d+-)?/",
    "nars",
    "#nars: Moje wybory: grudzień 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/algenist/:pageNumber(-\\d+-)?/",
    "algenist",
    "#algenist: Moje wybory: grudzień 2018",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/barok/:pageNumber(-\\d+-)?/",
    "barok",
    "#barok: Barok [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/rembrandt/:pageNumber(-\\d+-)?/",
    "rembrandt",
    "#rembrandt: Barok [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/caravaggio/:pageNumber(-\\d+-)?/",
    "caravaggio",
    "#caravaggio: Barok [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/vermeer/:pageNumber(-\\d+-)?/",
    "vermeer",
    "#vermeer: Barok [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/velázquez/:pageNumber(-\\d+-)?/",
    "Velázquez",
    "#Velázquez: Barok [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/bernini/:pageNumber(-\\d+-)?/",
    "bernini",
    "#bernini: Barok [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/piet-mondrian/:pageNumber(-\\d+-)?/",
    "piet mondrian",
    "#piet mondrian: Make-up inspirowany obrazem. 'Victory Boogie-Woogie' by Piet Mondrian",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/mondrian/:pageNumber(-\\d+-)?/",
    "mondrian",
    "#mondrian: Make-up inspirowany obrazem. 'Victory Boogie-Woogie' by Piet Mondrian",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/boogie-woogie/:pageNumber(-\\d+-)?/",
    "boogie-woogie",
    "#boogie-woogie: Make-up inspirowany obrazem. 'Victory Boogie-Woogie' by Piet Mondrian",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/the-beginning/:pageNumber(-\\d+-)?/",
    "the beginning",
    "#the beginning: Make-up inspirowany obrazem. 'Victory Boogie-Woogie' by Piet Mondrian",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/paris/:pageNumber(-\\d+-)?/",
    "paris",
    "#paris: Make-up inspirowany obrazem. 'Victory Boogie-Woogie' by Piet Mondrian",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/netherlands/:pageNumber(-\\d+-)?/",
    "netherlands",
    "#netherlands: Make-up inspirowany obrazem. 'Victory Boogie-Woogie' by Piet Mondrian",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/new-york/:pageNumber(-\\d+-)?/",
    "new york",
    "#new york: Make-up inspirowany obrazem. 'Victory Boogie-Woogie' by Piet Mondrian",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/victory-boogie-woogie/:pageNumber(-\\d+-)?/",
    "victory boogie-woogie",
    "#victory boogie-woogie: Make-up inspirowany obrazem. 'Victory Boogie-Woogie' by Piet Mondrian",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/1944/:pageNumber(-\\d+-)?/",
    "1944",
    "#1944: Make-up inspirowany obrazem. 'Victory Boogie-Woogie' by Piet Mondrian",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/prymitywizm/:pageNumber(-\\d+-)?/",
    "prymitywizm",
    "#prymitywizm: Prymitywizm (sztuka naiwna) [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/sztuka-naiwna/:pageNumber(-\\d+-)?/",
    "sztuka naiwna",
    "#sztuka naiwna: Prymitywizm (sztuka naiwna) [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/rousseau/:pageNumber(-\\d+-)?/",
    "rousseau",
    "#rousseau: Prymitywizm (sztuka naiwna) [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/gauguin/:pageNumber(-\\d+-)?/",
    "gauguin",
    "#gauguin: Prymitywizm (sztuka naiwna) [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/nikifor/:pageNumber(-\\d+-)?/",
    "nikifor",
    "#nikifor: Prymitywizm (sztuka naiwna) [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/dwurnik/:pageNumber(-\\d+-)?/",
    "dwurnik",
    "#dwurnik: Prymitywizm (sztuka naiwna) [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/romantyzm/:pageNumber(-\\d+-)?/",
    "romantyzm",
    "#romantyzm: Romantyzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/romanticism/:pageNumber(-\\d+-)?/",
    "romanticism",
    "#romanticism: Romantyzm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/blue/:pageNumber(-\\d+-)?/",
    "blue",
    "#blue: O kolorach: Niebieski, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/błękit/:pageNumber(-\\d+-)?/",
    "błękit",
    "#błękit: O kolorach: Niebieski, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/niebieski/:pageNumber(-\\d+-)?/",
    "niebieski",
    "#niebieski: O kolorach: Niebieski, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/jeffree-star/:pageNumber(-\\d+-)?/",
    "jeffree star",
    "#jeffree star: O kolorach: Niebieski, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/chromoterapia/:pageNumber(-\\d+-)?/",
    "chromoterapia",
    "#chromoterapia: O kolorach: Niebieski, cz.1",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/ikb/:pageNumber(-\\d+-)?/",
    "ikb",
    "#ikb: O kolorach: Niebieski, cz.2",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/yves-klein/:pageNumber(-\\d+-)?/",
    "yves klein",
    "#yves klein: O kolorach: Niebieski, cz.2",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/blue-monday/:pageNumber(-\\d+-)?/",
    "blue monday",
    "#blue monday: O kolorach: Niebieski, cz.2",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/marzec/:pageNumber(-\\d+-)?/",
    "marzec",
    "#marzec: Moje wybory: luty, marzec 2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kolczyki/:pageNumber(-\\d+-)?/",
    "kolczyki",
    "#kolczyki: Moje wybory: luty, marzec 2019",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/symbolizm/:pageNumber(-\\d+-)?/",
    "symbolizm",
    "#symbolizm: Symbolizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/symbolisme/:pageNumber(-\\d+-)?/",
    "symbolisme",
    "#symbolisme: Symbolizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/bocklin/:pageNumber(-\\d+-)?/",
    "bocklin",
    "#bocklin: Symbolizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/moreau/:pageNumber(-\\d+-)?/",
    "moreau",
    "#moreau: Symbolizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/khnopff/:pageNumber(-\\d+-)?/",
    "khnopff",
    "#khnopff: Symbolizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/mehoffer/:pageNumber(-\\d+-)?/",
    "mehoffer",
    "#mehoffer: Symbolizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/malczewski/:pageNumber(-\\d+-)?/",
    "malczewski",
    "#malczewski: Symbolizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/wyspiański/:pageNumber(-\\d+-)?/",
    "wyspiański",
    "#wyspiański: Symbolizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/syntetyczny-folklor/:pageNumber(-\\d+-)?/",
    "syntetyczny folklor",
    "#syntetyczny folklor: Wystawa: Syntetyczny folklor",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/sztuczna-inteligencja/:pageNumber(-\\d+-)?/",
    "sztuczna inteligencja",
    "#sztuczna inteligencja: Wystawa: Syntetyczny folklor",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/cyfrowy-materializm/:pageNumber(-\\d+-)?/",
    "cyfrowy materializm",
    "#cyfrowy materializm: Wystawa: Syntetyczny folklor",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/postmodernizm/:pageNumber(-\\d+-)?/",
    "postmodernizm",
    "#postmodernizm: Wystawa: Syntetyczny folklor",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/geografia-kulturowa/:pageNumber(-\\d+-)?/",
    "geografia kulturowa",
    "#geografia kulturowa: Wystawa: Syntetyczny folklor",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/nowy-uniwersalizm/:pageNumber(-\\d+-)?/",
    "nowy uniwersalizm",
    "#nowy uniwersalizm: Wystawa: Syntetyczny folklor",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/nollywood/:pageNumber(-\\d+-)?/",
    "nollywood",
    "#nollywood: Wystawa: Syntetyczny folklor",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/m64/:pageNumber(-\\d+-)?/",
    "m64",
    "#m64: Make-up inspirowany obrazem. 'M64' by Wojciech Fangor. Remake",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/oa/:pageNumber(-\\d+-)?/",
    "oa",
    "#oa: Make-up inspirowany obrazem. 'M64' by Wojciech Fangor. Remake",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/the-oa/:pageNumber(-\\d+-)?/",
    "the oa",
    "#the oa: Make-up inspirowany obrazem. 'M64' by Wojciech Fangor. Remake",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kolektywne-sny/:pageNumber(-\\d+-)?/",
    "kolektywne sny",
    "#kolektywne sny: Make-up inspirowany obrazem. 'M64' by Wojciech Fangor. Remake",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/tamara-łempicka/:pageNumber(-\\d+-)?/",
    "tamara łempicka",
    "#tamara łempicka: Make-up inspirowany obrazem 'Zielony turban' by Tamara Łempicka",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/turban/:pageNumber(-\\d+-)?/",
    "turban",
    "#turban: Make-up inspirowany obrazem 'Zielony turban' by Tamara Łempicka",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/vincent/:pageNumber(-\\d+-)?/",
    "vincent",
    "#vincent: Make-up inspirowany obrazem 'Gwiaździsta Noc' by Vincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/van-gogh/:pageNumber(-\\d+-)?/",
    "van gogh",
    "#van gogh: Make-up inspirowany obrazem 'Gwiaździsta Noc' by Vincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/arles/:pageNumber(-\\d+-)?/",
    "arles",
    "#arles: Make-up inspirowany obrazem 'Gwiaździsta Noc' by Vincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/ucho/:pageNumber(-\\d+-)?/",
    "ucho",
    "#ucho: Make-up inspirowany obrazem 'Gwiaździsta Noc' by Vincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/żółty-dom/:pageNumber(-\\d+-)?/",
    "żółty dom",
    "#żółty dom: Make-up inspirowany obrazem 'Gwiaździsta Noc' by Vincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/saint-remy/:pageNumber(-\\d+-)?/",
    "saint-remy",
    "#saint-remy: Make-up inspirowany obrazem 'Gwiaździsta Noc' by Vincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/the-starry-night/:pageNumber(-\\d+-)?/",
    "the starry night",
    "#the starry night: Make-up inspirowany obrazem 'Gwiaździsta Noc' by Vincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/andy-warhol/:pageNumber(-\\d+-)?/",
    "andy warhol",
    "#andy warhol: Make-up inspirowany obrazem 'Untitled' from Marilyn Monroe by Andy Warhol",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/warhol/:pageNumber(-\\d+-)?/",
    "warhol",
    "#warhol: Make-up inspirowany obrazem 'Untitled' from Marilyn Monroe by Andy Warhol",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/hollywood/:pageNumber(-\\d+-)?/",
    "hollywood",
    "#hollywood: Make-up inspirowany obrazem 'Untitled' from Marilyn Monroe by Andy Warhol",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kariera/:pageNumber(-\\d+-)?/",
    "kariera",
    "#kariera: Make-up inspirowany obrazem 'Untitled' from Marilyn Monroe by Andy Warhol",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/sukces/:pageNumber(-\\d+-)?/",
    "sukces",
    "#sukces: 8 zasad osiągania sukcesu, których nie znał \nVincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/motywacja/:pageNumber(-\\d+-)?/",
    "motywacja",
    "#motywacja: 8 zasad osiągania sukcesu, których nie znał \nVincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/cel/:pageNumber(-\\d+-)?/",
    "cel",
    "#cel: 8 zasad osiągania sukcesu, których nie znał \nVincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/dyscyplina/:pageNumber(-\\d+-)?/",
    "dyscyplina",
    "#dyscyplina: 8 zasad osiągania sukcesu, których nie znał \nVincent van Gogh",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/jabłko/:pageNumber(-\\d+-)?/",
    "jabłko",
    "#jabłko: Jabłko",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/miłość/:pageNumber(-\\d+-)?/",
    "miłość",
    "#miłość: Jabłko",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/uczucia/:pageNumber(-\\d+-)?/",
    "uczucia",
    "#uczucia: Jabłko",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/sztuka-miłości/:pageNumber(-\\d+-)?/",
    "sztuka miłości",
    "#sztuka miłości: Jabłko",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/frida-kahlo/:pageNumber(-\\d+-)?/",
    "frida kahlo",
    "#frida kahlo: Cierpienie Fridy Kahlo",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/frida/:pageNumber(-\\d+-)?/",
    "frida",
    "#frida: Cierpienie Fridy Kahlo",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kahlo/:pageNumber(-\\d+-)?/",
    "kahlo",
    "#kahlo: Cierpienie Fridy Kahlo",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/autobus/:pageNumber(-\\d+-)?/",
    "autobus",
    "#autobus: Cierpienie Fridy Kahlo",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/diego/:pageNumber(-\\d+-)?/",
    "diego",
    "#diego: Cierpienie Fridy Kahlo",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/diego-rivera/:pageNumber(-\\d+-)?/",
    "diego rivera",
    "#diego rivera: Cierpienie Fridy Kahlo",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/cierpienie/:pageNumber(-\\d+-)?/",
    "cierpienie",
    "#cierpienie: Cierpienie Fridy Kahlo",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/budda/:pageNumber(-\\d+-)?/",
    "budda",
    "#budda: Cierpienie Fridy Kahlo",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/feniks/:pageNumber(-\\d+-)?/",
    "feniks",
    "#feniks: Feniks",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/poezja/:pageNumber(-\\d+-)?/",
    "poezja",
    "#poezja: Feniks",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/kiedy-odchodzę/:pageNumber(-\\d+-)?/",
    "kiedy odchodzę",
    "#kiedy odchodzę: Feniks",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/salvador/:pageNumber(-\\d+-)?/",
    "salvador",
    "#salvador: Make-up inspirowany twórczością artysty: Salvador Dali",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/dali/:pageNumber(-\\d+-)?/",
    "dali",
    "#dali: Make-up inspirowany twórczością artysty: Salvador Dali",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/gustav-klimt/:pageNumber(-\\d+-)?/",
    "gustav klimt",
    "#gustav klimt: Make-up inspirowany twórczością artysty: Gustav Klimt",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/pocałunek/:pageNumber(-\\d+-)?/",
    "pocałunek",
    "#pocałunek: Make-up inspirowany twórczością artysty: Gustav Klimt",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/vogue/:pageNumber(-\\d+-)?/",
    "vogue",
    "#vogue: Moje wybory: marzec",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/clochee/:pageNumber(-\\d+-)?/",
    "clochee",
    "#clochee: Moje wybory: marzec",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/moov/:pageNumber(-\\d+-)?/",
    "moov",
    "#moov: Moje wybory: marzec",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/dada/:pageNumber(-\\d+-)?/",
    "dada",
    "#dada: DADAizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/dadaizm/:pageNumber(-\\d+-)?/",
    "dadaizm",
    "#dadaizm: DADAizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/tristan-tzara/:pageNumber(-\\d+-)?/",
    "tristan tzara",
    "#tristan tzara: DADAizm [moodboard]",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);
paramorph.addPost(
  new Tag(
    "/tags/mark-rothko/:pageNumber(-\\d+-)?/",
    "mark rothko",
    "#mark rothko: Make-up inspirowany obrazem. 'Biały środek (żółty, różowy, lawendowy)' by Mark_Rothko",
    null,
    "ParrotLayout",
    "./_pages/tag.markdown",
    true,
    5,
    -2208988800000,
  )
);

// PAGES IN TAGS //
paramorph.tags["sztuka"].posts.push(paramorph.posts["/sztuka-dla-sztuki/"]);
paramorph.tags["współczesna"].posts.push(paramorph.posts["/sztuka-dla-sztuki/"]);
paramorph.tags["abstrakcja"].posts.push(paramorph.posts["/sztuka-dla-sztuki/"]);
paramorph.tags["inspiracje"].posts.push(paramorph.posts["/sztuka-dla-sztuki/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/sztuka-makijazu/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/sztuka-makijazu/"]);
paramorph.tags["inspiracje"].posts.push(paramorph.posts["/sztuka-makijazu/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/sztuka-ubioru/"]);
paramorph.tags["ubiór"].posts.push(paramorph.posts["/sztuka-ubioru/"]);
paramorph.tags["moda"].posts.push(paramorph.posts["/sztuka-ubioru/"]);
paramorph.tags["projektanci"].posts.push(paramorph.posts["/sztuka-ubioru/"]);
paramorph.tags["domy mody"].posts.push(paramorph.posts["/sztuka-ubioru/"]);
paramorph.tags["inspiracje"].posts.push(paramorph.posts["/sztuka-ubioru/"]);
paramorph.tags["index"].posts.push(paramorph.posts["/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/"]);
paramorph.tags["uniwersalna"].posts.push(paramorph.posts["/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/"]);
paramorph.tags["moda"].posts.push(paramorph.posts["/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/"]);
paramorph.tags["gotowanie"].posts.push(paramorph.posts["/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/"]);
paramorph.tags["sitemap"].posts.push(paramorph.posts["/sitemap/"]);
paramorph.tags["dla bota"].posts.push(paramorph.posts["/sitemap/"]);
paramorph.tags["olela"].posts.push(paramorph.posts["/sztuka-uniwersalna/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/sztuka-uniwersalna/"]);
paramorph.tags["blog"].posts.push(paramorph.posts["/sztuka-uniwersalna/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/sztuka-uniwersalna/"]);
paramorph.tags["uniwersalna"].posts.push(paramorph.posts["/sztuka-uniwersalna/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-07-15-uniwersalnosc-sztuki/"]);
paramorph.tags["artist"].posts.push(paramorph.posts["/2017-07-15-uniwersalnosc-sztuki/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-07-15-uniwersalnosc-sztuki/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2017-07-15-uniwersalnosc-sztuki/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-07-15-uniwersalnosc-sztuki/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-07-15-uniwersalnosc-sztuki/"]);
paramorph.tags["chanel"].posts.push(paramorph.posts["/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/"]);
paramorph.tags["perły"].posts.push(paramorph.posts["/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/"]);
paramorph.tags["wenus"].posts.push(paramorph.posts["/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/"]);
paramorph.tags["moda"].posts.push(paramorph.posts["/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/"]);
paramorph.tags["fangor"].posts.push(paramorph.posts["/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/"]);
paramorph.tags["obraz"].posts.push(paramorph.posts["/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/"]);
paramorph.tags["podróż"].posts.push(paramorph.posts["/2017-09-18-fuerteventura-impressions/"]);
paramorph.tags["wyspa"].posts.push(paramorph.posts["/2017-09-18-fuerteventura-impressions/"]);
paramorph.tags["fuerteventura"].posts.push(paramorph.posts["/2017-09-18-fuerteventura-impressions/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-09-18-fuerteventura-impressions/"]);
paramorph.tags["szkic"].posts.push(paramorph.posts["/2017-09-18-fuerteventura-impressions/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-09-18-fuerteventura-impressions/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-09-18-fuerteventura-impressions/"]);
paramorph.tags["fangor"].posts.push(paramorph.posts["/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/"]);
paramorph.tags["obraz"].posts.push(paramorph.posts["/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/"]);
paramorph.tags["stylizacja"].posts.push(paramorph.posts["/2017-09-25-podlewaj-swoje-kwiaty/"]);
paramorph.tags["moda"].posts.push(paramorph.posts["/2017-09-25-podlewaj-swoje-kwiaty/"]);
paramorph.tags["kwiat"].posts.push(paramorph.posts["/2017-09-25-podlewaj-swoje-kwiaty/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-09-25-podlewaj-swoje-kwiaty/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-09-25-podlewaj-swoje-kwiaty/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-09-25-podlewaj-swoje-kwiaty/"]);
paramorph.tags["neoplasticism"].posts.push(paramorph.posts["/2017-09-28-neoplastycyzm-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2017-09-28-neoplastycyzm-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-09-28-neoplastycyzm-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-09-28-neoplastycyzm-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-09-28-neoplastycyzm-moodboard/"]);
paramorph.tags["kierunek"].posts.push(paramorph.posts["/2017-09-28-neoplastycyzm-moodboard/"]);
paramorph.tags["jesień"].posts.push(paramorph.posts["/2017-10-03-cala-ta-j-dot-dot-dot/"]);
paramorph.tags["stylizacja"].posts.push(paramorph.posts["/2017-10-03-cala-ta-j-dot-dot-dot/"]);
paramorph.tags["moda"].posts.push(paramorph.posts["/2017-10-03-cala-ta-j-dot-dot-dot/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-10-03-cala-ta-j-dot-dot-dot/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-10-03-cala-ta-j-dot-dot-dot/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-10-03-cala-ta-j-dot-dot-dot/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2017-10-03-cala-ta-j-dot-dot-dot/"]);
paramorph.tags["circle"].posts.push(paramorph.posts["/2017-10-05-kolo-moodboard/"]);
paramorph.tags["koło"].posts.push(paramorph.posts["/2017-10-05-kolo-moodboard/"]);
paramorph.tags["symbol"].posts.push(paramorph.posts["/2017-10-05-kolo-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2017-10-05-kolo-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-10-05-kolo-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-10-05-kolo-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-10-05-kolo-moodboard/"]);
paramorph.tags["kusama"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.tags["yayoi"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.tags["obraz"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/"]);
paramorph.tags["popart"].posts.push(paramorph.posts["/2017-10-12-pop-art-moodboard/"]);
paramorph.tags["pop"].posts.push(paramorph.posts["/2017-10-12-pop-art-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-10-12-pop-art-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2017-10-12-pop-art-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-10-12-pop-art-moodboard/"]);
paramorph.tags["kierunek"].posts.push(paramorph.posts["/2017-10-12-pop-art-moodboard/"]);
paramorph.tags["artist"].posts.push(paramorph.posts["/2017-10-12-pop-art-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-10-12-pop-art-moodboard/"]);
paramorph.tags["taniaodzież"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.tags["lumpeks"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.tags["tania"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.tags["stylizacja"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.tags["moda"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.tags["fashion"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.tags["artist"].posts.push(paramorph.posts["/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/"]);
paramorph.tags["minimalizm"].posts.push(paramorph.posts["/2017-10-19-minimalism-moodboard/"]);
paramorph.tags["minimalism"].posts.push(paramorph.posts["/2017-10-19-minimalism-moodboard/"]);
paramorph.tags["minimal"].posts.push(paramorph.posts["/2017-10-19-minimalism-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-10-19-minimalism-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2017-10-19-minimalism-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-10-19-minimalism-moodboard/"]);
paramorph.tags["artist"].posts.push(paramorph.posts["/2017-10-19-minimalism-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-10-19-minimalism-moodboard/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-10-19-minimalism-moodboard/"]);
paramorph.tags["kolaż"].posts.push(paramorph.posts["/2017-10-25-kolaz-okladek/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-10-25-kolaz-okladek/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-10-25-kolaz-okladek/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-10-25-kolaz-okladek/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-10-25-kolaz-okladek/"]);
paramorph.tags["kubizm"].posts.push(paramorph.posts["/2017-10-26-kubizm-moodboard/"]);
paramorph.tags["cubism"].posts.push(paramorph.posts["/2017-10-26-kubizm-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2017-10-26-kubizm-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-10-26-kubizm-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-10-26-kubizm-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-10-26-kubizm-moodboard/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-10-26-kubizm-moodboard/"]);
paramorph.tags["surrealizm"].posts.push(paramorph.posts["/2017-11-02-surrealizm-moodboard/"]);
paramorph.tags["surrealism"].posts.push(paramorph.posts["/2017-11-02-surrealizm-moodboard/"]);
paramorph.tags["nadrealizm"].posts.push(paramorph.posts["/2017-11-02-surrealizm-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2017-11-02-surrealizm-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-11-02-surrealizm-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-11-02-surrealizm-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-11-02-surrealizm-moodboard/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-11-02-surrealizm-moodboard/"]);
paramorph.tags["malewicz"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["suprematyzm"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["kwadrat"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["obraz"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/"]);
paramorph.tags["action"].posts.push(paramorph.posts["/2017-11-09-action-painting-moodboard/"]);
paramorph.tags["painting"].posts.push(paramorph.posts["/2017-11-09-action-painting-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2017-11-09-action-painting-moodboard/"]);
paramorph.tags["pollock"].posts.push(paramorph.posts["/2017-11-09-action-painting-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-11-09-action-painting-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-11-09-action-painting-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-11-09-action-painting-moodboard/"]);
paramorph.tags["wystawa"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.tags["exhibition"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.tags["picasso"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.tags["lublin"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.tags["recenzja"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.tags["grafika"].posts.push(paramorph.posts["/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/"]);
paramorph.tags["impresjonizm"].posts.push(paramorph.posts["/2017-11-16-impresjonizm-moodboard/"]);
paramorph.tags["impressionism"].posts.push(paramorph.posts["/2017-11-16-impresjonizm-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2017-11-16-impresjonizm-moodboard/"]);
paramorph.tags["monet"].posts.push(paramorph.posts["/2017-11-16-impresjonizm-moodboard/"]);
paramorph.tags["artist"].posts.push(paramorph.posts["/2017-11-16-impresjonizm-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-11-16-impresjonizm-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-11-16-impresjonizm-moodboard/"]);
paramorph.tags["Miro"].posts.push(paramorph.posts["/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/"]);
paramorph.tags["surrealism"].posts.push(paramorph.posts["/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/"]);
paramorph.tags["obraz"].posts.push(paramorph.posts["/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/"]);
paramorph.tags["opart"].posts.push(paramorph.posts["/2017-12-07-op-art-moodboard/"]);
paramorph.tags["optical"].posts.push(paramorph.posts["/2017-12-07-op-art-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-12-07-op-art-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2017-12-07-op-art-moodboard/"]);
paramorph.tags["artist"].posts.push(paramorph.posts["/2017-12-07-op-art-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-12-07-op-art-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-12-07-op-art-moodboard/"]);
paramorph.tags["wystawa"].posts.push(paramorph.posts["/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/"]);
paramorph.tags["exhibition"].posts.push(paramorph.posts["/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/"]);
paramorph.tags["opart"].posts.push(paramorph.posts["/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/"]);
paramorph.tags["kineticart"].posts.push(paramorph.posts["/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/"]);
paramorph.tags["recenzja"].posts.push(paramorph.posts["/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/"]);
paramorph.tags["muzeum"].posts.push(paramorph.posts["/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/"]);
paramorph.tags["kolor"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.tags["fiolet"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.tags["pantone"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.tags["cmyk"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.tags["rgb"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2017-12-17-o-kolorach-fiolet/"]);
paramorph.tags["wybory"].posts.push(paramorph.posts["/2017-12-21-moje-wybory-grudzien/"]);
paramorph.tags["inspiracje"].posts.push(paramorph.posts["/2017-12-21-moje-wybory-grudzien/"]);
paramorph.tags["zima"].posts.push(paramorph.posts["/2017-12-21-moje-wybory-grudzien/"]);
paramorph.tags["perfumy"].posts.push(paramorph.posts["/2017-12-21-moje-wybory-grudzien/"]);
paramorph.tags["książka"].posts.push(paramorph.posts["/2017-12-21-moje-wybory-grudzien/"]);
paramorph.tags["kosmetyk"].posts.push(paramorph.posts["/2017-12-21-moje-wybory-grudzien/"]);
paramorph.tags["torebka"].posts.push(paramorph.posts["/2017-12-21-moje-wybory-grudzien/"]);
paramorph.tags["kolagen"].posts.push(paramorph.posts["/2017-12-31-kolagen/"]);
paramorph.tags["kobieta"].posts.push(paramorph.posts["/2017-12-31-kolagen/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2017-12-31-kolagen/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2017-12-31-kolagen/"]);
paramorph.tags["portret"].posts.push(paramorph.posts["/2017-12-31-kolagen/"]);
paramorph.tags["kolaż"].posts.push(paramorph.posts["/2017-12-31-kolagen/"]);
paramorph.tags["ekspresjonizm"].posts.push(paramorph.posts["/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/"]);
paramorph.tags["abstrakcyjny"].posts.push(paramorph.posts["/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/"]);
paramorph.tags["ekspresja"].posts.push(paramorph.posts["/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/"]);
paramorph.tags["abstrakcja"].posts.push(paramorph.posts["/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/"]);
paramorph.tags["szkoła nowojorska"].posts.push(paramorph.posts["/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/"]);
paramorph.tags["kolor"].posts.push(paramorph.posts["/2018-01-14-o-kolorach-czerwien-cz-dot-1/"]);
paramorph.tags["czerwień"].posts.push(paramorph.posts["/2018-01-14-o-kolorach-czerwien-cz-dot-1/"]);
paramorph.tags["czerwony"].posts.push(paramorph.posts["/2018-01-14-o-kolorach-czerwien-cz-dot-1/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2018-01-14-o-kolorach-czerwien-cz-dot-1/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-01-14-o-kolorach-czerwien-cz-dot-1/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-01-14-o-kolorach-czerwien-cz-dot-1/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2018-01-14-o-kolorach-czerwien-cz-dot-1/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-01-14-o-kolorach-czerwien-cz-dot-1/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2018-01-14-o-kolorach-czerwien-cz-dot-1/"]);
paramorph.tags["ekspresjonizm"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.tags["abstrakcyjny"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.tags["helen frankenthaler"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.tags["obraz"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/"]);
paramorph.tags["wybory"].posts.push(paramorph.posts["/2018-01-24-moje-wybory-styczen/"]);
paramorph.tags["inspiracje"].posts.push(paramorph.posts["/2018-01-24-moje-wybory-styczen/"]);
paramorph.tags["zima"].posts.push(paramorph.posts["/2018-01-24-moje-wybory-styczen/"]);
paramorph.tags["styczeń"].posts.push(paramorph.posts["/2018-01-24-moje-wybory-styczen/"]);
paramorph.tags["kosmetyk"].posts.push(paramorph.posts["/2018-01-24-moje-wybory-styczen/"]);
paramorph.tags["perfumy"].posts.push(paramorph.posts["/2018-01-24-moje-wybory-styczen/"]);
paramorph.tags["książka"].posts.push(paramorph.posts["/2018-01-24-moje-wybory-styczen/"]);
paramorph.tags["akcesoria"].posts.push(paramorph.posts["/2018-01-24-moje-wybory-styczen/"]);
paramorph.tags["wystawa"].posts.push(paramorph.posts["/2018-01-31-wystawa-david-lynch-silence-and-dynamism/"]);
paramorph.tags["exhibition"].posts.push(paramorph.posts["/2018-01-31-wystawa-david-lynch-silence-and-dynamism/"]);
paramorph.tags["david lynch"].posts.push(paramorph.posts["/2018-01-31-wystawa-david-lynch-silence-and-dynamism/"]);
paramorph.tags["lynch"].posts.push(paramorph.posts["/2018-01-31-wystawa-david-lynch-silence-and-dynamism/"]);
paramorph.tags["toruń"].posts.push(paramorph.posts["/2018-01-31-wystawa-david-lynch-silence-and-dynamism/"]);
paramorph.tags["csw"].posts.push(paramorph.posts["/2018-01-31-wystawa-david-lynch-silence-and-dynamism/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-01-31-wystawa-david-lynch-silence-and-dynamism/"]);
paramorph.tags["recenzja"].posts.push(paramorph.posts["/2018-01-31-wystawa-david-lynch-silence-and-dynamism/"]);
paramorph.tags["rokoko"].posts.push(paramorph.posts["/2018-02-08-rokoko-moodboard/"]);
paramorph.tags["rococo"].posts.push(paramorph.posts["/2018-02-08-rokoko-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-02-08-rokoko-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-02-08-rokoko-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-02-08-rokoko-moodboard/"]);
paramorph.tags["nurt"].posts.push(paramorph.posts["/2018-02-08-rokoko-moodboard/"]);
paramorph.tags["kierunek"].posts.push(paramorph.posts["/2018-02-08-rokoko-moodboard/"]);
paramorph.tags["pablo picasso"].posts.push(paramorph.posts["/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/"]);
paramorph.tags["picasso"].posts.push(paramorph.posts["/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/"]);
paramorph.tags["dove"].posts.push(paramorph.posts["/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/"]);
paramorph.tags["sale"].posts.push(paramorph.posts["/2018-02-18-o-narkotykach-xxi-wieku/"]);
paramorph.tags["wyprzedaż"].posts.push(paramorph.posts["/2018-02-18-o-narkotykach-xxi-wieku/"]);
paramorph.tags["zakupy"].posts.push(paramorph.posts["/2018-02-18-o-narkotykach-xxi-wieku/"]);
paramorph.tags["shopping"].posts.push(paramorph.posts["/2018-02-18-o-narkotykach-xxi-wieku/"]);
paramorph.tags["glitter"].posts.push(paramorph.posts["/2018-02-18-o-narkotykach-xxi-wieku/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2018-02-18-o-narkotykach-xxi-wieku/"]);
paramorph.tags["kolor"].posts.push(paramorph.posts["/2018-02-21-o-kolorach-biel-cz-dot-1/"]);
paramorph.tags["biel"].posts.push(paramorph.posts["/2018-02-21-o-kolorach-biel-cz-dot-1/"]);
paramorph.tags["biały"].posts.push(paramorph.posts["/2018-02-21-o-kolorach-biel-cz-dot-1/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2018-02-21-o-kolorach-biel-cz-dot-1/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-02-21-o-kolorach-biel-cz-dot-1/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-02-21-o-kolorach-biel-cz-dot-1/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-02-21-o-kolorach-biel-cz-dot-1/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2018-02-21-o-kolorach-biel-cz-dot-1/"]);
paramorph.tags["wybory"].posts.push(paramorph.posts["/2018-02-26-moje-wybory-luty/"]);
paramorph.tags["inspiracje"].posts.push(paramorph.posts["/2018-02-26-moje-wybory-luty/"]);
paramorph.tags["zima"].posts.push(paramorph.posts["/2018-02-26-moje-wybory-luty/"]);
paramorph.tags["luty"].posts.push(paramorph.posts["/2018-02-26-moje-wybory-luty/"]);
paramorph.tags["perfumy"].posts.push(paramorph.posts["/2018-02-26-moje-wybory-luty/"]);
paramorph.tags["książka"].posts.push(paramorph.posts["/2018-02-26-moje-wybory-luty/"]);
paramorph.tags["kosmetyk"].posts.push(paramorph.posts["/2018-02-26-moje-wybory-luty/"]);
paramorph.tags["biżuteria"].posts.push(paramorph.posts["/2018-02-26-moje-wybory-luty/"]);
paramorph.tags["wystawa"].posts.push(paramorph.posts["/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji/"]);
paramorph.tags["exhibition"].posts.push(paramorph.posts["/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji/"]);
paramorph.tags["zachęta"].posts.push(paramorph.posts["/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji/"]);
paramorph.tags["warszawa"].posts.push(paramorph.posts["/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji/"]);
paramorph.tags["przyszłość"].posts.push(paramorph.posts["/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji/"]);
paramorph.tags["socrealizm"].posts.push(paramorph.posts["/2018-03-08-socrealizm-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-03-08-socrealizm-moodboard/"]);
paramorph.tags["inspiracje"].posts.push(paramorph.posts["/2018-03-08-socrealizm-moodboard/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2018-03-08-socrealizm-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-03-08-socrealizm-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-03-08-socrealizm-moodboard/"]);
paramorph.tags["barnett newman"].posts.push(paramorph.posts["/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/"]);
paramorph.tags["painting"].posts.push(paramorph.posts["/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/"]);
paramorph.tags["abstract expressionism"].posts.push(paramorph.posts["/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/"]);
paramorph.tags["abstrakcja"].posts.push(paramorph.posts["/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/"]);
paramorph.tags["zip"].posts.push(paramorph.posts["/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/"]);
paramorph.tags["wystawa"].posts.push(paramorph.posts["/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest/"]);
paramorph.tags["exhibition"].posts.push(paramorph.posts["/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest/"]);
paramorph.tags["fundacja"].posts.push(paramorph.posts["/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest/"]);
paramorph.tags["stefan gierowski"].posts.push(paramorph.posts["/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest/"]);
paramorph.tags["sztuka młodych"].posts.push(paramorph.posts["/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest/"]);
paramorph.tags["malarstwo"].posts.push(paramorph.posts["/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest/"]);
paramorph.tags["trendy"].posts.push(paramorph.posts["/2018-04-29-stylizacje-w-trendach-ss-2018/"]);
paramorph.tags["ss 2018"].posts.push(paramorph.posts["/2018-04-29-stylizacje-w-trendach-ss-2018/"]);
paramorph.tags["trends"].posts.push(paramorph.posts["/2018-04-29-stylizacje-w-trendach-ss-2018/"]);
paramorph.tags["moda"].posts.push(paramorph.posts["/2018-04-29-stylizacje-w-trendach-ss-2018/"]);
paramorph.tags["stylizacja"].posts.push(paramorph.posts["/2018-04-29-stylizacje-w-trendach-ss-2018/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-04-29-stylizacje-w-trendach-ss-2018/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2018-04-29-stylizacje-w-trendach-ss-2018/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-04-29-stylizacje-w-trendach-ss-2018/"]);
paramorph.tags["wybory"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.tags["kwiecień"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.tags["róż"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.tags["kremBB"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.tags["kwiaty"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.tags["ogród"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.tags["paperbag"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.tags["stradivarius"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.tags["wiosna"].posts.push(paramorph.posts["/2018-05-02-moje-wybory-kwiecien/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-05-10-puentylizm-pointylizm-moodboard/"]);
paramorph.tags["puentylizm"].posts.push(paramorph.posts["/2018-05-10-puentylizm-pointylizm-moodboard/"]);
paramorph.tags["pointylizm"].posts.push(paramorph.posts["/2018-05-10-puentylizm-pointylizm-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-05-10-puentylizm-pointylizm-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2018-05-10-puentylizm-pointylizm-moodboard/"]);
paramorph.tags["lęk"].posts.push(paramorph.posts["/2018-05-14-oswoic-lek/"]);
paramorph.tags["fear"].posts.push(paramorph.posts["/2018-05-14-oswoic-lek/"]);
paramorph.tags["autoterapia"].posts.push(paramorph.posts["/2018-05-14-oswoic-lek/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-05-14-oswoic-lek/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-05-14-oswoic-lek/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-05-14-oswoic-lek/"]);
paramorph.tags["kolor"].posts.push(paramorph.posts["/2018-05-20-o-kolorach-roz/"]);
paramorph.tags["róż"].posts.push(paramorph.posts["/2018-05-20-o-kolorach-roz/"]);
paramorph.tags["różowy"].posts.push(paramorph.posts["/2018-05-20-o-kolorach-roz/"]);
paramorph.tags["pink"].posts.push(paramorph.posts["/2018-05-20-o-kolorach-roz/"]);
paramorph.tags["marilyn monroe"].posts.push(paramorph.posts["/2018-05-20-o-kolorach-roz/"]);
paramorph.tags["elsa schiaparelli"].posts.push(paramorph.posts["/2018-05-20-o-kolorach-roz/"]);
paramorph.tags["picasso"].posts.push(paramorph.posts["/2018-05-20-o-kolorach-roz/"]);
paramorph.tags["wybory"].posts.push(paramorph.posts["/2018-05-29-moje-wybory-maj/"]);
paramorph.tags["choices"].posts.push(paramorph.posts["/2018-05-29-moje-wybory-maj/"]);
paramorph.tags["kosmetyki"].posts.push(paramorph.posts["/2018-05-29-moje-wybory-maj/"]);
paramorph.tags["kat von d"].posts.push(paramorph.posts["/2018-05-29-moje-wybory-maj/"]);
paramorph.tags["skin79"].posts.push(paramorph.posts["/2018-05-29-moje-wybory-maj/"]);
paramorph.tags["książka"].posts.push(paramorph.posts["/2018-05-29-moje-wybory-maj/"]);
paramorph.tags["nosowska"].posts.push(paramorph.posts["/2018-05-29-moje-wybory-maj/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2018-05-29-moje-wybory-maj/"]);
paramorph.tags["wdzięczność"].posts.push(paramorph.posts["/2018-06-05-jestem-wdzieczna-ci-zycie/"]);
paramorph.tags["post"].posts.push(paramorph.posts["/2018-06-05-jestem-wdzieczna-ci-zycie/"]);
paramorph.tags["tekst"].posts.push(paramorph.posts["/2018-06-05-jestem-wdzieczna-ci-zycie/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-06-05-jestem-wdzieczna-ci-zycie/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-06-05-jestem-wdzieczna-ci-zycie/"]);
paramorph.tags["akademia"].posts.push(paramorph.posts["/2018-06-05-jestem-wdzieczna-ci-zycie/"]);
paramorph.tags["marzenia"].posts.push(paramorph.posts["/2018-06-05-jestem-wdzieczna-ci-zycie/"]);
paramorph.tags["cele"].posts.push(paramorph.posts["/2018-06-05-jestem-wdzieczna-ci-zycie/"]);
paramorph.tags["hiperrealizm"].posts.push(paramorph.posts["/2018-06-07-hiperrealizm-moodboard/"]);
paramorph.tags["fotorealizm"].posts.push(paramorph.posts["/2018-06-07-hiperrealizm-moodboard/"]);
paramorph.tags["superrealizm"].posts.push(paramorph.posts["/2018-06-07-hiperrealizm-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-06-07-hiperrealizm-moodboard/"]);
paramorph.tags["moda"].posts.push(paramorph.posts["/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/"]);
paramorph.tags["fashion"].posts.push(paramorph.posts["/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/"]);
paramorph.tags["stylizacja"].posts.push(paramorph.posts["/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/"]);
paramorph.tags["lem"].posts.push(paramorph.posts["/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-07-05-abstrakcja-geometryczna-moodboard/"]);
paramorph.tags["abstrakcja"].posts.push(paramorph.posts["/2018-07-05-abstrakcja-geometryczna-moodboard/"]);
paramorph.tags["geometria"].posts.push(paramorph.posts["/2018-07-05-abstrakcja-geometryczna-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-07-05-abstrakcja-geometryczna-moodboard/"]);
paramorph.tags["sztuka geometryczna"].posts.push(paramorph.posts["/2018-07-05-abstrakcja-geometryczna-moodboard/"]);
paramorph.tags["malarstwo"].posts.push(paramorph.posts["/2018-07-05-abstrakcja-geometryczna-moodboard/"]);
paramorph.tags["kształty"].posts.push(paramorph.posts["/2018-07-05-abstrakcja-geometryczna-moodboard/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse/"]);
paramorph.tags["henri matisse"].posts.push(paramorph.posts["/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse/"]);
paramorph.tags["fowizm"].posts.push(paramorph.posts["/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse/"]);
paramorph.tags["moje wybory"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["wybory"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["ulubieńcy"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["czerwiec"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["lipiec"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["lato"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["my choices"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["kosmetyki"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["książka"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["biżuteria"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["akcesoria"].posts.push(paramorph.posts["/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/"]);
paramorph.tags["moje wybory"].posts.push(paramorph.posts["/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/"]);
paramorph.tags["my choices"].posts.push(paramorph.posts["/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/"]);
paramorph.tags["ulubieńcy"].posts.push(paramorph.posts["/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/"]);
paramorph.tags["lato"].posts.push(paramorph.posts["/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/"]);
paramorph.tags["kosmetyki"].posts.push(paramorph.posts["/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/"]);
paramorph.tags["kobieta"].posts.push(paramorph.posts["/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/"]);
paramorph.tags["akcesoria"].posts.push(paramorph.posts["/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/"]);
paramorph.tags["secesja"].posts.push(paramorph.posts["/2018-08-09-secesja-moodboard/"]);
paramorph.tags["secessio"].posts.push(paramorph.posts["/2018-08-09-secesja-moodboard/"]);
paramorph.tags["art nouveau"].posts.push(paramorph.posts["/2018-08-09-secesja-moodboard/"]);
paramorph.tags["klimt"].posts.push(paramorph.posts["/2018-08-09-secesja-moodboard/"]);
paramorph.tags["schiele"].posts.push(paramorph.posts["/2018-08-09-secesja-moodboard/"]);
paramorph.tags["gaudi"].posts.push(paramorph.posts["/2018-08-09-secesja-moodboard/"]);
paramorph.tags["modernizm"].posts.push(paramorph.posts["/2018-08-09-secesja-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-08-09-secesja-moodboard/"]);
paramorph.tags["henri matisse"].posts.push(paramorph.posts["/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri/"]);
paramorph.tags["jazz"].posts.push(paramorph.posts["/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri/"]);
paramorph.tags["jazz book"].posts.push(paramorph.posts["/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri/"]);
paramorph.tags["art book"].posts.push(paramorph.posts["/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri/"]);
paramorph.tags["design"].posts.push(paramorph.posts["/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri/"]);
paramorph.tags["collage"].posts.push(paramorph.posts["/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri/"]);
paramorph.tags["wystawa"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.tags["exhibition"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.tags["csw"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.tags["tori wranes"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.tags["handmade acoustics"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.tags["obiekt"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.tags["rzeźba"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.tags["instalacja"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.tags["site-specific"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.tags["performance"].posts.push(paramorph.posts["/2018-08-22-wystawa-handmade-acoustics/"]);
paramorph.tags["moje wybory"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.tags["my choices"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.tags["kosmetyk"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.tags["książka"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.tags["torebka"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.tags["marc jacobs"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.tags["michael kors"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.tags["design"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.tags["dom polski"].posts.push(paramorph.posts["/2018-08-31-moje-wybory-sierpien/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-09-06-futuryzm-moodboard/"]);
paramorph.tags["futuryzm"].posts.push(paramorph.posts["/2018-09-06-futuryzm-moodboard/"]);
paramorph.tags["futurism"].posts.push(paramorph.posts["/2018-09-06-futuryzm-moodboard/"]);
paramorph.tags["giacomo balla"].posts.push(paramorph.posts["/2018-09-06-futuryzm-moodboard/"]);
paramorph.tags["fendi"].posts.push(paramorph.posts["/2018-09-06-futuryzm-moodboard/"]);
paramorph.tags["gino severini"].posts.push(paramorph.posts["/2018-09-06-futuryzm-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2018-09-06-futuryzm-moodboard/"]);
paramorph.tags["trendy"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["trends"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["pre-fall"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["fall/winter"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["spring/summer"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["resort"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["cruise"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["collection"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["runway"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["fashion"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["show"].posts.push(paramorph.posts["/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/"]);
paramorph.tags["o kolorach"].posts.push(paramorph.posts["/2018-09-21-o-kolorach-czern/"]);
paramorph.tags["czerń"].posts.push(paramorph.posts["/2018-09-21-o-kolorach-czern/"]);
paramorph.tags["czarny"].posts.push(paramorph.posts["/2018-09-21-o-kolorach-czern/"]);
paramorph.tags["kolor"].posts.push(paramorph.posts["/2018-09-21-o-kolorach-czern/"]);
paramorph.tags["symbolika"].posts.push(paramorph.posts["/2018-09-21-o-kolorach-czern/"]);
paramorph.tags["znak"].posts.push(paramorph.posts["/2018-09-21-o-kolorach-czern/"]);
paramorph.tags["black"].posts.push(paramorph.posts["/2018-09-21-o-kolorach-czern/"]);
paramorph.tags["moje wybory"].posts.push(paramorph.posts["/2018-09-27-moje-wybory-wrzesien-2018/"]);
paramorph.tags["my choices"].posts.push(paramorph.posts["/2018-09-27-moje-wybory-wrzesien-2018/"]);
paramorph.tags["wrzesień"].posts.push(paramorph.posts["/2018-09-27-moje-wybory-wrzesien-2018/"]);
paramorph.tags["jesień"].posts.push(paramorph.posts["/2018-09-27-moje-wybory-wrzesien-2018/"]);
paramorph.tags["kapelusz"].posts.push(paramorph.posts["/2018-09-27-moje-wybory-wrzesien-2018/"]);
paramorph.tags["książka"].posts.push(paramorph.posts["/2018-09-27-moje-wybory-wrzesien-2018/"]);
paramorph.tags["kosmetyk"].posts.push(paramorph.posts["/2018-09-27-moje-wybory-wrzesien-2018/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-10-02-wystawa-bestia-bog-i-linia/"]);
paramorph.tags["wystawa"].posts.push(paramorph.posts["/2018-10-02-wystawa-bestia-bog-i-linia/"]);
paramorph.tags["exhibition"].posts.push(paramorph.posts["/2018-10-02-wystawa-bestia-bog-i-linia/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-10-02-wystawa-bestia-bog-i-linia/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2018-10-02-wystawa-bestia-bog-i-linia/"]);
paramorph.tags["azja"].posts.push(paramorph.posts["/2018-10-02-wystawa-bestia-bog-i-linia/"]);
paramorph.tags["muzeum"].posts.push(paramorph.posts["/2018-10-02-wystawa-bestia-bog-i-linia/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-10-04-manieryzm-moodboard/"]);
paramorph.tags["manieryzm"].posts.push(paramorph.posts["/2018-10-04-manieryzm-moodboard/"]);
paramorph.tags["mannerism"].posts.push(paramorph.posts["/2018-10-04-manieryzm-moodboard/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2018-10-04-manieryzm-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-10-04-manieryzm-moodboard/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily/"]);
paramorph.tags["obraz"].posts.push(paramorph.posts["/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily/"]);
paramorph.tags["wassily"].posts.push(paramorph.posts["/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily/"]);
paramorph.tags["kandinsky"].posts.push(paramorph.posts["/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily/"]);
paramorph.tags["abstrakcja"].posts.push(paramorph.posts["/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily/"]);
paramorph.tags["moje wybory"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.tags["my choices"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.tags["październik"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.tags["jesień"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.tags["autumn"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.tags["fenty beauty"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.tags["mcqueen"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.tags["lirene"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.tags["kors"].posts.push(paramorph.posts["/2018-10-24-moje-wybory-pazdziernik-2018/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2018-10-28-smierc-doroslego/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-10-28-smierc-doroslego/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-10-28-smierc-doroslego/"]);
paramorph.tags["art"].posts.push(paramorph.posts["/2018-10-28-smierc-doroslego/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-10-28-smierc-doroslego/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2018-10-28-smierc-doroslego/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-10-31-kamp-moodboard/"]);
paramorph.tags["kamp"].posts.push(paramorph.posts["/2018-10-31-kamp-moodboard/"]);
paramorph.tags["camp"].posts.push(paramorph.posts["/2018-10-31-kamp-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-10-31-kamp-moodboard/"]);
paramorph.tags["susan sontag"].posts.push(paramorph.posts["/2018-10-31-kamp-moodboard/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe/"]);
paramorph.tags["obraz"].posts.push(paramorph.posts["/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe/"]);
paramorph.tags["georgia o'keeffe"].posts.push(paramorph.posts["/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe/"]);
paramorph.tags["malarka"].posts.push(paramorph.posts["/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe/"]);
paramorph.tags["ameryka"].posts.push(paramorph.posts["/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe/"]);
paramorph.tags["abstrakcja"].posts.push(paramorph.posts["/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe/"]);
paramorph.tags["arabella pollen"].posts.push(paramorph.posts["/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu/"]);
paramorph.tags["fashion"].posts.push(paramorph.posts["/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu/"]);
paramorph.tags["designer"].posts.push(paramorph.posts["/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu/"]);
paramorph.tags["second hand"].posts.push(paramorph.posts["/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu/"]);
paramorph.tags["Fall 1991/1992 London"].posts.push(paramorph.posts["/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu/"]);
paramorph.tags["wystawa"].posts.push(paramorph.posts["/2018-11-22-wystawa-moda-polska/"]);
paramorph.tags["moda polska"].posts.push(paramorph.posts["/2018-11-22-wystawa-moda-polska/"]);
paramorph.tags["jaskółka"].posts.push(paramorph.posts["/2018-11-22-wystawa-moda-polska/"]);
paramorph.tags["antkowiak"].posts.push(paramorph.posts["/2018-11-22-wystawa-moda-polska/"]);
paramorph.tags["piętro III"].posts.push(paramorph.posts["/2018-11-22-wystawa-moda-polska/"]);
paramorph.tags["piętro II"].posts.push(paramorph.posts["/2018-11-22-wystawa-moda-polska/"]);
paramorph.tags["black & red"].posts.push(paramorph.posts["/2018-11-22-wystawa-moda-polska/"]);
paramorph.tags["wybory"].posts.push(paramorph.posts["/2018-11-28-moje-wybory-listopad-2018/"]);
paramorph.tags["listopad"].posts.push(paramorph.posts["/2018-11-28-moje-wybory-listopad-2018/"]);
paramorph.tags["kosmetyk"].posts.push(paramorph.posts["/2018-11-28-moje-wybory-listopad-2018/"]);
paramorph.tags["kolorówka"].posts.push(paramorph.posts["/2018-11-28-moje-wybory-listopad-2018/"]);
paramorph.tags["pielęgnacja"].posts.push(paramorph.posts["/2018-11-28-moje-wybory-listopad-2018/"]);
paramorph.tags["lektura"].posts.push(paramorph.posts["/2018-11-28-moje-wybory-listopad-2018/"]);
paramorph.tags["akcesoria"].posts.push(paramorph.posts["/2018-11-28-moje-wybory-listopad-2018/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-12-06-fluxus-moodboard/"]);
paramorph.tags["fluxus"].posts.push(paramorph.posts["/2018-12-06-fluxus-moodboard/"]);
paramorph.tags["george maciunas"].posts.push(paramorph.posts["/2018-12-06-fluxus-moodboard/"]);
paramorph.tags["yoko ono"].posts.push(paramorph.posts["/2018-12-06-fluxus-moodboard/"]);
paramorph.tags["nam june paik"].posts.push(paramorph.posts["/2018-12-06-fluxus-moodboard/"]);
paramorph.tags["o śmierci"].posts.push(paramorph.posts["/2018-12-13-o-smierci/"]);
paramorph.tags["anioł"].posts.push(paramorph.posts["/2018-12-13-o-smierci/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-12-13-o-smierci/"]);
paramorph.tags["tekst autorski"].posts.push(paramorph.posts["/2018-12-13-o-smierci/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-12-13-o-smierci/"]);
paramorph.tags["stop"].posts.push(paramorph.posts["/2018-12-28-stop-2018-start-2019/"]);
paramorph.tags["2018"].posts.push(paramorph.posts["/2018-12-28-stop-2018-start-2019/"]);
paramorph.tags["start"].posts.push(paramorph.posts["/2018-12-28-stop-2018-start-2019/"]);
paramorph.tags["2019"].posts.push(paramorph.posts["/2018-12-28-stop-2018-start-2019/"]);
paramorph.tags["nowy rok"].posts.push(paramorph.posts["/2018-12-28-stop-2018-start-2019/"]);
paramorph.tags["moje wybory"].posts.push(paramorph.posts["/2019-01-03-moje-wybory-grudzien-2018/"]);
paramorph.tags["my choices"].posts.push(paramorph.posts["/2019-01-03-moje-wybory-grudzien-2018/"]);
paramorph.tags["kalendarz"].posts.push(paramorph.posts["/2019-01-03-moje-wybory-grudzien-2018/"]);
paramorph.tags["radzka"].posts.push(paramorph.posts["/2019-01-03-moje-wybory-grudzien-2018/"]);
paramorph.tags["kosmetyk"].posts.push(paramorph.posts["/2019-01-03-moje-wybory-grudzien-2018/"]);
paramorph.tags["pielęgnacja"].posts.push(paramorph.posts["/2019-01-03-moje-wybory-grudzien-2018/"]);
paramorph.tags["kolorówka"].posts.push(paramorph.posts["/2019-01-03-moje-wybory-grudzien-2018/"]);
paramorph.tags["nars"].posts.push(paramorph.posts["/2019-01-03-moje-wybory-grudzien-2018/"]);
paramorph.tags["algenist"].posts.push(paramorph.posts["/2019-01-03-moje-wybory-grudzien-2018/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2019-01-10-barok-moodboard/"]);
paramorph.tags["barok"].posts.push(paramorph.posts["/2019-01-10-barok-moodboard/"]);
paramorph.tags["rembrandt"].posts.push(paramorph.posts["/2019-01-10-barok-moodboard/"]);
paramorph.tags["caravaggio"].posts.push(paramorph.posts["/2019-01-10-barok-moodboard/"]);
paramorph.tags["vermeer"].posts.push(paramorph.posts["/2019-01-10-barok-moodboard/"]);
paramorph.tags["Velázquez"].posts.push(paramorph.posts["/2019-01-10-barok-moodboard/"]);
paramorph.tags["bernini"].posts.push(paramorph.posts["/2019-01-10-barok-moodboard/"]);
paramorph.tags["piet mondrian"].posts.push(paramorph.posts["/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/"]);
paramorph.tags["mondrian"].posts.push(paramorph.posts["/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/"]);
paramorph.tags["boogie-woogie"].posts.push(paramorph.posts["/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/"]);
paramorph.tags["the beginning"].posts.push(paramorph.posts["/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/"]);
paramorph.tags["paris"].posts.push(paramorph.posts["/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/"]);
paramorph.tags["netherlands"].posts.push(paramorph.posts["/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/"]);
paramorph.tags["new york"].posts.push(paramorph.posts["/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/"]);
paramorph.tags["victory boogie-woogie"].posts.push(paramorph.posts["/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/"]);
paramorph.tags["1944"].posts.push(paramorph.posts["/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/"]);
paramorph.tags["moje wybory"].posts.push(paramorph.posts["/2019-01-30-moje-wybory-styczen-2019/"]);
paramorph.tags["my choices"].posts.push(paramorph.posts["/2019-01-30-moje-wybory-styczen-2019/"]);
paramorph.tags["perfumy"].posts.push(paramorph.posts["/2019-01-30-moje-wybory-styczen-2019/"]);
paramorph.tags["lektura"].posts.push(paramorph.posts["/2019-01-30-moje-wybory-styczen-2019/"]);
paramorph.tags["kosmetyk"].posts.push(paramorph.posts["/2019-01-30-moje-wybory-styczen-2019/"]);
paramorph.tags["akcesoria"].posts.push(paramorph.posts["/2019-01-30-moje-wybory-styczen-2019/"]);
paramorph.tags["torebka"].posts.push(paramorph.posts["/2019-01-30-moje-wybory-styczen-2019/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2019-02-07-prymitywizm-sztuka-naiwna-moodboard/"]);
paramorph.tags["prymitywizm"].posts.push(paramorph.posts["/2019-02-07-prymitywizm-sztuka-naiwna-moodboard/"]);
paramorph.tags["sztuka naiwna"].posts.push(paramorph.posts["/2019-02-07-prymitywizm-sztuka-naiwna-moodboard/"]);
paramorph.tags["rousseau"].posts.push(paramorph.posts["/2019-02-07-prymitywizm-sztuka-naiwna-moodboard/"]);
paramorph.tags["gauguin"].posts.push(paramorph.posts["/2019-02-07-prymitywizm-sztuka-naiwna-moodboard/"]);
paramorph.tags["nikifor"].posts.push(paramorph.posts["/2019-02-07-prymitywizm-sztuka-naiwna-moodboard/"]);
paramorph.tags["dwurnik"].posts.push(paramorph.posts["/2019-02-07-prymitywizm-sztuka-naiwna-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2019-03-07-romantyzm-moodboard/"]);
paramorph.tags["romantyzm"].posts.push(paramorph.posts["/2019-03-07-romantyzm-moodboard/"]);
paramorph.tags["romanticism"].posts.push(paramorph.posts["/2019-03-07-romantyzm-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2019-03-07-romantyzm-moodboard/"]);
paramorph.tags["kolor"].posts.push(paramorph.posts["/2019-03-17-o-kolorach-niebieski-cz-dot-1/"]);
paramorph.tags["o kolorach"].posts.push(paramorph.posts["/2019-03-17-o-kolorach-niebieski-cz-dot-1/"]);
paramorph.tags["blue"].posts.push(paramorph.posts["/2019-03-17-o-kolorach-niebieski-cz-dot-1/"]);
paramorph.tags["błękit"].posts.push(paramorph.posts["/2019-03-17-o-kolorach-niebieski-cz-dot-1/"]);
paramorph.tags["niebieski"].posts.push(paramorph.posts["/2019-03-17-o-kolorach-niebieski-cz-dot-1/"]);
paramorph.tags["picasso"].posts.push(paramorph.posts["/2019-03-17-o-kolorach-niebieski-cz-dot-1/"]);
paramorph.tags["jeffree star"].posts.push(paramorph.posts["/2019-03-17-o-kolorach-niebieski-cz-dot-1/"]);
paramorph.tags["chromoterapia"].posts.push(paramorph.posts["/2019-03-17-o-kolorach-niebieski-cz-dot-1/"]);
paramorph.tags["kolor"].posts.push(paramorph.posts["/2019-03-20-o-kolorach-niebieski-cz-dot-2/"]);
paramorph.tags["o kolorach"].posts.push(paramorph.posts["/2019-03-20-o-kolorach-niebieski-cz-dot-2/"]);
paramorph.tags["niebieski"].posts.push(paramorph.posts["/2019-03-20-o-kolorach-niebieski-cz-dot-2/"]);
paramorph.tags["ikb"].posts.push(paramorph.posts["/2019-03-20-o-kolorach-niebieski-cz-dot-2/"]);
paramorph.tags["yves klein"].posts.push(paramorph.posts["/2019-03-20-o-kolorach-niebieski-cz-dot-2/"]);
paramorph.tags["blue"].posts.push(paramorph.posts["/2019-03-20-o-kolorach-niebieski-cz-dot-2/"]);
paramorph.tags["blue monday"].posts.push(paramorph.posts["/2019-03-20-o-kolorach-niebieski-cz-dot-2/"]);
paramorph.tags["moje wybory"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.tags["wybory"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.tags["luty"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.tags["marzec"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.tags["kosmetyk"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.tags["pielęgnacja"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.tags["kolorówka"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.tags["lektura"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.tags["akcesoria"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.tags["kolczyki"].posts.push(paramorph.posts["/2019-03-29-moje-wybory-luty-marzec-2019/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2019-04-04-symbolizm-moodboard/"]);
paramorph.tags["symbolizm"].posts.push(paramorph.posts["/2019-04-04-symbolizm-moodboard/"]);
paramorph.tags["symbolisme"].posts.push(paramorph.posts["/2019-04-04-symbolizm-moodboard/"]);
paramorph.tags["bocklin"].posts.push(paramorph.posts["/2019-04-04-symbolizm-moodboard/"]);
paramorph.tags["moreau"].posts.push(paramorph.posts["/2019-04-04-symbolizm-moodboard/"]);
paramorph.tags["khnopff"].posts.push(paramorph.posts["/2019-04-04-symbolizm-moodboard/"]);
paramorph.tags["mehoffer"].posts.push(paramorph.posts["/2019-04-04-symbolizm-moodboard/"]);
paramorph.tags["malczewski"].posts.push(paramorph.posts["/2019-04-04-symbolizm-moodboard/"]);
paramorph.tags["wyspiański"].posts.push(paramorph.posts["/2019-04-04-symbolizm-moodboard/"]);
paramorph.tags["syntetyczny folklor"].posts.push(paramorph.posts["/2019-04-23-wystawa-syntetyczny-folklor/"]);
paramorph.tags["sztuczna inteligencja"].posts.push(paramorph.posts["/2019-04-23-wystawa-syntetyczny-folklor/"]);
paramorph.tags["cyfrowy materializm"].posts.push(paramorph.posts["/2019-04-23-wystawa-syntetyczny-folklor/"]);
paramorph.tags["postmodernizm"].posts.push(paramorph.posts["/2019-04-23-wystawa-syntetyczny-folklor/"]);
paramorph.tags["geografia kulturowa"].posts.push(paramorph.posts["/2019-04-23-wystawa-syntetyczny-folklor/"]);
paramorph.tags["nowy uniwersalizm"].posts.push(paramorph.posts["/2019-04-23-wystawa-syntetyczny-folklor/"]);
paramorph.tags["nollywood"].posts.push(paramorph.posts["/2019-04-23-wystawa-syntetyczny-folklor/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/"]);
paramorph.tags["fangor"].posts.push(paramorph.posts["/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/"]);
paramorph.tags["m64"].posts.push(paramorph.posts["/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/"]);
paramorph.tags["opart"].posts.push(paramorph.posts["/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/"]);
paramorph.tags["oa"].posts.push(paramorph.posts["/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/"]);
paramorph.tags["the oa"].posts.push(paramorph.posts["/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/"]);
paramorph.tags["kolektywne sny"].posts.push(paramorph.posts["/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/"]);
paramorph.tags["tamara łempicka"].posts.push(paramorph.posts["/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka/"]);
paramorph.tags["turban"].posts.push(paramorph.posts["/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka/"]);
paramorph.tags["obraz"].posts.push(paramorph.posts["/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka/"]);
paramorph.tags["vincent"].posts.push(paramorph.posts["/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/"]);
paramorph.tags["van gogh"].posts.push(paramorph.posts["/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/"]);
paramorph.tags["arles"].posts.push(paramorph.posts["/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/"]);
paramorph.tags["ucho"].posts.push(paramorph.posts["/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/"]);
paramorph.tags["żółty dom"].posts.push(paramorph.posts["/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/"]);
paramorph.tags["gauguin"].posts.push(paramorph.posts["/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/"]);
paramorph.tags["saint-remy"].posts.push(paramorph.posts["/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/"]);
paramorph.tags["the starry night"].posts.push(paramorph.posts["/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/"]);
paramorph.tags["andy warhol"].posts.push(paramorph.posts["/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe/"]);
paramorph.tags["warhol"].posts.push(paramorph.posts["/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe/"]);
paramorph.tags["popart"].posts.push(paramorph.posts["/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe/"]);
paramorph.tags["hollywood"].posts.push(paramorph.posts["/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe/"]);
paramorph.tags["new york"].posts.push(paramorph.posts["/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe/"]);
paramorph.tags["kariera"].posts.push(paramorph.posts["/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe/"]);
paramorph.tags["vincent"].posts.push(paramorph.posts["/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van/"]);
paramorph.tags["van gogh"].posts.push(paramorph.posts["/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van/"]);
paramorph.tags["sukces"].posts.push(paramorph.posts["/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van/"]);
paramorph.tags["motywacja"].posts.push(paramorph.posts["/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van/"]);
paramorph.tags["cel"].posts.push(paramorph.posts["/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van/"]);
paramorph.tags["dyscyplina"].posts.push(paramorph.posts["/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van/"]);
paramorph.tags["jabłko"].posts.push(paramorph.posts["/2019-08-06-jablko/"]);
paramorph.tags["miłość"].posts.push(paramorph.posts["/2019-08-06-jablko/"]);
paramorph.tags["uczucia"].posts.push(paramorph.posts["/2019-08-06-jablko/"]);
paramorph.tags["sztuka miłości"].posts.push(paramorph.posts["/2019-08-06-jablko/"]);
paramorph.tags["frida kahlo"].posts.push(paramorph.posts["/2019-09-10-frida-kahlo/"]);
paramorph.tags["frida"].posts.push(paramorph.posts["/2019-09-10-frida-kahlo/"]);
paramorph.tags["kahlo"].posts.push(paramorph.posts["/2019-09-10-frida-kahlo/"]);
paramorph.tags["autobus"].posts.push(paramorph.posts["/2019-09-10-frida-kahlo/"]);
paramorph.tags["diego"].posts.push(paramorph.posts["/2019-09-10-frida-kahlo/"]);
paramorph.tags["diego rivera"].posts.push(paramorph.posts["/2019-09-10-frida-kahlo/"]);
paramorph.tags["cierpienie"].posts.push(paramorph.posts["/2019-09-10-frida-kahlo/"]);
paramorph.tags["budda"].posts.push(paramorph.posts["/2019-09-10-frida-kahlo/"]);
paramorph.tags["feniks"].posts.push(paramorph.posts["/2019-09-22-feniks/"]);
paramorph.tags["sztuka miłości"].posts.push(paramorph.posts["/2019-09-22-feniks/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2019-09-22-feniks/"]);
paramorph.tags["poezja"].posts.push(paramorph.posts["/2019-09-22-feniks/"]);
paramorph.tags["kiedy odchodzę"].posts.push(paramorph.posts["/2019-09-22-feniks/"]);
paramorph.tags["salvador"].posts.push(paramorph.posts["/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali/"]);
paramorph.tags["dali"].posts.push(paramorph.posts["/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali/"]);
paramorph.tags["surrealism"].posts.push(paramorph.posts["/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali/"]);
paramorph.tags["surrealizm"].posts.push(paramorph.posts["/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali/"]);
paramorph.tags["gustav klimt"].posts.push(paramorph.posts["/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt/"]);
paramorph.tags["klimt"].posts.push(paramorph.posts["/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt/"]);
paramorph.tags["pocałunek"].posts.push(paramorph.posts["/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt/"]);
paramorph.tags["wybory"].posts.push(paramorph.posts["/2018-04-07-moje-wybory-marzec/"]);
paramorph.tags["marzec"].posts.push(paramorph.posts["/2018-04-07-moje-wybory-marzec/"]);
paramorph.tags["vogue"].posts.push(paramorph.posts["/2018-04-07-moje-wybory-marzec/"]);
paramorph.tags["clochee"].posts.push(paramorph.posts["/2018-04-07-moje-wybory-marzec/"]);
paramorph.tags["moov"].posts.push(paramorph.posts["/2018-04-07-moje-wybory-marzec/"]);
paramorph.tags["stradivarius"].posts.push(paramorph.posts["/2018-04-07-moje-wybory-marzec/"]);
paramorph.tags["wiosna"].posts.push(paramorph.posts["/2018-04-07-moje-wybory-marzec/"]);
paramorph.tags["dada"].posts.push(paramorph.posts["/2018-04-05-dadaizm-moodboard/"]);
paramorph.tags["dadaizm"].posts.push(paramorph.posts["/2018-04-05-dadaizm-moodboard/"]);
paramorph.tags["moodboard"].posts.push(paramorph.posts["/2018-04-05-dadaizm-moodboard/"]);
paramorph.tags["sztuka"].posts.push(paramorph.posts["/2018-04-05-dadaizm-moodboard/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-04-05-dadaizm-moodboard/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2018-04-05-dadaizm-moodboard/"]);
paramorph.tags["tristan tzara"].posts.push(paramorph.posts["/2018-04-05-dadaizm-moodboard/"]);
paramorph.tags["mark rothko"].posts.push(paramorph.posts["/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy/"]);
paramorph.tags["makeup"].posts.push(paramorph.posts["/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy/"]);
paramorph.tags["makijaż"].posts.push(paramorph.posts["/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy/"]);
paramorph.tags["artysta"].posts.push(paramorph.posts["/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy/"]);
paramorph.tags["dzieło"].posts.push(paramorph.posts["/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy/"]);
paramorph.tags["kreacja"].posts.push(paramorph.posts["/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy/"]);

// LAYOUT LOADERS //
paramorph.addLayoutLoader("ParrotLayout", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "./_layouts/ParrotLayout.js")).then(exports => asReactComponent(exports, "./_layouts/ParrotLayout.js")));
paramorph.addLayoutLoader("default", () => __webpack_require__.e(/* import() */ 118).then(__webpack_require__.t.bind(null, "./_layouts/default.js", 7)).then(exports => asReactComponent(exports, "./_layouts/default.js")));

// INCLUDE LOADERS //
paramorph.addIncludeLoader("Crumbs", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(112)]).then(__webpack_require__.bind(null, "./_includes/Crumbs.js")).then(exports => asReactComponent(exports, "./_includes/Crumbs.js")));
paramorph.addIncludeLoader("Feed", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(113)]).then(__webpack_require__.bind(null, "./_includes/Feed.js")).then(exports => asReactComponent(exports, "./_includes/Feed.js")));
paramorph.addIncludeLoader("Ingredient", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(114)]).then(__webpack_require__.bind(null, "./_includes/Ingredient.js")).then(exports => asReactComponent(exports, "./_includes/Ingredient.js")));
paramorph.addIncludeLoader("Method", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(115)]).then(__webpack_require__.bind(null, "./_includes/Method.js")).then(exports => asReactComponent(exports, "./_includes/Method.js")));
paramorph.addIncludeLoader("Recipe", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(116)]).then(__webpack_require__.bind(null, "./_includes/Recipe.js")).then(exports => asReactComponent(exports, "./_includes/Recipe.js")));
paramorph.addIncludeLoader("TableOfContents", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(117)]).then(__webpack_require__.bind(null, "./_includes/TableOfContents.js")).then(exports => asReactComponent(exports, "./_includes/TableOfContents.js")));

// CONTENT LOADERS //
paramorph.addContentLoader("/sztuka-dla-sztuki/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.t.bind(null, "./_categories/sztuka-dla-sztuki.markdown", 7)).then(exports => asReactComponent(exports, "./_categories/sztuka-dla-sztuki.markdown")));
paramorph.addContentLoader("/sztuka-makijazu/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.t.bind(null, "./_categories/sztuka-makijazu.markdown", 7)).then(exports => asReactComponent(exports, "./_categories/sztuka-makijazu.markdown")));
paramorph.addContentLoader("/sztuka-ubioru/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.t.bind(null, "./_categories/sztuka-ubioru.markdown", 7)).then(exports => asReactComponent(exports, "./_categories/sztuka-ubioru.markdown")));
paramorph.addContentLoader("/404/", () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.t.bind(null, "./_pages/404.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/404.markdown")));
paramorph.addContentLoader("/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.t.bind(null, "./_pages/index.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/index.markdown")));
paramorph.addContentLoader("/kontakt/", () => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.t.bind(null, "./_pages/kontakt.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/kontakt.markdown")));
paramorph.addContentLoader("/sitemap/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.t.bind(null, "./_pages/sitemap.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/sitemap.markdown")));
paramorph.addContentLoader("/sztuka-uniwersalna/", () => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.t.bind(null, "./_pages/sztuka-uniwersalna.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/sztuka-uniwersalna.markdown")));
paramorph.addContentLoader("/tag/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/2017-07-15-uniwersalnosc-sztuki/", () => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.t.bind(null, "./_posts/2017-07-15-uniwersalno-sztuki.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-07-15-uniwersalno-sztuki.markdown")));
paramorph.addContentLoader("/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla/", () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.t.bind(null, "./_posts/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-09-07-wenus-chanel-nowa-dziewczyna-z-perla.markdown")));
paramorph.addContentLoader("/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor/", () => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.t.bind(null, "./_posts/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-09-11-make-up-inspirowany-obrazem-m64-by-wojciech-fangor.markdown")));
paramorph.addContentLoader("/2017-09-18-fuerteventura-impressions/", () => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.t.bind(null, "./_posts/2017-09-18-fuerteventura-impressions.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-09-18-fuerteventura-impressions.markdown")));
paramorph.addContentLoader("/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor/", () => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.t.bind(null, "./_posts/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-09-21-make-up-inspirowany-obrazem-m10-by-wojciech-fangor.markdown")));
paramorph.addContentLoader("/2017-09-25-podlewaj-swoje-kwiaty/", () => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.t.bind(null, "./_posts/2017-09-25-podlewaj-swoje-kwiaty.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-09-25-podlewaj-swoje-kwiaty.markdown")));
paramorph.addContentLoader("/2017-09-28-neoplastycyzm-moodboard/", () => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.t.bind(null, "./_posts/2017-09-28-neoplastycyzm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-09-28-neoplastycyzm-moodboard.markdown")));
paramorph.addContentLoader("/2017-10-03-cala-ta-j-dot-dot-dot/", () => __webpack_require__.e(/* import() */ 21).then(__webpack_require__.t.bind(null, "./_posts/2017-10-03-cala-ta-j-dot-dot-dot.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-10-03-cala-ta-j-dot-dot-dot.markdown")));
paramorph.addContentLoader("/2017-10-05-kolo-moodboard/", () => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.t.bind(null, "./_posts/2017-10-05-kolo-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-10-05-kolo-moodboard.markdown")));
paramorph.addContentLoader("/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama/", () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.t.bind(null, "./_posts/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-10-10-make-up-inspirowany-obrazem-flying-eyes-by-yayoi-kusama.markdown")));
paramorph.addContentLoader("/2017-10-12-pop-art-moodboard/", () => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.t.bind(null, "./_posts/2017-10-12-pop-art-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-10-12-pop-art-moodboard.markdown")));
paramorph.addContentLoader("/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy/", () => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.t.bind(null, "./_posts/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-10-18-stylizacje-za-grosze-czyli-pokochaj-lumpeksy.markdown")));
paramorph.addContentLoader("/2017-10-19-minimalism-moodboard/", () => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.t.bind(null, "./_posts/2017-10-19-minimalism-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-10-19-minimalism-moodboard.markdown")));
paramorph.addContentLoader("/2017-10-25-kolaz-okladek/", () => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.t.bind(null, "./_posts/2017-10-25-kolaz-okladek.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-10-25-kolaz-okladek.markdown")));
paramorph.addContentLoader("/2017-10-26-kubizm-moodboard/", () => __webpack_require__.e(/* import() */ 28).then(__webpack_require__.t.bind(null, "./_posts/2017-10-26-kubizm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-10-26-kubizm-moodboard.markdown")));
paramorph.addContentLoader("/2017-11-02-surrealizm-moodboard/", () => __webpack_require__.e(/* import() */ 29).then(__webpack_require__.t.bind(null, "./_posts/2017-11-02-surrealizm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-11-02-surrealizm-moodboard.markdown")));
paramorph.addContentLoader("/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle/", () => __webpack_require__.e(/* import() */ 30).then(__webpack_require__.t.bind(null, "./_posts/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle-by-kazimierz-malewicz.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-11-07-make-up-inspirowany-obrazem-czarny-kwadrat-na-bialym-tle-by-kazimierz-malewicz.markdown")));
paramorph.addContentLoader("/2017-11-09-action-painting-moodboard/", () => __webpack_require__.e(/* import() */ 31).then(__webpack_require__.t.bind(null, "./_posts/2017-11-09-action-painting-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-11-09-action-painting-moodboard.markdown")));
paramorph.addContentLoader("/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie/", () => __webpack_require__.e(/* import() */ 32).then(__webpack_require__.t.bind(null, "./_posts/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-11-13-picasso-wizerunek-wielokrotny-muzeum-lubelskie-w-lublinie.markdown")));
paramorph.addContentLoader("/2017-11-16-impresjonizm-moodboard/", () => __webpack_require__.e(/* import() */ 33).then(__webpack_require__.t.bind(null, "./_posts/2017-11-16-impresjonizm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-11-16-impresjonizm-moodboard.markdown")));
paramorph.addContentLoader("/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro/", () => __webpack_require__.e(/* import() */ 34).then(__webpack_require__.t.bind(null, "./_posts/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-11-30-make-up-inspirowany-obrazem-figure-dog-birds-by-joan-miro.markdown")));
paramorph.addContentLoader("/2017-12-07-op-art-moodboard/", () => __webpack_require__.e(/* import() */ 35).then(__webpack_require__.t.bind(null, "./_posts/2017-12-07-op-art-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-12-07-op-art-moodboard.markdown")));
paramorph.addContentLoader("/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art/", () => __webpack_require__.e(/* import() */ 36).then(__webpack_require__.t.bind(null, "./_posts/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art-w-europie-wschodniej-i-ameryce-lacinskiej-w-latach-50-70.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-12-11-wystawa-inny-trans-atlantyk-sztuka-kinetyczna-i-op-art-w-europie-wschodniej-i-ameryce-lacinskiej-w-latach-50-70.markdown")));
paramorph.addContentLoader("/2017-12-17-o-kolorach-fiolet/", () => __webpack_require__.e(/* import() */ 37).then(__webpack_require__.t.bind(null, "./_posts/2017-12-17-o-kolorach-fiolet.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-12-17-o-kolorach-fiolet.markdown")));
paramorph.addContentLoader("/2017-12-21-moje-wybory-grudzien/", () => __webpack_require__.e(/* import() */ 38).then(__webpack_require__.t.bind(null, "./_posts/2017-12-21-moje-wybory-grudzien.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-12-21-moje-wybory-grudzien.markdown")));
paramorph.addContentLoader("/2017-12-31-kolagen/", () => __webpack_require__.e(/* import() */ 39).then(__webpack_require__.t.bind(null, "./_posts/2017-12-31-kolagen.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2017-12-31-kolagen.markdown")));
paramorph.addContentLoader("/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard/", () => __webpack_require__.e(/* import() */ 40).then(__webpack_require__.t.bind(null, "./_posts/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-01-04-ekspresjonizm-abstrakcyjny-moodboard.markdown")));
paramorph.addContentLoader("/2018-01-14-o-kolorach-czerwien-cz-dot-1/", () => __webpack_require__.e(/* import() */ 41).then(__webpack_require__.t.bind(null, "./_posts/2018-01-14-o-kolorach-czerwien-cz-dot-1.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-01-14-o-kolorach-czerwien-cz-dot-1.markdown")));
paramorph.addContentLoader("/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler/", () => __webpack_require__.e(/* import() */ 42).then(__webpack_require__.t.bind(null, "./_posts/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-01-22-make-up-inspirowany-obrazem-tutti-frutti-by-helen-frankenthaler.markdown")));
paramorph.addContentLoader("/2018-01-24-moje-wybory-styczen/", () => __webpack_require__.e(/* import() */ 43).then(__webpack_require__.t.bind(null, "./_posts/2018-01-24-moje-wybory-styczen.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-01-24-moje-wybory-styczen.markdown")));
paramorph.addContentLoader("/2018-01-31-wystawa-david-lynch-silence-and-dynamism/", () => __webpack_require__.e(/* import() */ 44).then(__webpack_require__.t.bind(null, "./_posts/2018-01-31-wystawa-david-lynch-silence-and-dynamism.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-01-31-wystawa-david-lynch-silence-and-dynamism.markdown")));
paramorph.addContentLoader("/2018-02-08-rokoko-moodboard/", () => __webpack_require__.e(/* import() */ 45).then(__webpack_require__.t.bind(null, "./_posts/2018-02-08-rokoko-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-02-08-rokoko-moodboard.markdown")));
paramorph.addContentLoader("/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso/", () => __webpack_require__.e(/* import() */ 46).then(__webpack_require__.t.bind(null, "./_posts/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-02-11-make-up-inspirowany-obrazem-dove-with-sun-by-pablo-picasso.markdown")));
paramorph.addContentLoader("/2018-02-18-o-narkotykach-xxi-wieku/", () => __webpack_require__.e(/* import() */ 47).then(__webpack_require__.t.bind(null, "./_posts/2018-02-18-o-narkotykach-xxi-wieku.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-02-18-o-narkotykach-xxi-wieku.markdown")));
paramorph.addContentLoader("/2018-02-21-o-kolorach-biel-cz-dot-1/", () => __webpack_require__.e(/* import() */ 48).then(__webpack_require__.t.bind(null, "./_posts/2018-02-21-o-kolorach-biel-cz-dot-1.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-02-21-o-kolorach-biel-cz-dot-1.markdown")));
paramorph.addContentLoader("/2018-02-26-moje-wybory-luty/", () => __webpack_require__.e(/* import() */ 49).then(__webpack_require__.t.bind(null, "./_posts/2018-02-26-moje-wybory-luty.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-02-26-moje-wybory-luty.markdown")));
paramorph.addContentLoader("/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji/", () => __webpack_require__.e(/* import() */ 50).then(__webpack_require__.t.bind(null, "./_posts/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji-spolecznych-po-roku-1918.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-02-28-wystawa-przyszlosc-bedzie-inna-wizje-i-praktyki-modernizacji-spolecznych-po-roku-1918.markdown")));
paramorph.addContentLoader("/2018-03-08-socrealizm-moodboard/", () => __webpack_require__.e(/* import() */ 51).then(__webpack_require__.t.bind(null, "./_posts/2018-03-08-socrealizm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-03-08-socrealizm-moodboard.markdown")));
paramorph.addContentLoader("/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman/", () => __webpack_require__.e(/* import() */ 55).then(__webpack_require__.t.bind(null, "./_posts/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-04-15-make-up-inspirowany-obrazem-onement-vi-by-barnett-newman.markdown")));
paramorph.addContentLoader("/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest/", () => __webpack_require__.e(/* import() */ 56).then(__webpack_require__.t.bind(null, "./_posts/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-04-24-wystawa-komunikacja-ze-wszystkim-co-jest.markdown")));
paramorph.addContentLoader("/2018-04-29-stylizacje-w-trendach-ss-2018/", () => __webpack_require__.e(/* import() */ 57).then(__webpack_require__.t.bind(null, "./_posts/2018-04-29-stylizacje-w-trendach-ss-2018.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-04-29-stylizacje-w-trendach-ss-2018.markdown")));
paramorph.addContentLoader("/2018-05-02-moje-wybory-kwiecien/", () => __webpack_require__.e(/* import() */ 58).then(__webpack_require__.t.bind(null, "./_posts/2018-05-02-moje-wybory-kwiecien.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-05-02-moje-wybory-kwiecien.markdown")));
paramorph.addContentLoader("/2018-05-10-puentylizm-pointylizm-moodboard/", () => __webpack_require__.e(/* import() */ 59).then(__webpack_require__.t.bind(null, "./_posts/2018-05-10-puentylizm-pointylizm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-05-10-puentylizm-pointylizm-moodboard.markdown")));
paramorph.addContentLoader("/2018-05-14-oswoic-lek/", () => __webpack_require__.e(/* import() */ 60).then(__webpack_require__.t.bind(null, "./_posts/2018-05-14-oswoic-lek.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-05-14-oswoic-lek.markdown")));
paramorph.addContentLoader("/2018-05-20-o-kolorach-roz/", () => __webpack_require__.e(/* import() */ 61).then(__webpack_require__.t.bind(null, "./_posts/2018-05-20-o-kolorach-roz.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-05-20-o-kolorach-roz.markdown")));
paramorph.addContentLoader("/2018-05-29-moje-wybory-maj/", () => __webpack_require__.e(/* import() */ 62).then(__webpack_require__.t.bind(null, "./_posts/2018-05-29-moje-wybory-maj.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-05-29-moje-wybory-maj.markdown")));
paramorph.addContentLoader("/2018-06-05-jestem-wdzieczna-ci-zycie/", () => __webpack_require__.e(/* import() */ 63).then(__webpack_require__.t.bind(null, "./_posts/2018-06-05-jestem-wdzieczna-ci-zycie.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-06-05-jestem-wdzieczna-ci-zycie.markdown")));
paramorph.addContentLoader("/2018-06-07-hiperrealizm-moodboard/", () => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.t.bind(null, "./_posts/2018-06-07-hiperrealizm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-06-07-hiperrealizm-moodboard.markdown")));
paramorph.addContentLoader("/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy/", () => __webpack_require__.e(/* import() */ 65).then(__webpack_require__.t.bind(null, "./_posts/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-06-27-rgb-trzy-stylizacje-z-mojej-szafy.markdown")));
paramorph.addContentLoader("/2018-07-05-abstrakcja-geometryczna-moodboard/", () => __webpack_require__.e(/* import() */ 66).then(__webpack_require__.t.bind(null, "./_posts/2018-07-05-abstrakcja-geometryczna-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-07-05-abstrakcja-geometryczna-moodboard.markdown")));
paramorph.addContentLoader("/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse/", () => __webpack_require__.e(/* import() */ 67).then(__webpack_require__.t.bind(null, "./_posts/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-07-13-make-up-inspirowany-obrazem-blue-nude-ii-by-henri-matisse.markdown")));
paramorph.addContentLoader("/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1/", () => __webpack_require__.e(/* import() */ 68).then(__webpack_require__.t.bind(null, "./_posts/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-07-27-moje-wybory-czerwiec-slash-lipiec-cz-dot-1.markdown")));
paramorph.addContentLoader("/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2/", () => __webpack_require__.e(/* import() */ 69).then(__webpack_require__.t.bind(null, "./_posts/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-07-30-moje-wybory-czerwiec-slash-lipiec-cz-dot-2.markdown")));
paramorph.addContentLoader("/2018-08-09-secesja-moodboard/", () => __webpack_require__.e(/* import() */ 70).then(__webpack_require__.t.bind(null, "./_posts/2018-08-09-secesja-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-08-09-secesja-moodboard.markdown")));
paramorph.addContentLoader("/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri/", () => __webpack_require__.e(/* import() */ 71).then(__webpack_require__.t.bind(null, "./_posts/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri-matisse.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-08-15-make-up-inspirowany-obrazem-circus-from-jazz-book-by-henri-matisse.markdown")));
paramorph.addContentLoader("/2018-08-22-wystawa-handmade-acoustics/", () => __webpack_require__.e(/* import() */ 72).then(__webpack_require__.t.bind(null, "./_posts/2018-08-22-wystawa-handmade-acoustics.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-08-22-wystawa-handmade-acoustics.markdown")));
paramorph.addContentLoader("/2018-08-31-moje-wybory-sierpien/", () => __webpack_require__.e(/* import() */ 73).then(__webpack_require__.t.bind(null, "./_posts/2018-08-31-moje-wybory-sierpien.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-08-31-moje-wybory-sierpien.markdown")));
paramorph.addContentLoader("/2018-09-06-futuryzm-moodboard/", () => __webpack_require__.e(/* import() */ 74).then(__webpack_require__.t.bind(null, "./_posts/2018-09-06-futuryzm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-09-06-futuryzm-moodboard.markdown")));
paramorph.addContentLoader("/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort/", () => __webpack_require__.e(/* import() */ 75).then(__webpack_require__.t.bind(null, "./_posts/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort-cruise-co-to-wszystko-znaczy-plus-fw-trends-2018-slash-2019.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-09-09-pre-fall-fall-slash-winter-spring-slash-summer-resort-cruise-co-to-wszystko-znaczy-plus-fw-trends-2018-slash-2019.markdown")));
paramorph.addContentLoader("/2018-09-21-o-kolorach-czern/", () => __webpack_require__.e(/* import() */ 76).then(__webpack_require__.t.bind(null, "./_posts/2018-09-21-o-kolorach-czern.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-09-21-o-kolorach-czern.markdown")));
paramorph.addContentLoader("/2018-09-27-moje-wybory-wrzesien-2018/", () => __webpack_require__.e(/* import() */ 77).then(__webpack_require__.t.bind(null, "./_posts/2018-09-27-moje-wybory-wrzesien-2018.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-09-27-moje-wybory-wrzesien-2018.markdown")));
paramorph.addContentLoader("/2018-10-02-wystawa-bestia-bog-i-linia/", () => __webpack_require__.e(/* import() */ 78).then(__webpack_require__.t.bind(null, "./_posts/2018-10-02-wystawa-bestia-bog-i-linia.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-10-02-wystawa-bestia-bog-i-linia.markdown")));
paramorph.addContentLoader("/2018-10-04-manieryzm-moodboard/", () => __webpack_require__.e(/* import() */ 79).then(__webpack_require__.t.bind(null, "./_posts/2018-10-04-manieryzm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-10-04-manieryzm-moodboard.markdown")));
paramorph.addContentLoader("/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily/", () => __webpack_require__.e(/* import() */ 80).then(__webpack_require__.t.bind(null, "./_posts/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily-kandinsky.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-10-10-make-up-inspirowany-obrazem-kompozycja-viii-by-wassily-kandinsky.markdown")));
paramorph.addContentLoader("/2018-10-24-moje-wybory-pazdziernik-2018/", () => __webpack_require__.e(/* import() */ 81).then(__webpack_require__.t.bind(null, "./_posts/2018-10-24-moje-wybory-pazdziernik-2018.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-10-24-moje-wybory-pazdziernik-2018.markdown")));
paramorph.addContentLoader("/2018-10-28-smierc-doroslego/", () => __webpack_require__.e(/* import() */ 82).then(__webpack_require__.t.bind(null, "./_posts/2018-10-28-smierc-doroslego.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-10-28-smierc-doroslego.markdown")));
paramorph.addContentLoader("/2018-10-31-kamp-moodboard/", () => __webpack_require__.e(/* import() */ 83).then(__webpack_require__.t.bind(null, "./_posts/2018-10-31-kamp-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-10-31-kamp-moodboard.markdown")));
paramorph.addContentLoader("/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe/", () => __webpack_require__.e(/* import() */ 84).then(__webpack_require__.t.bind(null, "./_posts/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-11-07-make-up-inspirowany-obrazem-light-of-iris-by-georgia-okeeffe.markdown")));
paramorph.addContentLoader("/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu/", () => __webpack_require__.e(/* import() */ 85).then(__webpack_require__.t.bind(null, "./_posts/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-11-15-historia-pewnej-projektantki-czyli-perelka-z-lumpeksu.markdown")));
paramorph.addContentLoader("/2018-11-22-wystawa-moda-polska/", () => __webpack_require__.e(/* import() */ 86).then(__webpack_require__.t.bind(null, "./_posts/2018-11-22-wystawa-moda-polska.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-11-22-wystawa-moda-polska.markdown")));
paramorph.addContentLoader("/2018-11-28-moje-wybory-listopad-2018/", () => __webpack_require__.e(/* import() */ 87).then(__webpack_require__.t.bind(null, "./_posts/2018-11-28-moje-wybory-listopad-2018.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-11-28-moje-wybory-listopad-2018.markdown")));
paramorph.addContentLoader("/2018-12-06-fluxus-moodboard/", () => __webpack_require__.e(/* import() */ 88).then(__webpack_require__.t.bind(null, "./_posts/2018-12-06-fluxus-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-12-06-fluxus-moodboard.markdown")));
paramorph.addContentLoader("/2018-12-13-o-smierci/", () => __webpack_require__.e(/* import() */ 89).then(__webpack_require__.t.bind(null, "./_posts/2018-12-13-o-smierci.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-12-13-o-smierci.markdown")));
paramorph.addContentLoader("/2018-12-28-stop-2018-start-2019/", () => __webpack_require__.e(/* import() */ 90).then(__webpack_require__.t.bind(null, "./_posts/2018-12-28-stop-2018-start-2019.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-12-28-stop-2018-start-2019.markdown")));
paramorph.addContentLoader("/2019-01-03-moje-wybory-grudzien-2018/", () => __webpack_require__.e(/* import() */ 91).then(__webpack_require__.t.bind(null, "./_posts/2019-01-03-moje-wybory-grudzien-2018.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-01-03-moje-wybory-grudzien-2018.markdown")));
paramorph.addContentLoader("/2019-01-10-barok-moodboard/", () => __webpack_require__.e(/* import() */ 92).then(__webpack_require__.t.bind(null, "./_posts/2019-01-10-barok-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-01-10-barok-moodboard.markdown")));
paramorph.addContentLoader("/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet/", () => __webpack_require__.e(/* import() */ 93).then(__webpack_require__.t.bind(null, "./_posts/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet-mondrian.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-01-24-make-up-inspirowany-obrazem-victory-boogie-woogie-by-piet-mondrian.markdown")));
paramorph.addContentLoader("/2019-01-30-moje-wybory-styczen-2019/", () => __webpack_require__.e(/* import() */ 94).then(__webpack_require__.t.bind(null, "./_posts/2019-01-30-moje-wybory-styczen-2019.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-01-30-moje-wybory-styczen-2019.markdown")));
paramorph.addContentLoader("/2019-02-07-prymitywizm-sztuka-naiwna-moodboard/", () => __webpack_require__.e(/* import() */ 95).then(__webpack_require__.t.bind(null, "./_posts/2019-02-07-prymitywizm-sztuka-naiwna-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-02-07-prymitywizm-sztuka-naiwna-moodboard.markdown")));
paramorph.addContentLoader("/2019-03-07-romantyzm-moodboard/", () => __webpack_require__.e(/* import() */ 96).then(__webpack_require__.t.bind(null, "./_posts/2019-03-07-romantyzm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-03-07-romantyzm-moodboard.markdown")));
paramorph.addContentLoader("/2019-03-17-o-kolorach-niebieski-cz-dot-1/", () => __webpack_require__.e(/* import() */ 97).then(__webpack_require__.t.bind(null, "./_posts/2019-03-17-o-kolorach-niebieski-cz-dot-1.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-03-17-o-kolorach-niebieski-cz-dot-1.markdown")));
paramorph.addContentLoader("/2019-03-20-o-kolorach-niebieski-cz-dot-2/", () => __webpack_require__.e(/* import() */ 98).then(__webpack_require__.t.bind(null, "./_posts/2019-03-20-o-kolorach-niebieski-cz-dot-2.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-03-20-o-kolorach-niebieski-cz-dot-2.markdown")));
paramorph.addContentLoader("/2019-03-29-moje-wybory-luty-marzec-2019/", () => __webpack_require__.e(/* import() */ 99).then(__webpack_require__.t.bind(null, "./_posts/2019-03-29-moje-wybory-luty-marzec-2019.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-03-29-moje-wybory-luty-marzec-2019.markdown")));
paramorph.addContentLoader("/2019-04-04-symbolizm-moodboard/", () => __webpack_require__.e(/* import() */ 100).then(__webpack_require__.t.bind(null, "./_posts/2019-04-04-symbolizm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-04-04-symbolizm-moodboard.markdown")));
paramorph.addContentLoader("/2019-04-23-wystawa-syntetyczny-folklor/", () => __webpack_require__.e(/* import() */ 101).then(__webpack_require__.t.bind(null, "./_posts/2019-04-23-wystawa-syntetyczny-folklor.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-04-23-wystawa-syntetyczny-folklor.markdown")));
paramorph.addContentLoader("/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake/", () => __webpack_require__.e(/* import() */ 102).then(__webpack_require__.t.bind(null, "./_posts/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-05-10-make-up-inspirowany-obrazem-m64-by-wojciech-fangor-remake.markdown")));
paramorph.addContentLoader("/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka/", () => __webpack_require__.e(/* import() */ 103).then(__webpack_require__.t.bind(null, "./_posts/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-05-18-make-up-inspirowany-obrazem-zielony-turban-by-tamara-lempicka.markdown")));
paramorph.addContentLoader("/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent/", () => __webpack_require__.e(/* import() */ 104).then(__webpack_require__.t.bind(null, "./_posts/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent-van-gogh.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-06-28-make-up-inspirowany-obrazem-gwiazdzista-noc-by-vincent-van-gogh.markdown")));
paramorph.addContentLoader("/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe/", () => __webpack_require__.e(/* import() */ 105).then(__webpack_require__.t.bind(null, "./_posts/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe-by-andy-warhol.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-07-10-make-up-inspirowany-obrazem-untitled-from-marilyn-monroe-by-andy-warhol.markdown")));
paramorph.addContentLoader("/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van/", () => __webpack_require__.e(/* import() */ 106).then(__webpack_require__.t.bind(null, "./_posts/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van-gogh.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-07-26-8-zasad-osiagania-sukcesu-ktorych-nie-znal-vincent-van-gogh.markdown")));
paramorph.addContentLoader("/2019-08-06-jablko/", () => __webpack_require__.e(/* import() */ 107).then(__webpack_require__.t.bind(null, "./_posts/2019-08-06-jablko.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-08-06-jablko.markdown")));
paramorph.addContentLoader("/2019-09-10-frida-kahlo/", () => __webpack_require__.e(/* import() */ 108).then(__webpack_require__.t.bind(null, "./_posts/2019-09-10-frida-kahlo.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-09-10-frida-kahlo.markdown")));
paramorph.addContentLoader("/2019-09-22-feniks/", () => __webpack_require__.e(/* import() */ 109).then(__webpack_require__.t.bind(null, "./_posts/2019-09-22-feniks.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-09-22-feniks.markdown")));
paramorph.addContentLoader("/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali/", () => __webpack_require__.e(/* import() */ 110).then(__webpack_require__.t.bind(null, "./_posts/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-11-03-make-up-inspirowany-tworczoscia-artysty-salvador-dali.markdown")));
paramorph.addContentLoader("/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt/", () => __webpack_require__.e(/* import() */ 111).then(__webpack_require__.t.bind(null, "./_posts/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2019-11-24-make-up-inspirowany-tworczoscia-artysty-gustav-klimt.markdown")));
paramorph.addContentLoader("/2018-04-07-moje-wybory-marzec/", () => __webpack_require__.e(/* import() */ 54).then(__webpack_require__.t.bind(null, "./_posts/2018-04-07-moje-wybory-marzec.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-04-07-moje-wybory-marzec.markdown")));
paramorph.addContentLoader("/2018-04-05-dadaizm-moodboard/", () => __webpack_require__.e(/* import() */ 53).then(__webpack_require__.t.bind(null, "./_posts/2018-04-05-dadaizm-moodboard.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-04-05-dadaizm-moodboard.markdown")));
paramorph.addContentLoader("/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy/", () => __webpack_require__.e(/* import() */ 52).then(__webpack_require__.t.bind(null, "./_posts/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy-lawendowy-by-mark-rothko.markdown", 7)).then(exports => asReactComponent(exports, "./_posts/2018-03-26-make-up-inspirowany-obrazem-bialy-srodek-zolty-rozowy-lawendowy-by-mark-rothko.markdown")));
paramorph.addContentLoader("/tags/sztuka/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/współczesna/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/abstrakcja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/inspiracje/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/makijaż/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/ubiór/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/moda/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/projektanci/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/domy-mody/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/index/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/uniwersalna/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kreacja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/gotowanie/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/moodboard/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/artysta/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/art/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/sitemap/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/dla-bota/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/olela/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/blog/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/artist/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/dzieło/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/chanel/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/perły/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/wenus/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fangor/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/makeup/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/obraz/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/podróż/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/wyspa/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fuerteventura/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/szkic/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/stylizacja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kwiat/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/neoplasticism/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kierunek/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/jesień/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/circle/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/koło/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/symbol/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kusama/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/yayoi/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/popart/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/pop/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/taniaodzież/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/lumpeks/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/tania/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fashion/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/minimalizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/minimalism/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/minimal/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kolaż/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kubizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/cubism/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/surrealizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/surrealism/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/nadrealizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/malewicz/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/suprematyzm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kwadrat/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/action/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/painting/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/pollock/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/wystawa/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/exhibition/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/picasso/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/lublin/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/recenzja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/grafika/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/impresjonizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/impressionism/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/monet/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/miro/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/opart/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/optical/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kineticart/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/muzeum/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kolor/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fiolet/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/pantone/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/cmyk/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/rgb/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/wybory/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/zima/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/perfumy/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/książka/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kosmetyk/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/torebka/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kolagen/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kobieta/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/portret/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/ekspresjonizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/abstrakcyjny/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/ekspresja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/szkoła-nowojorska/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/czerwień/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/czerwony/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/helen-frankenthaler/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/styczeń/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/akcesoria/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/david-lynch/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/lynch/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/toruń/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/csw/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/rokoko/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/rococo/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/nurt/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/pablo-picasso/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/dove/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/sale/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/wyprzedaż/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/zakupy/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/shopping/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/glitter/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/biel/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/biały/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/luty/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/biżuteria/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/zachęta/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/warszawa/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/przyszłość/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/socrealizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/barnett-newman/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/abstract-expressionism/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/zip/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fundacja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/stefan-gierowski/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/sztuka-młodych/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/malarstwo/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/trendy/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/ss-2018/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/trends/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kwiecień/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/róż/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/krembb/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kwiaty/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/ogród/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/paperbag/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/stradivarius/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/wiosna/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/puentylizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/pointylizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/lęk/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fear/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/autoterapia/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/różowy/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/pink/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/marilyn-monroe/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/elsa-schiaparelli/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/choices/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kosmetyki/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kat-von-d/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/skin79/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/nosowska/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/wdzięczność/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/post/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/tekst/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/akademia/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/marzenia/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/cele/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/hiperrealizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fotorealizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/superrealizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/lem/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/geometria/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/sztuka-geometryczna/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kształty/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/henri-matisse/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fowizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/moje-wybory/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/ulubieńcy/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/czerwiec/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/lipiec/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/lato/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/my-choices/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/secesja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/secessio/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/art-nouveau/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/klimt/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/schiele/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/gaudi/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/modernizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/jazz/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/jazz-book/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/art-book/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/design/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/collage/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/tori-wranes/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/handmade-acoustics/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/obiekt/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/rzeźba/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/instalacja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/site-specific/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/performance/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/marc-jacobs/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/michael-kors/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/dom-polski/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/futuryzm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/futurism/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/giacomo-balla/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fendi/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/gino-severini/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/pre-fall/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fall-winter/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/spring-summer/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/resort/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/cruise/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/collection/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/runway/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/show/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/o-kolorach/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/czerń/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/czarny/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/symbolika/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/znak/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/black/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/wrzesień/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kapelusz/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/azja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/manieryzm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/mannerism/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/wassily/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kandinsky/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/październik/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/autumn/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fenty-beauty/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/mcqueen/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/lirene/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kors/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kamp/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/camp/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/susan-sontag/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/georgia-o-keeffe/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/malarka/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/ameryka/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/arabella-pollen/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/designer/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/second-hand/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fall-1991-1992-london/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/moda-polska/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/jaskółka/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/antkowiak/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/piętro-iii/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/piętro-ii/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/black-red/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/listopad/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kolorówka/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/pielęgnacja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/lektura/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/fluxus/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/george-maciunas/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/yoko-ono/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/nam-june-paik/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/o-śmierci/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/anioł/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/tekst-autorski/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/stop/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/2018/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/start/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/2019/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/nowy-rok/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kalendarz/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/radzka/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/nars/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/algenist/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/barok/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/rembrandt/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/caravaggio/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/vermeer/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/velázquez/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/bernini/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/piet-mondrian/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/mondrian/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/boogie-woogie/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/the-beginning/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/paris/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/netherlands/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/new-york/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/victory-boogie-woogie/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/1944/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/prymitywizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/sztuka-naiwna/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/rousseau/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/gauguin/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/nikifor/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/dwurnik/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/romantyzm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/romanticism/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/blue/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/błękit/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/niebieski/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/jeffree-star/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/chromoterapia/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/ikb/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/yves-klein/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/blue-monday/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/marzec/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kolczyki/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/symbolizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/symbolisme/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/bocklin/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/moreau/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/khnopff/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/mehoffer/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/malczewski/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/wyspiański/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/syntetyczny-folklor/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/sztuczna-inteligencja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/cyfrowy-materializm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/postmodernizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/geografia-kulturowa/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/nowy-uniwersalizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/nollywood/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/m64/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/oa/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/the-oa/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kolektywne-sny/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/tamara-łempicka/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/turban/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/vincent/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/van-gogh/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/arles/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/ucho/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/żółty-dom/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/saint-remy/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/the-starry-night/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/andy-warhol/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/warhol/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/hollywood/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kariera/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/sukces/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/motywacja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/cel/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/dyscyplina/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/jabłko/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/miłość/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/uczucia/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/sztuka-miłości/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/frida-kahlo/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/frida/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kahlo/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/autobus/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/diego/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/diego-rivera/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/cierpienie/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/budda/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/feniks/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/poezja/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/kiedy-odchodzę/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/salvador/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/dali/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/gustav-klimt/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/pocałunek/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/vogue/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/clochee/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/moov/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/dada/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/dadaizm/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/tristan-tzara/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));
paramorph.addContentLoader("/tags/mark-rothko/", () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, "./_pages/tag.markdown", 7)).then(exports => asReactComponent(exports, "./_pages/tag.markdown")));

// UTIL FUNCTIONS
function asReactComponent(exports, url) {
  if (exports.default === undefined) {
    throw new Error(url +' must have a default export');
  }
  const candidate = exports.default;

  if (React.isValidElement(candidate) && typeof candidate.type === 'function') {
    const got = JSON.stringify(candidate);
    throw new Error(url +' must have react component as default export; got '+ got);
  }
  return exports.default;
}

;
module.exports.default = paramorph;


/***/ }),

/***/ "./node_modules/events/events.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/history/esm/history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/resolve-pathname/index.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);
// CONCATENATED MODULE: ./node_modules/value-equal/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);
// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ var tiny_invariant_esm = (invariant);

// CONCATENATED MODULE: ./node_modules/history/esm/history.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? undefined : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? undefined : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? undefined : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? undefined : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/paramorph/boot/ClientRenderer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var ReactDom = __webpack_require__("react-dom");
var react_1 = __webpack_require__("./node_modules/paramorph/react/index.js");
var ClientRenderer = /** @class */ (function () {
    function ClientRenderer(history, pathParams, router, paramorph) {
        this.history = history;
        this.pathParams = pathParams;
        this.router = router;
        this.paramorph = paramorph;
    }
    ClientRenderer.prototype.render = function (container, preloadUrls) {
        var _this = this;
        var _a = this, history = _a.history, paramorph = _a.paramorph;
        var posts = paramorph.posts;
        var notFound = posts['/404/'];
        var unlisten = history.listen(function (location) {
            _this.resolve(location.pathname, container);
        });
        // window.addEventListener('unload', unlisten);
        var pathname = history.location.pathname;
        // We need to wait for content from paramorph-preload meta tags to be loaded
        // (same as server-side) in order to hydrate initial post without a warning.
        return Promise.all(preloadUrls.map(function (url) { return paramorph.loadContent(url); }))
            .then(function () { return _this.resolve(pathname, container); });
    };
    ClientRenderer.prototype.resolve = function (pathname, container) {
        var _this = this;
        var _a = this, router = _a.router, history = _a.history, pathParams = _a.pathParams, paramorph = _a.paramorph;
        return router.resolve(pathname)
            .then(function (post) { return __awaiter(_this, void 0, void 0, function () {
            var props, layout, LayoutComponent, PostComponent, postElem, layoutElem, appElem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = { history: history, pathParams: pathParams, paramorph: paramorph, post: post, requestParameterizedRender: requestParameterizedRender };
                        layout = paramorph.layouts[post.layout];
                        return [4 /*yield*/, paramorph.loadLayout(post.layout)];
                    case 1:
                        LayoutComponent = _a.sent();
                        return [4 /*yield*/, paramorph.loadContent(post.url)];
                    case 2:
                        PostComponent = _a.sent();
                        postElem = React.createElement(PostComponent);
                        layoutElem = React.createElement(LayoutComponent, {}, postElem);
                        appElem = React.createElement(react_1.ContextContainer, props, layoutElem);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                ReactDom.hydrate(appElem, container, function () { return resolve(); });
                            })];
                }
            });
        }); });
    };
    return ClientRenderer;
}());
exports.ClientRenderer = ClientRenderer;
exports.default = ClientRenderer;
function requestParameterizedRender() {
    // no op on client side
}


/***/ }),

/***/ "./node_modules/paramorph/boot/Router.js":
/***/ (function(module, exports, __webpack_require__) {

const UniversalRouter = __webpack_require__("./node_modules/universal-router/module.js");

module.exports = {
  'Router': UniversalRouter.default,
  'default': UniversalRouter.default,
};



/***/ }),

/***/ "./node_modules/paramorph/boot/ServerRenderer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var ReactDomServer = __webpack_require__("react-dom/server");
var react_1 = __webpack_require__("./node_modules/paramorph/react/index.js");
var ServerRenderer = /** @class */ (function () {
    function ServerRenderer(history, pathParams, paramorph) {
        this.history = history;
        this.pathParams = pathParams;
        this.paramorph = paramorph;
    }
    ServerRenderer.prototype.render = function (locals, assets) {
        return __awaiter(this, void 0, void 0, function () {
            // Helper function for rendering posts
            function renderPost(post, params, requestParameterizedRender, LayoutComponent, PostComponent) {
                pathParams.set(params);
                // Contains urls of posts which must be preloaded (client-side) in order to hydrate
                // initial state of current post. Each url must be rendered as paramorph-preload
                // meta tag in Root component from where it will be read in ClientRenderer.
                var preload = [];
                var proxy = createContentProxy(content, preload);
                Object.defineProperty(paramorph, 'content', {
                    get: function () { return proxy; },
                });
                // react root contents rendered with react ids
                var postElem = React.createElement(PostComponent);
                var layoutElem = React.createElement(LayoutComponent, {}, postElem);
                var appParams = { history: history, pathParams: pathParams, paramorph: paramorph, post: post, requestParameterizedRender: requestParameterizedRender };
                var appElem = React.createElement(react_1.ContextContainer, appParams, layoutElem);
                var body = ReactDomServer.renderToString(appElem);
                // site skeleton rendered without react ids
                var root = React.createElement(Root, __assign({}, rootProps, { post: post, preload: preload }));
                var html = ReactDomServer.renderToStaticMarkup(root);
                return '<!DOCTYPE html>\n' + html.replace("%%%BODY%%%", body);
            }
            var _a, paramorph, pathParams, history, Root, rootProps, posts, content, result, _loop_1, posts_1, posts_1_1, post, e_1_1;
            var e_1, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this, paramorph = _a.paramorph, pathParams = _a.pathParams, history = _a.history;
                        Root = locals.Root || react_1.Root;
                        rootProps = this.getRootProps(locals, assets);
                        posts = Object.keys(paramorph.posts)
                            .map(function (key) { return paramorph.posts[key]; })
                            .filter(function (post) { return post.output; });
                        // Preloading all content to be able to render posts containing content of other posts.
                        return [4 /*yield*/, Promise.all(posts.map(function (post) { return paramorph.loadContent(post.url); }))];
                    case 1:
                        // Preloading all content to be able to render posts containing content of other posts.
                        _c.sent();
                        content = paramorph.content;
                        result = {};
                        _loop_1 = function (post) {
                            var LayoutComponent, PostComponent, renderRequests, requestRender;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, paramorph.loadLayout(post.layout)];
                                    case 1:
                                        LayoutComponent = _a.sent();
                                        return [4 /*yield*/, paramorph.loadContent(post.url)];
                                    case 2:
                                        PostComponent = _a.sent();
                                        renderRequests = [];
                                        requestRender = function (params) { return renderRequests.push(params); };
                                        // First render
                                        result[post.url] = renderPost(post, {}, requestRender, LayoutComponent, PostComponent);
                                        // Parameterized renders
                                        renderRequests.forEach(function (params) {
                                            var url = Object.keys(params)
                                                .reduce(function (result, key) { return result.replace(new RegExp(":" + key + "(\\(.*\\)\\?)?"), params[key]); }, post.pathSpec)
                                                .replace(/\/:[^/:?]+\??(\/|$)/, '\/')
                                                .replace(/\/+/, '\/');
                                            result[url] = renderPost(post, params, noop, LayoutComponent, PostComponent);
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 7, 8, 9]);
                        posts_1 = __values(posts), posts_1_1 = posts_1.next();
                        _c.label = 3;
                    case 3:
                        if (!!posts_1_1.done) return [3 /*break*/, 6];
                        post = posts_1_1.value;
                        return [5 /*yield**/, _loop_1(post)];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        posts_1_1 = posts_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (posts_1_1 && !posts_1_1.done && (_b = posts_1.return)) _b.call(posts_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, result];
                }
            });
        });
    };
    ServerRenderer.prototype.getRootProps = function (locals, assets) {
        var paramorph = this.paramorph;
        var assetUrls = Object.keys(assets)
            // filtering out static generator entry point
            .filter(function (url) { return !url.match(/^server-.*\.js$/); })
            // filtering out async bundles
            .filter(function (url) { return !url.match(/^[0-9]+-.*\.js$/); })
            .map(function (url) { return "/" + url; });
        return {
            localBundles: {
                css: assetUrls.filter(function (value) { return value.match(/\.css$/); }),
                js: assetUrls.filter(function (value) { return value.match(/\.js$/); }),
            },
            externalBundles: {
                css: locals.css || [],
                js: locals.js || [],
            },
            paramorph: paramorph,
        };
    };
    return ServerRenderer;
}());
exports.ServerRenderer = ServerRenderer;
exports.default = ServerRenderer;
function createContentProxy(content, preload) {
    return new Proxy(content, {
        has: function (target, url) {
            return url in target;
        },
        get: function (target, url) {
            if (preload.indexOf(url) === -1) {
                preload.push(url);
            }
            return target[url];
        },
    });
}
function noop() {
    // no op
}


/***/ }),

/***/ "./node_modules/paramorph/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServerRenderer_1 = __webpack_require__("./node_modules/paramorph/boot/ServerRenderer.js");
exports.ServerRenderer = ServerRenderer_1.ServerRenderer;
var ClientRenderer_1 = __webpack_require__("./node_modules/paramorph/boot/ClientRenderer.js");
exports.ClientRenderer = ClientRenderer_1.ClientRenderer;
var Router_1 = __webpack_require__("./node_modules/paramorph/boot/Router.js");
exports.Router = Router_1.Router;


/***/ }),

/***/ "./node_modules/paramorph/entry/server.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var history_1 = __webpack_require__("./node_modules/history/esm/history.js");
var model_1 = __webpack_require__("./node_modules/paramorph/model/index.js");
var boot_1 = __webpack_require__("./node_modules/paramorph/boot/index.js");
var paramorph = __webpack_require__("./_config.yml").default;
var pathParams = new model_1.PathParams();
function render(locals, stats) {
    var history = history_1.createMemoryHistory();
    var renderer = new boot_1.ServerRenderer(history, pathParams, paramorph);
    return renderer.render(locals, stats.compilation.assets);
}
exports.render = render;
exports.default = render;


/***/ }),

/***/ "./node_modules/paramorph/model/Category.js":
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
var _1 = __webpack_require__("./node_modules/paramorph/model/index.js");
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category(pathSpec, title, description, image, collection, layout, source, output, feed, limit, categories, tags, timestamp) {
        var _this = _super.call(this, pathSpec, title, description, image, collection, layout, source, output, feed, limit, categories, tags, timestamp) || this;
        _this.posts = [];
        return _this;
    }
    return Category;
}(_1.Post));
exports.Category = Category;
exports.default = Category;


/***/ }),

/***/ "./node_modules/paramorph/model/Collection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Collection = /** @class */ (function () {
    function Collection(name, title, path, layout, output, limit) {
        this.name = name;
        this.title = title;
        this.path = path;
        this.layout = layout;
        this.output = output;
        this.limit = limit;
        this.posts = [];
    }
    return Collection;
}());
exports.Collection = Collection;
exports.default = Collection;


/***/ }),

/***/ "./node_modules/paramorph/model/Include.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Include = /** @class */ (function () {
    function Include(name, path) {
        this.name = name;
        this.path = path;
    }
    return Include;
}());
exports.Include = Include;
exports.default = Include;


/***/ }),

/***/ "./node_modules/paramorph/model/Layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Layout = /** @class */ (function () {
    function Layout(name, path) {
        this.name = name;
        this.path = path;
    }
    return Layout;
}());
exports.Layout = Layout;
exports.default = Layout;


/***/ }),

/***/ "./node_modules/paramorph/model/Paramorph.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./node_modules/paramorph/model/index.js");
var Paramorph = /** @class */ (function () {
    function Paramorph(config) {
        this.config = config;
        this.layouts = {};
        this.includes = {};
        this.posts = {};
        this.categories = {};
        this.tags = {};
        this.collections = {};
        this.layoutLoaders = {};
        this.includeLoaders = {};
        this.contentLoaders = {};
        this.content = {};
        this.contentListeners = [];
    }
    Paramorph.prototype.addLayout = function (layout) {
        if (this.layouts.hasOwnProperty(layout.name)) {
            throw new Error("layout of name " + layout.name + " is already set");
        }
        this.layouts[layout.name] = layout;
    };
    Paramorph.prototype.addInclude = function (include) {
        if (this.includes.hasOwnProperty(include.name)) {
            throw new Error("include of name " + include.name + " is already set");
        }
        this.includes[include.name] = include;
    };
    Paramorph.prototype.addCollection = function (collection) {
        if (this.collections.hasOwnProperty(collection.title)) {
            throw new Error("collection of title '" + collection.title + "' is already set");
        }
        this.collections[collection.title] = collection;
    };
    Paramorph.prototype.addPost = function (post) {
        if (this.posts.hasOwnProperty(post.url)) {
            throw new Error("post of url " + post.url + " is already set");
        }
        this.posts[post.url] = post;
        if (post instanceof _1.Tag) {
            this.tags[post.originalTitle] = post;
            // not adding to collection if the post is a tag
            return;
        }
        var collection = this.collections[post.collection];
        if (!collection) {
            throw new Error("coulnd't find collection of title '" + post.collection + "' when adding post of url '" + post.url + "'");
        }
        collection.posts.push(post);
        if (post instanceof _1.Category) {
            this.categories[post.title] = post;
        }
    };
    Paramorph.prototype.addLayoutLoader = function (name, loader) {
        if (this.layoutLoaders.hasOwnProperty(name)) {
            throw new Error("layout loader for name " + name + " is already set");
        }
        this.layoutLoaders[name] = loader;
    };
    Paramorph.prototype.loadLayout = function (name) {
        if (!this.layoutLoaders.hasOwnProperty(name)) {
            throw new Error("couldn't find layout loader for path: " + name + "; available loaders: " + JSON.stringify(Object.keys(this.layoutLoaders)));
        }
        return this.layoutLoaders[name]();
    };
    Paramorph.prototype.addIncludeLoader = function (name, loader) {
        if (this.includeLoaders.hasOwnProperty(name)) {
            throw new Error("include loader for name " + name + " is already set");
        }
        this.includeLoaders[name] = loader;
    };
    Paramorph.prototype.loadInclude = function (name) {
        if (!this.includeLoaders.hasOwnProperty(name)) {
            throw new Error("couldn't find include loader for path: " + name + "; available loaders: " + JSON.stringify(Object.keys(this.includeLoaders)));
        }
        return this.includeLoaders[name]();
    };
    Paramorph.prototype.addContentLoader = function (url, loader) {
        if (this.contentLoaders.hasOwnProperty(url)) {
            throw new Error("content loader for url " + url + " is already set");
        }
        this.contentLoaders[url] = loader;
    };
    Paramorph.prototype.loadContent = function (url) {
        var _this = this;
        if (!this.contentLoaders.hasOwnProperty(url)) {
            throw new Error("couldn't find content loader for path: " + url + "; available loaders: " + JSON.stringify(Object.keys(this.contentLoaders)));
        }
        var content = this.content[url];
        if (content) {
            // already loaded
            this.notifyContentListeners(url);
            return Promise.resolve(content);
        }
        var loader = this.contentLoaders[url];
        return loader()
            .then(function (content) {
            _this.content[url] = content;
            _this.notifyContentListeners(url);
            return content;
        });
    };
    Paramorph.prototype.addContentListener = function (listener) {
        this.contentListeners.push(listener);
    };
    Paramorph.prototype.removeContentListener = function (listener) {
        var index = this.contentListeners.indexOf(listener);
        if (index === -1) {
            throw new Error("unknown content listener: " + listener);
        }
        this.contentListeners.splice(index, 1);
    };
    Paramorph.prototype.getCrumbs = function (post) {
        var _this = this;
        if (post.url == '/') {
            return [[post]];
        }
        if (post.categories.length == 0) {
            return [[this.getPostOfUrl('/'), post]];
        }
        return post.categories
            .map(function (categoryTitle) {
            return _this.getCrumbs(_this.getCategoryOfTitle(categoryTitle))
                .map(function (crumb) { return crumb.concat([post]); });
        })
            .reduce(function (a, b) { return a.concat(b); }, []);
    };
    Paramorph.prototype.getPostOfUrl = function (url) {
        var post = this.posts[url];
        if (!post) {
            throw new Error("couldn't find post of url " + url);
        }
        return post;
    };
    Paramorph.prototype.getCategoryOfTitle = function (title) {
        var category = this.categories[title];
        if (!category) {
            throw new Error("couldn't find category of title " + title);
        }
        return category;
    };
    Paramorph.prototype.notifyContentListeners = function (url) {
        var _this = this;
        global.setImmediate(function () {
            var content = _this.content[url];
            _this.contentListeners.forEach(function (listener) { return listener(url, content); });
        });
    };
    return Paramorph;
}());
exports.Paramorph = Paramorph;
exports.default = Paramorph;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/paramorph/model/PathParams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
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
var events_1 = __webpack_require__("./node_modules/events/events.js");
var PathParams = /** @class */ (function (_super) {
    __extends(PathParams, _super);
    function PathParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = {};
        return _this;
    }
    PathParams.prototype.set = function (newParams) {
        var _this = this;
        var oldParams = this.params;
        this.params = newParams;
        var oldKeys = Object.keys(oldParams);
        var newKeys = Object.keys(newParams);
        var deletions = oldKeys.filter(function (key) { return newKeys.indexOf(key) === -1; });
        var changes = newKeys.filter(function (key) { return newParams[key] !== oldParams[key]; });
        global.setImmediate(function () {
            changes
                .concat(deletions)
                .sort()
                .forEach(function (key) { return _this.emit(key, newParams[key]); });
        });
    };
    PathParams.prototype.get = function (key) {
        return this.params[key];
    };
    return PathParams;
}(events_1.EventEmitter));
exports.PathParams = PathParams;
exports.default = PathParams;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/paramorph/model/Post.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(pathSpec, title, description, image, collection, layout, source, output, feed, limit, categories, tags, timestamp) {
        this.pathSpec = pathSpec;
        this.title = title;
        this.description = description;
        this.image = image;
        this.collection = collection;
        this.layout = layout;
        this.source = source;
        this.output = output;
        this.feed = feed;
        this.limit = limit;
        this.categories = categories;
        this.tags = tags;
        this.timestamp = timestamp;
        this.url = removePathParams(pathSpec);
    }
    Post.prototype.compareTo = function (another) {
        if (this.timestamp === another.timestamp) {
            if (this.title === another.title) {
                return this.url > another.url ? 1 : -1;
            }
            return this.title > another.title ? 1 : -1;
        }
        return this.timestamp > another.timestamp ? 1 : -1;
    };
    return Post;
}());
exports.Post = Post;
exports.default = Post;
function removePathParams(pathSpec) {
    return pathSpec
        .replace(/:[^\/$]+/g, '')
        .replace(/\/+/g, '/');
}


/***/ }),

/***/ "./node_modules/paramorph/model/Tag.js":
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
var _1 = __webpack_require__("./node_modules/paramorph/model/index.js");
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag(pathSpec, title, description, image, layout, source, output, limit, timestamp) {
        var _this = _super.call(this, pathSpec, "#" + title, description, image, "_tags", layout, source, output, false, limit, [], [], timestamp) || this;
        _this.posts = [];
        _this.originalTitle = title;
        return _this;
    }
    return Tag;
}(_1.Post));
exports.Tag = Tag;
exports.default = Tag;


/***/ }),

/***/ "./node_modules/paramorph/model/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = __webpack_require__("./node_modules/paramorph/model/Layout.js");
exports.Layout = Layout_1.Layout;
var Include_1 = __webpack_require__("./node_modules/paramorph/model/Include.js");
exports.Include = Include_1.Include;
var Post_1 = __webpack_require__("./node_modules/paramorph/model/Post.js");
exports.Post = Post_1.Post;
var Category_1 = __webpack_require__("./node_modules/paramorph/model/Category.js");
exports.Category = Category_1.Category;
var Collection_1 = __webpack_require__("./node_modules/paramorph/model/Collection.js");
exports.Collection = Collection_1.Collection;
var Tag_1 = __webpack_require__("./node_modules/paramorph/model/Tag.js");
exports.Tag = Tag_1.Tag;
var Paramorph_1 = __webpack_require__("./node_modules/paramorph/model/Paramorph.js");
exports.Paramorph = Paramorph_1.Paramorph;
var PathParams_1 = __webpack_require__("./node_modules/paramorph/model/PathParams.js");
exports.PathParams = PathParams_1.PathParams;


/***/ }),

/***/ "./node_modules/paramorph/react/Component.js":
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
var ContextTypes_1 = __webpack_require__("./node_modules/paramorph/react/ContextTypes.js");
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.contextTypes = ContextTypes_1.ContextTypes;
    return Component;
}(React.Component));
exports.Component = Component;
exports.default = Component;


/***/ }),

/***/ "./node_modules/paramorph/react/Content.js":
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var react_1 = __webpack_require__("react");
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.render = function () {
        this.outstandingLimit = this.props.limit || Number.MAX_SAFE_INTEGER;
        var children = this.props.children;
        return (React.createElement("div", { className: 'content' }, this.renderChildren(children)));
    };
    Content.prototype.renderChildren = function (children) {
        return react_1.Children.map(children, this.renderNode.bind(this));
    };
    Content.prototype.renderNode = function (node, key) {
        if (this.isLimitReached() || isEmpty(node)) {
            return null;
        }
        switch (typeof node) {
            case 'boolean':
            case 'number':
                return node;
            case 'string':
                return this.renderString(node);
            default:
                return this.renderComponent(node, key);
        }
    };
    Content.prototype.renderString = function (child) {
        if (child.indexOf('.') === -1 || !this.props.respectLimit) {
            return child;
        }
        var sentences = sentencize(child);
        var outstandingLimit = this.outstandingLimit;
        this.outstandingLimit -= sentences.length;
        return sentences.slice(0, outstandingLimit);
    };
    Content.prototype.renderComponent = function (elem, key) {
        var _a = this.props, _b = _a.mapper, mapper = _b === void 0 ? function (node) { return node; } : _b, limiterProps = __rest(_a, ["mapper"]);
        if (limiterProps.respectLimit && elem.type === 'img') {
            return null;
        }
        var children = this.renderChildren(elem.props.children);
        var props = cloneProps(elem, children, limiterProps, key);
        if (children) {
            return mapper(react_1.cloneElement.apply(void 0, __spread([elem, props], children)));
        }
        else {
            return mapper(react_1.cloneElement(elem, props));
        }
    };
    Content.prototype.isLimitReached = function () {
        var respectLimit = this.props.respectLimit;
        return respectLimit && this.outstandingLimit <= 0;
    };
    return Content;
}(react_1.Component));
exports.Content = Content;
exports.default = Content;
function isEmpty(node) {
    return node === null || node === undefined;
}
function sentencize(child) {
    var sentenceRegexp = /[^.!?…]*[.!?…]/g;
    var matches = [];
    var match;
    while ((match = sentenceRegexp.exec(child)) !== null) {
        matches.push(match[0]);
    }
    return matches;
}
function cloneProps(elem, children, limiterProps, key) {
    if (typeof elem.type === 'string') {
        return __assign({ key: key }, elem.props, { children: children });
    }
    return __assign({ key: key }, elem.props, limiterProps, { children: children });
}


/***/ }),

/***/ "./node_modules/paramorph/react/ContextContainer.js":
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
var ContextTypes_1 = __webpack_require__("./node_modules/paramorph/react/ContextTypes.js");
var ContextContainer = /** @class */ (function (_super) {
    __extends(ContextContainer, _super);
    function ContextContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextContainer.prototype.getChildContext = function () {
        var _a = this.props, paramorph = _a.paramorph, post = _a.post, history = _a.history, pathParams = _a.pathParams, requestParameterizedRender = _a.requestParameterizedRender;
        return { paramorph: paramorph, post: post, history: history, pathParams: pathParams, requestParameterizedRender: requestParameterizedRender };
    };
    ContextContainer.prototype.render = function () {
        var children = this.props.children;
        return React.Children.only(children);
    };
    ContextContainer.childContextTypes = ContextTypes_1.ContextTypes;
    return ContextContainer;
}(React.Component));
exports.ContextContainer = ContextContainer;
exports.default = ContextContainer;


/***/ }),

/***/ "./node_modules/paramorph/react/ContextTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = __webpack_require__("prop-types");
exports.ContextTypes = {
    paramorph: PropTypes.shape({
        layouts: PropTypes.object.isRequired,
        includes: PropTypes.object.isRequired,
        posts: PropTypes.object.isRequired,
        categories: PropTypes.object.isRequired,
        tags: PropTypes.object.isRequired,
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
        listen: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    post: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string,
        collection: PropTypes.string.isRequired,
        layout: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired,
        output: PropTypes.bool.isRequired,
        feed: PropTypes.bool.isRequired,
        categories: PropTypes.array.isRequired,
        tags: PropTypes.array.isRequired,
        timestamp: PropTypes.number.isRequired,
    }).isRequired,
    pathParams: PropTypes.shape({
        set: PropTypes.func.isRequired,
        get: PropTypes.func.isRequired,
        on: PropTypes.func.isRequired,
        once: PropTypes.func.isRequired,
        removeListener: PropTypes.func.isRequired,
        removeAllListeners: PropTypes.func.isRequired,
    }),
    requestParameterizedRender: (PropTypes.func.isRequired),
};
exports.default = exports.ContextTypes;


/***/ }),

/***/ "./node_modules/paramorph/react/DeferredScripts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var LOAD_SCRIPTS_SOURCE = loadScripts.toString().replace(/\n/g, '').replace(/  +/g, ' ');
function DeferredScripts(_a) {
    var srcs = _a.srcs;
    var code = LOAD_SCRIPTS_SOURCE + "loadScripts(" + JSON.stringify(srcs) + ");";
    return (React.createElement("script", { type: 'text/javascript', dangerouslySetInnerHTML: { __html: code } }));
}
exports.DeferredScripts = DeferredScripts;
exports.default = DeferredScripts;
function loadScripts(srcs) {
    window.addEventListener('load', function () {
        var head = document.getElementsByTagName('head')[0];
        function load(src, onLoad) {
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', src);
            script.onload = onLoad;
            head.appendChild(script);
        }
        function loadNext() {
            var src = srcs.shift();
            var onLoad = srcs.length === 0 ? function () { } : loadNext;
            load(src, onLoad);
        }
        setTimeout(loadNext, 1);
    });
}


/***/ }),

/***/ "./node_modules/paramorph/react/DeferredStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var LOAD_STYLES_SOURCE = loadStyles.toString().replace(/\n/g, '').replace(/  +/g, ' ');
function DeferredStyles(_a) {
    var hrefs = _a.hrefs;
    var code = LOAD_STYLES_SOURCE + "loadStyles(" + JSON.stringify(hrefs) + ");";
    return (React.createElement("script", { type: 'text/javascript', dangerouslySetInnerHTML: { __html: code } }));
}
exports.DeferredStyles = DeferredStyles;
exports.default = DeferredStyles;
function loadStyles(hrefs) {
    window.addEventListener('load', function () {
        var head = document.getElementsByTagName('head')[0];
        setTimeout(function () {
            hrefs.forEach(function (href) {
                var link = document.createElement('link');
                link.setAttribute('href', href);
                link.setAttribute('type', 'text/css');
                link.setAttribute('rel', 'stylesheet');
                head.appendChild(link);
            });
        }, 1);
    });
}


/***/ }),

/***/ "./node_modules/paramorph/react/Link.js":
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
var react_1 = __webpack_require__("./node_modules/paramorph/react/index.js");
var noop = function () { };
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Link.prototype.render = function () {
        var _a = this.props, to = _a.to, children = _a.children, _b = _a.onClick, onClick = _b === void 0 ? noop : _b;
        return (React.createElement("a", { onClick: this.wrap(onClick), href: to }, children));
    };
    Link.prototype.wrap = function (onClick) {
        var _this = this;
        return function (event) {
            var result = onClick(event);
            if (result === false) {
                event.preventDefault();
                return false;
            }
            if (_this.isLocal()) {
                var history_1 = _this.context.history;
                var to = _this.props.to;
                history_1.push(to);
                event.preventDefault();
                return false;
            }
            // default anchor behavior
            return true;
        };
    };
    Link.prototype.isLocal = function () {
        // if it doesn't start with something:// then its local
        return !this.props.to.match(/^[a-z]*\:\/\/.*$/i);
    };
    return Link;
}(react_1.PureComponent));
exports.Link = Link;
exports.default = Link;


/***/ }),

/***/ "./node_modules/paramorph/react/PureComponent.js":
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
var ContextTypes_1 = __webpack_require__("./node_modules/paramorph/react/ContextTypes.js");
var PureComponent = /** @class */ (function (_super) {
    __extends(PureComponent, _super);
    function PureComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureComponent.contextTypes = ContextTypes_1.ContextTypes;
    return PureComponent;
}(React.PureComponent));
exports.PureComponent = PureComponent;
exports.default = PureComponent;


/***/ }),

/***/ "./node_modules/paramorph/react/Root.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("react");
var DeferredScripts_1 = __webpack_require__("./node_modules/paramorph/react/DeferredScripts.js");
var DeferredStyles_1 = __webpack_require__("./node_modules/paramorph/react/DeferredStyles.js");
function Root(_a) {
    var paramorph = _a.paramorph, post = _a.post, localBundles = _a.localBundles, externalBundles = _a.externalBundles, preload = _a.preload;
    return (React.createElement("html", null,
        React.createElement("head", null,
            React.createElement("title", null,
                post.title,
                " | ",
                paramorph.config.title),
            React.createElement("meta", { name: 'path', content: post.url }),
            React.createElement("meta", { name: 'keywords', content: post.tags.join(', ') }),
            React.createElement("meta", { name: 'description', content: post.description }),
            React.createElement("meta", { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
            preload.map(function (url) { return (React.createElement("meta", { name: 'paramorph-preload', content: url })); }),
            localBundles.css.map(function (url) { return (React.createElement("link", { type: 'text/css', rel: 'stylesheet', href: url, key: url })); })),
        React.createElement("body", null,
            React.createElement("div", { id: 'root' }, "%%%BODY%%%"),
            React.createElement(DeferredScripts_1.default, { srcs: externalBundles.js.concat(localBundles.js) }),
            React.createElement(DeferredStyles_1.default, { hrefs: externalBundles.css }))));
}
exports.Root = Root;
exports.default = Root;


/***/ }),

/***/ "./node_modules/paramorph/react/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Content_1 = __webpack_require__("./node_modules/paramorph/react/Content.js");
exports.Content = Content_1.Content;
var ContextTypes_1 = __webpack_require__("./node_modules/paramorph/react/ContextTypes.js");
exports.ContextTypes = ContextTypes_1.ContextTypes;
var ContextContainer_1 = __webpack_require__("./node_modules/paramorph/react/ContextContainer.js");
exports.ContextContainer = ContextContainer_1.ContextContainer;
var Component_1 = __webpack_require__("./node_modules/paramorph/react/Component.js");
exports.Component = Component_1.Component;
var PureComponent_1 = __webpack_require__("./node_modules/paramorph/react/PureComponent.js");
exports.PureComponent = PureComponent_1.PureComponent;
var Link_1 = __webpack_require__("./node_modules/paramorph/react/Link.js");
exports.Link = Link_1.Link;
var DeferredStyles_1 = __webpack_require__("./node_modules/paramorph/react/DeferredStyles.js");
exports.DeferredStyles = DeferredStyles_1.DeferredStyles;
var DeferredScripts_1 = __webpack_require__("./node_modules/paramorph/react/DeferredScripts.js");
exports.DeferredScripts = DeferredScripts_1.DeferredScripts;
var Root_1 = __webpack_require__("./node_modules/paramorph/react/Root.js");
exports.Root = Root_1.Root;


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var whitelist = (options && options.whitelist) || undefined
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1
      var c = path[k]
      var matches = whitelist ? whitelist.indexOf(c) > -1 : true

      if (matches) {
        prev = c
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var pattern = capture || group
    var delimiter = prev || defaultDelimiter

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      pattern: pattern
        ? escapeGroup(pattern)
        : '[^' + escapeString(delimiter === defaultDelimiter ? delimiter : (delimiter + defaultDelimiter)) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) continue

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var start = options.start !== false
  var end = options.end !== false
  var delimiter = options.delimiter || DEFAULT_DELIMITER
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = start ? '^' : ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (!token.prefix) {
          route += '(' + capture + ')?'
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?'
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + escapeString(delimiter) + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    var endToken = tokens[tokens.length - 1]
    var isEndDelimited = typeof endToken === 'string'
      ? endToken[endToken.length - 1] === delimiter
      : endToken === undefined

    if (!strict) route += '(?:' + escapeString(delimiter) + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + escapeString(delimiter) + '|' + endsWith + ')'
  }

  return new RegExp(route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),

/***/ "./node_modules/universal-router/module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_0__);
/*! Universal Router | MIT License | https://www.kriasoft.com/universal-router/ */



var hasOwnProperty = Object.prototype.hasOwnProperty;
var cache = new Map();

function decodeParam(val) {
  try {
    return decodeURIComponent(val);
  } catch (err) {
    return val;
  }
}

function matchPath(route, pathname, parentKeys, parentParams) {
  var end = !route.children;
  var cacheKey = (route.path || '') + "|" + end;
  var regexp = cache.get(cacheKey);

  if (!regexp) {
    var keys = [];
    regexp = {
      keys: keys,
      pattern: path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default()(route.path || '', keys, {
        end: end
      })
    };
    cache.set(cacheKey, regexp);
  }

  var m = regexp.pattern.exec(pathname);

  if (!m) {
    return null;
  }

  var path = m[0];
  var params = Object.assign({}, parentParams);

  for (var i = 1; i < m.length; i++) {
    var key = regexp.keys[i - 1];
    var prop = key.name;
    var value = m[i];

    if (value !== undefined || !hasOwnProperty.call(params, prop)) {
      if (key.repeat) {
        params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
      } else {
        params[prop] = value ? decodeParam(value) : value;
      }
    }
  }

  return {
    path: !end && path.charAt(path.length - 1) === '/' ? path.substr(1) : path,
    keys: parentKeys.concat(regexp.keys),
    params: params
  };
}

function matchRoute(route, baseUrl, pathname, parentKeys, parentParams) {
  var match;
  var childMatches;
  var childIndex = 0;
  return {
    next: function next(routeToSkip) {
      if (route === routeToSkip) {
        return {
          done: true
        };
      }

      if (!match) {
        match = matchPath(route, pathname, parentKeys, parentParams);

        if (match) {
          return {
            done: false,
            value: {
              route: route,
              baseUrl: baseUrl,
              path: match.path,
              keys: match.keys,
              params: match.params
            }
          };
        }
      }

      if (match && route.children) {
        while (childIndex < route.children.length) {
          if (!childMatches) {
            var childRoute = route.children[childIndex];
            childRoute.parent = route;
            childMatches = matchRoute(childRoute, baseUrl + match.path, pathname.substr(match.path.length), match.keys, match.params);
          }

          var childMatch = childMatches.next(routeToSkip);

          if (!childMatch.done) {
            return {
              done: false,
              value: childMatch.value
            };
          }

          childMatches = null;
          childIndex++;
        }
      }

      return {
        done: true
      };
    }
  };
}

function resolveRoute(context, params) {
  if (typeof context.route.action === 'function') {
    return context.route.action(context, params);
  }

  return undefined;
}

function isChildRoute(parentRoute, childRoute) {
  var route = childRoute;

  while (route) {
    route = route.parent;

    if (route === parentRoute) {
      return true;
    }
  }

  return false;
}

var UniversalRouter = function () {
  function UniversalRouter(routes, options) {
    if (options === void 0) {
      options = {};
    }

    if (!routes || typeof routes !== 'object') {
      throw new TypeError('Invalid routes');
    }

    this.baseUrl = options.baseUrl || '';
    this.errorHandler = options.errorHandler;
    this.resolveRoute = options.resolveRoute || resolveRoute;
    this.context = Object.assign({
      router: this
    }, options.context);
    this.root = Array.isArray(routes) ? {
      path: '',
      children: routes,
      parent: null
    } : routes;
    this.root.parent = null;
  }

  var _proto = UniversalRouter.prototype;

  _proto.resolve = function resolve(pathnameOrContext) {
    var _this = this;

    var context = Object.assign({}, this.context, {}, typeof pathnameOrContext === 'string' ? {
      pathname: pathnameOrContext
    } : pathnameOrContext);
    var match = matchRoute(this.root, this.baseUrl, context.pathname.substr(this.baseUrl.length), [], null);
    var resolve = this.resolveRoute;
    var matches = null;
    var nextMatches = null;
    var currentContext = context;

    function next(resume, parent, prevResult) {
      if (parent === void 0) {
        parent = matches.value.route;
      }

      var routeToSkip = prevResult === null && !matches.done && matches.value.route;
      matches = nextMatches || match.next(routeToSkip);
      nextMatches = null;

      if (!resume) {
        if (matches.done || !isChildRoute(parent, matches.value.route)) {
          nextMatches = matches;
          return Promise.resolve(null);
        }
      }

      if (matches.done) {
        var error = new Error('Route not found');
        error.status = 404;
        return Promise.reject(error);
      }

      currentContext = Object.assign({}, context, {}, matches.value);
      return Promise.resolve(resolve(currentContext, matches.value.params)).then(function (result) {
        if (result !== null && result !== undefined) {
          return result;
        }

        return next(resume, parent, result);
      });
    }

    context.next = next;
    return Promise.resolve().then(function () {
      return next(true, _this.root);
    })["catch"](function (error) {
      if (_this.errorHandler) {
        return _this.errorHandler(error, currentContext);
      }

      throw error;
    });
  };

  return UniversalRouter;
}();

UniversalRouter.pathToRegexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default.a;

/* harmony default export */ __webpack_exports__["default"] = (UniversalRouter);


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


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/paramorph/entry/server.js");


/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ })

/******/ });
});