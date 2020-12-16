<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Getting Started</h1>

    <h3 id="install" class="size-4 fw-600 doc-section-title">
      <a href="#install">#</a>Install
    </h3>
    <h4 class="helper size-5">
      Use from CDN
    </h4>
    <Snippet :_code="cdn" :only-code="true" />
    <h4 class="helper size-5">
      Or, Install from NPM
    </h4>
    <Snippet :_code="npm" :only-code="true" />
    <Snippet :_code="importLibrary" type="js" :only-code="true" />
  </div>
</template>

<script>
import { gettingStartedMixin } from './snippets/getting-started'
export default {
  mixins: [gettingStartedMixin]
}
</script>
