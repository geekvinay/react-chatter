import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[10vh] w-screen bg-gray-700 text-white flex justify-between items-center px-20 absolute bottom-0'>
      <a href='/' className='text-3xl font-bold font-mono'>
        Developed with ❤️
      </a>
      <div className='links-wrapper flex justify-between'>
        <a href='/room' className='px-6 text-lg font-medium'>
          © - VINAY KISHORE
        </a>
      </div>
    </footer>
  )
}

export default Footer
