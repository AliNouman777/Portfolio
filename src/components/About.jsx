import "../styles/about.scss"
import me from "../images/vectorme.png"
import { motion } from "framer-motion"

const About = () => {
    const anim = {
        initial: {
            x: "-100%"
        },
        whileInView: {
            x: "0%"
        }
    }


    return (
        <section id="about" className="about">

            <h1>About Me</h1>
            <div>
                <motion.div
                    initial={anim.initial}
                    whileInView={anim.whileInView}
                    transition={{duration:0.5}}
                    className="imgdiv">
                    <img src={me} alt="me" />
                </motion.div>
                <div className="headingdiv">
                    <motion.h2
                        initial={{ y: "-100%" }}
                        whileInView={{ y: "0%" }}
                        transition={{duration:0.8}}
                    >I am
                        <span> Developer</span>
                    </motion.h2>
                    <motion.p
                    className="aboutpara"
                     initial={{ y: "100%" }}
                     whileInView={{ y: "0%" }}
                     transition={{duration:0.5}}
                    >I am a dedicated React Frontend Developer with over a year of professional experience, specializing in creating dynamic and responsive web applications. I possess a deep understanding of <b> ReactJS, ExpressJS, NodeJS, MongoDB, HTML, CSS, and JavaScript,</b> enabling me to deliver high-quality solutions that meet client and user needs. My proficiency in various frameworks, including Chakra UI and Bootstrap, allows me to design intuitive and aesthetically pleasing user interfaces. Additionally, I have hands-on experience in developing robust back-end services using Node.js. My focus is on building scalable applications that not only enhance user experiences but also contribute to the overall success of projects. </motion.p>
                </div>
            </div>

        </section>
    )
}

export default About
