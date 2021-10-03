
import React from 'react'
import { Link,useHistory } from 'react-router-dom'

function Header() {
  const history = useHistory()
  return (
    <div className="bg-blue-500 p-5">
      <nav className="flex justify-between text-white">
        <Link to='/'>Home</Link>
        <button onClick={()=>{history.push('/add')}}>Create Post</button>
      </nav>
    </div>
  )
}

export default Header
