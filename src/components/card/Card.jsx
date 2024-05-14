import React, { useState } from "react"
import style from "../../assets/style/responsive"
import { useLocation } from "react-router-dom"
import Star from "./Star";


function Card({ img, name, artist, category, price, rating }) {
    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);
    const hoverBox = {
        width: '100%',
        position: 'absolute',
        bottom: '0',
        opacity: isHovered ? '1' : '0',
        backgroundColor: '#3933339a',
        backdropFilter: 'blur(5px)',
        color: '#fff',
        letterSpacing: '2px',
        transition: 'all 0.5s'
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="shadow-md rounded-lg h-fit relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="bg-slate-200 w-full h-[400px] overflow-hidden">
                <img className="w-full h-full rounded-t-lg object-cover"
                    src={img} alt="art" />
            </div>
            {isHovered &&
                <div className={`${style.responsiveContent} text-textColor px-4 py-2`} style={hoverBox}>
                    {
                        location.pathname === "/artist" && (<div className="flex justify-between">
                            {artist && <span> {artist} </span>}
                            {category && <span>{category} </span>}
                        </div>)
                    }
                    {
                        <span className="flex mb-2 sm:justify-center lg:justify-start">
                            <Star rating={rating} />
                        </span>
                    }
                    {name && <p><b>Product: </b>{name}</p>}
                    {price && <p> <b>Price : </b>{price}</p>}
                </div>
            }
        </div>
    )
}

export default Card
