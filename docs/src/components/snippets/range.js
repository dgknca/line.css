const mixin = {
  data() {
    return {
      defaultRange: `<input type="range"/>`,
      disabled: `<input type="range" disabled/>`,
      play: `<style>
.my-custom-range {
  --track-color: var(--yellow-light);
  --track-color--focus: var(--yellow);
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

<input type="range" class="my-custom-range"/>`
    }
  }
}

export { mixin as rangeMixin }
