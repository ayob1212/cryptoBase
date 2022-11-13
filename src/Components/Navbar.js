import React, { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";



const Navbar = () => {

    return (
        <div className={styles.nav}>
            <ul className={styles.navbar}>
                <li className={styles.logo}><Link to="/">Coinbase</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;