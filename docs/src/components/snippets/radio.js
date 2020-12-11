const mixin = {
  data() {
    return {
      defaultRadio: `<label class="radio">
  <input type="radio" name="answer" checked> Yes
</label>
<label class="radio">
  <input type="radio" name="answer"> No
</label>`,
      colors: `<label class="radio green">
  <input type="radio" name="group2">
</label>
<label class="radio orange">
  <input type="radio" name="group2">
</label>
<label class="radio red">
  <input type="radio" name="group2">
</label>
<label class="radio pink">
  <input type="radio" name="group2">
</label>
<label class="radio purple">
  <input type="radio" name="group2">
</label>
<label class="radio yellow">
  <input type="radio" name="group2">
</label>
<label class="radio blue">
  <input type="radio" name="group2">
</label>`,
      focus: `<label class="radio focus">
  <input type="radio" name="group3">
</label>
<label class="radio focus green">
  <input type="radio" name="group3">
</label>
<label class="radio focus orange">
  <input type="radio" name="group3">
</label>
<label class="radio focus red">
  <input type="radio" name="group3">
</label>
<label class="radio focus pink">
  <input type="radio" name="group3">
</label>
<label class="radio focus purple">
  <input type="radio" name="group3">
</label>
<label class="radio focus yellow">
  <input type="radio" name="group3">
</label>
<label class="radio focus blue">
  <input type="radio" name="group3">
</label>`,
      disabled: `<label class="radio" disabled>
  <input type="radio" disabled> Disabled radio
</label>
<label class="radio green" disabled>
  <input type="radio" disabled>
</label>
<label class="radio orange" disabled>
  <input type="radio" disabled>
</label>
<label class="radio red" disabled>
  <input type="radio" disabled>
</label>
<label class="radio pink" disabled>
  <input type="radio" disabled>
</label>
<label class="radio purple" disabled>
  <input type="radio" disabled>
</label>
<label class="radio yellow" disabled>
  <input type="radio" disabled>
</label>
<label class="radio blue" disabled>
  <input type="radio" disabled>
</label>`
    }
  }
}

export { mixin as radioMixin }
