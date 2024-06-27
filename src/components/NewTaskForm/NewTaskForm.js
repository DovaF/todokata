import React from "react";
import "./NewTaskForm.css";

const NewTaskForm = ({ className, placeholder, autoFocus = false }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
};

export default NewTaskForm;
