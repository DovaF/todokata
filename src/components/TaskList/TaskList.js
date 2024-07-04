import React, { Component } from "react";
import Task from "../Task";
import "./TaskList.css";
import PropTypes from "prop-types";

export default class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    onDeleted: PropTypes.func,
    onCheckBoxClick: PropTypes.func,
    onEditingTask: PropTypes.func,
    onEditing: PropTypes.func,
  };
  render() {
    const { tasks, onDeleted, onEditing, onEditingTask, onCheckBoxClick } =
      this.props;
    let items = tasks.map((item) => {
      const { id, ...itemOptions } = item;
      return (
        <Task
          key={id}
          {...itemOptions}
          onDeleted={() => onDeleted(id)}
          onEditing={() => onEditing(id)}
          onCheckBoxClick={() => onCheckBoxClick(id)}
          onEditingTask={(value) => onEditingTask(id, value)}
        />
      );
    });
    return <ul className="todo-list">{items}</ul>;
  }
}

// export default TaskList;
