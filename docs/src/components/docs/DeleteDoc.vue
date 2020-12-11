<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Delete</h1>

    <h3 id="sizes" class="size-4 fw-600 doc-section-title">
      <a href="#sizes">#</a>Sizes
    </h3>
    <Snippet :_code="defaultDelete" :cancel-flex="true" />

    <h3 id="colors" class="size-4 fw-600 doc-section-title">
      <a href="#colors">#</a>Colors
    </h3>
    <Snippet :_code="colors" :cancel-flex="true" />
  </div>
</template>

<script>
import { deleteMixin } from './../snippets/delete'
export default {
  mixins: [deleteMixin]
}
</script>
