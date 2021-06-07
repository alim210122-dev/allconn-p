import React from 'react'
import {Button, Card, CardBody, Col, Row} from 'reactstrap';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import * as REDUX_FUNC from 'redux/partnerCompany/partner';

const SearchForm = () => {

  const {companyInformation} = useSelector(
      state => ({companyInformation: state.partnerCode}),
      shallowEqual
  );

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  const setInitData = () => dispatch(REDUX_FUNC.setInitData());
  const apiTestFunction = () => dispatch(REDUX_FUNC.getCompanyList());

  return (
      <>
        <Col lg={12}>
          <Card>
            <CardBody>
              <Row>
                <Col lg={3}>
                  <div className="button-list">
                    <Button onClick={() => setInitData()}>초기화</Button>
                    <Button onClick={() => apiTestFunction()}>검색</Button>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </>
  )

}

export default SearchForm;