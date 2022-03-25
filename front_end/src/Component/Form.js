import React, { Component } from 'react'

 class Form extends Component {

    constructor(props){

        super(props)
        this.state={
            username:'',
            comment:'',
            topic:'react'
        }
    }
handleUsername=(event)=>{
    this.setState(
        {
            username:event.target.value
        }
    )
}

commenthandller =(event)=>{

    this.setState({
        
    comment:event.target.value
    })
}

changeTopic=(event)=>{

    this.setState(
        {
            topic:event.target.value
        }
    )
}

handleForm=(event)=>{

    alert(`username=${this.state.username} and comment=${this.state.comment} topic=${this.state.topic}`)
    event.preventDefault()
}

  render() {
 

    return (
        <form onSubmit={this.handleForm}>
      <div>
          <lavel>Username</lavel>
          <input type='text' value={this.state.username} onChange={this.handleUsername}/>
          
          <lavel>Comment</lavel>
          <textarea type='text' value={this.state.comment} onChange={this.commenthandller}/>
          <label>topic</label>
          <select value={this.state.topic } onChange={this.changeTopic}>
          <option value="react" >React</option>
          
          <option value="angular" >angular</option>
          
          <option value="vue" >vue</option>
          </select>
          

      </div>
      <button type='submit'>submit</button>
      </form>
    )
  }
}

export default Form