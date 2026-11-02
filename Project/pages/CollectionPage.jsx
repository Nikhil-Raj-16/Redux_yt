import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'


const CollectionPage = () => {
    const collection = useSelector(state => state.collection.items)

    const dispatch = useDispatch()

    const clearAll = () => {
        dispatch(clearCollection())
    }

    return (

        <div className='overflow-auto px-10 py-5'>
            {collection.length>0? 
            <div className='flex justify-between mb-6'>
                <h2 className='text-xl font-medium text-white'> Your Collection
                </h2>
                <button onClick={() => {
                    clearAll()
                }} className='bg-red-600 active:scale-95 cursor-pointer text-white font-medium px-5 py-2 rounded-3xl'>Clear Collection</button>
            </div>
             : <h2 className='text-xl font-medium text-white'> Collection is Empty </h2>}    
    
            <div className="flex flex-wrap justify-center w-full gap-6">
                {collection.map((item, idx) => {
                    return <div key={idx}><CollectionCard item={item}/></div>
                })}
            </div>
        </div>
  )
}

export default CollectionPage
