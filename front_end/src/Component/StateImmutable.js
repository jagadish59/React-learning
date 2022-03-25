import React, { useState } from 'react'

export const StateImmutable = () => {
    const initial={
        fname:'hari',
        lname:'oli'
    }
    const [person,setPerson]=useState(initial)

    const changeperson =()=>{
        const newPerson={...initial}
        newPerson.fname='newhari'
        newPerson.lname='newoli'
        setPerson(newPerson)

    }
    console.log('rendering ')
  return (
    <div>
        <button onClick={changeperson}>{person.fname}and {person.lname}</button>
    </div>
  )
}
