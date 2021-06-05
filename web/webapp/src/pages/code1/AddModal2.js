import React ,{useState} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';
import {insertCodeData} from './api';


const insertHandle = () => {
    alert('insert버튼을 누르셨습니다.')
}


function AddModal2(props) {
    const {modalState, toggle,data, level} = props;
    const [inputs, setInputs] = useState({});
    const [errorMsg, setError] = useState({});
    const [errorMsg2, setError2] = useState({});
    const onChange = e => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value.toUpperCase() // name 키를 가진 값을 value 로 설정
        });


        // 첫 번째 Error Msg 관리
        const c = data.filter((v)=>{return v.code1 === e.target.value}).length;
        if(c>0){
            setError({msg1 :'이미 존재하는 코드입니다.'});
            setInputs({
                ...inputs,
                addCode : '' 
            });

        }else{
            setError({msg1 :''});
        }

        // 두 번째, error 관리하기
        const d = data.filter((v)=>{return v.name1 === e.target.value}).length;
        if(d>0){
            setError2({msg2 :'이미 존재하는 명칭입니다.'});
            setInputs({
                ...inputs,
                addName : '' 
            });
        }else{
            setError2({msg2 :''});
        }

    };

    return (
        <Modal isOpen={modalState} toggle={toggle} backdrop={true}> 
            <ModalHeader toggle={toggle}>등록</ModalHeader>
            {/* {JSON.stringify(inputs)} */}
            {JSON.stringify(props)}
            <ModalBody>
                <form className="pl-3 pr-3" action="#">
                    <div className="form-group">
                        <label htmlFor="addCode">코드</label>
                        <input
                            className="form-control"
                            type="text"
                            id="addCode"
                            name = "addCode"
                            value = {inputs.addCode}
                            required=""
                            placeholder=""
                            onChange = {onChange}
                            style = {{backgroundColor : (errorMsg.msg1) ? '#f5cece' : ''}}
                        />
                        {errorMsg.msg1 && <p style={{color:"red"}}><b>이미 존재하는 코드입니다.</b></p> }
                    </div>
                    <div className="form-group">
                        <label htmlFor="addName">명칭</label>
                        <input
                            className="form-control"
                            type="text"
                            id="addName"
                            name = "addName"
                            value = {inputs.addName}
                            required=""
                            placeholder=""
                            onChange = {onChange}
                            style = {{backgroundColor : (errorMsg2.msg2) ? '#f5cece' : ''}}
                        />
                        {errorMsg2.msg2 && <p style={{color:"red"}}><b>이미 존재하는 명칭입니다.</b></p> }
                    </div>
                    <div className="form-group text-center">
                        {errorMsg.msg1 === '' && errorMsg2.msg2 === ''
                            ? <button className="btn btn-primary"  onClick ={() => insertHandle()}>저장</button>
                            : null}
                    </div>
                </form>
            </ModalBody>
        </Modal>
    )
}

export default AddModal2

