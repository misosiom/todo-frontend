import React from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
