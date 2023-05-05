import React from 'react'
import './HeaderCard.css'

function HeaderCard() {
    return (
        <div className='Header-card'>
          <img className='profile-pic' src="./images/profile.png" alt='profile-pic'></img>
          <p><b>My Coding Profiles</b></p>
        </div>
      )
}

export default HeaderCard