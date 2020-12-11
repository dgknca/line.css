const mixin = {
  data() {
    return {
      slider: `<div class="slider">
  <input type="radio" name="slider1" checked="" id="slide-1">
  <div class="slider-item">
    <img src="../../assets/images/img-1.jpg">
    <div class="slider-control">
      <label class="slider-next" for="slide-2"></label>
    </div>
  </div>

  <input type="radio" name="slider1" id="slide-2">
  <div class="slider-item">
    <img src="../../assets/images/img-2.jpg">
    <div class="slider-control">
      <label class="slider-prev" for="slide-1"></label>
      <label class="slider-next" for="slide-3"></label>
    </div>
  </div>

  <input type="radio" name="slider1" id="slide-3">
  <div class="slider-item">
    <img src="../../assets/images/img-3.jpg">
    <div class="slider-control">
      <label class="slider-prev" for="slide-2"></label>
      <label class="slider-next" for="slide-4"></label>
    </div>
  </div>

  <input type="radio" name="slider1" id="slide-4">
  <div class="slider-item">
    <img src="../../assets/images/img-4.jpg">
    <div class="slider-control">
      <label class="slider-prev" for="slide-3"></label>
    </div>
  </div>
</div>`,
      play: `<style>
  .my-custom-slider {
    --slider-button-size: 40px;
    --slider-width: 90%;
    --slider-height: 200px;
    --slider-icon-bg: lightyellow;
    --slider-icon-size: 20px;
    --slider-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>');
  }
</style>

<div class="slider my-custom-slider">
  <input type="radio" name="slider2" checked="" id="slide-5">
  <div class="slider-item">
    <img src="../../assets/images/img-1.jpg">
    <div class="slider-control">
        <label class="slider-next" for="slide-6"></label>
    </div>
  </div>

  <input type="radio" name="slider2" id="slide-6">
  <div class="slider-item">
    <img src="../../assets/images/img-2.jpg">
    <div class="slider-control">
        <label class="slider-prev" for="slide-5"></label>
    </div>
  </div>
</div>`
    }
  }
}

export { mixin as sliderMixin }
