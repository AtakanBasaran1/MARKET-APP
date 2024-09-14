"use client";
import { getProducts, getCategoryProducts } from '@/app/[redux]/productSlice';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { MdArticle } from "react-icons/md";




const Products = ({ category, sort }) => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;
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
        <div id='bottom' className='w-full mt-[30px]   rounded-t-[20px]  p-4'>

            <div className='flex flex-wrap gap-1'>
                {currentItems
                    .sort((a, b) => (sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : 0))
                    .map((product, index) => (
                        <div key={index} className='  flex flex-col items-center ml-[4px] h-[480px] mt-10 p-4'>


                            <div class="card1">
                                <div class="image_container">

                                    <img className='w-[180px] h-[180px] ml-[45px] mt-2' src={product.image} alt="" />

                                </div>
                                <div class="title">
                                    <span>{product.title} </span>
                                </div>

                                <Link href={`/detail/${product.id}`} className=''>
                                    <MdArticle className='size-[35px] absolute text-black mt-[-315px] z-50 ml-[235px] hover:text-gray-600' />

                                </Link>

                                <div class="action">
                                    <div class="price">
                                        <span>{product.price}TL </span>
                                    </div>
                                    <button class="cart-button">
                                        <svg
                                            class="cart-icon"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                                stroke-linejoin="round"
                                                stroke-linecap="round"
                                            ></path>
                                        </svg>
                                        <span>Sepete Ekle</span>
                                    </button>
                                </div>
                            </div>


                        </div>
                    ))}
            </div>





            <div>
                <ReactPaginate
                    className='text-white flex flex-row gap-8 ml-[590px]  bg-blue-600 rounded-[40px] w-[190px] text-center p-2 mt-5'
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
