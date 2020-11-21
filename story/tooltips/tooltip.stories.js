import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Tooltip from './tooltip.template';

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .add('Tooltip', () => Tooltip());
