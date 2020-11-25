<template>
  <div class="page-wrapper">
    <div class="page-container">
      <div class="hero">
        <h2 class="site-title">
          <strong>Line.css</strong> is a free, open source CSS library. Almost
          fully customizable via CSS variables.
        </h2>
        <div class="hero-btns">
          <a href="#0" class="btn btn-purple btn-l">
            <span class="btn-text">Download</span>
          </a>
          <a href="#0" class="btn btn-yellow btn-l no-shadow">
            <span class="btn-text">Go to docs</span>
          </a>
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
.page {
  &-wrapper {
    margin-top: 60px;
    background-color: var(--gray-light);
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 60px);
  }
  &-container {
    max-width: 1400px;
    width: 100%;
    padding: 0 20px;
  }
}

.hero {
  padding: 9rem 1.5rem;

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
