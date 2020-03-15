import './style.styl'
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component
export default class SwiperItem extends Vue {
  offset = 0
  beforeCreate() {
    let $parent = this.$parent as any
    $parent.swipes.push(this)
  }

  destroyed() {
    let $parent = this.$parent as any
    $parent.swipes.splice($parent.swipes.indexOf(this), 1)
  }

  render() {
    const { vertical, computedWidth, computedHeight } = this.$parent as any
    const style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`,
      overflowY: 'scroll',
    }
    return (
      <div class="pic-swiper-item" style={style}>
        {this.$slots.default}
      </div>
    )
  }
}
