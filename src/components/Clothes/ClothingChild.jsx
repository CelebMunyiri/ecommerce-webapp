import React from 'react'
import './ClotheCard.css';
import { useState } from 'react';
function ClothingChild({clothes}) {
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
    <div className='clothesCard'>
        <img src={clothes.img} alt={clothes.name} className='imgCard' />
        <h4>{clothes.name}</h4>
        <h5>{clothes.price}</h5>
        

        <div>
      {!showDescription ? (
        <button onClick={handleShowDescription}>Show Description</button>
      ) : (
        <div>
          <p>{clothes.description}</p>
          <button onClick={handleHideDescription}>Hide Description</button>
          
        </div>

      )}
    </div>
    
      
    </div>
  )
}

export default ClothingChild
