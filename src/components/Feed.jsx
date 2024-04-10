import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../data.js'
import moment from 'moment'

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videoUrl).then(response => response.json()).then(data => setData(data.items));
  }
  useEffect(() => {
    fetchData();
  }, [category])

  return (
    <div className='flex flex-wrap gap-4 justify-evenly mt-6 sm:pl-1'>
      {data.map((item) => {
        return (
          <Link Link to={`video/${item.snippet.categoryId}/${item.id}`} className='w-72 mb-5' >
            <img src={item.snippet.thumbnails.medium.url} alt="" className='h-44 rounded-md' />
            <h2 className='text-sm font-semibold'>{item.snippet.title}</h2>
            <h3 className='text-gray-600 text-xs font-semibold mt-1'>{item.snippet.channelTitle}</h3>
            <p className='text-xs font-semibold mt-1'>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        )
      })}
    </div >
  )
}

export default Feed
