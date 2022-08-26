import React from 'react'

function Banner(props) {
  return (
    <div className='bannerImg my-5 py-5'>
        <h1 className='title_one text-white'>{props.title}</h1>
    </div>
  )
}

export default Banner