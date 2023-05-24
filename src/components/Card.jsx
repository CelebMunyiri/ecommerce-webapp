import React from "react";
import Item from "./Item";
import './ThisCard.css'
//import { ListOfProducts } from "./data";
//import {ListOfProducts} from './data'



//Encounterred a bug while resolving hooks,
//The prevents mapping of products inform of cards into the container

function Card(){
  const  products=[
        {
            name:'Watch',
            description:'This a US brand watch built be Mandevour company, it is one of the best in the market',
            cost:'$5.5',
            image:'https://i.imgur.com/aTtVpES.jpg',
            alt:'An aye for an eye'
        },
        {
        name: 'Kettle',
        cost: '$3.8',
        description: 'Although to neurosurgery, is one of her most recognizable public art pieces.',
        image: 'https://i.imgur.com/Mx7dA2Y.jpg',
        alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
      }, {
        name: 'Television',
        cost: '$15.4',
        description: 'This enormous when strong winds blow and opening them in the morning.',
        image: 'https://i.imgur.com/ZF6s192m.jpg',
        alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
      }, {
        name: 'Sneaker',
        cost: '$22.6',
        description: 'Wilson was known for his with a sense of universal humanity."',
        image: 'https://i.imgur.com/aTtVpES.jpg',
        alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
      }, {
        name: 'Smart Watch',
        cost: '$13.2',
        description: 'Located on the Easter Island, there some believe represented deified ancestors.',
        image: 'https://i.imgur.com/RCwLEoQm.jpg',
        alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
      }, {
        name: 'Man city Jersey',
        cost: '$90.2',
        description: 'The Nanas are triumphant creatures, polyester to achieve a more vibrant effect.',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
      }, {
        name: 'Iphone Pro 12',
        cost: '$17.5',
        description: 'This abstract bronze developed abstract forms inspired by people and landscapes.',
        image: 'https://i.imgur.com/2heNQDcm.jpg',
        alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
      }, {
        name:'Sub Woofer',
        cost:'$32.9',
        description: "Descended from four generations temporary Yoruba themes.",
        image:'https://i.imgur.com/wIdGuZwm.png',
        alt:'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
      }
    ]
    
    const ListofProducts=products.map(product=>
        <Item key={product.name} product={product}/>
    )

    return(
       <div className="container">
        {ListofProducts}
        </div>
    )
}
export default Card