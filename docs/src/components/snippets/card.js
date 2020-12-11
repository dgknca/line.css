const mixin = {
  data() {
    return {
      card: `<div class="card">
  <div class="card-image">
    <img src="../../assets/images/img-3.jpg" />
  </div>
  <div class="card-content">
    <h4 class="card-title">Card Title</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit purus mauris tellus eget. Justo elementum leo orci eget aliquet nunc. Arcu pharetra ultrices eu vitae, rutrum dictum purus et. Ac mauris in luctus nunc, sagittis.</p>
  </div>
</div>`,
      cardV: `<div class="card card-v">
  <div class="card-image">
    <img src="../../assets/images/img-2.jpg" />
  </div>
  <div class="card-content">
    <h4 class="card-title">Card Title</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit purus mauris tellus eget. Justo elementum leo orci eget aliquet nunc. Arcu pharetra ultrices eu vitae, rutrum dictum purus et. Ac mauris in luctus nunc, sagittis.</p>
  </div>
</div>`,
      play: `<style>
  .my-custom-card {
    --shadow-distance: 15px;
    --card-image-height: 200px;
  }

  .my-custom-card .card-image {
    --border-color: var(--yellow-dark);
    --border-width: 3px;
  }
</style>

<div class="card pink shadow-right shadow-top my-custom-card">
  <div class="card-image">
    <img src="../../assets/images/img-3.jpg" />
  </div>
  <div class="card-content">
    <h4 class="card-title">Card Title</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit purus mauris tellus eget. Justo elementum leo orci eget aliquet nunc. Arcu pharetra ultrices eu vitae, rutrum dictum purus et. Ac mauris in luctus nunc, sagittis.</p>
  </div>
</div>`
    }
  }
}

export { mixin as cardMixin }
