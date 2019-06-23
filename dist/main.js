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
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * creates the bottom (2D) canvas of the app\n * each grid is a rectangle drawn on the canvas, with a div corresponding to each rectangle\n */\n\nclass CANVAS {\n    constructor() {\n        this.canvas = document.createElement('canvas');\n        this.canvas.setAttribute('id', 'mainsvg');\n        this.canvas.setAttribute('height', `${window.innerHeight / 2}`);\n        this.canvas.setAttribute('width', `${window.innerWidth}`);\n        this.canvas.style.position = 'absolute';\n        document.body.appendChild(this.canvas);\n\n        console.log(this);\n\n        this.ctx = this.canvas.getContext('2d');\n        this.gamePieces = [];\n\n        this.init();\n    }\n\n    init() {\n        const a = this;\n\n        class gamePiece {\n            constructor(x, y) {\n                this.width = a.canvas.width / 20;\n                this.height = a.canvas.height / 10;\n                this.position\n                a.ctx.rect(x, y, this.width, this.height);\n                a.ctx.stroke();\n            }\n        }\n        \n        for(var i = 0; i < 10; i += 1) {\n            for(var j = 0; j < 20; j += 1) {\n                a.gamePieces.push(new gamePiece(j * a.canvas.width / 20, i * a.canvas.height / 10));\n            }\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CANVAS);\n\n//# sourceURL=webpack:///./src/2Dcanvas.js?");

/***/ }),

/***/ "./src/3Dcanvas.js":
/*!*************************!*\
  !*** ./src/3Dcanvas.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * creates the top (3D) canvas in the app\n * also creates the tube and the sliding cylinders\n * having a bit of trouble with the x-axis positioning based on the curve; needs a ratio to make it more fitting\n */\n\nclass topCanvas{\n    constructor() {\n        this.scene = new THREE.Scene();\n\n        this.camera = new THREE.OrthographicCamera(-window.innerWidth, window.innerWidth, window.innerHeight / 2, -window.innerHeight / 2, 1, 100000);\n\n        // this.camera.position.set(0, 2000, 0);\n        // this.camera.rotation.x = -Math.PI / 2;\n\n        this.camera.position.set(0, 0, 2000);\n\n        // this.camera.position.set(0, 2000, 2000);\n        // this.camera.rotation.x = -Math.PI / 4;\n\n        this.scene.add(this.camera);\n\n        this.renderer = new THREE.WebGLRenderer();\n        this.renderer.setSize(window.innerWidth, window.innerHeight / 2);\n        this.renderer.setClearColor('rgb(100, 100, 100)');\n        document.body.appendChild(this.renderer.domElement);\n\n        this.light = new THREE.AmbientLight(0xffffff, 5);\n        this.scene.add(this.light);\n\n        this.pointLight = new THREE.PointLight(0xffffff, 4);\n        this.pointLight.position.set(5, 5, 5);\n        this.scene.add(this.pointLight);\n\n        const topCanvas = this;\n\n        /**\n         * \n         * @param {number} scale \n         * determines the path that the tube will take\n         */\n\n        function customCurve( scale ) {\n\n            THREE.Curve.call( this );\n        \n            this.scale = ( scale === undefined ) ? 1 : scale;\n        \n        }\n        \n        customCurve.prototype = Object.create( THREE.Curve.prototype );\n        customCurve.prototype.constructor = customCurve;\n        \n        customCurve.prototype.getPoint = function ( t ) {\n        \n            topCanvas.tx = t * 5 - 2.5;\n            topCanvas.ty = t * t * t;\n            topCanvas.tz = -4 * t + 2;\n        \n            return new THREE.Vector3( topCanvas.tx, topCanvas.ty, topCanvas.tz ).multiplyScalar( this.scale );\n        \n        };\n\n        this.tubeLength = parseFloat(this.renderer.domElement.style.width) / 2.7;\n        this.path = new customCurve(this.tubeLength);\n        this.tubeGeo = new THREE.TubeGeometry(this.path, 20, this.tubeLength / 8, 8, false);\n        this.tubeMat = new THREE.MeshPhongMaterial({color: 'blue'});\n        this.tubeMesh = new THREE.Mesh(this.tubeGeo, this.tubeMat);\n        this.scene.add(this.tubeMesh);\n\n        this.cylinderGeo = new THREE.CylinderGeometry(this.tubeLength / 5, this.tubeLength / 5, this.tubeLength / 5, 100);\n        this.cylinderMat = new THREE.MeshPhongMaterial({color: 'green'});\n        this.rightCylinderMesh = new THREE.Mesh(this.cylinderGeo, this.cylinderMat);\n        this.leftCylinderMesh = new THREE.Mesh(this.cylinderGeo, new THREE.MeshPhongMaterial({color: 'red'}));\n\n        this.rightCylinderRotationZ = Math.atan((this.path.getPoints(19)[10].y - this.path.getPoints(19)[9].y) / (this.path.getPoints(19)[10].x - this.path.getPoints(19)[9].x)) + Math.PI / 2;\n        this.rightCylinderRotationY = Math.atan((this.path.getPoints(19)[10].z - this.path.getPoints(19)[9].z) / (this.path.getPoints(19)[10].x - this.path.getPoints(19)[9].x)) + Math.PI / 2;\n        this.rightCylinderMesh.position.z = -(this.path.getPoints(19)[9].z);\n        this.rightCylinderMesh.position.x = this.path.getPoints(19)[10].x;\n        this.rightCylinderMesh.position.y = this.path.getPoints(19)[10].y;\n\n        this.leftCylinderRotationZ = Math.atan((this.path.getPoints(19)[9].y - this.path.getPoints(19)[8].y) / (this.path.getPoints(19)[9].x - this.path.getPoints(19)[8].x)) + Math.PI / 2;\n        this.leftCylinderRotationY = Math.atan((this.path.getPoints(19)[9].z - this.path.getPoints(19)[8].z) / (this.path.getPoints(19)[9].x - this.path.getPoints(19)[8].x)) + Math.PI / 2;\n        this.leftCylinderMesh.position.z = -(this.path.getPoints(19)[10].z);\n        this.leftCylinderMesh.position.x = this.path.getPoints(19)[9].x;\n        // Old way of defining the positions of the cylinders\n        // -this.tubeLength / 8;\n        this.leftCylinderMesh.position.y = this.path.getPoints(19)[9].y;\n    \n        this.rightCylinderMesh.rotation.z = this.rightCylinderRotationZ;\n        this.rightCylinderMesh.rotation.y = this.rightCylinderRotationY;\n        this.leftCylinderMesh.rotation.z = this.leftCylinderRotationZ;\n        this.leftCylinderMesh.rotation.y = this.leftCylinderRotationY;\n\n        this.scene.add(this.rightCylinderMesh, this.leftCylinderMesh);\n\n        this.animate();\n    }\n\n    /**\n     * this is the animate function\n     */\n\n    animate() {\n        const topCanvas = this;\n        requestAnimationFrame(function() {topCanvas.animate()} );\n\n        topCanvas.renderer.render(topCanvas.scene, topCanvas.camera);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (topCanvas);\n\n//# sourceURL=webpack:///./src/3Dcanvas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _3Dcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3Dcanvas */ \"./src/3Dcanvas.js\");\n/* harmony import */ var _2Dcanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2Dcanvas */ \"./src/2Dcanvas.js\");\n\n\n\nvar THREECanvas = new _3Dcanvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nvar Canvas = new _2Dcanvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconsole.table(THREECanvas.path.getPoints(19));\n\n/**\n * Function that changes the position of the cylinders based on the event listerners on the divs\n */\n\nCanvas.canvas.addEventListener('mousemove', function(e) {\n    var offset = Math.ceil(e.offsetX / (Canvas.canvas.width / 20));\n    var newOffset = offset;\n\n    /**\n     * This method uses the offset and the length of the tube to change the position of the cylinders; THREECanvas is more proportional than the other method\n     */\n\n    // if(offset >= 11) {\n    //     newOffset += 1;\n    //     THREECanvas.rightCylinderMesh.position.x = ((Math.abs(newOffset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);\n    //     THREECanvas.leftCylinderMesh.position.x = -((Math.abs(newOffset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);\n    // } else {\n    //     THREECanvas.rightCylinderMesh.position.x = ((Math.abs(offset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);\n    //     THREECanvas.leftCylinderMesh.position.x = -((Math.abs(offset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);\n    // }\n\n    /**\n     * This method uses the position of the divided customCurve to determine the positions of the cylinders in all three dimensions\n     */\n\n    if(offset <= 9) {\n        newOffset = 19 - offset;\n        offset -= 1;\n        newOffset += 1;\n        THREECanvas.rightCylinderMesh.position.y = THREECanvas.path.getPoints(19)[newOffset].y;\n        THREECanvas.leftCylinderMesh.position.y = THREECanvas.path.getPoints(19)[offset].y;\n        THREECanvas.rightCylinderMesh.position.x = THREECanvas.path.getPoints(19)[newOffset].x;\n        THREECanvas.leftCylinderMesh.position.x = THREECanvas.path.getPoints(19)[offset].x;\n        THREECanvas.rightCylinderMesh.position.z = -(THREECanvas.path.getPoints(19)[offset].z);\n        THREECanvas.leftCylinderMesh.position.z = -(THREECanvas.path.getPoints(19)[newOffset].z);\n        if(offset <= 1 || newOffset >= 18) {\n            offset += 1;\n            newOffset -= 1;\n        }\n        THREECanvas.rightCylinderMesh.rotation.z = Math.atan(((THREECanvas.path.getPoints(19)[newOffset].y - THREECanvas.path.getPoints(19)[newOffset - 1].y) / (THREECanvas.path.getPoints(19)[newOffset].x - THREECanvas.path.getPoints(19)[newOffset - 1].x))) - (Math.PI / 2);\n        THREECanvas.leftCylinderMesh.rotation.z = Math.atan(((THREECanvas.path.getPoints(19)[offset].y - THREECanvas.path.getPoints(19)[offset - 1].y) / (THREECanvas.path.getPoints(19)[offset].x - THREECanvas.path.getPoints(19)[offset - 1].x))) - (Math.PI / 2);\n    } else {\n        newOffset = 19 - offset;\n        if(offset >= 11) {\n            offset -= 1;\n            newOffset += 1;\n        }\n        THREECanvas.rightCylinderMesh.position.y = THREECanvas.path.getPoints(19)[offset].y;\n        THREECanvas.leftCylinderMesh.position.y = THREECanvas.path.getPoints(19)[newOffset].y;\n        THREECanvas.rightCylinderMesh.position.x = THREECanvas.path.getPoints(19)[offset].x;\n        THREECanvas.leftCylinderMesh.position.x = THREECanvas.path.getPoints(19)[newOffset].x;\n        THREECanvas.rightCylinderMesh.position.z = -(THREECanvas.path.getPoints(19)[newOffset].z);\n        THREECanvas.leftCylinderMesh.position.z = -(THREECanvas.path.getPoints(19)[offset].z);\n        if(offset >= 18 || newOffset <= 1) {\n            offset -= 1;\n            newOffset += 1;\n        }\n        THREECanvas.rightCylinderMesh.rotation.z = Math.atan(((THREECanvas.path.getPoints(19)[offset].y - THREECanvas.path.getPoints(19)[offset - 1].y) / (THREECanvas.path.getPoints(19)[offset].x - THREECanvas.path.getPoints(19)[offset - 1].x))) - (Math.PI / 2);\n        THREECanvas.leftCylinderMesh.rotation.z = Math.atan(((THREECanvas.path.getPoints(19)[newOffset].y - THREECanvas.path.getPoints(19)[newOffset - 1].y) / (THREECanvas.path.getPoints(19)[newOffset].x - THREECanvas.path.getPoints(19)[newOffset - 1].x))) - (Math.PI / 2);\n\n    }\n    console.log(offset, newOffset, THREECanvas.rightCylinderMesh.rotation.z);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });