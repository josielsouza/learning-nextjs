"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/integracao1",{

/***/ "./src/pages/integracao1.jsx":
/*!***********************************!*\
  !*** ./src/pages/integracao1.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Integracao; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction Integracao() {\n    var obterCLiente = function obterCLiente() {\n        fetch('http://localhost:3000/api/clientes/999').then(function(resp) {\n            return resp.json();\n        }).then(function(dados) {\n            return console.log(dados);\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), cliente = ref[0], setCliente = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        titulo: \"Consumindo dados da api\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: 'flex',\n                justifyContent: 'center',\n                alignItems: 'center',\n                flexWrap: 'wrap',\n                height: '100vh'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            padding: '20px ',\n                            margin: '12px'\n                        },\n                        children: \"C\\xf3digo:\"\n                    }, void 0, false, {\n                        fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 19\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            padding: '20px ',\n                            margin: '12px'\n                        },\n                        children: \"Nome:\"\n                    }, void 0, false, {\n                        fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 19\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            padding: '20px ',\n                            margin: '12px'\n                        },\n                        children: \"Email:\"\n                    }, void 0, false, {\n                        fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 19\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n                lineNumber: 26,\n                columnNumber: 15\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n            lineNumber: 18,\n            columnNumber: 15\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/josiel/Documentos/Projetos/Projetos-pessoais/site/src/pages/integracao1.jsx\",\n        lineNumber: 17,\n        columnNumber: 11\n    }, this));\n};\n_s(Integracao, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n_c = Integracao;\nvar _c;\n$RefreshReg$(_c, \"Integracao\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW50ZWdyYWNhbzEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDVDs7QUFFakIsUUFBUSxDQUFDRSxVQUFVLEdBQUUsQ0FBQztRQUl4QkMsWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksR0FBRSxDQUFDO1FBRXhCQyxLQUFLLENBQUMsQ0FBd0MseUNBQzdDQyxJQUFJLENBQUNDLFFBQVFBLENBQVJBLElBQUk7WUFBSUEsTUFBTSxDQUFOQSxJQUFJLENBQUNDLElBQUk7V0FDdEJGLElBQUksQ0FBQ0csUUFBUSxDQUFSQSxLQUFLO1lBQUlDLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7O0lBQ2hDLENBQUM7O0lBUEQsR0FBSyxDQUEwQlAsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFuQ1UsT0FBTyxHQUFpQlYsR0FBWSxLQUEzQlcsVUFBVSxHQUFLWCxHQUFZO0lBVXpDLE1BQU0sNkVBQ0RELDBEQUFNO1FBQUNhLE1BQU0sRUFBRyxDQUF5Qjs4RkFDckNDLENBQUc7WUFBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQ2ZDLE9BQU8sRUFBRSxDQUFNO2dCQUNmQyxjQUFjLEVBQUUsQ0FBUTtnQkFDeEJDLFVBQVUsRUFBRSxDQUFRO2dCQUNwQkMsUUFBUSxFQUFDLENBQU07Z0JBQ2ZDLE1BQU0sRUFBRSxDQUFPO1lBRW5CLENBQUM7a0dBQ01DLENBQUU7O2dHQUNFQyxDQUFFO3dCQUFDUCxLQUFLLEVBQUUsQ0FBQzs0QkFDWFEsT0FBTyxFQUFFLENBQU87NEJBQ2hCQyxNQUFNLEVBQUUsQ0FBTTt3QkFDbkIsQ0FBQztrQ0FBRSxDQUFPOzs7Ozs7Z0dBR0xGLENBQUU7d0JBQUNQLEtBQUssRUFBRSxDQUFDOzRCQUNYUSxPQUFPLEVBQUUsQ0FBTzs0QkFDaEJDLE1BQU0sRUFBRSxDQUFNO3dCQUNuQixDQUFDO2tDQUFFLENBQUs7Ozs7OztnR0FDSEYsQ0FBRTt3QkFBQ1AsS0FBSyxFQUFFLENBQUM7NEJBQ1hRLE9BQU8sRUFBRSxDQUFPOzRCQUNoQkMsTUFBTSxFQUFFLENBQU07d0JBQ25CLENBQUM7a0NBQUUsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92QixDQUFDO0dBM0N1QnRCLFVBQVU7S0FBVkEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW50ZWdyYWNhbzEuanN4P2E5MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlZ3JhY2FvKCl7XG5cbiAgICBjb25zdCBbY2xpZW50ZSwgc2V0Q2xpZW50ZV0gPSAgdXNlU3RhdGUoe30pXG5cbiAgICBmdW5jdGlvbiBvYnRlckNMaWVudGUoKXtcblxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NsaWVudGVzLzk5OScpXG4gICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSkgICBcbiAgICAudGhlbihkYWRvcyA9PiBjb25zb2xlLmxvZyhkYWRvcykpXG4gICAgfVxuXG5cbiAgICAgIHJldHVybihcbiAgICAgICAgICA8TGF5b3V0IHRpdHVsbyA9IFwiQ29uc3VtaW5kbyBkYWRvcyBkYSBhcGlcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBmbGV4V3JhcDond3JhcCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgIFxuICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHggJyxcbiAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxMnB4JyxcbiAgICAgICAgICAgICAgfX0+Q8OzZGlnbzo8L2xpPlxuXG5cbiAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyMHB4ICcsXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMTJweCcsXG4gICAgICAgICAgICAgIH19Pk5vbWU6PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyMHB4ICcsXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMTJweCcsXG4gICAgICAgICAgICAgIH19PkVtYWlsOjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApXG5cblxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VTdGF0ZSIsIkludGVncmFjYW8iLCJvYnRlckNMaWVudGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhZG9zIiwiY29uc29sZSIsImxvZyIsImNsaWVudGUiLCJzZXRDbGllbnRlIiwidGl0dWxvIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiLCJoZWlnaHQiLCJ1bCIsImxpIiwicGFkZGluZyIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/integracao1.jsx\n");

/***/ })

});