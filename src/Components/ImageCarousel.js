import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../Assets/NH_Beau.png';
import img2 from '../Assets/NH_Blaire.png';
import img3 from '../Assets/NH_Freckles.png';
import img4 from '../Assets/NH_Genji.png';

function ImageCarousel() {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="carouselImg"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="carouselImg"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="carouselImg"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="carouselImg"
                    src={img4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageCarousel;