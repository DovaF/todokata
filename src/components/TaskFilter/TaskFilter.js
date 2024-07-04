import React from "react";
import "./TaskFilter.css";

const TaskFilter = ({ label, className, onFilter }) => {
  return (
    <li>
      <button onClick={() => onFilter(label)} className={className}>
        {label}
      </button>
    </li>
  );
};

export default TaskFilter;
