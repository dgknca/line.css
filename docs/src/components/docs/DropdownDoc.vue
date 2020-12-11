<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Dropdown</h1>

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>Default
    </h3>
    <Snippet :_code="dropdown" />

    <h3 id="dropdown-sublist" class="size-4 fw-600 doc-section-title">
      <a href="#dropdown-sublist">#</a>With Sublist
    </h3>
    <Snippet :_code="withSubList" />

    <h3 id="classes" class="size-4 fw-600 doc-section-title">
      <a href="#classes">#</a>Helper Classes
    </h3>
    <div class="doc-table">
      <table>
        <thead>
          <th>Class</th>
          <th style="width: 70%">Description</th>
        </thead>
        <thead>
          <th colspan="2">Locals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#close-on-click-outside" class="tag-class"
                >close-on-click-outside</a
              >
            </td>
            <td>
              Clicking anywhere other than dropdown closes the dropdown.
            </td>
          </tr>
          <tr>
            <td>
              <a href="#open-on-hover" class="tag-class">open-on-hover</a>
            </td>
            <td>
              Opens with hover.
            </td>
          </tr>
          <tr>
            <td>
              <a href="#right-align" class="tag-class">right-align</a>
            </td>
            <td>
              Aligns to right.
            </td>
          </tr>
          <tr>
            <td>
              <a href="#center-align" class="tag-class">center-align</a>
            </td>
            <td>
              Aligns to center.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modifiers-container">
      <a
        href="#close-on-click-outside"
        id="close-on-click-outside"
        class="tag-property"
        >.close-on-click-outside</a
      >
    </div>
    <Snippet :_code="closeOnClickOutside" />

    <div class="modifiers-container">
      <a href="#open-on-hover" id="open-on-hover" class="tag-property"
        >.open-on-hover</a
      >
    </div>
    <p>No checkbox and label needed in hover case.</p>
    <Snippet :_code="openOnHover" />

    <div class="modifiers-container">
      <a href="#right-align" id="right-align" class="tag-property"
        >.right-align</a
      >
    </div>
    <Snippet :_code="rightAlign" />

    <div class="modifiers-container">
      <a href="#center-align" id="center-align" class="tag-property"
        >.center-align</a
      >
    </div>
    <Snippet :_code="centerAlign" />

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
              <code>#000</code>
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
          <tr>
            <td>
              <code>--focus-box-shadow-color</code>
            </td>
            <td>
              <code>var(--shadow-bg)</code>
            </td>
          </tr>
        </tbody>
        <thead>
          <th colspan="2">Locals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>--dropdown-icon-size</code>
            </td>
            <td>
              <code>1.2rem</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--dropdown-icon</code>
            </td>
            <td>
              <code
                >url('data:image/svg+xml;utf8,&lt;svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                > &lt;polyline points="6 9 12 15 18 9">&lt;/polyline>&lt;/svg
                >');</code
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { dropdownMixin } from './../snippets/dropdown'
export default {
  mixins: [dropdownMixin]
}
</script>
