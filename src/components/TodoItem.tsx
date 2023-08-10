import { Todo } from '../domain/Todo';

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  return (
    <div>
      <strong>{todo.title}</strong>
      <small>{todo.userId}</small>
      <input type="checkbox" checked={todo.completed} />
    </div>
  );
};
