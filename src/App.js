import React from 'react';
import './App.css';

import Card from './components/Card';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Electronic from './components/Electronics/Electronic';
import Groceries from './components/Groceries/Groceries';
import Furniture from './components/Furniture';
import Clothing from './components/Clothes/Clothing';
import Home from './components/HomePage/Home';



function App() {
  return (
   
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/electronic' element={<Electronic/>} />
        <Route path='/groceries' element={<Groceries/>}/>
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/clothing' element={<Clothing/>}/>
      </Routes>

      </div>
  );
}

export default App;
