import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
            <NavLink exact to='/homepage'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/guest">Guest</NavLink>
            <NavLink to="/plannerportfolio">Wedding Planner</NavLink>
        </div>
    )
}

export default NavBar;