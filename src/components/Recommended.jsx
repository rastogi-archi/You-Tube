import React from 'react'
import thumbnail1 from '/thumbnail1.png'
import thumbnail2 from '/thumbnail2.png'
import thumbnail3 from '/thumbnail3.png'
import thumbnail4 from '/thumbnail4.png'
import thumbnail5 from '/thumbnail5.png'
import thumbnail6 from '/thumbnail6.png'
import thumbnail7 from '/thumbnail7.png'
import thumbnail8 from '/thumbnail8.png'

const Recommended = () => {
    return (
        <div>
            <div className='mb-2'>
                <img src={thumbnail1} alt="" className='rounded-lg xl:h-36' />
                <h4 className='font-bold text-sm'>Best channel that help you to be a web developer</h4>
                <p className='text-gray-600'>GreatStack</p>
                <p className='text-xs'>199K Views</p>
            </div>
            <div className='mb-2'>
                <img src={thumbnail2} alt="" className='rounded-lg xl:h-36' />
                <h4 className='font-bold text-sm'>Best channel that help you to be a web developer</h4>
                <p className='text-gray-600'>GreatStack</p>
                <p className='text-xs'>199K Views</p>
            </div>
            <div className='mb-2'>
                <img src={thumbnail3} alt="" className='rounded-lg xl:h-36'/>
                <h4 className='font-bold text-sm'>Best channel that help you to be a web developer</h4>
                <p className='text-gray-600'>GreatStack</p>
                <p className='text-xs'>199K Views</p>
            </div>
            <div className='mb-2'>
                <img src={thumbnail4} alt="" className='rounded-lg xl:h-36'/>
                <h4 className='font-bold text-sm'>Best channel that help you to be a web developer</h4>
                <p className='text-gray-600'>GreatStack</p>
                <p className='text-xs'>199K Views</p>
            </div>
            <div className='mb-2'>
                <img src={thumbnail5} alt="" className='rounded-lg xl:h-36'/>
                <h4 className='font-bold text-sm'>Best channel that help you to be a web developer</h4>
                <p className='text-gray-600'>GreatStack</p>
                <p className='text-xs'>199K Views</p>
            </div>
        </div>
    )
}

export default Recommended
