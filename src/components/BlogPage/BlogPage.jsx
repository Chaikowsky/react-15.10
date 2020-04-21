import './BlogPage';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default class BlogPage extends Component {

    render() {
        const {blogs} = this.props;
        return (
            <ul className = "CommentsList">
                {blogs.map(({title, body, id}, idx) => <li key={idx}><Link to={`/blogs/${id}`}><h3>{title}:</h3></Link><p>{body}</p></li>)}
            </ul>
        )
    }
}