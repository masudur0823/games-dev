import React from 'react'
import Layout from '../component/Layout/Layout'
import img from '../assets/images/blog_details_image.png'

function DevBlogDetails() {
  return (
    <Layout>
      <div className="container my-4 my-md-5">
        <img src={img} className="w-100" alt="" />
      </div>
    </Layout>
  )
}

export default DevBlogDetails