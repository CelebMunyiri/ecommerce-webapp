import React, { useState } from 'react'
import './Card.css'

function Item({product}){
  
const [showDescription,setShowdescription]=useState(false)
  
const handleShowDescription=()=>{
  setShowdescription(true)
};
const handleHideDescription=()=>{
  setShowdescription(false)
}
  return (
    
    <div className='Card'>
    <h3>{product.name}</h3>

<img src={product.image} alt={product.alt} className='img'/>
<p style={{color:'blue'}}>{product.cost}</p>

<div>
      {!showDescription ? (
        <button onClick={handleShowDescription}>Show Description</button>
      ) : (
        <div>
          <p>{product.description}</p>
          <button onClick={handleHideDescription}>Hide Description</button>
        </div>
      )}
    </div>

    </div>
  )
  
}

export default Item
