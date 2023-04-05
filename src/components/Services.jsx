import React from 'react'
import "../styles/Services.scss"
import "../styles/mediascreen.scss"
import { motion } from 'framer-motion'

const Services = () => {
  const animation = {
    initial: {
      x: "-100%"
    },
    whileInView: {
      x: "0%"
    },
    transition: {
      duration: 1
    },
    transition1: {
      duration: 1.1
    },
    transition2: {
      duration: 1.2
    }
  }

  return (
    <div id='services' className='services'>
      <h1>My Services</h1>

      <div>
        <motion.div
          initial={animation.initial}
          whileInView={animation.whileInView}
          transition={animation.transition}
        >
          <i className='fa fa-paint-brush'></i>

          <h2>Graphic Design</h2>
          <p>I have experience of making beauty design "My design process involves extensive research and collaboration with clients to ensure that the final product aligns with their vision and goals." </p>

          <div className='btn'>
            <button>
              <a href="/#contact">Contact</a>
            </button>

            <button>
              <a href="https://www.linkedin.com/in/ali-nouman-84ab7721b/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin fa-beat-fade"> Linked In</i>
              </a>
            </button>
          </div>

        </motion.div>

        <motion.div
          initial={animation.initial}
          whileInView={animation.whileInView}
          transition={animation.transition1}
        >
          <i class="fa-solid fa-network-wired"></i>
          <h2>Networking</h2>
          <p> I have 1 year experience in networking.Creating & Maintaince of LAN networking.Creating communication betweem diffence organizaions.Solve bugs of Computer operting system. Maintaince of Printers, And also have knowledge of CCTV installation     </p>
          
          <div className='btn'>
            <button>
              <a href="/#contact">Contact</a>
            </button>

            <button>
              <a href="https://www.linkedin.com/in/ali-nouman-84ab7721b/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin fa-beat-fade"> Linked In</i>
              </a>
            </button>
          </div>

        </motion.div>


        <motion.div
          initial={animation.initial}
          whileInView={animation.whileInView}
          transition={animation.transition2}
        >
          <i className="fa fa-globe" aria-hidden="true"></i>
          <h2>Web Development</h2>
          <p>As a web developer, I specialize in  dynamic and responsive websites that provide engaging user experiences.I am passionate about web development and love the challenge of solving complex problems and building innovative solutions that help businesses grow and succeed. </p>

          <div className='btn'>
            <button>
              <a href="/#contact">Contact</a>
            </button>

            <button>
              <a href="https://www.linkedin.com/in/ali-nouman-84ab7721b/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin fa-beat-fade"> Linked In</i>
              </a>
            </button>
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default Services
