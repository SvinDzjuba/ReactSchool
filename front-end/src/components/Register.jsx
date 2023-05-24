import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Card, Button, Row, Col } from 'react-bootstrap';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users/register', 
            { name, email, password, confirmPassword });
            navigate('/login');
        } catch (error) {
            if(error.response) {
                setMessage(error.response.data.message);
            }
        }
    };
    return (
        <Container className='mt-5'>
            <h2 className='text-center my-4'>Register Form</h2>
            <Row className='justify-content-center'>
                <Col md={8} lg={6} xs={12}>
                    <Card className='shadow'>
                        <Card.Body>
                            <Form onSubmit={Register}>
                                <p className='has-text-centered'>{message}</p>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='text-center'>User Name</Form.Label>
                                    <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='text-center'>Email</Form.Label>
                                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='text-center'>Password</Form.Label>
                                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='text-center'>Confirm Password</Form.Label>
                                    <Form.Control type='password' placeholder='Enter password again' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </Form.Group>
                                <div className="d-flex justify-content-center">
                                    <Button className='w-50' variant='primary' type='submit'>Register</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}