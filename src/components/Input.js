import React, { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <div className="flex justify-between items-center pv2 mv1">
        {this.props.label}:
        <input
          className="mh3 ph2 pv1 w5"
          type={this.props.type ? this.props.type : "text"}
          name={this.props.name}
          placeholder={this.props.placeholder ? this.props.placeholder : "..."}
          onChange={this.props.onChange}
          value={this.props.alue}
          />
      </div>
    )
  }
}

export default Input
