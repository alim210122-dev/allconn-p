import React,{ } from 'react'
import {
  Card,
  CardBody,
  Col } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const FilterCompanyList = React.memo((props)=> {
    return (
        <>
            <Col lg ={12}>
                <Card>
                    <CardBody>
                        <BootstrapTable
                            bootstrap4
                            keyField="id"
                            data= {props.listData}
                            columns={columns}
                            defaultSorted={defaultSorted}
                            pagination={paginationFactory()}
                            wrapperClasses="table-responsive"
                            hover
                            condensed
                        />
                    </CardBody>
                </Card>
            </Col>
        </>
    );
})


export default React.memo(FilterCompanyList);


const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
    },
    {
        dataField: 'code',
        text: '코드',
        sort: true,
    },
    {
        dataField: 'name',
        text: '회사명',
        sort: false,
    },
];

const defaultSorted = [
    {
        dataField: 'id',
        order: 'asc',
    },
];



