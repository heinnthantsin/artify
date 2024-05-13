// @ts-nocheck
import React from "react"
import style from "../../assets/style/responsive"
import { useLocation } from "react-router-dom"
import Star from "./Star";



function Card({ name, img, artist, category, price, rating }) {
    const location = useLocation();
    return (
        <div className="border border-teal-400 rounded-lg p-2 h-fit">
            <div className="bg-slate-200 w-full h-[235px] overflow-hidden">
                <img className="w-full h-full rounded-t-lg object-cover hover:scale-125 transition duration-700"
                    src={img} alt="art" />
            </div>
            <div className={`${style.responsiveContent} text-textColor px-4 py-4`}>
                {
                    location.pathname === "/artist" && (<div className="flex justify-between">
                        {artist && <span> {artist} </span>}
                        {category && <span>{category} </span>}
                    </div>)
                }
                {
                    <span className="flex mb-2 sm:justify-center">
                        <Star rating={rating} />
                    </span>
                }
                {price && <p> <b>Price : </b>{price}</p>}
                {name && <p><b>Product: </b>{name}</p>}
            </div>
        </div >
    )
}

export default Card
