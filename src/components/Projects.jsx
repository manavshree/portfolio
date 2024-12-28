import React from 'react'
import projects from './data/projects.json'

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" data-aos='fade-left' id='projects'>
        <h1>PROJECTS:</h1>
        <div className="row d-flex justify-content-center align-content-center" >
          {
            projects.map((data) => (
            <>
            <div key={data.id} 
            className="my-3 col-sm-6 col-md-4  col-lg-3 mx-4"
            >
              <div className="card bg-dark text-light" data-aos='flip-right' style={{ width:"18rem" }}>
                <div className="img d-flex justify-content-center align-content-center -3 m-3 ">
                <img src={data.imageSrc} style={{
                  height:'200px',
                  width:'250px',
                  border:'1px solid yellow',
                  boxShadow:'5px 5px 10px 10px rgba(101, 175, 10, 0.5)',
                  borderRadius:'20px'
                }} className="card-img-top" alt="..." />

                </div>
                <div className="card-body text-center " data-aos='flip-left'>
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  {/* <a href={data.demo} className="btn btn-primary">Code</a> */}
                </div>
              </div>
            </div>
            </>))
          }
        </div>

      </div>
    </>
  )
}


export default Projects