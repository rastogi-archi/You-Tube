import React, { useContext, useState } from 'react'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'

const Home = () => {
const [category, setCategory] = useState(0);

  return (
    <div className='flex'>
      <SideBar category={category} setCategory={setCategory}/>
      <div className='bg-[#f9f9f9]'>
        <Feed category={category}/>
      </div>
    </div>
  )
}

export default Home
