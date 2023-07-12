import React from 'react'
import { useState } from 'react';

const GroceriesChild=({product})=> {
    const [cart,setCart]=useState() 
const [showDescription,setShowdescription]=useState(false)
  
const handleShowDescription=()=>{
  setShowdescription(true)
};
const handleHideDescription=()=>{
  setShowdescription(false)
}
const addToCart = productId => {

};
  return (
    <div className='productCard'>
        <img src={product.img} alt={product.name} className='imgCard' />
        <h4>{product.name}</h4>
        <h5>{product.price}</h5>
        

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

export default GroceriesChild
