import React from 'react'
import PlayVideo from '../components/PlayVideo'
import Recommended from '../components/Recommended'

const Video = () => {
  return (
    <div className='p-4 sm:flex gap-5'>
      <PlayVideo/>
      <Recommended/>
    </div>
  )
}

export default Video
