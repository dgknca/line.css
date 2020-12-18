<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Box</h1>

    <Snippet :_code="box" />
  </div>
</template>

<script>
import { boxMixin } from './../snippets/box'
export default {
  mixins: [boxMixin]
}
</script>
