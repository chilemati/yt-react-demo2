import React from 'react'

const Child = ({name,maxPrice}) => {
  let userMax =  maxPrice && maxPrice() 
    console.count('child rendered: ')
  return (
    <div>
      <h2>Child</h2>
      <p>My Parent Name is {name} </p>
      <h6> User Max Price for this Checkout was {userMax} </h6>
    </div>
  )
}

export default React.memo(Child);