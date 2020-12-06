<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Button</h1>

    <!-- Sizes -->

    <h3 id="sizes" class="size-4 fw-600 doc-section-title">
      <a href="#sizes">#</a>Sizes
    </h3>
    <p>
      There are 3 sizes available:
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
    <h4 class="helper size-5">Hover</h4>
    <Snippet :_code="hover" />
    <h4 class="helper size-5">Active</h4>
    <Snippet :_code="active" />
    <h4 class="helper size-5">Disabled</h4>
    <Snippet :_code="disabled" />
    <h4 class="helper size-5">Loading</h4>
    <Snippet :_code="loading" />
    <h4 class="size-5">With Icon</h4>
    <Snippet :_code="withIcon" />

    <h3 id="classes" class="size-4 fw-600 doc-section-title">
      <a href="#classes">#</a>Helper Classes
    </h3>
    <div class="doc-table">
      <table>
        <thead>
          <th>Class</th>
          <th style="width: 70%">Description</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#btn-full" class="tag-class">btn-full</a>
            </td>
            <td>
              Full width button.
            </td>
          </tr>
          <tr>
            <td>
              <a href="#no-shadow" class="tag-class">no-shadow</a>
            </td>
            <td>
              Cancels shadow.
            </td>
          </tr>
          <tr>
            <td>
              <a href="#shadow-right" class="tag-class">shadow-right</a>
            </td>
            <td>Turns the shadow to right.</td>
          </tr>
          <tr>
            <td>
              <a href="#shadow-top" class="tag-class">shadow-top</a>
            </td>
            <td>Turns the shadow to top.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modifiers-container">
      <a href="#btn-full" id="btn-full" class="tag-property">.btn-full</a>
    </div>
    <Snippet :_code="fullWidth" />

    <div class="modifiers-container">
      <a href="#no-shadow" id="no-shadow" class="tag-property">.no-shadow</a>
    </div>
    <Snippet :_code="noShadow" />

    <div class="modifiers-container">
      <a href="#shadow-right" id="shadow-right" class="tag-property"
        >.shadow-right</a
      >
    </div>
    <Snippet :_code="rightShadow" />

    <div class="modifiers-container">
      <a href="#shadow-top" id="shadow-top" class="tag-property">.shadow-top</a>
    </div>
    <p>You can use together right and top classes like below.</p>
    <Snippet :_code="topShadow" />

    <!-- Custom Properties -->

    <h3 id="custom-properties" class="size-4 fw-600 doc-section-title">
      <a href="#custom-properties">#</a>Custom Properties
    </h3>
    <div class="doc-table">
      <table>
        <thead>
          <th>Name</th>
          <th>Default</th>
          <th>Computed Value</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>--focus-box-shadow-color</code>
            </td>
            <td>
              <code>var(--shadow-bg)</code>
            </td>
            <td><code>rgb(196, 196, 196)</code></td>
          </tr>
          <tr>
            <td>
              <code>--focus-box-shadow-width</code>
            </td>
            <td>
              <code>2px</code>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <code>--border-color</code>
            </td>
            <td>
              <code>var(--black)</code>
            </td>
            <td>
              <code>#000</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--border-width</code>
            </td>
            <td>
              <code>2px</code>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <code>--shadow-bg</code>
            </td>
            <td>
              <code>var(--gray)</code>
            </td>
            <td><code>rgb(196, 196, 196)</code></td>
          </tr>
          <tr>
            <td>
              <code>--border-radius</code>
            </td>
            <td>
              <code>4px</code>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <code>--shadow-distance</code>
            </td>
            <td>
              <code>3px</code>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <code>--transition</code>
            </td>
            <td>
              <code>0.15s cubic-bezier(0.64, 0.57, 0.67, 1.53)</code>
            </td>
            <td></td>
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
import { buttonMixin } from './../snippets/button'
export default {
  mixins: [buttonMixin]
}
</script>
