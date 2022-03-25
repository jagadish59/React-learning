import React, { Component } from 'react'
import axios from 'axios'

 class PostHttp extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          title:'',
          userid:'',
          body:''
       }
     }
     onchange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
     submithandller=(e)=>{
         e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log(response.data.title)
        })
        .catch(error=>{
            console.log(error)
        })

     }
  render() {
      const {title,userid,body}=this.state
    return (
      <div>
          <form onSubmit={this.submithandller}>
              <div>
                  <input type='text' name='userid' value={userid} onChange={this.onchange}/>
              </div>
              <div>
                  <input type='text' name='title' value={title} onChange={this.onchange}/>
              </div>
              <div>
                  <input type='text' name='body' value={body} onChange={this.onchange}/>
              </div>
              <div>
                  <button type='submit'>submit</button>
              </div>
          </form>
      </div>
    )
  }
}

export default PostHttp