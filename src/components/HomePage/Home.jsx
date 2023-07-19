import React from 'react'
import Navbar from '../Navbar'
import Homepage from './Homepage'
import './Home.css'

function Home() {
  return (
    <div>
      <Navbar/>
      <Homepage className="homepage"/>
    </div>
  )
}

export default Home
