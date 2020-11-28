<template>
  <div>
    <app-nav />
    <router-view />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  components: {
    appNav: Nav
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
@import '../../scss/main.scss';
@import './scss/main.scss';
</style>
