const mixin = {
  data() {
    return {
      defaultSelect: `<select class="select">
  <option>Apples</option>
  <option selected>Pineapples</option>
  <option>Chocklate</option>
  <option>Pancakes</option>
</select>`,
      play: `
<style>
  .my-custom-select {
    --select-icon-size: 25px;
    --select-icon: url("data:image/svg+xml,%3Csvg viewBox='0 0 110 110' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='11' width='98' height='98' rx='8' fill='%23C4C4C4' stroke='black' stroke-width='2'%3E%3C/rect%3E%3Crect x='11' y='1' width='98' height='98' rx='8' fill='white' stroke='black' stroke-width='2'%3E%3C/rect%3E%3Cpath d='M48 29H53.312V66.44H71.68V70.984H48V29Z' fill='black'%3E%3C/path%3E%3C/svg%3E");
  }
</style>

<select class="select pink my-custom-select">
  <option>Line.css is...</option>
  <option>Pretty minimal</option>
  <option>So cute</option>
  <option>Something else</option>
</select>`
    }
  }
}

export { mixin as selectMixin }
