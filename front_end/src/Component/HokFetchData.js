import axios from 'axios'
import React, { useEffect, useState } from 'react'

function HokFetchData() {
    const [post,setPost]=useState({})
    const [id,setId]=useState(1)
    const [buttonID,setbuttonId]=useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonID}`)
        .then((res)=>{
            setPost(res.data)
            console.log(res)
        })
        .catch(err=>{console.log(err)})

    },[buttonID])
  return (
    <div>
        <div>
            <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}}/>
        </div>
        <div>
            <button type='button' value={id} onClick={(e)=>{setbuttonId(e.target.value)}}>Fetch data</button>
        </div>
        <div> {post.title}</div>


    </div>
  )
}

export default HokFetchData