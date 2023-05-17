import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='h-[80vh] w-screen px-20 py-10  grid grid-cols-2 grid-rows-1'>
      <section className='leftSection '>
        <h1 className='pr-10 text-5xl leading-snug font-semibold'>
          Experience the lag-less chatting experience here.
        </h1>
      </section>
      <section className='rightSection h-full w-full border-4 border-gray-200 px-10 py-20 flex flex-col justify-between'>
        <Link
          to='/chat'
          className='bg-gray-600 text-center py-4 text-2xl font-semibold text-white'
        >
          Start a new chat
        </Link>
        <Link
          to='/room'
          className='bg-gray-600 text-center py-4 text-2xl font-semibold text-white'
        >
          Join a room chat
        </Link>
        <Link
          to='/private'
          className='bg-gray-600 text-center py-4 text-2xl font-semibold text-white'
        >
          Start a private chat
        </Link>
      </section>
    </div>
  )
}

export default Signup
