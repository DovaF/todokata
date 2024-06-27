import React from "react";
import Task from "../Task";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  let items = tasks.map((item) => {
    const { id, ...itemOptions } = item;
    return <Task key={id} {...itemOptions} />;
  });
  return <ul className="todo-list">{items}</ul>;
};

export default TaskList;
