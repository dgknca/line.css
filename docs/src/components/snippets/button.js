const mixin = {
  data() {
    return {
      sizes: `<div class="buttons">
  <button class="btn btn-sm">Small</button>
  <button class="btn">Default</button>
  <button class="btn btn-l">Large</button>
</div>`,
      colors: `<div class="buttons">
  <a href="#0" class="btn">Default</a>
  <a href="#0" class="btn el-green">Green</a>
  <a href="#0" class="btn el-orange">Orange</a>
  <a href="#0" class="btn el-red">Red</a>
  <a href="#0" class="btn el-pink">Pink</a>
  <a href="#0" class="btn el-purple">Purple</a>
  <a href="#0" class="btn el-yellow">Yellow</a>
  <a href="#0" class="btn el-blue">Blue</a>
</div>`,
      hover: `<div class="buttons">
  <a href="#0" class="btn hover">Button</a>
  <a href="#0" class="btn hover el-green">Button</a>
  <a href="#0" class="btn hover el-orange">Button</a>
  <a href="#0" class="btn hover el-red">Button</a>
  <a href="#0" class="btn hover el-pink">Button</a>
  <a href="#0" class="btn hover el-purple">Button</a>
  <a href="#0" class="btn hover el-blue">Button</a>
  <a href="#0" class="btn hover el-yellow">Button</a>
</div>`,
      active: `<div class="buttons">
  <a href="#0" class="btn active">Button</a>
  <a href="#0" class="btn active el-green">Button</a>
  <a href="#0" class="btn active el-orange">Button</a>
  <a href="#0" class="btn active el-red">Button</a>
  <a href="#0" class="btn active el-pink">Button</a>
  <a href="#0" class="btn active el-purple">Button</a>
  <a href="#0" class="btn active el-blue">Button</a>
  <a href="#0" class="btn active el-yellow">Button</a>
</div>`,
      loading: `<div class="buttons">
  <a href="#0" class="btn btn-loading el-green">Button</a>
  <a href="#0" class="btn btn-loading el-orange">Button</a>
  <a href="#0" class="btn btn-loading el-red">Button</a>
  <a href="#0" class="btn btn-loading el-pink">Button</a>
  <a href="#0" class="btn btn-loading el-purple">Button</a>
  <a href="#0" class="btn btn-loading el-blue">Button</a>
  <a href="#0" class="btn btn-loading el-yellow">Button</a>
</div>`,
      disabled: `<div class="buttons">
  <button disabled class="btn">Button</button>
  <button disabled class="btn el-green">Button</button>
  <button disabled class="btn el-orange">Button</button>
  <button disabled class="btn el-red">Button</button>
  <button disabled class="btn el-pink">Button</button>
  <button disabled class="btn el-purple">Button</button>
  <button disabled class="btn el-blue">Button</button>
  <button disabled class="btn el-yellow">Button</button>
</div>`,
      fullWidth: `<button class="btn btn-l btn-full">
  Button Full Width
</button>`,
      activeBorderColor: `<button
  class="btn active"
  style="--active-border-color: blue">
  Button
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
