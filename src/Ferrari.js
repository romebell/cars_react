import React, { Component } from 'react';
import stadale from './stadale.jpg'

class Ferrari extends Component {
    render() {
        return (
            <div>
                <h1>Ferrari</h1>
                <img src={stadale} alt="SF90 Stradale photo" />
                <p>Model: SF90 Stradale</p>
            </div>
        )
    }
}

export default Ferrari;