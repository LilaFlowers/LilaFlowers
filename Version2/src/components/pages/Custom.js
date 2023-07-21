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
import purple_hydrangea from '../../images/custom/purple_hydrangea.webp';
import blue_orchid from '../../images/custom/blue_orchid.webp'

export default function Custom(){
    return <div className="customSection">
        <h1>Flowers... your way!</h1>
        <h2>Select flowers and create your own one-of-a-kind bouquet</h2>
        <Row lg={4} md={2} xs= {1}>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={blue_hydrangea} />
                <Card.Body>
                    <Card.Title>Blue Hydrangea</Card.Title>
                    <Button>ADD TO BOUQUET</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pink_hydrangea} />
                <Card.Body>
                    <Card.Title>Pink Hydrangea</Card.Title>
                    <Button>ADD TO BOUQUET</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pink_orchid} />
                <Card.Body>
                    <Card.Title>Pink Orchid</Card.Title>
                    <Button>ADD TO BOUQUET</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={white_orchid} />
                <Card.Body>
                    <Card.Title>White Orchid</Card.Title>
                    <Button>ADD TO BOUQUET</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        <Row lg={4} md={2} xs= {1}>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={yellow_roses} />
                <Card.Body>
                    <Card.Title>Yellow Roses</Card.Title>
                    <Button>ADD TO BOUQUET</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={pink_roses} />
                <Card.Body>
                    <Card.Title>Pink Roses</Card.Title>
                    <Button>ADD TO BOUQUET</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={red_roses} />
                <Card.Body>
                    <Card.Title>Red Roses</Card.Title>
                    <Button>ADD TO BOUQUET</Button>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={white_roses} />
                <Card.Body>
                    <Card.Title>White Roses</Card.Title>
                    <Button>ADD TO BOUQUET</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
            
        
        <div className="buttonAdd">
        <Button style={{ width: '30rem' }}>Add to cart</Button>
        </div>
        </div>
}