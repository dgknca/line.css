import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Checkbox from './checkbox.template';
import Radio from './radio.template';
import Text from './text.template';
import File from './file.template';

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => Checkbox())
  .add('Radio', () => Radio())
  .add('Text', () => Text())
  .add('File', () => File());
