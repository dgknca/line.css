const mixin = {
  data() {
    return {
      defaultRadio: `<label class="radio">
  <input type="radio" name="answer"> Yes
</label>
<label class="radio">
  <input type="radio" name="answer"> No
</label>`,
      colors: `<label class="radio el-green">
  <input type="radio" name="group2">
</label>
<label class="radio el-orange">
  <input type="radio" name="group2">
</label>
<label class="radio el-red">
  <input type="radio" name="group2">
</label>
<label class="radio el-pink">
  <input type="radio" name="group2">
</label>
<label class="radio el-purple">
  <input type="radio" name="group2">
</label>
<label class="radio el-yellow">
  <input type="radio" name="group2">
</label>
<label class="radio el-blue">
  <input type="radio" name="group2">
</label>`,
      focus: `<label class="radio focus">
  <input type="radio" name="group3">
</label>
<label class="radio focus el-green">
  <input type="radio" name="group3">
</label>
<label class="radio focus el-orange">
  <input type="radio" name="group3">
</label>
<label class="radio focus el-red">
  <input type="radio" name="group3">
</label>
<label class="radio focus el-pink">
  <input type="radio" name="group3">
</label>
<label class="radio focus el-purple">
  <input type="radio" name="group3">
</label>
<label class="radio focus el-yellow">
  <input type="radio" name="group3">
</label>
<label class="radio focus el-blue">
  <input type="radio" name="group3">
</label>`,
      disabled: `<label class="radio" disabled>
  <input type="radio" disabled> Disabled radio
</label>
<label class="radio el-green" disabled>
  <input type="radio" disabled>
</label>
<label class="radio el-orange" disabled>
  <input type="radio" disabled>
</label>
<label class="radio el-red" disabled>
  <input type="radio" disabled>
</label>
<label class="radio el-pink" disabled>
  <input type="radio" disabled>
</label>
<label class="radio el-purple" disabled>
  <input type="radio" disabled>
</label>
<label class="radio el-yellow" disabled>
  <input type="radio" disabled>
</label>
<label class="radio el-blue" disabled>
  <input type="radio" disabled>
</label>`
    }
  }
}

export { mixin as radioMixin }
