import * as React from 'react';
import Input from './components/Input'
import Item from './components/Item';
import { Todo } from './types/todo'
import { observer } from 'mobx-react'

const App = observer((props) => {
  const { todoList, inputValue, todoProgress } = props.store
  return (
    <div>
      <Input inputValue={inputValue} />
      {
        todoList.map((item: Todo, index: number) => {
          return <Item {...item} key={index} />;
        })
      }
      <div>{todoProgress}</div>
    </div>
  );
})

export default App;
