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
            alt:'Mandeavour Watch'
        },
        {
        name: 'Kettle',
        cost: '$3.8',
        description: 'This a Safe to use electronic kettle with Capacity of 1.5 litres',
        image: Kettle,
        alt: 'Electric Kettle'
      },
       {
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
        cost: '$289.2',
        description: 'A Digital smart watch with all android apps and enabled alexa for directions and guide.',
        image: 'https://www.saruk.co.ke/images/51111682365285.jpg',
        alt: 'Smart Watch Image'
      }, {
        name: 'Sony XRS-XE3 series',
        cost: '$204',
        description: 'Sony SRS-XE300 X-Series Wireless Portable-Bluetooth Speaker IP67 Waterproof Dustproof and Shockproof wif 24 Hour Battery.',
        image: 'https://www.saruk.co.ke/images/64151669758071.jpg',
        alt: 'Sony Speaker'
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