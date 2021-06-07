import React, {useState, useContext } from 'react'
import {Row,Col,FormGroup,Input, Label, Card,CardBody} from 'reactstrap';
import SelectBox from '../../components/ReactSelectSingle';
import AddModal from './AddModal';
import AddModal2 from './AddModal2';
import {ContextData} from './ContextData';

function SearchForm(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const raws = useContext(ContextData);


    return (
        <Card>
            <CardBody>
                    <form>
                        <FormGroup>
                            <Row>
                                <Col lg={3}>
                                    <Label for="selectCls" >코드분류</Label>
                                        <SelectBox name = "selectCls" options = {raws.classB} />
                                </Col>
                                <Col lg={1}>
                                    <Label for="selectCls" style={{color : "white"}} >코드분류</Label>
                                    <Input type ="button" className = "topButton"  value = "조회" style={{color : "gray", backgroundColor : "white", fontWeight :"bold", boder:"1px solid black",}} ></Input>
                                </Col>
                                <Col lg={1}>
                                    <Label for="selectCls" style={{color : "white"}}>코드분류</Label>
                                    <Input type ="button" className = "topButton"  value = "등록" onClick={toggle} style={{color : "gray", backgroundColor : "white", fontWeight :"bold", boder:"1px solid black"}} />
                                </Col>
                                <AddModal  modalState = {modal} toggle = {toggle} options = {raws.classB} />
                            </Row>

                        </FormGroup>
                    </form>
            </CardBody>
        </Card>
    )
}

export default SearchForm;
