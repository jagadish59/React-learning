import React from 'react'
import Person from './Person'

function List() {

    const person=[
      {
        id:1,
        name:'Bruce',
        age:12,
        skill:'react'
      },
      {
        id:2,
        name:'Clark',
        age:12,
        skill:'python'
      },
      {
        id:3,
        name:'Ram',
        age:24,
        skill:'Django'
      }


    ]
    const namelist=person.map(name=><Person key={name.id} person={name}/>)
  return (
    <div>
      {namelist}
    </div>
  )
}

export default List