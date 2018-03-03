import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import './Counter.scss'

export class Counter extends Component {
  state = { count: 0 }

  // Arrow fx for auto binding
  decrement = () =>
    this.setState(({ count }) => ({
      count: count - 1,
    }))

  // Arrow fx for auto binding
  increment = () =>
    this.setState(({ count }) => ({
      count: count + 1,
    }))

  render() {
    return (
      <div className="counter">
        <button onClick={this.decrement}>⬅️</button>
        {this.state.count}
        <button onClick={this.increment}>➡️</button>
      </div>
    )
  }
}

export default hot(module)(Counter)
