import { storiesOf } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'

import Slider from './slider.template'

storiesOf('Others', module)
  .addDecorator(withKnobs)
  .add('Slider', () => Slider())
