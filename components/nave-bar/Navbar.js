"use client"

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/Ai';

const Navbar = () => {
    const [responsiveManue, setResponsiveMenu] = useState(false)

    const handleResponsiveMenu = () => {
        if (responsiveManue === false) {
            setResponsiveMenu(true)
        } else {
            setResponsiveMenu(false)
        }
    }


    const navBar = <ul>
        <Link href={'#'}>
            <li>Home</li>
        </Link>
        <Link href={'#'}>
            <li>About Us</li>
        </Link>
        <Link href={'#'}>
            <li>Contact</li>
        </Link>
        <Link href={'#'}>
            <li>Subscribe</li>
        </Link>
    </ul>
    return (
        <>
            <div className="nav-container">
                <h2>Abacus Convention Center</h2>
                <div>
                    <div className={!responsiveManue ? "navbar-main" : "navbar-responsive"}>
                        {navBar}
                    </div>
                    <AiOutlineMenu className='nav-menue-icon' onClick={() => handleResponsiveMenu(!false)} />
                </div>
            </div>
        </>
    );
};

export default Navbar;