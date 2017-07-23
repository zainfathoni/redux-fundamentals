import React, { PropTypes } from "react";

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#3490DE" : "#521262",
      listStyleType: "square",
      listStylePosition: "inside",
      cursor: "pointer"
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
