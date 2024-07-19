import React from "react";
import { ITodo } from "../../types/data";
import { TodoItem } from "../TodoItem/TodoItem";

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoListProps> = (props) => {
  const { removeTodo, toggleTodo } = props;
  return (
    <div>
      {props.items.map((todo) => (
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
