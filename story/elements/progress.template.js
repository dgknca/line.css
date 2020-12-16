import { select, color, text } from '@storybook/addon-knobs'
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

  const sizeClass = select(
    'Size Class',
    {
      default: '',
      'progress-sm': 'progress-sm',
      'progress-l': 'progress-l'
    },
    ''
  )

  const borderColor = color('--border-color', '')
  const borderWidth = text('--border-width', '')
  // const transitionLinear = text('--transition-linear', '')
  const progressBarBg = color('--progress-bar-bg', '')
  const progressValueBg = color('--progress-value-bg', '')

  // prettier-ignore
  const customProperties = `
    ${borderColor ? `--border-color:${borderColor};` : ''}
    ${borderWidth ? `--border-width:${borderWidth};` : ''}
    ${progressBarBg ? `--progress-bar-bg:${progressBarBg};` : ''}
    ${progressValueBg ? `--progress-value-bg:${progressValueBg};` : ''}
  `

  const containerClasses = classNames(colorClass, sizeClass)

  return `
  <progress class="progress ${containerClasses}" style="${customProperties}" value="15" max="100">15%</progress>
  `
}
