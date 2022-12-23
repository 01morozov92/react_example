import React from 'react';
import PostItem from "./PostItem";

const PostList = ({users, title, remove}) => {

    if (!users.length){
        return <h1 style={{textAlign: "center"}}>Posts not found!</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {users.map((user, index) =>
                <PostItem remove={remove} number={index + 1} user={user} key={user.id}/>
            )}
        </div>
    );
};

export default PostList;