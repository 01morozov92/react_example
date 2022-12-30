import React from 'react';
import Navbar from "./Navbar";

const MainPage = () => {
    return (
        <div>
            <Navbar/>
            <div style={{textAlign: "center", marginTop: 50}}>
                <h1>Main Page</h1>
            </div>
        </div>
    );
};

export default MainPage;