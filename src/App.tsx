import * as React from 'react';
import './App.css';
import Input from './components/Input'
import Item from './components/Item';
import { Todo } from './types'
import { observer } from 'mobx-react'

const App = observer((props) => {
  const { todoList } = props;
  return (
    <div>
      <Input />
      {
        todoList.map((item: Todo, index: number) => {
          return <Item {...item} key={index} />;
        })
      }
    </div>
  );
})


export default App;
