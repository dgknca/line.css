<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Card</h1>

    <h3 id="card-default" class="size-4 fw-600 doc-section-title">
      <a href="#card-default">#</a>Default
    </h3>
    <Snippet :_code="card" :cancel-flex="true" />

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
        <thead>
          <th colspan="2">Locals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#card-v" class="tag-class">card-v</a>
            </td>
            <td>
              Makes the card vertical.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modifiers-container">
      <a href="#card-v" id="card-v" class="tag-property">.card-v</a>
    </div>
    <Snippet :_code="cardV" :cancel-flex="true" />

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
              <code>#4a4a4a</code>
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
              <code>--card-image-width</code>
            </td>
            <td>
              <code>100px</code> default, <code>100%</code> with
              <a href="#card-v" class="tag-class">card-v</a>
            </td>
          </tr>
          <tr>
            <td>
              <code>--card-image-height</code>
            </td>
            <td>
              <code>100px</code> default, <code>200px</code> with
              <a href="#card-v" class="tag-class">card-v</a>
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
import { cardMixin } from './../snippets/card'
export default {
  mixins: [cardMixin]
}
</script>
