const mixin = {
  data() {
    return {
      defaultCheckbox: `<label class="checkbox">
  <input type="checkbox"> Remember me
</label>`,
      colors: `<div class="inputs">
  <label class="checkbox el-green">
    <input type="checkbox">
  </label>
  <label class="checkbox el-orange">
    <input type="checkbox">
  </label>
  <label class="checkbox el-red">
    <input type="checkbox">
  </label>
  <label class="checkbox el-pink">
    <input type="checkbox">
  </label>
  <label class="checkbox el-purple">
    <input type="checkbox">
  </label>
  <label class="checkbox el-yellow">
    <input type="checkbox">
  </label>
  <label class="checkbox el-blue">
    <input type="checkbox">
  </label>
</div>`,
      focus: `<div class="inputs">
<label class="checkbox focus">
  <input type="checkbox">
</label>
<label class="checkbox focus el-green">
  <input type="checkbox">
</label>
<label class="checkbox focus el-orange">
  <input type="checkbox">
</label>
<label class="checkbox focus el-red">
  <input type="checkbox">
</label>
<label class="checkbox focus el-pink">
  <input type="checkbox">
</label>
<label class="checkbox focus el-purple">
  <input type="checkbox">
</label>
<label class="checkbox focus el-yellow">
  <input type="checkbox">
</label>
<label class="checkbox focus el-blue">
  <input type="checkbox">
</label>
</div>`,
      disabled: `<div class="inputs">
  <label class="checkbox" disabled>
    <input type="checkbox" disabled>
  </label>
  <label class="checkbox el-green" disabled>
    <input type="checkbox" disabled>
  </label>
  <label class="checkbox el-orange" disabled>
    <input type="checkbox" disabled>
  </label>
  <label class="checkbox el-red" disabled>
    <input type="checkbox" disabled>
  </label>
  <label class="checkbox el-pink" disabled>
    <input type="checkbox" disabled>
  </label>
  <label class="checkbox el-purple" disabled>
    <input type="checkbox" disabled>
  </label>
  <label class="checkbox el-yellow" disabled>
    <input type="checkbox" disabled>
  </label>
  <label class="checkbox el-blue" disabled>
    <input type="checkbox" disabled>
  </label>
</div>`
    }
  }
}

export { mixin as checkboxMixin }
