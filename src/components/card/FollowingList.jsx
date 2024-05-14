import React from 'react'
import style from "../../assets/style/responsive";
import { useLocation } from 'react-router-dom';
import Card from './Card';

function FollowingList({ itemList, sectionTitle }) {
    const location = useLocation();

    const route = location.pathname;

    const goDetail = (id) => {
        let basePath = '';

        if (route.startsWith('/product')) {
            basePath = '/product';
        } else if (route.startsWith('/artist')) {
            basePath = '/artist';
        }

        const newPath = `${basePath}/${id}`;

        console.log("Href", window.location.href);
        console.log("New Path", newPath);
        window.location.href = newPath;
    }

    const CheckRoute = () => {
        return (<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-auto">
            {itemList.map((item) => (
                <button className="w-full" key={item.id} onClick={() => goDetail(item.id)} >
                    <Card
                        name={item.name} img={item.img} price={item.price} artist={item.artist} category={item.category} rating={item.rating} />
                </button>
            ))}
        </div >)

    }

    return (
        <>
            <h1 className={`${style.responsiveTitle} mt-10`}>{sectionTitle}</h1>
            <CheckRoute />
        </>
    )
}

export default FollowingList