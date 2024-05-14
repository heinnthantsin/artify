import React, { useState } from 'react'
import Cart from './Cart'
import Button from '../util/Button'
import { Link } from 'react-router-dom'
import { useCartStore } from '../../store/cart-store';


function CartList({ isCartOpen, setIsCardOpen }) {
    const cartStroe = useCartStore();
    return (
        <>
            {
                isCartOpen &&
                <div className='fixed h-screen w-screen lg:hidden bg-black/40 backdrop-blur-sm top-0 right-0' onClick={() => setIsCardOpen(!isCartOpen)}></div>
            }

            {/* cart list - drawer */}
            <section className={isCartOpen ? 'text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 w-[50vh] transition-all duration-400' :
                ' text-black bg-white flex-col absolute left-[-100%] top-0 h-screen p-8 gap-8z-50 w-[-300px] duration-700'
            }>
                <button onClick={() => setIsCardOpen(false)} className='mt-0 mb-8 text-xl cursor-pointer' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                        <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div>
                    {
                        cartStroe.carts.length > 0 && (cartStroe.carts.map((item) => <Cart item={item} />))

                    }
                </div>
                <Link to="/checkout"><Button customeClass={"w-full"} buttonName={"Checkout"} /></Link>
            </section>
        </>
    )
}

export default CartList