<template>
  <div>
    <Demo></Demo>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import Demo from '@/components/demo/index.vue'
@Component({
  components: { Demo },
})
export default class ClassName extends Vue {}
</script>

<style lang="stylus" scoped></style>
