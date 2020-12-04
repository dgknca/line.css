const mixin = {
  data() {
    return {
      cdn: `<!-- UNPKG -->
<link rel="stylesheet" href="https://unpkg.com/line.css.min.css"/>

<!-- or JSDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/line.css.min.css"/>`,
      npm: `npm i line.css`,
      importLibrary: `import 'line.css'`
    }
  }
}

export { mixin as gettingStartedMixin }
