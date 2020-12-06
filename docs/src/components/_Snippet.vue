<template>
  <div class="snippet">
    <div class="preview-cnt" ref="previewWrp" v-if="!onlyCode">
      <div
        ref="preview"
        :style="{ display: cancelFlex ? 'block' : 'flex' }"
      ></div>
    </div>
    <div
      class="codemirror-wrp"
      :class="{ shrink: isEditorOverlayActive }"
      :style="{ maxHeight: editorShrinkSize + 'px' }"
    >
      <div class="codemirror-btn" @click="runCode" v-if="!onlyCode">Run</div>
      <codemirror
        ref="editor"
        v-model="code"
        :options="onlyCode ? readOnlyOptions : optionsHTML"
        @ready="onCmReady"
      ></codemirror>
      <div
        class="expand-overlay"
        :class="{ active: isEditorOverlayActive }"
        @click="expandSnippet"
      >
        Show Code
      </div>
    </div>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/edit/closebrackets.js'

export default {
  props: {
    _code: {
      type: String
    },
    onlyCode: {
      type: Boolean,
      default: false
    },
    cancelFlex: {
      type: Boolean,
      default: false
    }
  },
  components: {
    codemirror
  },
  data() {
    return {
      defaultEditorSettings: {
        theme: 'base16-dark',
        lineWrapping: true,
        lint: true,
        lineNumbers: true,
        styleActiveLine: true,
        tabSize: 4,
        indentUnit: 2,
        matchBrackets: true,
        autoCloseBrackets: true,
        autoRefresh: true
      },
      code: '',
      isEditorOverlayActive: false,
      editorShrinkSize: 270
    }
  },
  computed: {
    optionsHTML() {
      return {
        ...this.defaultEditorSettings,
        mode: 'text/html'
      }
    },
    optionsJS() {
      return {
        ...this.defaultEditorSettings,
        mode: 'text/javascript'
      }
    },
    readOnlyOptions() {
      return {
        ...this.defaultEditorSettings,
        mode: 'text/html',
        readOnly: true
      }
    }
  },
  methods: {
    updatePreview() {
      const preview = this.$refs.preview
      preview.innerHTML = this.code
    },
    onCmReady() {
      this.$nextTick(() => {
        // prettier-ignore
        if (this.$refs.editor.$el.getBoundingClientRect().height > this.editorShrinkSize) {
          this.isEditorOverlayActive = true
        }
      })
    },
    runCode() {
      this.updatePreview()
    },
    expandSnippet() {
      this.isEditorOverlayActive = !this.isEditorOverlayActive
      this.editorShrinkSize = this.$refs.editor.$el.getBoundingClientRect().height
    }
  },
  mounted() {
    this.code = this._code
    this.updatePreview()

    if (
      this.$refs.previewWrp.getBoundingClientRect().height >
      this.editorShrinkSize
    ) {
      this.editorShrinkSize = this.$refs.previewWrp.getBoundingClientRect().height
    }
  }
}
</script>

<style lang="scss" scoped>
.snippet {
  padding: 1.5rem 0 1.5rem 0;
  display: flex;

  & > * {
    width: 100%;
  }
}

.preview-cnt {
  padding: 1rem;
  border-radius: 4px 0 0 4px;
  border: 1px solid #e0e0e0;
  border-right: none;
  background-color: #f9f9f9;

  & > div {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  iframe {
    width: 100%;
    display: block;
  }
}

.codemirror-wrp {
  position: relative;

  &.shrink {
    overflow: hidden;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
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

.codemirror-wrp:not(.shrink):hover {
  .codemirror-btn {
    opacity: 1;
  }
}

.expand-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(#fff, 0.4);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  z-index: 5;
  display: none;
  user-select: none;
  cursor: pointer;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;

  &.active {
    display: flex;
    transition: 0.3s;

    &:hover {
      -webkit-backdrop-filter: blur(4px);
      backdrop-filter: blur(4px);
    }
  }
}
</style>
