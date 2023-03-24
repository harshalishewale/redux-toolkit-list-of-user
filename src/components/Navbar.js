import React from "react";
import './navbar.css'
const Navbar = () => {
    return (
        <div>
            <h1 id='h1'>Admin Table</h1>
            <div id='main'>
                    <div className="nav">HOME</div>
                    <div className="nav">ABOUT</div>
                    <div className="nav">PROJECTS</div>
                    <div className="nav">CODE</div>
                    <div className="nav" id='contact'>CONTACT</div>
            </div>
        </div>
    )
}
export default Navbar;