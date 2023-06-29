import React from 'react' 
import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
const Navbar=()=> {
    const navRef=useRef();

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav")
    } 
    return(     
    <header>
        <h3>NunuaHapa</h3>
        <nav ref={navRef}>
            <a href="/home">Home</a>
            <a href="/electronic">Electronic</a>
            <a href="/groceries">Groceries</a>
            <a href="/clothing">Clothing</a>
            <a href='/contacts'>Furnitures</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes/>
            </button>
            
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
      
    </header>
  )
}

export default Navbar
