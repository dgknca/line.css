<template>
  <div class="page-wrapper">
    <div class="page-container">
      <div class="hero">
        <div class="hero-left">
          <h2 class="site-title">
            <strong>Line.css</strong> lets you use pure CSS components and cute
            elements that you can customize easily.
          </h2>
          <div class="hero-btns">
            <router-link to="/docs" class="btn purple btn-l">
              <span class="btn-text">Download</span>
            </router-link>
            <router-link to="/docs" class="btn yellow btn-l no-shadow">
              <span class="btn-text">Go to docs</span>
            </router-link>
          </div>
        </div>
        <div class="hero-right">
          <div class="hero-list">
            <ul>
              <li><span>✔️</span> <span>No Javascript dependencies.</span></li>
              <li>
                <span>✔️</span>
                <span
                  >Can be customized easily via CSS variables without SASS
                  environment.</span
                >
              </li>
              <li>
                <span>❌</span>
                <span
                  >Line.css only provides elements & components. You will need
                  to define your own layout.</span
                >
              </li>
            </ul>
          </div>
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
  display: flex;

  &-btns {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  &-left {
    flex: 1;
  }
  &-right {
    margin-left: 100px;
    flex: 1;
  }

  &-list {
    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 0;

      li {
        padding-left: 0;
        margin-left: 0;
        margin-top: 1rem;
        font-size: 1.5rem;
        display: flex;

        span {
          display: block;
          margin-right: 0.75rem;
        }
      }
    }
  }
}

.site-title {
  min-width: 300px;
  max-width: 500px;
  width: 100%;
  font-size: 2rem;
  line-height: 1.5;
}
</style>
