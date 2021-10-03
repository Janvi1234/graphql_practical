
import { useQuery } from '@apollo/client'
import React from 'react'
import { useRouteMatch } from 'react-router'
import { GET_POST } from '../graphql/query'

function Post(props) {
  const route = useRouteMatch()
  const id= route.params.id
  const {loading,error,data}=useQuery(GET_POST(id))
  if(loading) return <>loading...</>
  if(error) return <>Error :(</>
 
  return (
    <div className="m-6" >
      <h3 className="text-5xl font-medium text-gray-500">Blog Details</h3>

      <br/>
      <hr/>
      <br/>
      <h5 className="text-2xl font-medium text-gray-500 ">Title</h5>
      <div className="text-gray-400 text-xl">{data.post.title}</div>
      <br/>
      <h5 className="text-2xl font-medium text-gray-500">Description</h5>
      <div className="text-gray-400 text-xl">{data.post.body}</div>
    </div>
  )
}

export default Post
