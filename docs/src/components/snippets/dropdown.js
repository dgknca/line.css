const mixin = {
  data() {
    return {
      dropdown: `<div class="dropdown">
  <input type="checkbox" id="dropdown-1">
  <label for="dropdown-1" class="dropdown-trigger">Dropdown</label>
  <div class="dropdown-menu">
    <div class="dropdown-list">
      <div class="dropdown-item">You can insert <strong>any type of content</strong> within the dropdown menu.</div>
      <hr class="dropdown-divider">
      <a href="#0" class="dropdown-item">This is a link</a>
    </div>
  </div>
</div>`,
      withSubList: `<div class="dropdown">
<input type="checkbox" id="dropdown-2">
<label for="dropdown-2" class="dropdown-trigger">Dropdown</label>
<div class="dropdown-menu">
  <div class="dropdown-list">
    <div class="dropdown-item">I have a sublist
      <div class="dropdown-sub-list">
        <a href="#0" class="dropdown-item">Sub item 1</a>
        <a href="#0" class="dropdown-item">Sub item 2</a>
      </div>
    </div>
    <a href="#0" class="dropdown-item">Another action</a>
    <a href="#0" class="dropdown-item">Something else here</a>
  </div>
</div>
</div>`,

      closeOnClickOutside: `<div class="dropdown close-on-click-outside">
<input type="checkbox" id="dropdown-3">
<label for="dropdown-3" class="dropdown-trigger">Dropdown</label>
<div class="dropdown-menu">
  <div class="dropdown-list">
    <div class="dropdown-item">Action
      <div class="dropdown-sub-list">
        <a href="#0" class="dropdown-item">Sub item 1</a>
        <a href="#0" class="dropdown-item">Sub item 2</a>
      </div>
    </div>
    <a href="#0" class="dropdown-item">Another action</a>
    <a href="#0" class="dropdown-item">Something else here</a>
  </div>
</div>
</div>`,
      openOnHover: `<div class="dropdown open-on-hover">
  <button class="dropdown-trigger">Dropdown</button>
  <div class="dropdown-menu">
    <div class="dropdown-list">
      <div class="dropdown-item">Action
        <div class="dropdown-sub-list">
          <a href="#0" class="dropdown-item">Sub item 1</a>
          <a href="#0" class="dropdown-item">Sub item 2</a>
        </div>
      </div>
      <a href="#0" class="dropdown-item">Another action</a>
      <a href="#0" class="dropdown-item">Something else here</a>
    </div>
  </div>
</div>`,
      rightAlign: `<div class="dropdown right-align">
  <input type="checkbox" id="dropdown-4">
  <label for="dropdown-4" class="dropdown-trigger">Dropdown</label>
  <div class="dropdown-menu">
    <div class="dropdown-list">
      <a href="#0" class="dropdown-item">Action</a>
      <a href="#0" class="dropdown-item">Another action</a>
      <a href="#0" class="dropdown-item">Something else here</a>
    </div>
  </div>
</div>`,
      centerAlign: `<div class="dropdown center-align">
  <input type="checkbox" id="dropdown-5">
  <label for="dropdown-5" class="dropdown-trigger">Dropdown</label>
  <div class="dropdown-menu">
    <div class="dropdown-list">
      <a href="#0" class="dropdown-item">Action</a>
      <a href="#0" class="dropdown-item">Another action</a>
      <a href="#0" class="dropdown-item">Something else here</a>
    </div>
  </div>
</div>`
    }
  }
}

export { mixin as dropdownMixin }
