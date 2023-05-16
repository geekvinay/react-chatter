import React from 'react'

const Header = () => {
  return (
    <header className='h-[10vh] w-screen bg-gray-700 text-white flex justify-between items-center px-20'>
      <a href='/' className='text-3xl font-bold font-mono'>
        React-Chatter
      </a>
      <div className='links-wrapper flex justify-between'>
        <a href='/chat' className='px-6 text-lg font-medium'>
          CHAT
        </a>
        <a href='/room' className='px-6 text-lg font-medium'>
          ROOM
        </a>
        <a href='/private' className='px-6 text-lg font-medium'>
          PRIVATE
        </a>
        <a href='/signup' className='px-6 text-lg font-medium'>
          SIGN-UP
        </a>
      </div>
    </header>
  )
}

export default Header
