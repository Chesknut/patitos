import React from 'react';
import { Carousel } from 'react-bootstrap';
import Smartpatito from '../assets/smartpatito.jpg';
import Manypatitos from '../assets/manypatitos.jpg';
import Patitoscrowd from '../assets/patitoscrowd.jpg'

class ShopSlides extends React.Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Smartpatito}
                style={{width: 800, height: 400}}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Buy costumed patitos!</h3>
                <p>Cute, custom patitos are waiting for you to give them a home!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Manypatitos}
                style={{width: 800, height: 400}}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Thousands of items in stock!</h3>
                <p>Many patitos want to see your bathtub! LOL</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Patitoscrowd}
                style={{width: 800, height: 400}}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Package deals!</h3>
                <p>Save money by buying families of patitos in bulk!</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        )
    }
}

export default ShopSlides;