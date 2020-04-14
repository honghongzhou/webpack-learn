(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-chunk-name"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/index.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._1U_5x_AOOCft1j4Yr5fCQR{\\r\\n    width: 150px;\\r\\n    height: 150px;\\r\\n    transform: translate(100px, 100px);\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"avatar\": \"_1U_5x_AOOCft1j4Yr5fCQR\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.jpg */ \"./src/1.jpg\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nfunction Header () {\r\n    var dom = document.getElementById('root')\r\n    var header = document.createElement('div')\r\n    header.innerText = 'header'\r\n    dom.append(header)\r\n\r\n    var img = new Image()\r\n    img.src = _1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    img.classList.add(_index_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatar)\r\n    dom.append(img)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ })

}]);