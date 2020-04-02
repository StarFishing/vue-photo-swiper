import PhotoSwiper from './index.vue'
// @ts-ignore
PhotoSwiper.install = function(Vue: any) {
  Vue.component(PhotoSwiper.name, PhotoSwiper)
}

export default PhotoSwiper
