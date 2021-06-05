import React, {useEffect, useState} from 'react';
import {Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane,CardTitle,CardText,Button} from 'reactstrap';
import './app.css';
import InputForm from './InputForm';
import SalesCode from "./SalesCode";
import ProductCodeInputForm from "./ProductCodeInputForm";
import axios from 'axios';

const ProductForm = () => {

    const [salesCode, ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(()=> {

    },[]);

    return(
        <>
            <Row>
                <Col lg={6}>
                    <Card>
                        <CardBody>
                            <Row>
                                <SalesCode />
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <CardBody>
                            <ProductCodeInputForm />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg ={12}>
                    <Card>
                        <CardBody>
                            <Row>
                                <InputForm />
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </>
    )
}


export default ProductForm;

