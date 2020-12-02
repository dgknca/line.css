const mixin = {
  data() {
    return {
      slider: `<div class="slider">
  <input type="radio" name="slide1" checked="" id="slide-1">
  <div class="slider-item">
    <img src="../assets/images/img-1.jpg">
    <div class="slider-control">
      <label class="slider-next" for="slide-2"></label>
    </div>
  </div>

  <input type="radio" name="slide1" id="slide-2">
  <div class="slider-item">
    <img src="../assets/images/img-2.jpg">
    <div class="slider-control">
      <label class="slider-prev" for="slide-1"></label>
      <label class="slider-next" for="slide-3"></label>
    </div>
  </div>

  <input type="radio" name="slide1" id="slide-3">
  <div class="slider-item">
    <img src="../assets/images/img-3.jpg">
    <div class="slider-control">
      <label class="slider-prev" for="slide-2"></label>
      <label class="slider-next" for="slide-4"></label>
    </div>
  </div>

  <input type="radio" name="slide1" id="slide-4">
  <div class="slider-item">
    <img src="../assets/images/img-4.jpg">
    <div class="slider-control">
      <label class="slider-prev" for="slide-3"></label>
    </div>
  </div>
</div>`,
      localCustomProperties: `<div class="slider" style="
  --slider-button-size: 40px;
  --slider-width: 90%;
  --slider-height: 200px;
">
  <input type="radio" name="slide2" checked="" id="slide-5">
  <div class="slider-item">
    <img src="../assets/images/img-1.jpg">
    <div class="slider-control">
        <label class="slider-next" for="slide-6"></label>
    </div>
  </div>

  <input type="radio" name="slide2" id="slide-6">
  <div class="slider-item">
    <img src="../assets/images/img-2.jpg">
    <div class="slider-control">
        <label class="slider-prev" for="slide-5"></label>
    </div>
  </div>
</div>`
    }
  }
}

export { mixin as sliderMixin }
