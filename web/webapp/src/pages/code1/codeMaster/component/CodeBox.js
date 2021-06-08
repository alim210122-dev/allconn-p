import {Button, Card, CardBody, Input, InputGroup, InputGroupAddon, Table} from "reactstrap";
import React, {useState} from "react";
import PropTypes from 'prop-types';
import CodeModal from "./CodeModal";

const CodeBox = ({data}) => {

  const [modal, setModal] = useState(false)
  const [clickedData, setClickedData] = useState([])

  const onClickModal = (e, v) => {
    e.preventDefault();
    setModal(!modal)
    setClickedData(v)
  }

  return (
      <>
        <Card>
          <CodeModal modal = {modal} setModal = {setModal} clickedData={clickedData} />
        </Card>
        <Card>
          <CardBody>
            <div className="container">
              <div className="row">
                <div className="col">
                  <InputGroup size="sm">
                    <Input placeholder="검색어 입력"/>
                    <InputGroupAddon addonType="prepend">
                      <Button outline color="secondary">조회</Button>
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
                      <tr key={v.companyName} onClick={(e) => onClickModal(e, v)}>
                        <td className={v.companyCls}>{v.companyCls}</td>
                        <td className={v.companyName}>{v.companyName}</td>
                        <td className={v.contactNum}>{v.contactNum}</td>
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
