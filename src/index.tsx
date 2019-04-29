import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from "./stores";
const { todoList } = store

ReactDOM.render(<App todoList={todoList} />, document.getElementById(
  "root"
) as HTMLElement);


enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
console.info(Direction);
console.info(Direction[4]);

registerServiceWorker();
