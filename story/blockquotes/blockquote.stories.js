import { storiesOf } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'

import Blockquote from './blockquote.template'

storiesOf('Others', module)
  .addDecorator(withKnobs)
  .add('Blockquote', () => Blockquote())
