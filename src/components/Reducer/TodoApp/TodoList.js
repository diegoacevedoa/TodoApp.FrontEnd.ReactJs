import React from "react";
// import PropTypes from "prop-types";
import "./todoApp.css";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

// TodoList.propTypes = () => {
//   todos = PropTypes.array.isRequired;
// };

export default TodoList;
