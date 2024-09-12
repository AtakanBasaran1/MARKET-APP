import React from 'react'

const Sorting = ({ setSort }) => {
    return (
        <div className='bg-blue-700 rounded-[300px] my-5 p-5 items-center justify-end flex '>
            <select onChange={e => setSort(e.target.value)} className='cursor-pointer rounded-[300px] flex text-center h-[30px] w-[200px] outline-none' name="" id="">

                <option className='rounded-[300px] bg-blue-400 text-white border-none font-bold' value="inc">En Düşük Fiyat</option>
                <option className='rounded-[300px] bg-blue-400 border-none font-bold text-white' value="dec">En Yüksek Fiyat</option>
            </select>
        </div>
    )
}

export default Sorting