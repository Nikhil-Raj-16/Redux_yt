import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    
    const submitHandler = (e) =>{
        e.preventDefault();

        dispatch(setQuery(text))
        setText('')
        
    }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex p-10 bg-[#12544F] gap-5'>
        <input value={text} 
        required 
        onChange={(e) => {
            // console.log(e.target.value);
            setText(e.target.value) 
            
        }}
        className='border-2 w-full px-4 py-2 text-xl text-[#8BBB92] rounded outline-null' type="text" placeholder='Search anything...'/>
        <button className='border-2 px-4 py-2 text-xl text-[#8BBB92] rounded outline-null cursor-pointer active:scale-95'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
