import { select, text, color } from '@storybook/addon-knobs'
import classNames from 'classnames'

export default () => {
  const accordionTemplate = select(
    'Accordion Template',
    {
      default: 'with checkboxes',
      'with checkboxes': 'checkbox',
      'with radios': 'radios'
    },
    'with checkboxes'
  )

  const colorClass = select(
    'Color Class',
    {
      default: '',
      orange: 'orange',
      green: 'green',
      red: 'red',
      pink: 'pink',
      purple: 'purple',
      blue: 'blue',
      yellow: 'yellow'
    },
    ''
  )

  const containerClasses = classNames(colorClass)

  const borderColor = color('--border-color', '')
  const borderWidth = text('--border-width', '')
  const borderRadius = text('--border-radius', '')
  const transitionLinear = text('--transition-linear', '')
  const accordionButtonHeight = text('--accordion-button-height', '')
  const accordionButtonBg = color('--accordion-button-bg', '')
  const hoverAccordionButtonBg = color('--hover-accordion-button-bg', '')
  const activeAccordionButtonBg = color('--active-accordion-button-bg', '')
  const activeAccordionTextColor = color('--active-accordion-text-color', '')
  const accordionIcon = text('--accordion-icon', '')
  const accordionIconSize = text('--accordion-icon-size', '')

  // prettier-ignore
  const customProperties = `
  ${borderColor ? `--border-color:${borderColor};` : ''}
  ${borderWidth ? `--border-width:${borderWidth};` : ''}
  ${borderRadius ? `--border-radius:${borderRadius};` : ''}
  ${transitionLinear ? `--transition-linear:${transitionLinear};` : ''}
  ${accordionButtonHeight ? `--accordion-button-height:${accordionButtonHeight};` : ''}
  ${accordionButtonBg ? `--accordion-button-bg:${accordionButtonBg};` : ''}
  ${hoverAccordionButtonBg ? `--hover-accordion-button-bg:${hoverAccordionButtonBg};` : ''}
  ${activeAccordionButtonBg ? `--active-accordion-button-bg:${activeAccordionButtonBg};` : ''}
  ${activeAccordionTextColor ? `--active-accordion-text-color:${activeAccordionTextColor};` : ''}
  ${accordionIcon ? `--accordion-icon:${accordionIcon};` : ''}
  ${accordionIconSize ? `--accordion-icon-size:${accordionIconSize};` : ''}
  `

  return accordionTemplate === 'checkboxes'
    ? `
  <div class="accordions ${containerClasses}" style="${customProperties}">

  <div class="accordion">
    <input type="checkbox" id="accordion-checkbox-1"/>
    <div class="accordion-container">
      <label for="accordion-checkbox-1" class="accordion-button">
        <span class="accordion-title">
          Accordion Menu
        </span>
      </label>
      <div class="accordion-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
      </div>
    </div>
  </div>

  <div class="accordion">
    <input type="checkbox" id="accordion-checkbox-2"/>
    <div class="accordion-container">
      <label for="accordion-checkbox-2" class="accordion-button">
        <span class="accordion-title">
          Accordion Menu
        </span>
      </label>
      <div class="accordion-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
      </div>
    </div>
  </div>

  <div class="accordion">
    <input type="checkbox" id="accordion-checkbox-3"/>
    <div class="accordion-container">
      <label for="accordion-checkbox-3" class="accordion-button">
        <span class="accordion-title">
          Accordion Menu
        </span>
      </label>
      <div class="accordion-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
      </div>
    </div>
  </div>

</div>
  `
    : `<div class="accordions ${containerClasses}" style="${customProperties}">

  <div class="accordion">
    <input type="radio" name="group1" id="accordion-checkbox-4"/>
    <div class="accordion-container">
      <label for="accordion-checkbox-4" class="accordion-button">
        <span class="accordion-title">
          Accordion Menu
        </span>
      </label>
      <div class="accordion-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
      </div>
    </div>
  </div>

  <div class="accordion">
    <input type="radio" name="group1" id="accordion-checkbox-5"/>
    <div class="accordion-container">
      <label for="accordion-checkbox-5" class="accordion-button">
        <span class="accordion-title">
          Accordion Menu
        </span>
      </label>
      <div class="accordion-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
      </div>
    </div>
  </div>

  <div class="accordion">
    <input type="radio" name="group1" id="accordion-checkbox-6"/>
    <div class="accordion-container">
      <label for="accordion-checkbox-6" class="accordion-button">
        <span class="accordion-title">
          Accordion Menu
        </span>
      </label>
      <div class="accordion-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore officiis voluptatum. Error eius et, molestiae iste distinctio placeat aut dignissimos est quis provident maiores minus, nulla, dolorum dolorem aspernatur!
      </div>
    </div>
  </div>

  </div>`
}
