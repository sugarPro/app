import * as React from 'react'
import { observer } from 'mobx-react'
import store from '../stores'

const { handleInput, handleSubmit } = store;

const Input = observer(()=>{
  return (
    <div>
      <input type="text" value={store.inputValue} onChange={handleInput} />
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </div>
  );
})

export default Input