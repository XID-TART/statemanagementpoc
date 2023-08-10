import { TodoResponse } from '../api/type';

export class Todo {
  public userId: number;
  public id: number;
  public title: string;
  public completed: boolean;

  constructor(value: TodoResponse) {
    this.userId = value.userId;
    this.id = value.id;
    this.title = value.title;
    this.completed = value.completed;
  }
}
