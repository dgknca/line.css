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
      purple: 'purple',
      blue: 'blue',
      yellow: 'yellow'
    },
    ''
  )

  const shadowTop = boolean('shadow-top', false)
  const shadowRight = boolean('shadow-right', false)
  const noShadow = boolean('no-shadow', false)
  const cardV = boolean('card-v', false)

  const containerClasses = classNames(
    {
      'shadow-top': shadowTop,
      'shadow-right': shadowRight,
      'no-shadow': noShadow,
      'card-v': cardV
    },
    colorClass
  )

  const borderColor = color('--border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const textColor = color('--text-color', '')
  const shadowBg = color('--shadow-bg', '')
  const shadowDistance = text('--shadow-distance', '')
  const cardImageWidth = text('--card-image-width', '')
  const cardImageHeight = text('--card-image-height', '')

  // prettier-ignore
  const customProperties = `
  ${borderColor ? `--border-color:${borderColor};` : ''}
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${textColor ? `--text-color:${textColor};` : ''}
  ${shadowBg ? `--shadow-bg:${shadowBg};` : ''}
  ${shadowDistance ? `--shadow-distance:${shadowDistance};` : ''}
  ${cardImageWidth ? `--card-image-width:${cardImageWidth};` : ''}
  ${cardImageHeight ? `--card-image-height:${cardImageHeight};` : ''}
  `

  return `
  <div class="card ${containerClasses}" style="${customProperties}">
  <div class="card-image">
    <img src="https://images.unsplash.com/photo-1607969391576-48f9021ded30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
  </div>
  <div class="card-content">
    <h4 class="card-title">Card Title</h4>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit purus mauris tellus eget. Justo elementum leo orci eget aliquet nunc. Arcu pharetra ultrices eu vitae, rutrum dictum purus et. Ac mauris in luctus nunc, sagittis.</p>
  </div>
</div>
  `
}
