import React from "react";
import { ITodo } from "../../types/data";

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, completed, removeTodo, toggleTodo } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <button onClick={() => removeTodo(id)}>delete</button>
    </div>
  );
};
