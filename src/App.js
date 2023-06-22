import React from 'react';
import './App.css';
//import { ListOfProducts } from './components/data';
import Card from './components/Card';
import {Route,Routes} from 'react-router-dom'

//let product=ListOfProducts;
//let index=0;
//index=index+1

function App() {
  return (
    <div>
      
      <h1 style={{color:'blue',position:'relative',left:'250px'}}>Welcome to Abdullahi Dawud Store</h1>

      
      <div className="App">
      
      
        <Card/>
     
    </div>
      </div>
    

    
  );
}

export default App;
