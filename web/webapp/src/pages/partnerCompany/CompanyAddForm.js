// @flow
import React, {useState, useRef } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import {
    Row,
    Col,
    Card,
    CardBody,
    Input,
    FormGroup,
    Label,
    InputGroup,
} from 'reactstrap';
import './main.css';
import bizNoFormatter from './bizNoFormatter';


const CompanyAddForm = () => {

    const [inputs, setInputs] = useState({});

    /* Reducer의 State 값 가져오기  */
    const { companyOptions} = useSelector(state => ({
        companyOptions : state.Company.companyClsOptions,
    }),shallowEqual );

    const { companyCls, companyName,companyCode,partnerCode,businessNumber,ceoname,contactNum,address,managerName,managerPhone,managerEmail,startDate, endDate ,useYN,realAddress} = inputs; // 비구조화 할당을 통해 값 추출
    const onChange = e => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출

        if(name === "businessNumber"){
            const newValue = bizNoFormatter(value,1);
            setInputs({
                ...inputs, // 기존의 input 객체를 복사한 뒤
                [name]: newValue // name 키를 가진 값을 value 로 설정
            });
        } else{
            setInputs({
                ...inputs, // 기존의 input 객체를 복사한 뒤
                [name]: value // name 키를 가진 값을 value 로 설정
            });
        }
    };

    const nameInput = useRef();


    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <CardBody>
                                {JSON.stringify(inputs)}
                                <form>
                                    <FormGroup>
                                        <Row form>
                                            <Col md={2}>
                                                <Label for="companyCls">거래처 유형</Label>
                                                <Input type="select" name ="companyCls"  onChange={onChange} value={companyCls} ref={nameInput} required>
                                                    <option value="" ></option>
                                                    {companyOptions.map(v => {
                                                        return (<option key = {v.idx} value={v.code}>{v.name}</option>)
                                                    })}
                                                </Input>
                                            </Col>
                                            <Col md={6}>
                                                <Label for="companyName" style={{color : 'white'}}>거래처 등록</Label>
                                                <InputGroup>
                                                    <Input type ="text" placeholder="업체명"        name ="companyName"     onChange={onChange} value={companyName}   />
                                                    <Input type ="text" placeholder="업체코드"      name ="companyCode"     onChange={onChange} value={companyCode}   />
                                                    <Input type ="text" placeholder="파트너코드"    name ="partnerCode"     onChange={onChange} value={partnerCode}  />
                                                </InputGroup>
                                                
                                            </Col>
                                            <Col md={4}>
                                                <Label for="businessNumber" style={{color : 'white'}}>거래처 등록</Label>
                                                <Input 
                                                        type ="text" 
                                                        placeholder="사업자번호" 
                                                        name = "businessNumber"
                                                        onChange = {onChange}
                                                        value={businessNumber} 
                                                />
                                            </Col>  
                                        </Row>
                                        <Row form>
                                            <Col md={3}>
                                                <FormGroup>
                                                    <Label for="ceoname">대표자명</Label>
                                                    <Input type ="text" placeholder="대표자명"      name ="ceoname"         onChange={onChange} value={ceoname}   />
                                                </FormGroup>
                                            </Col>
                                            <Col md={3}>
                                                <FormGroup>
                                                    <Label for="contactNum">연락처</Label>
                                                    <Input type ="text" placeholder="대표번호"      name ="contactNum"     onChange={onChange} value={contactNum}   />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="address">주소</Label>
                                                    <Input type ="text" placeholder="주소"          name ="address"         onChange={onChange} value={address}  />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={3}>
                                                <FormGroup>
                                                    <Label for="managerName">담당자</Label>
                                                    <Input type ="text" placeholder="담당자명"       name ="managerName"         onChange={onChange} value={managerName}   />
                                                </FormGroup>
                                            </Col>
                                            <Col md={3}>
                                                <FormGroup>
                                                    <Label for="managerPhone">담당연락처</Label>
                                                    <Input type ="text" placeholder="담당연락처"     name ="managerPhone"     onChange={onChange} value={managerPhone}   />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="managerEmail" >담당자(Email)</Label>
                                                    <Input type ="email" placeholder="담당자(Email)"  name ="managerEmail"         onChange={onChange} value={managerEmail}  />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        
                                        <Row form>
                                            <Col md={3}>
                                                <Label for="useYN" >거래유무</Label>
                                                <InputGroup>
                                                    <Input type="select" name ="useYN"  onChange={onChange} value={useYN} required>
                                                            <option></option>
                                                            <option value="yes">거래중</option>
                                                            <option value="no">거래종료</option>
                                                    </Input>
                                                </InputGroup>
                                            </Col>
                                            <Col md={5}>
                                                <Label for="startDate" >거래일 (최초/최종)</Label>
                                                <InputGroup>
                                                    <Input type ="date" placeholder="최초거래일"        name ="startDate"       onChange={onChange} value={startDate}   />
                                                    <Input type ="date" placeholder="최종거래일"        name ="endDate"         onChange={onChange} value={endDate}   />
                                                </InputGroup>
                                            </Col>
                                            <Col md={4}>
                                                <Label for="realAddress" >사업장 주소</Label>
                                                <InputGroup>
                                                    <Input type ="text" placeholder="사업장 주소"        name ="realAddress"       onChange={onChange} value={realAddress}   />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <Input type="submit" style={{ backgroundColor: "#3b383d", color : 'white', bold:"true"}} />
                                </form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CompanyAddForm;