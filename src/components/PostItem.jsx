import React from 'react';
import MyButton from "./ui/button/MyButton";

const PostItem = ({number, post}) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <MyButton>Delete</MyButton>
        </div>
    );
};

export default PostItem;