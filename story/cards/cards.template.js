import { select } from '@storybook/addon-knobs'

export default () => {
  const cardClasses = select(
    'Card Classes',
    {
      default: 'card-v',
      'vertical (card-v)': 'card-v',
      'horizontal (card-h)': 'card-h'
    },
    'card-v'
  )

  return `
    <div class="card ${cardClasses}">
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1605926637412-b0cd5a3e3543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80" />
      </div>
      <div class="card-content">
        <h4 class="card-title">Card Title</h4>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit purus mauris tellus eget. Justo elementum leo orci eget aliquet nunc. Arcu pharetra ultrices eu vitae, rutrum dictum purus et. Ac mauris in luctus nunc, sagittis.</p>
      </div>
    </div>
  `
}
