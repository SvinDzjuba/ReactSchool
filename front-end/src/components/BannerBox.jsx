import React from 'react'
import { Button, Container } from 'react-bootstrap';

export default function BannerBox() {
    return (
        <Container
            fluid
            className='bg-success text-white p-5 opacity-75'
            style={{
                backgroundImage: `url(https://vrayschool.com/wp-content/uploads/2020/07/gonzalo-piacentino-crystal-wallpaper-4-vray-3dsmax-1900x600-1.jpg)`,
                height: 400,
                backgroundSize: 'cover',
            }}
        >
            <Container className='p-5' style={{ alignItems: 'center', justifyContent: 'center' }}>
                <h1>Example banner</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio eaque delectus doloribus consequatur rerum consequuntur ad 
                    iusto aliquid doloremque deleniti facere voluptatibus, 
                    ipsam quod fugit eius molestiae! Laboriosam, corrupti pariatur.
                </p>
                <p>
                    <Button className='primary'>Learn more</Button>
                </p>
            </Container>
        </Container>
    )
}