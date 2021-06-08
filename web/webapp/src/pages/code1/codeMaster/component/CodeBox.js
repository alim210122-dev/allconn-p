import {Button, Card, CardBody, Input, InputGroup, InputGroupAddon, Table} from "reactstrap";
import React, {useState} from "react";
import PropTypes from 'prop-types';
import axios from "axios";

import CodeModal from "./CodeModal";

const CodeBox = () => {

  const [modal, setModal] = useState(false)
  const [buttonMode , setButtonMode] = useState(null)
  const [data, setData] = useState([])
  const [clickedData, setClickedData] = useState([])

  const onClickModal = (e, v) => {
    e.preventDefault();
    setModal(!modal)
    setClickedData(v)
  }

  const onClickSearchButton = async () => {
    console.log('버튼을 클릭하였습니다.')
    await axios
    .get(`/code/codeMaster/getFirstClassCode`)
    .then((response) => {
      console.log('API 조회가 성공하였습니다.')
      setData(response.data.data);
    })
    .catch((err) => console.log(err));
  }


  return (
      <>
        <Card>
          <CodeModal modal={modal} setModal={setModal} clickedData={clickedData}/>
        </Card>
        <Card>
          <CardBody>
            <div className="container ml-0 mb-3 p-0">
              <div className="row">
                <div className="col">
                  <InputGroup size="sm">
                    <Input placeholder="검색어 입력"/>
                    <InputGroupAddon addonType="prepend">
                      <Button outline color="secondary" onClick={() => onClickSearchButton()}>조회</Button>
                      <Button outline color="secondary" >추가</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>
            </div>
            <div className="row">
              <Table size="sm" hover>
                <thead>
                <tr>
                  <th>코드</th>
                  <th>명칭</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                {data && data.map((v) => {
                  return (
                      <tr key={v.code1} onClick={(e) => onClickModal(e, v)}>
                        <td className={v.code1}>{v.code1}</td>
                        <td className={v.code1}>{v.name1}</td>
                        <td>빈칸</td>
                      </tr>
                  )
                })}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </>
  );
}

export default CodeBox;

CodeBox.propTypes = {
  data: PropTypes.array,
}
