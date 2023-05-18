import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Container, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function DepartmentList() {
    const [departments, setDepartments] = useState([]);

    const getDepartments = async () => {
        const response = await axios.get('http://localhost:5000/department');
        setDepartments(response.data);
    };
    const deleteDepartment = async (id) => {
        if (window.confirm('Are you sure you want to delete this department?')) {
            await axios.delete(`http://localhost:5000/department/${id}`);
            getDepartments();
        }
    };
    useEffect(() => {
        getDepartments();
    }, []);
    return (
        <Container className="mt-1">
            <h2 className="text-center mt-3">Department List Manage</h2>
            <Row>
                <Col md={{ span: 9, offset: 2 }}>
                    <p className="text-end">
                        <Link to="/department/new">
                            <Button variant="primary" size="sm">Add new</Button>
                        </Link>
                    </p>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>No#</th>
                                <th>Name</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((department, index) => (
                                <tr key={department.id}>
                                    <td>{index + 1}. #{department.id}</td>
                                    <td>{department.name}</td>
                                    <td className="text-center">
                                        <Link to={`/department/edit/${department.id}`} className="me-1">
                                            <Button variant="primary" size="sm">Edit</Button>
                                        </Link>
                                        <Button variant="danger" size="sm" onClick={() => deleteDepartment(department.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}