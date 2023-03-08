import "./style.scss"
import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa"
import ContenWrapper from "../contentWrapper/ContentWrapper"


const Footer = () => {
  return (
    <div className="footer">
      <ContenWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempore praesentium quasi nulla omnis, commodi ipsum. Nulla eos quas praesentium beatae molestiae cum! Quis laudantium laborum nostrum accusantium exercitationem voluptates.</div>
        <div className="socialIcons">
          <span className="icon"><FaFacebookF /></span>
          <span className="icon"><FaInstagram /></span>
          <span className="icon"><FaTwitter /></span>
          <span className="icon"><FaLinkedin /></span>
        </div>
      </ContenWrapper>
    </div>
  )
}

export default Footer
