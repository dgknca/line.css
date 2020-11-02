import { select } from '@storybook/addon-knobs';

export default () => {

  const checkboxClasses = select('Checkbox Classes', {
    default: '',
    'checkbox-orange': 'checkbox-orange',
    'checkbox-green': 'checkbox-green',
    'checkbox-red': 'checkbox-red',
    'checkbox-pink': 'checkbox-pink',
    'checkbox-blue': 'checkbox-blue',
    'checkbox-yellow': 'checkbox-yellow',
  }, '');

  return `<label class="checkbox ${checkboxClasses}"><input type="checkbox" /><span></span></label>`;
};
