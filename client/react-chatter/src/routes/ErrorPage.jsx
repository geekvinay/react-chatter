import React from 'react'
import errSVG from '../assets/error-svg.svg'

const ErrorPage = () => {
  return (
    <div className='h-[70vh] w-full px-20 bg-red-200 grid grid-cols-2 grid-rows-1'>
      <img src={errSVG} alt='' className='h-[70vh] object-contain' />
      <div className='right-wrapper'></div>
    </div>
  )
}

export default ErrorPage
