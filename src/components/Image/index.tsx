import './style.styl'
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
@Component
export default class Images extends Vue {
  @Prop({ type: String })
  src!: string
  @Prop({ type: Boolean, default: true })
  showLoading!: boolean

  @Watch('src')
  setLoading() {
    this.loading = true
    this.error = false
  }
  onLoad(event: Event) {
    this.loading = false
    this.$emit('load', event)
  }
  onError(event: Event) {
    this.error = true
    this.loading = false
    this.$emit('error', event)
  }

  onClick(event: MouseEvent) {
    this.$emit('click', event)
  }

  loading = true
  error = false

  render() {
    return (
      <div onClick={this.onClick} class="track-img-wrapper">
        <img
          class="pic-swiper-img pre-image-fit"
          src={this.src}
          onLoad={this.onLoad}
          onError={this.onError}
        ></img>
      </div>
    )
  }
}
