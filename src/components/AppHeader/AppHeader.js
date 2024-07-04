import React, { Component } from "react";
import NewTaskForm from "../NewTaskForm";
import "./AppHeader.css";
import PropTypes from "prop-types";

export default class AppHeader extends Component {
  static propTypes = {
    onAdded: PropTypes.func.isRequired,
  };

  render() {
    const { onAdded } = this.props;
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
  }
}
