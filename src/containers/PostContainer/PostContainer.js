import React, { Component } from 'react';
import { PostWrapper,  Navigate, Post } from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component {

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    /*
    async function fetchPostInfo(postId) {
        const post = await service.getPost(postId);
        console.log(post);
        const comments = await service.getComments(postId);
        console.log(comments);
    }
    */
    fetchPostInfo = async(postId) => {
        // const post = await service.getPost(postId);
        // console.log(post);
        // const comments = await service.getComments(postId);
        // console.log(comments);

        // 두가지일을 동시에 진행하고 싶은 경우 Promise.all을 사용
        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);

        console.log(info);
    }

    render() {
        return (
            <PostWrapper>
                <Navigate/>
                <Post/>
            </PostWrapper>
        );
    }
}

export default PostContainer;
