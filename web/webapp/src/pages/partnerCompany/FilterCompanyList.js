import React from 'react'
import {Card, CardBody, Col, Table} from 'reactstrap';
import {shallowEqual, useSelector} from 'react-redux';

const FilterCompanyList = React.memo((props) => {

  const {tableData} = useSelector(
      state => ({tableData: state.partnerCode.companyList}),
      shallowEqual
  );

  return (
      <>
        <Col lg={12}>
          <Card>
            <CardBody>
              <Table>
                <tr>
                  <td>회사코드</td>
                  <td>회사명</td>
                </tr>
                <tbody>
                {tableData && tableData.map((v) => {
                  return (
                      <tr>
                        <td>{v.companyCode}</td>
                        <td>{v.companyName}</td>
                      </tr>
                  )
                })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </>
  );
})

export default React.memo(FilterCompanyList);

