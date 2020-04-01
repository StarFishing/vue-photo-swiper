module.exports =
((typeof self !== 'undefined' ? self : this)["webpackJsonpVuePhotoSwiper"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpVuePhotoSwiper"] || []).push([[0],{

/***/ "644a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1e88d1f5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PhotoSwiper/index.vue?vue&type=template&id=ab3a4602&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"pswp",staticClass:"pswp",attrs:{"id":"gallery","tabindex":"-1","role":"dialog","aria-hidden":"true"}},[_c('div',{staticClass:"pswp__bg"}),_c('div',{staticClass:"pswp__scroll-wrap"},[_vm._m(0),_c('div',{staticClass:"pswp__ui pswp__ui--hidden"},[_c('div',{staticClass:"pswp__top-bar"},[_c('div',{staticClass:"pswp__counter",style:(_vm.setPagePosition)}),_c('button',{staticClass:"pswp__button pswp__button--close",attrs:{"title":"Close (Esc)"}}),(_vm.fullscreen)?_c('button',{staticClass:"pswp__button pswp__button--fs",attrs:{"title":"Toggle fullscreen"}}):_vm._e(),(_vm.zoom)?_c('button',{staticClass:"pswp__button pswp__button--zoom",attrs:{"title":"Zoom in/out"}}):_vm._e(),_vm._t("topbar",null,{"gallery":_vm.gallery}),_vm._m(1)],2),(_vm.openArrow)?_c('button',{staticClass:"pswp__button pswp__button--arrow--left",attrs:{"title":"Previous (arrow left)"}}):_vm._e(),(_vm.openArrow)?_c('button',{staticClass:"pswp__button pswp__button--arrow--right",attrs:{"title":"Next (arrow right)"}}):_vm._e(),_vm._m(2),_c('div',{staticClass:"pswp__footer__bar"},[_vm._t("footerBar")],2)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pswp__container"},[_c('div',{staticClass:"pswp__item"}),_c('div',{staticClass:"pswp__item"}),_c('div',{staticClass:"pswp__item"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pswp__preloader"},[_c('div',{staticClass:"pswp__preloader__icn"},[_c('div',{staticClass:"pswp__preloader__cut"},[_c('div',{staticClass:"pswp__preloader__donut"})])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pswp__caption"},[_c('div',{staticClass:"pswp__caption__center"})])}]


// CONCATENATED MODULE: ./src/components/PhotoSwiper/index.vue?vue&type=template&id=ab3a4602&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("e25e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("99de");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("7e84");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("262e");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js + 1 modules
var vue_property_decorator = __webpack_require__("60a3");

// EXTERNAL MODULE: ./node_modules/photoswipe/dist/photoswipe.js
var photoswipe = __webpack_require__("b24f");
var photoswipe_default = /*#__PURE__*/__webpack_require__.n(photoswipe);

// EXTERNAL MODULE: ./node_modules/photoswipe/dist/photoswipe-ui-default.js
var photoswipe_ui_default = __webpack_require__("14fd");
var photoswipe_ui_default_default = /*#__PURE__*/__webpack_require__.n(photoswipe_ui_default);

// EXTERNAL MODULE: ./node_modules/photoswipe/dist/default-skin/default-skin.css
var default_skin = __webpack_require__("3fb5");

// EXTERNAL MODULE: ./node_modules/photoswipe/dist/photoswipe.css
var dist_photoswipe = __webpack_require__("343a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PhotoSwiper/index.vue?vue&type=script&lang=ts&



















var PhotoSwipervue_type_script_lang_ts_PhotoSwiper =
/*#__PURE__*/
function (_Vue) {
  Object(inherits["a" /* default */])(PhotoSwiper, _Vue);

  function PhotoSwiper() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PhotoSwiper);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PhotoSwiper).apply(this, arguments));
    _this.gallery = null;
    _this.defaultOptions = {
      loop: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(PhotoSwiper, [{
    key: "toggleGallery",
    value: function toggleGallery(val) {
      if (val) {
        if (this.gallerySelector) {
          this.initGaleryByNode();
        } else {
          this.initGallery();
          this.gallery ? this.gallery.init() : null;
        }
      }
    }
  }, {
    key: "initGallery",
    value: function initGallery() {
      var pswpElement = this.$refs.pswp;
      this.gallery = new photoswipe_default.a(pswpElement, photoswipe_ui_default_default.a, this.images, Object.assign({}, this.defaultOptions, this.options)); // this.gallery.init()

      this.gallery.listen('close', this.handleClose);
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.$emit('close');
    }
  }, {
    key: "initGaleryByNode",
    value: function initGaleryByNode() {
      var galleryElements = document.querySelectorAll('.' + this.gallerySelector);

      for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1 + '');
        var galleryElement = galleryElements[i];
        galleryElement.onclick = this._onThumbnailsClick;
      }
    }
  }, {
    key: "_closest",
    value: function _closest(el, fn) {
      if (!el) return false;
      return el && fn(el) ? el : this._closest(el.parentNode, fn);
    }
  }, {
    key: "_onThumbnailsClick",
    value: function _onThumbnailsClick(e) {
      var self = this;
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      var eTarget = e.target || e.srcElement;

      var clickedListItem = this._closest(eTarget, function (el) {
        return el.className ? el.className.includes(self.gallerySelectorItem) : false;
      });

      if (!clickedListItem) {
        return;
      }

      var clickedGallery = clickedListItem.parentNode;
      var childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

      for (var i = 0; i < numChildNodes; i++) {
        if (childNodes[i].nodeType !== 1) {
          continue;
        }

        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }

        nodeIndex++;
      }

      if (index !== undefined && index >= 0) {
        this._openPhotoSwipe(index, clickedGallery);
      }

      return false;
    }
  }, {
    key: "_openPhotoSwipe",
    value: function _openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
      var _this2 = this;

      var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options;

      var items = this._parseThumbnailElements(galleryElement); // define options (if needed)


      options = {
        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        getThumbBoundsFn: function getThumbBoundsFn(index) {
          // See Options->getThumbBoundsFn section of docs for more info
          var thumbnail = items[index].el.children[0],
              pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
              rect = thumbnail.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          };
        },
        addCaptionHTMLFn: function addCaptionHTMLFn(item, captionEl, isFake) {
          if (!item.title) {
            captionEl.children[0].innerText = '';
            return false;
          }

          captionEl.children[0].innerHTML = item.title + '<br/><small>Photo: ' + item.author + '</small>';
          return true;
        }
      };

      if (fromURL) {
        if (options.galleryPIDs) {
          // parse real index when custom PIDs are used
          // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
          for (var j = 0; j < items.length; j++) {
            if (items[j].pid == index) {
              options.index = j;
              break;
            }
          }
        } else {
          options.index = parseInt(index + '', 10) - 1;
        }
      } else {
        options.index = parseInt(index + '', 10);
      } // exit if index not found


      if (isNaN(options.index)) {
        return;
      } // 可选配置
      // options.mainClass = 'pswp--minimal--dark'
      // options.barsSize = { top: 0, bottom: 0 }
      // options.captionEl = false
      // options.fullscreenEl = false
      // options.shareEl = false
      // options.bgOpacity = 0.85
      // options.tapToClose = true
      // options.tapToToggleControls = false


      if (disableAnimation) {
        options.showAnimationDuration = 0;
      } // Pass data to PhotoSwipe and initialize it


      this.gallery = new photoswipe_default.a(pswpElement, photoswipe_ui_default_default.a, items, Object.assign({}, this.defaultOptions, this.options, options)); // see: http://photoswipe.com/documentation/responsive-images.html

      var realViewportWidth,
          useLargeImages = false,
          firstResize = true;
      var imageSrcWillChange = false;
      this.gallery.listen('beforeResize', function () {
        var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        dpiRatio = Math.min(dpiRatio, 2.5);
        realViewportWidth = _this2.gallery ? _this2.gallery.viewportSize.x * dpiRatio : 0;

        if (realViewportWidth >= 1200 || !_this2.gallery.likelyTouchDevice && realViewportWidth > 800 || screen.width > 1200) {
          if (!useLargeImages) {
            useLargeImages = true;
            imageSrcWillChange = true;
          }
        } else {
          if (useLargeImages) {
            useLargeImages = false;
            imageSrcWillChange = true;
          }
        }

        if (imageSrcWillChange && !firstResize && _this2.gallery) {
          _this2.gallery.invalidateCurrItems();
        }

        if (firstResize) {
          firstResize = false;
        }

        imageSrcWillChange = false;
      });
      this.gallery.listen('gettingData', function (index, item) {
        if (useLargeImages) {
          item.src = item.o.src;
          item.w = item.o.w;
          item.h = item.o.h;
        } else if (item.m) {
          item.src = item.m.src;
          item.w = item.m.w;
          item.h = item.m.h;
        }
      });
      this.gallery.listen('close', this.handleClose);
      this.gallery.init();
    }
  }, {
    key: "_parseThumbnailElements",
    value: function _parseThumbnailElements(el) {
      var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          childElements,
          thumbnailEl,
          size,
          item;
      var elementNode = el;
      var element;

      for (var i = 0; i < numNodes; i++) {
        element = thumbElements[i]; // include only element nodes

        if (element.nodeType !== 1) {
          continue;
        }

        childElements = element.children; // swiper-item || gallerySelectorItem

        var dataSize = element.getAttribute('data-size');

        if (!dataSize) {
          throw new Error('need data-size but got null,please check the prop in the element');
        }

        size = dataSize.split('x'); // create slide object

        item = {
          src: element.getAttribute('data-origin') || childElements[0].getAttribute('src'),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10),
          author: element.getAttribute('data-author')
        };
        item.el = element; // save link to element for getThumbBoundsFn
        // Compatible with thumbnail animation

        if (childElements.length > 0) {
          item.msrc = childElements[0].getAttribute('src'); // thumbnail url
          // if (childElements.length > 1) {
          //   item.title = childElements[1].innerHTML // caption (contents of figure)
          // }
        } else {
          // Compatible no wrapper
          item.msrc = item.src;
        } // set origin src


        item.o = {
          src: item.src,
          w: item.w,
          h: item.h
        }; // set medium src

        var mediumSrc = element.getAttribute('data-med');

        if (mediumSrc) {
          size = element.getAttribute('data-med-size').split('x'); // "medium-sized" image

          item.m = {
            src: mediumSrc,
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10)
          };
        } // original image


        items.push(item);
      }

      return items;
    }
  }, {
    key: "setPagePosition",
    get: function get() {
      if (Object(esm_typeof["a" /* default */])(this.pageIndex) === 'object') {
        var position = this.pageIndex.position;

        if (position) {
          var style = {
            textAlign: position === 'center' ? 'center' : position === 'right' ? 'right' : 'left'
          };
          return style;
        }
      } else {
        if (!this.pageIndex) {
          return {
            display: 'none'
          };
        }
      }

      return '';
    }
  }]);

  return PhotoSwiper;
}(vue_property_decorator["c" /* Vue */]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])({
  required: false
})], PhotoSwipervue_type_script_lang_ts_PhotoSwiper.prototype, "images", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])({
  type: Boolean,
  default: false
})], PhotoSwipervue_type_script_lang_ts_PhotoSwiper.prototype, "openArrow", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])({
  type: Boolean,
  default: false
})], PhotoSwipervue_type_script_lang_ts_PhotoSwiper.prototype, "zoom", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])({
  type: Boolean,
  default: false
})], PhotoSwipervue_type_script_lang_ts_PhotoSwiper.prototype, "fullscreen", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])({
  type: [Boolean, Object],
  default: true
})], PhotoSwipervue_type_script_lang_ts_PhotoSwiper.prototype, "pageIndex", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])({
  type: Boolean,
  default: false
})], PhotoSwipervue_type_script_lang_ts_PhotoSwiper.prototype, "visible", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])({
  default: function _default() {}
})], PhotoSwipervue_type_script_lang_ts_PhotoSwiper.prototype, "options", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])()], PhotoSwipervue_type_script_lang_ts_PhotoSwiper.prototype, "gallerySelector", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Prop */])()], PhotoSwipervue_type_script_lang_ts_PhotoSwiper.prototype, "gallerySelectorItem", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["d" /* Watch */])('visible')], PhotoSwipervue_type_script_lang_ts_PhotoSwiper.prototype, "toggleGallery", null);

PhotoSwipervue_type_script_lang_ts_PhotoSwiper = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {}
})], PhotoSwipervue_type_script_lang_ts_PhotoSwiper);
/* harmony default export */ var PhotoSwipervue_type_script_lang_ts_ = (PhotoSwipervue_type_script_lang_ts_PhotoSwiper);
// CONCATENATED MODULE: ./src/components/PhotoSwiper/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PhotoSwipervue_type_script_lang_ts_ = (PhotoSwipervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PhotoSwiper/index.vue?vue&type=style&index=0&id=ab3a4602&lang=stylus&scoped=true&
var PhotoSwipervue_type_style_index_0_id_ab3a4602_lang_stylus_scoped_true_ = __webpack_require__("cb02");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/PhotoSwiper/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PhotoSwipervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "ab3a4602",
  null
  
)

/* harmony default export */ var components_PhotoSwiper = (component.exports);
// CONCATENATED MODULE: ./src/components/PhotoSwiper/index.js




var Components = {
  PhotoSwiper: components_PhotoSwiper
};
Object.keys(Components).forEach(function (name) {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(name, Components[name]);
});
/* harmony default export */ var src_components_PhotoSwiper = __webpack_exports__["a"] = (Components);

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "cb02":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ab3a4602_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ee7e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ab3a4602_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ab3a4602_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ab3a4602_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ee7e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["fb15",2,1]]]);