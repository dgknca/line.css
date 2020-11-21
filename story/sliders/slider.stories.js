import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Slider from './slider.template';

storiesOf('Sliders', module)
  .addDecorator(withKnobs)
  .add('Slider', () => Slider());
