import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Card from './cards.template';

storiesOf('Others', module)
  .addDecorator(withKnobs)
  .add('Card', () => Card());
