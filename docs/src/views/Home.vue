<template>
  <div class="page-wrapper">
    <div class="page-container">
      <div class="hero">
        <h2 class="site-title">
          <strong>Line.css</strong> is a minimal CSS library. Can be customized
          via CSS variables.
        </h2>
        <div class="hero-btns">
          <router-link to="/docs" class="btn btn-purple btn-l">
            <span class="btn-text">Download</span>
          </router-link>
          <router-link to="/docs" class="btn btn-yellow btn-l no-shadow">
            <span class="btn-text">Go to docs</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 9rem 0;

  &-btns {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
}

.site-title {
  width: 500px;
  font-size: 2rem;
  line-height: 1.5;
}
</style>
