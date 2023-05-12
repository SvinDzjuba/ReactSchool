import React from 'react'
import programList from '../data/program.json';

import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'react-bootstrap';

export default function AccordionBox() {
    return (
        <Container className='my-5'>
            <Row>
                <Col md={{ span: 7, offset: 2 }}>
                    <h2>Accordion</h2>
                    <Accordion defaultActiveKey="1">
                        {programList.map(data => (
                            <Accordion.Item eventKey={data.id} key={data.id}>
                                <Accordion.Header>
                                    {data.name} #{data.id}
                                </Accordion.Header>
                                <Accordion.Body>{data.description}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}