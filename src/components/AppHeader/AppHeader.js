import React from "react";
import NewTaskForm from "../NewTaskForm";
import "./AppHeader.css";

const AppHeader = ({ onAdded }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onAdded={onAdded}
      />
    </header>
  );
};

export default AppHeader;
