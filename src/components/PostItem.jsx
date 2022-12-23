import React from 'react';

const PostItem = ({user, number, remove}) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. {user.name}</strong>
                <div>{user.age}</div>
            </div>
            <button onClick={() => remove(user)}>Delete</button>
        </div>
    );
};

export default PostItem;