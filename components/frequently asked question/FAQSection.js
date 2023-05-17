"use client"

import Image from "next/image";
import img1 from "../../public/assets/images/people.png"
import { useEffect, useState } from "react";
import FAQHelper from "./FAQHelper";

const FAQSection = () => {
    const [faqData, setFaqData] = useState()

    useEffect(() => {
        fetch('faq-data.json')
            .then(res => res.json())
            .then(data => setFaqData(data))
    }, [])

    return (
        <div className="faq-container">
            <div className="faq-content-wrapper">
                {
                    faqData?.map(data =>
                        <FAQHelper
                            key={data.id}
                            data={data}
                        >
                        </FAQHelper>
                    )
                }
            </div>
            <Image src={img1} alt="people image" />
        </div>
    );
};

export default FAQSection;