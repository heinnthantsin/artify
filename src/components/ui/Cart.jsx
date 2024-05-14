import React, { useEffect, useState } from 'react'
import Button from '../util/Button'
import { useCartStore } from '../../store/cart-store';


// const quantityController = (qty) => {
//     const [inputQty, SetInputQty] = useState(qty);
//     useEffect(() => {
//         SetInputQty(qty)
//     }, [inputQty])
//     return (
//         <>

//         </>)
// }

function Cart({ item }) {
    const cartStore = useCartStore();
    const [qty, setQty] = useState(item.quantity);

    useEffect(() => {
        cartStore.replacedItem({
            ...item,
            quantity: item.quantity
        })
    }, [qty])

    return (
        <>
            <div className='w-full h-full'>
                <div className='w-[30%] h-[30%]'>
                    <img src={item.img} className='object-scale-down' />
                </div>
                <div>
                    <h1>{item.productName}</h1>
                    <p>Price: ${item.price}</p>
                    {item.isHandcraft && (<>
                        <Button customeClass={""} buttonName={"-"} />
                        <input type="text" value={qty} onChange={(val) => setQty(val)} />
                        <Button customeClass={""} buttonName={"+"} />
                    </>)}
                </div>
            </div>
        </>
    )
}

export default Cart