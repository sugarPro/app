import * as React from 'react'
import { observer } from 'mobx-react'
import store from '../stores/todo'

const { handleInput, handleSubmit } = store;

const Input = observer((props)=>{
  const { inputValue } = props;
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInput} />
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </div>
  );
})

export default Input
