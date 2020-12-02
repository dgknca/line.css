const mixin = {
  data() {
    return {
      noShadow: `<button class="btn no-shadow">No Shadow</button>`,
      globalCustomProperties: `<button
  class="btn btn-md"
  style="--border-radius: 8px;--shadow-distance: 7px;">
  Custom Button
</button>`,

      rightShadow: `<a href="#0" class="btn shadow-right btn-green">Green</a>`,
      topShadow: `<a href="#0" class="btn shadow-top shadow-right btn-pink">Green</a>`
    }
  }
}

export { mixin as homeMixin }
