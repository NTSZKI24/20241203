"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/Search.tsx":
/*!***********************************!*\
  !*** ./src/components/Search.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Search)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fakeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/fakeData */ \"(app-pages-browser)/./src/utils/fakeData.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Search() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const filteredValues = _utils_fakeData__WEBPACK_IMPORTED_MODULE_2__.searchValues.filter((item)=>{\n        return item.toLocaleLowerCase().includes(value);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"d-flex position-relative\",\n        role: \"search\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"form-control me-2\",\n                placeholder: \"Keres\\xe9s\",\n                onChange: (e)=>{\n                    setValue(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nagyri\\\\Documents\\\\20241203\\\\20241128_TZ-main\\\\20241128_TZ-main\\\\src\\\\components\\\\Search.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"position-absolute bg-white p-2\",\n                style: {\n                    top: \"100%\",\n                    width: \"100%\",\n                    listStyle: \"none\"\n                },\n                children: JSON.stringify(filteredValues)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nagyri\\\\Documents\\\\20241203\\\\20241128_TZ-main\\\\20241128_TZ-main\\\\src\\\\components\\\\Search.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nagyri\\\\Documents\\\\20241203\\\\20241128_TZ-main\\\\20241128_TZ-main\\\\src\\\\components\\\\Search.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_s(Search, \"dBtK6I2q1m3rcfzPBa0nrbv/iCI=\");\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlYXJjaC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVpQztBQUNlO0FBRWpDLFNBQVNFOztJQUVwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFFbkMsTUFBTUssaUJBQWlCSix5REFBWUEsQ0FBQ0ssTUFBTSxDQUFDLENBQUNDO1FBQ3hDLE9BQU9BLEtBQUtDLGlCQUFpQixHQUFHQyxRQUFRLENBQUNOO0lBQzdDO0lBRUEscUJBQ0ksOERBQUNPO1FBQUtDLFdBQVU7UUFBMkJDLE1BQUs7OzBCQUM1Qyw4REFBQ0M7Z0JBQ0dGLFdBQVU7Z0JBQ1ZHLGFBQVk7Z0JBQ1pDLFVBQVUsQ0FBQ0M7b0JBQ1BaLFNBQVNZLEVBQUVDLE1BQU0sQ0FBQ2QsS0FBSztnQkFDM0I7Ozs7OzswQkFFSiw4REFBQ2U7Z0JBQ0dQLFdBQVU7Z0JBQ1ZRLE9BQU87b0JBQ0hDLEtBQUs7b0JBQ0xDLE9BQU87b0JBQ1BDLFdBQVc7Z0JBQ2Y7MEJBRUNDLEtBQUtDLFNBQVMsQ0FBQ25COzs7Ozs7Ozs7Ozs7QUFJaEM7R0E3QndCSDtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxuYWd5cmlcXERvY3VtZW50c1xcMjAyNDEyMDNcXDIwMjQxMTI4X1RaLW1haW5cXDIwMjQxMTI4X1RaLW1haW5cXHNyY1xcY29tcG9uZW50c1xcU2VhcmNoLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNlYXJjaFZhbHVlcyB9IGZyb20gXCJAL3V0aWxzL2Zha2VEYXRhXCI7ICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSBzZWFyY2hWYWx1ZXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJkLWZsZXggcG9zaXRpb24tcmVsYXRpdmVcIiByb2xlPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtZS0yXCIgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIktlcmVzw6lzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHVsIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgYmctd2hpdGUgcC0yXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RTdHlsZTogXCJub25lXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShmaWx0ZXJlZFZhbHVlcyl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2VhcmNoVmFsdWVzIiwiU2VhcmNoIiwidmFsdWUiLCJzZXRWYWx1ZSIsImZpbHRlcmVkVmFsdWVzIiwiZmlsdGVyIiwiaXRlbSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJmb3JtIiwiY2xhc3NOYW1lIiwicm9sZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ1bCIsInN0eWxlIiwidG9wIiwid2lkdGgiLCJsaXN0U3R5bGUiLCJKU09OIiwic3RyaW5naWZ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Search.tsx\n"));

/***/ })

});