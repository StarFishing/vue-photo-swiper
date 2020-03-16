<template>
  <Swiper
    @change="setActive"
    :initialSwipe="startPosition"
    :class="setSwiperVisible"
    ref="swiper"
    @click="handleClose"
  >
    <swiper-item v-for="(url, index) in images" :key="index">
      <Images
        :src="url"
        class="pre-image-wrapper"
        :style="[index === active ? imageStyle : null]"
        @touchstart.native="onImageTouchStart"
        @touchmove.native="onImageTouchMove"
        @touchend.native="onImageTouchEnd"
        @touchcancel.native="onImageTouchEnd"
      ></Images>
    </swiper-item>
  </Swiper>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop, Mixins } from 'vue-property-decorator'
import { TouchMixin } from '../../mixins/touch'
import { on, preventDefault } from '../../utils/dom/event'
import { hasClass } from '../../utils/dom/style'
import { range } from '../../utils/format/number'
import Swiper from '../Swiper/index.vue'
import SwiperItem from '../SwiperItem/index'
import Images from '../Image/index'
function getDistance(touches: TouchList) {
  return Math.sqrt(
    (touches[0].clientX - touches[1].clientX) ** 2 +
      (touches[0].clientY - touches[1].clientY) ** 2
  )
}
@Component({
  components: {
    Swiper,
    SwiperItem,
    Images,
  },
})
export default class PicPreview extends Mixins(TouchMixin) {
  @Prop({ type: Array, default: () => [] })
  images!: Array<string>

  @Prop({ type: String })
  wrapper!: string // 用于过渡的归属元素查找

  @Prop({ type: Number, default: 0 })
  startPosition!: number

  @Prop({ type: Number, default: 1 / 3 })
  minZoom!: number

  @Prop({ type: Number, default: 3 })
  maxZoom!: number

  @Prop({ type: Boolean, default: false })
  visible!: boolean

  get setSwiperVisible() {
    let swiper = this.$refs.swiper as any
    if (this.visible) {
      this.$nextTick(() => {
        swiper.initialize()
        this.setWrapperTouchInit()
      })
    }
    return this.visible ? 'visible-el' : ''
  }

  scale = 1
  moveX = 0
  moveY = 0
  active = 0
  moving = false
  zooming = false
  doubleClickTimer: any = null

  startMoveX = 0
  startMoveY = 0
  maxMoveX = 0
  maxMoveY = 0
  startScale = 0
  startDistance = 0
  shouldRender = true

  touchStartTime!: Date

  // TODO 图片过高去除垂直居中属性
  get getElHeight() {
    return (event: any) => {
      return true
    }
  }

  get imageStyle() {
    const { scale } = this
    type styleEl = {
      transitionDuration: Number | String
      transform?: String
    }
    const style: styleEl = {
      transitionDuration: this.zooming || this.moving ? '0s' : '.3s',
    }

    if (scale !== 1) {
      style.transform = `scale3d(${scale}, ${scale}, 1) translate(${this.moveX /
        scale}px, ${this.moveY / scale}px)`
    }

    return style
  }

  getEndPointElement() {
    let wrapper = document.querySelector('.' + this.wrapper)
    let children: any = wrapper ? wrapper.children : []
    for (let i = 0; i < children.length; i++) {
      if (hasClass(children[i], 'swiper-item') && i === this.active) {
        return children[i]
      }
    }
    return undefined
  }

  setWrapperTouchInit() {
    const Wrapper = this.$refs.swiper as any
    console.log(Wrapper)
    const swipe = Wrapper.$el
    on(swipe, 'touchstart', this.onWrapperTouchStart)
    on(swipe, 'touchmove', preventDefault)
    on(swipe, 'touchend', this.onWrapperTouchEnd)
    on(swipe, 'touchcancel', this.onWrapperTouchEnd)
  }

  onWrapperTouchStart() {
    this.touchStartTime = new Date()
  }

  onWrapperTouchEnd(event: Event) {
    preventDefault(event)
    const deltaTime = (new Date() as any) - (this.touchStartTime as any)
    const { offsetX = 0, offsetY = 0 } = (this.$refs.swipe as any) || {}

    // prevent long tap to close component
    if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
      if (!this.doubleClickTimer) {
        this.doubleClickTimer = setTimeout(() => {
          // this.handleClose()
          this.doubleClickTimer = null
        }, 300)
      } else {
        clearTimeout(this.doubleClickTimer)
        this.doubleClickTimer = null
        this.toggleScale()
      }
    }
  }

  startMove(event: TouchEvent) {
    const image = event.currentTarget as HTMLElement
    const rect = image.getBoundingClientRect()
    const winWidth = window.innerWidth
    const winHeight = window.innerHeight

    this.touchStart(event)
    this.moving = true
    this.startMoveX = this.moveX
    this.startMoveY = this.moveY
    this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2)
    this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2)
  }

  startZoom(event: TouchEvent) {
    this.moving = false
    this.zooming = true
    this.startScale = this.scale
    this.startDistance = getDistance(event.touches)
  }

  onImageTouchStart(event: TouchEvent) {
    const { touches } = event
    const { offsetX = 0 } = (this.$refs.swipe as any) || {}
    if (touches.length === 1 && this.scale !== 1) {
      this.startMove(event)
    } /* istanbul ignore else */ else if (touches.length === 2 && !offsetX) {
      this.startZoom(event)
    }
  }

  onImageTouchMove(event: TouchEvent) {
    const { touches } = event
    if (this.moving || this.zooming) {
      preventDefault(event, true)
    }

    if (this.moving) {
      this.touchMove(event)
      const moveX = this.deltaX + this.startMoveX
      const moveY = this.deltaY + this.startMoveY
      this.moveX = range(moveX, -this.maxMoveX, this.maxMoveX)
      this.moveY = range(moveY, -this.maxMoveY, this.maxMoveY)
    }

    if (this.zooming && touches.length === 2) {
      const distance = getDistance(touches)
      const scale = (this.startScale * distance) / this.startDistance

      this.setScale(scale)
    }
  }

  onImageTouchEnd(event: TouchEvent) {
    /* istanbul ignore else */
    if (this.moving || this.zooming) {
      let stopPropagation = true

      if (
        this.moving &&
        this.startMoveX === this.moveX &&
        this.startMoveY === this.moveY
      ) {
        stopPropagation = false
      }

      if (!event.touches.length) {
        this.moving = false
        this.zooming = false
        this.startMoveX = 0
        this.startMoveY = 0
        this.startScale = 1

        if (this.scale < 1) {
          this.resetScale()
        }
      }

      if (stopPropagation) {
        preventDefault(event, true)
      }
    }
  }

  setScale(scale: number) {
    const value = range(scale, +this.minZoom, +this.maxZoom)

    this.scale = value
    this.$emit('scale', { index: this.active, scale: value })
  }

  toggleScale() {
    const scale = this.scale > 1 ? 1 : 2

    this.setScale(scale)
    this.moveX = 0
    this.moveY = 0
  }

  resetScale() {
    this.setScale(1)
    this.moveX = 0
    this.moveY = 0
  }

  setActive(active: number) {
    this.resetScale()

    if (active !== this.active) {
      this.active = active
      this.$emit('change', active)
    }
  }

  handleClose(event?: Event) {
    let swiper = this.$refs.swiper as any
    swiper.$el.className = swiper.$el.className.replace('visible-el', '')
    this.$emit('close', this.active)
  }
}
</script>

<style lang="stylus" scoped>
.pre-image-wrapper
  position absolute
  top 0
  left 0
  right 0
  bottom 0
.visible-el
  display block
</style>
