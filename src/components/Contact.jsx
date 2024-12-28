import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact' >
      <h1>CONTACT ME:</h1>
      <div className="contact-icons" data-aos="zoom-out-up">
        <a href='https://github.com/manavshree' target='_blank'  className="items"><FaGithub className='icons'/></a>
        <a href='https://www.instagram.com/manavshree12/profilecard/?igsh=MmMydjFlbWczZnE2' className="items" target='_blank'><FaInstagramSquare  className='icons' /></a>
        <a href='https://www.linkedin.com/in/manav-shree-27a65b309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="items" target='_blank'><FaLinkedin  className='icons'/></a>
        <a href='mailto:"manavshree12@gmail.com"' target='_blank' className="items"><SiGmail className='icons' /></a>
      </div>
    </div>
    </>
  )
}

export default Contact