import React from 'react'
import './bottle.css';
import global from './global.module.css';
import { useCount } from './customHooks/useCount';

const Bottle = ({name,price}) => {
    // js
    let {c,increment} = useCount(10);
    function handleBuy() {
        alert('Please waith while will redirect your to the checkout page')
    }
    let handleSave = ()=> {
        alert('Project added to your Favourite list');
    }
  return (
    <div id='Bottle' >
        {/* jsx */}
        <h3> Count: {c} </h3>
        <button className='border border-2 py-1 px-4 rounded ' onClick={increment} >c++</button>
        <hr />
        <h2 style={{color: 'red',backgroundColor: 'gray'}} >I am {name?name: 'Eva'} Bottle. You can get me for just ${price?price: 1} </h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <button onClick={()=> handleBuy()} >Buy Now</button>
        <button onClick={handleSave} >Save for Latter</button>
        <h4 className={global.h4} >This is Heading 3</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum eius dolorem rem minus magnam voluptate porro laudantium dolorum laboriosam?</p>
        {/* tailwind practice */}

        <h1 className="text-3xl text-center m-3 p-3 rounded-full bg-orange-500 md:bg-blue-500 lg:bg-green-500 text-red-700 font-bold underline">
      Hello world!
    </h1>

     <div className="flex border flex-col md:flex-row  border-3 border-red-500 gap-2  min-h-[100px] items-center justify-between ">
      <div className="border w-full border-3 h-[100px] border-green-500">boxa</div>
      <div className="border w-full border-3 h-[100px] border-green-500">boxb</div>
      <div className="border w-full border-3 h-[100px] border-green-500">boxc</div>
      <div className="border w-full border-3 h-[100px] border-green-500">boxd</div>
     </div>

     <p className='text-blue' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam tempora adipisci corporis explicabo, ex alias, fugiat illum dolores molestiae fuga, quaerat eligendi iure exercitationem doloribus unde ipsa quos consectetur.</p>
     <div className="">
      <p className=''>Lorem ipsum dolor sit amet.</p>
      <p className='font-poppines font-semibold '>Lorem ipsum dolor sit amet.</p>
      <p className='font-bungee'>Lorem ipsum dolor sit amet.</p>
      <p className='font-edu'>Lorem ipsum dolor sit amet.</p>
     </div>
    </div>
  )
//   js 
}

export default Bottle