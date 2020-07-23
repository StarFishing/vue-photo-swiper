import PhotoSwiper from './index.vue'
// @ts-ignore
PhotoSwiper.install = function(Vue: any) {
  console.log(PhotoSwiper)
  Vue.component('PhotoSwiper', PhotoSwiper)
}

export default PhotoSwiper
