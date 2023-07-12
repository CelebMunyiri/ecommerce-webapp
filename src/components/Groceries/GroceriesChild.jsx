import React from 'react'
import { useState } from 'react';
import './Groceries.css'

const GroceriesChild=({grocery})=> {
    const [cart,setCart]=useState() 
const [showDescription,setShowdescription]=useState(false)
  
const handleShowDescription=()=>{
  setShowdescription(true)
};
const handleHideDescription=()=>{
  setShowdescription(false)
}
const addToCart = groceryId => {

};
  return (
    <div className='groceryCard'>
        <img src={grocery.img} alt={grocery.name} className='imgCard' />
        <h4>{grocery.name}</h4>
        <h5>{grocery.price}</h5>
        

        <div>
      {!showDescription ? (
        <button onClick={handleShowDescription}>Show Description</button>
      ) : (
        <div>
          <p>{grocery.description}</p>
          <button onClick={handleHideDescription}>Hide Description</button>
          
        </div>

      )}
    </div>
    
      
    </div>
  )
}

export default GroceriesChild
