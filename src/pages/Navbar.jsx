import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {

    const [choice, setChoice] = useState(false)

    return (
        <div>
            <div className="navbar">
                <div className="navbar-links">
                    <NavLink
                        className={({isActive}) =>
                            isActive ? "navbar-link current-nav" : "navbar-link"}
                        to={"/"}>Main</NavLink>
                    <NavLink
                        className={({isActive}) =>
                            isActive ? "navbar-link current-nav" : "navbar-link"}
                        to={"/about"}>About</NavLink>
                    <NavLink
                        className={({isActive}) =>
                            isActive ? "navbar-link current-nav" : "navbar-link"}

                        to={"/Posts"}>Posts</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;