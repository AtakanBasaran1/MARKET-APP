import React from 'react'

const NavbarLeft = () => {
    return (
        <div onClick={() => window.location.href = "/"} className='text-3xl cursor-pointer ml-5 font-bold hover:text-blue-400 text-blue-200'>AR|&</div>
    )
}

export default NavbarLeft