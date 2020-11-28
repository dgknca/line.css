<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Button</h1>

    <Snippet :_code="snippet1" />
    <Snippet :_code="snippet2" />
  </div>
</template>

<script>
import { buttonMixin } from './snippets/button'
import Snippet from './_Snippet.vue'
export default {
  mixins: [buttonMixin],
  components: { Snippet },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
