<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Image</h1>

    <Snippet :_code="image" />

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
          <th colspan="2">Globals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>no-shadow</code>
            </td>
            <td>
              Cancels shadow.
            </td>
          </tr>
          <tr>
            <td>
              <code>shadow-right</code>
            </td>
            <td>Turns the shadow to right.</td>
          </tr>
          <tr>
            <td>
              <code>shadow-top</code>
            </td>
            <td>Turns the shadow to top.</td>
          </tr>
        </tbody>
        <thead>
          <th colspan="2">Locals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>aspect-ratio</code>
            </td>
            <td>
              If you will use the <code>--aspect-ratio</code> property in a
              class, you have to add this class to the element you will use
              aspect ratio. If you will send the property as an inline-style,
              this class is not required. See the
              <a href="#play">example</a> below.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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
          <tr>
            <td>
              <code>--transition</code>
            </td>
            <td>
              <code>0.15s cubic-bezier(0.64, 0.57, 0.67, 1.53)</code>
            </td>
          </tr>
        </tbody>
        <thead>
          <th colspan="2">Locals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>--img-width</code>
            </td>
            <td>
              <code>300px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--img-height</code>
            </td>
            <td>
              <code>300px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--object-fit</code>
            </td>
            <td>
              <code>cover</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--aspect-ratio</code>
            </td>
            <td>
              You can send any aspect ratio you want. Like <code>16/9</code>,
              <code>1/1</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="play" class="size-4 fw-600 doc-section-title">
      <a href="#play">#</a>Let's play with variables
    </h3>
    <Snippet :_code="play" :cancel-flex="true" />
  </div>
</template>

<script>
import { imageMixin } from './../snippets/image'
export default {
  mixins: [imageMixin]
}
</script>
