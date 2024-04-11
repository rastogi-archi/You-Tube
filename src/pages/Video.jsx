import React from 'react'
import PlayVideo from '../components/PlayVideo'
import Recommended from '../components/Recommended'
import {useParams} from 'react-router-dom'

const Video = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className='p-4 sm:flex gap-5'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
