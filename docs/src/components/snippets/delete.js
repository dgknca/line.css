const mixin = {
  data() {
    return {
      defaultDelete: `<a class="delete delete-sm"></a>
<a class="delete"></a>
<a class="delete delete-l"></a>`,
      colors: `<a class="delete"></a>
<a class="delete green"></a>
<a class="delete pink"></a>
<a class="delete orange"></a>
<a class="delete yellow"></a>
<a class="delete red"></a>
<a class="delete pink"></a>
<a class="delete purple"></a>
<a class="delete blue"></a>`
    }
  }
}

export { mixin as deleteMixin }
