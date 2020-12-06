const mixin = {
  data() {
    return {
      defaultSelect: `<select class="select">
  <option>Apples</option>
  <option selected>Pineapples</option>
  <option>Chocklate</option>
  <option>Pancakes</option>
</select>`
    }
  }
}

export { mixin as selectMixin }
