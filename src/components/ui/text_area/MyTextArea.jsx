import React from 'react';
import classes from "../input/MyInput.module.css";

const MyTextArea = ({placeholder, ...props}) => {
    return (
        <textarea className={classes.myInput} {...props} placeholder={placeholder}/>
    );
};

export default MyTextArea;