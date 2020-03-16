<template>
  <div class="content content-test">
    <div
      class="swiper-item"
      v-for="(url, index) in sourceList"
      :key="index"
      @click="handlePreview"
    >
      <img :src="url" alt="" class="image-fit" />
    </div>
    <pic-preview
      :images="sourceList"
      wrapper="content-test"
      :visible="visible"
      @close="handleClose"
    ></pic-preview>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import PicPreview from '../PicPreview/index.vue'
@Component({
  components: { PicPreview },
})
export default class Demo extends Vue {
  sourceList: Array<String> = [
    'https://p3.ssl.qhimgs1.com/sdr/400__/t016abf53727b771589.jpg',
    'https://p2.ssl.qhimgs1.com/sdr/400__/t01f399940bcb70ab98.jpg',
    'https://p2.ssl.qhimgs1.com/sdr/400__/t01d0e8abf8b56380cc.jpg',
    'https://p1.ssl.qhimgs1.com/sdr/400__/t0170ce1479af19a1bb.jpg',
    'https://desk-fd.zol-img.com.cn/g5/M00/02/00/ChMkJlbKw5aIY6PYAA0XnsktgwEAALG5QPtg4wADRe2915.jpg',
    'https://desk-fd.zol-img.com.cn/g5/M00/02/00/ChMkJ1bKw5eIL0aKAAfnuubEbXEAALG5gAbjAoAB-fS604.jpg',
    'https://i.loli.net/2020/03/15/Y89BjAwOTxLWGtm.png',
    'https://i.loli.net/2020/03/15/f4LtqpC58vxwIsG.jpg',
    'https://i.loli.net/2020/03/15/5TnEMami4RewoNX.png',
  ]
  visible = false

  handlePreview(e: Event) {
    this.visible = true
  }
  handleClose() {
    this.visible = false
  }
}
</script>

<style lang="stylus" scoped>
.content
  display grid
  grid-row-gap 20px
  grid-column-gap 20px
  grid-template-columns repeat(3, auto)
  grid-template-rows repeat(3, 200px)
.swiper-item
  border-radius 8px
  overflow hidden
  background white
  box-shadow -5px -5px 20px #fff, 5px 5px 20px #babecc
  .image-fit
    width 100%
    height 100%
    object-fit cover
</style>
