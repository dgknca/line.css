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
        </tbody>
        <thead>
          <th colspan="2">Locals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>--delete-button-size</code>
            </td>
            <td>
              <code>24px</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { deleteMixin } from './../snippets/delete'
export default {
  mixins: [deleteMixin]
}
</script>
