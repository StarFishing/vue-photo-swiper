<template>
  <div class="pic-swiper" :class="getComputeStyle" ref="swiper">
    <div class="pic-swiper-content" ref="track" :style="trackStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { TouchMixin } from '../../mixins/touch'
import { preventDefault } from '../../utils/dom/event'
import { Vue, Watch, Component, Prop, Mixins } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class Swiper extends Mixins(TouchMixin) {
  mixins = [TouchMixin]

  @Prop({ type: String, default: '', required: false })
  className!: string //可添加的样式

  @Prop({ type: Number, default: 500, required: false })
  duration!: number

  @Prop({ type: Boolean, default: true, required: false })
  touchable!: boolean

  @Prop({ type: Boolean, default: true, required: false })
  stopPropagation!: boolean

  @Prop({ type: Number, default: 0, required: false })
  initialSwipe!: number

  computedWidth = 0
  computedHeight = 0
  offset = 0
  active = 0
  deltaX = 0
  deltaY = 0
  swipes = []
  swiping = false
  vertical = false

  get getComputeStyle() {
    return this.className
  }

  get isCorrectDirection() {
    const expect = this.vertical ? 'vertical' : 'horizontal'
    return this.direction === expect
  }

  get delta() {
    return this.vertical ? this.deltaY : this.deltaX
  }
  get count() {
    return this.swipes.length
  }

  get size() {
    return this[this.vertical ? 'computedHeight' : 'computedWidth']
  }
  get trackSize() {
    return this.count * this.size
  }

  get trackStyle() {
    const mainAxis = this.vertical ? 'height' : 'width'
    const crossAxis = this.vertical ? 'width' : 'height'
    let _self = this as any

    return {
      [mainAxis]: `${this.trackSize}px`,
      [crossAxis]: _self[crossAxis] ? `${_self[crossAxis]}px` : '',
      transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
      transform: `translate${this.vertical ? 'Y' : 'X'}(${this.offset}px)`,
    }
  }

  @Watch('swipes')
  setInitializeSwipes() {
    this.initialize()
  }
  @Watch('initialSwipe')
  setInitializeSwipe() {
    // 当初始化图片的index变化进行重新计算
    this.initialize()
  }

  onTouchStart(event: TouchEvent) {
    if (!this.touchable) return
    this.swiping = true
    this.touchStart(event)
    this.correctPosition()
  }

  onTouchMove(event: TouchEvent) {
    if (!this.touchable || !this.swiping) return

    this.touchMove(event)

    if (this.isCorrectDirection) {
      preventDefault(event, this.stopPropagation)
      // this.move({ offset: this.delta });
    }
  }

  onTouchEnd() {
    if (!this.touchable || !this.swiping) return

    if (this.delta && this.isCorrectDirection) {
      const offset = this.vertical ? this.offsetY : this.offsetX
      // this.move({
      //   pace: offset > 0 ? (this.delta > 0 ? -1 : 1) : 0,
      //   emitChange: true
      // });
    }

    this.swiping = false
  }

  correctPosition() {
    // this.move({ pace: -this.count })
  }

  initialize(active = this.initialSwipe) {
    // 初始化容器大小
    let $el = this.$refs.swiper as HTMLElement
    if ($el) {
      const rect = $el.getBoundingClientRect()
      this.computedWidth = rect.width
      this.computedHeight = rect.height
    }

    this.swiping = true
    // 初始化第一个图的位置
    this.active = active
    this.offset = this.count > 1 ? -this.size * this.active : 0
    this.swipes.forEach((swipe: any) => {
      swipe.offset = 0
    })
  }

  mounted() {
    this.bindTouchEvent(this.$refs.track as HTMLElement)
    window.addEventListener('resize', () => {
      this.initialize()
    })
  }
}
</script>

<style lang="stylus" scoped>
.pic-swiper
  position fixed
  transition all 0.3s
  // display none
  background black
  transform translate3d(0, 0, 0)
  overflow hidden
  z-index 99
  user-select none
  top 0
  left 0
  right 0
  bottom 0
  cursor grab
  .pic-swiper-content
    height 100%
    transition-duration 300ms
    transform translateX(0px)
</style>
