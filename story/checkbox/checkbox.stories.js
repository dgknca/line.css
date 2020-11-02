import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Checkbox from './checkbox.template';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => Checkbox());
