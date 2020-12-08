<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Accordion</h1>

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>Single Accordion
    </h3>
    <Snippet :_code="singleAccordion" :cancel-flex="true" />

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>With Checkboxes
    </h3>
    <Snippet :_code="checkboxAccordion" :cancel-flex="true" />

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>With Radio
    </h3>
    <Snippet :_code="radioAccordion" :cancel-flex="true" />

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
              <code>--transition-linear</code>
            </td>
            <td>
              <code>0.15s linear</code>
            </td>
          </tr>
        </tbody>
        <thead>
          <th colspan="2">Locals</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>--accordion-button-height</code>
            </td>
            <td>
              <code>40px</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--accordion-button-bg</code>
            </td>
            <td>
              <code>#fff</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--hover-accordion-button-bg</code>
            </td>
            <td>
              <code>#fff</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--active-accordion-button-bg</code>
            </td>
            <td>
              <code>#fff</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--active-accordion-text-color</code>
            </td>
            <td>
              <code>#000</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>--accordion-icon</code>
            </td>
            <td>
              <code
                >url('data:image/svg+xml;utf8,&lt;svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">&lt;polyline points="6 9 12 15 18
                9">&lt;/polyline>&lt;/svg>')</code
              >
            </td>
          </tr>
          <tr>
            <td>
              <code>--accordion-icon-size</code>
            </td>
            <td>
              <code>20px</code>
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
import { accordionMixin } from './../snippets/accordion'
export default {
  mixins: [accordionMixin]
}
</script>
