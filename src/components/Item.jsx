import React from 'react'
import './Card.css'

function Item({product}){
  return (
    
    <div className='Card'>
    <h3>{product.name}</h3>

<img src={product.image} alt={product.alt} className='img'/>
<p style={{color:'blue'}}>{product.cost}</p>
<p>{product.description}</p>

    </div>
    
  )
}

export default Item
