import React from 'react';
import './App.css';
//import { ListOfProducts } from './components/data';
import Card from './components/Card';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Electronic from './components/Electronics/Electronic';
import Groceries from './components/Groceries';
import Furniture from './components/Furniture';
import Clothing from './components/Clothes/Clothing';
import Home from './components/HomePage/Home';

//let product=ListOfProducts;
//let index=0;
//index=index+1

function App() {
  return (
   
    <div>
       <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/electronic' element={<Electronic/>} />
        <Route path='/groceries' element={<Groceries/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/clothing' element={<Clothing/>}/>
      </Routes>
      
      <Home/>
      
      

      
      
    
      </div>
    

    
  );
}

export default App;
