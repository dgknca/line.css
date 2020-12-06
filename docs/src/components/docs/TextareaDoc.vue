<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Textarea</h1>

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>Default
    </h3>
    <Snippet :_code="defaultTextarea" />
    <p>
      All colors and states that are available for
      <router-link to="/docs/form/input">input</router-link>
      are also valid for textarea.
    </p>
  </div>
</template>

<script>
import { textareaMixin } from './../snippets/textarea'
export default {
  mixins: [textareaMixin]
}
</script>
