import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  value = ''
  @Watch('value')
  log(n: string) {
    console.log(n)
  }
  render() {
    return (
      <div>
        <input type="text" v-model={this.value} />

        {this.value}
      </div>
    )
  }
}
