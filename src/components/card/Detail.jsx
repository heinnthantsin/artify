import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from '../../assets/style/responsive';
import { TabTitle } from '../../utils/GeneralFunctions';
import Button from '../util/Button';
import Star from './Star';
import CustomRatingIcon from '../util/CustomRatingIcon';
// import { useCartStore } from '../store/cart-store';


function Detail({ name, img, artist, category, price, rating, productId, artistId, aboutArtist }) {
    const location = useLocation();
    const productRotue = location.pathname.startsWith('/product');
    TabTitle(`Artify | Details`)
    const routeCheck = (route) => {
        switch (route) {
            case `/product/${productId}`: return "Product"
            case `/artist/${artistId}`: return "Artist"
            default: return ""
        }
    }
    // const { carts, addCartItem, removeCartItem } = useCartStore(state => ({
    //     cart: state.carts,
    //     addCart: state.addCart,
    //     removeCart: state.removeCart
    // }));
    console.log(location.pathname)

    return (
        <>
            <h1 className={style.responsiveTitle}>{routeCheck(location.pathname)} Detail</h1>
            <div className='flex flex-col lg:flex-row border border-gray-400 gap-5 sm:flex-col md:align-center rounded-md p-3 max-w-[900px] mx-auto'>
                <div>
                    <img src={img} alt="details" className='min-h-[400px] max-w-[300px]
                    md:min-w-[400px]  object-cover rounded-xl' />
                </div>
                <div className='mt-4 text-textColor text-center lg:text-left w-full'>
                    {name && <div className='my-3'> <b>Product Name :</b> {name}</div>}
                    {artist && <div className='my-3'>  <b>Artist :</b> {artist}</div>}
                    {category && <div className='my-3'> <b>Art Type :</b> {category}</div>}
                    {rating && <div className='mb-5 flex items-center justify-center lg:justify-start'><b>Rating :</b> {<Star rating={rating} />}</div>}
                    <div className='flex gap-7 mb-3'>
                        {price && <div className="text-4xl font-semibold">${price}</div>}

                    </div>
                    {productRotue && <div className='w-fit'><CustomRatingIcon /></div>}

                    {productRotue &&
                        <div className=''>
                            <button> <Button customeClass={"w-[35%] block my-3"} buttonName={"Add to Cart"} /></button>
                            <Button customeClass="w-[60%]" buttonName={"Place Order"} />
                        </div>
                    }
                    {
                        aboutArtist && (
                            <><p className='mt-3 font-bold'>About Artist</p><p className='text-sm mt-3'>{` ${aboutArtist}`}</p></>)
                    }
                </div>
            </div>
        </>
    )
}

export default Detail