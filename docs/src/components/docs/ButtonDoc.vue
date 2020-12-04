<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Button</h1>

    <!-- Sizes -->

    <h3 id="sizes" class="size-4 fw-600 doc-section-title">
      <a href="#sizes">#</a>Sizes
    </h3>
    <p>
      There are 3 sizes available:
    </p>
    <Snippet :_code="sizes" />

    <!-- Colors -->

    <h3 id="colors" class="size-4 fw-600 doc-section-title">
      <a href="#colors">#</a>Colors
    </h3>
    <p>
      There are 7 different colors you can use for button. The color classes
      changes shadow background and border color.
    </p>
    <Snippet :_code="colors" />

    <!-- States -->

    <h3 id="states" class="size-4 fw-600 doc-section-title">
      <a href="#states">#</a>States
    </h3>
    <h4 class="helper size-5">Hover</h4>
    <Snippet :_code="hover" />
    <h4 class="helper size-5">Active</h4>
    <Snippet :_code="active" />
    <h4 class="helper size-5">Disabled</h4>
    <Snippet :_code="disabled" />
    <h4 class="helper size-5">Loading</h4>
    <Snippet :_code="loading" />

    <!-- Local Helpers -->

    <h3 id="classes" class="size-4 fw-600 doc-section-title">
      <a href="#classes">#</a>Classes
    </h3>
    <a href="#full" id="full" class="tag-class">.btn-full</a>
    <Snippet :_code="fullWidth" />

    <!-- Custom Properties -->

    <h3 id="custom-properties" class="size-4 fw-600 doc-section-title">
      <a href="#custom-properties">#</a>Custom Properties
    </h3>
    <div class="modifiers-container">
      <a
        href="#--active-border-color"
        id="--active-border-color"
        class="tag-property"
        >--active-border-color</a
      >
    </div>
    <Snippet :_code="activeBorderColor" />

    <!-- Other Examples -->

    <h3 id="other-examples" class="size-4 fw-600 doc-section-title">
      <a href="#other-examples">#</a>Other Examples
    </h3>
    <h4 class="size-5">With Icon</h4>
    <Snippet :_code="withIcon" />
  </div>
</template>

<script>
import { buttonMixin } from './../snippets/button'
export default {
  mixins: [buttonMixin]
}
</script>
