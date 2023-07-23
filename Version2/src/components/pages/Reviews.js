import './Reviews.css';
import React, {useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
export default function Reviews(){

    const[show, setShow] = useState(false);
    const ref = useRef(null);

  const onClear = () => {
    ref.current.value = "";
  };
return <div className='ReviewsSection'>
    <div className='reviewTitle'>
        <h1>Our reviews</h1>
        <h2>Let past customers convince you of our great service!</h2>
    </div>
<div className='commentSection'>
      <Row>
      <Col>
      <Card>
        <Card.Body>I am delighted with the service here! The website was easy to navigate and had a wide range of beautiful fresh flowers to choose from. The ordering process was quick and hassle-free, and my flowers were delivered on time. The recipient was thrilled with the gorgeous blooms, which were arranged elegantly and arrived in perfect condition. <br/> - Kathy, Ottawa
</Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Body>I am so impressed with LILA! They offer an amazing selection of beautiful flowers and their website is so easy to navigate. I ordered the love bouquet for my sister-in-law and she loved it! The flowers were absolutely stunning and lasted much longer than she expected. The customer service was top-notch as well – they were so friendly and helpful when I had a question about my order. <br/> - Jeanette, Regina
</Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Body>The staff were incredibly friendly and knowledgeable, helping me choose the perfect bouquet for a friend's birthday. The flowers were freshly cut and arranged beautifully, making for an unforgettable gift. I appreciated the care and attention put into every detail, and I will definitely be returning to this shop for all my future floral needs. Thank you for creating such a lovely experience! <br/> - Erika, Calgary</Card.Body>
      </Card>
      </Col>
      </Row>
    </div>
    <div className='postComment'>
        
        <Row>
            <Col>
            <h1>Leave a comment</h1>
        <h2>We value your opinion!</h2>
            </Col>
            <Col id='text'>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={5} placeholder='Your comment' ref={ref}/>
      </Form.Group>
      <Button onClick={() => {
        setShow(!show); 
        onClear();
        }}>Post comment</Button>
      
      </Form>
            </Col>
            <Col>
            {show && <h2>Thank you! <br/>Your comment is helping us improve and continue offering great service.</h2>}
            </Col>
        </Row>
    </div>
    </div>
}