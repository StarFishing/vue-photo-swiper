<template>
  <div>
    <test></test>
  </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator'
import test from './test'
@Component({
  components: {
    test,
  },
})
export default class ClassName extends Vue {}
</script>

<style lang="stylus" scoped></style>
