import React, { useState ,useEffect } from 'react'

function HooksOne() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        document.title=`you click ${count} times`
        console.log('update state')
    },[count])
  return (
    <div>
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />


        </div>
        <button onClick={()=>setCount(count+1)}>click {count }</button>
        <div>{name}</div>
    </div>
  )
}

export default HooksOne