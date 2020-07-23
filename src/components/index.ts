import PhotoSwiper from './PhotoSwiper'

// 存储组件列表
const components = [PhotoSwiper]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install: any = function(Vue: any) {
  // 遍历注册全局组件
  //github.com/StarFishing/vue-photo-swiper/issues/2
  components.map(component => {
    Vue.use(component)
  })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  PhotoSwiper,
}
export { PhotoSwiper }
