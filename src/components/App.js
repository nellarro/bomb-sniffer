import React, { Component } from 'react'
import Home from './Home'
import Game from './Game'
import '../styles/screen.sass'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentScreen: 'Home',
      difficulty: 0
    }
  }

  changePage = (scr, difficulty) => {
    this.setState({
      currentScreen: scr,
      difficulty: difficulty
    })
  }

  render () {
    let screen
    switch (this.state.currentScreen) {
      case 'Home': screen = <Home navigate={this.changePage} />
        break
      case 'game': screen = <Game difficulty={this.state.difficulty} />
        break
      default: screen = <Home navigate={this.changePage} />
    }
    return <div className="App">
      {screen}
    </div>
  }
}

export default App
