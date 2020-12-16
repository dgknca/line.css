import { color, text, select } from '@storybook/addon-knobs'
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
      blue: 'blue',
      yellow: 'yellow'
    },
    ''
  )

  const containerClasses = classNames(colorClass)

  const borderColor = color('--border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const textColor = color('--text-color', '')
  const focusBoxShadowColor = color('--focus-box-shadow-color', '')
  const focusBoxShadowWidth = text('--focus-box-shadow-width', '')
  const placeholderColor = color('--placeholder-color', '')

  // prettier-ignore
  const customProperties = `
  ${borderColor ? `--border-color:${borderColor};` : ''}
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${textColor ? `--text-color:${textColor};` : ''}
  ${placeholderColor ? `--placeholder-color:${placeholderColor};` : ''}
  ${focusBoxShadowColor ? `--focus-box-shadow-color:${focusBoxShadowColor};` : ''}
  ${focusBoxShadowWidth ? `--focus-box-shadow-width:${focusBoxShadowWidth};` : '' }`

  // prettier-ignore
  return `<textarea class="textarea ${containerClasses}" placeholder="Text" style="${customProperties}"></textarea>`
}
