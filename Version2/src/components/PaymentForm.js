import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

function PaymentForm() {
  const [show, setShow] = useState(false);

  const { Formik } = formik;
  const creditRegExp = /^([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$/;
  const cvvRegExp = /^([0-9][0-9][0-9])$/;
  const dateRegExp = /^([0-9][0-9][0-9][0-9])$/;
  
  const schema = yup.object().shape({
    cardNum: yup.string().required('Required').max(16, 'Credit card number is not valid. 16 digit max.').min(13, 'Credit card number is not valid. 13 digit min.'),
    cardName: yup.string().required('Required').max(20, 'Must be 20 characters or less'),
    cardDate: yup.string().required('Required').max(4, 'Invalid date format. MM/YY').min(4, 'Invalid date format. MM/YY'),
    cardCvv: yup.string().required('Required').matches(cvvRegExp, 'CVV is not valid. 3 digit max.')
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        cardNum: '',
        cardName: '',
        cardDate: '',
        cardCvv: ''
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} controlId="validationFormik01">
              <Form.Control
                type="number"
                name="cardNum"
                value={values.cardNum}
                onChange={handleChange}
                isValid={touched.cardNum && !errors.cardNum}
                isInvalid={!!errors.cardNum}
                placeholder='CREDIT CARD NUMBER'
              />
              <Form.Control.Feedback type="invalid">
                {errors.cardNum}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormik02">
              <Form.Control
                type="text"
                name="cardName"
                value={values.cardName}
                onChange={handleChange}
                isValid={touched.cardName && !errors.cardName}
                isInvalid={!!errors.cardName}
                placeholder='NAME ON CARD'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.cardName}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="validationFormik05">
              <Form.Control
                type="number"
                name="cardDate"
                value={values.cardDate}
                onChange={handleChange}
                isValid={touched.cardDate && !errors.cardDate}
                isInvalid={!!errors.cardDate}
                placeholder='EXPIRATION DATE'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.cardDate}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormik06">
              <Form.Control
                type="number"
                name="cardCvv"
                value={values.cardCvv}
                onChange={handleChange}
                isValid={touched.cardCvv && !errors.cardCvv}
                isInvalid={!!errors.cardCvv}
                placeholder='CVV'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.cardCvv}
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
          <div className="center">
          <Button onClick={()=>setShow(!show)} type="submit">Confirm order</Button>
          </div>
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
        </Form>
      )}
    </Formik>
  );
}

export default PaymentForm;