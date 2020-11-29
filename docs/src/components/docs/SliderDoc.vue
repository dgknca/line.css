<template>
  <div class="content-wrapper">
    <h1 class="size-2 fw-600">Slider</h1>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum architecto
      aperiam maxime nulla quasi natus, veniam placeat, excepturi expedita
      officiis est quaerat corporis voluptates adipisci? Numquam deserunt
      impedit qui vero?
    </p>
    <Snippet :_code="slider" />
  </div>
</template>

<script>
import { sliderMixin } from './../snippets/slider'
export default {
  mixins: [sliderMixin]
}
</script>
