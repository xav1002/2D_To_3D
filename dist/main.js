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
eval("__webpack_require__.r(__webpack_exports__);\nclass CANVAS {\n    constructor() {\n        this.canvas = document.createElement('canvas');\n        this.canvas.setAttribute('id', 'mainsvg');\n        this.canvas.setAttribute('height', `${window.innerHeight / 2}`);\n        this.canvas.setAttribute('width', `${window.innerWidth}`);\n        this.canvas.style.position = 'absolute';\n        document.body.appendChild(this.canvas);\n\n        this.ctx = this.canvas.getContext('2d');\n        this.gamePieces = [];\n\n        this.init();\n    }\n\n    init() {\n        const a = this;\n\n        class gamePiece {\n            constructor(x, y) {\n                this.width = a.canvas.width / 20;\n                this.height = a.canvas.height / 10;\n                a.ctx.rect(x, y, this.width, this.height);\n                a.ctx.stroke();\n\n                this.object = document.createElement('div');\n                this.object.style.width = `${this.width}px`;\n                this.object.style.height = `${this.height}px`;\n                this.object.style.position = 'absolute';\n                this.object.style.display = 'block';\n                // Quick fix for positioning of divs; they need to be more centered with the canvas\n                this.object.style.left = `${x}px`;\n                this.object.style.top = `${window.innerHeight / 2 + y}px`;\n                this.object.style.backgroundColor = 'blue';\n                this.object.style.opacity = .2;\n                document.body.appendChild(this.object);\n            }\n        }\n        \n        for(var i = 0; i < 10; i += 1) {\n            for(var j = 0; j < 20; j += 1) {\n                a.gamePieces.push(new gamePiece(j * a.canvas.width / 20, i * a.canvas.height / 10));\n            }\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CANVAS);\n\n//# sourceURL=webpack:///./src/2Dcanvas.js?");

/***/ }),

/***/ "./src/3Dcanvas.js":
/*!*************************!*\
  !*** ./src/3Dcanvas.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass topCanvas{\n    constructor() {\n        this.scene = new THREE.Scene();\n\n        this.camera = new THREE.OrthographicCamera(-window.innerWidth, window.innerWidth, window.innerHeight, -window.innerHeight, 1, 1000);\n        this.scene.add(this.camera);\n\n        this.renderer = new THREE.WebGLRenderer();\n        this.renderer.setSize(window.innerWidth, window.innerHeight / 2);\n        this.renderer.setClearColor('rgb(100, 100, 100)');\n        document.body.appendChild(this.renderer.domElement);\n\n        this.light = new THREE.AmbientLight(0xffffff, 5);\n        this.scene.add(this.light);\n\n        this.pointLight = new THREE.PointLight(0xffffff, 4);\n        this.pointLight.position.set(5, 5, 5);\n        this.scene.add(this.pointLight);\n\n        function customCurve( scale ) {\n\n            THREE.Curve.call( this );\n        \n            this.scale = ( scale === undefined ) ? 1 : scale;\n        \n        }\n        \n        customCurve.prototype = Object.create( THREE.Curve.prototype );\n        customCurve.prototype.constructor = customCurve;\n        \n        customCurve.prototype.getPoint = function ( t ) {\n        \n            var tx = t * 5 - 2.5;\n            var ty = 0;\n            var tz = 0;\n        \n            return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );\n        \n        };\n\n        this.tubeLength = parseFloat(this.renderer.domElement.style.width) / 2.5;\n        this.path = new customCurve(this.tubeLength);\n        console.log(this.tubeLength / 4);\n        this.tubeGeo = new THREE.TubeGeometry(this.path, 20, this.tubeLength / 8, 8, false);\n        this.tubeMat = new THREE.MeshPhongMaterial({color: 'blue'});\n        this.tubeMesh = new THREE.Mesh(this.tubeGeo, this.tubeMat);\n        this.tubeMesh.position.z = -1000;\n        console.log(this.tubeMesh);\n        this.scene.add(this.tubeMesh);\n\n        this.cylinderGeo = new THREE.CylinderGeometry(this.tubeLength / 5, this.tubeLength / 5, this.tubeLength / 4, 100);\n        this.cylinderMat = new THREE.MeshPhongMaterial({color: 'green'});\n        this.rightCylinderMesh = new THREE.Mesh(this.cylinderGeo, this.cylinderMat);\n        this.leftCylinderMesh = new THREE.Mesh(this.cylinderGeo, new THREE.MeshPhongMaterial({color: 'red'}));\n        this.rightCylinderMesh.position.z = -1000;\n        this.rightCylinderMesh.position.x = this.tubeLength / 8;\n        this.leftCylinderMesh.position.z = -1000;\n        this.leftCylinderMesh.position.x = -this.tubeLength / 8;\n        this.rightCylinderMesh.rotation.z = Math.PI / 2;\n        this.leftCylinderMesh.rotation.z = Math.PI / 2;\n        this.scene.add(this.rightCylinderMesh, this.leftCylinderMesh);\n\n        // this.ringGeo = new THREE.CylinderGeometry(this.tubeLength / 7, this.tubeLength / 7, this.tubeLength / 20, 100);\n        // this.ringMesh = new THREE.Mesh(this.ringGeo, this.cylinderMat);\n        // this.ringMesh.position.x = this.tubeLength * 5 / 2;\n        // this.ringMesh.position.z = -1000;\n        // this.ringMesh.rotation.z = Math.PI / 2;\n        // this.scene.add(this.ringMesh);\n\n        this.animate();\n    }\n\n    animate() {\n        const topCanvas = this;\n        requestAnimationFrame(function() {topCanvas.animate()} );\n\n        topCanvas.renderer.render(topCanvas.scene, topCanvas.camera);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (topCanvas);\n\n//# sourceURL=webpack:///./src/3Dcanvas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _3Dcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3Dcanvas */ \"./src/3Dcanvas.js\");\n/* harmony import */ var _2Dcanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2Dcanvas */ \"./src/2Dcanvas.js\");\n\n\n\nvar THREECanvas = new _3Dcanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nvar Canvas = new _2Dcanvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconsole.log(THREECanvas.camera);\nconsole.log(Canvas.canvas);\n// console.log(Canvas.gamePieces);\n\nCanvas.gamePieces.forEach(piece => {\n    piece.object.addEventListener('mouseover', function(e) {\n        console.log(e);\n        console.table(e.x, e.fromElement.offsetLeft, e.clientX, e.screenX, parseFloat(this.style.width));\n        THREECanvas.rightCylinderMesh.position.x = (((Math.abs(parseFloat(this.style.left) - (Canvas.canvas.width / 2))) * 2) + (THREECanvas.tubeLength / 8));\n        console.log(parseFloat(this.style.left), Canvas.canvas.width / 2, THREECanvas.rightCylinderMesh.position.x);\n        THREECanvas.leftCylinderMesh.position.x = -(((Math.abs(parseFloat(this.style.left) - (Canvas.canvas.width / 2))) * 2) + (THREECanvas.tubeLength / 8));\n    });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });