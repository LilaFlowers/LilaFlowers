import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Facebook, Youtube, Instagram } from 'react-bootstrap-icons';


const Footer = () => {
    return ( 
        <nav className="footer">
            <Container>
            <h1>Hello</h1>
                {/* <Row>
                    <Col xs={6} md={4}>
                        <Facebook/>
                        <Youtube/>
                        <Instagram/>
                    </Col>
                    <Col xs={6} md={4}>
                        <img src={require('./images/logo-blanc.png')} alt="logo"></img>
                        <hr/>
                        <p>Copyright 2023</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Facebook/>
                        <Youtube/>
                        <Instagram/>
                    </Col>
                </Row> */}
            </Container>
        </nav>
     );
}
 
export default Footer;