import React from "react";
import "./Footer.css";
import TaskFilter from "../TaskFilter";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters">
        <li>
          <TaskFilter className="selected" label="All" />
        </li>
        <li>
          <TaskFilter label="Active" />
        </li>
        <li>
          <TaskFilter label="Completed" />
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
