<template>
  <div class="page-wrapper">
    <div class="page-container docs">
      <ComponentList />
      <div class="the-doc">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentList from '@/components/ComponentList.vue'
export default {
  components: {
    ComponentList
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
