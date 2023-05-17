"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
// import imgg from '../../public/assets/images/person 1.png'

const ClientComments = () => {
    const [comments, setComments] = useState()
    // console.log(comments)

    useEffect(() => {
        fetch('clients-comment.json')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div className="client-comments-container">
            {
                comments?.map(comment =>
                    <div className="client-comments-wrapper" key={comment.id} >
                        <p>{comment.content}</p>
                        <Image src={comment.img} alt="client image" width={9} height={9} />
                        <div className="client-name-continer">
                            <h5>{comment.name}</h5>
                            <p>{comment.profession}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ClientComments;