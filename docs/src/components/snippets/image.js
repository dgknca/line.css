const mixin = {
  data() {
    return {
      image: `<div class="img">
  <img src="../../assets/images/img-2.jpg" />
</div>`,
      play: `<style>
  .my-custom-image {
    --aspect-ratio: 16/9;
    --shadow-distance: 10px;
    margin-bottom: 30px;
  }
</style>

<!-- We've used the --aspect-ratio property in a class, hence we have to add 'aspect-ratio' to this img. -->
<div class="img aspect-ratio my-custom-image">
  <img src="../../assets/images/img-2.jpg" />
</div>

<!-- We're using as inline the --aspect-ratio, so no 'aspect-ratio' class needed. -->
<div class="img" style="--aspect-ratio: 1/1">
  <img src="../../assets/images/img-3.jpg" />
</div>`,
      play2: `<!-- We're using as inline the --aspect-ratio, so no 'aspect-ratio' needed. -->
<div class="img" style="--aspect-ratio: 1/1">
  <img src="../../assets/images/img-3.jpg" />
</div>`
    }
  }
}

export { mixin as imageMixin }
