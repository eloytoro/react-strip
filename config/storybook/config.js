import { configure } from '@kadira/storybook';
import 'style.css';


function loadStories() {
  const req = require.context('../../stories', true, /\.js$/);
  req.keys().forEach(x => req(x));
}

configure(loadStories, module);
