(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-chunk-name"],{

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.jpg */ \"./src/1.jpg\");\n\r\n// import style from  './index.scss'\r\nfunction Header () {\r\n    var dom = document.getElementById('root')\r\n    var header = document.createElement('div')\r\n    header.innerText = 'header'\r\n    dom.append(header)\r\n\r\n    var img = new Image()\r\n    img.src = _1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    img.classList.add('avatar')\r\n    dom.append(img)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ })

}]);