import { select } from '@storybook/addon-knobs';

export default () => {

  const tooltipClasses = select('Tooltip Classes', {
    default: 'tooltip-top',
    'tooltip-bottom': 'tooltip-bottom',
    'tooltip-right': 'tooltip-right',
    'tooltip-left': 'tooltip-left',
  }, 'tooltip-top');

  return `
    <span class="tooltip ${tooltipClasses}" data-text="tooltip">inline tooltip</span>
  `;
};
