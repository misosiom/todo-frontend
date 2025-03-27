import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./styles/App.css";
import { Toolbar, Typography, AppBar, Container } from "@mui/material";

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
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (!todoToUpdate) return;
    await updateTodo(id, {
      title: todoToUpdate.title,
      completed: !completed,
    });
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
    <>
      <AppBar position="static" color="primary" >
        <Toolbar sx = {{ marginLeft: 4, marginRight: 4 }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            To-Do List
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx = {{ mariginTop: 4 }}>
        <AddTodo onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
      />
      </Container>
    </>
    // <div className="app">
    //   <h1>To-Do List</h1>
    //   <AddTodo onAdd={handleAddTodo} />
    //   <TodoList
    //     todos={todos}
    //     onToggleComplete={handleToggleComplete}
    //     onDelete={handleDelete}
    //   />
    // </div>
  );
}

export default App;
