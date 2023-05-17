import React from "react";
import './Card.css'
import {ListOfProducts} from './data'

let index=0
let product=ListOfProducts[index]
const Card=(props)=>{
    return(
        <div className="Card">
        <h3><i>{product.name}</i></h3>
<img className="img"
alt={product.name}
src={product.image}/>

<p>{product.description}</p>
        </div>
    )
}
export default Card