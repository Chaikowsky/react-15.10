import './List.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


export default class List extends Component {
    static propTypes = {
       
        items: PropTypes.array
    }



    render() {
        const {items} = this.props;
        return (
            <ul>
                {items.map((item, idx)=> <li key = {idx}>{item}</li>)}
            </ul>

        )
    }
}