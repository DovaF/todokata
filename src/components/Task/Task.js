import React, { Component } from "react";
import "./Task.css";
import { formatDistanceToNowStrict } from "date-fns";

export default class Task extends Component {
  state = {
    done: false,
    nowTime: formatDistanceToNowStrict(this.props.created, { addSuffix: true }),
  };

  onCheckBoxClick = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
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

  render() {
    let { className, description, onDeleted } = this.props;
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
            <span className="created">{this.state.nowTime}</span>
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
