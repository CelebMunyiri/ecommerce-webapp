import React from 'react'
import GroceriesChild from './GroceriesChild'
import '../Clothes/Parent.css'

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
        {
            name:'Top fry 2L',
            img:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/412824/1.jpg?6158',
            description:'top Fry 2 litres vegetable cooking Oil',
            price:'Ksh 707',
        },
        {
            name:'Milk',
            img:'https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/Grocery/Freelinks/Milk.png',
            description:'1 Litre Whole Milk from dairy best',
            price:'Ksh 70.00'
        }
    ]
    let ListOfGroceries=groceries.map(grocery=>
<GroceriesChild key={grocery.name} grocery={grocery}/>
    )
  return (
    <div className='container'>
      {ListOfGroceries}
    </div>
  )
}

export default GroceriesParent
