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
<StepForm/>

{/* <FormikStepper 
validationSchema={Yup.object({
    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    phone: Yup.string()
                        .matches(phoneRegExp, 'Phone number is not valid. 10 digit max.')
                        .required('Required'),
                    address: Yup.string()
                        .max(25, 'Must be 25 characters or less')
                        .required('Required'),
                    city: Yup.string()
                        .max(25, 'Must be 25 characters or less')
                        .required('Required'),
                    country: Yup.string()
                        .max(25, 'Must be 25 characters or less')
                        .required('Required'),
                    postal: Yup.string()
                        .matches(postalRegExp, 'Postal code is not valid. Format: "X0X 0X0"')
                        .required('Required'),
})}
initialValues={{
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    address: '',
    city: '',
    country: '',
    postal: '',
    date: 0,
    message: '',
    card_num: 0,
    card_name: '',
    card_date: 0,
    card_cvv: 0
}} onSubmit={() => {}}>
        <FormikStepProps>
    <Field name = "firstName" type = "text" placeholder= "FIRST NAME"/>
    <Field name = "lastName" type = "text" placeholder= "LAST NAME"/>
    <Field name = "email" type = "text" placeholder= "EMAIL ADDRESS"/>
    <Field name = "phone" type = "number" placeholder= "PHONE NUMBER"/>
    <Field name = "address" type = "text" placeholder= "DELIVERY ADDRESS"/>
    <Field name = "city" type = "text" placeholder= "CITY"/>
    <Field name = "country" type = "text" placeholder= "COUNTRY"/>
    <Field name = "postal" type = "text" placeholder= "POSTAL CODE"/>
    </FormikStepProps>
    <FormikStepProps>
    <Field name = "date" type = "number" placeholder= "DESIRED DELIVERY DATE"/>
    <Field name = "message" type = "text" placeholder= "GIFT MESSAGE + SIGNATURE"/>
    </FormikStepProps>
    <FormikStepProps>
    <Field name = "card_num" type = "number" placeholder= "CREDIT CARD NUMBER"/>
    <Field name = "card_name" type = "text" placeholder= "NAME ON CARD"/>
    <Field name = "card_date" type = "number" placeholder= "EXPIRATION DATE"/>
    <Field name = "card_cvv" type = "number" placeholder= "CVV"/>
    </FormikStepProps>

</FormikStepper> */}



    {/* <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Shipping information</Accordion.Header>
        <Accordion.Body>
<div className="ship_info">
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', phone: '', address: '', city: '', country: '', postal: ''}}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    phone: Yup.string()
                        .matches(phoneRegExp, 'Phone number is not valid. 10 digit max.')
                        .required('Required'),
                    address: Yup.string()
                        .max(25, 'Must be 25 characters or less')
                        .required('Required'),
                    city: Yup.string()
                        .max(25, 'Must be 25 characters or less')
                        .required('Required'),
                    country: Yup.string()
                        .max(25, 'Must be 25 characters or less')
                        .required('Required'),
                    postal: Yup.string()
                        .matches(postalRegExp, 'Postal code is not valid. Format: "X0X 0X0"')
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        nextStep();
                    }, 400);
                }}
            >
                {formik => {
                    console.log(formik)
                    return (
          <Form>
            <Row>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Field name="firstName" className="form-control" type="text" placeholder="FIRST NAME" style={formik.touched.firstName ? getStyles(formik.errors, 'firstName') : {}}/>
                    <ErrorMessage name="firstName"/>
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Field name="lastName" className="form-control" type="text" placeholder="LAST NAME" style={formik.touched.lastName ? getStyles(formik.errors, 'lastName') : {}}/>
                    <ErrorMessage name="lastName"/>
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Field name="email" className="form-control" type="text" placeholder="EMAIL ADDRESS" style={formik.touched.email ? getStyles(formik.errors, 'email') : {}}/>
                    <ErrorMessage name="email"/>
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Field name="phone" className="form-control" type="number" placeholder="PHONE NUMBER" {...formik.getFieldProps('phone')} style={formik.touched.phone ? getStyles(formik.errors, 'phone') : {}}/>
                    <ErrorMessage name="phone"/>
                </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Field name="address" className="form-control" type="text" placeholder="DELIVERY ADDRESS" style={formik.touched.address ? getStyles(formik.errors, 'address') : {}}/>
                    <ErrorMessage name="address"/>
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Field name="city" className="form-control" type="text" placeholder="CITY" style={formik.touched.city ? getStyles(formik.errors, 'city') : {}}/>
                    <ErrorMessage name="city"/>
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Field name="country" className="form-control" type="text" placeholder="COUNTRY" style={formik.touched.country ? getStyles(formik.errors, 'country') : {}}/>
                    <ErrorMessage name="country"/>
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Field name="postal" className="form-control" type="text" placeholder="POSTAL CODE" {...formik.getFieldProps('postal')} style={formik.touched.postal ? getStyles(formik.errors, 'postal') : {}}/>
                    <ErrorMessage name="postal"/>
                </Form.Group>
            </Col>
            </Row>
            

            <Row>
                <div className="next_btn">

    </div>
            </Row>
            </Form>
                    )}}
            </Formik>
    </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Delivery details</Accordion.Header>
        <Accordion.Body>
        <Form>
            <Row>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="DESIRED DELIVERY DATE" />
                </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col sm>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="GIFT MESSAGE + SIGNATURE"/>
      </Form.Group>
            </Col>
            </Row>
            </Form>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Payment information</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Row>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="CREDIT CARD NUMBER" />
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="NAME ON CARD" />
                </Form.Group>
            </Col> 
            <Col sm>
                <p>
                ORDER SUBTOTAL . . . . . . 0.00<br/>
                DELIVERY FEE . . . . . . . . . 0.00<br/>
                CARE & HANDLING FEE . . 0.00<br/>
                TAX . . . . . . . . . . . . . . . . . . 0.00<br/>
                </p>
            </Col>
            </Row>
            <Row>
                <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="EXPIRATION DATE" />
                </Form.Group>
                </Col>
                <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="CVV" />
                </Form.Group>
                </Col>
                <Col sm>
                    <p>
                TOTAL                0.00<br/>
                </p>
                </Col>
            </Row>
          </Form>
          <div className="conf_btn">
          <Button onClick={()=>setShow(!show)}>
      <div className='buttonContext'>
      Confirm order  
      <ChevronDoubleRight size={30}/>
      </div>
    </Button>
    </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
    <div className="empty"> </div>
    {show &&
    <div className="confirmation">
        <h1>
            Your order has been placed!
        </h1>
        <p>
            A CONFIRMATION EMAIL HAS BEEN SENT
        </p>
    </div>
    }
    </div>
  );
};

export default MyCart;

// export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema' >{

// }

// export function FormikStep({children, ...props}: FormikConfig<FormikValues>){

// }

// export function FormikStepper({children, ...props}: FormikConfig<FormikValues>){
//     const childrenArray = React.Children.toArray(children);
//     const [step, setStep] = useState(0);
//     const currentChild = childrenArray[step];

//     function isLastStep() {
//         return step === childrenArray.length -1;
//     }

//     return <Formik {...props} onSubmit={async(values, helpers) => {
//         if (isLastStep()){
//             await props.onSubmit(values, helpers);
//         }
//         else {
//             setStep(s => s+1);
//         }
//     }}>
//     <Form>
//         {currentChild}

//         {step > 0 ? <Button onClick={() => setStep(s => s-1)}> Back </Button> :null}
//         <Button type="submit"> {isLastStep() ? 'Submit': 'Next'} </Button>
//         </Form>
//     </Formik>
// }