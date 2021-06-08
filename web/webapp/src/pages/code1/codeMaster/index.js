import React, {useState} from "react"
import {Col, Row} from 'reactstrap';
import CodeProvider from "./context/Code.Provider";
import CodeBox from './component/CodeBox';
import Test from './component/Test';



const Index = () => {


  return (
      <>
        <CodeProvider>
          <br/><br/>
          <Row>
            <Col lg={3}>
              <CodeBox  />
            </Col>
            <Col lg={3}>
              <Test />
            </Col>
            <Col lg={3}>
              1
            </Col>
            <Col lg={3}>
              1
            </Col>
          </Row>
        </CodeProvider>

      </>

  )
}

export default Index;

