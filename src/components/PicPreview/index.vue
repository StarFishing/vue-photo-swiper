<template>
  <Swiper @change="setActive" :initialSwipe="startPosition">
    <swiper-item v-for="(url, index) in images" :key="index">
      <img :src="url" alt="" class="pre-image-fit" />
    </swiper-item>
  </Swiper>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import Swiper from '../Swiper/index.vue'
import SwiperItem from '../SwiperItem/index'
@Component({
  components: {
    Swiper,
    SwiperItem,
  },
})
export default class PicPreview extends Vue {
  @Prop({ type: Array, default: () => [] })
  images!: Array<string>

  @Prop({ type: String })
  wrapper!: string // 用于过渡的归属元素查找

  @Prop({ type: Number, default: 0 })
  startPosition!: number
  active = 0

  setActive(active: number) {
    // this.resetScale();

    if (active !== this.active) {
      this.active = active
      this.$emit('change', active)
    }
  }
}
</script>

<style lang="stylus" scoped>
.pre-image-fit
  width 100%
  object-fit cover
  transition all 0.3s
  transform translate3d(0, 0, 0)
  -webkit-user-drag none
</style>
