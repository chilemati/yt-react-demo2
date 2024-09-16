import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  let {single} = useParams();
  return (
    <div>SingleProduct for product id: {single} </div>
  )
}

export default SingleProduct