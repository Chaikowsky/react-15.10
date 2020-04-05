import './BlogPage.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


export default class BlogPage extends Component {

    render() {
        const { blogs } = this.props;
        return (
            <div className = "BlogPage">
                
                {blogs.map(({name, body}, idx) => <div className="blog" key={idx}><h3>{name}:</h3> <p>{body}</p></div>)}
                
            </div>
        )
    }
}