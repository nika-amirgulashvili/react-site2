import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss'
import {Link} from "react-router-dom";


function Navbar() {
    return (
     <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>

  );
}
  export default Navbar;
  

