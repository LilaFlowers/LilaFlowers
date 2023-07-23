import logo_orange from "../images/logo-orange.png"
import React, {useState, Fragment} from 'react'
import {useTranslation} from 'react-i18next';
import { Cart } from 'react-bootstrap-icons';
import './Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const swapLanguage = () => {
    if (i18n.language === 'en') {
      changeLanguage('fr');
    } else {
      changeLanguage('en');
    }
  };

  return (
    <>
    <nav sticky="top" className="navbar">
    <a href="/" id="name">
              <h1>LILA</h1>
              </a>
              <img src={logo_orange} alt='LILA logo'/>
            <div className="links">
            <a href="/Bouquets">BOUQUETS</a>
            <a href="/Custom">{t('navbar_custom')}</a>
            <a href="/About">{t('navbar_about')}</a>
            <a href="/Reviews">{t('navbar_reviews')}</a>
            <a onClick={() => swapLanguage()} id='FR'>{t('navbar_lang')}</a>
            <a href="/MyCart">{t('navbar_cart')}
            {/* //<Cart size={25}/>*/}
            </a>
            </div>
        </nav>
    </>
  )
}

export default Navbar
