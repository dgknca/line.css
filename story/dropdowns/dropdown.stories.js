import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Dropdown from './dropdown.template';

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('Dropdown', () => Dropdown());
