import React from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li className="todo-item">
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => onToggleComplete(todo.id, todo.completed)}
      >
        {todo.title}
      </span>
      <button onClick={() => {
        console.log("Todo object:", todo);
        console.log("Deleting ID:", todo?.id);
        onDelete(todo.id)
        }}>削除</button>
    </li>
  );
};

export default TodoItem;
