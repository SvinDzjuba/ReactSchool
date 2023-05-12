import React, { useRef } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
// Components
import CarouselBox from '../components/CarouselBox'
import AccordionBox from '../components/AccordionBox'
import BannerBox from '../components/BannerBox'
import CardBox from '../components/CardBox'

export default function Home() {
    const carouselRef = useRef();
    const accordionRef = useRef();
    const bannerRef = useRef();
    const cardRef = useRef();
    
    function carouselClick() {
        carouselRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    function accordionClick() {
        accordionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    function bannerClick() {
        bannerRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    function cardClick() {
        cardRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar 
                sticky="top" 
                expand="md" 
                variant="dark" 
                className='justify-content-end px-4'
                style={{ backgroundColor: '#4b4b46' }}
            >
                <Nav>
                    <Nav.Link onClick={scrollTop}>School</Nav.Link>
                    <Nav.Link onClick={carouselClick}>Carousel</Nav.Link>
                    <Nav.Link onClick={accordionClick}>Accordion</Nav.Link>
                    <Nav.Link onClick={bannerClick}>Banner</Nav.Link>
                    <Nav.Link onClick={cardClick}>Card</Nav.Link>
                </Nav>
            </Navbar>
            <section ref={carouselRef} className='pt-0'>
                <CarouselBox />
            </section>
            <section ref={accordionRef} className='pt-5'>
                <AccordionBox />
            </section>
            <section ref={bannerRef} className='pt-3'>
                <BannerBox />
            </section>
            <section ref={cardRef} className='pt-5'>
                <CardBox />
            </section>
        </>
    )
}
