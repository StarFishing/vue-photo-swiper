<template>
  <div class="wrapper" style="padding-top:40px">
    <h2>plugin-photo-swiper</h2>
    <p>
      这个组件可以实现下面的效果，点击查看预览效果。也提供了丰富的api和配置项供您选择。
      👉
      <a
        href="https://photoswipe.com/documentation/options.html"
        style="text-decoration: none;color: white;"
      >
        文档地址
      </a>
      👈 👉
      <a
        href="https://github.com/StarFishing/vue-photo-swiper.git"
        style="text-decoration: none;color: white;"
      >
        GitHub
      </a>
      👈
    </p>

    <div class="wrapper wrapper-content">
      <div class="content content-test gallery">
        <div
          class="swiper-item gallery-item"
          v-for="(url, index) in imagesFirst"
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
      <div class="content content-test gallery">
        <div
          class="swiper-item gallery-item"
          v-for="(url, index) in imagesEnd"
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
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import PhotoSwiper from '../index'
Vue.use(PhotoSwiper)

@Component({
  components: {},
})
export default class Demo extends Vue {
  imagesFirst = [
    {
      src: 'https://i.loli.net/2020/04/01/G4xSQz7tr5gkNL6.jpg',
      w: 1600,
      h: 2844,
    },
    {
      src: 'http://b.zol-img.com.cn/soft/6/474/cebwQjVh9gUX.jpg',
      w: 1280,
      h: 1024,
    },
  ]
  imagesEnd = [
    {
      src:
        'http://attach.bbs.miui.com/forum/201505/26/165830wjhnbgkouuyyybyv.jpg',
      w: 3888,
      h: 2596,
    },
    {
      src:
        'http://a.hiphotos.baidu.com/zhidao/pic/item/ae51f3deb48f8c54048ef19d38292df5e0fe7f26.jpg',
      w: 1920,
      h: 1080,
    },
    {
      src:
        'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/15/c6/24496431_1376533800414.jpg',
      w: 1920,
      h: 1200,
    },
    {
      src:
        'http://i0.hdslb.com/bfs/article/b313e6cdac46bb9da526521574147c71f89f41f0.jpg',
      w: 1500,
      h: 1036,
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
.wrapper-content
  display flex
.content
  flex 1
  display flex
  flex-direction column
.swiper-item
  width 100%
  overflow hidden
  display flex
  flex-direction column
  .image-fit
    width 100%
    height auto
    object-fit cover
@media screen and (max-width:600px){
  .wrapper{
    width :100%;
  }

}
</style>
