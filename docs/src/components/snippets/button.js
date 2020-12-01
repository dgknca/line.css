const mixin = {
  data() {
    return {
      sizes: `<div class="buttons">
  <button class="btn btn-sm">Small</button>
  <button class="btn">Default</button>
  <button class="btn btn-md">Medium</button>
  <button class="btn btn-l">Large</button>
</div>`,
      colors: `<div class="buttons">
  <a href="#0" class="btn">Default</a>
  <a href="#0" class="btn btn-green">Green</a>
  <a href="#0" class="btn btn-orange">Orange</a>
  <a href="#0" class="btn btn-red">Red</a>
  <a href="#0" class="btn btn-pink">Pink</a>
  <a href="#0" class="btn btn-purple">Purple</a>
  <a href="#0" class="btn btn-yellow">Yellow</a>
  <a href="#0" class="btn btn-blue">Blue</a>
</div>`,
      hover: `<div class="buttons">
  <a href="#0" class="btn hover">Button</a>
  <a href="#0" class="btn hover btn-green">Button</a>
  <a href="#0" class="btn hover btn-orange">Button</a>
  <a href="#0" class="btn hover btn-red">Button</a>
  <a href="#0" class="btn hover btn-pink">Button</a>
  <a href="#0" class="btn hover btn-purple">Button</a>
  <a href="#0" class="btn hover btn-blue">Button</a>
  <a href="#0" class="btn hover btn-yellow">Button</a>
</div>`,
      active: `<div class="buttons">
  <a href="#0" class="btn active">Button</a>
  <a href="#0" class="btn active btn-green">Button</a>
  <a href="#0" class="btn active btn-orange">Button</a>
  <a href="#0" class="btn active btn-red">Button</a>
  <a href="#0" class="btn active btn-pink">Button</a>
  <a href="#0" class="btn active btn-purple">Button</a>
  <a href="#0" class="btn active btn-blue">Button</a>
  <a href="#0" class="btn active btn-yellow">Button</a>
</div>`,
      loading: `<div class="buttons">
  <a href="#0" class="btn btn-loading btn-green">Button</a>
  <a href="#0" class="btn btn-loading btn-orange">Button</a>
  <a href="#0" class="btn btn-loading btn-red">Button</a>
  <a href="#0" class="btn btn-loading btn-pink">Button</a>
  <a href="#0" class="btn btn-loading btn-purple">Button</a>
  <a href="#0" class="btn btn-loading btn-blue">Button</a>
  <a href="#0" class="btn btn-loading btn-yellow">Button</a>
</div>`,
      disabled: `<div class="buttons">
  <a href="#0" disabled class="btn">Button</a>
  <a href="#0" disabled class="btn btn-green">Button</a>
  <a href="#0" disabled class="btn btn-orange">Button</a>
  <a href="#0" disabled class="btn btn-red">Button</a>
  <a href="#0" disabled class="btn btn-pink">Button</a>
  <a href="#0" disabled class="btn btn-purple">Button</a>
  <a href="#0" disabled class="btn btn-blue">Button</a>
  <a href="#0" disabled class="btn btn-yellow">Button</a>
</div>`,
      fullWidth: `<button class="btn btn-md btn-full">
  Button Full Width
</button>`,
      noShadow: `<button class="btn no-shadow">No Shadow</button>`,
      globalCustomProperties: `<button
  class="btn btn-md"
  style="--border-radius: 8px;--shadow-distance: 7px;">
  Custom Button
</button>`,
      localCustomProperties: `<style>
  .my-custom-btn {
    --back-bg: yellow;
    --border: orangered;
    --active-border-color: blue;
  }
</style>

<button class="btn btn-md my-custom-btn">
  Custom Button
</button>`,
      withIcon: `<div class="buttons">
  <button type="button" class="btn btn-sm">
    <span class="btn-icon btn-icon-left">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    </span>
    <span class="btn-text">Left</span>
  </button>
  <button type="button" class="btn btn-sm">
    <span class="btn-text">Right</span>
    <span class="btn-icon btn-icon-right">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </span>
  </button>
</div>`
    }
  }
}

export { mixin as buttonMixin }
