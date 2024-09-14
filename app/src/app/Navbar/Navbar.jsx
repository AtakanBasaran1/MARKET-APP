import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = () => {
    return (
        <div id='bottom' className='flex bg-white items-center justify-between my-5 z-10 rounded-[300px] h-[70px] text-white '>
            <NavbarLeft />
            <NavbarRight />
        </div>
    )
}

export default Navbar