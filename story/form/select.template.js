import { color, text } from '@storybook/addon-knobs'

export default () => {
  const borderColor = color('--border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const textColor = color('--text-color', '')
  const focusBoxShadowColor = color('--focus-box-shadow-color', '')
  const focusBoxShadowWidth = text('--focus-box-shadow-width', '')
  const selectIconSize = text('--select-icon-size', '')
  const selectIcon = text('--select-icon', '')

  // prettier-ignore
  const customProperties = `${borderColor ? `--border-color:${borderColor};` : '' }
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${textColor ? `--text-color:${textColor};` : ''}
  ${focusBoxShadowColor ? `--focus-box-shadow-color:${focusBoxShadowColor};` : ''}
  ${focusBoxShadowWidth ? `--focus-box-shadow-width:${focusBoxShadowWidth};` : ''}
  ${selectIconSize ? `--select-icon-size:${selectIconSize};` : ''}
  ${selectIcon ? `--select-icon:${selectIcon};` : ''}`

  return `<select class="select" style="${customProperties}">
  <option>Apples</option>
  <option selected>Pineapples</option>
  <option>Chocklate</option>
  <option>Pancakes</option>
</select>`
}
