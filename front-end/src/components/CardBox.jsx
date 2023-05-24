import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function CardBox() {
    const [service, setService] = React.useState([]);

    React.useEffect(() => {
        fetch('https://64539ec9c18adbbdfea28b9b.mockapi.io/api/services')
            .then(res => { return res.json(); })
            .then(arr => { setService(arr); })
    }, []);
    return (
        <Container fluid className='mt-5 bg-light'>
            <Row>
                <Col className='w-75 mx-auto' md={{ span: 8, offset: 2 }}>
                    <h2 className='my-5 text-center'>Card</h2>
                    <Row className='g-4'>
                        {service.map(data => (
                            <Col className='d-flex justify-content-center' key={data.id}>
                                <Card style={{ width: 500 }} className='m-2'>
                                    <Card.Img 
                                        variant="top" 
                                        src={data.image} 
                                        style={{ 
                                            height: 204,
                                            objectFit: 'cover',
                                            minHeight: 300
                                        }} />
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Quibusdam voluptatem, sint placeat error unde, dolores quod,
                                            hic distinctio optio quidem voluptatibus nobis saepe.
                                            Esse temporibus voluptate quae vel cupiditate consequatur!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}