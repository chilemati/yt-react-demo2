import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useCount } from '../customHooks/useCount';

const State = () => {
    /* 
      let [c,setC] = useSTate(0);
      > c is a variable returned by useSTate whose initial value is 0
      > setC is a function that useState gives to update c whenever you want
      > 0 is the inital value of c
     */
    // let c =  0;
    // let [c,setC] = useState(0);
    let {c,increment,decrement} = useCount(0);
    let [name,setName] = useState('Amadi Chile');
    let prevC = useRef(0);

      useEffect(()=>{
        // alert('Page Ready')
      },[name,prevC.current])

      useEffect(()=>{
       console.log('c updated')
      },[prevC.current])
//    function increment() {
//     //  c+=1;
//     setC(prev=> prev+1);
//      console.log(c)
//    }
//    function decrement() {
//     setC(prev=> prev-1);
//      console.log(c)
//    }
   function updateC () {
     prevC.current = prevC.current +1;
     console.log(prevC.current)
   }
   console.count('rendered: ')
  return (
    <div>
        <h2>useSTate</h2>
        <h3> C: {c} </h3>
        <button className='border border-2 py-1 px-4 rounded ' onClick={increment} >c++</button>
        <button className='border border-2 py-1 px-4 rounded ' onClick={decrement} >c--</button>
        <hr />
        <h3>My Name is {name} </h3>
        <button className='border border-2 py-1 px-4 rounded ' onClick={()=> setName('John Doe') } >Update Name</button>
        
        <hr />
        <h3>prevC {prevC.current} </h3>
        <button className='border border-2 py-1 px-4 rounded ' onClick={ updateC } >Update c</button>


    </div>
  )
}

export default State