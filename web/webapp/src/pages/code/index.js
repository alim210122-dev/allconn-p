import React ,{useState,useEffect} from "react"
import PageTitle from '../../components/PageTitle';
import axios from 'axios';
import {Row,Col} from 'reactstrap';
import './main.css';
import SearchForm from './SearchForm';
import ClsTableFirst from './ShowMainClassTable';
import ClsTableSecond from './ShowSubClassTable';
import initData, {ContextData} from './ContextData';



const Index = () => {


    const [raws, setRaws] = useState(initData);
    const [firstFilterText, setFirstFilterText] = useState();
    const [apiTest, setApiTest] = useState();

    // 첫 번째 필터 리스트 
    const changeFilterData = (v) => {
        setFirstFilterText(v)
    }

    const value = React.useMemo(() => ({
        raws,
        firstFilterText,
        changeFilterData,
        apiTest,
    }), [raws,firstFilterText,apiTest])

    console.log('index 테이블 Render')


    const apiCode1 = () => {
        console.log('Axios 실행')
        axios.get('http://localhost:3065/api/code-master').then((response) => {
            setApiTest(response.data.code_m)
        });
    }

    

    return (
        <ContextData.Provider value = {value} >
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/validation' },
                    { label: 'Form Validation', path: '/forms/validation', active: true },
                ]}
                title={'코드관리'}
            />
            <Row>
                {JSON.stringify(apiTest)}
                <Col lg={12}>
                    <SearchForm />
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <ClsTableFirst />
                </Col>
                <Col lg={3}>
                    <ClsTableSecond />
                </Col>
                <Col lg={3}>
                    <ClsTableSecond />
                </Col>
                <Col lg={3}>
                    <ClsTableSecond />
                </Col>
            </Row>
        </ContextData.Provider>
    )
}

export default Index;

