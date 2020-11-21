import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Cards from './cards.template';

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('Cards', () => Cards());
