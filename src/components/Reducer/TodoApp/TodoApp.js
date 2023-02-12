import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../../../hooks/useReducer/todoReducer";
import TodoAdd from "./TodoAdd";
import "./todoApp.css";
import TodoList from "./TodoList";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const newAction = {
      type: "delete",
      payload: todoId,
    };

    dispatch(newAction);
  };

  const handleToggle = (todoId) => {
    const newAction = {
      type: "toggle",
      payload: todoId,
    };

    dispatch(newAction);
  };

  const handleAdd = (newTodo) => {
    const newAction = {
      type: "add",
      payload: newTodo,
    };

    dispatch(newAction);
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
