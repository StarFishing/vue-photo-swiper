<template>
  <div
    id="gallery"
    class="pswp"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    ref="pswp"
  >
    <div class="pswp__bg"></div>

    <div class="pswp__scroll-wrap">
      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>

      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <div class="pswp__counter" :style="setPagePosition"></div>

          <button
            class="pswp__button pswp__button--close"
            title="Close (Esc)"
          ></button>
          <button
            class="pswp__button pswp__button--fs"
            title="Toggle fullscreen"
            v-if="fullscreen"
          ></button>
          <button
            class="pswp__button pswp__button--zoom"
            title="Zoom in/out"
            v-if="zoom"
          ></button>
          <slot name="topbar" :gallery="gallery"></slot>

          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="pswp__button pswp__button--arrow--left"
          title="Previous (arrow left)"
          v-if="openArrow"
        ></button>
        <button
          class="pswp__button pswp__button--arrow--right"
          title="Next (arrow right)"
          v-if="openArrow"
        ></button>
        <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/default-skin/default-skin.css'
import 'photoswipe/dist/photoswipe.css'

type PAGEINDEX = {
  position: string
}

@Component({
  components: {},
})
export default class PhotoSwiper extends Vue {
  @Prop({ required: false })
  images!: []

  @Prop({ type: Boolean, default: false })
  openArrow!: boolean

  @Prop({ type: Boolean, default: false })
  zoom!: boolean

  @Prop({ type: Boolean, default: false })
  fullscreen!: boolean

  @Prop({ type: [Boolean, Object], default: true })
  pageIndex!: boolean | PAGEINDEX

  @Prop({ type: Boolean, default: false })
  visible!: boolean

  @Prop({ default: () => {} })
  options!: any

  @Prop()
  gallerySelector!: string

  @Prop()
  gallerySelectorItem!: string

  get setPagePosition() {
    if (typeof this.pageIndex === 'object') {
      let position = this.pageIndex.position
      if (position) {
        let style = {
          textAlign:
            position === 'center'
              ? 'center'
              : position === 'right'
              ? 'right'
              : 'left',
        }
        return style
      }
    } else {
      if (!this.pageIndex) {
        return { display: 'none' }
      }
      return ''
    }
  }

  @Watch('visible')
  toggleGallery(val: boolean) {
    if (val) {
      if (this.gallerySelector) {
        this.initGaleryByNode()
      } else {
        this.initGallery()
        this.gallery ? this.gallery.init() : null
      }
    }
  }

  gallery: PhotoSwipe<PhotoSwipeUI_Default.Options> | null = null
  defaultOptions = {
    loop: false,
  }

  initGallery() {
    let pswpElement = this.$refs.pswp as any
    this.gallery = new PhotoSwipe(
      pswpElement,
      PhotoSwipeUI_Default,

      this.images,
      Object.assign({}, this.defaultOptions, this.options)
    )
    // this.gallery.init()
    this.gallery.listen('close', this.handleClose)
  }

  handleClose() {
    this.$emit('close')
  }

  initGaleryByNode() {
    let galleryElements = document.querySelectorAll('.' + this.gallerySelector)
    for (let i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute('data-pswp-uid', i + 1 + '')
      let galleryElement = galleryElements[i] as HTMLElement
      galleryElement.onclick = this._onThumbnailsClick
    }
  }

  _closest(
    el: EventTarget | null | HTMLElement,
    fn: Function
  ): Boolean | EventTarget | HTMLElement {
    if (!el) return false
    return el && fn(el) ? el : this._closest((el as HTMLElement).parentNode, fn)
  }

  _onThumbnailsClick(e: Event) {
    let self = this as any
    e = e || window.event
    e.preventDefault ? e.preventDefault() : (e.returnValue = false)

    let eTarget = e.target || e.srcElement
    let clickedListItem = this._closest(eTarget, (el: HTMLElement) => {
      return el.className
        ? el.className.includes(self.gallerySelectorItem)
        : false
    })

    if (!clickedListItem) {
      return
    }

    let clickedGallery = (clickedListItem as HTMLElement).parentNode

    let childNodes = (clickedListItem as any).parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index

    for (let i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue
      }

      if (childNodes[i] === clickedListItem) {
        index = nodeIndex
        break
      }
      nodeIndex++
    }

    if (index !== undefined && index >= 0) {
      this._openPhotoSwipe(index, clickedGallery)
    }
    return false
  }

  _openPhotoSwipe(
    index: number,
    galleryElement: Node | null,
    disableAnimation?: boolean,
    fromURL?: boolean
  ) {
    let pswpElement = document.querySelectorAll('.pswp')[0] as HTMLElement,
      gallery,
      options

    let items = this._parseThumbnailElements(galleryElement) as any
    // define options (if needed)
    options = {
      galleryUID: (galleryElement as HTMLElement).getAttribute('data-pswp-uid'),

      getThumbBoundsFn: (index: number) => {
        // See Options->getThumbBoundsFn section of docs for more info
        let thumbnail = items[index].el.children[0],
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect()

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
      },

      addCaptionHTMLFn: (item: any, captionEl: any, isFake: boolean) => {
        if (!item.title) {
          captionEl.children[0].innerText = ''
          return false
        }
        captionEl.children[0].innerHTML =
          item.title + '<br/><small>Photo: ' + item.author + '</small>'
        return true
      },
    } as any

    if (fromURL) {
      if (options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for (let j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j
            break
          }
        }
      } else {
        options.index = parseInt(index + '', 10) - 1
      }
    } else {
      options.index = parseInt(index + '', 10)
    }

    // exit if index not found
    if (isNaN(options.index)) {
      return
    }
    // 可选配置

    // options.mainClass = 'pswp--minimal--dark'
    // options.barsSize = { top: 0, bottom: 0 }
    // options.captionEl = false
    // options.fullscreenEl = false
    // options.shareEl = false
    // options.bgOpacity = 0.85
    // options.tapToClose = true
    // options.tapToToggleControls = false

    if (disableAnimation) {
      options.showAnimationDuration = 0
    }

    // Pass data to PhotoSwipe and initialize it
    this.gallery = new PhotoSwipe(
      pswpElement,
      PhotoSwipeUI_Default,
      items,
      Object.assign({}, this.defaultOptions, this.options, options)
    )

    // see: http://photoswipe.com/documentation/responsive-images.html
    let realViewportWidth,
      useLargeImages = false,
      firstResize = true

    let imageSrcWillChange = false
    this.gallery.listen('beforeResize', () => {
      let dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1
      dpiRatio = Math.min(dpiRatio, 2.5)
      realViewportWidth = this.gallery
        ? this.gallery.viewportSize.x * dpiRatio
        : 0

      if (
        realViewportWidth >= 1200 ||
        (!(this.gallery as any).likelyTouchDevice && realViewportWidth > 800) ||
        screen.width > 1200
      ) {
        if (!useLargeImages) {
          useLargeImages = true
          imageSrcWillChange = true
        }
      } else {
        if (useLargeImages) {
          useLargeImages = false
          imageSrcWillChange = true
        }
      }

      if (imageSrcWillChange && !firstResize && this.gallery) {
        this.gallery.invalidateCurrItems()
      }

      if (firstResize) {
        firstResize = false
      }

      imageSrcWillChange = false
    })

    this.gallery.listen('gettingData', (index, item: any) => {
      if (useLargeImages) {
        item.src = item.o.src
        item.w = item.o.w
        item.h = item.o.h
      } else if (item.m) {
        item.src = item.m.src
        item.w = item.m.w
        item.h = item.m.h
      }
    })
    this.gallery.listen('close', this.handleClose)
    this.gallery.init()
  }

  _parseThumbnailElements(el: Node | null) {
    let thumbElements = (el as Node).childNodes,
      numNodes = thumbElements.length,
      items = [],
      childElements,
      thumbnailEl,
      size,
      item
    let elementNode = el as HTMLElement
    let element: any

    for (let i = 0; i < numNodes; i++) {
      element = thumbElements[i]

      // include only element nodes
      if (element.nodeType !== 1) {
        continue
      }

      childElements = (element as HTMLElement).children
      // swiper-item || gallerySelectorItem
      let dataSize = (element as HTMLElement).getAttribute('data-size')
      if (!dataSize) {
        throw new Error(
          'need data-size but got null,please check the prop in the element'
        )
      }
      size = dataSize.split('x')

      // create slide object
      item = {
        src:
          element.getAttribute('data-origin') ||
          childElements[0].getAttribute('src'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
        author: element.getAttribute('data-author'),
      } as any

      item.el = element // save link to element for getThumbBoundsFn

      // Compatible with thumbnail animation
      if (childElements.length > 0) {
        item.msrc = childElements[0].getAttribute('src') // thumbnail url
        // if (childElements.length > 1) {
        //   item.title = childElements[1].innerHTML // caption (contents of figure)
        // }
      } else {
        // Compatible no wrapper
        item.msrc = item.src
      }
      // set origin src
      item.o = {
        src: item.src,
        w: item.w,
        h: item.h,
      }
      // set medium src
      let mediumSrc = element.getAttribute('data-med')
      if (mediumSrc) {
        size = element.getAttribute('data-med-size').split('x')
        // "medium-sized" image
        item.m = {
          src: mediumSrc,
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10),
        }
      }
      // original image

      items.push(item)
    }

    return items
  }
}
</script>

<style lang="stylus" scoped>
.pswp__top-bar
  background-color transparent
.pswp__counter
  right 0
  width 100%
</style>
