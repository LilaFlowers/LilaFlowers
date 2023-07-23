import React from 'react';
import { Formik, Field, Form, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const ShippingForm =({nextStep}) => {

    const phoneRegExp = /^([0-9]{10})?$/
    const postalRegExp = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;

    function getStyles(errors, fieldName) {
        if (getIn(errors, fieldName)) {
            return {
                border: '1px solid red',
            }
        }
    }

    return (
        <>
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
                  .required('Required')
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
                      
</Form>          
                    )
                }}
            </Formik>
        </>
    );
};

export default ShippingForm;