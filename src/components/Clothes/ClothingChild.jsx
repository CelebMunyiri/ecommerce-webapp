import React from 'react'
import './ClotheCard.css';

function ClothingChild({clothes}) {
  return (
    <div className='clothesCard'>
        <img src={clothes.img} alt={clothes.name} className='imgCard' />
        <h4>{clothes.name}</h4>
        <h5>{clothes.price}</h5>
        <p>{clothes.description}</p>
      
    </div>
  )
}

export default ClothingChild
