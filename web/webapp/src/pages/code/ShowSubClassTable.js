import React , {useContext, useState, useEffect} from 'react'
import {Card,CardBody,Button,Row} from 'reactstrap';
import { Table , Badge, InputGroup, InputGroupAddon, Input, Col} from 'reactstrap';
import {ContextData} from './ContextData';

function ShowTable2() {

    const {raws,firstFilterText} = useContext(ContextData);
    const classC = raws.classC;
    const [tableData, setTableData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const changeTableData = () => {
      const aaa = classC.filter(v => v.name_main.includes(firstFilterText))
      setTableData(aaa)
      setFilteredData(aaa)
    }

    const filterTableData = (e) => {
      const aaa = tableData.filter(v => v.name_sub.includes(e.target.value))
      setFilteredData(aaa)
    }



    console.log('두번째 테이블 Render')

    useEffect(() => {
      changeTableData()
      // alert(firstFilterText)
    }, [firstFilterText]);


    return (
      <Card>
        <CardBody>
            <Row>
              <Col >
                <InputGroup size="sm">
                <Input placeholder={firstFilterText}  readOnly />
                  <Input onChange={filterTableData} placeholder="검색어 입력" />
                  <InputGroupAddon addonType="prepend">
                    <Button outline color="secondary" disabled="disabled">등록</Button>
                  </InputGroupAddon>
                </InputGroup>
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
                {filteredData.map((v,i)=> {
                  return (
                    <tr key={i} > 
                      <td>{i+1}</td>
                      <td>{v.code_sub}</td>
                      <td>{v.name_sub}</td>
                      <td>
                        <Badge color="dark"    style={{cursor: "pointer"}}  pill>수정</Badge>
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

export default ShowTable2;

