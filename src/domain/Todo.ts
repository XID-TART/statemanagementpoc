type TodoInput = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export class Todo {
  public userId: number;
  public id: number;
  public title: string;
  public completed: boolean;

  constructor(value: TodoInput) {
    this.userId = value.userId;
    this.id = value.id;
    this.title = value.title;
    this.completed = value.completed;
  }
}
