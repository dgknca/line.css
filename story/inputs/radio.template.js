import { select } from '@storybook/addon-knobs';

export default () => {

  const inputClasses = select('Color Class', {
    default: '',
    'input-orange': 'input-orange',
    'input-green': 'input-green',
    'input-red': 'input-red',
    'input-pink': 'input-pink',
    'input-blue': 'input-blue',
    'input-yellow': 'input-yellow',
  }, '');

  return `<label class="input-container input-check ${inputClasses}"><input type="radio" name="radioInput" /><span></span></label><label class="input-container input-check ${inputClasses}"><input type="radio" name="radioInput" /><span></span></label>`;
};
