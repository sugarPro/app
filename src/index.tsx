import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Todo';
import registerServiceWorker from './registerServiceWorker';
import store from "./stores/todo";

ReactDOM.render(<App store={store} />, document.getElementById(
  "root"
) as HTMLElement);

registerServiceWorker();
