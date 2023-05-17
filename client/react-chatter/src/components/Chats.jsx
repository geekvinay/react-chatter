import React, { useState } from 'react'
import MessItem from '../components/MessItem'
import io from 'socket.io-client'

const socket = io('http://localhost:4321')

socket.on('connection', () => {
  console.log('Connected to server')
})

socket.on('message', message => {
  console.log('Received message:', message)
})

const Chats = ({ userName }) => {
  const [messages, setMessages] = useState([])
  const [mess, setMess] = useState({
    mess: '',
    time: '',
    sender: true,
    user: userName.userName
  })

  // Utility function for sending a message
  const addMessage = () => {
    if (!mess.mess) return false
    if (!userName) alert('Please enter an username!!')
    const now = new Date()
    socket.emit(
      'message',
      `${socket.id}@@@${mess.mess}@@@${now.toLocaleString()}@@@${mess.user}`
    )
    console.log(mess)
    setMessages([mess, ...messages])
    setMess({})
  }

  socket.on('message', temp => {
    var userID = temp.split('@@@')[1]
    var data = temp.split('@@@')[2]
    var time = temp.split('@@@')[3]
    var name = temp.split('@@@')[4]
    if (userID === socket.id) return false
    setMessages([
      { mess: data, time: time, sender: false, user: name },
      ...messages
    ])
  })

  return (
    <section className='border-2 border-gray-300 px-4 py-4'>
      <section className='messages h-[50vh] mb-5 flex flex-col-reverse overflow-x-hidden overflow-x-auto'>
        {messages.map(message => {
          return (
            <MessItem
              data={message.mess}
              time={message.time}
              key={message.time}
              sender={message.sender}
              userName={message.user}
            />
          )
        })}
      </section>
      <div className='inputWrapper h-12 grid grid-cols-3 grid-rows-1 items-center align-middle'>
        <input
          type='text'
          name='message'
          id='message'
          value={mess.mess}
          onChange={e => {
            var now = new Date().toLocaleString()
            setMess({
              mess: e.target.value,
              time: now,
              sender: true,
              user: userName.userName
            })
          }}
          className='border border-2 px-4 py-2 h-full w-[90%] my-5 col-span-2'
        />
        <button className='bg-black text-white h-full' onClick={addMessage}>
          Send
        </button>
      </div>
    </section>
  )
}

export default Chats
