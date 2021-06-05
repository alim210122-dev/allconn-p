import React, {useState, useRef, useEffect} from 'react';
import { Col,Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';


const ShowSubCode = () => {

    // redux State 값 가져오기
    const { productInfo } = useSelector(
        state => ({
            productInfo  : state.productCode.productInfo,
        }),
        shallowEqual
    );


    const [inputs, setInputs] = useState({});
    const [dataList, setValues] = useState(null);


    const inputClickedData = (Array) => {
        const testArrayData = Array[0]
        setValues(testArrayData);

        for(const key in dataList) {
            setInputs({...dataList, [key] : testArrayData[key]})
            console.log(inputs)
        }


    }

    const {productCode,ourProductCode,partnerCode,productName,companyCode, companyName,
            startDate, endDate,  manager} = inputs;

    const onChange = e => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    useEffect(()=>{
        inputClickedData(productInfo)
    },[productInfo])



    return(
        <div>
            <Form>
                <Row form>
                    <Col md={1}>
                        <FormGroup>
                            <Label for="exampleEmail">코드(1)</Label>
                            <Input type="text" name="productCode" onChange={onChange} value={productCode} />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <FormGroup>
                            <Label for="exampleEmail">코드(2)</Label>
                            <Input type="email" name="ourProductCode"  onChange={onChange} value={ourProductCode} />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <FormGroup>
                            <Label for="exampleEmail">코드(3)</Label>
                            <Input type="email" name="partnerCode"  onChange={onChange} value={partnerCode} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleEmail">제품명</Label>
                            <Input type="email" name="productName"  onChange={onChange} value={productName} />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <FormGroup>
                            <Label for="exampleEmail">거래처코드</Label>
                            <Input type="text" name="companyCode"  onChange={onChange} value={companyCode} />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <FormGroup>
                            <Label for="exampleEmail">거래처명</Label>
                            <Input type="text" name="companyName"   onChange={onChange} value={companyName} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleEmail">생성일</Label>
                            <Input type="date" name="startDate"   onChange={onChange} value={startDate} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleEmail">폐기일</Label>
                            <Input type="date" name="endDate"   onChange={onChange} value={endDate} />
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <FormGroup>
                            <Label for="exampleEmail">담당자</Label>
                            <Input type="text" name="manager"   onChange={onChange} value={manager}  />
                        </FormGroup>
                    </Col>

                </Row>
                <Row form>
                    <Col md={1}>
                        <FormGroup>
                            <Button outline color="primary">저장</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default ShowSubCode ;