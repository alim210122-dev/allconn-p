import React , {useContext, useState,useEffect} from 'react'
import {Card,CardBody,Button} from 'reactstrap';
import { Table,Col ,Row, Badge, InputGroup, InputGroupAddon, Input} from 'reactstrap';
import { useUsersState, useUsersDispatch, getCode1 } from './UsersContext';



function ShowTable1() {

  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: code1, loading, error } = state.code1;
  const fetchData = () => {
    getCode1(dispatch);
  };

  const [tableData, setTableData] = useState(code1.code_m);

  console.log('첫번째 테이블 Render')
  
  return (
      <>
          <Card>
            <CardBody>
                <Row>
                  <Col >
                    <InputGroup size="sm">
                      <Input  placeholder="검색어 입력" />
                      <InputGroupAddon addonType="prepend">
                        <Button outline color="secondary">등록</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col >
                  </Col>
                </Row>
                <br />
                <Table size="sm" hover>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>코드</th>
                      <th>명칭</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((v)=> {
                      return (
                        <tr key={v.idx} >
                          <td className={v.name1}>{v.idx}</td>
                          <td className={v.name1}>{v.code1}</td>
                          <td className={v.name1}>{v.name1}</td>
                          <td>
                            <Badge color="dark"    style={{cursor: "pointer"}}  pill >수정</Badge>
                            <Badge color="danger"  style={{cursor: "pointer"}}  pill>삭제</Badge>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>                
            </CardBody>
          </Card>
      </>
          
  )
}

export default ShowTable1;

