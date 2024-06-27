import React from "react";
import Task from "../Task";
import "./TaskList.css";

const TaskList = ({ tasks, onDeleted }) => {
  let items = tasks.map((item) => {
    const { id, ...itemOptions } = item;
    return <Task key={id} {...itemOptions} onDeleted={() => onDeleted(id)} />;
  });
  return <ul className="todo-list">{items}</ul>;
};

export default TaskList;
