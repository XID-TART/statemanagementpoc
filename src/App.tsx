import { useEffect, useState } from 'react';
import { TodoItem } from './components/TodoItem';
import { Todo } from './domain/Todo';
import { request } from './api/request';
import { TodoResponse, UserResponse } from './api/type';
import { TodoListViewModel } from './viewModel/TodoListViewModel';

function App() {
  const [todoListVM, setTodoListVM] = useState<TodoListViewModel | null>(null);

  useEffect(() => {
    Promise.all([
      request<UserResponse>({ url: 'users/1' }),
      request<TodoResponse[]>({ url: 'users/1/todos' }),
    ]).then(([user, todoList]) => {
      setTodoListVM(new TodoListViewModel(todoList, user));
    });
  }, []);

  return (
    <>
      {todoListVM?.todoList.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </>
  );
}

export default App;
