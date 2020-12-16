import { select, boolean, text, color } from '@storybook/addon-knobs'
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

  const noShadow = boolean('no-shadow', false)
  const shadowRight = boolean('shadow-right', false)
  const shadowTop = boolean('shadow-top', false)
  const disableHover = boolean('disable-hover', false)

  const borderColor = color('--border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const shadowBg = color('--shadow-bg', '')
  const shadowDistance = text('--shadow-distance', '')
  const transition = text('--transition', '')
  const imgWidth = text('--img-width', '')
  const imgHeight = text('--img-height', '')
  const objectFit = text('--object-fit', '')
  const aspectRatio = text('--aspect-ratio', '')

  const customProperties = ` ${
    borderColor ? `--border-color:${borderColor};` : ''
  }
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${shadowBg ? `--shadow-bg:${shadowBg};` : ''}
  ${shadowDistance ? `--shadow-distance:${shadowDistance};` : ''}
  ${transition ? `--transition:${transition};` : ''}
  ${imgWidth ? `--img-width:${imgWidth};` : ''}
  ${imgHeight ? `--img-height:${imgHeight};` : ''}
  ${objectFit ? `--object-fit:${objectFit};` : ''}
  ${aspectRatio ? `--aspect-ratio:${aspectRatio};` : ''}`

  const containerClasses = classNames(
    {
      'shadow-top': shadowTop,
      'shadow-right': shadowRight,
      'no-shadow': noShadow,
      'disable-hover': disableHover
    },
    colorClass
  )

  return `
  <div class="img ${containerClasses}" style="${customProperties}">
    <img src="https://images.unsplash.com/photo-1605964883672-73ed3a8a29e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
  </div>
  `
}
