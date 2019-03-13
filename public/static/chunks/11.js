(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/paste-editor/paste-editor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/paste-editor/paste-editor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/libs/tools */ "./resources/js/libs/tools.js");
/* harmony import */ var _plugins_placeholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/placeholder */ "./resources/js/components/paste-editor/plugins/placeholder.js");



//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PasteEditor',
  props: {
    value: Array,
    pasteData: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '从网页或其他应用软件复制表格数据，粘贴到这里 。默认第一行是表头，使用回车键添加新行，使用Tab键区分列。'
    }
  },
  data: function data() {
    return {
      pasteDataArr: [],
      rowArrLength: 0,
      editor: null
    };
  },
  watch: {
    pasteData: function pasteData(val) {
      if (val === '') {
        this.editor.setValue('');
      }
    }
  },
  computed: {
    rowNum: function rowNum() {
      return this.pasteDataArr.length;
    },
    colNum: function colNum() {
      return this.pasteDataArr[0] ? this.pasteDataArr[0].length : 0;
    }
  },
  methods: {
    handleKeyup: function handleKeyup(e) {
      this.handleAreaData();
    },

    /**
     * @description 处理粘贴操作
     */
    handleContentChanged: function handleContentChanged(content) {
      var pasteData = content.trim();
      this.$emit('on-content-change', pasteData);
      var rows = pasteData.split(/[\n\u0085\u2028\u2029]|\r\n?/g).map(function (row) {
        return row.split('\t');
      });
      if (content === '') rows = [];
      this.pasteDataArr = rows;
      this.clearLineClass();
      this.checkColNumInEveryRow();
      this.$emit('input', this.pasteDataArr);
    },

    /**
     * @description 检查除第一行的每一行列数是否与第一行相同
     */
    checkColNumInEveryRow: function checkColNumInEveryRow() {
      var i = 0;
      var len = this.rowNum;
      if (len === 0) return;

      while (++i < len) {
        var item = this.pasteDataArr[i];

        if (item.length !== this.colNum && (!(i === len - 1 && item.length === 1 && item[0] === '') || i !== len - 1)) {
          this.markIncorrectRow(i);
          this.$emit('on-error', i);
          return false;
        }
      }

      this.$emit('on-success', this.pasteDataArr);
      return true;
    },

    /**
     * @description 标记不符合格式的一行
     */
    markIncorrectRow: function markIncorrectRow(index) {
      this.editor.addLineClass(index, 'text', 'incorrect-row');
    },

    /**
     * @description 标记不符合格式的一行
     */
    clearLineClass: function clearLineClass() {
      var _this = this;

      Object(_libs_tools__WEBPACK_IMPORTED_MODULE_5__["forEach"])(this.pasteDataArr, function (item, index) {
        _this.editor.removeLineClass(index, 'text', 'incorrect-row');
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    Object(_plugins_placeholder__WEBPACK_IMPORTED_MODULE_6__["default"])(codemirror__WEBPACK_IMPORTED_MODULE_3___default.a);
    this.editor = codemirror__WEBPACK_IMPORTED_MODULE_3___default.a.fromTextArea(this.$refs.codemirror, {
      lineNumbers: true,
      tabSize: 1,
      lineWrapping: true,
      placeholder: this.placeholder
    });
    this.editor.on('change', function (editor) {
      _this2.handleContentChanged(editor.getValue());
    });
    this.editor.addLineClass(0, 'text', 'first-row');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/update/update-paste.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/update/update-paste.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _c_paste_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _c/paste-editor */ "./resources/js/components/paste-editor/index.js");
/* harmony import */ var _libs_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/util */ "./resources/js/libs/util.js");
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
  name: 'update_paste_page',
  components: {
    PasteEditor: _c_paste_editor__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      pasteDataArr: [],
      columns: [],
      tableData: [],
      validated: true,
      errorIndex: 0
    };
  },
  methods: {
    handleSuccess: function handleSuccess() {
      this.validated = true;
    },
    handleError: function handleError(index) {
      this.validated = false;
      this.errorIndex = index;
    },
    handleShow: function handleShow() {
      if (!this.validated) {
        this.$Notice.error({
          title: '您的内容不规范',
          desc: "\u60A8\u7684\u7B2C".concat(this.errorIndex + 1, "\u884C\u6570\u636E\u4E0D\u89C4\u8303\uFF0C\u8BF7\u4FEE\u6539")
        });
      } else {
        var _getTableDataFromArra = Object(_libs_util__WEBPACK_IMPORTED_MODULE_1__["getTableDataFromArray"])(this.pasteDataArr),
            columns = _getTableDataFromArra.columns,
            tableData = _getTableDataFromArra.tableData;

        this.columns = columns;
        this.tableData = tableData;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/paste-editor/paste-editor.vue?vue&type=style&index=0&lang=less&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/paste-editor/paste-editor.vue?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paste-editor-wrapper {\n  width: 100%;\n  height: 100%;\n  border: 1px dashed gainsboro;\n}\n.paste-editor-wrapper textarea.textarea-el {\n  width: 100%;\n  height: 100%;\n}\n.paste-editor-wrapper .CodeMirror {\n  height: 100%;\n  padding: 0;\n}\n.paste-editor-wrapper .CodeMirror .CodeMirror-code div .CodeMirror-line > span > span.cm-tab::after {\n  content: '\\2192';\n  color: #BFBFBF;\n}\n.paste-editor-wrapper .first-row {\n  font-weight: 700;\n  font-size: 14px;\n}\n.paste-editor-wrapper .incorrect-row {\n  background: #F5CBD1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/view/update/update-paste.vue?vue&type=style&index=0&lang=less&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/update/update-paste.vue?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".update-paste-con {\n  height: 350px;\n}\n.update-paste-btn-con {\n  box-sizing: content-box;\n  height: 30px;\n  padding: 15px 0 5px;\n}\n.paste-tip {\n  color: #19be6b;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/paste-editor/paste-editor.vue?vue&type=style&index=0&lang=less&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/paste-editor/paste-editor.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./paste-editor.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/paste-editor/paste-editor.vue?vue&type=style&index=0&lang=less&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/view/update/update-paste.vue?vue&type=style&index=0&lang=less&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/update/update-paste.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./update-paste.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/view/update/update-paste.vue?vue&type=style&index=0&lang=less&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/paste-editor/paste-editor.vue?vue&type=template&id=b58bbc58&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/paste-editor/paste-editor.vue?vue&type=template&id=b58bbc58& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "paste-editor-wrapper" }, [
    _c("textarea", { ref: "codemirror", staticClass: "textarea-el" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/update/update-paste.vue?vue&type=template&id=46506aa9&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/update/update-paste.vue?vue&type=template&id=46506aa9& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "Row",
    { attrs: { gutter: 10 } },
    [
      _c(
        "i-col",
        { attrs: { span: "12" } },
        [
          _c("Card", [
            _c(
              "div",
              { staticClass: "update-paste-con" },
              [
                _c("paste-editor", {
                  on: {
                    "on-success": _vm.handleSuccess,
                    "on-error": _vm.handleError
                  },
                  model: {
                    value: _vm.pasteDataArr,
                    callback: function($$v) {
                      _vm.pasteDataArr = $$v
                    },
                    expression: "pasteDataArr"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "update-paste-btn-con" },
              [
                _c("span", { staticClass: "paste-tip" }, [
                  _vm._v("使用Tab键换列，使用回车键换行")
                ]),
                _vm._v(" "),
                _c(
                  "Button",
                  {
                    staticStyle: { float: "right" },
                    attrs: { type: "primary" },
                    on: { click: _vm.handleShow }
                  },
                  [_vm._v("显示表格数据")]
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "i-col",
        { attrs: { span: "12" } },
        [
          _c(
            "Card",
            [
              _c("Table", {
                attrs: {
                  height: 400,
                  columns: _vm.columns,
                  data: _vm.tableData
                }
              })
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

/***/ "./resources/js/components/paste-editor/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/paste-editor/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paste_editor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paste-editor.vue */ "./resources/js/components/paste-editor/paste-editor.vue");

/* harmony default export */ __webpack_exports__["default"] = (_paste_editor_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/paste-editor/paste-editor.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/paste-editor/paste-editor.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paste_editor_vue_vue_type_template_id_b58bbc58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paste-editor.vue?vue&type=template&id=b58bbc58& */ "./resources/js/components/paste-editor/paste-editor.vue?vue&type=template&id=b58bbc58&");
/* harmony import */ var _paste_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paste-editor.vue?vue&type=script&lang=js& */ "./resources/js/components/paste-editor/paste-editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _paste_editor_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paste-editor.vue?vue&type=style&index=0&lang=less& */ "./resources/js/components/paste-editor/paste-editor.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _paste_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paste_editor_vue_vue_type_template_id_b58bbc58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paste_editor_vue_vue_type_template_id_b58bbc58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/paste-editor/paste-editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/paste-editor/paste-editor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/paste-editor/paste-editor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./paste-editor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/paste-editor/paste-editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/paste-editor/paste-editor.vue?vue&type=style&index=0&lang=less&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/paste-editor/paste-editor.vue?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./paste-editor.vue?vue&type=style&index=0&lang=less& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/paste-editor/paste-editor.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/paste-editor/paste-editor.vue?vue&type=template&id=b58bbc58&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/paste-editor/paste-editor.vue?vue&type=template&id=b58bbc58& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_template_id_b58bbc58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./paste-editor.vue?vue&type=template&id=b58bbc58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/paste-editor/paste-editor.vue?vue&type=template&id=b58bbc58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_template_id_b58bbc58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_paste_editor_vue_vue_type_template_id_b58bbc58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/paste-editor/plugins/placeholder.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/paste-editor/plugins/placeholder.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (codemirror) {
  (function (mod) {
    mod(codemirror);
  })(function (CodeMirror) {
    CodeMirror.defineOption('placeholder', '', function (cm, val, old) {
      var prev = old && old !== CodeMirror.Init;

      if (val && !prev) {
        cm.on('blur', onBlur);
        cm.on('change', onChange);
        cm.on('swapDoc', onChange);
        onChange(cm);
      } else if (!val && prev) {
        cm.off('blur', onBlur);
        cm.off('change', onChange);
        cm.off('swapDoc', onChange);
        clearPlaceholder(cm);
        var wrapper = cm.getWrapperElement();
        wrapper.className = wrapper.className.replace(' CodeMirror-empty', '');
      }

      if (val && !cm.hasFocus()) onBlur(cm);
    });

    function clearPlaceholder(cm) {
      if (cm.state.placeholder) {
        cm.state.placeholder.parentNode.removeChild(cm.state.placeholder);
        cm.state.placeholder = null;
      }
    }

    function setPlaceholder(cm) {
      clearPlaceholder(cm);
      var elt = cm.state.placeholder = document.createElement('pre');
      elt.style.cssText = 'height: 0; overflow: visible; color: #80848f;';
      elt.style.direction = cm.getOption('direction');
      elt.className = 'CodeMirror-placeholder';
      var placeHolder = cm.getOption('placeholder');
      if (typeof placeHolder === 'string') placeHolder = document.createTextNode(placeHolder);
      elt.appendChild(placeHolder);
      cm.display.lineSpace.insertBefore(elt, cm.display.lineSpace.firstChild);
    }

    function onBlur(cm) {
      if (isEmpty(cm)) setPlaceholder(cm);
    }

    function onChange(cm) {
      var wrapper = cm.getWrapperElement();
      var empty = isEmpty(cm);
      wrapper.className = wrapper.className.replace(' CodeMirror-empty', '') + (empty ? ' CodeMirror-empty' : '');
      if (empty) setPlaceholder(cm);else clearPlaceholder(cm);
    }

    function isEmpty(cm) {
      return cm.lineCount() === 1 && cm.getLine(0) === '';
    }
  });
});

/***/ }),

/***/ "./resources/js/view/update/update-paste.vue":
/*!***************************************************!*\
  !*** ./resources/js/view/update/update-paste.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_paste_vue_vue_type_template_id_46506aa9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-paste.vue?vue&type=template&id=46506aa9& */ "./resources/js/view/update/update-paste.vue?vue&type=template&id=46506aa9&");
/* harmony import */ var _update_paste_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-paste.vue?vue&type=script&lang=js& */ "./resources/js/view/update/update-paste.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _update_paste_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-paste.vue?vue&type=style&index=0&lang=less& */ "./resources/js/view/update/update-paste.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _update_paste_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _update_paste_vue_vue_type_template_id_46506aa9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _update_paste_vue_vue_type_template_id_46506aa9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/update/update-paste.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/update/update-paste.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/view/update/update-paste.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./update-paste.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/update/update-paste.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/update/update-paste.vue?vue&type=style&index=0&lang=less&":
/*!*************************************************************************************!*\
  !*** ./resources/js/view/update/update-paste.vue?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./update-paste.vue?vue&type=style&index=0&lang=less& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/view/update/update-paste.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/view/update/update-paste.vue?vue&type=template&id=46506aa9&":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/update/update-paste.vue?vue&type=template&id=46506aa9& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_template_id_46506aa9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./update-paste.vue?vue&type=template&id=46506aa9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/update/update-paste.vue?vue&type=template&id=46506aa9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_template_id_46506aa9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_paste_vue_vue_type_template_id_46506aa9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);