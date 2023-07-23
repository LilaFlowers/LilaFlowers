import './Home.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pretty_pink from '../../images/pretty_pink.webp';
import sunny from '../../images/sunny.webp';
import ballet from '../../images/ballet.webp';
import home_background from '../../images/home_background.png';
import { Sun, Truck, ChatLeftDots, Tree, Gift, ChevronDoubleRight} from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import logoblanc from '../../images/logo-blanc.png'

export default function Home(){
  const navigate = useNavigate()
    return <div className="homeBouquetSection">
          <img src={home_background} id="back" alt="Bouquet of flowers background"/>
          <div className='textontop'>
    <h1>Here comes <br/>the sun!</h1>

    <Button onClick={() => navigate('/Bouquets')}>
      <div className='buttonContext'>
      Check out our summer favorites  
      <ChevronDoubleRight size={30}/>
      </div>
    </Button>
    <Sun id='sun_icon' size={100}/>
    </div>
    <div className='home_bouquets'>
<Row>
    <Col>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={pretty_pink} alt='Picture of a pink bouquet of flowers'/>
      <Card.Body>
        <Card.Text>
        <h5>Pretty Pink<br/>Bouquet</h5><p>$75</p>
        </Card.Text>
        <Button onClick={() => navigate('/Bouquets')}>
      See more info  
    </Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={sunny} alt='Picture of a yellow bouquet of flowers'/>
      <Card.Body>
        <Card.Text>
        <h5>Sunny <br/>Bouquet</h5> <p>$80</p>
        </Card.Text>
        <Button onClick={() => navigate('/Bouquets')}>
      See more info  
    </Button>
          </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={ballet} alt='Picture of a pink bouquet of flowers'/>
      <Card.Body>
        <Card.Text>
        <h5>At The Ballet Bouquet</h5><p>$65</p>
        </Card.Text>
        <Button onClick={() => navigate('/Bouquets')}>
      See more info  
    </Button>
          </Card.Body>
    </Card>
    </Col>
    </Row>
    <div className='icon_section'>
      <Row>
        <Col>
        <Truck size={80}/>
        <p>DELIVERY IN 48 HOURS</p>
        </Col>
        <Col>
        <ChatLeftDots size={80}/>
        <p>AT YOUR SERVICE 24/7</p>
        </Col>
        <Col>
        <Tree size={80}/>
        <p>ENVIRONNEMENT FRIENDLY PRACTICES</p>
        </Col>
        <Col>
        <Gift size={80}/>
        <p>INCLUDES A PERSONALIZED MESSAGE</p>
        </Col>
      </Row>
    </div>
    </div>
    
    </div>
}