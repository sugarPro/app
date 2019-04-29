
import { Status, Todo } from "../types";
const { OPEN, DONE } = Status;
import { generate } from 'shortid'

import { observable, action } from "mobx";


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

  @action public handleInput = (ev: React.FormEvent<HTMLInputElement>) => {
    this.inputValue = ev.currentTarget.value
  }

  @action public handleSubmit = (ev: React.FormEvent) => {
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