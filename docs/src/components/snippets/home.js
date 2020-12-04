const mixin = {
  data() {
    return {
      noShadow: `<button class="btn no-shadow">No Shadow</button>`,
      borderRadiusShadowDistance: `<button
  class="btn btn-md"
  style="--border-radius: 8px;--shadow-distance: 7px;">
  Custom Button
</button>`,

      rightShadow: `<a href="#0" class="btn shadow-right btn-green">Green</a>`,
      topShadow: `<a href="#0" class="btn shadow-top shadow-right btn-pink">Green</a>`,
      borderBackBg: `<style>
  .my-custom-btn {
    --back-bg: yellow;
    --border: orangered;
  }
</style>

<button class="btn btn-md my-custom-btn">
  Custom Button
</button>`
    }
  }
}

export { mixin as homeMixin }
