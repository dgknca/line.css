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
      </li>
      <li>
        <a class="size-6 fw-600 navigation-link">Form</a>
        <ul class="inner-list">
          <li>
            <router-link
              to="/docs/form/input"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Input</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/form/textarea"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Textarea</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/form/checkbox"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Checkbox</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/form/radio"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Radio</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/form/file"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>File</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/form/range"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Range</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/form/select"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Select</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <a class="size-6 fw-600 navigation-link">Elements</a>
        <ul class="inner-list">
          <li>
            <router-link
              to="/docs/elements/button"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Button</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/elements/image"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Image</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/elements/blockquote"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Blockquote</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/elements/progress"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Progress</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <a class="size-6 fw-600 navigation-link">Components</a>
        <ul class="inner-list">
          <li>
            <router-link
              to="/docs/components/slider"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Slider</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/components/accordion"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Accordion</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/components/dropdown"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Dropdown</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/docs/components/card"
              class="navigation-link link link-pink"
              active-class="active"
            >
              <span>Card</span>
            </router-link>
          </li>
        </ul>
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
    a {
      color: var(--black);
      font-size: 0.8rem;
      padding: 0.4rem 0;
    }
  }
}
</style>
