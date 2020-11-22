import { select } from '@storybook/addon-knobs';

export default () => {

  const colorClass = select('Color Class', {
    default: '',
    'input-orange': 'input-orange',
    'input-green': 'input-green',
    'input-red': 'input-red',
    'input-pink': 'input-pink',
    'input-blue': 'input-blue',
    'input-yellow': 'input-yellow',
  }, '');

  return `<div class="input-container ${colorClass}"><input type="text" placeholder="Name" /></div>`;
};
