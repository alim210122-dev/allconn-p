import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import SelectBox from '../../components/ReactSelectSingle';


function AddModal2(props) {


    const {modalState, toggle, options} = props;

    return (
        <Modal isOpen={modalState} toggle={toggle} backdrop={true}> 
            <ModalHeader toggle={toggle}>등록</ModalHeader>
            <ModalBody>
                <form className="pl-3 pr-3" action="#" inline>
                    <div className="form-group" >
                        <label htmlFor="username">대분류</label>
                        <SelectBox name = "selectCls" options = {options} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addCode">코드</label>
                        <input
                            className="form-control"
                            type="text"
                            id="addCode"
                            required=""
                            placeholder=""
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="addName">명칭</label>
                        <input
                            className="form-control"
                            type="text"
                            id="addName"
                            required=""
                            placeholder=""
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="etc">비고</label>
                        <input
                            className="form-control"
                            type="text"
                            id="etc"
                            required=""
                            placeholder=""
                        />
                    </div>

                    <div className="form-group text-center">
                        <button className="btn btn-primary" type="submit">
                            저장
                        </button>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    )
}

export default AddModal2

