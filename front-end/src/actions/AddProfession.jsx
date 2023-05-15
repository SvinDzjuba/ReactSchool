import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProfession() {
    const [department, setDepartment] = React.useState([]);
    useEffect(() => {
        const getDepartment = async () => {
            const response = await axios.get('http://localhost:5000/department');
            setDepartment(response.data);
        };
        getDepartment();
    });
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [education, setEducation] = useState('');
    const [description, setDescription] = useState('');
    const [poster, setPoster] = useState('');
    const [departmentId, setDepartmentId] = useState('');

    // For redirect
    const navigate = useNavigate();

    // Save data to db
    const saveProfession = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/profession', {
            name: name,
            duration: duration,
            education: education,
            description: description,
            poster: poster,
            department_id: departmentId,
        });
        navigate('/profession');
    };
    return (
        <Container className="mt-5">
            <h2 className="text-center">Add new profession</h2>
            <Row>
                <Col md={{ span: 7, offset: 2 }}>
                    <Form onSubmit={saveProfession}>
                        <Form.Group controlId="formControlText" className='my-2'>
                            <Form.Label>Name Profession</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formControlText" className='my-2'>
                            <Form.Label>Duration</Form.Label>
                            <Form.Control className="input" type="number" min={1} max={4} placeholder="Enter duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formControlText" className='my-2'>
                            <Form.Label>Education</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Enter education" value={education} onChange={(e) => setEducation(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formControlText" className='my-2'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} className="input" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formControlText" className='my-2'>
                            <Form.Label>Department</Form.Label>
                            <Form.Select name="departmentId" onChange={(e) => setDepartmentId(e.target.value)}>
                                <option key={0} value={0}>Select Department</option>
                                {department.map((data) => (
                                    <option key={data.id} value={data.id}>
                                        {data.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formControlText">
                            <Form.Label>Poster</Form.Label>
                            <Form.Control className="input" type="text" placeholder="Poster" value={poster} onChange={(e) => setPoster(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">Save profession</Button>
                        <Button variant="primary" className="mt-3 ms-3" href="/profession">Profession List</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}