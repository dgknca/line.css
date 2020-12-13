const mixin = {
  data() {
    return {
      customPropertyOnRoot: `<style>
  :root {
    --shadow-distance: 20px;
  }
</style>`,
      customPropertyInAClass: `<style>
  .my-custom-btn {
    --shadow-distance: 20px;
  }
</style>

<button class="btn my-custom-btn">Custom Button</button>`
    }
  }
}

export { mixin as homeMixin }
