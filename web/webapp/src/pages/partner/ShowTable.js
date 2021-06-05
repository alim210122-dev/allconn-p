import React from 'react';
import { Card,CardBody,Button, Table,Col ,Row, Badge, InputGroup, InputGroupAddon, Input} from 'reactstrap';


const ShowTable = () => {
   
    return (
        <>
        <Card>
          <CardBody>
              <Row>
                <Col >
                 <Button outline color="secondary"  >조회</Button>
                </Col>
              </Row>
              <Row>
                <Col >
                </Col>
              </Row>
              <br />
              <Table size="sm" hover>
                <thead>
                  <tr>
                    <th>코드</th>
                    <th>명칭</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </Table>                
          </CardBody>
        </Card>
      </>
    )

}

export default ShowTable;