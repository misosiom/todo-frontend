// TodoList.jsx
import React from "react";
import { List, Paper } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <Paper elevation={0} sx={{ mt: 2 }}>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
