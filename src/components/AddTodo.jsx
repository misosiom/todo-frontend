import React, { useState } from "react";
// import "../styles/AddTodo.css";
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
    <Paper elevation={3} sx={{ padding: 2, mt: 4 }}>
      <TextField
        label="新しいタスクを入力"
        variant="outlined"
        size="medium"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
