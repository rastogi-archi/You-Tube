import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/video/:categoryId/:videoId' element={<Video />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
