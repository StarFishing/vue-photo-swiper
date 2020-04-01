## plugin-photo-swiper

它是一款基于vue+ typescript+cli3 的图片预览组件，可以进行左右切换图片预览，更好的是它还可以从点击元素进行无缝过渡，使得图片预览看起来个更加平滑，组件预览和轮播滚动他都做到了。 组件基于 photoswiper,所以兼容了他所有的可配置项，并进行了一些功能的改造。

## 使用方式

```shell
npm install plugin-photo-swiper -s
```

然后在使用的地方进行注册，当然你也可以选择全局注册，像这样

```js
import 'plugin-photo-swiper/lib/photo-swiper.css'
import PhotoSwiper from 'plugin-photo-swiper'
Vue.use(PhotoSwiper)
```

Css 文件的引入是必要的，否则将不会有预期的效果，你也可以自定义样式。如果你也是typescript开发环境，为了避免报错，记得安装@types/plugin-photo-swiper

在模板文件中我们只需要给一些必要的配置项

```vue
    <photo-swiper
      :images="images" // 图片数组类似于这样[{src:'like.jpg',w: 1920,h: 1200}]
      @close="handleClose" // 关闭的回调
      :pageIndex="{
        position: 'center',
      }"
      :visible="visible" // 是否展示，是个必穿参数
    ></photo-swiper>
```

现在就有点样子了

![image-20200401221701784.png](https://i.loli.net/2020/04/01/LwJNqVQcuf7HEMg.png)

更多配置可以参考文档

配置文档