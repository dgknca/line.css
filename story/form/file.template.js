import { select, text, color } from '@storybook/addon-knobs'

export default () => {
  const inputType = select(
    'Type',
    {
      default: 'button',
      'drag drop': 'drag drop'
    },
    'button'
  )

  const borderColor = color('--border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const textColor = color('--text-color', '')
  const transitionLinear = text('--transition-linear', '')
  const dragDropBg = text('--drag-drop-bg', '')
  const hoverDragDropBg = text('--hover-drag-drop-bg', '')
  const successDragDropBg = text('--success-drag-drop-bg', '')
  const successDragDropBorderColor = text(
    '--success-drag-drop-border-color',
    ''
  )
  const successTextColor = text('--success-text-color', '')

  const customProperties = `${
    borderColor ? `--border-color:${borderColor};` : ''
  }
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${textColor ? `--text-color:${textColor};` : ''}
  ${transitionLinear ? `--transition-linear:${transitionLinear};` : ''}
  ${dragDropBg ? `--drag-drop-bg:${dragDropBg};` : ''}
  ${hoverDragDropBg ? `--hover-drag-drop-bg:${hoverDragDropBg};` : ''}
  ${successDragDropBg ? `--success-drag-drop-bg:${successDragDropBg};` : ''}
  ${successTextColor ? `--success-text-color:${successTextColor};` : ''}
  ${
    successDragDropBorderColor
      ? `--success-drag-drop-border-color:${successDragDropBorderColor};`
      : ''
  }
`

  return inputType === 'drag drop'
    ? `
    <label class="input-file input-file-drag-drop" style="${customProperties}">
    <input type="file" required>
    <div class="file-dummy">
      <span class="file-default">Drag & drop or <a>browse</a></span>
      <span class="file-success">Great, your files are selected. Keep on.</span>
    </div>
  </label>
  `
    : `
    <label class="input-file" style="${customProperties}">
    <input type="file" required>
    <button type="button" class="btn btn-file">
      <span class="file-default">Select a file</span>
      <span class="file-success">Your files are selected</span>
    </button>
  </label>
  `
}
