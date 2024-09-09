import React, { useCallback, useMemo, useState } from 'react'
import { useCount } from '../customHooks/useCount';
import Child from '../Child';

const Parent = () => {
    let {c,increment,isPending} = useCount(5);
    let [name,setName] = useState('John Doe');
    console.count('parent rendared: ')
    let prices = [3,55,70,900,300,11,22];
    function getTotalPrice(arr) {
        console.count('getTotal ran: ')
        return arr.reduce((a,b)=> a +=b);
    }
    const getMaxPrice = useCallback((arr)=>  {
        console.count('max Price ran: ')
        return Math.max(...arr || prices);
    },[name]) 
    let totalPrice = useMemo(()=> getTotalPrice(prices),[name]);
  return (
    <div>
        <h2>Parent</h2>
        <hr />
        <h3>Count: {isPending?'updating... ': c} | Total Price: ${totalPrice}  </h3>
        <button  onClick={increment} className="outline outline-1">Count++</button>
        {/* <Child name={name} /> */}
        <button  onClick={()=>setName('Amadi Chile')} className="outline outline-1 ml-3 ">Update Name</button>
        <Child name={name} maxPrice={getMaxPrice} />
    </div>
  )
}

export default Parent