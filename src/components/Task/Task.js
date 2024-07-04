import React, { Component } from "react";
import "./Task.css";
import { formatDistanceToNowStrict } from "date-fns";
import PropTypes from "prop-types";

export default class Task extends Component {
  state = {
    nowTime: formatDistanceToNowStrict(this.props.created, { addSuffix: true }),
    inputValue: this.props.description,
  };

  static propTypes = {
    className: PropTypes.string,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    created: PropTypes.instanceOf(Date),
  };

  static defaultProps = {
    description: "A new Task",
    done: false,
    editing: false,
    created: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      nowTime: formatDistanceToNowStrict(this.props.created, {
        addSuffix: true,
      }),
    });
  }

  onChanging = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onEditingTask(this.state.inputValue);
  };

  render() {
    let {
      className,
      description,
      onDeleted,
      onCheckBoxClick,
      onEditing,
      done,
      editing,
    } = this.props;
    const { nowTime, inputValue } = this.state;

    if (done) {
      className = "completed";
    }
    if (editing) {
      className = "editing";
    }

    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={onCheckBoxClick}
          />
          <label>
            <span className="description">{description} </span>
            <span className="created">{nowTime}</span>
          </label>
          <button className="icon icon-edit" onClick={onEditing}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {editing ? (
          <form onSubmit={this.onSubmit} onChange={() => {}}>
            <input
              type="text"
              className="edit"
              value={inputValue}
              onChange={this.onChanging}
            />
          </form>
        ) : null}
      </li>
    );
  }
}
