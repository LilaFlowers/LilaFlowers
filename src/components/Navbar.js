import logo_orange from "../images/logo-orange.png"
import React, {useState, Fragment} from 'react'
import { Cart } from 'react-bootstrap-icons';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar">
    <a href="/">
              <h1>LILA</h1>
              {/* <img src={logo_orange} alt='LILA logo'/> */}
            </a>
            <div className="links">
            <a href="/Bouquets">BOUQUETS</a>
            <a href="/Custom">CUSTOM</a>
            <a href="/About">ABOUT</a>
            <a href="/" id='FR'>FR</a>
            <a href="/MyCart">MY CART
            {/* //<Cart size={25}/>*/}
            </a>
            </div>
        </nav>
    </>
  )
}

export default Navbar
