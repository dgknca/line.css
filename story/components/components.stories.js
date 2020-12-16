import { storiesOf } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'

import Card from './cards.template'
import Accordion from './accordion.template'
import Dropdown from './dropdown.template'
import Slider from './slider.template'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Card', () => Card())
  .add('Accordion', () => Accordion())
  .add('Dropdown', () => Dropdown())
  .add('Slider', () => Slider())
