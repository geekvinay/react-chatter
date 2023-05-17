import React from 'react'
import errSVG from '../assets/error-svg.svg'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-[70vh] w-full px-20 grid grid-cols-2 grid-rows-1'>
      <img src={errSVG} alt='' className='h-[70vh] object-contain' />
      <section className='rightSection h-full w-full border-4 border-gray-200 px-10 py-20 flex flex-col justify-between'>
        <h1 className=''>This route is under development 👨‍🏭 👨‍🏭</h1>
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

export default ErrorPage
