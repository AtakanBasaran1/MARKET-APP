"use client";
import { getProducts, getCategoryProducts } from '@/app/[redux]/productSlice';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { FaCirclePlus } from "react-icons/fa6";




const Products = ({ category, sort }) => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        if (category) {
            dispatch(getCategoryProducts(category));
        } else {
            dispatch(getProducts());
        }
    }, [dispatch, category]);










    return (
        <div className='w-full mt-[30px] bg-blue-700 rounded-t-[20px]  p-4'>

            <div className='flex flex-wrap gap-4'>
                {currentItems
                    .sort((a, b) => (sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : 0))
                    .map((product, index) => (
                        <div key={index} className=' rounded-[10px] bg-white w-[300px] flex flex-col items-center ml-[68px] h-[480px] mt-10 p-4'>
                            <Link href={`/detail/${product.id}`} className=''>

                                <FaCirclePlus className='size-[32px] absolute text-blue-500 mt-[-5px] ml-[105px] hover:text-blue-300' />
                            </Link>
                            <img className='w-[180px] h-[230px] cursor-cursor mb-4' src={product.image} />
                            <div className='text-[18px] h-[40px] flex text-center font-semibold mb-4'>{product.title}</div>

                            <div className='text-[20px] font-bold mt-[350px] absolute text-green-600 mb-2'>{product.price}TL</div>

                            <button className='mt-[100px] w-[200px] bg-blue-700 rounded-[20px] text-white h-[35px] hover:bg-blue-500'>Sepete Ekle</button>

                        </div>
                    ))}
            </div>



            <div>
                <ReactPaginate
                    className='text-white flex flex-row gap-5 ml-[520px]  bg-blue-600 rounded-[40px] w-[170px] text-center p-2 mt-5'
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>



        </div>
    );
};

export default Products;
