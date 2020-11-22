import { select } from '@storybook/addon-knobs'

export default () => {
  const colorClass = select(
    'Color Class',
    {
      default: '',
      'blockquote-orange': 'blockquote-orange',
      'blockquote-green': 'blockquote-green',
      'blockquote-red': 'blockquote-red',
      'blockquote-pink': 'blockquote-pink',
      'blockquote-blue': 'blockquote-blue',
      'blockquote-yellow': 'blockquote-yellow'
    },
    ''
  )

  return `
  <blockquote class="blockquote ${colorClass}" data-title="hey!">
    <span class="blockquote-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit purus mauris tellus eget.
      Justo elementum leo orci eget aliquet nunc. Arcu pharetra ultrices eu vitae, rutrum dictum purus et.
      Ac mauris in luctus nunc, sagittis.
    </span>
  </blockquote>
  `
}
