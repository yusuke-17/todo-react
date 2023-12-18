import React, { useRef } from "react";

type Props = {
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

type Todos = {
  id: number;
  task: string;
  completed: boolean;
}[];

const DeleteTodo = (props: Props) => {
  const deleteTodo = () => {
    const newTodos: Todos = props.todos.filter((todo) => !todo.completed);
    let idCount = 1;
    newTodos.forEach((todo) => {
      todo.id = idCount;
      idCount++;
    });
    props.setTodos(newTodos);
  };

  return (
    <>
      <button onClick={deleteTodo}>完了したTodoを削除</button>
    </>
  );
};

export default DeleteTodo;
