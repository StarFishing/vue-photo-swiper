import Vue from 'vue'
import PhotoSwiper from './index.vue'
const Components = {
  PhotoSwiper,
}
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
