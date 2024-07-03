import React, { Component } from "react";
import "./NewTaskForm.css";

export default class NewTaskForm extends Component {
  state = {
    value: "",
  };

  onChanging = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.value);
    this.setState({
      value: "",
    });
  };

  render() {
    const { className, placeholder, autoFocus = false } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className={className}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChange={this.onChanging}
          value={this.state.value}
        />
      </form>
    );
  }
}
