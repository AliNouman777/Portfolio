import React from 'react'
import "../styles/Footer.scss"
const Footer = () => {
    return (
        <footer className='footer'>


            <div>
                <h1> <a href="/#Home">Portfolio</a> </h1>
                <div>
                    <a href="mailto:nomib508@gmail.com" target="_blank" rel="noreferrer"><i class="fa fa-envelope"> Email</i></a>

                    <a href="https://www.linkedin.com/in/ali-nouman-84ab7721b/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <i class="fa-brands fa-linkedin fa-beat-fade"> Linked In</i>
                    </a>

                </div>
            <h4>© Copyright - Ali Nouman 2023 </h4>

            </div>

        </footer>
    )
}

export default Footer
