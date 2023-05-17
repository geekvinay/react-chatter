import React, { useDeferredValue, useEffect, useState } from 'react'
import Chats from '../components/Chats'
import '../assets/Chat'

const Home = () => {
  const [userName, setUserName] = useState({ userName: '' })
  const [isActive, setIsActive] = useState(false)
  const [isLive, setIsLive] = useState(true)
  return (
    <div className='px-20 py-20 h-full grid grid-cols-2 grid-rows-1 box-border'>
      <form
        action='/'
        className='details flex flex-col pr-40'
        onSubmit={e => e.preventDefault()}
      >
        <label htmlFor='userName' className='cursor-pointer'>
          Please enter your username to show to the room
        </label>
        <input
          type='text'
          name='userName'
          id='userName'
          onChange={e => {
            setUserName({ userName: e.target.value })
          }}
          className='border border-2 px-4 py-2 w-[100%] my-5'
        />
        <div className='btn-wrapper w-full grid grid-cols-2 grid-rows-1 gap-4 text-white font-medium text-2xl'>
          <button
            type='submit'
            className={
              isActive
                ? 'bg-blue-300 py-3 transition-all duration-300'
                : 'bg-blue-600 py-3'
            }
            onClick={() => {
              if (!userName.userName) {
                alert('Please enter a valid user name!!!! 😴😴')
              }
              if (isLive && userName.userName) {
                setIsActive(!isActive)
                setIsLive(!isLive)
              }
            }}
          >
            Submit
          </button>
          <button
            type='reset'
            className={
              isActive
                ? 'bg-blue-300 py-3 transition-all duration-300'
                : 'bg-blue-600 py-3'
            }
          >
            Reset
          </button>
        </div>
      </form>
      <Chats userName={userName} />
    </div>
  )
}

export default Home
