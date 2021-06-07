import React from 'react';
import {Input, InputGroupAddon, InputGroupText} from "reactstrap";

const CustomInputBox = (props) => {

    const nameText = props.nameText
    const codeText = props.codeText


    return (
        <>
            <InputGroupAddon addonType="prepend"><InputGroupText
                style={{fontSize: "xx-small", fontWeight: "bold"}}>{nameText}</InputGroupText></InputGroupAddon>
            <Input name={codeText} placeholder={nameText} style={{fontSize: "xx-small"}}/>
        </>
    )
}

export default CustomInputBox;