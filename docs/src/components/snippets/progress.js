const mixin = {
  data() {
    return {
      progress: `<progress class="progress" value="15" max="100">15%</progress>`,
      sizes: `<progress class="progress progress-sm" value="15" max="100">15%</progress>
<progress class="progress" value="15" max="100">15%</progress>
<progress class="progress progress-l" value="15" max="100">15%</progress>`,
      colors: `<progress class="progress" value="15" max="100">15%</progress>
<progress class="progress pink" value="25" max="100">15%</progress>
<progress class="progress green" value="60" max="100">15%</progress>
<progress class="progress orange" value="47" max="100">15%</progress>
<progress class="progress red" value="88" max="100">15%</progress>
<progress class="progress purple" value="22" max="100">15%</progress>
<progress class="progress blue" value="70" max="100">15%</progress>
<progress class="progress yellow" value="62" max="100">15%</progress>`
      //       play: `<style>
      //  .my-custom-progress {
      //   --border-color: var(--pink-dark);
      //   --progress-value-bg: var(--purple-dark);
      //   --progress-bar-bg: var(--yellow-light);
      //  }
      // </style>

      // <progress class="progress my-custom-progress" value="15" max="100">15%</progress>`
    }
  }
}

export { mixin as progressMixin }
