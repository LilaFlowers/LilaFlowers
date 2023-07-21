import React from "react";
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Instagram, Youtube, Facebook, Envelope, Telephone } from 'react-bootstrap-icons';
import logoblanc from '../images/logo-blanc.png'

const Footer = () => {
return (
	<div className='footer'>
    <div className='footer_green'>
<p> • BIRTHDAYS • ANNIVERSARIES • FUNERALS • CELEBRATIONS • GIFTS • DECORATIONS • </p>
    </div>
    <div className='footer_pink'>
      <Row>
      <Col>
      <Row>
        <div className='lined_icons'>
          <a href='https://www.facebook.com/' target='_blank'>
        <Facebook size={60}/>
        </a>
        <a href='https://www.youtube.com/' target='_blank'>
        <Youtube size={60}/>
        </a>
        <a href='https://www.instagram.com/' target='_blank'>
        <Instagram size={60}/>
        </a>
        </div>
      </Row>
        </Col>
        <Col>
        <img src={logoblanc} alt="LILA logo"/>
        <hr/>
        <p>Copyright 2023</p>
        </Col>
        <Col>
        <div className='center'>
        <Row>
          <div className='mail'>
          <Envelope size={30}/> <p>HELP@LILAFLOWERS.COM</p>
          </div>
        </Row>
        <Row>
          <div className='mail'>
          <Telephone size={30}/> <p>1-000-000-0000</p>
          </div>
        </Row>
        </div>
        </Col>
      </Row>
    </div>
    </div>
);
};
export default Footer;
