(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/error-store/error-store.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/error-store/error-store.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/data */ "./resources/js/api/data.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'error_store_page',
  methods: {
    click: function click() {
      console.log(admin);
    },
    ajaxClick: function ajaxClick() {
      Object(_api_data__WEBPACK_IMPORTED_MODULE_0__["errorReq"])();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/error-store/error-store.vue?vue&type=template&id=b2166286&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/error-store/error-store.vue?vue&type=template&id=b2166286& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Card", [
        _vm._v(
          "\n    iview-admin会自动将你程序中的错误收集起来，你可以将错误日志发给后端保存起来。如果你不需要这个功能，将'./src/config/index.js'里的plugin的'error-store'属性删掉即可。\n    另外在开发环境下，你程序中的错误都会被收集起来，这样可能不利于你排查错误，你可以将'./src/config/index.js'的'error-store'的'developmentOff'设为true。\n    如果你只是想收集错误日志，不希望登录用户看到错误日志，你可以不提供查看日志的入口，只需将'./src/config/index.js'的'error-store'的'showInHeader'设为false。\n  "
        )
      ]),
      _vm._v(" "),
      _c(
        "Card",
        { staticStyle: { "margin-top": "20px" } },
        [
          _c(
            "Row",
            [
              _c(
                "i-col",
                { attrs: { span: "8" } },
                [
                  _c(
                    "Button",
                    {
                      staticStyle: { display: "block" },
                      on: { click: _vm.click }
                    },
                    [_vm._v("点击测试触发程序错误")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      staticStyle: { "margin-top": "10px" },
                      on: { click: _vm.ajaxClick }
                    },
                    [_vm._v("点击测试触发ajax接口请求错误")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("i-col", { attrs: { span: "16" } }, [
                _vm._v(
                  "\n        ajax接口请求是请求easy-mock的一个不存在接口，所以服务端会报404错误，错误收集机制会收集这个错误，测试的时候有一定网络延迟，所以点击按钮之后稍等一会才会收集到错误。\n      "
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/view/error-store/error-store.vue":
/*!*******************************************************!*\
  !*** ./resources/js/view/error-store/error-store.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_store_vue_vue_type_template_id_b2166286___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-store.vue?vue&type=template&id=b2166286& */ "./resources/js/view/error-store/error-store.vue?vue&type=template&id=b2166286&");
/* harmony import */ var _error_store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-store.vue?vue&type=script&lang=js& */ "./resources/js/view/error-store/error-store.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _error_store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _error_store_vue_vue_type_template_id_b2166286___WEBPACK_IMPORTED_MODULE_0__["render"],
  _error_store_vue_vue_type_template_id_b2166286___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/error-store/error-store.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/error-store/error-store.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/view/error-store/error-store.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./error-store.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/error-store/error-store.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_store_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/error-store/error-store.vue?vue&type=template&id=b2166286&":
/*!**************************************************************************************!*\
  !*** ./resources/js/view/error-store/error-store.vue?vue&type=template&id=b2166286& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_error_store_vue_vue_type_template_id_b2166286___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./error-store.vue?vue&type=template&id=b2166286& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/error-store/error-store.vue?vue&type=template&id=b2166286&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_error_store_vue_vue_type_template_id_b2166286___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_error_store_vue_vue_type_template_id_b2166286___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);