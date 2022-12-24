import React from 'react';
import MyButton from "./ui/button/MyButton";

const UserItem = ({user, number, remove}) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. Name: {user.name}</strong>
                <div>Age: {user.age}</div>
            </div>
            <MyButton onClick={() => remove(user)}>Delete</MyButton>
        </div>
    );
};

export default UserItem;