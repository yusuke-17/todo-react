import React, { useState } from "react";
import EditTodo from "./EditTodo";
import "../App.css";

type Props = {
  todo: {
    id: number;
    task: string;
    completed: boolean;
  };
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[];
  setTodos: (
    todos: {
      id: number;
      task: string;
      completed: boolean;
    }[]
  ) => void;
};

const Todo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleTodo = () => {
    const newTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSave = (editedTask: string) => {
    const newTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, task: editedTask } : t
    );
    setTodos(newTodos);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="todo">
        <input
          className="checkTodo"
          id={String(todo.id)}
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodo}
          readOnly
        />
        {isEditing ? (
          <EditTodo
            initialTask={todo.task}
            onSave={handleEditSave}
            onCancel={handleEditCancel}
          />
        ) : (
          <>
            <label htmlFor={String(todo.id)}>
              Todo{todo.id}:{todo.task}
            </label>
            <button onClick={handleEditClick}>Edit</button>
          </>
        )}
      </div>
    </>
  );
};

export default Todo;
