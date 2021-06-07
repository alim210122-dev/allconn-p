import React, {useEffect, useState} from 'react'
import {Table, Input,Badge,Button,Row,Col} from 'reactstrap'
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import {setSalesCode} from 'redux/productCode/reducers';


const optionData = [{
    value:"11", label : "222"
}]


const SearchRowForm =() => {

    const [optionData, setOptionData] = useState();
    const { data, loading, error } = useSelector(state => state.productCode.salesCode);
    const dispatch = useDispatch();

    const  propertyNameChange = (obj2) => {
        const obj = obj2
        const array = []
        obj.map((v)=> {
            const newobj = {}
            Object.assign(newobj,{label:v.name,value:v.code})
            array.push(newobj)
        })
        setOptionData(array);
    }

    useEffect(()=>{
        if(data == null){
            console.log('error')
        }else{
            propertyNameChange(data.data.code_m)
        }
    },[data]);


    return(
        <div>
            <Row>
                <Col lg={4}>
                    <Select
                        name ="selectInputBox"
                        options = {optionData}

                    />
                </Col>
                <Col>
                    <Button onClick={()=>dispatch(setSalesCode())} value="가져오기" />
                </Col>
                <Col lg={3}>
                    <Input type ="text"  />
                </Col>
                <Col lg={3}>
                    <Input type ="text"  />
                </Col>
            </Row>

        </div>

    )

}

export default SearchRowForm;