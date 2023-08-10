import { TodoResponse, UserResponse } from '../api/type';
import { Todo } from '../domain/Todo';

export class TodoListViewModel {
  constructor(public todoList: TodoResponse[], public user: UserResponse) {}
}
