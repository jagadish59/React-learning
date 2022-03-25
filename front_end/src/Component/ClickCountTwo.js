import React, { Component } from 'react'

 class ClickCountTwo extends Component {
  render() {
    return (
      <div><h2>click {this.props.count} times</h2>
      <button onClick={this.props.increment}>Click me</button>
      </div>
    )
  }
}

export default ClickCountTwo