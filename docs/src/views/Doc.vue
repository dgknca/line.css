<template>
  <div class="page-wrapper">
    <div class="page-container docs">
      <div class="the-doc">
        <router-view></router-view>
      </div>
      <List />
    </div>
  </div>
</template>

<script>
import List from '@/components/List.vue'
export default {
  components: {
    List
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.docs {
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
}

.the-doc {
  flex: 1;
  width: 100%;
}
</style>
