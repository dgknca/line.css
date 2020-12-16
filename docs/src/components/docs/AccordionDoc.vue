<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Accordion</h1>

    <div class="rules">
      <strong> Rules:</strong>
      <ul>
        <li>
          Each radio and checkbox inputs must have an 'id' that we'll target it
          and an 'id' must be unique in the whole document.
        </li>
        <li>
          The 'name' attributes must be same in a accordion component. (Name
          attribute is required for radio inputs only.)
        </li>
        <li>
          '.accordion-button' is our trigger. You must use 'label' as tag name
          to trigger our checkbox or radio.
        </li>
        <li>
          The 'label' then needs a 'for' an attribute whose value is the same as
          the previous input's id.
        </li>
        <li>Also pay attention to place of inputs in the structure.</li>
      </ul>
    </div>

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>Single Accordion
    </h3>
    <Snippet :_code="singleAccordion" :cancel-flex="true" />

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>With Checkboxes
    </h3>
    <Snippet :_code="checkboxAccordion" :cancel-flex="true" />

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>With Radios
    </h3>
    <p>Only allows one open dropdown at a time.</p>
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
              <code>var(--accordion-button-bg)</code>
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
