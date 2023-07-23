import React, {useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import StepForm from '../StepForm'

import {ChevronDoubleRight} from 'react-bootstrap-icons';
import './MyCart.css'; 
import { Card } from "react-bootstrap";

const MyCart = ({nextStep}) => {
    const [show, setShow] = useState(false);

  return (
  <div className="cartSection">
    <div className="cartItems">
    <h1>My cart</h1>
    </div>
    <div className="message">
    <h2>You're close to having beautiful flowers sent your way! <br/>Simply complete this section to confirm your order.</h2>
    </div>
    <div className="formSec">
<StepForm/>
</div>
    <div className="empty"> </div>
    
    </div>
  );
};

export default MyCart;