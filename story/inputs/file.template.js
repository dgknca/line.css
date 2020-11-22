import { select } from '@storybook/addon-knobs'

export default () => {
  const inputType = select(
    'Color Class',
    {
      default: 'drag drop',
      button: 'button'
    },
    'drag drop'
  )

  return inputType === 'drag drop'
    ? `
    <div class="input-container input-file input-file-drag-drop">
        <input type="file" required/>
        <div class="file-dummy">
            <span class="file-success">Great, your files are selected. Keep on.</span>
            <span class="file-default">Drag & drop or <span class="input-file-browse">browse</span></span>
        </div>
    </div>
  `
    : `
    <div class="input-container input-file">
        <input type="file" required/>
        <button type="button" class="btn file-button">
            <span class="btn-text">
                <span class="file-success">Great, your files are selected.</span>
                <span class="file-default">Select a file</span>
            </span>
        </button>
    </div>
  `
}
