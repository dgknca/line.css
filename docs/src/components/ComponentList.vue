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
          class="size-6 fw-600 link link-pink"
          active-class="active"
        >
          <span>Globals</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/docs/button"
          class="size-6 fw-600 link link-pink"
          active-class="active"
        >
          <span>Buttons</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/docs/slider"
          class="size-6 fw-600 link link-pink"
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
</style>
