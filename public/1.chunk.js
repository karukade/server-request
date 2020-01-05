(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/Input.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Input.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formValidation */ "./src/formValidation.js");
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
  props: ["type", "label", "editable", "value"],
  data: function data() {
    return {
      isErr: {
        flg: false,
        msg: null
      },
      blured: false,
      focus: false,
      inputed: false
    };
  },
  computed: {
    active: function active() {
      return this.value !== "" || this.focus;
    }
  },
  methods: {
    onblur: function onblur(e) {
      if (!this.blured && this.inputed) {
        this.blured = true;
        this.checkErr(e);
      }

      this.focus = false;
      this.$emit("blur", e);
    },
    oninput: function oninput(e) {
      if (!this.inputed) this.inputed = true;
      this.$emit("input", e.target.value);
      if (this.blured) this.checkErr(e);
    },
    onfocus: function onfocus(e) {
      this.$emit("focus", e);
      this.focus = true;
    },
    checkErr: function checkErr(e) {
      this.isErr = Object(_formValidation__WEBPACK_IMPORTED_MODULE_0__["default"])(this.type, e.target.value, this.label);
      this.$emit("validated", this.isErr);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/InputWrap.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/InputWrap.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["isErr", "errmsg"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/SwitchInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/SwitchInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/Input.vue");
/* harmony import */ var _InputWrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputWrap */ "./src/InputWrap.vue");
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
  components: {
    Input: _Input__WEBPACK_IMPORTED_MODULE_0__["default"],
    InputWrap: _InputWrap__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["value", "type", "label", "isconfirm", "shouldvalidate"],
  data: function data() {
    return {
      editable: true,
      isErr: {
        flg: false,
        msg: null
      }
    };
  },
  watch: {
    isconfirm: function isconfirm(val) {
      this.editable = !val;
    }
  },
  methods: {
    switchInput: function switchInput() {
      this.editable = !this.editable; // if(this.editable) this.$refs.input.focus()
    },
    oninput: function oninput(value) {
      this.$emit("input", value);
    },
    validated: function validated(isErr) {
      this.isErr = isErr;
      this.$emit("update", !this.isErr.flg);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".switch-input[data-v-36b6bea1] {\n  padding: 4px 14px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 56px;\n  border-radius: 4px;\n  background-color: #eee;\n  border: solid 1px transparent;\n}\n.switch-input__label[data-v-36b6bea1] {\n    padding-left: 4px;\n    padding-right: 4px;\n    color: #333;\n    font-size: 14px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 12px;\n    height: 1.2em;\n    line-height: 1.2em;\n    margin-top: auto;\n    margin-bottom: auto;\n    transition: transform 0.2s;\n}\n.switch-input__input[data-v-36b6bea1] {\n    width: 100%;\n    border: none;\n}\n.switch-input__input[data-v-36b6bea1]:focus {\n      outline: none;\n}\n.switch-input__input[data-v-36b6bea1]:read-only {\n      font-size: 18px;\n}\n.switch-input.is-focus.is-active[data-v-36b6bea1] {\n    border-color: #5aabf2;\n}\n.switch-input.is-focus.is-active .switch-input__label[data-v-36b6bea1] {\n      color: #5aabf2;\n}\n.switch-input.is-active[data-v-36b6bea1] {\n    border-color: #949494;\n    background-color: #fff;\n}\n.switch-input.is-active .switch-input__label[data-v-36b6bea1] {\n      color: #949494;\n      font-size: 14px;\n      transform: translateY(-26px);\n      background-color: #fff;\n}\n.switch-input.is-confirm[data-v-36b6bea1] {\n    border-radius: 0;\n    padding: 0;\n    border: none;\n    border-bottom: 1px solid #bababa;\n}\n.switch-input.is-confirm .switch-input__input[data-v-36b6bea1] {\n      font-size: 18px;\n}\n.switch-input.is-confirm .switch-input__label[data-v-36b6bea1] {\n      color: #949494;\n      font-size: 14px;\n      background-color: #fff;\n      transform: translate(-12px, -26px);\n}\n.switch-input.is-err[data-v-36b6bea1] {\n    border-color: #ff3e3e !important;\n}\n.switch-input.is-err .switch-input__label[data-v-36b6bea1] {\n      color: #ff3e3e !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".label[data-v-180c918b] {\n  font-size: 16px;\n  display: block;\n  color: #4d4d4d;\n  margin-bottom: 4px;\n}\n.input-wrap[data-v-180c918b] {\n  display: flex;\n  align-items: center;\n}\n.input-wrap__input[data-v-180c918b] {\n    width: 100%;\n    flex-shrink: 1;\n}\n.input-wrap__input > * + *[data-v-180c918b] {\n      margin-top: 16px;\n}\n.input-wrap__side[data-v-180c918b] {\n    flex-shrink: 0;\n}\n.input-wrap > * + *[data-v-180c918b] {\n    margin-left: 8px;\n}\n.err[data-v-180c918b] {\n  margin-top: 8px;\n  font-size: 14px;\n  color: #ff3e3e;\n  min-height: 1.5em;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn-edit[data-v-f94852e6] {\n  margin-left: 8px;\n  display: inline-block;\n  border: none;\n  background-color: #3a3a3a;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 4px;\n  font-size: 14px;\n  line-height: 1;\n  min-width: 48px;\n}\n.btn-edit[data-v-f94852e6]:disabled {\n    opacity: 0.3;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Input.vue?vue&type=template&id=36b6bea1&scoped=true&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Input.vue?vue&type=template&id=36b6bea1&scoped=true& ***!
  \************************************************************************************************************************************************************************************************/
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
  return _c("label", [
    _c(
      "div",
      {
        class: [
          "switch-input",
          _vm.active ? "is-active" : "",
          _vm.focus ? "is-focus" : "",
          _vm.isErr.flg ? "is-err" : "",
          !_vm.editable ? "is-confirm" : ""
        ]
      },
      [
        _vm.label
          ? _c("span", { staticClass: "switch-input__label" }, [
              _vm._v("\n      " + _vm._s(_vm.label) + "\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("input", {
          ref: "input",
          staticClass: "switch-input__input",
          attrs: { type: "text", readonly: !_vm.editable },
          domProps: { value: _vm.value },
          on: { input: _vm.oninput, blur: _vm.onblur, focus: _vm.onfocus }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/InputWrap.vue?vue&type=template&id=180c918b&scoped=true&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/InputWrap.vue?vue&type=template&id=180c918b&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "input-wrap" }, [
        _c("div", { staticClass: "input-wrap__input" }, [_vm._t("input")], 2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "input-wrap__side" },
          [_vm._t("input-side")],
          2
        )
      ]),
      _vm._v(" "),
      _vm.isErr !== undefined
        ? [
            !Array.isArray(_vm.errmsg)
              ? _c("div", { staticClass: "err" }, [
                  _vm._v(
                    "\n      " + _vm._s(_vm.isErr ? _vm.errmsg : " ") + "\n    "
                  )
                ])
              : _vm._l(_vm.errmsg, function(err, i) {
                  return _c("div", { key: i, staticClass: "err" }, [
                    _vm._v("\n        " + _vm._s(err) + "\n      ")
                  ])
                })
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/SwitchInput.vue?vue&type=template&id=f94852e6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/SwitchInput.vue?vue&type=template&id=f94852e6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c("InputWrap", {
    attrs: { label: _vm.label, "is-err": _vm.isErr.flg, errmsg: _vm.isErr.msg },
    scopedSlots: _vm._u([
      {
        key: "input",
        fn: function() {
          return [
            _c("Input", {
              attrs: {
                type: _vm.type,
                label: _vm.label,
                editable: _vm.editable,
                value: _vm.value
              },
              on: { validated: _vm.validated, input: _vm.oninput }
            })
          ]
        },
        proxy: true
      },
      {
        key: "input-side",
        fn: function() {
          return [
            _vm.type === "url"
              ? _c("span", [_vm._v(".emarketing.ne.jp")])
              : _vm._e(),
            _vm._v(" "),
            _vm.isconfirm && _vm.editable
              ? _c(
                  "button",
                  {
                    staticClass: "btn-edit",
                    attrs: { disabled: _vm.isErr.flg },
                    on: { click: _vm.switchInput }
                  },
                  [_vm._v("\n      OK\n    ")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isconfirm && !_vm.editable
              ? _c(
                  "button",
                  { staticClass: "btn-edit", on: { click: _vm.switchInput } },
                  [_vm._v("\n      編集\n    ")]
                )
              : _vm._e()
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("64c13f61", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3125647a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0e6e61de", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/Input.vue":
/*!***********************!*\
  !*** ./src/Input.vue ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_vue_vue_type_template_id_36b6bea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=36b6bea1&scoped=true& */ "./src/Input.vue?vue&type=template&id=36b6bea1&scoped=true&");
/* harmony import */ var _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js& */ "./src/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Input_vue_vue_type_style_index_0_id_36b6bea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true& */ "./src/Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Input_vue_vue_type_template_id_36b6bea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Input_vue_vue_type_template_id_36b6bea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "36b6bea1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/Input.vue?vue&type=script&lang=js&":
/*!************************************************!*\
  !*** ./src/Input.vue?vue&type=script&lang=js& ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_36b6bea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/Input.vue?vue&type=style&index=0&id=36b6bea1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_36b6bea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_36b6bea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_36b6bea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_36b6bea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_style_index_0_id_36b6bea1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/Input.vue?vue&type=template&id=36b6bea1&scoped=true&":
/*!******************************************************************!*\
  !*** ./src/Input.vue?vue&type=template&id=36b6bea1&scoped=true& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_36b6bea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=template&id=36b6bea1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Input.vue?vue&type=template&id=36b6bea1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_36b6bea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_36b6bea1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/InputWrap.vue":
/*!***************************!*\
  !*** ./src/InputWrap.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputWrap_vue_vue_type_template_id_180c918b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputWrap.vue?vue&type=template&id=180c918b&scoped=true& */ "./src/InputWrap.vue?vue&type=template&id=180c918b&scoped=true&");
/* harmony import */ var _InputWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputWrap.vue?vue&type=script&lang=js& */ "./src/InputWrap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InputWrap_vue_vue_type_style_index_0_id_180c918b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true& */ "./src/InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InputWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputWrap_vue_vue_type_template_id_180c918b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputWrap_vue_vue_type_template_id_180c918b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "180c918b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/InputWrap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/InputWrap.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/InputWrap.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./InputWrap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/InputWrap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_style_index_0_id_180c918b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/InputWrap.vue?vue&type=style&index=0&id=180c918b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_style_index_0_id_180c918b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_style_index_0_id_180c918b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_style_index_0_id_180c918b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_style_index_0_id_180c918b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_style_index_0_id_180c918b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/InputWrap.vue?vue&type=template&id=180c918b&scoped=true&":
/*!**********************************************************************!*\
  !*** ./src/InputWrap.vue?vue&type=template&id=180c918b&scoped=true& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_template_id_180c918b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./InputWrap.vue?vue&type=template&id=180c918b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/InputWrap.vue?vue&type=template&id=180c918b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_template_id_180c918b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputWrap_vue_vue_type_template_id_180c918b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/SwitchInput.vue":
/*!*****************************!*\
  !*** ./src/SwitchInput.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchInput_vue_vue_type_template_id_f94852e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=template&id=f94852e6&scoped=true& */ "./src/SwitchInput.vue?vue&type=template&id=f94852e6&scoped=true&");
/* harmony import */ var _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=script&lang=js& */ "./src/SwitchInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SwitchInput_vue_vue_type_style_index_0_id_f94852e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true& */ "./src/SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchInput_vue_vue_type_template_id_f94852e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchInput_vue_vue_type_template_id_f94852e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f94852e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/SwitchInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/SwitchInput.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/SwitchInput.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/SwitchInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_f94852e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/SwitchInput.vue?vue&type=style&index=0&id=f94852e6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_f94852e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_f94852e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_f94852e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_f94852e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_style_index_0_id_f94852e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/SwitchInput.vue?vue&type=template&id=f94852e6&scoped=true&":
/*!************************************************************************!*\
  !*** ./src/SwitchInput.vue?vue&type=template&id=f94852e6&scoped=true& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_f94852e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./SwitchInput.vue?vue&type=template&id=f94852e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/SwitchInput.vue?vue&type=template&id=f94852e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_f94852e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchInput_vue_vue_type_template_id_f94852e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/formValidation.js":
/*!*******************************!*\
  !*** ./src/formValidation.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);


var errmsg = {
  url: "URLに使えない文字が含まれているようです",
  id: "IDに使えない文字が含まれています",
  pass: "パスワードに使えない文字が含まれています",
  email: "メールアドレスに誤りがあるようです"
};

function url(val) {
  var flg = !/^[a-zA-Z0-9-]{1,61}$/.test(val);
  return {
    flg: flg,
    msg: flg ? errmsg.url : null
  };
}

function idPassWord(val, type) {
  var flg = !/^[a-zA-Z0-9!-/:-@¥[-`{-~]+$/.test(val);
  return {
    flg: flg,
    msg: flg ? errmsg[type.replace(/^(?:[^_]+)_(.+)/, "$1")] : null
  };
}

function email(val) {
  var flg = !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val);
  return {
    flg: flg,
    msg: flg ? errmsg.email : null
  };
}

function isEmpty(val, label) {
  var flg = !val || val === "";
  return {
    flg: flg,
    msg: flg ? "".concat(label, "\u306F\u5FC5\u9808\u9805\u76EE\u3067\u3059") : null
  };
}

function validate(type, value, label) {
  switch (type) {
    case "requester":
    case "requesterDepartment":
    case "jobname":
    case "name":
      return isEmpty(value, label);

    case "url":
      {
        var empty = isEmpty(value, label);
        return empty.flg ? empty : url(value);
      }

    case "requesterMail":
    case "email":
      {
        var _empty = isEmpty(value, label);

        return _empty.flg ? _empty : email(value);
      }

    case "ftp_id":
    case "ftp_pass":
    case "basic_id":
    case "basic_pass":
      {
        var _empty2 = isEmpty(value, label);

        return _empty2.flg ? _empty2 : idPassWord(value, type);
      }

    default:
      return {
        flg: false,
        msg: null
      };
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0lucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL0lucHV0V3JhcC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9Td2l0Y2hJbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lucHV0LnZ1ZT9kMzg3Iiwid2VicGFjazovLy8uL3NyYy9JbnB1dFdyYXAudnVlPzJhNDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N3aXRjaElucHV0LnZ1ZT80ODA0Iiwid2VicGFjazovLy8uL3NyYy9JbnB1dC52dWU/NWQzYSIsIndlYnBhY2s6Ly8vLi9zcmMvSW5wdXRXcmFwLnZ1ZT85MzY2Iiwid2VicGFjazovLy8uL3NyYy9Td2l0Y2hJbnB1dC52dWU/ZDg1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvSW5wdXQudnVlPzNiZGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lucHV0V3JhcC52dWU/Y2RiOSIsIndlYnBhY2s6Ly8vLi9zcmMvU3dpdGNoSW5wdXQudnVlPzA0OWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvSW5wdXQudnVlP2Y2YTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lucHV0LnZ1ZT81Y2RiIiwid2VicGFjazovLy8uL3NyYy9JbnB1dC52dWU/NWViZSIsIndlYnBhY2s6Ly8vLi9zcmMvSW5wdXRXcmFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvSW5wdXRXcmFwLnZ1ZT9lMmVhIiwid2VicGFjazovLy8uL3NyYy9JbnB1dFdyYXAudnVlPzA5ZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lucHV0V3JhcC52dWU/ZWFkMCIsIndlYnBhY2s6Ly8vLi9zcmMvU3dpdGNoSW5wdXQudnVlIiwid2VicGFjazovLy8uL3NyYy9Td2l0Y2hJbnB1dC52dWU/MDUxMiIsIndlYnBhY2s6Ly8vLi9zcmMvU3dpdGNoSW5wdXQudnVlP2MyZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N3aXRjaElucHV0LnZ1ZT84MjUxIiwid2VicGFjazovLy8uL3NyYy9mb3JtVmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6WyJlcnJtc2ciLCJ1cmwiLCJpZCIsInBhc3MiLCJlbWFpbCIsInZhbCIsImZsZyIsInRlc3QiLCJtc2ciLCJpZFBhc3NXb3JkIiwidHlwZSIsInJlcGxhY2UiLCJpc0VtcHR5IiwibGFiZWwiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiZW1wdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7QUFFQTtBQUNBLCtDQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQTtBQUVBLG1CQUZBO0FBR0Esa0JBSEE7QUFJQTtBQUpBO0FBTUEsR0FUQTtBQVVBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0E7QUFIQSxHQVZBO0FBZUE7QUFDQSxVQURBLGtCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxLQVJBO0FBU0EsV0FUQSxtQkFTQSxDQVRBLEVBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWJBO0FBY0EsV0FkQSxtQkFjQSxDQWRBLEVBY0E7QUFDQTtBQUNBO0FBQ0EsS0FqQkE7QUFrQkEsWUFsQkEsb0JBa0JBLENBbEJBLEVBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBZkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrQkE7QUFDQTtBQURBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUVBO0FBQ0E7QUFDQSx5REFEQTtBQUVBO0FBRkEsR0FEQTtBQUtBLFVBQ0EsT0FEQSxFQUVBLE1BRkEsRUFHQSxPQUhBLEVBSUEsV0FKQSxFQUtBLGdCQUxBLENBTEE7QUFZQSxNQVpBLGtCQVlBO0FBQ0E7QUFDQSxv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LGVBQU9HLE9BQUssQ0FBQ1YsR0FBTixHQUFhVSxPQUFiLEdBQXFCUCxVQUFVLENBQUNNLEtBQUQsRUFBUUwsSUFBUixDQUF0QztBQUNEOztBQUVEO0FBQ0UsYUFBTztBQUFDSixXQUFHLEVBQUUsS0FBTjtBQUFhRSxXQUFHLEVBQUU7QUFBbEIsT0FBUDtBQTVCRjtBQThCRCxDIiwiZmlsZSI6IjEuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxsYWJlbD5cbiAgICA8ZGl2XG4gICAgICA6Y2xhc3M9XCJbXG4gICAgICAgICdzd2l0Y2gtaW5wdXQnLFxuICAgICAgICBhY3RpdmUgPyAnaXMtYWN0aXZlJyA6ICcnLFxuICAgICAgICBmb2N1cyA/ICdpcy1mb2N1cycgOiAnJyxcbiAgICAgICAgaXNFcnIuZmxnID8gJ2lzLWVycicgOiAnJyxcbiAgICAgICAgIWVkaXRhYmxlID8gJ2lzLWNvbmZpcm0nIDogJydcbiAgICAgIF1cIlxuICAgID5cbiAgICAgIDxzcGFuXG4gICAgICAgIHYtaWY9XCJsYWJlbFwiXG4gICAgICAgIGNsYXNzPVwic3dpdGNoLWlucHV0X19sYWJlbFwiXG4gICAgICA+XG4gICAgICAgIHt7IGxhYmVsIH19XG4gICAgICA8L3NwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGNsYXNzPVwic3dpdGNoLWlucHV0X19pbnB1dFwiXG4gICAgICAgIDpyZWFkb25seT1cIiFlZGl0YWJsZVwiXG4gICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgQGlucHV0PVwib25pbnB1dFwiXG4gICAgICAgIEBibHVyPVwib25ibHVyXCJcbiAgICAgICAgQGZvY3VzPVwib25mb2N1c1wiXG4gICAgICA+XG4gICAgPC9kaXY+XG4gIDwvbGFiZWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHZhbGlkYXRlIGZyb20gXCIuL2Zvcm1WYWxpZGF0aW9uXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1widHlwZVwiLCBcImxhYmVsXCIsIFwiZWRpdGFibGVcIiwgXCJ2YWx1ZVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNFcnI6IHtmbGc6IGZhbHNlLCBtc2c6IG51bGx9LFxuICAgICAgYmx1cmVkOiBmYWxzZSxcbiAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgIGlucHV0ZWQ6IGZhbHNlLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBhY3RpdmUoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gXCJcIiB8fCB0aGlzLmZvY3VzXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25ibHVyKGUpIHsgXG4gICAgICBpZiAoIXRoaXMuYmx1cmVkICYmIHRoaXMuaW5wdXRlZCkgeyBcbiAgICAgICAgdGhpcy5ibHVyZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuY2hlY2tFcnIoZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9jdXMgPSBmYWxzZVxuICAgICAgdGhpcy4kZW1pdChcImJsdXJcIiwgZSlcbiAgICB9LFxuICAgIG9uaW5wdXQoZSkge1xuICAgICAgaWYgKCF0aGlzLmlucHV0ZWQpIHRoaXMuaW5wdXRlZCA9IHRydWVcbiAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgIGlmICh0aGlzLmJsdXJlZCkgdGhpcy5jaGVja0VycihlKVxuICAgIH0sXG4gICAgb25mb2N1cyhlKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiZm9jdXNcIiwgZSlcbiAgICAgIHRoaXMuZm9jdXMgPSB0cnVlXG4gICAgfSxcbiAgICBjaGVja0VycihlKSB7XG4gICAgICB0aGlzLmlzRXJyID0gdmFsaWRhdGUodGhpcy50eXBlLCBlLnRhcmdldC52YWx1ZSwgdGhpcy5sYWJlbClcbiAgICAgIHRoaXMuJGVtaXQoXCJ2YWxpZGF0ZWRcIiwgdGhpcy5pc0VycilcbiAgICB9LFxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuJGZvY3VzLWNvbG9yOiByZ2IoOTAsIDE3MSwgMjQyKTtcbiRlcnItY29sb3I6ICNmZjNlM2U7XG5cbi5zd2l0Y2gtaW5wdXQge1xuICBwYWRkaW5nOiA0cHggMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcbiAgJl9fbGFiZWwge1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMTJweDtcbiAgICBoZWlnaHQ6IDEuMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIH1cbiAgJl9faW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgICY6cmVhZC1vbmx5IHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbiAgJi5pcy1mb2N1cy5pcy1hY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogJGZvY3VzLWNvbG9yO1xuICAgIC5zd2l0Y2gtaW5wdXRfX2xhYmVsIHtcbiAgICAgIGNvbG9yOiAkZm9jdXMtY29sb3I7XG4gICAgfVxuICB9XG4gICYuaXMtYWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC5zd2l0Y2gtaW5wdXRfX2xhYmVsIHtcbiAgICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI2cHgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbiAgJi5pcy1jb25maXJtIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTg2LCAxODYsIDE4Nik7XG4gICAgLnN3aXRjaC1pbnB1dF9faW5wdXQge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAuc3dpdGNoLWlucHV0X19sYWJlbCB7XG4gICAgICBjb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMnB4LCAtMjZweClcbiAgICB9XG4gIH1cbiAgJi5pcy1lcnIge1xuICAgIGJvcmRlci1jb2xvcjogJGVyci1jb2xvciAhaW1wb3J0YW50O1xuICAgIC5zd2l0Y2gtaW5wdXRfX2xhYmVsIHtcbiAgICAgIGNvbG9yOiAkZXJyLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtd3JhcFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXdyYXBfX2lucHV0XCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJpbnB1dFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC13cmFwX19zaWRlXCI+XG4gICAgICAgIDxzbG90XG4gICAgICAgICAgbmFtZT1cImlucHV0LXNpZGVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHRlbXBsYXRlIHYtaWY9XCJpc0VyciAhPT0gdW5kZWZpbmVkXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCIhQXJyYXkuaXNBcnJheShlcnJtc2cpXCJcbiAgICAgICAgY2xhc3M9XCJlcnJcIlxuICAgICAgPlxuICAgICAgICB7eyBpc0VyciA/IGVycm1zZyA6IFwiIFwiIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWZvcj1cIihlcnIsIGkpIGluIGVycm1zZ1wiXG4gICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgIGNsYXNzPVwiZXJyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IGVyciB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4ubGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogcmdiKDc3LCA3NywgNzcpO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uaW5wdXQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICZfX2lucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICB9XG4gICZfX3NpZGUge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG4gID4gKiArICoge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cbn1cbi5lcnIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZjNlM2U7XG4gIG1pbi1oZWlnaHQ6IDEuNWVtO1xufVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcImlzRXJyXCIsIFwiZXJybXNnXCJdXG59XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxJbnB1dFdyYXBcbiAgICA6bGFiZWw9XCJsYWJlbFwiXG4gICAgOmlzLWVycj1cImlzRXJyLmZsZ1wiXG4gICAgOmVycm1zZz1cImlzRXJyLm1zZ1wiXG4gID5cbiAgICA8dGVtcGxhdGUgI2lucHV0PlxuICAgICAgPElucHV0IFxuICAgICAgICA6dHlwZT1cInR5cGVcIlxuICAgICAgICA6bGFiZWw9XCJsYWJlbFwiXG4gICAgICAgIDplZGl0YWJsZT1cImVkaXRhYmxlXCJcbiAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICBAdmFsaWRhdGVkPVwidmFsaWRhdGVkXCJcbiAgICAgICAgQGlucHV0PVwib25pbnB1dFwiXG4gICAgICAvPlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlICNpbnB1dC1zaWRlPlxuICAgICAgPHNwYW4gdi1pZj1cInR5cGUgPT09ICd1cmwnXCI+LmVtYXJrZXRpbmcubmUuanA8L3NwYW4+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHYtaWY9XCJpc2NvbmZpcm0gJiYgZWRpdGFibGVcIlxuICAgICAgICBjbGFzcz1cImJ0bi1lZGl0XCJcbiAgICAgICAgOmRpc2FibGVkPVwiaXNFcnIuZmxnXCJcbiAgICAgICAgQGNsaWNrPVwic3dpdGNoSW5wdXRcIlxuICAgICAgPlxuICAgICAgICBPS1xuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHYtaWY9XCJpc2NvbmZpcm0gJiYgIWVkaXRhYmxlXCJcbiAgICAgICAgY2xhc3M9XCJidG4tZWRpdFwiXG4gICAgICAgIEBjbGljaz1cInN3aXRjaElucHV0XCJcbiAgICAgID5cbiAgICAgICAg57eo6ZuGXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L0lucHV0V3JhcD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5idG4tZWRpdCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDU4LCA1OCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtaW4td2lkdGg6IDQ4cHg7XG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiXG5pbXBvcnQgSW5wdXRXcmFwIGZyb20gXCIuL0lucHV0V3JhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIElucHV0LFxuICAgIElucHV0V3JhcFxuICB9LFxuICBwcm9wczogW1xuICAgIFwidmFsdWVcIixcbiAgICBcInR5cGVcIixcbiAgICBcImxhYmVsXCIsXG4gICAgXCJpc2NvbmZpcm1cIixcbiAgICBcInNob3VsZHZhbGlkYXRlXCJcbiAgXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICBpc0Vycjoge2ZsZzogZmFsc2UsIG1zZzogbnVsbH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXNjb25maXJtKHZhbCkge1xuICAgICAgdGhpcy5lZGl0YWJsZSA9ICF2YWxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzd2l0Y2hJbnB1dCgpIHtcbiAgICAgIHRoaXMuZWRpdGFibGUgPSAhdGhpcy5lZGl0YWJsZVxuICAgICAgLy8gaWYodGhpcy5lZGl0YWJsZSkgdGhpcy4kcmVmcy5pbnB1dC5mb2N1cygpXG4gICAgfSxcbiAgICBvbmlucHV0KHZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgdmFsdWUpXG4gICAgfSxcbiAgICB2YWxpZGF0ZWQoaXNFcnIpIHtcbiAgICAgIHRoaXMuaXNFcnIgPSBpc0VyclxuICAgICAgdGhpcy4kZW1pdChcInVwZGF0ZVwiLCAhdGhpcy5pc0Vyci5mbGcpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN3aXRjaC1pbnB1dFtkYXRhLXYtMzZiNmJlYTFdIHtcXG4gIHBhZGRpbmc6IDRweCAxNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDU2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XFxufVxcbi5zd2l0Y2gtaW5wdXRfX2xhYmVsW2RhdGEtdi0zNmI2YmVhMV0ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICBoZWlnaHQ6IDEuMmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbn1cXG4uc3dpdGNoLWlucHV0X19pbnB1dFtkYXRhLXYtMzZiNmJlYTFdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLnN3aXRjaC1pbnB1dF9faW5wdXRbZGF0YS12LTM2YjZiZWExXTpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnN3aXRjaC1pbnB1dF9faW5wdXRbZGF0YS12LTM2YjZiZWExXTpyZWFkLW9ubHkge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLnN3aXRjaC1pbnB1dC5pcy1mb2N1cy5pcy1hY3RpdmVbZGF0YS12LTM2YjZiZWExXSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzVhYWJmMjtcXG59XFxuLnN3aXRjaC1pbnB1dC5pcy1mb2N1cy5pcy1hY3RpdmUgLnN3aXRjaC1pbnB1dF9fbGFiZWxbZGF0YS12LTM2YjZiZWExXSB7XFxuICAgICAgY29sb3I6ICM1YWFiZjI7XFxufVxcbi5zd2l0Y2gtaW5wdXQuaXMtYWN0aXZlW2RhdGEtdi0zNmI2YmVhMV0ge1xcbiAgICBib3JkZXItY29sb3I6ICM5NDk0OTQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5zd2l0Y2gtaW5wdXQuaXMtYWN0aXZlIC5zd2l0Y2gtaW5wdXRfX2xhYmVsW2RhdGEtdi0zNmI2YmVhMV0ge1xcbiAgICAgIGNvbG9yOiAjOTQ5NDk0O1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI2cHgpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5zd2l0Y2gtaW5wdXQuaXMtY29uZmlybVtkYXRhLXYtMzZiNmJlYTFdIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JhYmFiYTtcXG59XFxuLnN3aXRjaC1pbnB1dC5pcy1jb25maXJtIC5zd2l0Y2gtaW5wdXRfX2lucHV0W2RhdGEtdi0zNmI2YmVhMV0ge1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLnN3aXRjaC1pbnB1dC5pcy1jb25maXJtIC5zd2l0Y2gtaW5wdXRfX2xhYmVsW2RhdGEtdi0zNmI2YmVhMV0ge1xcbiAgICAgIGNvbG9yOiAjOTQ5NDk0O1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMnB4LCAtMjZweCk7XFxufVxcbi5zd2l0Y2gtaW5wdXQuaXMtZXJyW2RhdGEtdi0zNmI2YmVhMV0ge1xcbiAgICBib3JkZXItY29sb3I6ICNmZjNlM2UgIWltcG9ydGFudDtcXG59XFxuLnN3aXRjaC1pbnB1dC5pcy1lcnIgLnN3aXRjaC1pbnB1dF9fbGFiZWxbZGF0YS12LTM2YjZiZWExXSB7XFxuICAgICAgY29sb3I6ICNmZjNlM2UgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubGFiZWxbZGF0YS12LTE4MGM5MThiXSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjNGQ0ZDRkO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG4uaW5wdXQtd3JhcFtkYXRhLXYtMTgwYzkxOGJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaW5wdXQtd3JhcF9faW5wdXRbZGF0YS12LTE4MGM5MThiXSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LXNocmluazogMTtcXG59XFxuLmlucHV0LXdyYXBfX2lucHV0ID4gKiArICpbZGF0YS12LTE4MGM5MThiXSB7XFxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuLmlucHV0LXdyYXBfX3NpZGVbZGF0YS12LTE4MGM5MThiXSB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4uaW5wdXQtd3JhcCA+ICogKyAqW2RhdGEtdi0xODBjOTE4Yl0ge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG4uZXJyW2RhdGEtdi0xODBjOTE4Yl0ge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICNmZjNlM2U7XFxuICBtaW4taGVpZ2h0OiAxLjVlbTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYnRuLWVkaXRbZGF0YS12LWY5NDg1MmU2XSB7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtaW4td2lkdGg6IDQ4cHg7XFxufVxcbi5idG4tZWRpdFtkYXRhLXYtZjk0ODUyZTZdOmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImxhYmVsXCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgXCJzd2l0Y2gtaW5wdXRcIixcbiAgICAgICAgICBfdm0uYWN0aXZlID8gXCJpcy1hY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgX3ZtLmZvY3VzID8gXCJpcy1mb2N1c1wiIDogXCJcIixcbiAgICAgICAgICBfdm0uaXNFcnIuZmxnID8gXCJpcy1lcnJcIiA6IFwiXCIsXG4gICAgICAgICAgIV92bS5lZGl0YWJsZSA/IFwiaXMtY29uZmlybVwiIDogXCJcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfdm0ubGFiZWxcbiAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInN3aXRjaC1pbnB1dF9fbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS5sYWJlbCkgKyBcIlxcbiAgICBcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgcmVmOiBcImlucHV0XCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3dpdGNoLWlucHV0X19pbnB1dFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCByZWFkb25seTogIV92bS5lZGl0YWJsZSB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udmFsdWUgfSxcbiAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLm9uaW5wdXQsIGJsdXI6IF92bS5vbmJsdXIsIGZvY3VzOiBfdm0ub25mb2N1cyB9XG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LXdyYXBcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtd3JhcF9faW5wdXRcIiB9LCBbX3ZtLl90KFwiaW5wdXRcIildLCAyKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LXdyYXBfX3NpZGVcIiB9LFxuICAgICAgICAgIFtfdm0uX3QoXCJpbnB1dC1zaWRlXCIpXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc0VyciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gW1xuICAgICAgICAgICAgIUFycmF5LmlzQXJyYXkoX3ZtLmVycm1zZylcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVyclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uaXNFcnIgPyBfdm0uZXJybXNnIDogXCIgXCIpICsgXCJcXG4gICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fbChfdm0uZXJybXNnLCBmdW5jdGlvbihlcnIsIGkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwiZXJyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKGVycikgKyBcIlxcbiAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIklucHV0V3JhcFwiLCB7XG4gICAgYXR0cnM6IHsgbGFiZWw6IF92bS5sYWJlbCwgXCJpcy1lcnJcIjogX3ZtLmlzRXJyLmZsZywgZXJybXNnOiBfdm0uaXNFcnIubXNnIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJpbnB1dFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFwiSW5wdXRcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IF92bS50eXBlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0ubGFiZWwsXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IF92bS5lZGl0YWJsZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IHZhbGlkYXRlZDogX3ZtLnZhbGlkYXRlZCwgaW5wdXQ6IF92bS5vbmlucHV0IH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImlucHV0LXNpZGVcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfdm0udHlwZSA9PT0gXCJ1cmxcIlxuICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiLmVtYXJrZXRpbmcubmUuanBcIildKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5pc2NvbmZpcm0gJiYgX3ZtLmVkaXRhYmxlXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLmlzRXJyLmZsZyB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnN3aXRjaElucHV0IH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgT0tcXG4gICAgXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uaXNjb25maXJtICYmICFfdm0uZWRpdGFibGVcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi1lZGl0XCIsIG9uOiB7IGNsaWNrOiBfdm0uc3dpdGNoSW5wdXQgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIOe3qOmbhlxcbiAgICBcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfVxuICAgIF0pXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNmI2YmVhMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjY0YzEzZjYxXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzZiNmJlYTEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzZiNmJlYTEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dFdyYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTgwYzkxOGImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzMTI1NjQ3YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lucHV0V3JhcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xODBjOTE4YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dFdyYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTgwYzkxOGImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Td2l0Y2hJbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mOTQ4NTJlNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjBlNmU2MWRlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3dpdGNoSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Zjk0ODUyZTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3dpdGNoSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Zjk0ODUyZTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzZiNmJlYTEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzZiNmJlYTEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzNmI2YmVhMVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWRla2FkZXJ1c2hpcm91L1NpdGVzL2JhY2tsb2ctdGVzdC0yL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM2YjZiZWExJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM2YjZiZWExJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM2YjZiZWExJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzZiNmJlYTEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzZiNmJlYTEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9JbnB1dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzZiNmJlYTEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNmI2YmVhMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2YjZiZWExJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbnB1dFdyYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4MGM5MThiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0lucHV0V3JhcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0lucHV0V3JhcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSW5wdXRXcmFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE4MGM5MThiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTgwYzkxOGJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FkZWthZGVydXNoaXJvdS9TaXRlcy9iYWNrbG9nLXRlc3QtMi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxODBjOTE4YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxODBjOTE4YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxODBjOTE4YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5wdXRXcmFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODBjOTE4YiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxODBjOTE4YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL0lucHV0V3JhcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXRXcmFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lucHV0V3JhcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dFdyYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTgwYzkxOGImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dFdyYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTgwYzkxOGImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lucHV0V3JhcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTgwYzkxOGImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N3aXRjaElucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mOTQ4NTJlNiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Td2l0Y2hJbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N3aXRjaElucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Td2l0Y2hJbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mOTQ4NTJlNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY5NDg1MmU2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thZGVrYWRlcnVzaGlyb3UvU2l0ZXMvYmFja2xvZy10ZXN0LTIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZjk0ODUyZTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjk0ODUyZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjk0ODUyZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N3aXRjaElucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mOTQ4NTJlNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmOTQ4NTJlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL1N3aXRjaElucHV0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Td2l0Y2hJbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Td2l0Y2hJbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Td2l0Y2hJbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mOTQ4NTJlNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N3aXRjaElucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWY5NDg1MmU2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Td2l0Y2hJbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjk0ODUyZTYmc2NvcGVkPXRydWUmXCIiLCJjb25zdCBlcnJtc2cgPSB7XG4gIHVybDogXCJVUkzjgavkvb/jgYjjgarjgYTmloflrZfjgYzlkKvjgb7jgozjgabjgYTjgovjgojjgYbjgafjgZlcIixcbiAgaWQ6IFwiSUTjgavkvb/jgYjjgarjgYTmloflrZfjgYzlkKvjgb7jgozjgabjgYTjgb7jgZlcIixcbiAgcGFzczogXCLjg5Hjgrnjg6/jg7zjg4njgavkvb/jgYjjgarjgYTmloflrZfjgYzlkKvjgb7jgozjgabjgYTjgb7jgZlcIixcbiAgZW1haWw6IFwi44Oh44O844Or44Ki44OJ44Os44K544Gr6Kqk44KK44GM44GC44KL44KI44GG44Gn44GZXCJcbn1cblxuZnVuY3Rpb24gdXJsKHZhbCkge1xuICBjb25zdCBmbGcgPSAhL15bYS16QS1aMC05LV17MSw2MX0kLy50ZXN0KHZhbClcbiAgcmV0dXJuIHtmbGcsIG1zZzogZmxnID8gZXJybXNnLnVybCA6IG51bGx9XG59XG5cbmZ1bmN0aW9uIGlkUGFzc1dvcmQodmFsLCB0eXBlKSB7XG4gIGNvbnN0IGZsZyA9ICEvXlthLXpBLVowLTkhLS86LUDCpVstYHstfl0rJC8udGVzdCh2YWwpXG4gIHJldHVybiB7ZmxnLCBtc2c6IGZsZyA/IGVycm1zZ1t0eXBlLnJlcGxhY2UoL14oPzpbXl9dKylfKC4rKS8sIFwiJDFcIildIDogbnVsbH1cbn1cblxuZnVuY3Rpb24gZW1haWwodmFsKSB7XG4gIGNvbnN0IGZsZyA9ICEvXlxcdysoWy0rLl1cXHcrKSpAXFx3KyhbLS5dXFx3KykqXFwuXFx3KyhbLS5dXFx3KykqJC8udGVzdCh2YWwpXG4gIHJldHVybiB7ZmxnLCBtc2c6IGZsZyA/IGVycm1zZy5lbWFpbCA6IG51bGx9XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsLCBsYWJlbCkge1xuICBjb25zdCBmbGcgPSAhdmFsIHx8IHZhbCA9PT0gXCJcIlxuICByZXR1cm4ge2ZsZywgbXNnOiBmbGcgPyBgJHtsYWJlbH3jga/lv4XpoIjpoIXnm67jgafjgZlgIDogbnVsbCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlKHR5cGUsIHZhbHVlLCBsYWJlbCkge1xuICBzd2l0Y2godHlwZSkge1xuXG4gIGNhc2UgXCJyZXF1ZXN0ZXJcIjpcbiAgY2FzZSBcInJlcXVlc3RlckRlcGFydG1lbnRcIjpcbiAgY2FzZSBcImpvYm5hbWVcIjpcbiAgY2FzZSBcIm5hbWVcIjpcbiAgICByZXR1cm4gaXNFbXB0eSh2YWx1ZSwgbGFiZWwpXG5cbiAgY2FzZSBcInVybFwiOiB7XG4gICAgY29uc3QgZW1wdHkgPSBpc0VtcHR5KHZhbHVlLCBsYWJlbClcbiAgICByZXR1cm4gZW1wdHkuZmxnID8gZW1wdHkgOiB1cmwodmFsdWUpXG4gIH1cblxuICBjYXNlIFwicmVxdWVzdGVyTWFpbFwiOlxuICBjYXNlIFwiZW1haWxcIjoge1xuICAgIGNvbnN0IGVtcHR5ID0gaXNFbXB0eSh2YWx1ZSwgbGFiZWwpXG4gICAgcmV0dXJuIGVtcHR5LmZsZyA/ICBlbXB0eSA6IGVtYWlsKHZhbHVlKVxuICB9XG5cbiAgY2FzZSBcImZ0cF9pZFwiOlxuICBjYXNlIFwiZnRwX3Bhc3NcIjpcbiAgY2FzZSBcImJhc2ljX2lkXCI6XG4gIGNhc2UgXCJiYXNpY19wYXNzXCI6IHtcbiAgICBjb25zdCBlbXB0eSA9IGlzRW1wdHkodmFsdWUsIGxhYmVsKVxuICAgIHJldHVybiBlbXB0eS5mbGcgPyAgZW1wdHkgOiBpZFBhc3NXb3JkKHZhbHVlLCB0eXBlKVxuICB9XG5cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4ge2ZsZzogZmFsc2UsIG1zZzogbnVsbH1cbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9