import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Facet_value from "./Facet_value";

function Facet({name, values, updateCategory}){
    return (<>
    <Row>
        <Col>
        {name}
        </Col>
        </Row>
        {values.map(value => (<Row>
            <Facet_value name={value.name} updateCategory={updateCategory} facet={name}/>
        </Row>))}
        </>)
}
export default Facet;
