"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 15:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./lib/dbConect.js
const { connect  } = __webpack_require__(185);
(__webpack_require__(142).config)();
const URI_MONGO = process.env.URI_MONGO;
const dbconect = async ()=>{
    try {
        const db = await connect(process.env.URI_MONGO);
        // const db =await connect("mongodb://{localhost}/usuarios");
        console.log("db connected");
    } catch (error) {
        console.error(error);
    }
};
/* harmony default export */ const dbConect = (dbconect);

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/products.js

const prodSchema = new (external_mongoose_default()).Schema({
    cantidad: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    categoria: {
        type: String,
        required: true,
        unique: false
    },
    codigo: {
        type: String,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        unique: true,
        trim: true
    },
    valor: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    },
    done: Boolean
}, {
    timestamps: true,
    versionKey: false
});
/* harmony default export */ const products = ((external_mongoose_default()).models.product || external_mongoose_default().model("product", prodSchema));

;// CONCATENATED MODULE: ./pages/index.js




function index({ Product  }) {
    //console.log(Product)
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: Product.map(({ _id , cantidad , categoria , codigo , nombre , imagen  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "{_id}",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        children: [
                            "hola mundo next ",
                            nombre
                        ]
                    }, nombre),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: imagen
                    })
                ]
            }, _id))
    });
}
async function getServerSideProps() {
    try {
        await dbConect();
        //const res= await products.find({})
        let Product = await products.find({});
        Product = JSON.parse(JSON.stringify(Product));
        return {
            props: {
                Product
            }
        };
    } catch (error) {
        console.log(error);
    }
}


/***/ }),

/***/ 142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(15));
module.exports = __webpack_exports__;

})();