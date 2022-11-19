import React from "react";
import { Link } from 'react-router-dom';
// import logo from '../../assets/logos/miu-logo.png';
import './Header.css'

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>  <Link to="/students">Students</Link>  </li>
                    <li> <Link to="/addstudent"> Add Students</Link> </li>
                    <li> <Link to="/createpost">Selected Students</Link> </li>
                </ul>
            </nav>
        </header>


    );
}



export default Header;