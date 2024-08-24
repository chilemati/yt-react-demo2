import React from 'react'
import './blog.scss';

const Blog = () => {
  return (
    <div id='Blog' >
      <h2>Blog</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad ipsam, atque veniam distinctio ducimus consectetur esse a? Sit, officiis quisquam. Nulla perferendis, doloribus ducimus iure aut reiciendis facilis excepturi.</p>
      <div className="boxes">
        <div className="boxa">boxa</div>
        <div className="boxb">boxb</div>
        <div className="boxc">boxc</div>
        <div className="boxd">boxd</div>
      </div>
      <div className="bg"></div>
      <button>Read More</button>
    </div>
  )
}

export default Blog