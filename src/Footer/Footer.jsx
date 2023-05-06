import React from 'react'
import "./Footer.css"

function Footer() {
  let ch='</>';
  return (
    <footer>
    <a href="https://github.com/tush27"><img src="./images/github-logo.png" alt="github" className="social-img"/></a>
    <a href="https://www.linkedin.com/in/tush27/"><img src="./images/linkedin-logo.png" alt="linkedIn" className="social-img"/></a>
    <a href="https://www.instagram.com/tushar.1301/"><img src="./images/instagram-logo.png" alt="instagram"
        className="social-img"/></a>
        <hr style={{backgroundColor: "white", border: "none",height: "1px",opacity:"1",margin:"5px"}}/>
    Made with <b>{ch}</b> by <i>Tushar</i>
</footer>
  )
}

export default Footer