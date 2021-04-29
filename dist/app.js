/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function initVue() {
  new Vue({
    el: '#app',
    data: {
      // NAVBAR MENU DATA 
      'navbarMenus': [{
        'label': 'menu',
        'content': 'home'
      }, {
        'label': 'menu',
        'content': 'courses'
      }, {
        'label': 'menu',
        'content': 'instructors'
      }, {
        'label': 'menu',
        'content': 'events'
      }, {
        'label': 'menu',
        'content': 'pages'
      }, {
        'label': 'menu',
        'content': 'elements'
      }, {
        'label': 'icon',
        'content': 'fas fa-search'
      }, {
        'label': 'icon',
        'content': 'fas fa-shopping-bag'
      }, {
        'label': 'icon',
        'content': 'fas fa-bars'
      }],
      // JUMBOTRON DATA
      'jumbotronSlides': [{
        'title': 'Contemporary Ideas',
        'text': 'Lorem ipsum',
        'button': true,
        'videoplayer': false,
        'img': "img/jumbotron-1.jpg"
      }, {
        'title': 'Contemporary Ideas',
        'text': 'Lorem ipsum',
        'button': true,
        'videoplayer': false,
        'img': "img/jumbotron-2.jpg"
      }, {
        'title': 'Contemporary Ideas',
        'text': 'Lorem ipsum',
        'button': false,
        'videoplayer': true,
        'img': "img/jumbotron-3.jpg"
      }],
      'img': '',
      'cont': 0,
      // SERVICE INFO DATA
      'servicesInfo': [{
        'img': 'img/service-card-1.png',
        'label': 'Languages'
      }, {
        'img': 'img/service-card-2.png',
        'label': 'Software'
      }, {
        'img': 'img/service-card-3.png',
        'label': 'Business'
      }, {
        'img': 'img/service-card-4.png',
        'label': 'Chemistry'
      }, {
        'img': 'img/service-card-5.png',
        'label': 'Science'
      }, {
        'img': 'img/service-card-6.png',
        'label': 'DIY&Craft'
      }],
      // sliderProfile DATA
      'sliderProfileInfo': [{
        'img': 'img/profile-1.png',
        'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis eius dolores recusandae earum! Quos harum',
        'name': 'Sarah Bale',
        'profession': 'student'
      }, {
        'img': 'img/profile-2.png',
        'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis eius dolores recusandae earum! Quos harum',
        'name': 'Frank Thomas',
        'profession': 'student'
      }, {
        'img': 'img/profile-3.png',
        'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis eius dolores recusandae earum! Quos harum',
        'name': 'Jimmy Boyle',
        'profession': 'student'
      }],
      // OFFERS SLIDER DATA
      'offerSliderInfo': [{
        'img': 'img/offer-slider-1.jpg',
        'offer': 'Business English',
        'price': '$20',
        'author': 'Preston Marshall',
        'tutorNumber': 1,
        'subject': 'Languages'
      }, {
        'img': 'img/offer-slider-2.jpg',
        'offer': 'Social Computing',
        'price': 'FREE',
        'author': 'David Sanders',
        'tutorNumber': 1,
        'subject': 'Programming'
      }, {
        'img': 'img/offer-slider-3.jpg',
        'offer': 'Learn Spanish',
        'price': '$20',
        'author': 'Jennie King',
        'tutorNumber': 1,
        'subject': 'Languages'
      }],
      // TUTOR BOX DATA
      'tutorInfo': [{
        'name': 'Brenda Harris',
        'img': 'img/tutor-1.jpg'
      }, {
        'name': 'Lisa Griffin',
        'img': 'img/tutor-2.jpg'
      }, {
        'name': 'Victor Green',
        'img': 'img/tutor-3.jpg'
      }],
      // PRICING PLAN DATA
      'pricingPlan': [{
        'name': 'Number of Courses',
        'standard': 2,
        'professional': 4,
        'advanced': 6
      }, {
        'name': 'Time',
        'standard': '15 days',
        'professional': '30 days',
        'advanced': '30 days'
      }, {
        'name': 'Web Designing',
        'standard': 'fas fa-check',
        'professional': 'fas fa-check',
        'advanced': 'fas fa-check'
      }, {
        'name': 'Human-Centered Design',
        'standard': 'fas fa-check',
        'professional': 'fas fa-check',
        'advanced': 'fas fa-check'
      }, {
        'name': 'Basic Marketing',
        'standard': 'fas fa-times',
        'professional': 'fas fa-check',
        'advanced': 'fas fa-check'
      }, {
        'name': 'Python for Everybody',
        'standard': 'fas fa-times',
        'professional': 'fas fa-check',
        'advanced': 'fas fa-check'
      }, {
        'name': 'Android Developer',
        'standard': 'fas fa-times',
        'professional': 'fas fa-times',
        'advanced': 'fas fa-check'
      }, {
        'name': 'Business English',
        'standard': 'fas fa-times',
        'professional': 'fas fa-times',
        'advanced': 'fas fa-check'
      }],
      'partnerLogos': ['img/educator.png', 'img/teach-hub.png', 'img/scholar.png', 'img/icademy.png', 'img/studycentral.png'],
      'footerLists': [['Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home', '1-677-124-44227', 'Mon - Sat 8.00 - 18.00'], ['Popular Courses', 'Business English', 'Preston Marshall', 'Social Computing', 'David Sanders', 'Learn Spanish', 'Jennie King'], ['Support', 'User Dashboard', 'Contact Us', 'FAQ', 'Course Offer', 'Events']]
    },
    methods: {
      slider: function slider() {
        this.img = this.jumbotronSlides[this.cont].img;
        return this.img;
      },
      getClick: function getClick() {
        this.cont += 1;
        console.log(this.cont);
        this.cont = this.cont >= this.jumbotronSlides.length ? 0 : this.cont = this.cont;
        return this.cont;
      },
      removeClick: function removeClick() {
        this.cont -= 1;
        console.log(this.cont);
        this.cont = this.cont < 0 ? 3 : this.cont = this.cont;
        return this.cont;
      }
    }
  });
}

function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init); // $(init);

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;