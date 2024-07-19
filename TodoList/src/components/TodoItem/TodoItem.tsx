import React from "react";
import { ITodo } from "../../types/data";
import styles from "./TodoItem.module.css";

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, completed, removeTodo, toggleTodo } = props;

  const todoClasses = `${styles.todo} ${
    completed ? styles.checked : styles.todo
  }`;

  return (
    <div className={todoClasses}>
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
