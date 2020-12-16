import { select, text, color, boolean } from '@storybook/addon-knobs'
import classNames from 'classnames'

export default () => {
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

  const closeOnClickOutside = boolean('close-on-click-outside', false)
  const openOnHover = boolean('open-on-hover', false)
  const rightAlign = boolean('right-align', false)
  const centerAlign = boolean('center-align', false)
  const noIcon = boolean('no-icon', false)

  const containerClasses = classNames(colorClass, {
    'close-on-click-outside': closeOnClickOutside,
    'open-on-hover': openOnHover,
    'right-align': rightAlign,
    'center-align': centerAlign,
    'no-icon': noIcon
  })

  const borderColor = color('--border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const textColor = color('--text-color', '')
  const focusBoxShadowColor = color('--focus-box-shadow-color', '')
  const focusBoxShadowWidth = text('--focus-box-shadow-width', '')
  const dropdownIconSize = text('--dropdown-icon-size', '')
  const dropdownIcon = text('--dropdown-icon', '')

  // prettier-ignore
  const customProperties = `
  ${borderColor ? `--border-color:${borderColor};` : ''}
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${textColor ? `--text-color:${textColor};` : ''}
  ${focusBoxShadowColor ? `--focus-box-shadow-color:${focusBoxShadowColor};` : ''}
  ${focusBoxShadowWidth ? `--focus-box-shadow-width:${focusBoxShadowWidth};` : ''}
  ${dropdownIconSize ? `--dropdown-icon-size:${dropdownIconSize};` : ''}
  ${dropdownIcon ? `--dropdown-icon:${dropdownIcon};` : ''}
  `

  return `
  <div class="dropdown ${containerClasses}" style="${customProperties}">
  <input type="checkbox" id="dropdown">
  <label for="dropdown" class="dropdown-trigger">Dropdown</label>
  <div class="dropdown-menu">
    <div class="dropdown-list">
      <div class="dropdown-item">I have a sublist
        <div class="dropdown-sub-list">
          <a href="#0" class="dropdown-item">Sub item 1</a>
          <a href="#0" class="dropdown-item">Sub item 2</a>
        </div>
      </div>
      <a href="#0" class="dropdown-item">Another action</a>
      <a href="#0" class="dropdown-item">Something else here</a>
    </div>
  </div>
  </div>
  `
}
