import { select, boolean, text, color } from '@storybook/addon-knobs'
import classNames from 'classnames'

export default () => {
  const buttonTemplate = select(
    'Button Template',
    {
      default: 'simple',
      'with icon right': 'icon right',
      'with icon left': 'icon left'
    },
    'simple'
  )

  const colorClass = select(
    'Color Class',
    {
      default: '',
      orange: 'orange',
      green: 'green',
      red: 'red',
      pink: 'pink',
      purple: 'purple',
      blue: 'blue',
      yellow: 'yellow'
    },
    ''
  )
  const sizeClass = select(
    'Size Class',
    {
      default: '',
      'btn-sm': 'btn-sm',
      'btn-l': 'btn-l'
    },
    ''
  )

  const btnFull = boolean('btn-full', false)
  const btnLoading = boolean('btn-loading', false)
  const hover = boolean('hover', false)
  const active = boolean('active', false)
  const shadowTop = boolean('shadow-top', false)
  const shadowRight = boolean('shadow-right', false)
  const noShadow = boolean('no-shadow', false)
  const disabled = boolean('disabled', false)

  const containerClasses = classNames(
    {
      'btn-full': btnFull,
      'btn-loading': btnLoading,
      'shadow-top': shadowTop,
      'shadow-right': shadowRight,
      'no-shadow': noShadow,
      hover: hover,
      active: active
    },
    sizeClass,
    colorClass
  )

  const borderColor = color('--border-color', '')
  const disabledBorderColor = color('--disabled-border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const textColor = color('--text-color', '')
  const shadowBg = color('--shadow-bg', '')
  const shadowDistance = text('--shadow-distance', '')
  const focusBoxShadowColor = color('--focus-box-shadow-color', '')
  const focusBoxShadowWidth = text('--focus-box-shadow-width', '')
  const transition = text('--transition', '')

  // prettier-ignore
  const customProperties = `${borderColor ? `--border-color:${borderColor};` : ''}
  ${disabledBorderColor ? `--disabled-border-color:${disabledBorderColor};` : ''}
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${textColor ? `--text-color:${textColor};` : ''}
  ${shadowBg ? `--shadow-bg:${shadowBg};` : ''}
  ${shadowDistance ? `--shadow-distance:${shadowDistance};` : ''}
  ${focusBoxShadowColor ? `--focus-box-shadow-color:${focusBoxShadowColor};` : ''}
  ${focusBoxShadowWidth ? `--focus-box-shadow-width:${focusBoxShadowWidth};` : ''}
  ${transition ? `--transition:${transition};` : ''}`

  return buttonTemplate === 'simple'
    ? `
    <button type="button" class="btn ${containerClasses}"
    style="${customProperties}"
    ${disabled ? 'disabled' : ''}
    ><span class="btn-text">Button</span></button>
  `
    : buttonTemplate === 'icon right'
    ? `
  <button type="button" class="btn ${containerClasses}" style="${customProperties}">
    Button
    <span class="btn-icon btn-icon-right">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </span>
  </button>
`
    : buttonTemplate === 'icon left'
    ? `
<button type="button" class="btn ${containerClasses}" style="${customProperties}">
  <span class="btn-icon btn-icon-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
  </span>
  Button
</button>
`
    : ''
}
