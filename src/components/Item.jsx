import React, { useState } from 'react'
import './Card.css'
import products from './Card'

function Item({product}){
 const [cart,setCart]=useState() 
const [showDescription,setShowdescription]=useState(false)
  
const handleShowDescription=()=>{
  setShowdescription(true)
};
const handleHideDescription=()=>{
  setShowdescription(false)
}
const addToCart = productId => {
  const product = products.find(p => p.name === product.name);
  if (product) {
    setCart(prevCart => [...prevCart, product]);
  }
};

  return (
    
    <div className='Card'>
    

<img src={product.image} alt={product.alt} className='img'/>
<h3>{product.name}</h3>
<p style={{color:'green',fontSize:'bold'}}>{product.cost}</p>

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
