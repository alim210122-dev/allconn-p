import React, {useState} from 'react'
import {InputGroup, Row} from 'reactstrap';

import CustomInputBox2 from "./CustomInputBox2";

const InputForm = () => {

    const [values, setValues] = useState({code1: "", code2: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setValues({...values, [name]: value})
    }

    return (
        <>
            <Row>
                {JSON.stringify(values)}
            </Row>
            <Row>
                <InputGroup size="sm">
                    <CustomInputBox2 nameText="코드(1)" codeText="code1" size="2" type="text" onChange={handleChange}/>
                    <CustomInputBox2 nameText="코드(2)" codeText="code2" size="2" type="text" onChange={handleChange}/>
                    <CustomInputBox2 nameText="등록일" codeText="startDate" size="2" type="date" onChange={handleChange}/>
                    <CustomInputBox2 nameText="수정일" codeText="editDate" size="2" type="date" onChange={handleChange}/>
                    <CustomInputBox2 nameText="담당자" codeText="manager" size="2" type="text" onChange={handleChange}/>
                    <CustomInputBox2 nameText="폐기일" codeText="endDate" size="2" type="date" onChange={handleChange}/>
                </InputGroup>
            </Row>
            <Row>
                <InputGroup size="sm">
                    <CustomInputBox2 nameText="제품명" codeText="productName" size="3" type="text"/>
                    <CustomInputBox2 nameText="MOQ" codeText="moq" size="1" type="text"/>
                    <CustomInputBox2 nameText="두께" codeText="thickness" size="1" type="text"/>
                    <CustomInputBox2 nameText="폭" codeText="width" size="1" type="text"/>
                    <CustomInputBox2 nameText="컷길이" codeText="cutSize" size="1" type="text"/>
                    <CustomInputBox2 nameText="롤길이" codeText="rollSize" size="1" type="text"/>
                    <CustomInputBox2 nameText="무게" codeText="weight" size="1" type="text"/>
                    <CustomInputBox2 nameText="폭수" codeText="widthCount" size="1" type="text"/>
                    <CustomInputBox2 nameText="수불단위" codeText="subulUnit" size="1" type="text"/>
                    <CustomInputBox2 nameText="납품단위" codeText="deliveryUnit" size="1" type="text"/>
                </InputGroup>
            </Row>
            <Row>
                <InputGroup size="sm">
                    <CustomInputBox2 nameText="인쇄도수" codeText="colorNumber1" size="1" type="text" placeholer="1도"/>
                    <CustomInputBox2 nameText="" codeText="colorNumber2" size="1" type="text" placeholer="2도"/>
                    <CustomInputBox2 nameText="" codeText="colorNumber3" size="1" type="text" placeholer="3도"/>
                    <CustomInputBox2 nameText="" codeText="colorNumber4" size="1" type="text" placeholer="4도"/>
                    <CustomInputBox2 nameText="" codeText="colorNumber5" size="1" type="text" placeholer="5도"/>
                    <CustomInputBox2 nameText="" codeText="colorNumber6" size="1" type="text" placeholer="6도"/>
                    <CustomInputBox2 nameText="" codeText="colorNumber7" size="1" type="text" placeholer="7도"/>
                    <CustomInputBox2 nameText="" codeText="colorNumber8" size="1" type="text" placeholer="8도"/>
                    <CustomInputBox2 nameText="" codeText="colorNumber9" size="1" type="text" placeholer="9도"/>
                    <CustomInputBox2 nameText="" codeText="colorNumber10" size="1" type="text" placeholer="10도"/>
                </InputGroup>
            </Row>
            <Row>
                <InputGroup size="sm">
                    <CustomInputBox2 nameText="공정" codeText="lineNumber1" size="1" type="text" placeholer="공정(1)"/>
                    <CustomInputBox2 nameText="" codeText="lineNumber2" size="1" type="text" placeholer="공정(2)"/>
                    <CustomInputBox2 nameText="" codeText="lineNumber3" size="1" type="text" placeholer="공정(3)"/>
                    <CustomInputBox2 nameText="" codeText="lineNumber4" size="1" type="text" placeholer="공정(4)"/>
                    <CustomInputBox2 nameText="" codeText="lineNumber5" size="1" type="text" placeholer="공정(5)"/>
                    <CustomInputBox2 nameText="" codeText="lineNumber6" size="1" type="text" placeholer="공정(6)"/>
                </InputGroup>
            </Row>
            <Row>
                <InputGroup size="sm">
                    <CustomInputBox2 nameText="납품방향" codeText="deliveryDirection" size="1" type="text" placeholer=""/>
                    <CustomInputBox2 nameText="인쇄방향" codeText="printDirection" size="1" type="text" placeholer=""/>
                    <CustomInputBox2 nameText="연결방식" codeText="connectionMethod" size="1" type="text" placeholer=""/>
                    <CustomInputBox2 nameText="연결색상" codeText="connectionColor" size="1" type="text" placeholer=""/>
                    <CustomInputBox2 nameText="식별표시" codeText="identificationMark" size="1" type="text" placeholer=""/>
                    <CustomInputBox2 nameText="포장타입" codeText="packageType" size="1" type="text" placeholer=""/>
                    <CustomInputBox2 nameText="포장색상" codeText="packageColor" size="1" type="text" placeholer=""/>
                    <CustomInputBox2 nameText="기타" codeText="etc" size="2" type="text" placeholer=""/>
                </InputGroup>
            </Row>
            <Row>
                <InputGroup size="sm">
                    <CustomInputBox2 nameText="기존코드" codeText="copyCode" size="*" type="text" placeholer=""/>
                    <CustomInputBox2 nameText="" codeText="button1" size="*" type="button" value="조회"/>
                    <CustomInputBox2 nameText="동판위치" codeText="connectionMethod" size="*" type="text" placeholer=""/>
                    <CustomInputBox2 nameText="" codeText="button2" size="*" type="button" value="조회"/>
                </InputGroup>
            </Row>
        </>
    );
}

export default InputForm;

