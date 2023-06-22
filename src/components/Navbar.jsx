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
        <h3>MyPorfolio</h3>
        <nav ref={navRef}>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/services">Services</a>
            <a href='/contacts'>Contacts</a>
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
