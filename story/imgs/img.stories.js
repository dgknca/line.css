import { storiesOf } from '@storybook/html'
import { withKnobs } from '@storybook/addon-knobs'

import Image from './img.template'

storiesOf('Others', module)
  .addDecorator(withKnobs)
  .add('Image', () => Image())
