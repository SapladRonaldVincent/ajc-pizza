import React from 'react';
import './style.scss';
//import PizzaCarousel from './../../assets/pizza carousel.png';
import PizzaWelcome from './../../assets/pizza carousel.png';
const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
            <div className="item"
                style={{
                    backgroundImage: `url(${PizzaWelcome})`
                }}
                >
                    <a>Order Now</a>
                </div>
                </div>
        </div>
    );
};

export default Directory;