/******/ (function(modules) { // webpackBootstrap
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
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./font/iconfont.css":
/*!***************************!*\
  !*** ./font/iconfont.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./iconfont.css */ "./node_modules/css-loader/dist/cjs.js?!./font/iconfont.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./font/iconfont.eot?t=1586843410434":
/*!*******************************************!*\
  !*** ./font/iconfont.eot?t=1586843410434 ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "316aceb46176f959ecf6fc4d6ffe697a.eot");

/***/ }),

/***/ "./font/iconfont.svg?t=1586843410434":
/*!*******************************************!*\
  !*** ./font/iconfont.svg?t=1586843410434 ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b3e8d1f85a0db6a4789188cf89dc0e52.svg");

/***/ }),

/***/ "./font/iconfont.ttf?t=1586843410434":
/*!*******************************************!*\
  !*** ./font/iconfont.ttf?t=1586843410434 ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "017caf5590b97af115ff9787dafbc4ba.ttf");

/***/ }),

/***/ "./font/iconfont.woff?t=1586843410434":
/*!********************************************!*\
  !*** ./font/iconfont.woff?t=1586843410434 ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "78f6694ee3d4df0bd2e38eb23e81ff2d.woff");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./font/iconfont.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./font/iconfont.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./iconfont.eot?t=1586843410434 */ "./font/iconfont.eot?t=1586843410434");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./iconfont.woff?t=1586843410434 */ "./font/iconfont.woff?t=1586843410434");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./iconfont.ttf?t=1586843410434 */ "./font/iconfont.ttf?t=1586843410434");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./iconfont.svg?t=1586843410434 */ "./font/iconfont.svg?t=1586843410434");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#iconfont" });
// Module
exports.push([module.i, "@font-face {font-family: \"iconfont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9 */\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'), \n  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff'),\n  url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype'), \n  url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('svg'); /* iOS 4.1- */\n}\n\n._1t1wDe6gid1BT2HuTZBSG0 {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.bs77R-MT9oUBkuoGVYvKc:before {\n  content: \"\\e642\";\n}\n\n._2M_JszBcR4FRl7ETq4jyK3:before {\n  content: \"\\e6c6\";\n}\n\n._2u9O1I2zbWc3QCgTBUSgs9:before {\n  content: \"\\e607\";\n}\n\n._11d8UE_N0XZxMaI7vTVKJs:before {\n  content: \"\\e6db\";\n}\n\n._2uBkMY7qigAqtDuUUsKf48:before {\n  content: \"\\e605\";\n}\n\n.nxte5NCHp0ilHnOE89EbC:before {\n  content: \"\\e62f\";\n}\n\n._1Qv5AXMxQgeHLwTjIa0b2z:before {\n  content: \"\\e60a\";\n}\n\n._2hRbkig_5PQd31QMONOB3f:before {\n  content: \"\\e614\";\n}\n\n._3Y-pndyIArAGmIScW7zAVJ:before {\n  content: \"\\e79d\";\n}\n\n._3QbxpIi41QdefCFMhzmMGd:before {\n  content: \"\\e6dd\";\n}\n\n._2dIHHma2yLbOc72yZWjfFM:before {\n  content: \"\\e655\";\n}\n\n._3gvDHR2GfP-wOzyxfXn2-8:before {\n  content: \"\\e603\";\n}\n\n._1iCDP4ncgEFDv0o40LxLgi:before {\n  content: \"\\e621\";\n}\n\n._3TOzf8NZ9v5TKN17mG_Meh:before {\n  content: \"\\e641\";\n}\n\n._1_4V3FxwsgWjuUphrKJDb4:before {\n  content: \"\\e611\";\n}\n\n._1rpWAME7nDTiJeC4gqmlX6:before {\n  content: \"\\e600\";\n}\n\n._1A0fBQHdsx3w5DQXnY1P9s:before {\n  content: \"\\e608\";\n}\n\n.MKQWAVRvoq6qsotgwnMQZ:before {\n  content: \"\\e633\";\n}\n\n._5n4V3Em2vzlPolKnJ4Wz8:before {\n  content: \"\\e696\";\n}\n\n._1vGxbAGnRszO42UquVTatQ:before {\n  content: \"\\e666\";\n}\n\n.-U35x6fHRx8wZYutVrHEM:before {\n  content: \"\\e654\";\n}\n\n", ""]);
// Exports
exports.locals = {
	"iconfont": "_1t1wDe6gid1BT2HuTZBSG0",
	"icon-hanglijicun": "bs77R-MT9oUBkuoGVYvKc",
	"icon-gantanhao": "_2M_JszBcR4FRl7ETq4jyK3",
	"icon-renyuan": "_2u9O1I2zbWc3QCgTBUSgs9",
	"icon-jinlingyingcaiwangtubiao60": "_11d8UE_N0XZxMaI7vTVKJs",
	"icon-shop": "_2uBkMY7qigAqtDuUUsKf48",
	"icon-huiyuanqia": "nxte5NCHp0ilHnOE89EbC",
	"icon-tuandui2": "_1Qv5AXMxQgeHLwTjIa0b2z",
	"icon-icon": "_2hRbkig_5PQd31QMONOB3f",
	"icon-dashujuribao": "_3Y-pndyIArAGmIScW7zAVJ",
	"icon-huiyuanguanli": "_3QbxpIi41QdefCFMhzmMGd",
	"icon-yewupeizhi": "_2dIHHma2yLbOc72yZWjfFM",
	"icon-wuziguanli": "_3gvDHR2GfP-wOzyxfXn2-8",
	"icon-gaotie": "_1iCDP4ncgEFDv0o40LxLgi",
	"icon-jichang": "_3TOzf8NZ9v5TKN17mG_Meh",
	"icon-xitongpeizhi": "_1_4V3FxwsgWjuUphrKJDb4",
	"icon-clover": "_1rpWAME7nDTiJeC4gqmlX6",
	"icon-jingyingshujutuisong": "_1A0fBQHdsx3w5DQXnY1P9s",
	"icon-qiaquan": "MKQWAVRvoq6qsotgwnMQZ",
	"icon-huodongpeizhi": "_5n4V3Em2vzlPolKnJ4Wz8",
	"icon-tuandui1": "_1vGxbAGnRszO42UquVTatQ",
	"icon-tuandui": "-U35x6fHRx8wZYutVrHEM"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/index.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-3!./src/index.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body ._17cnVz87yzSOO5TpFdnLsk {\n  width: 150px;\n  height: 150px;\n  transform: translate(100px, 100px); }\n", ""]);
// Exports
exports.locals = {
	"avatar": "_17cnVz87yzSOO5TpFdnLsk"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/1.jpg":
/*!*******************!*\
  !*** ./src/1.jpg ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/src/1.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.jpg */ "./src/1.jpg");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_iconfont_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../font/iconfont.css */ "./font/iconfont.css");
/* harmony import */ var _font_iconfont_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_font_iconfont_css__WEBPACK_IMPORTED_MODULE_2__);
// import Header from './header.js'
// import SideBar from './sidebar.js'
// import Content from './content.js'




console.log(_font_iconfont_css__WEBPACK_IMPORTED_MODULE_2___default.a)

console.log(_index_scss__WEBPACK_IMPORTED_MODULE_1___default.a)
// import style from './index.css'


  let Header

  __webpack_require__.e(/*! import() | my-chunk-name */ "my-chunk-name").then(__webpack_require__.bind(null, /*! ./header.js */ "./src/header.js")).then(module => {
    // var Header = module.default
    Header = module.default
  })

// import './index.css'
// coole.error('This is a error!')
var img = new Image()
img.src = _1_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]
img.classList.add(_index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.avatar)

var root = document.getElementById('root')
root.innerHTML = `<div class='${_font_iconfont_css__WEBPACK_IMPORTED_MODULE_2___default.a.iconfont} ${_font_iconfont_css__WEBPACK_IMPORTED_MODULE_2___default.a['icon-hanglijicun']}'></div>`
root.append(img)

console.log('123')

setTimeout(() => {
  console.log(Header)
  new Header()
}, 3000)

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-1!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/src??ref--6-3!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9udC9pY29uZm9udC5jc3M/MjQ4NiIsIndlYnBhY2s6Ly8vLi9mb250L2ljb25mb250LmVvdCIsIndlYnBhY2s6Ly8vLi9mb250L2ljb25mb250LnN2ZyIsIndlYnBhY2s6Ly8vLi9mb250L2ljb25mb250LnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250L2ljb25mb250LndvZmYiLCJ3ZWJwYWNrOi8vLy4vZm9udC9pY29uZm9udC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzPzJkZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7OztRQUlBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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LG1CQUFPLENBQUMsdVNBQStKOztBQUVqTTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL2ljb25mb250LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzE2YWNlYjQ2MTc2Zjk1OWVjZjZmYzRkNmZmZTY5N2EuZW90XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIzZThkMWY4NWEwZGI2YTQ3ODkxODhjZjg5ZGMwZTUyLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMTdjYWY1NTkwYjk3YWYxMTVmZjk3ODdkYWZiYzRiYS50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzhmNjY5NGVlM2Q0ZGYwYmQyZTM4ZWIyM2U4MWZmMmQud29mZlwiOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9pY29uZm9udC5lb3Q/dD0xNTg2ODQzNDEwNDM0XCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vaWNvbmZvbnQud29mZj90PTE1ODY4NDM0MTA0MzRcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi9pY29uZm9udC50dGY/dD0xNTg2ODQzNDEwNDM0XCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gcmVxdWlyZShcIi4vaWNvbmZvbnQuc3ZnP3Q9MTU4Njg0MzQxMDQzNFwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXywgeyBoYXNoOiBcIiNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18sIHsgaGFzaDogXCIjaWNvbmZvbnRcIiB9KTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6IFxcXCJpY29uZm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IC8qIElFOSAqL1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgXFxuICB1cmwoJ2RhdGE6YXBwbGljYXRpb24veC1mb250LXdvZmYyO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdNZ0FCQUFBQUFCUDhBQXNBQUFBQUkwUUFBQk90QUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIRUlHVmdDR0VBcTBNS2xaQVRZQ0pBTllDeTRBQkNBRmhHMEhnamdiOXh4RkliQnhnQ0JqdmgyeS8rc0VMUTRyWEhzVGFmMGJhOEM0UXJWcEFoK3NheGoxc2dXV2Z4Qjcrc0tJN1crYUtoSTh1S28zVmFRckVoeFQzY2l4UXluaG4vLzl2dTF6N1QwZkU2dmVCbEhKNUw5b0pFaVQwRHlsNDRsb2RUUjBmZzhRckZRUGdNSDNxay91bkF3T3hhNVBSbkd3WC9PYnZNL1dpNGVaMmVJRUZHRytUYlhTVTdhZmZtS1kwdHI2YmErN2pBWEloNUVqUkpxS2h5UlRiQnZ5Z1hBT3lNN1AwN1o2ZjJhQUVZUWhCS1BHS05nd2VnTmNobEpRZGdXMHdjWTYyY1JOOFU3ZFRQYUtTK3VxOVc3MW90VE5kSy9DNVNyOXYybk5Ka3VyVFJqTzhWQThGRXJPSk5ueWs3a3kxK2RhbjJ0OVFpMnFPWXhFcU0zVjVFcHRhdGVoRDRkRWVheEFXSTFPV3lzejhVdTVwaE1mYWpEYzhwalZPREdLRWxpVi9kazNCS1IwTTRrMlA3ZlBFK09ZNjBLMTUvVG9EdkZSRkU2eVM4UmhnZE9taS9VR1QyeGVtYS9BYS9icmRjeThZakI0eTd4ZnB4OXUzV2Qxai8xM1ZxdFdydHVYN0xwalFMYzlzTUFrNE1BNGJ1Si9XNWhrUnNvVEhiK0FZWHJKL0lVOTlxeVAwN3JHdnBtRjlRc1BkL2JlNy8zWis3Zi9ybHJWQ1JrOWRPMzgyODZUeGZBaTVPaUQ0MHorZHg3VWt1T3gxQkZSUTB4Qm9KNFMwVVJHSXcwWUhDa0pLSUFLT1lEOEo0QW0ySU5TYWhteG9PUWdIam9nRVhSa0pBYWxEaVNGRGtnZEtEVWdqZERSSTMyZ0ZDQXpvQVNRQlZEcVFkWkFLVUhXUVJISWVhaHhKQmRBeVVBZVFpY01zZ05LQThoblVBeklIMUFjeUQ4d1VtNEtEWStSQU5DTU5pYUJGeER2UXZxVCtkYTNvc0ZoaWZHRUIzSWkzL0QxRGN5aUlDYkRTV3pkZUZwWFV5UVR1V3ByazliR1JFdVBMZlVXcXEvdmxubWVoYTR5R1IxVnJZT3JCNVZSaTEzRmFINVRRMmdMczJNaHZsM2RycTVKbFR5UGt1YVpCTkpsWFVXUzEvZlA2dkp6MmJBb2ZTL1U1ZENBQVZYOTFPSXNKT2tDOURhdUE2dDJlblg0TjVtUGdSYXdDTUk4NnpMK2tQWHQrRis2WUlmM1lpSys5NndhNUxhblQwa2pCMVhNa3RJZ1BoZFRvNXcrS2JseTlsV1M3cUloM05ENmdqMnJYMmY3dzhxQjV0T1FSQmNUeVFsWCtVNy9UYmNjdXg4TmExSkxNV2RkdlZsbjIvZmRXbXRDbTFlVElzdjZuVlZxSmFha0piS010RllOZXRGQVhBNnFnZTBYai9VVFVWd1dFbEwvb25MOXNWQW8rVldTZnJVT09NLzZkMjk3VVF2ZDZ4ZFVLOEo1YkFTOGJOaW9ZS0o1MUpYdlB5ZVJTOUdlSHQ3RUtvNk4wUkJvQ2tyTGQxU2dYK3NremdhZmtzWGdFV2JaeUd2SnF1K1lUZjBTU0dxa0VxS2ZoNWlDV1JGS25NNzVINCtNdTkwVmlRZkE4SFVEcVJWVnl4cFlaR1ZlNWgxUWVUbElwajRITkIwZE1rMEJraEJCNmdPYWY0MHZQdmpUT0dFYkNtWStNVnhrT1diaTRGYVdMekpMaVE3b2xpaHJZQmpuYVM1SGRXQ2NJR2wvV0FUYlcrWWhYVWVJbWhBU0MyTm04UEp4OTlZakJjc0dqeTFSeFRJQ0dDQ0lJYzJRL1FGb244NUFSYmxValpHVFQ3SytPUTZUZlFhMElBNHNndkNDQUhmOG42bUpldmVVbzR6OUJaajFlaUNmRUMyUHVFTGxOV3g5TTdGMXFDZ1licjAxdUJ5UGlTY2lyUXg0Tkxwanc1SGpnL3A3ditxMWwvMTBXM040M3JncVFJWURNaXVJc3ZCaXQ3cy82enBsaHR6ZHNuUEw3M1BkT25jL1ZRU0YzbFRlME8yVEJzOFBOd3htaVNNbldwWXdwSkdZbEpzMHhaejlxMTJEZEVNUzhmVkZVSUNrYlJXM3ZZRHR5Zk1CcVBTMHFwMXpiV3NoSkFHakZZcHBPMjY3VWR2UnZTNDdEcHoyN0M2bm1NcVBYZjZXamRZZXZwMCtURUcrUUhYTndPY3RpNWpvTUIxeUlDUzFHNk9CK2ZMZzlZNVc4YnNwckRERnVaYWdtQ2hIT1VubmR3OXVmamhnZTg1cXhjVmlicmpKY1J2ZjBwWCtTMlZrbW1GWDBuUUZhSHFsRVpteGJZOXBZWlUxRjF4N1JTd2IzQzU5TDhTUkVkZU56dEVLN0VodUJHWi9EWkEzcmxXREZTcTB5Kzhwd2h5bjdIeVRYelY5Mm95U1B3NGdlRDhjTUczS1REZHNRQkMzUnJVelprNzNua3lFR053TCt1K0QwNXlnM29RZ05GM0JERzhnaWtvOW4yOWxiQTVVRy95dFd0c29ZMnkxaVZhRTMrWmRCTnZ1d3AzdGRraGcrejJvN0dKQnU2MGp5WlorQ1VzV2Y1TGNRWXNIK1RHU1FRR3FOQjBTcHZCc0FSUjNzU2RSSzdrZVBxWVAvU2J0V3ZEb0lOaDJZYWNzMWFzeVZOVHR5ZzZZdnFZdndjV1Voc0lZMHhPSFdrU1lVN2ltUVhwSldHS0c4TWJraVBxQVJza1g2UlZoQ0wreFZickdEelljYnBUdXQ4UUFZeGJ3b3czYkJJSE5OcGdMMXNZdlRvaEcwaUlSRW1kTHJiSUpZK0phOTFXSG1LNDQxb3E4ejhOdGhUUURoKyttaXRBK3p5ZWRWRHkzUG9rc20va2lxMmxSME01Y2V6SExlRGFkdWRxQnMwWXZuZkU4UmViSFVldHlRam9wc242UXlQd3VERk5FNDJsUDQrcm16YlRMSWViYmNjWGZjcnpzWlBxekJETVZicVd1aDR2ZDU5RWhhaEpMTEJwN3JWSjhqbmFpQVd5Nm5vZ054K2FrTHhxNWllTWVTVGROUzFRQlZ1V2RWdG1wTjRXNm9PQUZqMVpSQzRiVHg5ZkpqU2RQa2t6dDZVVndIMUZ1ZTRjaWlDa2wyb2loKzN4QTRiYWhBRDhtTXBwK2prTjNjbGV4UExyL3U2SDFqMVRyclFTa1dtNkZreFNUWm5LVWpHNEhNd1pJdHgwZWd4dTBteEJpeTNNRkJQRmhUcWVDWUJKUmRHdUtGbUQyWjJMczFaNWRZVDNnK2JhQkY3RUFVTzR2c1NzTWplT2NhdENLTmNxdWd1SWdxdFFQQ2hxcXFHMHZ5SFA2Vkh0MnByUXNRZFBUY1NoTlZhMDV1R2NMdkxKOG9pVzhUKy82VFp0TEZDY1g2bE9ZcjdBSFVXdWx4eTZ3UUZFMUxoYTJXVUwzbnpmQUxKTXZ1V3NTVmxNY25EejVJb05aV1JySHNwWk05N0VFWndpTklBZjJhQ3RQWWVYT2pMdGwweXhqU1NKMWJvNjhVTGlmTnJSbTBTTXRzaVlCeDJra2FTU0pGNk9zMjQ3Qlg2dS9sOVEzeGVOMDN3azZ2bWJzWWxFdDIvNjNjdmVQaEdrNUFiNE16ZWJLczREdTkvYkt5QVpBczJ0VXkxV0oxQ1NxbXlxbUMvdDY0Z3Zoak4xOHB2WFlNWFI2NkJoQ3g2V293c3hkeDNvZnRPRXlpNTRUd3VQSDBZTlh5dnh5NkpqczlPWG9lcDErdlBja041N3NvVXNyVStXWDluZ3ZmNjVJWlpTcDQzVGNUQ2tvczE2TjZWRTN6SkVVbnc0WDhpa3h4UmVHMDN3cWtqdmRTSS9wMUk0RGNzRWd2QTJEQWtVWnpQZGNZZEUwK3lvMEdkODhjUEJOb3hQdzV0ZUtEaDR3dmVWa1hXM2J2cnlpUVBXVXV2bzlOb0hqazZ6M0NKRUpDWGVvMFE3MVB5NXlpNUtMUkRlWm0yc0JtdG5tYWNYMEFobzRRRGZRZXFMTEZHMk1LQXpkWHA3ZW9EQm0xQjdrMXhUdXo2UVNqWUwxSTgvdjRwVGgzYmJheG9lQ3dyNnMzMXZFdGRjZkxzNEt6ZlM3MXVWN0kvVTlxNHl2RmFQbVZpUzhwTTFwaHIzazdNWEt0cFpWQ0diWHFTVTdzRnBzQjYybTJhZmN4M2xmYVVRdGNaU2FWenhkdUwxNkROZjdZdCs3ZGMzeGpsQUJmWUsyczRLSlRZSytjSHVha01qZXV6UlUralB4THJZdGQzK3VqOHZNQnFxNHZ0QTd3aWxtbWhsbnhscGc2MU9mMlZPRkpuQVdMS0NzK3hnaERMTmVmdXhvWWtXU3hWZDFQZWhSbXN5cENVTjlXWXVLNDkrZE5DVlVGaWU4T0ZtU3NEQm5nSmRUa3h2elVPOXplK05qZXhaSVd4bHl3bkc2UlJiUm81NEVRZG1kRjZZM3lzTDNNN0FIN2s3RlpRMTQ1UlhpanFxQzIxSnJ1WVEzU3VNVi92QU53a3pCcCtRWStUeDRSc2dQS1lZQ0lTUDhnTU80WG5CbGNUN3BEYThER1dhWmFJWXlDRE9qTS8xd0lqMVdpWE56b1VaeWdrN0lDYWN5M2l0WmZvYzk4Um8zRDlWaU84Kzc0cFdVZ2YzZWJ2WU85aExPRGs0dWV5ZG5pYWV4TnVld1cyaitDVm9JZnI4bkZVdGZTa25ZbGt3aXNzeGJrK3NqcVc0cWtta1BQWXA1dURIMWJORHl4SmVYcS9QQ0RWbWlmRkZzUHZRL1lwUmJFRmErWVgxNStEQTRvZkowdWNWWWw5UTlpcm8wVklZSmNqc042bktQMWlkQjZKT1UxYUpDUkRPRkF0WE9IbFF3S1ZvU3NLMURUMi9GdG1HRFR4OC9SZDVDeHhQblpCTlB2STFvN0ZmdWkwV2JYWVdvdmc0WllqZmJOUEVsdldET3B0Sm5sV0tGY21FNEdHeWRXakUwTExCdGprV0crcnBDNU5wYzlGZ1lJNmJSek9FSjJlVExEcTNZMmdtRzhQVEZTOFRLMlhRcUc4d2x2WnA0MENaV2NBOTRyS1NLdERKbk9IeEs1Vkg5djMweWU1SXprVE1CMHRWc3JIanVzUmZmamMyT0plSVMwblBNaVhIUGx4Sk5MQ0ZOQzFrV1ZzWWpjY2w3NFVYWnhYaEdRcXhPbFgxUVRWalpPNFZDOW5xMUxqYUZMRHlTS0RsVmlpQkx2SzRSUEFCNjlDMDJnL3NtU2lnVkVFRVlwRll3a09keVFjak5FSEF4Qzg1TmpwOFZSSTZRTG9UZWhCOUxYcGZIejluQThYdUdGWVJzQ0FIaU9YSWtvSXNMRzBoaUYvbVc5QlNFOUlkU3duemN6L0VUYjNOSWZNQkp6cU9mMVBMSG1YTXQ5YkhJRWVFSXVRNnlYY09pcFFOa2k4NGVaT1BwdjM0V25qaTdjemI3Uy9yY3duUExqRXpwOHhidHEvSHhuLzRySmxvSThTZi9abWJ1L2ZMVXhVQUl3a3FScXd0WmlCSktPMmxkWFpoRmtKUzJhQjE2ZzB6bUd4MnVqV3gyTjRRbkR4MllEcHJoSHViT0JOM010eC9pM2pxUUR3WDJyVVdMb2p0UkVGNEJtSEQ4cDR5NE4zOFJZZVZvWlh4b1Z4eEU5K2Yvc3ZDYjg3a2hLU2FLeGQ4clRhRXo2WjNTakNOM1g0T1hCK2dMMitub1U5Y3lKdGFGcHI2Ym1idjhyTTFxNWYvY3A4cFg5WDNHYjdKYnp5N1c1NnVvWDNTMjJqcjFMcUVlM3Z6QUwveng1cW16eXR6aHJ3MmpUY2VXZVJPUFhtaTltQkhmK3NDM3pGN0RpYno4M1ViRHp1dys3NUFnaytmM1JJUGUreDJvc0V2eStSSGlWY1I3TkUydW1COFd2aDU1ai9Vb01rVnhHU0VocGNjeTBwUXcvUFhBUzJxVnVhbi9DSC9RdXRUZnBEVERpdEQ0Q0pYN3VDb2kzbWdNYXdvTFgvenUzM0YzaENwK0txVHAvNmIwRmxucTFDOEw4TEZVQlZzcWVPM05UOWQ4QmZhdGovTi9mOUFSZURYaHJhU0ZlK3JaUDI5NEFtcWQzMDNCaWpQcWZXckl1L3VCWEhCbzJjYU9ZdStNTjhMckgzYXJtOTR2UGp4Mk1abVNDekllTEdLR1FFNGxYemorNFJjOEZ1RUZJc3g0aXpzMkxqc2trRzBXYUxEcHB1N09uY01SdzRmRGg2ZUhNMElFS1JRZ2p2SGtpd01mZnNIVHZGcTN2TXRydWszM1UvREZRUlJralByMXlPRkFMNm8wUjUwZXlPcnFZQjJVZFE2NC9GZEJSVVpTVVc1NTVkclZXUUtic0ducjVzNzIxN3dYWkFjakRmTGhPYm5KMkthTy9aMXpxS0k4TjZtb0lxT2dwck5qMnlaUms4QzJKb3N5L3NiRWJsb3FOLzA0YkZCRUhwUmRPTXBVclYxallhZW9hVnU3SGRWUVVKV1ZWSnlyUTMvY1N6Smwyc3BhdXVuT2tXR2JqWUt5MVZscnEwdHpra3Fxc2liMnErMXM5QmFPT2pQSmRBOTJIdVE5L2dUdmg0QVIwVWpBOXc4SGpBcEhQQjJlRWVGb1FQdkpjN3FMOUJQSlJPZ1lTYWYxVHZrZWY5eW45NzMwa2kvUGQybk5Fdks5c21ZbmdINk0rK1g1eHAvM1JEZisvbEpzVUQzZFlSRDhzOTJXNVE1ak1ST2wzU3VsQjBXMkdHdXNOY2JHbG1aWVV5eVpVdUdZZWh4eXpCK3YvWDZ0U3JDcUhoaFFyMndvRUt6N2ZsMmdLeExVaDcxc0NVNFlvN3orNy8xZWFpekJQeGNkTmZkVHdwaWdKd202OWRPY2dKcjdlNnZ2UjltY3I2alFjSExMaDk3Q2VaNWJPaTkxVjFlTnZOdXkyenpiRXR2WmI3ODVhNU54NTJSelBKbHR0c0hzZVczb281anB1UEhZYVU0aDgwRTVLZG9oSWlSdU1Wbit2bVlxZmlwMlNqaXRxUjRneFc0eElkNHVKZ2VNMXJHNHFkanh3YXp2T3lkVVFuRExrODczcmVOeFk4YXBscUlCVXFHZmFaaXc1aTJtNDdrY3JOTHRya1FWcU51TktqMzQvTVJUaWR4dVo2WDA5MXQybVpIdkR6UnV5M2NwN0xkK2IvMldHNDFWS25mVGt6cVBlMUJsdDd2Q0tlMjY5YnZVR09qbkcyVXFJTDhxS2FaQmFVMFZNdVJSNmFuWDZFNXBPYW1SRDRHbUlmYnN1K0NMLzY2a3RTL0h0Y3FOR3cyN3VnM1ZWVnk3UExYOTYwMjVlMjdDUUlYRUtmVFRUa2tGRFBRcEdlT3ltTG95QmpSRVJhMFcwOVJVYXBBT3IybjQzcnhIUVZTdGV1UVIrOHNQMjdGa1JKVnJVKzk1S1ovOWhWS3U0cGp5MU5QZnZhelQrZXpJc3dXM3k2T01NMVVMV3daUmt3WTdJVm1WM0o4ZmgycFg3MGs5WUo3NURBUTVidmRzc1NPZlR2ZnlkemVXcWJkeDVLcVNpMnkrOVB6OVZWTFhIbFFiVjlDZnZFcHlBdE9ncHBaQm1GZjJ3SXZLaDB0YStPSU4xbG5vM05qZENhUWg4UU9kaStQZXNXakZ6Znlmb1NyaHhaQU0vYy90V3R3NTAxcHdWYVFNdlB2Q2ZmemU1U1JMTzVXNkFSRWx1bjNrK3kvZ2Zmd1haL2w4dURvN3ZjK0pPOXUxUDkvVnZYQTdVRlNkVlJEZ084UE5Fd3dSNFd2RmlHRVc5L0x1eVdaNVJyQlZRREVuZW1DTnBDQnd0VGFWTjN0RjlaNWcyZ1o2NWhXQWFnL2VnbnZtbFh0Q3VJZndtOWJnTk10NDJua01aYXdFd3Z6Z3Bkc0o3Q1B3bi9seHFaZnNjVlozMTE5NC9LbW4vSURiSWlaUUQzTHBkbldxQjgvQWU0dmVONDR2a3hrRlNOeUR2ZVh0bXNSK2d4RWUyT0lnVDRTcS9sUm9DTDZkeTgrMVUwdC9JM24vUGVUOGZ1SVNNenJ2ajlldVEvajlHVEZnTUU4U3dCOEdsRGdva2Z6ZWljZUxiaVpHbUg0MlA3OS9VM3lLT0FhUnk1ZEFEcnBSUTBscWh2ZC9tbGJqQXVuaU0rQ1BndFI2dUUxSVUweFZIOGdqclh2T0FBY2l6MWtnSVY1MjZ4YWM4OENEekhNQlNGQ2VTMEVCdXZZemtNQWF3QUVSQVFDTVEzL3JIQUloUEg4T0F3R2NBcHkzYmdZSXJMdDFqZ1V5K05ISHhqYUVuK09DRFVtNnlJTkVOSXA2YjRLZ1dKdnFiTWh5Y2hhcnZVMzFiL1FsZ2hCUHU2bC9sRXljekhRMG1SVi9ZVUp4NFpBUGZxYnFqQk51eldmTEJtTmswd2szYUhVVVVOVHR4bVBYZHh4WmJxOTZxQVZCL1V0clU1M3ZKTXZKZlY5N1o2di9qYjVFRU1rcngzZitvMlQ2Y1RNZFRUVGtMeU5wdlRJdVlqNzRtUkxtRE9YQzdUYjAwMk1ZRndWc09uNTlEVm9kQlFQZTdjYmtVMDdYR0lVZjJqWUZJNlB5dlhiZWNyT01ySnk4Z2lMRlNuNkpuVUxsS2xTcVJyV3FVNzBhMUtnbU5hc0Z6UG9Za28vVWtDM3AyVU5Tc3czQWo0THBYQ0M5TnBUaW9QNU0weTNRVWE5bExSVUJyeVozT1hEWEM0VjArSjdnU1ZsK1hXaDJWOXJ0REdySW9UUkZxQUllYW9DbmZZalVPK094ZEVpWFFMMWp1UkJIZVBEQVN2Z1lDU1UybFFjblVrNWU1ZWtIRy9tQTh0TEVRbldhcm9XeUZCNkRoWDBidTQvald0c1RrWmpwNHlieTZnb0FBQT09JykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLCBcXG4gIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCdzdmcnKTsgLyogaU9TIDQuMS0gKi9cXG59XFxuXFxuLl8xdDF3RGU2Z2lkMUJUMkh1VFpCU0cwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaWNvbmZvbnRcXFwiICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5iczc3Ui1NVDlvVUJrdW9HVll2S2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTY0MlxcXCI7XFxufVxcblxcbi5fMk1fSnN6QmNSNEZSbDdFVHE0anlLMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNmM2XFxcIjtcXG59XFxuXFxuLl8ydTlPMUkyemJXYzNRQ2dUQlVTZ3M5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MDdcXFwiO1xcbn1cXG5cXG4uXzExZDhVRV9OMFhaeE1hSTd2VFZLSnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTZkYlxcXCI7XFxufVxcblxcbi5fMnVCa01ZN3FpZ0FxdER1VVVzS2Y0ODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjA1XFxcIjtcXG59XFxuXFxuLm54dGU1TkNIcDBpbEhuT0U4OUViQzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjJmXFxcIjtcXG59XFxuXFxuLl8xUXY1QVhNeFFnZUhMd1RqSWEwYjJ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MGFcXFwiO1xcbn1cXG5cXG4uXzJoUmJraWdfNVBRZDMxUU1PTk9CM2Y6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxNFxcXCI7XFxufVxcblxcbi5fM1ktcG5keUlBckFHbUlTY1c3ekFWSjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNzlkXFxcIjtcXG59XFxuXFxuLl8zUWJ4cElpNDFRZGVmQ0ZNaHptTUdkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2ZGRcXFwiO1xcbn1cXG5cXG4uXzJkSUhIbWEyeUxiT2M3MnlaV2pmRk06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTY1NVxcXCI7XFxufVxcblxcbi5fM2d2REhSMkdmUC13T3p5eGZYbjItODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjAzXFxcIjtcXG59XFxuXFxuLl8xaUNEUDRuY2dFRkR2MG80MEx4TGdpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MjFcXFwiO1xcbn1cXG5cXG4uXzNUT3pmOE5aOXY1VEtOMTdtR19NZWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTY0MVxcXCI7XFxufVxcblxcbi5fMV80VjNGeHdzZ1dqdVVwaHJLSkRiNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjExXFxcIjtcXG59XFxuXFxuLl8xcnBXQU1FN25EVGlKZUM0Z3FtbFg2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MDBcXFwiO1xcbn1cXG5cXG4uXzFBMGZCUUhkc3gzdzVEUVhuWTFQOXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYwOFxcXCI7XFxufVxcblxcbi5NS1FXQVZSdm9xNnFzb3Rnd25NUVo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYzM1xcXCI7XFxufVxcblxcbi5fNW40VjNFbTJ2emxQb2xLbko0V3o4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2OTZcXFwiO1xcbn1cXG5cXG4uXzF2R3hiQUduUnN6TzQyVXF1VlRhdFE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTY2NlxcXCI7XFxufVxcblxcbi4tVTM1eDZmSFJ4OHdaWXV0VnJIRU06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTY1NFxcXCI7XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpY29uZm9udFwiOiBcIl8xdDF3RGU2Z2lkMUJUMkh1VFpCU0cwXCIsXG5cdFwiaWNvbi1oYW5nbGlqaWN1blwiOiBcImJzNzdSLU1UOW9VQmt1b0dWWXZLY1wiLFxuXHRcImljb24tZ2FudGFuaGFvXCI6IFwiXzJNX0pzekJjUjRGUmw3RVRxNGp5SzNcIixcblx0XCJpY29uLXJlbnl1YW5cIjogXCJfMnU5TzFJMnpiV2MzUUNnVEJVU2dzOVwiLFxuXHRcImljb24tamlubGluZ3lpbmdjYWl3YW5ndHViaWFvNjBcIjogXCJfMTFkOFVFX04wWFp4TWFJN3ZUVktKc1wiLFxuXHRcImljb24tc2hvcFwiOiBcIl8ydUJrTVk3cWlnQXF0RHVVVXNLZjQ4XCIsXG5cdFwiaWNvbi1odWl5dWFucWlhXCI6IFwibnh0ZTVOQ0hwMGlsSG5PRTg5RWJDXCIsXG5cdFwiaWNvbi10dWFuZHVpMlwiOiBcIl8xUXY1QVhNeFFnZUhMd1RqSWEwYjJ6XCIsXG5cdFwiaWNvbi1pY29uXCI6IFwiXzJoUmJraWdfNVBRZDMxUU1PTk9CM2ZcIixcblx0XCJpY29uLWRhc2h1anVyaWJhb1wiOiBcIl8zWS1wbmR5SUFyQUdtSVNjVzd6QVZKXCIsXG5cdFwiaWNvbi1odWl5dWFuZ3VhbmxpXCI6IFwiXzNRYnhwSWk0MVFkZWZDRk1oem1NR2RcIixcblx0XCJpY29uLXlld3VwZWl6aGlcIjogXCJfMmRJSEhtYTJ5TGJPYzcyeVpXamZGTVwiLFxuXHRcImljb24td3V6aWd1YW5saVwiOiBcIl8zZ3ZESFIyR2ZQLXdPenl4ZlhuMi04XCIsXG5cdFwiaWNvbi1nYW90aWVcIjogXCJfMWlDRFA0bmNnRUZEdjBvNDBMeExnaVwiLFxuXHRcImljb24tamljaGFuZ1wiOiBcIl8zVE96ZjhOWjl2NVRLTjE3bUdfTWVoXCIsXG5cdFwiaWNvbi14aXRvbmdwZWl6aGlcIjogXCJfMV80VjNGeHdzZ1dqdVVwaHJLSkRiNFwiLFxuXHRcImljb24tY2xvdmVyXCI6IFwiXzFycFdBTUU3bkRUaUplQzRncW1sWDZcIixcblx0XCJpY29uLWppbmd5aW5nc2h1anV0dWlzb25nXCI6IFwiXzFBMGZCUUhkc3gzdzVEUVhuWTFQOXNcIixcblx0XCJpY29uLXFpYXF1YW5cIjogXCJNS1FXQVZSdm9xNnFzb3Rnd25NUVpcIixcblx0XCJpY29uLWh1b2RvbmdwZWl6aGlcIjogXCJfNW40VjNFbTJ2emxQb2xLbko0V3o4XCIsXG5cdFwiaWNvbi10dWFuZHVpMVwiOiBcIl8xdkd4YkFHblJzek80MlVxdVZUYXRRXCIsXG5cdFwiaWNvbi10dWFuZHVpXCI6IFwiLVUzNXg2ZkhSeDh3Wll1dFZySEVNXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSAuXzE3Y25Wejg3eXpTT081VHBGZG5Mc2sge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4LCAxMDBweCk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYXZhdGFyXCI6IFwiXzE3Y25Wejg3eXpTT081VHBGZG5Mc2tcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvc3JjLzEuanBnXCI7IiwiLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci5qcydcclxuLy8gaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9zaWRlYmFyLmpzJ1xyXG4vLyBpbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbnRlbnQuanMnXHJcbmltcG9ydCBhdmF0YXIgZnJvbSAnLi8xLmpwZydcclxuaW1wb3J0IHN0eWxlIGZyb20gICcuL2luZGV4LnNjc3MnXHJcbmltcG9ydCBzdHlsZTEgZnJvbSAnLi4vZm9udC9pY29uZm9udC5jc3MnXHJcblxyXG5jb25zb2xlLmxvZyhzdHlsZTEpXHJcblxyXG5jb25zb2xlLmxvZyhzdHlsZSlcclxuLy8gaW1wb3J0IHN0eWxlIGZyb20gJy4vaW5kZXguY3NzJ1xyXG5cclxuXHJcbiAgbGV0IEhlYWRlclxyXG5cclxuICBpbXBvcnQoXHJcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm15LWNodW5rLW5hbWVcIiAqL1xyXG4gICAgLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXHJcbiAgICAnLi9oZWFkZXIuanMnXHJcbiAgKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAvLyB2YXIgSGVhZGVyID0gbW9kdWxlLmRlZmF1bHRcclxuICAgIEhlYWRlciA9IG1vZHVsZS5kZWZhdWx0XHJcbiAgfSlcclxuXHJcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnXHJcbi8vIGNvb2xlLmVycm9yKCdUaGlzIGlzIGEgZXJyb3IhJylcclxudmFyIGltZyA9IG5ldyBJbWFnZSgpXHJcbmltZy5zcmMgPSBhdmF0YXJcclxuaW1nLmNsYXNzTGlzdC5hZGQoc3R5bGUuYXZhdGFyKVxyXG5cclxudmFyIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbnJvb3QuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9JyR7c3R5bGUxLmljb25mb250fSAke3N0eWxlMVsnaWNvbi1oYW5nbGlqaWN1biddfSc+PC9kaXY+YFxyXG5yb290LmFwcGVuZChpbWcpXHJcblxyXG5jb25zb2xlLmxvZygnMTIzJylcclxuXHJcbnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKEhlYWRlcilcclxuICBuZXcgSGVhZGVyKClcclxufSwgMzAwMCkiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTMhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=