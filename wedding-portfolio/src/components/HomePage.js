import React from 'react';
import { Link } from "react-router-dom";
import banner from "../assets/wedding-banner.jpg" ;

export default function HomePage () {

    return (

      <div className='home-page'>
      <img src={banner} alt="wedding-banner" className="wedding-banner"/>
          <p>Add something stylish here ... logo or background image</p>
        <div className='welcome'>
          <button><Link to="/signup">Create Account</Link></button>
          <button><Link to="/login" >Sign In</Link></button>
          <button><Link to="/guest">View as Guest</Link></button>
        </div>
      </div>
    )
}
