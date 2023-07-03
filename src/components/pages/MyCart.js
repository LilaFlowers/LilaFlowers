import React, {useState} from "react"
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MyCart.css'; 

function MyCart() {
  return (<div className="cartSection">
    <div className="cartItems">
    <h1>My cart</h1>
    </div>
    <div className="message">
    <h2>You're close to having beautiful flowers sent your way! <br/>Simply complete this section to confirm your order.</h2>
    </div>
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Shipping information</Accordion.Header>
        <Accordion.Body>


          <Form>
            <Row>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="FIRST NAME" />
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="LAST NAME" />
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="EMAIL ADDRESS" />
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="PHONE NUMBER" />
                </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="DELIVERY ADDRESS" />
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="CITY" />
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="COUNTRY" />
                </Form.Group>
            </Col>
            <Col sm>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="POSTAL CODE" />
                </Form.Group>
            </Col>
            </Row>
    </Form>
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div className="confirmation">
        <h1>
            Your order has been placed!
        </h1>
        <p>
            A CONFIRMATION EMAIL HAS BEEN SENT TO EMAIL@EMAIL.COM
        </p>
    </div>
    </div>
  );
}

export default MyCart;