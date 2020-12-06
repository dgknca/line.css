<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Select</h1>

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>Default
    </h3>
    <Snippet :_code="defaultSelect" />

    <h3 id="custom-properties" class="size-4 fw-600 doc-section-title">
      <a href="#custom-properties">#</a>Custom Properties
    </h3>
    <div class="doc-table">
      <table>
        <thead>
          <th style="width:30%">Name</th>
          <th>Default</th>
        </thead>
        <tbody>
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
              <code>--select-icon-size</code>
            </td>
            <td>
              <code>20px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--select-icon</code>
            </td>
            <td>
              <code
                >url('data:image/svg+xml;utf8,&lt;svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">&lt;polyline points="6 9 12 15 18
                9">&lt;/polyline>&lt;/svg>');</code
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { selectMixin } from './../snippets/select'
export default {
  mixins: [selectMixin]
}
</script>
