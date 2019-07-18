import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'

export default props => <Container className="py-5">
    <Row>
        <Col col={12}>
            <h1 className="text-center">
                React bootstrap
            </h1>
            <Button color="primary">
                Yes!
            </Button>
        </Col>
    </Row>
</Container>