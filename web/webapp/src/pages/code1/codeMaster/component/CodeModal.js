import React, {useEffect, useState} from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import axios from "axios";

const CodeModal = ({modal, setModal, clickedData}) => {

  const [values, setValues] = useState({code1: '', name1: '', idx: ''})

  const handleChange = (event) => {
    const {name, value} = event.target
    setValues({...values, [name]: value})
  }
  const toggle = (e, text) => {
    e.preventDefault();
    setModal(!modal)

  }
  const updateAPI = async (e) => {
    const updatedValue = values;
    await axios.post('/code/codeMaster/editFirstClassCode', updatedValue)
    .then((response) => {
      console.log(response.config.data)
      toggle(e)
    })
    .catch((err) => console.log(err));
  }
  const deleteAPI = async (e) => {
    await axios.post('/code/codeMaster/deleteFirstClassCode', values)
    .then((response) => {
      toggle(e)
      console.log('RESPONSE : ' + JSON.stringify(response))
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    setValues(clickedData)
  }, [clickedData])

  return (
      <>
        {/* Sign up Modal */}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>코드수정</ModalHeader>
          {values && JSON.stringify(values)}
          <ModalBody>
            <form className="pl-3 pr-3" action="#">
              <div className="form-group">
                <label htmlFor="username">코드</label>
                <input
                    className="form-control"
                    type="text"
                    name="code1"
                    placeholder="코드를 입력하세요"
                    value={values.code1}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">명칭</label>
                <input
                    className="form-control"
                    type="text"
                    id="emailaddress"
                    name="name1"
                    value={values.name1}
                    required=""
                    placeholder="명칭을 입력하세요"
                    onChange={handleChange}
                />
              </div>
              <p onClick={() => updateAPI()}> API 테스트</p>
              <div className="form-group text-center">
                <button className="btn btn-dark" onClick={(e) => updateAPI(e)}>저장</button>
                {`  `}
                <button className="btn btn-danger" onClick={(e) => deleteAPI(e)}>삭제</button>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </>
  )
}

export default CodeModal;