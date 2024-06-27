import React from "react";
import "./TaskFilter.css";

const TaskFilter = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};

export default TaskFilter;
