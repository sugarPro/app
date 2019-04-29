
export enum Status {
  OPEN = 1 << 0,
  WIP = 1 << 1,
  DONE = 1 << 2
}
export interface Todo {
  id: string;
  timeStamp: number;
  title: string;
  status: Status;
}