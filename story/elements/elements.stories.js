import { storiesOf } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'

import Buttons from './buttons.template'
import Image from './img.template'
import Blockquote from './blockquote.template'
import Progress from './progress.template'
import Delete from './delete.template'
import Notification from './notification.template'

storiesOf('Elements', module)
  .addDecorator(withKnobs)
  .add('Buttons', () => Buttons())
  .add('Image', () => Image())
  .add('Blockquote', () => Blockquote())
  .add('Progress', () => Progress())
  .add('Delete', () => Delete())
  .add('Notification', () => Notification())
