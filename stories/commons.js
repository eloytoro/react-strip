import './style.css';
import React, { PropTypes, Component } from 'react';
import { Strip } from 'Strip';


export class CheckBox extends Component {
  handleClick = (e) => {
    e.stopPropagation();
    const { onChange, value } = this.props;
    if (onChange) {
      onChange(!value);
    }
  }

  render() {
    const {
      value,
      label,
      ...props
    } = this.props;

    return (
      <Strip
        {...props}
        className="checkbox"
        onClick={this.handleClick}
        align="space-between center"
      >
        <Strip fill align="start center">
          {label}
        </Strip>
        <input type="checkbox" checked={value} />
      </Strip>
    );
  }
}

CheckBox.propTypes = {
  value: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};
