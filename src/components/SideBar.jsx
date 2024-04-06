import React, { useContext } from 'react'
import home from '/home.png'
import game_icon from '/game_icon.png'
import automobiles from '/automobiles.png'
import sports from '/sports.png'
import entertainment from '/entertainment.png'
import tech from '/tech.png'
import music from '/music.png'
import blogs from '/blogs.png'
import news from '/news.png'
import jack from '/jack.png'
import simon from '/simon.png'
import tom from '/tom.png'
import megan from '/megan.png'
import cameron from '/cameron.png'
import { ToggleSidebarContext } from '../context/ToggleSidebar'

const SideBar = () => {
    const toggleState = useContext(ToggleSidebarContext);
    return (
        <div className={`ml-3 mt-4 mb-5 font-medium w-[40%] sm:w-[20%] ${toggleState.sidebar?"":"small-sidebar"}`}>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                    <img src={home} alt="" className='h-5 sm:h-6' />
                    <p className='text-xs sm:text-sm'>Home</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={game_icon} alt="" className='h-5 sm:h-6' />
                    <p className='text-xs sm:text-sm'>Gaming</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={automobiles} alt="" className='h-5 sm:h-6' />
                    <p className='text-xs sm:text-sm'>Automobiles</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={sports} alt="" className='h-5 sm:h-6' />
                    <p className='text-xs sm:text-sm'>Sports</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={entertainment} alt="" className='h-5 sm:h-6' />
                    <p className='text-xs sm:text-sm'>Entertainment</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={tech} alt="" className='h-5 sm:h-6' />
                    <p className='text-xs sm:text-sm'>Technology</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={music} alt="" className='h-5 sm:h-6' />
                    <p className='text-xs sm:text-sm'>Music</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={blogs} alt="" className='h-5 sm:h-6' />
                    <p className='text-xs sm:text-sm'>Blogs</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={news} alt="" className='h-5 sm:h-6' />
                    <p className='text-xs sm:text-sm'>News</p>
                </div>
                <hr />
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='text-gray-600 text-sm font-semibold mt-2 ml-2'>Subscribed</h3>
                <div className='flex items-center gap-2'>
                    <img src={jack} alt="" className='rounded-full h-8' />
                    <p className='text-xs sm:text-sm'>PewDiePie</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={simon} alt="" className='rounded-full h-8' />
                    <p className='text-xs sm:text-sm'>MrBeast</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={tom} alt="" className='rounded-full h-8' />
                    <p className='text-xs sm:text-sm'>Justin Bieber</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={megan} alt="" className='rounded-full h-8' />
                    <p className='text-xs sm:text-sm'>5-Minute Crafts</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={cameron} alt="" className='rounded-full h-8' />
                    <p className='text-xs sm:text-sm'>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar
