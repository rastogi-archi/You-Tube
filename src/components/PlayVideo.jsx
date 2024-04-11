import React, { useEffect, useState,} from 'react'
import {useParams} from 'react-router-dom'
import like from '/like.png';
import dislike from '/dislike.png';
import share from '/share.png';
import save from '/save.png';
import { API_KEY, value_converter } from '../data'
import moment from 'moment'

const PlayVideo = () => {
    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        // fetching videos data
        const videDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videDetailsUrl).then(res => res.json()).then(data => setApiData(data.items[0]))
    }

    const fetchOtherData = async () => {
        // fetching channel data
        const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelDataUrl).then(res => res.json()).then(data => setChannelData(data.items[0]))

        // fetching comment data
        const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(commentUrl).then(res => res.json()).then(data => setCommentData(data.items))
    }

    useEffect(() => {
        fetchVideoData();
    }, [videoId])

    useEffect(() => {
        fetchOtherData();
    }, [apiData])

    return (
        <div className='md:w-[100%] xl:w-[80%]'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} className='w-full sm:w-[100%] md:w-full xl:w-full rounded-lg h-72 md:h-96 xl:h-[32vw]' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2 className='font-bold mt-2 text-lg'>{apiData ? apiData.snippet.title : "Title Here"}</h2>
            <div className='flex justify-between gap-2'>
                <p className='text-[10px] text-gray-700 mt-1 sm:text-xs'>{apiData ? value_converter(apiData.statistics.viewCount) : "16K"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""} </p>
                <div className='flex gap-2 text-gray-700 text-[10px] mr-2 sm:text-xs'>
                    <p className='flex justify-center items-center gap-1'><img src={like} alt="" className='h-4' />{apiData ? value_converter(apiData.statistics.likeCount) : 155}</p>
                    <p className='flex justify-center items-center gap-1'><img src={dislike} alt="" className='h-4' /></p>
                    <p className='flex justify-center items-center gap-1'><img src={share} alt="" className='h-4' />Share</p>
                    <p className='flex justify-center items-center gap-1'><img src={save} alt="" className='h-4' />Save</p>
                </div>
            </div>
            <hr className='mt-2 mb-2' />
            <div>
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" className='rounded-full h-8' />
                        <div>
                            <h3 className='font-semibold text-sm'>{apiData ? apiData.snippet.channelTitle : ""}</h3>
                            <p className='text-xs text-gray-600'>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} subscribers</p>
                        </div>
                    </div>
                    <button className='bg-red-500 text-white text-xs w-20 h-6 rounded-3xl'>Subscribe</button>
                </div>
                <div className='text-xs text-gray-600 ml-12 mt-2 font-semibold'>
                    <p>{apiData ? apiData.snippet.description.slice(0, 200) : "Description Here"}</p>
                </div>
                <hr className='ml-8 mt-2' />
                <p className='ml-12 text-xs font-semibold text-gray-600 mt-2'>{apiData ? value_converter(apiData.statistics.commentCount) : 102} comments</p>
                {commentData.map((item, index) => {
                    return (
                        <div key={index} className='ml-5 mr-2'>
                            <div className='mt-3 mb-2'>
                                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className='rounded-full h-6' />
                                <div className='ml-8'>
                                    <h2 className='text-xs sm:text-sm font-semibold mt-[-20px]'>{item.snippet.topLevelComment.snippet.authorDisplayName}<span className='text-gray-600 ml-2'>1 day ago</span></h2>
                                    <p className='text-[12px] sm:text-xs text-gray-600'>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                    <div className='flex gap-4 mt-1'>
                                        <p className='flex text-xs items-center gap-1'><img src={like} alt="" className='h-5' />{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</p>
                                        <img src={dislike} alt="" className='h-5' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlayVideo
