import React, { useContext } from 'react'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='bg-[#f9f9f9]'>
        <Feed />
      </div>
    </div>
  )
}

export default Home
