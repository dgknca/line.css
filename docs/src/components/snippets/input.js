const mixin = {
  data() {
    return {
      defaultInput: `<input class="input" type="text" placeholder="Text">`,
      colors: `<input class="input green" type="text" placeholder="Green">
<input class="input orange" type="text" placeholder="Orange">
<input class="input red" type="text" placeholder="Red">
<input class="input pink" type="text" placeholder="Pink">
<input class="input purple" type="text" placeholder="Purple">
<input class="input yellow" type="text" placeholder="Yellow">
<input class="input blue" type="text" placeholder="Blue">`,
      focus: `<input class="input focus green" type="text" placeholder="Green">
<input class="input focus orange" type="text" placeholder="Orange">
<input class="input focus red" type="text" placeholder="Red">
<input class="input focus pink" type="text" placeholder="Pink">
<input class="input focus purple" type="text" placeholder="Purple">
<input class="input focus yellow" type="text" placeholder="Yellow">
<input class="input focus blue" type="text" placeholder="Blue">`,
      disabled: `<input class="input green" type="text" placeholder="Green Input" disabled>
<input class="input orange" type="text" placeholder="Orange Input" disabled>
<input class="input red" type="text" placeholder="Red Input" disabled>
<input class="input pink" type="text" placeholder="Pink Input" disabled>
<input class="input purple" type="text" placeholder="Purple Input" disabled>
<input class="input yellow" type="text" placeholder="Yellow Input" disabled>
<input class="input blue" type="text" placeholder="Blue Input" disabled>`,
      withIcon: `<div class="control">
  <input class="input has-icon-left has-icon-right" type="email" placeholder="Email">
  <span class="icon-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  </span>
  <span class="icon-right">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  </span>
</div>`,
      play: `<style>
  .my-custom-input {
    --border-color: var(--pink);
    --border-width: 3px;
    --border-radius: 25px;
    --input-height: 50px;
    --text-color: var(--purple-dark);
    --placeholder-color: var(--purple);
    --focus-box-shadow-width: 3px;
    --focus-box-shadow-color: var(--pink-light);
  }
</style>

<input class="input my-custom-input" type="text" placeholder="Custom input">`
    }
  }
}

export { mixin as inputMixin }
