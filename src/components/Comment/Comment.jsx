
import './Comment.css';

import React from 'react';



export default function(props) {
    console.log('Example ', props.comment);
    return (
        <div className = "CommentPage">
            <h2>{props.name}</h2>
            <p>{props.body}</p>

        </div>
    )
    
}