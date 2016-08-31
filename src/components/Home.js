import React, { Component } from 'react'
import { Select } from 'rebass'

class Home extends Component {
  _handleClick = () => {
    let select = document.querySelector("select[name='difficulty_level']")
    let difficulty = select.value
    this.props.play('game', difficulty)
  }
  render () {
    return <div className="Home">
      <h1>Bomb-Sniffer</h1>
      <Select
        label="Select Your Mode of Difficulty"
        name="difficulty_level"
        options={[{children: 'Epic Mode', value: 2}, {children: 'Adventure Mode', value: 1}, {children: 'Explorer Mode', value: 0}]}
        rounded
      />
      <br />
      <button onClick={this._handleClick}>Enter at Your Own Risk</button>
    </div>
  }
}

export default Home
