import googleIcon from '../../public/assets/icons/google-play-badge.png'
import appleIcon from '../../public/assets/icons/app-store-badge.png'
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <p>&copy; 2023 Abacus Convention Center | All Rights Reserved</p>
                <div className='footer-container__right-section'>
                    <p>Get the app</p>
                    <div className='footer-icon-container'>
                        <Link href='#'>
                            <Image src={googleIcon} alt="play stor icon" width={135} height={40} />
                        </Link>
                        <Link href='#'>
                            <Image src={appleIcon} alt="play stor icon" width={135} height={40} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;