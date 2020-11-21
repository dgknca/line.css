/* eslint-disable import/no-extraneous-dependencies */
import {
  addParameters,
  configure,
} from '@storybook/html';
/* eslint-enable */

import '../scss/main.scss'; // eslint-disable-line import/no-unresolved

// automatically import all files ending in *.stories.js
const req = require.context('../story', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
