<template>
  <div class="component-list">
    <ul>
      <li>
        <router-link
          to="/docs"
          class="size-6 fw-600 link link-pink"
          exact
          exact-active-class="active"
        >
          <span>Getting Started</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/docs/globals"
          class="size-6 fw-600 navigation-link link link-pink"
          active-class="active"
        >
          <span>Globals</span>
        </router-link>
        <ul class="inner-list">
          <li>
            <a href="#custom-properties">Custom Properties</a>
          </li>
          <li>
            <a href="#classes">Classes</a>
          </li>
          <li>
            <a href="#examples">Examples</a>
          </li>
        </ul>
      </li>
      <li>
        <router-link
          to="/docs/button"
          class="size-6 fw-600 navigation-link link link-pink"
          active-class="active"
        >
          <span>Button</span>
        </router-link>
        <ul class="inner-list">
          <li>
            <a href="#sizes">Sizes</a>
          </li>
          <li>
            <a href="#colors">Colors</a>
          </li>
          <li>
            <a href="#states">States</a>
          </li>
          <li>
            <a href="#classes">Classes</a>
          </li>
          <li>
            <a href="#custom-properties">Custom Properties</a>
          </li>
          <li>
            <a href="#examples">Examples</a>
          </li>
        </ul>
      </li>
      <li>
        <router-link
          to="/docs/checkbox"
          class="size-6 fw-600 navigation-link link link-pink"
          active-class="active"
        >
          <span>Checkbox</span>
        </router-link>
        <ul class="inner-list">
          <li>
            <a href="#sizes">Sizes</a>
          </li>
          <li>
            <a href="#colors">Colors</a>
          </li>
          <li>
            <a href="#states">States</a>
          </li>
        </ul>
      </li>
      <li>
        <router-link
          to="/docs/radio"
          class="size-6 fw-600 navigation-link link link-pink"
          active-class="active"
        >
          <span>Radio</span>
        </router-link>
        <ul class="inner-list">
          <li>
            <a href="#sizes">Sizes</a>
          </li>
          <li>
            <a href="#colors">Colors</a>
          </li>
          <li>
            <a href="#states">States</a>
          </li>
        </ul>
      </li>
      <li>
        <router-link
          to="/docs/slider"
          class="size-6 fw-600 navigation-link link link-pink"
          active-class="active"
        >
          <span>Slider</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.component-list {
  width: 200px;
  flex-shrink: 0;
  padding-left: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  align-self: flex-start;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;

    a {
      padding: 10px 0;
      display: block;
    }
  }
}

.navigation-link {
  & + .inner-list {
    display: none;

    a {
      color: var(--black);
      font-size: 0.8rem;
      padding: 0.4rem 0;
    }
  }

  &.active + .inner-list {
    display: block;
  }
}
</style>
