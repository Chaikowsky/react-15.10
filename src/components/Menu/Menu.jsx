import './Menu.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

@withRouter
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
        const {items, location} = this.props;
        return (
            <div className="navbar">
                <div className="navbar_text-logo">Start Bootstrap</div>
                <ul className="navbar-menu">
                    {items.map((item, idx)=> <li key={idx} className={location.pathname === item.href ? 'active' : ''} ><Link to={item.href}>{item.title}</Link></li>)}
                                     
                </ul>
               
            </div>
        )
    }
}
