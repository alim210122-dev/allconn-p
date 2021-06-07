import React, { useState,useEffect } from 'react';
import { Table,Col ,Row, Badge, InputGroup, InputGroupAddon, Input} from 'reactstrap';
import {Card,CardBody,Button} from 'reactstrap';
import AddModal from './AddModal2';
import {getCode2} from './api';


const Users = (props) => {




  // Modal State
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {filterText, setFilter} = props;
  const [tableData, setTableData] = useState(false);
  

  const fetchData = async() => {
    const res = await getCode2(filterText.code1);
    console.log(res.data.code_m);
    setTableData(res.data.code_m);
  }


  const delEvent = () => {
    alert('삭제 버튼을 클릭하였습니다.')
  }


  useEffect(() =>{
    console.log('useEffect를 통해 값불러오기')
	},[filterText]);

  return (
    <>
      <Card>
        <CardBody>
        {/* {JSON.stringify(tableData)} */}
            <Row>
              <Col >
                <InputGroup size="sm">
                  <Input  placeholder="검색어 입력" />
                  <InputGroupAddon addonType="prepend">
                    <Button outline color="secondary"  onClick={fetchData}>조회</Button>
                    {filterText.code2 && <Button outline color="secondary" onClick={toggle} >등록</Button>}
                    <AddModal  modalState = {modal} toggle = {toggle}  data = {tableData} filter = {filterText} level ='2' />
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
                  <th>코드</th>
                  <th>명칭</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tableData && filterText && tableData.map((v)=> {
                    return (
                      <tr key={v.idx} onClick ={()=>setFilter({...filterText,code2 :v.code2, name2:v.name2})} >
                        <td className={v.name2}>{v.code2}</td>
                        <td className={v.name2}>{v.name2}</td>
                        <td>
                          <Badge color="dark"    style={{cursor: "pointer"}}  pill  >수정</Badge>
                          <Badge color="danger"  style={{cursor: "pointer"}}  pill onClick = {() => delEvent(v.idx)}>삭제</Badge>
                        </td>
                      </tr>
                    )
                })} 
              </tbody>
            </Table>                
        </CardBody>
      </Card>
    </>
  );
}

export default Users;
