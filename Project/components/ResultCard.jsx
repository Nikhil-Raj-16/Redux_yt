import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {


    const dispatch = useDispatch()

  const addToCollection = (item) => {
    // console.log("send to dispatch");
    
    dispatch(addCollection(item))
    dispatch(addedToast())

  }  
  return (
    <div className='relative w-[17vw] h-70 rounded bg-gray-600 '>
        <a href={item.src} target='_blank'>
        <div className='h-full'>
        {item.type == 'photo' ? <img className='h-full w-full object-cover rounded object-center' src={item.src} alt="" /> :''}
        {item.type == 'videos'?<video className='h-full w-full object-cover rounded object-center' autoPlay loop muted src={item.src}></video> :''}
        {item.type == 'GIFs' ? <img className='h-full w-full object-cover rounded object-center' src={item.src} alt="" /> :''}
        </div>
        </a>
        <div id='bottom' className='flex h-[35%] w-full justify-between px-4 absolute bottom-0 text-white font-medium text-sm p-3'>
        <h2 className='text-sm font-semibold capitalize h-15 overflow-hidden'>{item.title}</h2>
        <button onClick={() => {
            addToCollection(item)
        }}
         className="inline-flex h-[70%] items-center justify-center px-3  bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white font-medium text-xs rounded-full border border-white/20 active:scale-95 transition-all cursor-pointer">
        SAVE
        </button>
        </div>
    </div>
  )
}

export default ResultCard
