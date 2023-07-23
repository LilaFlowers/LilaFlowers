import React, {useState} from 'react';
import {DatePicker} from "antd";
import Form from 'react-bootstrap/Form';


function DeliveryForm() {
  const [date, setDate] = useState(new Date());
  function onChange(date, dateString) {
    setDate(date);
  }
  return (
    <div>
      <p>
      Select the desired delivery date <br/></p>
      <div className='datePick'>
      <DatePicker onChange={onChange}/>
      </div>
    <Form>
      <Form.Group>
        <Form.Control as="textarea" rows={5} placeholder='GIFT MESSAGE + SIGNATURE'/>
      </Form.Group>
    </Form>
    </div>
  )
}

export default DeliveryForm
