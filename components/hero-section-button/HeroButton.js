import { BsArrowRight } from 'react-icons/bs';

const HeroButton = () => {
    return (
        <>
            <button className='hero-btn-container'>
                Explore our album
                <BsArrowRight />
            </button>
        </>
    );
};

export default HeroButton;