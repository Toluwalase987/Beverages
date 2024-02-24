import React from 'react'
import { useParams } from 'react-router-dom'

export default function Others() {
    const {name} = useParams()
    console.log(name);
  return (
    <div>
      Hello
      <img src={name} alt="" />
    </div>
  )
}
