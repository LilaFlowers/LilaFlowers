import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

function ShippingForm() {
  const { Formik } = formik;
  const phoneRegExp = /^([0-9]{10})?$/
  const postalRegExp = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;

  const schema = yup.object().shape({
    firstName: yup.string().required('Required').max(15, 'Must be 15 characters or less'),
    lastName: yup.string().required('Required').max(20, 'Must be 20 characters or less'),
    email: yup.string().required('Required').email('Invalid email address'),
    phone: yup.string().required('Required').matches(phoneRegExp, 'Phone number is not valid. 10 digit max.'),
    address: yup.string().required('Required').max(25, 'Must be 25 characters or less'),
    city: yup.string().required('Required').max(25, 'Must be 25 characters or less'),
    country: yup.string().required('Required').max(25, 'Must be 25 characters or less'),
    postal: yup.string().required('Required').matches(postalRegExp, 'Postal code is not valid. Format: "X0X 0X0"')
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        postal: ''
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} controlId="validationFormik01">
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.firstName}
                placeholder='FIRST NAME'
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormik02">
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={!!errors.lastName}
                placeholder='LAST NAME'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormik03">
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
                placeholder='EMAIL ADDRESS'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormik04">
              <Form.Control
                type="number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isValid={touched.phone && !errors.phone}
                isInvalid={!!errors.phone}
                placeholder='PHONE NUMBER'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.phone}
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="validationFormik05">
              <Form.Control
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                isValid={touched.address && !errors.address}
                isInvalid={!!errors.address}
                placeholder='DELIVERY ADDRESS'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.address}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormik06">
              <Form.Control
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                isValid={touched.city && !errors.city}
                isInvalid={!!errors.city}
                placeholder='CITY'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.city}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormik07">
              <Form.Control
                type="text"
                name="country"
                value={values.country}
                onChange={handleChange}
                isValid={touched.country && !errors.country}
                isInvalid={!!errors.country}
                placeholder='COUNTRY'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.country}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormik08">
              <Form.Control
                type="text"
                name="postal"
                value={values.postal}
                onChange={handleChange}
                isValid={touched.postal && !errors.postal}
                isInvalid={!!errors.postal}
                placeholder='POSTAL CODE'
              />
              <Form.Control.Feedback type='invalid'>
                {errors.postal}
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className='center'>
          <Button type="submit">Confirm values</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ShippingForm;