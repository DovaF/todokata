import React, { Component } from "react";
import "./Task.css";

export default class Task extends Component {
  state = {
    done: false,
  };

  onCheckBoxClick = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  };

  render() {
    let { className, description, created, onDeleted } = this.props;
    const { done } = this.state;

    if (done) {
      className += " completed";
    }

    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={() => {
              console.log("clicked");
              this.onCheckBoxClick();
            }}
          />
          <label>
            <span className="description">{description} </span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {className === "editing" ? (
          <input type="text" className="edit" value="Editing task" />
        ) : null}
      </li>
    );
  }
}
