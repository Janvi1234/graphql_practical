
import React from 'react'
import BlogList from '../components/BlogList'

function Home() {
  return (
    <div>
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="Title" className="opacity-20 h-64" width="100%"/>
        <h3 className="absolute z-10 center top-1/3 left-1/2 text-3xl text-blue-500 uppercase">Blog Title</h3>
      </div>
      <BlogList/>
    </div>
  )
}

export default Home
