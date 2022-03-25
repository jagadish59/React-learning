import React, { Component } from 'react'

 class HoverCountTwo extends Component {
  render() {
    return (
      <div>
          <h2 onMouseOver={this.props.increment}>hover={this.props.count}</h2>
      </div>
    )
  }
}

export default HoverCountTwo