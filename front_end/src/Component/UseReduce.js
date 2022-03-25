import React, { useReducer } from 'react'


const initialState=0

const reduce=(state,action)=>{
    switch(action){
        case 'increment':return state+1
        case 'decrement': return state-1
        case 'reset':return initialState
        default : return state
    }

}


export const UseReduce = () => {


    const [count,dispatch]=useReducer(reduce,initialState)
    console.log('render this')

  return (
    <div>
        <div>{count}</div>
        <div><button onClick={()=>dispatch('increment')}>increment</button></div>

        <div><button onClick={()=>dispatch('decrement')}>decremrnt</button></div>
        
        <div><button onClick={()=>dispatch('reset')}>reset</button></div>


    </div>
  )
}
