import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// Assets
import lambo from '../assets/pexels-abdulwahab-alawadhi-3422964.jpg';
import toyota from '../assets/pexels-prime-cinematics-2036544.jpg';
import mitsubishi from '../assets/pexels-s-von-hoerst-2676096.jpg';

export default function CarouselBox() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    height={600}
                    style={{ objectFit: 'cover' }}
                    src={lambo}
                    alt='lamborghini'
                />
                <Carousel.Caption>
                    <h3>Lamborghini</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    height={600}
                    style={{ objectFit: 'cover' }}
                    src={toyota}
                    alt='toyota'
                />
                <Carousel.Caption>
                    <h3>Toyota</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    height={600}
                    style={{ objectFit: 'cover' }}
                    src={mitsubishi}
                    alt='lamborghini'
                />
                <Carousel.Caption>
                    <h3>Mitsubishi</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}