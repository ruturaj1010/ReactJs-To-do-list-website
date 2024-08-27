import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-3 bg-slate-800 text-white'>
      <div className="logo">
        <span className='font-bold text-xl'>Priority</span>
      </div>
      <ul className='flex gap-5'>
        <li className='mx-4 cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
        <li className='mx-4 cursor-pointer hover:font-bold transition-all duration-75'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
