<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Box</h1>

    <Snippet :_code="box" />

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
              <code>--border-radius</code>
            </td>
            <td>
              <code>4px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--text-color</code>
            </td>
            <td>
              <code>#4a4a4a</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--shadow-bg</code>
            </td>
            <td>
              <code>var(--gray)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--shadow-distance</code>
            </td>
            <td>
              <code>3px</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { boxMixin } from './../snippets/box'
export default {
  mixins: [boxMixin]
}
</script>
