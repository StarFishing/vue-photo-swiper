import PhotoSwiper from './index.vue'
let components = PhotoSwiper as any
components.install = function(Vue: any) {
  Vue.component(PhotoSwiper.name, PhotoSwiper)
}

export default PhotoSwiper
