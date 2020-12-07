const mixin = {
  data() {
    return {
      defaultRange: `<input type="range" class="range"/>`,
      disabled: `<input type="range" class="range" disabled/>`,
      play: `<style>
.my-custom-range {
  --track-color: var(--yellow-light);
  --focus-track-color: var(--yellow);
  --thumb-color: var(--pink);
  --thumb-radius: 4px;
  --thumb-height: 28px;
  --thumb-width: 28px;
  --thumb-border-width: 2px;
  --thumb-border-color: var(--red-dark);
  --track-width: 100%;
  --track-height: 10px;
  --track-border-width: 2px;
  --track-border-color: var(--yellow-dark);
  --track-radius: 3px;
}
</style>

<input type="range" class="range my-custom-range"/>`
    }
  }
}

export { mixin as rangeMixin }
