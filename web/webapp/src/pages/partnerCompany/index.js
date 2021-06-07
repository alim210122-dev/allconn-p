// 기능 추가
import React, {useState,useEffect } from 'react';
import PageTitle from '../../components/PageTitle';
import {    Row,Col,} from 'reactstrap';
import { useSelector, useDispatch ,shallowEqual } from 'react-redux';
import axios from "axios";
import * as API from './api';

// 컴포넌트 추가
import SearchForm from './SearchForm';
import FilterCompanyList from './FilterCompanyList';
import CompanyAddForm from './CompanyAddForm';

const MainForm = () => {

    /* Reducer의 State 값 가져오기  */
    const { companyList, slimCompanyList } = useSelector(state => ({
        companyList : state.Company.companyList,
        slimCompanyList : state.Company.slimCompanyList,
    }),shallowEqual );

    const [list, setList] = useState(companyList);
    const [filterData, setFilterData] = useState(slimCompanyList);


    const showCompanyList = () => {
        const filteredList = [];
        const newList = list.map(function(obj){
            const emptyArray = {};
            Object.assign(emptyArray, {id: obj.idx, code: obj.companyCode, name: obj.companyName});
            filteredList.push(emptyArray)
        });

        setFilterData(filteredList);
        return filteredList;
    }

    ;

    useEffect(() => {

        return () => {

        }
    }, []);




    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/validation' },
                    { label: 'Form Validation', path: '/forms/validation', active: true },
                ]}
                title={'거래처 관리'}
            />
            <Row>
                <SearchForm hamsu={showCompanyList}  />
            </Row>
            <Row>
                <Col lg={12}>
                    <CompanyAddForm />
                    <FilterCompanyList listData = {filterData} />
                </Col>
            </Row>
        </>

    )

}

export default MainForm;