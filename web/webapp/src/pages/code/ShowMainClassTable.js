import React , {useContext, useState,useEffect} from 'react'
import {Card,CardBody,Button} from 'reactstrap';
import { Table,Col ,Row, Badge, InputGroup, InputGroupAddon, Input} from 'reactstrap';
import {ContextData} from './ContextData';





function ShowTable1() {

  const {raws,searchText,changeFilterData,apiTest} = useContext(ContextData);
  const [tableData, setTableData] = useState(raws.classA);
  const [codeTable, setCodeTable] = useState(apiTest);


  const handleFilter = (e) => {
    const aaa = raws.classA.filter(v=> v.name.includes(e.target.value))
    setTableData(aaa)   
    changeFilterData(e.target.value)
  }

  const changeEvent = (name) => {
    changeFilterData(name)
  }

  console.log('첫번째 테이블 Render')
  
  return (

          <Card>
            <CardBody>
                <Row>
                  <Col >
                    <InputGroup size="sm">
                      <Input  onChange={handleFilter} placeholder="검색어 입력" />
                      <InputGroupAddon addonType="prepend">
                        <Button outline color="secondary">등록</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                  {JSON.stringify(codeTable)}
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
                    {codeTable && codeTable.map((v)=>{
                      return(
                        <tr>
                          <td>{v.idx}</td>
                        </tr>
                      )                      
                    })}      
              
                    {tableData.map((v)=> {
                      return (
                        <tr key={v.idx} onClick = {()=>changeEvent(v.name)}  >
                          <td className={v.name}>{v.idx}</td>
                          <td className={v.name}>{v.code}</td>
                          <td className={v.name}>{v.name}</td>
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
  )
}

export default ShowTable1;

