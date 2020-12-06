const mixin = {
  data() {
    return {
      borderRadiusShadowDistance: `<button
  class="btn btn-md"
  style="--border-radius: 8px;--shadow-distance: 7px;">
  Custom Button
</button>`,

      borderBackBg: `<style>
  .my-custom-btn {
    --shadow-bg: yellow;
    --border-color: orangered;
  }
</style>

<button class="btn btn-md my-custom-btn">
  Custom Button
</button>`
    }
  }
}

export { mixin as homeMixin }
