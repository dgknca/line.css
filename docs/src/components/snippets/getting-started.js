const mixin = {
  data() {
    return {
      cdn: `<!-- UNPKG -->
<link rel="stylesheet" href="https://unpkg.com/line.css@0.1.3/line.min.css"/>

<!-- or JSDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/line.css@0.1.3/line.min.css"/>`,
      npm: `npm i line.css`,
      importLibrary: `import 'line.css'`
    }
  }
}

export { mixin as gettingStartedMixin }
