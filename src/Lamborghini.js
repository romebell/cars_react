import React, { Component } from 'react';
import aventador from './aventador.jpg'

class Lamborghini extends Component {
    render() {
        return (
            <div>
                <h1>Lamborghini</h1>
                <img src={aventador} alt="Lamborghini photo" />
                <p>Model: Aventador S</p>
            </div>
        )
    }
}

export default Lamborghini;