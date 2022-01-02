"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      todo: []
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get("http://localhost:8000/api/todo/edit/".concat(this.$route.params.id)).then(function (response) {
      _this.todo = response.data;
    });
  },
  methods: {
    updateTodo: function updateTodo() {
      var _this2 = this;

      this.axios.post("http://localhost:8000/api/todo/update/".concat(this.$route.params.id), this.todo).then(function (response) {
        _this2.$router.push("/");
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Edit.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Edit.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=031ccff5& */ "./resources/js/components/Edit.vue?vue&type=template&id=031ccff5&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Edit.vue?vue&type=template&id=031ccff5&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Edit.vue?vue&type=template&id=031ccff5& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_031ccff5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=031ccff5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Edit.vue?vue&type=template&id=031ccff5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Edit.vue?vue&type=template&id=031ccff5&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Edit.vue?vue&type=template&id=031ccff5& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", { staticClass: "text-center" }, [_vm._v("Edit todo")]),
    _c("br"),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.updateTodo.apply(null, arguments)
          },
        },
      },
      [
        _c("div", { staticClass: "text-center" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.todo.name,
                expression: "todo.name",
              },
            ],
            attrs: { type: "text" },
            domProps: { value: _vm.todo.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.todo, "name", $event.target.value)
              },
            },
          }),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.todo.detail,
                expression: "todo.detail",
              },
            ],
            attrs: { type: "text" },
            domProps: { value: _vm.todo.detail },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.todo, "detail", $event.target.value)
              },
            },
          }),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-success", attrs: { type: "submit" } },
            [_vm._v("Update")]
          ),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);