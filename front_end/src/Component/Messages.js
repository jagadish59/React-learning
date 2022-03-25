import React,{Component} from "react";

class Messages extends Component{
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
    changemessage(){
        // this.setState({
        //     count:this.state.count +1
        // })
        this.setState((prevState)=>({
            count:prevState.count+1
        }),console.log(this.state.count))
        
    }

    render(){
        return(
            <div>

                {this.state.count}
                <button onClick={()=>this.changemessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Messages;