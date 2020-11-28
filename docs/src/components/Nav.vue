<template>
  <div>
    <div class="nav">
      <div class="nav-wrp">
        <router-link to="/" class="nav-logo">
          <!-- prettier-ignore -->

          <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="11" width="98" height="98" rx="8" fill="#C4C4C4" stroke="black" stroke-width="2"/>
          <rect x="11" y="1" width="98" height="98" rx="8" fill="white" stroke="black" stroke-width="2"/>
          <path d="M48 29H53.312V66.44H71.68V70.984H48V29Z" fill="black"/>
        </svg>
          <div>Line.css</div>
        </router-link>
        <div
          style="flex: 1 1 0%; display: flex; justify-content: center;"
        ></div>
        <div class="nav-right">
          <a
            href="https://github.com/dgknca/line.css"
            target="_blank"
            rel="nofollow"
            class="social-btn github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/dgknca"
            target="_blank"
            rel="nofollow"
            class="social-btn twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 100;
  background-color: var(--orange-light);
  border-bottom: 2px solid var(--orange-dark);
  display: flex;
  justify-content: center;

  &-wrp {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1400px;
  }

  &-logo {
    text-decoration: none;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    color: var(--black);

    svg {
      width: 35px;
      height: 35px;
    }

    div {
      margin-left: 15px;
      color: currentColor;
      font-size: 18px;
      user-select: none;
    }
  }

  &-right {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .social-btn {
    margin: 0 20px;
    &.github {
      color: #24292e;
    }
    &.twitter {
      color: #1da1f2;
    }
  }
}
</style>
