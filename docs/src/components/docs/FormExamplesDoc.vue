<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Form Layout Examples</h1>

    <Snippet :_code="form1" />
  </div>
</template>

<script>
import { formMixin } from './../snippets/form'
export default {
  mixins: [formMixin]
}
</script>
