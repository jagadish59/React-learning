import React, { Component } from 'react'


const UpdateCounter=(OriginalComponent,second)=>{
   
    
    class NewComponent extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }

        countUpdate=()=>{
            this.setState((prev)=>{
                return{count:prev.count+second}
            })
        }


      render() {
        return (
          <OriginalComponent count={this.state.count} increment={this.countUpdate} />
        )
      }
    }
    
    return NewComponent
}
export default UpdateCounter