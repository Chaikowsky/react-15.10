import './UserPage';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default class UserPage extends Component {

    render() {
        const {users} = this.props;
        return (
            <ul className = "CommentsList">
                {users.map(({name, email, id}, idx) => <li key={idx}><Link to={`/users/${id}`}><h3>{name}:</h3></Link><p>{email}</p></li>)}
            </ul>
        )
    }
}