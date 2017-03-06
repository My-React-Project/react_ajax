import React from 'react';
import './Comment.css';

const Comment = ({name, body}) => {
    return (
        <li className="Comment">
            <p>
                <strong>{name}</strong> {body}
            </p>
        </li>
    );
};

export default Comment;
