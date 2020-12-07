<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Accordion</h1>

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>With Checkboxes
    </h3>
    <Snippet :_code="checkboxAccordion" :cancel-flex="true" />

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>With Radio
    </h3>
    <Snippet :_code="radioAccordion" :cancel-flex="true" />
  </div>
</template>

<script>
import { accordionMixin } from './../snippets/accordion'
export default {
  mixins: [accordionMixin]
}
</script>
