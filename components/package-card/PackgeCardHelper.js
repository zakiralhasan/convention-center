"use client"

import { useState } from "react";
import { TiTick } from 'react-icons/ti';

const PackageCardHelper = (props) => {
    const [selectCard, setSelectCard] = useState(false)
    const { id, price, title, subTitle, options } = props.card

    const handleSelectCard = (value = false) => {
        if (!value) {
            setSelectCard(true)
        } else {
            setSelectCard(false)
        }
    }

    return (
        <div className={!selectCard ? 'package-card-wrapper' : 'package-card-wrapper-active'}
            onMouseEnter={() => handleSelectCard(false)}
            onMouseLeave={() => handleSelectCard(true)}
        >
            <h2>${price}</h2>
            <h2>{title}</h2>
            <p>{subTitle}</p>
            {
                options?.map((option, i) =>
                    <div className="package-card-optin" key={i}>
                        <TiTick className="package-card-optin__tick" />
                        <span>{option}</span>
                    </div>
                )
            }
            <button>Choose plan</button>
        </div>
    );
};

export default PackageCardHelper;