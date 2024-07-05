import React, { Component } from "react";
import "./TaskFilter.css";
import PropTypes from "prop-types";

export default class TaskFilter extends Component {
  static defaultProps = {
    label: " ",
    className: " ",
    onFilter: () => {},
  };

  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    onFilter: PropTypes.func,
  };

  render() {
    const { label, className, onFilter } = this.props;
    return (
      <li>
        <button onClick={() => onFilter(label)} className={className}>
          {label}
        </button>
      </li>
    );
  }
}
