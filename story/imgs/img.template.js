import { select, boolean, text } from '@storybook/addon-knobs'
import classNames from 'classnames'

export default () => {
  const colorClass = select(
    'Color Class',
    {
      default: '',
      'img-orange': 'img-orange',
      'img-green': 'img-green',
      'img-red': 'img-red',
      'img-pink': 'img-pink',
      'img-blue': 'img-blue',
      'img-yellow': 'img-yellow'
    },
    ''
  )

  const sizeClass = select(
    'Size Class',
    {
      default: 'img-sm',
      'img-sm': 'img-sm',
      'img-md': 'img-md',
      'img-l': 'img-l'
    },
    'img-sm'
  )

  const fullWidth = boolean('full width', false)
  const customPropertySize = text('--size', '')

  const isFullWidth = classNames({
    full: fullWidth
  })

  return `
  <div class="img ${colorClass} ${sizeClass} ${isFullWidth}" style="--size:${customPropertySize}">
    <img src="https://images.unsplash.com/photo-1605964883672-73ed3a8a29e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
  </div>
  `
}
