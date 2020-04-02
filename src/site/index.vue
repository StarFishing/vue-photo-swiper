<template>
  <div class="wrapper"
       style="padding-top:40px">
    <h2>plugin-photo-swiper</h2>
    <p style="color:#666">
      一款支持图片缩放归位的预览插件。插件基于Vue实现，使用TypeScript语法，所以兼顾了主流的开发环境，也提供了丰富的api和配置项供您选择。插件依赖于photoswiper,所以支持他所有的可配置项和特性。
      👉
      <a href="https://starfishing.github.io/vue-photo-swiper-docs/"
         style="text-decoration: none;color: white;">
        文档地址
      </a>
      👈 👉
      <a href="https://github.com/StarFishing/vue-photo-swiper.git"
         style="text-decoration: none;color: white;">
        GitHub
      </a>
      👈
    </p>
    <h2>Demo</h2>
    <p style="color:#666">点击图片查看示例</p>
    <div class="wrapper wrapper-content">
      <div class="content gallery">
        <div class="swiper-item gallery-item"
             v-for="(url, index) in imagesEnd"
             :key="index"
             :data-origin="url.src"
             :data-size="url.w + 'x' + url.h"
             :data-med="url.src"
             :data-med-size="url.w + 'x' + url.h"
             @click="handlePreview(index)">
          <img :src="url.src"
               alt=""
               class="image-fit" />
        </div>
      </div>
      <photo-swiper @close="handleClose"
                    :pageIndex="{
          position: 'center',
        }"
                    :visible="visible"
                    :options="options"
                    gallerySelector="gallery"
                    gallerySelectorItem="gallery-item"></photo-swiper>
    </div>
    <h2>特性</h2>
    <p style="color:#666">
      <ul>
        <li>移动端双指缩放，双击放大，左右滑动切换</li>
        <li>pc端支持鼠标左右滑动切换，鼠标单击放大</li>
        <li>
          支持图片的缩放归位效果，也支持单纯的图片预览
        </li>
        <li>...</li>
      </ul>
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
// import PhotoSwiper from '../components/PhotoSwiper/index.vue'

@Component({
  components: {},
})
export default class Demo extends Vue {
  // imagesFirst = [
  //   {
  //     src: 'http://b.zol-img.com.cn/soft/6/474/cebwQjVh9gUX.jpg',
  //     w: 1280,
  //     h: 1024,
  //   },
  // ]
  imagesEnd = [
    {
      src: 'https://pic.3h3.com/up/2015-1/20151117170929166317.jpg',
      w: 1920,
      h: 1080,
    },
    {
      src: 'https://images2.alphacoders.com/743/743487.jpg',
      w: 1920,
      h: 1080,
    },
    {
      src:
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4155446215,2192068966&fm=15&gp=0.jpg',
      w: 1920,
      h: 1080,
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
.wrapper
  width 600px
  margin 0 auto
.content
  display flex
.swiper-item
  width 100%
  overflow hidden
  margin-right 10px
  &:last-child
    margin-right 0
  .image-fit
    width 100%
    height auto
@media screen and (max-width: 600px)
  .wrapper
    width 100%
</style>
