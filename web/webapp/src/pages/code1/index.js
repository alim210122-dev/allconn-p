import React from "react"
import {Col, Row} from 'reactstrap';
import Code1 from './Code1';


const Index = () => {

  return (
      <>
        <br/><br/>
        <Row>
          <Col lg={3}>
            <Code1/>
          </Col>
          <Col lg={3}>
            <Code1/>
          </Col>
          <Col lg={3}>
            <Code1/>
          </Col>
          <Col lg={3}>
            <Code1/>
          </Col>
        </Row>
      </>

  )
}

export default Index;

