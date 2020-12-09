<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Progress</h1>

    <Snippet :_code="progress" />

    <h3 id="sizes" class="size-4 fw-600 doc-section-title">
      <a href="#sizes">#</a>Sizes
    </h3>
    <Snippet :_code="sizes" :cancel-flex="true" />

    <h3 id="colors" class="size-4 fw-600 doc-section-title">
      <a href="#colors">#</a>Colors
    </h3>
    <Snippet :_code="colors" :cancel-flex="true" />

    <h3 id="custom-properties" class="size-4 fw-600 doc-section-title">
      <a href="#custom-properties">#</a>Custom Properties
    </h3>
    <div class="doc-table">
      <table>
        <thead>
          <th>Name</th>
          <th>Default</th>
        </thead>
        <thead>
          <th colspan="2">Globals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>--border-color</code>
            </td>
            <td>
              <code>var(--black)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--border-width</code>
            </td>
            <td>
              <code>2px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--transition-linear</code>
            </td>
            <td>
              <code>0.15s linear</code>
            </td>
          </tr>
        </tbody>
        <thead>
          <th colspan="2">Locals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>--progress-bar-bg</code>
            </td>
            <td>
              <code>#fff</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--progress-value-bg</code>
            </td>
            <td>
              <code>var(--gray-dark)</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <h3 id="play" class="size-4 fw-600 doc-section-title">
      <a href="#play">#</a>Let's play with variables
    </h3>
    <Snippet :_code="play" /> -->
  </div>
</template>

<script>
import { progressMixin } from './../snippets/progress'
export default {
  mixins: [progressMixin]
}
</script>
