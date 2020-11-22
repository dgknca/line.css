import { select } from '@storybook/addon-knobs'

export default () => {
  const buttonTemplate = select(
    'Button Template',
    {
      default: 'simple',
      'with icon right': 'icon right',
      'with icon left': 'icon left'
    },
    'simple'
  )

  const buttonClasses = select(
    'Color Class',
    {
      default: '',
      'btn-orange': 'btn-orange',
      'btn-green': 'btn-green',
      'btn-red': 'btn-red',
      'btn-pink': 'btn-pink',
      'btn-blue': 'btn-blue',
      'btn-yellow': 'btn-yellow'
    },
    ''
  )

  return buttonTemplate === 'simple'
    ? `
    <button type="button" class="btn ${buttonClasses}"><span class="btn-text">Button</span></button>
  `
    : buttonTemplate === 'icon right'
    ? `
  <button type="button" class="btn ${buttonClasses}">
    <span class="btn-text">Button</span>
    <span class="btn-icon btn-icon-right">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </span>
  </button>
`
    : buttonTemplate === 'icon left'
    ? `
<button type="button" class="btn ${buttonClasses}">
  <span class="btn-icon btn-icon-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
  </span>
  <span class="btn-text">Button</span>
</button>
`
    : ''
}
