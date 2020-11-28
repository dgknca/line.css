<template>
  <div class="component-list">
    <ul>
      <li>
        <router-link
          to="/docs/button"
          class="size-5 link link-pink"
          active-class="active"
        >
          <span>Buttons</span>
        </router-link>
      </li>
      <li>
        <router-link to="/button" class="size-5 link link-pink">
          <span>Checkbox</span>
        </router-link>
      </li>
      <li>
        <router-link to="/button" class="size-5 link link-pink">
          <span>Radio</span>
        </router-link>
      </li>
      <li>
        <router-link to="/button" class="size-5 link link-pink">
          <span>Range</span>
        </router-link>
      </li>
      <li>
        <router-link to="/button" class="size-5 link link-pink">
          <span>Slider</span>
        </router-link>
      </li>
      <li>
        <router-link to="/button" class="size-5 link link-pink">
          <span>Accordion</span>
        </router-link>
      </li>
      <li>
        <router-link to="/button" class="size-5 link link-pink">
          <span>Accordion</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.component-list {
  width: 250px;
  flex-shrink: 0;
  padding-right: 20px;

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
