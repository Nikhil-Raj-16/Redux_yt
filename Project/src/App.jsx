import React from 'react'
import { fetchGifs, fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import CollectionPage from '../pages/CollectionPage'

const App = () => {
  
  function getPhotos(){
    fetchPhotos()
  }


  return (
    <div className='min-h-screen w-full bg-[#092328]'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>


      <ToastContainer/>
    </div>
  )
}

export default App
