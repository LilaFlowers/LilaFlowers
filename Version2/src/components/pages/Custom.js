import React from "react"
import './Custom.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blue_hydrangea from '../../images/custom/blue_hydrangea.webp';
import pink_hydrangea from '../../images/custom/pink_hydrangea.webp';
import pink_orchid from '../../images/custom/pink_orchid.webp';
import pink_roses from '../../images/custom/pink_roses.webp';
import red_roses from '../../images/custom/red_roses.webp';
import white_orchid from '../../images/custom/white_orchid.webp';
import white_roses from '../../images/custom/white_roses.webp';
import yellow_roses from '../../images/custom/yellow_roses.webp';
import {useState} from 'react';

export default function Custom(){
    const [buttonText1, setButtonText1] = useState('ADD TO BOUQUET');
    const [buttonText2, setButtonText2] = useState('ADD TO BOUQUET');
    const [buttonText3, setButtonText3] = useState('ADD TO BOUQUET');
    const [buttonText4, setButtonText4] = useState('ADD TO BOUQUET');
    const [buttonText5, setButtonText5] = useState('ADD TO BOUQUET');
    const [buttonText6, setButtonText6] = useState('ADD TO BOUQUET');
    const [buttonText7, setButtonText7] = useState('ADD TO BOUQUET');
    const [buttonText8, setButtonText8] = useState('ADD TO BOUQUET');
    const [buttonTextAdd, setButtonTextAdd] = useState('ADD TO CART');
    
    const handleClick1 = () => {
        setButtonText1('ITEM ADDED TO BOUQUET');
      };
    const handleClick2 = () => {
        setButtonText2('ITEM ADDED TO BOUQUET');
      };
      const handleClick3 = () => {
        setButtonText3('ITEM ADDED TO BOUQUET');
      };
      const handleClick4 = () => {
        setButtonText4('ITEM ADDED TO BOUQUET');
      };
      const handleClick5 = () => {
        setButtonText5('ITEM ADDED TO BOUQUET');
      };
      const handleClick6 = () => {
        setButtonText6('ITEM ADDED TO BOUQUET');
      };
      const handleClick7 = () => {
        setButtonText7('ITEM ADDED TO BOUQUET');
      };
      const handleClick8 = () => {
        setButtonText8('ITEM ADDED TO BOUQUET');
      };
      const handleClickAdd = () => {
        setButtonTextAdd('CUSTOM ITEM ADDED TO CART');
      };

    return <div className="customSection">
        <h1>Flowers... the way you like them!</h1>
        <h2>Select flowers and create your own one-of-a-kind bouquet</h2>
        <Row lg={4} md={2} xs= {1}>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={blue_hydrangea} alt='Picture of blue hydrangea flowers'/>
                <Card.Body>
                    <Card.Title>Blue Hydrangea</Card.Title>
                    <Button onClick={handleClick1}>{buttonText1}</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pink_hydrangea} alt='Picture of pink hydrangea flowers'/>
                <Card.Body>
                    <Card.Title>Pink Hydrangea</Card.Title>
                    <Button onClick={handleClick2}>{buttonText2}</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pink_orchid} alt='Picture of pink orchid flowers'/>
                <Card.Body>
                    <Card.Title>Pink Orchid</Card.Title>
                    <Button onClick={handleClick3}>{buttonText3}</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={white_orchid} alt='Picture of white orchid flowers'/>
                <Card.Body>
                    <Card.Title>White Orchid</Card.Title>
                    <Button onClick={handleClick4}>{buttonText4}</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        <Row lg={4} md={2} xs= {1}>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={yellow_roses} alt='Picture of yellow roses'/>
                <Card.Body>
                    <Card.Title>Yellow Roses</Card.Title>
                    <Button onClick={handleClick5}>{buttonText5}</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pink_roses} alt='Picture of pink roses'/>
                <Card.Body>
                    <Card.Title>Pink Roses</Card.Title>
                    <Button onClick={handleClick6}>{buttonText6}</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={red_roses} alt='Picture of red roses'/>
                <Card.Body>
                    <Card.Title>Red Roses</Card.Title>
                    <Button onClick={handleClick7}>{buttonText7}</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={white_roses} alt='Picture of white roses'/>
                <Card.Body>
                    <Card.Title>White Roses</Card.Title>
                    <Button onClick={handleClick8}>{buttonText8}</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
            
        
        <div className="buttonAdd">
        <Button onClick={handleClickAdd} style={{ width: '30rem' }}>{buttonTextAdd}</Button>
        </div>
        </div>
}