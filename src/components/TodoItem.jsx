import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => onDelete(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
      sx={{
        paddingY: 1,
        paddingX: 2,
        borderBottom: "1px solid #eee"
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id, todo.completed)}
        tabIndex={-1}
        disableRipple
        color="primary"
      />
      <ListItemText
        disableTypography
        primary={
          <Typography
            variant="body1"
            sx={{
              fontWeight: todo.completed ? "normal" : "medium",
              color: todo.completed ? "text.secondary" : "text.primary",
              textDecoration: todo.completed ? "line-through" : "none",
              marginLeft: 1
            }}
          >
            {todo.title}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default TodoItem;
