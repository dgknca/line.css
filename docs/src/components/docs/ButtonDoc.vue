<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Button</h1>

    <!-- Sizes -->

    <h3 id="sizes" class="size-4 fw-600 doc-section-title">
      <a href="#sizes">#</a>Sizes
    </h3>
    <p>
      There are 4 sizes available:
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
    <a href="#hover" id="hover" class="helper size-5">Hover</a>
    <Snippet :_code="hover" />
    <a href="#active" id="active" class="helper size-5">Active</a>
    <Snippet :_code="active" />
    <a href="#disabled" id="disabled" class="helper size-5">Disabled</a>
    <Snippet :_code="disabled" />
    <a href="#loading" id="loading" class="helper size-5">Loading</a>
    <Snippet :_code="loading" />

    <!-- Local Helpers -->

    <h3 id="local-helpers" class="size-4 fw-600 doc-section-title">
      <a href="#local-helpers">#</a>Local Helpers
    </h3>
    <a href="#full" id="full" class="helper size-5">Full Width</a>
    <Snippet :_code="fullWidth" />

    <a href="#shadow-right" id="shadow-right" class="helper size-5"
      >Right Shadow</a
    >
    <Snippet :_code="rightShadow" />

    <a href="#shadow-top" id="shadow-top" class="helper size-5">Top Shadow</a>
    <p>You can use together right and top classes like below.</p>
    <Snippet :_code="topShadow" />

    <!-- Custom Properties -->

    <h3 id="localCustomProperties" class="size-4 fw-600 doc-section-title">
      <a href="#localCustomProperties">#</a>Local Custom Properties
    </h3>
    <div class="helpers-container">
      <a href="#--back-bg" id="--back-bg" class="helper size-5">--back-bg</a>
      <a href="#--border" id="--border" class="helper size-5">--border</a>
      <a
        href="#--active-border-color"
        id="--active-border-color"
        class="helper size-5"
        >--active-border-color</a
      >
    </div>
    <p>
      You can easily create your custom class using CSS variables.
    </p>
    <Snippet :_code="localCustomProperties" />

    <h3 id="globalCustomProperties" class="size-4 fw-600 doc-section-title">
      <a href="#globalCustomProperties">#</a>Global Custom Properties
    </h3>
    <div class="helpers-container">
      <a href="#--border-radius" id="--border-radius" class="helper size-5"
        >--border-radius</a
      >
      <a href="#--shadow-distance" id="--shadow-distance" class="helper size-5"
        >--shadow-distance</a
      >
    </div>
    <p>
      Button shadow and border radius are customizable like in all other
      components. You can set custom distance using
      <span class="inline-property">--shadow-distance</span>. The other relevant
      properties will be adjusted according to the value you set.
    </p>
    <Snippet :_code="globalCustomProperties" />

    <!-- Other Examples -->

    <h3 id="other-examples" class="size-4 fw-600 doc-section-title">
      <a href="#other-examples">#</a>Other Examples
    </h3>
    <a href="#with-icon" id="with-icon" class="helper size-5">With Icon</a>
    <Snippet :_code="withIcon" />
  </div>
</template>

<script>
import { buttonMixin } from './../snippets/button'
export default {
  mixins: [buttonMixin]
}
</script>
