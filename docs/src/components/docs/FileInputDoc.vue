<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">File Input</h1>

    <p>There are 2 different types for file input.</p>
    <h3 id="button" class="size-4 fw-600 doc-section-title">
      <a href="#button">#</a>Button
    </h3>
    <Snippet :_code="button" />

    <h3 id="dragdrop" class="size-4 fw-600 doc-section-title">
      <a href="#dragdrop">#</a>Drag & Drop
    </h3>
    <Snippet :_code="dragdrop" />

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
              <code>#000</code>
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
              <code>--drag-drop-bg</code>
            </td>
            <td>
              <code>var(--gray-light)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--hover-drag-drop-bg</code>
            </td>
            <td>
              <code>var(--gray)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--success-drag-drop-bg</code>
            </td>
            <td>
              <code>var(--green-light)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--success-drag-drop-border-color</code>
            </td>
            <td>
              <code>var(--green-dark)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--success-text-color</code>
            </td>
            <td>
              <code>var(--text-color)</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { fileInputMixin } from './../snippets/file-input'
export default {
  mixins: [fileInputMixin]
}
</script>
