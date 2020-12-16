import { select, boolean, color, text } from '@storybook/addon-knobs'
import classNames from 'classnames'

export default () => {
  const inputTemplate = select(
    'Input Template',
    {
      default: '',
      'with icon': 'with icon'
    },
    ''
  )

  const colorClass = select(
    'Color Class',
    {
      default: '',
      orange: 'orange',
      green: 'green',
      red: 'red',
      pink: 'pink',
      blue: 'blue',
      yellow: 'yellow'
    },
    ''
  )

  const fieldHorizontal = boolean('field-horizontal', false)
  const focus = boolean('focus', false)
  const disabled = boolean('disabled', false)
  const isHorizontalField = classNames({
    'field-horizontal': fieldHorizontal
  })
  const isDisabled = classNames({
    disabled: disabled
  })

  const containerClasses = classNames(
    {
      focus: focus
    },
    colorClass
  )

  const borderColor = color('--border-color', '')
  const disabledBorderColor = color('--disabled-border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const textColor = color('--text-color', '')
  const focusBoxShadowColor = color('--focus-box-shadow-color', '')
  const focusBoxShadowWidth = text('--focus-box-shadow-width', '')
  const inputHeight = text('--input-height', '')
  const placeholderColor = color('--placeholder-color', '')

  // prettier-ignore
  const customProperties = `
  ${borderColor ? `--border-color:${borderColor};` : ''}
  ${disabledBorderColor ? `--disabled-border-color:${disabledBorderColor};` : ''}
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${textColor ? `--text-color:${textColor};` : ''}
  ${inputHeight ? `--input-height:${inputHeight};` : ''}
  ${placeholderColor ? `--placeholder-color:${placeholderColor};` : ''}
  ${focusBoxShadowColor ? `--focus-box-shadow-color:${focusBoxShadowColor};` : ''}
  ${focusBoxShadowWidth ? `--focus-box-shadow-width:${focusBoxShadowWidth};` : '' }`

  return inputTemplate === 'with icon'
    ? `<div class="field ${isHorizontalField}">
  <div class="field-label">
    <label class="label">First name</label>
  </div>
  <div class="field-body">
    <div class="control">
      <input class="input has-icon-left has-icon-right ${containerClasses}" style="${customProperties}" type="email" placeholder="Email" ${isDisabled}>
      <span class="icon-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </span>
      <span class="icon-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </span>
    </div>
  </div>
</div>`
    : `<div class="field ${isHorizontalField}">
  <div class="field-label">
    <label class="label">Email</label>
  </div>
  <div class="field-body">
    <input class="input ${containerClasses}" style="${customProperties}" type="text" placeholder="First name" ${isDisabled}>
  </div>
</div>`
}
