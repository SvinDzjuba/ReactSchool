import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProfession() {
    const [department, setDepartment] = React.useState([]);
    useEffect(() => {
        const getDepartment = async () => {
            const response = await axios.get('http://localhost:5000/department');
            setDepartment(response.data);
        }
        getDepartment();
    });
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [education, setEducation] = useState('');
    const [description, setDescription] = useState('');
    const [poster, setPoster] = useState('');
    const [departmentId, setDepartmentId] = useState(0);

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const getProfessionById = async () => {
            const response = await axios.get(`http://localhost:5000/profession/${id}`);
            setName(response.data.name);
            setDuration(response.data.duration);
            setEducation(response.data.education);
            setDescription(response.data.description);
            setPoster(response.data.poster);
            setDepartmentId(response.data.department_id);
        }
        getProfessionById();
    }, [id]);

    const updateProfession = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/profession/${id}`, {
            name: name,
            duration: duration,
            education: education,
            description: description,
            poster: poster,
            department_id: departmentId,
        });
        navigate('/profession');
    }
    return (
        <Container className="mt-5">
            <h2 className="text-center">
                Edit Profession{id} - {name}
            </h2>
            <Row>
                <Col md={{ span: 7, offset: 2 }}>
                    <Form onSubmit={updateProfession}>
                        <Form.Group controlId="formControlText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className="input"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formControlText">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control
                                className="input"
                                type="text"
                                placeholder="Enter duration"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formControlText">
                            <Form.Label>Education</Form.Label>
                            <Form.Control
                                className="input"
                                type="text"
                                placeholder="Enter education"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formControlText">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                className="input"
                                type="text"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formControlText">
                            <Form.Label>Poster</Form.Label>
                            <Form.Control
                                className="input"
                                type="text"
                                placeholder="Enter poster"
                                value={poster}
                                onChange={(e) => setPoster(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formControlText">
                            <Form.Label>Department</Form.Label>
                            <Form.Select
                                name="departmentId"
                                onChange={(e) => setDepartmentId(e.target.value)}
                                value={departmentId}
                            >
                                <option value={0} key={0}>
                                    Select department
                                </option>
                                {department.map((data) => (
                                    <option value={data.id} key={data.id}>
                                        {data.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Update profession
                        </Button>
                        <Button
                            variant="primary"
                            className="mt-3 ms-3"
                            href="/profession"
                        >
                            Back to profession
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}