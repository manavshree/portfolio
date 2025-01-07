import React from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
import { useRef,useEffect } from 'react'
import Typed from "typed.js"

const Home = () => {
 
    const typedRef=useRef(null)

    useEffect(() => {

      const options={
      strings:["Welcome To My Port-Folio","My Name is Manav Shree","Crafting Digital Solutions"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed=new Typed(typedRef.current,options)
    
      return () => {
        typed.destroy();
      }
    }, [])

    
    return (
    <>
    <div className="container home " data-aos='fade-right' data-aos-duration="6000" id='home'>
      <div className="left" data-aos='fade-right' data-aos-duration="6000">
        <h1 ref={typedRef}></h1>
        <a href={pdf} download="Resume" className="btn btn-outline-warning my-3">Download my Resume</a>
      </div>
      <div className="right" data-aos='fade-left' data-aos-duration="6000">
        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home