
import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GET_ALL_POST } from '../graphql/query'

function BlogList() {
  const [page,setPage] = useState(1)
  const {loading,error,data} = useQuery(GET_ALL_POST(page))
  
  if(loading) return <>loading...</>
  if(error) return <>Error :(</>
   
  return (
    <div class="mt-6">
      <table class="table-auto w-full">
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-2 text-2xl text-gray-500">Title</th>
      </tr>
      </thead>
      <tbody className="bg-white">
      {data.posts.data.map((data)=>{
        return (
          <tr className="whitespace-nowrap">
          <td key={data.id} className="px-6 py-4 text-sm text-gray-500 text-2xl"><Link to={`/post/${data.id}`}>{data.title}</Link></td>
          </tr>
        )
      })}
      </tbody>
      </table>
      <button className="bg-blue-500 hover:bg-blue-700 text-white mx-6 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"onClick={()=>setPage((prev)=>prev-1)} disabled={page===1}>Prev</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"onClick={()=>setPage((prev)=>prev+1)}>Next</button>
    </div>
  )
}

export default BlogList
