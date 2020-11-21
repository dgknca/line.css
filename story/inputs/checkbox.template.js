import { select } from '@storybook/addon-knobs';

export default () => {
  
  const inputClasses = select('Input Classes', {
    default: '',
    'input-orange': 'input-orange',
    'input-green': 'input-green',
    'input-red': 'input-red',
    'input-pink': 'input-pink',
    'input-blue': 'input-blue',
    'input-yellow': 'input-yellow',
  }, '');

  return `<label class="input ${inputClasses}"><input type="checkbox" /><span></span></label><label class="input ${inputClasses}"><input type="checkbox" /><span></span></label>`;
};
