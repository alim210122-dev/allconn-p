import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row,} from 'react-bootstrap';
import {Badge} from 'reactstrap';
import axios from "axios";
import {AlwaysScrollSection} from './AlwaysScrollSection';

const ProductCodeInputForm = () => {

    const [data, setData] = useState();
    const [errorMessage, setErrorMessage] = useState();

    // INPUT STATE 관리
    const initialInputValue = {code: '', name: ''};
    const [values, setValues] = useState(initialInputValue);

    const handleChange = (event) => {
        const {name, value} = event.target
        setValues({...values, [name]: value})

        // 테이블 필터
        const duplicateObj = data.tableList;
        const filteredObj = duplicateObj.filter((v) => v.code.indexOf(values.code) > -1);
        setData({...data, tableList: filteredObj})
        console.log(filteredObj)

    }

    const getSalesData2 = async () => {
        const data = {code: 'C1000001'};
        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };
        axios.post('/code/salesCode/getSalesCode2', data, headers)
        .then(response => setData({tableList: response.data}))
        .catch(error => {
            setErrorMessage({error_API: 'API 송신과정에서 에러가 발생하였습니다.'});
            console.error('API 동기화 에러 : ', error);
        });
    };

    useEffect(() => {

    }, [values]);

    return (
        <div>
            <Row>{JSON.stringify(values, errorMessage)}</Row>

            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" sm={3}>
                        <Form.Label column="sm">코드</Form.Label>
                        <Form.Control type="text" placeholder="" size="sm" name="code" onChange={handleChange} value={values.code}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" sm={4}>
                        <Form.Label column="sm">명칭</Form.Label>
                        <Form.Control type="email" placeholder="" size="sm" name="name" onChange={handleChange} value={values.name}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail" sm={4}>
                        <Form.Label column="sm" style={{color: "white"}}>명</Form.Label>
                        <Button variant="outline-secondary" size="sm" onClick={() => setValues(initialInputValue)}>신규</Button> {` `}
                        <Button variant="outline-secondary" size="sm" onClick={() => getSalesData2()}>조회</Button> {` `}
                        {data && <Button variant="outline-secondary" size="sm">저장</Button>}
                    </Form.Group>
                </Form.Row>
            </Form>
            <div className="table-responsive ">
                <AlwaysScrollSection>
                    <table className="table table-sm table-container" width="100%">
                        <thead>
                        <tr>
                            <th>코드</th>
                            <th>명칭</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {data && data.tableList.map((v) => {
                            return (
                                <tr key={v.code}>
                                    <td>{v.code}</td>
                                    <td>{v.name}</td>
                                    <td>
                                        <Badge color="primary" pill>수정</Badge>
                                        <Badge color="danger" pill>삭제</Badge>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </AlwaysScrollSection>

            </div>
        </div>
    )
}

export default ProductCodeInputForm;