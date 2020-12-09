<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Blockquote</h1>

    <h4 class="helper size-5">Only Text:</h4>
    <Snippet :_code="blockquote" />

    <h4 class="helper size-5">With Title and Footer:</h4>
    <Snippet :_code="blockquoteWithTitle" />

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
              <code>--text-color</code>
            </td>
            <td>
              <code>#000</code>
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
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { blockquoteMixin } from './../snippets/blockquote'
export default {
  mixins: [blockquoteMixin]
}
</script>
