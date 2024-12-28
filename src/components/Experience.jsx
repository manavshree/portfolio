import React from 'react'
import experience from './data/experience.json'

const Experience = () => {
  return (
    <>
    <div className="container ex " data-aos='fade-left' id='experience'>
      <h1>EDUCATION:</h1>
      {
        experience.map((data) => {
          return (
            <>
            <div key={data.id} className="ex-items text-center"  data-aos='fade-up-right'>
              <div className="left">
                <img id='icon-img' src={`/assets/${data.imageSrc}`} alt="" />
              </div>
              <div className="right"> 
                <h2>{data.role}</h2>
                <h3>{data.standard}</h3>
                
                <h4><span style={{color:'yellow'}}>{data.startDate}{" To "} {data.endDate+" "} </span>, {data.location}</h4>
                <span style={{color:'yellow'}}>
                <h5>{"Exhibiting an average mark of: "}{data.gpa}</h5>
                </span>
              </div>
            </div>


            </>
          )
        })
        
      }
    </div>
    </>
  )
}

export default Experience