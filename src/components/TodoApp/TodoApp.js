import React from "react";
import AppHeader from "../AppHeader";
import TaskList from "../TaskList";
import Footer from "../Footer";
import { formatDistanceToNow } from "date-fns";
import "./TodoApp.css";

const date = new Date();

const TodoApp = () => {
  const tasks = [
    {
      id: "cp",
      className: "completed",
      description: "Completed task",
      created: formatDistanceToNow(date, { addSuffix: true }),
    },
    {
      className: "editing",
      description: "Editing task",
      id: "ed",
    },
    {
      description: "Active task",
      id: "ac",
      created: formatDistanceToNow(date, { addSuffix: true }),
    },
  ];
  return (
    <section className="todoapp">
      <AppHeader />
      <section className="main">
        <TaskList tasks={tasks} />
        <Footer />
      </section>
    </section>
  );
};

export default TodoApp;
