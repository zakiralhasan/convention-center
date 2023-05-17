"use client"

import { useEffect, useState } from "react";
import PackageCardHelper from "./PackgeCardHelper";

const PackageCard = () => {
    const [packageData, setPackageData] = useState([])

    useEffect(() => {
        fetch('package-card.json')
            .then(res => res.json())
            .then(data => setPackageData(data))
    }, [])

    return (
        <div className="package-card-container">
            {packageData.map(card =>
                <PackageCardHelper
                    key={card.id}
                    card={card}
                >
                </PackageCardHelper>)
            }
        </div>
    );
};

export default PackageCard;