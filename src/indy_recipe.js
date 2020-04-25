import React from 'react';
import './App.css';

export default class Recipe extends React.Component {
    render() {
        return (
            <h3>This is {this.props.Recipe_name}</h3>
        )
    }
}
