import React from "react";
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

const Todo = (props: Props) => {
  const toggleTodo = () => {
    const newTodos = props.todos.map((todo) => {
      if (todo.id === props.todo.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    props.setTodos(newTodos);
  };

  return (
    <>
      <div className="todo">
        <input
          className="checkTodo"
          id={String(props.todo.id)}
          type="checkbox"
          checked={props.todo.completed}
          onChange={toggleTodo}
          readOnly
        />
        <label htmlFor={String(props.todo.id)}>
          Todo{props.todo.id}:{props.todo.task}
        </label>
      </div>
    </>
  );
};

export default Todo;
