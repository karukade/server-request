(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");

var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js"); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (config.withCredentials) {
      request.withCredentials = true;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");

var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports.default = axios;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get'; // Hook up interceptors middleware

  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Support baseURL config

  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  } // Ensure headers exist


  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });
  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  utils.forEach(['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  return config;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter; // Only Node.JS has a process variable that is of [[Class]] process

  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function deepMerge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
module.exports = function isBuffer(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return value;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              push.call(target, value);
            // filter
          } else if (IS_EVERY) return false; // every
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"); // `Array.prototype.{ reduce, reduceRight }` methods implementation


var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }

      index += i;

      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }

    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }

    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate

module.exports = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
}); // IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

var REPLACE_KEEPS_$0 = function () {
  return 'a'.replace(/./, '$0') === '$0';
}(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper


var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];
    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return regexMethod.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return regexMethod.call(string, this);
    });
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"); // `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js"); // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec


module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.

var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');

      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"); // `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags


module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js"); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.


function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});
exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"); // `String.prototype.{ codePointAt, at }` methods implementation


var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"); // `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  concat: function concat(arg) {
    // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.every.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.every.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var $every = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").every;

var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js"); // `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every


$({
  target: 'Array',
  proto: true,
  forced: sloppyArrayMethod('every')
}, {
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // FF49- issue

var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].map.call({
    length: -1,
    0: 1
  }, function (it) {
    throw it;
  });
}); // `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species

$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;

var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js"); // `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce


$({
  target: 'Array',
  proto: true,
  forced: sloppyArrayMethod('reduce')
}, {
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec
}, {
  exec: exec
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");

var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
}; // @@replace logic


fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  return [// `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
    return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    if (reason.REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf('$0') === -1) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;
    }

    var rx = anObject(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3Mvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmV2ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmVkdWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcucmVwbGFjZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsInV0aWxzIiwic2V0dGxlIiwiYnVpbGRVUkwiLCJwYXJzZUhlYWRlcnMiLCJpc1VSTFNhbWVPcmlnaW4iLCJjcmVhdGVFcnJvciIsInhockFkYXB0ZXIiLCJjb25maWciLCJQcm9taXNlIiwiZGlzcGF0Y2hYaHJSZXF1ZXN0IiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3REYXRhIiwiZGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiaGVhZGVycyIsImlzRm9ybURhdGEiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJhdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIkF1dGhvcml6YXRpb24iLCJidG9hIiwib3BlbiIsIm1ldGhvZCIsInRvVXBwZXJDYXNlIiwidXJsIiwicGFyYW1zIiwicGFyYW1zU2VyaWFsaXplciIsInRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJoYW5kbGVMb2FkIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVVJMIiwiaW5kZXhPZiIsInJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsIm9uYWJvcnQiLCJoYW5kbGVBYm9ydCIsIm9uZXJyb3IiLCJoYW5kbGVFcnJvciIsIm9udGltZW91dCIsImhhbmRsZVRpbWVvdXQiLCJpc1N0YW5kYXJkQnJvd3NlckVudiIsImNvb2tpZXMiLCJ4c3JmVmFsdWUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ4c3JmQ29va2llTmFtZSIsInJlYWQiLCJ1bmRlZmluZWQiLCJ4c3JmSGVhZGVyTmFtZSIsImZvckVhY2giLCJzZXRSZXF1ZXN0SGVhZGVyIiwidmFsIiwia2V5IiwidG9Mb3dlckNhc2UiLCJlIiwib25Eb3dubG9hZFByb2dyZXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJ1cGxvYWQiLCJjYW5jZWxUb2tlbiIsInByb21pc2UiLCJ0aGVuIiwib25DYW5jZWxlZCIsImNhbmNlbCIsImFib3J0Iiwic2VuZCIsImJpbmQiLCJBeGlvcyIsIm1lcmdlQ29uZmlnIiwiZGVmYXVsdHMiLCJjcmVhdGVJbnN0YW5jZSIsImRlZmF1bHRDb25maWciLCJjb250ZXh0IiwiaW5zdGFuY2UiLCJwcm90b3R5cGUiLCJleHRlbmQiLCJheGlvcyIsImNyZWF0ZSIsImluc3RhbmNlQ29uZmlnIiwiQ2FuY2VsIiwiQ2FuY2VsVG9rZW4iLCJpc0NhbmNlbCIsImFsbCIsInByb21pc2VzIiwic3ByZWFkIiwiZGVmYXVsdCIsIm1lc3NhZ2UiLCJ0b1N0cmluZyIsIl9fQ0FOQ0VMX18iLCJleGVjdXRvciIsIlR5cGVFcnJvciIsInJlc29sdmVQcm9taXNlIiwicHJvbWlzZUV4ZWN1dG9yIiwidG9rZW4iLCJyZWFzb24iLCJ0aHJvd0lmUmVxdWVzdGVkIiwic291cmNlIiwiYyIsInZhbHVlIiwiSW50ZXJjZXB0b3JNYW5hZ2VyIiwiZGlzcGF0Y2hSZXF1ZXN0IiwiaW50ZXJjZXB0b3JzIiwiYXJndW1lbnRzIiwiY2hhaW4iLCJ1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyIsImludGVyY2VwdG9yIiwidW5zaGlmdCIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzIiwicHVzaCIsImxlbmd0aCIsInNoaWZ0IiwiZ2V0VXJpIiwicmVwbGFjZSIsImZvckVhY2hNZXRob2ROb0RhdGEiLCJtZXJnZSIsImZvckVhY2hNZXRob2RXaXRoRGF0YSIsImhhbmRsZXJzIiwidXNlIiwiZWplY3QiLCJpZCIsImZuIiwiZm9yRWFjaEhhbmRsZXIiLCJoIiwiZW5oYW5jZUVycm9yIiwiY29kZSIsImVycm9yIiwiRXJyb3IiLCJ0cmFuc2Zvcm1EYXRhIiwiaXNBYnNvbHV0ZVVSTCIsImNvbWJpbmVVUkxzIiwidGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZCIsImJhc2VVUkwiLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwiY29tbW9uIiwiY2xlYW5IZWFkZXJDb25maWciLCJhZGFwdGVyIiwib25BZGFwdGVyUmVzb2x1dGlvbiIsInRyYW5zZm9ybVJlc3BvbnNlIiwib25BZGFwdGVyUmVqZWN0aW9uIiwiaXNBeGlvc0Vycm9yIiwidG9KU09OIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibnVtYmVyIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwic3RhY2siLCJjb25maWcxIiwiY29uZmlnMiIsInZhbHVlRnJvbUNvbmZpZzIiLCJwcm9wIiwibWVyZ2VEZWVwUHJvcGVydGllcyIsImlzT2JqZWN0IiwiZGVlcE1lcmdlIiwiZGVmYXVsdFRvQ29uZmlnMiIsInZhbGlkYXRlU3RhdHVzIiwiZm5zIiwidHJhbnNmb3JtIiwibm9ybWFsaXplSGVhZGVyTmFtZSIsIkRFRkFVTFRfQ09OVEVOVF9UWVBFIiwic2V0Q29udGVudFR5cGVJZlVuc2V0IiwiaXNVbmRlZmluZWQiLCJnZXREZWZhdWx0QWRhcHRlciIsInByb2Nlc3MiLCJPYmplY3QiLCJjYWxsIiwiaXNBcnJheUJ1ZmZlciIsImlzQnVmZmVyIiwiaXNTdHJlYW0iLCJpc0ZpbGUiLCJpc0Jsb2IiLCJpc0FycmF5QnVmZmVyVmlldyIsImJ1ZmZlciIsImlzVVJMU2VhcmNoUGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwibWF4Q29udGVudExlbmd0aCIsInRoaXNBcmciLCJ3cmFwIiwiYXJncyIsIkFycmF5IiwiaSIsImFwcGx5IiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplZFBhcmFtcyIsInBhcnRzIiwic2VyaWFsaXplIiwiaXNBcnJheSIsInBhcnNlVmFsdWUiLCJ2IiwiaXNEYXRlIiwidG9JU09TdHJpbmciLCJqb2luIiwiaGFzaG1hcmtJbmRleCIsInNsaWNlIiwicmVsYXRpdmVVUkwiLCJzdGFuZGFyZEJyb3dzZXJFbnYiLCJ3cml0ZSIsImV4cGlyZXMiLCJwYXRoIiwiZG9tYWluIiwic2VjdXJlIiwiY29va2llIiwiaXNOdW1iZXIiLCJEYXRlIiwidG9HTVRTdHJpbmciLCJpc1N0cmluZyIsImRvY3VtZW50IiwibWF0Y2giLCJSZWdFeHAiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZW1vdmUiLCJub3ciLCJub25TdGFuZGFyZEJyb3dzZXJFbnYiLCJ0ZXN0IiwibXNpZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInVybFBhcnNpbmdOb2RlIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdpblVSTCIsInJlc29sdmVVUkwiLCJocmVmIiwic2V0QXR0cmlidXRlIiwicHJvdG9jb2wiLCJob3N0Iiwic2VhcmNoIiwiaGFzaCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiY2hhckF0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXF1ZXN0VVJMIiwicGFyc2VkIiwibm9ybWFsaXplZE5hbWUiLCJwcm9jZXNzSGVhZGVyIiwiaWdub3JlRHVwbGljYXRlT2YiLCJzcGxpdCIsInBhcnNlciIsImxpbmUiLCJ0cmltIiwic3Vic3RyIiwiY29uY2F0IiwiY2FsbGJhY2siLCJhcnIiLCJGb3JtRGF0YSIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiaXNGdW5jdGlvbiIsInBpcGUiLCJVUkxTZWFyY2hQYXJhbXMiLCJzdHIiLCJwcm9kdWN0Iiwib2JqIiwibCIsImhhc093blByb3BlcnR5IiwiYXNzaWduVmFsdWUiLCJhIiwiYiIsImNvbnN0cnVjdG9yIiwiUyIsImluZGV4IiwidW5pY29kZSIsIkluZGV4ZWRPYmplY3QiLCJ0b09iamVjdCIsInRvTGVuZ3RoIiwiYXJyYXlTcGVjaWVzQ3JlYXRlIiwiY3JlYXRlTWV0aG9kIiwiVFlQRSIsIklTX01BUCIsIklTX0ZJTFRFUiIsIklTX1NPTUUiLCJJU19FVkVSWSIsIklTX0ZJTkRfSU5ERVgiLCJOT19IT0xFUyIsIiR0aGlzIiwiY2FsbGJhY2tmbiIsInRoYXQiLCJzcGVjaWZpY0NyZWF0ZSIsIk8iLCJzZWxmIiwiYm91bmRGdW5jdGlvbiIsInRhcmdldCIsIm1hcCIsImZpbHRlciIsInNvbWUiLCJldmVyeSIsImZpbmQiLCJmaW5kSW5kZXgiLCJmYWlscyIsIndlbGxLbm93blN5bWJvbCIsIlY4X1ZFUlNJT04iLCJTUEVDSUVTIiwiTUVUSE9EX05BTUUiLCJhcnJheSIsImZvbyIsIkJvb2xlYW4iLCJhRnVuY3Rpb24iLCJJU19SSUdIVCIsImFyZ3VtZW50c0xlbmd0aCIsIm1lbW8iLCJsZWZ0IiwicmlnaHQiLCJvcmlnaW5hbEFycmF5IiwiQyIsInRvUHJpbWl0aXZlIiwiZGVmaW5lUHJvcGVydHlNb2R1bGUiLCJjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IiLCJvYmplY3QiLCJwcm9wZXJ0eUtleSIsImYiLCJyZWRlZmluZSIsInJlZ2V4cEV4ZWMiLCJjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkiLCJSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyIsInJlIiwiZXhlYyIsImdyb3VwcyIsIlJFUExBQ0VfS0VFUFNfJDAiLCJTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMiLCJvcmlnaW5hbEV4ZWMiLCJLRVkiLCJzaGFtIiwiU1lNQk9MIiwiREVMRUdBVEVTX1RPX1NZTUJPTCIsIkRFTEVHQVRFU19UT19FWEVDIiwiZXhlY0NhbGxlZCIsImZsYWdzIiwibmF0aXZlUmVnRXhwTWV0aG9kIiwibWV0aG9kcyIsIm5hdGl2ZU1ldGhvZCIsInJlZ2V4cCIsImFyZzIiLCJmb3JjZVN0cmluZ01ldGhvZCIsImRvbmUiLCJzdHJpbmdNZXRob2QiLCJyZWdleE1ldGhvZCIsIlN0cmluZyIsInN0cmluZyIsImFyZyIsImNsYXNzb2YiLCJSIiwicmVnZXhwRmxhZ3MiLCJzdGlja3lIZWxwZXJzIiwibmF0aXZlRXhlYyIsIm5hdGl2ZVJlcGxhY2UiLCJwYXRjaGVkRXhlYyIsIlVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyIsInJlMSIsInJlMiIsImxhc3RJbmRleCIsIlVOU1VQUE9SVEVEX1kiLCJCUk9LRU5fQ0FSRVQiLCJOUENHX0lOQ0xVREVEIiwiUEFUQ0giLCJyZUNvcHkiLCJzdGlja3kiLCJjaGFyc0FkZGVkIiwic3RyQ29weSIsIm11bHRpbGluZSIsImlucHV0IiwiZ2xvYmFsIiwiYW5PYmplY3QiLCJpZ25vcmVDYXNlIiwiZG90QWxsIiwiUkUiLCJzIiwiYXJndW1lbnQiLCJ0b0ludGVnZXIiLCJyZXF1aXJlT2JqZWN0Q29lcmNpYmxlIiwiQ09OVkVSVF9UT19TVFJJTkciLCJwb3MiLCJwb3NpdGlvbiIsInNpemUiLCJmaXJzdCIsInNlY29uZCIsImNoYXJDb2RlQXQiLCJjb2RlQXQiLCIkIiwiY3JlYXRlUHJvcGVydHkiLCJhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0IiwiSVNfQ09OQ0FUX1NQUkVBREFCTEUiLCJNQVhfU0FGRV9JTlRFR0VSIiwiTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEIiwiSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCIsIlNQRUNJRVNfU1VQUE9SVCIsImlzQ29uY2F0U3ByZWFkYWJsZSIsInNwcmVhZGFibGUiLCJGT1JDRUQiLCJwcm90byIsImZvcmNlZCIsIkEiLCJuIiwiayIsImxlbiIsIkUiLCIkZXZlcnkiLCJzbG9wcHlBcnJheU1ldGhvZCIsIiRtYXAiLCJIQVNfU1BFQ0lFU19TVVBQT1JUIiwiVVNFU19UT19MRU5HVEgiLCJpdCIsIiRyZWR1Y2UiLCJyZWR1Y2UiLCJmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyIsImFkdmFuY2VTdHJpbmdJbmRleCIsInJlZ0V4cEV4ZWMiLCJtYXgiLCJNYXRoIiwibWluIiwiZmxvb3IiLCJTVUJTVElUVVRJT05fU1lNQk9MUyIsIlNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEIiwibWF5YmVUb1N0cmluZyIsIlJFUExBQ0UiLCJtYXliZUNhbGxOYXRpdmUiLCJzZWFyY2hWYWx1ZSIsInJlcGxhY2VWYWx1ZSIsInJlcGxhY2VyIiwicmVzIiwicngiLCJmdW5jdGlvbmFsUmVwbGFjZSIsImZ1bGxVbmljb2RlIiwicmVzdWx0cyIsIm1hdGNoU3RyIiwiYWNjdW11bGF0ZWRSZXN1bHQiLCJuZXh0U291cmNlUG9zaXRpb24iLCJtYXRjaGVkIiwiY2FwdHVyZXMiLCJqIiwibmFtZWRDYXB0dXJlcyIsInJlcGxhY2VyQXJncyIsInJlcGxhY2VtZW50IiwiZ2V0U3Vic3RpdHV0aW9uIiwidGFpbFBvcyIsIm0iLCJzeW1ib2xzIiwiY2giLCJjYXB0dXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxtQkFBTyxDQUFDLHNEQUFELENBQXhCLEM7Ozs7Ozs7Ozs7OztBQ0FhOztBQUViLElBQUlDLEtBQUssR0FBR0QsbUJBQU8sQ0FBQyxxREFBRCxDQUFuQjs7QUFDQSxJQUFJRSxNQUFNLEdBQUdGLG1CQUFPLENBQUMsaUVBQUQsQ0FBcEI7O0FBQ0EsSUFBSUcsUUFBUSxHQUFHSCxtQkFBTyxDQUFDLDJFQUFELENBQXRCOztBQUNBLElBQUlJLFlBQVksR0FBR0osbUJBQU8sQ0FBQyxtRkFBRCxDQUExQjs7QUFDQSxJQUFJSyxlQUFlLEdBQUdMLG1CQUFPLENBQUMseUZBQUQsQ0FBN0I7O0FBQ0EsSUFBSU0sV0FBVyxHQUFHTixtQkFBTyxDQUFDLHlFQUFELENBQXpCOztBQUVBRixNQUFNLENBQUNDLE9BQVAsR0FBaUIsU0FBU1EsVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEI7QUFDM0MsU0FBTyxJQUFJQyxPQUFKLENBQVksU0FBU0Msa0JBQVQsQ0FBNEJDLE9BQTVCLEVBQXFDQyxNQUFyQyxFQUE2QztB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QUE2QitZLE9BQXBDO0FBQ0QsS0F0Qk0sQ0FBUDtBQXVCRDtBQUNGLENBMUc0QixDQUE3QixDIiwiZmlsZSI6IjAuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA6ICdnZXQnO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdXRpbHMuZm9yRWFjaChbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXSwgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXSwgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdtYXhDb250ZW50TGVuZ3RoJyxcbiAgICAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJyxcbiAgICAnc29ja2V0UGF0aCdcbiAgXSwgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgLy8gT25seSBOb2RlLkpTIGhhcyBhIHByb2Nlc3MgdmFyaWFibGUgdGhhdCBpcyBvZiBbW0NsYXNzXV0gcHJvY2Vzc1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gY2hhckF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbnZhciBwdXNoID0gW10ucHVzaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuICBmb3JFYWNoOiBjcmVhdGVNZXRob2QoMCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuICBzb21lOiBjcmVhdGVNZXRob2QoMyksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhcbiAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QoNilcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgcmVkdWNlLCByZWR1Y2VSaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX1JJR0hUKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgY2FsbGJhY2tmbiwgYXJndW1lbnRzTGVuZ3RoLCBtZW1vKSB7XG4gICAgYUZ1bmN0aW9uKGNhbGxiYWNrZm4pO1xuICAgIHZhciBPID0gdG9PYmplY3QodGhhdCk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gSVNfUklHSFQgPyBsZW5ndGggLSAxIDogMDtcbiAgICB2YXIgaSA9IElTX1JJR0hUID8gLTEgOiAxO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPCAyKSB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgbWVtbyA9IHNlbGZbaW5kZXhdO1xuICAgICAgICBpbmRleCArPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBpZiAoSVNfUklHSFQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoO0lTX1JJR0hUID8gaW5kZXggPj0gMCA6IGxlbmd0aCA+IGluZGV4OyBpbmRleCArPSBpKSBpZiAoaW5kZXggaW4gc2VsZikge1xuICAgICAgbWVtbyA9IGNhbGxiYWNrZm4obWVtbywgc2VsZltpbmRleF0sIGluZGV4LCBPKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4gIGxlZnQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlcmlnaHRcbiAgcmlnaHQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gbmV3IChDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEMpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbi8vIElFIDw9IDExIHJlcGxhY2VzICQwIHdpdGggdGhlIHdob2xlIG1hdGNoLCBhcyBpZiBpdCB3YXMgJCZcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwMjQ2NjYvZ2V0dGluZy1pZS10by1yZXBsYWNlLWEtcmVnZXgtd2l0aC10aGUtbGl0ZXJhbC1zdHJpbmctMFxudmFyIFJFUExBQ0VfS0VFUFNfJDAgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2EnLnJlcGxhY2UoLy4vLCAnJDAnKSA9PT0gJyQwJztcbn0pKCk7XG5cbi8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoICE9PSAyIHx8IHJlc3VsdFswXSAhPT0gJ2EnIHx8IHJlc3VsdFsxXSAhPT0gJ2InO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjLCBzaGFtKSB7XG4gIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcblxuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFsIHJlZ2V4IGhlcmUgc2luY2UgaXQgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAvLyBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvbiBpbiBWOFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMwNlxuICAgICAgcmUgPSB7fTtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgIHJlLmZsYWdzID0gJyc7XG4gICAgICByZVtTWU1CT0xdID0gLy4vW1NZTUJPTF07XG4gICAgfVxuXG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuXG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KTtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIShSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyAmJiBSRVBMQUNFX0tFRVBTXyQwKSkgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgbWV0aG9kcyA9IGV4ZWMoU1lNQk9MLCAnJ1tLRVldLCBmdW5jdGlvbiAobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9LCB7IFJFUExBQ0VfS0VFUFNfJDA6IFJFUExBQ0VfS0VFUFNfJDAgfSk7XG4gICAgdmFyIHN0cmluZ01ldGhvZCA9IG1ldGhvZHNbMF07XG4gICAgdmFyIHJlZ2V4TWV0aG9kID0gbWV0aG9kc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyaW5nTWV0aG9kKTtcbiAgICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxuXG4gIGlmIChzaGFtKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoUmVnRXhwLnByb3RvdHlwZVtTWU1CT0xdLCAnc2hhbScsIHRydWUpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY2xhc3NvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL2NsYXNzb2YtcmF3Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vcmVnZXhwLWV4ZWMnKTtcblxuLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKHR5cGVvZiBleGVjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAoY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbiAgfVxuXG4gIHJldHVybiByZWdleHBFeGVjLmNhbGwoUiwgUyk7XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVnZXhwRmxhZ3MgPSByZXF1aXJlKCcuL3JlZ2V4cC1mbGFncycpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuL3JlZ2V4cC1zdGlja3ktaGVscGVycycpO1xuXG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbi8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4vLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG52YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS87XG4gIHZhciByZTIgPSAvYiovZztcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMS5sYXN0SW5kZXggIT09IDAgfHwgcmUyLmxhc3RJbmRleCAhPT0gMDtcbn0pKCk7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gc3RpY2t5SGVscGVycy5VTlNVUFBPUlRFRF9ZIHx8IHN0aWNreUhlbHBlcnMuQlJPS0VOX0NBUkVUO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRCB8fCBVTlNVUFBPUlRFRF9ZO1xuXG5pZiAoUEFUQ0gpIHtcbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cikge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcbiAgICB2YXIgc3RpY2t5ID0gVU5TVVBQT1JURURfWSAmJiByZS5zdGlja3k7XG4gICAgdmFyIGZsYWdzID0gcmVnZXhwRmxhZ3MuY2FsbChyZSk7XG4gICAgdmFyIHNvdXJjZSA9IHJlLnNvdXJjZTtcbiAgICB2YXIgY2hhcnNBZGRlZCA9IDA7XG4gICAgdmFyIHN0ckNvcHkgPSBzdHI7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBmbGFncyA9IGZsYWdzLnJlcGxhY2UoJ3knLCAnJyk7XG4gICAgICBpZiAoZmxhZ3MuaW5kZXhPZignZycpID09PSAtMSkge1xuICAgICAgICBmbGFncyArPSAnZyc7XG4gICAgICB9XG5cbiAgICAgIHN0ckNvcHkgPSBTdHJpbmcoc3RyKS5zbGljZShyZS5sYXN0SW5kZXgpO1xuICAgICAgLy8gU3VwcG9ydCBhbmNob3JlZCBzdGlja3kgYmVoYXZpb3IuXG4gICAgICBpZiAocmUubGFzdEluZGV4ID4gMCAmJiAoIXJlLm11bHRpbGluZSB8fCByZS5tdWx0aWxpbmUgJiYgc3RyW3JlLmxhc3RJbmRleCAtIDFdICE9PSAnXFxuJykpIHtcbiAgICAgICAgc291cmNlID0gJyg/OiAnICsgc291cmNlICsgJyknO1xuICAgICAgICBzdHJDb3B5ID0gJyAnICsgc3RyQ29weTtcbiAgICAgICAgY2hhcnNBZGRlZCsrO1xuICAgICAgfVxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIHN0ciBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXig/OicgKyBzb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICB9XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyBzb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwoc3RpY2t5ID8gcmVDb3B5IDogcmUsIHN0ckNvcHkpO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG1hdGNoLmlucHV0ID0gbWF0Y2guaW5wdXQuc2xpY2UoY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoLmluZGV4ID0gcmUubGFzdEluZGV4O1xuICAgICAgICByZS5sYXN0SW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgfSBlbHNlIHJlLmxhc3RJbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgIHJlLmxhc3RJbmRleCA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NgIGdldHRlciBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC5kb3RBbGwpIHJlc3VsdCArPSAncyc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vZmFpbHMnKTtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3IsXG4vLyBzbyB3ZSB1c2UgYW4gaW50ZXJtZWRpYXRlIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUkUocywgZikge1xuICByZXR1cm4gUmVnRXhwKHMsIGYpO1xufVxuXG5leHBvcnRzLlVOU1VQUE9SVEVEX1kgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG4gIHZhciByZSA9IFJFKCdhJywgJ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ2FiY2QnKSAhPSBudWxsO1xufSk7XG5cbmV4cG9ydHMuQlJPS0VOX0NBUkVUID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NzM2ODdcbiAgdmFyIHJlID0gUkUoJ15yJywgJ2d5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdzdHInKSAhPSBudWxsO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhbWV0aG9kIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyBjb2RlUG9pbnRBdCwgYXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRldmVyeSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5ldmVyeTtcbnZhciBzbG9wcHlBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBzbG9wcHlBcnJheU1ldGhvZCgnZXZlcnknKSB9LCB7XG4gIGV2ZXJ5OiBmdW5jdGlvbiBldmVyeShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZXZlcnkodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuLy8gRkY0OS0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IEhBU19TUEVDSUVTX1NVUFBPUlQgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgW10ubWFwLmNhbGwoeyBsZW5ndGg6IC0xLCAwOiAxIH0sIGZ1bmN0aW9uIChpdCkgeyB0aHJvdyBpdDsgfSk7XG59KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRyZWR1Y2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktcmVkdWNlJykubGVmdDtcbnZhciBzbG9wcHlBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IHNsb3BweUFycmF5TWV0aG9kKCdyZWR1Y2UnKSB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogLy4vLmV4ZWMgIT09IGV4ZWMgfSwge1xuICBleGVjOiBleGVjXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmJ2BdfFxcZFxcZD98PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmJ2BdfFxcZFxcZD8pL2c7XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChSRVBMQUNFLCBuYXRpdmVSZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUsIHJlYXNvbikge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gcmVwbGFjZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHJlcGxhY2VyLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICBpZiAocmVhc29uLlJFUExBQ0VfS0VFUFNfJDAgfHwgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdzdHJpbmcnICYmIHJlcGxhY2VWYWx1ZS5pbmRleE9mKCckMCcpID09PSAtMSkpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVSZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG5cbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcblxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuXG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVSZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=