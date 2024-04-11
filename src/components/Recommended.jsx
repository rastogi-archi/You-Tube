import React, { useEffect, useState } from 'react'
import { API_KEY, value_converter} from '../data'
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {

    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideoUrl = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideoUrl).then(res => res.json()).then(data => setApiData(data.items))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='flex flex-col sm:w-[160px] xl:w-[300px] ml-[-5px] sm:ml-0'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" className='rounded-lg xl:h-40' />
                        <h4 className='font-bold text-sm'>{item.snippet.title}</h4>
                        <p className='text-gray-600'>{item.snippet.channelTitle}</p>
                        <p className='text-xs mb-5'>{value_converter(item.statistics.viewCount)} Views</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended
