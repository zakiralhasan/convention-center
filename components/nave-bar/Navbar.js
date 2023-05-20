"use client"

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/Ai';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [responsiveManue, setResponsiveMenu] = useState(false)
    const [showProfile, setShowProfile] = useState(false)

    console.log(session)

    const handleLogin = () => {
        router.push('/login')
    }

    const handleResponsiveMenu = () => {
        if (responsiveManue === false) {
            setResponsiveMenu(true)
        } else {
            setResponsiveMenu(false)
        }
    }

    const navBar = <ul>
        <Link href="/">
            <li>Home</li>
        </Link>
        <Link href="#">
            <li>About Us</li>
        </Link>
        <Link href={'#'}>
            <li>Contact</li>
        </Link>
        <Link href={'#'}>
            <li>Subscribe</li>
        </Link>
    </ul>

    const profileBar = <ul>
        <Link href="#">
            <li>Profile</li>
        </Link>
        <Link href="#">
            <li>Settings</li>
        </Link>
        <Link href={'#'}>
            <li onClick={() => signOut()}>Logout</li>
        </Link>
    </ul>

    return (
        <>
            <div className="nav-container">
                <AiOutlineMenu className='nav-menue-icon' onClick={() => handleResponsiveMenu(!false)} />
                <h2>Abacus Convention Center</h2>
                <div className='nav-wrapper'>
                    <div className={!responsiveManue ? "navbar-main" : "navbar-responsive"}>
                        {navBar}
                    </div>
                    <div className='nav-avatar-container'>
                        {
                            !session ? <button onClick={handleLogin}>Login</button>
                                :
                                <Image
                                    src='https://i.ibb.co/rp0mZgF/backup-profile-pic.jpg'
                                    alt='profile picture'
                                    width={45}
                                    height={45}
                                    onClick={() => setShowProfile(!showProfile)}
                                ></Image>
                        }
                        <div className='profile-bar'>
                            {
                                showProfile && profileBar
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;