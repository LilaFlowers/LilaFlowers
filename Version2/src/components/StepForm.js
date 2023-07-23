import {React, useState} from 'react';
import Stepper from 'react-stepper-horizontal';
import ShippingForm from './ShippingForm';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';

function StepForm ()  {
    const [formState, setFormState] = useState({

    })
    const [steps, setSteps] = useState({
        steps: [{
          title: '1. Shipping information',
          onClick: (e) => {
            e.preventDefault()
            console.log('onClick', 1)
          }
        }, {
          title: '2. Delivery details',
          onClick: (e) => {
            e.preventDefault()
            console.log('onClick', 2)
          }
        }, {
          title: '3. Payment information',
          onClick: (e) => {
            e.preventDefault()
            console.log('onClick', 3)
          }
        }],
        currentStep: 0,
    })

    const nextStep = () => {
        setSteps({
            ...steps,
            currentStep: steps.currentStep+1
        })
    }

    const renderSwitch = () => { 
     switch (steps.currentStep) {
        case 0:
            return <ShippingForm nextStep={nextStep} />
        case 1:
            return <PaymentForm/>
        case 2:
            return <DeliveryForm/>
        default:
            break;
     }
    }
    return (
        <div>
            <Stepper steps={steps.steps} activeStep={steps.currentStep} />
            {renderSwitch()}
            {/* <button onClick={nextStep}>Next step!</button> */}
        </div>
    );
}

export default StepForm;
