import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./styles/App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAddTodo = async (title) => {
    const newTodo = await addTodo({ title, completed: false });
    setTodos([...todos, newTodo]);
  };

  const handleToggleComplete = async (id, completed) => {
    await updateTodo(id, { completed: !completed });
    fetchTodos();
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Error: id is undefined");
      return;
    }
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
