import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-scrren aspect-video  bg-gradient-to-r from-black pt-[30%] px-12 absolute text-white'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className=' rounded-lg hover:bg-opacity-80 text-black p-4 px-12 text-xl bg-white'>Play</button>
        <button className='hover:bg- mx-2 rounded-lg bg-opacity-50 text-white p-4 px-12 text-xl bg-slate-500'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle