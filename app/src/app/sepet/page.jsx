"use client"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromBasket, calculateBasket } from '../[redux]/basketSlice'

const page = () => {
    const { products, totalAmount } = useSelector((store) => store.basket)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(calculateBasket())
    }, [])

    const handleRemove = (id) => {
        dispatch(removeFromBasket({ id }));
        dispatch(calculateBasket());
    };

    return (
        <div>
            {
                products && products.map((product) => {
                    return (
                        <div>
                            <div className='mb-10  flex flex-row gap-5'>
                                <img className='w-[100px] ' src={product.image} alt="" />
                                <p className='font-bold mt-3'> {product.title}<span>({product.count}) Adet</span> </p>
                                <p className='font-bold text-green-700 mt-3'> {product.price}$ </p>
                                <button onClick={() => handleRemove(product.id)} className='w-[100px] bg-blue-700 rounded-md h-[25px] mt-3 text-white hover:bg-red-500'>Sil</button>

                            </div>

                        </div>
                    )
                })
            }
            <h2>TOPLAM TUTAR : {totalAmount} </h2>
        </div>
    )
}

export default page