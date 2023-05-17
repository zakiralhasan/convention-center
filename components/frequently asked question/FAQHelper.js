"use client"

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from "react";



const FAQHelper = (props) => {
    const [arrwActive, setArrowActive] = useState(false)
    const { id, title, content } = props.data;

    const handleFaqAns = () => {
        if (!arrwActive) {
            setArrowActive(true)
        } else {
            setArrowActive(false)
        }
    }
    return (
        <div>
            <div
                className={!arrwActive ? 'faq-wrapper' : 'faq-wrapper-active'}
            >
                <h3>{title}</h3>
                <p>{content}</p>

                <IoIosArrowDown className="faq-down-arrow-symbol" onClick={handleFaqAns} />
                <IoIosArrowUp className="faq-up-arrow-symbol" onClick={handleFaqAns} />
            </div>
        </div>
    );
};

export default FAQHelper;