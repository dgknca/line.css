<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Input</h1>

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>Default
    </h3>
    <Snippet :_code="defaultInput" />

    <h3 id="colors" class="size-4 fw-600 doc-section-title">
      <a href="#colors">#</a>Colors
    </h3>
    <Snippet :_code="colors" :cancel-flex="true" />

    <h3 id="states" class="size-4 fw-600 doc-section-title">
      <a href="#states">#</a>States
    </h3>
    <h4 class="helper size-5">Focused</h4>
    <Snippet :_code="focus" :cancel-flex="true" />
    <h4 class="helper size-5">Disabled</h4>
    <Snippet :_code="disabled" :cancel-flex="true" />

    <h4 class="helper size-5">With Icon</h4>
    <Snippet :_code="withIcon" :cancel-flex="true" />

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
              <code>#000</code>
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
        <thead>
          <th colspan="2">Locals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>--placeholder-color</code>
            </td>
            <td>
              <code>var(--gray)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--input-height</code>
            </td>
            <td>
              <code>2.5rem</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="play" class="size-4 fw-600 doc-section-title">
      <a href="#play">#</a>Let's play with variables
    </h3>
    <Snippet :_code="play" />
  </div>
</template>

<script>
import { inputMixin } from './../snippets/input'
export default {
  mixins: [inputMixin]
}
</script>
