import React, { Component } from 'react'
import UpdateCounter from './withClick.js'
 class ClickCounter extends Component {
  render() {
    return (
      <div>

          <h2>click {this.props.count} times</h2>
          <button onClick={this.props.increment}></button>
          </div>
    )
  }
}

export default UpdateCounter(ClickCounter,5)