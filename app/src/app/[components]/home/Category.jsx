"use client"
import { getCategories } from '@/app/[redux]/categorySlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Category = ({ setCategory }) => {
    const dispatch = useDispatch()

    const { categories } = useSelector(state => state.categories)

    console.log(categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='w-full bg-blue-700 flex flex-row rounded-[300px]  text-white h-[60px]  '>


            <div className='flex flex-row font-bold  ml-[300px] mt-0 text-center items-center'>
                <p onClick={() => window.location.href = "/"} className='text-lg  cursor-pointer hover:text-blue-300  rounded-[20px] p-2 capitalize '>Tüm Ürünler</p>
                {
                    categories.map((category, index) => (
                        <div onClick={() => setCategory(category)} className='text-lg  cursor-pointer hover:text-blue-300 rounded-[20px] p-2 capitalize ' key={index}> {category} </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category
