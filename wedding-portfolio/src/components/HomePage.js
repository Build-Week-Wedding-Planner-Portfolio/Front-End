import React from 'react';
import { Link } from "react-router-dom";

export default function HomePage () {

    return (
      
      <div className='home-page'>
          <p>Add something stylish here ... logo or background image</p>
        <div className='welcome'>
          <button><Link to="/signup">Create Account</Link></button>
          <button><Link to="/signin" >Sign In</Link></button>
          <button><Link to="/guest">View as Guest</Link></button>
        </div>
      </div>

    )
}