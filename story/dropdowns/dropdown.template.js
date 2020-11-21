import { select } from '@storybook/addon-knobs';

export default () => {

  // const accordionClasses = select('Accordion Classes', {
  //   default: '',
  //   'accordion-orange': 'accordion-orange',
  //   'accordion-green': 'accordion-green',
  //   'accordion-red': 'accordion-red',
  //   'accordion-pink': 'accordion-pink',
  //   'accordion-blue': 'accordion-blue',
  //   'accordion-yellow': 'accordion-yellow',
  // }, '');

  return `
  <div class="dropdown">
    <a href="#0" class="dropdown-trigger">inline dropdown menu</a>
    <div class="dropdown-container">
      <ul class="dropdown-menu">
        <li class="dropdown-item"><button class="dropdown-link">Action</button>
          <ul class="dropdown-sub-list">
            <li class="dropdown-item"><a href="#0" class="dropdown-link">Sub item 1</a></li>
            <li class="dropdown-item"><a href="#0" class="dropdown-link">Sub item 2</a></li>
          </ul>
        </li>
        <li class="dropdown-item"><a href="#0" class="dropdown-link">Another action</a></li>
        <li class="dropdown-item"><a href="#0" class="dropdown-link">Something else here</a></li>
      </ul>
    </div>
  </div>
  `;
};
