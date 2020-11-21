import { select, boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';

export default () => {
  const noShadow = boolean('no-shadow', false);
  const noTransition = boolean('no-transition', false);

  const accordionClasses = select('Accordion Classes', {
    default: '',
    'accordion-orange': 'accordion-orange',
    'accordion-green': 'accordion-green',
    'accordion-red': 'accordion-red',
    'accordion-pink': 'accordion-pink',
    'accordion-blue': 'accordion-blue',
    'accordion-yellow': 'accordion-yellow',
  }, '');

  const containerClasses = classNames(
    {
      'no-shadow': noShadow,
      'no-transition': noTransition,
    },
  );

  return `
  <div class="accordion ${accordionClasses}${containerClasses}">
    <input type="checkbox" class="accordion-checkbox" id="accordion-checkbox-1"/>
    <div class="accordion-container">
      <label for="accordion-checkbox-1" class="accordion-button">
        <span class="accordion-title">
          Accordion Menu
        </span>
        <span class="accordion-chevron">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
      </label>
      <div class="accordion-content" style="--items-count:3">
        <div class="accordion-item-container">
          <p>Item 1</p>
        </div>
        <div class="accordion-item-container">
          <p>Item 2</p>
        </div>
        <div class="accordion-item-container">
          <p>Item 3</p>
        </div>
      </div>
    </div>
  </div>
  `;
};
