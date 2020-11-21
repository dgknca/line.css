import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Accordion from './accordion.template';

storiesOf('Others', module)
  .addDecorator(withKnobs)
  .add('Accordion', () => Accordion());
