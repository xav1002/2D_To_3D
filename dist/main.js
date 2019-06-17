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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/2Dcanvas.js":
/*!*************************!*\
  !*** ./src/2Dcanvas.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass CANVAS {\n    constructor() {\n        this.canvas = document.createElement('canvas');\n        this.canvas.setAttribute('id', 'mainsvg');\n        this.canvas.setAttribute('height', `${window.innerHeight / 2}`);\n        this.canvas.setAttribute('width', `${window.innerWidth}`);\n        document.body.appendChild(this.canvas);\n\n        this.ctx = this.canvas.getContext('2d');\n\n        this.horizontalRect = [];\n        this.verticalRect = [];\n\n        this.init();\n    }\n\n    init() {\n        const a = this;\n\n        class gamePeice {\n            constructor(x, y) {\n                this.width = a.canvas.width / 20;\n                this.height = a.canvas.height / 10;\n                a.ctx.rect(x, y, this.width, this.height);\n                a.ctx.stroke();\n            }\n        }\n        \n        for(var i = 0; i < 10; i += 1) {\n            for(var j = 0; j < 20; j += 1) {\n                a.verticalRect.push(new gamePeice(j * a.canvas.width / 20, i * a.canvas.height / 10));\n            }\n        }\n\n        console.log(a.verticalRect);\n\n\n\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CANVAS);\n\n//# sourceURL=webpack:///./src/2Dcanvas.js?");

/***/ }),

/***/ "./src/3Dcanvas.js":
/*!*************************!*\
  !*** ./src/3Dcanvas.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass topCanvas{\n    constructor() {\n        this.scene = new THREE.Scene();\n\n        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/ (window.innerHeight / 2), 0.1, 10000);\n        this.scene.add(this.camera);\n\n        this.light = new THREE.AmbientLight(0xffffff, 5);\n        this.scene.add(this.light);\n\n        this.cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), new THREE.MeshPhongMaterial({color: 'blue'}));\n        this.cube.position.set(0, 0, -10);\n        this.scene.add(this.cube);\n\n        this.renderer = new THREE.WebGLRenderer();\n        this.renderer.setSize(window.innerWidth, window.innerHeight / 2);\n        this.renderer.setClearColor('rgb(100, 100, 100)');\n        document.body.appendChild(this.renderer.domElement);\n\n        this.animate();\n    }\n\n    animate() {\n        const topCanvas = this;\n        requestAnimationFrame(function() {topCanvas.animate()} );\n\n        topCanvas.renderer.render(topCanvas.scene, topCanvas.camera);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (topCanvas);\n\n//# sourceURL=webpack:///./src/3Dcanvas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _3Dcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3Dcanvas */ \"./src/3Dcanvas.js\");\n/* harmony import */ var _2Dcanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2Dcanvas */ \"./src/2Dcanvas.js\");\n\n\n\nvar THREECanvas = new _3Dcanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nvar Canvas = new _2Dcanvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconsole.log(THREECanvas.camera);\nconsole.log(Canvas.svg);\n\nvar testSVG = document.createElement('svg');\ntestSVG.height = 100;\ntestSVG.width = 100;\ndocument.body.appendChild(testSVG);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });