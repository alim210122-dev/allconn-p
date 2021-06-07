import React, { useState,useEffect } from 'react';
import { Table,Col ,Row, Badge, InputGroup, InputGroupAddon, Input} from 'reactstrap';
import {Card,CardBody,Button} from 'reactstrap';
import AddModal from './AddModal';
import axios from 'axios';

const Users = (props) => {

  const {setFilter1} = props;


  // Modal State
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [code1, setCode1] = useState(false);
  
  const fetchData = async () => {
    await axios.get('http://localhost:3065/code/getCode1')
    .then((res)=>{
      setCode1(res.data.code_m);
    }).catch((error)=> {
      console.log(error);
    });
  };


  const apiDelete = async (num) => {
    await axios.post('/code/deleteCode1', {idx : num})
    .then((res)=>{
      console.log(res.status);
      console.log(res);
    })
    .then(()=>{
      fetchData();
    })
    .catch((error)=> {
      console.log(error);
    });
  };

  const delEvent = async (num) => {
    await apiDelete(num)
  }

  useEffect(() =>{
    console.log('useEffect를 통해 값불러오기')
	},[code1]);

  return (
    <>
      <Card>
        <CardBody>
        {/* {JSON.stringify(props)} */}
            <Row>
              <Col >
                <InputGroup size="sm">
                  <Input  placeholder="검색어 입력" />
                  <InputGroupAddon addonType="prepend">
                    <Button outline color="secondary"  onClick={fetchData}>조회</Button>
                    {code1 && <Button outline color="secondary" onClick={toggle} >등록</Button>}
                    <AddModal  modalState = {modal} toggle = {toggle}  data = {code1} />
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
                {code1 && code1.map((v)=> {
                    return (
                      <tr key={v.idx} onClick ={()=>setFilter1({code1: v.code1, name1 : v.name1})} >
                        <td className={v.name1}>{v.code1}</td>
                        <td className={v.name1}>{v.name1}</td>
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
