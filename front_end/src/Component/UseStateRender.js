import React, { useState } from 'react'

export default function () {
    const [count,setCount]=useState(0)
    console.log('render this times')
  return (
    <div>
        <button onClick={()=>{ setCount(count+1)

        }}> click {count}</button>
        <button  onClick={()=>setCount(0)}>count to 0</button>
        <button onClick={()=>setCount(5)}>count 5</button>
    </div>
  )
}
