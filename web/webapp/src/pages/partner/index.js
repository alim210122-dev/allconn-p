// 기능 추가
import React, {useState, } from 'react';
import PageTitle from '../../components/PageTitle';
import {    Row,Col,} from 'reactstrap';
import { useSelector, useDispatch ,shallowEqual } from 'react-redux';

// 컴포넌트 추가
import ShowTable from './ShowTable';
import CompanyAddForm from './CompanyAddForm';

const MainForm = () => {

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
                <Col lg={12}>
                    <CompanyAddForm />
                    <ShowTable />
                </Col>
            </Row>
        </>
    )

}

export default MainForm;