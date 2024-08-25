import React, { useState } from 'react'

export const useCount = (count) => {
    let [c,setC] = useState(count);
    function increment() {
        setC(prev=> prev+1);
       }
       function decrement() {
        setC(prev=> prev-1);
       }
  return {
      c: c,
      increment,
      decrement
  }
}

/* 
 > if your return values from a function using {}, the order of destrusturing does not matter
 > if your return values from a function using [], the order of destrusturing  matters
*/

