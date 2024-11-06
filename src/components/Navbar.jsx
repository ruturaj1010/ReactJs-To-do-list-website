import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-3 bg-slate-800 text-white fixed top-0 w-screen z-50'>
      <div className="logo">
        <span className='font-bold text-xl'>Priority</span>
      </div>
      <ul className='flex gap-5'>
        <li className='mx-4 cursor-pointer font-semibold hover:scale-105 transition-all duration-75'>Home</li>
        <li className='mx-4 cursor-pointer font-semibold hover:scale-105 transition-all duration-75'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
