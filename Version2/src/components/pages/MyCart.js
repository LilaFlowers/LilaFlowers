import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import StepForm from '../StepForm'
import './MyCart.css'; 

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