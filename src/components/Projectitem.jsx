import React,{useState} from 'react'
import "../styles/itemcard.scss";
import { delay, motion } from 'framer-motion';
const Projectitem = ({ item }) => {
  const [hoverstate,sethoverstate]=useState(false)

  function hoverfun(){
    sethoverstate(true)
  }

  function nohoverfun(){
    sethoverstate(false)
  }

  return (
    <motion.div
    initial={{
      x:"-100%"
    }}
    whileInView={{
      x:"0%"
    }}
    transition={{
      duration:1,
      delay:item.id%2===0?0.1:0
    }}
    className='pitem'>
      <div onMouseEnter={hoverfun} onMouseLeave={nohoverfun}>
        <img src={item.image} alt="project" />

       {hoverstate && <motion.div
       >
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></a>
        </motion.div>}
      </div>
    </motion.div>
  )
}

export default Projectitem
