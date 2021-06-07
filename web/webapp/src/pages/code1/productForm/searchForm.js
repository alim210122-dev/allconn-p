import React ,{useState} from 'react';
import {Row, Col, Input, Label, } from 'reactstrap';
import Select from 'react-select';
import {setFilterWordFirst} from 'redux/productCode/reducers';
import {useDispatch} from "react-redux";






const SearchForm = (props) => {


    const filterData = props.filterData;
    const filterEvent = props.filterEvent;
    const handleCode = props.handleCode;
    const settingInitData = props.settingInitData;
    const setFilterDataProduct = props.setFilterDataProduct;

    //Redux Dispatch 정의하기
    const dispatch = useDispatch();

    const changeFilterData = (e) => {
        filterEvent(e.value)
    }

    const searchData = () => {
        settingInitData()   // 필터 내역을 초기화 한다.
        const text = filterData
        handleCode(text)
    }

    const handleFilterDataProduct = (e) => {
        setFilterDataProduct(e.target.value)
    }

    const handleFilterDataFirst = (e) => {
        if(e.target.value == ''){
            dispatch(setFilterWordFirst(null));
        }else{
            dispatch(setFilterWordFirst(e.target.value));
        }
    };


    return(
        <div>
            <Row>
                <Col lg={2}>
                    <Label for="test2">거래처</Label>
                    <Select name ="test2"
                            options = {props.data}
                            onChange ={(e)=>changeFilterData(e)}
                    />
                </Col>
                <Col lg={2}>
                    <Label for="test2">제품명</Label>
                    <Input name ="test2"
                           options = {props.data}
                           onChange ={(e)=>handleFilterDataProduct(e)}
                    />
                </Col>
                <Col lg={2}>
                    <Label for="test2">전체검색</Label>
                    <Input name ="test2"
                           options = {props.data}
                           onChange ={(e)=>handleFilterDataFirst(e)}
                           style={{background:"#fdffde"}}
                    />
                </Col>
                <Col lg ={1}>
                    <Label for="dddd" style={{color:"white"}}>거래처</Label>
                    <Input name="dddd" type="button" value="조회" onClick={searchData} />
                </Col>
                <Col lg ={1}>
                    <Label for="dddd" style={{color:"white"}}>거래처</Label>
                    <Input name="dddd" type="button" value="신규" onClick={searchData} />
                </Col>
                <Col lg ={1}>
                    <Label check>
                        <Input type="checkbox" /> 폐기 포함
                    </Label>
                </Col>

                <Col lg ={8}>

                </Col>
            </Row>
        </div>
    )
}

export default SearchForm ;