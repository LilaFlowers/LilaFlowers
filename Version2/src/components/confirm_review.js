import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class confirm_review extends React.Component {
    state = {
        divcontainer:false,
    }
    render(){
        var Handlechange = e => {
            this.setState({divcontainer:!this.state.divcontainer});
        }
        const x = this.state.divcontainer;
    
    return (
        <div>
    <Row>
            <Col>
            <h1>Leave a comment</h1>
        <h2>We value your opinion!</h2>
            </Col>
            <Col id='text'>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={5} placeholder='Your comment'/>
      </Form.Group>
      <Button onClick={Handlechange} type="submit">{x?'Leave another comment':'Post comment'}</Button>
      {
        x && (<div>testttt</div>)
      }
      </Form>
            </Col>
            <Col>
            </Col>
        </Row>
        </div>
    );
}}
export default confirm_review;