import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Checkbox from './checkbox.template';
import Radio from './radio.template';

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => Checkbox())
  .add('Radio', () => Radio());
