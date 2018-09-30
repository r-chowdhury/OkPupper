import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import DogCardContainer from './components/DogCardContainer'
import Adapter from './Adapter'

class App extends Component {
  state = {
    age: "any",
    size: "any",
    gender: "any",
    zip: "77002",
    dogArray: [],
    searchOffset: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    Adapter.getDogData({
      zipCode: this.state.zip,
      size: this.state.size,
      gender: this.state.gender,
      age: this.state.age,
      offset: this.state.searchOffset,
      callbackFunction: this.saveDogs
    })
  }

  saveDogs = (dogArray, searchOffset) => {
    this.setState({dogArray, searchOffset})
  }

  handleClick = (e) => {
    e.preventDefault()

    const newArray = this.state.dogArray
    newArray.shift()

    Adapter.saveDogResult(this.state.dogArray[0].pet_finder_id, e.target.name === "save")

    this.setState({
      dogArray: newArray
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar
            handleSubmit={this.handleSubmit}
            handleAgeChange={(e) => this.setState({age: e.target.value})}
            handleSizeChange={(e) => this.setState({size: e.target.value})}
            handleGenderChange={(e) => this.setState({gender: e.target.value})}
            handleZipChange={(e) => this.setState({zip: e.target.value})}
          />
        </header>
        <p className="App-intro">
          <DogCardContainer
            dogArray={this.state.dogArray}
            handleClick={this.handleClick}
          />
        </p>
      </div>
    );
  }
}

export default App;
