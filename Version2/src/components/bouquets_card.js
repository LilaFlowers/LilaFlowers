import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import image from '../images/green_goddess.webp'
import {useState} from 'react';

function Bouquet({ name, Color, price, type, img }) {
    const [buttonText, setButtonText] = useState('ADD TO CART');
    const handleClick = () => {
        setButtonText('ITEM ADDED TO CART');
      };

    return (
        <div className='bouquet_card'>
        <Card className='m-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../images/'+img)} alt={"Picture of a " + Color + " bouquet of flowers"}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>{price}</Col>
                    </Row>
                    <Row>
                        <Col>{type}</Col>
                    </Row>
                </Card.Text>
                <Container className='text-center'>
                    <Button onClick={handleClick} variant="primary">{buttonText}</Button>
                </Container>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Bouquet;