import React from "react";
import { ITodo } from "../../types/data";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const { removeTodo, toggleTodo } = props;
  return (
    <div className={styles.list}>
      {props.items
        .slice()
        .sort((a, b) => Number(a.completed) - Number(b.completed))
        .map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
    </div>
  );
};
