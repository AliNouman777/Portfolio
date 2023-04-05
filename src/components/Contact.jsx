import React from 'react'
import vg from "../images/contact.png"
import "../styles/Contact.scss"
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase"

const Contact = () => {

    const [dataarray, setdataarray] = React.useState({
        name: "",
        Email: "",
        message: ""
    });

    const [bool, setbool] = React.useState(false)

    async function submitHandclick(e) {
        e.preventDefault();
        const { name, Email, message } = dataarray;

        try {
            setbool(true)
            await addDoc(collection(db, "contacts"), {
                name,
                Email,
                message,
            })

            setdataarray(prev => {
                return {
                    ...prev,
                    message: "",
                    name: "",
                    Email: ""
                }
            })

            toast.success("Message Send")
            setbool(false)
        } catch (error) {
            toast.error("Error");
            setbool(false)
        }
    }

    function handlechange(e) {
        setdataarray(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <section id='contact' className='contact'>
            <h1>Contact Me</h1>
            <div>

                    <motion.form
                        initial={{
                            y:"100%"
                        }}
                        whileInView={{
                            y:"0%"
                        }}
                        transition={{
                            duration:1
                        }}
                        action='POST'
                        onSubmit={submitHandclick}
                    >
                        <h3>Contact Form</h3>
                        <input
                            type="text"
                            required
                            name="name"
                            id="name"
                            onChange={(e) => handlechange(e)}
                            value={dataarray.name} placeholder='Enter your name'
                        />
                        <input
                            value={dataarray.Email}
                            type="email"
                            onChange={(e) => handlechange(e)}
                            required
                            name="Email"
                            id="Email" placeholder='Enter your Email'
                        />
                        <textarea
                            name="message"
                            required
                            onChange={(e) => handlechange(e)}
                            value={dataarray.message} id="message" placeholder="Enter your message"></textarea>
                        <div className='btn'>
                            <button
                                className={bool ? "disablebtn" : ""}
                                disabled={bool}>
                                Submit
                            </button>
                        </div>
                    </motion.form>

                <motion.div
                    initial={{
                        x: "100%"
                    }}
                    whileInView={{
                        x: "0%"
                    }}
                    transition={{
                        duration: 1
                    }}
                >
                    <img src={vg} alt="Contactimage" />
                </motion.div>
            </div>
        </section >
    )
}

export default Contact
