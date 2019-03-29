import  React, { Component } from 'react'
import { Selection, Summary, DriverSelection } from '../'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Summary />
        <DriverSelection />
        <Selection />    
      </div>
    )
  }
}

export default App
