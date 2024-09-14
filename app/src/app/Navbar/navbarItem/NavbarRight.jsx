"use client"
import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { RiLoginBoxLine } from "react-icons/ri";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { IoIosClose } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromBasket, calculateBasket } from '@/app/[redux]/basketSlice';


const NavbarRight = () => {

    const { products, totalAmount } = useSelector((store) => store.basket)
    const [sepet, setSepet] = useState(false)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(calculateBasket())
    }, [])

    const handleRemove = (id) => {
        dispatch(removeFromBasket({ id }));
        dispatch(calculateBasket());
    };

    return (
        <div className='flex items-center '>
            <div className='flex flex-row gap-4 '>
                <div className='flex w-[300px] ml-[-1230px] absolute flex-row rounded-[20px] border -mt-1 bg-gray-300  '>
                    <input className=' outline-none bg-gray-300 pl-4 rounded-[20px] h-[40px] placeholder:text-black text-black' type="text" placeholder='Ürün Aratınız..' />
                    <CiSearch className='size-[34px] mt-[3px] ml-[255px] absolute cursor-pointer text-black transition-transform ease-in-out hover:scale-110' />
                </div>
                <WiMoonAltThirdQuarter className='size-[38px] ml-[-200px] text-black absolute mt-[-2px] cursor-pointer transition-transform ease-in-out hover:scale-110' />
                <MdFavoriteBorder className='size-[37px] ml-[-155px] text-black absolute mt-[-2px] cursor-pointer transition-transform ease-in-out hover:scale-110' />
                <div className='relative mt-[-2px] ml-[-110px] absolute'>
                    <div className='absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-4 h-4'><p className='text-[12px] ml-[5px] mt-[0px]'>  {products.length}   </p></div>
                    <SlBasket onClick={() => setSepet(true)} className='size-[34px] cursor-pointer text-black transition-transform ease-in-out hover:scale-110' />
                </div>
                <RiLoginBoxLine className='size-[34px] ml-[-60px] absolute mt-0 cursor-pointer text-black transition-transform ease-in-out hover:scale-110' />

            </div>

            {sepet ? (


                <div className='w-[600px] bg-white border-l-[3px] border-black h-[950px] z-[9999] fixed ml-[-400px] mt-[490px]'>
                    <IoIosClose onClick={() => setSepet(false)} className='fixed mt-[180px] size-11 text-red-600 hover:text-red-400 ml-[410px] cursor-pointer transition-transform ease-in-out hover:scale-125' />
                    {
                        products && products.map((product) => {
                            return (
                                <div key={product.id}>
                                    <div className='mt-[220px] flex flex-row text-black gap-3 mb-[-180px]'>
                                        <img className='w-[100px] h-[100px] ml-4' src={product.image} alt="" />
                                        <p className='font-bold mt-4 text-[14px] text-center whitespace-nowrap text-ellipsis w-[300px] overflow-hidden'>
                                            {product.title}
                                        </p>

                                        <div className='flex flex-row mt-[50px] ml-[-310px]'>
                                            <span className='font-bold flex gap-1 flex-row mt-3 text-yellow-600'> {product.price} <p>TL</p> </span>
                                            <span className='text-[14px] font-bold ml-[30px] mt-3'>({product.count}) Adet</span>
                                            <button onClick={() => handleRemove(product.id)} className='w-[100px] bg-blue-700 rounded-[30px] h-[25px] mt-[10px] hover:bg-red-500 ml-[40px] text-white'>Sil</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <h2 className='fixed bottom-0 left-[1073px] w-[600px] bg-white  font-bold text-black z-[10000] p-4'>
                        Toplam Tutar | {totalAmount} <span className='ml-2'>TL</span>
                    </h2>
                </div>


            ) : null}


        </div>
    )
}

export default NavbarRight