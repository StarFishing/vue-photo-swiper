<template>
  <div id="app">
    <Demo></Demo>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import Demo from '@/exmples/index.vue'
@Component({
  components: { Demo },
})
export default class App extends Vue {}
</script>
<style lang="stylus">
html
  height 100%
body
  margin 0
  height 100%
#app
  height 100%
  background: linear-gradient(to left bottom, hsl(248, 100%, 85%) 0%,hsl(104, 100%, 85%) 100%);
@media screen and (max-width :600px){
  #app{
    padding:0 20px;
  }
}
</style>
