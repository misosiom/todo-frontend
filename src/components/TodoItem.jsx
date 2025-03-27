import React from "react";
import { ListItem, ListItemText, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => onDelete(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id, todo.completed)}
        tabIndex={-1}
        disableRipple
      />
      <ListItemText
        primary={todo.title}
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "text.secondary" : "text.primary"
        }}
      />
    </ListItem>
  );
};

export default TodoItem;
