import React from 'react'

function Banner(props) {
  return (
    <div className='bannerImg my-4 my-md-5 py-3 py-md-5'>
        <h1 className='title_one text-white'>{props.title}</h1>
    </div>
  )
}

export default Banner