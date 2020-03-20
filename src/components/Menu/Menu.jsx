import './Menu.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


export default class Menu extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                href: PropTypes.string.isRequired,
            })
        )
    }

    static defaultProps = {
        title: 'Default menu title',
        items: [],
    }

    render() {
        const {title, items} = this.props;
        return (
            <div className="navbar">
                <div className="navbar_text-logo">Start Bootstrap</div>
                <div className="navbar-menu">
                    <a href="#" className="navbar-menu-page">Home</a>
                    <a href="#" className="navbar-menu-page">About</a>
                    <a href="#" className="navbar-menu-page">Services</a>
                    <a href="#" className="navbar-menu-page">Contact</a>                   
                </div>
               
            </div>
        )
    }
}