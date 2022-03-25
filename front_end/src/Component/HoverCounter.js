import React, { Component } from 'react'
import UpdateCounter from './withClick.js'
 class HoverCounter extends Component {
  render() {
    return (
      <div>
          <h2 onMouseOver={this.props.increment}>HoverCounter {this.props.count}</h2>
      
      </div>
    )
  }
}

export default UpdateCounter(HoverCounter,10)