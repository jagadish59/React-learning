import React, { useState } from 'react'
import { ParentOne } from './ParentOne'
import { ChildrenOne } from './ChildrenOne'

export const GrandParent = () => {

    const [count,setSount]=useState(0)
  return (
    <div>
<button onClick={()=>setSount(count+1)} >Click {count}</button>

<ParentOne newCount={count}>
  <ChildrenOne/>

</ParentOne>
    </div>

  )
}
