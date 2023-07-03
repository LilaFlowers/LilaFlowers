import React from "react"
import './Custom.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pink_roses from "../../images/pink_roses.png"


export default function Custom(){
    return <div className="customSection">
        <h1>Flowers... your way!</h1>
        <h2>Select flowers and create your own one-of-a-kind bouquet</h2>
        <Row>
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
                <Card.Img variant="top" src={pink_roses} />
                <Card.Body>
                    <Card.Title>Pink Roses</Card.Title>
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
        </Row>
        <Row>
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
                <Card.Img variant="top" src={pink_roses} />
                <Card.Body>
                    <Card.Title>Pink Roses</Card.Title>
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
        </Row>
        </div>
}