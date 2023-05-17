import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-[10vh] w-screen bg-gray-700 text-white flex justify-between items-center px-20 absolute top-0'>
      <a href='/' className='text-3xl font-bold font-mono'>
        React-Chatter
      </a>
      <div className='links-wrapper flex justify-between'>
        <Link to='/chat' className='px-6 text-lg font-medium'>
          CHAT
        </Link>
        <Link to='/room' className='px-6 text-lg font-medium'>
          ROOM
        </Link>
        <Link to='/private' className='px-6 text-lg font-medium'>
          PRIVATE
        </Link>
        <Link to='/' className='px-6 text-lg font-medium'>
          SIGN-UP
        </Link>
      </div>
    </header>
  )
}

export default Header
