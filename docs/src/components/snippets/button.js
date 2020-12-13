const mixin = {
  data() {
    return {
      sizes: `<div class="buttons">
  <button class="btn btn-sm">Small</button>
  <button class="btn">Default</button>
  <button class="btn btn-l">Large</button>
</div>`,
      colors: `<div class="buttons">
  <button class="btn">Default</button>
  <button class="btn green">Green</button>
  <button class="btn orange">Orange</button>
  <button class="btn red">Red</button>
  <button class="btn pink">Pink</button>
  <button class="btn purple">Purple</button>
  <button class="btn yellow">Yellow</button>
  <button class="btn blue">Blue</button>
</div>`,
      hover: `<div class="buttons">
  <button class="btn hover">Button</button>
  <button class="btn hover green">Button</button>
  <button class="btn hover orange">Button</button>
  <button class="btn hover red">Button</button>
  <button class="btn hover pink">Button</button>
  <button class="btn hover purple">Button</button>
  <button class="btn hover blue">Button</button>
  <button class="btn hover yellow">Button</button>
</div>`,
      active: `<div class="buttons">
  <button class="btn active">Button</button>
  <button class="btn active green">Button</button>
  <button class="btn active orange">Button</button>
  <button class="btn active red">Button</button>
  <button class="btn active pink">Button</button>
  <button class="btn active purple">Button</button>
  <button class="btn active blue">Button</button>
  <button class="btn active yellow">Button</button>
</div>`,
      loading: `<div class="buttons">
  <button class="btn btn-loading green">Button</button>
  <button class="btn btn-loading orange">Button</button>
  <button class="btn btn-loading red">Button</button>
  <button class="btn btn-loading pink">Button</button>
  <button class="btn btn-loading purple">Button</button>
  <button class="btn btn-loading blue">Button</button>
  <button class="btn btn-loading yellow">Button</button>
</div>`,
      disabled: `<div class="buttons">
  <button disabled class="btn">Button</button>
  <button disabled class="btn green">Button</button>
  <button disabled class="btn orange">Button</button>
  <button disabled class="btn red">Button</button>
  <button disabled class="btn pink">Button</button>
  <button disabled class="btn purple">Button</button>
  <button disabled class="btn blue">Button</button>
  <button disabled class="btn yellow">Button</button>
</div>`,
      fullWidth: `<button class="btn btn-full" style="--shadow-distance:22px">
  Full Width
</button>`,
      noShadow: `<button class="btn no-shadow">No Shadow</button>`,
      rightShadow: `<button class="btn green shadow-right">Shadow Right</button>`,
      topShadow: `<button class="btn pink shadow-top shadow-right">Shadow Top Right</button>`,
      withIcon: `<div class="buttons">
  <button type="button" class="btn btn-sm">
    <span class="btn-icon btn-icon-left">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    </span>
    Left
  </button>
  <button type="button" class="btn btn-sm">
    Right
    <span class="btn-icon btn-icon-right">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </span>
  </button>
</div>`,
      play: `<style>
.my-custom-btn {
  --focus-box-shadow-width: 5px;
  --focus-box-shadow-color: yellow;
  --shadow-bg: lightblue;
  --border-color: orangered;
  --border-radius: 6px;
  --shadow-distance: 6px;
}
</style>

<button class="btn my-custom-btn">Button</button>`
    }
  }
}

export { mixin as buttonMixin }
