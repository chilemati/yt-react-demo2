import React, { useState } from 'react'
import './car.css';
import styles from './global.module.css'
import { useRecoilState } from 'recoil';
import { cartATom } from './atoms/cart';
import State from './state/State';
import VirtualisedList from './list/VirtualisedList';
import { numList } from './list/listData';
import viteLogo from '/vite.svg';
import Child from './Child';
import { useCount } from './customHooks/useCount';
import LazyImage from './lazy/LazyImage';
import Paginate1 from './paginate1/Paginate1';
import { cardItems } from './paginate1/paginateData';
const Car = () => {
  // let [cart,setCart] = useRecoilState(cartATom)
  let {c,increment} = useCount(5);
  let [product,setProduct] = useState(cardItems);
  let [showing,setShowing] = useState(4);
  console.count('car rendered: ');

  function handleShowing() {
    if(showing <= cardItems.length -1) {
      setShowing(prev=> prev+=4);
    }else{
      setShowing(cardItems.length-1)
    }
  }

  return (
    <div id='Car' >
      <h1 className='clamp' >Heading 1</h1>
      <Paginate1 itemsPerPage={4} items={cardItems} />
      <hr />
         <h4 className='text-red-700' >prouduct List</h4>
         {
          product.filter((each,i)=> (i> 0) && (i <= showing) ).map((each,i)=> (
            <div key={each.id} > Product Name {i+1} </div>
          ))
         }
         <button onClick={()=> handleShowing()} className="shadow">Show More</button>
      <LazyImage image={{src: 'https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=tcTwN2rTvUBK4wddan_GUCxrXX6bBoU-hyrVMvmT0BM='}} />

      <div className="flexCol">
        <span>box1</span>
        <span>box2</span>
        <span>box3</span>
      </div>
        <h2>This is My Car</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <h3 className={styles.h3} >This is Heading 3</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam neque, adipisci velit quia deserunt architecto mollitia repellendus saepe. Voluptate?</p>
        {/* add to cart */}
        <hr />
        <h3>Cart:  | Count: {c} </h3>
        {/* <button className=' border-2 py-1 px-4 rounded ' onClick={ ()=> setCart(prev=> prev +1) } >Add to Cart</button> */}
        <button className=' border-2 py-1 px-4 rounded ' onClick={ increment} >Add to Count</button>
        {/* <Child /> */}
         <div className="">
          <img className='w-[500px] h-[500px] mx-auto ' src={viteLogo} alt=" vite" />
         </div>
        <State />
        <div className="min-h-[70vh] my-4">
        <VirtualisedList data={numList} />
        </div>

        <LazyImage image={{src: 'https://media.gettyimages.com/id/82726781/photo/swimmer-performing-butterfly-stroke.jpg?s=612x612&w=gi&k=20&c=PGqL4tzLpUrTK3NgpXGisZZh4TNjjpo1TXbzENZYs50='}} />
        <LazyImage image={{src: 'https://media.istockphoto.com/id/1081891908/photo/little-boy-swimming-crawl-in-pool.jpg?s=612x612&w=0&k=20&c=_3GmzSiIMtqgcPWi2zsz58nBhUQEiEuJSZN61voNeVo='}} />
        
    </div>
  )
}

export default Car