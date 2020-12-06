const mixin = {
  data() {
    return {
      button: `<label class="input-file">
  <input type="file" required>
  <button type="button" class="btn btn-file">
    <span class="file-default">Select a file</span>
    <span class="file-success">Your files are selected</span>
  </button>
</label>`,
      dragdrop: `<label class="input-file input-file-drag-drop">
  <input type="file" required>
  <div class="file-dummy">
    <span class="file-default">Drag & drop or <a>browse</a></span>
    <span class="file-success">Great, your files are selected. Keep on.</span>
  </div>
</label>`
    }
  }
}

export { mixin as fileInputMixin }
