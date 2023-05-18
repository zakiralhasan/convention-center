import Image from "next/image";
import img1 from "../../public/assets/images/wedding.png"
import { BsArrowRight } from 'react-icons/bs';
import HeroButton from "../hero-section-button/HeroButton";
import Link from "next/link";


const HeroSection = () => {
    return (
        <div className="hero-section-container">
            <div className="hero-section-image-wrapper">
                <Image src={img1} alt="hero image" />
                <div className="hero-section-img__button">
                    <HeroButton />
                </div>
            </div>
            <div className="hero-section-content-wrapper">
                <h3>Every moment is Precious</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className="hero-section-content__button">
                    <Link href="/album">
                        <HeroButton />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;