"use client";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { addToBasket, calculateBasket } from '@/app/[redux]/basketSlice';


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
        if (adet >= 10) {
            alert("Bu üründen en fazla 10 adet satın alabilirsiniz.");
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
            <div className='border-b pb-2 text-xl font-bold mb-2 px-2'>Detaylar</div>
            <div className='text-lg bg-white border-2 rounded-[30px] h-[800px] cursor-pointer p-2'>
                <div className='flex flex-row'>
                    <img src={product.image} className="ml-[50px] mt-[50px] w-[400px] h-[500px] mb-4" alt={product.title} />
                    <div className='flex items-center justify-center relative'>
                        <div className='flex flex-col items-center'>
                            <div className='font-bold text-[30px] text-center mt-[100px]'>{product.title}</div>
                            <div className='inline-block p-1 rounded-[10px] bg-black font-bold text-white text-[30px] mt-[20px] min-w-[150px]'>
                                {product.price} <span> TL</span>
                            </div>

                        </div>
                    </div>

                </div>

                <p>{product.description}</p>

                <div className='flex gap-5 text-[25px] mt-5'>
                    <div onClick={arttir}>+</div>
                    <p className='w-5 text-center'>{adet}</p>
                    <div onClick={azalt}>-</div>
                </div>
                <button
                    onClick={addBasket}
                    className='p-2 rounded-md w-[200px] bg-blue-700 text-white hover:bg-blue-500 mt-5'>
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
};

export default Detail;
