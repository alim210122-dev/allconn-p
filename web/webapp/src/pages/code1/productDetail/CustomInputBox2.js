import React from 'react';
import {Input, InputGroupAddon, InputGroupText, Col, Row, Label} from "reactstrap";

const CustomInputBox = (props) => {

    const nameText = props.nameText
    const codeText = props.codeText
    const size = props.size
    const type = props.type
    const placeholer = props.placeholer
    const value = props.value
    const onchange = props.onChange

    const labelStyleCode = {
        size: "sm",
        marginBottom: "-0.5rem",
        fontSize: "xx-small",
    }
    const inputStyleCode = {
        size : "small",
        fontSize: "x-small",   // xx-small 도 있음
    }

    return (
        <>
            <Col className="noPadding" xs={size}><Label style={labelStyleCode}>{nameText}</Label>
                <Input type={type} style={inputStyleCode}
                       name = {codeText}
                       className="form-control form-control-sm"
                       value = {value}
                       placeholder={placeholer}
                       onChange={onchange}
                />
            </Col>
        </>
    )
}

export default CustomInputBox;