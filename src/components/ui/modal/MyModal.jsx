import React from 'react';
import classes from "./MyModal.module.css"

const MyModal = ({isActive, setActive, children}) => {

    const modalClasses = [classes.myModal]
    if (isActive) {
        modalClasses.push(classes.active)
    }
    const modalContentClasses = [classes.myModalContent]
    if (isActive) {
        modalContentClasses.push(classes.active)
    }


    return (
        <div onClick={(() => setActive(false))} className={modalClasses.join(" ")}>
            <div onClick={(e) => {
                e.stopPropagation()
            }}
                 className={modalContentClasses.join(" ")}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;