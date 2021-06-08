import React, {useState} from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";

const CodeModal = ({modal, setModal, clickedData}) => {


  const [values , setValues] = useState(clickedData)
  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }
  const toggle = () => {
    setModal(!modal)
  }

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
                    name="companyName"
                    placeholder="Michael Zenaty"
                    value={values.companyName}
                    onChange={handleChange}
                />
              </div>
              <div>

              </div>
              <div className="form-group">
                <label htmlFor="name">명칭</label>
                <input
                    className="form-control"
                    type="text"
                    id="emailaddress"
                    required=""
                    placeholder="john@deo.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="remark">비고</label>
                <input
                    className="form-control"
                    type="text"
                    required=""
                    id="password"
                    placeholder="Enter your password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                  <label className="custom-control-label" htmlFor="customCheck1">
                    I accept <a href="/">Terms and Conditions</a>
                  </label>
                </div>
              </div>

              <div className="form-group text-center">
                <button className="btn btn-primary" type="submit">
                  Sign Up Free
                </button>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </>
  )
}

export default CodeModal;