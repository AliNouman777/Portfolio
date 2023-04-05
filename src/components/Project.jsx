import React from 'react';
import "../styles/Project.scss";
import data from "../data.js"
import Projectitem from "../components/Projectitem"

const Project = () => {

  const elem = data.map((i) => {
    return <Projectitem key={i.id} item={i} />
  })

  return (
    <>
      <section id='project' className='project' >
        <h1>Latest projects</h1>
        <div>
            {elem}
        </div>
      </section>
    </>
  )
}

export default Project
