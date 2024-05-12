import React from 'react'
import style from "../../assets/style/responsive";
import { Link } from 'react-router-dom';
import Card from './Card';

function FollowingList({ itemList, sectionTitle }) {
    return (
        <>
            <h1 className={`${style.responsiveTitle} mt-10`}>{sectionTitle}</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 h-auto">
                {itemList.map((item) => (
                    <Link className="w-full" to={`${item.id}`} relative={`${location.pathname}`}>
                        <Card key={item.id}
                            name={item.name} img={item.img} price={item.price} artist={item.artist} category={item.category} rating={item.rating} />
                    </Link>
                ))}
            </div >
        </>
    )
}

export default FollowingList