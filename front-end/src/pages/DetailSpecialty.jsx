import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function DetailSpecialty() {
    const [specialty, setSpecialty] = useState(['']);
    const [department, setDepartment] = useState(['']);
    const { id } = useParams();
    useEffect(() => {
        const getSpecialtyById = async () => {
            const res = await axios.get(`http://localhost:5000/profession/${id}`);
            setSpecialty(res.data);
            setDepartment(res.data.department);
        }
        getSpecialtyById();
    });
    return (
        <Container>
            <h2 className='text-center m-4'>Specialty #{specialty.id}</h2>
            <Row className='m-2' key={specialty.id}>
                <Col md="6">
                    <img className='mr-3' style={{ 'object-fit': 'contain', 'max-width': '100%' }}
                        src={specialty.poster} alt="Logo" />
                </Col>
                <Col md="6">
                    <h5>{specialty.name}</h5>
                    <span className='fst-italic'>Study duration: </span>{specialty.duration} <br />
                    <span className='fst-italic'>Learning base: </span>{specialty.education} <br />
                    <span className='fst-italic'>Description: </span>{specialty.description} <br />
                    <span className='fst-italic'>Department: </span>{department.name} <br />
                    <span className='fst-italic'>Date publish: </span>{specialty.createdAt} <br />
                    <Link to={`/specialty`} className='me-1'>
                        Specialties List
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}