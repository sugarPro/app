import * as React from 'react';
import { observer } from 'mobx-react'
import { Todo, Status } from '../types/todo'
import store from '../stores/todo'
const { changeStatus } = store

const Item = observer((props: Todo) => {
  const { title, id, status } = props;
  return <div>
    <div onClick={() => {changeStatus(id)}}>{title}</div>
    <div>{Status[status]}</div>
  </div>
})

export default Item;