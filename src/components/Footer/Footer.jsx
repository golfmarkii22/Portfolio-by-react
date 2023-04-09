import React from 'react'
import css from './Footer.module.scss'
import { footerVariants, staggerChildren } from '../../utils/motion'
import { motion } from 'framer-motion'
import {FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';








const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport ={{ once: false, amount: 0.25}}

    className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
            <div className={css.left}>
                <span className="primaryText">
                    Let's make something <br /> amazing together.
                </span>

                <span className="primaryText">
                    Start by <a href="mailto:golfmarkii22@gmail.com">Saying Hi</a>
                </span>

                <div className={css.social}>
                    <li><a href="https://line.me/ti/p/vWlBG9e9lm" target='blank_'><FaLine/></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100073587183514" target='blank_'><FaFacebook/></a></li>
                    <li><a href="https://instagram.com/golf_siriwarin?igshid=ZmZhODViOGI=" target='blank_'><FaInstagram/></a></li>   
                </div>
            
                
            </div>

            <div className={css.right}>
                <div className={css.info}>
                    <span className="primaryText">Infomation</span>
                    <p>277 m.5 dongpatthana, Namsom, Udonthani, Thailand 41210</p>
                </div>

                <div className={css.menu}>
                    <li>Service</li>
                    <li>Works</li>
                    <li>Notes</li>
                    <li>Experience</li>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer
