import React, { Component } from 'react'
import logo from './logo.svg'
import Form from './components/Form'

class App extends Component {
  state = { nameToSay: "" }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Form />
        </header>
      </div>
    )
  }
}

export default App
