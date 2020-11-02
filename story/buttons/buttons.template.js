import { select } from '@storybook/addon-knobs';

export default () => {
  const buttonType = select('Button Type', {
    button: 'button',
    file: 'file',
  }, 'button');

  const buttonClasses = select('Button Classes', {
    default: '',
    'btn-orange': 'btn-orange',
    'btn-green': 'btn-green',
    'btn-red': 'btn-red',
    'btn-pink': 'btn-pink',
    'btn-blue': 'btn-blue',
    'btn-yellow': 'btn-yellow',
  }, '');

  return buttonType === 'button' ? `
    <button type="button" class="btn ${buttonClasses}">Button ${buttonClasses}</button>
  ` : `
    <label class="btn ${buttonClasses}">
      <span>Select your file</span>
      <input type="file">
    </label>
  `;
};
