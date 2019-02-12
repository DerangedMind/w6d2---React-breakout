import React, { Component } from 'react'

class FormRef extends Component {
  constructor(props) {
    super(props)
    this.state = { nameToSay: "" }
    this.input = React.createRef()
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.input.current.value)
  }

  renderNameSaying = () => {
    if (this.state.nameToSay) {
      return (<div>Hey, {this.state.nameToSay}! Is anyone around you?!</div>)
    }
  }

  render() {
    return (
      <form className="" onSubmit={this.onSubmit}>
        <div>
          First Name:
          <input
            className="mh3 ph2 pv1"
            type="text"
            placeholder="Name"
            ref={this.input}
          />

          <input type="submit" value="Say my name!" />
        </div>
      </form>
    )
  }
}

export default FormRef
