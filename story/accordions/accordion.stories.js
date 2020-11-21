import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Accordion from './accordion.template';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Accordion', () => Accordion());
