import React from 'react'
import GroceriesChild from './GroceriesChild'

const GroceriesParent=()=> {
    const groceries=[
        {
            name:'Soko Maize Meal',
            img:'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/93/859974/1.jpg?6194',
            description:'A 10Kg Bag of Maize Flour produced by Foertified maize mealers',
            price:'Ksh 1099'
        },
        {
            name:'Fanta Passion Soda',
            img:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/285134/1.jpg?3579',
            description:'A 1 litre fanta passion soda by Cocacola soft drink manufacturers',
            price:'Ksh 184'
        },
    ]
    let ListOfGroceries=product.map(product=>
<GroceriesChild key={product.name} product={product}/>
    )
  return (
    <div>
      {ListOfGroceries}
    </div>
  )
}

export default GroceriesParent
