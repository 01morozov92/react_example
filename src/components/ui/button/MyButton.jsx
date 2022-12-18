import React from 'react';
import classes from "./MyButton.module.css"
const MyButton = (props) => {
    return (
        <button className={classes.myButton} {...props}>Add post</button>
    );
};

export default MyButton;