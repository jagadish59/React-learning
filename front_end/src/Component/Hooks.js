
import React ,{useState} from 'react'

function Hooks() {

    const [name,setNmae]=useState({firstName:'',lastName:''})


  return (
    <div>
<form>
    <div>
<input type='text' value={name.firstName} onChange={(e)=>setNmae({...name,firstName:e.target.value})}/>
</div>
<div>
<input type='text' value={name.lastName} onChange={(e)=>setNmae({...name,lastName:e.target.value})}/>
</div>
<h2>First name={name.firstName}</h2>
<h2>First name={name.lastName}</h2>
<div>
    <button type='submit'>submit</button>
</div>

</form>
    </div>
  )
}

export default Hooks