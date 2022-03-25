import React, { useState } from 'react'
import { ChildrenOne } from './ChildrenOne'

export const ParentOne = (props) => {
    const [count,setCount]=useState(1)
    console.log('Parent render')
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>click-{count}</button>
        {props.children}
        
    </div>
  )
}
