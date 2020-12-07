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
              <code>--disabled-border-color</code>
            </td>
            <td>
              <code>var(--gray)</code>
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
              <code>--focus-box-shadow-color</code>
            </td>
            <td>
              <code>var(--gray)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--focus-box-shadow-width</code>
            </td>
            <td>
              <code>2px</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { checkboxMixin } from './../snippets/checkbox'
export default {
  mixins: [checkboxMixin]
}
</script>
