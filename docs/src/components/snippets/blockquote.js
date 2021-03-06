const mixin = {
  data() {
    return {
      blockquote: `<blockquote class="blockquote">
  <p class="blockquote-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit purus mauris tellus eget.
    Justo elementum leo orci eget aliquet nunc. Arcu pharetra ultrices eu vitae, rutrum dictum purus et.
    Ac mauris in luctus nunc, sagittis.
  </p>
</blockquote>`,
      blockquoteWithTitle: `<blockquote class="blockquote">
  <span class="blockquote-title">HEY!</span>
  <p class="blockquote-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit purus mauris tellus eget.
    Justo elementum leo orci eget aliquet nunc. Arcu pharetra ultrices eu vitae, rutrum dictum purus et.
    Ac mauris in luctus nunc, sagittis.
  </p>
  <footer class="blockquote-footer">dgknca</footer>
</blockquote>`
    }
  }
}

export { mixin as blockquoteMixin }
