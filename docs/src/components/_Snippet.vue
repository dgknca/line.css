<template>
  <div>
    <div class="codemirror-wrp">
      <div class="codemirror-btn" @click="runCode">Run</div>
      <codemirror v-model="code" :options="cmOptionsHTML"></codemirror>
    </div>
    <div class="preview-container">
      <iframe ref="preview"></iframe>
    </div>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/edit/closebrackets.js'
import defaultEditorSettings from '@/shared/defaultEditorSettings.js'

export default {
  props: {
    _code: {
      type: String
    }
  },
  components: {
    codemirror
  },
  data() {
    return {
      code: '',
      cmOptionsCSS: {
        ...defaultEditorSettings,
        mode: 'text/css'
      },
      cmOptionsHTML: {
        ...defaultEditorSettings,
        mode: 'text/html'
      },
      cmOptionsJS: {
        ...defaultEditorSettings,
        mode: 'text/javascript'
      }
    }
  },
  methods: {
    updatePreview() {
      const previewFrame = this.$refs.preview
      const preview =
        previewFrame.contentDocument.body ||
        previewFrame.contentWindow.document.body

      preview.innerHTML = this.code
    },
    runCode() {
      this.updatePreview()
    }
  },
  mounted() {
    this.$refs.preview.contentWindow.document.head.innerHTML = `<link href="/css/main.min.css" rel="stylesheet">`
    this.code = this._code
    this.updatePreview()
  }
}
</script>

<style lang="scss" scoped>
.codemirror-wrp {
  position: relative;
}
.codemirror-btn {
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 10px;
  border-radius: 3px;
  background: rgba(#fff, 0.1);
  color: rgba(#fff, 0.8);
  padding: 5px 8px;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  pointer-events: auto;
  opacity: 0;
  transition: 0.1s;
}

.codemirror-wrp:hover {
  .codemirror-btn {
    opacity: 1;
  }
}
</style>
