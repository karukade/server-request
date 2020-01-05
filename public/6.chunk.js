(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SwitchInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SwitchInput */ "./src/SwitchInput.vue");
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CheckBox */ "./src/CheckBox.vue");
/* harmony import */ var _LodingModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LodingModal */ "./src/LodingModal.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);










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
    SwitchInput: _SwitchInput__WEBPACK_IMPORTED_MODULE_9__["default"],
    CheckBox: _CheckBox__WEBPACK_IMPORTED_MODULE_10__["default"],
    LoadingModal: _LodingModal__WEBPACK_IMPORTED_MODULE_11__["default"]
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
      return this.inputs.every(function (input) {
        return input.isValid;
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
      isValid: false,
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
      isValid: false,
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

      if (childIndex) {
        this.inputs[index].isValid = this.inputs[index].children(function (child) {
          return child.isValid;
        });
      }
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
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("main.php", postData);

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

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;

  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) {
      /* empty */
    }
  }

  return false;
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");

var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js"); // `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties


module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js"); // `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // Edge 14- issue

var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].filter.call({
    length: -1,
    0: 1
  }, function (it) {
    throw it;
  });
}); // `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;

var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js"); // `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes


$({
  target: 'Array',
  proto: true
}, {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('includes');

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js"); // `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray


$({
  target: 'Array',
  stat: true
}, {
  isArray: isArray
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeJoin = [].join;
var ES3_STRINGS = IndexedObject != Object;
var SLOPPY_METHOD = sloppyArrayMethod('join', ','); // `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join

$({
  target: 'Array',
  proto: true,
  forced: ES3_STRINGS || SLOPPY_METHOD
}, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name

if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js"); // `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties


$({
  target: 'Object',
  stat: true,
  forced: !DESCRIPTORS,
  sham: !DESCRIPTORS
}, {
  defineProperties: defineProperties
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js"); // `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes


$({
  target: 'String',
  proto: true,
  forced: !correctIsRegExpLogic('includes')
}, {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0NoZWNrQm94LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL0Zvcm0udnVlIiwid2VicGFjazovLy9zcmMvTG9kaW5nTW9kYWwudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25vdC1hLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hlY2tCb3gudnVlPzgzZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm0udnVlP2U2OTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZGluZ01vZGFsLnZ1ZT9jNzRkIiwid2VicGFjazovLy8uL3NyYy9DaGVja0JveC52dWU/MzUzZSIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS52dWU/OTQ2ZSIsIndlYnBhY2s6Ly8vLi9zcmMvTG9kaW5nTW9kYWwudnVlP2Y2YTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrQm94LnZ1ZT81ZmQ3Iiwid2VicGFjazovLy8uL3NyYy9Gb3JtLnZ1ZT9jYTU2Iiwid2VicGFjazovLy8uL3NyYy9Mb2RpbmdNb2RhbC52dWU/OTIzZiIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hlY2tCb3gudnVlIiwid2VicGFjazovLy8uL3NyYy9DaGVja0JveC52dWU/YjdkMyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hlY2tCb3gudnVlPzgxMmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrQm94LnZ1ZT9hN2NkIiwid2VicGFjazovLy8uL3NyYy9Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS52dWU/MjE2MyIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS52dWU/MmI0MiIsIndlYnBhY2s6Ly8vLi9zcmMvRm9ybS52dWU/NmE5NiIsIndlYnBhY2s6Ly8vLi9zcmMvTG9kaW5nTW9kYWwudnVlIiwid2VicGFjazovLy8uL3NyYy9Mb2RpbmdNb2RhbC52dWU/NGZkMCIsIndlYnBhY2s6Ly8vLi9zcmMvTG9kaW5nTW9kYWwudnVlPzllYTciLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZGluZ01vZGFsLnZ1ZT8zZDMyIl0sIm5hbWVzIjpbIndlbGxLbm93blN5bWJvbCIsInJlcXVpcmUiLCJjcmVhdGUiLCJkZWZpbmVQcm9wZXJ0eU1vZHVsZSIsIlVOU0NPUEFCTEVTIiwiQXJyYXlQcm90b3R5cGUiLCJBcnJheSIsInByb3RvdHlwZSIsInVuZGVmaW5lZCIsImYiLCJjb25maWd1cmFibGUiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJrZXkiLCJNQVRDSCIsIk1FVEhPRF9OQU1FIiwicmVnZXhwIiwiZSIsImlzT2JqZWN0IiwiY2xhc3NvZiIsIml0IiwiaXNSZWdFeHAiLCJUeXBlRXJyb3IiLCJhbk9iamVjdCIsImRlZmluZVByb3BlcnRpZXMiLCJlbnVtQnVnS2V5cyIsImhpZGRlbktleXMiLCJodG1sIiwiZG9jdW1lbnRDcmVhdGVFbGVtZW50Iiwic2hhcmVkS2V5IiwiR1QiLCJMVCIsIlBST1RPVFlQRSIsIlNDUklQVCIsIklFX1BST1RPIiwiRW1wdHlDb25zdHJ1Y3RvciIsInNjcmlwdFRhZyIsImNvbnRlbnQiLCJOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYIiwiYWN0aXZlWERvY3VtZW50Iiwid3JpdGUiLCJjbG9zZSIsInRlbXAiLCJwYXJlbnRXaW5kb3ciLCJPYmplY3QiLCJOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUiLCJpZnJhbWUiLCJKUyIsImlmcmFtZURvY3VtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJTdHJpbmciLCJjb250ZW50V2luZG93IiwiZG9jdW1lbnQiLCJvcGVuIiwiRiIsIk51bGxQcm90b09iamVjdCIsImRvbWFpbiIsIkFjdGl2ZVhPYmplY3QiLCJlcnJvciIsImxlbmd0aCIsIk8iLCJQcm9wZXJ0aWVzIiwicmVzdWx0IiwiREVTQ1JJUFRPUlMiLCJvYmplY3RLZXlzIiwia2V5cyIsImluZGV4IiwiaW50ZXJuYWxPYmplY3RLZXlzIiwiJCIsIiRmaWx0ZXIiLCJmaWx0ZXIiLCJmYWlscyIsImFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQiLCJIQVNfU1BFQ0lFU19TVVBQT1JUIiwiVVNFU19UT19MRU5HVEgiLCJjYWxsIiwidGFyZ2V0IiwicHJvdG8iLCJmb3JjZWQiLCJjYWxsYmFja2ZuIiwiYXJndW1lbnRzIiwiJGluY2x1ZGVzIiwiaW5jbHVkZXMiLCJhZGRUb1Vuc2NvcGFibGVzIiwiZWwiLCJpc0FycmF5Iiwic3RhdCIsIkluZGV4ZWRPYmplY3QiLCJ0b0luZGV4ZWRPYmplY3QiLCJzbG9wcHlBcnJheU1ldGhvZCIsIm5hdGl2ZUpvaW4iLCJqb2luIiwiRVMzX1NUUklOR1MiLCJTTE9QUFlfTUVUSE9EIiwic2VwYXJhdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJGdW5jdGlvblByb3RvdHlwZSIsIkZ1bmN0aW9uIiwiRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyIsInRvU3RyaW5nIiwibmFtZVJFIiwiTkFNRSIsImdldCIsIm1hdGNoIiwic2hhbSIsIm5vdEFSZWdFeHAiLCJyZXF1aXJlT2JqZWN0Q29lcmNpYmxlIiwiY29ycmVjdElzUmVnRXhwTG9naWMiLCJzZWFyY2hTdHJpbmciLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtIQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxHQUpBO0FBUUEsVUFDQSxPQURBLEVBRUEsZ0JBRkEsRUFHQSxTQUhBLEVBSUEsV0FKQSxFQUtBLE9BTEEsRUFNQSxNQU5BLENBUkE7QUFnQkEsTUFoQkEsa0JBZ0JBO0FBQ0E7QUFDQSxxSEFEQTtBQUVBO0FBRkE7QUFJQSxHQXJCQTtBQXNCQTtBQUNBLFVBREEsb0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUNBLFNBREEsaUJBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQSxTQUpB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Ozs7Ozs7QUNBbEw7QUFBQTtBQUFBO0FBQUE7QUFBd1UsQ0FBZ0Isd1lBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHaEc7QUFDdUY7QUFDdkYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLGtHQUFNO0FBQ1IsRUFBRSwyR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBcUssQ0FBZ0IsK09BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBekw7QUFBQTtBQUFBO0FBQUE7QUFBK1UsQ0FBZ0IsK1lBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBblc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IjYuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxJbnB1dFdyYXA+XG4gICAgPHRlbXBsYXRlICNpbnB1dD5cbiAgICAgIDxsYWJlbCA6Y2xhc3M9XCJbJ2NoZWNrYm94JywgIWVkaXRhYmxlID8gJ2lzLWNvbmZpcm0nIDogJyddXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHYtaWY9XCJlZGl0YWJsZVwiXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICA6Y2hlY2tlZD1cInZhbHVlID09PSBsb2NhbENoZWNrZWRcIlxuICAgICAgICAgIGNsYXNzPVwiY2hlY2tib3hfX2NoZWNrYm94XCJcbiAgICAgICAgICBAY2hhbmdlPVwiaGFuZGxlQ2hhbmdlXCJcbiAgICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrYm94X19sYWJlbFwiPlxuICAgICAgICAgIHt7IGxhYmVsIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8c3BhbiB2LWlmPVwiIWVkaXRhYmxlXCI+e3sgbG9jYWxDaGVja2VkIH19PC9zcGFuPlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlICNpbnB1dC1zaWRlPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB2LWlmPVwiaXNjb25maXJtICYmIGVkaXRhYmxlXCJcbiAgICAgICAgY2xhc3M9XCJidG4tZWRpdFwiXG4gICAgICAgIEBjbGljaz1cInN3aXRjaElucHV0XCJcbiAgICAgID5cbiAgICAgICAgT0tcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB2LWlmPVwiaXNjb25maXJtICYmICFlZGl0YWJsZVwiXG4gICAgICAgIGNsYXNzPVwiYnRuLWVkaXRcIlxuICAgICAgICBAY2xpY2s9XCJzd2l0Y2hJbnB1dFwiXG4gICAgICA+XG4gICAgICAgIOe3qOmbhlxuICAgICAgPC9idXR0b24+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9JbnB1dFdyYXA+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4kZm9jdXMtY29sb3I6IHJnYig5MCwgMTcxLCAyNDIpO1xuJGVyci1jb2xvcjogI2ZmM2UzZTtcblxuLmNoZWNrYm94IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICZfX2xhYmVsIHtcbiAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogNHB4O1xuICAgICAgbGVmdDogNXB4O1xuICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICBoZWlnaHQ6IDdweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKVxuICAgIH1cbiAgfVxuICAmX19jaGVja2JveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAmOmNoZWNrZWQgKyAuY2hlY2tib3hfX2xhYmVsIHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiXG4gICAgICB9XG4gICAgfVxuICB9XG4gICYuaXMtY29uZmlybSB7XG4gICAgY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIC5jaGVja2JveCB7XG4gICAgICAmX19sYWJlbCB7XG4gICAgICAgICY6YmVmb3JlLCY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IG5vcm1hbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uYnRuLWVkaXQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWluLXdpZHRoOiA0OHB4O1xuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSW5wdXRXcmFwIGZyb20gXCIuL0lucHV0V3JhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIElucHV0V3JhcFxuICB9LFxuICBtb2RlbDoge1xuICAgIHByb3A6IFwiY2hlY2tlZFwiLFxuICAgIGV2ZW50OiBcImlucHV0XCJcbiAgfSxcbiAgcHJvcHM6IFtcbiAgICBcInZhbHVlXCIsXG4gICAgXCJ1bmNoZWNrZWRWYWx1ZVwiLFxuICAgIFwiY2hlY2tlZFwiLFxuICAgIFwiaXNjb25maXJtXCIsXG4gICAgXCJsYWJlbFwiLFxuICAgIFwidHlwZVwiXG4gIF0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsQ2hlY2tlZDogdGhpcy4kcGFyZW50ICYmIHRoaXMuJHBhcmVudC4kb3B0aW9ucy5uYW1lID09PSBcIkNoZWNrR3JvdXBcIiA/IHRoaXMuJHBhcmVudC5jaGVja2VkIDogdGhpcy5jaGVja2VkLFxuICAgICAgZWRpdGFibGU6IHRydWVcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgcGFyZW50ICgpIHtcbiAgICAgIHJldHVybiAoXCIkcGFyZW50XCIgaW4gdGhpcyAmJiB0aGlzLiRwYXJlbnQuJG9wdGlvbnMubmFtZSA9PT0gXCJDaGVja0dyb3VwXCIpID8gdGhpcy4kcGFyZW50IDogbnVsbFxuICAgIH0sXG4gICAgY29tcHV0ZWRMb2NhbENoZWNrZWQ6IHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubG9jYWxDaGVja2VkIDogdGhpcy5sb2NhbENoZWNrZWRcbiAgICAgIH0sXG4gICAgICBzZXQodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgIHRoaXMucGFyZW50LmxvY2FsQ2hlY2tlZCA9IHZhbFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9jYWxDaGVja2VkID0gdmFsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgY29tcHV0ZWRMb2NhbENoZWNrZWQobmV3VmFsKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgbmV3VmFsKVxuICAgIH0sXG4gICAgaXNjb25maXJtKHZhbCkge1xuICAgICAgdGhpcy5lZGl0YWJsZSA9ICF2YWxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVDaGFuZ2UgKHsgdGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSB7XG4gICAgICBsZXQgbG9jYWxDaGVja2VkID0gdGhpcy5jb21wdXRlZExvY2FsQ2hlY2tlZFxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICBjb25zdCBpc0FyciA9IEFycmF5LmlzQXJyYXkobG9jYWxDaGVja2VkKVxuICAgICAgY29uc3QgdW5jaGVja2VkVmFsdWUgPSBpc0FyciA/IG51bGwgOiB0aGlzLnVuY2hlY2tlZFZhbHVlXG4gICAgICBpZiAoaXNBcnIpIHtcbiAgICAgICAgY29uc3QgaW5jbHVkZXMgPSAgbG9jYWxDaGVja2VkLmluY2x1ZGVzKHZhbHVlKVxuICAgICAgICBpZiAoY2hlY2tlZCAmJiAhaW5jbHVkZXMpIHtcbiAgICAgICAgICBsb2NhbENoZWNrZWQgPSBsb2NhbENoZWNrZWQuY29uY2F0KHZhbHVlKVxuICAgICAgICB9IGVsc2UgaWYgKCFjaGVja2VkICYmIGluY2x1ZGVzKSB7XG4gICAgICAgICAgbG9jYWxDaGVja2VkID0gbG9jYWxDaGVja2VkLmZpbHRlcih2YWwgPT4gdmFsICE9PSB2YWx1ZSlcbiAgICAgICAgfSBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsQ2hlY2tlZCA9IGNoZWNrZWQgPyB2YWx1ZSA6IHVuY2hlY2tlZFZhbHVlXG4gICAgICB9XG4gICAgICB0aGlzLmNvbXB1dGVkTG9jYWxDaGVja2VkID0gbG9jYWxDaGVja2VkXG4gICAgfSxcbiAgICBzd2l0Y2hJbnB1dCgpIHtcbiAgICAgIHRoaXMuZWRpdGFibGUgPSAhdGhpcy5lZGl0YWJsZVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxMb2FkaW5nTW9kYWxcbiAgICAgIDpzaG93PVwibG9hZGluZ1wiXG4gICAgICA6ZXJyb3I9XCJzdWJtaXRFcnJcIlxuICAgICAgQGxvYWRlZD1cImNvbXBsZWF0XCJcbiAgICAvPlxuICAgIDxkaXZcbiAgICAgIHYtc2hvdz1cIiFpc1N1Ym1pdGVkXCJcbiAgICAgIGNsYXNzPVwiZm9ybS13cmFwcGVyXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaW5wdXQsIGluZGV4KSBpbiBpbnB1dHNcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtaWY9XCJpbnB1dC5jaGlsZHJlblwiXG4gICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBpbnB1dC5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXVsdGktaW5wdXQtd3JhcFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGNoaWxkLCBjaGlsZEluZGV4KSBpbiBpbnB1dC5jaGlsZHJlblwiPlxuICAgICAgICAgICAgICA8Q2hlY2tCb3hcbiAgICAgICAgICAgICAgICB2LWlmPVwiY2hpbGQuY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJjaGlsZEluZGV4XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY2hpbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIDp0eXBlPVwiY2hpbGQua2V5XCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCJjaGlsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgOmlzY29uZmlybT1cImlzY29uZmlybVwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwiY2hpbGQuY2hlY2tlZFZhbHVlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFN3aXRjaElucHV0XG4gICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgOmtleT1cImNoaWxkSW5kZXhcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjaGlsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgOnR5cGU9XCJjaGlsZC5rZXlcIlxuICAgICAgICAgICAgICAgIDpsYWJlbD1cImNoaWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICA6aXNjb25maXJtPVwiaXNjb25maXJtXCJcbiAgICAgICAgICAgICAgICA6c2hvdWxkdmFsaWRhdGU9XCInaXNWYWxpZCcgaW4gY2hpbGRcIlxuICAgICAgICAgICAgICAgIEB1cGRhdGU9XCJpc1ZhbGlkID0+IHsgdXBkYXRlc3RhdGUoaXNWYWxpZCwgaW5kZXgsIGNoaWxkSW5kZXgpIH1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgPENoZWNrQm94XG4gICAgICAgICAgICB2LWlmPVwiaW5wdXQuY2hlY2tib3hcIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJpbnB1dC52YWx1ZVwiXG4gICAgICAgICAgICA6dHlwZT1cImlucHV0LmtleVwiXG4gICAgICAgICAgICA6bGFiZWw9XCJpbnB1dC5sYWJlbFwiXG4gICAgICAgICAgICA6aXNjb25maXJtPVwiaXNjb25maXJtXCJcbiAgICAgICAgICAgIDp2YWx1ZT1cImlucHV0LmNoZWNrZWRWYWx1ZVwiXG4gICAgICAgICAgICA6dW5jaGVja2VkLXZhbHVlPVwiaW5wdXQudW5jaGVja2VkVmFsdWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFN3aXRjaElucHV0XG4gICAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiaW5wdXQudmFsdWVcIlxuICAgICAgICAgICAgOnR5cGU9XCJpbnB1dC5rZXlcIlxuICAgICAgICAgICAgOmxhYmVsPVwiaW5wdXQubGFiZWxcIlxuICAgICAgICAgICAgOmlzY29uZmlybT1cImlzY29uZmlybVwiXG4gICAgICAgICAgICA6c2hvdWxkdmFsaWRhdGU9XCInaXNWYWxpZCcgaW4gaW5wdXRcIlxuICAgICAgICAgICAgQHVwZGF0ZT1cImlzVmFsaWQgPT4geyB1cGRhdGVzdGF0ZShpc1ZhbGlkLCBpbmRleCkgfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIHYtaWY9XCIhaXNjb25maXJtXCJcbiAgICAgICAgY2xhc3M9XCJidG4td3JhcFwiXG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImJ0blwiXG4gICAgICAgICAgOmRpc2FibGVkPVwiYnRuRGlzYWJsZWRcIlxuICAgICAgICAgIEBjbGljaz1cImNvbmZpcm1cIlxuICAgICAgICA+XG4gICAgICAgICAg5YWl5Yqb5YaF5a6544KS56K66KqN44GZ44KLXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHYtZWxzZVxuICAgICAgICBjbGFzcz1cImJ0bi13cmFwXCJcbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiYnRuXCJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJidG5EaXNhYmxlZFwiXG4gICAgICAgICAgQGNsaWNrPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIOS+nemgvOOCkumAgeS/oeOBmeOCi1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU3dpdGNoSW5wdXQgZnJvbSBcIi4vU3dpdGNoSW5wdXRcIlxuaW1wb3J0IENoZWNrQm94IGZyb20gXCIuL0NoZWNrQm94XCJcbmltcG9ydCBMb2FkaW5nTW9kYWwgZnJvbSBcIi4vTG9kaW5nTW9kYWxcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmNvbnN0IGRvbWFpbiA9IFwiLmVtYXJrZXRpbmcubmUuanBcIlxuXG5mdW5jdGlvbiBnZW5Qb3N0RGF0YShpbnB1dHMpIHtcbiAgcmV0dXJuIGlucHV0cy5yZWR1Y2UoKHJlcywgaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQuY2hpbGRyZW4pIHtcbiAgICAgIHJlc1tpbnB1dC5rZXldID0gaW5wdXQuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGAke2NoaWxkLmxhYmVsfe+8miR7Y2hpbGQudmFsdWV9YCkuam9pbihcIlxcblwiKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNbaW5wdXQua2V5XSA9IGlucHV0LmtleSA9PT0gXCJ1cmxcIiA/IGAke2lucHV0LnZhbHVlfSR7ZG9tYWlufWAgOiBpbnB1dC52YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH0sIHt9KVxufVxuXG5mdW5jdGlvbiBnZW5Jc1ZhbGlkT2JqKGlucHV0cykge1xuICByZXR1cm4gaW5wdXRzLnJlZHVjZSgocmVzLCBpbnB1dCkgPT4ge1xuICAgIGlmIChpbnB1dC5jaGlsZHJlbikge1xuICAgICAgaW5wdXQuY2hpbGRyZW4ucmVkdWNlKChyZXMsIGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChcImlzVmFsaWRcIiBpbiBjaGlsZCkgcmVzW2NoaWxkLmtleV0gPSBjaGlsZC5pc1ZhbGlkXG4gICAgICAgIHJldHVybiByZXNcbiAgICAgIH0sIHJlcylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFwiaXNWYWxpZFwiIGluIGlucHV0KSByZXNbaW5wdXQua2V5XSA9IGlucHV0LmlzVmFsaWRcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9LCB7fSlcbn1cblxuZnVuY3Rpb24gb3B0aW1pemVJbnB1dHNPYmooaW5wdXRzKSB7XG4gIHJldHVybiBpbnB1dHMubWFwKGlucHV0ID0+IHtcbiAgICBpZiAoaW5wdXQuY2hpbGRyZW4pIHtcbiAgICAgIGlucHV0LmNoaWxkcmVuID0gaW5wdXQuY2hpbGRyZW4ubWFwKGNoaWxkID0+IHVuQ29uZmlndXJhYmxlS2V5QW5kTGFiZWwoY2hpbGQpKSAgXG4gICAgfVxuICAgIHJldHVybiB1bkNvbmZpZ3VyYWJsZUtleUFuZExhYmVsKGlucHV0KVxuICB9KVxufVxuXG5mdW5jdGlvbiB1bkNvbmZpZ3VyYWJsZUtleUFuZExhYmVsKG9iaikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHtcbiAgICBrZXk6IHtcbiAgICAgIHZhbHVlOiBvYmoua2V5LFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIHZhbHVlOiBvYmoubGFiZWwsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfVxuICB9KVxuICByZXR1cm4gb2JqXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFN3aXRjaElucHV0LFxuICAgIENoZWNrQm94LFxuICAgIExvYWRpbmdNb2RhbFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnB1dHM6IFtdLFxuICAgICAgaXNWYWxpZDoge30sXG4gICAgICBpc2NvbmZpcm06IGZhbHNlLFxuICAgICAgaXNTdWJtaXRlZDogZmFsc2UsXG4gICAgICBzdWJtaXRFcnI6IGZhbHNlLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICByZXM6IG51bGxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgYnRuRGlzYWJsZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dHMuZXZlcnkoaW5wdXQgPT4gaW5wdXQuaXNWYWxpZClcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaXNjb25maXJtKHZhbCkge1xuICAgICAgdGhpcy5lZGl0YWJsZSA9ICF2YWxcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pbnB1dHMgPSBvcHRpbWl6ZUlucHV0c09iaihbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJqb2JuYW1lXCIsXG4gICAgICAgIGxhYmVsOiBcIuahiOS7tuWQjVwiLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgaXNWYWxpZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJyZXF1ZXN0ZXJcIixcbiAgICAgICAgbGFiZWw6IFwi5rCP5ZCNXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBpc1ZhbGlkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcInJlcXVlc3RlckRlcGFydG1lbnRcIixcbiAgICAgICAgbGFiZWw6IFwi6YOo572y5ZCNXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBpc1ZhbGlkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcInJlcXVlc3Rlck1haWxcIixcbiAgICAgICAgbGFiZWw6IFwi44Oh44O844Or44Ki44OJ44Os44K5XCIsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBpc1ZhbGlkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcInVybFwiLFxuICAgICAgICBsYWJlbDogXCLluIzmnJtVUkxcIixcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiZnRwXCIsXG4gICAgICAgIGxhYmVsOiBcIkZUUOaDheWgsVwiLFxuICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZnRwX2lkXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJJRFwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImZ0cF9wYXNzXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJQQVNTXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiYmFzaWNcIixcbiAgICAgICAgbGFiZWw6IFwiYmFzaWPoqo3oqLxcIixcbiAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImJhc2ljX2lkXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJJRFwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImJhc2ljX3Bhc3NcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIlBBU1NcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgaXNWYWxpZDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJsaW1pdFwiLFxuICAgICAgICBsYWJlbDogXCLkvb/nlKjmnJ/pmZBcIixcbiAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJzc2xcIixcbiAgICAgICAgbGFiZWw6IFwiU1NMXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBjaGVja2VkVmFsdWU6IFwi6KaBXCIsXG4gICAgICAgIHVuY2hlY2tlZFZhbHVlOiBcIuS4jeimgVwiLFxuICAgICAgICBjaGVja2JveDogdHJ1ZVxuICAgICAgfVxuICAgIF0pXG4gIH0sXG4gIG1ldGhvZHM6e1xuICAgIHVwZGF0ZXN0YXRlKGlzVmFsaWQsIGluZGV4LCBjaGlsZEluZGV4ID0gbnVsbCkge1xuICAgICAgbGV0IGlucHV0ID0gdGhpcy5pbnB1dHNbaW5kZXhdXG4gICAgICBpbnB1dCA9IGNoaWxkSW5kZXggPyBpbnB1dC5jaGlsZHJlbltjaGlsZEluZGV4XSA6IGlucHV0XG4gICAgICBpbnB1dC5pc1ZhbGlkID0gaXNWYWxpZFxuICAgICAgaWYgKGNoaWxkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5pbnB1dHNbaW5kZXhdLmlzVmFsaWQgPSB0aGlzLmlucHV0c1tpbmRleF0uY2hpbGRyZW4oY2hpbGQgPT4gY2hpbGQuaXNWYWxpZClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbmZpcm0oKSB7XG4gICAgICB0aGlzLmlzY29uZmlybSA9IHRydWVcbiAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMClcbiAgICB9LFxuICAgIGNvbXBsZWF0KCkge1xuICAgICAgaWYgKHRoaXMucmVzLnN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiZXJyb3JcIilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXCJjb21wbGV0ZVwiLCBwYXJhbXM6IHsgaXRlbXM6IHRoaXMuaW5wdXRzIH19KVxuICAgIH0sXG4gICAgYXN5bmMgc3VibWl0KCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgY29uc3QgcG9zdERhdGEgPSBnZW5Qb3N0RGF0YSh0aGlzLmlucHV0cylcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJtYWluLnBocFwiLCBwb3N0RGF0YSlcbiAgICAgIHRoaXMucmVzID0gZGF0YVxuICAgICAgdGhpcy5zdWJtaXRFcnIgPSB0aGlzLnJlcy5zdGF0dXMgPT09IFwiZXJyb3JcIlxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuaXNTdWJtaXRlZCA9IHRydWVcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4ubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ubXVsdGktaW5wdXQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gID4gKiB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgfVxufVxuPC9zdHlsZT4iLCJcblxuPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvblxuICAgIG5hbWU9XCJsb2FkZXJcIlxuICAgIEBhZnRlci1sZWF2ZT1cImFmdGVyTGVhdmVcIlxuICA+XG4gICAgPGRpdlxuICAgICAgdi1pZj1cInNob3dcIlxuICAgICAgOmNsYXNzPVwiWydvdmVybGF5JywgZXJyb3IgPyAnaXMtZXJyJyA6ICcnXVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiIC8+XG4gICAgPC9kaXY+XG4gIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJzaG93XCIsIFwiZXJyb3JcIl0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaSgpIHtcbiAgICAgIGlmKHRoaXMuZXJyb3IpIGNvbnNvbGUubG9nKFwiZXJyb3IhISFcIilcbiAgICAgIHJldHVybiBcImFcIlxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFmdGVyTGVhdmUoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwibG9hZGVkXCIpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXG4kc3Bpbm5lci13aWR0aDogNDBweDtcbiRibHVlOiAjMDA3NmQzO1xuJGJ0bi1iZzogIzhCQzM0QTtcbiR0ZXh0LWxpZ2h0OiAjZmVmZWZlO1xuXG4ub3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuOCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2FkZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgJjphZnRlcntcbiAgICB3aWR0aDogJHNwaW5uZXItd2lkdGg7XG4gICAgaGVpZ2h0OiAkc3Bpbm5lci13aWR0aDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYW5pbWF0aW9uOiBzcGluIGxpbmVhciAxcyBpbmZpbml0ZTtcbiAgfVxuICAmOmJlZm9yZXtcbiAgICB3aWR0aDogJHNwaW5uZXItd2lkdGgvMjtcbiAgICBoZWlnaHQ6ICRzcGlubmVyLXdpZHRoLzQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDIuNXM7XG4gIH1cbn1cblxuLmxvYWRlci1lbnRlci1hY3RpdmUsIC5sb2FkZXItbGVhdmUtYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xufVxuXG4ubG9hZGVyLWVudGVyLCAubG9hZGVyLWxlYXZlLXRvIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmxvYWRlci1sZWF2ZS1hY3RpdmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAuNXM7XG4gIC5sb2FkZXIge1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogbm9ybWFsO1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBhbmltYXRpb246IHN1Y2Nlc3MgZWFzZS1pbiAuMTVzIGZvcndhcmRzO1xuICAgIH1cbiAgfVxufVxuXG4uaXMtZXJyIHtcbiAgICAubG9hZGVyIHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29udGVudDogXCIhXCI7XG4gICAgICAgIGFuaW1hdGlvbjogZXJyb3IgZWFzZS1pbiAuMTVzIGZvcndhcmRzICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgICBcbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3VjY2Vzc3tcbiAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKSBzY2FsZSgwKTtcbiAgICAgIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBlcnJvcntcbiAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuPC9zdHlsZT4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgdmFyIHJlZ2V4cCA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICByZWdleHBbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxuLy8gYElzUmVnRXhwYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzcmVnZXhwXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjbGFzc29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwidmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNSZWdFeHAoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgKi9cbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBkb2N1bWVudC5kb21haW4gJiYgbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IGFjdGl2ZVhEb2N1bWVudCA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpO1xuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcbi8vIEVkZ2UgMTQtIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBIQVNfU1BFQ0lFU19TVVBQT1JUICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIFtdLmZpbHRlci5jYWxsKHsgbGVuZ3RoOiAtMSwgMDogMSB9LCBmdW5jdGlvbiAoaXQpIHsgdGhyb3cgaXQ7IH0pO1xufSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmNsdWRlcztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2luY2x1ZGVzJyk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbi8vIGBBcnJheS5pc0FycmF5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmlzYXJyYXlcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUgfSwge1xuICBpc0FycmF5OiBpc0FycmF5XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBzbG9wcHlBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kJyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU0xPUFBZX01FVEhPRCA9IHNsb3BweUFycmF5TWV0aG9kKCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCBTTE9QUFlfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0aWVzOiBkZWZpbmVQcm9wZXJ0aWVzXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIG5vdEFSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbm90LWEtcmVnZXhwJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBjb3JyZWN0SXNSZWdFeHBMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYycpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogIWNvcnJlY3RJc1JlZ0V4cExvZ2ljKCdpbmNsdWRlcycpIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHJldHVybiAhIX5TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSlcbiAgICAgIC5pbmRleE9mKG5vdEFSZWdFeHAoc2VhcmNoU3RyaW5nKSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hlY2tib3hbZGF0YS12LTE4MzFiMWM4XSB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jaGVja2JveF9fbGFiZWxbZGF0YS12LTE4MzFiMWM4XTpiZWZvcmUsIC5jaGVja2JveF9fbGFiZWxbZGF0YS12LTE4MzFiMWM4XTphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5jaGVja2JveF9fbGFiZWxbZGF0YS12LTE4MzFiMWM4XTpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi5jaGVja2JveF9fbGFiZWxbZGF0YS12LTE4MzFiMWM4XTphZnRlciB7XFxuICAgIHRvcDogNHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIHdpZHRoOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDdweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLmNoZWNrYm94X19jaGVja2JveFtkYXRhLXYtMTgzMWIxYzhdIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNoZWNrYm94X19jaGVja2JveDpjaGVja2VkICsgLmNoZWNrYm94X19sYWJlbFtkYXRhLXYtMTgzMWIxYzhdOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuLmNoZWNrYm94X19jaGVja2JveDpjaGVja2VkICsgLmNoZWNrYm94X19sYWJlbFtkYXRhLXYtMTgzMWIxYzhdOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuLmNoZWNrYm94LmlzLWNvbmZpcm1bZGF0YS12LTE4MzFiMWM4XSB7XFxuICAgIGNvbG9yOiAjOTQ5NDk0O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5jaGVja2JveC5pcy1jb25maXJtIC5jaGVja2JveF9fbGFiZWxbZGF0YS12LTE4MzFiMWM4XTpiZWZvcmUsIC5jaGVja2JveC5pcy1jb25maXJtIC5jaGVja2JveF9fbGFiZWxbZGF0YS12LTE4MzFiMWM4XTphZnRlciB7XFxuICAgICAgY29udGVudDogbm9ybWFsO1xcbn1cXG4uYnRuLWVkaXRbZGF0YS12LTE4MzFiMWM4XSB7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtaW4td2lkdGg6IDQ4cHg7XFxufVxcbi5idG4tZWRpdFtkYXRhLXYtMTgzMWIxYzhdOmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sYWJlbFtkYXRhLXYtNWNiNzcwM2RdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi5tdWx0aS1pbnB1dC13cmFwW2RhdGEtdi01Y2I3NzAzZF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubXVsdGktaW5wdXQtd3JhcCA+ICpbZGF0YS12LTVjYjc3MDNkXSB7XFxuICAgIHdpZHRoOiA0OCU7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm92ZXJsYXlbZGF0YS12LWUxNDVjNjdhXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5sb2FkZXJbZGF0YS12LWUxNDVjNjdhXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbi5sb2FkZXJbZGF0YS12LWUxNDVjNjdhXTpiZWZvcmUsIC5sb2FkZXJbZGF0YS12LWUxNDVjNjdhXTphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubG9hZGVyW2RhdGEtdi1lMTQ1YzY3YV06YWZ0ZXIge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYW5pbWF0aW9uOiBzcGluLWRhdGEtdi1lMTQ1YzY3YSBsaW5lYXIgMXMgaW5maW5pdGU7XFxufVxcbi5sb2FkZXJbZGF0YS12LWUxNDVjNjdhXTpiZWZvcmUge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItcmlnaHQ6IDA7XFxuICAgIGJvcmRlci10b3A6IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDApO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDIuNXM7XFxufVxcbi5sb2FkZXItZW50ZXItYWN0aXZlW2RhdGEtdi1lMTQ1YzY3YV0sIC5sb2FkZXItbGVhdmUtYWN0aXZlW2RhdGEtdi1lMTQ1YzY3YV0ge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xcbn1cXG4ubG9hZGVyLWVudGVyW2RhdGEtdi1lMTQ1YzY3YV0sIC5sb2FkZXItbGVhdmUtdG9bZGF0YS12LWUxNDVjNjdhXSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ubG9hZGVyLWxlYXZlLWFjdGl2ZVtkYXRhLXYtZTE0NWM2N2FdIHtcXG4gIHRyYW5zaXRpb24tZGVsYXk6IC41cztcXG59XFxuLmxvYWRlci1sZWF2ZS1hY3RpdmUgLmxvYWRlcltkYXRhLXYtZTE0NWM2N2FdOmFmdGVyIHtcXG4gICAgY29udGVudDogbm9ybWFsO1xcbn1cXG4ubG9hZGVyLWxlYXZlLWFjdGl2ZSAubG9hZGVyW2RhdGEtdi1lMTQ1YzY3YV06YmVmb3JlIHtcXG4gICAgYW5pbWF0aW9uOiBzdWNjZXNzLWRhdGEtdi1lMTQ1YzY3YSBlYXNlLWluIC4xNXMgZm9yd2FyZHM7XFxufVxcbi5pcy1lcnIgLmxvYWRlcltkYXRhLXYtZTE0NWM2N2FdOmJlZm9yZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbnRlbnQ6IFxcXCIhXFxcIjtcXG4gIGFuaW1hdGlvbjogZXJyb3ItZGF0YS12LWUxNDVjNjdhIGVhc2UtaW4gLjE1cyBmb3J3YXJkcyAhaW1wb3J0YW50O1xcbn1cXG5Aa2V5ZnJhbWVzIHNwaW4tZGF0YS12LWUxNDVjNjdhIHtcXG5mcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbnRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgc3VjY2Vzcy1kYXRhLXYtZTE0NWM2N2Ege1xcbmZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKSBzY2FsZSgwKTtcXG59XFxudG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBlcnJvci1kYXRhLXYtZTE0NWM2N2Ege1xcbmZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG50byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIklucHV0V3JhcFwiLCB7XG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJpbnB1dFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IFtcImNoZWNrYm94XCIsICFfdm0uZWRpdGFibGUgPyBcImlzLWNvbmZpcm1cIiA6IFwiXCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uZWRpdGFibGVcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hfX2NoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgY2hlY2tlZDogX3ZtLnZhbHVlID09PSBfdm0ubG9jYWxDaGVja2VkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uaGFuZGxlQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjaGVja2JveF9fbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYWJlbCkgKyBcIlxcbiAgICAgIFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgIV92bS5lZGl0YWJsZVxuICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubG9jYWxDaGVja2VkKSldKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImlucHV0LXNpZGVcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfdm0uaXNjb25maXJtICYmIF92bS5lZGl0YWJsZVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuLWVkaXRcIiwgb246IHsgY2xpY2s6IF92bS5zd2l0Y2hJbnB1dCB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgT0tcXG4gICAgXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uaXNjb25maXJtICYmICFfdm0uZWRpdGFibGVcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi1lZGl0XCIsIG9uOiB7IGNsaWNrOiBfdm0uc3dpdGNoSW5wdXQgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIOe3qOmbhlxcbiAgICBcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgfVxuICAgIF0pXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiTG9hZGluZ01vZGFsXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc2hvdzogX3ZtLmxvYWRpbmcsIGVycm9yOiBfdm0uc3VibWl0RXJyIH0sXG4gICAgICAgIG9uOiB7IGxvYWRlZDogX3ZtLmNvbXBsZWF0IH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNTdWJtaXRlZCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNTdWJtaXRlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXdyYXBwZXJcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5pbnB1dHMsIGZ1bmN0aW9uKGlucHV0LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgaW5wdXQuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaW5wdXQubGFiZWwpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm11bHRpLWlucHV0LXdyYXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChpbnB1dC5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQsIGNoaWxkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcIkNoZWNrQm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGNoaWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNoaWxkLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjaGlsZC5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzY29uZmlybTogX3ZtLmlzY29uZmlybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGlsZC5jaGVja2VkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2hpbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGNoaWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoaWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiU3dpdGNoSW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogY2hpbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY2hpbGQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGNoaWxkLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNjb25maXJtOiBfdm0uaXNjb25maXJtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkdmFsaWRhdGU6IFwiaXNWYWxpZFwiIGluIGNoaWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbihpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51cGRhdGVzdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGlsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoY2hpbGQsIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hpbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiQ2hlY2tCb3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGlucHV0LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogaW5wdXQubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNjb25maXJtOiBfdm0uaXNjb25maXJtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnB1dC5jaGVja2VkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmNoZWNrZWQtdmFsdWVcIjogaW5wdXQudW5jaGVja2VkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaW5wdXQsIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpbnB1dC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfYyhcIlN3aXRjaElucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpbnB1dC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGlucHV0LmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzY29uZmlybTogX3ZtLmlzY29uZmlybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGR2YWxpZGF0ZTogXCJpc1ZhbGlkXCIgaW4gaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51cGRhdGVzdGF0ZShpc1ZhbGlkLCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGlucHV0LCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5wdXQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5pc2NvbmZpcm1cbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG4td3JhcFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLmJ0bkRpc2FibGVkIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY29uZmlybSB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAg5YWl5Yqb5YaF5a6544KS56K66KqN44GZ44KLXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG4td3JhcFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLmJ0bkRpc2FibGVkIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICDkvp3poLzjgpLpgIHkv6HjgZnjgotcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidHJhbnNpdGlvblwiLFxuICAgIHsgYXR0cnM6IHsgbmFtZTogXCJsb2FkZXJcIiB9LCBvbjogeyBcImFmdGVyLWxlYXZlXCI6IF92bS5hZnRlckxlYXZlIH0gfSxcbiAgICBbXG4gICAgICBfdm0uc2hvd1xuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgY2xhc3M6IFtcIm92ZXJsYXlcIiwgX3ZtLmVycm9yID8gXCJpcy1lcnJcIiA6IFwiXCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGVyXCIgfSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGVja0JveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xODMxYjFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQ2NmRmNmNhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTgzMWIxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTgzMWIxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3JtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjYjc3MDNkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzViOTJkMmVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3JtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjYjc3MDNkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWNiNzcwM2QmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2RpbmdNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMTQ1YzY3YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjE0OTVjOGE1XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9kaW5nTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTE0NWM2N2EmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9kaW5nTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTE0NWM2N2EmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DaGVja0JveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTgzMWIxYzgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DaGVja0JveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTgzMWIxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxODMxYjFjOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWRla2FkZXJ1c2hpcm91L1NpdGVzL2JhY2tsb2ctdGVzdC0yL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE4MzFiMWM4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE4MzFiMWM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE4MzFiMWM4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DaGVja0JveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTgzMWIxYzgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTgzMWIxYzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9DaGVja0JveC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTgzMWIxYzgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGVja0JveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xODMxYjFjOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hlY2tCb3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4MzFiMWM4JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Y2I3NzAzZCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRm9ybS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01Y2I3NzAzZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVjYjc3MDNkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thZGVrYWRlcnVzaGlyb3UvU2l0ZXMvYmFja2xvZy10ZXN0LTIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWNiNzcwM2QnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWNiNzcwM2QnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWNiNzcwM2QnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjYjc3MDNkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVjYjc3MDNkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWNiNzcwM2QmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3JtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjYjc3MDNkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Y2I3NzAzZCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9kaW5nTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUxNDVjNjdhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9kaW5nTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUxNDVjNjdhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTE0NWM2N2FcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FkZWthZGVydXNoaXJvdS9TaXRlcy9iYWNrbG9nLXRlc3QtMi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlMTQ1YzY3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMTQ1YzY3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMTQ1YzY3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9kaW5nTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUxNDVjNjdhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2UxNDVjNjdhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvTG9kaW5nTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUxNDVjNjdhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9kaW5nTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTE0NWM2N2EmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZGluZ01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMTQ1YzY3YSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=