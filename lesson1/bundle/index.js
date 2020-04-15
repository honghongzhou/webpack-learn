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
/******/ 		"index": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"my-chunk-name":"my-chunk-name"}[chunkId]||chunkId) + ".js"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZm9udC9pY29uZm9udC5jc3M/MjQ4NiIsIndlYnBhY2s6Ly8vLi9mb250L2ljb25mb250LmVvdCIsIndlYnBhY2s6Ly8vLi9mb250L2ljb25mb250LnN2ZyIsIndlYnBhY2s6Ly8vLi9mb250L2ljb25mb250LnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250L2ljb25mb250LndvZmYiLCJ3ZWJwYWNrOi8vLy4vZm9udC9pY29uZm9udC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzPzJkZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7OztRQUlBO1FBQ0E7UUFDQSx5Q0FBeUMsZ0NBQWdDO1FBQ3pFOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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d0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsdVNBQStKOztBQUVqTTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaW5kZXhcIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcIm15LWNodW5rLW5hbWVcIjpcIm15LWNodW5rLW5hbWVcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9pY29uZm9udC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxNmFjZWI0NjE3NmY5NTllY2Y2ZmM0ZDZmZmU2OTdhLmVvdFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiM2U4ZDFmODVhMGRiNmE0Nzg5MTg4Y2Y4OWRjMGU1Mi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDE3Y2FmNTU5MGI5N2FmMTE1ZmY5Nzg3ZGFmYmM0YmEudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc4ZjY2OTRlZTNkNGRmMGJkMmUzOGViMjNlODFmZjJkLndvZmZcIjsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vaWNvbmZvbnQuZW90P3Q9MTU4Njg0MzQxMDQzNFwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL2ljb25mb250LndvZmY/dD0xNTg2ODQzNDEwNDM0XCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi4vaWNvbmZvbnQudHRmP3Q9MTU4Njg0MzQxMDQzNFwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCIuL2ljb25mb250LnN2Zz90PTE1ODY4NDM0MTA0MzRcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCIjaWVmaXhcIiB9KTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fLCB7IGhhc2g6IFwiI2ljb25mb250XCIgfSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge2ZvbnQtZmFtaWx5OiBcXFwiaWNvbmZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyAvKiBJRTkgKi9cXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIFxcbiAgdXJsKCdkYXRhOmFwcGxpY2F0aW9uL3gtZm9udC13b2ZmMjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHTWdBQkFBQUFBQlA4QUFzQUFBQUFJMFFBQUJPdEFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSEVJR1ZnQ0dFQXEwTUtsWkFUWUNKQU5ZQ3k0QUJDQUZoRzBIZ2pnYjl4eEZJYkJ4Z0NCanZoMnkvK3NFTFE0clhIc1RhZjBiYThDNFFyVnBBaCtzYXhqMXNnV1dmeEI3K3NLSTdXK2FLaEk4dUtvM1ZhUXJFaHhUM2NpeFF5bmhuLy85dnUxejdUMGZFNnZlQmxISjVMOW9KRWlUMER5bDQ0bG9kVFIwZmc4UXJGUVBnTUgzcWsvdW5Bd094YTVQUm5Hd1gvT2J2TS9XaTRlWjJlSUVGR0crVGJYU1U3YWZmbUtZMHRyNmJhKzdqQVhJaDVFalJKcUtoeVJUYkJ2eWdYQU95TTdQMDdaNmYyYUFFWVFoQktQR0tOZ3dlZ05jaGxKUWRnVzB3Y1k2MmNSTjhVN2RUUGFLUyt1cTlXNzFvdFROZEsvQzVTcjl2Mm5OSmt1clRSak84VkE4RkVyT0pObnlrN2t5MStkYW4ydDlRaTJxT1l4RXFNM1Y1RXB0YXRlaEQ0ZEVlYXhBV0kxT1d5c3o4VXU1cGhNZmFqRGM4cGpWT0RHS0VsaVYvZGszQktSME00azJQN2ZQRStPWTYwSzE1L1RvRHZGUkZFNnlTOFJoZ2RPbWkvVUdUMnhlbWEvQWEvYnJkY3k4WWpCNHk3eGZweDl1M1dkMWovMTNWcXRXcnR1WDdMcGpRTGM5c01BazRNQTRidUovVzVoa1Jzb1RIYitBWVhySi9JVTk5cXlQMDdyR3ZwbUY5UXNQZC9iZTcvM1orN2YvcmxyVkNSazlkTzM4Mjg2VHhmQWk1T2lENDB6K2R4N1VrdU94MUJGUlEweEJvSjRTMFVSR0l3MFlIQ2tKS0lBS09ZRDhKNEFtMklOU2FobXhvT1FnSGpvZ0VYUmtKQWFsRGlTRkRrZ2RLRFVnamREUkkzMmdGQ0F6b0FTUUJWRHFRZFpBS1VIV1FSSEllYWh4SkJkQXlVQWVRaWNNc2dOS0E4aG5VQXpJSDFBY3lEOHdVbTRLRFkrUkFOQ01OaWFCRnhEdlF2cVQrZGEzb3NGaGlmR0VCM0lpMy9EMURjeWlJQ2JEU1d6ZGVGcFhVeVFUdVdwcms5YkdSRXVQTGZVV3FxL3Zsbm1laGE0eUdSMVZyWU9yQjVWUmkxM0ZhSDVUUTJnTHMyTWh2bDNkcnE1SmxUeVBrdWFaQk5KbFhVV1MxL2ZQNnZKejJiQW9mUy9VNWRDQUFWWDkxT0lzSk9rQzlEYXVBNnQyZW5YNE41bVBnUmF3Q01JODZ6TCtrUFh0K0YrNllJZjNZaUsrOTZ3YTVMYW5UMGtqQjFYTWt0SWdQaGRUbzV3K0tibHk5bFdTN3FJaDNORDZnajJyWDJmN3c4cUI1dE9RUkJjVHlRbFgrVTcvVGJjY3V4OE5hMUpMTVdkZHZWbG4yL2ZkV210Q20xZVRJc3Y2blZWcUphYWtKYktNdEZZTmV0RkFYQTZxZ2UwWGovVVRVVndXRWxML29uTDlzVkFvK1ZXU2ZyVU9PTS82ZDI5N1VRdmQ2eGRVSzhKNWJBUzhiTmlvWUtKNTFKWHZQeWVSUzlHZUh0N0VLbzZOMFJCb0NrckxkMVNnWCtza3pnYWZrc1hnRVdiWnlHdkpxdStZVGYwU1NHcWtFcUtmaDVpQ1dSRktuTTc1SDQrTXU5MFZpUWZBOEhVRHFSVlZ5eHBZWkdWZTVoMVFlVGxJcGo0SE5CMGRNazBCa2hCQjZnT2FmNDB2UHZqVE9HRWJDbVkrTVZ4a09XYmk0RmFXTHpKTGlRN29saWhyWUJqbmFTNUhkV0NjSUdsL1dBVGJXK1loWFVlSW1oQVNDMk5tOFBKeDk5WWpCY3NHankxUnhUSUNHQ0NJSWMyUS9RRm9uODVBUmJsVWpaR1RUN0srT1E2VGZRYTBJQTRzZ3ZDQ0FIZjhuNm1KZXZlVW80ejlCWmoxZWlDZkVDMlB1RUxsTld4OU03RjFxQ2dZYnIwMXVCeVBpU2NpclF4NE5McGp3NUhqZy9wN3YrcTFsLzEwVzNONDNyZ3FRSVlETWl1SXN2Qml0N3MvNnpwbGh0emRzblBMNzNQZE9uYy9WUVNGM2xUZTBPMlRCczhQTnd4bWlTTW5XcFl3cEpHWWxKczB4Wno5cTEyRGRFTVM4ZlZGVUlDa2JSVzN2WUR0eWZNQnFQUzBxcDF6YldzaEpBR2pGWXBwTzI2N1VkdlJ2UzQ3RHB6MjdDNm5tTXFQWGY2V2pkWWV2cDArVEVHK1FIWE53T2N0aTVqb01CMXlJQ1MxRzZPQitmTGc5WTVXOGJzcHJEREZ1WmFnbUNoSE9Vbm5kdzl1ZmpoZ2U4NXF4Y1ZpYnJqSmNSdmYwcFgrUzJWa21tRlgwblFGYUhxbEVabXhiWTlwWVpVMUYxeDdSU3diM0M1OUw4U1JFZGVOenRFSzdFaHVCR1ovRFpBM3JsV0RGU3EweSs4cHdoeW43SHlUWHpWOTJveVNQdzRnZUQ4Y01HM0tURGRzUUJDM1JyVXpaazczbmt5RUdOd0wrdStEMDV5ZzNvUWdORjNCREc4Z2lrbzluMjlsYkE1VUcveXRXdHNvWTJ5MWlWYUUzK1pkQk52dXdwM3Rka2hnK3oybzdHSkJ1NjBqeVpaK0NVc1dmNUxjUVlzSCtUR1NRUUdxTkIwU3B2QnNBUlIzc1NkUks3a2VQcVlQL1NidFd2RG9JTmgyWWFjczFhc3lWTlR0eWc2WXZxWXZ3Y1dVaHNJWTB4T0hXa1NZVTdpbVFYcEpXR0tHOE1ia2lQcUFSc2tYNlJWaENMK3hWYnJHRHpZY2JwVHV0OFFBWXhid293M2JCSUhOTnBnTDFzWXZUb2hHMGlJUkVtZExyYklKWStKYTkxV0htSzQ0MW9xOHo4TnRoVFFEaCsrbWl0QSt6eWVkVkR5M1Bva3NtL2tpcTJsUjBNNWNlekhMZURhZHVkcUJzMFl2bmZFOFJlYkhVZXR5UWpvcHNuNlF5UHd1REZORTQybFA0K3JtemJUTEllYmJjY1hmY3J6c1pQcXpCRE1WYnFXdWg0dmQ1OUVoYWhKTExCcDdyVko4am5haUFXeTZub2dOeCtha0x4cTVpZU1lU1RkTlMxUUJWdVdkVnRtcE40VzZvT0FGajFaUkM0YlR4OWZKalNkUGtrenQ2VVZ3SDFGdWU0Y2lpQ2tsMm9paCszeEE0YmFoQUQ4bU1wcCtqa04zY2xleFBMci91NkgxajFUcnJRU2tXbTZGa3hTVFpuS1VqRzRITXdaSXR4MGVneHUwbXhCaXkzTUZCUEZoVHFlQ1lCSlJkR3VLRm1EMloyTHMxWjVkWVQzZytiYUJGN0VBVU80dnNTc01qZU9jYXRDS05jcXVndUlncXRRUENocXFxRzB2eUhQNlZIdDJwclFzUWRQVGNTaE5WYTA1dUdjTHZMSjhvaVc4VCsvNlRadExGQ2NYNmxPWXI3QUhVV3VseHk2d1FGRTFMaGEyV1VMM256ZkFMSk12dVdzU1ZsTWNuRHo1SW9OWldSckhzcFpNOTdFRVp3aU5JQWYyYUN0UFllWE9qTHRsMHl4alNTSjFibzY4VUxpZk5yUm0wU010c2lZQngya2thU1NKRjZPczI0N0JYNnUvbDlRM3hlTjAzd2s2dm1ic1lsRXQyLzYzY3ZlUGhHazVBYjRNemViS3M0RHU5L2JLeUFaQXMydFV5MVdKMUNTcW15cW1DL3Q2NGd2aGpOMThwdlhZTVhSNjZCaEN4Nldvd3N4ZHgzb2Z0T0V5aTU0VHd1UEgwWU5YeXZ4eTZKanM5T1hvZXAxK3ZQY2tONTdzb1VzclUrV1g5bmd2ZjY1SVpaU3A0M1RjVENrb3MxNk42VkUzekpFVW53NFg4aWt4eFJlRzAzd3FranZkU0kvcDFJNERjc0VndkEyREFrVVp6UGRjWWRFMCt5bzBHZDg4Y1BCTm94UHc1dGVLRGg0d3ZlVmtYVzNidnJ5aVFQV1V1dm85Tm9Iams2ejNDSkVKQ1hlbzBRNzFQeTV5aTVLTFJEZVptMnNCbXRubWFjWDBBaG80UURmUWVxTExGRzJNS0F6ZFhwN2VvREJtMUI3azF4VHV6NlFTallMMUk4L3Y0cFRoM2JiYXhvZUN3cjZzMzF2RXRkY2ZMczRLemZTNzF1VjdJL1U5cTR5dkZhUG1WaVM4cE0xcGhyM2s3TVhLdHBaVkNHYlhxU1U3c0Zwc0I2Mm0yYWZjeDNsZmFVUXRjWlNhVnp4ZHVMMTZETmY3WXQrN2RjM3hqbEFCZllLMnM0S0pUWUsrY0h1YWtNamV1elJVK2pQeExyWXRkMyt1ajh2TUJxcTR2dEE3d2lsbW1obG54bHBnNjFPZjJWT0ZKbkFXTEtDcyt4Z2hETE5lZnV4b1lrV1N4VmQxUGVoUm1zeXBDVU45V1l1SzQ5K2ROQ1ZVRmllOE9GbVNzREJuZ0pkVGt4dnpVTzl6ZStOamV4WklXeGx5d25HNlJSYlJvNTRFUWRtZEY2WTN5c0wzTTdBSDdrN0ZaUTE0NVJYaWpxcUMyMUpydVlRM1N1TVYvdkFOd2t6QnArUVkrVHg0UnNnUEtZWUNJU1A4Z01PNFhuQmxjVDdwRGE4REdXYVphSVl5Q0RPak0vMXdJajFXaVhOem9VWnlnazdJQ2FjeTNpdFpmb2M5OFJvM0Q5VmlPOCs3NHBXVWdmM2VidllPOWhMT0RrNHVleWRuaWFleE51ZXdXMmorQ1ZvSWZyOG5GVXRmU2tuWWxrd2lzc3hiaytzanFXNHFrbWtQUFlwNXVESDFiTkR5eEplWHEvUENEVm1pZkZGc1B2US9ZcFJiRUZhK1lYMTUrREE0b2ZKMHVjVllsOVE5aXJvMFZJWUpjanNONm5LUDFpZEI2Sk9VMWFKQ1JET0ZBdFhPSGxRd0tWb1NzSzFEVDIvRnRtR0RUeDgvUmQ1Q3h4UG5aQk5QdkkxbzdGZnVpMFdiWFlXb3ZnNFpZamZiTlBFbHZXRE9wdEpubFdLRmNtRTRHR3lkV2pFMExMQnRqa1dHK3JwQzVOcGM5RmdZSTZiUnpPRUoyZVRMRHEzWTJnbUc4UFRGUzhUSzJYUXFHOHdsdlpwNDBDWldjQTk0cktTS3RESm5PSHhLNVZIOXYzMHllNUl6a1RNQjB0VnNySGp1c1JmZmpjMk9KZUlTMG5QTWlYSFBseEpOTENGTkMxa1dWc1lqY2NsNzRVWFp4WGhHUXF4T2xYMVFUVmpaTzRWQzlucTFMamFGTER5U0tEbFZpaUJMdks0UlBBQjY5QzAyZy9zbVNpZ1ZFRUVZcEZZd2tPZHlRY2pORUhBeEM4NU5qcDhWUkk2UUxvVGVoQjlMWHBmSHo5bkE4WHVHRllSc0NBSGlPWElrb0lzTEcwaGlGL21XOUJTRTlJZFN3bnpjei9FVGIzTklmTUJKenFPZjFQTEhtWE10OWJISUVlRUl1UTZ5WGNPaXBRTmtpODRlWk9QcHYzNFduamk3Y3piN1MvcmN3blBMakV6cDh4YnRxL0h4bi80ckpsb0k4U2YvWm1idS9mTFV4VUFJd2txUnF3dFppQkpLTzJsZFhaaEZrSlMyYUIxNmcwem1HeDJ1ald4Mk40UW5EeDJZRHByaEh1Yk9CTjNNdHgvaTNqcVFEd1gyclVXTG9qdFJFRjRCbUhEOHA0eTROMzhSWWVWb1pYeG9WeHhFOStmL3N2Q2I4N2toS1NhS3hkOHJUYUV6NlozU2pDTjNYNE9YQitnTDIrbm9VOWN5SnRhRnByNmJtYnY4ck0xcTVmL2NwOHBYOVgzR2I3SmJ6eTdXNTZ1b1gzUzIyanIxTHFFZTN2ekFML3p4NXFtenl0emhydzJqVGNlV2VST1BYbWk5bUJIZitzQzN6RjdEaWJ6ODNVYkR6dXcrNzVBZ2srZjNSSVBlK3gyb3NFdnkrUkhpVmNSN05FMnVtQjhXdmg1NWovVW9Na1Z4R1NFaHBjY3kwcFF3L1BYQVMycVZ1YW4vQ0gvUXV0VGZwRFREaXRENENKWDd1Q29pM21nTWF3b0xYL3p1MzNGM2hDcCtLcVRwLzZiMEZsbnExQzhMOExGVUJWc3FlTzNOVDlkOEJmYXRqL04vZjlBUmVEWGhyYVNGZStyWlAyOTRBbXFkMzAzQmlqUHFmV3JJdS91QlhIQm8yY2FPWXUrTU44THJIM2FybTk0dlBqeDJNWm1TQ3pJZUxHS0dRRTRsWHpqKzRSYzhGdUVGSXN4NGl6czJManNra0cwV2FMRHBwdTdPbmNNUnc0ZkRoNmVITTBJRUtSUWdqdkhraXdNZmZzSFR2RnEzdk10cnVrMzNVL0RGUVJSa2pQcjF5T0ZBTDZvMFI1MGV5T3JxWUIyVWRRNjQvRmRCUlVaU1VXNTU1ZHJWV1FLYnNHbnI1czcyMTd3WFpBY2pEZkxoT2JuSjJLYU8vWjF6cUtJOE42bW9JcU9ncHJOajJ5WlJrOEMySm9zeS9zYkVibG9xTi8wNGJGQkVIcFJkT01wVXJWMWpZYWVvYVZ1N0hkVlFVSldWVkp5clEzL2NTekpsMnNwYXV1bk9rV0diallLeTFWbHJxMHR6a2txcXNpYjJxKzFzOUJhT09qUEpkQTkySHVROS9nVHZoNEFSMFVqQTl3OEhqQXBIUEIyZUVlRm9RUHZKYzdxTDlCUEpST2dZU2FmMVR2a2VmOXluOTczMGtpL1BkMm5ORXZLOXNtWW5nSDZNKytYNXhwLzNSRGYrL2xKc1VEM2RZUkQ4czkyVzVRNWpNUk9sM1N1bEIwVzJHR3VzTmNiR2xtWllVeXlaVXVHWWVoeHl6Qit2L1g2dFNyQ3FIaGhRcjJ3b0VLejdmbDJnS3hMVWg3MXNDVTRZbzd6KzcvMWVhaXpCUHhjZE5mZFR3cGlnSndtNjlkT2NnSnI3ZTZ2dlI5bWNyNmpRY0hMTGg5N0NlWjViT2k5MVYxZU52TnV5Mnp6YkV0dlpiNzg1YTVOeDUyUnpQSmx0dHNIc2VXM29vNWpwdVBIWWFVNGg4MEU1S2RvaElpUnVNVm4rdm1ZcWZpcDJTaml0cVI0Z3hXNHhJZDR1SmdlTTFyRzRxZGp4d2F6dk95ZFVRbkRMazg3M3JlTnhZOGFwbHFJQlVxR2ZhWml3NWkybTQ3a2NyTkx0cmtRVnFOdU5LajM0L01SVGlkeHVaNlgwOTF0Mm1aSHZEelJ1eTNjcDdMZCtiLzJXRzQxVktuZlRrenFQZTFCbHQ3dkNLZTI2OWJ2VUdPam5HMlVxSUw4cUthWkJhVTBWTXVSUjZhblg2RTVwT2FtUkQ0R21JZmJzdStDTC82Nmt0Uy9IdGNxTkd3Mjd1ZzNWVlZ5N1BMWDk2MDI1ZTI3Q1FJWEVLZlRUVGtrRkRQUXBHZU95bUxveUJqUkVSYTBXMDlSVWFwQU9yMm40M3J4SFFWU3RldVFSKzhzUDI3RmtSSlZyVSs5NUtaLzloVkt1NHBqeTFOUGZ2YXpUK2V6SXN3VzN5Nk9NTTFVTFd3WlJrd1k3SVZtVjNKOGZoMnBYNzBrOVlKNzVEQVE1YnZkc3NTT2ZUdmZ5ZHplV3FiZHg1S3FTaTJ5KzlQejlWVkxYSGxRYlY5Q2Z2RXB5QXRPZ3BwWkJtRmYyd0l2S2gwdGErT0lOMWxubzNOamRDYVFoOFFPZGkrUGVzV2pGemZ5Zm9Tcmh4WkFNL2MvdFd0dzUwMXB3VmFRTXZQdkNmZnplNVNSTE81VzZBUkVsdW4zayt5L2dmZndYWi9sOHVEbzd2YytKTzl1MVA5L1Z2WEE3VUZTZFZSRGdPOFBORXd3UjRXdkZpR0VXOS9MdXlXWjVSckJWUURFbmVtQ05wQ0J3dFRhVk4zdEY5WjVnMmdaNjVoV0FhZy9lZ252bWxYdEN1SWZ3bTliZ05NdDQybmtNWmF3RXd2emdwZHNKN0NQd24vbHhxWmZzY1ZaMzExOTQvS21uL0lEYklpWlFEM0xwZG5XcUI4L0FlNHZlTjQ0dmt4a0ZTTnlEdmVYdG1zUitneEVlMk9JZ1Q0U3EvbFJvQ0w2ZHk4KzFVMHQvSTNuL1BlVDhmdUlTTXpydmo5ZXVRL2o5R1RGZ01FOFN3QjhHbERnb2tmemVpY2VMYmlaR21INDJQNzkvVTN5S09BYVJ5NWRBRHJwUlEwbHFodmQvbWxiakF1bmlNK0NQZ3RSNnVFMUlVMHhWSDhnanJYdk9BQWNpejFrZ0lWNTI2eGFjODhDRHpITUJTRkNlUzBFQnV2WXprTUFhd0FFUkFRQ01RMy9ySEFJaFBIOE9Bd0djQXB5M2JnWUlyTHQxamdVeStOSEh4amFFbitPQ0RVbTZ5SU5FTklwNmI0S2dXSnZxYk1oeWNoYXJ2VTMxYi9RbGdoQlB1NmwvbEV5Y3pIUTBtUlYvWVVKeDRaQVBmcWJxakJOdXpXZkxCbU5rMHdrM2FIVVVVTlR0eG1QWGR4eFpicTk2cUFWQi9VdHJVNTN2Sk12SmZWOTdaNnYvamI1RUVNa3J4M2YrbzJUNmNUTWRUVFRrTHlOcHZUSXVZajc0bVJMbURPWEM3VGIwMDJNWUZ3VnNPbjU5RFZvZEJRUGU3Y2JrVTA3WEdJVWYyallGSTZQeXZYYmVjck9Nckp5OGdpTEZTbjZKblVMbEtsU3FScldxVTcwYTFLZ21OYXNGelBvWWtvL1VrQzNwMlVOU3N3M0FqNExwWENDOU5wVGlvUDVNMHkzUVVhOWxMUlVCcnlaM09YRFhDNFYwK0o3Z1NWbCtYV2gyVjlydERHcklvVFJGcUFJZWFvQ25mWWpVTytPeGRFaVhRTDFqdVJCSGVQREFTdmdZQ1NVMmxRY25VazVlNWVrSEcvbUE4dExFUW5XYXJvV3lGQjZEaFgwYnU0L2pXdHNUa1pqcDR5Ynk2Z29BQUE9PScpIGZvcm1hdCgnd29mZjInKSxcXG4gIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyksXFxuICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgXFxuICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgnc3ZnJyk7IC8qIGlPUyA0LjEtICovXFxufVxcblxcbi5fMXQxd0RlNmdpZDFCVDJIdVRaQlNHMCB7XFxuICBmb250LWZhbWlseTogXFxcImljb25mb250XFxcIiAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4uYnM3N1ItTVQ5b1VCa3VvR1ZZdktjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2NDJcXFwiO1xcbn1cXG5cXG4uXzJNX0pzekJjUjRGUmw3RVRxNGp5SzM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTZjNlxcXCI7XFxufVxcblxcbi5fMnU5TzFJMnpiV2MzUUNnVEJVU2dzOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjA3XFxcIjtcXG59XFxuXFxuLl8xMWQ4VUVfTjBYWnhNYUk3dlRWS0pzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2ZGJcXFwiO1xcbn1cXG5cXG4uXzJ1QmtNWTdxaWdBcXREdVVVc0tmNDg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYwNVxcXCI7XFxufVxcblxcbi5ueHRlNU5DSHAwaWxIbk9FODlFYkM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYyZlxcXCI7XFxufVxcblxcbi5fMVF2NUFYTXhRZ2VITHdUaklhMGIyejpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjBhXFxcIjtcXG59XFxuXFxuLl8yaFJia2lnXzVQUWQzMVFNT05PQjNmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MTRcXFwiO1xcbn1cXG5cXG4uXzNZLXBuZHlJQXJBR21JU2NXN3pBVko6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTc5ZFxcXCI7XFxufVxcblxcbi5fM1FieHBJaTQxUWRlZkNGTWh6bU1HZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNmRkXFxcIjtcXG59XFxuXFxuLl8yZElISG1hMnlMYk9jNzJ5WldqZkZNOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2NTVcXFwiO1xcbn1cXG5cXG4uXzNndkRIUjJHZlAtd096eXhmWG4yLTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYwM1xcXCI7XFxufVxcblxcbi5fMWlDRFA0bmNnRUZEdjBvNDBMeExnaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjIxXFxcIjtcXG59XFxuXFxuLl8zVE96ZjhOWjl2NVRLTjE3bUdfTWVoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2NDFcXFwiO1xcbn1cXG5cXG4uXzFfNFYzRnh3c2dXanVVcGhyS0pEYjQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTYxMVxcXCI7XFxufVxcblxcbi5fMXJwV0FNRTduRFRpSmVDNGdxbWxYNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjAwXFxcIjtcXG59XFxuXFxuLl8xQTBmQlFIZHN4M3c1RFFYblkxUDlzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MDhcXFwiO1xcbn1cXG5cXG4uTUtRV0FWUnZvcTZxc290Z3duTVFaOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2MzNcXFwiO1xcbn1cXG5cXG4uXzVuNFYzRW0ydnpsUG9sS25KNFd6ODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjk2XFxcIjtcXG59XFxuXFxuLl8xdkd4YkFHblJzek80MlVxdVZUYXRROmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2NjZcXFwiO1xcbn1cXG5cXG4uLVUzNXg2ZkhSeDh3Wll1dFZySEVNOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU2NTRcXFwiO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaWNvbmZvbnRcIjogXCJfMXQxd0RlNmdpZDFCVDJIdVRaQlNHMFwiLFxuXHRcImljb24taGFuZ2xpamljdW5cIjogXCJiczc3Ui1NVDlvVUJrdW9HVll2S2NcIixcblx0XCJpY29uLWdhbnRhbmhhb1wiOiBcIl8yTV9Kc3pCY1I0RlJsN0VUcTRqeUszXCIsXG5cdFwiaWNvbi1yZW55dWFuXCI6IFwiXzJ1OU8xSTJ6YldjM1FDZ1RCVVNnczlcIixcblx0XCJpY29uLWppbmxpbmd5aW5nY2Fpd2FuZ3R1YmlhbzYwXCI6IFwiXzExZDhVRV9OMFhaeE1hSTd2VFZLSnNcIixcblx0XCJpY29uLXNob3BcIjogXCJfMnVCa01ZN3FpZ0FxdER1VVVzS2Y0OFwiLFxuXHRcImljb24taHVpeXVhbnFpYVwiOiBcIm54dGU1TkNIcDBpbEhuT0U4OUViQ1wiLFxuXHRcImljb24tdHVhbmR1aTJcIjogXCJfMVF2NUFYTXhRZ2VITHdUaklhMGIyelwiLFxuXHRcImljb24taWNvblwiOiBcIl8yaFJia2lnXzVQUWQzMVFNT05PQjNmXCIsXG5cdFwiaWNvbi1kYXNodWp1cmliYW9cIjogXCJfM1ktcG5keUlBckFHbUlTY1c3ekFWSlwiLFxuXHRcImljb24taHVpeXVhbmd1YW5saVwiOiBcIl8zUWJ4cElpNDFRZGVmQ0ZNaHptTUdkXCIsXG5cdFwiaWNvbi15ZXd1cGVpemhpXCI6IFwiXzJkSUhIbWEyeUxiT2M3MnlaV2pmRk1cIixcblx0XCJpY29uLXd1emlndWFubGlcIjogXCJfM2d2REhSMkdmUC13T3p5eGZYbjItOFwiLFxuXHRcImljb24tZ2FvdGllXCI6IFwiXzFpQ0RQNG5jZ0VGRHYwbzQwTHhMZ2lcIixcblx0XCJpY29uLWppY2hhbmdcIjogXCJfM1RPemY4Tlo5djVUS04xN21HX01laFwiLFxuXHRcImljb24teGl0b25ncGVpemhpXCI6IFwiXzFfNFYzRnh3c2dXanVVcGhyS0pEYjRcIixcblx0XCJpY29uLWNsb3ZlclwiOiBcIl8xcnBXQU1FN25EVGlKZUM0Z3FtbFg2XCIsXG5cdFwiaWNvbi1qaW5neWluZ3NodWp1dHVpc29uZ1wiOiBcIl8xQTBmQlFIZHN4M3c1RFFYblkxUDlzXCIsXG5cdFwiaWNvbi1xaWFxdWFuXCI6IFwiTUtRV0FWUnZvcTZxc290Z3duTVFaXCIsXG5cdFwiaWNvbi1odW9kb25ncGVpemhpXCI6IFwiXzVuNFYzRW0ydnpsUG9sS25KNFd6OFwiLFxuXHRcImljb24tdHVhbmR1aTFcIjogXCJfMXZHeGJBR25Sc3pPNDJVcXVWVGF0UVwiLFxuXHRcImljb24tdHVhbmR1aVwiOiBcIi1VMzV4NmZIUng4d1pZdXRWckhFTVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkgLl8xN2NuVno4N3l6U09PNVRwRmRuTHNrIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMTAwcHgpOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImF2YXRhclwiOiBcIl8xN2NuVno4N3l6U09PNVRwRmRuTHNrXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3NyYy8xLmpwZ1wiOyIsIi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnXHJcbi8vIGltcG9ydCBTaWRlQmFyIGZyb20gJy4vc2lkZWJhci5qcydcclxuLy8gaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb250ZW50LmpzJ1xyXG5pbXBvcnQgYXZhdGFyIGZyb20gJy4vMS5qcGcnXHJcbmltcG9ydCBzdHlsZSBmcm9tICAnLi9pbmRleC5zY3NzJ1xyXG5pbXBvcnQgc3R5bGUxIGZyb20gJy4uL2ZvbnQvaWNvbmZvbnQuY3NzJ1xyXG5cclxuY29uc29sZS5sb2coc3R5bGUxKVxyXG5cclxuY29uc29sZS5sb2coc3R5bGUpXHJcbi8vIGltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LmNzcydcclxuXHJcblxyXG4gIGxldCBIZWFkZXJcclxuXHJcbiAgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJteS1jaHVuay1uYW1lXCIgKi9cclxuICAgIC8qIHdlYnBhY2tNb2RlOiBcImxhenlcIiAqL1xyXG4gICAgJy4vaGVhZGVyLmpzJ1xyXG4gICkudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgLy8gdmFyIEhlYWRlciA9IG1vZHVsZS5kZWZhdWx0XHJcbiAgICBIZWFkZXIgPSBtb2R1bGUuZGVmYXVsdFxyXG4gIH0pXHJcblxyXG4vLyBpbXBvcnQgJy4vaW5kZXguY3NzJ1xyXG4vLyBjb29sZS5lcnJvcignVGhpcyBpcyBhIGVycm9yIScpXHJcbnZhciBpbWcgPSBuZXcgSW1hZ2UoKVxyXG5pbWcuc3JjID0gYXZhdGFyXHJcbmltZy5jbGFzc0xpc3QuYWRkKHN0eWxlLmF2YXRhcilcclxuXHJcbnZhciByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG5yb290LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPScke3N0eWxlMS5pY29uZm9udH0gJHtzdHlsZTFbJ2ljb24taGFuZ2xpamljdW4nXX0nPjwvZGl2PmBcclxucm9vdC5hcHBlbmQoaW1nKVxyXG5cclxuY29uc29sZS5sb2coJzEyMycpXHJcblxyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICBjb25zb2xlLmxvZyhIZWFkZXIpXHJcbiAgbmV3IEhlYWRlcigpXHJcbn0sIDMwMDApIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0zIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9