/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.hml?entry":
/*!*****************************************************************************************************************!*\
  !*** /Users/liyuechun/Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../../Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/liyuechun/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/liyuechun/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/liyuechun/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/liyuechun/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.css":
/*!****************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/liyuechun/Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".stack": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".container": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".row": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  ".stopWatchButtons": {
    "width": "64px",
    "height": "64px",
    "marginTop": "5px",
    "marginRight": "5px",
    "marginBottom": "5px",
    "marginLeft": "5px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.hml":
/*!*******************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/liyuechun/Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.hml ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:1",
    "className": "stack"
  },
  "type": "stack",
  "classList": [
    "stack"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:2",
        "src": "/common/images/Mirage.png",
        "className": "background"
      },
      "type": "image",
      "classList": [
        "background"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:3",
        "className": "container"
      },
      "type": "div",
      "classList": [
        "container"
      ],
      "events": {
        "swipe": "touchMove"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:4",
            "className": "title",
            "value": function () {return this.time}
          },
          "type": "text",
          "classList": [
            "title"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:7",
            "className": "row"
          },
          "type": "div",
          "classList": [
            "row"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:9",
                "src": function () {return this.imgSrc},
                "className": "stopWatchButtons"
              },
              "type": "image",
              "classList": [
                "stopWatchButtons"
              ],
              "events": {
                "click": "startOrPause"
              }
            },
            {
              "attr": {
                "debugLine": "pages/index/index:10",
                "src": "/common/images/stop-button.png",
                "className": "stopWatchButtons"
              },
              "type": "image",
              "classList": [
                "stopWatchButtons"
              ],
              "events": {
                "click": "reset"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/liyuechun/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/liyuechun/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/liyuechun/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/liyuechun/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/liyuechun/Desktop/HarmonyOSProject/Stopwatch/entry/src/main/js/default/pages/index/index.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var startTime;
var elapsedTime = 0;
var timerInterval;
var startOrPauseFlag = false;
var _default = {
  data: {
    time: '00:00:00:00',
    imgSrc: '/common/images/play-button.png'
  },
  startOrPause: function startOrPause() {
    var that = this;
    startTime = Date.now() - elapsedTime;

    if (startOrPauseFlag == false) {
      that.imgSrc = '/common/images/pause-button.png';
      startOrPauseFlag = true;
      timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        that.time = timeToString(elapsedTime);
      }, 10);
    } else {
      clearInterval(timerInterval);
      that.imgSrc = '/common/images/play-button.png';
      startOrPauseFlag = false;
    }
  },
  reset: function reset() {
    var that = this;
    clearInterval(timerInterval);
    that.time = "00:00:00:00";
    elapsedTime = 0;
    that.imgSrc = '/common/images/play-button.png';
    startOrPauseFlag = false;
  },
  touchMove: function touchMove(e) {
    if (e.direction == "right") {}
  }
};
exports["default"] = _default;

function timeToString(time) {
  var diffInHrs = time / 3600000;
  var hh = Math.floor(diffInHrs);
  var diffInMin = (diffInHrs - hh) * 60;
  var mm = Math.floor(diffInMin);
  var diffInSec = (diffInMin - mm) * 60;
  var ss = Math.floor(diffInSec);
  var diffInMs = (diffInSec - ss) * 100;
  var ms = Math.floor(diffInMs);
  var formattedHH = padL(hh, 2, 0);
  var formattedMM = padL(mm, 2, 0);
  var formattedSS = padL(ss, 2, 0);
  var formattedMS = padL(ms, 2, 0);
  return "".concat(formattedHH, ":").concat(formattedMM, ":").concat(formattedSS, ":").concat(formattedMS);
}

function padL(a, b, c) {
  return (new Array(b || 2).join(c || 0) + a).slice(-b);
}
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ })

/******/ });