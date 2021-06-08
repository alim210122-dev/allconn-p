import React, {useEffect} from 'react';
import {Card, CardBody, Col, Row} from 'reactstrap';
import './app.css';
import InputForm from './InputForm';
import SalesCode from "./SalesCode";
import ProductCodeInputForm from "./ProductCodeInputForm";

const ProductForm = () => {

    useEffect(() => {

    }, []);

    return (
        <>
            <Row>
                <Col lg={6}>
                    <Card>
                        <CardBody>
                            <Row>
                                <SalesCode/>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <CardBody>
                            <ProductCodeInputForm/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Card>
                        <CardBody>
                            <Row>
                                <InputForm/>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default ProductForm;

