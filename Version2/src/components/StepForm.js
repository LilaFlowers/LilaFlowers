import {React, useState} from 'react';
import Stepper from 'react-stepper-horizontal';
import ShippingForm from './ShippingForm';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function StepForm ()  {
    const [page, setPage] = useState(0);
    const FormTitles = ["1. Shipping information", "2. Delivery details", "3. Payment information"]

    const PageDisplay = () => {
        if (page === 0) {
            return <ShippingForm/>
        }
        else if (page ===1){
            return <DeliveryForm/>
        }
        else {
            return <PaymentForm/>
        }
    }

    return (
        <div>
            <div className='form'>
                <ProgressBar now={page ===0 ? "33" : page === 1 ? "66" : "100"}/>
                    <div className='form-container'>
                        <div className='header'>
                            <h1>{FormTitles[page]}</h1>
                        </div>
                        <div className='body'>
                            {PageDisplay()}
                        </div>
                        <div className='footer'>
                            
                            <Button
                            disabled={page == 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}>Back</Button>
                            <Button
                            disabled={page == FormTitles.length -1}
                            onClick={() => {
                                setPage((currPage) => currPage + 1);
                            }}>Next</Button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default StepForm;
