const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:8080/todos/";

// タスク一覧を取得
export const getTodos = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// タスクを追加
export const addTodo = async (todo) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return response.json();
};

// タスクを更新
export const updateTodo = async (id, todo) => {
  await fetch(`${API_URL}${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
};

// タスクを削除
export const deleteTodo = async (id) => {
  await fetch(`${API_URL}${id}`, { method: "DELETE" });
};
