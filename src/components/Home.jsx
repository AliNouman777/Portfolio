import React from 'react';
import { motion } from 'framer-motion';
import "../styles/Home.scss"
import Me from "../images/pf.png"
import Typewriter from 'typewriter-effect';

const Home = () => {

  const animation = {
    initial: {
      x: "60%"
    },
    whileInView: {
      x: "0%"
    }
  }

  const animations = {
    initial: {
      y: '-10%'
    },
    whileInView: {
      y: "0%"
    }

  }

  const btn_animation={
    initial:{
      y:"-100%"
    },
    whileInView:{
      y:"-0%"
    }
  }


  return (
    <>
      <section id='Home' className='home'>

      <motion.div
          initial={
            {
              y: "-5%",
              opacity: "0"
            }
          }
          whileInView={{
            y: "0%",
            opacity: "1"
          }}

          transition={{
            duration: 3,
            opacity: 1,
            repeat: Infinity,
            repeatType: "reverse",
            type: "tween"
          }}

        >
          <img src={Me} alt="Ali nouman" />
        </motion.div>

        <motion.div>
          <h3>Hello, its's Me</h3>
          <span>
            <motion.h1
              initial={animation.initial}
              whileInView={animation.whileInView}
              transition={{ duration: 1 }}
            >Ali Nouman
            </motion.h1>
          </span>
          <h2>And i am &nbsp;
            <span className='typerwriter'> <Typewriter options={{
              strings: [" A Developer", " A Designer"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter"
            }} /></span>
          </h2>

          <motion.div className='icon' >
            <motion.div
              initial={animations.initial}
              whileInView={animations.whileInView}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <a href="https://www.facebook.com/login/" target={"blank"}><i className="fa-brands fa-facebook-f"></i></a>
            </motion.div>

            <motion.div
              initial={animations.initial}
              whileInView={animations.whileInView}
              transition={{
                duration: 0.55,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <a href="https://twitter.com/?lang=en" target={"blank"}><i className="fa-brands fa-twitter"></i></a>
            </motion.div>

            <motion.div

              initial={animations.initial}
              whileInView={animations.whileInView}
              transition={{
                duration: 0.60,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <a href="https://github.com/alinouman-ops" target={"blank"}><i className="fa-brands fa-github"></i></a>
            </motion.div>

            <motion.div
              initial={animations.initial}
              whileInView={animations.whileInView}
              transition={{
                duration: 0.65,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <a href="https://instagram.com/ali_nouuman?igshid=YmMyMTA2M2Y=" target={"blank"}><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </motion.div>
          </motion.div>

          <motion.div>
            <motion.button
              initial={btn_animation.initial}
              whileInView={btn_animation.whileInView}
              transition={{
                duration: 1
              }}
              className='btn1'>
              <a
                className='hireme'
                href="mailto:nomib508@gmail.com">Hire me</a>
            </motion.button>
            <motion.button
              initial={btn_animation.initial}
              whileInView={btn_animation.whileInView}
              transition={{
                duration: 0.5
              }}
              className='btn1'>
              <a
                href="#project">Projects <i className="fa-solid fa-arrow-right"></i> </a>
            </motion.button>
          </motion.div>
        </motion.div>

      

      </section>
    </>
  )
}

export default Home
