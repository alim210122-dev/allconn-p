import React, {useState} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane,CardTitle,CardText,Button} from 'reactstrap';
import SearchForm from "./searchForm";
import ShowMainCode from "./showMainCode";
import ShowSubCode from "./showSubCode";
import ShowInputForms from "./showInputForms";
import {filterMainCode, setInitialData} from 'redux/productCode/reducers';

import './app.css';



const filterArrayEvent = (arrayValue) => {
    const ArraySample = [];
    const newTestArray = arrayValue.map(function(obj) {
        const filteredObj = {};
        Object.assign(filteredObj, {value : obj.companyCode, label: obj.companyName});
        ArraySample.push(filteredObj)
    });
    const filteredArray = [...new Set(ArraySample.map(JSON.stringify))].map(JSON.parse);
    return filteredArray;
};


const testEvent = (v) => {
    console.log(v);
}


const ProductForm = () => {

    const [filterData, setFilterData] =useState();
    const [filterDataProduct, setFilterDataProduct] = useState();
    const { companyData, mainCode,subCode,sampleCode} = useSelector(
        state => ({
            companyData : state.productCode.companyData,
            mainCode : state.productCode.mainCode,
            subCode : state.productCode.subCode,
            sampleCode: state.productCode.sampleCode,
        }),
        shallowEqual
    );
    const dispatch = useDispatch();
    // 각 액션들을 디스패치하는 함수들을 만드세요
    const handleCode = (text) => dispatch(filterMainCode(text));
    const settingInitData = () => dispatch(setInitialData());
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }



    return(
        <>
            <br />
            <Card>
                <CardBody>
                    <Row >
                        <Col lg={12}>
                            <SearchForm data = {filterArrayEvent(sampleCode)}
                                        sampleCode = {sampleCode}
                                        filterData = {filterData}
                                        filterEvent = {setFilterData}
                                        handleCode = {handleCode}
                                        settingInitData = {settingInitData}
                                        setFilterDataProduct = {setFilterDataProduct}
                            />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Row>
                        <Col lg={12}>
                            <ShowSubCode />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Row>
                        <Col lg={12}>
                            <ShowMainCode
                                data = {mainCode}
                                filter = {setFilterData}
                                filterData = {filterData}
                                sampleCode = {sampleCode}
                                filterDataProduct  ={filterDataProduct}
                            />
                        </Col>
                    </Row>
                </CardBody>
            </Card>

        </>
    )
}


export default ProductForm;

