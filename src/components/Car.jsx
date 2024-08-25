import React from 'react'
import './car.css';
import styles from './global.module.css'
import { useRecoilState } from 'recoil';
import { cartATom } from './atoms/cart';
import State from './state/State';
const Car = () => {
  let [cart,setCart] = useRecoilState(cartATom)
  return (
    <div id='Car' >
        <h2>This is My Car</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <h3 className={styles.h3} >This is Heading 3</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam neque, adipisci velit quia deserunt architecto mollitia repellendus saepe. Voluptate?</p>
        {/* add to cart */}
        <hr />
        <h3>Cart: {cart} </h3>
        <button className='border border-2 py-1 px-4 rounded ' onClick={ ()=> setCart(prev=> prev +1) } >Add to Cart</button>
        <State />
    </div>
  )
}

export default Car