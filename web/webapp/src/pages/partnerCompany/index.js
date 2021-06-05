// 기능 추가
import React, {useState, } from 'react';
import PageTitle from '../../components/PageTitle';
import {    Row,Col,} from 'reactstrap';
import { useSelector, useDispatch ,shallowEqual } from 'react-redux';
import axios from "axios";


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

    const AxiosApi = () => {
        const url = "/api/company/alim/partner";
        const header = {
            headers: {
                Authorization: `eyJyZWdEYXRlIjoxNjIyNzg0MzUyMTYzLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJleHAiOjE2MjUzNzYzNTIsImVtYWlsIjoicm9wZXplQGdtYWlsLmNvbSJ9.eT37kOIm-lswh9jelaPMFxB2xf_NJRV5SedMjcVIPWg`
            }
        }
        axios.get(url, header)
            .then(function(response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function(error) {
                console.log("실패");
            })
    }

    AxiosApi();




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