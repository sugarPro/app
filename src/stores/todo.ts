
import { Status, Todo } from "../types/todo";
const { OPEN, DONE } = Status;
import { generate } from 'shortid'

import { observable, action, computed, configure } from "mobx";

configure({ enforceActions: "observed" })

class AppStore {
  @observable public inputValue: string = ''

  @observable public todoList: Todo[] = [
    {
      id: generate(),
      status: OPEN,
      timeStamp: 1556444794913,
      title: "make money"
    },
    {
      id: generate(),
      timeStamp: 1556444860236,
      title: "GOT",
      status: DONE
    }
  ];

  @computed get todoProgress() {
    let undone = 0;
    let done = 0;
    this.todoList.map(item => {
      const { status } = item;
      if (status !== Status.DONE){
        undone ++;
      }else{
        done++
      }
    })

    return `${done} / ${undone + done}`;
  }

  @action public handleInput = (ev: React.FormEvent<HTMLInputElement>) => {
    this.inputValue = ev.currentTarget.value
  }

  @action public handleSubmit = (ev: React.FormEvent) => {
    if(!this.inputValue){
      return;
    }
    this.todoList.push({ title: this.inputValue, id: generate(), timeStamp: new Date().getTime(), status: Status.OPEN })
    this.inputValue = ''
  }

  @action public changeStatus = (id: string) => {
    this.todoList.map(item => {
      const { id: todoId, status } = item;
      if (todoId === id){
        const newStatus = status << 1
        item.status = Status[newStatus] === undefined ? 1 : newStatus
      }
    })
  }
}




export default new AppStore();