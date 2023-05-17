import React, { useState } from 'react'
import Chats from '../components/Chats'
import '../assets/Chat'
import RoomComp from '../components/RoomComp'

const Room = () => {
  const [userName, setUserName] = useState({ userName: '' })
  const [roomID, setRoomID] = useState({ rID: '' })
  const [joinRoom, setJoinRoom] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isLive, setIsLive] = useState(true)
  const [isReset, setIsReset] = useState(false)
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
          <button
            type='submit'
            className={
              isActive
                ? 'bg-blue-300 py-3 transition-all duration-300'
                : 'bg-blue-600 py-3'
            }
            onClick={() => {
              if (!userName.userName && !roomID.rID) {
                alert('Please enter a valid user name and room name!!!! 😴😴')
              } else if (!userName.userName) {
                alert('Please enter a valid user name!!!! 😴😴')
              } else if (!roomID.rID) {
                alert('Please enter a valid Room Name!!!! 😴😴')
              }
              if (isLive && userName.userName && roomID.rID) {
                setIsActive(!isActive)
                setIsLive(!isLive)
                setIsReset(!isReset)
              }
            }}
          >
            Submit
          </button>
          <button
            type='reset'
            className={
              isReset
                ? 'bg-blue-600 py-3 transition-all duration-300'
                : 'bg-blue-300 py-3'
            }
            onClick={() => {
              setIsActive(!isActive)
            }}
          >
            Reset
          </button>
        </div>
      </form>
      <RoomComp userName={userName} roomID={roomID} joinRoom={joinRoom} />
    </div>
  )
}

export default Room
