import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    constructor(props){
        super(props)
        this.state={
            parentName:'parent'
        }
        this.greetParent=this.greetParent.bind(this)


    }
    greetParent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
          <Child greehnadler={this.greetParent}/>


      </div>
    )
  }
}

export default Parent