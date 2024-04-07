import React from 'react'
import video1 from '/video.mp4';
import like from '/like.png';
import dislike from '/dislike.png';
import share from '/share.png';
import save from '/save.png';
import jack from '/jack.png';
import user_profile from '/user_profile.jpg';

const PlayVideo = () => {
    return (
        <div className='xl:w-[80%]'>
            <video src={video1} alt="" controls autoPlay className='w-full rounded-lg' />
            <h2 className='font-bold mt-2 text-lg'>Best YouTube Channel To Learn Web Development</h2>
            <div className='flex justify-between'>
                <p className='text-[10px] text-gray-700 ml-2 mt-1'>1525 Views &bull; 2 days ago</p>
                <div className='flex gap-2 text-gray-700 text-[10px] mr-2'>
                    <p className='flex justify-center items-center gap-1'><img src={like} alt="" className='h-4' />125</p>
                    <p className='flex justify-center items-center gap-1'><img src={dislike} alt="" className='h-4' />2</p>
                    <p className='flex justify-center items-center gap-1'><img src={share} alt="" className='h-4' />Share</p>
                    <p className='flex justify-center items-center gap-1'><img src={save} alt="" className='h-4' />Save</p>
                </div>
            </div>
            <hr className='mt-2 mb-2' />
            <div>
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>

                    <img src={jack} alt="" className='rounded-full h-8' />
                    <div>
                        <h3 className='font-semibold text-sm'>GreatStack</h3>
                        <p className='text-xs text-gray-600'>1M subscribers</p>
                    </div>
                    </div>
                    <button className='bg-red-500 text-white text-xs w-20 h-6 rounded-3xl'>Subscribe</button>
                </div>
                <div className='text-xs text-gray-600 ml-12 mt-2 font-semibold'>
                    <p>Channel that makes learning easy</p>
                    <p>Subscribe GreatStack to watch more tutorials on web development</p>
                </div>
                <hr className='ml-12 mt-2' />
                <p className='ml-12 text-xs font-semibold text-gray-600 mt-2'>130 comments</p>
                <div className='ml-12 mr-2'>
                    <div className='mt-3 mb-2'>
                        <img src={user_profile} alt="" className='rounded-full h-6' />
                        <div className='ml-8'>
                            <h2 className='text-sm font-semibold mt-[-20px]'>Jack Nicholson 1 day ago</h2>
                            <p className='text-xs text-gray-600'>A global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.</p>
                            <div className='flex gap-4 mt-1'>
                                <p className='flex text-xs items-center gap-1'><img src={like} alt="" className='h-5' />244</p>
                                <img src={dislike} alt="" className='h-5' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 mb-2'>
                        <img src={user_profile} alt="" className='rounded-full h-6' />
                        <div className='ml-8'>
                            <h2 className='text-sm font-semibold mt-[-20px]'>Jack Nicholson 1 day ago</h2>
                            <p className='text-xs text-gray-600'>A global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.</p>
                            <div className='flex gap-4 mt-1'>
                                <p className='flex text-xs items-center gap-1'><img src={like} alt="" className='h-5' />244</p>
                                <img src={dislike} alt="" className='h-5' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 mb-2'>
                        <img src={user_profile} alt="" className='rounded-full h-6' />
                        <div className='ml-8'>
                            <h2 className='text-sm font-semibold mt-[-20px]'>Jack Nicholson 1 day ago</h2>
                            <p className='text-xs text-gray-600'>A global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.</p>
                            <div className='flex gap-4 mt-1'>
                                <p className='flex text-xs items-center gap-1'><img src={like} alt="" className='h-5' />244</p>
                                <img src={dislike} alt="" className='h-5' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 mb-2'>
                        <img src={user_profile} alt="" className='rounded-full h-6' />
                        <div className='ml-8'>
                            <h2 className='text-sm font-semibold mt-[-20px]'>Jack Nicholson 1 day ago</h2>
                            <p className='text-xs text-gray-600'>A global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.</p>
                            <div className='flex gap-4 mt-1'>
                                <p className='flex text-xs items-center gap-1'><img src={like} alt="" className='h-5' />244</p>
                                <img src={dislike} alt="" className='h-5' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 mb-2'>
                        <img src={user_profile} alt="" className='rounded-full h-6' />
                        <div className='ml-8'>
                            <h2 className='text-sm font-semibold mt-[-20px]'>Jack Nicholson 1 day ago</h2>
                            <p className='text-xs text-gray-600'>A global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.</p>
                            <div className='flex gap-4 mt-1'>
                                <p className='flex text-xs items-center gap-1'><img src={like} alt="" className='h-5' />244</p>
                                <img src={dislike} alt="" className='h-5' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 mb-2'>
                        <img src={user_profile} alt="" className='rounded-full h-6' />
                        <div className='ml-8'>
                            <h2 className='text-sm font-semibold mt-[-20px]'>Jack Nicholson 1 day ago</h2>
                            <p className='text-xs text-gray-600'>A global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.</p>
                            <div className='flex gap-4 mt-1'>
                                <p className='flex text-xs items-center gap-1'><img src={like} alt="" className='h-5' />244</p>
                                <img src={dislike} alt="" className='h-5' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 mb-2'>
                        <img src={user_profile} alt="" className='rounded-full h-6' />
                        <div className='ml-8'>
                            <h2 className='text-sm font-semibold mt-[-20px]'>Jack Nicholson 1 day ago</h2>
                            <p className='text-xs text-gray-600'>A global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.</p>
                            <div className='flex gap-4 mt-1'>
                                <p className='flex text-xs items-center gap-1'><img src={like} alt="" className='h-5' />244</p>
                                <img src={dislike} alt="" className='h-5' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 mb-2'>
                        <img src={user_profile} alt="" className='rounded-full h-6' />
                        <div className='ml-8'>
                            <h2 className='text-sm font-semibold mt-[-20px]'>Jack Nicholson 1 day ago</h2>
                            <p className='text-xs text-gray-600'>A global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.</p>
                            <div className='flex gap-4 mt-1'>
                                <p className='flex text-xs items-center gap-1'><img src={like} alt="" className='h-5' />244</p>
                                <img src={dislike} alt="" className='h-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo
