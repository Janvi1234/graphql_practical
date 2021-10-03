
import { useMutation,gql } from '@apollo/client';
import React from 'react'
import { useState } from 'react/cjs/react.development'
const ADD_POST =  gql`
mutation createPost($input:CreatePostInput!){
  createPost(input:$input){
    title
    id
  }
}
`
function CreatePost() {
  const initial={
    title:'',
    body:''
  }
  const [createPost, { data }] = useMutation(ADD_POST);
  const [Info,setInfo]=useState(initial)
  const handleChange = (e) =>{
    e.preventDefault();
      const {name,value} = e.target
      setInfo({...Info,
      [name]:value
      })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    createPost({variables:{input:Info}})
    .then(details=>{
    alert(`Your ID is ${details.data.createPost.id}`)
    setInfo(initial)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <div class="w-full max-w-xs mt-6 ml-4" >
      <h3 className="text-3xl font-medium text-gray-500">Create New Post</h3>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={(e)=>handleSubmit(e)}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        Title
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter title" name="title" value={Info.title} required onChange={handleChange}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
        Description
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" name="body" value={Info.body} required onChange={handleChange} placeholder="Enter description"/>
     {/* { <p class="text-red-500 text-xs italic">Please choose a description.</p>} */}
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        ADD
      </button>
    </div>
  </form>
</div>
  )
}

export default CreatePost
