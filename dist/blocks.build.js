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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    TextareaControl = _wp$components.TextareaControl;\n\n\nregisterBlockType(\"nausikaa/code-example\", {\n\ttitle: __(\"Nausikaä Code Example\"),\n\tdescription: __(\"A code example block for the Nausikaä CSS framework documentation page. It renders with a toggle to show/hide the code.\"),\n\ticon: \"carrot\",\n\tcategory: \"common\",\n\tkeywords: [__(\"Nausikaä - Code Example\")],\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: \"string\",\n\t\t\tsource: \"text\"\n\t\t},\n\t\tuid: {\n\t\t\ttype: \"string\",\n\t\t\tsource: \"attribute\",\n\t\t\tselector: \"input\",\n\t\t\tattribute: \"id\"\n\t\t}\n\t},\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\tif (!attributes.uid) setAttributes({\n\t\t\tuid: Math.random().toString(36).substr(2, 9)\n\t\t});\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"container\" },\n\t\t\twp.element.createElement(TextareaControl, {\n\t\t\t\thelp: \"Please put the example code from above element(s) here\",\n\t\t\t\tstyle: { height: \"10em\", fontFamily: \"monospace\" },\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ content: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.content\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"code-example\" },\n\t\t\twp.element.createElement(\"input\", { type: \"checkbox\", id: attributes.uid }),\n\t\t\twp.element.createElement(\n\t\t\t\t\"label\",\n\t\t\t\t{ \"for\": attributes.uid, title: \"Show/hide example code\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"svg\",\n\t\t\t\t\t{ viewBox: \"0 0 24 24\", width: \"24px\", height: \"24px\", className: \"code\" },\n\t\t\t\t\twp.element.createElement(\"path\", { fill: \"none\", d: \"M0 0h24v24H0V0z\" }),\n\t\t\t\t\twp.element.createElement(\"path\", { d: \"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\" })\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"svg\",\n\t\t\t\t\t{ viewBox: \"0 0 24 24\", width: \"24px\", height: \"24px\", className: \"clear\" },\n\t\t\t\t\twp.element.createElement(\"path\", { d: \"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" }),\n\t\t\t\t\twp.element.createElement(\"path\", { d: \"M0 0h24v24H0z\", fill: \"none\" })\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t\"pre\",\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"code\",\n\t\t\t\t\tnull,\n\t\t\t\t\tattributes.content\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2wsXG4gICAgVGV4dGFyZWFDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dGFyZWFDb250cm9sO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwibmF1c2lrYWEvY29kZS1leGFtcGxlXCIsIHtcblx0dGl0bGU6IF9fKFwiTmF1c2lrYcOkIENvZGUgRXhhbXBsZVwiKSxcblx0ZGVzY3JpcHRpb246IF9fKFwiQSBjb2RlIGV4YW1wbGUgYmxvY2sgZm9yIHRoZSBOYXVzaWthw6QgQ1NTIGZyYW1ld29yayBkb2N1bWVudGF0aW9uIHBhZ2UuIEl0IHJlbmRlcnMgd2l0aCBhIHRvZ2dsZSB0byBzaG93L2hpZGUgdGhlIGNvZGUuXCIpLFxuXHRpY29uOiBcImNhcnJvdFwiLFxuXHRjYXRlZ29yeTogXCJjb21tb25cIixcblx0a2V5d29yZHM6IFtfXyhcIk5hdXNpa2HDpCAtIENvZGUgRXhhbXBsZVwiKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRjb250ZW50OiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0c291cmNlOiBcInRleHRcIlxuXHRcdH0sXG5cdFx0dWlkOiB7XG5cdFx0XHR0eXBlOiBcInN0cmluZ1wiLFxuXHRcdFx0c291cmNlOiBcImF0dHJpYnV0ZVwiLFxuXHRcdFx0c2VsZWN0b3I6IFwiaW5wdXRcIixcblx0XHRcdGF0dHJpYnV0ZTogXCJpZFwiXG5cdFx0fVxuXHR9LFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXHRcdGlmICghYXR0cmlidXRlcy51aWQpIHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0dWlkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSlcblx0XHR9KTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0eyBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0YXJlYUNvbnRyb2wsIHtcblx0XHRcdFx0aGVscDogXCJQbGVhc2UgcHV0IHRoZSBleGFtcGxlIGNvZGUgZnJvbSBhYm92ZSBlbGVtZW50KHMpIGhlcmVcIixcblx0XHRcdFx0c3R5bGU6IHsgaGVpZ2h0OiBcIjEwZW1cIiwgZm9udEZhbWlseTogXCJtb25vc3BhY2VcIiB9LFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogY29udGVudCB9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHR7IGNsYXNzTmFtZTogXCJjb2RlLWV4YW1wbGVcIiB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBhdHRyaWJ1dGVzLnVpZCB9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJsYWJlbFwiLFxuXHRcdFx0XHR7IFwiZm9yXCI6IGF0dHJpYnV0ZXMudWlkLCB0aXRsZTogXCJTaG93L2hpZGUgZXhhbXBsZSBjb2RlXCIgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwic3ZnXCIsXG5cdFx0XHRcdFx0eyB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIsIGNsYXNzTmFtZTogXCJjb2RlXCIgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZmlsbDogXCJub25lXCIsIGQ6IFwiTTAgMGgyNHYyNEgwVjB6XCIgfSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTkuNCAxNi42TDQuOCAxMmw0LjYtNC42TDggNmwtNiA2IDYgNiAxLjQtMS40em01LjIgMGw0LjYtNC42LTQuNi00LjZMMTYgNmw2IDYtNiA2LTEuNC0xLjR6XCIgfSlcblx0XHRcdFx0KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwic3ZnXCIsXG5cdFx0XHRcdFx0eyB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCB3aWR0aDogXCIyNHB4XCIsIGhlaWdodDogXCIyNHB4XCIsIGNsYXNzTmFtZTogXCJjbGVhclwiIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIiB9KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMCAwaDI0djI0SDB6XCIsIGZpbGw6IFwibm9uZVwiIH0pXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwicHJlXCIsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImNvZGVcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuY29udGVudFxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);