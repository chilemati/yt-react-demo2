import React from 'react'
import './car.css';
import styles from './global.module.css'
const Car = () => {
  return (
    <div id='Car' >
        <h2>This is My Car</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <h3 className={styles.h3} >This is Heading 3</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsam neque, adipisci velit quia deserunt architecto mollitia repellendus saepe. Voluptate?</p>
    </div>
  )
}

export default Car