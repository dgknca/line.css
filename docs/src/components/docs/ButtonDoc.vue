<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Button</h1>

    <h3 id="sizes" class="size-4 fw-600 doc-section-title">
      <a href="#sizes">#</a>Sizes
    </h3>
    <p>
      There are 4 sizes available:
    </p>
    <Snippet :_code="sizes" />
    <h3 id="colors" class="size-4 fw-600 doc-section-title">
      <a href="#colors">#</a>Colors
    </h3>
    <p>
      There are 7 different colors you can use for button. The color classes
      changes shadow background and border color.
    </p>
    <Snippet :_code="colors" />
    <h3 id="loading" class="size-4 fw-600 doc-section-title">
      <a href="#loading">#</a>Loading
    </h3>
    <p>
      Just set <span class="inline-class">.btn-loading</span> class during
      loading and remove it when loading is finished.
    </p>
    <Snippet :_code="loading" />
    <Snippet :_code="fullWidth" />
    <Snippet :_code="noShadow" />
    <Snippet :_code="withIcon" />
    <h3 id="customProperties" class="size-4 fw-600 doc-section-title">
      <a href="#customProperties">#</a>Custom Properties
    </h3>
    <p>
      The button shadow is customizable like in all other components. You can
      set custom distance using
      <span class="inline-property">--shadow-distance</span>. The other relevant
      properties will be adjusted according to the value you set.
    </p>
    <Snippet :_code="customShadowDistance" />
  </div>
</template>

<script>
import { buttonMixin } from './../snippets/button'
export default {
  mixins: [buttonMixin]
}
</script>
