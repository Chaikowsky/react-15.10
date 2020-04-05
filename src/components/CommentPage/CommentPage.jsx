
import './CommentPage.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


export default class CommentPage extends Component {
    constructor(props) {
        super(props);
    }

    viewComment = (e) => {
        const {onSend} = this.props;

        if(typeof onSend === 'function'){
            console.log(event);
            onSend(event.target.id);
        }
    }
  
    render() {
        const { comments } = this.props;
        return (
            <div className = "CommentPage">
                {comments.map(({name, body, id}, idx) => <div onClick={this.viewComment} id={id} className="comment" key={idx}><h3>{name}:</h3> <p>{body}{id}</p></div>)}
            </div>
        )
    }
}