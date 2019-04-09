import React, { Component } from 'react'
import NameSayer from './NameSayer'

class Form extends Component {
  state = { name: "" }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.elements)
  }

  render() {
    return (
      <form className="flex flex-column" onSubmit={this.onSubmit}>
        <NameSayer nameToSay={this.state.name} />
        <input type="text" label="Name" name="name" placeholder="Your name..."/>
        <input
          className="mv2 ph3 pv2 br3 bg-light-gray pointer"
          type="submit"
          value="Say my name!"
          />
      </form>
    )
  }
}

export default Form
