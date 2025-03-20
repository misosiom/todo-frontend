import React, { useState } from "react";
// import "../styles/AddTodo.css";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タスクを入力..."
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default AddTodo;
