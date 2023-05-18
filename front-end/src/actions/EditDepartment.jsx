import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditDepartment() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        const getDepartmentById = async () => {
            const response = await axios.get(`http://localhost:5000/department/${id}`);
            setName(response.data.name);;
        }
        getDepartmentById();
    }, [id]);

    const updateDepartment = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/department/${id}`, {
            name: name,
        });
        navigate('/profession');
    }
    return (
        <Container className="mt-5">
            <h2 className="text-center">Edit department</h2>
            <Row>
                <Col md={{ span: 7, offset: 2 }}>
                    <Form onSubmit={updateDepartment}>
                        <Form.Group controlId="formControlText" className='my-2'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">Update department</Button>
                        <Button variant="primary" className="mt-3 ms-3" href="/department">Department List</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}