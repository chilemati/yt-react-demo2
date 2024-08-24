import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    let {id} = useParams();
  return (
    <div>
        <h1> Blog Details for: {id} </h1>
    </div>
  )
}

export default Details