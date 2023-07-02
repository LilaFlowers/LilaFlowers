import { click } from '@testing-library/user-event/dist/click'
import React, {useState, Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Cart } from 'react-bootstrap-icons';
import './Navbar.css';

const navigation = [
  {name : 'BOUQUETS', href:'/Bouquets'},
  {name : 'CUSTOM', href:'/Custom'},
  {name : 'ABOUT', href:'/About'},
  {name : 'FR', href:'/'},
  {name : 'MY CART', href:'/MyCart'},
]

function Navbar() {
  return (
    <>
    <nav className="navbar">
    <a href="/">
              <h1>LILA</h1>
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
