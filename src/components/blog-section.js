import React from 'react'
import profileImg from '../../static/images/smiling-profile.jpg'

export default function BlogSection(props) {
  return (
    <div className="">
      <img src={profileImg} alt="" style={{ width: '100%', display: 'block' }} />
    </div>
  )
}

