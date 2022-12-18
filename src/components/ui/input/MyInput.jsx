import React from 'react';
import classes from "./MyInput.module.css"
const MyInput = ({placeholder, ...props}) => {
    return (
        <input className={classes.myInput} {...props} placeholder={placeholder} type="text"/>
    );
};

export default MyInput;