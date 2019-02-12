import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'
import FormRef from './components/FormRef'

class App extends Component {
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