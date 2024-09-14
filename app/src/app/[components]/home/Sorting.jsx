import React from 'react'

const Sorting = ({ setSort }) => {
    return (
        <div id='right' className=' w-[1200px] ml-[100px] rounded-[300px] my-5 p-5 bg-white items-center justify-end flex '>
            <select onChange={e => setSort(e.target.value)} className='cursor-pointer rounded-[300px] flex text-center h-[30px] w-[200px] outline-none' name="" id="">

                <option className='rounded-[300px] bg-gray-200 text-black border-none font-bold' value="inc">En Düşük Fiyat</option>
                <option className='rounded-[300px] bg-gray-200 border-none font-bold text-black' value="dec">En Yüksek Fiyat</option>
            </select>
        </div>
    )
}

export default Sorting