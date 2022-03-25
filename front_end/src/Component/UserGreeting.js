import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(){

        super()
        this.state={
            islogin:true
        }
    }
  render() {




    return (
        this.state.islogin?<div>welcome login</div>:
        <div>welcome guest</div>
    )
  }
}

export default UserGreeting