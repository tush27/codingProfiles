import React from 'react'
import ProfileCard from './ProfileCard/ProfileCard'
import "./ProfileSection.css";

function ProfileSection() {
  return (
    <div className="profile-section-container">
      <div className='card-holder'>
        <ProfileCard props={{title:"LeetCode",imgUrl:"./images/lc.png",profileUrl:"https://leetcode.com/tush27/"}}/>
        <ProfileCard props={{title:"GeeksForGeeks",imgUrl:"./images/gfg.png",profileUrl:"https://auth.geeksforgeeks.org/user/ttusharbe19/practice/"}}/>
        <ProfileCard props={{title:"Coding Ninjas",imgUrl:"./images/cn.jpg",profileUrl:"https://www.codingninjas.com/codestudio/profile/91453a0d-d66f-4671-88e2-3d7368c7390a"}}/>
      </div>
      <div className='side-image'>
        <img className='code-img' src="./images/side-img.gif" alt="coding" />
      </div>
    </div>
  )
}

export default ProfileSection