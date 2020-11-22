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
  <div class="breadcrumb">
    <ul>
      <li><a href="#0">Home</a></li>
      <li><a href="#0">Docs</a></li>
      <li class="active"><a href="#0">Breadcrumb</a></li>
    </ul>
  </div>
  `
}
