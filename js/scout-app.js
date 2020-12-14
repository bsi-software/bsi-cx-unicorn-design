(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"my-app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = this["webpackJsonp"] = this["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/my-app.js","jquery","eclipse-scout"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/LabApp.js":
/*!***********************!*\
  !*** ./src/LabApp.js ***!
  \***********************/
/*! exports provided: LabApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabApp", function() { return LabApp; });
/* harmony import */ var _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eclipse-scout/core */ "./node_modules/@eclipse-scout/core/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var LabApp = /*#__PURE__*/function (_App) {
  _inherits(LabApp, _App);

  var _super = _createSuper(LabApp);

  function LabApp() {
    _classCallCheck(this, LabApp);

    return _super.call(this);
  }

  _createClass(LabApp, [{
    key: "_beforeAjaxCall",
    value: function _beforeAjaxCall(request) {// NOP - override bad defaults from Scout App.js - not every server likes BSI specific Scout headers
    }
  }]);

  return LabApp;
}(_eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["App"]);

/***/ }),

/***/ "./src/desktop/Desktop.js":
/*!********************************!*\
  !*** ./src/desktop/Desktop.js ***!
  \********************************/
/*! exports provided: Desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Desktop", function() { return Desktop; });
/* harmony import */ var _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eclipse-scout/core */ "./node_modules/@eclipse-scout/core/src/index.js");
/* harmony import */ var _DesktopModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopModel */ "./src/desktop/DesktopModel.js");
/* harmony import */ var _parser_DomParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser/DomParser */ "./src/parser/DomParser.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Desktop = /*#__PURE__*/function (_ScoutDesktop) {
  _inherits(Desktop, _ScoutDesktop);

  var _super = _createSuper(Desktop);

  function Desktop() {
    _classCallCheck(this, Desktop);

    return _super.call(this);
  }

  _createClass(Desktop, [{
    key: "_jsonModel",
    value: function _jsonModel() {
      return _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["models"].get(_DesktopModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  }, {
    key: "_render",
    value: function _render() {
      this.$container = this.$parent;
      this.$container.addClass('desktop');
      this.htmlComp = _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["HtmlComponent"].install(this.$container, this.session);
      this.htmlComp.setLayout(this._createLayout()); // Attach resize listener before other elements can add their own resize listener (e.g. an addon) to make sure it is executed first

      this.$container.window().on('resize', this._resizeHandler).on('popstate', this._popstateHandler); // Desktop elements are added before this separator, all overlays are opened after (dialogs, popups, tooltips etc.)

      this.$overlaySeparator = this.$container.appendDiv('overlay-separator').setVisible(false);

      this._renderTitle();
    }
  }, {
    key: "_postRender",
    value: function _postRender() {
      _get(_getPrototypeOf(Desktop.prototype), "_postRender", this).call(this); // Check how to init texts property (we don't want to load them via HTTP, they should be "baked" into
      // the application).


      this.session.textMap = new _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["TextMap"]({
        Ok: 'Ok',
        OkButton: 'Ok',
        ResetButton: 'Reset',
        CancelButton: 'Cancel',
        FormEmptyMandatoryFieldsMessage: 'The following fields are required:',
        'ui.CopyToClipboardSuccessStatus': 'Copied to clipboard',
        SmartFieldNoDataFound: 'No data available',
        FormSaveChangesQuestion: 'Do you want to save the changes?',
        Yes: 'Yes',
        No: 'No',
        Cancel: 'Cancel',
        InvalidNumberMessageX: '"{0}" is an invalid number',
        FormInvalidFieldsMessage: 'The following fields are invalid\:'
      }); // Never make a glass pane!

      this.addGlassPaneTargetFilter(function () {
        return false;
      });

      this._renderDynamicForms();

      this._renderStaticForm();
    }
  }, {
    key: "_renderDynamicForms",
    value: function _renderDynamicForms() {
      var $forms = this.$container.find('[data-scout-object-type="lab.PlainForm"]');
      var desktop = this;
      $forms.each(function () {
        var $form = $(this);
        var formModel = new _parser_DomParser__WEBPACK_IMPORTED_MODULE_2__["DomParser"]($form).toScoutModel();
        var form = scout.create('lab.PlainForm', $.extend(formModel, {
          parent: desktop,
          $domParent: $form
        }));
        form.render();
        form.htmlComp.pack();
      });
    }
    /**
     * Add this HTML code to the index.hmtl, if you need a static form
     *
     * <br/>Static form:
     * <form class="unicorn-form single-column-form" id="StaticForm" method="get">
     * &lt;-- Scout Form will be inserted here --&gt;
     * </form>
     */

  }, {
    key: "_renderStaticForm",
    value: function _renderStaticForm() {
      var $formDiv = this.$container.find('#StaticForm');

      if (!$formDiv.length) {
        console.log('No placeholder found for #StaticForm --> skip');
        return;
      }

      var plainForm = scout.create('lab.PlainForm', {
        id: 'PlainForm',
        parent: this,
        $domParent: $formDiv,
        // <-- control the parent
        rootGroupBox: {
          id: 'MainBox',
          objectType: 'GroupBox',
          mainBox: true,
          gridColumnCount: 1,
          fields: [{
            id: 'name',
            objectType: 'StringField',
            label: 'Your name',
            mandatory: true
          }, {
            id: 'age',
            objectType: 'NumberField',
            label: 'Your age'
          }, {
            id: 'character',
            objectType: 'SmartField',
            label: 'Your character',
            lookupCall: 'lab.SwapiLookupCall'
          }],
          menuBarPosition: _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["GroupBox"].MenuBarPosition.BOTTOM,
          menus: [{
            id: 'OkMenu',
            objectType: 'OkMenu'
          }, {
            id: 'CancelMenu',
            objectType: 'CancelMenu'
          }]
        }
      });
      plainForm.render();
      plainForm.htmlComp.pack(); // <-- great!
    }
  }]);

  return Desktop;
}(_eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["Desktop"]);

/***/ }),

/***/ "./src/desktop/DesktopModel.js":
/*!*************************************!*\
  !*** ./src/desktop/DesktopModel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return {
    objectType: 'Desktop',
    navigationVisible: false,
    headerVisible: false,
    splitterVisible: false,
    navigationHandleVisible: false
  };
});

/***/ }),

/***/ "./src/form/PlainForm.js":
/*!*******************************!*\
  !*** ./src/form/PlainForm.js ***!
  \*******************************/
/*! exports provided: PlainForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlainForm", function() { return PlainForm; });
/* harmony import */ var _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eclipse-scout/core */ "./node_modules/@eclipse-scout/core/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PlainForm = /*#__PURE__*/function (_ScoutForm) {
  _inherits(PlainForm, _ScoutForm);

  var _super = _createSuper(PlainForm);

  function PlainForm() {
    var _this;

    _classCallCheck(this, PlainForm);

    _this = _super.call(this);
    _this.$domParent = null;
    _this.displayHint = _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["Form"].DisplayHint.VIEW; // Avoid problems with isDialog() cases in super class

    return _this;
  }

  _createClass(PlainForm, [{
    key: "_renderForm",
    value: function _renderForm() {
      this.$domParent.empty(); // Clear existing DOM

      this.$container = this.$domParent.addClass('form').data('model', this);

      if (this.uiCssClass) {
        this.$container.addClass(this.uiCssClass);
      }

      this.htmlComp = _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["HtmlComponent"].install(this.$container, this.session);
      this.htmlComp.setLayout(new _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["FormLayout"](this));
      this.rootGroupBox.render();
    }
  }, {
    key: "_enhanceSmartField",
    value: function _enhanceSmartField(field) {
      var $field = field.$field;
      $field.attr('name', field.id + '.text');
      var $container = field.$container;
      var $hidden = $container.find('input[type="hidden"]');

      if (!$hidden.length) {
        $container.appendElement('<input>').attr('name', field.id).attr('type', 'hidden').val(field.value);
      }
    }
  }, {
    key: "_enhanceValueField",
    value: function _enhanceValueField(field) {
      field.$field.attr('name', field.id);
    }
  }, {
    key: "_save",
    value: function _save(data) {
      var _this2 = this;

      if (!this.$container.is('form')) {
        return _get(_getPrototypeOf(PlainForm.prototype), "_save", this).call(this, data);
      } // Go through all fields and add a "name" attribute, which is required for POST
      // This should be added in Scouts ValueField.js, also the "hidden" field feature
      // to submit the value of the SmartField


      this.visitFields(function (field) {
        if (!field.rendered) {
          return;
        }

        if (field instanceof _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["SmartField"]) {
          _this2._enhanceSmartField(field);
        } else if (field instanceof _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["ValueField"]) {
          _this2._enhanceValueField(field);
        }
      });
      var $form = this.$container;
      $form.submit();
      return $.resolvedPromise();
    }
  }]);

  return PlainForm;
}(_eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["Form"]);

/***/ }),

/***/ "./src/form/RestLookupCall.js":
/*!************************************!*\
  !*** ./src/form/RestLookupCall.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RestLookupCall; });
/* harmony import */ var _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eclipse-scout/core */ "./node_modules/@eclipse-scout/core/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // Copy/paste from RestLookupCall (should be public in later Scout releases)

var RestLookupCall = /*#__PURE__*/function (_LookupCall) {
  _inherits(RestLookupCall, _LookupCall);

  var _super = _createSuper(RestLookupCall);

  function RestLookupCall() {
    var _this;

    _classCallCheck(this, RestLookupCall);

    _this = _super.call(this);
    _this.resourceUrl = null;
    _this.maxTextLength = null; // for predefined restrictions only (e.g. in JSON or sub-classes), don't change this attribute! this instance is shared with all clones!

    _this.restriction = null; // dynamically added restrictions. after setting this attribute, this instance is shared with all following clones!

    _this._restriction = null;
    _this._ajaxCall = null;
    _this._deferred = null; // RestLookupCall implements getByKeys

    _this.batch = true;
    return _this;
  }
  /**
   * Use this function with caution! Added restrictions will be shared among cloned instances
   * and the current instance if this function was also called before cloning!
   */


  _createClass(RestLookupCall, [{
    key: "addRestriction",
    value: function addRestriction(key, value) {
      if (!this._restriction) {
        this._restriction = {};
      }

      this._restriction[key] = value;
    }
  }, {
    key: "_getAll",
    value: function _getAll() {
      return this._call();
    }
  }, {
    key: "_getByText",
    value: function _getByText(text) {
      this.addRestriction('text', text);
      return this._call();
    }
  }, {
    key: "_getByKey",
    value: function _getByKey(key) {
      this.addRestriction('ids', _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["arrays"].ensure(key));
      return this._call();
    }
  }, {
    key: "_getByKeys",
    value: function _getByKeys(keys) {
      this.addRestriction('ids', _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["arrays"].ensure(keys));
      return this._call();
    }
  }, {
    key: "cloneForAll",
    value: function cloneForAll() {
      var clone = _get(_getPrototypeOf(RestLookupCall.prototype), "cloneForAll", this).call(this);

      clone.addRestriction('active', true);
      return clone;
    }
  }, {
    key: "cloneForText",
    value: function cloneForText(text) {
      var clone = _get(_getPrototypeOf(RestLookupCall.prototype), "cloneForText", this).call(this, text);

      clone.addRestriction('active', true);
      return clone;
    }
  }, {
    key: "_acceptLookupRow",
    value: function _acceptLookupRow(lookupRowDo) {
      return true;
    }
  }, {
    key: "_createLookupRowFromDo",
    value: function _createLookupRowFromDo(lookupRowDo) {
      // propagate all properties from lookup row do to scout lookup row (there might be custom ones on specific lookup row dos)
      var clonedLookupRowDo = $.extend({}, lookupRowDo); // text, enabled and active are the same for Scout LookupRow and Studio LookupRowDo
      // id -> key

      clonedLookupRowDo.key = clonedLookupRowDo.id;
      delete clonedLookupRowDo.id; // parentId -> parentKey

      clonedLookupRowDo.parentKey = clonedLookupRowDo.parentId;
      delete clonedLookupRowDo.parentId; // unused on Scout LookupRow

      delete clonedLookupRowDo._type;

      if (this.maxTextLength) {
        var text = clonedLookupRowDo.text;

        if (text.length > this.maxTextLength) {
          clonedLookupRowDo.text = text.substr(0, this.maxTextLength) + '...';
          clonedLookupRowDo.tooltipText = text;
        }
      }

      return scout.create('LookupRow', clonedLookupRowDo);
    }
  }, {
    key: "_call",
    value: function _call() {
      var _this2 = this;

      this._deferred = $.Deferred();
      this._ajaxCall = this._createAjaxCall();

      this._ajaxCall.call().then(function (genericData, textStatus, jqXHR) {
        var data = _this2._mapDataToLookupRows(genericData);

        var lookupRows = _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["arrays"].ensure(data ? data.rows : null).filter(_this2._acceptLookupRow.bind(_this2)).map(_this2._createLookupRowFromDo.bind(_this2));

        _this2._deferred.resolve({
          queryBy: _this2.queryBy,
          text: _this2.searchText,
          key: _this2.key,
          lookupRows: lookupRows
        });
      }).catch(function (ajaxError) {
        _this2._deferred.resolve({
          queryBy: _this2.queryBy,
          text: _this2.searchText,
          key: _this2.key,
          lookupRows: [],
          exception: _this2.session.text('ErrorWhileLoadingData')
        });
      });

      return this._deferred.promise();
    }
  }, {
    key: "_mapDataToLookupRows",
    value: function _mapDataToLookupRows(genericData) {
      return [];
    }
  }, {
    key: "abort",
    value: function abort() {
      this._deferred.reject({
        canceled: true
      });

      this._ajaxCall.abort();

      _get(_getPrototypeOf(RestLookupCall.prototype), "abort", this).call(this);
    }
  }, {
    key: "_getCallUrl",
    value: function _getCallUrl() {
      return this.resourceUrl;
    }
  }, {
    key: "_createAjaxCall",
    value: function _createAjaxCall() {
      var url = this._getCallUrl();

      var data = this.restriction || this._restriction ? JSON.stringify($.extend({}, this.restriction, this._restriction)) : null;
      var ajaxOptions = {
        type: 'GET',
        data: data,
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        cache: false,
        url: url,
        timeout: 0
      };
      return scout.create('AjaxCall', {
        ajaxOptions: ajaxOptions,
        name: 'RestLookupCall',
        retryIntervals: [100, 500, 500, 500]
      }, {
        ensureUniqueId: false
      });
    }
  }]);

  return RestLookupCall;
}(_eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["LookupCall"]);



/***/ }),

/***/ "./src/form/SwapiLookupCall.js":
/*!*************************************!*\
  !*** ./src/form/SwapiLookupCall.js ***!
  \*************************************/
/*! exports provided: SwapiLookupCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiLookupCall", function() { return SwapiLookupCall; });
/* harmony import */ var _RestLookupCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RestLookupCall */ "./src/form/RestLookupCall.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var SwapiLookupCall = /*#__PURE__*/function (_RestLookupCall) {
  _inherits(SwapiLookupCall, _RestLookupCall);

  var _super = _createSuper(SwapiLookupCall);

  function SwapiLookupCall() {
    var _this;

    _classCallCheck(this, SwapiLookupCall);

    _this = _super.call(this);
    _this.resourceUrl = 'https://swapi.dev/api/people/';
    return _this;
  }

  _createClass(SwapiLookupCall, [{
    key: "_mapDataToLookupRows",
    value: function _mapDataToLookupRows(genericData) {
      if (!genericData || !genericData.results) {
        return [];
      }

      var rows = genericData.results.map(function (result) {
        return {
          key: result.url,
          text: result.name
        };
      });
      return {
        rows: rows
      };
    }
  }, {
    key: "_createLookupRowFromDo",
    value: function _createLookupRowFromDo(model) {
      return scout.create('LookupRow', model);
    }
  }]);

  return SwapiLookupCall;
}(_RestLookupCall__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/my-app.js":
/*!***********************!*\
  !*** ./src/my-app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eclipse-scout/core */ "./node_modules/@eclipse-scout/core/src/index.js");
/* harmony import */ var _desktop_Desktop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop/Desktop */ "./src/desktop/Desktop.js");
/* harmony import */ var _form_PlainForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/PlainForm */ "./src/form/PlainForm.js");
/* harmony import */ var _LabApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LabApp */ "./src/LabApp.js");
/* harmony import */ var _form_SwapiLookupCall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/SwapiLookupCall */ "./src/form/SwapiLookupCall.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






window.lab = _extends(window.lab || {}, {
  PlainForm: _form_PlainForm__WEBPACK_IMPORTED_MODULE_2__["PlainForm"],
  SwapiLookupCall: _form_SwapiLookupCall__WEBPACK_IMPORTED_MODULE_4__["SwapiLookupCall"]
});
_eclipse_scout_core__WEBPACK_IMPORTED_MODULE_0__["scout"].addObjectFactories({
  'Desktop': function Desktop() {
    return new _desktop_Desktop__WEBPACK_IMPORTED_MODULE_1__["Desktop"]();
  }
});
new _LabApp__WEBPACK_IMPORTED_MODULE_3__["LabApp"]().init();

/***/ }),

/***/ "./src/parser/DomParser.js":
/*!*********************************!*\
  !*** ./src/parser/DomParser.js ***!
  \*********************************/
/*! exports provided: DomParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomParser", function() { return DomParser; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eclipse_scout_core_src_util_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eclipse-scout/core/src/util/objects */ "./node_modules/@eclipse-scout/core/src/util/objects.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SCOUT_ATTRIBUTE_PREFIX = 'scout';
var SCOUT_ATTRIBUTE_NAME_REGEX = /^scout(.+)$/;
var SELECTOR_ATTRIBUTE_REGEX = /^\$\((.+)\)$/; // FIXME: der Studio content parser hat keine Freude an Selectoren in den data-scout Attributen

var ARRAY_SELECTOR_ATTRIBUTE_REGEX = /^\[\$\((.+)\)]$/;
var OBJ_ATTRIBUTE_REGEX = /^obj:(.+)$/;
var UTIL_ATTRIBUTE_REGEX = /^util:(.+)$/;
var DEFAULT_ATTRIBUTE_REGEX = /(.*)/;
var DomParser = /*#__PURE__*/function () {
  /**
   * @param {HTMLElement} element
   */
  function DomParser(element) {
    _classCallCheck(this, DomParser);

    this._$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    this._model = this._initModelByAttributes();
  }
  /**
   * @returns {{}}
   * @private
   */


  _createClass(DomParser, [{
    key: "_initModelByAttributes",
    value: function _initModelByAttributes() {
      var data = this._$element.data();

      var model = {};

      for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (!key.startsWith(SCOUT_ATTRIBUTE_PREFIX)) {
          continue;
        }

        var name = this._parseAttributeName(key);

        model[name] = this._parseAttributeValue(value);
      }

      return model;
    }
    /**
     * @param {string} nameToParse
     * @returns {string}
     * @private
     */

  }, {
    key: "_parseAttributeName",
    value: function _parseAttributeName(nameToParse) {
      var name = SCOUT_ATTRIBUTE_NAME_REGEX.exec(nameToParse)[1];
      return name.charAt(0).toLowerCase() + name.substring(1);
    }
    /**
     * @param {string} value
     * @returns {{}|string}
     * @private
     */

  }, {
    key: "_parseAttributeValue",
    value: function _parseAttributeValue(value) {
      var _this = this;

      var parserRegistry = [[SELECTOR_ATTRIBUTE_REGEX, function (value) {
        return _this._parseSelectorAttributeValue(value);
      }], [ARRAY_SELECTOR_ATTRIBUTE_REGEX, function (value) {
        return _this._parseArraySelectorAttributeValue(value);
      }], [OBJ_ATTRIBUTE_REGEX, function (value) {
        return _this._parseObjectAttributeValue(value);
      }], [UTIL_ATTRIBUTE_REGEX, function (value) {
        return _this._parseUtilAttributeValue(value);
      }], [DEFAULT_ATTRIBUTE_REGEX, function (value) {
        return value;
      }]];

      for (var _i2 = 0, _parserRegistry = parserRegistry; _i2 < _parserRegistry.length; _i2++) {
        var parser = _parserRegistry[_i2];
        var testRegEx = parser[0];
        var parserFunc = parser[1];

        if (testRegEx.test(value)) {
          return parserFunc(value);
        }
      }
    }
    /**
     * @param {string} value
     * @returns {{}}
     * @private
     */

  }, {
    key: "_parseSelectorAttributeValue",
    value: function _parseSelectorAttributeValue(value) {
      var selector = SELECTOR_ATTRIBUTE_REGEX.exec(value)[1];

      var target = this._$element.find(selector).get();

      return new DomParser(target).toScoutModel();
    }
    /**
     * @param {string} value
     * @returns {[{}]}
     * @private
     */

  }, {
    key: "_parseArraySelectorAttributeValue",
    value: function _parseArraySelectorAttributeValue(value) {
      var selector = ARRAY_SELECTOR_ATTRIBUTE_REGEX.exec(value)[1];
      return this._$element.find(selector).map(function (_, target) {
        return new DomParser(target).toScoutModel();
      }).get();
    }
    /**
     * @param {string} value
     * @returns {*}
     * @private
     */

  }, {
    key: "_parseObjectAttributeValue",
    value: function _parseObjectAttributeValue(value) {
      var code = OBJ_ATTRIBUTE_REGEX.exec(value)[1];
      var func = new Function("return ".concat(code));
      return func();
    }
    /**
     * Don't support JavaScript code execution anymore. Caused problems with Studio content parser,
     * which tries to replace link placeholders in scout attributes, like [0]. Also this would not
     * pass a security review: we must never evaluate code directly.
     *
     * @param {string} value
     * @returns {*}
     * @private
     */

  }, {
    key: "_parseUtilAttributeValue",
    value: function _parseUtilAttributeValue(value) {
      var utilFunction = UTIL_ATTRIBUTE_REGEX.exec(value)[1];

      if (!_eclipse_scout_core_src_util_objects__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(this[utilFunction])) {
        throw new Error('Function "' + utilFunction + '" is not defined in DomParser');
      }

      return this[utilFunction](this._$element);
    }
    /**
     * @returns {{}}
     */

  }, {
    key: "toScoutModel",
    value: function toScoutModel() {
      return this._model;
    }
    /**
     * @param {jquery} $element
     * @returns {string}
     */

  }, {
    key: "label",
    value: function label($element) {
      return $element.find('label')[0].innerHTML;
    }
    /**
     * @param {jquery} $element
     * @returns {string}
     */

  }, {
    key: "required",
    value: function required($element) {
      return $element.find('input').prop('required');
    }
    /**
     * @param {jquery} $element
     * @returns {string}
     */

  }, {
    key: "id",
    value: function id($element) {
      return $element.find('input').attr('id');
    }
  }]);

  return DomParser;
}();

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGFiQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXNrdG9wL0Rlc2t0b3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2t0b3AvRGVza3RvcE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9mb3JtL1BsYWluRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS9SZXN0TG9va3VwQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS9Td2FwaUxvb2t1cENhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215LWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFyc2VyL0RvbVBhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm15LWFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gdGhpc1tcIndlYnBhY2tKc29ucFwiXSA9IHRoaXNbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbXktYXBwLmpzXCIsXCJqcXVlcnlcIixcImVjbGlwc2Utc2NvdXRcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQge0FwcH0gZnJvbSBcIkBlY2xpcHNlLXNjb3V0L2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIExhYkFwcCBleHRlbmRzIEFwcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBfYmVmb3JlQWpheENhbGwocmVxdWVzdCkge1xuICAgICAgICAvLyBOT1AgLSBvdmVycmlkZSBiYWQgZGVmYXVsdHMgZnJvbSBTY291dCBBcHAuanMgLSBub3QgZXZlcnkgc2VydmVyIGxpa2VzIEJTSSBzcGVjaWZpYyBTY291dCBoZWFkZXJzXG4gICAgfVxuXG59IiwiaW1wb3J0IHtEZXNrdG9wIGFzIFNjb3V0RGVza3RvcCwgR3JvdXBCb3gsIEh0bWxDb21wb25lbnQsIG1vZGVscywgVGV4dE1hcH0gZnJvbSAnQGVjbGlwc2Utc2NvdXQvY29yZSc7XG5pbXBvcnQgRGVza3RvcE1vZGVsIGZyb20gJy4vRGVza3RvcE1vZGVsJztcbmltcG9ydCB7RG9tUGFyc2VyfSBmcm9tICcuLi9wYXJzZXIvRG9tUGFyc2VyJztcblxuZXhwb3J0IGNsYXNzIERlc2t0b3AgZXh0ZW5kcyBTY291dERlc2t0b3Age1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgX2pzb25Nb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIG1vZGVscy5nZXQoRGVza3RvcE1vZGVsKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKCkge1xuICAgICAgICB0aGlzLiRjb250YWluZXIgPSB0aGlzLiRwYXJlbnQ7XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcygnZGVza3RvcCcpO1xuICAgICAgICB0aGlzLmh0bWxDb21wID0gSHRtbENvbXBvbmVudC5pbnN0YWxsKHRoaXMuJGNvbnRhaW5lciwgdGhpcy5zZXNzaW9uKTtcbiAgICAgICAgdGhpcy5odG1sQ29tcC5zZXRMYXlvdXQodGhpcy5fY3JlYXRlTGF5b3V0KCkpO1xuXG4gICAgICAgIC8vIEF0dGFjaCByZXNpemUgbGlzdGVuZXIgYmVmb3JlIG90aGVyIGVsZW1lbnRzIGNhbiBhZGQgdGhlaXIgb3duIHJlc2l6ZSBsaXN0ZW5lciAoZS5nLiBhbiBhZGRvbikgdG8gbWFrZSBzdXJlIGl0IGlzIGV4ZWN1dGVkIGZpcnN0XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci53aW5kb3coKVxuICAgICAgICAgICAgLm9uKCdyZXNpemUnLCB0aGlzLl9yZXNpemVIYW5kbGVyKVxuICAgICAgICAgICAgLm9uKCdwb3BzdGF0ZScsIHRoaXMuX3BvcHN0YXRlSGFuZGxlcik7XG5cbiAgICAgICAgLy8gRGVza3RvcCBlbGVtZW50cyBhcmUgYWRkZWQgYmVmb3JlIHRoaXMgc2VwYXJhdG9yLCBhbGwgb3ZlcmxheXMgYXJlIG9wZW5lZCBhZnRlciAoZGlhbG9ncywgcG9wdXBzLCB0b29sdGlwcyBldGMuKVxuICAgICAgICB0aGlzLiRvdmVybGF5U2VwYXJhdG9yID0gdGhpcy4kY29udGFpbmVyLmFwcGVuZERpdignb3ZlcmxheS1zZXBhcmF0b3InKS5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJUaXRsZSgpO1xuICAgIH1cblxuICAgIF9wb3N0UmVuZGVyKCkge1xuICAgICAgICBzdXBlci5fcG9zdFJlbmRlcigpO1xuXG4gICAgICAgIC8vIENoZWNrIGhvdyB0byBpbml0IHRleHRzIHByb3BlcnR5ICh3ZSBkb24ndCB3YW50IHRvIGxvYWQgdGhlbSB2aWEgSFRUUCwgdGhleSBzaG91bGQgYmUgXCJiYWtlZFwiIGludG9cbiAgICAgICAgLy8gdGhlIGFwcGxpY2F0aW9uKS5cbiAgICAgICAgdGhpcy5zZXNzaW9uLnRleHRNYXAgPSBuZXcgVGV4dE1hcCh7XG4gICAgICAgICAgICBPazogJ09rJyxcbiAgICAgICAgICAgIE9rQnV0dG9uOiAnT2snLFxuICAgICAgICAgICAgUmVzZXRCdXR0b246ICdSZXNldCcsXG4gICAgICAgICAgICBDYW5jZWxCdXR0b246ICdDYW5jZWwnLFxuICAgICAgICAgICAgRm9ybUVtcHR5TWFuZGF0b3J5RmllbGRzTWVzc2FnZTogJ1RoZSBmb2xsb3dpbmcgZmllbGRzIGFyZSByZXF1aXJlZDonLFxuICAgICAgICAgICAgJ3VpLkNvcHlUb0NsaXBib2FyZFN1Y2Nlc3NTdGF0dXMnOiAnQ29waWVkIHRvIGNsaXBib2FyZCcsXG4gICAgICAgICAgICBTbWFydEZpZWxkTm9EYXRhRm91bmQ6ICdObyBkYXRhIGF2YWlsYWJsZScsXG4gICAgICAgICAgICBGb3JtU2F2ZUNoYW5nZXNRdWVzdGlvbjogJ0RvIHlvdSB3YW50IHRvIHNhdmUgdGhlIGNoYW5nZXM/JyxcbiAgICAgICAgICAgIFllczogJ1llcycsXG4gICAgICAgICAgICBObzogJ05vJyxcbiAgICAgICAgICAgIENhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBJbnZhbGlkTnVtYmVyTWVzc2FnZVg6ICdcInswfVwiIGlzIGFuIGludmFsaWQgbnVtYmVyJyxcbiAgICAgICAgICAgIEZvcm1JbnZhbGlkRmllbGRzTWVzc2FnZTogJ1RoZSBmb2xsb3dpbmcgZmllbGRzIGFyZSBpbnZhbGlkXFw6J1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBOZXZlciBtYWtlIGEgZ2xhc3MgcGFuZSFcbiAgICAgICAgdGhpcy5hZGRHbGFzc1BhbmVUYXJnZXRGaWx0ZXIoKCkgPT4gZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlckR5bmFtaWNGb3JtcygpO1xuICAgICAgICB0aGlzLl9yZW5kZXJTdGF0aWNGb3JtKCk7XG4gICAgfVxuXG4gICAgX3JlbmRlckR5bmFtaWNGb3JtcygpIHtcbiAgICAgICAgbGV0ICRmb3JtcyA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCdbZGF0YS1zY291dC1vYmplY3QtdHlwZT1cImxhYi5QbGFpbkZvcm1cIl0nKTtcbiAgICAgICAgbGV0IGRlc2t0b3AgPSB0aGlzO1xuICAgICAgICAkZm9ybXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCAkZm9ybSA9ICQodGhpcyk7XG4gICAgICAgICAgICBsZXQgZm9ybU1vZGVsID0gbmV3IERvbVBhcnNlcigkZm9ybSkudG9TY291dE1vZGVsKCk7XG4gICAgICAgICAgICBsZXQgZm9ybSA9IHNjb3V0LmNyZWF0ZSgnbGFiLlBsYWluRm9ybScsICQuZXh0ZW5kKGZvcm1Nb2RlbCwge1xuICAgICAgICAgICAgICAgIHBhcmVudDogZGVza3RvcCxcbiAgICAgICAgICAgICAgICAkZG9tUGFyZW50OiAkZm9ybVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgZm9ybS5yZW5kZXIoKTtcbiAgICAgICAgICAgIGZvcm0uaHRtbENvbXAucGFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhpcyBIVE1MIGNvZGUgdG8gdGhlIGluZGV4LmhtdGwsIGlmIHlvdSBuZWVkIGEgc3RhdGljIGZvcm1cbiAgICAgKlxuICAgICAqIDxici8+U3RhdGljIGZvcm06XG4gICAgICogPGZvcm0gY2xhc3M9XCJ1bmljb3JuLWZvcm0gc2luZ2xlLWNvbHVtbi1mb3JtXCIgaWQ9XCJTdGF0aWNGb3JtXCIgbWV0aG9kPVwiZ2V0XCI+XG4gICAgICogJmx0Oy0tIFNjb3V0IEZvcm0gd2lsbCBiZSBpbnNlcnRlZCBoZXJlIC0tJmd0O1xuICAgICAqIDwvZm9ybT5cbiAgICAgKi9cbiAgICBfcmVuZGVyU3RhdGljRm9ybSgpIHtcbiAgICAgICAgbGV0ICRmb3JtRGl2ID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJyNTdGF0aWNGb3JtJyk7XG4gICAgICAgIGlmICghJGZvcm1EaXYubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gcGxhY2Vob2xkZXIgZm91bmQgZm9yICNTdGF0aWNGb3JtIC0tPiBza2lwJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGxhaW5Gb3JtID0gc2NvdXQuY3JlYXRlKCdsYWIuUGxhaW5Gb3JtJywge1xuICAgICAgICAgICAgaWQ6ICdQbGFpbkZvcm0nLFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICAgICAgJGRvbVBhcmVudDogJGZvcm1EaXYsIC8vIDwtLSBjb250cm9sIHRoZSBwYXJlbnRcbiAgICAgICAgICAgIHJvb3RHcm91cEJveDoge1xuICAgICAgICAgICAgICAgIGlkOiAnTWFpbkJveCcsXG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogJ0dyb3VwQm94JyxcbiAgICAgICAgICAgICAgICBtYWluQm94OiB0cnVlLFxuICAgICAgICAgICAgICAgIGdyaWRDb2x1bW5Db3VudDogMSxcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnbmFtZScsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6ICdTdHJpbmdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnWW91ciBuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogJ051bWJlckZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdZb3VyIGFnZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdjaGFyYWN0ZXInLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3RUeXBlOiAnU21hcnRGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnWW91ciBjaGFyYWN0ZXInLFxuICAgICAgICAgICAgICAgICAgICBsb29rdXBDYWxsOiAnbGFiLlN3YXBpTG9va3VwQ2FsbCdcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBtZW51QmFyUG9zaXRpb246IEdyb3VwQm94Lk1lbnVCYXJQb3NpdGlvbi5CT1RUT00sXG4gICAgICAgICAgICAgICAgbWVudXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdPa01lbnUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZTogJ09rTWVudSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdDYW5jZWxNZW51JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGU6ICdDYW5jZWxNZW51J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcGxhaW5Gb3JtLnJlbmRlcigpO1xuICAgICAgICBwbGFpbkZvcm0uaHRtbENvbXAucGFjaygpOyAvLyA8LS0gZ3JlYXQhXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgICBvYmplY3RUeXBlOiAnRGVza3RvcCcsXG4gICAgbmF2aWdhdGlvblZpc2libGU6IGZhbHNlLFxuICAgIGhlYWRlclZpc2libGU6IGZhbHNlLFxuICAgIHNwbGl0dGVyVmlzaWJsZTogZmFsc2UsXG4gICAgbmF2aWdhdGlvbkhhbmRsZVZpc2libGU6IGZhbHNlXG59KTtcbiIsImltcG9ydCB7Rm9ybSBhcyBTY291dEZvcm0sIEZvcm1MYXlvdXQsIEh0bWxDb21wb25lbnQsIFNtYXJ0RmllbGQsIFZhbHVlRmllbGR9IGZyb20gXCJAZWNsaXBzZS1zY291dC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGFpbkZvcm0gZXh0ZW5kcyBTY291dEZvcm0ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuJGRvbVBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlzcGxheUhpbnQgPSBTY291dEZvcm0uRGlzcGxheUhpbnQuVklFVzsgLy8gQXZvaWQgcHJvYmxlbXMgd2l0aCBpc0RpYWxvZygpIGNhc2VzIGluIHN1cGVyIGNsYXNzXG4gICAgfVxuXG4gICAgX3JlbmRlckZvcm0oKSB7XG4gICAgICAgIHRoaXMuJGRvbVBhcmVudC5lbXB0eSgpOyAvLyBDbGVhciBleGlzdGluZyBET01cblxuICAgICAgICB0aGlzLiRjb250YWluZXIgPSB0aGlzLiRkb21QYXJlbnRcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZm9ybScpXG4gICAgICAgICAgICAuZGF0YSgnbW9kZWwnLCB0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy51aUNzc0NsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3ModGhpcy51aUNzc0NsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaHRtbENvbXAgPSBIdG1sQ29tcG9uZW50Lmluc3RhbGwodGhpcy4kY29udGFpbmVyLCB0aGlzLnNlc3Npb24pO1xuICAgICAgICB0aGlzLmh0bWxDb21wLnNldExheW91dChuZXcgRm9ybUxheW91dCh0aGlzKSk7XG4gICAgICAgIHRoaXMucm9vdEdyb3VwQm94LnJlbmRlcigpO1xuICAgIH1cblxuICAgIF9lbmhhbmNlU21hcnRGaWVsZChmaWVsZCkge1xuICAgICAgICBsZXQgJGZpZWxkID0gZmllbGQuJGZpZWxkO1xuICAgICAgICAkZmllbGQuYXR0cignbmFtZScsIGZpZWxkLmlkICsgJy50ZXh0Jyk7XG4gICAgICAgIGxldCAkY29udGFpbmVyID0gZmllbGQuJGNvbnRhaW5lcjtcbiAgICAgICAgbGV0ICRoaWRkZW4gPSAkY29udGFpbmVyLmZpbmQoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcbiAgICAgICAgaWYgKCEkaGlkZGVuLmxlbmd0aCkge1xuICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmRFbGVtZW50KCc8aW5wdXQ+JylcbiAgICAgICAgICAgICAgICAuYXR0cignbmFtZScsIGZpZWxkLmlkKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgLnZhbChmaWVsZC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZW5oYW5jZVZhbHVlRmllbGQoZmllbGQpIHtcbiAgICAgICAgZmllbGQuJGZpZWxkLmF0dHIoJ25hbWUnLCBmaWVsZC5pZCk7XG4gICAgfVxuXG4gICAgX3NhdmUoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuJGNvbnRhaW5lci5pcygnZm9ybScpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuX3NhdmUoZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHbyB0aHJvdWdoIGFsbCBmaWVsZHMgYW5kIGFkZCBhIFwibmFtZVwiIGF0dHJpYnV0ZSwgd2hpY2ggaXMgcmVxdWlyZWQgZm9yIFBPU1RcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgYmUgYWRkZWQgaW4gU2NvdXRzIFZhbHVlRmllbGQuanMsIGFsc28gdGhlIFwiaGlkZGVuXCIgZmllbGQgZmVhdHVyZVxuICAgICAgICAvLyB0byBzdWJtaXQgdGhlIHZhbHVlIG9mIHRoZSBTbWFydEZpZWxkXG4gICAgICAgIHRoaXMudmlzaXRGaWVsZHMoZmllbGQgPT4ge1xuICAgICAgICAgICAgaWYgKCFmaWVsZC5yZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIFNtYXJ0RmllbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmhhbmNlU21hcnRGaWVsZChmaWVsZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkIGluc3RhbmNlb2YgVmFsdWVGaWVsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VuaGFuY2VWYWx1ZUZpZWxkKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0ICRmb3JtID0gdGhpcy4kY29udGFpbmVyO1xuICAgICAgICAkZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgcmV0dXJuICQucmVzb2x2ZWRQcm9taXNlKCk7XG4gICAgfVxufSIsImltcG9ydCB7IGFycmF5cywgTG9va3VwQ2FsbCB9IGZyb20gXCJAZWNsaXBzZS1zY291dC9jb3JlXCI7XG5cbi8vIENvcHkvcGFzdGUgZnJvbSBSZXN0TG9va3VwQ2FsbCAoc2hvdWxkIGJlIHB1YmxpYyBpbiBsYXRlciBTY291dCByZWxlYXNlcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RMb29rdXBDYWxsIGV4dGVuZHMgTG9va3VwQ2FsbCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVVybCA9IG51bGw7XG4gICAgICAgIHRoaXMubWF4VGV4dExlbmd0aCA9IG51bGw7XG5cbiAgICAgICAgLy8gZm9yIHByZWRlZmluZWQgcmVzdHJpY3Rpb25zIG9ubHkgKGUuZy4gaW4gSlNPTiBvciBzdWItY2xhc3NlcyksIGRvbid0IGNoYW5nZSB0aGlzIGF0dHJpYnV0ZSEgdGhpcyBpbnN0YW5jZSBpcyBzaGFyZWQgd2l0aCBhbGwgY2xvbmVzIVxuICAgICAgICB0aGlzLnJlc3RyaWN0aW9uID0gbnVsbDtcblxuICAgICAgICAvLyBkeW5hbWljYWxseSBhZGRlZCByZXN0cmljdGlvbnMuIGFmdGVyIHNldHRpbmcgdGhpcyBhdHRyaWJ1dGUsIHRoaXMgaW5zdGFuY2UgaXMgc2hhcmVkIHdpdGggYWxsIGZvbGxvd2luZyBjbG9uZXMhXG4gICAgICAgIHRoaXMuX3Jlc3RyaWN0aW9uID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9hamF4Q2FsbCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2RlZmVycmVkID0gbnVsbDtcblxuICAgICAgICAvLyBSZXN0TG9va3VwQ2FsbCBpbXBsZW1lbnRzIGdldEJ5S2V5c1xuICAgICAgICB0aGlzLmJhdGNoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB3aXRoIGNhdXRpb24hIEFkZGVkIHJlc3RyaWN0aW9ucyB3aWxsIGJlIHNoYXJlZCBhbW9uZyBjbG9uZWQgaW5zdGFuY2VzXG4gICAgICogYW5kIHRoZSBjdXJyZW50IGluc3RhbmNlIGlmIHRoaXMgZnVuY3Rpb24gd2FzIGFsc28gY2FsbGVkIGJlZm9yZSBjbG9uaW5nIVxuICAgICAqL1xuICAgIGFkZFJlc3RyaWN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yZXN0cmljdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fcmVzdHJpY3Rpb24gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXN0cmljdGlvbltrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgX2dldEFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGwoKTtcbiAgICB9XG5cbiAgICBfZ2V0QnlUZXh0KHRleHQpIHtcbiAgICAgICAgdGhpcy5hZGRSZXN0cmljdGlvbigndGV4dCcsIHRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbCgpO1xuICAgIH1cblxuICAgIF9nZXRCeUtleShrZXkpIHtcbiAgICAgICAgdGhpcy5hZGRSZXN0cmljdGlvbignaWRzJywgYXJyYXlzLmVuc3VyZShrZXkpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGwoKTtcbiAgICB9XG5cbiAgICBfZ2V0QnlLZXlzKGtleXMpIHtcbiAgICAgICAgdGhpcy5hZGRSZXN0cmljdGlvbignaWRzJywgYXJyYXlzLmVuc3VyZShrZXlzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsKCk7XG4gICAgfVxuXG4gICAgY2xvbmVGb3JBbGwoKSB7XG4gICAgICAgIGxldCBjbG9uZSA9IHN1cGVyLmNsb25lRm9yQWxsKCk7XG4gICAgICAgIGNsb25lLmFkZFJlc3RyaWN0aW9uKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuICAgIGNsb25lRm9yVGV4dCh0ZXh0KSB7XG4gICAgICAgIGxldCBjbG9uZSA9IHN1cGVyLmNsb25lRm9yVGV4dCh0ZXh0KTtcbiAgICAgICAgY2xvbmUuYWRkUmVzdHJpY3Rpb24oJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG4gICAgX2FjY2VwdExvb2t1cFJvdyhsb29rdXBSb3dEbykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBfY3JlYXRlTG9va3VwUm93RnJvbURvKGxvb2t1cFJvd0RvKSB7XG4gICAgICAgIC8vIHByb3BhZ2F0ZSBhbGwgcHJvcGVydGllcyBmcm9tIGxvb2t1cCByb3cgZG8gdG8gc2NvdXQgbG9va3VwIHJvdyAodGhlcmUgbWlnaHQgYmUgY3VzdG9tIG9uZXMgb24gc3BlY2lmaWMgbG9va3VwIHJvdyBkb3MpXG4gICAgICAgIGxldCBjbG9uZWRMb29rdXBSb3dEbyA9ICQuZXh0ZW5kKHt9LCBsb29rdXBSb3dEbyk7XG4gICAgICAgIC8vIHRleHQsIGVuYWJsZWQgYW5kIGFjdGl2ZSBhcmUgdGhlIHNhbWUgZm9yIFNjb3V0IExvb2t1cFJvdyBhbmQgU3R1ZGlvIExvb2t1cFJvd0RvXG5cbiAgICAgICAgLy8gaWQgLT4ga2V5XG4gICAgICAgIGNsb25lZExvb2t1cFJvd0RvLmtleSA9IGNsb25lZExvb2t1cFJvd0RvLmlkO1xuICAgICAgICBkZWxldGUgY2xvbmVkTG9va3VwUm93RG8uaWQ7XG5cbiAgICAgICAgLy8gcGFyZW50SWQgLT4gcGFyZW50S2V5XG4gICAgICAgIGNsb25lZExvb2t1cFJvd0RvLnBhcmVudEtleSA9IGNsb25lZExvb2t1cFJvd0RvLnBhcmVudElkO1xuICAgICAgICBkZWxldGUgY2xvbmVkTG9va3VwUm93RG8ucGFyZW50SWQ7XG5cbiAgICAgICAgLy8gdW51c2VkIG9uIFNjb3V0IExvb2t1cFJvd1xuICAgICAgICBkZWxldGUgY2xvbmVkTG9va3VwUm93RG8uX3R5cGU7XG5cbiAgICAgICAgaWYgKHRoaXMubWF4VGV4dExlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSBjbG9uZWRMb29rdXBSb3dEby50ZXh0O1xuICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gdGhpcy5tYXhUZXh0TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2xvbmVkTG9va3VwUm93RG8udGV4dCA9IHRleHQuc3Vic3RyKDAsIHRoaXMubWF4VGV4dExlbmd0aCkgKyAnLi4uJztcbiAgICAgICAgICAgICAgICBjbG9uZWRMb29rdXBSb3dEby50b29sdGlwVGV4dCA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2NvdXQuY3JlYXRlKCdMb29rdXBSb3cnLCBjbG9uZWRMb29rdXBSb3dEbyk7XG4gICAgfVxuXG4gICAgX2NhbGwoKSB7XG4gICAgICAgIHRoaXMuX2RlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuICAgICAgICB0aGlzLl9hamF4Q2FsbCA9IHRoaXMuX2NyZWF0ZUFqYXhDYWxsKCk7XG5cbiAgICAgICAgdGhpcy5fYWpheENhbGwuY2FsbCgpXG4gICAgICAgICAgICAudGhlbigoZ2VuZXJpY0RhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9tYXBEYXRhVG9Mb29rdXBSb3dzKGdlbmVyaWNEYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgbG9va3VwUm93cyA9IGFycmF5cy5lbnN1cmUoZGF0YSA/IGRhdGEucm93cyA6IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5fYWNjZXB0TG9va3VwUm93LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5fY3JlYXRlTG9va3VwUm93RnJvbURvLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZmVycmVkLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeUJ5OiB0aGlzLnF1ZXJ5QnksXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgICAgICAgICAgICAgbG9va3VwUm93czogbG9va3VwUm93c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChhamF4RXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZmVycmVkLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeUJ5OiB0aGlzLnF1ZXJ5QnksXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgICAgICAgICAgICAgbG9va3VwUm93czogW10sXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbjogdGhpcy5zZXNzaW9uLnRleHQoJ0Vycm9yV2hpbGVMb2FkaW5nRGF0YScpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZXJyZWQucHJvbWlzZSgpO1xuICAgIH1cblxuICAgIF9tYXBEYXRhVG9Mb29rdXBSb3dzKGdlbmVyaWNEYXRhKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBhYm9ydCgpIHtcbiAgICAgICAgdGhpcy5fZGVmZXJyZWQucmVqZWN0KHtcbiAgICAgICAgICAgIGNhbmNlbGVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9hamF4Q2FsbC5hYm9ydCgpO1xuICAgICAgICBzdXBlci5hYm9ydCgpO1xuICAgIH1cblxuICAgIF9nZXRDYWxsVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVVybDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQWpheENhbGwoKSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLl9nZXRDYWxsVXJsKCk7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5yZXN0cmljdGlvbiB8fCB0aGlzLl9yZXN0cmljdGlvbiA/IEpTT04uc3RyaW5naWZ5KCQuZXh0ZW5kKHt9LCB0aGlzLnJlc3RyaWN0aW9uLCB0aGlzLl9yZXN0cmljdGlvbikpIDogbnVsbDtcbiAgICAgICAgbGV0IGFqYXhPcHRpb25zID0ge1xuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHNjb3V0LmNyZWF0ZSgnQWpheENhbGwnLCB7XG4gICAgICAgICAgICBhamF4T3B0aW9uczogYWpheE9wdGlvbnMsXG4gICAgICAgICAgICBuYW1lOiAnUmVzdExvb2t1cENhbGwnLFxuICAgICAgICAgICAgcmV0cnlJbnRlcnZhbHM6IFsxMDAsIDUwMCwgNTAwLCA1MDBdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVuc3VyZVVuaXF1ZUlkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVzdExvb2t1cENhbGwgZnJvbSBcIi4vUmVzdExvb2t1cENhbGxcIjtcblxuZXhwb3J0IGNsYXNzIFN3YXBpTG9va3VwQ2FsbCBleHRlbmRzIFJlc3RMb29rdXBDYWxsIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlc291cmNlVXJsID0gJ2h0dHBzOi8vc3dhcGkuZGV2L2FwaS9wZW9wbGUvJztcbiAgICB9XG5cbiAgICBfbWFwRGF0YVRvTG9va3VwUm93cyhnZW5lcmljRGF0YSkge1xuICAgICAgICBpZiAoIWdlbmVyaWNEYXRhIHx8ICFnZW5lcmljRGF0YS5yZXN1bHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJvd3MgPSBnZW5lcmljRGF0YS5yZXN1bHRzLm1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBrZXk6IHJlc3VsdC51cmwsXG4gICAgICAgICAgICAgICAgdGV4dDogcmVzdWx0Lm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiByb3dzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUxvb2t1cFJvd0Zyb21Ebyhtb2RlbCkge1xuICAgICAgICByZXR1cm4gc2NvdXQuY3JlYXRlKCdMb29rdXBSb3cnLCBtb2RlbCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBzY291dCB9IGZyb20gJ0BlY2xpcHNlLXNjb3V0L2NvcmUnO1xuaW1wb3J0IHsgRGVza3RvcCB9IGZyb20gJy4vZGVza3RvcC9EZXNrdG9wJztcbmltcG9ydCB7IFBsYWluRm9ybSB9IGZyb20gJy4vZm9ybS9QbGFpbkZvcm0nO1xuaW1wb3J0IHsgTGFiQXBwIH0gZnJvbSAnLi9MYWJBcHAnO1xuaW1wb3J0IHsgU3dhcGlMb29rdXBDYWxsIH0gZnJvbSAnLi9mb3JtL1N3YXBpTG9va3VwQ2FsbCc7XG5cbndpbmRvdy5sYWIgPSBPYmplY3QuYXNzaWduKHdpbmRvdy5sYWIgfHwge30sIHsgUGxhaW5Gb3JtLCBTd2FwaUxvb2t1cENhbGwgfSk7XG5cbnNjb3V0LmFkZE9iamVjdEZhY3Rvcmllcyh7XG4gICAgJ0Rlc2t0b3AnOiAoKSA9PiBuZXcgRGVza3RvcCgpXG59KTtcblxubmV3IExhYkFwcCgpLmluaXQoKTtcblxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBvYmplY3RzIGZyb20gXCJAZWNsaXBzZS1zY291dC9jb3JlL3NyYy91dGlsL29iamVjdHNcIjtcblxuY29uc3QgU0NPVVRfQVRUUklCVVRFX1BSRUZJWCA9ICdzY291dCc7XG5jb25zdCBTQ09VVF9BVFRSSUJVVEVfTkFNRV9SRUdFWCA9IC9ec2NvdXQoLispJC87XG5jb25zdCBTRUxFQ1RPUl9BVFRSSUJVVEVfUkVHRVggPSAvXlxcJFxcKCguKylcXCkkLzsgLy8gRklYTUU6IGRlciBTdHVkaW8gY29udGVudCBwYXJzZXIgaGF0IGtlaW5lIEZyZXVkZSBhbiBTZWxlY3RvcmVuIGluIGRlbiBkYXRhLXNjb3V0IEF0dHJpYnV0ZW5cbmNvbnN0IEFSUkFZX1NFTEVDVE9SX0FUVFJJQlVURV9SRUdFWCA9IC9eXFxbXFwkXFwoKC4rKVxcKV0kLztcbmNvbnN0IE9CSl9BVFRSSUJVVEVfUkVHRVggPSAvXm9iajooLispJC87XG5jb25zdCBVVElMX0FUVFJJQlVURV9SRUdFWCA9IC9edXRpbDooLispJC87XG5jb25zdCBERUZBVUxUX0FUVFJJQlVURV9SRUdFWCA9IC8oLiopLztcblxuZXhwb3J0IGNsYXNzIERvbVBhcnNlciB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl8kZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuX21vZGVsID0gdGhpcy5faW5pdE1vZGVsQnlBdHRyaWJ1dGVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRNb2RlbEJ5QXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl8kZWxlbWVudC5kYXRhKCk7XG4gICAgICAgIGxldCBtb2RlbCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmICgha2V5LnN0YXJ0c1dpdGgoU0NPVVRfQVRUUklCVVRFX1BSRUZJWCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuYW1lID0gdGhpcy5fcGFyc2VBdHRyaWJ1dGVOYW1lKGtleSk7XG4gICAgICAgICAgICBtb2RlbFtuYW1lXSA9IHRoaXMuX3BhcnNlQXR0cmlidXRlVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVRvUGFyc2VcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3BhcnNlQXR0cmlidXRlTmFtZShuYW1lVG9QYXJzZSkge1xuICAgICAgICBsZXQgbmFtZSA9IFNDT1VUX0FUVFJJQlVURV9OQU1FX1JFR0VYLmV4ZWMobmFtZVRvUGFyc2UpWzFdO1xuICAgICAgICByZXR1cm4gbmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHt7fXxzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFyc2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBsZXQgcGFyc2VyUmVnaXN0cnkgPSBbXG4gICAgICAgICAgICBbU0VMRUNUT1JfQVRUUklCVVRFX1JFR0VYLCAodmFsdWUpID0+IHRoaXMuX3BhcnNlU2VsZWN0b3JBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSldLFxuICAgICAgICAgICAgW0FSUkFZX1NFTEVDVE9SX0FUVFJJQlVURV9SRUdFWCwgKHZhbHVlKSA9PiB0aGlzLl9wYXJzZUFycmF5U2VsZWN0b3JBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSldLFxuICAgICAgICAgICAgW09CSl9BVFRSSUJVVEVfUkVHRVgsICh2YWx1ZSkgPT4gdGhpcy5fcGFyc2VPYmplY3RBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSldLFxuICAgICAgICAgICAgW1VUSUxfQVRUUklCVVRFX1JFR0VYLCAodmFsdWUpID0+IHRoaXMuX3BhcnNlVXRpbEF0dHJpYnV0ZVZhbHVlKHZhbHVlKV0sXG4gICAgICAgICAgICBbREVGQVVMVF9BVFRSSUJVVEVfUkVHRVgsICh2YWx1ZSkgPT4gdmFsdWVdLFxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBwYXJzZXIgb2YgcGFyc2VyUmVnaXN0cnkpIHtcbiAgICAgICAgICAgIGxldCB0ZXN0UmVnRXggPSBwYXJzZXJbMF07XG4gICAgICAgICAgICBsZXQgcGFyc2VyRnVuYyA9IHBhcnNlclsxXTtcbiAgICAgICAgICAgIGlmICh0ZXN0UmVnRXgudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VyRnVuYyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFyc2VTZWxlY3RvckF0dHJpYnV0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBzZWxlY3RvciA9IFNFTEVDVE9SX0FUVFJJQlVURV9SRUdFWC5leGVjKHZhbHVlKVsxXTtcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuXyRlbGVtZW50LmZpbmQoc2VsZWN0b3IpLmdldCgpO1xuICAgICAgICByZXR1cm4gbmV3IERvbVBhcnNlcih0YXJnZXQpLnRvU2NvdXRNb2RlbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtbe31dfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3BhcnNlQXJyYXlTZWxlY3RvckF0dHJpYnV0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBzZWxlY3RvciA9IEFSUkFZX1NFTEVDVE9SX0FUVFJJQlVURV9SRUdFWC5leGVjKHZhbHVlKVsxXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRlbGVtZW50LmZpbmQoc2VsZWN0b3IpXG4gICAgICAgICAgICAubWFwKChfLCB0YXJnZXQpID0+IG5ldyBEb21QYXJzZXIodGFyZ2V0KS50b1Njb3V0TW9kZWwoKSlcbiAgICAgICAgICAgIC5nZXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wYXJzZU9iamVjdEF0dHJpYnV0ZVZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBjb2RlID0gT0JKX0FUVFJJQlVURV9SRUdFWC5leGVjKHZhbHVlKVsxXTtcbiAgICAgICAgbGV0IGZ1bmMgPSBuZXcgRnVuY3Rpb24oYHJldHVybiAke2NvZGV9YCk7XG4gICAgICAgIHJldHVybiBmdW5jKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG9uJ3Qgc3VwcG9ydCBKYXZhU2NyaXB0IGNvZGUgZXhlY3V0aW9uIGFueW1vcmUuIENhdXNlZCBwcm9ibGVtcyB3aXRoIFN0dWRpbyBjb250ZW50IHBhcnNlcixcbiAgICAgKiB3aGljaCB0cmllcyB0byByZXBsYWNlIGxpbmsgcGxhY2Vob2xkZXJzIGluIHNjb3V0IGF0dHJpYnV0ZXMsIGxpa2UgWzBdLiBBbHNvIHRoaXMgd291bGQgbm90XG4gICAgICogcGFzcyBhIHNlY3VyaXR5IHJldmlldzogd2UgbXVzdCBuZXZlciBldmFsdWF0ZSBjb2RlIGRpcmVjdGx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFyc2VVdGlsQXR0cmlidXRlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgbGV0IHV0aWxGdW5jdGlvbiA9IFVUSUxfQVRUUklCVVRFX1JFR0VYLmV4ZWModmFsdWUpWzFdO1xuICAgICAgICBpZiAoIW9iamVjdHMuaXNGdW5jdGlvbih0aGlzW3V0aWxGdW5jdGlvbl0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIFwiJyArIHV0aWxGdW5jdGlvbiArICdcIiBpcyBub3QgZGVmaW5lZCBpbiBEb21QYXJzZXInKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1t1dGlsRnVuY3Rpb25dKHRoaXMuXyRlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7e319XG4gICAgICovXG4gICAgdG9TY291dE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtqcXVlcnl9ICRlbGVtZW50XG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBsYWJlbCgkZWxlbWVudCkge1xuICAgICAgcmV0dXJuICRlbGVtZW50LmZpbmQoJ2xhYmVsJylbMF0uaW5uZXJIVE1MO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7anF1ZXJ5fSAkZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcmVxdWlyZWQoJGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICRlbGVtZW50LmZpbmQoJ2lucHV0JykucHJvcCgncmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2pxdWVyeX0gJGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGlkKCRlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAkZWxlbWVudC5maW5kKCdpbnB1dCcpLmF0dHIoJ2lkJyk7XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBUUE7QUFSQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQUFBO0FBQUE7QUE0QkE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBckRBO0FBQUE7QUFBQTtBQXdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlFQTtBQUFBO0FBQUE7QUErRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUE1QkE7QUFKQTtBQXVDQTtBQUNBO0FBQ0E7QUE5SEE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSUE7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUFBO0FBQUE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBbkNBO0FBQUE7QUFBQTtBQXNDQTtBQUNBO0FBdkNBO0FBQUE7QUFBQTtBQXlDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUEvREE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUVBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBZkE7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFEQTtBQUdBOzs7O0FBOUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBcEJBO0FBQUE7QUFBQTtBQXVCQTtBQUNBO0FBeEJBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTtBQUFBO0FBQUE7QUFpQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUNBO0FBQUE7QUFBQTtBQTBDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoRUE7QUFBQTtBQUFBO0FBaUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNFQTtBQUFBO0FBQUE7QUE0RUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZGQTtBQUFBO0FBQUE7QUF3RkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRHQTtBQUFBO0FBQUE7QUF1R0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBakhBO0FBQUE7QUFBQTtBQWtIQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpIQTtBQUFBO0FBQUE7QUEwSEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqSUE7QUFBQTtBQUFBO0FBa0lBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeklBO0FBQUE7QUFBQTtBQTBJQTtBQUNBO0FBM0lBO0FBQ0E7QUFEQTtBQUFBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9