(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-chunk-name"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/index.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "._1U_5x_AOOCft1j4Yr5fCQR{\r\n    width: 150px;\r\n    height: 150px;\r\n    transform: translate(100px, 100px);\r\n}", ""]);
// Exports
exports.locals = {
	"avatar": "_1U_5x_AOOCft1j4Yr5fCQR"
};
module.exports = exports;


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.jpg */ "./src/1.jpg");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);


function Header () {
    var dom = document.getElementById('root')
    var header = document.createElement('div')
    header.innerText = 'header'
    dom.append(header)

    var img = new Image()
    img.src = _1_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]
    img.classList.add(_index_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatar)
    dom.append(img)
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/index.css");

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz8xYTk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsNEJBQTRCLHFCQUFxQixzQkFBc0IsMkNBQTJDLEtBQUs7QUFDOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQTRCO0FBQ0k7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsOENBQU07QUFDcEIsc0JBQXNCLGlEQUFLO0FBQzNCO0FBQ0E7O0FBRWUscUU7Ozs7Ozs7Ozs7O0FDZGYsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw2SEFBZ0U7O0FBRWxHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6Im15LWNodW5rLW5hbWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5fMVVfNXhfQU9PQ2Z0MWo0WXI1ZkNRUntcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgMTAwcHgpO1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiYXZhdGFyXCI6IFwiXzFVXzV4X0FPT0NmdDFqNFlyNWZDUVJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCBhdmF0YXIgZnJvbSAnLi8xLmpwZydcclxuaW1wb3J0IHN0eWxlIGZyb20gICcuL2luZGV4LmNzcydcclxuZnVuY3Rpb24gSGVhZGVyICgpIHtcclxuICAgIHZhciBkb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSAnaGVhZGVyJ1xyXG4gICAgZG9tLmFwcGVuZChoZWFkZXIpXHJcblxyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpXHJcbiAgICBpbWcuc3JjID0gYXZhdGFyXHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChzdHlsZS5hdmF0YXIpXHJcbiAgICBkb20uYXBwZW5kKGltZylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==