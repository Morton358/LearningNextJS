webpackHotUpdate(1,{

/***/ "./pages/_error.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_styles__ = __webpack_require__("./styles/styles.js");
var _jsxFileName = '/home/morton/My_Files/Projects/LearnNextJS/pages/_error.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();





var errorPage = function errorPage() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            className: 'jsx-' + __WEBPACK_IMPORTED_MODULE_3__styles_styles__["a" /* centered_box */].__scopedHash,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h1',
            {
                className: 'jsx-' + __WEBPACK_IMPORTED_MODULE_3__styles_styles__["a" /* centered_box */].__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            'Oops something goes wrong!'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
                className: 'jsx-' + __WEBPACK_IMPORTED_MODULE_3__styles_styles__["a" /* centered_box */].__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            'Go to ',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: '/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'a',
                    {
                        className: 'jsx-' + __WEBPACK_IMPORTED_MODULE_3__styles_styles__["a" /* centered_box */].__scopedHash,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    'Go To Main Page'
                )
            ),
            ' '
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: __WEBPACK_IMPORTED_MODULE_3__styles_styles__["a" /* centered_box */].__scopedHash,
            css: __WEBPACK_IMPORTED_MODULE_3__styles_styles__["a" /* centered_box */].__scoped
        })
    );
};

var _default = errorPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(errorPage, 'errorPage', '/home/morton/My_Files/Projects/LearnNextJS/pages/_error.js');
    reactHotLoader.register(_default, 'default', '/home/morton/My_Files/Projects/LearnNextJS/pages/_error.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_error")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.06371a695a705f38a513.hot-update.js.map