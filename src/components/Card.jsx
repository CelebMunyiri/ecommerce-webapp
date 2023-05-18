import React, { useState } from "react";
import './Card.css'
import {ListOfProducts} from './data'

const [index,setIndex]=useState(0)

//Encounterred a bug while resolving hooks,
//The prevents mapping of products inform of cards into the container
{/*setIndex({
    for(let index=0;index<ListOfProducts.length;index++){
        index;
       }
},[])*/}

let product=ListOfProducts[index]
const Card=(props)=>{
    return(
        <div className="Card">
        <h3><i>{product.name}</i></h3>
<img className="img"
alt={product.name}
src={product.image}/>

<p>{product.description}</p>
<p>{product.cost}</p>
        </div>
    )
}
export default Card