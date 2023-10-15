import React from 'react'
import './footer.css'
import gpt3Logo from "../../assets/MyLDB_logo.svg"
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to have thousands of books in your home?</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="" />
          <p>47, Jyure-ro, Sasang-gu, Busan, South Korea <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>47, Jyure-ro, Sasang-gu, Busan, South Korea</p>
          <p>+82 10 8277-7117</p>
          <p>mgmediajay@gmail.com</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>@2023 MyLDB. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer