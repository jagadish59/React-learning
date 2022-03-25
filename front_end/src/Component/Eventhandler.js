import React, { Component } from 'react'

 class Eventhandler extends Component {


    click() {
       console.log('click')
   }

  render() {
    return (
      <div>

          <button onClick={this.click}>click me</button>
      </div>
    )
  }
}

export default Eventhandler