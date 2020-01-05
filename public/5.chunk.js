(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/CheckBox.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/CheckBox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _InputWrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputWrap */ "./src/InputWrap.vue");






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
    InputWrap: _InputWrap__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  model: {
    prop: "checked",
    event: "input"
  },
  props: ["value", "uncheckedValue", "checked", "isconfirm", "label", "type"],
  data: function data() {
    return {
      localChecked: this.$parent && this.$parent.$options.name === "CheckGroup" ? this.$parent.checked : this.checked,
      editable: true
    };
  },
  computed: {
    parent: function parent() {
      return "$parent" in this && this.$parent.$options.name === "CheckGroup" ? this.$parent : null;
    },
    computedLocalChecked: {
      get: function get() {
        return this.parent ? this.parent.localChecked : this.localChecked;
      },
      set: function set(val) {
        if (this.parent) {
          this.parent.localChecked = val;
        } else {
          this.localChecked = val;
        }
      }
    }
  },
  watch: {
    computedLocalChecked: function computedLocalChecked(newVal) {
      this.$emit("input", newVal);
    },
    isconfirm: function isconfirm(val) {
      this.editable = !val;
    }
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var checked = _ref.target.checked;
      var localChecked = this.computedLocalChecked;
      var value = this.value;
      var isArr = Array.isArray(localChecked);
      var uncheckedValue = isArr ? null : this.uncheckedValue;

      if (isArr) {
        var includes = localChecked.includes(value);

        if (checked && !includes) {
          localChecked = localChecked.concat(value);
        } else if (!checked && includes) {
          localChecked = localChecked.filter(function (val) {
            return val !== value;
          });
        }
      } else {
        localChecked = checked ? value : uncheckedValue;
      }

      this.computedLocalChecked = localChecked;
    },
    switchInput: function switchInput() {
      this.editable = !this.editable;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/Form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.every */ "./node_modules/core-js/modules/es.array.every.js");
/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SwitchInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SwitchInput */ "./src/SwitchInput.vue");
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CheckBox */ "./src/CheckBox.vue");
/* harmony import */ var _LodingModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LodingModal */ "./src/LodingModal.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);











function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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




var domain = ".emarketing.ne.jp";

function genPostData(inputs) {
  return inputs.reduce(function (res, input) {
    if (input.children) {
      res[input.key] = input.children.map(function (child) {
        return "".concat(child.label, "\uFF1A").concat(child.value);
      }).join("\n");
    } else {
      res[input.key] = input.key === "url" ? "".concat(input.value).concat(domain) : input.value;
    }

    return res;
  }, {});
}

function genIsValidObj(inputs) {
  return inputs.reduce(function (res, input) {
    if (input.children) {
      input.children.reduce(function (res, child) {
        if ("isValid" in child) res[child.key] = child.isValid;
        return res;
      }, res);
    } else {
      if ("isValid" in input) res[input.key] = input.isValid;
    }

    return res;
  }, {});
}

function optimizeInputsObj(inputs) {
  return inputs.map(function (input) {
    if (input.children) {
      input.children = input.children.map(function (child) {
        return unConfigurableKeyAndLabel(child);
      });
    }

    return unConfigurableKeyAndLabel(input);
  });
}

function unConfigurableKeyAndLabel(obj) {
  Object.defineProperties(obj, {
    key: {
      value: obj.key,
      configurable: false
    },
    label: {
      value: obj.label,
      configurable: false
    }
  });
  return obj;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SwitchInput: _SwitchInput__WEBPACK_IMPORTED_MODULE_10__["default"],
    CheckBox: _CheckBox__WEBPACK_IMPORTED_MODULE_11__["default"],
    LoadingModal: _LodingModal__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      inputs: [],
      isValid: {},
      isconfirm: false,
      isSubmited: false,
      submitErr: false,
      loading: false,
      res: null
    };
  },
  computed: {
    btnDisabled: function btnDisabled() {
      var _this = this;

      return !Object.keys(this.isValid).every(function (key) {
        return _this.isValid[key];
      });
    }
  },
  watch: {
    isconfirm: function isconfirm(val) {
      this.editable = !val;
    }
  },
  created: function created() {
    this.inputs = optimizeInputsObj([{
      key: "jobname",
      label: "案件名",
      value: "",
      isValid: false
    }, {
      key: "requester",
      label: "氏名",
      value: "",
      isValid: false
    }, {
      key: "requesterDepartment",
      label: "部署名",
      value: "",
      isValid: false
    }, {
      key: "requesterMail",
      label: "メールアドレス",
      value: "",
      isValid: false
    }, {
      key: "url",
      label: "希望URL",
      value: "",
      isValid: false
    }, {
      key: "ftp",
      label: "FTP情報",
      children: [{
        key: "ftp_id",
        label: "ID",
        value: "",
        isValid: false
      }, {
        key: "ftp_pass",
        label: "PASS",
        value: "",
        isValid: false
      }]
    }, {
      key: "basic",
      label: "basic認証",
      children: [{
        key: "basic_id",
        label: "ID",
        value: "",
        isValid: false
      }, {
        key: "basic_pass",
        label: "PASS",
        value: "",
        isValid: false
      }]
    }, {
      key: "limit",
      label: "使用期限",
      value: ""
    }, {
      key: "ssl",
      label: "SSL",
      value: "",
      checkedValue: "要",
      uncheckedValue: "不要",
      checkbox: true
    }]);
  },
  methods: {
    updatestate: function updatestate(isValid, index) {
      var childIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var input = this.inputs[index];
      input = childIndex ? input.children[childIndex] : input;
      input.isValid = isValid;
    },
    confirm: function confirm() {
      this.isconfirm = true;
      window.scroll(0, 0);
    },
    compleat: function compleat() {
      if (this.res.status === "error") {
        this.$router.push("error");
        return;
      }

      this.$router.push({
        name: "complete",
        params: {
          items: this.inputs
        }
      });
    },
    submit: function () {
      var _submit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var postData, _ref, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading = true;
                postData = genPostData(this.inputs);
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post("main.php", postData);

              case 4:
                _ref = _context.sent;
                data = _ref.data;
                this.res = data;
                this.submitErr = this.res.status === "error";
                this.loading = false;
                this.isSubmited = true;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit() {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/LodingModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/LodingModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["show", "error"],
  computed: {
    i: function i() {
      if (this.error) console.log("error!!!");
      return "a";
    }
  },
  methods: {
    afterLeave: function afterLeave() {
      this.$emit("loaded");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".checkbox[data-v-1831b1c8] {\n  padding-left: 30px;\n  position: relative;\n}\n.checkbox__label[data-v-1831b1c8]:before, .checkbox__label[data-v-1831b1c8]:after {\n    display: block;\n    position: absolute;\n}\n.checkbox__label[data-v-1831b1c8]:before {\n    content: \"\";\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    left: 0;\n    width: 24px;\n    height: 24px;\n    border: 1px solid;\n    border-radius: 2px;\n}\n.checkbox__label[data-v-1831b1c8]:after {\n    top: 4px;\n    left: 5px;\n    width: 14px;\n    height: 7px;\n    border-left: 2px solid #fff;\n    border-bottom: 2px solid #fff;\n    transform: rotate(-45deg);\n}\n.checkbox__checkbox[data-v-1831b1c8] {\n    display: none;\n}\n.checkbox__checkbox:checked + .checkbox__label[data-v-1831b1c8]:before {\n      background-color: #000;\n}\n.checkbox__checkbox:checked + .checkbox__label[data-v-1831b1c8]:after {\n      content: \"\";\n}\n.checkbox.is-confirm[data-v-1831b1c8] {\n    color: #949494;\n    font-size: 14px;\n    display: block;\n    padding-left: 0;\n}\n.checkbox.is-confirm .checkbox__label[data-v-1831b1c8]:before, .checkbox.is-confirm .checkbox__label[data-v-1831b1c8]:after {\n      content: normal;\n}\n.btn-edit[data-v-1831b1c8] {\n  margin-left: 8px;\n  display: inline-block;\n  border: none;\n  background-color: #3a3a3a;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 4px;\n  font-size: 14px;\n  line-height: 1;\n  min-width: 48px;\n}\n.btn-edit[data-v-1831b1c8]:disabled {\n    opacity: 0.3;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".label[data-v-5cb7703d] {\n  display: inline-block;\n  margin-bottom: 16px;\n}\n.multi-input-wrap[data-v-5cb7703d] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.multi-input-wrap > *[data-v-5cb7703d] {\n    width: 48%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".overlay[data-v-e145c67a] {\n  background-color: rgba(255, 255, 255, 0.8);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.loader[data-v-e145c67a] {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: #000;\n}\n.loader[data-v-e145c67a]:before, .loader[data-v-e145c67a]:after {\n    position: absolute;\n    content: '';\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n.loader[data-v-e145c67a]:after {\n    width: 40px;\n    height: 40px;\n    border: 4px solid #fff;\n    border-radius: 50%;\n    border-left-color: transparent;\n    animation: spin-data-v-e145c67a linear 1s infinite;\n}\n.loader[data-v-e145c67a]:before {\n    width: 20px;\n    height: 10px;\n    border: 3px solid #fff;\n    border-right: 0;\n    border-top: 0;\n    transform: rotate(0deg) scale(0);\n    animation-delay: 2.5s;\n}\n.loader-enter-active[data-v-e145c67a], .loader-leave-active[data-v-e145c67a] {\n  transition: opacity .25s;\n}\n.loader-enter[data-v-e145c67a], .loader-leave-to[data-v-e145c67a] {\n  opacity: 0;\n}\n.loader-leave-active[data-v-e145c67a] {\n  transition-delay: .5s;\n}\n.loader-leave-active .loader[data-v-e145c67a]:after {\n    content: normal;\n}\n.loader-leave-active .loader[data-v-e145c67a]:before {\n    animation: success-data-v-e145c67a ease-in .15s forwards;\n}\n.is-err .loader[data-v-e145c67a]:before {\n  font-size: 20px;\n  font-weight: bold;\n  content: \"!\";\n  animation: error-data-v-e145c67a ease-in .15s forwards !important;\n}\n@keyframes spin-data-v-e145c67a {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes success-data-v-e145c67a {\nfrom {\n    transform: rotate(0) scale(0);\n}\nto {\n    transform: rotate(-45deg) scale(1);\n}\n}\n@keyframes error-data-v-e145c67a {\nfrom {\n    transform: scale(0);\n}\nto {\n    transform: scale(1);\n}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/CheckBox.vue?vue&type=template&id=1831b1c8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/CheckBox.vue?vue&type=template&id=1831b1c8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************/
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
    scopedSlots: _vm._u([
      {
        key: "input",
        fn: function() {
          return [
            _c(
              "label",
              { class: ["checkbox", !_vm.editable ? "is-confirm" : ""] },
              [
                _vm.editable
                  ? _c("input", {
                      staticClass: "checkbox__checkbox",
                      attrs: { type: "checkbox" },
                      domProps: { checked: _vm.value === _vm.localChecked },
                      on: { change: _vm.handleChange }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("span", { staticClass: "checkbox__label" }, [
                  _vm._v("\n        " + _vm._s(_vm.label) + "\n      ")
                ])
              ]
            ),
            _vm._v(" "),
            !_vm.editable
              ? _c("span", [_vm._v(_vm._s(_vm.localChecked))])
              : _vm._e()
          ]
        },
        proxy: true
      },
      {
        key: "input-side",
        fn: function() {
          return [
            _vm.isconfirm && _vm.editable
              ? _c(
                  "button",
                  { staticClass: "btn-edit", on: { click: _vm.switchInput } },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Form.vue?vue&type=template&id=5cb7703d&scoped=true&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Form.vue?vue&type=template&id=5cb7703d&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************/
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
      _c("LoadingModal", {
        attrs: { show: _vm.loading, error: _vm.submitErr },
        on: { loaded: _vm.compleat }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.isSubmited,
              expression: "!isSubmited"
            }
          ],
          staticClass: "form-wrapper"
        },
        [
          _vm._l(_vm.inputs, function(input, index) {
            return [
              input.children
                ? _c("div", { key: index }, [
                    _c("span", { staticClass: "label" }, [
                      _vm._v(_vm._s(input.label))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "multi-input-wrap" },
                      [
                        _vm._l(input.children, function(child, childIndex) {
                          return [
                            child.checkbox
                              ? _c("CheckBox", {
                                  key: childIndex,
                                  attrs: {
                                    type: child.key,
                                    label: child.label,
                                    isconfirm: _vm.isconfirm,
                                    value: child.checkedValue
                                  },
                                  model: {
                                    value: child.value,
                                    callback: function($$v) {
                                      _vm.$set(child, "value", $$v)
                                    },
                                    expression: "child.value"
                                  }
                                })
                              : _c("SwitchInput", {
                                  key: childIndex,
                                  attrs: {
                                    type: child.key,
                                    label: child.label,
                                    isconfirm: _vm.isconfirm,
                                    shouldvalidate: "isValid" in child
                                  },
                                  on: {
                                    update: function(isValid) {
                                      _vm.updatestate(
                                        isValid,
                                        index,
                                        childIndex
                                      )
                                    }
                                  },
                                  model: {
                                    value: child.value,
                                    callback: function($$v) {
                                      _vm.$set(child, "value", $$v)
                                    },
                                    expression: "child.value"
                                  }
                                })
                          ]
                        })
                      ],
                      2
                    )
                  ])
                : [
                    input.checkbox
                      ? _c("CheckBox", {
                          key: index,
                          attrs: {
                            type: input.key,
                            label: input.label,
                            isconfirm: _vm.isconfirm,
                            value: input.checkedValue,
                            "unchecked-value": input.uncheckedValue
                          },
                          model: {
                            value: input.value,
                            callback: function($$v) {
                              _vm.$set(input, "value", $$v)
                            },
                            expression: "input.value"
                          }
                        })
                      : _c("SwitchInput", {
                          key: index,
                          attrs: {
                            type: input.key,
                            label: input.label,
                            isconfirm: _vm.isconfirm,
                            shouldvalidate: "isValid" in input
                          },
                          on: {
                            update: function(isValid) {
                              _vm.updatestate(isValid, index)
                            }
                          },
                          model: {
                            value: input.value,
                            callback: function($$v) {
                              _vm.$set(input, "value", $$v)
                            },
                            expression: "input.value"
                          }
                        })
                  ]
            ]
          }),
          _vm._v(" "),
          !_vm.isconfirm
            ? _c("div", { staticClass: "btn-wrap" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    attrs: { disabled: _vm.btnDisabled },
                    on: { click: _vm.confirm }
                  },
                  [_vm._v("\n        入力内容を確認する\n      ")]
                )
              ])
            : _c("div", { staticClass: "btn-wrap" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    attrs: { disabled: _vm.btnDisabled },
                    on: { click: _vm.submit }
                  },
                  [_vm._v("\n        依頼を送信する\n      ")]
                )
              ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/LodingModal.vue?vue&type=template&id=e145c67a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/LodingModal.vue?vue&type=template&id=e145c67a&scoped=true& ***!
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
  return _c(
    "transition",
    { attrs: { name: "loader" }, on: { "after-leave": _vm.afterLeave } },
    [
      _vm.show
        ? _c("div", { class: ["overlay", _vm.error ? "is-err" : ""] }, [
            _c("div", { staticClass: "loader" })
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("466df6ca", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("75b92d2e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1495c8a5", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/CheckBox.vue":
/*!**************************!*\
  !*** ./src/CheckBox.vue ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckBox_vue_vue_type_template_id_1831b1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox.vue?vue&type=template&id=1831b1c8&scoped=true& */ "./src/CheckBox.vue?vue&type=template&id=1831b1c8&scoped=true&");
/* harmony import */ var _CheckBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckBox.vue?vue&type=script&lang=js& */ "./src/CheckBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CheckBox_vue_vue_type_style_index_0_id_1831b1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true& */ "./src/CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CheckBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckBox_vue_vue_type_template_id_1831b1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckBox_vue_vue_type_template_id_1831b1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1831b1c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/CheckBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/CheckBox.vue?vue&type=script&lang=js&":
/*!***************************************************!*\
  !*** ./src/CheckBox.vue?vue&type=script&lang=js& ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./CheckBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/CheckBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_style_index_0_id_1831b1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/CheckBox.vue?vue&type=style&index=0&id=1831b1c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_style_index_0_id_1831b1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_style_index_0_id_1831b1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_style_index_0_id_1831b1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_style_index_0_id_1831b1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_style_index_0_id_1831b1c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/CheckBox.vue?vue&type=template&id=1831b1c8&scoped=true&":
/*!*********************************************************************!*\
  !*** ./src/CheckBox.vue?vue&type=template&id=1831b1c8&scoped=true& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_template_id_1831b1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./CheckBox.vue?vue&type=template&id=1831b1c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/CheckBox.vue?vue&type=template&id=1831b1c8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_template_id_1831b1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckBox_vue_vue_type_template_id_1831b1c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/Form.vue":
/*!**********************!*\
  !*** ./src/Form.vue ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_5cb7703d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=5cb7703d&scoped=true& */ "./src/Form.vue?vue&type=template&id=5cb7703d&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./src/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Form_vue_vue_type_style_index_0_id_5cb7703d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true& */ "./src/Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_5cb7703d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_5cb7703d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5cb7703d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/Form.vue?vue&type=script&lang=js&":
/*!***********************************************!*\
  !*** ./src/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5cb7703d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/Form.vue?vue&type=style&index=0&id=5cb7703d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5cb7703d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5cb7703d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5cb7703d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5cb7703d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_5cb7703d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/Form.vue?vue&type=template&id=5cb7703d&scoped=true&":
/*!*****************************************************************!*\
  !*** ./src/Form.vue?vue&type=template&id=5cb7703d&scoped=true& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5cb7703d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=5cb7703d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/Form.vue?vue&type=template&id=5cb7703d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5cb7703d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5cb7703d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/LodingModal.vue":
/*!*****************************!*\
  !*** ./src/LodingModal.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LodingModal_vue_vue_type_template_id_e145c67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LodingModal.vue?vue&type=template&id=e145c67a&scoped=true& */ "./src/LodingModal.vue?vue&type=template&id=e145c67a&scoped=true&");
/* harmony import */ var _LodingModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LodingModal.vue?vue&type=script&lang=js& */ "./src/LodingModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LodingModal_vue_vue_type_style_index_0_id_e145c67a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true& */ "./src/LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LodingModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LodingModal_vue_vue_type_template_id_e145c67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LodingModal_vue_vue_type_template_id_e145c67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e145c67a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/LodingModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/LodingModal.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/LodingModal.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./LodingModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/LodingModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_style_index_0_id_e145c67a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib??vue-loader-options!./LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/LodingModal.vue?vue&type=style&index=0&id=e145c67a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_style_index_0_id_e145c67a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_style_index_0_id_e145c67a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_style_index_0_id_e145c67a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_style_index_0_id_e145c67a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_style_index_0_id_e145c67a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/LodingModal.vue?vue&type=template&id=e145c67a&scoped=true&":
/*!************************************************************************!*\
  !*** ./src/LodingModal.vue?vue&type=template&id=e145c67a&scoped=true& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_template_id_e145c67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./LodingModal.vue?vue&type=template&id=e145c67a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/LodingModal.vue?vue&type=template&id=e145c67a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_template_id_e145c67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LodingModal_vue_vue_type_template_id_e145c67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0NoZWNrQm94LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL0Zvcm0udnVlIiwid2VicGFjazovLy9zcmMvTG9kaW5nTW9kYWwudnVlIiwid2VicGFjazovLy8uL3NyYy9DaGVja0JveC52dWU/ODNmMSIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS52dWU/ZTY5NiIsIndlYnBhY2s6Ly8vLi9zcmMvTG9kaW5nTW9kYWwudnVlP2M3NGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrQm94LnZ1ZT8zNTNlIiwid2VicGFjazovLy8uL3NyYy9Gb3JtLnZ1ZT85NDZlIiwid2VicGFjazovLy8uL3NyYy9Mb2RpbmdNb2RhbC52dWU/ZjZhMCIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hlY2tCb3gudnVlPzVmZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0udnVlP2NhNTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZGluZ01vZGFsLnZ1ZT85MjNmIiwid2VicGFjazovLy8uL3NyYy9DaGVja0JveC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrQm94LnZ1ZT9iN2QzIiwid2VicGFjazovLy8uL3NyYy9DaGVja0JveC52dWU/ODEyZCIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hlY2tCb3gudnVlP2E3Y2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0udnVlIiwid2VicGFjazovLy8uL3NyYy9Gb3JtLnZ1ZT8yMTYzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtLnZ1ZT8yYjQyIiwid2VicGFjazovLy8uL3NyYy9Gb3JtLnZ1ZT82YTk2Iiwid2VicGFjazovLy8uL3NyYy9Mb2RpbmdNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZGluZ01vZGFsLnZ1ZT80ZmQwIiwid2VicGFjazovLy8uL3NyYy9Mb2RpbmdNb2RhbC52dWU/OWVhNyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9kaW5nTW9kYWwudnVlPzNkMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrSEE7QUFFQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUE7QUFDQSxtQkFEQTtBQUVBO0FBRkEsR0FKQTtBQVFBLFVBQ0EsT0FEQSxFQUVBLGdCQUZBLEVBR0EsU0FIQSxFQUlBLFdBSkEsRUFLQSxPQUxBLEVBTUEsTUFOQSxDQVJBO0FBZ0JBLE1BaEJBLGtCQWdCQTtBQUNBO0FBQ0EscUhBREE7QUFFQTtBQUZBO0FBSUEsR0FyQkE7QUFzQkE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQSxTQURBLGlCQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsU0FKQSxlQUlBLEdBSkEsRUFJQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUpBLEdBdEJBO0FBdUNBO0FBQ0Esd0JBREEsZ0NBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsYUFKQSxxQkFJQSxHQUpBLEVBSUE7QUFDQTtBQUNBO0FBTkEsR0F2Q0E7QUErQ0E7QUFDQSxnQkFEQSw4QkFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSxPQVBBLE1BT0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsS0FqQkE7QUFrQkEsZUFsQkEseUJBa0JBO0FBQ0E7QUFDQTtBQXBCQTtBQS9DQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsS0FGQSxNQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEdBUEEsRUFPQSxFQVBBO0FBUUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLEdBSEE7QUFJQSxLQUxBLE1BS0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsR0FWQSxFQVVBLEVBVkE7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBLEdBTEE7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esc0JBREE7QUFFQTtBQUZBO0FBTEE7QUFVQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRUFEQTtBQUVBLGdFQUZBO0FBR0E7QUFIQSxHQURBO0FBTUEsTUFOQSxrQkFNQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxpQkFGQTtBQUdBLHNCQUhBO0FBSUEsdUJBSkE7QUFLQSxzQkFMQTtBQU1BLG9CQU5BO0FBT0E7QUFQQTtBQVNBLEdBaEJBO0FBaUJBO0FBQ0EsZUFEQSx5QkFDQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSEEsR0FqQkE7QUFzQkE7QUFDQSxhQURBLHFCQUNBLEdBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQSxHQXRCQTtBQTJCQSxTQTNCQSxxQkEyQkE7QUFDQSxxQ0FDQTtBQUNBLG9CQURBO0FBRUEsa0JBRkE7QUFHQSxlQUhBO0FBSUE7QUFKQSxLQURBLEVBT0E7QUFDQSxzQkFEQTtBQUVBLGlCQUZBO0FBR0EsZUFIQTtBQUlBO0FBSkEsS0FQQSxFQWFBO0FBQ0EsZ0NBREE7QUFFQSxrQkFGQTtBQUdBLGVBSEE7QUFJQTtBQUpBLEtBYkEsRUFtQkE7QUFDQSwwQkFEQTtBQUVBLHNCQUZBO0FBR0EsZUFIQTtBQUlBO0FBSkEsS0FuQkEsRUF5QkE7QUFDQSxnQkFEQTtBQUVBLG9CQUZBO0FBR0EsZUFIQTtBQUlBO0FBSkEsS0F6QkEsRUErQkE7QUFDQSxnQkFEQTtBQUVBLG9CQUZBO0FBR0EsaUJBQ0E7QUFDQSxxQkFEQTtBQUVBLG1CQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBLE9BREEsRUFPQTtBQUNBLHVCQURBO0FBRUEscUJBRkE7QUFHQSxpQkFIQTtBQUlBO0FBSkEsT0FQQTtBQUhBLEtBL0JBLEVBaURBO0FBQ0Esa0JBREE7QUFFQSxzQkFGQTtBQUdBLGlCQUNBO0FBQ0EsdUJBREE7QUFFQSxtQkFGQTtBQUdBLGlCQUhBO0FBSUE7QUFKQSxPQURBLEVBT0E7QUFDQSx5QkFEQTtBQUVBLHFCQUZBO0FBR0EsaUJBSEE7QUFJQTtBQUpBLE9BUEE7QUFIQSxLQWpEQSxFQW1FQTtBQUNBLGtCQURBO0FBRUEsbUJBRkE7QUFHQTtBQUhBLEtBbkVBLEVBd0VBO0FBQ0EsZ0JBREE7QUFFQSxrQkFGQTtBQUdBLGVBSEE7QUFJQSx1QkFKQTtBQUtBLDBCQUxBO0FBTUE7QUFOQSxLQXhFQTtBQWlGQSxHQTdHQTtBQThHQTtBQUNBLGVBREEsdUJBQ0EsT0FEQSxFQUNBLEtBREEsRUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLFdBTkEscUJBTUE7QUFDQTtBQUNBO0FBQ0EsS0FUQTtBQVVBLFlBVkEsc0JBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQWhCQTtBQWlCQSxVQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQ0Esd0JBbkJBLEdBbUJBLHdCQW5CQTtBQUFBO0FBQUEsdUJBb0JBLHdFQXBCQTs7QUFBQTtBQUFBO0FBb0JBLG9CQXBCQSxRQW9CQSxJQXBCQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTs7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTlHQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBLDBCQURBO0FBRUE7QUFDQSxLQURBLGVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSxHQUZBO0FBUUE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkEsRzs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUywrQkFBK0IsdUJBQXVCLHVCQUF1QixHQUFHLHFGQUFxRixxQkFBcUIseUJBQXlCLEdBQUcsNENBQTRDLG9CQUFvQixhQUFhLGdCQUFnQix1QkFBdUIsMEJBQTBCLGNBQWMsa0JBQWtCLG1CQUFtQix3QkFBd0IseUJBQXlCLEdBQUcsMkNBQTJDLGVBQWUsZ0JBQWdCLGtCQUFrQixrQkFBa0Isa0NBQWtDLG9DQUFvQyxnQ0FBZ0MsR0FBRyx3Q0FBd0Msb0JBQW9CLEdBQUcsMEVBQTBFLCtCQUErQixHQUFHLHlFQUF5RSxzQkFBc0IsR0FBRyx5Q0FBeUMscUJBQXFCLHNCQUFzQixxQkFBcUIsc0JBQXNCLEdBQUcsK0hBQStILHdCQUF3QixHQUFHLDhCQUE4QixxQkFBcUIsMEJBQTBCLGlCQUFpQiw4QkFBOEIsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsaUJBQWlCLG9CQUFvQixtQkFBbUIsb0JBQW9CLEdBQUcsdUNBQXVDLG1CQUFtQixHQUFHO0FBQ3hpRDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDRCQUE0QiwwQkFBMEIsd0JBQXdCLEdBQUcsc0NBQXNDLGtCQUFrQiw0QkFBNEIsbUNBQW1DLEdBQUcsMENBQTBDLGlCQUFpQixHQUFHO0FBQ2hTO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsOEJBQThCLCtDQUErQyxvQkFBb0IsV0FBVyxjQUFjLFlBQVksYUFBYSxlQUFlLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixHQUFHLDRCQUE0QiwwQkFBMEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsMkJBQTJCLEdBQUcsbUVBQW1FLHlCQUF5QixrQkFBa0IsY0FBYyxlQUFlLGFBQWEsZ0JBQWdCLG1CQUFtQixHQUFHLGtDQUFrQyxrQkFBa0IsbUJBQW1CLDZCQUE2Qix5QkFBeUIscUNBQXFDLHlEQUF5RCxHQUFHLG1DQUFtQyxrQkFBa0IsbUJBQW1CLDZCQUE2QixzQkFBc0Isb0JBQW9CLHVDQUF1Qyw0QkFBNEIsR0FBRyxnRkFBZ0YsNkJBQTZCLEdBQUcscUVBQXFFLGVBQWUsR0FBRyx5Q0FBeUMsMEJBQTBCLEdBQUcsdURBQXVELHNCQUFzQixHQUFHLHdEQUF3RCwrREFBK0QsR0FBRywyQ0FBMkMsb0JBQW9CLHNCQUFzQixtQkFBbUIsc0VBQXNFLEdBQUcsbUNBQW1DLFFBQVEsOEJBQThCLEdBQUcsTUFBTSxnQ0FBZ0MsR0FBRyxHQUFHLHNDQUFzQyxRQUFRLG9DQUFvQyxHQUFHLE1BQU0seUNBQXlDLEdBQUcsR0FBRyxvQ0FBb0MsUUFBUSwwQkFBMEIsR0FBRyxNQUFNLDBCQUEwQixHQUFHLEdBQUc7QUFDbmhFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlEQUF5RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQsaUNBQWlDLDBDQUEwQztBQUMzRSwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSw0QkFBNEIsaUNBQWlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQkFBK0IseUJBQXlCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCLHlCQUF5QixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMENBQTBDO0FBQzFELGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQyxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0QkFBNEI7QUFDeEQseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRCQUE0QjtBQUN4RCx5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLGlCQUFpQixPQUFPLGdDQUFnQyxFQUFFO0FBQ3hFO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWdEO0FBQ3JFLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMseWdCQUFpUjtBQUN2Uyw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLHVIQUEwRDtBQUM1RSwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1ZmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGlnQkFBNlE7QUFDblMsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyx1SEFBMEQ7QUFDNUUsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQywrZ0JBQW9SO0FBQzFTLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsdUhBQTBEO0FBQzVFLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ1ZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzdGO0FBQ3VGO0FBQ3ZGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQWtLLENBQWdCLDRPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXRMO0FBQUE7QUFBQTtBQUFBO0FBQTRVLENBQWdCLDRZQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Y7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR3pGO0FBQ3VGO0FBQ3ZGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQThKLENBQWdCLHdPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxMO0FBQUE7QUFBQTtBQUFBO0FBQXdVLENBQWdCLHdZQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR2hHO0FBQ3VGO0FBQ3ZGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXFLLENBQWdCLCtPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpMO0FBQUE7QUFBQTtBQUFBO0FBQStVLENBQWdCLCtZQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQW5XO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiI1LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8SW5wdXRXcmFwPlxuICAgIDx0ZW1wbGF0ZSAjaW5wdXQ+XG4gICAgICA8bGFiZWwgOmNsYXNzPVwiWydjaGVja2JveCcsICFlZGl0YWJsZSA/ICdpcy1jb25maXJtJyA6ICcnXVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2LWlmPVwiZWRpdGFibGVcIlxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgOmNoZWNrZWQ9XCJ2YWx1ZSA9PT0gbG9jYWxDaGVja2VkXCJcbiAgICAgICAgICBjbGFzcz1cImNoZWNrYm94X19jaGVja2JveFwiXG4gICAgICAgICAgQGNoYW5nZT1cImhhbmRsZUNoYW5nZVwiXG4gICAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja2JveF9fbGFiZWxcIj5cbiAgICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPHNwYW4gdi1pZj1cIiFlZGl0YWJsZVwiPnt7IGxvY2FsQ2hlY2tlZCB9fTwvc3Bhbj5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSAjaW5wdXQtc2lkZT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdi1pZj1cImlzY29uZmlybSAmJiBlZGl0YWJsZVwiXG4gICAgICAgIGNsYXNzPVwiYnRuLWVkaXRcIlxuICAgICAgICBAY2xpY2s9XCJzd2l0Y2hJbnB1dFwiXG4gICAgICA+XG4gICAgICAgIE9LXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdi1pZj1cImlzY29uZmlybSAmJiAhZWRpdGFibGVcIlxuICAgICAgICBjbGFzcz1cImJ0bi1lZGl0XCJcbiAgICAgICAgQGNsaWNrPVwic3dpdGNoSW5wdXRcIlxuICAgICAgPlxuICAgICAgICDnt6jpm4ZcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvSW5wdXRXcmFwPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuJGZvY3VzLWNvbG9yOiByZ2IoOTAsIDE3MSwgMjQyKTtcbiRlcnItY29sb3I6ICNmZjNlM2U7XG5cbi5jaGVja2JveCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmX19sYWJlbCB7XG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDRweDtcbiAgICAgIGxlZnQ6IDVweDtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZmY7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZylcbiAgICB9XG4gIH1cbiAgJl9fY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJjpjaGVja2VkICsgLmNoZWNrYm94X19sYWJlbCB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIlxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLmlzLWNvbmZpcm0ge1xuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAuY2hlY2tib3gge1xuICAgICAgJl9fbGFiZWwge1xuICAgICAgICAmOmJlZm9yZSwmOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBub3JtYWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmJ0bi1lZGl0IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgNTgsIDU4KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1pbi13aWR0aDogNDhweDtcbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuaW1wb3J0IElucHV0V3JhcCBmcm9tIFwiLi9JbnB1dFdyYXBcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBJbnB1dFdyYXBcbiAgfSxcbiAgbW9kZWw6IHtcbiAgICBwcm9wOiBcImNoZWNrZWRcIixcbiAgICBldmVudDogXCJpbnB1dFwiXG4gIH0sXG4gIHByb3BzOiBbXG4gICAgXCJ2YWx1ZVwiLFxuICAgIFwidW5jaGVja2VkVmFsdWVcIixcbiAgICBcImNoZWNrZWRcIixcbiAgICBcImlzY29uZmlybVwiLFxuICAgIFwibGFiZWxcIixcbiAgICBcInR5cGVcIlxuICBdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2NhbENoZWNrZWQ6IHRoaXMuJHBhcmVudCAmJiB0aGlzLiRwYXJlbnQuJG9wdGlvbnMubmFtZSA9PT0gXCJDaGVja0dyb3VwXCIgPyB0aGlzLiRwYXJlbnQuY2hlY2tlZCA6IHRoaXMuY2hlY2tlZCxcbiAgICAgIGVkaXRhYmxlOiB0cnVlXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHBhcmVudCAoKSB7XG4gICAgICByZXR1cm4gKFwiJHBhcmVudFwiIGluIHRoaXMgJiYgdGhpcy4kcGFyZW50LiRvcHRpb25zLm5hbWUgPT09IFwiQ2hlY2tHcm91cFwiKSA/IHRoaXMuJHBhcmVudCA6IG51bGxcbiAgICB9LFxuICAgIGNvbXB1dGVkTG9jYWxDaGVja2VkOiB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmxvY2FsQ2hlY2tlZCA6IHRoaXMubG9jYWxDaGVja2VkXG4gICAgICB9LFxuICAgICAgc2V0KHZhbCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC5sb2NhbENoZWNrZWQgPSB2YWxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxvY2FsQ2hlY2tlZCA9IHZhbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGNvbXB1dGVkTG9jYWxDaGVja2VkKG5ld1ZhbCkge1xuICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsIG5ld1ZhbClcbiAgICB9LFxuICAgIGlzY29uZmlybSh2YWwpIHtcbiAgICAgIHRoaXMuZWRpdGFibGUgPSAhdmFsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlQ2hhbmdlICh7IHRhcmdldDogeyBjaGVja2VkIH0gfSkge1xuICAgICAgbGV0IGxvY2FsQ2hlY2tlZCA9IHRoaXMuY29tcHV0ZWRMb2NhbENoZWNrZWRcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgY29uc3QgaXNBcnIgPSBBcnJheS5pc0FycmF5KGxvY2FsQ2hlY2tlZClcbiAgICAgIGNvbnN0IHVuY2hlY2tlZFZhbHVlID0gaXNBcnIgPyBudWxsIDogdGhpcy51bmNoZWNrZWRWYWx1ZVxuICAgICAgaWYgKGlzQXJyKSB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVzID0gIGxvY2FsQ2hlY2tlZC5pbmNsdWRlcyh2YWx1ZSlcbiAgICAgICAgaWYgKGNoZWNrZWQgJiYgIWluY2x1ZGVzKSB7XG4gICAgICAgICAgbG9jYWxDaGVja2VkID0gbG9jYWxDaGVja2VkLmNvbmNhdCh2YWx1ZSlcbiAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZCAmJiBpbmNsdWRlcykge1xuICAgICAgICAgIGxvY2FsQ2hlY2tlZCA9IGxvY2FsQ2hlY2tlZC5maWx0ZXIodmFsID0+IHZhbCAhPT0gdmFsdWUpXG4gICAgICAgIH0gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbENoZWNrZWQgPSBjaGVja2VkID8gdmFsdWUgOiB1bmNoZWNrZWRWYWx1ZVxuICAgICAgfVxuICAgICAgdGhpcy5jb21wdXRlZExvY2FsQ2hlY2tlZCA9IGxvY2FsQ2hlY2tlZFxuICAgIH0sXG4gICAgc3dpdGNoSW5wdXQoKSB7XG4gICAgICB0aGlzLmVkaXRhYmxlID0gIXRoaXMuZWRpdGFibGVcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8TG9hZGluZ01vZGFsXG4gICAgICA6c2hvdz1cImxvYWRpbmdcIlxuICAgICAgOmVycm9yPVwic3VibWl0RXJyXCJcbiAgICAgIEBsb2FkZWQ9XCJjb21wbGVhdFwiXG4gICAgLz5cbiAgICA8ZGl2XG4gICAgICB2LXNob3c9XCIhaXNTdWJtaXRlZFwiXG4gICAgICBjbGFzcz1cImZvcm0td3JhcHBlclwiXG4gICAgPlxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGlucHV0LCBpbmRleCkgaW4gaW5wdXRzXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWlmPVwiaW5wdXQuY2hpbGRyZW5cIlxuICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+e3sgaW5wdXQubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm11bHRpLWlucHV0LXdyYXBcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihjaGlsZCwgY2hpbGRJbmRleCkgaW4gaW5wdXQuY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgPENoZWNrQm94XG4gICAgICAgICAgICAgICAgdi1pZj1cImNoaWxkLmNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiY2hpbGRJbmRleFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoaWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICA6dHlwZT1cImNoaWxkLmtleVwiXG4gICAgICAgICAgICAgICAgOmxhYmVsPVwiY2hpbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgIDppc2NvbmZpcm09XCJpc2NvbmZpcm1cIlxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cImNoaWxkLmNoZWNrZWRWYWx1ZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxTd2l0Y2hJbnB1dFxuICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgIDprZXk9XCJjaGlsZEluZGV4XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY2hpbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIDp0eXBlPVwiY2hpbGQua2V5XCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCJjaGlsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgOmlzY29uZmlybT1cImlzY29uZmlybVwiXG4gICAgICAgICAgICAgICAgOnNob3VsZHZhbGlkYXRlPVwiJ2lzVmFsaWQnIGluIGNoaWxkXCJcbiAgICAgICAgICAgICAgICBAdXBkYXRlPVwiaXNWYWxpZCA9PiB7IHVwZGF0ZXN0YXRlKGlzVmFsaWQsIGluZGV4LCBjaGlsZEluZGV4KSB9XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgdi1pZj1cImlucHV0LmNoZWNrYm94XCJcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiaW5wdXQudmFsdWVcIlxuICAgICAgICAgICAgOnR5cGU9XCJpbnB1dC5rZXlcIlxuICAgICAgICAgICAgOmxhYmVsPVwiaW5wdXQubGFiZWxcIlxuICAgICAgICAgICAgOmlzY29uZmlybT1cImlzY29uZmlybVwiXG4gICAgICAgICAgICA6dmFsdWU9XCJpbnB1dC5jaGVja2VkVmFsdWVcIlxuICAgICAgICAgICAgOnVuY2hlY2tlZC12YWx1ZT1cImlucHV0LnVuY2hlY2tlZFZhbHVlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTd2l0Y2hJbnB1dFxuICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImlucHV0LnZhbHVlXCJcbiAgICAgICAgICAgIDp0eXBlPVwiaW5wdXQua2V5XCJcbiAgICAgICAgICAgIDpsYWJlbD1cImlucHV0LmxhYmVsXCJcbiAgICAgICAgICAgIDppc2NvbmZpcm09XCJpc2NvbmZpcm1cIlxuICAgICAgICAgICAgOnNob3VsZHZhbGlkYXRlPVwiJ2lzVmFsaWQnIGluIGlucHV0XCJcbiAgICAgICAgICAgIEB1cGRhdGU9XCJpc1ZhbGlkID0+IHsgdXBkYXRlc3RhdGUoaXNWYWxpZCwgaW5kZXgpIH1cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICB2LWlmPVwiIWlzY29uZmlybVwiXG4gICAgICAgIGNsYXNzPVwiYnRuLXdyYXBcIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJidG5cIlxuICAgICAgICAgIDpkaXNhYmxlZD1cImJ0bkRpc2FibGVkXCJcbiAgICAgICAgICBAY2xpY2s9XCJjb25maXJtXCJcbiAgICAgICAgPlxuICAgICAgICAgIOWFpeWKm+WGheWuueOCkueiuuiqjeOBmeOCi1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICB2LWVsc2VcbiAgICAgICAgY2xhc3M9XCJidG4td3JhcFwiXG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImJ0blwiXG4gICAgICAgICAgOmRpc2FibGVkPVwiYnRuRGlzYWJsZWRcIlxuICAgICAgICAgIEBjbGljaz1cInN1Ym1pdFwiXG4gICAgICAgID5cbiAgICAgICAgICDkvp3poLzjgpLpgIHkv6HjgZnjgotcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFN3aXRjaElucHV0IGZyb20gXCIuL1N3aXRjaElucHV0XCJcbmltcG9ydCBDaGVja0JveCBmcm9tIFwiLi9DaGVja0JveFwiXG5pbXBvcnQgTG9hZGluZ01vZGFsIGZyb20gXCIuL0xvZGluZ01vZGFsXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5jb25zdCBkb21haW4gPSBcIi5lbWFya2V0aW5nLm5lLmpwXCJcblxuZnVuY3Rpb24gZ2VuUG9zdERhdGEoaW5wdXRzKSB7XG4gIHJldHVybiBpbnB1dHMucmVkdWNlKChyZXMsIGlucHV0KSA9PiB7XG4gICAgaWYgKGlucHV0LmNoaWxkcmVuKSB7XG4gICAgICByZXNbaW5wdXQua2V5XSA9IGlucHV0LmNoaWxkcmVuLm1hcChjaGlsZCA9PiBgJHtjaGlsZC5sYWJlbH3vvJoke2NoaWxkLnZhbHVlfWApLmpvaW4oXCJcXG5cIilcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzW2lucHV0LmtleV0gPSBpbnB1dC5rZXkgPT09IFwidXJsXCIgPyBgJHtpbnB1dC52YWx1ZX0ke2RvbWFpbn1gIDogaW5wdXQudmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9LCB7fSlcbn1cblxuZnVuY3Rpb24gZ2VuSXNWYWxpZE9iaihpbnB1dHMpIHtcbiAgcmV0dXJuIGlucHV0cy5yZWR1Y2UoKHJlcywgaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQuY2hpbGRyZW4pIHtcbiAgICAgIGlucHV0LmNoaWxkcmVuLnJlZHVjZSgocmVzLCBjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoXCJpc1ZhbGlkXCIgaW4gY2hpbGQpIHJlc1tjaGlsZC5rZXldID0gY2hpbGQuaXNWYWxpZFxuICAgICAgICByZXR1cm4gcmVzXG4gICAgICB9LCByZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChcImlzVmFsaWRcIiBpbiBpbnB1dCkgcmVzW2lucHV0LmtleV0gPSBpbnB1dC5pc1ZhbGlkXG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfSwge30pXG59XG5cbmZ1bmN0aW9uIG9wdGltaXplSW5wdXRzT2JqKGlucHV0cykge1xuICByZXR1cm4gaW5wdXRzLm1hcChpbnB1dCA9PiB7XG4gICAgaWYgKGlucHV0LmNoaWxkcmVuKSB7XG4gICAgICBpbnB1dC5jaGlsZHJlbiA9IGlucHV0LmNoaWxkcmVuLm1hcChjaGlsZCA9PiB1bkNvbmZpZ3VyYWJsZUtleUFuZExhYmVsKGNoaWxkKSkgIFxuICAgIH1cbiAgICByZXR1cm4gdW5Db25maWd1cmFibGVLZXlBbmRMYWJlbChpbnB1dClcbiAgfSlcbn1cblxuZnVuY3Rpb24gdW5Db25maWd1cmFibGVLZXlBbmRMYWJlbChvYmopIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMob2JqLCB7XG4gICAga2V5OiB7XG4gICAgICB2YWx1ZTogb2JqLmtleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICB2YWx1ZTogb2JqLmxhYmVsLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBTd2l0Y2hJbnB1dCxcbiAgICBDaGVja0JveCxcbiAgICBMb2FkaW5nTW9kYWxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXRzOiBbXSxcbiAgICAgIGlzVmFsaWQ6IHt9LFxuICAgICAgaXNjb25maXJtOiBmYWxzZSxcbiAgICAgIGlzU3VibWl0ZWQ6IGZhbHNlLFxuICAgICAgc3VibWl0RXJyOiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgcmVzOiBudWxsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGJ0bkRpc2FibGVkKCkge1xuICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyh0aGlzLmlzVmFsaWQpLmV2ZXJ5KGtleSA9PiB0aGlzLmlzVmFsaWRba2V5XSlcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXNjb25maXJtKHZhbCkge1xuICAgICAgdGhpcy5lZGl0YWJsZSA9ICF2YWxcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pbnB1dHMgPSBvcHRpbWl6ZUlucHV0c09iaihbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJqb2JuYW1lXCIsXG4gICAgICAgIGxhYmVsOiBcIuahiOS7tuWQjVwiLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgaXNWYWxpZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJyZXF1ZXN0ZXJcIixcbiAgICAgICAgbGFiZWw6IFwi5rCP5ZCNXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBpc1ZhbGlkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcInJlcXVlc3RlckRlcGFydG1lbnRcIixcbiAgICAgICAgbGFiZWw6IFwi6YOo572y5ZCNXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBpc1ZhbGlkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcInJlcXVlc3Rlck1haWxcIixcbiAgICAgICAgbGFiZWw6IFwi44Oh44O844Or44Ki44OJ44Os44K5XCIsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBpc1ZhbGlkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcInVybFwiLFxuICAgICAgICBsYWJlbDogXCLluIzmnJtVUkxcIixcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiZnRwXCIsXG4gICAgICAgIGxhYmVsOiBcIkZUUOaDheWgsVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJmdHBfaWRcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIklEXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZnRwX3Bhc3NcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlBBU1NcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgaXNWYWxpZDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJiYXNpY1wiLFxuICAgICAgICBsYWJlbDogXCJiYXNpY+iqjeiovFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJiYXNpY19pZFwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiSURcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgaXNWYWxpZDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJiYXNpY19wYXNzXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJQQVNTXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwibGltaXRcIixcbiAgICAgICAgbGFiZWw6IFwi5L2/55So5pyf6ZmQXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwic3NsXCIsXG4gICAgICAgIGxhYmVsOiBcIlNTTFwiLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgY2hlY2tlZFZhbHVlOiBcIuimgVwiLFxuICAgICAgICB1bmNoZWNrZWRWYWx1ZTogXCLkuI3opoFcIixcbiAgICAgICAgY2hlY2tib3g6IHRydWVcbiAgICAgIH1cbiAgICBdKVxuICB9LFxuICBtZXRob2RzOntcbiAgICB1cGRhdGVzdGF0ZShpc1ZhbGlkLCBpbmRleCwgY2hpbGRJbmRleCA9IG51bGwpIHtcbiAgICAgIGxldCBpbnB1dCA9IHRoaXMuaW5wdXRzW2luZGV4XVxuICAgICAgaW5wdXQgPSBjaGlsZEluZGV4ID8gaW5wdXQuY2hpbGRyZW5bY2hpbGRJbmRleF0gOiBpbnB1dFxuICAgICAgaW5wdXQuaXNWYWxpZCA9IGlzVmFsaWRcbiAgICB9LFxuICAgIGNvbmZpcm0oKSB7XG4gICAgICB0aGlzLmlzY29uZmlybSA9IHRydWVcbiAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMClcbiAgICB9LFxuICAgIGNvbXBsZWF0KCkge1xuICAgICAgaWYgKHRoaXMucmVzLnN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiZXJyb3JcIilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXCJjb21wbGV0ZVwiLCBwYXJhbXM6IHsgaXRlbXM6IHRoaXMuaW5wdXRzIH19KVxuICAgIH0sXG4gICAgYXN5bmMgc3VibWl0KCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgY29uc3QgcG9zdERhdGEgPSBnZW5Qb3N0RGF0YSh0aGlzLmlucHV0cylcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJtYWluLnBocFwiLCBwb3N0RGF0YSlcbiAgICAgIHRoaXMucmVzID0gZGF0YVxuICAgICAgdGhpcy5zdWJtaXRFcnIgPSB0aGlzLnJlcy5zdGF0dXMgPT09IFwiZXJyb3JcIlxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuaXNTdWJtaXRlZCA9IHRydWVcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4ubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ubXVsdGktaW5wdXQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gID4gKiB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgfVxufVxuPC9zdHlsZT4iLCJcblxuPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvblxuICAgIG5hbWU9XCJsb2FkZXJcIlxuICAgIEBhZnRlci1sZWF2ZT1cImFmdGVyTGVhdmVcIlxuICA+XG4gICAgPGRpdlxuICAgICAgdi1pZj1cInNob3dcIlxuICAgICAgOmNsYXNzPVwiWydvdmVybGF5JywgZXJyb3IgPyAnaXMtZXJyJyA6ICcnXVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiIC8+XG4gICAgPC9kaXY+XG4gIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJzaG93XCIsIFwiZXJyb3JcIl0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaSgpIHtcbiAgICAgIGlmKHRoaXMuZXJyb3IpIGNvbnNvbGUubG9nKFwiZXJyb3IhISFcIilcbiAgICAgIHJldHVybiBcImFcIlxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFmdGVyTGVhdmUoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwibG9hZGVkXCIpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXG4kc3Bpbm5lci13aWR0aDogNDBweDtcbiRibHVlOiAjMDA3NmQzO1xuJGJ0bi1iZzogIzhCQzM0QTtcbiR0ZXh0LWxpZ2h0OiAjZmVmZWZlO1xuXG4ub3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2FkZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgJjphZnRlcntcbiAgICB3aWR0aDogJHNwaW5uZXItd2lkdGg7XG4gICAgaGVpZ2h0OiAkc3Bpbm5lci13aWR0aDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYW5pbWF0aW9uOiBzcGluIGxpbmVhciAxcyBpbmZpbml0ZTtcbiAgfVxuICAmOmJlZm9yZXtcbiAgICB3aWR0aDogJHNwaW5uZXItd2lkdGgvMjtcbiAgICBoZWlnaHQ6ICRzcGlubmVyLXdpZHRoLzQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDIuNXM7XG4gIH1cbn1cblxuLmxvYWRlci1lbnRlci1hY3RpdmUsIC5sb2FkZXItbGVhdmUtYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xufVxuXG4ubG9hZGVyLWVudGVyLCAubG9hZGVyLWxlYXZlLXRvIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmxvYWRlci1sZWF2ZS1hY3RpdmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAuNXM7XG4gIC5sb2FkZXIge1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogbm9ybWFsO1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBhbmltYXRpb246IHN1Y2Nlc3MgZWFzZS1pbiAuMTVzIGZvcndhcmRzO1xuICAgIH1cbiAgfVxufVxuXG4uaXMtZXJyIHtcbiAgICAubG9hZGVyIHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29udGVudDogXCIhXCI7XG4gICAgICAgIGFuaW1hdGlvbjogZXJyb3IgZWFzZS1pbiAuMTVzIGZvcndhcmRzICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgICBcbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3VjY2Vzc3tcbiAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKSBzY2FsZSgwKTtcbiAgICAgIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBlcnJvcntcbiAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuPC9zdHlsZT4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNoZWNrYm94W2RhdGEtdi0xODMxYjFjOF0ge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2hlY2tib3hfX2xhYmVsW2RhdGEtdi0xODMxYjFjOF06YmVmb3JlLCAuY2hlY2tib3hfX2xhYmVsW2RhdGEtdi0xODMxYjFjOF06YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uY2hlY2tib3hfX2xhYmVsW2RhdGEtdi0xODMxYjFjOF06YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4uY2hlY2tib3hfX2xhYmVsW2RhdGEtdi0xODMxYjFjOF06YWZ0ZXIge1xcbiAgICB0b3A6IDRweDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB3aWR0aDogMTRweDtcXG4gICAgaGVpZ2h0OiA3cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcbi5jaGVja2JveF9fY2hlY2tib3hbZGF0YS12LTE4MzFiMWM4XSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jaGVja2JveF9fY2hlY2tib3g6Y2hlY2tlZCArIC5jaGVja2JveF9fbGFiZWxbZGF0YS12LTE4MzFiMWM4XTpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbi5jaGVja2JveF9fY2hlY2tib3g6Y2hlY2tlZCArIC5jaGVja2JveF9fbGFiZWxbZGF0YS12LTE4MzFiMWM4XTphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbi5jaGVja2JveC5pcy1jb25maXJtW2RhdGEtdi0xODMxYjFjOF0ge1xcbiAgICBjb2xvcjogIzk0OTQ5NDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uY2hlY2tib3guaXMtY29uZmlybSAuY2hlY2tib3hfX2xhYmVsW2RhdGEtdi0xODMxYjFjOF06YmVmb3JlLCAuY2hlY2tib3guaXMtY29uZmlybSAuY2hlY2tib3hfX2xhYmVsW2RhdGEtdi0xODMxYjFjOF06YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IG5vcm1hbDtcXG59XFxuLmJ0bi1lZGl0W2RhdGEtdi0xODMxYjFjOF0ge1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWluLXdpZHRoOiA0OHB4O1xcbn1cXG4uYnRuLWVkaXRbZGF0YS12LTE4MzFiMWM4XTpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubGFiZWxbZGF0YS12LTVjYjc3MDNkXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4ubXVsdGktaW5wdXQtd3JhcFtkYXRhLXYtNWNiNzcwM2RdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm11bHRpLWlucHV0LXdyYXAgPiAqW2RhdGEtdi01Y2I3NzAzZF0ge1xcbiAgICB3aWR0aDogNDglO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5vdmVybGF5W2RhdGEtdi1lMTQ1YzY3YV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubG9hZGVyW2RhdGEtdi1lMTQ1YzY3YV0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG4ubG9hZGVyW2RhdGEtdi1lMTQ1YzY3YV06YmVmb3JlLCAubG9hZGVyW2RhdGEtdi1lMTQ1YzY3YV06YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLmxvYWRlcltkYXRhLXYtZTE0NWM2N2FdOmFmdGVyIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGFuaW1hdGlvbjogc3Bpbi1kYXRhLXYtZTE0NWM2N2EgbGluZWFyIDFzIGluZmluaXRlO1xcbn1cXG4ubG9hZGVyW2RhdGEtdi1lMTQ1YzY3YV06YmVmb3JlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xcbiAgICBib3JkZXItdG9wOiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwKTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xcbn1cXG4ubG9hZGVyLWVudGVyLWFjdGl2ZVtkYXRhLXYtZTE0NWM2N2FdLCAubG9hZGVyLWxlYXZlLWFjdGl2ZVtkYXRhLXYtZTE0NWM2N2FdIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcXG59XFxuLmxvYWRlci1lbnRlcltkYXRhLXYtZTE0NWM2N2FdLCAubG9hZGVyLWxlYXZlLXRvW2RhdGEtdi1lMTQ1YzY3YV0ge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmxvYWRlci1sZWF2ZS1hY3RpdmVbZGF0YS12LWUxNDVjNjdhXSB7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAuNXM7XFxufVxcbi5sb2FkZXItbGVhdmUtYWN0aXZlIC5sb2FkZXJbZGF0YS12LWUxNDVjNjdhXTphZnRlciB7XFxuICAgIGNvbnRlbnQ6IG5vcm1hbDtcXG59XFxuLmxvYWRlci1sZWF2ZS1hY3RpdmUgLmxvYWRlcltkYXRhLXYtZTE0NWM2N2FdOmJlZm9yZSB7XFxuICAgIGFuaW1hdGlvbjogc3VjY2Vzcy1kYXRhLXYtZTE0NWM2N2EgZWFzZS1pbiAuMTVzIGZvcndhcmRzO1xcbn1cXG4uaXMtZXJyIC5sb2FkZXJbZGF0YS12LWUxNDVjNjdhXTpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb250ZW50OiBcXFwiIVxcXCI7XFxuICBhbmltYXRpb246IGVycm9yLWRhdGEtdi1lMTQ1YzY3YSBlYXNlLWluIC4xNXMgZm9yd2FyZHMgIWltcG9ydGFudDtcXG59XFxuQGtleWZyYW1lcyBzcGluLWRhdGEtdi1lMTQ1YzY3YSB7XFxuZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG50byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHN1Y2Nlc3MtZGF0YS12LWUxNDVjNjdhIHtcXG5mcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCkgc2NhbGUoMCk7XFxufVxcbnRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgZXJyb3ItZGF0YS12LWUxNDVjNjdhIHtcXG5mcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxudG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJJbnB1dFdyYXBcIiwge1xuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiaW5wdXRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7IGNsYXNzOiBbXCJjaGVja2JveFwiLCAhX3ZtLmVkaXRhYmxlID8gXCJpcy1jb25maXJtXCIgOiBcIlwiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmVkaXRhYmxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94X19jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IF92bS52YWx1ZSA9PT0gX3ZtLmxvY2FsQ2hlY2tlZCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmhhbmRsZUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hfX2xhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0ubGFiZWwpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICFfdm0uZWRpdGFibGVcbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxvY2FsQ2hlY2tlZCkpXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJpbnB1dC1zaWRlXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX3ZtLmlzY29uZmlybSAmJiBfdm0uZWRpdGFibGVcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi1lZGl0XCIsIG9uOiB7IGNsaWNrOiBfdm0uc3dpdGNoSW5wdXQgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIE9LXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmlzY29uZmlybSAmJiAhX3ZtLmVkaXRhYmxlXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tZWRpdFwiLCBvbjogeyBjbGljazogX3ZtLnN3aXRjaElucHV0IH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICDnt6jpm4ZcXG4gICAgXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWVcbiAgICAgIH1cbiAgICBdKVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcIkxvYWRpbmdNb2RhbFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNob3c6IF92bS5sb2FkaW5nLCBlcnJvcjogX3ZtLnN1Ym1pdEVyciB9LFxuICAgICAgICBvbjogeyBsb2FkZWQ6IF92bS5jb21wbGVhdCB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmlzU3VibWl0ZWQsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWlzU3VibWl0ZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS13cmFwcGVyXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbChfdm0uaW5wdXRzLCBmdW5jdGlvbihpbnB1dCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIGlucHV0LmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGlucHV0LmxhYmVsKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdWx0aS1pbnB1dC13cmFwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaW5wdXQuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkLCBjaGlsZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJDaGVja0JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBjaGlsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBjaGlsZC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogY2hpbGQubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2NvbmZpcm06IF92bS5pc2NvbmZpcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hpbGQuY2hlY2tlZFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNoaWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChjaGlsZCwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGlsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcIlN3aXRjaElucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGNoaWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNoaWxkLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjaGlsZC5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzY29uZmlybTogX3ZtLmlzY29uZmlybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZHZhbGlkYXRlOiBcImlzVmFsaWRcIiBpbiBjaGlsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXBkYXRlc3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hpbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGNoaWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoaWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIkNoZWNrQm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpbnB1dC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGlucHV0LmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzY29uZmlybTogX3ZtLmlzY29uZmlybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5wdXQuY2hlY2tlZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidW5jaGVja2VkLXZhbHVlXCI6IGlucHV0LnVuY2hlY2tlZFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGlucHV0LCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5wdXQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJTd2l0Y2hJbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaW5wdXQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBpbnB1dC5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2NvbmZpcm06IF92bS5pc2NvbmZpcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkdmFsaWRhdGU6IFwiaXNWYWxpZFwiIGluIGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXBkYXRlc3RhdGUoaXNWYWxpZCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpbnB1dCwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlucHV0LnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uaXNjb25maXJtXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuLXdyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5idG5EaXNhYmxlZCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNvbmZpcm0gfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIOWFpeWKm+WGheWuueOCkueiuuiqjeOBmeOCi1xcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuLXdyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5idG5EaXNhYmxlZCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnN1Ym1pdCB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAg5L6d6aC844KS6YCB5L+h44GZ44KLXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInRyYW5zaXRpb25cIixcbiAgICB7IGF0dHJzOiB7IG5hbWU6IFwibG9hZGVyXCIgfSwgb246IHsgXCJhZnRlci1sZWF2ZVwiOiBfdm0uYWZ0ZXJMZWF2ZSB9IH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IGNsYXNzOiBbXCJvdmVybGF5XCIsIF92bS5lcnJvciA/IFwiaXMtZXJyXCIgOiBcIlwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRlclwiIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTgzMWIxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0NjZkZjZjYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoZWNrQm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE4MzFiMWM4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoZWNrQm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE4MzFiMWM4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9ybS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01Y2I3NzAzZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc1YjkyZDJlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9ybS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01Y2I3NzAzZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3JtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjYjc3MDNkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9kaW5nTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTE0NWM2N2EmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxNDk1YzhhNVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUxNDVjNjdhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUxNDVjNjdhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4MzFiMWM4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NoZWNrQm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NoZWNrQm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE4MzFiMWM4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTgzMWIxYzhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FkZWthZGVydXNoaXJvdS9TaXRlcy9iYWNrbG9nLXRlc3QtMi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxODMxYjFjOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxODMxYjFjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxODMxYjFjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4MzFiMWM4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE4MzFiMWM4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvQ2hlY2tCb3gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoZWNrQm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoZWNrQm94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoZWNrQm94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE4MzFiMWM4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTgzMWIxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoZWNrQm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODMxYjFjOCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWNiNzcwM2Qmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWNiNzcwM2QmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1Y2I3NzAzZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWRla2FkZXJ1c2hpcm91L1NpdGVzL2JhY2tsb2ctdGVzdC0yL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVjYjc3MDNkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVjYjc3MDNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVjYjc3MDNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Y2I3NzAzZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1Y2I3NzAzZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL0Zvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3JtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjYjc3MDNkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9ybS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01Y2I3NzAzZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWNiNzcwM2Qmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMTQ1YzY3YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2RpbmdNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Mb2RpbmdNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMTQ1YzY3YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImUxNDVjNjdhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thZGVrYWRlcnVzaGlyb3UvU2l0ZXMvYmFja2xvZy10ZXN0LTIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZTE0NWM2N2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTE0NWM2N2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTE0NWM2N2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMTQ1YzY3YSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlMTQ1YzY3YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL0xvZGluZ01vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2RpbmdNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2RpbmdNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2RpbmdNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMTQ1YzY3YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUxNDVjNjdhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2RpbmdNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTE0NWM2N2Emc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9