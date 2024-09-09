import React, { useState } from 'react'

const Render = ({data}) => {
    let [arr,setArr] = useState(data);
  return (
    <div className='flexBetween' >
        {
            arr.map((each,i)=> (
                <p key={i} > {each} </p>
            ))
        }
    </div>
  )
}

export default Render