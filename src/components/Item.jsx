import React from 'react'
import './Card.css'
function Item(product) {
  return (
    <div className='Card'>
      <h3><i>{product.name}</i></h3>
<img className="img"
alt={product.name}
src={product.image}/>

<p>{product.description}</p>
<p>{product.cost}</p>
    </div>
  )
}

export default Item
