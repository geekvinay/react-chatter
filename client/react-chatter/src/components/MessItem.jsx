import React from 'react'

const MessItem = ({ data, time, sender, userName }) => {
  var classNames = [
    'w-[70%] px-4 py-2 mb-4 mx-4 rounded-xl border-4 border-gray-200',
    sender ? 'bg-blue-400 self-end' : 'bg-gray-300'
  ].join(' ')
  return (
    <div className={classNames}>
      <span className='message block'>{data}</span>
      <span className='bottomWrapper flex justify-between'>
        <span className='time block'>{time}</span>
        <span className='userName'>{userName ? userName : 'hamcker'}</span>
      </span>
    </div>
  )
}

export default MessItem
