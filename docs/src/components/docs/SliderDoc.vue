<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Slider</h1>
    <p>
      A pure CSS slider, uses radio inputs. <strong>Note thats:</strong> the
      name attributes are should be same in a slider component, and the id's
      should be unique.
    </p>
    <Snippet :_code="slider" />

    <h3 id="localCustomProperties" class="size-4 fw-600 doc-section-title">
      <a href="#localCustomProperties">#</a>Local Custom Properties
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
              <code style="white-space: nowrap;">--slider-width</code>
            </td>
            <td>
              <code>300px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code style="white-space: nowrap;">--slider-height</code>
            </td>
            <td>
              <code>300px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code style="white-space: nowrap;">--slider-button-size</code>
            </td>
            <td>
              <code>50px</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <span class="example size-5">An example using custom properties</span>
    <Snippet :_code="localCustomProperties" />
  </div>
</template>

<script>
import { sliderMixin } from './../snippets/slider'
export default {
  mixins: [sliderMixin]
}
</script>
