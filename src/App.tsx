import { useEffect, useState } from 'react';
import { TodoItem } from './components/TodoItem';
import { Todo } from './domain/Todo';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((res) => res.json())
      .then((todoList) => {
        setTodoList(todoList.map((todo: any) => new Todo(todo)));
      });
  }, []);

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </>
  );
}

export default App;
