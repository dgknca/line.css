<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Range</h1>

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>Default
    </h3>
    <Snippet :_code="defaultRange" />

    <h3 id="states" class="size-4 fw-600 doc-section-title">
      <a href="#states">#</a>States
    </h3>
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
        <tbody>
          <tr>
            <td>
              <code>--track-color</code>
            </td>
            <td>
              <code>var(--white)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--track-color--focus</code>
            </td>
            <td>
              <code>var(--gray-light)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--disabled-track-color</code>
            </td>
            <td>
              <code>var(--white)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--thumb-color</code>
            </td>
            <td>
              <code>var(--white)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--disabled-thumb-color</code>
            </td>
            <td>
              <code>var(--white)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--thumb-radius</code>
            </td>
            <td>
              <code>50%</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--thumb-height</code>
            </td>
            <td>
              <code>24px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--thumb-width</code>
            </td>
            <td>
              <code>24px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--thumb-border-width</code>
            </td>
            <td>
              <code>2px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--thumb-border-color</code>
            </td>
            <td>
              <code>var(--black)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--disabled-thumb-border-color</code>
            </td>
            <td>
              <code>var(--gray)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--track-width</code>
            </td>
            <td>
              <code>100%</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--track-height</code>
            </td>
            <td>
              <code>8px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--track-border-width</code>
            </td>
            <td>
              <code>2px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--track-border-color</code>
            </td>
            <td>
              <code>var(--black)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--disabled-track-border-color</code>
            </td>
            <td>
              <code>var(--gray)</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--track-radius</code>
            </td>
            <td>
              <code>5px</code>
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
import { rangeMixin } from './../snippets/range'
export default {
  mixins: [rangeMixin]
}
</script>
