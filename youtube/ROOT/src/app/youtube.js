/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.js */ \"./src/pages/index.js\");\n\n(0,_pages_index_js__WEBPACK_IMPORTED_MODULE_0__.youtube)();\n\n\n//# sourceURL=webpack://youtube/./src/app/app.js?");

/***/ }),

/***/ "./src/entities/video_img/index.js":
/*!*****************************************!*\
  !*** ./src/entities/video_img/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeThumbImg: () => (/* reexport safe */ _ui_video_img_js__WEBPACK_IMPORTED_MODULE_0__.makeThumbImg)\n/* harmony export */ });\n/* harmony import */ var _ui_video_img_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/video_img.js */ \"./src/entities/video_img/ui/video_img.js\");\n\n\n\n//# sourceURL=webpack://youtube/./src/entities/video_img/index.js?");

/***/ }),

/***/ "./src/entities/video_img/ui/video_img.js":
/*!************************************************!*\
  !*** ./src/entities/video_img/ui/video_img.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeThumbImg: () => (/* binding */ makeThumbImg)\n/* harmony export */ });\nconst makeThumbImg = (thumb_img) => {\n  const new_mainImg = document.createElement(\"img\");\n  new_mainImg.setAttribute(\"src\", thumb_img);\n  return new_mainImg;\n};\n\n\n//# sourceURL=webpack://youtube/./src/entities/video_img/ui/video_img.js?");

/***/ }),

/***/ "./src/entities/video_title/index.js":
/*!*******************************************!*\
  !*** ./src/entities/video_title/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeThumbText: () => (/* reexport safe */ _ui_video_title_js__WEBPACK_IMPORTED_MODULE_0__.makeThumbText)\n/* harmony export */ });\n/* harmony import */ var _ui_video_title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/video_title.js */ \"./src/entities/video_title/ui/video_title.js\");\n\n\n\n//# sourceURL=webpack://youtube/./src/entities/video_title/index.js?");

/***/ }),

/***/ "./src/entities/video_title/ui/video_title.css":
/*!*****************************************************!*\
  !*** ./src/entities/video_title/ui/video_title.css ***!
  \*****************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| /* 아이템들 가운데 정렬하기 */\\n> .root {\\n|   display: flex;\\n|   justify-content: center;\");\n\n//# sourceURL=webpack://youtube/./src/entities/video_title/ui/video_title.css?");

/***/ }),

/***/ "./src/entities/video_title/ui/video_title.js":
/*!****************************************************!*\
  !*** ./src/entities/video_title/ui/video_title.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeThumbText: () => (/* binding */ makeThumbText)\n/* harmony export */ });\n/* harmony import */ var _video_title_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video_title.css */ \"./src/entities/video_title/ui/video_title.css\");\n/* harmony import */ var _video_title_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_video_title_css__WEBPACK_IMPORTED_MODULE_0__);\n\nconst makeThumbText = (VideoData) => {\n  var videoText = document.createElement(\"div\");\n  videoText.classList = \"root\";\n\n  var newThumb = document.createElement(\"div\");\n\n  var userImg = document.createElement(\"img\");\n  userImg.setAttribute(\"src\", VideoData.userImg);\n  videoText.appendChild(userImg);\n\n  var title = document.createElement(\"p\");\n  title.classList = \"root_text_line\";\n  title.innerHTML = VideoData.title;\n  newThumb.appendChild(title);\n\n  var userName = document.createElement(\"p\");\n  userName.innerHTML = VideoData.userName;\n  newThumb.appendChild(userName);\n\n  var smallTextBox = document.createElement(\"div\");\n  newThumb.appendChild(smallTextBox);\n\n  var new_mainTextView = document.createElement(\"p\");\n  new_mainTextView.innerHTML = VideoData.thumbView;\n\n  var dateText = document.createElement(\"p\");\n  dateText.innerHTML = VideoData.thumbDate;\n\n  smallTextBox.appendChild(new_mainTextView);\n  smallTextBox.appendChild(dateText);\n\n  videoText.appendChild(newThumb);\n  return videoText;\n};\n\n\n//# sourceURL=webpack://youtube/./src/entities/video_title/ui/video_title.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   youtube: () => (/* reexport safe */ _youtube_youtube_js__WEBPACK_IMPORTED_MODULE_0__.youtube)\n/* harmony export */ });\n/* harmony import */ var _youtube_youtube_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube/youtube.js */ \"./src/pages/youtube/youtube.js\");\n\n\n\n//# sourceURL=webpack://youtube/./src/pages/index.js?");

/***/ }),

/***/ "./src/pages/youtube/youtube.js":
/*!**************************************!*\
  !*** ./src/pages/youtube/youtube.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   youtube: () => (/* binding */ youtube)\n/* harmony export */ });\n/* harmony import */ var _widgets_aside_idnex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/aside/idnex.js */ \"./src/widgets/aside/idnex.js\");\n/* harmony import */ var _widgets_main_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widgets/main/index.js */ \"./src/widgets/main/index.js\");\n\n\n\nconst getData = () => {\n  const thumb_index = 15;\n  const Video = {\n    title:\n      \"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 돌아가고 싶은 그때 그 시절 2010년 감성힙합 I 다이나믹듀오, 프라이머리, 긱스, 개리, 빈지노\",\n    thumbImg: \"../../public/image/main/main.play_img.PNG\",\n    userImg: \"../../public/image/main/main.playname_img.PNG\",\n    userName: \"올끌 (All of MBClassic)\",\n    thumbView: 441231,\n    thumbDate: 124,\n  };\n  const videoList = [];\n  for (let i = 0; i < thumb_index; i++) {\n    videoList.push(Video);\n  }\n  return videoList;\n};\n\nconst youtube = () => {\n  const rootTag = document.getElementById(\"root\");\n\n  rootTag.appendChild((0,_widgets_main_index_js__WEBPACK_IMPORTED_MODULE_1__.makeMain)([...getData()]));\n\n  rootTag.appendChild((0,_widgets_aside_idnex_js__WEBPACK_IMPORTED_MODULE_0__.makeAside)());\n};\n\n\n//# sourceURL=webpack://youtube/./src/pages/youtube/youtube.js?");

/***/ }),

/***/ "./src/shared/icon_img/index.js":
/*!**************************************!*\
  !*** ./src/shared/icon_img/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeIconImg: () => (/* reexport safe */ _ui_icon_img_js__WEBPACK_IMPORTED_MODULE_0__.makeIconImg)\n/* harmony export */ });\n/* harmony import */ var _ui_icon_img_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/icon_img.js */ \"./src/shared/icon_img/ui/icon_img.js\");\n\n\n\n//# sourceURL=webpack://youtube/./src/shared/icon_img/index.js?");

/***/ }),

/***/ "./src/shared/icon_img/ui/icon_img.js":
/*!********************************************!*\
  !*** ./src/shared/icon_img/ui/icon_img.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeIconImg: () => (/* binding */ makeIconImg)\n/* harmony export */ });\nconst makeIconImg = (imgsrc) => {\n  const iconImg = document.createElement(\"img\");\n  iconImg.src = imgsrc;\n  return iconImg;\n};\n\n\n//# sourceURL=webpack://youtube/./src/shared/icon_img/ui/icon_img.js?");

/***/ }),

/***/ "./src/shared/icon_text/index.js":
/*!***************************************!*\
  !*** ./src/shared/icon_text/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeIconText: () => (/* reexport safe */ _ui_icon_text_js__WEBPACK_IMPORTED_MODULE_0__.makeIconText)\n/* harmony export */ });\n/* harmony import */ var _ui_icon_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/icon_text.js */ \"./src/shared/icon_text/ui/icon_text.js\");\n\n\n\n//# sourceURL=webpack://youtube/./src/shared/icon_text/index.js?");

/***/ }),

/***/ "./src/shared/icon_text/ui/icon_text.css":
/*!***********************************************!*\
  !*** ./src/shared/icon_text/ui/icon_text.css ***!
  \***********************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .root {\\n|   font-size: 10px;\\n|   overflow: hidden;\");\n\n//# sourceURL=webpack://youtube/./src/shared/icon_text/ui/icon_text.css?");

/***/ }),

/***/ "./src/shared/icon_text/ui/icon_text.js":
/*!**********************************************!*\
  !*** ./src/shared/icon_text/ui/icon_text.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeIconText: () => (/* binding */ makeIconText)\n/* harmony export */ });\n/* harmony import */ var _icon_text_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon_text.css */ \"./src/shared/icon_text/ui/icon_text.css\");\n/* harmony import */ var _icon_text_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icon_text_css__WEBPACK_IMPORTED_MODULE_0__);\n// const link = document.createElement(\"link\");\n// link.rel = \"stylesheet\";\n// link.href = \"./icon_text.css\";\n// document.head.appendChild(link);\n\n\nconst makeIconText = (text) => {\n  const iconText = document.createElement(\"p\");\n  iconText.classList = \"root\";\n  iconText.innerHTML = text;\n  return iconText;\n};\n\n\n//# sourceURL=webpack://youtube/./src/shared/icon_text/ui/icon_text.js?");

/***/ }),

/***/ "./src/widgets/aside/idnex.js":
/*!************************************!*\
  !*** ./src/widgets/aside/idnex.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeAside: () => (/* reexport safe */ _ui_aside_js__WEBPACK_IMPORTED_MODULE_0__.makeAside)\n/* harmony export */ });\n/* harmony import */ var _ui_aside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/aside.js */ \"./src/widgets/aside/ui/aside.js\");\n\n\n\n//# sourceURL=webpack://youtube/./src/widgets/aside/idnex.js?");

/***/ }),

/***/ "./src/widgets/aside/ui/aside.js":
/*!***************************************!*\
  !*** ./src/widgets/aside/ui/aside.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeAside: () => (/* binding */ makeAside)\n/* harmony export */ });\n/* harmony import */ var _aside_icon_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../aside_icon/index.js */ \"./src/widgets/aside_icon/index.js\");\n\n\nconst iconData = {\n  home: { content: \"홈\", resource: \"/image/aside/home.svg\" },\n  shorts: { content: \"숏츠\", resource: \"/image/aside/shorts.svg\" },\n  subscription: { content: \"구독\", resource: \"/image/aside/subscribe.svg\" },\n  music: { content: \"유튜브 뮤직\", resource: \"/image/aside/youtube_music.svg\" },\n  user: { content: \"나\", resource: \"/image/aside/user.svg\" },\n  offline: { content: \"오프라인 저장\", resource: \"/image/aside/download.svg\" },\n  offl12ine: { resource: \"/image/aside/download.svg\" },\n};\n\nconst makeAside = () => {\n  const aside = document.createElement(\"aside\");\n  aside.classList = \"root\";\n  Object.values(iconData).forEach((icon) => {\n    aside.appendChild((0,_aside_icon_index_js__WEBPACK_IMPORTED_MODULE_0__.makeIcon)({ ...icon }));\n  });\n  return aside;\n};\n\n\n//# sourceURL=webpack://youtube/./src/widgets/aside/ui/aside.js?");

/***/ }),

/***/ "./src/widgets/aside_icon/index.js":
/*!*****************************************!*\
  !*** ./src/widgets/aside_icon/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeIcon: () => (/* reexport safe */ _ui_icon_js__WEBPACK_IMPORTED_MODULE_0__.makeIcon)\n/* harmony export */ });\n/* harmony import */ var _ui_icon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/icon.js */ \"./src/widgets/aside_icon/ui/icon.js\");\n\n\n\n//# sourceURL=webpack://youtube/./src/widgets/aside_icon/index.js?");

/***/ }),

/***/ "./src/widgets/aside_icon/ui/icon.js":
/*!*******************************************!*\
  !*** ./src/widgets/aside_icon/ui/icon.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeIcon: () => (/* binding */ makeIcon)\n/* harmony export */ });\n/* harmony import */ var _shared_icon_img_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/icon_img/index.js */ \"./src/shared/icon_img/index.js\");\n/* harmony import */ var _shared_icon_text_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/icon_text/index.js */ \"./src/shared/icon_text/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'icon.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nconst makeIcon = (data) => {\n  const iconBox = document.createElement(\"button\");\n  iconBox.classList = \"root\";\n  const { content, resource } = data;\n  iconBox.appendChild((0,_shared_icon_img_index_js__WEBPACK_IMPORTED_MODULE_0__.makeIconImg)(resource));\n  if (content != null) {\n    iconBox.appendChild((0,_shared_icon_text_index_js__WEBPACK_IMPORTED_MODULE_1__.makeIconText)(content));\n  }\n  return iconBox;\n};\n\n\n//# sourceURL=webpack://youtube/./src/widgets/aside_icon/ui/icon.js?");

/***/ }),

/***/ "./src/widgets/main/index.js":
/*!***********************************!*\
  !*** ./src/widgets/main/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeMain: () => (/* reexport safe */ _ui_main_js__WEBPACK_IMPORTED_MODULE_0__.makeMain)\n/* harmony export */ });\n/* harmony import */ var _ui_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/main.js */ \"./src/widgets/main/ui/main.js\");\n\n\n\n//# sourceURL=webpack://youtube/./src/widgets/main/index.js?");

/***/ }),

/***/ "./src/widgets/main/ui/main.js":
/*!*************************************!*\
  !*** ./src/widgets/main/ui/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeMain: () => (/* binding */ makeMain)\n/* harmony export */ });\n/* harmony import */ var _video_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../video/index.js */ \"./src/widgets/video/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './main.module.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nconst makeMain = (videoList) => {\n  const main_thumb = document.createElement(\"main\");\n  main_thumb.className = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './main.module.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n  videoList.forEach((videoData) => {\n    main_thumb.appendChild((0,_video_index_js__WEBPACK_IMPORTED_MODULE_0__.makeVideo)({ ...videoData }));\n  });\n  return main_thumb;\n};\n\n\n//# sourceURL=webpack://youtube/./src/widgets/main/ui/main.js?");

/***/ }),

/***/ "./src/widgets/video/index.js":
/*!************************************!*\
  !*** ./src/widgets/video/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeVideo: () => (/* reexport safe */ _ui_video_js__WEBPACK_IMPORTED_MODULE_0__.makeVideo)\n/* harmony export */ });\n/* harmony import */ var _ui_video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/video.js */ \"./src/widgets/video/ui/video.js\");\n\n\n\n//# sourceURL=webpack://youtube/./src/widgets/video/index.js?");

/***/ }),

/***/ "./src/widgets/video/ui/video.css":
/*!****************************************!*\
  !*** ./src/widgets/video/ui/video.css ***!
  \****************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .root {\\n|   display: flex;\\n|   flex-direction: column;\");\n\n//# sourceURL=webpack://youtube/./src/widgets/video/ui/video.css?");

/***/ }),

/***/ "./src/widgets/video/ui/video.js":
/*!***************************************!*\
  !*** ./src/widgets/video/ui/video.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeVideo: () => (/* binding */ makeVideo)\n/* harmony export */ });\n/* harmony import */ var _entities_video_img_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../entities/video_img/index.js */ \"./src/entities/video_img/index.js\");\n/* harmony import */ var _entities_video_title_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../entities/video_title/index.js */ \"./src/entities/video_title/index.js\");\n/* harmony import */ var _video_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.css */ \"./src/widgets/video/ui/video.css\");\n/* harmony import */ var _video_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_video_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst makeVideo = (VideoData) => {\n  const { title, thumbImg, userImg, userName, thumbView, thumbDate } =\n    VideoData;\n\n  // 비디오 카드 생성\n  var newVideoGroup = document.createElement(\"article\");\n  newVideoGroup.classList = \"root\";\n\n  // 비디오 이미지 생성 및 추가\n  newVideoGroup.appendChild((0,_entities_video_img_index_js__WEBPACK_IMPORTED_MODULE_0__.makeThumbImg)(thumbImg));\n  // 비디오 텍스트 추가\n  newVideoGroup.appendChild((0,_entities_video_title_index_js__WEBPACK_IMPORTED_MODULE_1__.makeThumbText)({ ...VideoData }));\n\n  return newVideoGroup;\n};\n\n\n//# sourceURL=webpack://youtube/./src/widgets/video/ui/video.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/app.js");
/******/ 	
/******/ })()
;