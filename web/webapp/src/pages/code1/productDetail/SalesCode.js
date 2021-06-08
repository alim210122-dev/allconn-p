import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSalesCode} from 'redux/productCode/reducers';
import {Badge, Input, Table} from 'reactstrap'

const SalesCode = () => {

    const [tableData, setTableData] = useState();
    const [values, setValues] = useState({code: "", name: ""})


    // Input에 입력한 정보를 State 관리하기
    const handleChange = (event) => {
        const {name, value} = event.target
        setValues({...values, [name]: value})
    }
    const editSaleCode = (a, b) => {
        setValues({code: a, name: b})
    }

    const {data} = useSelector(state => state.productCode.salesCode);
    const dispatch = useDispatch();

    const onCreate = () => {
        dispatch(setSalesCode());
    }

    useEffect(() => {
        if (data == null) {
            console.log('error')
        } else {
            setTableData(data.data.code_m)
        }
    }, [data]);

    return (
        <div>
            <Table size="sm" hover responsive={true}>
                <thead>
                <tr>
                    <th>코드</th>
                    <th>명칭</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><Input type="text" bsSize="sm" name="code" onChange={handleChange} value={values.code}/></td>
                    <td><Input type="text" bsSize="sm" name="name" onChange={handleChange} value={values.name}/></td>
                </tr>
                {tableData && tableData.map((v) => {
                    return (
                        <tr key={v.code}>
                            <td>{v.code}</td>
                            <td>{v.name}</td>
                            <td><Badge color="primary" onClick={() => editSaleCode(v.code, v.name)}>수정</Badge></td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    )

}

export default SalesCode;
