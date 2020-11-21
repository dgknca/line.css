import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Dropdown from './dropdown.template';

storiesOf('Others', module)
  .addDecorator(withKnobs)
  .add('Dropdown', () => Dropdown());
