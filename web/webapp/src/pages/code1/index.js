import React,{useState}  from "react"
import PageTitle from '../../components/PageTitle';
import {Row,Col} from 'reactstrap';
import { UsersProvider } from './UsersContext';
import Code1 from './Code1';
import Code2 from './Code2';

// https://react.vlpt.us/integrate-api/05-using-with-context.html




const Index = () => {

    // 필터 데이터
    const [filter1, setFilter1] = useState(false);
    const [filter2, setFilter2] = useState(false);

    return (
        <UsersProvider>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/validation' },
                    { label: 'Form Validation', path: '/forms/validation', active: true },
                ]}
                title={'코드관리(1)'}
            />
            <Row>
              {'filter1: '+JSON.stringify(filter1)}
            </Row>
            <Row>

                <Col lg={3}>
                    <Code1 setFilter1 = {setFilter1} />
                </Col>
                <Col lg={3}>
                    <Code2 filterText = {filter1} setFilter = {setFilter1} />
                </Col>
                <Col lg={3}>
                    <Code1 />
                </Col>
                <Col lg={3}>
                    <Code1 />
                </Col>
            </Row>
        </UsersProvider>

    )
}

export default Index;

