"use client";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { addToBasket, calculateBasket } from '@/app/[redux]/basketSlice';
import { FaBox } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import Card from '@/app/(images)/paymentsCard.png';


const Detail = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const { id } = useParams();
    const product = products.find(product => product.id.toString() === id);

    if (!product) {
        return <div>Ürün bulunamadı.</div>;
    }

    const [adet, setAdet] = useState(0);

    const arttir = () => {
        if (adet >= 9) {
        } else {
            setAdet(adet + 1);
        }
    };

    const azalt = () => {
        if (adet > 0) {
            setAdet(adet - 1);
        }
    };



    const addBasket = () => {
        const payload = {
            id: product.id,
            price: product.price,
            image: product.image,
            title: product.title,
            description: product.description,
            count: adet
        };

        dispatch(addToBasket(payload));
        dispatch(calculateBasket())
    };



    return (
        <div className='w-full h-[600px]  p-4'>

            <div className='text-lg bg-white border-2 rounded-[30px] h-[800px]  p-2'>
                <div className='flex flex-row'>


                    <img src={product.image} className="ml-[80px] mt-[50px] w-[450px] h-[600px] mb-4" />

                    <div className='flex flex-col ml-[100px] top-[50px] relative items-center justify-center'>
                        <div className='text-[35px] font-bold w-[650px] mt-[-50px] text-center text-black tracking-[0px] leading-[1.4] '>
                            {product.title}.
                        </div>

                        <div className='inline-block p-1 font-bold text-white text-[40px] mt-[30px] flex items-center'>
                            <span className='text-yellow-600'>{product.price}</span>
                            <p className='text-yellow-600 ml-1'>TL</p>
                        </div>

                        <span className='flex items-center justify-center gap-2 mt-[20px] font-bold text-[16px]'>
                            <span className='text-green-600 font-bold'>RF49C02Q</span>
                            <p className='text-black'>Kodu İle %4 İndirim!</p>
                        </span>

                        <div className='flex flex-row mt-5 gap-2 justify-center items-center'>
                            <input className='w-[200px] bg-gray-200 text-black flex items-center justify-center rounded-[10px] outline-none placeholder:text-gray-800 h-[30px] p-r-2 placeholder:text-[16px] border-[3px] border-green-600  pl-2' placeholder='İndirim Kodunu Yaz' type="text" />
                            <button className='bg-green-600 hover:bg-green-400 w-[150px] h-[30px] rounded-[10px]'><p className='text-[16px]'>Kodu Kullan</p></button>
                        </div>
                        <hr className='flex justify-center border-gray-500 items-center w-[500px] mt-5' />




                        <div className='flex flex-row'>

                            <div className='flex gap-3 text-[28px] mt-5 ml-[0px] absolute'>
                                <h1>Miktar</h1>
                                <div className='cursor-pointer hover:text-blue-600' onClick={arttir}>+</div>
                                <p className='w-5 text-center'>{adet}</p>
                                <div className='cursor-pointer hover:text-blue-600' onClick={azalt}>-</div>
                            </div>

                            <div className='flex flex-col mb-2'>

                                <span className='text-[14px] ml-[190px] mt-5 flex flex-row gap-2'><FaBox className='text-blue-600 text-[16px] mt-[5px]' /> <p>Ücretsiz Kargo (159TL ve üzeri siparişler)
                                </p></span>

                                <span className='text-[14px] ml-[190px] mt-1 flex flex-row gap-2'><FaCircle className='text-green-500 text-[16px] mt-[5px]' /> <p>Ürün stokta
                                </p></span>

                            </div>

                        </div>

                        <button
                            onClick={addBasket}
                            className='p-2 rounded-md w-[500px] bg-blue-700 text-white hover:bg-blue-500 mt-5 h-[50px]'>
                            Sepete Ekle
                        </button>
                        <button

                            className='p-2 rounded-md w-[500px] bg-black text-white hover:bg-gray-800 mt-3 h-[50px] mb-10'>
                            Hemen Satın Al
                        </button>

                        <img className='absolute w-[500px] mt-[560px]' src={Card.src} alt="" />

                    </div>



                </div>


            </div>
        </div>
    );
};

export default Detail;
