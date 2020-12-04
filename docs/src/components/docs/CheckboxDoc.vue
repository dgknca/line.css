<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Checkbox</h1>

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>Default
    </h3>
    <Snippet :_code="defaultCheckbox" />

    <h3 id="colors" class="size-4 fw-600 doc-section-title">
      <a href="#colors">#</a>Colors
    </h3>
    <Snippet :_code="colors" />

    <h3 id="states" class="size-4 fw-600 doc-section-title">
      <a href="#states">#</a>States
    </h3>
    <h4 class="helper size-5">Focused</h4>
    <Snippet :_code="focus" />
    <h4 class="helper size-5">Disabled</h4>
    <Snippet :_code="disabled" />
  </div>
</template>

<script>
import { checkboxMixin } from './../snippets/checkbox'
export default {
  mixins: [checkboxMixin]
}
</script>
