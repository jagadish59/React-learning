import React, { Component } from 'react'
import axios from 'axios'

 class Http extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          datas:[],
          errmsg:[]
       }
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response=>{
             this.setState(
                 {datas:response.data}
             )
         })
         .catch(error=>{
             console.log(error)
             this.setState({
                errmsg:error

             })
            

         })

     }
  render() {
      const {datas,errmsg}=this.state;
    return (
      <div>
           
        {datas.map(valu=>
        <h1 key={valu.id}>{valu.title}</h1>
        )}

         

      </div>
    )
  }
}

export default Http