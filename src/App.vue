<template>
  <div id="app">
    <Demo></Demo>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import Demo from '@/components/demo/index.vue'
@Component({
  components: { Demo },
})
export default class App extends Vue {}
</script>
<style lang="stylus">
body
  margin 0
#app
  background: linear-gradient(to left bottom, hsl(248, 100%, 85%) 0%,hsl(104, 100%, 85%) 100%);
</style>
