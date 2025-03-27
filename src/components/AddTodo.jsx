import React, { useState } from "react";
import "../styles/AddTodo.css";
import { Button, Paper, TextField} from "@mui/material";

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
    // <form onSubmit={handleSubmit} className="add-todo-form">
    //   <input
    //     type="text"
    //     value={title}
    //     onChange={(e) => setTitle(e.target.value)}
    //     placeholder="タスクを入力..."
    //   />
    //   <button type="submit">追加</button>
    // </form>
    <Paper elevation={3} sx={{ padding: 2 }}>
      <TextField
        label="タスクを入力..."
        varient="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タスクを入力..."
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginTop: 2 }}
        fullWidth
        >
        追加
      </Button>
    </Paper>
  );
};

export default AddTodo;
