import React, { useState, useEffect } from 'react';
import { ListGroup, Card, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

export default function Departments({ depId, onClickDepartment }) {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        const getDepartments = async () => {
            const res = await axios.get('http://localhost:5000/department');
            setDepartments(res.data);
        }
        getDepartments();
    }, []);
    return (
        <>
            <Card>
                <ListGroup style={{ cursor: 'pointer' }} key={0}>
                    <ListGroupItem>
                        All
                    </ListGroupItem>
                    {departments.map(data => (
                        <ListGroupItem
                            style={{ cursor: 'pointer' }}
                            key={0}
                            onClick={() => onClickDepartment(data.id)}
                            className={depId === data.id ? 'active' : ''}
                        >
                            {data.name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Card>
        </>
    )
}