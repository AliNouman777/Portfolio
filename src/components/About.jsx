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
                    >I am a React Frontend developer . I have  more than 1 year experience, With a deep understanding of <b>ReactJS, ExpressJS , NodeJS ,Mongodb, HTML, CSS, and JavaScript</b>. I have experience of using different frameworks like <b>Chakra UI(React) , Bootstrap</b>. And i have experience of creating Backend using <b>Node js</b> I specialize in building responsive and scalable web applications that meet the needs of clients and users alike. </motion.p>
                </div>
            </div>

        </section>
    )
}

export default About
