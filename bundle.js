/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Functor = function () {\n  //Custom \"Functor\"\n  function Functor(value) {\n    _classCallCheck(this, Functor);\n\n    this.__val = value;\n  }\n\n  _createClass(Functor, [{\n    key: \"map\",\n    value: function map(fn) {\n      //Applies function to this.val + returns new Myfunctor\n      return new Functor(fn(this.__val));\n    }\n  }, {\n    key: \"join\",\n    value: function join() {\n      // used to get the value out of the Monad\n      return this.__val;\n    }\n  }]);\n\n  return Functor;\n}();\n\n/* unused harmony default export */ var _unused_webpack_default_export = Functor;\n\n//////////////////\n// WEBPACK FOOTER\n// ./functor.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./functor.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Monad = function () {\n  function Monad(val) {\n    _classCallCheck(this, Monad);\n\n    this.__value = val;\n  }\n\n  _createClass(Monad, [{\n    key: \"map\",\n    value: function map(f) {\n      //Applies the function but returns another Monad!\n      return Monad.of(f(this.__value));\n    }\n  }, {\n    key: \"join\",\n    value: function join() {\n      return this.__value;\n    }\n  }, {\n    key: \"chain\",\n    value: function chain(f) {\n      //Helper func that maps and then gets the value out\n      return this.map(f).join();\n    }\n  }, {\n    key: \"ap\",\n    value: function ap(someOtherMonad) {\n      //Used to deal w/ multiple Monads\n      return someOtherMonad.map(this.__value);\n    }\n  }], [{\n    key: \"of\",\n    value: function of(val) {\n      //Monad.of is simpler than \"new Monad(val)\n      return new Monad(val);\n    }\n  }]);\n\n  return Monad;\n}();\n\n/* harmony default export */ exports[\"a\"] = Monad;\n\n//////////////////\n// WEBPACK FOOTER\n// ./monad.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./monad.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__functor__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monad__ = __webpack_require__(1);\n\n\nvar add1 = function add1(a) {\n  return a + 1;\n};\n\n//temp is a Functor instance that's storing value 1\n// const temp = new Functor(2);\n// temp.map(add1);\n\nvar a = 1;\nvar b = 2;\n\nvar aMon = __WEBPACK_IMPORTED_MODULE_1__monad__[\"a\" /* default */].of(a);\nvar bMon = __WEBPACK_IMPORTED_MODULE_1__monad__[\"a\" /* default */].of(b);\n\n// console.log('Functor val: ', temp.map(add1).join());\nconsole.log('mon val: ', aMon.ap(bMon));\nconsole.log('mon2 val: ', bMon.chain(add1));\n\n//////////////////\n// WEBPACK FOOTER\n// ./index.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./index.js?");

/***/ }
/******/ ]);