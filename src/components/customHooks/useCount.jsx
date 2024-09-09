import React, { useState, useTransition } from 'react'

export const useCount = (count) => {
    let [c,setC] = useState(count);
    let [isPending,startTransition] = useTransition();
    function increment() {
        startTransition(()=> {
            setC(prev=> prev+1);
        })
       }
       function decrement() {
        setC(prev=> prev-1);
       }
  return {
      c: c,
      increment,
      decrement,
      isPending
  }
}

/* 
 > if your return values from a function using {}, the order of destrusturing does not matter
 > if your return values from a function using [], the order of destrusturing  matters
*/

