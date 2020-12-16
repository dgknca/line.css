import { storiesOf } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'

import Checkbox from './checkbox.template'
import Radio from './radio.template'
import Text from './text.template'
import File from './file.template'
import Select from './select.template'
import Range from './range.template'
import Textarea from './textarea.template'

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => Checkbox())
  .add('Radio', () => Radio())
  .add('Text', () => Text())
  .add('File', () => File())
  .add('Range', () => Range())
  .add('Textarea', () => Textarea())
  .add('Select', () => Select())
