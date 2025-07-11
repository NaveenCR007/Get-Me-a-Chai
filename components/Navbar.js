import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-4 items-center bg-zinc-900 text-white h-15'>
            <div className='font-bold text-2xl flex items-center justify-center'>Get Me a Chai<span className='mb-1'><img width={40} height={40} src="/tea.gif" alt="" /></span></div>

            <ul className='flex space-x-4'>
                <a href='/' className='cursor-pointer hover:text-gray-400 font-semibold'>Home</a>
                <a href='/' className='cursor-pointer hover:text-gray-400 font-semibold'>About</a>
                <a href='/' className='cursor-pointer hover:text-gray-400 font-semibold'>Creators</a>
                <a href='/' className='cursor-pointer hover:text-gray-400 font-semibold'>Contact</a>
            </ul>
        </nav>
    )
}

export default Navbar
