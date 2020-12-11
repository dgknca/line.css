<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Notification</h1>

    <h3 id="default" class="size-4 fw-600 doc-section-title">
      <a href="#default">#</a>Default
    </h3>
    <Snippet :_code="notification" />

    <h3 id="colors" class="size-4 fw-600 doc-section-title">
      <a href="#colors">#</a>Colors
    </h3>
    <Snippet :_code="colors" cancel-flex="true" no-hide="true" />
  </div>
</template>

<script>
import { notificationMixin } from './../snippets/notification'
export default {
  mixins: [notificationMixin]
}
</script>
