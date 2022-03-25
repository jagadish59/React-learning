import React, { Component } from 'react'

export class Hello extends Component {
    constructor(){

        super()
        this.state={
            message:'hello'
        }
    }

    click=()=>{

        this.setState({
            message:'click'
        })
    }
  render() {
    return (
      <div>
          <p>{this.state.message}</p> 
          <button onClick={this.click}>click me

          </button>
          </div>
    )
  }
}

export default Hello