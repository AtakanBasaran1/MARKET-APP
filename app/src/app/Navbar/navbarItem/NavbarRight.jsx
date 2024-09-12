"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { RiLoginBoxLine } from "react-icons/ri";
import { WiMoonAltThirdQuarter } from "react-icons/wi";


const NavbarRight = () => {

    const { products } = useSelector((store) => store.basket)


    return (
        <div className='flex items-center '>
            <div className='flex flex-row gap-4 '>
                <div className='flex w-[300px] ml-[-1120px] absolute flex-row rounded-[20px] border -mt-1 bg-white  '>
                    <input className=' outline-none bg-white pl-3 rounded-[20px] h-[40px] placeholder:text-black text-black' type="text" placeholder='Ürün Aratınız..' />
                    <CiSearch className='size-[34px] mt-[3px] ml-[255px] absolute cursor-pointer text-blue-600' />
                </div>
                <WiMoonAltThirdQuarter className='size-[38px] ml-[-200px] absolute mt-[-2px] cursor-pointer' />
                <MdFavoriteBorder className='size-[37px] ml-[-155px] absolute mt-[-2px] cursor-pointer' />
                <div className='relative mt-[-2px] ml-[-110px] absolute'>
                    <div className='absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-4 h-4'><p className='text-[12px] ml-[5px] mt-[0px]'>  {products.length}   </p></div>
                    <SlBasket onClick={() => window.location.href = "/sepet"} className='size-[34px] cursor-pointer' />
                </div>
                <RiLoginBoxLine className='size-[34px] ml-[-60px] absolute mt-0 cursor-pointer' />

            </div>
        </div>
    )
}

export default NavbarRight