import React, { useState } from 'react'
import Chats from '../components/Chats'
import '../assets/Chat'
import RoomComp from '../components/RoomComp'

const Room = () => {
  const [userName, setUserName] = useState({ userName: '' })
  const [roomID, setRoomID] = useState({ rID: '' })
  const [joinRoom, setJoinRoom] = useState(false)
  return (
    <div className='px-20 py-20 h-full grid grid-cols-2 grid-rows-1 box-border'>
      <form
        action='/'
        className='details flex flex-col pr-40'
        onSubmit={e => {
          e.preventDefault()
          setJoinRoom(true)
        }}
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
        <label htmlFor='roomID' className='cursor-pointer'>
          Please enter your roomID to join the room
        </label>
        <input
          type='text'
          name='roomID'
          id='roomID'
          onChange={e => {
            setRoomID({ rID: e.target.value })
          }}
          className='border border-2 px-4 py-2 w-[100%] my-5'
        />
        <div className='btn-wrapper w-full grid grid-cols-2 grid-rows-1 gap-4 text-white font-medium text-2xl'>
          <button type='submit' className='bg-blue-600 py-3'>
            Submit
          </button>
          <button type='reset' className='bg-blue-600 py-3'>
            Reset
          </button>
        </div>
      </form>
      <RoomComp userName={userName} roomID={roomID} joinRoom={joinRoom} />
    </div>
  )
}

export default Room
