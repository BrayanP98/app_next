"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/dbConect.js":
/*!*************************!*\
  !*** ./lib/dbConect.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { connect  } = __webpack_require__(/*! mongoose */ \"mongoose\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst URI_MONGO = process.env.URI_MONGO;\nconst dbconect = async ()=>{\n    try {\n        const db = await connect(process.env.URI_MONGO);\n        // const db =await connect(\"mongodb://{localhost}/usuarios\");\n        console.log(\"db connected\");\n    } catch (error) {\n        console.error(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbconect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGJDb25lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sRUFBRUEsUUFBTyxFQUFFLEdBQUNDLG1CQUFPQSxDQUFDO0FBQzFCQSxvREFBd0I7QUFFeEIsTUFBTUUsWUFBVUMsUUFBUUMsR0FBRyxDQUFDRixTQUFTO0FBQ3JDLE1BQU1HLFdBQVUsVUFBVztJQUd0QixJQUFHO1FBR0YsTUFBTUMsS0FBSSxNQUFNUCxRQUFRSSxRQUFRQyxHQUFHLENBQUNGLFNBQVM7UUFDakQsNkRBQTZEO1FBRXZESyxRQUFRQyxHQUFHLENBQUM7SUFFZixFQUFDLE9BQU1DLE9BQU07UUFDVkYsUUFBUUUsS0FBSyxDQUFDQTtJQUdqQjtBQUNMO0FBQ0EsaUVBQWVKLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAtbmV4dC8uL2xpYi9kYkNvbmVjdC5qcz9hNWVkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY29ubmVjdCB9PXJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcblxyXG5jb25zdCBVUklfTU9OR089cHJvY2Vzcy5lbnYuVVJJX01PTkdPO1xyXG5jb25zdCBkYmNvbmVjdD0gYXN5bmMoKSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICAgdHJ5e1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IGRiID1hd2FpdCBjb25uZWN0KHByb2Nlc3MuZW52LlVSSV9NT05HTyk7XHJcbiAgLy8gY29uc3QgZGIgPWF3YWl0IGNvbm5lY3QoXCJtb25nb2RiOi8ve2xvY2FsaG9zdH0vdXN1YXJpb3NcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGIgY29ubmVjdGVkXCIpO1xyXG5cclxuICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgICAgICBcclxuICAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZGJjb25lY3Q7XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0IiwicmVxdWlyZSIsImNvbmZpZyIsIlVSSV9NT05HTyIsInByb2Nlc3MiLCJlbnYiLCJkYmNvbmVjdCIsImRiIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/dbConect.js\n");

/***/ }),

/***/ "./models/products.js":
/*!****************************!*\
  !*** ./models/products.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prodSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    cantidad: {\n        type: String,\n        required: true,\n        unique: false,\n        trim: true\n    },\n    categoria: {\n        type: String,\n        required: true,\n        unique: false\n    },\n    codigo: {\n        type: String,\n        unique: true,\n        trim: true\n    },\n    nombre: {\n        type: String,\n        unique: true,\n        trim: true\n    },\n    valor: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    descripcion: {\n        type: String,\n        required: true\n    },\n    imagen: {\n        type: String\n    },\n    done: Boolean\n}, {\n    timestamps: true,\n    versionKey: false\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"product\", prodSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQVksSUFBSUQsd0RBQWdCLENBQUM7SUFDbkNHLFVBQVM7UUFDTEMsTUFBS0M7UUFDTEMsVUFBUyxJQUFJO1FBQ2JDLFFBQU8sS0FBSztRQUNaQyxNQUFLLElBQUk7SUFDTjtJQUNQQyxXQUFVO1FBQ05MLE1BQUtDO1FBQ0xDLFVBQVMsSUFBSTtRQUNiQyxRQUFPLEtBQUs7SUFDaEI7SUFDQUcsUUFBTztRQUNITixNQUFLQztRQUVMRSxRQUFPLElBQUk7UUFDWEMsTUFBSyxJQUFJO0lBRWI7SUFDQUcsUUFBTztRQUNIUCxNQUFLQztRQUVMRSxRQUFPLElBQUk7UUFDWEMsTUFBSyxJQUFJO0lBRWI7SUFDQUksT0FBTTtRQUNGUixNQUFLQztRQUNMQyxVQUFTLElBQUk7UUFDYkUsTUFBSyxJQUFJO0lBRVo7SUFDREssYUFBWTtRQUNSVCxNQUFLQztRQUNMQyxVQUFTLElBQUk7SUFBQztJQUlsQlEsUUFBTztRQUNIVixNQUFLQztJQUNUO0lBRUNVLE1BQU1DO0FBQVEsR0FBRTtJQUNiQyxZQUFXLElBQUk7SUFDZkMsWUFBVyxLQUFLO0FBRXhCO0FBRUEsaUVBQWVsQixnRUFBdUIsSUFBSUEscURBQWMsQ0FBQyxXQUFXQyxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLW5leHQvLi9tb2RlbHMvcHJvZHVjdHMuanM/Y2U3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBwcm9kU2NoZW1hPSBuZXcgbW9uZ29vc2UuIFNjaGVtYSh7XHJcbiAgICBjYW50aWRhZDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6ZmFsc2UsXHJcbiAgICAgICAgdHJpbTp0cnVlXHJcbiAgICAgICAgICAgfSxcclxuICAgIGNhdGVnb3JpYTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6ZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgY29kaWdvOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgIFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlLFxyXG4gICAgICAgIHRyaW06dHJ1ZVxyXG5cclxuICAgIH0sXHJcbiAgICBub21icmU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgXHJcbiAgICAgICAgdW5pcXVlOnRydWUsXHJcbiAgICAgICAgdHJpbTp0cnVlXHJcblxyXG4gICAgfSxcclxuICAgIHZhbG9yOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHRyaW06dHJ1ZVxyXG5cclxuICAgICB9LFxyXG4gICAgZGVzY3JpcGNpb246e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUgfSxcclxuXHJcbiAgIFxyXG5cclxuICAgIGltYWdlbjp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgIGRvbmU6IEJvb2xlYW4sfSx7XHJcbiAgICAgICAgdGltZXN0YW1wczp0cnVlLFxyXG4gICAgICAgIHZlcnNpb25LZXk6ZmFsc2VcclxuICAgICBcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMucHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbCgncHJvZHVjdCcsIHByb2RTY2hlbWEpXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInByb2RTY2hlbWEiLCJTY2hlbWEiLCJjYW50aWRhZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInRyaW0iLCJjYXRlZ29yaWEiLCJjb2RpZ28iLCJub21icmUiLCJ2YWxvciIsImRlc2NyaXBjaW9uIiwiaW1hZ2VuIiwiZG9uZSIsIkJvb2xlYW4iLCJ0aW1lc3RhbXBzIiwidmVyc2lvbktleSIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/products.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ index),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dbConect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/dbConect */ \"./lib/dbConect.js\");\n/* harmony import */ var _models_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/products */ \"./models/products.js\");\n\n\n\n\nfunction index({ Product  }) {\n    //console.log(Product)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: Product.map(({ _id , cantidad , categoria , codigo , nombre , imagen  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"{_id}\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"hola mundo next \",\n                            nombre\n                        ]\n                    }, nombre, true, {\n                        fileName: \"E:\\\\desarolloWeb\\\\app next\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imagen\n                    }, void 0, false, {\n                        fileName: \"E:\\\\desarolloWeb\\\\app next\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, _id, true, {\n                fileName: \"E:\\\\desarolloWeb\\\\app next\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 25\n            }, this))\n    }, void 0, false, {\n        fileName: \"E:\\\\desarolloWeb\\\\app next\\\\pages\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps() {\n    try {\n        await (0,_lib_dbConect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        //const res= await products.find({})\n        let Product = await _models_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({});\n        Product = JSON.parse(JSON.stringify(Product));\n        return {\n            props: {\n                Product\n            }\n        };\n    } catch (error) {\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFFYztBQUNFO0FBQzFCLFNBQVNHLE1BQU0sRUFBQ0MsUUFBTyxFQUFDLEVBQUM7SUFDdkMsc0JBQXNCO0lBRXBCLHFCQUVJLDhEQUFDQztrQkFFWUQsUUFBUUUsR0FBRyxDQUFDLENBQUMsRUFBQ0MsSUFBRyxFQUFFQyxTQUFRLEVBQUVDLFVBQVMsRUFBRUMsT0FBTSxFQUFDQyxPQUFNLEVBQUNDLE9BQU0sRUFBRSxpQkFDM0QsOERBQUNQO2dCQUFJUSxXQUFVOztrQ0FDZiw4REFBQ0M7OzRCQUFnQjs0QkFBaUJIOzt1QkFBekJBOzs7OztrQ0FFTCw4REFBQ0k7d0JBQUlDLEtBQUtKOzs7Ozs7O2VBSGNMOzs7Ozs7Ozs7O0FBWW5ELENBQUM7QUFDTSxlQUFlVSxxQkFBcUI7SUFDeEMsSUFBSTtRQUNGLE1BQU1oQix5REFBU0E7UUFDZCxvQ0FBb0M7UUFFcEMsSUFBSUcsVUFBUyxNQUFNRiw2REFBYSxDQUFDLENBQUM7UUFDbENFLFVBQVVlLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDakI7UUFFckMsT0FBTztZQUFFa0IsT0FBTztnQkFBQ2xCO1lBQU87UUFBRTtJQUM1QixFQUFFLE9BQU9tQixPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAtbmV4dC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vbGliL2RiQ29uZWN0XCI7XHJcbmltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vbW9kZWxzL3Byb2R1Y3RzXCI7XHJcbiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7UHJvZHVjdH0pe1xyXG4gIC8vY29uc29sZS5sb2coUHJvZHVjdClcclxuXHJcbiAgICByZXR1cm4oIFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3QubWFwKCh7X2lkLCBjYW50aWRhZCwgY2F0ZWdvcmlhLCBjb2RpZ28sbm9tYnJlLGltYWdlbiB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwie19pZH1cIiBrZXk9e19pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBrZXk9e25vbWJyZX0+aG9sYSBtdW5kbyBuZXh0IHtub21icmV9PC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VufT48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICApIH1cclxuICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gfVxyXG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgICAgLy9jb25zdCByZXM9IGF3YWl0IHByb2R1Y3RzLmZpbmQoe30pXHJcblxyXG4gICAgICAgbGV0IFByb2R1Y3Q9IGF3YWl0IHByb2R1Y3RzLmZpbmQoe30pXHJcbiAgICAgICBQcm9kdWN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShQcm9kdWN0KSlcclxuICAgICAgIFxyXG4gICAgICByZXR1cm4geyBwcm9wczoge1Byb2R1Y3R9IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIl0sIm5hbWVzIjpbIlJlYWN0IiwiZGJDb25uZWN0IiwicHJvZHVjdHMiLCJpbmRleCIsIlByb2R1Y3QiLCJkaXYiLCJtYXAiLCJfaWQiLCJjYW50aWRhZCIsImNhdGVnb3JpYSIsImNvZGlnbyIsIm5vbWJyZSIsImltYWdlbiIsImNsYXNzTmFtZSIsImgxIiwiaW1nIiwic3JjIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZmluZCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInByb3BzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();