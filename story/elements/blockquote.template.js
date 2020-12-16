import { select, boolean, color, text } from '@storybook/addon-knobs'
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

  const borderColor = color('--border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const textColor = color('--text-color', '')
  const shadowBg = color('--shadow-bg', '')

  // prettier-ignore
  const customProperties = ` ${borderColor ? `--border-color:${borderColor};` : ''}
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${textColor ? `--text-color:${textColor};` : ''}
  ${shadowBg ? `--shadow-bg:${shadowBg};` : ''}`

  const containerClasses = classNames(
    {
      'no-shadow': noShadow
    },
    colorClass
  )

  return `
  <blockquote class="blockquote ${containerClasses}" style="${customProperties}">
  <span class="blockquote-title">HEY!</span>
  <p class="blockquote-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit purus mauris tellus eget.
    Justo elementum leo orci eget aliquet nunc. Arcu pharetra ultrices eu vitae, rutrum dictum purus et.
    Ac mauris in luctus nunc, sagittis.
  </p>
  <footer class="blockquote-footer">dgknca</footer>
</blockquote>
  `
}
