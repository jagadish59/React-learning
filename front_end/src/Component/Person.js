import React from 'react'

function Person(props) {
  return (
    <div>{props.person.name} and age is{props.person.age} </div>
  )
}

export default Person