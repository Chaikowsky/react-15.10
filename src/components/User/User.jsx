
import './User.css';

import React from 'react';



export default function(props) {
    const {users, userId} = props;
    return (
        <div className = "UserPosts">
            <div className="UserId"><h2>{userId}</h2></div>
            <ul className = "CommentsList">
                {users.map(({title, body}, idx) => <li key={idx}><h3>{title}:</h3><p>{body}</p></li>)}
            </ul>
        </div>
    )
    
}