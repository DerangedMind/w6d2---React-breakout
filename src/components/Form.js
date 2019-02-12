import React, { Component } from 'react'
import Input from './Input'
import { NameSayer } from './NameSayer'

class Form extends Component {
  state = { name: "" }
  render() {
    return (
      <form>
        Name:
        <input
          className="self-end mh3 ph2 pv1 w5"
          placeholder="<enter name...>"
          name="name"
          type="text"
          />
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
