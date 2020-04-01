<template>
  <div>
    <div class="content content-test gallery">
      <div
        class="swiper-item gallery-item"
        v-for="(url, index) in images"
        :key="index"
        :data-origin="url.src"
        :data-size="url.w + 'x' + url.h"
        :data-med="url.src"
        :data-med-size="url.w + 'x' + url.h"
        @click="handlePreview(index)"
      >
        <img :src="url.src" alt="" class="image-fit" />
      </div>
    </div>
    <photo-swiper
      :images="images"
      @close="handleClose"
      :pageIndex="{
        position: 'center',
      }"
      :visible="visible"
      :options="options"
      gallerySelector="gallery"
      gallerySelectorItem="gallery-item"
    ></photo-swiper>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import PhotoSwiper from '../PhotoSwiper/index.vue'
@Component({
  components: { PhotoSwiper },
})
export default class Demo extends Vue {
  sourceList: Array<String> = [
    'https://desk-fd.zol-img.com.cn/g5/M00/02/00/ChMkJlbKw5aIY6PYAA0XnsktgwEAALG5QPtg4wADRe2915.jpg',
    'https://desk-fd.zol-img.com.cn/g5/M00/02/00/ChMkJ1bKw5eIL0aKAAfnuubEbXEAALG5gAbjAoAB-fS604.jpg',
    'https://i.loli.net/2020/03/15/Y89BjAwOTxLWGtm.png',
    'https://i.loli.net/2020/03/15/f4LtqpC58vxwIsG.jpg',
    'https://i.loli.net/2020/03/15/5TnEMami4RewoNX.png',
  ]
  images = [
    {
      src:
        'https://desk-fd.zol-img.com.cn/g5/M00/02/00/ChMkJlbKw5aIY6PYAA0XnsktgwEAALG5QPtg4wADRe2915.jpg',
      w: 1920,
      h: 1200,
      title: 'Image Caption',
    },
    {
      src:
        'https://desk-fd.zol-img.com.cn/g5/M00/02/00/ChMkJ1bKw5eIL0aKAAfnuubEbXEAALG5gAbjAoAB-fS604.jpg',
      w: 1920,
      h: 1200,
    },
    {
      src: 'https://i.loli.net/2020/03/15/Y89BjAwOTxLWGtm.png',
      w: 184,
      h: 175,
    },
  ]

  visible = false
  options = {
    index: 0,
  }

  handleClose() {
    this.visible = false
    console.log('listen close')
  }

  handlePreview(index: number) {
    this.visible = true
    // this.options.index = index
  }
}
</script>

<style lang="stylus" scoped>
.content
  display flex
.swiper-item
  width 200px
  height 300px
  overflow hidden
  .image-fit
    width 100%
    height auto
    object-fit cover
</style>
