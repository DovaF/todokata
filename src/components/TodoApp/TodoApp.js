import React, { Component } from "react";
import AppHeader from "../AppHeader";
import TaskList from "../TaskList";
import Footer from "../Footer";

import "./TodoApp.css";

export default class TodoApp extends Component {
  maxId = 100;
  state = {
    tasks: [
      this.createTask("Completed Task"),
      this.createTask("Editing task"),
      this.createTask("Active Task"),
    ],
  };

  createTask(description) {
    return {
      id: this.maxId++,
      description: description,
      created: new Date(),
    };
  }

  addTask = (description) => {
    const newTask = this.createTask(description);
    this.setState(({ tasks }) => {
      return {
        tasks: [...tasks.slice(), newTask],
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ tasks }) => {
      let newTasks = tasks.filter((item) => item.id !== id);
      return { tasks: newTasks };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <AppHeader onAdded={this.addTask} />
        <section className="main">
          <TaskList tasks={this.state.tasks} onDeleted={this.deleteItem} />
          <Footer />
        </section>
      </section>
    );
  }
}
