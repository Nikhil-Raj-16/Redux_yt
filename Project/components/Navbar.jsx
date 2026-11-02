import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5 bg-[#8BBB92]'>
        <Link className='font-bold text-2xl text-[#2A835F]' to='/'>MediaSearch</Link>

        <div className='flex items-center text-white font-semibold gap-10'>
        <Link className='bg-[#2A835F] rounded-3xl p-2' to='/'>Search</Link>
        <Link className='bg-[#2A835F] rounded-3xl p-2' to='/collection'>Collection</Link>

        </div>
    </div>
    
  )
}

export default Navbar
