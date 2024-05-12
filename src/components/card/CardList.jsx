import React from "react"
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import style from "../../assets/style/responsive";
import { routeCheck } from "../../utils/GeneralFunctions";

function CardList({ itemList }) {
    const location = useLocation();
    const home = location.pathname == "/"
    return (
        <>

            {!home && <h1 className={style.responsiveTitle}>{routeCheck(location.pathname)} List</h1>}
            {!home && (<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 h-auto">
                {itemList.map((item, index) => (
                    <Link className="w-full" to={`${location.pathname}/${item.id}`} key={index}>
                        <Card name={item.name} img={item.img} price={item.price} artist={item.artist} category={item.category} rating={item.rating} />
                    </Link>
                ))}
            </div>)}
            {home && <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 h-auto">
                {itemList.map((item, index) => (
                    <Link className="w-full" to={`/product${location.pathname}${item.id}`} key={index}>
                        <Card name={item.name} img={item.img} price={item.price} artist={item.artist} category={item.category} rating={item.rating} />
                    </Link>
                ))}
            </div>}
        </>
    )
}

export default CardList
