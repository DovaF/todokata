import React, { Component } from "react";
import AppHeader from "../AppHeader";
import TaskList from "../TaskList";
import Footer from "../Footer";
import { formatDistanceToNow } from "date-fns";
import "./TodoApp.css";

const date = new Date();

export default class TodoApp extends Component {
  state = {
    tasks: [
      {
        id: "101",
        description: "Completed task",
        created: formatDistanceToNow(date, { addSuffix: true }),
      },
      {
        className: "editing",
        description: "Editing task",
        id: "110",
      },
      {
        description: "Active task",
        id: "111",
        created: formatDistanceToNow(date, { addSuffix: true }),
      },
    ],
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
        <AppHeader />
        <section className="main">
          <TaskList tasks={this.state.tasks} onDeleted={this.deleteItem} />
          <Footer />
        </section>
      </section>
    );
  }
}
