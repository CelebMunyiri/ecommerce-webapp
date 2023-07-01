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
        name: 'Blenders',
        cost: '$17.5',
        description: 'Digital Powerful Blender with low power consumption and easy to use and clean.',
        image: 'https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/Appliances/Freelinks/Blenders.png',
        alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
      }, {
        name:'Iron Box',
        cost:'$32.9',
        description: "AILYONS brand Iron box with power and heat regulator numb.",
        image:'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/21/883927/1.jpg?2791',
        alt:'Iron Box'
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