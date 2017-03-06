import React from 'react';
import './Post.css';
import { CommentList } from '../';

const Post = () => (
    <div className="post">
        <h1>Title</h1>
        <p>
            Body
        </p>
        <CommentList/>
    </div>
);

export default Post;
