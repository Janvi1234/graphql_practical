
import React from 'react'
import { SocialIcon } from 'react-social-icons';
function Footer() {
  return (
    <div className="bg-gray-300
    text-3xl text-black 
    border-t-4 border-gray-500
    mt-6
    inset-x-0
    bottom-0
    p-4">
      <h3>Footer</h3>
      <div class="flex my-2">
      <SocialIcon url="https://linkedin.com/" className="mr-2"/>
      <SocialIcon url="https://twitter.com/" network="twitter" className="mr-2" />
      <SocialIcon url="https://facebook.com/" network="facebook" className="mr-2"/>
      </div>
    </div>
  )
}

export default Footer
