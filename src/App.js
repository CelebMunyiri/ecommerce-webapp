import React from 'react';
import './App.css';
//import { ListOfProducts } from './components/data';
import Card from './components/Card';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Electronic from './components/Electronic';
import Groceries from './components/Groceries';

//let product=ListOfProducts;
//let index=0;
//index=index+1

function App() {
  return (
    <div>
      <Navbar/>
      
      
      

      
      <div className="App">
      <Routes>
        <Route path='/electronic' element={<Electronic/>} />
        <Route path='/groceries' element={<Groceries/>}/>
      </Routes>
      
        <Card/>
     
    </div>
      </div>
    

    
  );
}

export default App;
