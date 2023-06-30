import React from "react";
import Item from "./Item";
import './ThisCard.css'
import Cart from "./Cart";
import Watch from '../assets/julius-drost-uumkdaVS8rM-unsplash.jpg'
import Kettle from '../assets/an_vision-kf0GtI-wKDo-unsplash.jpg'
import Tv from '../assets/nicolas-j-leclercq-qDLLP0yP7FU-unsplash.jpg'
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
            image:Watch,
            alt:'An aye for an eye'
        },
        {
        name: 'Kettle',
        cost: '$3.8',
        description: 'Although to neurosurgery, is one of her most recognizable public art pieces.',
        image: Kettle,
        alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
      }, {
        name: 'Television',
        cost: '$15.4',
        description: 'A new modern smart Tv with netflix, 3.0 USB ports, HDMI support and all in one colors',
        image: Tv,
        alt: 'modern smart Tv.'
      }, {
        name: 'Sony Headphones',
        cost: '$22.6',
        description: 'This are the beadt headphones with builtin alexa, ask directions, play music,pick a call and increase/lower music volume ',
        image: 'https://m.media-amazon.com/images/I/51mhf2-LjLL.__AC_SX300_SY300_QL70_ML2_.jpg',
        alt: 'Sony WX100 headphones here'
      },
       {
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