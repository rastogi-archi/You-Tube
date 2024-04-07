import React, { useContext } from 'react'
import logo from '/logo.png'
import bars from '/menu.png'
import search from '/search.png'
import upload from '/upload.png'
import more from '/more.png'
import notification from '/notification.png'
import profile from '/jack.png'
import { ToggleSidebarContext } from '../context/ToggleSidebar'

const Navbar = () => {
    const toggleState = useContext(ToggleSidebarContext);
    return (
        <nav className='flex justify-between shadow-lg h-14 items-center sticky top-0 bg-white'>
            <div className='flex ml-2 sm:ml-4 gap-5 items-center'>
                <img src={bars} alt="" className='h-5 cursor-pointer hidden sm:block' onClick={() => toggleState.setSidebar(prev => prev === false ? true : false)} />
                <img src={logo} alt="" className='h-7 sm:h-10'/>
            </div>
            <div className='flex border rounded-3xl items-center justify-between'>
                <input type="search" className='ml-3 outline-none p-[6px] sm:p-2 sm:text-xs text-[10px] w-24 sm:w-52 md:w-80 xl:w-96 bg-transparent' placeholder='Search'/>
                <img src={search} alt="" className='sm:h-4 h-3 mr-2 sm:mr-3 cursor-pointer'/>
            </div>
            <div className='gap-3 sm:mr-4 mr-2 cursor-pointer sm:flex'>
                <img src={upload} alt="" className='h-6 hidden sm:block'/>
                <img src={more} alt="" className='h-6 hidden sm:block'/>
                <img src={notification} alt="" className='h-6 hidden sm:block'/>
                <img src={profile} alt="" className='h-6 rounded-full'/>
            </div>
        </nav>
    )
}

export default Navbar
