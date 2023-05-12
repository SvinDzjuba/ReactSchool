import React from 'react';
import { Container, Row, Col, Button, FormControl, Form } from 'react-bootstrap';
import Departments from './Departments';
import SpecialtyList from './SpecialtyList';

export default function Specialties() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState('');
    return (
        <Container className="my-3">
            <h2>Specialties</h2>
            <Row>
                <Col md={{ span: 5, offset: 7 }}>
                    <h5 className='text-center mt-3'>Search</h5>
                    <Form className='d-flex ps-1'>
                        <FormControl
                            type="text"
                            placeholder='Search...'
                            className='me-sm-2'
                            id="input"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Button variant='outline-info' onClick={() => setSearchValue('')}>Clear</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <h5>DEPARTMENTS</h5>
                    <Departments depId={activeIndex} onClickDepartment={(id) => setActiveIndex(id)} />
                </Col>
                <Col md="9">
                    <h5>SPECIALTIES LIST</h5>
                    <SpecialtyList
                        departmentId={activeIndex}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </Col>
            </Row>
        </Container>
    );
}