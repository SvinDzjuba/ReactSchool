import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Container, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function ProfessionList() {
    const [profession, setProfession] = React.useState([]);

    // Specialty list from db
    const getProfession = async () => {
        const response = await axios.get('http://localhost:5000/profession');
        setProfession(response.data);
    };

    // Delete specialty from db
    const deleteProfession = async (id) => {
        if (window.confirm('Are you sure you want to delete this specialty?')) {
            await axios.delete(`http://localhost:5000/profession/${id}`);
            getProfession();
        }
    };
    useEffect(() => {
        getProfession();
    }, []);
    return (
        <Container
            className="mt-1">
            <h2 className="text-center mt-3">Profession List Manage</h2>
            <Row>
                <Col md={{ span: 9, offset: 2 }}>
                    <p className="text-end">
                        <Link to="/profession/new">
                            <Button variant="primary" size="sm">
                                Add New
                            </Button>
                        </Link>
                    </p>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>No#</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profession.map((profession, index) => (
                                <tr key={profession.id}>
                                    <td>{index + 1}. #{profession.id}</td>
                                    <td>{profession.name}</td>
                                    <td>{profession.department.name}</td>
                                    <td className="text-center">
                                        <Link to={`/detail/${profession.id}`} className="me-1">
                                            <Button variant="success" size="sm">
                                                Detail
                                            </Button>
                                        </Link>
                                        <Link to={`/profession/edit/${profession.id}`} className="me-1">
                                            <Button variant="primary" size="sm">Edit</Button>
                                        </Link>
                                        <Button onClick={() => deleteProfession(profession.id)} variant="danger" size="sm" >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container >
    );
}