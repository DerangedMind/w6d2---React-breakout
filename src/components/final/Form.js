import React, { Component } from 'react'
import Input from './Input'

class Form extends Component {
  state = {
    nameInput: "",
    colorInput: "",
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      nameToSay: this.state.nameInput,
      favoriteColor: this.state.colorInput,
    })
  }

  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  renderNameSaying = () => {
    if (this.state.nameToSay) {
      return (<div>Hey, {this.state.nameToSay}! Your favorite color is {this.state.favoriteColor}.</div>)
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.renderNameSaying()}
        <div>
          <Input
            label="Name"
            placeholder="Name..."
            name="nameInput"
            value={this.state.nameInput}
            onChange={this.onChangeInput}
          />
          <Input
            label="Favorite color"
            placeholder="Color..."
            name="colorInput"
            value={this.state.colorInput}
            onChange={this.onChangeInput}
          />
        <input className="mv2 ph3 pv2 br3 bg-light-gray pointer" type="submit" value="Say my name!" />
        </div>
      </form>
    )
  }
}

export default Form
