import React from 'react'
import {
  Card,
  CardBody,
  Col,
  Row,
  Button } from 'reactstrap';

const SearchForm = (props) => {

    return (
        <>
            <Col lg ={12}>
                <Card>
                    <CardBody>
                        <Row>
                            <Col lg ={3}>
                                <div className="button-list">
                                  <Button onClick={props.hamsu} >검색</Button>   
                                  <Button >신규등록</Button>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </>
    )

}

export default SearchForm;