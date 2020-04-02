import Vue from 'vue'
import App from './App.vue'
import { PhotoSwiper } from './components/index'
// @ts-ignore
Vue.use(PhotoSwiper)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
