const mixin = {
  data() {
    return {
      defaultCheckbox: `<label class="checkbox">
  <input type="checkbox"> Remember me
</label>`,
      colors: `<label class="checkbox green">
  <input type="checkbox" checked>
</label>
<label class="checkbox orange">
  <input type="checkbox">
</label>
<label class="checkbox red">
  <input type="checkbox">
</label>
<label class="checkbox pink">
  <input type="checkbox">
</label>
<label class="checkbox purple">
  <input type="checkbox">
</label>
<label class="checkbox yellow">
  <input type="checkbox">
</label>
<label class="checkbox blue">
  <input type="checkbox">
</label>`,
      focus: `<label class="checkbox focus">
  <input type="checkbox">
</label>
<label class="checkbox focus green">
  <input type="checkbox">
</label>
<label class="checkbox focus orange">
  <input type="checkbox">
</label>
<label class="checkbox focus red">
  <input type="checkbox">
</label>
<label class="checkbox focus pink">
  <input type="checkbox">
</label>
<label class="checkbox focus purple">
  <input type="checkbox">
</label>
<label class="checkbox focus yellow">
  <input type="checkbox">
</label>
<label class="checkbox focus blue">
  <input type="checkbox">
</label>`,
      disabled: `<label class="checkbox" disabled>
  <input type="checkbox" disabled> Disabled checkbox
</label>
<label class="checkbox green" disabled>
  <input type="checkbox" disabled>
</label>
<label class="checkbox orange" disabled>
  <input type="checkbox" disabled>
</label>
<label class="checkbox red" disabled>
  <input type="checkbox" disabled>
</label>
<label class="checkbox pink" disabled>
  <input type="checkbox" disabled>
</label>
<label class="checkbox purple" disabled>
  <input type="checkbox" disabled>
</label>
<label class="checkbox yellow" disabled>
  <input type="checkbox" disabled>
</label>
<label class="checkbox blue" disabled>
  <input type="checkbox" disabled>
</label>`
    }
  }
}

export { mixin as checkboxMixin }
