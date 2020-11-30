<template>
  <div class="page-wrapper">
    <div class="page-container docs">
      <div class="the-doc">
        <router-view></router-view>
      </div>
      <ComponentList />
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
