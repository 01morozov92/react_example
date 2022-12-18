import React from 'react';

const PostItem = ({post, number, remove}) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <button onClick={() => remove(post)}>Delete</button>
        </div>
    );
};

export default PostItem;