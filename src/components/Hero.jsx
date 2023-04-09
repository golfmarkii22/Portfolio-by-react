import React from 'react'
import css from './Hero.module.scss'
import {motion} from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import { fadeIn } from '../utils/motion'
import { slideIn } from '../utils/motion'

function Hero() {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{once: false, amount: 0.25}}

        className={`innerWidth ${css.container}`}>
            <div className={css.upperElements}>

                <motion.span
                variants={fadeIn("right", "tween", 0.2, 1)}
                className='primaryText'>

                    Hey There, <br /> I'm Golf.
                </motion.span>
                {/* <motion.span
                variants={fadeIn("left", "tween", 0.4, 1)} className='secondaryText'>
                    I design beautiful simple
                    <br />
                    thing's And I love what i do
                </motion.span> */}
            </div>
            
            {/* person */}
            <motion.div 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}>
                <motion.img
                variants={slideIn("up", "tween", 0.5, 1.3)}
                src="./person2.png" alt="" />
            </motion.div>

            


            <div className={css.lowerElements}>
                {/* <motion.div
                variants={fadeIn("right", "tween", 0.3, 1)}
                className={css.experience}>

                    <div className="primaryText">1</div>
                    <div className="secondaryText">
                        <div>
                            Years
                        </div>
                        <div>
                            Experience
                        </div>
                    </div>
                </motion.div> */}
                
                {/* <motion.div
                variants={fadeIn("left", "tween", 0.5, 1)}
                className={css.certificate}>
                    <img src="./certificate.png" alt="" />
                    <span>CERIFIED PROFATIONAL</span>
                    <span>UI/UX DESIGNER</span>
                </motion.div> */}


                {/* email */}

            <a href="mailto:golfmarkii22@gmail.com" className={css.email}>
                Golfmarkii22@gmail.com
            </a>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero
