import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProfession() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    // Save data to db
    const saveDepartment = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/department', {
            name: name,
        });
        navigate('/department');
    };
    return (
        <Container className="mt-5">
            <h2 className="text-center">Add new department</h2>
            <Row>
                <Col md={{ span: 7, offset: 2 }}>
                    <Form onSubmit={saveDepartment}>
                        <Form.Group controlId="formControlText" className='my-2'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">Save department</Button>
                        <Button variant="primary" className="mt-3 ms-3" href="/department">Department List</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}