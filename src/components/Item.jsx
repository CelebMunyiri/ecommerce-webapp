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
    <h3>{product.name}</h3>

<img src={product.image} alt={product.alt} className='img'/>
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
    <button className='addcart' onClick={addToCart}>Add to Cart</button>

    </div>
  )
  
}

export default Item
