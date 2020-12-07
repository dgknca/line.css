<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Slider</h1>
    <p>
      A pure CSS slider, uses radio inputs. <strong>Note thats:</strong> the
      name attributes are should be same in a slider component, and the id's
      should be unique in a page.
    </p>
    <Snippet :_code="slider" />

    <h3 id="custom-properties" class="size-4 fw-600 doc-section-title">
      <a href="#custom-properties">#</a>Custom Properties
    </h3>
    <div class="doc-table">
      <table>
        <thead>
          <th style="width:30%">Name</th>
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
        </tbody>
        <thead>
          <th colspan="2">Locals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>--slider-width</code>
            </td>
            <td>
              <code>300px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--slider-height</code>
            </td>
            <td>
              <code>300px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--slider-button-size</code>
            </td>
            <td>
              <code>50px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--slider-icon</code>
            </td>
            <td>
              <code
                >url('data:image/svg+xml;utf8,&lt;svg width="24" height="24"
                viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">&lt;path d="M3 12L21 12"
                stroke="black" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>&lt;path d="M14 5L21 12L14 19"
                stroke="black" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>&lt;/svg>');</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <code>--slider-icon-size</code>
            </td>
            <td>
              <code>24px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--slider-icon-bg</code>
            </td>
            <td>
              <code>#fff</code>
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
import { sliderMixin } from './../snippets/slider'
export default {
  mixins: [sliderMixin]
}
</script>
